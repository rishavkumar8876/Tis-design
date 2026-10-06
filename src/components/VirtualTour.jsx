import { motion } from 'framer-motion'
import { school, tour } from '../data/content'
import { Reveal } from './Reveal'
import Button from './Button'
import Section from './Section'

export default function VirtualTour() {
  return (
    <Section labelledBy="tour-title">
      <Reveal className="relative min-h-[min(32rem,calc(100vw-1rem))] overflow-hidden rounded-[2.5rem] bg-[#0f1b3d] px-6 py-16 text-center text-[#f6f2e8] sm:py-24">
        <motion.div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 grid aspect-square w-[min(30rem,calc(100vw-3rem))] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-dashed border-[#ffc928]/40"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          <span className="absolute -top-4 h-8 w-8 rounded-full bg-[#ffc928]" />
        </motion.div>

        <div className="relative">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#ffc928] uppercase">{tour.eyebrow}</p>
          <h2 id="tour-title" className="mt-3 font-display text-5xl font-extrabold sm:text-7xl">
            {tour.title}
          </h2>
          <p aria-hidden="true" className="mt-4 font-display text-6xl font-extrabold text-[#ffc928]">
            360°
          </p>
          <Button href={school.virtualTourUrl} className="mt-8">
            Start the tour
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}
