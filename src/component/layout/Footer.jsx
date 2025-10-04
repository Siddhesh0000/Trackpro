"use client";
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-12 px-4 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">TrackPro</span>
            </div>
            <p className="text-slate-400 max-w-sm">Empowering athletes to achieve excellence through world-class facilities and expert coaching.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Programs</li>
              <li>Features</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>info@trackpro.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Athletic Way</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2025 TrackPro Elite Athletics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
