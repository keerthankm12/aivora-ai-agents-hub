import { Target, Eye, Heart, Zap, Clock, Users, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Human-Centered Automation",
      description: "We believe AI should augment human capabilities, not replace them."
    },
    {
      icon: Shield,
      title: "Transparency & Trust",
      description: "Clear communication and ethical AI practices in everything we do."
    },
    {
      icon: Zap,
      title: "Innovation at Speed",
      description: "Rapid deployment of cutting-edge AI solutions that deliver immediate value."
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "AI agents that grows with your business, from startup to enterprise."
    }
  ];

  const reasons = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Our AI agents never sleep, ensuring your business runs around the clock."
    },
    {
      icon: Users,
      title: "Custom-Built Agents",
      description: "Tailored solutions designed specifically for your unique business needs."
    },
    {
      icon: TrendingUp,
      title: "Proven Impact",
      description: "Measurable results with improved efficiency and customer satisfaction."
    },
    {
      icon: Shield,
      title: "Seamless Integration",
      description: "Easy implementation that works with your existing tools and workflows."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">The Aivora</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              We deploy agents. You deploy growth.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-2xl animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Who <span className="gradient-text">We Are</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                The Aivora is a forward-thinking team of engineers, designers, and AI specialists 
                dedicated to building intelligent agents that transform how businesses operate. 
                We believe in the power of AI to augment human capabilities and create unprecedented 
                opportunities for growth. Our mission is simple: deploy cutting-edge AI agents 
                that work as tireless teammates, allowing you to focus on what matters most – 
                growing your business and serving your customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-8 rounded-xl animate-fade-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize AI by making intelligent automation accessible to businesses of all sizes. 
                We strive to create AI agents that are not just powerful, but also intuitive, 
                reliable, and perfectly aligned with human values and business objectives.
              </p>
            </div>
            <div className="glass-card p-8 rounded-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every business, regardless of size or industry, has access to 
                intelligent AI agents that handle routine tasks, enhance customer experiences, 
                and unlock new possibilities for innovation and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at The Aivora.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">Us</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover what sets The Aivora apart in the world of AI automation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;