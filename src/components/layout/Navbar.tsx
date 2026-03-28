import { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'

function LangToggle() {
    const { language, toggleLanguage } = useLanguage()
    return (
        <div className="flex items-center bg-bg-card border border-border rounded-full p-1">
            <button
                onClick={() => language === 'en' && toggleLanguage()}
                className={cn(
                    'font-mono text-xs px-3 py-1 rounded-full transition-all duration-200 cursor-pointer',
                    language === 'pt' ? 'bg-accent text-bg font-semibold' : 'text-muted hover:text-accent'
                )}
            >PT</button>
            <button
                onClick={() => language === 'pt' && toggleLanguage()}
                className={cn(
                    'font-mono text-xs px-3 py-1 rounded-full transition-all duration-200 cursor-pointer',
                    language === 'en' ? 'bg-accent text-bg font-semibold' : 'text-muted hover:text-accent'
                )}
            >EN</button>
        </div>
    )
}

const NAV_ITEMS = [
    { key: 'about', href: '#about' },
    { key: 'experience', href: '#experience' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
] as const

type NavKey = typeof NAV_ITEMS[number]['key']

export function Navbar() {
    const { t } = useLanguage()
    const activeSection = useActiveSection()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-border bg-bg/85 backdrop-blur-xl">
            <div className="w-full max-w-300 mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#hero"
                    className="font-mono text-sm text-accent tracking-wide no-underline"
                >
                    lucas<span className="text-muted">.qa</span>
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-8 list-none">
                    {NAV_ITEMS.map(({ key, href }) => (
                        <li key={key}>
                            <a
                                href={href}
                                className={cn(
                                    'font-mono text-sm tracking-wide transition-colors duration-200',
                                    activeSection === key
                                        ? 'text-accent'
                                        : 'text-muted hover:text-accent'
                                )}
                                aria-current={activeSection === key ? 'page' : undefined}
                            >
                                {t.nav[key as NavKey]}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile: toggle + hamburger */}
                <div className="flex md:hidden items-center gap-2">
                    <LangToggle />

                    <button
                        onClick={() => setMenuOpen(prev => !prev)}
                        className="flex flex-col gap-1.5 p-1 cursor-pointer"
                        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={menuOpen}
                    >
                        <span className={cn('block w-5 h-px bg-muted transition-all duration-200', menuOpen && 'rotate-45 translate-y-1.75')} />
                        <span className={cn('block w-5 h-px bg-muted transition-all duration-200', menuOpen && 'opacity-0')} />
                        <span className={cn('block w-5 h-px bg-muted transition-all duration-200', menuOpen && '-rotate-45 -translate-y-1.75')} />
                    </button>
                </div>

            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-border bg-bg">
                    <ul className="flex flex-col list-none px-6 py-4 gap-4">
                        {NAV_ITEMS.map(({ key, href }) => (
                            <li key={key}>
                                <a
                                    href={href}
                                    onClick={() => setMenuOpen(false)}
                                    className={cn(
                                        'font-mono text-sm tracking-wide transition-colors duration-200',
                                        activeSection === key
                                            ? 'text-accent'
                                            : 'text-muted hover:text-accent'
                                    )}
                                    aria-current={activeSection === key ? 'page' : undefined}
                                >
                                    {t.nav[key as NavKey]}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}
