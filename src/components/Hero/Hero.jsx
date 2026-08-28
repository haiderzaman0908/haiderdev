import { useEffect, useRef, useState } from 'react'
import { FiArrowRight, FiFileText, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { gsap } from '../../hooks/useScrollAnimation.js'
import { motion } from "framer-motion";
import AnimatedText from '../AnimatedText/AnimatedText.jsx'
import PdfModal from '../PdfModal/PdfModal.jsx'
import resumePdf from '../../images/M.Haider Zaman Resume.pdf'
import profileImg from '../../../images/myimg.jpg'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/haiderzaman0908', icon: <FiGithub /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/m-haider-zaman/', icon: <FiLinkedin /> },
  { label: 'Email', href: 'mailto:haiderzaman0908@gmail.com', icon: <FiMail /> },
]

export default function Hero() {
  const codeLineRef = useRef(null)
  const heroRef = useRef(null)
  const [cvOpen, setCvOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-eyebrow', { opacity: 0, y: 16, duration: 0.6 })
        .from('.hero-desc', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
        .from('.hero-actions', { opacity: 0, y: 20, duration: 0.6 }, '-=0.35')
        .from('.hero-socials', { opacity: 0, y: 16, duration: 0.6 }, '-=0.3')

      const text = "const developer = 'Haider Zaman';"
      if (codeLineRef.current) {
        codeLineRef.current.textContent = ''
        let i = 0
        const typeInterval = setInterval(() => {
          codeLineRef.current.textContent = text.slice(0, i + 1)
          i++
          if (i === text.length) clearInterval(typeInterval)
        }, 45)
      }

      gsap.to('.hero-blob-1', { y: 24, x: 12, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.hero-blob-2', { y: -20, x: -14, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-[100px] overflow-hidden" ref={heroRef} id="home">
      <div className="hero-blob-1 absolute w-[420px] h-[420px] rounded-full blur-[120px] opacity-35 bg-accent -top-20 -right-16 z-0" />
      <div className="hero-blob-2 absolute w-[420px] h-[420px] rounded-full blur-[120px] opacity-25 bg-accent2 -bottom-24 -left-20 z-0" />

      <div className="container-app relative z-10 grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <div>
          <span className="hero-eyebrow eyebrow">
             <motion.div className="h-[2px] w-10 rounded-full bg-[#DB2E03]" initial={{ width: 5,height: 3, opacity: 0 }}
              animate={{ width: 35 ,height: 3, opacity: 1 }}
              transition={{
             duration: 0.7,
              ease: "easeOut",
               }}/><b>Available for work</b></span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
            <AnimatedText
              text="Building fast,"
              className="block"
              delay={0.15}
            />
            <AnimatedText
              text="reliable web"
              className="block"
              delay={0.45}
              highlight={['reliable']}
              highlightClassName="bg-accent-grad bg-clip-text text-transparent"
            />
            <AnimatedText
              text="experiences."
              className="block"
              delay={0.75}
            />
          </h1>
          <p className="hero-desc text-muted text-base leading-relaxed max-w-lg mb-9">
            I'm <strong className="text-text">M. Haider Zaman</strong>, a Full-Stack Developer specialising
            in WordPress, Shopify, and the MERN stack. I turn ideas into clean, responsive,
            user-first products.
          </p>
          <div className="hero-actions flex gap-4 flex-wrap">
            <a href="#projects" className="btn btn-primary">
              View Projects <FiArrowRight />
            </a>
            <button type="button" className="btn btn-primary" onClick={() => setCvOpen(true)}>
              <FiFileText /> View CV
            </button>
          </div>
        </div>

        <div>
<div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto rounded-2xl p-[2px] overflow-hidden group">

  {/* Moving Border */}
  <motion.div
    className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,#DB2E03_90deg,transparent_180deg,#DB2E03_270deg,transparent_360deg)]"
    animate={{ rotate: 360 }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  {/* Image */}
  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
    <img
      src={profileImg}
      alt="Profile"
      className="w-full h-full object-cover rounded-2xl
                 transition-all duration-500 ease-out
                 group-hover:scale-105
                 group-hover:brightness-110"
    />
  </div>

</div>
        </div>
      </div>

      {/* CV popup */}
      <PdfModal
        open={cvOpen}
        onClose={() => setCvOpen(false)}
        title="M. Haider Zaman — Resume / CV"
        src={resumePdf}
        downloadName="M-Haider-Zaman-CV.pdf"
      />
    </section>
  )
}
