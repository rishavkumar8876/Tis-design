import { MotionConfig } from 'framer-motion'
import { useTheme } from './hooks/useTheme'
import About from './components/About'
import Achievers from './components/Achievers'
import Awards from './components/Awards'
import Collaborations from './components/Collaborations'
import CustomCursor from './components/CustomCursor'
import EnquiryForm from './components/EnquiryForm'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Life from './components/Life'
import Navbar from './components/Navbar'
import Parents from './components/Parents'
import Rankings from './components/Rankings'
import Reviews from './components/Reviews'
import ScrollProgress from './components/ScrollProgress'
import Showcase from './components/Showcase'
import Sports from './components/Sports'
import Stories from './components/Stories'
import VirtualTour from './components/VirtualTour'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CustomCursor />
      <Navbar theme={theme} onToggleTheme={toggle} />

      <main id="main">
        <Hero />
        <Showcase />
        <About />
        <Stories />
        <EnquiryForm />
        <Life />
        <Sports />
        <Rankings />
        <Achievers />
        <Awards />
        <VirtualTour />
        <Parents />
        <Reviews />
        <Collaborations />
      </main>

      <Footer />
    </MotionConfig>
  )
}
