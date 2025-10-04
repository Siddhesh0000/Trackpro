"use client";
import { useState } from 'react';
import { Mail, Phone, MapPinned, Send, ArrowRight, CheckCircle } from 'lucide-react';

function ContactPage() {
  // helper to scroll to an in-page section by id, focus it for accessibility, and update hash
  const scrollToSection = (id) => {
    try {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        el.setAttribute('tabindex', '-1');
        el.focus({ preventScroll: true });
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, '', `#${id}`);
        } else {
          window.location.hash = `#${id}`;
        }
        setTimeout(() => {
          el.removeAttribute('tabindex');
        }, 1000);
      } else {
        window.location.hash = `#${id}`;
      }
    } catch (e) {
      // no-op for SSR or tests
    }
  };
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission (replace with actual API call, e.g., fetch or email service)
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-orange-500 font-semibold text-sm">GET IN TOUCH</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 text-white">Ready to Join <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">TrackPro?</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Contact our team to schedule a visit, inquire about programs, or get started on your athletic journey</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:text-orange-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center border border-orange-500/30">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <a href="tel:+15551234567" className="text-slate-400 hover:text-orange-500 transition-colors">+1 (555) 123-4567</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group hover:text-orange-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center border border-orange-500/30">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <a href="mailto:info@trackpro.com" className="text-slate-400 hover:text-orange-500 transition-colors">info@trackpro.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group hover:text-orange-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center border border-orange-500/30">
                    <MapPinned className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Address</div>
                    <div className="text-slate-400">123 Athletic Way<br />Sports City, SC 12345</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours of Operation */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Hours of Operation</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex justify-between"><span>Monday - Friday</span><span>6 AM - 9 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span><span>7 AM - 6 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-2">Thank You!</h3>
                  <p className="text-slate-400">Your message has been sent. We'll get back to you soon.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-orange-500/50 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none"
                      placeholder="Tell us about your goals or inquiries..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Placeholder Section */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Visit Our Facility</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Experience our world-class track and training facilities in person. Schedule a tour today!</p>
          <div className="relative h-96 bg-slate-700 rounded-2xl overflow-hidden flex items-center justify-center">
            {/* Placeholder for Map (Replace with actual Google Maps embed or React component) */}
            <div className="text-white text-lg opacity-50">
              <MapPinned className="w-16 h-16 mx-auto mb-4" />
              <p>Map Integration Placeholder<br />(Embed Google Maps here)</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => scrollToSection('programs')}
              className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-orange-500/50 transition-all"
            >
              View Programs
            </button>
            <button 
              className="bg-slate-700 px-6 py-3 rounded-xl font-semibold text-white hover:bg-slate-600 transition-colors border border-slate-600"
            >
              Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;