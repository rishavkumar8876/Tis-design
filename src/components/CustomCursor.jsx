import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { usePointerFine } from '../hooks/usePointerFine'

const HOVER_SELECTOR = 'a, button, input, select, label, [data-cursor="hover"]'
const RING_SPRING = { stiffness: 450, damping: 38, mass: 0.5 }


export default function CustomCursor() {
  const isFinePointer = usePointerFine()
  const [hovering, setHovering] = useState(false)
  const [pressed, setPressed] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, RING_SPRING)
  const ringY = useSpring(y, RING_SPRING)

  useEffect(() => {
    if (!isFinePointer) return undefined

    document.body.classList.add('has-custom-cursor')

    const handleMove = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    const handleOver = (event) => {
      setHovering(event.target instanceof Element && event.target.closest(HOVER_SELECTOR) !== null)
    }
    const handleDown = () => setPressed(true)
    const handleUp = () => setPressed(false)

    window.addEventListener('pointermove', handleMove, { passive: true })
    window.addEventListener('pointerover', handleOver)
    window.addEventListener('pointerdown', handleDown)
    window.addEventListener('pointerup', handleUp)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerover', handleOver)
      window.removeEventListener('pointerdown', handleDown)
      window.removeEventListener('pointerup', handleUp)
    }
  }, [isFinePointer, x, y])

  if (!isFinePointer) return null

  return (
    <>
      <motion.div
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-100 -mt-[18px] -ml-[18px] h-9 w-9 rounded-full border-2 border-accent ${
          hovering ? 'bg-accent/25' : ''
        }`}
        style={{ x: ringX, y: ringY }}
        animate={{ scale: pressed ? 0.8 : hovering ? 1.8 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-100 -mt-[3px] -ml-[3px] h-1.5 w-1.5 rounded-full bg-accent"
        style={{ x, y }}
      />
    </>
  )
}
