export const projectsData = [
  {
    id: 'clinical-screening',
    title: 'Biometric & Clinical Trial Screening Platform',
    client: 'UNC School of Medicine / MedVitals',
    category: 'Healthcare Tech',
    categorySlug: 'healthcare',
    year: '2026',
    description: 'An AI-augmented clinical screening and biometric telemetry platform designed for FDA-regulated clinical trials with zero-data-loss architecture.',
    challenge: 'Clinical researchers suffered from inconsistent patient screening compliance, manual data reconciliation across hospital EHR systems, and 4-week screening cycle delays.',
    solution: 'Built an end-to-end telemetry system combining HIPAA-compliant cross-platform mobile check-ins with an intelligent automated screening pipeline, reducing trial qualification time by 68%.',
    impact: [
      { metric: '68%', label: 'Faster Trial Qualification' },
      { metric: '100%', label: 'HIPAA & FDA 21 CFR Part 11 Compliant' },
      { metric: '12,000+', label: 'Patients Successfully Screened' }
    ],
    techStack: ['.NET Core 8', 'Angular 18', 'Python (Med-LLM)', 'SQL Server', 'Azure Health Cloud'],
    deliverables: ['Custom Web Portal', 'Cross-Platform Mobile App', 'Automated Triage Algorithm', 'Audit Logging Engine'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop&q=80',
    featured: true,
  },
  {
    id: 'sciopay-fintech',
    title: 'High-Frequency FinTech Payment & FX Integration Engine',
    client: 'ScioPay Global',
    category: 'FinTech & Web3',
    categorySlug: 'fintech',
    year: '2026',
    description: 'High-throughput payment gateway and foreign currency liquidity routing layer built for instant cross-border treasury settlements.',
    challenge: 'Scaling transactions across 20+ national banking protocols with sub-50ms latency while preventing arbitrage slippage and reconciliation mismatches.',
    solution: 'Engineered an event-driven microservices architecture utilizing high-performance .NET Core, Redis distributed caching, and automated ledger balance checks.',
    impact: [
      { metric: '$50M+', label: 'Monthly Processed Volume' },
      { metric: '<38ms', label: 'End-to-End Execution Latency' },
      { metric: '99.999%', label: 'Infrastructure Uptime SLA' }
    ],
    techStack: ['.NET Core', 'React 18', 'C#', 'SQL Server Enterprise', 'Redis Cluster', 'AWS Lambda'],
    deliverables: ['Payment Gateway Core', 'FX Arbitrage Prevention Engine', 'Merchant Settlement Dashboard', 'API SDK'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80',
    featured: true,
  },
  {
    id: 'transferconnex-crm',
    title: 'Enterprise FX Broker CRM & Treasury Automation Platform',
    client: 'TransferConnex',
    category: 'Enterprise SaaS',
    categorySlug: 'enterprise',
    year: '2026',
    description: 'Custom back-office management and multi-currency treasury automation system simplifying complex foreign currency contracts for international importers.',
    challenge: 'Legacy spreadsheet workflows caused trade settlement errors, manual KYC bottlenecks, and lack of real-time position hedging visibility.',
    solution: 'Designed and deployed an institutional-grade CRM with automated KYC verification pipelines, live bank feed integrations, and automated forward contract tracking.',
    impact: [
      { metric: '4.8x', label: 'Operational Throughput' },
      { metric: '90%', label: 'Reduction in Manual Reconciliations' },
      { metric: '30+ Banks', label: 'Direct API Connectors' }
    ],
    techStack: ['.NET 8', 'React', 'TypeScript', 'SQL Server', 'Tailwind CSS', 'Docker'],
    deliverables: ['Real-Time Broker CRM', 'Treasury Risk Calculator', 'Automated KYC Pipeline', 'Client Self-Service Portal'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    featured: true,
  },
  {
    id: 'logistics-oms',
    title: 'Intelligent Order Management & Global Logistics Dispatcher',
    client: 'Global Logistics Corp',
    category: 'Enterprise SaaS',
    categorySlug: 'enterprise',
    year: '2026',
    description: 'Real-time multi-carrier order management system handling global freight tracking, autonomous dispatch routing, and warehouse sync.',
    challenge: 'Managing over 100,000 daily parcel consignments with disparate third-party carrier APIs resulted in missing packages and slow customs documentation.',
    solution: 'Built a resilient queue-driven processing platform that centralizes multi-carrier manifests, generates barcode manifests automatically, and forecasts transit delays using machine learning.',
    impact: [
      { metric: '100K+', label: 'Daily Handled Consignments' },
      { metric: '-42%', label: 'Customs Clearance Delays' },
      { metric: '18 Carrier APIs', label: 'Unified Integration' }
    ],
    techStack: ['Python', 'Node.js', '.NET Core', 'PostgreSQL', 'RabbitMQ', 'Google Cloud'],
    deliverables: ['Dispatch Orchestrator', 'Driver Tracking App', 'Customs Manifest Auto-Generator', 'Analytics Suite'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80',
    featured: true,
  },
  {
    id: 'medvitals-ai',
    title: 'Formative AI Patient Diagnosis Assistant',
    client: 'MedVitals Inc',
    category: 'Healthcare Tech',
    categorySlug: 'healthcare',
    year: '2026',
    description: 'Custom fine-tuned RAG assistant helping physicians rapidly cross-reference medical literature, symptoms, and lab metrics.',
    challenge: 'Doctors spend up to 2 hours per day manually parsing lengthy patient histories and dense lab documentation.',
    solution: 'Constructed an encrypted private RAG pipeline using Anthropic Claude and LlamaIndex hosted in an isolated HIPAA-compliant enclave.',
    impact: [
      { metric: '75%', label: 'Time Saved on Patient Summaries' },
      { metric: '99.2%', label: 'Diagnostic Source Accuracy' },
      { metric: 'Zero', label: 'Data Leakage to Public Models' }
    ],
    techStack: ['Anthropic Claude 3.5', 'LangChain', 'LlamaIndex', 'Python', 'FastAPI', 'Next.js'],
    deliverables: ['Physician Chat Workstation', 'EHR Ingestion Pipeline', 'Citation Verification Engine'],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 'apex-mobile-app',
    title: 'Apex Wealth — Algorithmic Mobile Investment Suite',
    client: 'Apex Capital',
    category: 'Mobile Apps',
    categorySlug: 'mobile',
    year: '2026',
    description: 'Modern neo-banking mobile interface with real-time portfolio rebalancing, micro-savings triggers, and biometric authentication.',
    challenge: 'Young affluent investors demanded the institutional power of Bloomberg terminals with the consumer ease of Robinhood.',
    solution: 'Designed and developed a sleek 120fps React Native experience featuring custom interactive chart components and instantaneous order execution.',
    impact: [
      { metric: '4.9 ★', label: 'App Store Average Rating' },
      { metric: '250K+', label: 'Active Monthly Investors' },
      { metric: '$240M+', label: 'Assets Under Management' }
    ],
    techStack: ['React Native', 'TypeScript', 'Node.js', 'Redis', 'WebSockets', 'Swift Native Modules'],
    deliverables: ['iOS & Android Apps', 'Design System', 'Interactive Financial Charts', 'Biometric Vault'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80',
    featured: false,
  }
];

export const packagesData = [
  {
    id: 'pkg-landing',
    title: 'Startup Launchpad & Landing',
    subtitle: 'High-Converting Single Page Experience',
    price: '1.000.000',
    priceUsd: '$800',
    currency: 'Rp',
    unit: '/ Project',
    turnaround: '5 — 7 Business Days',
    description: 'Engineered specifically for early-stage startups, product waitlists, marketing campaigns, and rapid concept validation.',
    isPopular: false,
    badge: 'Fast Turnaround',
    features: [
      'Bespoke Visual Design (Zero Cookie-Cutter Templates)',
      'High-Speed Next.js / Vite Static Engine',
      'Full Mobile & Tablet Responsive Optimization',
      'Conversion-Optimized Copywriting Framework',
      'Direct WhatsApp, CRM & Email Lead Integration',
      'Foundational On-Page SEO & OpenGraph Meta',
      'Free Domain Setup & High-Performance Cloud Hosting',
      'Up to 5 Comprehensive Revision Rounds'
    ]
  },
  {
    id: 'pkg-company',
    title: 'Company Profile & Showcase',
    subtitle: 'Enterprise Brand Authority Platform',
    price: '2.500.000',
    priceUsd: '$1,800',
    currency: 'Rp',
    unit: '/ Project',
    turnaround: '2 — 3 Weeks',
    description: 'A world-class digital flagship for established businesses, software agencies, and high-growth corporations seeking brand credibility.',
    isPopular: true,
    badge: 'Most Popular',
    features: [
      'Complete Multi-Page Architecture (Home, Services, Work, About, Contact)',
      'Custom Headless CMS / Admin Management Panel',
      'Interactive Case Study & Project Gallery Showcase',
      'Premium Domain (.com, .id, or custom) & Enterprise SSL',
      'Professional Branded Business Email Suite',
      'Interactive Elements & Smooth Lenis Scroll Kinetics',
      'Advanced Google Maps & Multi-Location Office Pins',
      'Comprehensive Google Analytics 4 & Meta Pixel Setup',
      '30 Days Dedicated Post-Launch Support & Warranty'
    ]
  },
  {
    id: 'pkg-custom',
    title: 'Enterprise Web App & SaaS',
    subtitle: 'Full-Cycle Custom Engineering',
    price: '5.000.000',
    priceUsd: '$3,500+',
    currency: 'Rp',
    unit: '/ Project',
    turnaround: '4 — 8 Weeks',
    description: 'Complete scalable digital product with complex database schemas, role-based access control, secure payment processing, and API integrations.',
    isPopular: false,
    badge: 'Enterprise Tier',
    features: [
      'Full-Stack Architecture (.NET / Node / Python + React / Next)',
      'Secure Authentication (SSO, Multi-Factor, RBAC Roles)',
      'Payment Gateway Integration (Stripe, Midtrans, PayPal, Xendit)',
      'Real-Time Analytics & Custom Interactive Dashboards',
      'Automated Invoicing, PDF Generation & Webhooks',
      'Automated CI/CD Pipeline & Staging Environments',
      'Enterprise SQL / NoSQL Database Indexing & Backups',
      'High Concurrency & Auto-Scaling Cloud Architecture',
      '60 Days Priority Warranty & SLA Maintenance'
    ]
  }
];

export const clientLogos = [
  'Bloomberg',
  'Y Combinator',
  'Techstars',
  'TechCrunch',
  'Forbes',
  'VentureBeat',
  'AWS Certified',
  'Google Cloud Partner',
  'Microsoft Partner'
];

