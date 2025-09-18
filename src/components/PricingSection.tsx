import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Star } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "$29",
      period: "/month",
      description: "Perfect for getting started with VPS reselling",
      features: [
        "Up to 50 VPS services",
        "Basic admin dashboard",
        "Email support",
        "Standard payment processing",
        "Basic analytics",
        "Custom branding"
      ],
      limitations: [
        "Limited to Linux VPS only",
        "Basic margin controls"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      icon: Crown,
      price: "$79",
      period: "/month",
      description: "Comprehensive solution for growing hosting businesses",
      features: [
        "Unlimited VPS services",
        "Full admin dashboard",
        "Priority support",
        "Advanced payment processing",
        "Detailed analytics & reporting",
        "White-label branding",
        "All VPS categories",
        "Custom margin controls (10-200%)",
        "Automated order processing",
        "Customer management system"
      ],
      limitations: [],
      buttonText: "Start Professional",
      buttonVariant: "hero" as const,
      popular: true
    },
    {
      name: "Enterprise",
      icon: Star,
      price: "$199",
      period: "/month",
      description: "Advanced features for established hosting companies",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "24/7 phone support",
        "API access for integration",
        "Advanced reporting & BI",
        "Multi-brand management",
        "Custom integrations",
        "SLA guarantees",
        "Training & onboarding"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonVariant: "gradient" as const,
      popular: false
    }
  ];

  const comparisonFeatures = [
    { category: "Service Management", features: ["VPS Package Creation", "Dynamic Pricing Engine", "Bulk Price Updates", "Service Categories"] },
    { category: "Order Processing", features: ["Automated Workflows", "Payment Integration", "Order Tracking", "Customer Notifications"] },
    { category: "Analytics & Reporting", features: ["Revenue Analytics", "Margin Analysis", "Customer Insights", "Performance Metrics"] },
    { category: "Support & Training", features: ["Knowledge Base", "Video Tutorials", "Live Chat Support", "Onboarding Assistance"] }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-tech-cyan/30 text-tech-cyan">
            Pricing Plans
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Start your VPS reselling business with our flexible pricing plans designed to scale with your growth.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={plan.name} 
                className={`relative bg-gradient-card border-border/50 hover:border-tech-purple/30 transition-all duration-300 ${
                  plan.popular ? 'border-tech-purple/50 shadow-glow scale-105' : 'hover:shadow-card'
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
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <div className="w-10 h-10 bg-tech-purple/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-tech-purple" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {plan.name}
                    </CardTitle>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-foreground/60">{plan.period}</span>
                  </div>
                  
                  <p className="text-foreground/70 text-sm">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-4 h-4 text-success flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Limitations */}
                  {plan.limitations.length > 0 && (
                    <div className="space-y-2 pt-4 border-t border-border/30">
                      <p className="text-xs text-foreground/60 font-medium">Limitations:</p>
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-center space-x-3">
                          <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                            <div className="w-1 h-1 bg-foreground/40 rounded-full" />
                          </div>
                          <span className="text-xs text-foreground/60">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Button */}
                  <Button 
                    variant={plan.buttonVariant} 
                    className="w-full mt-6"
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature Comparison */}
        <div className="bg-gradient-card border border-tech-purple/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            What's Included in Each Plan
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {comparisonFeatures.map((category) => (
              <div key={category.category} className="space-y-4">
                <h4 className="font-semibold text-foreground border-b border-border/30 pb-2">
                  {category.category}
                </h4>
                <div className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Check className="w-3 h-3 text-success flex-shrink-0" />
                      <span className="text-sm text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Not Sure Which Plan is Right for You?
            </h3>
            <p className="text-foreground/70 mb-6">
              Start with our free trial to explore all features, or contact our sales team for a personalized recommendation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;