import React from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100">
      {/* Imagen de fondo con animación */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/assets/mariela1.jpg"
          alt="Eduardo Valentín"
          className="w-full h-full object-cover object-[center_15%] opacity-20"
        />
      </motion.div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 down_div">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6"
        >
            <h1 className="font-baloo text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
                ¡Prepárate para conocer a Eduardo Valentín!
            </h1>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto"
        >
            Con todo nuestro cariño, te esperamos el
            22 de junio de 2025 a las 4:00 PM
            en casa de los abuelitos Tomás y Minerva 🧸✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <CountdownTimer />
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 