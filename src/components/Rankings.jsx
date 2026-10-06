import { rankings } from '../data/content'
import { Stagger, StaggerItem } from './Reveal'
import Section from './Section'

export default function Rankings() {
  return (
    <Section label="Rankings" className="bg-surface-alt">
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {rankings.map((item) => (
          <StaggerItem key={item.text}>
            <article className="h-full rounded-3xl border border-line bg-surface p-8">
              <p className="font-display text-7xl font-extrabold text-accent">{item.rank}</p>
              <h3 className="mt-2 font-display text-2xl font-extrabold">{item.place}</h3>
              <p className="mt-3 text-ink-soft">{item.text}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
