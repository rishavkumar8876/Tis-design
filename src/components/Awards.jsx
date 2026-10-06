import { awards, media } from '../data/content'
import Photo from './Photo'
import { Stagger, StaggerItem } from './Reveal'
import SectionHeading from './SectionHeading'
import Section from './Section'

export default function Awards() {
  return (
    <Section labelledBy="awards-title" className="bg-surface-alt">
      <SectionHeading id="awards-title" title={awards.title} text={awards.text} />

      <Stagger className="grid gap-6 md:grid-cols-3">
        {awards.items.map((award) => (
          <StaggerItem key={award.file}>
            <figure className="overflow-hidden rounded-3xl border border-line bg-surface">
              <Photo src={media(award.file)} alt={award.alt} className="h-72 w-full object-contain p-4" />
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
