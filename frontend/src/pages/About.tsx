import { Shield, Sparkles, TrendingUp, Trophy, Flame } from 'lucide-react';
import { PHILOSOPHY_MILESTONES } from '../data';
import PageTransition from '../components/PageTransition';
import { motion } from 'motion/react';

const FACILITIES = [
  {
    title: 'THE CORE IRON FLOOR',
    desc: 'Uncompromised space featuring custom-built steel power racks, calibrated weight sets, and specialized barbell arrays (Texas deadlift, SSB, elite logs).',
    img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'THE METCON FIELDS',
    desc: 'Equipped with indoor sprint tracks, weighted sled piles, rope-climbs, kettlebells, and heavy rogue sandbags to maximize anaerobic endurance.',
    img: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'NEON RECOVERY CRYPTO-LAB',
    desc: 'High-end bio-hacking recovery suite including individual infrared sweat cabins, high-capacity cold plunge targets, and pneumatic active leg recovery systems.',
    img: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800&auto=format&fit=crop'
  }
];

export default function About() {
  return (
    <PageTransition>
      {/* Page Title Header */}
      <section id="about-header" className="relative py-20 bg-neutral-950 border-b border-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center, rgba(220,38,38,0.1) 0%, transparent 80%) z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-red-500 font-mono text-xs tracking-[0.4em] uppercase block mb-3">OUR GENESIS & MANIFESTO</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase italic leading-none">
            TEMPLE OF <span className="text-red-500">RAW EXCELLENCE</span>
          </h1>
          <p className="mt-4 text-neutral-400 text-sm max-w-xl mx-auto">
            We don’t compromise on quality, volume, or effort. Our history is a testament to the pursuit of physical limits.
          </p>
        </div>
      </section>

      {/* Philosophy & Purpose Panel */}
      <section id="about-philosophy" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Frame */}
            <div>
              <span className="text-red-500 font-mono text-xs tracking-widest uppercase block mb-2">UNAPOLOGETIC FOUNDATIONS</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase italic leading-tight">
                GROWTH STARTS AT <span className="text-red-650">THE ABSOLUTE BRICK WALL</span>
              </h2>
              <p className="mt-6 text-neutral-400 text-sm leading-relaxed">
                Growth doesn't happen during the comfortable reps. Growth is triggered when your motor units are completely exhausted, your central nervous system commands you to stop, and you push through to execute the final rep anyway.
              </p>
              <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
                That single critical threshold is where we operate. At Till Failure, we designed our entire workspace—our sound systems, lights, coaches, and barbell selections—to act as a highly tuned pressure cooker for your maximum potential.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500 flex-shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-extrabold tracking-widest uppercase">ELITE CERTIFIED COACHES</h4>
                    <p className="text-[11px] text-neutral-500 mt-1">CSCS, IFBB, and tactical physical preparation selectors.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500 flex-shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-extrabold tracking-widest uppercase font-mono">BIOMETRIC INTEGRITY</h4>
                    <p className="text-[11px] text-neutral-500 mt-1">Uncomprimised safety guidelines paired with intense effort levels.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cinematic Image Frame */}
            <div className="relative bg-neutral-900 border border-neutral-850 p-3 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
                alt="Chalked up barbell plates"
                className="w-full aspect-[4/3] object-cover rounded grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded bg-red-650 flex items-center justify-center shadow-lg shadow-red-650/20 z-10 animate-pulse">
                <Flame className="w-10 h-10 text-white" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Facilities Showcase Hangar */}
      <section id="about-facilities" className="py-24 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-500 font-mono text-xs tracking-[0.35em] uppercase block mb-2">TOUR OUR COVENS</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase italic">
              UNCOMPROMISED <span className="text-red-650">FACILITY STANDARDS</span>
            </h2>
            <p className="mt-3 text-neutral-500 text-xs sm:text-sm max-w-xl mx-auto">
              We took 15,000 sq ft and purged any distractions. Explore the zones designed strictly for physical development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FACILITIES.map((fac, idx) => (
              <div
                id={`facility-${idx}`}
                key={idx}
                className="bg-neutral-900 border border-neutral-850 rounded-lg overflow-hidden group hover:border-red-600/40 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={fac.img}
                    alt={fac.title}
                    className="w-full h-full object-cover filter brightness-75 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-md font-black tracking-widest uppercase border-b border-neutral-850 pb-2 mb-3">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-neutral-450 leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chronological Timeline Section */}
      <section id="about-timeline" className="py-24 bg-neutral-950 border-t border-neutral-900 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <span className="text-red-500 font-mono text-xs tracking-[0.3em] uppercase block mb-2">STEEL TIMELINE</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase italic">
              CHRONICLES OF <span className="text-red-650">TILL FAILURE</span>
            </h2>
            <p className="mt-3 text-neutral-500 text-xs font-mono">
              HOW THREE BROTHERS TURNED A RUSTED GARAGE SYSTEM INTO AN EMPIRE
            </p>
          </div>

          <div className="relative border-l-2 border-neutral-850 ml-4 md:ml-32">
            {PHILOSOPHY_MILESTONES.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Year Label Float Desktop only */}
                <div className="hidden md:block absolute -left-32 top-0.5 text-right w-24">
                  <span className="text-xl font-black text-red-500 italic font-mono">
                    {milestone.year}
                  </span>
                </div>

                {/* Dot Bullet */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-neutral-950 border-2 border-red-650 shadow-[0_0_8px_rgba(220,38,38,0.7)] group-hover:bg-red-500 transition-colors" />

                {/* Content Box */}
                <div className="bg-neutral-900 border border-neutral-850/80 rounded-lg p-6 hover:border-neutral-700 transition-all duration-300">
                  <span className="md:hidden block text-red-500 font-black italic tracking-widest text-sm mb-1 font-mono">
                    {milestone.year}
                  </span>
                  <h3 className="text-white text-sm sm:text-md font-extrabold tracking-widest uppercase">
                    {milestone.title}
                  </h3>
                  <p className="mt-3 text-neutral-400 text-xs sm:text-sm leading-relaxed font-medium">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
