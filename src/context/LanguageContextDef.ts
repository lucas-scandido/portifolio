import { createContext } from 'react'
import type { Translations } from '@/i18n/pt'
import type { Language } from '@/types'

export interface LanguageContextData {
    language: Language
    t: Translations
    toggleLanguage: () => void
}

export const LanguageContext = createContext<LanguageContextData | null>(null)