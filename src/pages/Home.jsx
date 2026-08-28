import Hero from '../components/Hero/Hero.jsx'
import TechMarquee from '../components/TechMarquee/TechMarquee.jsx'
import About from '../components/About/About.jsx'
import Skills from '../components/Skills/Skills.jsx'
import Projects from '../components/Projects/Projects.jsx'
import Certificates from '../components/Certificates/Certificates.jsx'
import Faqs from '../components/Faqs/Faqs.jsx'
import Contact from '../components/Contact/Contact.jsx'
import QualificationsSection from '../components/Qualification/QualificationsSection.jsx'
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <QualificationsSection/>
      <Faqs />
      <Contact />
      <WhatsAppButton/>
    </>
  )
}
