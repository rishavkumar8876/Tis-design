import { gallery, media } from '../data/content'
import Marquee from './Marquee'
import Photo from './Photo'


const PHRASE_COPIES = [1, 2, 3, 4]


export default function Showcase() {
  return (
    <section aria-label="Life at TIS" className="overflow-hidden">
      <div className="bg-accent py-5 text-accent-ink">
        <Marquee duration={30}>
          {PHRASE_COPIES.map((copy) => (
            <span key={copy} className="font-display text-4xl font-extrabold whitespace-nowrap uppercase sm:text-6xl">
              Let’s do it <span className="font-normal italic normal-case">with Tulas</span>
              <span aria-hidden="true" className="mx-6">
                ✦
              </span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="py-14">
        <Marquee duration={70}>
          {gallery.map((item) => (
            <figure
              key={item.file}
              data-cursor="hover"
              className="group relative h-80 w-60 shrink-0 overflow-hidden rounded-3xl sm:h-96 sm:w-72"
            >
              <Photo
                src={media(item.file)}
                alt={item.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-4 font-display text-xl text-white">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
