import { useLanguage } from '@/hooks/useLanguage'

export function Footer() {
    const { t } = useLanguage()
    const year = new Date().getFullYear()

    return (
        <footer className="border-t border-border py-8 mt-16">
            <div className="w-full max-w-300 mx-auto px-6 sm:px-10">
                {/* Desktop */}
                <p className="hidden sm:block font-mono text-xs text-muted text-center tracking-wide">
                    {'</'}{' '}
                    <span className="text-accent">lucas candido</span>
                    {' >'}{' · '}
                    {t.footer.rights}{' · '}
                    <span className="text-accent">{year}</span>
                </p>

                {/* Mobile */}
                <div className="flex sm:hidden flex-col items-center gap-1 font-mono text-xs text-muted text-center tracking-wide">
                    <p>
                        {'</'}{' '}
                        <span className="text-accent">lucas candido</span>
                        {' >'}
                    </p>
                    <p>{t.footer.rights}</p>
                    <p className="text-accent">{year}</p>
                </div>
            </div>
        </footer>
    )
}