import { FiEye, FiCheckCircle, FiFileText } from 'react-icons/fi'
import { GiDiamondTrophy } from 'react-icons/gi'

export default function CertificateCard({ cert, onView }) {
  return (
    <button
      type="button"
      onClick={onView}
      className="cert-card group relative w-full text-left bg-surface border border-border rounded-lg p-6 flex flex-col gap-3 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-card cursor-pointer"
    >
      {/* hover glow */}
      <span className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full bg-accent/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-start justify-between relative">
        <span className="w-12 h-12 rounded-xl bg-accent-grad text-[#08101F] flex items-center justify-center text-xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
         <GiDiamondTrophy />
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-accent">
          <FiEye /> View
        </span>
      </div>

      <h3 className="relative text-lg font-display leading-snug">{cert.title}</h3>
      <p className="relative text-muted text-sm">{cert.issuer}</p>

      <div className="relative flex items-center justify-between mt-auto pt-3 border-t border-border/70 group-hover:border-accent/30 transition-colors duration-300">
        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-accent">
          <FiCheckCircle className="text-[13px]" /> {cert.date}
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted group-hover:text-accent transition-colors duration-300">
          <FiFileText /> PDF
        </span>
      </div>
    </button>
  )
}
