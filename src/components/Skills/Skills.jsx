import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import AnimatedText from '../AnimatedText/AnimatedText.jsx'
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiWordpress,
  SiShopify,
  SiFigma,
} from 'react-icons/si'

const CATEGORIES = ['All', 'Frontend', 'Backend', 'CMS & E-commerce', 'Design']

const SKILLS = [
  { name: 'React.js', level: 82, category: 'Frontend', icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', level: 85, category: 'Frontend', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML5', level: 95, category: 'Frontend', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', level: 92, category: 'Frontend', icon: SiCss, color: '#38BDF8' },
  { name: 'Tailwind CSS', level: 88, category: 'Frontend', icon: SiTailwindcss, color: '#22D3EE' },
  { name: 'Node.js', level: 75, category: 'Backend', icon: SiNodedotjs, color: '#47A248' },
  { name: 'Express.js', level: 74, category: 'Backend', icon: SiExpress, color: '#CFCFCF' },
  { name: 'MongoDB', level: 70, category: 'Backend', icon: SiMongodb, color: '#4DB33D' },
  { name: 'WordPress', level: 90, category: 'CMS & E-commerce', icon: SiWordpress, color: '#5EA8CC' },
  { name: 'Shopify', level: 78, category: 'CMS & E-commerce', icon: SiShopify, color: '#95BF47' },
  { name: 'UI/UX Design', level: 72, category: 'Design', icon: SiFigma, color: '#F24E1E' },
]

/* Smooth count-up percentage that starts when scrolled into view */
function CountUp({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const start = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="font-mono text-lg font-semibold text-text">
      {display}%
    </span>
  )
}

function SkillCard({ skill, index }) {
  const Icon = skill.icon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 26, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.18 } }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-surface border border-border rounded-md p-6 overflow-hidden transition-[border-color,transform] duration-300 hover:-translate-y-1.5 hover:border-accent"
    >
      {/* soft glow on hover */}
      <div
        className="absolute -top-14 -right-14 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none"
        style={{ background: skill.color }}
      />

      <div className="relative flex items-start justify-between mb-5">
        <div
          className="w-12 h-12 rounded-sm flex items-center justify-center text-[26px] border border-border bg-surface2 transition-all duration-300 group-hover:border-accent/60 group-hover:scale-105"
          style={{ color: skill.color }}
        >
          <Icon />
        </div>
        <CountUp value={skill.level} />
      </div>

      <h3 className="relative font-display font-semibold text-base">{skill.name}</h3>
      <p className="relative text-[11px] font-mono uppercase tracking-widest text-muted mt-1 mb-4">
        {skill.category}
      </p>

      {/* animated progress bar */}
      <div className="relative h-1.5 rounded-full bg-surface2 overflow-hidden">
        <motion.div
          className="h-full rounded-full relative overflow-hidden bg-accent-grad"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.1, delay: 0.2 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="shimmer absolute inset-0" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? SKILLS : SKILLS.filter((s) => s.category === active)

      return (
    <section className="section-pad relative" id="skills">
      <div className="container-app">
        {/* Header — centered */}
        <div className="text-center">
          <span className="eyebrow">My Skills</span>
          <h2 className="section-title">
            <AnimatedText
              as="span"
              text="Tools I use to ship real products"
              stagger={0.02}
              highlight={['real']}
            />
          </h2>
          <p className="section-sub mx-auto">
            A practical toolkit built through real client work — from WordPress builds to
            full custom MERN applications.
          </p>
        </div>

        {/* Category filter tabs — centered */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium border transition-colors duration-300 ${
                  isActive
                    ? 'border-transparent text-[#08101F]'
                    : 'border-border text-muted hover:text-text hover:border-accent/50'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skills-active-pill"
                    className="absolute inset-0 rounded-full bg-accent-grad"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            )
          })}
        </div>

        {/* Cards grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
