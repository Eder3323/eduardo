import React from 'react';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const targetDate = new Date('2025-06-22T16:00:00-06:00');

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-2xl md:text-3xl font-semibold text-orange-800 mt-4 "
      >
        <span className="inline-block min-w-[60px]">{days}</span>
        <span className="mx-2">:</span>
        <span className="inline-block min-w-[60px]">{hours.toString().padStart(2, '0')}</span>
        <span className="mx-2">:</span>
        <span className="inline-block min-w-[60px]">{minutes.toString().padStart(2, '0')}</span>
        <span className="mx-2">:</span>
        <span className="inline-block min-w-[60px]">{seconds.toString().padStart(2, '0')}</span>
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col items-center pt-6">
      <div className="text-sm text-orange-600 mb-2">Días : Horas : Minutos : Segundos</div>
      <Countdown
        date={targetDate}
        renderer={renderer}
      />
    </div>
  );
};

export default CountdownTimer; 