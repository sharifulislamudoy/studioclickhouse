'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function Hero() {
  const col1Controls = useAnimation();
  const col2Controls = useAnimation();

  const startMarquee = (controls, direction) => {
    controls.start({
      y: direction === 'down' ? ['-100%', '0%'] : ['0%', '-100%'],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: 'linear',
      },
    });
  };

  useEffect(() => {
    startMarquee(col1Controls, 'down');
    startMarquee(col2Controls, 'up');
  }, []);

  const pause = (controls) => controls.stop();

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src="/bg-video.mp4"
        autoPlay
        muted
        loop
      ></video>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 h-full w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-10 items-center">
        
        {/* LEFT SIDE */}
        <div className="text-white flex flex-col justify-center items-start">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Professional Photo Editing & Retouching Services
          </h1>

          <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
            Try Free With Quote
          </button>
        </div>

        {/* RIGHT SIDE: MARQUEE */}
        <div className="relative w-full flex flex-col gap-6 overflow-hidden lg:h-[80vh]">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 h-full">

            {/* COLUMN 1: top to bottom */}
            <motion.div
              className="flex flex-col gap-6 cursor-pointer"
              animate={col1Controls}
              onMouseEnter={() => pause(col1Controls)}
              onMouseLeave={() => startMarquee(col1Controls, 'down')}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <img
                  key={i}
                  src="/photos/logo.webp"
                  className="w-full opacity-40 hover:opacity-100 transition"
                />
              ))}
            </motion.div>

            {/* COLUMN 2: bottom to top */}
            <motion.div
              className="flex flex-col gap-6 cursor-pointer"
              animate={col2Controls}
              onMouseEnter={() => pause(col2Controls)}
              onMouseLeave={() => startMarquee(col2Controls, 'up')}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <img
                  key={i}
                  src="/photos/logo.webp"
                  className="w-full opacity-40 hover:opacity-100 transition"
                />
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
