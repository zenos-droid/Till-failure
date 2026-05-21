import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Youtube, Check, Radio, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';
import PageTransition from '../components/PageTransition';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Membership Consultation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Membership Consultation', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <PageTransition>
      {/* Page Title & Ingress Header */}
      <section id="contact-header" className="relative py-20 bg-neutral-950 text-center overflow-hidden border-b border-neutral-900">
        <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center, rgba(220,38,38,0.08) 0%, transparent 80%) z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-red-500 font-mono text-xs tracking-[0.45em] uppercase block mb-3 font-bold">COORDINATES & INGRESS SECURES</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase italic leading-none">
            COMMUNICATION <span className="text-red-500">CENTRAL</span>
          </h1>
          <p className="mt-4 text-neutral-400 text-sm max-w-xl mx-auto">
            Dispatch queries directly to coaching managers. Request biometric registration codes or organize private corporate team covenants.
          </p>
        </div>
      </section>

      {/* Main Grid Contact block */}
      <section id="contact-main" className="py-20 bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Coordinates / Timings Card (Column 1) */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-neutral-900 border border-neutral-850 p-6 sm:p-8 rounded-lg">
                <div className="flex items-center space-x-2 mb-6">
                  <Radio className="w-5 h-5 text-red-500 animate-pulse" />
                  <span className="text-white text-xs font-mono font-bold tracking-widest uppercase">TRANSCEIVER HEALTH INDICATORS</span>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs font-mono text-neutral-500 uppercase">PHYSICAL DISPATCH LOCATION</h4>
                      <p className="text-sm font-sans font-bold text-white uppercase mt-1">
                        802 Industrial Hangar Ave, Suite B, Iron City Area
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs font-mono text-neutral-500 uppercase">TELEPHONE CONV EXCHANGER</h4>
                      <p className="text-sm font-sans font-bold text-white uppercase mt-1">
                        +1 (888) RAW-IRON &bull; (+1 888 729 4766)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs font-mono text-neutral-500 uppercase">MAIL SECURE COORDINATES</h4>
                      <p className="text-sm font-sans font-bold text-white mt-1">
                        hq@tillfailure.fit &bull; support@tillfailure.fit
                      </p>
                    </div>
                  </div>
                </div>

                {/* Constant Active Operation Badge */}
                <div className="mt-8 border-t border-neutral-850/65 pt-6">
                  <div className="bg-neutral-950 p-4 border border-neutral-800 rounded flex items-center space-x-3">
                    <div className="w-3.5 h-3.5 bg-green-500 rounded-full animate-ping flex-shrink-0" />
                    <div className="text-xs">
                      <span className="text-neutral-300 font-extrabold uppercase block leading-none">BIOMETRIC ENTRY INGRESS: ACTIVE 24/7</span>
                      <span className="text-neutral-550 font-mono text-[9px] uppercase mt-1 block">REGISTERED ACCREDITATIONS ALWAYS SECURE</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Anchoring block */}
              <div className="bg-neutral-900 border border-neutral-850 p-6 rounded-lg text-center">
                <span className="text-[10px] font-mono text-neutral-550 tracking-widest uppercase block mb-3">SOCIAL TELEM BLOCK</span>
                <div className="flex justify-center space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-neutral-950 hover:bg-red-650 hover:text-white border border-neutral-850 rounded-full flex items-center justify-center transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-neutral-950 hover:bg-red-650 hover:text-white border border-neutral-850 rounded-full flex items-center justify-center transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-neutral-950 hover:bg-red-650 hover:text-white border border-neutral-850 rounded-full flex items-center justify-center transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Ingress Message Form (Column 2) */}
            <div className="lg:col-span-7 bg-neutral-900 border border-neutral-850 p-6 sm:p-8 rounded-lg">
              
              <div className="mb-8">
                <span className="text-red-500 font-mono text-xs tracking-widest uppercase block mb-1">TRANSMISSIONS PORT</span>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase italic tracking-tight font-sans">
                  DISPATCH WORKSPACE STATEMENT
                </h3>
              </div>

              {submitted ? (
                <motion.div
                  id="contact-form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-950/40 border border-red-850 rounded-lg p-6 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded bg-red-600 flex items-center justify-center mx-auto shadow-lg shadow-red-600/20">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white text-md font-black uppercase tracking-tight">TRANSMISSION ENCRYPTED & SECURED</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed max-w-sm mx-auto font-mono">
                    CLIENT ENCODED ENTRY DETECTED. COACH MANAGER NOTIFIED. PRIORITY INGRESS COORDINATES INJECTED INTO TELEMETRY MAIL LOGS IN 120s.
                  </p>
                </motion.div>
              ) : (
                <form id="contact-gate-form" onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name field */}
                  <div>
                    <label className="block text-[10px] font-mono font-bold tracking-widest text-neutral-450 uppercase mb-2">CLIENT FULL NAME *</label>
                    <input
                      id="contact-name-input"
                      type="text"
                      required
                      placeholder="ENTER FIRST & LAST NAME"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-neutral-950 text-white placeholder-neutral-750 text-xs font-mono tracking-wider px-4 py-3 border border-neutral-850 rounded focus:border-red-650 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-[10px] font-mono font-bold tracking-widest text-neutral-450 uppercase mb-2">EMAIL COORDINATES *</label>
                    <input
                      id="contact-email-input"
                      type="email"
                      required
                      placeholder="ENTER EMAIL ADDRESS"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-neutral-950 text-white placeholder-neutral-750 text-xs font-mono tracking-wider px-4 py-3 border border-neutral-850 rounded focus:border-red-650 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Query subject options selection */}
                  <div>
                    <label className="block text-[10px] font-mono font-bold tracking-widest text-neutral-450 uppercase mb-2">INQUIRY CATEGORY CHANNEL *</label>
                    <select
                      id="contact-subject-select"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      className="w-full bg-neutral-950 text-neutral-400 text-xs font-mono tracking-wider px-4 py-3 border border-neutral-850 rounded focus:border-red-600 focus:text-white focus:outline-none"
                    >
                      <option value="Membership Consultation">MEMBERSHIP CONSULTATIONS</option>
                      <option value="Trainer Dossier Program">1-ON-1 COACH SELECTIONS</option>
                      <option value="Corporate Covenant Sync">CORPORATE COVENANTS</option>
                      <option value="General Iron Dialogue">GENERAL IRON INQUIRY</option>
                    </select>
                  </div>

                  {/* Message details body */}
                  <div>
                    <label className="block text-[10px] font-mono font-bold tracking-widest text-neutral-450 uppercase mb-2">COMMUTED MESSAGE DETAILS *</label>
                    <textarea
                      id="contact-message-input"
                      required
                      rows={5}
                      placeholder="DESCRIBE PHYSICAL GOALS, TRAINING EXPERIENCES, AND MOTIVATIONS..."
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full bg-neutral-950 text-white placeholder-neutral-750 text-xs font-mono tracking-normal p-4 border border-neutral-850 rounded focus:border-red-650 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div>
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-extrabold tracking-widest text-2xs sm:text-xs uppercase px-6 py-4 rounded shadow-lg shadow-red-650/10 cursor-pointer focus:outline-none"
                    >
                      <span>TRANSMIT INGRESS APPLICATION</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>

          {/* Glowing Neon Vector Radar Coordinates Map Block */}
          <div className="mt-24 bg-neutral-900 border border-neutral-850 p-6 rounded-lg text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-650/5 rounded-full blur-3xl z-0" />
            
            <div className="relative z-10 max-w-xl mx-auto space-y-4">
              <span className="text-[10px] font-mono text-red-500 tracking-widest uppercase block">ENETRANCE GRID RADAR VECTOR</span>
              <h3 className="text-white text-md font-black uppercase tracking-widest border-b border-neutral-850 pb-2">
                COORDINATE TARGET MATRIX
              </h3>
              
              {/* Radar visualization card panel */}
              <div id="radar-visual-panel" className="relative h-48 bg-neutral-950 rounded border border-neutral-850 overflow-hidden flex items-center justify-center p-4">
                
                {/* SVG glowing vector lines */}
                <svg className="absolute inset-0 w-full h-full text-neutral-900" xmlns="http://www.w3.org/2000/svg">
                  <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#1e1e1e" strokeWidth="1" />
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#1e1e1e" strokeWidth="1" strokeDasharray="4" />
                  
                  {/* Concentric targets circles */}
                  <circle cx="50%" cy="50%" r="30" stroke="#1f1c1c" fill="none" strokeWidth="1" />
                  <circle cx="50%" cy="50%" r="60" stroke="#2c1a1a" fill="none" strokeWidth="1" strokeDasharray="5" />
                  <circle cx="50%" cy="50%" r="90" stroke="#dc2626" fill="none" strokeWidth="1" strokeOpacity="0.1" />
                  
                  {/* Sweep line */}
                  <line x1="50%" y1="50%" x2="70%" y2="20%" stroke="#dc2626" strokeWidth="1.5" strokeOpacity="0.7" className="origin-[50%_50%] animate-spin" style={{ animationDuration: '6s' }} />
                </svg>

                {/* Pin marker target */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-red-600/30 border-2 border-red-500 flex items-center justify-center animate-pulse shadow-lg shadow-red-650/40">
                    <div className="w-2 h-2 rounded-full bg-red-600" />
                  </div>
                  <span className="text-[10px] font-mono text-white mt-2 bg-neutral-950 border border-neutral-800 px-2 py-0.5 rounded leading-none uppercase tracking-widest">
                    TILL FAILURE HQ (TARGET AT B-4)
                  </span>
                </div>

              </div>

              <p className="text-xs text-neutral-500 leading-normal uppercase font-mono">
                LAT: 41.8781&deg; N &bull; LON: 87.6298&deg; W &bull; DIRECTLY SOUTH OF THE POWER SUBSTATION
              </p>
            </div>
          </div>

          {/* Interactive FAQs list block */}
          <div className="mt-24 border-t border-neutral-900 pt-16">
            <div className="text-center mb-16">
              <span className="text-red-500 font-mono text-xs tracking-widest uppercase block mb-1">FAQS ANSWER EXCHANGE</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase italic">GENERAL INQUIRY LOGS</h3>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    id={`faq-item-${idx}`}
                    key={idx}
                    className="bg-neutral-900 border border-neutral-850 rounded overflow-hidden"
                  >
                    <button
                      id={`faq-toggle-btn-${idx}`}
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between text-white text-xs sm:text-sm font-extrabold tracking-wide uppercase focus:outline-none hover:bg-neutral-850/50 transition-colors"
                    >
                      <span className="flex items-center space-x-2 select-none">
                        <HelpCircle className="w-4.5 h-4.5 text-red-500" />
                        <span>{faq.question}</span>
                      </span>
                      <span className="text-red-500 italic font-mono text-[11px] font-bold">
                        {isOpen ? 'COLLAPSE' : 'EXPAND Log'}
                      </span>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden border-t border-neutral-850 bg-neutral-950/60"
                        >
                          <div className="p-5 text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
