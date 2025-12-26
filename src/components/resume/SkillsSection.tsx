import { motion } from 'framer-motion';
import { resumeInfo, Skill } from '@/data/resume';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const categoryLabels: Record<Skill['category'], string> = {
  languages: 'Languages',
  frameworks: 'Frameworks & Libraries',
  tools: 'Tools & DevOps',
  cloud: 'Cloud Platforms',
  databases: 'Databases',
};

const categoryOrder: Skill['category'][] = ['languages', 'frameworks', 'tools', 'cloud', 'databases'];

export function SkillsSection() {
  const groupedSkills = resumeInfo.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  return (
    <section className="py-20 md:py-28 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-center mb-16">
            Skills & Technologies
          </h2>
        </ScrollReveal>

        <div className="space-y-12">
          {categoryOrder.map((category, categoryIndex) => (
            <ScrollReveal key={category} delay={categoryIndex * 0.1}>
              <div className="space-y-4">
                <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  {categoryLabels[category]}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {groupedSkills[category]?.map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-background border border-border rounded-full text-sm font-light tracking-wide hover:border-foreground/30 transition-colors"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
