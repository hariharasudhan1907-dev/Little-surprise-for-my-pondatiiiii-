import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FutureTimeline.css";

const future = [
  { year: "2026", image: "future-2026.png", title: "Our Beautiful Beginning", description: "Every little moment becomes a beautiful memory.", icon: "💜" },
  { year: "2027", image: "future-2027.png", title: "Growing Together", description: "More dreams, more smiles and countless memories.", icon: "🖤" },
  { year: "2028", image: "future-2028.png", title: "Building Our Dreams", description: "Supporting each other and achieving our dreams.", icon: "✨" },
  { year: "2029", image: "future-2029.png", title: "Closer To Forever", description: "Preparing for the beautiful life we imagine.", icon: "❤️" },
  { year: "2030", image: "future-2030.png", title: "Wedding Preparations", description: "Imagining the beginning of our forever journey.", icon: "💍" },
  { year: "2031 / 2032", image: "future-2032.png", title: "Our Dream Wedding", description: "A beautiful celebration of our imagined forever.", icon: "👰" },
  { year: "2033", image: "future-2033.png", title: "Our Little Home", description: "A home filled with love, laughter and happiness.", icon: "🏡" },
  { year: "2035", image: "future-2035.png", title: "Our Little Family", description: "Imagining the joy of welcoming our little ones.", icon: "👨‍👩‍👧" },
  { year: "2040", image: "future-2040.png", title: "Family Adventures", description: "Exploring the world and creating memories together.", icon: "✈️" },
  { year: "2050", image: "future-2050.png", title: "Beautiful Memories", description: "Watching our family grow and celebrating life.", icon: "🌸" },
  { year: "2060+", image: "future-2060.png", title: "Forever Together", description: "Still holding hands through every chapter of life.", icon: "🖤" },
];

export default function FutureTimeline({ onContinue }) {
  const [selected, setSelected] = useState(null);

  return (
    <section className="future-section">
      <div className="future-heading">
        <p>OUR DREAMS, OUR TOMORROW</p>
        <h1>Our Imagined <span>Future 💜</span></h1>
        <p className="future-note">
          A beautiful life we dream of together.
          Every moment here is imagined with love.
        </p>
      </div>

      <div className="future-timeline">
        {future.map((item, index) => (
          <motion.div
            key={item.year}
            className={`future-card ${selected === index ? "expanded" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => setSelected(selected === index ? null : index)}
          >
            <div className="future-icon">{item.icon}</div>

            <div className="future-info">
              <span>{item.year}</span>
              <h2>{item.title}</h2>

              <AnimatePresence>
                {selected === index && (
                  <motion.div
                    className="future-details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <img
                      className="future-image"
                      src={`${import.meta.env.BASE_URL}images/future/${item.image}`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <p>{item.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <small>
                {selected === index ? "Close ↑" : "Tap to explore ↓"}
              </small>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="future-surprise-button"
        whileTap={{ scale: 0.95 }}
        onClick={onContinue}
      >
        One Last Surprise 💌
      </motion.button>

      <p className="future-ending">
        NOT A PREDICTION. JUST OUR BEAUTIFUL IMAGINATION. 🖤💜
      </p>
    </section>
  );
}
