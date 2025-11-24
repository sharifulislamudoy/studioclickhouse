'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Service' },
    { href: '/free-trial', label: 'Free Trial' },
    { href: '/pricing', label: 'Price' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/workflow', label: 'Work Flow' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/blog', label: 'Blog' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/40 backdrop-blur-md shadow-sm border-b border-gray-200'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/photos/logo.png"
                alt="PhotoEdit Pro"
                width={160}
                height={40}
                className="h-15 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex gap-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Link
                    href={item.href}
                    className="font-semibold text-gray-700 hover:text-green-500 transition-colors duration-200 relative group"
                  >
                    {item.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="w-6 h-0.5 bg-gray-700 mb-1.5 block"
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-gray-700 mb-1.5 block"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-gray-700 block"
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <motion.ul className="px-2 pt-2 pb-4 space-y-3 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-gray-200">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2 font-semibold text-gray-700 hover:text-green-500 hover:bg-green-50 rounded-lg transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;