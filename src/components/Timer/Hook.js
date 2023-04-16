import { useEffect, useState } from 'react';

export const useTimer = (targetDate) => {
  const [intervalId, setIntervalId] = useState(null);

  const calculateTimeRemaining = () => {
    const timeRemaining = targetDate - new Date();
    if (timeRemaining <= 0) {
      clearInterval(intervalId);
      return;
    } else {
      return timeRemaining;
    }
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const id = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    setIntervalId(id);
    return () => clearInterval(id);
  }, [targetDate]);

  const days =
    timeRemaining > 0
      ? String(Math.floor(timeRemaining / (1000 * 60 * 60 * 24))).padStart(
          2,
          '0'
        )
      : '00';
  const hours =
    timeRemaining > 0
      ? String(
          Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).padStart(2, '0')
      : '00';
  const minutes =
    timeRemaining > 0
      ? String(
          Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
        ).padStart(2, '0')
      : '00';
  const seconds =
    timeRemaining > 0
      ? String(Math.floor((timeRemaining % (1000 * 60)) / 1000)).padStart(
          2,
          '0'
        )
      : '00';

  return { days, hours, minutes, seconds };
};
