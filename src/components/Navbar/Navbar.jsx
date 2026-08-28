import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx'
import logoImg from '../../../images/myimg.jpg'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${
        scrolled
          ? 'py-3.5 bg-bg/90 backdrop-blur-md border-border'
          : 'py-5 border-transparent'
      }`}
    >
      <div className="container-app flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display font-semibold text-lg"
          onClick={() => setOpen(false)}
        >
          <span className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-accent/40 shrink-0">
            <img
              src={logoImg}
              alt="Haider Zaman"
              className="w-full h-full object-cover object-top"
            />
          </span>
          <span>
            Haider<span className="text-accent">.</span>dev
          </span>
        </Link>

        {/* Desktop + Mobile nav links */}
        <nav
          className={`
            fixed md:static top-0 h-screen md:h-auto
            w-[min(320px,80vw)] md:w-auto
            bg-surface md:bg-transparent
            border-l md:border-l-0 border-border
            flex flex-col md:flex-row
            items-center md:items-center
            justify-center md:justify-start
            gap-8 md:gap-8
            transition-[right] duration-400 ease-[cubic-bezier(0.65,0,0.35,1)]
            ${open ? 'right-0' : '-right-full md:right-auto'}
          `}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base md:text-[0.92rem] text-muted hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}

  
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3.5">
          <ThemeToggle />


          <a href="#contact" className="btn btn-primary hidden md:inline-flex">
            Hire Me
          </a>

          <button
            className="md:hidden text-2xl text-text"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}
