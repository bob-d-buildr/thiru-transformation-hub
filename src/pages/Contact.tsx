import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Linkedin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const offices = [
  {
    city: "New York",
    address: "350 Fifth Avenue, Suite 4820",
    address2: "New York, NY 10118",
    phone: "+1 (212) 555-0123"
  },
  {
    city: "Washington, D.C.",
    address: "1000 Connecticut Avenue NW",
    address2: "Washington, DC 20036",
    phone: "+1 (202) 555-0456"
  },
  {
    city: "San Francisco",
    address: "425 Market Street, Suite 2200",
    address2: "San Francisco, CA 94105",
    phone: "+1 (415) 555-0789"
  }
];

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-navy to-navy-dark text-primary-foreground py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Let's Start a Conversation.
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80">
              Whether you're ready to transform or just exploring possibilities, 
              we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Main Contact */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:hello@thiruinc.com" className="text-muted-foreground hover:text-primary transition-colors">
                      hello@thiruinc.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+12125550100" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (212) 555-0100
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday – Friday: 9:00 AM – 6:00 PM EST
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/company/thiruinc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Follow us on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Inquiry Types */}
              <div className="mt-12 p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold text-foreground mb-4">For Specific Inquiries</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Media:</strong>{" "}
                    <a href="mailto:press@thiruinc.com" className="hover:text-primary">press@thiruinc.com</a>
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Careers:</strong>{" "}
                    <a href="mailto:careers@thiruinc.com" className="hover:text-primary">careers@thiruinc.com</a>
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Partnerships:</strong>{" "}
                    <a href="mailto:partners@thiruinc.com" className="hover:text-primary">partners@thiruinc.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                Our Offices
              </h2>
              <div className="space-y-6">
                {offices.map((office) => (
                  <div 
                    key={office.city}
                    className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-foreground text-lg mb-2">
                          {office.city}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-1">{office.address}</p>
                        <p className="text-muted-foreground text-sm mb-2">{office.address2}</p>
                        <a 
                          href={`tel:${office.phone.replace(/[^+\d]/g, '')}`}
                          className="text-sm text-primary hover:text-accent transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Ready to Transform?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Our team is ready to discuss how Thiru Inc. can help your organization 
            achieve its strategic objectives.
          </p>
          <a
            href="mailto:hello@thiruinc.com"
            className="inline-flex items-center gap-2 bg-accent hover:bg-gold-dark text-accent-foreground font-semibold text-lg px-10 py-4 rounded-lg transition-colors"
          >
            <Mail className="w-5 h-5" />
            Send Us an Email
          </a>
        </div>
      </section>
    </Layout>
  );
}
