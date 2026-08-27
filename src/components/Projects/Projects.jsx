import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollAnimation.js'
import ProjectCard from './ProjectCard.jsx'

const projects = [
  {
    name: 'Libaasline',
    tag: 'eCommerce · WordPress',
    desc: 'Fully functional eCommerce store with responsive design, product management and a user-friendly shopping interface.',
    url: 'https://libaasline.com/',
  },
  {
    name: 'British International School',
    tag: 'Education · WordPress',
    desc: 'Professional school website with responsive design and a clean, structured content layout.',
    url: 'https://britishschool.edu.pk/',
  },
  {
    name: 'Axtent',
    tag: 'Corporate · WordPress',
    desc: 'Professional site for Axtent Accounting, focused on a clean layout and user-friendly interface.',
    url: 'https://axtent.ae/',
  },
  {
    name: 'RPC-Global',
    tag: 'Corporate · WordPress',
    desc: 'Business website built for client engagement with a clean, professional layout.',
    url: 'https://rpc-global.com/',
  },
  {
    name: 'Dressica',
    tag: 'eCommerce · WordPress',
    desc: 'Modern e-commerce fashion store focused on a smooth, user-friendly shopping experience.',
    url: 'https://dressica.pk/',
  },
  {
    name: 'Edlink',
    tag: 'Corporate · WordPress',
    desc: 'Professional business website with a clean layout built to enhance client engagement.',
    url: 'https://edlink.com.au/',
  },
]

export default function Projects() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section className="section-pad" id="projects" ref={ref}>
      <div className="container-app">
        <span className="eyebrow" data-reveal>Selected Work</span>
        <h2 className="section-title" data-reveal>Projects I've shipped</h2>
        <p className="section-sub" data-reveal>
          A few live websites I've designed and developed for real clients.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
