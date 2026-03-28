import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface RevealSectionProps {
    children: ReactNode
    className?: string
    delay?: number
}

export function RevealSection({ children, className, delay = 0 }: RevealSectionProps) {
    const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

    return (
        <div
            ref={ref}
            className={cn('transition-all duration-700 ease-out', className)}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    )
}