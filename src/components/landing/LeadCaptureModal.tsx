import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { getAdSource } from "@/lib/utm";

// Standard form schema (requires EHR consent)
const standardFormSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email" }).max(255),
  ehrConsent: z.boolean().refine((val) => val === true, {
    message: "Please accept both agreements",
  }),
  termsConsent: z.boolean().refine((val) => val === true, {
    message: "Please accept both agreements",
  }),
  ehrConsentWilling: z.boolean().optional(),
});

// Support page form schema (EHR consent optional)
const supportFormSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email" }).max(255),
  termsConsent: z.boolean().refine((val) => val === true, {
    message: "Please accept the Terms of Service",
  }),
  ehrConsentWilling: z.boolean().optional(),
});

type StandardFormData = z.infer<typeof standardFormSchema>;
type SupportFormData = z.infer<typeof supportFormSchema>;
type FormData = StandardFormData | SupportFormData;

interface LeadCaptureModalProps {
  open: boolean;
  onOpenChange: (completed: boolean) => void;
  prefilledEmail?: string;
  landingPageSource?: string;
}

export function LeadCaptureModal({ open, onOpenChange, prefilledEmail = "", landingPageSource = "home" }: LeadCaptureModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const { toast } = useToast();
  const emailInputRef = useRef<HTMLInputElement>(null);

  const isSupportPage = landingPageSource === "support";
  const isSupport2Page = landingPageSource === "support2";
  const useSupportSchema = isSupportPage || isSupport2Page;

  const form = useForm<FormData>({
    resolver: zodResolver(useSupportSchema ? supportFormSchema : standardFormSchema),
    defaultValues: useSupportSchema
      ? {
          email: prefilledEmail,
          termsConsent: false,
          ehrConsentWilling: false,
        }
      : {
          email: prefilledEmail,
          ehrConsent: false,
          termsConsent: false,
          ehrConsentWilling: false,
        },
  });

  // Update email field when prefilledEmail changes or modal opens
  useEffect(() => {
    if (open && prefilledEmail) {
      form.setValue("email", prefilledEmail);
    }
  }, [open, prefilledEmail, form]);

  // Focus email field when modal opens
  useEffect(() => {
    if (open && !isSuccess) {
      setTimeout(() => {
        emailInputRef.current?.focus();
      }, 100);
    }
  }, [open, isSuccess]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const adSource = getAdSource();
      
      if (useSupportSchema) {
        // Support page: no direct EHR consent, just willingness
        const supportData = data as SupportFormData;
        const { error } = await supabase.rpc("upsert_lead", {
          p_email: supportData.email,
          p_ad_source: adSource,
          p_ehr_consent_given: false,
          p_ehr_consent_timestamp: null,
          p_email_only: true,
          p_landing_page_source: landingPageSource,
          p_ehr_consent_willing: supportData.ehrConsentWilling || null,
        });

        if (error) {
          throw error;
        }
      } else {
        // Standard flow with direct EHR consent
        const standardData = data as StandardFormData;
        const { error } = await supabase.rpc("upsert_lead", {
          p_email: standardData.email,
          p_ad_source: adSource,
          p_ehr_consent_given: true,
          p_ehr_consent_timestamp: new Date().toISOString(),
          p_email_only: false,
          p_landing_page_source: landingPageSource,
          p_ehr_consent_willing: null,
        });

        if (error) {
          throw error;
        }
      }

      console.log('consent_given');
      setSubmittedEmail(data.email);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: "Something went wrong",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = (completed: boolean = false) => {
    onOpenChange(completed || isSuccess);
    // Reset after close animation
    setTimeout(() => {
      setIsSuccess(false);
      setSubmittedEmail("");
      form.reset(
        useSupportSchema
          ? {
              email: "",
              termsConsent: false,
              ehrConsentWilling: false,
            }
          : {
              email: "",
              ehrConsent: false,
              termsConsent: false,
              ehrConsentWilling: false,
            }
      );
    }, 200);
  };

  const isFormValid = useSupportSchema
    ? form.watch("email") && form.watch("termsConsent")
    : form.watch("email") && (form.watch as any)("ehrConsent") && form.watch("termsConsent");

  return (
    <Dialog open={open} onOpenChange={() => handleClose(false)}>
      <DialogContent id="lead-capture-modal" className="w-[calc(100%-2rem)] max-w-[500px] p-4 sm:p-6 lg:p-8 rounded-2xl mx-auto">
        {!isSuccess ? (
          <>
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                {useSupportSchema ? "Help Your Family Member Get Started" : "Get Your Personalized Risk Assessment"}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                {useSupportSchema
                  ? "We'll reach out with a gentle, informative approach. Enter your email to get started—we'll send next steps within 24 hours."
                  : "We'll analyze your health records to identify cancer screening opportunities you might be missing. Join our early access program—we'll email you connection instructions within 24 hours."}
              </p>
            </div>
            
            <Form {...form}>
              <form id="lead-capture-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Email address</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          id="lead-email-input"
                          ref={emailInputRef}
                          placeholder="you@example.com" 
                          type="email"
                          className="rounded-lg border-border px-4 py-3 h-12 text-base"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="space-y-3">
                  {isSupportPage ? (
                    <>
                      {/* Info box for support page */}
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                        <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-blue-800 leading-snug">
                          <span className="font-medium">Important:</span> To provide a complete risk assessment, your family member will need to authorize access to their electronic health records in a future step.
                        </p>
                      </div>

                      {/* Optional EHR consent willing checkbox */}
                      <FormField
                        control={form.control}
                        name="ehrConsentWilling"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="h-5 w-5 rounded border-muted-foreground/30 mt-0.5"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-tight py-1">
                              <FormLabel className="text-xs sm:text-sm font-normal text-muted-foreground leading-snug">
                                I understand that my family member will need to authorize access to their electronic health records for a complete cancer risk assessment. I'm interested in facilitating this in the future.
                              </FormLabel>
                              <p className="text-xs text-muted-foreground/70 italic">
                                (Optional - helps us provide more accurate recommendations)
                              </p>
                            </div>
                          </FormItem>
                        )}
                      />
                    </>
                  ) : !useSupportSchema ? (
                    <FormField
                      control={form.control}
                      name="ehrConsent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="h-5 w-5 rounded border-border mt-0.5"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-tight py-1">
                            <FormLabel className="text-xs sm:text-sm font-normal text-foreground leading-snug">
                              I authorize Artemis to securely access my electronic health records for cancer risk assessment. I understand my data is encrypted and I can revoke access anytime.{" "}
                              <a href="/privacy" target="_blank" className="text-blue-600 underline hover:text-blue-700">
                                View Privacy Policy
                              </a>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  ) : null}
                  
                  <FormField
                    control={form.control}
                    name="termsConsent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="h-5 w-5 rounded border-border mt-0.5"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-tight py-1">
                          <FormLabel className="text-xs sm:text-sm font-normal text-foreground leading-snug">
                            I agree to the{" "}
                            <a href="/terms" target="_blank" className="text-blue-600 underline hover:text-blue-700">
                              Terms of Service
                            </a>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button 
                  id="lead-submit-button"
                  type="submit" 
                  className="w-full rounded-full px-8 h-12 text-sm sm:text-base font-semibold"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting || !isFormValid}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    useSupportSchema ? "Get Started" : "Authorize Access"
                  )}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. Your data is never shared.
                </p>
              </form>
            </Form>
          </>
        ) : (
          <div className="py-6 sm:py-8 text-center space-y-4">
            <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 mx-auto" />
            
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                You're on the list!
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-2">
                Check your email ({submittedEmail}) for next steps. We'll send {useSupportSchema ? "guidance on next steps" : "EHR connection instructions"} within 24 hours.
              </p>
            </div>
            
            <p className="text-xs sm:text-sm text-muted-foreground">
              You're one of 500+ people getting early access to personalized cancer prevention.
            </p>
            
            <Button 
              onClick={() => handleClose(true)} 
              variant="outline" 
              className="w-full rounded-full px-8 h-12 mt-6"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
