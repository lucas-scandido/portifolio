import { useState } from 'react'
import type { ReactNode } from 'react'
import { pt } from '@/i18n/pt'
import { en } from '@/i18n/en'
import type { Language } from '@/types'
import { LanguageContext } from '@/context/LanguageContextDef'

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('pt')

    const toggleLanguage = () => setLanguage(prev => (prev === 'en' ? 'pt' : 'en'))

    const t = language === 'pt' ? pt : en

    return (
        <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}