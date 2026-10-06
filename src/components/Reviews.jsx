import { reviews } from '../data/content'
import ScrollRow from './ScrollRow'
import SectionHeading from './SectionHeading'
import Section from './Section'

const initials = (name) =>
  name
    .replace(/^(Mrs|Mr|Ms)\s+/i, '')
    .split(' ')
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join('')

export default function Reviews() {
  return (
    <Section id="reviews" labelledBy="reviews-title">
      <SectionHeading id="reviews-title" title="Google Reviews" />

      <ScrollRow label="Google reviews">
        {reviews.map((review) => (
          <figure
            key={review.name}
            data-cursor="hover"
            className="flex w-80 shrink-0 snap-start flex-col justify-between rounded-3xl border border-line bg-surface p-7"
          >
            <blockquote className="text-ink-soft">“{review.text}”</blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent font-display text-lg font-extrabold text-accent-ink"
              >
                {initials(review.name)}
              </span>
              <span>
                <span className="block font-semibold">{review.name}</span>
                <span className="block text-sm text-ink-soft">{review.relation}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </ScrollRow>
    </Section>
  )
}
