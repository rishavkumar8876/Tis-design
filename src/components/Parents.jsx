import { parents } from '../data/content'
import { Reveal, Stagger, StaggerItem } from './Reveal'
import Section from './Section'

export default function Parents() {
  return (
    <Section labelledBy="parents-title" className="bg-surface-alt">
      <Reveal className="mx-auto mb-12 max-w-3xl text-center">
        <h2 id="parents-title" className="font-display text-4xl font-extrabold sm:text-5xl">
          {parents.title}
        </h2>
        <blockquote className="mt-6 text-lg text-ink-soft">“{parents.quote}”</blockquote>
      </Reveal>

      <Stagger className="grid gap-6 md:grid-cols-3">
        {parents.videos.map((src, index) => (
          <StaggerItem key={src}>
            <video
              src={src}
              controls
              playsInline
              preload="none"
              aria-label={`Parent testimonial ${index + 1}`}
              className="mx-auto aspect-[9/16] w-full max-w-64 rounded-3xl bg-black object-contain"
            />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
