import { motion } from 'framer-motion'

const base =
  'inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold transition-colors'

const variants = {
  primary: 'bg-accent text-accent-ink hover:brightness-110',
  ghost: 'border-2 border-ink/30 text-ink hover:border-accent hover:bg-accent/15',
  dark: 'bg-[#0f1b3d] text-[#f6f2e8] hover:bg-[#1b2c5c]',
}

const press = { whileHover: { scale: 1.04 }, whileTap: { scale: 0.97 } }

// Renders a link when `href` is given, otherwise a real <button>.
export default function Button({ href, variant = 'primary', className = '', children, ...rest }) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a href={href} className={classes} {...press} {...rest}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button className={classes} {...press} {...rest}>
      {children}
    </motion.button>
  )
}
