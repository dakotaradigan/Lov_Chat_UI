import { motion } from 'framer-motion';
import { resumeInfo } from '@/data/resume';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MapPin } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-16">
            Experience
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line - refined */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border/50 to-transparent md:-translate-x-px" />

          <div className="space-y-10">
            {resumeInfo.experience.map((exp, index) => (
              <ScrollReveal key={exp.id} delay={index * 0.1}>
                <motion.div
                  className={`relative pl-8 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -15 : 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot - refined with glow */}
                  <div className="absolute left-0 md:left-1/2 top-3 w-2.5 h-2.5 rounded-full bg-foreground md:-translate-x-1 -translate-x-1 shadow-[0_0_8px_rgba(0,0,0,0.1)]" />

                  <motion.div 
                    className="bg-card border border-border/60 rounded-2xl p-6 space-y-4 shadow-sm card-hover"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="space-y-2">
                      <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/70 bg-secondary/50 px-2.5 py-1 rounded-md">
                        {exp.period}
                      </span>
                      <h3 className="text-lg font-semibold tracking-tight">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span className="font-medium">{exp.company}</span>
                        <span className="text-border">•</span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="size-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 pt-1">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <span className="text-accent-blue mt-1.5 text-lg leading-none">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
