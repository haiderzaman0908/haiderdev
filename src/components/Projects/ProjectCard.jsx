import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      data-reveal
      className="
        group relative block overflow-hidden
        rounded-xl
        border border-border
        bg-surface
        p-6
        transition-all duration-500
        hover:-translate-y-2
        hover:border-accent/40
        hover:shadow-[0_15px_40px_rgba(219,46,3,0.12)]
        hover:rounded-none
        
      "
    >
      {/* Animated Border */}
      <span
        className="
          pointer-events-none
          absolute left-0 top-0
          h-[2px] w-0
          bg-accent
          transition-all duration-700
          ease-out
          group-hover:w-full
        "
      />

      <span
        className="
          pointer-events-none
          absolute right-0 top-0
          h-0 w-[2px]
          bg-accent
          transition-all duration-500
          delay-700
          ease-out
          group-hover:h-full
        "
      />

      <span
        className="
          pointer-events-none
          absolute bottom-0 right-0
          h-[2px] w-0
          bg-accent
          transition-all duration-700
          delay-[200ms]
          ease-out
          group-hover:w-full
        "
      />

      <span
        className="
          pointer-events-none
          absolute bottom-0 left-0
          h-0 w-[2px]
          bg-accent
          transition-all duration-500
          delay-[900ms]
          ease-out
          group-hover:h-full
        "
      />

      {/* Top */}
      <div className="mb-5 flex items-center justify-between">
        <span
          className="
            font-mono text-[0.8rem]
            uppercase tracking-[0.15em]
            text-accent
            font-bold
          "
        >
          {project.tag}
        </span>

        <div
          className="
            flex h-9 w-9 items-center justify-center
            rounded-full
            border border-border
            transition-all duration-500
            group-hover:border-accent
            group-hover:bg-accent    "
        >
          <FiArrowUpRight
            className="
              text-muted
              transition-all duration-500
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
              group-hover:text-white
            "
            size={17}
          />
        </div>
      </div>

      {/* Project Name */}
      <h3
        className="
          mb-3
          font-display
          text-xl
          font-semibold
          transition-colors duration-300
          text-white
        "
      >
        {project.name}
      </h3>

      {/* Description */}
      <p
        className="
          mb-6
          max-w-[95%]
          text-sm
          leading-relaxed
          text-muted
        "
      >
        {project.desc}
      </p>

      {/* URL */}
      <div
        className="
          flex items-center
          border-t border-border
          pt-4
          transition-colors duration-300
          group-hover:border-accent/30
        "
      >
        <span
          className="
            truncate
            font-mono
            text-xs
            text-muted
            transition-colors duration-300
          "
        >
          {project.url.replace("https://", "")}
        </span>
      </div>

      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          -right-20
          h-40
          w-40
          rounded-full
          bg-accent/10
          blur-3xl
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />
    </a>
  );
}



