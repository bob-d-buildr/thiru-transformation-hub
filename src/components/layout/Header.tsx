import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { primaryNav, secondaryNav } from "@/data/navigation";
import { NavigationSidebar } from "./NavigationSidebar";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sidebarType, setSidebarType] = useState<"industries" | "services" | null>(null);

  const openSidebar = (type: "industries" | "services") => {
    setSidebarType(type);
  };

  const closeSidebar = () => {
    setSidebarType(null);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-sm border-b border-border">
        {/* Secondary Nav */}
        <div className="bg-primary text-primary-foreground">
          <div className="container-wide flex justify-end items-center h-8 text-sm">
            <nav className="hidden md:flex items-center gap-6">
              {secondaryNav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="hover:text-accent transition-colors duration-200"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Primary Nav */}
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                Thiru<span className="text-accent">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {primaryNav.map((item) => (
                item.hasSubmenu ? (
                  <button
                    key={item.href}
                    onClick={() => openSidebar(item.title.toLowerCase() as "industries" | "services")}
                    className="flex items-center gap-1 text-foreground/80 hover:text-foreground font-medium transition-colors duration-200"
                  >
                    {item.title}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-foreground/80 hover:text-foreground font-medium transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                )
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <div className="container-wide py-4 space-y-4">
              {primaryNav.map((item) => (
                item.hasSubmenu ? (
                  <button
                    key={item.href}
                    onClick={() => {
                      openSidebar(item.title.toLowerCase() as "industries" | "services");
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-between w-full py-2 text-foreground font-medium"
                  >
                    {item.title}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block py-2 text-foreground font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
              ))}
              <div className="pt-4 border-t border-border space-y-2">
                {secondaryNav.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block py-2 text-muted-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <Button asChild className="w-full bg-accent hover:bg-gold-dark text-accent-foreground font-semibold">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Navigation Sidebar */}
      <NavigationSidebar type={sidebarType} onClose={closeSidebar} />
    </>
  );
}
