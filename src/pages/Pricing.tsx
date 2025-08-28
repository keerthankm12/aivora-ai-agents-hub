import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, Phone, Package, Settings, Check, ArrowRight } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      icon: Bot,
      name: "AI Chatbot + Website",
      price: "₹29,999",
      description: "Perfect for businesses starting their AI journey",
      features: [
        "AI-powered chatbot with natural language processing",
        "Fully responsive website design",
        "24/7 customer support automation",
        "Basic analytics and reporting",
        "Email support",
        "One-time setup included"
      ],
      popular: false
    },
    {
      icon: Phone,
      name: "AI Receptionist",
      price: "₹54,999",
      description: "Comprehensive phone and appointment management",
      features: [
        "Virtual receptionist for call handling",
        "Automated meeting scheduling",
        "Calendar integration",
        "Business hours management",
        "Call routing and messaging",
        "Phone & Email support"
      ],
      popular: false
    },
    {
      icon: Package,
      name: "Complete AI Package",
      price: "₹69,999",
      description: "All-in-one solution for comprehensive automation",
      features: [
        "AI Chatbot + Website included",
        "AI Receptionist included",
        "Advanced analytics dashboard",
        "Multi-channel integration",
        "Custom workflow automation",
        "Priority support",
        "Monthly optimization sessions"
      ],
      popular: true
    },
    {
      icon: Settings,
      name: "Custom Agents",
      price: "Contact Us",
      description: "Tailored AI solutions for unique business needs",
      features: [
        "Custom workflow design and development",
        "Industry-specific AI solutions",
        "API integrations with existing systems",
        "Scalable architecture",
        "Dedicated account manager",
        "Ongoing optimization and updates",
        "24/7 technical support"
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Choose Your <span className="gradient-text">AI Solution</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Flexible pricing plans designed to scale with your business needs. 
              Start small or go comprehensive – we've got you covered.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-8"></div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-in relative ${
                  plan.popular ? "border-2 border-primary" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary px-4 py-2 rounded-full text-white text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold gradient-text mb-2">{plan.price}</div>
                  {plan.price !== "Contact Us" && (
                    <p className="text-sm text-muted-foreground">One-time payment</p>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="block">
                  <Button 
                    className={`w-full py-3 rounded-full font-medium group ${
                      plan.popular ? "btn-hero" : "btn-secondary"
                    }`}
                  >
                    Know More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">The Aivora</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All our plans include these essential features to ensure your success.
            </p>
          </div>
          
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Dedicated onboarding process",
                "Regular performance monitoring",
                "Seamless system integration",
                "Customizable to your brand",
                "Scalable architecture",
                "Ongoing technical support"
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get <span className="gradient-text">Started</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Have questions about our pricing or need a custom solution? 
              We're here to help you find the perfect AI agent for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-hero px-8 py-4 rounded-full text-lg font-medium group">
                  Contact Us Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button className="btn-secondary px-8 py-4 rounded-full text-lg font-medium">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;