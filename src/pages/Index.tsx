import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Key, Shield, Users, Code, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome to{" "}
              <span className="gradient-text">VoidShell Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of scripts and tools for your gaming experience. 
              Access premium features with our key system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="animate-glow">
                <a 
                  href="https://discord.gg/U2nvFRa8zQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Users className="h-5 w-5" />
                  Join Community
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/key-system">
                  <Key className="h-5 w-5 mr-2" />
                  Get Key
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-spacing bg-card/20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, secure, and reliable tools for your scripting needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-glow hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                  <Key className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Key System</CardTitle>
                <CardDescription>
                  24-hour access keys for all scripts
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild variant="outline" size="sm">
                  <Link to="/key-system">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-glow hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Privacy First</CardTitle>
                <CardDescription>
                  Your data is protected and secure
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild variant="outline" size="sm">
                  <Link to="/privacy">Privacy Policy</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-glow hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
                <CardDescription>
                  Join our Discord for support and updates
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild variant="outline" size="sm">
                  <a 
                    href="https://discord.gg/U2nvFRa8zQ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Join Discord
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-glow hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Open Source</CardTitle>
                <CardDescription>
                  Transparent development and credits
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild variant="outline" size="sm">
                  <Link to="/credits">View Credits</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <Card className="card-glow bg-gradient-to-r from-card/50 to-card/30">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join VoidShell Community
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Connect with other users, get support, and stay updated with the latest releases.
                Created and maintained by <span className="text-primary font-medium">@nullspecter</span>.
              </p>
              <Button asChild size="lg" className="animate-glow">
                <a 
                  href="https://discord.gg/U2nvFRa8zQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Users className="h-5 w-5" />
                  Join Discord Server
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
