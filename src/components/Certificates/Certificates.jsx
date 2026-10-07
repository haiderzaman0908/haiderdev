import { useEffect, useRef, useState } from 'react'
import { gsap } from '../../hooks/useScrollAnimation.js'
import AnimatedText from '../AnimatedText/AnimatedText.jsx'
import PdfModal from '../PdfModal/PdfModal.jsx'
import CertificateCard from './CertificateCard.jsx'

// Certificate PDFs
import cppPdf from '../../images/C++_Essentials_1_certificate.pdf'
import htmlPdf from '../../images/HTML_Essentials_certificate.pdf'
import js1Pdf from '../../images/JavaScript_Essentials_1_certificate.pdf'
import js2Pdf from '../../images/JavaScript_Essentials_2_certificate.pdf'
import cssPdf from '../../images/CSS_Essentials_certificate.pdf'
import wpPdf from '../../images/WordPress_Certificate.pdf'
import daPdf from '../../images/Data Analytics and bussiness intelligence certificate.pdf'
import dsPdf from '../../images/Certificate_MUHAMMAD HAIDER ZAMAN_20260410.pdf'

const certificates = [
  {
    title: 'C++ Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'Jun 2025',
    pdf: cppPdf,
  },
  {
    title: 'HTML Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'Nov 2025',
    pdf: htmlPdf,
  },
  {
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'Nov 2025',
    pdf: js1Pdf,
  },
  {
    title: 'JavaScript Essentials 2',
    issuer: 'Cisco Networking Academy',
    date: 'Dec 2025',
    pdf: js2Pdf,
  },
  {
    title: 'CSS Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'Dec 2025',
    pdf: cssPdf,
  },
  {
    title: 'WordPress Training',
    issuer: 'DigiSkills.pk',
    date: 'Mar 2026',
    pdf: wpPdf,
  },
  {
    title: 'Data Analytics & Business Intelligence',
    issuer: 'DigiSkills.pk',
    date: 'Mar 2026',
    pdf: daPdf,
  },
  {
    title: 'DigiSkills Certificate',
    issuer: 'DigiSkills.pk',
    date: 'Apr 2026',
    pdf: dsPdf,
  },
]

export default function Certificates() {
  const ref = useRef(null)
  const sliderRef = useRef(null)
  const [activeCert, setActiveCert] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.certs-reveal', {
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

      // Certificate cards animation
      gsap.from('.cert-card', {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sliderRef.current,
          start: 'top 90%',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section
      className="section-pad"
      id="certificates"
      ref={ref}
    >
      <div className="container-app">

        {/* Section Label */}
        <span className="eyebrow certs-reveal">
          Credentials
        </span>

        {/* Section Heading */}
        <h2 className="section-title certs-reveal">
          <AnimatedText
            as="span"
            text="Certificates & Trainings"
            stagger={0.02}
            highlight={['Trainings']}
          />
        </h2>

        {/* Section Description */}
        <p className="section-sub certs-reveal">
          Verified courses I've completed to keep my skills sharp and up to
          date. Click any certificate to view it.
        </p>

        {/* =====================================
            HORIZONTAL CERTIFICATE SLIDER
        ====================================== */}

        <div
          ref={sliderRef}
          className="certificates-slider"
        >
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="certificates-slide"
            >
              <div className="cert-card">
                <CertificateCard
                  cert={certificate}
                  onView={() => setActiveCert(certificate)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================
          PDF MODAL
      ====================================== */}

      <PdfModal
        open={!!activeCert}
        onClose={() => setActiveCert(null)}
        title={
          activeCert
            ? `${activeCert.title} — ${activeCert.issuer}`
            : ''
        }
        src={activeCert?.pdf}
        downloadName={
          activeCert
            ? `${activeCert.title.replace(/[^\w]+/g, '-')}.pdf`
            : undefined
        }
      />
    </section>
  )
}
