import { motion } from 'framer-motion';
import { resumeInfo } from '@/data/resume';
import { SkillsSection } from '@/components/resume/SkillsSection';
import { ExperienceSection } from '@/components/resume/ExperienceSection';
import { EducationSection } from '@/components/resume/EducationSection';
import { HeroChat } from '@/components/resume/HeroChat';
import { ShareButton } from '@/components/resume/ShareButton';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { SEOHead } from '@/components/seo/SEOHead';
import { Toaster } from '@/components/ui/toaster';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

/**
 * Resume Assistant Homepage
 * Clean, minimal tech-focused design with AI chat capability
 */
export default function Home() {
  return (
    <>
      <SEOHead 
        title={`${resumeInfo.name} | ${resumeInfo.role}`}
        description={resumeInfo.summary}
      />
      
      <div className="min-h-screen">
        {/* Hero Section - Apple-inspired elegance */}
        <section className="relative w-full flex flex-col items-center pt-28 pb-16 px-6 overflow-hidden">
          {/* Soft radial gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent-blue-soft/30 via-background to-background" />
          
          {/* Subtle dot pattern */}
          <div 
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground)) 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}
          />
          
          <motion.div
            className="relative text-center space-y-6 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Name with subtle gradient */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {resumeInfo.name}
            </motion.h1>
            
            {/* Role with soft color */}
            <motion.p
              className="text-xl md:text-2xl font-medium tracking-wide text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {resumeInfo.role}
            </motion.p>

            {/* Tagline */}
            <motion.p
              className="text-base md:text-lg font-normal leading-relaxed text-muted-foreground/80 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {resumeInfo.tagline}
            </motion.p>

            {/* Contact links - refined pill style */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <a
                href={`mailto:${resumeInfo.email}`}
                className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary rounded-full transition-all duration-200"
              >
                <Mail className="size-4" />
                <span>{resumeInfo.email}</span>
              </a>
              
              <span className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground bg-secondary/50 rounded-full">
                <MapPin className="size-4" />
                <span>{resumeInfo.location}</span>
              </span>

              {resumeInfo.linkedin && (
                <a
                  href={resumeInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary rounded-full transition-all duration-200"
                >
                  <Linkedin className="size-4" />
                  <span>LinkedIn</span>
                </a>
              )}

              {resumeInfo.github && (
                <a
                  href={resumeInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary rounded-full transition-all duration-200"
                >
                  <Github className="size-4" />
                  <span>GitHub</span>
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* Hero Chat - Ask Me Anything */}
          <div className="relative mt-10 w-full flex justify-center">
            <HeroChat />
          </div>
        </section>

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Education Section */}
        <EducationSection />

        {/* Floating Share Button */}
        <ShareButton />
        <Toaster />
      </div>
    </>
  );
}
