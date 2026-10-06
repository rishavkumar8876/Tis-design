
export default function Section({ id, labelledBy, label, className = '', children }) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      aria-label={labelledBy ? undefined : label}
      className={`scroll-mt-20 px-4 py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}
