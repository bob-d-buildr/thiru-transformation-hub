import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { industries, services } from "@/data/navigation";

export function Footer() {
  const topIndustries = industries.slice(0, 6);
  const topServices = services.slice(0, 6);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Industries */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-accent">Industries</h3>
            <ul className="space-y-3">
              {topIndustries.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/industries/${item.slug}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/industries"
                  className="text-accent hover:text-gold-light transition-colors font-medium"
                >
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-accent">Services</h3>
            <ul className="space-y-3">
              {topServices.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/services/${item.slug}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-accent hover:text-gold-light transition-colors font-medium"
                >
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-accent">Thiru Inc.</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/thiru-zoho" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Thiru x Zoho
                </Link>
              </li>
              <li>
                <Link to="/public-sector" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Public Sector
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-accent">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Accessibility Statement
                </Link>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-4 text-primary-foreground/60 uppercase tracking-wider">
                Connect
              </h4>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-sidebar-accent hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Thiru Inc. All Rights Reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            A Certified Zoho Partner
          </p>
        </div>
      </div>
    </footer>
  );
}
