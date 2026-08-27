// import { useEffect, useRef, useState } from 'react'
// import {FiCode,FiLayers,FiUsers,FiZap,  FiBookOpen, FiBriefcase, FiCheckCircle, FiTarget, FiActivity} from 'react-icons/fi'
// import { useInView } from 'framer-motion'
// import { gsap } from '../../hooks/useScrollAnimation.js'
// import AnimatedText from '../AnimatedText/AnimatedText.jsx'

// const stats = [
//   {
//     icon: <FiCode />,
//     label: 'Years Experience',
//     value: 3,
//     suffix: '+',
//   },
//   {
//     icon: <FiLayers />,
//     label: 'Projects Delivered',
//     value: 15,
//     suffix: '+',
//   },
//   {
//     icon: <FiUsers />,
//     label: 'Happy Clients',
//     value: 10,
//     suffix: '+',
//   },
//   {
//     icon: <FiZap />,
//     label: 'Technologies',
//     value: 11,
//     suffix: '+',
//   },
// ]

// const focusAreas = [
//   'WordPress',
//   'Shopify',
//   'MERN Stack',
//   'UI/UX',
//   'Responsive Design',
// ]

// const strengths = [
//   {
//     icon: <FiCode />,
//     title: 'Clean Code',
//     description: 'Scalable & maintainable',
//   },
//   {
//     icon: <FiActivity />,
//     title: 'Performance',
//     description: 'Fast & optimized',
//   },
//   {
//     icon: <FiTarget />,
//     title: 'User Focus',
//     description: 'Simple & intuitive',
//   },
// ]

// const technologies = [
//   'WordPress',
//   'Elementor',
//   'Divi',
//   'WPBakery',
// ]

// /* Count-up number that animates when scrolled into view */
// function StatValue({ value, suffix }) {
//   const ref = useRef(null)
//   const inView = useInView(ref, {
//     once: true,
//     amount: 0.6,
//   })

//   const [display, setDisplay] = useState(0)

//   useEffect(() => {
//     if (!inView) return

//     const duration = 1300
//     const start = performance.now()

//     let raf

//     const tick = (now) => {
//       const progress = Math.min(
//         (now - start) / duration,
//         1
//       )

//       const eased = 1 - Math.pow(1 - progress, 3)

//       setDisplay(Math.round(eased * value))

//       if (progress < 1) {
//         raf = requestAnimationFrame(tick)
//       }
//     }

//     raf = requestAnimationFrame(tick)

//     return () => cancelAnimationFrame(raf)
//   }, [inView, value])

//   return (
//     <span
//       ref={ref}
//       className="font-display text-3xl font-bold tracking-tight"
//     >
//       {display}
//       {suffix}
//     </span>
//   )
// }

// export default function About() {
//   const ref = useRef(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       /* --------------------------------
//          Text reveal
//       -------------------------------- */
//       gsap.from('.about-reveal', {
//         opacity: 0,
//         y: 36,
//         duration: 0.8,
//         ease: 'power3.out',
//         stagger: 0.12,
//         scrollTrigger: {
//           trigger: ref.current,
//           start: 'top 75%',
//         },
//       })

//       /* --------------------------------
//          Strength cards
//       -------------------------------- */
//       gsap.from('.about-strength', {
//         opacity: 0,
//         y: 30,
//         scale: 0.95,
//         duration: 0.65,
//         ease: 'back.out(1.5)',
//         stagger: 0.1,
//         scrollTrigger: {
//           trigger: '.about-strength-grid',
//           start: 'top 85%',
//         },
//       })

//       /* --------------------------------
//          Stats cards
//       -------------------------------- */
//       gsap.from('.about-stat', {
//         opacity: 0,
//         y: 44,
//         scale: 0.92,
//         duration: 0.6,
//         ease: 'back.out(1.7)',
//         stagger: 0.1,
//         scrollTrigger: {
//           trigger: '.about-stats-grid',
//           start: 'top 88%',
//         },
//       })

//       /* --------------------------------
//          Experience card
//       -------------------------------- */
//       gsap.from('.about-exp', {
//         opacity: 0,
//         x: -36,
//         duration: 0.8,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: '.about-exp',
//           start: 'top 90%',
//         },
//       })
//     }, ref)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       className="section-pad relative overflow-hidden"
//       id="about"
//       ref={ref}
//     >
//       {/* Background decoration */}
//       <div className="pointer-events-none absolute -left-32 top-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />

