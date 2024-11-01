"use client";

import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVideoAvailable, setIsVideoAvailable] = useState(true);

  useEffect(() => {
    const video = document.createElement('video');
    video.src = '/assets/video/preview.mp4';
    video.oncanplaythrough = () => setIsVideoAvailable(true);
    video.onerror = () => setIsVideoAvailable(false);
  }, []);

  return (
    <section className="relative h-[75vh]">
      {isVideoAvailable ? (
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/assets/video/preview.mp4" type="video/mp4" />
          Ваш браузер не поддерживает тег video.
        </video>
      ) : (
        <img
          src="/assets/images/preview.webp"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold leading-tight">СИТИ-КВАРТАЛ ОКТЯБРЬСКИЙ</h1>
          <p className="mt-6 text-xl">Портал, площадка жителей комплекса</p>
          <div className="mt-10 space-x-4">
            <a href="https://rtspcam.ru/stream/zdveay1tbvbrehj" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-800 px-8 py-3 rounded-full text-lg">Ход строительства онлайн</a>
            <a href="#" className="bg-gray-600 hover:bg-gray-800 px-8 py-3 rounded-full text-lg">Узнать больше</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
