import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Bot, Users, Phone, Megaphone, Settings, ArrowRight } from "lucide-react";
const Services = () => {
  const services = [{
    icon: Bot,
    title: "AI Chatbot",
    description: "Intelligent conversational agents that provide instant replies and 24/7 customer support. Handle inquiries, process orders, and deliver personalized experiences at scale.",
    features: ["Natural language processing", "Multi-channel integration", "Sentiment analysis", "Automated escalation", "Real-time analytics"]
  }, {
    icon: Users,
    title: "AI Sales Agent",
    description: "Autonomous sales agents that engage leads, qualify prospects, and book demos. Nurture your pipeline with personalized outreach and intelligent follow-ups.",
    features: ["Lead qualification", "Demo scheduling", "Follow-up automation", "Pipeline management", "Performance tracking"]
  }, {
    icon: Phone,
    title: "AI Receptionist",
    description: "Virtual receptionist that answers calls, schedules meetings, and manages appointments. Provide professional phone support without human intervention.",
    features: ["Call handling & routing", "Appointment scheduling", "Calendar integration", "Message taking", "Business hours management"]
  }, {
    icon: Megaphone,
    title: "AI Marketing Team",
    description: "Complete marketing automation with content creation, campaign management, and performance analytics. Scale your marketing efforts intelligently.",
    features: ["Content generation", "Campaign automation", "Social media management", "Email marketing", "Analytics & reporting"]
  }, {
    icon: Settings,
    title: "Custom Agents",
    description: "Tailored AI solutions built specifically for your unique business workflows. Get agents designed around your specific needs and processes.",
    features: ["Custom workflow design", "API integrations", "Industry-specific solutions", "Scalable architecture", "Ongoing optimization"]
  }];
  return <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Featured <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of AI agents designed to transform 
              every aspect of your business operations.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-8"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass-card p-6 h-full animate-fade-in" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <CardHeader className="p-0 pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-0 flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    <h4 className="font-semibold text-sm uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <Link to="/contact">
                      <Button className="btn-hero w-full rounded-full font-medium group">
                        Know More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 rounded-2xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="gradient-text">Business</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Choose the AI agents that fit your needs, or let us build a custom solution 
              tailored specifically for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-hero px-8 py-4 rounded-full text-lg font-medium group">
                  Get Custom Solution
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button className="btn-secondary px-8 py-4 rounded-full text-lg font-medium">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Services;