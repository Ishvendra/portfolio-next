'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Autoplay,
  EffectCube,
  EffectCoverflow,
} from 'swiper/modules';
import '../styles/project.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import 'swiper/css/zoom';

const ProjectCarousel = ({ images }) => {
  const swiperContainerRef = useRef(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (swiperContainerRef.current && swiperContainerRef.current.swiper) {
        swiperContainerRef.current.swiper.update();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className='swiper-wrapper-fix'
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Swiper
          ref={swiperContainerRef}
          modules={[Navigation, Autoplay, EffectCube, EffectCoverflow]}
          effect={'cube'}
          grabCursor={true}
          zoom={true}
          centeredSlides={true}
          spaceBetween={10}
          slidesPerView={2}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
            disabledClass: 'swiper-button-disabled',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          observer={true}
          observeParents={true}
          resizeObserver={true}
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexGrow: 1,
          }}
          className='mySwiper custom-cards-effect'
        >
          {images?.map((image, index) => (
            <SwiperSlide
              key={index}
              className='custom-slide'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                background: 'transparent !important',
                backgroundColor: 'transparent !important',
              }}
              onClick={() => openFullscreen(image)}
            >
              <div
                className='swiper-zoom-container custom-zoom-container'
                style={{
                  background: 'transparent',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  src={image}
                  fill
                  alt={`Slide ${index + 1}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    background: 'transparent',
                  }}
                  className='screenshot-image'
                />
              </div>
            </SwiperSlide>
          ))}

          <div className='swiper-button-next'>
            <img
              width='40'
              height='40'
              src='https://img.icons8.com/?size=100&id=26129&format=png&color=DBDBDB'
              alt='forward'
            />
          </div>
          <div className='swiper-button-prev'>
            <img
              width='40'
              height='40'
              src='https://img.icons8.com/?size=100&id=26194&format=png&color=DBDBDB'
              alt='back'
            />
          </div>
        </Swiper>
      </div>
      {fullscreenImage && (
        <div
          className='fullscreen-overlay'
          onClick={closeFullscreen}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            cursor: 'pointer',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
          }}
        >
          <img
            src={fullscreenImage}
            alt='Fullscreen'
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
            }}
          />
        </div>
      )}
    </>
  );
};

export default ProjectCarousel;
