"use client";
import Link from 'next/link';
import { CheckCircle, Target, Dumbbell, Heart, Calendar } from 'lucide-react';

function ProgramsPage() {
  // helper to scroll to an in-page section by id, focus it for accessibility, and update hash
  const scrollToSection = (id) => {
    try {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Make element focusable for a11y, focus it, then clean up
        el.setAttribute('tabindex', '-1');
        el.focus({ preventScroll: true });
        // Update the URL hash without causing an additional jump
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, '', `#${id}`);
        } else {
          window.location.hash = `#${id}`;
        }
        // Remove the temporary tabindex after a short delay
        setTimeout(() => {
          el.removeAttribute('tabindex');
        }, 1000);
      } else {
        // fallback: update hash so anchor navigation still works
        window.location.hash = `#${id}`;
      }
    } catch (e) {
      // no-op in non-browser environments (SSR/tests)
    }
  };
  const programs = [
    {
      title: "Youth Development",
      age: "Ages 8-14",
      description: "Foundation training focusing on proper technique, speed, and agility development",
      features: ["Fundamentals Training", "Age-Group Competitions", "Character Building", "Fun & Engaging Activities"],
      price: "$150/month"
    },
    {
      title: "Competitive Track",
      age: "Ages 15-18",
      description: "Advanced training for high school athletes pursuing collegiate opportunities",
      features: ["Event Specialization", "College Recruitment", "Performance Analytics", "Mental Conditioning"],
      featured: true,
      price: "$250/month"
    },
    {
      title: "Elite Performance",
      age: "Ages 18+",
      description: "Professional-level training for collegiate, post-collegiate, and masters athletes",
      features: ["Olympic Preparation", "Sports Science", "Recovery Programs", "Nutrition Planning"],
      price: "$350/month"
    }
  ];

  return (
    <section className="pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-orange-500 font-semibold text-sm">TRAINING PROGRAMS</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 text-white">Choose Your Path to <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Excellence</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">From beginner to elite, we offer comprehensive training programs tailored to your goals and experience level</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, idx) => {
            const slug = program.slug || program.title.toLowerCase().replace(/\s+/g, '-');
            return (
              <div key={idx} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all hover:scale-105 hover:shadow-2xl ${program.featured ? 'border-orange-500 shadow-lg shadow-orange-500/20' : 'border-slate-700'}`}>
              {program.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-1 rounded-full text-sm font-semibold text-white shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
                <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                <div className="text-orange-500 font-semibold mb-2">{program.age}</div>
                <div className="text-3xl font-bold text-white">{program.price}</div>
                <div className="mt-3">
                  <Link href={`/programs/${slug}`} className="text-sm text-orange-400 hover:text-orange-300">View Details →</Link>
                </div>
              </div>
              <p className="text-slate-400 mb-6 text-center">{program.description}</p>
              <ul className="space-y-3 mb-8">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <div className="w-5 h-5 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={`/programs/${slug}`} className={`w-full inline-flex justify-center items-center py-3 rounded-xl font-semibold transition-all ${program.featured ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:shadow-orange-500/50' : 'bg-slate-700 text-white hover:bg-slate-600'}`}>
                Enroll Now
              </Link>
            </div>
            );
          })}
        </div>

        {/* Additional Program Details */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What's Included in All Programs</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Target className="w-6 h-6" />, title: "Goal Setting", text: "Personalized goals" },
              { icon: <Dumbbell className="w-6 h-6" />, title: "Strength Training", text: "Full gym access" },
              { icon: <Heart className="w-6 h-6" />, title: "Health Monitoring", text: "Regular assessments" },
              { icon: <Calendar className="w-6 h-6" />, title: "Flexible Schedule", text: "Multiple sessions" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center text-orange-500 mx-auto mb-4 border border-orange-500/30">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsPage;