const MARQUEE_ITEMS = [
  'WordPress',
  'React.js',
  'JavaScript',
  'Node.js',
  'MongoDB',
  'HTML5',
  'CSS3',
  'Shopify',
  'Tailwind CSS',
  'Express.js',
  'UI/UX Design',
]

/* Infinite scrolling tech strip — sits right below the Hero */
export default function TechMarquee() {
  return (
    <section
      aria-label="Technologies I work with"
      className="relative border-y border-border bg-surface/60 py-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
    >
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-10 font-mono text-sm text-muted"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          </span>
        ))}
      </div>
    </section>
  )
}