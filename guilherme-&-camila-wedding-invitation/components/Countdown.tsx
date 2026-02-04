
import React, { useState, useEffect } from 'react';

interface Props {
  targetDate: string;
}

const Countdown: React.FC<Props> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span className="font-serif text-[48px] md:text-[64px] leading-none mb-2">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] uppercase tracking-widest opacity-60">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center gap-6 md:gap-12">
      <TimeBox value={timeLeft.days} label="Dias" />
      <TimeBox value={timeLeft.hours} label="Horas" />
      <TimeBox value={timeLeft.minutes} label="Minutos" />
      <TimeBox value={timeLeft.seconds} label="Segundos" />
    </div>
  );
};

export default Countdown;
