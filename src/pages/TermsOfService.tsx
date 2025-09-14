import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Shield, Share } from "lucide-react";
import Layout from "@/components/Layout";

const TermsOfService = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto container-padding section-spacing">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-6">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Please read these terms carefully before using our scripts.
          </p>
        </div>

        {/* Agreement Notice */}
        <Card className="card-glow bg-primary/5 border-primary/20 mb-8">
          <CardContent className="p-6">
            <p className="text-lg font-medium text-center">
              By using our scripts, you agree to the following terms and conditions.
            </p>
          </CardContent>
        </Card>

        {/* Terms Sections */}
        <div className="space-y-8">
          {/* Responsibility and Bans */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                Responsibility and Account Safety
              </CardTitle>
              <CardDescription>
                Understanding ban responsibilities and risks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Roblox Platform Bans</h4>
                <p className="text-muted-foreground">
                  Bans issued by Roblox are <strong>not our responsibility</strong>. These typically occur due to:
                </p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1 ml-4">
                  <li>Executor detection by Roblox's anti-cheat system</li>
                  <li>Using detected or flagged executors</li>
                  <li>General script usage detection</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Game-Specific Bans</h4>
                <p className="text-muted-foreground">
                  Bans issued by specific games <strong>are our responsibility</strong> if they are caused by our scripts. We strive to keep our scripts undetected, but cannot guarantee complete safety.
                </p>
              </div>

              <div className="bg-muted/20 p-4 rounded-lg border border-muted">
                <p className="font-medium text-sm">
                  ⚠️ <strong>Use at your own risk.</strong> We cannot be held responsible for any consequences resulting from script usage.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle>Data Collection</CardTitle>
              <CardDescription>
                Information we collect as described in our Privacy Policy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We collect certain data as outlined in our Privacy Policy to improve script functionality and debug issues. 
                By using our scripts, you consent to this data collection.
              </p>
              <p className="text-sm text-muted-foreground">
                For detailed information about what data we collect and how it's used, please review our{" "}
                <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </CardContent>
          </Card>

          {/* Loss of Items */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle>Loss of Virtual Items</CardTitle>
              <CardDescription>
                Disclaimer regarding virtual items and currency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you lose any items, Robux, or other virtual currency while using our scripts, <strong>it is not our fault</strong>. Such losses may be caused by:
              </p>
              <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1 ml-4">
                <li>Other scripts you may be using</li>
                <li>Game bugs or glitches</li>
                <li>Account security issues</li>
                <li>Platform-related problems</li>
              </ul>
            </CardContent>
          </Card>

          {/* Sharing and Distribution */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share className="h-5 w-5 text-primary" />
                Sharing and Distribution
              </CardTitle>
              <CardDescription>
                What you can and cannot do with our scripts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-2">✅ Allowed</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sharing scripts for showcasing</li>
                    <li>• Using scripts for content creation</li>
                    <li>• Monetizing content featuring our scripts</li>
                  </ul>
                </div>

                <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-2">❌ Prohibited</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Leaking script source code</li>
                    <li>• Reverse engineering scripts</li>
                    <li>• Redistributing scripts without permission</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="card-glow bg-gradient-to-r from-card/50 to-card/30">
            <CardHeader>
              <CardTitle>Questions or Concerns?</CardTitle>
              <CardDescription>
                Get in touch with us if you need clarification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Service or need support, 
                please join our Discord community.
              </p>
              <a 
                href="https://discord.gg/U2nvFRa8zQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Join VoidShell Community Discord →
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;