import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Monitor, Server, Shield, Gamepad2, TrendingUp, Settings } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      category: "Linux VPS",
      icon: Monitor,
      description: "Reliable Linux-based virtual servers for all your hosting needs",
      plans: [
        { name: "Basic", cpu: "1-2 CPU", ram: "1-4GB RAM", storage: "20-50GB SSD", price: "$5-15" },
        { name: "Standard", cpu: "2-4 CPU", ram: "4-8GB RAM", storage: "50-100GB SSD", price: "$15-35" },
        { name: "Premium", cpu: "4-8 CPU", ram: "8-16GB RAM", storage: "100-200GB SSD", price: "$35-75" },
        { name: "Enterprise", cpu: "8+ CPU", ram: "16+ GB RAM", storage: "200+ GB SSD", price: "$75+" }
      ],
      features: ["Ubuntu, CentOS, Debian", "Root Access", "SSD Storage", "99.9% Uptime"],
      color: "tech-blue"
    },
    {
      category: "Windows VPS",
      icon: Server,
      description: "Powerful Windows servers with full administrative access",
      plans: [
        { name: "Basic", cpu: "2 CPU", ram: "2-4GB RAM", storage: "50GB SSD", price: "$15-25" },
        { name: "Standard", cpu: "4 CPU", ram: "4-8GB RAM", storage: "100GB SSD", price: "$25-45" },
        { name: "Premium", cpu: "6 CPU", ram: "8-16GB RAM", storage: "150GB SSD", price: "$45-85" },
        { name: "Enterprise", cpu: "8+ CPU", ram: "16+ GB RAM", storage: "200+ GB SSD", price: "$85+" }
      ],
      features: ["Windows Server 2019/2022", "RDP Access", "IIS Web Server", "SQL Server Compatible"],
      color: "tech-purple"
    },
    {
      category: "Managed VPS",
      icon: Shield,
      description: "Fully managed servers with expert support and maintenance",
      plans: [
        { name: "Managed Linux", cpu: "2-4 CPU", ram: "4-8GB RAM", storage: "50-100GB SSD", price: "$25-55" },
        { name: "Managed Windows", cpu: "4-6 CPU", ram: "8-12GB RAM", storage: "100-150GB SSD", price: "$45-85" },
        { name: "cPanel/WHM", cpu: "4-8 CPU", ram: "8-16GB RAM", storage: "100-200GB SSD", price: "$35-95" }
      ],
      features: ["24/7 Management", "Security Updates", "Backup Included", "Performance Monitoring"],
      color: "success"
    },
    {
      category: "Specialized VPS",
      icon: Gamepad2,
      description: "Optimized servers for specific use cases and applications",
      plans: [
        { name: "Game Server", cpu: "4-8 CPU", ram: "8-16GB RAM", storage: "100-200GB NVMe", price: "$35-75" },
        { name: "Trading VPS", cpu: "2-4 CPU", ram: "4-8GB RAM", storage: "50-100GB SSD", price: "$25-55" },
        { name: "Development", cpu: "4-6 CPU", ram: "8-12GB RAM", storage: "100-150GB SSD", price: "$30-65" }
      ],
      features: ["Low Latency", "Optimized Performance", "Pre-configured", "Scalable Resources"],
      color: "warning"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-tech-purple/30 text-tech-purple">
            VPS Services
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Complete VPS Solutions
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Offer a comprehensive range of VPS services powered by DatabaseMart infrastructure with your custom branding and pricing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={service.category} className="bg-gradient-card border-border/50 hover:border-tech-purple/30 transition-all duration-300 hover:shadow-glow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-${service.color}/20 flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 text-${service.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {service.category}
                      </CardTitle>
                      <p className="text-foreground/60 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Plans */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {service.plans.map((plan, planIndex) => (
                      <div key={plan.name} className="bg-background/50 rounded-lg p-4 border border-border/30">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-foreground">{plan.name}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {plan.price}/mo
                          </Badge>
                        </div>
                        <div className="space-y-1 text-sm text-foreground/70">
                          <div>{plan.cpu}</div>
                          <div>{plan.ram}</div>
                          <div>{plan.storage}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    <h5 className="font-medium text-foreground/80 text-sm">Key Features:</h5>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs border-border/50">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button variant="outline" className="w-full">
                    Configure Pricing
                    <Settings className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card border border-tech-purple/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Start Your VPS Business?
            </h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Set up your custom margins, configure your branding, and start selling VPS services today with our comprehensive reseller platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Start Reselling Now
              </Button>
              <Button variant="outline" size="lg">
                View Pricing Calculator
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;