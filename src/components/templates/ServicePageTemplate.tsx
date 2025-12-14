import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { industries } from "@/data/navigation";

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  offerings: string[];
  benefits: string[];
  relatedIndustries: string[];
}

const ServicePageTemplate = ({
  title,
  subtitle,
  description,
  offerings,
  benefits,
  relatedIndustries,
}: ServicePageTemplateProps) => {
  const filteredIndustries = industries.filter((i) =>
    relatedIndustries.includes(i.slug)
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="text-gold font-medium mb-4 tracking-wide uppercase text-sm">
              Our Services
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
            <Link to="/services" className="hover:text-primary transition-colors">
              Services
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
                About {title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                {description}
              </p>

              {/* Offerings */}
              <div className="mb-12">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
                  What We Offer
                </h3>
                <div className="grid gap-4">
                  {offerings.map((offering, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-5 bg-background border border-border rounded-lg hover:border-gold/30 hover:shadow-sm transition-all"
                    >
                      <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-serif font-semibold">
                        {index + 1}
                      </span>
                      <p className="text-foreground pt-2">{offering}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
                  Key Benefits
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Related Industries */}
            <div>
              <div className="bg-muted p-8 rounded-lg border border-border sticky top-24">
                <h3 className="font-serif text-xl font-semibold text-primary mb-6">
                  Industries We Serve
                </h3>
                <ul className="space-y-3 mb-8">
                  {filteredIndustries.map((industry) => (
                    <li key={industry.slug}>
                      <Link
                        to={`/industries/${industry.slug}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        {industry.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-medium hover:bg-primary/90 transition-colors w-full justify-center"
                >
                  Discuss Your Needs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-wide text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Elevate Your {title} Strategy
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Partner with Thiru Inc. to unlock new potential and drive measurable results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-primary px-8 py-4 rounded font-medium hover:bg-gold-light transition-colors"
          >
            Start Your Transformation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePageTemplate;
