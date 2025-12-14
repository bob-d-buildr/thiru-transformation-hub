export const industryContent: Record<
  string,
  {
    title: string;
    subtitle: string;
    description: string;
    challenges: string[];
    capabilities: string[];
    relatedServices: string[];
  }
> = {
  agriculture: {
    title: "Agriculture",
    subtitle: "Cultivating innovation from farm to table",
    description:
      "The agriculture sector faces unprecedented transformation driven by climate change, technological advancement, and shifting consumer demands. Thiru Inc. partners with agricultural enterprises to modernize operations, enhance sustainability, and build resilient supply chains that deliver value from seed to shelf.",
    challenges: [
      "Navigating climate volatility and sustainable farming practices",
      "Integrating precision agriculture and IoT technologies",
      "Building transparent and traceable supply chains",
      "Managing commodity price fluctuations and market access",
    ],
    capabilities: [
      "Supply Chain Optimization",
      "Precision Agriculture Strategy",
      "Sustainability Roadmaps",
      "Market Access Planning",
      "Technology Integration",
      "Risk Management",
    ],
    relatedServices: ["operations", "sustainability", "technology", "strategy-finance"],
  },
  automotive: {
    title: "Automotive & Assembly",
    subtitle: "Driving the future of mobility",
    description:
      "The automotive industry is experiencing its most significant transformation in a century. From electrification to autonomous vehicles, from new mobility models to evolving customer expectations, Thiru Inc. helps automotive companies navigate disruption and emerge as leaders in the new mobility landscape.",
    challenges: [
      "Accelerating the transition to electric and hybrid vehicles",
      "Developing autonomous driving capabilities and partnerships",
      "Reimagining dealership and customer experience models",
      "Managing supply chain complexity and semiconductor shortages",
    ],
    capabilities: [
      "EV Strategy Development",
      "Manufacturing Excellence",
      "Digital Customer Experience",
      "Supply Chain Resilience",
      "M&A Advisory",
      "Cost Transformation",
    ],
    relatedServices: ["operations", "technology", "strategy-finance", "transformation"],
  },
  chemicals: {
    title: "Chemicals",
    subtitle: "Catalyzing sustainable chemical innovation",
    description:
      "The chemical industry sits at the intersection of sustainability imperatives and industrial demand. Thiru Inc. helps chemical companies balance profitability with environmental responsibility, driving innovation in green chemistry while optimizing traditional operations for maximum efficiency.",
    challenges: [
      "Transitioning to sustainable and circular chemistry models",
      "Navigating volatile feedstock costs and supply disruptions",
      "Meeting increasingly stringent environmental regulations",
      "Developing next-generation specialty chemicals",
    ],
    capabilities: [
      "Sustainability Strategy",
      "Operational Excellence",
      "R&D Portfolio Optimization",
      "Digital Manufacturing",
      "Regulatory Compliance",
      "M&A Integration",
    ],
    relatedServices: ["sustainability", "operations", "strategy-finance", "risk-resilience"],
  },
  cpg: {
    title: "Consumer Packaged Goods",
    subtitle: "Connecting brands with evolving consumers",
    description:
      "Consumer preferences are shifting faster than ever, challenging CPG companies to innovate continuously while managing complex global operations. Thiru Inc. partners with leading brands to build agile organizations that anticipate trends, engage consumers, and deliver profitable growth.",
    challenges: [
      "Responding to rapidly changing consumer preferences and values",
      "Building direct-to-consumer capabilities while managing retail partnerships",
      "Optimizing product portfolios for profitability and relevance",
      "Embedding sustainability across the value chain",
    ],
    capabilities: [
      "Brand Strategy",
      "D2C Transformation",
      "Revenue Growth Management",
      "Supply Chain Optimization",
      "Sustainability Integration",
      "Digital Commerce",
    ],
    relatedServices: ["growth-marketing-sales", "operations", "sustainability", "customer"],
  },
  education: {
    title: "Education",
    subtitle: "Shaping the future of learning",
    description:
      "Education is being reimagined through technology, changing demographics, and evolving skill requirements. Thiru Inc. works with educational institutions and EdTech companies to design learning experiences that prepare students for the future while ensuring institutional sustainability.",
    challenges: [
      "Balancing digital and in-person learning modalities",
      "Addressing enrollment pressures and demographic shifts",
      "Developing workforce-relevant curricula and credentials",
      "Ensuring equitable access to quality education",
    ],
    capabilities: [
      "Strategic Planning",
      "Digital Transformation",
      "Operational Efficiency",
      "EdTech Integration",
      "Revenue Diversification",
      "Student Experience Design",
    ],
    relatedServices: ["strategy-finance", "technology", "transformation", "people-performance"],
  },
  "electric-power": {
    title: "Electric Power & Natural Gas",
    subtitle: "Powering the energy transition",
    description:
      "The power sector is at the forefront of the global energy transition. Thiru Inc. helps utilities and power companies navigate decarbonization, integrate renewables, modernize grids, and develop new business models that serve customers in an increasingly distributed energy landscape.",
    challenges: [
      "Integrating renewable generation at scale while maintaining reliability",
      "Modernizing aging infrastructure and grid systems",
      "Developing new customer products and services",
      "Managing regulatory complexity across jurisdictions",
    ],
    capabilities: [
      "Decarbonization Strategy",
      "Grid Modernization",
      "Regulatory Strategy",
      "Customer Experience",
      "Asset Optimization",
      "M&A Advisory",
    ],
    relatedServices: ["sustainability", "strategy-finance", "technology", "operations"],
  },
  "energy-materials": {
    title: "Energy & Materials",
    subtitle: "Building tomorrow's resource foundation",
    description:
      "The energy and materials sectors are fundamental to economic growth while facing pressure to decarbonize. Thiru Inc. helps companies in these sectors balance near-term performance with long-term sustainability, developing strategies that create value across energy transitions.",
    challenges: [
      "Managing the pace and scale of energy transition investments",
      "Optimizing legacy assets while building new capabilities",
      "Attracting capital in an ESG-focused investment environment",
      "Developing talent for evolving skill requirements",
    ],
    capabilities: [
      "Portfolio Strategy",
      "Capital Allocation",
      "ESG Strategy",
      "Operational Excellence",
      "Workforce Transformation",
      "Technology Integration",
    ],
    relatedServices: ["strategy-finance", "sustainability", "operations", "people-performance"],
  },
  "engineering-construction": {
    title: "Engineering & Construction",
    subtitle: "Building infrastructure for generations",
    description:
      "Engineering and construction companies are building the infrastructure that will serve communities for decades. Thiru Inc. helps E&C firms improve project delivery, embrace digital technologies, manage risk, and position for growth in an evolving market landscape.",
    challenges: [
      "Improving project delivery and reducing cost overruns",
      "Adopting digital tools and Building Information Modeling",
      "Managing labor shortages and workforce development",
      "Navigating contract structures and risk allocation",
    ],
    capabilities: [
      "Project Excellence",
      "Digital Construction",
      "Risk Management",
      "Workforce Strategy",
      "M&A Advisory",
      "Operational Improvement",
    ],
    relatedServices: ["operations", "technology", "risk-resilience", "people-performance"],
  },
  "financial-services": {
    title: "Financial Services",
    subtitle: "Reimagining financial experiences",
    description:
      "Financial services are being transformed by technology, regulation, and changing customer expectations. Thiru Inc. partners with banks, insurers, and asset managers to build digital capabilities, enhance customer experiences, and develop new revenue streams in an increasingly competitive landscape.",
    challenges: [
      "Competing with fintech and digital-native challengers",
      "Modernizing legacy technology infrastructure",
      "Meeting evolving regulatory and compliance requirements",
      "Developing personalized, digital-first customer experiences",
    ],
    capabilities: [
      "Digital Transformation",
      "Customer Experience",
      "Regulatory Strategy",
      "Technology Modernization",
      "Risk Management",
      "M&A Integration",
    ],
    relatedServices: ["technology", "customer", "risk-resilience", "strategy-finance"],
  },
  healthcare: {
    title: "Healthcare",
    subtitle: "Advancing health outcomes for all",
    description:
      "Healthcare systems worldwide are navigating complexity from aging populations, rising costs, and technological change. Thiru Inc. works with providers, payers, and health systems to improve care delivery, enhance patient experiences, and build sustainable organizations.",
    challenges: [
      "Managing costs while improving quality and outcomes",
      "Transitioning to value-based care models",
      "Integrating digital health and telehealth capabilities",
      "Addressing workforce burnout and staffing shortages",
    ],
    capabilities: [
      "Care Model Design",
      "Operational Excellence",
      "Digital Health Strategy",
      "Workforce Planning",
      "Revenue Cycle Optimization",
      "Strategic Partnerships",
    ],
    relatedServices: ["operations", "technology", "people-performance", "strategy-finance"],
  },
  industrials: {
    title: "Industrials",
    subtitle: "Manufacturing excellence for a changing world",
    description:
      "Industrial companies are transforming operations through automation, digitization, and sustainability initiatives. Thiru Inc. helps manufacturers and industrial firms optimize operations, embrace Industry 4.0, and develop strategies for sustainable competitive advantage.",
    challenges: [
      "Implementing Industry 4.0 and smart manufacturing capabilities",
      "Building resilient and sustainable supply chains",
      "Attracting and retaining skilled manufacturing talent",
      "Navigating geopolitical risks and trade uncertainties",
    ],
    capabilities: [
      "Manufacturing Excellence",
      "Digital Factory",
      "Supply Chain Optimization",
      "Sustainability Strategy",
      "Workforce Development",
      "M&A Integration",
    ],
    relatedServices: ["operations", "technology", "sustainability", "people-performance"],
  },
  infrastructure: {
    title: "Infrastructure",
    subtitle: "Connecting communities through infrastructure",
    description:
      "Infrastructure investment is accelerating globally as nations modernize aging systems and build for future needs. Thiru Inc. advises infrastructure developers, investors, and operators on project development, financing, and operational excellence.",
    challenges: [
      "Securing financing for large-scale capital projects",
      "Navigating complex regulatory and permitting processes",
      "Designing infrastructure for climate resilience",
      "Managing public-private partnership structures",
    ],
    capabilities: [
      "Project Development",
      "Infrastructure Finance",
      "Regulatory Strategy",
      "Asset Management",
      "Climate Resilience",
      "PPP Advisory",
    ],
    relatedServices: ["strategy-finance", "risk-resilience", "sustainability", "implementation"],
  },
  "life-sciences": {
    title: "Life Sciences",
    subtitle: "Innovating for better patient outcomes",
    description:
      "Life sciences companies are racing to bring innovative therapies to patients while managing complex regulatory environments and pricing pressures. Thiru Inc. partners with pharmaceutical, biotech, and medical device companies to accelerate innovation and commercial success.",
    challenges: [
      "Accelerating R&D productivity and time to market",
      "Navigating global regulatory requirements",
      "Managing pricing and market access challenges",
      "Building digital capabilities for commercial excellence",
    ],
    capabilities: [
      "R&D Strategy",
      "Commercial Excellence",
      "Regulatory Strategy",
      "Digital Transformation",
      "M&A Integration",
      "Market Access",
    ],
    relatedServices: ["strategy-finance", "operations", "technology", "growth-marketing-sales"],
  },
  logistics: {
    title: "Logistics",
    subtitle: "Moving the world with precision",
    description:
      "Logistics and supply chain companies are the backbone of global commerce, facing pressure to deliver faster, cheaper, and more sustainably. Thiru Inc. helps logistics providers optimize networks, embrace technology, and build capabilities for e-commerce and omnichannel fulfillment.",
    challenges: [
      "Meeting e-commerce fulfillment speed and cost expectations",
      "Implementing automation and autonomous technologies",
      "Reducing carbon footprint across transportation networks",
      "Managing capacity in volatile demand environments",
    ],
    capabilities: [
      "Network Optimization",
      "Technology Integration",
      "Sustainability Strategy",
      "Labor Productivity",
      "Customer Experience",
      "M&A Advisory",
    ],
    relatedServices: ["operations", "technology", "sustainability", "transformation"],
  },
  "metals-mining": {
    title: "Metals & Mining",
    subtitle: "Extracting value sustainably",
    description:
      "Metals and mining companies are essential to global infrastructure and the energy transition while facing scrutiny on environmental and social impacts. Thiru Inc. helps mining companies improve operational performance, advance sustainability, and navigate commodity cycles.",
    challenges: [
      "Improving operational efficiency and cost competitiveness",
      "Meeting ESG expectations from investors and communities",
      "Managing commodity price volatility and market cycles",
      "Developing critical minerals for energy transition",
    ],
    capabilities: [
      "Operational Excellence",
      "ESG Strategy",
      "Capital Productivity",
      "Digital Mining",
      "Community Relations",
      "Portfolio Strategy",
    ],
    relatedServices: ["operations", "sustainability", "strategy-finance", "risk-resilience"],
  },
  "oil-gas": {
    title: "Oil & Gas",
    subtitle: "Navigating the energy evolution",
    description:
      "Oil and gas companies face the dual challenge of meeting current energy demand while positioning for a lower-carbon future. Thiru Inc. helps energy companies optimize operations, manage transitions, and develop strategies for long-term value creation.",
    challenges: [
      "Balancing hydrocarbon investments with energy transition",
      "Reducing operational costs and improving capital efficiency",
      "Meeting decarbonization targets and stakeholder expectations",
      "Attracting talent and capital in evolving market conditions",
    ],
    capabilities: [
      "Operational Excellence",
      "Energy Transition Strategy",
      "Capital Optimization",
      "Digital Oilfield",
      "ESG Integration",
      "M&A Advisory",
    ],
    relatedServices: ["operations", "sustainability", "strategy-finance", "technology"],
  },
  "packaging-paper": {
    title: "Packaging & Paper",
    subtitle: "Sustainable packaging for a circular economy",
    description:
      "Packaging and paper companies are at the center of sustainability conversations, developing solutions that reduce waste and enable circular economies. Thiru Inc. helps companies innovate product portfolios, optimize manufacturing, and capitalize on sustainable packaging demand.",
    challenges: [
      "Developing sustainable packaging alternatives",
      "Managing raw material costs and supply volatility",
      "Meeting customer sustainability requirements",
      "Adapting to changing paper demand patterns",
    ],
    capabilities: [
      "Product Innovation",
      "Manufacturing Excellence",
      "Sustainability Strategy",
      "Supply Chain Optimization",
      "Customer Partnerships",
      "Portfolio Strategy",
    ],
    relatedServices: ["sustainability", "operations", "strategy-finance", "customer"],
  },
  "private-capital": {
    title: "Private Capital",
    subtitle: "Creating value through active ownership",
    description:
      "Private equity and private capital firms are seeking new sources of value creation in competitive markets. Thiru Inc. partners with investors across the deal lifecycle, from due diligence through value creation and exit, delivering actionable insights that drive returns.",
    challenges: [
      "Finding attractive investment opportunities in competitive markets",
      "Accelerating value creation in portfolio companies",
      "Navigating economic uncertainty and rising rates",
      "Integrating ESG into investment processes",
    ],
    capabilities: [
      "Commercial Due Diligence",
      "Value Creation Planning",
      "Portfolio Optimization",
      "Exit Readiness",
      "Operating Partner Support",
      "ESG Integration",
    ],
    relatedServices: ["mergers-acquisitions", "strategy-finance", "operations", "transformation"],
  },
  "public-sector": {
    title: "Public Sector",
    subtitle: "Serving those who serve the public",
    description:
      "Government agencies and public institutions face unique challenges in delivering services efficiently while maintaining public trust. Thiru Inc. brings private-sector best practices to public-sector challenges, helping agencies modernize operations and improve citizen outcomes.",
    challenges: [
      "Modernizing legacy systems and processes",
      "Improving citizen service delivery and experience",
      "Managing budget constraints while meeting expanding mandates",
      "Attracting and retaining skilled public sector talent",
    ],
    capabilities: [
      "Digital Government",
      "Operational Excellence",
      "Program Management",
      "Workforce Transformation",
      "Procurement Support",
      "Policy Implementation",
    ],
    relatedServices: ["technology", "operations", "people-performance", "implementation"],
  },
  "real-estate": {
    title: "Real Estate",
    subtitle: "Shaping spaces for work, life, and community",
    description:
      "Real estate is being reshaped by remote work, sustainability requirements, and evolving consumer preferences. Thiru Inc. helps developers, investors, and operators adapt portfolios, enhance properties, and develop strategies for changing market dynamics.",
    challenges: [
      "Adapting to hybrid work and changing office demand",
      "Meeting sustainability and green building requirements",
      "Navigating rising interest rates and capital costs",
      "Developing mixed-use and community-focused properties",
    ],
    capabilities: [
      "Portfolio Strategy",
      "Asset Enhancement",
      "Sustainability Integration",
      "Development Advisory",
      "Transaction Support",
      "Operational Excellence",
    ],
    relatedServices: ["strategy-finance", "sustainability", "operations", "mergers-acquisitions"],
  },
  retail: {
    title: "Retail",
    subtitle: "Reimagining retail for the modern consumer",
    description:
      "Retail is being transformed by digital commerce, changing consumer behaviors, and new competitive dynamics. Thiru Inc. helps retailers build omnichannel capabilities, enhance customer experiences, and develop sustainable business models for long-term success.",
    challenges: [
      "Building seamless omnichannel customer experiences",
      "Competing with e-commerce and direct-to-consumer brands",
      "Managing inventory and supply chain complexity",
      "Developing data-driven personalization capabilities",
    ],
    capabilities: [
      "Omnichannel Strategy",
      "Customer Experience",
      "Supply Chain Optimization",
      "Digital Commerce",
      "Store Operations",
      "Data & Analytics",
    ],
    relatedServices: ["customer", "operations", "technology", "growth-marketing-sales"],
  },
  semiconductors: {
    title: "Semiconductors",
    subtitle: "Powering the digital world",
    description:
      "Semiconductors are the foundation of digital transformation across industries. Thiru Inc. helps semiconductor companies navigate market cycles, optimize manufacturing, and develop strategies for an industry experiencing unprecedented demand and geopolitical attention.",
    challenges: [
      "Managing capacity expansion and capital allocation",
      "Navigating geopolitical risks and reshoring pressures",
      "Addressing talent shortages and workforce development",
      "Accelerating product development cycles",
    ],
    capabilities: [
      "Strategy Development",
      "Manufacturing Excellence",
      "Supply Chain Resilience",
      "R&D Optimization",
      "M&A Advisory",
      "Workforce Planning",
    ],
    relatedServices: ["strategy-finance", "operations", "technology", "people-performance"],
  },
  tmt: {
    title: "Technology, Media & Telecom",
    subtitle: "Connecting and empowering the digital economy",
    description:
      "TMT companies are reshaping how we work, communicate, and consume content. Thiru Inc. helps technology, media, and telecommunications firms drive innovation, transform operations, and develop strategies for convergence and competition.",
    challenges: [
      "Navigating industry convergence and competition",
      "Monetizing content and services in evolving markets",
      "Building and retaining top technology talent",
      "Managing rapid technology change and innovation cycles",
    ],
    capabilities: [
      "Growth Strategy",
      "Digital Transformation",
      "M&A Advisory",
      "Operational Excellence",
      "Talent Strategy",
      "Product Development",
    ],
    relatedServices: ["strategy-finance", "technology", "mergers-acquisitions", "growth-marketing-sales"],
  },
};
