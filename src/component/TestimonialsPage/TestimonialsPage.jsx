"use client";
import { Star } from 'lucide-react';

function TestimonialsPage() {
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
    },
    // Added one more for better grid layout
    {
      name: "Sarah Lee",
      role: "Professional Sprinter",
      image: "SL",
      text: "The facilities and coaching staff took my performance to new heights. Highly recommend for serious athletes.",
      rating: 5
    }
  ];

  return (
    <section className="pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-orange-500 font-semibold text-sm">SUCCESS STORIES</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 text-white">What Our Athletes <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Achieve</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Hear from our community of elite athletes about their transformative experiences at TrackPro</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
  );
}

export default TestimonialsPage;