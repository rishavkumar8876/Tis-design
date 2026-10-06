import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]
const VIEWPORT = { once: true, margin: '-80px' }

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

const groupVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

// Fades and slides a single block in when it scrolls into view.
export function Reveal({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}


export function Stagger({ children, className }) {
  return (
    <motion.div
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
