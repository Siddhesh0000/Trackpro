"use client";
import { Clock, MapPin, Users, Trophy, Dumbbell, Heart, CheckCircle } from 'lucide-react';

function FeaturesPage() {
  const features = [
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Precision Timing",
      description: "Electronic timing systems with millisecond accuracy for professional race results and performance tracking",
      details: ["Fully Automatic Timing (FAT)", "Photo Finish Technology", "Real-time Results Display"]
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "World-Class Track",
      description: "IAAF-certified 400m all-weather track with 8 lanes and professional field event facilities",
      details: ["Mondo Surface", "International Standards", "Outdoor & Indoor Options"]
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Elite Coaching",
      description: "Train with nationally certified coaches who have produced Olympic and collegiate athletes",
      details: ["USATF Certified", "Olympic Experience", "Personalized Attention"]
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      title: "Championship Events",
      description: "Host to regional and national competitions with opportunities for athlete advancement",
      details: ["Monthly Meets", "State Championships", "National Qualifiers"]
    },
    {
      icon: <Dumbbell className="w-10 h-10" />,
      title: "Strength & Conditioning",
      description: "State-of-the-art weight room and conditioning facility for comprehensive athlete development",
      details: ["Olympic Lifting", "Plyometric Training", "Injury Prevention"]
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Sports Medicine",
      description: "On-site sports medicine and physical therapy to keep athletes healthy and performing",
      details: ["Licensed Therapists", "Injury Rehabilitation", "Preventive Care"]
    }
  ];

  return (
    <section className="pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-orange-500 font-semibold text-sm">WORLD-CLASS FACILITIES</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 text-white">Everything You Need to <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Succeed</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Professional-grade equipment and facilities that meet international standards</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform border border-orange-500/30">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gallery Preview (Completed based on pattern) */}
        <div className="mt-16 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Facility Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Track Surface', 'Weight Room', 'Timing System', 'Coaching Area', 'Medical Center', 'Event Space'].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl bg-slate-700/50 hover:bg-orange-500/10 transition-all cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white opacity-50 group-hover:opacity-100 transition-opacity">{item}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold">{item}</h3>
                  <p className="text-slate-400 text-sm mt-1">World-class infrastructure</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesPage;