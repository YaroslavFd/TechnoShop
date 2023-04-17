import { useTimer } from '../useTimer';

import './styles.css';

const BannerTimer = ({ targetDate }) => {
  const { days, hours, minutes, seconds } = useTimer(targetDate);
  return (
    <div className="banner__timer">
      <div className="banner__timer-group">
        <div className="banner__timer-digit">{days}</div>
        <div className="banner__timer-text">Days</div>
      </div>
      <div className="banner__timer-group">
        <div className="banner__timer-digit">{hours}</div>
        <div className="banner__timer-text">Hours</div>
      </div>
      <div className="banner__timer-group">
        <div className="banner__timer-digit">{minutes}</div>
        <div className="banner__timer-text">Minutes</div>
      </div>
      <div className="banner__timer-group">
        <div className="banner__timer-digit">{seconds}</div>
        <div className="banner__timer-text">Seconds</div>
      </div>
    </div>
  );
};

export default BannerTimer;
