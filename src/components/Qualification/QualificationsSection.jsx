import { useEffect, useRef, useState } from 'react';

const qualificationsData = [
  {
    id: 'matric',
    side: 'right',
    title: 'Computer Science (Matric)',
    date: 'Govt. Islamia High School, Doulat Gate – Multan',
    desc: 'August 2020 to August 2022',
  },
  {
    id: 'ics',
    side: 'left',
    title: 'ICS (Intermediate)',
    date: 'Govt. Willayat Hussain College, Masoom Shah Road – Multan',
    desc: 'October 2022 to October 2024',
  },
  {
    id: 'bs-cs',
    side: 'right',
    title: 'BS Computer Science',
    date: 'Virtual University of Pakistan – Multan · March 2025 to Present',
    desc: 'Pursuing a Bachelor of Science in Computer Science, building a strong foundation in programming and computer systems.',
  },
  {
    id: 'wordpress',
    side: 'left',
    title: 'WordPress Development Certificate',
    date: 'DigiSkills · March 2026 to June 2026',
    desc: 'Build professional, responsive, and user-friendly websites using WordPress and popular page builders like Elementor and WPBakery.',
  },
  {
    id: 'data-analytics',
    side: 'right',
    title: 'Data Analytics & Business Intelligence Certificate',
    date: 'DigiSkills · March 2026 to June 2026',
    desc: 'Practical knowledge of data analysis, visualization and BI concepts — building reports and dashboards to support data-driven decisions.',
  },
  {
    id: 'mern',
    side: 'left',
    title: 'MERN Stack Developer',
    date: 'DigiSkills · August 2026 to Present',
    desc: 'Build modern, scalable, and high-performance web applications using MongoDB, Express.js, React, and Node.js. Develop responsive experience.',
  },
  {
    id: 'shopify',
    side: 'right',
    title: 'Shopify Developer',
    date: 'DigiSkills · August 2026 to Present',
    desc: 'Create professional and conversion-focused eCommerce stores with Shopify. Develop a smooth online shopping experience.',
  },
];


/* Shared card used by both the desktop and mobile timeline layouts. */
function QualificationCard({ item, isVisible, align = "left" }) {
  const { title, date, desc } = item;

  /* text alignment only differs on desktop (md+) where cards alternate sides */
  const textAlign =
    align === "right" ? "md:text-right" : "md:text-left";

  return (
    <div
      className={`
        w-full
        max-w-[460px]
        rounded-[10px]
        border-t-[3px]
        border-[#ff7a30]
        bg-[#1a1a1d]
        px-6
        py-[22px]
        text-left
        md:${textAlign}
        shadow-[0_10px_30px_rgba(0,0,0,0.5)]
        transition-all
        duration-[550ms]
        ease-[cubic-bezier(.34,1.56,.64,1)]
        ${
          isVisible
            ? "translate-x-0 scale-100 opacity-100"
            : "translate-x-[30px] scale-95 opacity-0"
        }
      `}
    >
      <h3 className="mb-2 text-[16px] font-extrabold text-[#f5f5f5]">
        {title}
      </h3>

      <div className="mb-1.5 text-[12.5px] font-semibold italic text-[#ffb27a]">
        {date}
      </div>

      {desc && (
        <p className="m-0 text-[12.5px] leading-[1.6] text-[#9b9b9f]">
          {desc}
        </p>
      )}
    </div>
  );
}

/* Timeline node dot (same look on mobile + desktop). */
function NodeDot({ isVisible }) {
  return (
    <span
      className={`
        relative z-[2] h-4 w-4 shrink-0 rounded-full
        border-4 border-[#0b0b0d] bg-[#ff7a30]
        shadow-[0_0_0_3px_rgba(255,122,48,0.25),0_0_14px_rgba(255,122,48,0.7)]
        transition-transform duration-[400ms]
        ease-[cubic-bezier(.34,1.56,.64,1)]
        ${isVisible ? "scale-100" : "scale-0"}
      `}
    />
  );
}

