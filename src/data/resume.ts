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
  name: 'Your Name',
  role: 'Software Engineer',
  tagline: 'Building scalable solutions with modern technologies',
  summary: 'Experienced software engineer with a passion for creating efficient, scalable applications. Specialized in full-stack development with expertise in cloud architecture and modern JavaScript ecosystems.',
  location: 'San Francisco, CA',
  email: 'hello@yourname.dev',
  linkedin: 'https://linkedin.com/in/yourname',
  github: 'https://github.com/yourname',
  
  skills: [
    // Languages
    { name: 'TypeScript', category: 'languages' },
    { name: 'JavaScript', category: 'languages' },
    { name: 'Python', category: 'languages' },
    { name: 'Go', category: 'languages' },
    { name: 'SQL', category: 'languages' },
    
    // Frameworks
    { name: 'React', category: 'frameworks' },
    { name: 'Node.js', category: 'frameworks' },
    { name: 'Next.js', category: 'frameworks' },
    { name: 'Express', category: 'frameworks' },
    { name: 'FastAPI', category: 'frameworks' },
    
    // Tools
    { name: 'Git', category: 'tools' },
    { name: 'Docker', category: 'tools' },
    { name: 'Kubernetes', category: 'tools' },
    { name: 'CI/CD', category: 'tools' },
    { name: 'Terraform', category: 'tools' },
    
    // Cloud
    { name: 'AWS', category: 'cloud' },
    { name: 'GCP', category: 'cloud' },
    { name: 'Azure', category: 'cloud' },
    { name: 'Vercel', category: 'cloud' },
    
    // Databases
    { name: 'PostgreSQL', category: 'databases' },
    { name: 'MongoDB', category: 'databases' },
    { name: 'Redis', category: 'databases' },
    { name: 'Elasticsearch', category: 'databases' },
  ],
  
  experience: [
    {
      id: 'exp-1',
      company: 'Tech Company',
      role: 'Senior Software Engineer',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading development of core platform features and mentoring junior engineers.',
      highlights: [
        'Architected microservices handling 10M+ daily requests',
        'Reduced deployment time by 60% through CI/CD optimization',
        'Led team of 5 engineers on critical product launch',
      ],
    },
    {
      id: 'exp-2',
      company: 'Startup Inc',
      role: 'Full Stack Developer',
      period: '2020 - 2022',
      location: 'Remote',
      description: 'Built and maintained multiple customer-facing applications.',
      highlights: [
        'Developed React dashboard serving 50K+ users',
        'Implemented real-time features using WebSockets',
        'Improved application performance by 40%',
      ],
    },
    {
      id: 'exp-3',
      company: 'Digital Agency',
      role: 'Software Developer',
      period: '2018 - 2020',
      location: 'New York, NY',
      description: 'Worked on diverse client projects across various industries.',
      highlights: [
        'Delivered 15+ client projects on time and budget',
        'Built reusable component library used across projects',
        'Introduced automated testing practices',
      ],
    },
  ],
  
  education: [
    {
      id: 'edu-1',
      institution: 'University Name',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      year: '2018',
      honors: 'Magna Cum Laude',
    },
  ],
  
  certifications: [
    {
      id: 'cert-1',
      name: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
    },
    {
      id: 'cert-2',
      name: 'Google Cloud Professional',
      issuer: 'Google',
      year: '2022',
    },
  ],
};
