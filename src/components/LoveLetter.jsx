import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./LoveLetter.css";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="letter-section">

      <motion.div
        className="letter-heading"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p>A LITTLE SOMETHING FROM MY HEART</p>

        <h1>
          A Letter
          <span> For You 💜</span>
        </h1>

        <p>Some feelings deserve their own little letter.</p>
      </motion.div>

      <div className="envelope-container">

        <motion.div
          className={`envelope ${isOpen ? "opened" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.96 }}
        >

          <div className="envelope-back"></div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="letter-paper"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: -65, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >

                <div className="letter-content">

                  <h2>En Thanga Pullllllaaaaaa 💜</h2>

                  <p>Oiii... 💜</p>

                  <p>
                    Nethu night eh naa sollanum nu nenachen
                    pullllllaaaaaa. But adutha naal unakku exam,
                    nee seekirama thoonganum nu thaan naa sollala.
                    Morning sollalaam, unakku surprise kudukkalaam
                    nu nenachen. But athukulla nee ketutiya!
                    Solla venam nu paathen, sollama vitten.
                    Nee kochikittu sogama school-ku kelambuva.
                    Aana nee sonna apramum sogama thaan kelambuna.
                    Atha vidu pullllllaaaaaa! Un kitta neraya
                    sollanum. Athaan ithukku keela sollirukken,
                    pathuko 🤗
                  </p>

                  <p>
                    Enga irundhu start panradhu nu enakku theriyala.
                    Aana unakku sollanum nu nenacha neraya feelings
                    en manasula irukku.
                  </p>

                  <p>
                    Nee en life-la vandhadhukku apram, chinna chinna
                    moments kooda evlo special-ah maarirukku
                    theriyuma? Un kooda pesura konjam neram,
                    un messages, namma silly fights, random
                    conversations... idhellame enakku romba precious.
                  </p>

                  <p>
                    Namma rendu perum distance-la irundhaalum,
                    un kooda pesura ovvoru moment-um nee pakkathula
                    irukka maariye feel aagum.
                  </p>

                  <p>
                    Sometimes unna miss panra moments irukkum.
                    Appo thonum, indha distance illama irundha
                    evlo nalla irukkum nu. Aana distance namma
                    memories-ah erase panna mudiyadhu.
                  </p>

                  <p>
                    Namma life-la neraya changes varalaam.
                    Happy days, difficult days, misunderstandings
                    nu edhu vandhaalum, rendu perum open-ah pesi,
                    orutharukoruthar support-ah irukkanum.
                  </p>

                  <p>
                    Oru naal indha long-distance calls,
                    screen-la paakurathu ellame maaranum.
                    Un kooda ovvoru second-um naa anubavikkanum.
                    Unnaiyum naa santhoshama paathukkanum.
                    Athukunnu sandapoda maaten nu ninaikkadha!
                    Sanda podanum, kutty sanda 🤭
                    Athukku apram unna naanthaan convince
                    pannanum 😘
                  </p>

                  <p>
                    Namma serndhu create panra chinna chinna
                    memories, namma sirippu, namma dreams
                    idhellame imagine pannumbodhu romba
                    happy-ah irukku. Aana idhu real eppo
                    nadakkum nu aavaloda irukken pullllllaaaaaa!
                  </p>

                  <p>
                    Future epdi irukkum nu namakku theriyadhu
                    nu sollave maaten. Adhu eppadi irundhaalum
                    andha time-la naa un kooda irukkanum.
                  </p>

                  <p>Finally...</p>

                  <p>
                    Distance evlo irukkunu kavala pada venam,
                    because andha distance namakku evlo mukkiyam
                    nu understand aagirukkom nu ninaikkiren 🥰
                  </p>

                  <h3>
                    You are loved. You are valued.
                    And you are special. 💜
                  </h3>

                  <p>With lots of love,</p>

                  <h2>Un Mama 💋🖤🫂✨</h2>

                  <p className="letter-signature">
                    Always a little more love,
                    every single day. 💜
                  </p>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="envelope-front"></div>

          <motion.div
            className="envelope-flap"
            animate={{ rotateX: isOpen ? 180 : 0 }}
            transition={{ duration: 0.7 }}
          ></motion.div>

          {!isOpen && (
            <div className="envelope-heart">💜</div>
          )}

        </motion.div>
      </div>

      <p className="letter-instruction">
        {isOpen
          ? "Your little letter is open 💜"
          : "Tap the envelope to open"}
      </p>

    </section>
  );
}
