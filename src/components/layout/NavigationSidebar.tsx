import { Link } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";
import { industries, services } from "@/data/navigation";

interface NavigationSidebarProps {
  type: "industries" | "services" | null;
  onClose: () => void;
}

export function NavigationSidebar({ type, onClose }: NavigationSidebarProps) {
  if (!type) return null;

  const items = type === "industries" ? industries : services;
  const basePath = type === "industries" ? "/industries" : "/services";
  const title = type === "industries" ? "Industries" : "Services";
  const subtitle = type === "industries" 
    ? "Deep expertise across 23 sectors" 
    : "17 capabilities to drive transformation";

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className="fixed top-0 right-0 h-full w-full max-w-md bg-sidebar z-50 shadow-2xl animate-slide-in-right overflow-y-auto">
        <div className="p-6 lg:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-sidebar-foreground">
                {title}
              </h2>
              <p className="text-sidebar-foreground/70 mt-1">{subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-sidebar-foreground" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {items.map((item, index) => (
              <Link
                key={item.slug}
                to={`${basePath}/${item.slug}`}
                onClick={onClose}
                className="group flex items-center justify-between py-3 px-4 rounded-lg hover:bg-sidebar-accent transition-all duration-200"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <span className="text-sidebar-foreground/90 group-hover:text-sidebar-primary transition-colors">
                  {item.title}
                </span>
                <ArrowRight className="w-4 h-4 text-sidebar-foreground/40 group-hover:text-sidebar-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </nav>

          {/* View All Link */}
          <div className="mt-8 pt-6 border-t border-sidebar-border">
            <Link
              to={basePath}
              onClick={onClose}
              className="flex items-center gap-2 text-sidebar-primary font-semibold hover:gap-3 transition-all duration-200"
            >
              View All {title}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
