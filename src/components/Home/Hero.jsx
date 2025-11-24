'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Mock images array - in real implementation, replace with actual images
  const sliderImages = [
    '/photos/logo.webp',
    '/photos/logo.webp',
    '/photos/logo.webp',
    '/photos/logo.webp',
  ];

  // Duplicate images for seamless looping
  const duplicatedImages = [...sliderImages, ...sliderImages];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Marquee animation variants
  const marqueeVariants = {
    vertical: {
      animate: {
        y: [0, -100 * sliderImages.length],
        transition: {
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      },
    },
    verticalReverse: {
      animate: {
        y: [-100 * sliderImages.length, 0],
        transition: {
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      },
    },
    horizontal: {
      animate: {
        x: [0, -100 * sliderImages.length],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      },
    },
    horizontalReverse: {
      animate: {
        x: [-100 * sliderImages.length, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Text Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Photo Editing
              </span>{' '}
              Services
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your images with our expert editing services. 
              From basic enhancements to advanced retouching, we deliver 
              stunning results that bring your vision to life.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                View Portfolio
              </button>
            </motion.div>

            <motion.div 
              className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div>Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99%</div>
                <div>Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div>Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Marquee Sliders */}
          <motion.div 
            className="lg:w-1/2 w-full max-w-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Desktop Layout - Vertical Marquees */}
            {!isMobile && (
              <div className="flex gap-6 justify-center">
                {/* First Marquee - Top to Bottom */}
                <div className="w-48 h-96 rounded-2xl overflow-hidden shadow-2xl relative">
                  <motion.div
                    className="flex flex-col"
                    variants={marqueeVariants.vertical}
                    animate="animate"
                  >
                    {duplicatedImages.map((image, index) => (
                      <div key={index} className="w-48 h-96 relative flex-shrink-0">
                        <Image
                          src={image}
                          alt={`Photo editing sample ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 384px"
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Second Marquee - Bottom to Top */}
                <div className="w-48 h-96 rounded-2xl overflow-hidden shadow-2xl relative mt-12">
                  <motion.div
                    className="flex flex-col"
                    variants={marqueeVariants.verticalReverse}
                    animate="animate"
                  >
                    {duplicatedImages.map((image, index) => (
                      <div key={index} className="w-48 h-96 relative flex-shrink-0">
                        <Image
                          src={image}
                          alt={`Photo editing sample ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 384px"
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            )}

            {/* Mobile Layout - Horizontal Marquees */}
            {isMobile && (
              <div className="flex flex-col gap-6 items-center">
                {/* First Marquee - Left to Right */}
                <div className="w-72 h-48 rounded-2xl overflow-hidden shadow-2xl relative">
                  <motion.div
                    className="flex"
                    variants={marqueeVariants.horizontal}
                    animate="animate"
                  >
                    {duplicatedImages.map((image, index) => (
                      <div key={index} className="w-72 h-48 relative flex-shrink-0">
                        <Image
                          src={image}
                          alt={`Photo editing sample ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 288px"
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Second Marquee - Right to Left */}
                <div className="w-72 h-48 rounded-2xl overflow-hidden shadow-2xl relative">
                  <motion.div
                    className="flex"
                    variants={marqueeVariants.horizontalReverse}
                    animate="animate"
                  >
                    {duplicatedImages.map((image, index) => (
                      <div key={index} className="w-72 h-48 relative flex-shrink-0">
                        <Image
                          src={image}
                          alt={`Photo editing sample ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 288px"
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default Hero;