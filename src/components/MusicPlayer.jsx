import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMusic, FiVolume2, FiVolumeX } from "react-icons/fi";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioContextRef = useRef(null);
  const gainNodeRef = useRef(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const createAmbientMusic = () => {
    if (audioContextRef.current) return audioContextRef.current;

    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const gain = ctx.createGain();
    gain.gain.value = 0.06;
    gain.connect(ctx.destination);

    audioContextRef.current = ctx;
    gainNodeRef.current = gain;

    // Create ambient pads
    const playNote = (freq, startTime, duration) => {
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.value = freq;

      noteGain.gain.setValueAtTime(0, startTime);
      noteGain.gain.linearRampToValueAtTime(0.3, startTime + duration * 0.3);
      noteGain.gain.linearRampToValueAtTime(0, startTime + duration);

      osc.connect(noteGain);
      noteGain.connect(gain);

      osc.start(startTime);
      osc.stop(startTime + duration);
    };

    const playLoop = () => {
      if (!isPlayingRef.current) return;

      const now = ctx.currentTime;
      const notes = [130.81, 164.81, 196.0, 261.63, 329.63, 392.0];
      const scale = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25];

      // Ambient pad chords
      for (let i = 0; i < 3; i++) {
        const note = notes[Math.floor(Math.random() * notes.length)];
        playNote(note, now + i * 3, 8);
        playNote(note * 1.5, now + i * 3 + 0.5, 6);
      }

      // Melody tinkle
      for (let i = 0; i < 4; i++) {
        const note = scale[Math.floor(Math.random() * scale.length)];
        playNote(note * 2, now + i * 2.5 + 1, 2);
      }

      setTimeout(playLoop, 9000);
    };

    playLoop();
    return ctx;
  };

  const toggleMusic = () => {
    setShowTooltip(false);
    if (playing) {
      isPlayingRef.current = false;
      if (gainNodeRef.current) {
        gainNodeRef.current.gain.linearRampToValueAtTime(
          0,
          audioContextRef.current.currentTime + 1,
        );
      }
      setPlaying(false);
    } else {
      isPlayingRef.current = true;
      createAmbientMusic();
      if (gainNodeRef.current) {
        gainNodeRef.current.gain.linearRampToValueAtTime(
          0.06,
          audioContextRef.current.currentTime + 1,
        );
      }
      setPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="glass-card rounded-lg px-3 py-1.5 font-mono text-xs text-text-secondary"
          >
            ambient mode
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMusic}
        className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 cursor-pointer ${
          playing
            ? "bg-white/10 border-white/20 text-text-primary"
            : "glass-card rounded-full! text-text-secondary hover:text-text-primary"
        }`}
      >
        {playing ? (
          <div className="flex items-center gap-0.5">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ scaleY: [0.3, 1, 0.3] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
                className="w-0.5 h-3 bg-text-primary rounded-full"
              />
            ))}
          </div>
        ) : (
          <FiMusic size={18} />
        )}
      </motion.button>
    </div>
  );
}
