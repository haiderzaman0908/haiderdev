import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext.jsx";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      whileHover={{
        scale: 1.08,
        borderColor: "#DB2E03",
        boxShadow: "0 0 20px rgba(219, 46, 3, 0.25)",
      }}
      whileTap={{
        scale: 0.92,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
      className="
        relative
        w-12 h-12
        rounded-xl
        flex items-center justify-center
        overflow-hidden
        bg-surface2/70
        backdrop-blur-md
        border border-border
        text-muted
        shadow-lg
        cursor-pointer
        transition-colors duration-300
      "
    >
      {/* Subtle Glow */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{
          boxShadow: isDark
            ? "inset 0 0 0 rgba(219,46,3,0)"
            : "inset 0 0 18px rgba(219,46,3,0.12)",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Icon */}
      <AnimatePresence mode="wait">
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{
            opacity: 0,
            scale: 0.4,
            rotate: -90,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.4,
            rotate: 90,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="relative z-10 flex items-center justify-center"
        >
          {isDark ? (
            <FiMoon className="text-[20px]" />
          ) : (
            <FiSun className="text-[20px]" />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}