import { useEffect, useState } from 'react'

const SECTIONS = ['hero', 'about', 'skills', 'experience', 'projects']

export function useActiveSection(): string {
    const [activeSection, setActiveSection] = useState('hero')

    useEffect(() => {
        const observers: IntersectionObserver[] = []

        SECTIONS.forEach(id => {
            const element = document.getElementById(id)
            if (!element) return

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id)
                },
                { threshold: 0.4 }
            )

            observer.observe(element)
            observers.push(observer)
        })

        return () => observers.forEach(obs => obs.disconnect())
    }, [])

    return activeSection
}