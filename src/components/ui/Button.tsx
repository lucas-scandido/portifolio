import { cn } from '@/lib/utils'

interface ButtonProps {
    variant?: 'primary' | 'ghost'
    href?: string
    download?: string
    onClick?: () => void
    children: React.ReactNode
    className?: string
}

const variants = {
    primary: 'bg-accent text-bg font-semibold hover:bg-accent-hover',
    ghost: 'border border-border text-muted hover:border-accent hover:text-accent',
}

export function Button({
    variant = 'primary',
    href,
    onClick,
    children,
    className,
}: ButtonProps) {
    const base = cn(
        'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-mono tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap',
        variants[variant],
        className
    )

    if (href) {
        const isExternal = /^(https?:\/\/|mailto:|tel:)/.test(href)
        return (
            <a
                href={href}
                className={base}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
                {children}
            </a>
        )
    }

    return (
        <button onClick={onClick} className={base}>
            {children}
        </button>
    )
}