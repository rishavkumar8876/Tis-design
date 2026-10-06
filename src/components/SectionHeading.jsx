import { Reveal } from './Reveal'

export default function SectionHeading({ id, eyebrow, title, text, align = 'center' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <Reveal className={`mb-12 max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-accent uppercase">{eyebrow}</p>
      )}
      <h2 id={id} className="font-display text-4xl font-extrabold text-balance sm:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-lg text-ink-soft">{text}</p>}
    </Reveal>
  )
}
