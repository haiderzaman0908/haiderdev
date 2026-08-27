import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

/* Floating arrow button — appears after scrolling, jumps back to the top (Hero) */
export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 24, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-24 right-6 z-[90] w-11 h-11 rounded-full bg-accent-grad text-[#08101F] flex items-center justify-center text-lg shadow-[0_10px_30px_-8px_rgba(214,46,0,0.7)] transition-transform duration-300 hover:-translate-y-1"
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}