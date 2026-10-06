import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gallery, hero, media, school } from '../data/content'
import Button from './Button'
import Photo from './Photo'

const EASE = [0.22, 1, 0.36, 1]
const TITLE_WORDS = hero.title.split(' ')


const COLLAGE = [
  { index: 1, className: 'left-0 top-10 rotate-[-6deg]', delay: 0 },
  { index: 3, className: 'right-0 top-0 rotate-[5deg]', delay: 0.6 },
  { index: 7, className: 'bottom-0 left-1/4 rotate-[2deg]', delay: 1.2 },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 160])
  const collageY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section
      id="top"
      ref={sectionRef}
      aria-labelledby="hero-title"
      className="relative flex min-h-svh items-center overflow-hidden px-4 pt-28 pb-16"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: blobY }}
        className="pointer-events-none absolute -top-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-ink/10 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.p
            className="mb-5 inline-block rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-semibold"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            CBSE · Co-ed · Class 4 to 12 · Dehradun
          </motion.p>

          <h1 id="hero-title" className="font-display text-5xl leading-[1.05] font-extrabold sm:text-6xl xl:text-7xl">
            {TITLE_WORDS.map((word, index) => (
              <span key={`${word}-${index}`} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.15 + index * 0.08 }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            className="mt-7 max-w-xl space-y-4 text-lg text-ink-soft"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.8 }}
          >
            <p className="text-xl font-medium text-ink">{hero.lead}</p>
            <p>{hero.body}</p>
            <p>{hero.extra}</p>
          </motion.div>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1 }}
          >
            <Button href={school.applyUrl}>Apply Now</Button>
            <Button href="#enquire" variant="ghost">
              Enquire Now
            </Button>
            <a href={school.helplineHref} className="text-sm font-semibold hover:text-accent">
              Admissions Helpline {school.helpline}
            </a>
          </motion.div>
        </div>

        <motion.div aria-hidden="true" style={{ y: collageY }} className="relative mx-auto h-[26rem] w-full max-w-md sm:h-[32rem]">
          {COLLAGE.map(({ index, className, delay }) => (
            <motion.div
              key={gallery[index].file}
              className={`absolute w-44 sm:w-56 ${className}`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.5 + delay / 2 },
                scale: { duration: 0.8, delay: 0.5 + delay / 2 },
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay },
              }}
            >
              <div className="overflow-hidden rounded-3xl border-4 border-surface shadow-2xl">
                <Photo src={media(gallery[index].file)} alt={gallery[index].label} className="aspect-[3/4] w-full object-cover" eager />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
