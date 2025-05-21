import React from 'react';
import { motion } from 'framer-motion';

const BabyAnnouncement = () => {
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  return (
    <section className="py-10 pb-1 px-4 bg-gradient-to-b from-pink-50 to-orange-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl font-medium text-gray-600"
        >
          Pronto llegará...
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-green-700 mt-1"
        >
          Eduardo Valentín
        </motion.h2>

        <motion.div
          variants={imageVariants}
          className="mt-8"
        >
          <img
            src="/assets/lion_leyend.png"
            alt="Leoncito bebé"
            className="w-56 md:w-36 mx-auto"
          />
        </motion.div>

        {/* Elementos decorativos */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute left-10 top-1/2 text-4xl"
          >
            🎀
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute right-10 top-1/2 text-4xl"
          >
            🧸
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BabyAnnouncement; 