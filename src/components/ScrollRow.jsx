import { useRef } from 'react'


export default function ScrollRow({ children, label }) {
  const rowRef = useRef(null)

  const scrollRow = (direction) => {
    const row = rowRef.current
    if (!row) return
    row.scrollBy({ left: direction * row.clientWidth * 0.8, behavior: 'smooth' })
  }

  const arrowClasses =
    'grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-xl transition-colors hover:bg-accent hover:text-accent-ink'

  return (
    <div>
      <div
        ref={rowRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4"
      >
        {children}
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button type="button" aria-label={`Scroll ${label} left`} onClick={() => scrollRow(-1)} className={arrowClasses}>
          ←
        </button>
        <button type="button" aria-label={`Scroll ${label} right`} onClick={() => scrollRow(1)} className={arrowClasses}>
          →
        </button>
      </div>
    </div>
  )
}
