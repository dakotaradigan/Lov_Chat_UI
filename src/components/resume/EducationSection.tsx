import { motion } from 'framer-motion';
import { resumeInfo } from '@/data/resume';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GraduationCap, Award } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-28 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-16">
            Education & Certifications
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-xl bg-accent-blue-soft flex items-center justify-center">
                  <GraduationCap className="size-4 text-accent-blue" />
                </div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                  Education
                </h3>
              </div>
              
              <div className="space-y-4">
                {resumeInfo.education.map((edu) => (
                  <motion.div
                    key={edu.id}
                    className="bg-card border border-border/60 rounded-2xl p-5 space-y-2 shadow-sm card-hover"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -2 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1.5">
                        <h4 className="font-semibold tracking-tight">{edu.institution}</h4>
                        <p className="text-sm text-muted-foreground">
                          {edu.degree} in {edu.field}
                        </p>
                        {edu.honors && (
                          <p className="text-xs text-accent-blue font-medium">
                            {edu.honors}
                          </p>
                        )}
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground/60 bg-secondary/50 px-2 py-1 rounded-md shrink-0">
                        {edu.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-xl bg-accent-purple-soft flex items-center justify-center">
                  <Award className="size-4 text-accent-purple" />
                </div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                  Certifications
                </h3>
              </div>
              
              <div className="space-y-4">
                {resumeInfo.certifications.map((cert) => (
                  <motion.div
                    key={cert.id}
                    className="bg-card border border-border/60 rounded-2xl p-5 space-y-2 shadow-sm card-hover"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -2 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1.5">
                        <h4 className="font-semibold tracking-tight">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground/60 bg-secondary/50 px-2 py-1 rounded-md shrink-0">
                        {cert.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
