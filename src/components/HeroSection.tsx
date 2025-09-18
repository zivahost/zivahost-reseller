import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-vps.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional VPS hosting infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-card border border-tech-purple/30 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-tech-purple" />
            <span className="text-sm font-medium text-foreground/90">
              Professional VPS Reseller Platform
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Scale Your Hosting
            </span>
            <br />
            <span className="text-foreground">Business with</span>
            <br />
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Ziva Host
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform DatabaseMart VPS services into a profitable hosting business with automated order management, dynamic pricing, and professional admin controls.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-sm">
            <div className="flex items-center space-x-2 text-foreground/70">
              <Shield className="w-4 h-4 text-success" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2 text-foreground/70">
              <TrendingUp className="w-4 h-4 text-info" />
              <span>Dynamic Pricing</span>
            </div>
            <div className="flex items-center space-x-2 text-foreground/70">
              <Zap className="w-4 h-4 text-warning" />
              <span>Automated Processing</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Your Business
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              View Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-foreground/60">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-foreground/60">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                200%
              </div>
              <div className="text-foreground/60">Max Margin Control</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;