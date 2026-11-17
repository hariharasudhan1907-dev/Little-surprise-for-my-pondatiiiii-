import { motion } from "framer-motion";

export default function FloatingHearts() {
  return (
    <div className="floating-hearts">
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="floating-heart"
          initial={{
            y: "110vh",
            x: `${(i * 17) % 100}vw`,
            opacity: 0,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.7, 0.7, 0],
            x: [
              `${(i * 17) % 100}vw`,
              `${((i * 17) % 100) + 5}vw`,
            ],
          }}
          transition={{
            duration: 12 + (i % 6) * 2,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "linear",
          }}
        >
          {i % 2 === 0 ? "🖤" : "💜"}
        </motion.span>
      ))}
    </div>
  );
}
