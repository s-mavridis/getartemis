import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2 } from "lucide-react";
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

const formSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email" }).max(255),
  ehrConsent: z.boolean().refine((val) => val === true, {
    message: "Please accept both agreements",
  }),
  termsConsent: z.boolean().refine((val) => val === true, {
    message: "Please accept both agreements",
  }),
});

type FormData = z.infer<typeof formSchema>;

interface LeadCaptureModalProps {
  open: boolean;
  onOpenChange: (completed: boolean) => void;
  prefilledEmail?: string;
}

export function LeadCaptureModal({ open, onOpenChange, prefilledEmail = "" }: LeadCaptureModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const { toast } = useToast();
  const emailInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: prefilledEmail,
      ehrConsent: false,
      termsConsent: false,
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
      
      const { error } = await supabase.from("leads").insert({
        email: data.email,
        ad_source: adSource,
        ehr_consent_given: true,
        ehr_consent_timestamp: new Date().toISOString(),
      });

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Already registered",
            description: "This email is already registered.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
        return;
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
      form.reset({
        email: "",
        ehrConsent: false,
        termsConsent: false,
      });
    }, 200);
  };

  const isFormValid = form.watch("email") && form.watch("ehrConsent") && form.watch("termsConsent");

  return (
    <Dialog open={open} onOpenChange={() => handleClose(false)}>
      <DialogContent className="sm:max-w-[500px] p-4 sm:p-8 rounded-2xl">
        {!isSuccess ? (
          <>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">
                Get Your Personalized Risk Assessment
              </h2>
              <p className="text-muted-foreground">
                We'll analyze your health records to identify cancer screening opportunities you might be missing. Join our early access program—we'll email you connection instructions within 24 hours.
              </p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Email address</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          ref={emailInputRef}
                          placeholder="you@example.com" 
                          type="email"
                          className="rounded-lg border-border px-4 py-3"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="space-y-3">
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
                        <div className="space-y-1 leading-tight">
                          <FormLabel className="text-sm font-normal text-foreground leading-snug">
                            I authorize Artemis to securely access my electronic health records for cancer risk assessment. I understand my data is encrypted and I can revoke access anytime.{" "}
                            <a href="#" className="text-blue-600 underline hover:text-blue-700">
                              View Privacy Policy
                            </a>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
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
                        <div className="space-y-1 leading-tight">
                          <FormLabel className="text-sm font-normal text-foreground leading-snug">
                            I agree to the{" "}
                            <a href="#" className="text-blue-600 underline hover:text-blue-700">
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
                  type="submit" 
                  className="w-full rounded-full px-8 py-4 font-semibold"
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
                    "Authorize Access"
                  )}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. Your data is never shared.
                </p>
              </form>
            </Form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
            
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                You're on the list!
              </h2>
              <p className="text-muted-foreground mt-2">
                Check your email ({submittedEmail}) for next steps. We'll send EHR connection instructions within 24 hours.
              </p>
            </div>
            
            <p className="text-sm text-muted-foreground">
              You're one of 523 people getting early access to personalized cancer prevention.
            </p>
            
            <Button 
              onClick={() => handleClose(true)} 
              variant="outline" 
              className="w-full rounded-full px-8 py-3 mt-6"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
