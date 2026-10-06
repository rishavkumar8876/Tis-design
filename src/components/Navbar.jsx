import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { navLinks, school } from '../data/content'
import Photo from './Photo'
import ThemeToggle from './ThemeToggle'
import Button from './Button'

export default function Navbar({ theme, onToggleTheme }) {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Hide the bar while scrolling down, bring it back as soon as the visitor scrolls up.
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    setHidden(latest > previous && latest > 200 && !menuOpen)
    setScrolled(latest > 24)
  })

  const closeMenu = () => setMenuOpen(false)

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-80 transition-colors duration-300 ${
        scrolled || menuOpen ? 'border-b border-line bg-bg/85 backdrop-blur-lg' : ''
      }`}
      animate={{ y: hidden ? '-100%' : 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4">
        <a href="#top" aria-label={`${school.name} home`} className="shrink-0 rounded-xl bg-white p-1">
          <Photo src={school.logo} alt={school.name} fallbackText={school.short} eager className="h-12 w-auto" />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={school.helplineHref} className="hidden text-sm font-semibold xl:block">
            {school.helpline}
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Button href={school.applyUrl} className="hidden px-5 py-2.5 text-sm sm:inline-flex">
            Apply Now
          </Button>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="relative grid h-11 w-11 place-items-center rounded-full border border-line bg-surface lg:hidden"
          >
            <motion.span
              className="absolute h-0.5 w-5 rounded bg-ink"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 0 : -4 }}
            />
            <motion.span
              className="absolute h-0.5 w-5 rounded bg-ink"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? 0 : 4 }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="overflow-hidden lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 pt-2 pb-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <a href={link.href} onClick={closeMenu} className="block rounded-xl px-3 py-3 text-lg font-medium hover:bg-accent/15">
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-3">
                <Button href={school.applyUrl} className="w-full">
                  Apply Now
                </Button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
