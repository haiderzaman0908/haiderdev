import { useEffect, useRef } from "react";
import gsap from "gsap";

const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    const xTo = gsap.quickTo(glow, "x", {
      duration: 0.6,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(glow, "y", {
      duration: 0.6,
      ease: "power3.out",
    });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-0
        hidden
        md:block
        h-[450px]
        w-[450px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#DB2E03]
        opacity-120
        blur-[150px]
      "
    />
  );
};

export default CursorGlow;