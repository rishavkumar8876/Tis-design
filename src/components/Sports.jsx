import { motion } from 'framer-motion'
import { sports } from '../data/content'
import SectionHeading from './SectionHeading'
import { Stagger, StaggerItem } from './Reveal'
import Section from './Section'

export default function Sports() {
  return (
    <Section id="sports" labelledBy="sports-title">
      <SectionHeading id="sports-title" title={sports.title} text={`${sports.lead} ${sports.sub}`} />

      <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
        {sports.list.map((sport) => (
          <StaggerItem key={sport.name}>
            <motion.div
              data-cursor="hover"
              className="flex h-full flex-col items-center gap-3 rounded-3xl border border-line bg-surface px-3 py-6 text-center"
              whileHover={{ y: -8, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              <span aria-hidden="true" className="text-4xl">
                {sport.icon}
              </span>
              <span className="text-sm font-semibold">{sport.name}</span>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
