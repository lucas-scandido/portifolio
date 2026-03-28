import { useContext } from 'react'
import { LanguageContext } from '@/context/LanguageContextDef'
import type { LanguageContextData } from '@/context/LanguageContextDef'

export function useLanguage(): LanguageContextData {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}