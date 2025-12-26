import { motion } from 'framer-motion';
import { resumeInfo } from '@/data/resume';
import { SkillsSection } from '@/components/resume/SkillsSection';
import { ExperienceSection } from '@/components/resume/ExperienceSection';
import { EducationSection } from '@/components/resume/EducationSection';
import { HeroChat } from '@/components/resume/HeroChat';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { SEOHead } from '@/components/seo/SEOHead';
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
        {/* Hero Section */}
        <section className="relative w-full flex flex-col items-center pt-24 pb-12 px-6 bg-gradient-to-b from-secondary/50 to-background">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-40" />
          
          <motion.div
            className="relative text-center space-y-4 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Name */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {resumeInfo.name}
            </motion.h1>
            
            {/* Role */}
            <motion.p
              className="text-xl md:text-2xl font-light tracking-wide text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {resumeInfo.role}
            </motion.p>

            {/* Tagline */}
            <motion.p
              className="text-base md:text-lg font-light leading-relaxed text-muted-foreground max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {resumeInfo.tagline}
            </motion.p>

            {/* Contact links */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href={`mailto:${resumeInfo.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="size-4" />
                <span>{resumeInfo.email}</span>
              </a>
              
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4" />
                <span>{resumeInfo.location}</span>
              </span>

              {resumeInfo.linkedin && (
                <a
                  href={resumeInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="size-4" />
                  <span>GitHub</span>
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* Hero Chat - Ask Me Anything */}
          <div className="relative mt-8 w-full flex justify-center">
            <HeroChat />
          </div>
        </section>

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Education Section */}
        <EducationSection />
      </div>
    </>
  );
}
