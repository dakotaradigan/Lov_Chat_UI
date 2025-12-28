import { motion } from 'framer-motion';
import { resumeInfo, Skill } from '@/data/resume';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const categoryLabels: Record<Skill['category'], string> = {
  languages: 'Technical Languages',
  frameworks: 'Product Strategy',
  tools: 'Technical Skills',
  cloud: 'Leadership',
  databases: 'Databases',
};

const categoryOrder: Skill['category'][] = ['frameworks', 'tools', 'languages', 'cloud'];

export function SkillsSection() {
  const groupedSkills = resumeInfo.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  return (
    <section id="skills" className="py-16 md:py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-12">
            Skills & Expertise
          </h2>
        </ScrollReveal>

        <div className="space-y-10">
          {categoryOrder.map((category, categoryIndex) => (
            <ScrollReveal key={category} delay={categoryIndex * 0.1}>
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                  {categoryLabels[category]}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {groupedSkills[category]?.map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.03, duration: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="px-4 py-2 bg-card border border-border/60 rounded-xl text-sm font-medium tracking-wide shadow-sm hover:shadow-md hover:border-border transition-all duration-200 cursor-default"
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
