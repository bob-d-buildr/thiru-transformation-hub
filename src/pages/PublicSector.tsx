import { Link } from "react-router-dom";
import { ArrowRight, Building, Wifi, FileText, Shield, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const capabilities = [
  {
    icon: Wifi,
    title: "Smart City Operations",
    description: "IoT integration for waste management, water systems, and traffic optimization."
  },
  {
    icon: FileText,
    title: "Digital Citizen Services",
    description: "Modern portals for tax filing, permits, licensing, and public engagement."
  },
  {
    icon: Building,
    title: "GovConnect™",
    description: "Our proprietary pre-configured solution for municipal management and operations."
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "FedRAMP-aligned security practices and continuous compliance monitoring."
  },
  {
    icon: Users,
    title: "Workforce Modernization",
    description: "Digital HR solutions and change management for government employees."
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Actionable insights from government data to improve service delivery."
  }
];

export default function PublicSector() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-navy to-navy-dark text-primary-foreground py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Government & Public Sector
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              A Trusted Partner for Government Innovation.
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80">
              Bringing private-sector speed to public-sector challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Core Narrative */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
                  Bridging the Public-Private Divide
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Cities and public agencies face a dual challenge: <strong className="text-foreground">rising citizen expectations</strong> and <strong className="text-foreground">constrained budgets</strong>. Thiru Inc. bridges this divide.
                  </p>
                  <p>
                    We are a vendor of choice for municipal transformation. From modernizing 311 systems to digitizing permit workflows, we build government infrastructure that works.
                  </p>
                </div>
              </div>
              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-serif font-bold text-foreground mb-4">Procurement Ready</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-accent" />
                    GSA Schedule Holder
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-accent" />
                    State & Local Contracts
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-accent" />
                    Cooperative Purchasing
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-accent" />
                    Security Clearances
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Statement */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
              Capability Statement
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed for government operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-card p-8 rounded-xl shadow-sm border border-border hover-lift"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <cap.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary to-navy-dark rounded-2xl p-10 lg:p-12 text-primary-foreground">
              <h3 className="text-2xl font-serif font-bold mb-6">
                Why Governments Choose Thiru Inc.
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Deep understanding of government procurement and compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Proven track record of on-time, on-budget delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Agile methodologies adapted for public sector constraints</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Commitment to accessibility and inclusive design</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Security-first approach with cleared personnel</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
                Building Public Trust Through Technology
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We understand that public sector transformation is different. It requires balancing 
                innovation with accountability, speed with transparency, and modernization with continuity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team brings both private-sector agility and deep respect for the unique 
                responsibilities of serving the public interest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Ready to modernize your agency? Contact our public sector team to discuss 
            your transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold text-lg px-10">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-10">
              <Link to="/industries/public-sector">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
