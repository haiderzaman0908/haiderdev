import { useEffect, useRef, useState } from 'react'
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiUser,
} from 'react-icons/fi'
import { gsap } from '../../hooks/useScrollAnimation.js'
import AnimatedText from '../AnimatedText/AnimatedText.jsx'
import resumePdf from '../../images/M.Haider Zaman Resume.pdf'

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/haiderzaman0908',
    icon: <FiGithub />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/m-haider-zaman/',
    icon: <FiLinkedin />,
  },
  {
    label: 'Email',
    href: 'mailto:haiderzaman0908@gmail.com',
    icon: <FiMail />,
  },
]

// Backend base URL.
// - Local dev: leave VITE_API_URL unset so requests go to the Vite proxy
//   (vite.config.js proxies /api -> http://localhost:5000).
// - Production: set VITE_API_URL in your CLIENT Vercel project to the
//   deployed backend URL, e.g. https://your-backend-project.vercel.app
const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '')

export default function Contact() {
  const ref = useRef(null)

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState('')

  // =====================================
  // GSAP Animation
  // =====================================

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-reveal', {
        opacity: 0,
        y: 36,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 78%',
        },
      })

      gsap.from('.contact-form-card', {
        opacity: 0,
        x: 44,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-form-card',
          start: 'top 85%',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  // =====================================
  // Handle Input
  // =====================================

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })

    setStatus('')
  }

  // =====================================
  // Submit Form
  // =====================================

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill all fields.')
      return
    }

    setSending(true)
    setStatus('')

    try {
      const response = await fetch(
        `${API_URL}/api/contact`,
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || 'Something went wrong.'
        )
      }

      setStatus('Message sent successfully!')

      setForm({
        name: '',
        email: '',
        message: '',
      })

    } catch (error) {
      console.error('Contact form error:', error)

      setStatus(
        'Failed to send message. Please try again.'
      )
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      className="section mb-20"
      id="contact"
      ref={ref}
    >
      <div className="container-app">

        <div
          className="
            bg-surface
            border
            border-border
            rounded-lg
            p-8
            md:p-14
            grid
            grid-cols-1
            md:grid-cols-2
            gap-12
            items-start
          "
        >

          {/* =================================
              LEFT — INFO
          ================================= */}

          <div>

            <span className="eyebrow contact-reveal">
              Get In Touch
            </span>

            <h2 className="section-title contact-reveal">

              <AnimatedText
                as="span"
                text="Let's build something great together."
                stagger={0.015}
                highlight={['great']}
              />

            </h2>

            <p
              className="
                text-muted
                leading-relaxed
                mb-8
                max-w-md
                contact-reveal
              "
            >
              Have a project in mind? Fill the form and
              I'll get back to you by email — or reach me
              directly through any of the links below.
            </p>

            {/* Contact Information */}

            <div
              className="
                flex
                flex-col
                gap-4
                mb-8
                contact-reveal
              "
            >

              <a
                href="mailto:haiderzaman0908@gmail.com"
                className="
                  inline-flex
                  items-center
                  gap-3
                  text-sm
                  text-muted
                  hover:text-accent
                  transition-colors
                  w-fit
                "
              >
                <FiMail className="text-accent" />

                haiderzaman0908@gmail.com
              </a>

              <span
                className="
                  inline-flex
                  items-center
                  gap-3
                  text-sm
                  text-muted
                "
              >
                <FiMapPin className="text-accent" />

                Doulat Gate, Multan, Punjab
              </span>

            </div>

            {/* Social Links */}



            {/* Download CV */}

            <a
              href={resumePdf}
              download="M-Haider-Zaman-CV.pdf"
              className="
                btn
                btn-primary
                justify-center
                w-full
                mt-3
                !px-4
                text-xs
              "
            >
              <FiDownload />
              Download CV
            </a>

          </div>


          {/* =================================
              RIGHT — FORM
          ================================= */}

          <form
            onSubmit={handleSubmit}
            className="
              contact-form-card
              flex
              flex-col
              gap-4
            "
          >

            {/* Name */}

            <label className="flex flex-col gap-1.5">

              <span
                className="
                  font-mono
                  text-[11px]
                  uppercase
                  tracking-widest
                  text-muted
                  inline-flex
                  items-center
                  gap-1.5
                "
              >
                <FiUser />
                Your Name
              </span>

              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="
                  bg-bg
                  border
                  border-border
                  rounded-sm
                  px-4
                  py-3
                  text-sm
                  outline-none
                  transition-colors
                  focus:border-accent
                  placeholder:text-muted/60
                "
              />

            </label>


            {/* Email */}

            <label className="flex flex-col gap-1.5">

              <span
                className="
                  font-mono
                  text-[11px]
                  uppercase
                  tracking-widest
                  text-muted
                  inline-flex
                  items-center
                  gap-1.5
                "
              >
                <FiMail />
                Your Email
              </span>

              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="
                  bg-bg
                  border
                  border-border
                  rounded-sm
                  px-4
                  py-3
                  text-sm
                  outline-none
                  transition-colors
                  focus:border-accent
                  placeholder:text-muted/60
                "
              />

            </label>


            {/* Message */}

            <label className="flex flex-col gap-1.5">

              <span
                className="
                  font-mono
                  text-[11px]
                  uppercase
                  tracking-widest
                  text-muted
                "
              >
                Message
              </span>

              <textarea
                name="message"
                required
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="
                  bg-bg
                  border
                  border-border
                  rounded-sm
                  px-4
                  py-3
                  text-sm
                  outline-none
                  resize-none
                  transition-colors
                  focus:border-accent
                  placeholder:text-muted/60
                "
              />

            </label>


            {/* Status */}

            {status && (
              <p
                className={`
                  text-xs
                  ${
                    status.includes('successfully')
                      ? 'text-success'
                      : 'text-red-500'
                  }
                `}
              >
                {status}
              </p>
            )}


            {/* Submit */}

            <button
              type="submit"
              disabled={sending}
              className="
                btn
                btn-primary
                justify-center
                mt-1
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {sending ? 'Sending...' : 'Send Message'}

              {!sending && <FiSend />}
            </button>

          </form>

        </div>
      </div>
    </section>
  )
}