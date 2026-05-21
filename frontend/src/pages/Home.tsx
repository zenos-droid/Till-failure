import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Dumbbell, Activity, Flame, ArrowRight, Quote, ShieldAlert, Zap, TrendingUp } from 'lucide-react';
import { CORE_STATS, PROGRAMS, TRANSFORMATIONS } from '../data';
import PageTransition from '../components/PageTransition';

export default function Home() {
  // Mini interactive BMI State from Elegant Dark theme design
  const [miniHeight, setMiniHeight] = useState<number>(182);
  const [miniWeight, setMiniWeight] = useState<number>(85);

  const calcBmi = (h: number, w: number) => {
    if (!h || !w) return '0.0';
    const heightMeters = h / 100;
    const bmiVal = w / (heightMeters * heightMeters);
    return bmiVal.toFixed(1);
  };

  const calcBmiText = (bmiStr: string) => {
    const bmiVal = parseFloat(bmiStr);
    if (!bmiVal) return 'ENTER DATA';
    if (bmiVal < 18.5) return 'UNDERWEIGHT';
    if (bmiVal < 25) return 'HEALTHY ATHLETIC';
    if (bmiVal < 30) return 'BUILDING MASS';
    return 'ELITE BULK';
  };

  // We'll highlight the first transformation on the Home Page
  const featuredTransformation = TRANSFORMATIONS[0];

  return (
    <PageTransition>
      {/* 1. CINEMATIC HERO SECTION */}
      <section id="home-hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Vignette / Red Color Grading Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-red-950/10 mix-blend-color-burn z-10" />
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop"
            alt="Hardcore Gym Atmosphere"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.25] contrast-[1.12]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle Ambient Red Light Leaks */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-650/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-900/15 rounded-full blur-[140px] mix-blend-screen" />
        </div>

        {/* Hero Visual Container with Split Layout from Elegant Dark theme */}
        <div className="relative z-25 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col text-left justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="self-start"
              >
                {/* Tagline Indicator badge */}
                <span className="inline-flex items-center space-x-2 px-3 py-1.5 border border-red-650/45 bg-red-950/20 rounded text-red-500 font-mono text-[10px] tracking-[0.25em] uppercase mb-6 shadow-[0_0_15px_rgba(220,38,38,0.1)]">
                  <Zap className="w-3 h-3 text-red-500" />
                  <span>THE ELITE STANDARD</span>
                </span>
              </motion.div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase italic leading-[0.85] select-none font-display mb-6">
                TRAIN UNTIL<br />
                <span className="text-red-650 font-black">FAILURE.</span>
              </h1>

              <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-lg mb-8 leading-relaxed tracking-wide">
                Forget limits. Abandon excuses. Step into the ultimate high-performance arena engineered for those who demand absolute physical evolution and results.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  id="hero-cta-main"
                  to="/membership"
                  className="w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-4 font-black tracking-widest text-xs uppercase text-white bg-red-650 transition-all duration-300 rounded shadow-[0_0_20px_rgba(220,38,38,0.25)] hover:bg-red-750 active:scale-95 text-center"
                >
                  START TRAINING
                </Link>
                <Link
                  id="hero-cta-secondary"
                  to="/transformations"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-black tracking-widest text-xs uppercase text-white bg-neutral-900/60 hover:bg-neutral-800 border border-white/10 rounded transition-all text-center backdrop-blur-sm"
                >
                  VIEW GALLERY
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Right Interactive Hero Components Column */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              
              {/* MINI BMI CALCULATOR MODULE */}
              <div className="bg-neutral-900/85 border border-white/10 p-6 rounded-2xl backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-650" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-red-650/5 rounded-full blur-xl pointer-events-none" />
                
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-black text-xs uppercase tracking-wider font-display text-white flex items-center gap-1.5 select-none">
                    <Activity className="w-4 h-4 text-red-500" />
                    BMI Engine
                  </h3>
                  <span className="text-red-500 text-[9px] font-mono tracking-widest bg-red-950/40 px-2 py-0.5 rounded border border-red-950 select-none">LIVE_CALC</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-[9px] text-neutral-450 uppercase font-black tracking-wider block mb-1.5">Height (cm)</label>
                    <input 
                      type="number" 
                      min="100" 
                      max="250" 
                      value={miniHeight} 
                      onChange={(e) => setMiniHeight(Number(e.target.value))}
                      className="bg-neutral-950 border border-white/10 focus:border-red-650 focus:ring-1 focus:ring-red-650 rounded px-2.5 py-1.5 text-sm font-extrabold text-white w-full outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] text-neutral-450 uppercase font-black tracking-wider block mb-1.5">Weight (kg)</label>
                    <input 
                      type="number" 
                      min="30" 
                      max="200" 
                      value={miniWeight} 
                      onChange={(e) => setMiniWeight(Number(e.target.value))}
                      className="bg-neutral-950 border border-white/10 focus:border-red-650 focus:ring-1 focus:ring-red-650 rounded px-2.5 py-1.5 text-sm font-extrabold text-white w-full outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between bg-neutral-950 p-3.5 rounded-xl border border-white/5">
                  <div className="flex flex-col">
                    <span className="text-neutral-450 text-[10px] font-bold uppercase tracking-wide">Dynamic Status</span>
                    <span className="text-[10px] font-mono text-red-500 font-black uppercase mt-0.5">
                      {calcBmiText(calcBmi(miniHeight, miniWeight))}
                    </span>
                  </div>
                  <span className="text-2xl font-black text-red-650 italic font-display">
                    {calcBmi(miniHeight, miniWeight)}
                  </span>
                </div>
              </div>

              {/* STATS COUNT GRID */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-900/60 border border-white/5 p-4 rounded-xl flex flex-col justify-center">
                  <span className="text-2xl sm:text-3xl font-black italic text-white font-display">12k+</span>
                  <span className="text-[8.5px] uppercase font-bold text-neutral-500 tracking-widest mt-0.5 leading-snug">Members Transformed</span>
                </div>
                <div className="bg-neutral-900/60 border border-white/5 p-4 rounded-xl flex flex-col justify-center">
                  <span className="text-2xl sm:text-3xl font-black italic text-red-650 font-display">24/7</span>
                  <span className="text-[8.5px] uppercase font-bold text-neutral-500 tracking-widest mt-0.5 leading-snug">Elite Access Granted</span>
                </div>
              </div>

              {/* FEATURED DISCIPLINE LIST */}
              <div className="bg-black/40 border border-white/10 rounded-xl overflow-hidden shadow-xl">
                <div className="px-4 py-2.5 bg-white/5 text-[9px] font-black uppercase tracking-widest text-neutral-400 border-b border-white/5">
                  Featured Disciplines
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <Link to="/schedule" className="flex justify-between items-center group/item hover:text-red-500 transition-colors">
                    <span className="text-xs font-bold text-neutral-300 group-hover/item:text-white uppercase">Hypertrophy Coaching</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-red-650 shadow-[0_0_6px_#dc2626]" />
                  </Link>
                  <div className="h-[1px] bg-white/5" />
                  <Link to="/schedule" className="flex justify-between items-center group/item hover:text-red-500 transition-colors">
                    <span className="text-xs font-bold text-neutral-400 uppercase group-hover/item:text-white">Elite Powerlifting</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                  </Link>
                  <div className="h-[1px] bg-white/5" />
                  <Link to="/schedule" className="flex justify-between items-center group/item hover:text-red-500 transition-colors">
                    <span className="text-xs font-bold text-neutral-400 uppercase group-hover/item:text-white">Metabolic Conditioning</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Small Scroll Prompt */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-25 hidden sm:flex flex-col items-center select-none text-[10px] font-mono tracking-widest text-neutral-500">
          <span>DESCENT TO STRENGTH</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-3 bg-red-600 rounded-full mt-2 shadow-[0_0_5px_#dc2626]"
          />
        </div>
      </section>

      {/* 2. STATS SECTION (REVEAL ANIMATED) */}
      <section id="home-stats" className="relative z-20 py-12 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-neutral-900">
            {CORE_STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center pt-6 md:pt-0 text-center">
                <span className="text-3xl sm:text-5xl font-black text-white italic tracking-tighter block">
                  {stat.value}
                </span>
                <span className="mt-2 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-neutral-500 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROGRAMS SECTION */}
      <section id="home-programs" className="py-24 bg-neutral-950 relative overflow-hidden">
        {/* Subtle decorative grid background using CSS */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center md:text-left md:flex md:items-end md:justify-between mb-16">
            <div>
              <span className="text-red-500 font-mono text-xs tracking-[0.3em] uppercase block mb-2">SCIENTIFICALLY ROOTED PROGRESSION</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
                FEATURED <span className="text-red-600 italic">SYSTEMS</span>
              </h2>
            </div>
            <p className="mt-4 md:mt-0 text-sm text-neutral-400 max-w-md md:text-right">
              Our structures bypass polite wellness circles. These are rigorous, high-density performance programs designed strictly to force mutation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS.map((prog, idx) => {
              // Work out Lucide icons
              const Icon = prog.iconName === 'Dumbbell' ? Dumbbell : prog.iconName === 'Activity' ? Activity : Flame;
              return (
                <div
                  id={`program-card-${prog.id}`}
                  key={prog.id}
                  className="bg-neutral-900/50 border border-neutral-800/80 rounded-lg p-8 hover:border-red-600/50 transition-all duration-300 group hover:-translate-y-2 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-neutral-950 border border-neutral-800 rounded flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-950/20 group-hover:border-red-800/40 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">{prog.duration}</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-700" />
                      <span className={`text-[10px] font-mono tracking-widest uppercase ${
                        prog.difficulty === 'Elite Only' ? 'text-red-500 font-extrabold' : 'text-neutral-400'
                      }`}>{prog.difficulty}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors uppercase">
                      {prog.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {prog.description}
                    </p>

                    <div className="mt-6 border-t border-neutral-850 pt-4">
                      <ul className="space-y-2">
                        {prog.bullets.map((bullet, bidx) => (
                          <li key={bidx} className="flex items-start space-x-2 text-[11px] text-neutral-500">
                            <span className="text-red-500 font-bold mt-0.5">&bull;</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      id={`prog-cta-${prog.id}`}
                      to="/membership"
                      className="inline-flex items-center text-xs font-mono tracking-widest text-white uppercase group-hover:text-red-500 transition-colors"
                    >
                      COMMIT TO PROTOCOL
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. KEY TRANSFORMATION HIGHLIGHT */}
      <section id="home-transformation" className="py-24 bg-neutral-950 border-t border-neutral-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual before/after slider panel */}
            <div className="lg:col-span-7 relative bg-neutral-900 border border-neutral-850 rounded-lg overflow-hidden group shadow-2xl">
              <div className="aspect-[16/10] relative">
                <img
                  src={featuredTransformation.afterImg}
                  alt={featuredTransformation.clientName}
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Glowing Stats Badges */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-red-600/30 px-3 py-1.5 rounded text-white font-mono text-[10px] tracking-wide uppercase">
                  ACTIVE: {featuredTransformation.duration}
                </div>

                <div className="absolute bottom-4 right-4 bg-black/85 backdrop-blur-sm p-4 rounded border border-neutral-800 flex space-x-6">
                  {featuredTransformation.weightLoss && (
                    <div className="text-center">
                      <span className="block text-red-500 font-black text-sm">{featuredTransformation.weightLoss}</span>
                      <span className="text-[8px] font-mono tracking-widest text-neutral-500 uppercase">WEIGHT LOSS</span>
                    </div>
                  )}
                  {featuredTransformation.muscleGained && (
                    <div className="text-center">
                      <span className="block text-white font-black text-sm">{featuredTransformation.muscleGained}</span>
                      <span className="text-[8px] font-mono tracking-widest text-neutral-500 uppercase">MUSCLE GAIN</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Typography content panel */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-red-500 font-mono text-xs tracking-[0.3em] uppercase block mb-2">EMPIRICAL PROOF OF MUTATION</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none mb-6">
                BUILT IN THE <br />
                <span className="text-red-600 italic">CRUCIBLE</span>
              </h2>
              
              <div className="bg-neutral-900 p-6 rounded border border-neutral-850 relative mb-6">
                <Quote className="w-10 h-10 text-red-650/15 absolute -top-4 -left-2" />
                <p className="text-xs sm:text-sm text-neutral-300 italic relative z-10 leading-relaxed">
                  {featuredTransformation.quote}
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  <span className="text-xs font-mono font-bold text-white">{featuredTransformation.clientName}</span>
                  <span className="text-neutral-600 font-mono text-[10px]">&bull;</span>
                  <span className="text-neutral-500 font-mono text-[10px]">Age {featuredTransformation.age}</span>
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <div className="flex items-center space-x-2 text-xs text-neutral-400">
                  <TrendingUp className="w-4 h-4 text-red-500" />
                  <span className="font-mono text-[11px] text-white uppercase">{featuredTransformation.achievement}</span>
                </div>
              </div>

              <div>
                <Link
                  id="home-view-transformations"
                  to="/transformations"
                  className="inline-flex items-center px-6 py-3 font-mono font-bold text-xs tracking-widest uppercase text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded transition-colors"
                >
                  VIEW ALL TRANSFORMATIONS
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. HARDCORE ATMOSPHERE PROMO BANNER */}
      <section id="home-promo" className="relative py-28 bg-neutral-950 overflow-hidden">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-neutral-950/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop"
            alt="Intense workouts"
            className="w-full h-full object-cover filter brightness-[0.12] contrast-[1.25] grayscale"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-red-550 font-mono text-xs tracking-[0.4em] uppercase block mb-3">WARNING: COMMODITY FREE ZONE</span>
          <h2 className="text-3xl sm:text-6xl font-black text-white tracking-widest uppercase leading-tight italic">
            REST IS FOR THE WEAK
          </h2>
          <p className="mt-4 text-neutral-450 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            There are no televisions on our treadmills. There are no cellular chargers in our racks. We provide raw steel, high density bars, and heavy-duty weights. If you want comfort, join a country club.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              id="promo-cta"
              to="/membership"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 font-extrabold tracking-widest text-xs uppercase text-white rounded shadow-lg shadow-red-650/20 active:scale-95 transition-all"
            >
              ENROLL IN METCON COVENANT
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