//       <div className="pointer-events-none absolute right-0 bottom-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />

//       <div className="container-app grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 xl:gap-16 items-start">

//         {/* =========================================
//             LEFT — STORY
//         ========================================= */}
//         <div className="relative">

//           {/* Section label */}
//           <span className="eyebrow about-reveal">
//             About Me
//           </span>

//           {/* Heading */}
//           <h2 className="section-title about-reveal">
//             <AnimatedText
//               as="span"
//               text="I build digital products people actually enjoy using."
//               stagger={0.015}
//               highlight={['enjoy']}
//             />
//           </h2>

//           {/* Introduction */}
//           <p className="text-muted leading-relaxed max-w-xl mb-4 about-reveal">
//             I'm a dedicated Full-Stack Developer and Computer Science
//             student at Virtual University with 3+ years of hands-on
//             experience in WordPress and Shopify development. I specialise
//             in building high-performance, responsive web applications
//             using React.js, Tailwind CSS, Node.js, Express, and MongoDB.
//           </p>

//           <p className="text-muted leading-relaxed max-w-xl mb-7 about-reveal">
//             Passionate about delivering clean, scalable, and user-centric
//             digital solutions for real-world business challenges — from
//             e-commerce stores to corporate websites.
//           </p>

//           {/* =========================================
//               FOCUS AREAS
//           ========================================= */}
//           <div className="flex flex-wrap gap-2 mb-8 about-reveal">
//             {focusAreas.map((area) => (
//               <span
//                 key={area}
//                 className="
//                   px-3.5 py-1.5
//                   rounded-full
//                   border border-border
//                   bg-surface/80
//                   font-mono text-xs
//                   text-muted
//                   transition-all duration-300
//                   hover:border-accent
//                   hover:text-accent
//                   hover:-translate-y-0.5
//                 "
//               >
//                 {area}
//               </span>
//             ))}
//           </div>

//           {/* =========================================
//               CORE STRENGTHS
//           ========================================= */}
//           <div className="about-strength-grid grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">

//             {strengths.map((item) => (
//               <div
//                 key={item.title}
//                 className="
//                   about-strength
//                   group
//                   relative
//                   overflow-hidden
//                   rounded-xl
//                   border border-border
//                   bg-surface/70
//                   p-4
//                   transition-all duration-300
//                   hover:-translate-y-1
//                   hover:border-accent/60
//                   hover:shadow-card
//                 "
//               >

//                 {/* Glow */}
//                 <div
//                   className="
//                     pointer-events-none
//                     absolute
//                     -right-8
//                     -top-8
//                     w-20
//                     h-20
//                     rounded-full
//                     bg-accent/10
//                     blur-2xl
//                     opacity-0
//                     group-hover:opacity-100
//                     transition-opacity duration-100
//                   "
//                 />

//                 <div className="relative">

//                   <div
//                     className="
//                       w-9 h-9
//                       rounded-lg
//                       bg-accent/10
//                       border border-accent/20
//                       flex items-center justify-center
//                       text-accent
//                       text-lg
//                       transition-transform duration-100
//                       group-hover:scale-110
//                     "
//                   >
//                     {item.icon}
//                   </div>

//                   <h3 className="font-display font-semibold text-sm mt-3">
//                     {item.title}
//                   </h3>

//                   <p className="text-muted text-[11px] mt-1 leading-relaxed">
//                     {item.description}
//                   </p>

//                 </div>
//               </div>
//             ))}

//           </div>

//           {/* =========================================
//               EXPERIENCE CARD
//           ========================================= */}
//           <div
//             className="
//               about-exp
//               group
//               relative
//               overflow-hidden
//               rounded-xl
//               border border-border
//               bg-surface
//               p-5
//               transition-all duration-100
//               hover:border-accent/50
//               hover:shadow-card
//             "
//           >

//             {/* Decorative glow */}
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 -right-20
//                 -top-20
//                 w-48
//                 h-48
//                 rounded-full
//                 bg-accent/10
//                 blur-3xl
//                 opacity-0
//                 group-hover:opacity-100
//                 transition-opacity duration-100
//               "
//             />

//             <div className="relative flex items-start gap-4">

