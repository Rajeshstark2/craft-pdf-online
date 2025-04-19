
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Pricing = () => {
  const { toast } = useToast();
  
  const handlePurchase = () => {
    toast({
      title: "Payment Processing",
      description: "This is a demo. In a real app, this would redirect to Cashfree payment gateway.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h1>
      <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        Get lifetime access to all our premium features with a one-time payment. No subscriptions, no recurring fees.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Free Plan */}
        <div className="border border-border rounded-xl p-8 bg-card">
          <h2 className="text-2xl font-bold mb-2">Free</h2>
          <p className="text-muted-foreground mb-6">Basic tools for occasional use</p>
          <div className="text-3xl font-bold mb-6">₹0</div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-docucraft-500 mr-2 mt-0.5" />
              <span>Access to basic PDF tools</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-docucraft-500 mr-2 mt-0.5" />
              <span>File size limit: 10MB</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-docucraft-500 mr-2 mt-0.5" />
              <span>Ad-supported experience</span>
            </li>
            <li className="flex items-start text-muted-foreground">
              <AlertCircle className="h-5 w-5 mr-2 mt-0.5" />
              <span>Limited to 3 documents per day</span>
            </li>
            <li className="flex items-start text-muted-foreground">
              <AlertCircle className="h-5 w-5 mr-2 mt-0.5" />
              <span>Output files include watermark</span>
            </li>
            <li className="flex items-start text-muted-foreground">
              <AlertCircle className="h-5 w-5 mr-2 mt-0.5" />
              <span>No access to premium tools</span>
            </li>
          </ul>
          
          <Button variant="outline" className="w-full">Continue with Free</Button>
        </div>
        
        {/* Pro Plan */}
        <div className="border-2 border-docucraft-500 rounded-xl p-8 bg-card relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-docucraft-500 text-white text-sm font-bold px-4 py-1 rounded-full">
            RECOMMENDED
          </div>
          <h2 className="text-2xl font-bold mb-2">Lifetime Pro</h2>
          <p className="text-muted-foreground mb-6">Unlimited access forever</p>
          <div className="text-3xl font-bold mb-1">₹399</div>
          <div className="text-sm text-muted-foreground mb-6">One-time payment, lifetime access</div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-docucraft-500 mr-2 mt-0.5" />
              <span>Access to <strong>all</strong> PDF tools</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-docucraft-500 mr-2 mt-0.5" />
              <span>Unlimited document processing</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-docucraft-500 mr-2 mt-0.5" />
              <span>File size limit: 100MB</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-docucraft-500 mr-2 mt-0.5" />
              <span>No watermarks on output files</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-docucraft-500 mr-2 mt-0.5" />
              <span>Ad-free experience</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-docucraft-500 mr-2 mt-0.5" />
              <span>Priority processing</span>
            </li>
          </ul>
          
          <Button className="w-full bg-docucraft-500 hover:bg-docucraft-600" onClick={handlePurchase}>
            Get Lifetime Access
          </Button>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Is this really a one-time payment?</h3>
            <p className="text-muted-foreground">
              Yes, you pay once and get lifetime access to all current and future Pro features. No subscriptions or recurring charges.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">What payment methods do you accept?</h3>
            <p className="text-muted-foreground">
              We accept all major credit/debit cards, UPI, net banking, and wallet payments through Cashfree payment gateway.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Can I get a refund?</h3>
            <p className="text-muted-foreground">
              We offer a 7-day money-back guarantee if you're not satisfied with our service.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Is my data secure when using DocuCraft?</h3>
            <p className="text-muted-foreground">
              Yes, your files are processed directly in your browser. We don't store your documents on our servers.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Will I get access to new tools added in the future?</h3>
            <p className="text-muted-foreground">
              Absolutely! Your Pro access includes all current and future tools we add to the platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