/* Short horizontal connector between the dot and the card (desktop only). */
function Connector({ isVisible, className = "" }) {
  return (
    <span
      className={`
        h-[2px] shrink-0 bg-[#ff7a30]
        shadow-[0_0_8px_rgba(255,122,48,0.6)]
        transition-[width] delay-[250ms] duration-[450ms] ease-in-out
        ${isVisible ? "w-[34px]" : "w-0"}
        ${className}
      `}
    />
  );
}

export default function QualificationsSection() {
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  const itemRefs = useRef([]);
  const [visibleIds, setVisibleIds] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");

            setVisibleIds((prev) => ({
              ...prev,
              [id]: true,
            }));
          }
        });
      },
      { threshold: 0.35 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function updateFill() {
      const track = trackRef.current;
      const fill = fillRef.current;

      if (!track || !fill) return;

      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrolled = vh - rect.top;

      const pct = Math.max(
        0,
        Math.min(100, (scrolled / rect.height) * 100)
      );

      fill.style.height = pct + "%";
    }

    window.addEventListener("scroll", updateFill);
    window.addEventListener("resize", updateFill);

    updateFill();

    return () => {
      window.removeEventListener("scroll", updateFill);
      window.removeEventListener("resize", updateFill);
    };
  }, []);

  return (
    <section className="bg-[#0b0b0d] px-5 pb-[100px] pt-20 font-['Segoe_UI',Arial,sans-serif]">
      {/* HEADER */}
      <div className="mb-[70px] text-center">
        <h2 className="m-0 mb-2 text-[34px] font-extrabold text-[#f5f5f5]">
          My Qualifications
        </h2>

        <p className="m-0 text-sm tracking-[0.3px] text-[#ff7a30]">
          <b>Education &amp; Certifications</b>
        </p>
      </div>

      {/* TIMELINE */}
      <div
        ref={trackRef}
        className="relative mx-auto max-w-[1100px]"
      >
        {/* TRACK */}
        <div
          className="
            absolute
            bottom-0
            left-[12.5px]
            top-0
            w-[3px]
            rounded-[3px]
            bg-[#2a2a2e]
            md:left-1/2
            md:-translate-x-1/2
          "
        >
          {/* FILL */}
          <div
            ref={fillRef}
            className="
              absolute
              left-0
              top-0
              h-0
              w-full
              rounded-[3px]
              bg-gradient-to-b
              from-[#ff7a30]
              to-[#ffb27a]
              shadow-[0_0_12px_rgba(255,122,48,0.6)]
              transition-[height]
              duration-150
              ease-out
            "
          />
        </div>

        {/* ITEMS */}
        {qualificationsData.map((item, i) => {
          const isVisible = !!visibleIds[item.id]
          const isLeft = item.side === 'left'

          return (
            <div
              key={item.id}
              data-id={item.id}
              ref={(el) => (itemRefs.current[i] = el)}
              className="relative mb-[54px] box-border"
            >
              {/* MOBILE — stacked, line + dot on the left, card on the right */}
              <div className="flex items-start md:hidden">
                <div className="relative z-[2] flex w-[28px] shrink-0 items-start justify-center">
                  <NodeDot isVisible={isVisible} />
                </div>

                <div className="min-w-0 flex-1">
                  <QualificationCard item={item} isVisible={isVisible} align="left" />
                </div>
              </div>

              {/* DESKTOP — alternating left / right of the center line */}
              <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
                {isLeft ? (
                  <>
                    <div className="flex items-center justify-end">
                      <QualificationCard item={item} isVisible={isVisible} align="right" />
                      <Connector isVisible={isVisible} />
                    </div>

                    <NodeDot isVisible={isVisible} />

                    <div />
                  </>
                ) : (
                  <>
                    <div />

                    <NodeDot isVisible={isVisible} />

                    <div className="flex items-center justify-start">
                      <Connector isVisible={isVisible} />
                      <QualificationCard item={item} isVisible={isVisible} align="left" />
                    </div>
                  </>
                )}
              </div>
            </div>
          )
        })}
      </div>

    </section>
  );
}