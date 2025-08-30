'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../styles/404.module.css';

const NotFound = () => {
  const [clicks, setClicks] = useState(0);
  const [showRevenge, setShowRevenge] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const router = useRouter();

  const handleClick = () => {
    if (clicks >= 3) {
      setShowRevenge(true);
    } else {
      setClicks(clicks + 1);
    }
  };

  const handleRevenge = () => {
    setShowVideo(true);
    setTimeout(() => {
      let count = 3;
      setCountdown(count);
      const interval = setInterval(() => {
        count -= 1;
        setCountdown(count);
        if (count === 0) {
          clearInterval(interval);
          router.push('/');
        }
      }, 1000);
    }, 4000);
  };

  return (
    <div className={styles['error-page']}>
      {!showVideo ? (
        <>
          <div className={styles['error-404']}>
            <span>4</span>
            <div className={styles['face-container']}>
              {/* <img src={`/faces/face-${clicks}.png`} alt="Your Face" className="face-img" /> */}
              {clicks > 0 && (
                <div className={styles['speech-bubble']}>Oops!</div>
              )}
            </div>
            <span>4</span>
          </div>

          {!showRevenge ? (
            <button
              className={styles['move-button']}
              onClick={handleClick}
              style={{
                top: `${Math.random() * 50 + 25}%`,
                left: `${Math.random() * 50 + 25}%`,
              }}
            >
              Back to Home
            </button>
          ) : (
            <button
              className={styles['revenge-button']}
              onClick={handleRevenge}
            >
              Take Revenge
            </button>
          )}
        </>
      ) : (
        <div className={styles['video-container']}>
          {/* <video autoPlay muted>
            <source src='/videos/missile1.mp4' type='video/mp4' />
          </video> */}
          <div className={styles['explosion']}>💥💥💥</div>
          {countdown !== null && (
            <div className={styles['countdown']}>
              Back to Home in {countdown}...
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotFound;
