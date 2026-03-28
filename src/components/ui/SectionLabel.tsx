interface SectionLabelProps {
    label: string
    title: string
    subtitle: string
}

export function SectionLabel({ label, title, subtitle }: SectionLabelProps) {
    return (
        <div className="mb-10">
            {/* Label com linha */}
            <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs text-accent tracking-widest uppercase">
                    {label}
                </span>
                <div className="flex-1 h-px bg-border" />
            </div>

            {/* Title */}
            <h2
                className="font-semibold leading-tight tracking-tight"
                style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
            >
                {title}
                <br />
                <span className="text-muted font-light">{subtitle}</span>
            </h2>
        </div>
    )
}