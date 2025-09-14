import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Heart, Code, Shield, Coffee, Copyright } from "lucide-react";
import Layout from "@/components/Layout";

const Credits = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto container-padding section-spacing">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-6">
            <Heart className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Credits & Copyright
          </h1>
          <p className="text-xl text-muted-foreground">
            Acknowledging everyone who makes VoidShell Hub possible.
          </p>
        </div>

        {/* Credits Sections */}
        <div className="space-y-8">
          {/* Developer */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Developer & Founder
              </CardTitle>
              <CardDescription>
                The creator and maintainer of VoidShell Hub
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">N</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">NullSpecter</h3>
                  <p className="text-muted-foreground">@nullspecter on Discord</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Developer, Founder & always lack of sleep 😭
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team & Contributors */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Team & Contributors
              </CardTitle>
              <CardDescription>
                Special thanks to our team members and helpers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/20 rounded-lg">
                  <h4 className="font-semibold mb-2">🛡️ Community Moderator</h4>
                  <p className="text-muted-foreground">
                    <strong>@Jack</strong> - Thank you for being a moderator in our server without exchange.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/20 rounded-lg">
                  <h4 className="font-semibold mb-2">🤖 Development Helper</h4>
                  <p className="text-muted-foreground">
                    <strong>AI</strong> - Assistance with development and documentation.
                  </p>
                </div>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <p className="text-center">
                  <Coffee className="h-4 w-4 inline mr-2" />
                  Your support through our key system helps maintain and improve the project.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Credits */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Third-Party Credits & Acknowledgments
              </CardTitle>
              <CardDescription>
                Recognizing the talented creators who contribute to our ecosystem
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg border border-muted">
                  <h4 className="font-semibold mb-3 text-foreground">We extend our gratitude to:</h4>
                  <div className="space-y-2 text-card-foreground">
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      GUI/Library creators for their frameworks
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Game developers for creating amazing experiences
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Community members for feedback and support
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Everyone who supports the project 💜
                    </p>
                  </div>
                </div>
                
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-2 text-primary">Platform Recognition</h4>
                  <p className="text-foreground text-sm">
                    We acknowledge game developers and platform owners for creating the best gaming experiences 
                    that inspire innovation and creativity in the community.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Copyright Disclaimer */}
          <Card className="card-glow border-destructive/20 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Copyright className="h-5 w-5 text-destructive" />
                Copyright Disclaimer
              </CardTitle>
              <CardDescription>
                Important information about content usage and fair use
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                <h4 className="font-semibold text-destructive mb-2">⚠️ Script Protection</h4>
                <p className="text-muted-foreground">
                  I do not allow leaking or copying my scripts for monetization. I work hard on these projects, 
                  so please respect creators and their work.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Platform Content & Fair Use</h4>
                <p className="text-muted-foreground text-sm">
                  This content may include material related to scripting, gameplay, or assets from Roblox and other platforms. 
                  All trademarks, logos, and content belong to their respective owners. This content is made for 
                  educational, entertainment, and community purposes only.
                </p>
                
                <p className="text-muted-foreground text-sm">
                  I do not claim ownership of any copyrighted material shown or referenced unless explicitly stated. 
                  If you are the rightful owner of any content used and wish for it to be removed or credited differently, 
                  please contact me directly on Discord.
                </p>
              </div>

              <div className="bg-muted/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">📜 Copyright Act Section 107</h4>
                <p className="text-muted-foreground text-sm">
                  Allowance is made for "fair use" for purposes such as criticism, comment, news reporting, 
                  teaching, scholarship, and research under Section 107 of the Copyright Act 1976.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <Card className="card-glow bg-gradient-to-r from-card/50 to-card/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Support the Project
              </CardTitle>
              <CardDescription>
                Help keep VoidShell Hub alive and growing
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-foreground mb-6 leading-relaxed">
                VoidShell Hub is maintained by a dedicated developer who is passionate about creating quality tools for the community. 
                Your support through our key system enables continuous development, server maintenance, and feature improvements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/key-system"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Get a Key - Support Development
                </a>
                <a 
                  href="https://discord.gg/U2nvFRa8zQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted/20 transition-colors"
                >
                  Join Community
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          Thank you to everyone who contributes to making VoidShell Hub possible! 💙
        </div>
      </div>
    </Layout>
  );
};

export default Credits;