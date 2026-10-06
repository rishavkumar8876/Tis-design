import { about, hero } from '../data/content'
import { Reveal } from './Reveal'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-accent uppercase">About TIS</p>
          <h2 id="about-title" className="font-display text-3xl leading-snug font-extrabold text-balance sm:text-4xl">
            {about.title}
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="rounded-3xl border border-line bg-surface p-8 sm:p-10">
          <h3 className="font-display text-2xl font-extrabold sm:text-3xl">{hero.excellenceTitle}</h3>
          <div className="mt-5 space-y-4 text-lg text-ink-soft">
            {hero.excellence.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
