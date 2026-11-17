import { useState, useEffect, useRef } from "react";
import GiftBox from "./components/GiftBox";
import FutureTimeline from "./components/FutureTimeline";
import LoveLetter from "./components/LoveLetter";
import FloatingHearts from "./components/FloatingHearts";
import "./App.css";

const musicFiles = {
  gift: "/music/Giftbox.mp3",
  future: "/music/Timeline.mp3",
  letter: "/music/Letter.mp3",
};

function App() {
  const [currentPage, setCurrentPage] = useState("gift");
  const [musicEnabled, setMusicEnabled] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    window.history.replaceState(
      { page: "gift" },
      "",
      window.location.href
    );

    const handleBack = (event) => {
      setCurrentPage(event.state?.page || "gift");
    };

    window.addEventListener("popstate", handleBack);

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, []);

  const navigateTo = (page) => {
    window.history.pushState(
      { page },
      "",
      window.location.href
    );

    setCurrentPage(page);
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (!musicEnabled) {
      audio.pause();
      return;
    }

    audio.pause();
    audio.src = musicFiles[currentPage];
    audio.loop = true;
    audio.volume = 0.6;
    audio.load();

    audio.play().catch((error) => {
      console.log("Music playback needs user interaction:", error);
    });

    return () => {
      audio.pause();
    };
  }, [currentPage, musicEnabled]);

  return (
    <main className="app-container">
      <FloatingHearts />

      <audio ref={audioRef} preload="auto" loop />

      <button
        className="music-control"
        onClick={() => setMusicEnabled(!musicEnabled)}
      >
        {musicEnabled ? "♫ Music: ON" : "♫ Enable Music"}
      </button>

      <div className="app-content">
        {currentPage === "gift" && (
          <GiftBox onOpen={() => navigateTo("future")} />
        )}

        {currentPage === "future" && (
          <FutureTimeline
            onContinue={() => navigateTo("letter")}
          />
        )}

        {currentPage === "letter" && <LoveLetter />}
      </div>
    </main>
  );
}

export default App;
