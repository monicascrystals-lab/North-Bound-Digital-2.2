import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import Portfolio from './components/Portfolio.jsx'
import WhyChooseMe from './components/WhyChooseMe.jsx'
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import logo from './assets/images/North Bound Logo.png'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.1, 0.4, 0.8],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [menuOpen])

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <div className="app-shell">
      <Navbar
        logo={logo}
        isOpen={menuOpen}
        activeSection={activeSection}
        hasScrolled={hasScrolled}
        onToggleMenu={() => setMenuOpen((current) => !current)}
        onLinkClick={handleLinkClick}
      />

      <main>
        <Hero logo={logo} />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <WhyChooseMe />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
