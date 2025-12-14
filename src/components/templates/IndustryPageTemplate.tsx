import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { services } from "@/data/navigation";

interface IndustryPageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  challenges: string[];
  capabilities: string[];
  relatedServices: string[];
}

const IndustryPageTemplate = ({
  title,
  subtitle,
  description,
  challenges,
  capabilities,
  relatedServices,
}: IndustryPageTemplateProps) => {
  const filteredServices = services.filter((s) =>
    relatedServices.includes(s.slug)
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="text-gold font-medium mb-4 tracking-wide uppercase text-sm">
              Industry Expertise
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-light">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="container-wide py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/industries" className="hover:text-primary transition-colors">
              Industries
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Column - Description */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6">
                Transforming {title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {description}
              </p>

              {/* Challenges */}
              <div className="mb-12">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
                  Industry Challenges We Address
                </h3>
                <ul className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0 mt-0.5 font-medium text-sm">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Capabilities */}
              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
                  Our Capabilities
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {capabilities.map((capability, index) => (
                    <div
                      key={index}
                      className="p-4 bg-muted rounded-lg border border-border hover:border-gold/30 transition-colors"
                    >
                      <p className="font-medium text-foreground">{capability}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Related Services */}
            <div>
              <div className="bg-primary text-primary-foreground p-8 rounded-lg sticky top-24">
                <h3 className="font-serif text-xl font-semibold mb-6">
                  Related Services
                </h3>
                <ul className="space-y-3 mb-8">
                  {filteredServices.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to={`/services/${service.slug}`}
                        className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors group"
                      >
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-primary px-6 py-3 rounded font-medium hover:bg-gold-light transition-colors w-full justify-center"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16 border-t border-border">
        <div className="container-wide text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-4">
            Ready to Transform Your {title} Operations?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how Thiru Inc. can help you navigate challenges and capture new opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-medium hover:bg-primary/90 transition-colors"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default IndustryPageTemplate;
