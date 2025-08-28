import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Users, Zap, CheckCircle, TrendingUp, Clock, Shield } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: "Autonomous Efficiency",
      description: "AI agents that work 24/7 without breaks, handling tasks faster than human teams."
    },
    {
      icon: Users,
      title: "Tailored to You",
      description: "Custom-built agents designed specifically for your business needs and workflows."
    },
    {
      icon: CheckCircle,
      title: "Seamless Integration",
      description: "Effortlessly integrate with your existing tools and systems without disruption."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track measurable improvements in productivity and customer satisfaction."
    }
  ];

  const services = [
    {
      icon: Bot,
      title: "AI Chatbot",
      description: "Instant replies and 24/7 customer support that never sleeps."
    },
    {
      icon: Users,
      title: "AI Sales Agent",
      description: "Engage leads, book demos, and nurture prospects automatically."
    },
    {
      icon: Shield,
      title: "AI Receptionist",
      description: "Answer calls, schedule meetings, and manage appointments seamlessly."
    }
  ];

  const stats = [
    { number: "12+", label: "Active Agents" },
    { number: "2.4", label: "Days Avg Lead Handling Time" },
    { number: "100%", label: "Uptime" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-background opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              We Deploy{" "}
              <span className="gradient-text">Agents</span>,{" "}
              <br />
              You Deploy{" "}
              <span className="gradient-text">Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with AI agents that work as tireless teammates. 
              Automate workflows, engage customers, and scale operations without limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button className="btn-hero px-8 py-4 rounded-full text-lg font-medium group">
                  Get Your AI Agent
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button className="btn-secondary px-8 py-4 rounded-full text-lg font-medium">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Aivora Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">Aivora</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the power of AI agents designed to transform your business operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular AI agents that are transforming businesses worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in floating"
                style={{ animationDelay: `${index * 2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 pulse-glow">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <Link to="/services">
                  <Button className="btn-secondary w-full rounded-full font-medium group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="stats-number mb-2">{stat.number}</div>
                  <p className="text-lg text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Deploy Your{" "}
              <span className="gradient-text">AI Agent</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join hundreds of businesses already using AI agents to scale their operations. 
              Get started today and see results within days.
            </p>
            <Link to="/contact">
              <Button className="btn-hero px-8 py-4 rounded-full text-lg font-medium group">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;