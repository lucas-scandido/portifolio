import { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { RevealSection } from '@/components/ui/RevealSection'
import { projects, PROJECT_CATEGORIES } from '@/data/projects'
import type { ProjectCategory } from '@/data/projects'
import { cn } from '@/lib/utils'
import { FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const ITEMS_PER_PAGE = 3

export function Projects() {
    const { t, language } = useLanguage()
    const [active, setActive] = useState<ProjectCategory>('all')
    const [page, setPage] = useState(0)

    const filtered = projects.filter(p =>
        active === 'all' || p.category.includes(active as Exclude<ProjectCategory, 'all'>)
    )

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
    const paginated = filtered.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE)

    const handleFilter = (cat: ProjectCategory) => {
        setActive(cat)
        setPage(0)
    }

    return (
        <section id="projects" aria-label="Projetos" className="py-16 sm:py-28">
            <div className="relative z-10 w-full max-w-300 mx-auto px-6 sm:px-10">

                <RevealSection>
                    <SectionLabel
                        label={t.projects.label}
                        title={t.projects.title}
                        subtitle={t.projects.subtitle}
                    />
                </RevealSection>

                <RevealSection delay={100}>
                    <div className="flex flex-wrap gap-2 mb-6 sm:mb-10">
                        {PROJECT_CATEGORIES.map(cat => (
                            <button
                                key={cat.key}
                                onClick={() => handleFilter(cat.key)}
                                className={cn(
                                    'font-mono text-xs px-4 py-1.5 rounded-full border transition-all duration-200 cursor-pointer',
                                    active === cat.key
                                        ? 'border-accent text-accent bg-accent/10'
                                        : 'border-border text-muted hover:border-accent/50 hover:text-accent'
                                )}
                            >
                                {cat[language]}
                            </button>
                        ))}
                    </div>
                </RevealSection>

                <RevealSection delay={200}>
                    <div className="relative">

                        {/* Seta esquerda — apenas sm+ */}
                        {totalPages > 1 && (
                            <button
                                onClick={() => setPage(p => Math.max(0, p - 1))}
                                disabled={page === 0}
                                className="hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-border items-center justify-center text-muted hover:border-accent hover:text-accent transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer z-10"
                            >
                                <FiChevronLeft size={16} />
                            </button>
                        )}

                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {paginated.map(project => (
                                <div
                                    key={project.id}
                                    className="bg-bg-card border border-border rounded-xl overflow-hidden flex flex-col hover:border-accent/20 transition-colors duration-300"
                                >
                                    <div className="w-full h-48 overflow-hidden bg-bg flex items-center justify-center">
                                        <img
                                            src={project.image}
                                            alt={project.title[language]}
                                            className="w-full h-full object-cover"
                                            onError={e => {
                                                const target = e.currentTarget
                                                target.style.display = 'none'
                                                const parent = target.parentElement
                                                if (parent) {
                                                    parent.innerHTML = `<span style="font-family:var(--font-mono);font-size:11px;color:#7a877c">no image</span>`
                                                }
                                            }}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-3 p-6 flex-1">
                                        <h3 className="text-text font-semibold text-base leading-snug">
                                            {project.title[language]}
                                        </h3>

                                        <div className="flex flex-wrap gap-2">
                                            {project.category.map(cat => (
                                                <span
                                                    key={cat}
                                                    className="font-mono text-[10px] bg-accent/5 border border-accent/10 text-accent/70 px-2.5 py-1 rounded-full"
                                                >
                                                    {PROJECT_CATEGORIES.find(c => c.key === cat)?.[language]}
                                                </span>
                                            ))}
                                        </div>

                                        <p className="text-muted text-sm font-light leading-relaxed flex-1">
                                            {project.description[language]}
                                        </p>

                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-accent font-mono text-xs hover:gap-3 transition-all duration-200 mt-1"
                                        >
                                            {t.projects.view_project}
                                            <FiExternalLink size={13} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Seta direita — apenas sm+ */}
                        {totalPages > 1 && (
                            <button
                                onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                                disabled={page === totalPages - 1}
                                className="hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-border items-center justify-center text-muted hover:border-accent hover:text-accent transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer z-10"
                            >
                                <FiChevronRight size={16} />
                            </button>
                        )}

                        {/* Mobile pagination */}
                        {totalPages > 1 && (
                            <div className="flex lg:hidden items-center justify-center gap-4 mt-6">
                                <button
                                    onClick={() => setPage(p => Math.max(0, p - 1))}
                                    disabled={page === 0}
                                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    <FiChevronLeft size={16} />
                                </button>
                                <span className="font-mono text-xs text-muted">
                                    {page + 1} / {totalPages}
                                </span>
                                <button
                                    onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                                    disabled={page === totalPages - 1}
                                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    <FiChevronRight size={16} />
                                </button>
                            </div>
                        )}
                    </div>
                </RevealSection>
            </div>
        </section>
    )
}