
export default function Marquee({ children, duration = 40, className = '' }) {
  return (
    <div className={`marquee overflow-hidden ${className}`}>
      <div className="marquee-track" style={{ '--marquee-duration': `${duration}s` }}>
        <div className="flex shrink-0 items-center gap-6 pr-6">{children}</div>
        <div className="flex shrink-0 items-center gap-6 pr-6" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
