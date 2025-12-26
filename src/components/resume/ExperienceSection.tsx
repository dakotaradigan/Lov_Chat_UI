import { motion } from 'framer-motion';
import { resumeInfo } from '@/data/resume';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MapPin } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-center mb-16">
            Experience
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {resumeInfo.experience.map((exp, index) => (
              <ScrollReveal key={exp.id} delay={index * 0.15}>
                <motion.div
                  className={`relative pl-8 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-2 w-3 h-3 rounded-full bg-foreground md:-translate-x-1.5 -translate-x-1.5" />

                  <div className="bg-card border border-border rounded-lg p-6 space-y-4 hover:border-foreground/20 transition-colors">
                    <div className="space-y-1">
                      <span className="text-sm font-medium text-muted-foreground tracking-wide">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-medium">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span className="font-light">{exp.company}</span>
                        <span className="text-border">•</span>
                        <span className="flex items-center gap-1 text-sm">
                          <MapPin className="size-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground font-light leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-foreground mt-1.5">•</span>
                          <span className="font-light">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
