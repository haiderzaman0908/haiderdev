import { motion } from 'framer-motion'

/**
 * Letter-by-letter staggered reveal animation (like eleco.com.pk)
 *
 * Har character apne span mein wrap hota hai aur opacity 0 + translateY(24px)
 * se staggered delay ke saath animate hota hai.
 *
 * Props:
 * - text: string to animate
 * - className: wrapper classes
 * - charClassName: extra classes applied to every character
 * - highlight: words to render in accent color (e.g. ['reliable'])
 * - highlightClassName: classes for highlighted words
 * - delay: base delay in seconds before the first character starts
 * - stagger: delay between each character in seconds
 * - as: HTML tag for the wrapper (span, h1, h2, p ...)
 */
export default function AnimatedText({
  text,
  className = '',
  charClassName = '',
  highlight = [],
  highlightClassName = 'text-accent',
  delay = 0,
  stagger = 0.035,
  as: Tag = 'span',
}) {
  const words = text.split(' ')
  let charIndex = 0

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, wi) => {
        const clean = word.replace(/[^a-zA-Z0-9]/g, '')
        const isHighlighted = highlight.includes(clean)

        return (
          <span key={`${word}-${wi}`} className="inline-block whitespace-nowrap" aria-hidden="true">
            {Array.from(word).map((char, ci) => {
              const i = charIndex++
              return (
                <motion.span
                  key={ci}
                  className={`inline-block will-change-transform ${
                    isHighlighted ? highlightClassName : ''
                  } ${charClassName}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.55,
                    delay: delay + i * stagger,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {char}
                </motion.span>
              )
            })}
            {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        )
      })}
    </Tag>
  )
}