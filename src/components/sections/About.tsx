import { useLanguage } from '@/hooks/useLanguage'
import { FaBriefcase, FaGraduationCap, FaRobot } from 'react-icons/fa'
import { TiChevronRight } from 'react-icons/ti'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { RevealSection } from '@/components/ui/RevealSection'

const CARD_ICONS = [FaBriefcase, FaGraduationCap, FaRobot]

export function About() {
    const { t } = useLanguage()

    const topCards = [
        { icon: CARD_ICONS[0], title: t.about.card_experience_title, desc: t.about.card_experience_desc },
        { icon: CARD_ICONS[1], title: t.about.card_education_title, desc: t.about.card_education_desc },
        { icon: CARD_ICONS[2], title: t.about.card_automation_title, desc: t.about.card_automation_desc },
    ]

    const objectiveItems = Array.isArray(t.about.objective_items) ? t.about.objective_items : []

    return (
        <section id="about" aria-label="Sobre" className="py-16 sm:py-28">
            <div className="relative z-10 w-full max-w-300 mx-auto px-6 sm:px-10">

                <RevealSection>
                    <SectionLabel
                        label={t.about.label}
                        title={t.about.title}
                        subtitle={t.about.subtitle}
                    />
                </RevealSection>

                <RevealSection delay={100}>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        {topCards.map(({ icon: Icon, title, desc }) => (
                            <div
                                key={title}
                                className="bg-bg-card border border-border rounded-xl p-6 flex flex-col gap-3 hover:border-accent/20 transition-colors duration-300"
                            >
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                                    <Icon size={20} />
                                </div>
                                <h3 className="text-text font-semibold text-base leading-snug">{title}</h3>
                                <p className="text-muted text-sm font-light leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </RevealSection>

                <RevealSection delay={200}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-accent/20 transition-colors duration-300">
                            <h3 className="text-text font-semibold text-base">{t.about.about_title}</h3>
                            <p className="text-muted text-sm font-light leading-relaxed whitespace-pre-line">
                                {t.about.about_desc}
                            </p>
                        </div>

                        <div className="bg-bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-accent/20 transition-colors duration-300">
                            <h3 className="text-text font-semibold text-base">{t.about.objective_title}</h3>
                            <ul className="flex flex-col gap-3">
                                {objectiveItems.map((item: string, index: number) => (
                                    <li
                                        key={`${item}-${index}`}
                                        className="flex items-start gap-2 text-muted text-sm font-light leading-relaxed"
                                    >
                                        <TiChevronRight size={16} className="text-accent mt-0.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </RevealSection>
            </div>
        </section>
    )
}