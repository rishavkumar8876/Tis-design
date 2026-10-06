import { stories } from '../data/content'
import { Reveal } from './Reveal'
import Photo from './Photo'
import Section from './Section'


export default function Stories() {
  return (
    <Section label="Student stories" className="bg-surface-alt">
      <div className="space-y-20 sm:space-y-28">
        {stories.map((story, index) => (
          <article key={story.quote} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <Reveal className={index % 2 === 1 ? 'md:order-2' : ''}>
              <div className="overflow-hidden rounded-[2rem] bg-accent/20">
                <Photo src={story.image} alt={story.alt} className="h-80 w-full object-contain object-bottom sm:h-[28rem]" />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <blockquote className="font-display text-3xl leading-tight font-extrabold text-balance sm:text-4xl">
                “{story.quote}”
              </blockquote>
              <p className="mt-6 text-lg text-ink-soft">{story.text}</p>
            </Reveal>
          </article>
        ))}
      </div>
    </Section>
  )
}
