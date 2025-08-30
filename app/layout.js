'use client';

import './globals.css';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Inconsolata, Nunito, Noto_Sans } from 'next/font/google';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['200', '400', '700'],
});
const nunito = Nunito({ subsets: ['latin'], weight: ['200', '400', '700'] });
const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const videoRef = useRef(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  const getBackgroundClass = () => {
    if (pathname === '/') return 'default-bg';
    if (pathname.startsWith('/project-showcase/01')) return '_1-bg';
    if (pathname.startsWith('/project-showcase/02')) return '_2-bg';
    if (pathname.startsWith('/project-showcase/03')) return '_3-bg';
    if (pathname.startsWith('/project-showcase/04')) return '_4-bg';
    if (pathname === '/about') return '';
    return '';
  };

  const bgClass = getBackgroundClass();
  const isHomePage = bgClass === 'default-bg';

  useEffect(() => {
    if (isHomePage) {
      const timer = setTimeout(() => {
        setShouldLoadVideo(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isHomePage]);

  const handleVideoLoad = () => {
    if (videoRef.current) {
      requestAnimationFrame(() => {
        videoRef.current.classList.add('loaded');
      });
    }
  };

  return (
    <html lang='en' nighteye='disabled'>
      <head>
        <link rel='preconnect' href='https://www.linkedin.com' />
        <link rel='preconnect' href='https://github.com' />
        <link rel='preconnect' href='https://drive.google.com' />
      </head>
      <body
        className={`app-container ${bgClass} text-light ${inconsolata.className} ${nunito.className} ${notoSans.className}`}
      >
        {isHomePage ? (
          <>
            <div className='hero-2'>
              <div className='overlay' />
            </div>
            {shouldLoadVideo && (
              <video
                ref={videoRef}
                className='bg-video'
                autoPlay
                loop
                muted
                playsInline
                preload='none'
                onLoadedData={handleVideoLoad}
                onCanPlay={handleVideoLoad}
              >
                <source src='/assets/common/home-bg.mp4' type='video/mp4' />
              </video>
            )}
          </>
        ) : (
          <div className='hero'>
            <div className='overlay' />
          </div>
        )}
        {children}
      </body>
    </html>
  );
}
