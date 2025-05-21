import React from 'react';
import { motion } from 'framer-motion';

const EventDetails = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen py-16 px-4 bg-gradient-to-b from-pink-50 to-orange-50 relative">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Fecha */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg relative overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="absolute -top-4 -right-4 text-6xl opacity-20">📅</div>
            <h3 className="text-xl font-semibold text-orange-800 mb-2">Fecha</h3>
            <p className="text-gray-700">22 de junio de 2025</p>
          </motion.div>

          {/* Hora */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg relative overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="absolute -top-4 -right-4 text-6xl opacity-20">⏰</div>
            <h3 className="text-xl font-semibold text-orange-800 mb-2">Hora</h3>
            <p className="text-gray-700">4:00 PM</p>
          </motion.div>

          {/* Lugar */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg relative overflow-hidden hover:shadow-xl transition-shadow duration-300 md:col-span-3"
          >
            <div className="absolute -top-4 -right-4 text-6xl opacity-20">🏠</div>
            <h3 className="text-xl font-semibold text-orange-800 mb-2">Lugar</h3>
            <p className="text-gray-700 mb-4">
              Casa de los abuelitos Tomás y Minerva
              <br />
              <span className="text-sm text-gray-600">
                C. Durango, Col. Emiliano Zapata, Jaltepec
              </span>
            </p>
            <motion.button
              onClick={() => window.open('https://maps.app.goo.gl/wmYwxCQ8ufG1Xvy78', '_blank')}
              className="w-full flex items-center justify-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xl">📍</span>
              <span className="font-medium">Ver ubicación</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Elementos decorativos */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="fixed left-10 top-1/4 text-4xl"
          >
            🦁
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="fixed right-10 top-1/3 text-4xl"
          >
            🎈
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="fixed left-1/4 bottom-1/4 text-4xl"
          >
            👣
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails; 