import { useRef, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { gsap } from '../../hooks/useScrollAnimation.js'

export default function FaqItem({ faq }) {
  const [open, setOpen] = useState(false)
  const bodyRef = useRef(null)

  const toggle = () => {
    const el = bodyRef.current
    if (!open) {
      gsap.set(el, { height: 'auto' })
      const h = el.offsetHeight
      gsap.fromTo(el, { height: 0 }, { height: h, duration: 0.4, ease: 'power2.out' })
    } else {
      gsap.to(el, { height: 0, duration: 0.35, ease: 'power2.in' })
    }
    setOpen((o) => !o)
  }

  return (
    <div data-reveal className="border border-border rounded-md bg-surface overflow-hidden">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-medium">{faq.q}</span>
        <FiPlus className={`text-accent shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`} />
      </button>
      <div ref={bodyRef} className="h-0 overflow-hidden">
        <p className="px-6 pb-5 text-muted text-sm leading-relaxed">{faq.a}</p>
      </div>
    </div>
  )
}
