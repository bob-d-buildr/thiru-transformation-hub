import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Cog, Users, Target, Lightbulb, Shield } from "lucide-react";
import { industries, services } from "@/data/navigation";

const Index = () => {
  const featuredIndustries = industries.slice(0, 6);
  const featuredServices = services.slice(0, 6);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-light min-h-[80vh] flex items-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:40px_40px]"></div>
        <div className="container-wide relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 animate-fade-up">
              From Ambition to{" "}
              <span className="text-accent">Actualization</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Thiru Inc. partners with organizations to transform vision into measurable outcomes through strategic consulting and technology excellence.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold px-8 py-4 rounded transition-all hover-lift"
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded transition-all border border-white/20"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Why <span className="text-accent">Thiru</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We bring together deep industry expertise, technology mastery, and strategic insight to deliver transformational results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Strategic Clarity", desc: "We cut through complexity to identify the most impactful path forward for your organization." },
              { icon: Lightbulb, title: "Innovation Leadership", desc: "Leveraging cutting-edge technology and methodologies to keep you ahead of the curve." },
              { icon: Shield, title: "Trusted Partnership", desc: "Long-term relationships built on transparency, integrity, and shared success." },
            ].map((item, i) => (
              <div key={i} className="bg-card p-8 rounded-lg border border-border hover-lift transition-all group">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Industries */}
      <section className="py-20 bg-muted">
        <div className="container-wide">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                Industries We <span className="text-accent">Serve</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Deep sector expertise across 23 industries, delivering tailored solutions for unique challenges.
              </p>
            </div>
            <Link to="/industries/financial-services" className="hidden md:flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors">
              View All Industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredIndustries.map((industry, i) => (
              <Link
                key={i}
                to={`/industries/${industry.slug}`}
                className="group bg-card p-6 rounded-lg border border-border hover:border-accent/50 hover-lift transition-all"
              >
                <div className="flex items-center gap-4">
                  <Building2 className="w-8 h-8 text-accent" />
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                    {industry.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/industries/financial-services" className="md:hidden flex items-center justify-center gap-2 text-primary hover:text-accent font-semibold mt-8 transition-colors">
            View All Industries <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                Our <span className="text-accent">Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Comprehensive consulting capabilities spanning strategy, technology, operations, and beyond.
              </p>
            </div>
            <Link to="/services/strategy-corporate-finance" className="hidden md:flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <Link
                key={i}
                to={`/services/${service.slug}`}
                className="group bg-card p-6 rounded-lg border border-border hover:border-accent/50 hover-lift transition-all"
              >
                <div className="flex items-center gap-4">
                  <Cog className="w-8 h-8 text-accent" />
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/services/strategy-corporate-finance" className="md:hidden flex items-center justify-center gap-2 text-primary hover:text-accent font-semibold mt-8 transition-colors">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Zoho Partnership CTA */}
      <section className="py-20 bg-primary">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                Thiru x <span className="text-accent">Zoho</span>
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl">
                As a certified Zoho partner, we bring enterprise-grade technology solutions that scale with your ambitions. From CRM to custom applications, we make Zoho work for you.
              </p>
              <Link
                to="/thiru-zoho"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold px-8 py-4 rounded transition-all hover-lift"
              >
                Explore the Partnership
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                {["CRM", "Analytics", "Custom Apps", "Automation"].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur px-6 py-4 rounded-lg text-center">
                    <span className="text-white font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-muted">
        <div className="container-wide text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Ready to <span className="text-accent">Transform</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how Thiru Inc. can help you achieve your most ambitious goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded transition-all hover-lift"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
