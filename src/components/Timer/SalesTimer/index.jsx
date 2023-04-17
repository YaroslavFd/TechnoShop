import { useTimer } from '../useTimer';

import './styles.css';

const SalesTimer = ({ targetDate }) => {
  const { days, hours, minutes, seconds } = useTimer(targetDate);

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

export default SalesTimer;
