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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { getAdSource } from "@/lib/utm";

// Phone validation regex for US numbers
const phoneRegex = /^(\+1)?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const step1Schema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
  phone: z.string().trim().regex(phoneRegex, { message: "Please enter a valid US phone number" }),
  ageRange: z.string().min(1, { message: "Please select your age range" }),
});

const step2Schema = z.object({
  ehrConsent: z.boolean().refine((val) => val === true, {
    message: "You must authorize health record access to continue",
  }),
  termsConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms of Service and Privacy Policy",
  }),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;

interface LeadCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LeadCaptureModal({ open, onOpenChange }: LeadCaptureModalProps) {
  const [step, setStep] = useState(1);
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const step1Form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      email: "",
      phone: "",
      ageRange: "",
    },
  });

  const step2Form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      ehrConsent: false,
      termsConsent: false,
    },
  });

  const onStep1Submit = (data: Step1Data) => {
    setStep1Data(data);
    setStep(2);
  };

  const onStep2Submit = async (data: Step2Data) => {
    if (!step1Data) return;

    setIsSubmitting(true);

    try {
      const adSource = getAdSource();
      
      const { error } = await supabase.from("leads").insert({
        email: step1Data.email,
        phone: step1Data.phone,
        age_range: step1Data.ageRange,
        ad_source: adSource,
        ehr_consent_given: data.ehrConsent,
        ehr_consent_timestamp: new Date().toISOString(),
      });

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Already registered",
            description: "This email is already on our waitlist.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
        return;
      }

      setStep(3);
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
    onOpenChange(false);
    // Reset after close animation
    setTimeout(() => {
      setStep(1);
      step1Form.reset();
      step2Form.reset();
      setStep1Data(null);
    }, 200);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {step === 1 && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                Get Your Personalized Risk Assessment
              </DialogTitle>
            </DialogHeader>
            
            <Form {...step1Form}>
              <form onSubmit={step1Form.handleSubmit(onStep1Submit)} className="space-y-6 mt-4">
                <FormField
                  control={step1Form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="you@example.com" 
                          type="email"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={step1Form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="(555) 123-4567" 
                          type="tel"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={step1Form.control}
                  name="ageRange"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age Range</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your age range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="<30">Under 30</SelectItem>
                          <SelectItem value="30-39">30-39</SelectItem>
                          <SelectItem value="40-49">40-49</SelectItem>
                          <SelectItem value="50-59">50-59</SelectItem>
                          <SelectItem value="60+">60+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" size="lg">
                  Continue
                </Button>
              </form>
            </Form>
          </>
        )}

        {step === 2 && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                Authorize Health Record Access
              </DialogTitle>
            </DialogHeader>
            
            <div className="mt-4 space-y-4 text-sm text-muted-foreground">
              <p>
                By clicking 'Authorize Access,' you consent to ArtemisAI securely accessing your electronic health records for the purpose of cancer and chronic disease risk analysis.
              </p>
              
              <div>
                <p className="font-medium text-foreground mb-2">We will access:</p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Past diagnoses and medical conditions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Medications and prescriptions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Lab results and imaging reports
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Family history information
                  </li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-foreground mb-2">We will NOT:</p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="text-destructive">✗</span> Share your data with third parties
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-destructive">✗</span> Store data longer than necessary
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-destructive">✗</span> Use your data for marketing
                  </li>
                </ul>
              </div>
              
              <p className="text-xs">
                This authorization complies with HIPAA regulations and you can revoke it at any time.
              </p>
            </div>
            
            <Form {...step2Form}>
              <form onSubmit={step2Form.handleSubmit(onStep2Submit)} className="space-y-4 mt-4">
                <FormField
                  control={step2Form.control}
                  name="ehrConsent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal">
                          I authorize ArtemisAI to access my electronic health records for risk assessment purposes. I understand I can revoke this authorization at any time.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={step2Form.control}
                  name="termsConsent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal">
                          I agree to the{" "}
                          <a href="#" className="text-primary hover:underline">
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a href="#" className="text-primary hover:underline">
                            Privacy Policy
                          </a>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Authorize Access"
                  )}
                </Button>
              </form>
            </Form>
          </>
        )}

        {step === 3 && (
          <div className="py-8 text-center space-y-6">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
            
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                You're on the list! 🎉
              </h2>
              <p className="text-muted-foreground">
                Thanks for joining ArtemisAI. Here's what happens next:
              </p>
            </div>
            
            <ul className="text-left space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>We'll email you within 24 hours with secure instructions to connect your EHR</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Our AI will analyze your health data (typically takes 24-48 hours)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>You'll receive your personalized risk assessment and screening recommendations</span>
              </li>
            </ul>
            
            <p className="text-sm text-muted-foreground">
              Keep an eye on your inbox:{" "}
              <span className="text-foreground font-medium">hello@artemisai.health</span>
            </p>
            
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                You're one of <span className="font-semibold text-foreground">523</span> people getting early access to personalized cancer prevention.
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
