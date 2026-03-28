import { useLanguage } from '@/hooks/useLanguage'
import { Button } from '@/components/ui/Button'
import { RevealSection } from '@/components/ui/RevealSection'
import { LuDownload } from 'react-icons/lu'
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const SOCIAL_LINKS = [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/lucas-scandido', icon: FaLinkedinIn },
    { label: 'GitHub', href: 'https://github.com/lucas-scandido', icon: FaGithub },
    { label: 'Email', href: 'mailto:lucas.candidoqa@gmail.com', icon: MdOutlineEmail },
    { label: 'WhatsApp', href: 'https://wa.me/5543996697045', icon: FaWhatsapp },
] as const

export function Hero() {
    const { t, language } = useLanguage()

    return (
        <section id="hero" aria-label="Hero" className="relative min-h-screen flex items-center overflow-hidden">

            {/* Grid background */}
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(61,220,132,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(61,220,132,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Glow */}
            <div
                aria-hidden="true"
                className="absolute -top-24 -right-24 sm:-top-48 sm:-right-48 w-80 h-80 sm:w-175 sm:h-175 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(61,220,132,0.06) 0%, transparent 70%)' }}
            />

            {/* Content */}
            <div className="relative z-10 w-full max-w-300 mx-auto px-6 sm:px-10 py-20 sm:py-32">

                <RevealSection>
                    <h1
                        className="font-semibold leading-tight tracking-tight mb-4"
                        style={{ fontSize: 'clamp(42px, 7vw, 72px)' }}
                    >
                        <span className="text-text font-light block" style={{ fontSize: 'clamp(16px, 2.5vw, 32px)' }}>
                            {t.hero.greeting}{' '}
                            <span className="text-muted">{t.hero.greeting_suffix}</span>
                        </span>
                        <span className="text-accent">
                            {t.hero.name}
                        </span>
                    </h1>
                </RevealSection>

                <RevealSection delay={100}>
                    <p
                        className="font-semibold mb-6 text-muted"
                        style={{ fontSize: 'clamp(16px, 2.5vw, 26px)', whiteSpace: 'pre-line', lineHeight: 1.3 }}
                    >
                        {t.hero.role}
                    </p>
                </RevealSection>

                <RevealSection delay={200}>
                    <p className="text-muted font-light leading-relaxed max-w-xl mb-10 text-base sm:text-lg">
                        {t.hero.description}
                    </p>
                </RevealSection>

                <RevealSection delay={300}>
                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
                        <Button
                            href={language === 'pt' ? '/resume/CV_LucasCandido.pdf' : '/resume/Resume_LucasCandido.pdf'}
                            variant="primary"
                        >
                            <LuDownload size={15} />
                            {t.hero.cta_resume}
                        </Button>

                        <Button href="#projects" variant="ghost" className="w-fit">
                            {t.hero.cta_projects}
                        </Button>
                    </div>

                    {/* Social icons */}
                    <div className="flex items-center gap-2">
                        <span className="hidden sm:block w-px h-8 bg-border mr-2" />
                        {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-all duration-200"
                            >
                                <Icon size={15} />
                            </a>
                        ))}
                    </div>
                </RevealSection>
            </div>
        </section>
    )
}