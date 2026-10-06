import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { secret, stats } from '../data/content'
import { Reveal, Stagger, StaggerItem } from './Reveal'
import Section from './Section'


function CountUp({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (!inView) return undefined
    const controls = animate(count, value, { duration: 1.6, ease: 'easeOut' })
    return () => controls.stop()
  }, [inView, count, value])

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export default function Life() {
  return (
    <Section id="life" labelledBy="life-title" className="bg-[#0f1b3d] text-[#f6f2e8]">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 id="life-title" className="font-display text-3xl leading-snug font-extrabold text-balance sm:text-5xl">
          {secret.question}
        </h2>
        <p className="mt-6 text-lg text-[#c3cae0]">{secret.answer}</p>
        <p className="mt-6 font-display text-3xl font-extrabold text-[#ffc928] italic">{secret.punchline}</p>
      </Reveal>

      <Stagger className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <div className="h-full rounded-3xl border border-white/15 bg-white/5 p-6 text-center sm:p-8">
              <p className="font-display text-5xl font-extrabold text-[#ffc928] sm:text-6xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-semibold tracking-wider text-[#c3cae0] uppercase">{stat.label}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
