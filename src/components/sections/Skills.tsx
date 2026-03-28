import { useLanguage } from '@/hooks/useLanguage'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { RevealSection } from '@/components/ui/RevealSection'
import { skillGroups, getSkillItems } from '@/data/skills'
import { TiChevronRight } from 'react-icons/ti'

export function Skills() {
    const { t, language } = useLanguage()

    return (
        <section id="skills" aria-label="Habilidades" className="py-16 sm:py-28">
            <div className="relative z-10 w-full max-w-300 mx-auto px-6 sm:px-10">

                <RevealSection>
                    <SectionLabel
                        label={t.skills.label}
                        title={t.skills.title}
                        subtitle={t.skills.subtitle}
                    />
                </RevealSection>

                <RevealSection delay={100}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {skillGroups.map(group => (
                            <div
                                key={group.id}
                                className="bg-bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-accent/20 transition-colors duration-300"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                                        <group.icon size={16} />
                                    </div>
                                    <h3 className="text-text font-semibold text-sm">
                                        {group.title[language]}
                                    </h3>
                                </div>

                                <ul className="flex flex-col gap-2">
                                    {getSkillItems(group, language).map(item => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-2 text-muted text-sm font-light"
                                        >
                                            <TiChevronRight size={14} className="text-accent shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </RevealSection>
            </div>
        </section>
    )
}