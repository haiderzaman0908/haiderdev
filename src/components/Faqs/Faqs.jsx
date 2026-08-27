import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollAnimation.js'
import FaqItem from './FaqItem.jsx'

const faqs = [
  {
    q: 'What services do you offer?',
    a: 'I build WordPress and Shopify websites, custom React/Node.js web apps, and full-stack MERN applications — from landing pages to complete eCommerce stores.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'A simple WordPress site usually takes 5–10 days. A custom React/Node.js application depends on scope, typically 2–4 weeks.',
  },
  {
    q: 'Do you provide post-launch support?',
    a: 'Yes, I offer maintenance and support after delivery, including bug fixes, updates and performance improvements.',
  },
  {
    q: 'How can I get in touch or hire you?',
    a: 'Just click the "Hire Me" or WhatsApp button — it opens a direct chat with me so we can discuss your project right away.',
  },
]

export default function Faqs() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section className="section-pad" id="faqs" ref={ref}>
      <div className="container-app">
        <span className="eyebrow" data-reveal>FAQs</span>
        <h2 className="section-title" data-reveal>Frequently asked questions</h2>
        <p className="section-sub" data-reveal>Answers to what clients usually ask me before we start working together.</p>

        <div className="flex flex-col gap-4 max-w-3xl">
          {faqs.map((f) => (
            <FaqItem key={f.q} faq={f} />
          ))}
        </div>
      </div>
    </section>
  )
}
