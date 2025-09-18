import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Shield, 
  Zap, 
  Clock, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Monitor,
  HardDrive,
  Cpu,
  Wifi
} from "lucide-react";
import heroImage from "@/assets/hero-vps.jpg";

const EndUserHomepage = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "NVMe SSD storage and high-performance processors for maximum speed"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced DDoS protection and 24/7 security monitoring"
    },
    {
      icon: Clock,
      title: "99.9% Uptime",
      description: "Guaranteed uptime with our enterprise-grade infrastructure"
    },
    {
      icon: Users,
      title: "24/7 Expert Support",
      description: "Round-the-clock technical support from our hosting experts"
    }
  ];

  const vpsPlans = [
    {
      name: "VPS Starter",
      popular: false,
      price: "$12",
      period: "/month",
      specs: {
        cpu: "2 CPU Cores",
        ram: "4GB RAM",
        storage: "50GB NVMe SSD",
        bandwidth: "2TB Transfer"
      },
      features: [
        "Full Root Access",
        "99.9% Uptime SLA",
        "Free SSL Certificate",
        "Daily Backups",
        "24/7 Support"
      ]
    },
    {
      name: "VPS Professional",
      popular: true,
      price: "$35",
      period: "/month",
      specs: {
        cpu: "4 CPU Cores",
        ram: "8GB RAM",
        storage: "100GB NVMe SSD",
        bandwidth: "4TB Transfer"
      },
      features: [
        "Everything in Starter",
        "Free Domain Name",
        "Advanced Monitoring",
        "Priority Support",
        "Server Management Panel"
      ]
    },
    {
      name: "VPS Enterprise",
      popular: false,
      price: "$75",
      period: "/month",
      specs: {
        cpu: "8 CPU Cores",
        ram: "16GB RAM",
        storage: "200GB NVMe SSD",
        bandwidth: "8TB Transfer"
      },
      features: [
        "Everything in Professional",
        "Dedicated IP Address",
        "Load Balancer Ready",
        "Premium Support",
        "Custom Configurations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Server className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Ziva Host
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#plans" className="text-foreground/80 hover:text-foreground transition-colors">
                VPS Plans
              </a>
              <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#support" className="text-foreground/80 hover:text-foreground transition-colors">
                Support
              </a>
              <a href="/resellers" className="text-foreground/80 hover:text-foreground transition-colors">
                Resellers
              </a>
              <Button variant="outline" size="sm">
                Login
              </Button>
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional VPS hosting infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-tech-purple/30 text-tech-purple">
            Premium VPS Hosting
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Powerful</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              VPS Hosting
            </span>
            <br />
            <span className="text-foreground">Solutions</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto">
            Experience lightning-fast performance with our premium VPS hosting. Enterprise-grade infrastructure, 24/7 support, and guaranteed 99.9% uptime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              View VPS Plans
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Live Demo
            </Button>
          </div>

          {/* Quick Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-card border border-tech-purple/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-tech-purple" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-foreground/60">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VPS Plans */}
      <section id="plans" className="py-20 bg-gradient-to-b from-background/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Choose Your VPS Plan
              </span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              From small projects to enterprise applications, we have the perfect VPS solution for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {vpsPlans.map((plan) => (
              <Card 
                key={plan.name}
                className={`relative bg-gradient-card border-border/50 transition-all duration-300 hover:shadow-glow ${
                  plan.popular ? 'border-tech-purple/50 scale-105' : 'hover:border-tech-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-foreground/60">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Cpu className="w-4 h-4 text-tech-purple" />
                      <span className="text-sm text-foreground/80">{plan.specs.cpu}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Monitor className="w-4 h-4 text-tech-blue" />
                      <span className="text-sm text-foreground/80">{plan.specs.ram}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HardDrive className="w-4 h-4 text-success" />
                      <span className="text-sm text-foreground/80">{plan.specs.storage}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Wifi className="w-4 h-4 text-warning" />
                      <span className="text-sm text-foreground/80">{plan.specs.bandwidth}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant={plan.popular ? "hero" : "outline"} 
                    className="w-full" 
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="features" className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Why Choose Ziva Host?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-border/50 p-6 text-center">
              <Globe className="w-12 h-12 text-tech-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Global Network</h3>
              <p className="text-foreground/70">
                Multiple data centers worldwide for optimal performance and low latency.
              </p>
            </Card>

            <Card className="bg-gradient-card border-border/50 p-6 text-center">
              <Shield className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Enterprise Security</h3>
              <p className="text-foreground/70">
                Advanced security measures including DDoS protection and regular security updates.
              </p>
            </Card>

            <Card className="bg-gradient-card border-border/50 p-6 text-center">
              <Users className="w-12 h-12 text-warning mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Expert Support</h3>
              <p className="text-foreground/70">
                24/7 technical support from experienced hosting professionals.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tech-purple/10 to-tech-blue/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Power Your Project?
          </h2>
          <p className="text-xl text-foreground/70 mb-8">
            Join thousands of satisfied customers who trust Ziva Host for their VPS hosting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Your VPS Today
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-background/50 border-t border-border/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Server className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                Ziva Host
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-foreground/60">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="/resellers" className="hover:text-foreground transition-colors">Become a Reseller</a>
              <span>© 2024 Ziva Host. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EndUserHomepage;