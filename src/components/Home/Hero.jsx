'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Wand2, 
  Sparkles, 
  Star, 
  Zap, 
  Shield,
  ArrowRight,
  Eye,
  CheckCircle,
  Clock,
  Users,
  Palette,
  Image as ImageIcon
} from 'lucide-react';

const Hero = () => {
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

  useEffect(() => {
    setIsMounted(true);
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
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Rotating animation for icons
  const rotatingAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "linear"
    }
  };

  // Pulse animation for icons
  const pulseAnimation = {
    scale: [1, 1.2, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Bounce animation for icons
  const bounceAnimation = {
    y: [0, -8, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 pt-16 overflow-hidden relative">
      {/* Enhanced background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-18 w-72 h-72 bg-lime-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      {/* Additional floating elements with Lucide icons */}
      <motion.div
        className="absolute top-1/4 left-10 text-emerald-300 bg-white/50 backdrop-blur-sm rounded-full p-3 shadow-lg"
        animate={floatingAnimation}
      >
        <Camera className="w-8 h-8" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-20 text-green-300 bg-white/50 backdrop-blur-sm rounded-full p-2 shadow-lg"
        animate={rotatingAnimation}
      >
        <Palette className="w-6 h-6" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-20 text-lime-300 bg-white/50 backdrop-blur-sm rounded-full p-2 shadow-lg"
        animate={bounceAnimation}
      >
        <ImageIcon className="w-7 h-7" />
      </motion.div>

      <motion.div
        className="absolute top-10 right-1/4 text-emerald-400 bg-white/50 backdrop-blur-sm rounded-full p-2 shadow-lg"
        animate={pulseAnimation}
      >
        <Zap className="w-5 h-5" />
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
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-medium border border-emerald-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              Professional Photo Editing Services
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 relative">
                Images
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full"
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
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 flex items-center gap-2 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Free Trial</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
              <motion.button 
                className="border-2 border-emerald-300 hover:border-emerald-600 text-gray-700 hover:text-emerald-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 group bg-white/80 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Portfolio</span>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Eye className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>

            <motion.div 
              className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { number: "500+", text: "Projects Completed", icon: <CheckCircle className="w-5 h-5" /> },
                { number: "99%", text: "Client Satisfaction", icon: <Star className="w-5 h-5" fill="currentColor" /> },
                { number: "24/7", text: "Support", icon: <Shield className="w-5 h-5" /> }
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
                    <motion.div
                      className="text-emerald-600"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {stat.icon}
                    </motion.div>
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
            {/* Desktop Layout - Hidden on mobile */}
            <div className="hidden lg:flex gap-6 justify-center relative">
              <motion.div
                className="absolute -top-4 -left-4 text-emerald-600 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg"
                animate={floatingAnimation}
              >
                <Wand2 className="w-6 h-6" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -right-4 text-green-600 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg"
                animate={rotatingAnimation}
              >
                <Sparkles className="w-7 h-7" />
              </motion.div>

              {/* First Marquee - Top to Bottom */}
              <motion.div 
                className="w-48 h-96 rounded-2xl overflow-hidden shadow-2xl relative border-2 border-emerald-200/30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="flex flex-col"
                  variants={marqueeVariants.vertical}
                  animate="animate"
                >
                  {duplicatedImages.map((image, index) => (
                    <div key={`desktop-1-${index}`} className="w-48 h-96 relative flex-shrink-0 group">
                      <Image
                        src={image}
                        alt={`Photo editing sample ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 384px"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-emerald-500/10 transition-all duration-300" />
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Second Marquee - Bottom to Top */}
              <motion.div 
                className="w-48 h-96 rounded-2xl overflow-hidden shadow-2xl relative mt-12 border-2 border-green-200/30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="flex flex-col"
                  variants={marqueeVariants.verticalReverse}
                  animate="animate"
                >
                  {duplicatedImages.map((image, index) => (
                    <div key={`desktop-2-${index}`} className="w-48 h-96 relative flex-shrink-0 group">
                      <Image
                        src={image}
                        alt={`Photo editing sample ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 384px"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-green-500/10 transition-all duration-300" />
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Mobile Layout - Hidden on desktop */}
            <div className="lg:hidden flex flex-col gap-6 items-center relative">
              <motion.div
                className="absolute -top-2 -left-2 text-emerald-600 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg"
                animate={pulseAnimation}
              >
                <Zap className="w-4 h-4" />
              </motion.div>

              {/* First Marquee - Left to Right */}
              <motion.div 
                className="w-72 h-48 rounded-2xl overflow-hidden shadow-2xl relative border-2 border-emerald-200/30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="flex"
                  variants={marqueeVariants.horizontal}
                  animate="animate"
                >
                  {duplicatedImages.map((image, index) => (
                    <div key={`mobile-1-${index}`} className="w-72 h-48 relative flex-shrink-0 group">
                      <Image
                        src={image}
                        alt={`Photo editing sample ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 288px"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-emerald-500/10 transition-all duration-300" />
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Second Marquee - Right to Left */}
              <motion.div 
                className="w-72 h-48 rounded-2xl overflow-hidden shadow-2xl relative border-2 border-green-200/30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="flex"
                  variants={marqueeVariants.horizontalReverse}
                  animate="animate"
                >
                  {duplicatedImages.map((image, index) => (
                    <div key={`mobile-2-${index}`} className="w-72 h-48 relative flex-shrink-0 group">
                      <Image
                        src={image}
                        alt={`Photo editing sample ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 288px"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-green-500/10 transition-all duration-300" />
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
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
          className="w-6 h-10 border-2 border-emerald-300 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-emerald-400 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom decorative elements */}
      <motion.div
        className="absolute bottom-20 right-10 text-green-400 bg-white/50 backdrop-blur-sm rounded-full p-2 shadow-lg"
        animate={bounceAnimation}
      >
        <Users className="w-6 h-6" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-1/4 text-emerald-400 bg-white/50 backdrop-blur-sm rounded-full p-2 shadow-lg"
        animate={rotatingAnimation}
      >
        <Clock className="w-5 h-5" />
      </motion.div>
    </section>
  );
};

export default Hero;