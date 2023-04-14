import { useEffect, useState } from 'react';

import './styles.css';

const CountdownTimer = ({ targetDate }) => {
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

  return (
    <div className="today__timer">
      <div className="today__timer-group">
        <div className="today__timer-text">Days</div>
        <div className="today__timer-digit">{days}</div>
      </div>

      <div className="today__timer-divider">
        <span className="today__timer-dot"></span>
        <span className="today__timer-dot"></span>
      </div>

      <div className="today__timer-group">
        <div className="today__timer-text">Hours</div>
        <div className="today__timer-digit">{hours}</div>
      </div>

      <div className="today__timer-divider">
        <span className="today__timer-dot"></span>
        <span className="today__timer-dot"></span>
      </div>

      <div className="today__timer-group">
        <div className="today__timer-text">Minutes</div>
        <div className="today__timer-digit">{minutes}</div>
      </div>

      <div className="today__timer-divider">
        <span className="today__timer-dot"></span>
        <span className="today__timer-dot"></span>
      </div>

      <div className="today__timer-group">
        <div className="today__timer-text">Seconds</div>
        <div className="today__timer-digit">{seconds}</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
