import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Reusable scroll-reveal hook.
 * Pass a ref to the section wrapper. It animates any element inside
 * that wrapper carrying the `data-reveal` attribute.
 */
export function useScrollReveal(ref, deps = []) {
  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      const items = ref.current.querySelectorAll('[data-reveal]')

      items.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: (i % 6) * 0.08,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, ref)

    return () => ctx.revert()
  }, deps)
}

export { gsap, ScrollTrigger }
