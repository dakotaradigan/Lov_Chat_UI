export interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'tools' | 'cloud' | 'databases';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  year: string;
  honors?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface ResumeInfo {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  linkedin?: string;
  github?: string;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
}

export const resumeInfo: ResumeInfo = {
  name: 'Dakota Radigan, MBA',
  role: 'Senior Product Manager',
  tagline: 'Shipping data-driven investment solutions with AI & technical fluency',
  summary: 'Senior Product Manager with 5+ years shipping data-driven investment solutions and managing technical partnerships. Expert in validating client and operational pain points and translating them into functional specifications that drive measurable business impact. Combining deep investment operations knowledge with technical fluency (SQL, Python, AI) and a bias for action.',
  location: 'Seattle, WA',
  email: 'dakotaradigan@gmail.com',
  linkedin: 'https://linkedin.com/in/dakota-radigan',
  github: undefined,
  
  skills: [
    // Product Strategy
    { name: 'Product Launches', category: 'frameworks' },
    { name: 'Roadmap Definition', category: 'frameworks' },
    { name: 'GTM Strategy', category: 'frameworks' },
    { name: 'OKR/KPI Development', category: 'frameworks' },
    { name: 'User Research', category: 'frameworks' },
    { name: 'Customer Journeys', category: 'frameworks' },
    { name: 'Investment Operations', category: 'frameworks' },
    
    // Technical
    { name: 'Generative AI (LLMs, RAG, Agents)', category: 'tools' },
    { name: 'Python', category: 'languages' },
    { name: 'SQL', category: 'languages' },
    { name: 'API Integrations', category: 'tools' },
    { name: 'Automation', category: 'tools' },
    { name: 'CRM Tools', category: 'tools' },
    
    // Leadership
    { name: 'Cross-Functional Leadership', category: 'cloud' },
    { name: 'Stakeholder Management', category: 'cloud' },
    { name: 'Executive Communication', category: 'cloud' },
    { name: 'Strategic Partnerships', category: 'cloud' },
    { name: 'Client Service', category: 'cloud' },
  ],
  
  experience: [
    {
      id: 'exp-1',
      company: 'Parametric Portfolio (Morgan Stanley)',
      role: 'Vice President, Senior Product Manager',
      period: 'Jan 2024 – Present',
      location: 'Seattle, WA',
      description: 'Leading technical investment integrations and AI-powered product innovation.',
      highlights: [
        'Led technical investment integration with Wells Fargo, delivering pilot 2 weeks early—securing $32M initial AUM and a $3B+ pipeline',
        'Launched new investment product MVP ahead of schedule; captured $75M AUM within 6 months',
        'Architected a RAG-based GenAI assistant projected to resolve ~3,500+ annual email inquiries',
        'Appointed firm-wide "AI Champion," leading an 8-person task force; increased Copilot adoption by 60% in 2 months',
      ],
    },
    {
      id: 'exp-2',
      company: 'Parametric Portfolio (Morgan Stanley)',
      role: 'Vice President, Product Manager',
      period: 'Jan 2023 – Jan 2024',
      location: 'Seattle, WA',
      description: 'Drove scalability initiatives and enterprise partnerships.',
      highlights: [
        'Awarded firm-wide "Commitment to Excellence" for saving 2,500+ operational hours annually',
        'Partnered with Sales on $200M+ in enterprise deals as technical SME',
        'Built SQL-based analytics framework increasing feature utilization by 20%',
        'Chaired cross-functional leadership council reducing decision cycle times from weeks to days',
      ],
    },
    {
      id: 'exp-3',
      company: 'Parametric Portfolio (Morgan Stanley)',
      role: 'Analyst, Product Management',
      period: 'Jan 2021 – Jan 2023',
      location: 'Seattle, WA',
      description: 'Scaled direct indexing suite and led digital onboarding initiatives.',
      highlights: [
        'Launched 18 new benchmark strategies within 9 months, driving $100M+ in new AUM',
        'Wrote functional specifications for digital onboarding portal and led engineering rollout',
        'Engineered SQL reporting and heatmaps to diagnose bottlenecks across Sales, Client Service, and Ops',
      ],
    },
    {
      id: 'exp-4',
      company: 'Parametric Portfolio (Morgan Stanley)',
      role: 'Supervisor, Account Onboarding',
      period: 'Jul 2019 – Jan 2021',
      location: 'Seattle, WA',
      description: 'Led team overseeing strategic onboarding and workflow automation.',
      highlights: [
        'Led a team of 11 overseeing strategic onboarding of $493M in assets (1,200 accounts)',
        'QA Lead for Engineering, launching two internal workflow tools that digitized manual tasks',
        'Built SQL-based rule systems and Excel models to validate complex logic, reducing errors',
      ],
    },
  ],
  
  education: [
    {
      id: 'edu-1',
      institution: 'Washington State University',
      degree: 'MBA',
      field: 'Finance',
      year: '2021',
    },
    {
      id: 'edu-2',
      institution: 'Seattle University',
      degree: 'BA, Business Administration',
      field: 'Finance',
      year: '2017',
    },
  ],
  
  certifications: [
    {
      id: 'cert-1',
      name: 'AI Product Management',
      issuer: 'Product Faculty (OpenAI-led)',
      year: '2024',
    },
    {
      id: 'cert-2',
      name: 'PCEP – Certified Entry-Level Python Programmer',
      issuer: 'Python Institute',
      year: '2024',
    },
    {
      id: 'cert-3',
      name: 'AI Fluency: Frameworks & Foundations',
      issuer: 'Anthropic',
      year: '2024',
    },
    {
      id: 'cert-4',
      name: 'Introduction to Model Context Protocol',
      issuer: 'Anthropic',
      year: '2024',
    },
    {
      id: 'cert-5',
      name: 'Using Python to Access Web Data & Databases',
      issuer: 'Coursera',
      year: '2024',
    },
  ],
};
