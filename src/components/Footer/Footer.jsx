import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import logoImg from '../../../images/myimg.jpg'

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-app flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5 font-display font-semibold">
          <span className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-accent/40 shrink-0">
            <img
              src={logoImg}
              alt="Haider Zaman"
              className="w-full h-full object-cover object-top"
            />
          </span>
          <span>Haider.dev</span>
        </div>

        <p className="text-muted text-sm order-3 md:order-2">
          © {new Date().getFullYear()} M. Haider Zaman . Multan, Pk 
        </p>

        <div className="flex items-center gap-4 order-2 md:order-3 text-muted">
          <a href="mailto:haiderzaman0908@gmail.com" aria-label="Email" className="hover:text-accent hover:-translate-y-0.5 transition-all">
            <FiMail />
          </a>
          <a
            href="https://github.com/haiderzaman0908"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-accent hover:-translate-y-0.5 transition-all"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/m-haider-zaman/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent hover:-translate-y-0.5 transition-all"
          >
            <FiLinkedin />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            title="Back to top"
            className="hover:text-accent hover:-translate-y-0.5 transition-all"          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}
