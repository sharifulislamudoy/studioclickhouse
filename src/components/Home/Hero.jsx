'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Mock images array - in real implementation, replace with actual images
  const sliderImages = [
    '/photos/logo.webp',
    '/photos/logo.webp',
    '/photos/logo.webp',
    '/photos/logo.webp',
  ];

  // Duplicate images for seamless looping
  const duplicatedImages = [...sliderImages, ...sliderImages];

  // Check if mobile - only on client side
  useEffect(() => {
    setIsMounted(true);
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

  // Floating animation for icons
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Rotating animation for icons
  const rotatingAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }
  };

  // Pulse animation for icons
  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Don't render marquees until mounted to avoid hydration mismatch
  const renderMarquees = () => {
    if (!isMounted) {
      // Return a placeholder with the same dimensions during SSR
      return (
        <div className="flex gap-6 justify-center">
          <div className="w-48 h-96 rounded-2xl overflow-hidden shadow-2xl relative bg-gray-200"></div>
          <div className="w-48 h-96 rounded-2xl overflow-hidden shadow-2xl relative mt-12 bg-gray-200"></div>
        </div>
      );
    }

    // Desktop Layout - Vertical Marquees
    if (!isMobile) {
      return (
        <div className="flex gap-6 justify-center relative">
          {/* Animated Icons around the marquees */}
          <motion.div
            className="absolute -top-4 -left-4 text-blue-600"
            animate={floatingAnimation}
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
            </svg>
          </motion.div>
          
          <motion.div
            className="absolute -bottom-4 -right-4 text-purple-600"
            animate={rotatingAnimation}
          >
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
          </motion.div>

          {/* First Marquee - Top to Bottom */}
          <motion.div 
            className="w-48 h-96 rounded-2xl overflow-hidden shadow-2xl relative border-2 border-white/20"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="flex flex-col"
              variants={marqueeVariants.vertical}
              animate="animate"
            >
              {duplicatedImages.map((image, index) => (
                <div key={index} className="w-48 h-96 relative flex-shrink-0 group">
                  <Image
                    src={image}
                    alt={`Photo editing sample ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority={index < 2} // Prioritize first few images
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Second Marquee - Bottom to Top */}
          <motion.div 
            className="w-48 h-96 rounded-2xl overflow-hidden shadow-2xl relative mt-12 border-2 border-white/20"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="flex flex-col"
              variants={marqueeVariants.verticalReverse}
              animate="animate"
            >
              {duplicatedImages.map((image, index) => (
                <div key={index} className="w-48 h-96 relative flex-shrink-0 group">
                  <Image
                    src={image}
                    alt={`Photo editing sample ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      );
    }

    // Mobile Layout - Horizontal Marquees
    return (
      <div className="flex flex-col gap-6 items-center relative">
        {/* Animated Icons for mobile */}
        <motion.div
          className="absolute -top-2 -left-2 text-blue-600"
          animate={pulseAnimation}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
        </motion.div>

        {/* First Marquee - Left to Right */}
        <motion.div 
          className="w-72 h-48 rounded-2xl overflow-hidden shadow-2xl relative border-2 border-white/20"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="flex"
            variants={marqueeVariants.horizontal}
            animate="animate"
          >
            {duplicatedImages.map((image, index) => (
              <div key={index} className="w-72 h-48 relative flex-shrink-0 group">
                <Image
                  src={image}
                  alt={`Photo editing sample ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 288px"
                  priority={index < 2} // Prioritize first few images
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Second Marquee - Right to Left */}
        <motion.div 
          className="w-72 h-48 rounded-2xl overflow-hidden shadow-2xl relative border-2 border-white/20"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="flex"
            variants={marqueeVariants.horizontalReverse}
            animate="animate"
          >
            {duplicatedImages.map((image, index) => (
              <div key={index} className="w-72 h-48 relative flex-shrink-0 group">
                <Image
                  src={image}
                  alt={`Photo editing sample ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 288px"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 pt-16 overflow-hidden relative">
      {/* Enhanced background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-18 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 text-blue-300"
        animate={floatingAnimation}
      >
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-20 text-purple-300"
        animate={rotatingAnimation}
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-20 text-pink-300"
        animate={pulseAnimation}
      >
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Text Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.svg 
                className="w-4 h-4" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </motion.svg>
              Professional Photo Editing Services
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 relative">
                Images
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>{' '}
              With Excellence
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
              <motion.button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg flex items-center gap-2 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Free Trial</span>
                <motion.svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </motion.button>
              <motion.button 
                className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Portfolio</span>
                <motion.svg 
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </motion.svg>
              </motion.button>
            </motion.div>

            <motion.div 
              className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { number: "500+", text: "Projects Completed", icon: "🎯" },
                { number: "99%", text: "Client Satisfaction", icon: "⭐" },
                { number: "24/7", text: "Support", icon: "🛡️" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.text}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {stat.icon}
                    </motion.span>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 group-hover:text-gray-900 transition-colors">{stat.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Marquee Sliders */}
          <motion.div 
            className="lg:w-1/2 w-full max-w-2xl"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            {renderMarquees()}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;