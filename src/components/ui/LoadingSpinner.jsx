'use client';

import { motion } from 'framer-motion';
import { Sparkles, Camera } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50 z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-18 w-72 h-72 bg-lime-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Main spinner container */}
      <div className="relative flex flex-col items-center justify-center space-y-6">
        {/* Animated logo/icon */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Outer rotating ring */}
          <motion.div
            className="w-24 h-24 border-4 border-emerald-200 border-t-emerald-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Camera className="w-10 h-10 text-emerald-600" />
            </motion.div>
          </div>

          {/* Floating sparkles */}
          <motion.div
            className="absolute -top-2 -right-2 text-emerald-400"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-5 h-5" fill="currentColor" />
          </motion.div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h2
            className="text-2xl font-bold text-gray-900"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading Excellence
          </motion.h2>
          <motion.p
            className="text-gray-600 text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          >
            Preparing your visual experience...
          </motion.p>
        </motion.div>

        {/* Progress dots */}
        <motion.div className="flex space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-emerald-500 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingSpinner;