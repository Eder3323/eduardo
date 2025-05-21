import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Intentar reproducir automáticamente al montar
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.volume = 0.5; // Volumen al 50%
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log('Autoplay bloqueado por el navegador');
        // El audio comenzará silenciado hasta que el usuario interactúe
        setIsMuted(true);
      }
    };

    playAudio();

    // Limpiar al desmontar
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log('Error al reproducir:', error);
        });
      }
      setIsPlaying(!isPlaying);
      setIsVisible(true);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      setIsVisible(true);
    }
  };

  return (
    <>
      {/* Elemento de audio */}
      <audio
        ref={audioRef}
        src="/assets/tarzan.mp3"
        loop
        preload="auto"
        className="hidden"
      />

      {/* Controles de audio */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg"
          >
            <button
              onClick={togglePlay}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 hover:bg-orange-200 transition-colors"
              aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
            >
              {isPlaying ? (
                <span className="text-2xl">⏸️</span>
              ) : (
                <span className="text-2xl">▶️</span>
              )}
            </button>
            <button
              onClick={toggleMute}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 hover:bg-orange-200 transition-colors"
              aria-label={isMuted ? "Activar sonido" : "Silenciar"}
            >
              {isMuted ? (
                <span className="text-2xl">🔇</span>
              ) : (
                <span className="text-2xl">🔊</span>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BackgroundMusic; 