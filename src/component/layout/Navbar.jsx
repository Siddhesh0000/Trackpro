"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Shield, Zap } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg shadow-orange-500/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">TrackPro</span>
              <div className="text-xs text-slate-400 -mt-1">Elite Athletics</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {['Home', 'Programs', 'Features', 'Testimonials', 'Contact'].map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              return (
                <Link key={item} href={path} className="px-4 py-2 text-slate-300 hover:text-white transition-colors relative group">
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </Link>
              );
            })}
            <button className="ml-4 bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all hover:scale-105 text-white">
              Join Now
            </button>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-lg border-t border-slate-800">
          <div className="px-4 py-6 space-y-4">
            {['Home', 'Programs', 'Features', 'Testimonials', 'Contact'].map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              return (
                <Link key={item} href={path} className="block text-slate-300 hover:text-orange-500 transition-colors py-2">
                  {item}
                </Link>
              );
            })}
            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-lg font-semibold text-white">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
