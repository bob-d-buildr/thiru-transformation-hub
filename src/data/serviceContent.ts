export const serviceContent: Record<
  string,
  {
    title: string;
    subtitle: string;
    description: string;
    offerings: string[];
    benefits: string[];
    relatedIndustries: string[];
  }
> = {
  "artificial-intelligence": {
    title: "Artificial Intelligence",
    subtitle: "Harnessing AI to transform business outcomes",
    description:
      "Artificial intelligence is reshaping industries and creating new sources of competitive advantage. Thiru Inc. helps organizations develop AI strategies, build capabilities, and deploy solutions that deliver measurable business impact while managing risks responsibly.",
    offerings: [
      "AI strategy development and opportunity assessment",
      "Machine learning and predictive analytics implementation",
      "Natural language processing and generative AI solutions",
      "AI governance and responsible AI frameworks",
      "Data infrastructure and MLOps capabilities",
    ],
    benefits: [
      "Accelerated decision-making",
      "Enhanced customer experiences",
      "Operational efficiency gains",
      "New revenue opportunities",
      "Competitive differentiation",
      "Scalable insights generation",
    ],
    relatedIndustries: ["financial-services", "healthcare", "retail", "tmt"],
  },
  assurance: {
    title: "Assurance",
    subtitle: "Building trust through transparency",
    description:
      "In an era of heightened scrutiny, organizations need robust assurance over their financial reporting, controls, and sustainability disclosures. Thiru Inc. provides comprehensive assurance services that build stakeholder confidence and support regulatory compliance.",
    offerings: [
      "Financial statement assurance and attestation",
      "Internal control assessments and SOC reporting",
      "Sustainability and ESG assurance",
      "Regulatory compliance attestation",
      "Third-party risk assurance",
    ],
    benefits: [
      "Enhanced stakeholder confidence",
      "Regulatory compliance assurance",
      "Improved control environments",
      "Risk identification and mitigation",
      "Credible sustainability reporting",
      "Strengthened governance",
    ],
    relatedIndustries: ["financial-services", "healthcare", "life-sciences", "public-sector"],
  },
  audit: {
    title: "Audit",
    subtitle: "Independent insight for informed decisions",
    description:
      "Quality audits provide the foundation for trust in financial markets and business relationships. Thiru Inc.'s audit practice combines deep industry expertise with rigorous methodology to deliver insights that go beyond compliance.",
    offerings: [
      "Financial statement audits",
      "Integrated audits of financial statements and internal controls",
      "Compliance and regulatory audits",
      "Operational and performance audits",
      "Special purpose audits and agreed-upon procedures",
    ],
    benefits: [
      "Independent verification of financial statements",
      "Identification of control weaknesses",
      "Regulatory compliance confidence",
      "Operational improvement insights",
      "Stakeholder trust and credibility",
      "Risk-aware decision support",
    ],
    relatedIndustries: ["financial-services", "public-sector", "healthcare", "energy-materials"],
  },
  "business-building": {
    title: "Business Building",
    subtitle: "Launching and scaling new ventures",
    description:
      "Building new businesses requires a unique combination of entrepreneurial thinking and enterprise capabilities. Thiru Inc. partners with established companies to ideate, launch, and scale new ventures that create growth beyond the core.",
    offerings: [
      "New venture ideation and concept development",
      "Business model design and validation",
      "Go-to-market strategy and launch support",
      "Venture building and incubation",
      "Corporate venturing and investment strategy",
    ],
    benefits: [
      "Access to new markets and customers",
      "Diversified revenue streams",
      "Innovation culture development",
      "Entrepreneurial capability building",
      "Reduced time to market",
      "Validated growth opportunities",
    ],
    relatedIndustries: ["tmt", "financial-services", "cpg", "retail"],
  },
  customer: {
    title: "Customer",
    subtitle: "Designing experiences that create loyalty",
    description:
      "Customer expectations are higher than ever, demanding seamless, personalized experiences across all touchpoints. Thiru Inc. helps organizations understand their customers deeply and design experiences that drive loyalty, advocacy, and lifetime value.",
    offerings: [
      "Customer experience strategy and design",
      "Journey mapping and service design",
      "Voice of customer programs",
      "Customer analytics and segmentation",
      "Loyalty and retention programs",
    ],
    benefits: [
      "Increased customer satisfaction",
      "Higher retention and lifetime value",
      "Reduced service costs",
      "Improved Net Promoter Scores",
      "Data-driven personalization",
      "Competitive differentiation",
    ],
    relatedIndustries: ["retail", "financial-services", "cpg", "healthcare"],
  },
  "growth-marketing-sales": {
    title: "Growth, Marketing & Sales",
    subtitle: "Accelerating profitable revenue growth",
    description:
      "Sustainable growth requires alignment of marketing, sales, and customer success around a compelling value proposition. Thiru Inc. helps companies build go-to-market engines that acquire customers efficiently and maximize revenue potential.",
    offerings: [
      "Go-to-market strategy and planning",
      "Marketing effectiveness and ROI optimization",
      "Sales force effectiveness and enablement",
      "Pricing strategy and revenue management",
      "Channel strategy and partner management",
    ],
    benefits: [
      "Accelerated revenue growth",
      "Improved marketing ROI",
      "Higher sales productivity",
      "Optimized pricing and margins",
      "Stronger channel performance",
      "Better customer acquisition efficiency",
    ],
    relatedIndustries: ["cpg", "retail", "tmt", "life-sciences"],
  },
  "human-capital": {
    title: "Human Capital",
    subtitle: "Unlocking the potential of your people",
    description:
      "People are every organization's most valuable asset and greatest source of competitive advantage. Thiru Inc. helps organizations attract, develop, and retain talent while building cultures that enable performance and innovation.",
    offerings: [
      "Talent strategy and workforce planning",
      "Leadership development and succession",
      "Organizational culture transformation",
      "Employee experience and engagement",
      "HR operating model and technology",
    ],
    benefits: [
      "Improved talent attraction and retention",
      "Stronger leadership pipeline",
      "Enhanced employee engagement",
      "More effective HR operations",
      "Culture aligned to strategy",
      "Workforce ready for the future",
    ],
    relatedIndustries: ["healthcare", "financial-services", "tmt", "industrials"],
  },
  implementation: {
    title: "Implementation",
    subtitle: "Turning strategy into sustainable results",
    description:
      "Strategy without execution is just aspiration. Thiru Inc.'s implementation practice brings the discipline, expertise, and hands-on support needed to translate strategic initiatives into operational reality and lasting organizational capability.",
    offerings: [
      "Program and project management",
      "Change management and adoption",
      "Process redesign and implementation",
      "Technology implementation support",
      "Capability building and training",
    ],
    benefits: [
      "Successful initiative delivery",
      "Faster time to value",
      "Sustainable change adoption",
      "Reduced implementation risk",
      "Built internal capabilities",
      "Measurable business outcomes",
    ],
    relatedIndustries: ["public-sector", "healthcare", "financial-services", "industrials"],
  },
  "mergers-acquisitions": {
    title: "M&A",
    subtitle: "Creating value through strategic transactions",
    description:
      "Mergers, acquisitions, and divestitures can create tremendous value or destroy it. Thiru Inc. helps companies across the transaction lifecycle, from strategy through integration, ensuring deals deliver on their strategic and financial promise.",
    offerings: [
      "M&A strategy and target screening",
      "Commercial and operational due diligence",
      "Integration planning and execution",
      "Synergy identification and capture",
      "Divestiture and separation support",
    ],
    benefits: [
      "Strategic transaction identification",
      "Reduced deal risk",
      "Accelerated integration timelines",
      "Captured synergy targets",
      "Smooth separations",
      "Protected and created value",
    ],
    relatedIndustries: ["private-capital", "tmt", "financial-services", "healthcare"],
  },
  operations: {
    title: "Operations",
    subtitle: "Optimizing performance across the value chain",
    description:
      "Operational excellence is the foundation of sustainable competitive advantage. Thiru Inc. helps organizations optimize their operations, from procurement through production to delivery, driving efficiency, quality, and customer satisfaction.",
    offerings: [
      "Supply chain optimization and resilience",
      "Manufacturing and production excellence",
      "Procurement and sourcing transformation",
      "Quality management and improvement",
      "Operational cost reduction",
    ],
    benefits: [
      "Reduced operational costs",
      "Improved quality and reliability",
      "Enhanced supply chain resilience",
      "Faster time to market",
      "Better asset utilization",
      "Increased customer satisfaction",
    ],
    relatedIndustries: ["industrials", "automotive", "cpg", "logistics"],
  },
  "people-performance": {
    title: "People & Organizational Performance",
    subtitle: "Designing organizations that deliver",
    description:
      "Organization design and performance management are critical enablers of strategy execution. Thiru Inc. helps companies create structures, processes, and cultures that align people and resources around strategic priorities.",
    offerings: [
      "Organization design and restructuring",
      "Performance management systems",
      "Operating model transformation",
      "Span of control and delayering",
      "Shared services and GBS design",
    ],
    benefits: [
      "Aligned organizational structure",
      "Improved performance visibility",
      "Reduced organizational complexity",
      "Enhanced collaboration",
      "Clear roles and accountabilities",
      "Efficient shared services",
    ],
    relatedIndustries: ["financial-services", "healthcare", "industrials", "public-sector"],
  },
  "risk-resilience": {
    title: "Risk & Resilience",
    subtitle: "Protecting value and building adaptability",
    description:
      "In an uncertain world, organizations must manage risks proactively while building resilience to navigate disruption. Thiru Inc. helps companies identify, assess, and mitigate risks while developing capabilities to thrive amid change.",
    offerings: [
      "Enterprise risk management frameworks",
      "Business continuity and crisis management",
      "Cybersecurity strategy and governance",
      "Regulatory risk and compliance",
      "Climate risk and adaptation",
    ],
    benefits: [
      "Comprehensive risk visibility",
      "Faster crisis response",
      "Reduced compliance costs",
      "Enhanced cyber resilience",
      "Protected reputation",
      "Adaptive organizational capabilities",
    ],
    relatedIndustries: ["financial-services", "healthcare", "infrastructure", "energy-materials"],
  },
  "strategy-finance": {
    title: "Strategy & Corporate Finance",
    subtitle: "Charting the path to sustainable value creation",
    description:
      "Great strategies create lasting competitive advantage and drive superior returns. Thiru Inc. combines strategic insight with financial rigor to help organizations define winning strategies and allocate capital effectively.",
    offerings: [
      "Corporate and business unit strategy",
      "Portfolio strategy and capital allocation",
      "Growth strategy and market entry",
      "Strategic planning and scenario analysis",
      "Corporate finance advisory",
    ],
    benefits: [
      "Clear strategic direction",
      "Optimized portfolio composition",
      "Effective capital allocation",
      "Identified growth opportunities",
      "Informed strategic decisions",
      "Enhanced shareholder value",
    ],
    relatedIndustries: ["private-capital", "financial-services", "tmt", "industrials"],
  },
  sustainability: {
    title: "Sustainability",
    subtitle: "Embedding sustainability for lasting impact",
    description:
      "Sustainability is increasingly central to business strategy, stakeholder expectations, and regulatory requirements. Thiru Inc. helps organizations develop and implement sustainability strategies that create value while addressing environmental and social imperatives.",
    offerings: [
      "Sustainability strategy and target setting",
      "Decarbonization roadmaps and net-zero planning",
      "ESG reporting and disclosure",
      "Circular economy and resource efficiency",
      "Sustainable supply chain transformation",
    ],
    benefits: [
      "Clear sustainability strategy",
      "Reduced carbon footprint",
      "Enhanced ESG ratings",
      "Stakeholder trust",
      "Regulatory compliance",
      "Cost savings from efficiency",
    ],
    relatedIndustries: ["energy-materials", "oil-gas", "cpg", "industrials"],
  },
  tax: {
    title: "Tax",
    subtitle: "Strategic tax planning for value preservation",
    description:
      "Tax considerations touch every aspect of business operations and transactions. Thiru Inc.'s tax practice helps organizations navigate complexity, manage risk, and optimize their tax position while maintaining compliance.",
    offerings: [
      "Tax planning and strategy",
      "Transaction tax advisory",
      "International tax structuring",
      "Tax compliance and reporting",
      "Tax controversy and dispute resolution",
    ],
    benefits: [
      "Optimized tax position",
      "Managed tax risk",
      "Efficient structures",
      "Compliant operations",
      "Resolved controversies",
      "Preserved value",
    ],
    relatedIndustries: ["private-capital", "financial-services", "tmt", "life-sciences"],
  },
  technology: {
    title: "Technology",
    subtitle: "Harnessing technology for competitive advantage",
    description:
      "Technology is transforming every industry and every function. Thiru Inc. helps organizations develop technology strategies, modernize systems, and build digital capabilities that enable innovation and efficiency.",
    offerings: [
      "Technology strategy and roadmaps",
      "Enterprise architecture and modernization",
      "Cloud transformation",
      "Data strategy and analytics platforms",
      "IT operating model and sourcing",
    ],
    benefits: [
      "Aligned technology and business strategy",
      "Modernized technology estate",
      "Cloud-enabled agility",
      "Data-driven insights",
      "Optimized IT costs",
      "Enhanced digital capabilities",
    ],
    relatedIndustries: ["financial-services", "healthcare", "retail", "tmt"],
  },
  transformation: {
    title: "Transformation",
    subtitle: "Driving large-scale organizational change",
    description:
      "Transformation programs are complex, high-stakes endeavors that require disciplined execution and engaged leadership. Thiru Inc. helps organizations plan and execute transformations that deliver step-change improvements in performance.",
    offerings: [
      "Transformation strategy and design",
      "Transformation program management",
      "Performance improvement and cost reduction",
      "Digital transformation",
      "Turnaround and restructuring",
    ],
    benefits: [
      "Step-change performance improvement",
      "Successful change delivery",
      "Sustained cost reductions",
      "Digital capabilities",
      "Organizational resilience",
      "Enhanced competitive position",
    ],
    relatedIndustries: ["industrials", "financial-services", "healthcare", "retail"],
  },
};
