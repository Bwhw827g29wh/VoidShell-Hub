import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, Eye, Clock, FileText } from "lucide-react";
import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto container-padding section-spacing">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-6">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            We value your privacy and are committed to protecting your personal information.
          </p>
        </div>

        {/* Introduction */}
        <Card className="card-glow bg-primary/5 border-primary/20 mb-8">
          <CardContent className="p-6">
            <p className="text-center">
              At <strong>VoidShell Hub</strong>, we value your privacy and are committed to protecting 
              the personal information that we collect from you while using our script. This Privacy Policy 
              explains what information we collect, how it is used, and what we do to ensure its security.
            </p>
          </CardContent>
        </Card>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {/* Information We Collect */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Information We Collect
              </CardTitle>
              <CardDescription>
                Data collected when you use our scripts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                When you use our script, we may collect the following information:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <div>
                    <strong>Username:</strong> Your username in the game
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <div>
                    <strong>Display Name:</strong> The display name associated with your account
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <div>
                    <strong>User ID:</strong> Your unique user identification number
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <div>
                    <strong>Current Game:</strong> The game you are currently playing, so we know which script is being used
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <div>
                    <strong>Executor:</strong> The name of the executor you are using
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <div>
                    <strong>Executor Information:</strong> Version, compatibility details, and other related information about your executor
                  </div>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                This information is collected solely for debugging and ensuring that our scripts function properly.
              </p>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                How We Use This Information
              </CardTitle>
              <CardDescription>
                Purpose and benefits of data collection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The information collected is used for the following purposes:
              </p>
              <div className="space-y-4">
                <div className="bg-muted/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🔧 Debugging</h4>
                  <p className="text-muted-foreground text-sm">
                    We use this information to troubleshoot issues with our scripts and improve performance.
                  </p>
                </div>
                <div className="bg-muted/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">📈 Improvement</h4>
                  <p className="text-muted-foreground text-sm">
                    We analyze the data to ensure that our scripts are compatible with various environments and executor types.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Webhooks We Use */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle>Webhooks We Use</CardTitle>
              <CardDescription>
                Three webhooks to enhance your experience and ensure script functionality
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border border-muted rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">✅ Success Logger</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  This webhook is used to log successful execution events and actions. It stores:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Username, Display Name, User ID</li>
                  <li>• Currently Playing Game (to know which script is being used)</li>
                  <li>• Executor Name</li>
                </ul>
              </div>

              <div className="border border-muted rounded-lg p-4">
                <h4 className="font-semibold text-yellow-400 mb-2">⚠️ Error Reporter</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  This webhook helps us track errors and issues that may arise. It stores:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Executor Information (version, compatibility, etc.)</li>
                  <li>• Username, Display Name, User ID</li>
                  <li>• Currently Playing Game</li>
                  <li>• Executor Name</li>
                </ul>
              </div>

              <div className="border border-muted rounded-lg p-4">
                <h4 className="font-semibold text-blue-400 mb-2">🔧 Compatibility Bot</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  This webhook monitors the compatibility of various executor APIs. It does <strong>not</strong> store any personal user information. It collects only:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Executor API (e.g., firesignal, http_request, hookfunction, etc.)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Security and Retention */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  We store the collected information securely, and it is only accessible to our authorized team members 
                  for debugging purposes. We make every effort to ensure that your personal information is protected.
                </p>
              </CardContent>
            </Card>

            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Data Retention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Your information will only be retained as long as necessary to fulfill the purposes described above. 
                  We may store logs and error reports for troubleshooting and script improvement purposes, 
                  but these logs will not be shared with third parties.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Your Rights */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
              <CardDescription>
                What you can do regarding your personal data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Access</strong> the information we collect about you</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong>Request the deletion</strong> of your data (subject to any legal obligations)</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                If you wish to exercise any of these rights, please contact us on our{" "}
                <a href="https://discord.gg/U2nvFRa8zQ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Discord server
                </a>.
              </p>
            </CardContent>
          </Card>

          {/* Small Scripts Note */}
          <Card className="card-glow bg-green-500/10 border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400">
                <FileText className="h-5 w-5" />
                Small Scripts Exception
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Small scripts such as <strong>Gold Farm</strong>, <strong>Respawn where you died</strong>, 
                <strong> Universal Script</strong>, <strong>Hug Script</strong>, <strong>Dance</strong>, 
                or other scripts that don't require a GUI or Hub <strong>do not collect any information</strong> 
                as they are lightweight and standalone.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="card-glow bg-gradient-to-r from-card/50 to-card/30">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                Questions or concerns about this Privacy Policy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have any questions or concerns about this Privacy Policy, 
                please feel free to contact us on our Discord server.
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

export default PrivacyPolicy;