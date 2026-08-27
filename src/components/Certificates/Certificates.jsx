import { useEffect, useRef, useState } from 'react'
import { gsap } from '../../hooks/useScrollAnimation.js'
import AnimatedText from '../AnimatedText/AnimatedText.jsx'
import PdfModal from '../PdfModal/PdfModal.jsx'
import CertificateCard from './CertificateCard.jsx'

// Certificate PDFs (src/images)
import cppPdf from '../../images/C++_Essentials_1_certificate.pdf'
import htmlPdf from '../../images/HTML_Essentials_certificate.pdf'
import js1Pdf from '../../images/JavaScript_Essentials_1_certificate.pdf'
import js2Pdf from '../../images/JavaScript_Essentials_2_certificate.pdf'
import cssPdf from '../../images/CSS_Essentials_certificate.pdf'
import wpPdf from '../../images/WordPress_Certificate.pdf'
import daPdf from '../../images/Data Analytics and bussiness intelligence certificate.pdf'
import dsPdf from '../../images/Certificate_MUHAMMAD HAIDER ZAMAN_20260410.pdf'

const certificates = [
  { title: 'C++ Essentials 1', issuer: 'Cisco Networking Academy', date: 'Jun 2025', pdf: cppPdf },
  { title: 'HTML Essentials', issuer: 'Cisco Networking Academy', date: 'Nov 2025', pdf: htmlPdf },
  { title: 'JavaScript Essentials 1', issuer: 'Cisco Networking Academy', date: 'Nov 2025', pdf: js1Pdf },
  { title: 'JavaScript Essentials 2', issuer: 'Cisco Networking Academy', date: 'Dec 2025', pdf: js2Pdf },
  { title: 'CSS Essentials', issuer: 'Cisco Networking Academy', date: 'Dec 2025', pdf: cssPdf },
  { title: 'WordPress Training', issuer: 'DigiSkills.pk', date: 'Mar 2026', pdf: wpPdf },
  { title: 'Data Analytics & Business Intelligence', issuer: 'DigiSkills.pk', date: 'Mar 2026', pdf: daPdf },
  { title: 'DigiSkills Certificate', issuer: 'DigiSkills.pk', date: 'Apr 2026', pdf: dsPdf },
]

export default function Certificates() {
  const ref = useRef(null)
  const [activeCert, setActiveCert] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // header reveal
      gsap.from('.certs-reveal', {
        opacity: 0,
        y: 36,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: 'top 78%' },
      })

      // cards stagger in
      gsap.utils.toArray('.cert-card').forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 44,
          scale: 0.95,
          duration: 0.65,
          delay: (i % 3) * 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        })
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section className="section-pad" id="certificates" ref={ref}>
      <div className="container-app">
        <span className="eyebrow certs-reveal">Credentials</span>
        <h2 className="section-title certs-reveal">
          <AnimatedText
            as="span"
            text="Certificates & Trainings"
            stagger={0.02}
            highlight={['Trainings']}
          />
        </h2>
        <p className="section-sub certs-reveal">
          Verified courses I've completed to keep my skills sharp and up to date.
          Click any certificate to view it.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((c) => (
            <CertificateCard key={c.title} cert={c} onView={() => setActiveCert(c)} />
          ))}
        </div>
      </div>

      {/* certificate popup */}
      <PdfModal
        open={!!activeCert}
        onClose={() => setActiveCert(null)}
        title={activeCert ? `${activeCert.title} — ${activeCert.issuer}` : ''}
        src={activeCert?.pdf}
        downloadName={activeCert ? `${activeCert.title.replace(/[^\w]+/g, '-')}.pdf` : undefined}
      />
    </section>
  )
}