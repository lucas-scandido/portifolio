import { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { RevealSection } from '@/components/ui/RevealSection'
import { experiences, getExperience } from '@/data/experience'
import { TiChevronRight } from 'react-icons/ti'
import { cn } from '@/lib/utils'

const MOBILE_PER_PAGE = 3
const mobileExperiences = [...experiences].reverse()

export function Experience() {
    const { t, language } = useLanguage()
    const [activeId, setActiveId] = useState(experiences[experiences.length - 1].id)

    const active = getExperience(
        experiences.find(e => e.id === activeId)!,
        language
    )

    const CompanyButton = ({ exp }: { exp: typeof experiences[number] }) => (
        <button
            onClick={() => setActiveId(exp.id)}
            className="flex flex-col items-center gap-3 cursor-pointer"
        >
            <div className={cn(
                'w-16 h-16 rounded-full border-2 overflow-hidden flex items-center justify-center bg-bg-card transition-colors duration-300 z-10',
                activeId === exp.id ? 'border-accent' : 'border-border'
            )}>
                <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain p-2"
                    onError={ev => {
                        const target = ev.currentTarget
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                            parent.innerHTML = `<span style="font-family:var(--font-mono);font-size:11px;color:#3ddc84;font-weight:700">${exp.company.slice(0, 2).toUpperCase()}</span>`
                        }
                    }}
                />
            </div>
            <span className={cn(
                'font-mono text-xs tracking-wide transition-colors duration-200 text-center whitespace-nowrap',
                activeId === exp.id ? 'text-accent' : 'text-muted'
            )}>
                {exp.company}
            </span>
        </button>
    )

    return (
        <section id="experience" aria-label="Experiência" className="py-16 sm:py-28">
            <div className="relative z-10 w-full max-w-300 mx-auto px-6 sm:px-10">

                <RevealSection>
                    <SectionLabel
                        label={t.experience.label}
                        title={t.experience.title}
                        subtitle={t.experience.subtitle}
                    />
                </RevealSection>

                <RevealSection delay={100}>
                    {/* Mobile selector — scroll snap, 3 per page, newest first, connecting line */}
                    <div className="md:hidden mb-8 -mx-6 px-6">
                        <div
                            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                            style={{ scrollBehavior: 'smooth' }}
                        >
                            <div className="relative flex" style={{ width: `${mobileExperiences.length / MOBILE_PER_PAGE * 100}%` }}>
                                {/* Connecting line across all pages */}
                                <div className="absolute top-8 left-0 right-0 h-px bg-border" />

                                {/* Page groups */}
                                {Array.from({ length: Math.ceil(mobileExperiences.length / MOBILE_PER_PAGE) }).map((_, pageIdx) => (
                                    <div
                                        key={pageIdx}
                                        className="flex justify-between snap-start"
                                        style={{ width: `${100 / Math.ceil(mobileExperiences.length / MOBILE_PER_PAGE)}%`, flexShrink: 0 }}
                                    >
                                        {mobileExperiences
                                            .slice(pageIdx * MOBILE_PER_PAGE, (pageIdx + 1) * MOBILE_PER_PAGE)
                                            .map(exp => (
                                                <CompanyButton key={exp.id} exp={exp} />
                                            ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Desktop selector — all 6, horizontal scroll, oldest first */}
                    <div className="hidden md:block relative mb-8 overflow-x-auto pb-4">
                        <div className="absolute top-8 left-0 right-0 h-px bg-border" />
                        <div className="relative flex justify-between gap-4 min-w-0">
                            {experiences.map(exp => (
                                <CompanyButton key={exp.id} exp={exp} />
                            ))}
                        </div>
                    </div>
                </RevealSection>

                <RevealSection delay={200}>
                    <div key={activeId} className="bg-bg-card border border-border rounded-xl p-6 sm:p-8 animate-fadeIn">

                        <div className="flex flex-col gap-1 mb-6">
                            <h3 className="text-text font-semibold text-base sm:text-lg">{active.role}</h3>
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-mono text-xs text-muted">{active.period}</span>
                                <span className="text-muted text-xs">·</span>
                                <span className="font-mono text-xs text-muted">{active.workMode}</span>
                            </div>
                            <span className="font-mono text-sm text-accent mt-1">{active.company}</span>
                        </div>

                        <ul className="flex flex-col gap-2 mb-6">
                            {active.description.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-muted text-sm font-light leading-relaxed">
                                    <TiChevronRight size={16} className="text-accent mt-0.5 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div>
                            <span className="font-mono text-xs text-muted tracking-widest uppercase mb-3 block">
                                {t.experience.techs_label}
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {active.techs.map(tech => (
                                    <span key={tech} className="font-mono text-xs bg-accent/5 border border-accent/10 text-accent/80 px-3 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </RevealSection>
            </div>
        </section>
    )
}
