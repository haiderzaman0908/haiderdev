import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiDownload, FiExternalLink, FiFileText } from 'react-icons/fi'

/**
 * Detect a mobile/touch viewport so we can switch PDF strategy.
 * Mobile browsers (iOS Safari, many Android browsers) can't render a PDF
 * inside an `<iframe>`, so we fall back to opening the file in a native viewer.
 */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(max-width: 767px), (pointer: coarse)').matches
      : false
  )

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px), (pointer: coarse)')
    const onChange = () => setIsMobile(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return isMobile
}

/** Reliable download: fetch as a blob (iOS/Android ignore the download attr). */
async function downloadBlob(src, downloadName) {
  try {
    const res = await fetch(src)
    if (!res.ok) throw new Error('fetch failed')
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = downloadName || 'document.pdf'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  } catch (err) {
    window.open(src, '_blank', 'noopener,noreferrer')
  }
}

/**
 * Reusable PDF viewer popup.
 * Props: open, onClose, title, src (pdf url), downloadName
 */
export default function PdfModal({ open, onClose, title, src, downloadName }) {
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 44, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full bg-surface border border-border rounded-lg overflow-hidden flex flex-col shadow-card ${
              isMobile ? 'max-w-md' : 'max-w-4xl h-[85vh]'
            }`}
          >
            {/* header bar */}
            <div className="flex items-center justify-between gap-4 px-4 md:px-5 py-3.5 border-b border-border">
              <h3 className="font-display font-semibold truncate text-sm md:text-base">{title}</h3>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => downloadBlob(src, downloadName)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm border border-border text-xs font-semibold hover:border-accent hover:text-accent transition-colors"
                >
                  <FiDownload /> Download
                </button>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="w-9 h-9 rounded-sm border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                >
                  <FiX />
                </button>
              </div>
            </div>

            {/* Mobile — iframes can't render PDFs on most mobile browsers. Show clear options. */}
            {isMobile ? (
              <div className="flex flex-col items-center justify-center gap-5 px-6 py-10 text-center">
                <span className="w-16 h-16 rounded-2xl bg-accent-grad text-[#08101F] flex items-center justify-center">
                  <FiFileText size={30} />
                </span>

                <div>
                  <p className="font-display font-semibold">
                    PDF viewer unavailable on this screen
                  </p>
                  <p className="text-sm text-muted mt-1.5 leading-relaxed">
                    Open it in your browser's built-in PDF viewer, or download it.
                  </p>
                </div>

                <div className="flex flex-col w-full gap-3 sm:flex-row sm:max-w-sm">
                  <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary justify-center flex-1"
                  >
                    <FiExternalLink /> Open PDF
                  </a>
                  <button
                    type="button"
                    onClick={() => downloadBlob(src, downloadName)}
                    className="btn btn-outline justify-center flex-1"
                  >
                    <FiDownload /> Download
                  </button>
                </div>
              </div>
            ) : (
              /* Desktop: render PDF inline via iframe */
              <iframe src={src} title={title} className="flex-1 w-full bg-white" />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}