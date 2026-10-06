import { collaborations, media } from '../data/content'
import Marquee from './Marquee'
import Photo from './Photo'
import { Reveal } from './Reveal'
import Section from './Section'

export default function Collaborations() {
  return (
    <Section labelledBy="collab-title" className="bg-surface-alt">
      <Reveal className="mb-12 text-center">
        <p className="font-display text-6xl font-extrabold text-accent">{collaborations.count}</p>
        <h2 id="collab-title" className="mt-2 text-sm font-semibold tracking-[0.2em] uppercase">
          {collaborations.title}
        </h2>
      </Reveal>

      <Marquee duration={45}>
        {collaborations.logos.map((logo) => (
          <div key={logo.file} className="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl bg-white p-4">
            <Photo src={media(logo.file)} alt={logo.alt} className="h-16 w-36 object-contain" />
          </div>
        ))}
      </Marquee>
    </Section>
  )
}
