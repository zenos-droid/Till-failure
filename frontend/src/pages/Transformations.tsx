import { useState } from 'react';
import { Quote, Sparkles, TrendingUp, Zap, HelpCircle, Swords } from 'lucide-react';
import { TRANSFORMATIONS } from '../data';
import PageTransition from '../components/PageTransition';
import { motion, AnimatePresence } from 'motion/react';

export default function Transformations() {
  // Store the active viewing mode for each transformation card
  // This avoids a single global state toggling all cards simultaneously
  const [viewModes, setViewModes] = useState<Record<string, 'before' | 'after' | 'side'>>({
    'trans-david': 'side',
    'trans-sarah': 'side',
    'trans-jackson': 'side',
  });

  const toggleViewMode = (id: string, mode: 'before' | 'after' | 'side') => {
    setViewModes(prev => ({
      ...prev,
      [id]: mode
    }));
  };

  return (
    <PageTransition>
      {/* Page Title Panel */}
      <section id="transformations-header" className="relative py-20 bg-neutral-950 text-center overflow-hidden border-b border-neutral-900">
        <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center, rgba(220,38,38,0.08) 0%, transparent 80%) z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-red-500 font-mono text-xs tracking-[0.4em] uppercase block mb-3 font-bold font-mono">biometric telemetry</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase italic leading-none">
            PROOF OF <span className="text-red-500">MUTATED EFFORT</span>
          </h1>
          <p className="mt-4 text-neutral-400 text-sm max-w-xl mx-auto">
            These are not simulated summaries. These are genuine peer logs of clients who trained strictly till failure and designed completely new physiques.
          </p>
        </div>
      </section>

      {/* Main Grid Gallery */}
      <section id="transformations-list" className="py-24 bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            
            {TRANSFORMATIONS.map((client, idx) => {
              const currentMode = viewModes[client.id] || 'side';
              const isEven = idx % 2 === 0;

              return (
                <div
                  id={`transformation-group-${client.id}`}
                  key={client.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  
                  {/* Visual container (Column 1) */}
                  <div className={`lg:col-span-7 flex flex-col space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    {/* Visual stage viewport */}
                    <div className="relative aspect-[16/10] bg-neutral-900 border border-neutral-850 rounded-lg overflow-hidden shadow-2xl group">
                      
                      {/* Before view */}
                      <AnimatePresence mode="wait">
                        {currentMode === 'before' && (
                          <motion.img
                            key="before-img"
                            src={client.beforeImg}
                            alt={`${client.clientName} Before`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 w-full h-full object-cover grayscale object-top brightness-75 duration-300"
                            referrerPolicy="no-referrer"
                          />
                        )}

                        {/* After view */}
                        {currentMode === 'after' && (
                          <motion.img
                            key="after-img"
                            src={client.afterImg}
                            alt={`${client.clientName} After`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 w-full h-full object-cover grayscale-0 object-top brightness-90 duration-300"
                            referrerPolicy="no-referrer"
                          />
                        )}

                        {/* Side-by-side View */}
                        {currentMode === 'side' && (
                          <motion.div
                            key="side-view"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 grid grid-cols-2 h-full divide-x divide-red-600/50"
                          >
                            <div className="relative h-full overflow-hidden">
                              <img
                                src={client.beforeImg}
                                alt="Before"
                                className="w-full h-full object-cover object-top filter grayscale brightness-50 contrast-125"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute top-2 left-2 bg-neutral-950/80 backdrop-blur-sm border border-neutral-800 text-[8px] sm:text-[9px] font-mono tracking-widest text-neutral-400 px-2 py-0.5 rounded leading-none uppercase">
                                BEFORE STAGE
                              </div>
                            </div>
                            <div className="relative h-full overflow-hidden">
                              <img
                                src={client.afterImg}
                                alt="After"
                                className="w-full h-full object-cover object-top filter grayscale-0 brightness-90"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute top-2 right-2 bg-red-950/90 border border-red-800 text-[8px] sm:text-[9px] font-mono tracking-widest text-red-500 px-2 py-0.5 rounded leading-none uppercase animate-pulse">
                                SHIFTED POSTERIOR
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Displaying static timeline metrics tag */}
                      <span className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm px-2.5 py-1 text-[9px] font-mono tracking-widest border border-neutral-800 rounded uppercase">
                        DURATION BATCH: {client.duration}
                      </span>
                    </div>

                    {/* Selector switches tab layout */}
                    <div className="flex items-center justify-center p-1 bg-neutral-900 border border-neutral-850 rounded self-center">
                      <button
                        id={`btn-before-${client.id}`}
                        onClick={() => toggleViewMode(client.id, 'before')}
                        className={`px-4 py-1.5 rounded text-[10px] font-mono font-bold tracking-widest uppercase transition-all ${
                          currentMode === 'before'
                            ? 'bg-neutral-950 text-red-500 border border-neutral-800'
                            : 'text-neutral-500 hover:text-white'
                        }`}
                      >
                        BEFORE
                      </button>
                      <button
                        id={`btn-side-${client.id}`}
                        onClick={() => toggleViewMode(client.id, 'side')}
                        className={`px-4 py-1.5 rounded text-[10px] font-mono font-bold tracking-widest uppercase transition-all ${
                          currentMode === 'side'
                            ? 'bg-red-650 text-white shadow-[0_0_8px_rgba(220,38,38,0.3)]'
                            : 'text-neutral-500 hover:text-white'
                        }`}
                      >
                        SPLIT GRID
                      </button>
                      <button
                        id={`btn-after-${client.id}`}
                        onClick={() => toggleViewMode(client.id, 'after')}
                        className={`px-4 py-1.5 rounded text-[10px] font-mono font-bold tracking-widest uppercase transition-all ${
                          currentMode === 'after'
                            ? 'bg-neutral-950 text-green-500 border border-neutral-800'
                            : 'text-neutral-500 hover:text-white'
                        }`}
                      >
                        TRANSFORMED
                      </button>
                    </div>

                  </div>

                  {/* Typography content column (Column 2) */}
                  <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    <span className="text-red-500 font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase block mb-1">
                      CLIENT RECORD CARD #{idx + 104}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase italic tracking-tight leading-none mb-3">
                      {client.clientName}
                    </h2>

                    <div className="flex items-center space-x-3 mb-6">
                      <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-400 font-mono text-[9px] uppercase">
                        Age {client.age}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-red-650" />
                      <span className="text-red-500 font-mono text-xs font-bold uppercase tracking-wider">
                        {client.duration}
                      </span>
                    </div>

                    {/* Scorecards list row */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {client.weightLoss && (
                        <div className="bg-neutral-900 border border-neutral-850 p-4 rounded text-center">
                          <span className="block text-red-500 font-black text-xl italic tracking-tight leading-none">
                            {client.weightLoss}
                          </span>
                          <span className="mt-1 block text-[9px] font-mono tracking-widest text-neutral-550 uppercase">FAT BODYMASS</span>
                        </div>
                      )}
                      {client.muscleGained && (
                        <div className="bg-neutral-900 border border-neutral-850 p-4 rounded text-center">
                          <span className="block text-white font-black text-xl italic tracking-tight leading-none">
                            {client.muscleGained}
                          </span>
                          <span className="mt-1 block text-[9px] font-mono tracking-widest text-neutral-550 uppercase">MYOFIBRILLAR ACCRUITY</span>
                        </div>
                      )}
                    </div>

                    <div className="bg-neutral-900/60 p-6 rounded border border-neutral-850 relative mb-6">
                      <Quote className="w-10 h-10 text-red-650/15 absolute -top-4 -left-2" />
                      <p className="text-xs sm:text-sm text-neutral-350 italic leading-relaxed relative z-10 font-sans">
                        {client.quote}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 p-3 bg-red-950/10 border border-red-950/40 rounded text-xs text-neutral-350 font-mono">
                      <Zap className="w-4 h-4 text-red-500 flex-shrink-0 animate-pulse" />
                      <span className="tracking-wide uppercase">KEY BENCHMARK: {client.achievement}</span>
                    </div>

                  </div>

                </div>
              );
            })}
            
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
