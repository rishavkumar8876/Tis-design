import { useState } from 'react'


export default function Photo({ src, alt, className = '', eager = false, fallbackText }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} grid place-items-center bg-linear-to-br from-surface-alt to-accent/40 px-3 font-display text-2xl font-extrabold text-ink-soft`}
      >
        {fallbackText ?? alt.charAt(0)}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  )
}