//               {/* Icon */}
//               <div
//                 className="
//                   shrink-0
//                   w-11 h-11
//                   rounded-lg
//                   bg-accent/10
//                   border border-accent/25
//                   flex items-center justify-center
//                   text-accent
//                   text-lg
//                   transition-transform duration-100
//                   group-hover:scale-105
//                 "
//               >
//                 <FiBookOpen />
//               </div>

//               <div className="flex-1 min-w-0">

//                 {/* Header */}
//                 <div className="flex flex-wrap items-start justify-between gap-3">

//                   <div>
//                     <p className="font-display font-semibold">
//                       Web Developer
//                     </p>

//                     <p className="text-accent text-xs font-mono mt-0.5">
//                       TechSpot
//                     </p>
//                   </div>

//                   <span
//                     className="
//                       px-2.5 py-1
//                       rounded-full
//                       bg-accent/10
//                       border border-accent/20
//                       text-accent
//                       text-[10px]
//                       font-mono
//                     "
//                   >
//                     May 2023 — Present
//                   </span>

//                 </div>

//                 {/* Description */}
//                 <p className="text-muted text-sm leading-relaxed mt-3">
//                   Designing, developing and maintaining WordPress websites
//                   using Elementor, Divi and WPBakery — with a strong focus
//                   on performance, responsive layouts and user experience.
//                 </p>

//                 {/* Technologies */}
//                 <div className="flex flex-wrap gap-1.5 mt-4">

//                   {technologies.map((tech) => (
//                     <span
//                       key={tech}
//                       className="
//                         px-2 py-1
//                         rounded-md
//                         bg-background
//                         border border-border
//                         text-[10px]
//                         font-mono
//                         text-muted
//                         transition-colors duration-100
//                         group-hover:border-accent/20
//                       "
//                     >
//                       {tech}
//                     </span>
//                   ))}

//                 </div>

//               </div>
//             </div>
//           </div>


//         </div>

//         {/* =========================================
//             RIGHT — STATS
//         ========================================= */}
//         <div className="lg:pt-8">

//           {/* Stats heading */}
//           <div className="mb-5 about-reveal">

//             <p className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-2">
//               By the numbers
//             </p>

//             <h3 className="font-display text-xl font-semibold">
//               Experience that delivers results.
//             </h3>

//           </div>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-2 gap-4 about-stats-grid">

//             {stats.map((s) => (
//               <div
//                 key={s.label}
//                 className="
//                   about-stat
//                   group
//                   relative
//                   bg-surface
//                   border border-border
//                   rounded-xl
//                   p-6
//                   flex flex-col
//                   gap-1.5
//                   overflow-hidden
//                   transition-all duration-100
//                   hover:-translate-y-1.5
//                   hover:border-accent
//                   hover:shadow-card
//                 "
//               >

//                 {/* Glow */}
//                 <span
//                   className="
//                     pointer-events-none
//                     absolute
//                     -top-12
//                     -right-12
//                     w-32
//                     h-32
//                     rounded-full
//                     bg-accent/12
//                     blur-2xl
//                     opacity-0
//                     group-hover:opacity-100
//                     transition-opacity duration-100
//                   "
//                 />

//                 {/* Icon */}
//                 <span
//                   className="
//                     relative
//                     text-accent
//                     text-xl
//                     mb-3
//                     transition-transform duration-100
//                     group-hover:scale-110
//                     origin-left
//                   "
//                 >
//                   {s.icon}
//                 </span>

//                 {/* Number */}
//                 <StatValue
//                   value={s.value}
//                   suffix={s.suffix}
//                 />

//                 {/* Label */}
//                 <span className="text-muted text-sm">
//                   {s.label}
//                 </span>

//                 {/* Bottom line */}
//                 <span
//                   className="
//                     absolute
//                     bottom-0
//                     left-0
//                     h-[2px]
//                     w-0
//                     bg-accent
//                     transition-all duration-100
//                     group-hover:w-full
//                   "
//                 />

//               </div>
//             ))}

//           </div>

//           {/* =========================================
//               AVAILABILITY CARD
//           ========================================= */}
//           <div
//             className="
//               about-stat
//               group
//               relative
//               mt-5
//               p-5
//               rounded-xl
//               border border-success/30
//               bg-surface
//               overflow-hidden
//               transition-all duration-100
//               hover:-translate-y-1
//               hover:border-success
//               hover:shadow-card
//             "
//           >

