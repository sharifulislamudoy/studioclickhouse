'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <img src="/photos/logo.png" alt="logo" className='h-20 w-auto' />
        </div>

        <ul className="flex gap-6">
          <li><Link className="font-bold cursor-pointer hover:text-blue-500" href="/">Home</Link></li>
          <li><Link className="font-bold cursor-pointer hover:text-blue-500" href="/services">Service</Link></li>
          <li><Link className="font-bold cursor-pointer hover:text-blue-500" href="/free-trial">Free Trial</Link></li>
          <li><Link className="font-bold cursor-pointer hover:text-blue-500" href="/pricing">Price</Link></li>
          <li><Link className="font-bold cursor-pointer hover:text-blue-500" href="/portfolio">Portfolio</Link></li>
          <li><Link className="font-bold cursor-pointer hover:text-blue-500" href="/workflow">Work Flow</Link></li>
          <li><Link className="font-bold cursor-pointer hover:text-blue-500" href="/contact">Contact Us</Link></li>
          <li><Link className="font-bold cursor-pointer hover:text-blue-500" href="/blog">Blog</Link></li>
        </ul>

      </div>
    </nav>
  );
}
