import { useLanguage } from '@/hooks/useLanguage'
import { cn } from '@/lib/utils'

export function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage()

    return (
        <div className="hidden md:flex fixed bottom-6 right-6 z-50 items-center bg-bg-card border border-border rounded-full p-1 shadow-lg">
            <button
                onClick={() => language === 'en' && toggleLanguage()}
                className={cn(
                    'font-mono text-xs px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer',
                    language === 'pt'
                        ? 'bg-accent text-bg font-semibold'
                        : 'text-muted hover:text-accent'
                )}
            >
                PT
            </button>
            <button
                onClick={() => language === 'pt' && toggleLanguage()}
                className={cn(
                    'font-mono text-xs px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer',
                    language === 'en'
                        ? 'bg-accent text-bg font-semibold'
                        : 'text-muted hover:text-accent'
                )}
            >
                EN
            </button>
        </div>
    )
}