//             {/* Green glow */}
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 -right-16
//                 -top-16
//                 w-40
//                 h-40
//                 rounded-full
//                 bg-success/10
//                 blur-3xl
//                 opacity-0
//                 group-hover:opacity-100
//                 transition-opacity duration-100
//               "
//             />

//             <div className="relative flex items-center gap-3">

//               {/* Icon */}
//               <span
//                 className="
//                   shrink-0
//                   w-11 h-11
//                   rounded-lg
//                   bg-success/15
//                   flex items-center justify-center
//                   text-xl
//                   border border-success/30
//                   transition-transform duration-100
//                   group-hover:scale-110
//                 "
//               >
//                 <FiBriefcase className="text-success" />
//               </span>

//               <div>

//                 <p
//                   className="
//                     font-display
//                     font-semibold
//                     text-base
//                     flex
//                     items-center
//                     gap-2
//                   "
//                 >

//                   <span className="relative flex h-2.5 w-2.5">

//                     <span
//                       className="
//                         absolute
//                         inline-flex
//                         h-full
//                         w-full
//                         rounded-full
//                         bg-success
//                         opacity-60
//                         animate-ping
//                       "
//                     />

//                     <span
//                       className="
//                         relative
//                         inline-flex
//                         rounded-full
//                         h-2.5 w-2.5
//                         bg-success
//                       "
//                     />

//                   </span>

//                   Available for new projects

//                 </p>

//                 <p className="text-muted text-xs leading-relaxed mt-1">
//                   Freelance work, collaborations and new opportunities welcome.
//                 </p>

//               </div>
//             </div>
//           </div>

//           {/* =========================================
//               QUICK SKILL SUMMARY
//           ========================================= */}
//           <div
//             className="
//               mt-5
//               rounded-xl
//               border border-border
//               bg-surface/60
//               p-5
//               about-reveal
//             ">

//             <div className="flex items-center justify-between mb-4">

//               <div>
//                 <p className="font-display font-semibold text-sm">
//                   Core Stack
//                 </p>

//                 <p className="text-muted text-xs mt-1">
//                   Tools I work with regularly
//                 </p>
//               </div>

//               <FiCode className="text-accent" />

//             </div>

//             {/* Skill bars */}
//             <div className="space-y-3">

//               {[
//                 ['Frontend', 'React · Tailwind · JavaScript', '90%'],
//                 ['Backend', 'Node · Express · MongoDB', '82%'],
//                 ['CMS / E-commerce', 'WordPress · Shopify', '95%'],
//               ].map(([title, stack, width]) => (
//                 <div key={title}>

//                   <div className="flex items-center justify-between mb-1.5">

//                     <span className="text-xs font-medium">
//                       {title}
//                     </span>

//                     <span className="text-[10px] font-mono text-accent">
//                       {width}
//                     </span>

//                   </div>

//                   <div className="h-1.5 rounded-full bg-background overflow-hidden">

//                     <div
//                       className="
//                         h-full
//                         rounded-full
//                         bg-accent
//                         transition-all duration-100
//                       "
//                       style={{ width }}
//                     />

//                   </div>

//                   <p className="text-[10px] text-muted mt-1">
//                     {stack}
//                   </p>

//                 </div>
//               ))}

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }



import {
  FiCode,
  FiLayers,
  FiUsers,
  FiZap,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiTarget,
  FiActivity,
} from 'react-icons/fi'
import AnimatedText from '../AnimatedText/AnimatedText.jsx'

const stats = [
  {
    icon: <FiCode />,
    label: 'Years Experience',
    value: '3+',
  },
  {
    icon: <FiLayers />,
    label: 'Projects Delivered',
    value: '15+',
  },
  {
    icon: <FiUsers />,
    label: 'Happy Clients',
    value: '10+',
  },
  {
    icon: <FiZap />,
    label: 'Technologies',
    value: '11+',
  },
]

const focusAreas = [
  'WordPress',
  'Shopify',
  'MERN Stack',
  'UI/UX',
  'Responsive Design',
]

const strengths = [
  {
    icon: <FiCode />,
    title: 'Clean Code',
    description: 'Scalable & maintainable',
  },
  {
    icon: <FiActivity />,
    title: 'Performance',
    description: 'Fast & optimized',
  },
  {
    icon: <FiTarget />,
    title: 'User Focus',
    description: 'Simple & intuitive',
  },
]

