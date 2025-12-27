import { motion } from 'framer-motion';
import { resumeInfo } from '@/data/resume';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GraduationCap, Award } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-28 px-6 lg:px-8 bg-secondary/30 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-center mb-16">
            Education & Certifications
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="size-5 text-muted-foreground" />
                <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  Education
                </h3>
              </div>
              
              <div className="space-y-4">
                {resumeInfo.education.map((edu) => (
                  <motion.div
                    key={edu.id}
                    className="bg-background border border-border rounded-lg p-5 space-y-2 hover:border-foreground/20 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h4 className="font-medium">{edu.institution}</h4>
                        <p className="text-sm text-muted-foreground font-light">
                          {edu.degree} in {edu.field}
                        </p>
                        {edu.honors && (
                          <p className="text-sm text-muted-foreground italic">
                            {edu.honors}
                          </p>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground shrink-0">
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
                <Award className="size-5 text-muted-foreground" />
                <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  Certifications
                </h3>
              </div>
              
              <div className="space-y-4">
                {resumeInfo.certifications.map((cert) => (
                  <motion.div
                    key={cert.id}
                    className="bg-background border border-border rounded-lg p-5 space-y-2 hover:border-foreground/20 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h4 className="font-medium">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground font-light">
                          {cert.issuer}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground shrink-0">
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
