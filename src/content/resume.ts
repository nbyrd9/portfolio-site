export const profile = {
  name: "Niani Byrd",
  title: "Developer Relations",
  location: "Chicago, IL",
  email: "nianibyrd@gmail.com",
  phone: "804-896-5277",
  tagline:
    "Developer Advocate turning complex APIs into content developers actually want to read.",
  headshot: "/images/headshot.jpg",
  authorUrl: "https://www.docusign.com/blog/author/niani-byrd",
  linkedinUrl: "https://www.linkedin.com/in/nianibyrd/",
};

export type Highlight = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
};

export const highlights: Highlight[] = [
  {
    id: "reference-implementation",
    title: "Built a full reference implementation, end to end",
    description:
      "Architected a workflow combining Docusign APIs with a major financial institution's validation services: shipped the GitHub repo, authored the technical blog post, and produced a 15-minute video walkthrough for developer audiences.",
    tags: ["System Architecture", "Programming", "Technical Writing"],
  },
  {
    id: "onboarding-program",
    title: "Designed a developer onboarding program from scratch",
    description:
      "Identified a gap in developer onboarding and designed a structured program for newly hired internal developers; launched the initiative, drove adoption, and iterated based on direct developer feedback.",
    tags: ["Program Design", "Internal Enablement"],
  },
  {
    id: "office-hours",
    title: "Held API office hours for developers",
    description:
      "Ran recurring live office hours answering developer questions on Docusign APIs, with positive feedback and high engagement. Metrics show my sessions are consistently among the highest-rated.",
    tags: ["Office Hours", "Developer Engagement"],
  },
  {
    id: "mcp-content-strategy",
    title: "Built Docusign's MCP server developer content from scratch",
    description:
      "Established the developer content strategy for MCP server integration from the ground up: the full library of tutorials, technical content, and API documentation enabling developers to build agentic workflows on the platform.",
    tags: ["Content Strategy", "MCP", "Agentic Workflows"],
  },
  {
    id: "jpmorgan-quote",
    title: "Quoted by J.P. Morgan on developer workflows",
    description:
      "Featured on J.P. Morgan's developer blog recapping the Momentum 2026 joint session: “We are living in a day and age where developers no longer have to choose between speed or flexibility anymore, they can have both.”",
    tags: ["Press Mention", "Partnership"],
    url: "https://developer.payments.jpmorgan.com/blog/community/docusign-momentum-2026-mcp-ai-workflows",
  },
  {
    id: "developer-ama",
    title: "Hosted a Developer AMA on Docusign APIs",
    description:
      "Hosted a live community Q&A answering developer questions on automating agreement workflows with Docusign's APIs and Workflow Builder.",
    tags: ["Community", "Live Q&A", "Developer Engagement"],
    url: "https://community.docusign.com/general-74/september-developer-ask-me-anything-ama-building-and-automating-agreement-workflows-with-docusign-apis-25379",
  },
];

export type Talk = {
  id: string;
  title: string;
  event: string;
  date: string;
  location?: string;
  type: "Conference Talk" | "Meetup Talk" | "Internal Talk" | "Conference";
  description: string;
  tags: string[];
};

export const talks: Talk[] = [
  {
    id: "momentum-talk",
    title: "Building the Future, One Workflow at a Time",
    event: "Momentum, Docusign's flagship conference",
    date: "2026",
    location: "New York, NY",
    type: "Conference Talk",
    description:
      "Led a session on AI-driven financial workflows as part of the first-ever Builder Track for technical audiences. Strong attendee engagement helped establish technical programming as a recurring part of future Momentum conferences.",
    tags: ["Conference Talk", "AI"],
  },
  {
    id: "techconnect-talk",
    title:
      "The Hidden Infrastructure of Scale: Why Developer Experience Drives Product Value",
    event: "TechConnect (internal)",
    date: "2026",
    location: "Virtual",
    type: "Internal Talk",
    description:
      "Made the case internally for developer experience as a driver of product value, not just a nice-to-have, drawing on lessons from Docusign's own developer content and onboarding work.",
    tags: ["Internal Talk", "Developer Experience"],
  },
  {
    id: "stripe-meetup",
    title: "Agentic Workflows",
    event: "Stripe meetup",
    date: "2025",
    location: "Chicago, IL",
    type: "Meetup Talk",
    description:
      "Spoke at a Stripe-hosted meetup on building agentic workflows, sharing lessons from Docusign's own MCP and AI-driven developer tooling work.",
    tags: ["Meetup Talk", "Agentic Workflows", "AI"],
  },
  {
    id: "fintech-devcon",
    title: "Docusign Booth",
    event: "Fintech DevCon",
    date: "2025",
    location: "Denver, CO",
    type: "Conference",
    description:
      "Represented Docusign at the Fintech DevCon booth, talking through APIs and integration patterns with developers on the show floor.",
    tags: ["Conference", "Developer Engagement"],
  },
];

