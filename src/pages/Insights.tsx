import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const featuredReport = {
  title: "The State of Digital Transformation in the Mid-Market 2025",
  description: "A comprehensive analysis of transformation trends, challenges, and success factors for mid-sized enterprises navigating the digital economy.",
  category: "Annual Report",
  readTime: "25 min read",
  date: "January 2025"
};

const insights = [
  {
    title: "The Cognitive City: AI in the Public Sector",
    description: "How artificial intelligence is reshaping municipal operations and citizen services.",
    category: "Government Series",
    readTime: "12 min read",
    date: "December 2024"
  },
  {
    title: "Why the Future of ERP is Composable",
    description: "The shift from monolithic systems to modular, best-of-breed technology stacks.",
    category: "Tech Trends",
    readTime: "8 min read",
    date: "November 2024"
  },
  {
    title: "Building Resilient Supply Chains Post-Pandemic",
    description: "Lessons learned and strategies for future-proofing your logistics operations.",
    category: "Operations",
    readTime: "10 min read",
    date: "October 2024"
  },
  {
    title: "The Human Side of Digital Transformation",
    description: "Why change management is the key differentiator in successful technology implementations.",
    category: "People & Culture",
    readTime: "7 min read",
    date: "September 2024"
  },
  {
    title: "ESG Reporting: From Burden to Business Advantage",
    description: "How leading companies are turning sustainability requirements into competitive differentiators.",
    category: "Sustainability",
    readTime: "9 min read",
    date: "August 2024"
  },
  {
    title: "M&A Integration: The First 100 Days",
    description: "A playbook for capturing deal value through rapid, effective post-merger integration.",
    category: "M&A",
    readTime: "14 min read",
    date: "July 2024"
  }
];

export default function Insights() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-navy to-navy-dark text-primary-foreground py-20 lg:py-28">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Thiru Insights
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80">
              Perspectives on the convergence of strategy and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Report */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-wide">
          <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Featured Report
                </span>
                <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-4">
                  {featuredReport.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {featuredReport.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredReport.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredReport.readTime}
                  </span>
                </div>
                <Link
                  to="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Download Report <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-primary rounded-xl flex items-center justify-center p-8">
                <div className="text-center text-primary-foreground">
                  <p className="text-5xl font-serif font-bold mb-2">2025</p>
                  <p className="text-sm uppercase tracking-wider text-primary-foreground/70">
                    Annual Report
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Insights */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container-wide">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
              Latest Thinking
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight) => (
              <article
                key={insight.title}
                className="bg-card p-6 rounded-xl shadow-sm border border-border hover-lift group"
              >
                <span className="inline-block text-accent text-sm font-semibold mb-3">
                  {insight.category}
                </span>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {insight.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {insight.description}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {insight.readTime}
                  </span>
                  <span>{insight.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-wide text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
            Stay Informed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Subscribe to receive our latest insights and perspectives directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="px-6 py-3 bg-primary hover:bg-navy-dark text-primary-foreground font-semibold rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
