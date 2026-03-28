import { useEffect, useState } from 'react'

const SECTIONS = ['hero', 'about', 'experience', 'skills', 'projects']

export function useActiveSection(): string {
    const [activeSection, setActiveSection] = useState('hero')

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const viewportHeight = window.innerHeight
            let current = 'hero'

            for (const id of SECTIONS) {
                const el = document.getElementById(id)
                if (!el) continue
                const top = el.getBoundingClientRect().top + scrollY
                if (scrollY >= top - viewportHeight * 0.4) {
                    current = id
                }
            }

            setActiveSection(current)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return activeSection
}