import { Link } from 'react-router-dom';
import { Flame, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Award } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer id="main-footer" className="bg-neutral-950 border-t border-neutral-900 text-neutral-400">
      
      {/* Heavy Pitch Area / Newsletter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-12 border-b border-neutral-900">
          
          <div className="lg:col-span-2">
            <span className="text-red-500 font-mono text-xs tracking-widest uppercase block mb-2">WEEKLY MOTIVATION & EXCLUSIVE OFFERS</span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
              JOIN THE <span className="font-sans italic font-black">IRON CIRCLE</span> NEWSLETTER
            </h3>
            <p className="mt-2 text-neutral-400 text-sm max-w-xl">
              Get scientifically backed training templates, biomechanics insights, and priority access to limited sportswear collection drops. No spam. Just strength.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            {isSubscribed ? (
              <div id="newsletter-success" className="p-4 bg-red-950/40 border border-red-800 rounded text-red-400 text-xs font-mono tracking-wider text-center">
                SUCCESS: INTENT RECEIVED. PRIVATE TELEMETRY INJECTED.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  id="newsletter-email-input"
                  type="email"
                  required
                  placeholder="ENTER CLIENT EMAIL ADDRESS"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-neutral-900 text-white placeholder-neutral-600 text-xs font-mono tracking-widest px-4 py-3 border border-neutral-800 rounded focus:border-red-650 focus:outline-none flex-grow"
                />
                <button
                  id="newsletter-submit-btn"
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-black text-xs tracking-widest uppercase px-6 py-3 rounded transition-colors whitespace-nowrap"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Structural Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12">
          
          {/* Brand Info */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center">
                <Flame className="w-5 h-5 text-white animate-pulse" />
              </div>
              <span className="text-lg font-black tracking-tight text-white uppercase italic">
                TILL <span className="text-red-500">FAILURE</span>
              </span>
            </Link>
            <p className="text-xs text-neutral-500 leading-relaxed">
              We are a physical culture laboratory dedicated to elite mechanics, high structural standards, and the psychological pursuit of the physical failure barrier. 
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-neutral-900 hover:bg-red-650 hover:text-white flex items-center justify-center transition-all duration-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-neutral-900 hover:bg-red-650 hover:text-white flex items-center justify-center transition-all duration-200">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-neutral-900 hover:bg-red-650 hover:text-white flex items-center justify-center transition-all duration-200">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links column */}
          <div>
            <h4 className="text-white text-xs font-extrabold tracking-widest uppercase mb-4 pl-3 border-l-2 border-red-600">
              EXPLORE ARENA
            </h4>
            <ul className="space-y-2 text-xs font-bold tracking-wider">
              <li><Link to="/" className="hover:text-red-500 transition-colors">HOME BASE</Link></li>
              <li><Link to="/about" className="hover:text-red-500 transition-colors">OUR STORY & TIMELINE</Link></li>
              <li><Link to="/membership" className="hover:text-red-500 transition-colors font-extrabold text-red-400">MEMBERSHIP PLANS</Link></li>
              <li><Link to="/trainers" className="hover:text-red-500 transition-colors">ELITE TRAINING STAFF</Link></li>
              <li><Link to="/transformations" className="hover:text-red-500 transition-colors">SUCCESS INSIGHTS</Link></li>
            </ul>
          </div>

          {/* Tools & Analytics column */}
          <div>
            <h4 className="text-white text-xs font-extrabold tracking-widest uppercase mb-4 pl-3 border-l-2 border-red-600">
              RESOURCES
            </h4>
            <ul className="space-y-2 text-xs font-bold tracking-wider">
              <li><Link to="/bmi" className="hover:text-red-500 transition-colors">COMPUTE BMI STATS</Link></li>
              <li><Link to="/schedule" className="hover:text-red-500 transition-colors">WEEKLY CLASS TIMETABLE</Link></li>
              <li><Link to="/contact" className="hover:text-red-500 transition-colors">COORDINATES & ENTRANCES</Link></li>
              <li className="text-neutral-600 flex items-center space-x-1">
                <Award className="w-3.5 h-3.5 text-neutral-600" />
                <span>GOLD SPONSOR APEX '26</span>
              </li>
            </ul>
          </div>

          {/* Physical Location info */}
          <div>
            <h4 className="text-white text-xs font-extrabold tracking-widest uppercase mb-4 pl-3 border-l-2 border-red-600">
              HEADQUARTERS
            </h4>
            <ul className="space-y-3 text-xs leading-relaxed">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>802 Industrial Hangar Ave, Suite B, Iron City Area</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>+1 (888) RAW-IRON</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>hq@tillfailure.fit</span>
              </li>
              <li className="text-[10px] text-neutral-500 leading-tight border-t border-neutral-900 pt-3">
                <span className="font-bold text-white block mb-0.5">OPEN 24 HOURS / 365 DAYS</span>
                * Biometric ingress registered at initial consultation desk.
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Credits bar */}
        <div className="border-t border-neutral-900 pt-8 mt-4 text-center md:flex md:justify-between md:items-center text-[10px] text-neutral-600">
          <p>&copy; {new Date().getFullYear()} TILL FAILURE FITNESS CO. ALL RIGHTS RESERVED WORLDWIDE.</p>
          <p className="mt-2 md:mt-0 font-mono tracking-widest">
            DESIGNED WITH RELENTLESS SYSTEM EXCELLENCE
          </p>
        </div>

      </div>
    </footer>
  );
}