const technologies = [
  'WordPress',
  'Elementor',
  'Divi',
  'WPBakery',
]

export default function About() {
  return (
    <section
      id="about"
      className="section-pad relative overflow-hidden"
    >

      {/* Background decoration */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          w-72
          h-72
          rounded-full
          bg-accent/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          bottom-0
          w-80
          h-80
          rounded-full
          bg-accent/5
          blur-3xl
        "
      />

      <div
        className="
          container-app
          grid
          grid-cols-1
          lg:grid-cols-[1.1fr_0.9fr]
          gap-10
          xl:gap-16
          items-start
        "
      >

        {/* =================================
            LEFT SIDE
        ================================= */}

        <div className="relative">

          {/* Label */}

          <span className="eyebrow">
            About Me
          </span>

          {/* Heading */}

          <h2 className="section-title">

            <AnimatedText
              as="span"
              text="I build digital products people actually enjoy using."
              stagger={0}
              highlight={['enjoy']}
            />

          </h2>

          {/* Description */}

          <p className="text-muted leading-relaxed max-w-xl mb-4">
            I'm a dedicated Full-Stack Developer and Computer Science
            student at Virtual University with 3+ years of hands-on
            experience in WordPress and Shopify development. I specialise
            in building high-performance, responsive web applications
            using React.js, Tailwind CSS, Node.js, Express, and MongoDB.
          </p>

          <p className="text-muted leading-relaxed max-w-xl mb-7">
            Passionate about delivering clean, scalable, and user-centric
            digital solutions for real-world business challenges — from
            e-commerce stores to corporate websites.
          </p>

          {/* =================================
              FOCUS AREAS
          ================================= */}

          <div className="flex flex-wrap gap-2 mb-8">

            {focusAreas.map((area) => (
              <span
                key={area}
                className="
                  px-3.5
                  py-1.5
                  rounded-full
                  border
                  border-border
                  bg-surface/80
                  font-mono
                  text-xs
                  text-muted
                "
              >
                {area}
              </span>
            ))}

          </div>

          {/* =================================
              STRENGTHS
          ================================= */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-3
              mb-7
            "
          >

            {strengths.map((item) => (
              <div
                key={item.title}
                className="
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-border
                  bg-surface/70
                  p-4
                "
              >

                <div
                  className="
                    w-9
                    h-9
                    rounded-lg
                    bg-accent/10
                    border
                    border-accent/20
                    flex
                    items-center
                    justify-center
                    text-accent
                    text-lg
                  "
                >
                  {item.icon}
                </div>

                <h3 className="font-display font-semibold text-sm mt-3">
                  {item.title}
                </h3>

                <p className="text-muted text-[11px] mt-1 leading-relaxed">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

          {/* =================================
              EXPERIENCE
          ================================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-xl
              border
              border-border
              bg-surface
              p-5
            "
          >

            <div className="relative flex items-start gap-4">

              {/* Icon */}

              <div
                className="
                  shrink-0
                  w-11
                  h-11
                  rounded-lg
                  bg-accent/10
                  border
                  border-accent/25
                  flex
                  items-center
                  justify-center
                  text-accent
                  text-lg
                "
              >
                <FiBookOpen />
              </div>

              <div className="flex-1 min-w-0">

                {/* Header */}

                <div
                  className="
                    flex
                    flex-wrap
                    items-start
                    justify-between
                    gap-3
                  "
                >

                  <div>

                    <p className="font-display font-semibold">
                      Web Developer
                    </p>

                    <p className="text-accent text-xs font-mono mt-0.5">
                      TechSpot
                    </p>

                  </div>

                  <span
                    className="
                      px-2.5
                      py-1
                      rounded-full
                      bg-accent/10
                      border
                      border-accent/20
                      text-accent
                      text-[10px]
                      font-mono
                    "
                  >
                    May 2023 — Present
                  </span>

                </div>

                {/* Description */}

                <p className="text-muted text-sm leading-relaxed mt-3">
                  Designing, developing and maintaining WordPress websites
                  using Elementor, Divi and WPBakery — with a strong focus
                  on performance, responsive layouts and user experience.
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-1.5 mt-4">

                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-2
                        py-1
                        rounded-md
                        bg-background
                        border
                        border-border
                        text-[10px]
                        font-mono
                        text-muted
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </div>

          {/* =================================
              AVAILABILITY
          ================================= */}

          <div className="flex items-center gap-3 mt-6">

            <div className="flex items-center gap-2 shrink-0">

              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-success
                "
              />

              <span className="text-xs font-mono text-muted">
                Available for freelance work
              </span>

            </div>

            <span className="h-px flex-1 bg-border" />

            <FiCheckCircle className="text-success text-sm" />

          </div>

        </div>

        {/* =================================
            RIGHT SIDE
        ================================= */}

        <div className="lg:pt-8">

          {/* Stats heading */}

          <div className="mb-5">

            <p
              className="
                font-mono
                text-xs
                text-accent
                uppercase
                tracking-[0.2em]
                mb-2
              "
            >
              By the numbers
            </p>

            <h3 className="font-display text-xl font-semibold">
              Experience that delivers results.
            </h3>

          </div>

          {/* =================================
              STATS
          ================================= */}

          <div className="grid grid-cols-2 gap-4">

            {stats.map((s) => (
              <div
                key={s.label}
                className="
                  relative
                  bg-surface
                  border
                  border-border
                  rounded-xl
                  p-6
                  flex
                  flex-col
                  gap-1.5
                  overflow-hidden
                "
              >

                <span className="text-accent text-xl mb-3">
                  {s.icon}
                </span>

                <span className="font-display text-3xl font-bold tracking-tight">
                  {s.value}
                </span>

                <span className="text-muted text-sm">
                  {s.label}
                </span>

              </div>
            ))}

          </div>

          {/* =================================
              AVAILABILITY CARD
          ================================= */}

          <div
            className="
              mt-5
              p-5
              rounded-xl
              border
              border-success/30
              bg-surface
            "
          >

            <div className="flex items-center gap-3">

              <span
                className="
                  shrink-0
                  w-11
                  h-11
                  rounded-lg
                  bg-success/15
                  flex
                  items-center
                  justify-center
                  text-xl
                  border
                  border-success/30
                "
              >
                <FiBriefcase className="text-success" />
              </span>

              <div>

                <p
                  className="
                    font-display
                    font-semibold
                    text-base
                    flex
                    items-center
                    gap-2
                  "
                >

                  <span className="h-2.5 w-2.5 rounded-full bg-success" />

                  Available for new projects

                </p>

                <p className="text-muted text-xs leading-relaxed mt-1">
                  Freelance work, collaborations and new opportunities welcome.
                </p>

              </div>

            </div>

          </div>

          {/* =================================
              CORE STACK
          ================================= */}

          <div
            className="
              mt-5
              rounded-xl
              border
              border-border
              bg-surface/60
              p-5
            "
          >

            <div className="flex items-center justify-between mb-5">

              <div>

                <p className="font-display font-semibold text-sm">
                  Core Stack
                </p>

                <p className="text-muted text-xs mt-1">
                  Technologies I work with regularly
                </p>

              </div>

              <FiCode className="text-accent" />

            </div>

            {/* Frontend */}

            <div className="mb-4">

              <div className="flex items-center justify-between mb-1.5">

                <span className="text-xs font-medium">
                  Frontend
                </span>

                <span className="text-[10px] font-mono text-accent">
                  90%
                </span>

              </div>

              <div className="h-1.5 rounded-full bg-background overflow-hidden">

                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: '90%' }}
                />

              </div>

              <p className="text-[10px] text-muted mt-1">
                React · Tailwind · JavaScript
              </p>

            </div>

            {/* Backend */}

            <div className="mb-4">

              <div className="flex items-center justify-between mb-1.5">

                <span className="text-xs font-medium">
                  Backend
                </span>

                <span className="text-[10px] font-mono text-accent">
                  82%
                </span>

              </div>

              <div className="h-1.5 rounded-full bg-background overflow-hidden">

                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: '82%' }}
                />

              </div>

              <p className="text-[10px] text-muted mt-1">
                Node · Express · MongoDB
              </p>

            </div>

            {/* CMS / E-commerce */}

            <div>

              <div className="flex items-center justify-between mb-1.5">

                <span className="text-xs font-medium">
                  CMS / E-commerce
                </span>

                <span className="text-[10px] font-mono text-accent">
                  95%
                </span>

              </div>

              <div className="h-1.5 rounded-full bg-background overflow-hidden">

                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: '95%' }}
                />

              </div>

              <p className="text-[10px] text-muted mt-1">
                WordPress · Shopify
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}