import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { getAdSource } from "@/lib/utm";

const formSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
  ehrConsent: z.boolean().refine((val) => val === true, {
    message: "You must authorize health record access to continue",
  }),
  termsConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms of Service",
  }),
});

type FormData = z.infer<typeof formSchema>;

interface LeadCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LeadCaptureModal({ open, onOpenChange }: LeadCaptureModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      ehrConsent: false,
      termsConsent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log("email_entered", { timestamp: new Date().toISOString() });

    try {
      const adSource = getAdSource();
      console.log("consent_given", { timestamp: new Date().toISOString() });
      
      const { error } = await supabase.from("leads").insert({
        email: data.email,
        ad_source: adSource,
        ehr_consent_given: true,
        ehr_consent_timestamp: new Date().toISOString(),
      });

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Email already registered",
            description: "This email is already on our list. Check your inbox for next steps.",
            variant: "destructive",
          });
          console.log("modal_closed", { completed: false });
        } else {
          throw error;
        }
        return;
      }

      setSubmittedEmail(data.email);
      setIsSuccess(true);
      console.log("modal_closed", { completed: true });
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSuccess) {
      console.log("modal_closed", { completed: false });
    }
    onOpenChange(false);
    // Reset after close animation
    setTimeout(() => {
      setIsSuccess(false);
      setSubmittedEmail("");
      form.reset();
    }, 200);
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (newOpen) {
      console.log("modal_opened", { timestamp: new Date().toISOString() });
    }
    if (!newOpen) {
      handleClose();
    } else {
      onOpenChange(newOpen);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        {!isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                Get Your Personalized Risk Assessment
              </DialogTitle>
            </DialogHeader>
            
            <p className="text-sm text-muted-foreground text-center mt-2">
              We'll analyze your health records to identify cancer screening opportunities you might be missing. Join our early access program—we'll email you connection instructions within 24 hours.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="your.email@example.com" 
                          type="email"
                          className="h-12 text-base"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="ehrConsent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-1 h-5 w-5 min-w-[20px] focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <label className="text-sm leading-relaxed cursor-pointer" onClick={() => field.onChange(!field.value)}>
                            I authorize ArtemisAI to securely access my electronic health records for cancer risk assessment. I understand my data is encrypted and I can revoke access anytime.{" "}
                            <a href="#" className="text-primary hover:underline" onClick={(e) => e.stopPropagation()}>
                              View Privacy Policy
                            </a>
                          </label>
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
                            className="mt-1 h-5 w-5 min-w-[20px] focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <label className="text-sm leading-relaxed cursor-pointer" onClick={() => field.onChange(!field.value)}>
                            I agree to the{" "}
                            <a href="#" className="text-primary hover:underline" onClick={(e) => e.stopPropagation()}>
                              Terms of Service
                            </a>
                          </label>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 font-semibold text-base" 
                  disabled={isSubmitting}
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
          <div className="py-8 text-center space-y-6">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
            
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                You're on the list! ✓
              </h2>
              <p className="text-muted-foreground">
                Check your email ({submittedEmail}) for next steps. We'll send EHR connection instructions within 24 hours.
              </p>
            </div>
            
            <Button onClick={handleClose} variant="outline" className="w-full" size="lg">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
