import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { motion } from 'framer-motion';
import './CountdownTimer.css';

// Funciones auxiliares para el SVG
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  const d = [
    'M', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(' ');
  return d;
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
  return ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

const SVGCircle = ({ radius }) => (
  <svg className="countdown-svg">
    <path
      fill="none"
      stroke="#000000"
      strokeWidth="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined
  });
  const [isEventDay, setIsEventDay] = useState(false);

  useEffect(() => {
    const target = moment('2025-06-22 16:00:00', 'YYYY-MM-DD HH:mm:ss');

    const interval = setInterval(() => {
      const now = moment();
      const difference = target.diff(now);

      if (difference <= 0) {
        clearInterval(interval);
        setIsEventDay(true);
        return;
      }

      // Cálculo correcto de días totales
      const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: totalDays,
        hours,
        minutes,
        seconds
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeBlock = ({ value, label, maxValue }) => {
    if (!value && value !== 0) return null;
    
    const radius = mapNumber(value, 0, maxValue, 0, 360);
    
    return (
      <div className="countdown-item">
        <SVGCircle radius={radius} />
        <div className="countdown-value">{value.toString().padStart(2, '0')}</div>
        <span className="countdown-label">{label}</span>
      </div>
    );
  };

  if (isEventDay) {
    return (
      <div className="text-center py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          ¡Hoy es el gran día! 🎉
        </h2>
        <p className="text-lg text-gray-800">
          ¡Nos vemos pronto en el baby shower! 🧸✨
        </p>
      </div>
    );
  }

  return (
    <div className="countdown-wrapper">
      <TimeBlock value={timeLeft.days} label="Días" maxValue={365} />
      <TimeBlock value={timeLeft.hours} label="Horas" maxValue={24} />
      <TimeBlock value={timeLeft.minutes} label="Minutos" maxValue={60} />
      <TimeBlock value={timeLeft.seconds} label="Segundos" maxValue={60} />
    </div>
  );
};

export default CountdownTimer; 