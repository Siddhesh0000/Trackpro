"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Clock, MapPin, Users, Trophy, ChevronRight, Star, Award, TrendingUp, Shield, Zap, ArrowRight, Play } from 'lucide-react';

export default function TrackWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Precision Timing",
      description: "Electronic timing systems with millisecond accuracy for professional race results and performance tracking"
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "World-Class Track",
      description: "IAAF-certified 400m all-weather track with 8 lanes and professional field event facilities"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Elite Coaching",
      description: "Train with nationally certified coaches who have produced Olympic and collegiate athletes"
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      title: "Championship Events",
      description: "Host to regional and national competitions with opportunities for athlete advancement"
    }
  ];

  const stats = [
    { number: "1,200+", label: "Active Members", icon: <Users className="w-6 h-6" /> },
    { number: "85+", label: "Annual Events", icon: <Trophy className="w-6 h-6" /> },
    { number: "24", label: "Expert Coaches", icon: <Award className="w-6 h-6" /> },
    { number: "15+", label: "Years Excellence", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const programs = [
    {
      title: "Youth Development",
      age: "Ages 8-14",
      description: "Foundation training focusing on proper technique, speed, and agility development",
      features: ["Fundamentals Training", "Age-Group Competitions", "Character Building"]
    },
    {
      title: "Competitive Track",
      age: "Ages 15-18",
      description: "Advanced training for high school athletes pursuing collegiate opportunities",
      features: ["Event Specialization", "College Recruitment", "Performance Analytics"],
      featured: true
    },
    {
      title: "Elite Performance",
      age: "Ages 18+",
      description: "Professional-level training for collegiate, post-collegiate, and masters athletes",
      features: ["Olympic Preparation", "Sports Science", "Recovery Programs"]
    }
  ];

  const testimonials = [
    {
      name: "Marcus Williams",
      role: "NCAA Division I Athlete",
      image: "MW",
      text: "TrackPro transformed my training. The professional environment and expert coaching helped me earn a full athletic scholarship.",
      rating: 5
    },
    {
      name: "Jennifer Chen",
      role: "Olympic Trials Qualifier",
      image: "JC",
      text: "The attention to detail and personalized training plans here are unmatched. This facility has everything needed to compete at the highest level.",
      rating: 5
    },
    {
      name: "David Rodriguez",
      role: "Masters National Champion",
      image: "DR",
      text: "Even as a masters athlete, I receive world-class coaching and support. The community here pushes you to be your absolute best.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-30"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-slate-300">IAAF Certified Facility</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Push Your</span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-clip-text text-transparent">Limits Beyond</span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Train with Olympic-standard facilities, world-class coaches, and a community of elite athletes dedicated to excellence in track and field.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="group bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 text-white flex items-center space-x-2">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all text-white flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Video</span>
                </button>
              </div>
              <div className="mt-12 flex items-center space-x-8">
                <div className="flex -space-x-3">
                  {['bg-orange-500', 'bg-red-500', 'bg-yellow-500', 'bg-blue-500'].map((color, i) => (
                    <div key={i} className={`w-12 h-12 ${color} rounded-full border-4 border-slate-950 flex items-center justify-center text-white font-bold`}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-white font-semibold">1,200+ Athletes</div>
                  <div className="text-slate-400 text-sm">Training with us</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 shadow-2xl">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-2xl opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-red-500 to-orange-500 rounded-full blur-2xl opacity-60"></div>
                <div className="relative h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center">
                  <Trophy className="w-48 h-48 text-orange-500" />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {[{ icon: <Award />, label: 'Awards' }, { icon: <TrendingUp />, label: 'Growth' }, { icon: <Star />, label: 'Rating' }].map((item, i) => (
                    <div key={i} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-slate-700">
                      <div className="text-orange-500 flex justify-center mb-2">{item.icon}</div>
                      <div className="text-xs text-slate-400">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
              <span className="text-orange-500 font-semibold text-sm">WORLD-CLASS FACILITIES</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-white">Everything You Need to <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Succeed</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform border border-orange-500/30">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
              <span className="text-orange-500 font-semibold text-sm">SUCCESS STORIES</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-white">What Our Athletes <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Achieve</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:scale-105">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl p-12 md:p-16 border border-orange-500/30 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>
            <div className="relative text-center">
              <h2 className="text-5xl font-bold mb-6 text-white">Ready to Start Your <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Journey?</span></h2>
              <p className="text-slate-300 text-xl mb-8 max-w-2xl mx-auto">Join over 1,200 athletes who are training at TrackPro and achieving their athletic dreams</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="group bg-gradient-to-r from-orange-500 to-red-500 px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 text-white text-lg flex items-center space-x-2">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/10 backdrop-blur-sm border border-white/20 px-10 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all text-white text-lg">
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer is rendered by layout */}
    </div>
  );
}



