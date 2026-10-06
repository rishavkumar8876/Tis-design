import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { achievers, media } from '../data/content'
import Photo from './Photo'
import ScrollRow from './ScrollRow'
import SectionHeading from './SectionHeading'
import Section from './Section'

export default function Achievers() {
  const [activeId, setActiveId] = useState(achievers.tabs[0].id)
  const activeTab = achievers.tabs.find((tab) => tab.id === activeId)

  return (
    <Section id="achievers" labelledBy="achievers-title">
      <SectionHeading id="achievers-title" title={achievers.title} />

      <div role="tablist" aria-label="Personality categories" className="mb-10 flex flex-wrap justify-center gap-3">
        {achievers.tabs.map((tab) => {
          const selected = tab.id === activeId
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveId(tab.id)}
              className="relative rounded-full px-6 py-3 text-sm font-semibold sm:text-base"
            >
              {selected && (
                <motion.span
                  layoutId="achievers-tab"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className={`relative ${selected ? 'text-accent-ink' : 'text-ink'}`}>{tab.label}</span>
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab.id}
          role="tabpanel"
          id={`panel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ScrollRow label={activeTab.label}>
            {activeTab.people.map((person) => (
              <article
                key={person.name}
                data-cursor="hover"
                className="w-72 shrink-0 snap-start overflow-hidden rounded-3xl border border-line bg-surface"
              >
                <Photo src={media(person.photo)} alt={person.name} className="h-72 w-full object-cover object-top" />
                <div className="p-5">
                  <h3 className="font-display text-xl font-extrabold">{person.name}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{person.role}</p>
                </div>
              </article>
            ))}
          </ScrollRow>
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}
