import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Lightbulb, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const pillars = [
  {
    icon: Target,
    title: "Integrated Solutions",
    description: "We operate as a unified capability engine, bringing together strategists, data scientists, and technologists to deliver enduring change."
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We embed within your organization, working alongside your teams rather than observing from the sidelines."
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description: "We leverage cutting-edge technology and methodologies to solve problems others consider intractable."
  },
  {
    icon: Handshake,
    title: "Outcome-Focused",
    description: "We measure success by the tangible results we deliver, not the reports we produce."
  }
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-navy to-navy-dark text-primary-foreground py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-4">About Thiru Inc.</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              A New Class of Consulting Partner.
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80">
              Uniting strategy, technology, and design to solve society's most complex problems.
            </p>
          </div>
        </div>
      </section>

      {/* Core Narrative */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
                Bridging Strategy and Execution
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Thiru Inc. was founded on a singular premise: <strong className="text-foreground">complex problems require integrated solutions</strong>. Traditional firms separate strategy from execution, leaving clients with a roadmap but no engine.
                </p>
                <p>
                  We operate differently. We are a unified capability engine, bringing together strategists, data scientists, and technologists to deliver enduring change.
                </p>
                <p>
                  Whether revitalizing a legacy supply chain, digitizing a municipal government, or scaling a venture-backed startup, we bring the full weight of our global expertise to deliver <strong className="text-foreground">outcomes, not just outputs</strong>.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-10 lg:p-12 border border-accent/20">
              <p className="text-2xl lg:text-3xl font-serif font-medium text-foreground leading-relaxed">
                "We don't just advise on transformation—we architect and implement it."
              </p>
              <div className="mt-8 pt-6 border-t border-accent/20">
                <p className="text-accent font-semibold">Our Promise</p>
                <p className="text-muted-foreground mt-1">
                  Every engagement delivers measurable, sustainable impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Pillars */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
              Our Foundational Pillars
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every client engagement and internal decision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="bg-card p-8 rounded-xl shadow-sm border border-border hover-lift"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
              Who We Serve
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              We partner with organizations across the public and private sectors who share our 
              commitment to meaningful, lasting transformation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-secondary rounded-xl text-center">
                <p className="text-4xl font-serif font-bold text-primary mb-2">23</p>
                <p className="text-muted-foreground">Industry Sectors</p>
              </div>
              <div className="p-6 bg-secondary rounded-xl text-center">
                <p className="text-4xl font-serif font-bold text-accent mb-2">17</p>
                <p className="text-muted-foreground">Service Capabilities</p>
              </div>
              <div className="p-6 bg-secondary rounded-xl text-center">
                <p className="text-4xl font-serif font-bold text-primary mb-2">∞</p>
                <p className="text-muted-foreground">Commitment to Results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Let's Build Something Extraordinary
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Ready to transform your organization? Start a conversation with our team.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold text-lg px-10">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
