import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import "./GiftBox.css";

export default function GiftBox({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    setTimeout(onOpen, 1200);
  };

  return (
    <div className="gift-screen">

      <div className="ambient-glow" />

      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          className="floating-heart"
          initial={{ y: "110vh", opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 1, 0],
            x: Math.sin(i) * 80,
          }}
          transition={{
            duration: 7 + (i % 5),
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{ left: `${(i * 17) % 100}%` }}
        >
          {i % 2 === 0 ? "🖤" : "💜"}
        </motion.div>
      ))}

      <div className="gift-content">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="gift-subtitle">
            A LITTLE SURPRISE FOR
          </p>

          <h1>
            En Thanga
            <br />
            <span>Pullllllaaaaaa...</span>
          </h1>

          <p className="gift-description">
            Something special, made with all my love.
          </p>
        </motion.div>

        <motion.div
          className={`gift-box ${opened ? "box-opened" : ""}`}
          onClick={!opened ? handleOpen : undefined}
          whileHover={!opened ? { scale: 1.06 } : {}}
          whileTap={!opened ? { scale: 0.95 } : {}}
        >
          <motion.div
            className="gift-lid"
            animate={opened ? { y: -100, rotate: -25, opacity: 0 } : {}}
            transition={{ duration: 0.8 }}
          />

          <div className="gift-ribbon-vertical" />
          <div className="gift-ribbon-horizontal" />

          <div className="gift-heart">
            <Heart fill="white" color="white" size={30} />
          </div>

          <AnimatePresence>
            {opened && (
              <motion.div
                className="gift-light"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 3, opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Sparkles size={60} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.button
          className="open-button"
          onClick={handleOpen}
          disabled={opened}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {opened ? "OPENING YOUR SURPRISE..." : "OPEN YOUR SURPRISE ♡"}
        </motion.button>

        <p className="gift-footer">
          MADE WITH LOVE BY UN PURUSEN😘 🖤
        </p>

      </div>
    </div>
  );
}
