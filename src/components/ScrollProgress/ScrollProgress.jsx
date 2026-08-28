import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../../hooks/useScrollAnimation.js'

export default function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        gsap.to(barRef.current, {
          scaleX: self.progress,
          duration: 0.1,
          ease: 'none',
          overwrite: true,
        })
      },
    })

    return () => trigger.kill()
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-[3px] bg-border/40">
      <div
        ref={barRef}
        className="h-full bg-accent-grad origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