export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    id: "docusign",
    company: "Docusign",
    role: "Developer Advocate",
    location: "Remote",
    start: "August 2024",
    end: "Present",
    bullets: [
      "Owned and maintained the ongoing quality of 50+ developer-facing resources across API references, code samples, video walkthroughs, and blog posts, setting the standard for technical content quality across Bash, C#, Java, Node.js, PHP, PowerShell, Python, and Ruby.",
      "Led a session on AI-driven financial workflows at Momentum, Docusign's flagship conference, as part of the first-ever Builder Track for technical audiences.",
      "Established Docusign's developer content strategy for MCP server integration from the ground up, enabling developers to build agentic workflows on the platform.",
      "Spearheaded delivery of a reference implementation combining Docusign APIs with a major financial institution's validation services: architected the workflow, shipped the GitHub repo, authored the technical blog post, and produced a 15-minute video walkthrough.",
      "Identified a gap in developer onboarding and designed a structured program from scratch for newly hired internal developers; launched the initiative, drove adoption, and iterated based on direct developer feedback.",
    ],
  },
  {
    id: "calendly",
    company: "Calendly",
    role: "Full Stack Software Engineer II",
    location: "Remote",
    start: "December 2022",
    end: "August 2024",
    bullets: [
      "Engineered user-facing onboarding flows on the Growth team, building production features in Ruby on Rails and React that directly impacted new user activation and retention.",
      "Ran A/B experiments on the user onboarding flow, testing variations in step count and flow design that drove a meaningful reduction in signup drop-off.",
      "Owned internationalization (i18n) for new features, managing language translations to support Calendly's global user base.",
      "Contributed to a monolith-to-microservices migration, supporting the architectural transition of a production system serving millions of users.",
    ],
  },
  {
    id: "capgemini",
    company: "Capgemini",
    role: "Software Engineer",
    location: "Remote",
    start: "January 2022",
    end: "December 2022",
    bullets: [
      "Partnered with enterprise clients to design and implement user-facing features, improving clarity, usability, and overall experience across complex software systems.",
      "Produced technical documentation and client-facing materials that translated complex systems and requirements into accessible explanations, supporting adoption and integration efforts.",
    ],
  },
  {
    id: "united",
    company: "United Airlines",
    role: "International Flight Attendant",
    location: "Newark, NJ",
    start: "June 2016",
    end: "January 2022",
    bullets: [
      "Communicated airline policies and procedures clearly to passengers while building trust and delivering a positive customer experience in high-pressure situations.",
    ],
  },
];

export type Post = {
  id: string;
  title: string;
  summary: string;
  url: string;
  source: string;
};

export const posts: Post[] = [
  {
    id: "verification-first-onboarding",
    title:
      "How to design a verification-first financial onboarding workflow using Docusign IAM and J.P. Morgan Payments",
    summary:
      "A technical guide to integrating identity verification and bank account validation before agreement generation, using Docusign's Workflow Builder and Data I/O Extension alongside J.P. Morgan Payments Validation Services.",
    url: "https://www.docusign.com/blog/developers/verification-first-financial-onboarding-docusign-jp-morgan-payments",
    source: "Docusign Developer Blog",
  },
  {
    id: "extension-apps",
    title:
      "Beyond e-signatures: Unlocking the full potential of Docusign extension apps",
    summary:
      "How Docusign extension apps enhance document workflows by automating tasks, integrating with existing platforms, and enabling customized processes across HR, sales, legal, and real estate.",
    url: "https://www.docusign.com/blog/developers/beyond-e-signatures-unlocking-the-full-potential-of-docusign-extension-apps",
    source: "Docusign Developer Blog",
  },
  {
    id: "monday-com",
    title:
      "Leveling up Docusign workflows with Monday.com: How This Dot Labs delivered a seamless extension app",
    summary:
      "How This Dot Labs built a Docusign Extension App that integrates agreement workflows with Monday.com boards, using Workflow Builder so agreement activity automatically updates project boards and enables custom automations.",
    url: "https://www.docusign.com/blog/developers/leveling-up-docusign-workflows-with-monday-com",
    source: "Docusign Developer Blog",
  },
  {
    id: "identity-checks",
    title: "Secure, verify, comply: Automate identity checks with Docusign APIs",
    summary:
      "A technical guide to building compliance-ready identity verification workflows by combining Docusign's Workflow Builder API, ID Evidence API, and private extension apps, applied to automating customer onboarding for financial platforms.",
    url: "https://www.docusign.com/blog/developers/automate-identity-checks-with-docusign-apis",
    source: "Docusign Developer Blog",
  },
  {
    id: "forefront-innovation",
    title:
      "At the Forefront of Innovation: Leading the Way with Streamlined Document Solutions",
    summary:
      "How Forefront Technologies built a custom integration between Docusign and OpenText Documentum using the eSignature API and Java SDK, eliminating manual processes for high document volumes while maintaining compliance.",
    url: "https://www.docusign.com/blog/developers/at-the-forefront-of-innovation-leading-the-way-with-streamlined-document",
    source: "Docusign Developer Blog",
  },
];

export type Video = {
  id: string;
  title: string;
  embedUrl: string;
  watchUrl: string;
  relatedPostId?: string;
};

export const featuredVideo: Video = {
  id: "verification-first-walkthrough",
  title:
    "Build a verification-first onboarding workflow with Docusign and J.P. Morgan Payments",
  embedUrl: "https://www.youtube.com/embed/mYmzE7omCpg",
  watchUrl: "https://www.youtube.com/watch?v=mYmzE7omCpg",
  relatedPostId: "verification-first-onboarding",
};

export type Interest = {
  id: string;
  icon: "dog" | "drama" | "pizza";
  title: string;
  blurb: string;
};

export const interests: Interest[] = [
  {
    id: "niko",
    icon: "dog",
    title: "Hanging with my dog, Niko",
    blurb: "Best coworker I've ever had. He's terrible at code review, but amazing for moral support.",
  },
  {
    id: "broadway",
    icon: "drama",
    title: "Broadway",
    blurb: "When I'm not at my desk, there's a decent chance I'm in a theater seat. 21 shows in the last two years and counting!",
  },
  {
    id: "italian",
    icon: "pizza",
    title: "Learning Italian",
    blurb: "Zero practical use for it yet. Mostly so I can order dessert with confidence on my next trip.",
  },
];
