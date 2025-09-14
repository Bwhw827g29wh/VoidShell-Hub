import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Key, Clock, Shield, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const KeySystem = () => {
  const steps = [
    {
      step: 1,
      title: "Go to unlock tab",
      description: "Open the script hub and navigate to the unlock tab"
    },
    {
      step: 2,
      title: "Get key link",
      description: "Click 'Get Key' or copy the key link"
    },
    {
      step: 3,
      title: "Open in browser",
      description: "Paste the link in your browser"
    },
    {
      step: 4,
      title: "Complete verification",
      description: "Complete the steps and captcha verification"
    },
    {
      step: 5,
      title: "Handle redirects",
      description: "If redirected to random sites, just click back (don't download anything or complete surveys)"
    },
    {
      step: 6,
      title: "Navigate ads",
      description: "Each click may redirect to ad sites - just click the back button"
    },
    {
      step: 7,
      title: "Complete Linkvertise",
      description: "Complete the Linkvertise process to get your key"
    }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto container-padding section-spacing">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-6">
            <Key className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Key System Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            To unlock special features, you'll need an access key. Getting a key helps support the creator and keeps the project alive.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="card-glow">
            <CardHeader className="text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>24 Hour Access</CardTitle>
              <CardDescription>
                Each key is valid for 24 hours of uninterrupted access
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="card-glow">
            <CardHeader className="text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>Universal Access</CardTitle>
              <CardDescription>
                One key grants access to all available scripts
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="card-glow">
            <CardHeader className="text-center">
              <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>Support Creator</CardTitle>
              <CardDescription>
                Completing the process supports the creator and keeps the project alive
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* How to Get Key */}
        <Card className="card-glow mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">How to Get Your Key</CardTitle>
            <CardDescription>
              Follow these simple steps to obtain your access key
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="card-glow bg-muted/20">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Redirects and Safety:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>If redirected to random sites, simply click the back button</li>
                <li>Do not download anything from redirect sites</li>
                <li>Do not complete surveys from redirect sites</li>
                <li>Only complete the Linkvertise process</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Key Features:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Valid for 24 hours from activation</li>
                <li>Works with all available scripts</li>
                <li>Helps support continued development</li>
                <li>No recurring payments or subscriptions</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="card-glow bg-gradient-to-r from-card/50 to-card/30 inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Open the script hub and follow the steps above to get your key.
              </p>
              <Button size="lg" className="animate-glow">
                <Key className="h-5 w-5 mr-2" />
                Get Your Key Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default KeySystem;