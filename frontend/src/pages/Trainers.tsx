import { useState } from 'react';
import { Instagram, Twitter, Youtube, Award, ShieldAlert, Sparkles, X, Activity } from 'lucide-react';
import { TRAINERS } from '../data';
import { Trainer } from '../types';
import PageTransition from '../components/PageTransition';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = [
  { id: 'all', label: 'ALL STAFF' },
  { id: 'Bodybuilding', label: 'BODYBUILDING' },
  { id: 'Powerlifting', label: 'POWERLIFTING' },
  { id: 'HIIT / Conditioning', label: 'HIIT & CONDITIONING' },
  { id: 'Athletic Performance', label: 'ATHLETIC SPEED' }
];

export default function Trainers() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeDossier, setActiveDossier] = useState<Trainer | null>(null);

  const filteredTrainers = selectedCategory === 'all'
    ? TRAINERS
    : TRAINERS.filter(t => t.specialty === selectedCategory);

  return (
    <PageTransition>
      {/* Page Header */}
      <section id="trainers-header" className="relative py-20 bg-neutral-950 text-center overflow-hidden border-b border-neutral-900">
        <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center, rgba(220,38,38,0.08) 0%, transparent 80%) z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-red-500 font-mono text-xs tracking-[0.45em] uppercase block mb-3 font-bold">THE IRON RECRUITERS</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase italic leading-none">
            ELITE LEVEL <span className="text-red-500">COACHING STAFF</span>
          </h1>
          <p className="mt-4 text-neutral-400 text-sm max-w-xl mx-auto">
            We don’t employ generic fitness helpers. Our selectors are IFBB Pros, CSCS Elite Instructors, and tactical strength leaders.
          </p>
        </div>
      </section>

      {/* Specialty Filter Panel */}
      <section id="trainers-grid" className="py-16 bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
            {CATEGORIES.map((cat) => (
              <button
                id={`filter-btn-${cat.id.toLowerCase().replace(' ', '-')}`}
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded text-xs font-mono font-bold tracking-widest uppercase border transition-all duration-200 focus:outline-none ${
                  selectedCategory === cat.id
                    ? 'bg-red-600 text-white border-red-650 shadow-[0_0_15px_rgba(220,38,38,0.25)]'
                    : 'bg-neutral-900 text-neutral-400 border-neutral-850 hover:bg-neutral-850 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards Flex Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredTrainers.map((trainer, idx) => (
                <motion.div
                  id={`trainer-card-${trainer.id}`}
                  key={trainer.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-neutral-900 border border-neutral-850 rounded-lg overflow-hidden flex flex-col group hover:border-red-600/40 transition-colors"
                >
                  {/* Portrait photo */}
                  <div className="aspect-[4/5] relative overflow-hidden bg-neutral-950">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover filter brightness-[0.80] grayscale group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-95 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Floating Specialty badge */}
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 border border-red-600/30 rounded text-red-500 font-mono text-[9px] tracking-wider uppercase">
                      {trainer.specialty}
                    </div>
                  </div>

                  {/* Text card content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-1">
                        {trainer.role}
                      </span>
                      <h3 className="text-lg font-black text-white uppercase italic tracking-tight leading-snug">
                        {trainer.name}
                      </h3>
                      <p className="mt-2 text-xs text-neutral-400 font-medium leading-relaxed font-sans line-clamp-2">
                        {trainer.bio}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-neutral-850 pt-4">
                      
                      {/* Socials quick anchors */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-neutral-500">
                          {trainer.socials.instagram && (
                            <a href={trainer.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">
                              <Instagram className="w-4 h-4" />
                            </a>
                          )}
                          {trainer.socials.twitter && (
                            <a href={trainer.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">
                              <Twitter className="w-4 h-4" />
                            </a>
                          )}
                          {trainer.socials.youtube && (
                            <a href={trainer.socials.youtube} target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">
                              <Youtube className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        
                        <button
                          id={`dossier-btn-${trainer.id}`}
                          onClick={() => setActiveDossier(trainer)}
                          className="text-[10px] font-mono tracking-widest text-white uppercase hover:text-red-500 transition-colors cursor-pointer"
                        >
                          VIEW DOSSIER
                        </button>
                      </div>

                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Animated Full Dossier Modal popup */}
      <AnimatePresence>
        {activeDossier && (
          <div id="dossier-portal-root" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Dark glass backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDossier(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            {/* Modal Body container */}
            <motion.div
              id="trainer-dossier-modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden shadow-2xl z-10"
            >
              {/* Close Button Anchor */}
              <button
                id="close-dossier-modal"
                onClick={() => setActiveDossier(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-red-650"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
                
                {/* Profile Image Column */}
                <div className="md:col-span-5 aspect-[4/5] md:aspect-auto md:h-full relative rounded overflow-hidden border border-neutral-800 bg-neutral-950">
                  <img
                    src={activeDossier.image}
                    alt={activeDossier.name}
                    className="w-full h-full object-cover filter grayscale contrast-[1.1]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Dossier Content Column */}
                <div className="md:col-span-7 flex flex-col justify-between">
                  <div>
                    <span className="text-red-500 font-mono text-xs tracking-widest uppercase block mb-1">
                      {activeDossier.role}
                    </span>
                    <h2 className="text-2xl font-black text-white uppercase italic tracking-tight leading-none mb-3">
                      {activeDossier.name}
                    </h2>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-0.5 bg-neutral-950 border border-neutral-800 text-neutral-400 font-mono text-[9px] uppercase">
                        EXP: {activeDossier.experience}
                      </span>
                      <span className="px-2 py-0.5 bg-red-950/20 border border-red-900/30 text-red-400 font-mono text-[9px] uppercase">
                        CAT: {activeDossier.specialty.toUpperCase()}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-350 leading-relaxed font-medium mb-6">
                      {activeDossier.bio}
                    </p>

                    <div>
                      <h4 className="text-white text-xs font-black tracking-wider uppercase mb-2 flex items-center space-x-1.5 pl-2 border-l border-red-600">
                        <Award className="w-4 h-4 text-red-500" />
                        <span>TACTICAL CERTIFICATIONS</span>
                      </h4>
                      <ul className="space-y-1.5 pl-2">
                        {activeDossier.certifications.map((cert, cidx) => (
                          <li key={cidx} className="text-[11px] font-mono text-neutral-400 flex items-center space-x-1">
                            <span className="text-red-500 font-bold">&bull;</span>
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-neutral-500 tracking-widest uppercase">
                      SECURED & VERIFIED BIOMETRICS
                    </span>
                    <div className="flex items-center space-x-3 text-neutral-500">
                      {activeDossier.socials.instagram && (
                        <a href={activeDossier.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">
                          <Instagram className="w-4.5 h-4.5" />
                        </a>
                      )}
                      {activeDossier.socials.twitter && (
                        <a href={activeDossier.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">
                          <Twitter className="w-4.5 h-4.5" />
                        </a>
                      )}
                      {activeDossier.socials.youtube && (
                        <a href={activeDossier.socials.youtube} target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">
                          <Youtube className="w-4.5 h-4.5" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
