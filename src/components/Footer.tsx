import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-card/50 backdrop-blur">
      <div className="max-w-7xl mx-auto container-padding py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>by NullSpecter</span>
          </div>
          <div className="text-sm text-muted-foreground text-center">
            • Always lack of sleep 😭
          </div>
          <div className="text-xs text-muted-foreground text-center">
            © 2024 VoidShell Hub. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;