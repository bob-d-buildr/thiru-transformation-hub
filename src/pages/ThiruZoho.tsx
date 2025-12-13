import { Link } from "react-router-dom";
import { ArrowRight, RefreshCw, Code, HeadphonesIcon, Database, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const offerings = [
  {
    icon: RefreshCw,
    title: "Migration Services",
    description: "Seamless transition from legacy ERP/CRM to Zoho. We handle data migration, system integration, and user training to ensure zero disruption to your operations."
  },
  {
    icon: Code,
    title: "Custom App Development",
    description: "Bespoke solutions built on Zoho Creator. From field-management apps to client portals, we build the custom tools your business needs."
  },
  {
    icon: HeadphonesIcon,
    title: "Thiru Care",
    description: "Managed services for ongoing optimization. Our team provides continuous support, updates, and performance tuning to maximize your Zoho investment."
  }
];

const capabilities = [
  { icon: Database, title: "CRM & Sales Automation", description: "Zoho CRM customization and workflow automation" },
  { icon: BarChart3, title: "Analytics & BI", description: "Zoho Analytics dashboards and reporting" },
  { icon: Users, title: "HR & People Ops", description: "Zoho People and recruitment solutions" },
  { icon: Code, title: "Low-Code Development", description: "Zoho Creator custom applications" },
];

export default function ThiruZoho() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-navy to-navy-dark text-primary-foreground py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Certified Zoho Partner
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              The Operating System for Business Transformation.
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80">
              Strategy without tooling is theory. We leverage the Zoho suite to build the digital 
              backbone your organization needs to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Core Narrative */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-8 text-center">
              From Strategy to Software
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                As a <strong className="text-foreground">certified Zoho Consulting Partner</strong>, Thiru Inc. 
                translates abstract strategies into deployed, working software. We believe that technology should 
                be an enabler, not a barrier.
              </p>
              <p>
                We leverage the unified power of the Zoho ecosystem—from CRM and AI analytics to custom low-code 
                applications—to speed up transformation cycles and lower the total cost of ownership.
              </p>
              <p className="text-xl font-medium text-primary">
                We don't hand you a plan and walk away; we configure the vehicle and hand you the keys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
              Key Offerings
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end Zoho implementation and optimization services
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="bg-card p-8 rounded-xl shadow-sm border border-border hover-lift"
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <offering.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                  {offering.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoho Capabilities */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
                The Full Zoho Ecosystem
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We are experts across the entire Zoho product suite, enabling us to create 
                integrated solutions that address every aspect of your business operations.
              </p>
              <div className="space-y-4">
                {capabilities.map((cap) => (
                  <div key={cap.title} className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <cap.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{cap.title}</h4>
                      <p className="text-sm text-muted-foreground">{cap.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-navy-dark rounded-2xl p-10 lg:p-12 text-primary-foreground">
              <h3 className="text-2xl font-serif font-bold mb-6">
                Why Zoho?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Unified platform reduces integration complexity</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Lower total cost of ownership vs. legacy ERPs</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Rapid deployment and time-to-value</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Scalable from startup to enterprise</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Built-in AI and automation capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-accent/10 border-t border-accent/20">
        <div className="container-wide text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
            Ready to Modernize Your Tech Stack?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Let's discuss how the Thiru x Zoho partnership can accelerate your digital transformation.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-navy-dark text-primary-foreground font-semibold text-lg px-10">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
