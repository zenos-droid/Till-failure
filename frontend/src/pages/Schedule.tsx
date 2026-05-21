import { useState } from 'react';
import { Calendar, Clock, User, Flame, Check, AlertTriangle, Filter } from 'lucide-react';
import { WEEKLY_SCHEDULE } from '../data';
import { ClassSchedule } from '../types';
import PageTransition from '../components/PageTransition';
import { motion, AnimatePresence } from 'motion/react';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState<typeof DAYS[number]>('Monday');
  const [bookedClasses, setBookedClasses] = useState<string[]>([]);
  const [intensityFilter, setIntensityFilter] = useState<'All' | 'Medium' | 'High' | 'Extreme'>('All');

  const currentDayData = WEEKLY_SCHEDULE.find(d => d.day === selectedDay);
  
  // Filter by intensity
  const filteredClasses = currentDayData
    ? intensityFilter === 'All'
      ? currentDayData.classes
      : currentDayData.classes.filter(c => c.intensity === intensityFilter)
    : [];

  const handleBookClass = (classId: string) => {
    if (bookedClasses.includes(classId)) {
      setBookedClasses(prev => prev.filter(id => id !== classId));
    } else {
      setBookedClasses(prev => [...prev, classId]);
    }
  };

  return (
    <PageTransition>
      {/* Title Header */}
      <section id="schedule-header" className="relative py-20 bg-neutral-950 text-center overflow-hidden border-b border-neutral-900">
        <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center, rgba(220,38,38,0.08) 0%, transparent 80%) z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-red-500 font-mono text-xs tracking-[0.45em] uppercase block mb-3 font-bold">TIMETABLES & ARENAS</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase italic leading-none">
            WEEKLY CLASS <span className="text-red-500">SCHEDULES</span>
          </h1>
          <p className="mt-4 text-neutral-400 text-sm max-w-xl mx-auto">
            Review our intense daily combat schedules. Book your platform slots in advance. Maximum capacities strictly enforced.
          </p>
        </div>
      </section>

      {/* Timetable main layout controls and cards */}
      <section id="schedule-timetable" className="py-20 bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Day Tabs horizontal scroll list */}
          <div className="border-b border-neutral-900 pb-4 mb-10 overflow-x-auto whitespace-nowrap scrollbar-none flex space-x-1 justify-start lg:justify-center">
            {DAYS.map((day) => (
              <button
                id={`day-tab-${day.toLowerCase()}`}
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`inline-block px-5 py-3 rounded text-xs font-mono font-bold tracking-widest uppercase border transition-all pointer focus:outline-none ${
                  selectedDay === day
                    ? 'bg-red-650 text-white border-red-600 shadow-[0_0_12px_#dc2626]'
                    : 'bg-neutral-900/50 text-neutral-450 border-neutral-850 hover:bg-neutral-850 hover:text-white'
                }`}
              >
                {day.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Filtering row controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-4 border-b border-neutral-900/40 gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-red-500" />
              <span className="text-white text-xs font-mono font-bold tracking-widest uppercase">INTENSITY LEVEL:</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              {(['All', 'Medium', 'High', 'Extreme'] as const).map((lvl) => (
                <button
                  id={`intensity-filter-${lvl.toLowerCase()}`}
                  key={lvl}
                  onClick={() => setIntensityFilter(lvl)}
                  className={`px-3 py-1.5 rounded text-[10px] font-mono tracking-widest uppercase border transition-all ${
                    intensityFilter === lvl
                      ? 'bg-neutral-900 text-red-500 border-red-900/50'
                      : 'text-neutral-500 border-transparent hover:text-white'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Active Class listings cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              {filteredClasses.length > 0 ? (
                filteredClasses.map((item, idx) => {
                  const isBooked = bookedClasses.includes(item.id);
                  let badgeStyles = 'text-green-400 border-green-900/40 bg-green-950/20';
                  if (item.intensity === 'High') {
                    badgeStyles = 'text-amber-500 border-amber-900/40 bg-amber-950/20';
                  } else if (item.intensity === 'Extreme') {
                    badgeStyles = 'text-red-500 border-red-950/40 bg-red-950/30 animate-pulse';
                  }

                  return (
                    <motion.div
                      id={`class-card-${item.id}`}
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25, delay: idx * 0.04 }}
                      className="bg-neutral-900 border border-neutral-850 rounded-lg p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-neutral-700 transition-colors gap-6"
                    >
                      {/* Class specs */}
                      <div className="space-y-3 flex-grow">
                        <div className="flex items-center space-x-2">
                          <span className={`inline-block px-2.5 py-0.5 rounded text-[8px] font-mono tracking-widest border font-bold uppercase ${badgeStyles}`}>
                            {item.intensity} PROTOCOL
                          </span>
                        </div>

                        <h3 className="text-white text-md sm:text-lg font-black uppercase tracking-tight font-sans">
                          {item.className}
                        </h3>

                        <div className="grid grid-cols-2 gap-y-1.5 gap-x-4 max-w-sm text-neutral-400 font-mono text-[10px]">
                          <div className="flex items-center space-x-1.5">
                            <Clock className="w-4 h-4 text-red-500 flex-shrink-0" />
                            <span>{item.time} ({item.duration})</span>
                          </div>
                          
                          <div className="flex items-center space-x-1.5">
                            <User className="w-4 h-4 text-red-500 flex-shrink-0" />
                            <span>{item.trainer}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action buttons list */}
                      <div className="flex flex-col items-stretch sm:items-end w-full sm:w-auto flex-shrink-0 space-y-2 border-t sm:border-t-0 border-neutral-850 pt-4 sm:pt-0">
                        <span className="text-[10px] font-mono text-neutral-500 tracking-wider text-left sm:text-right uppercase block">
                          CAPACITY LEFT: <span className="text-white font-bold">{item.spotsLeft - (isBooked ? 1 : 0)} / 20</span>
                        </span>
                        
                        <button
                          id={`book-class-${item.id}`}
                          onClick={() => handleBookClass(item.id)}
                          className={`px-5 py-2 rounded text-[10px] font-mono font-bold tracking-widest uppercase transition-all whitespace-nowrap cursor-pointer ${
                            isBooked
                              ? 'bg-neutral-950 text-red-550 border border-red-650 shadow-[0_0_8px_rgba(220,38,38,0.25)]'
                              : 'bg-red-650 hover:bg-red-700 text-white'
                          }`}
                        >
                          {isBooked ? (
                            <span className="flex items-center justify-center space-x-1">
                              <Check className="w-3.5 h-3.5" />
                              <span>SLOT EXECUTED</span>
                            </span>
                          ) : (
                            'RESERVE PLATFORM SLOT'
                          )}
                        </button>
                      </div>

                    </motion.div>
                  );
                })
              ) : (
                <div id="no-classes" className="col-span-2 text-center py-16 bg-neutral-900 rounded border border-dashed border-neutral-850">
                  <AlertTriangle className="w-8 h-8 text-neutral-600 mx-auto mb-2 animate-bounce" />
                  <p className="text-xs font-mono text-neutral-550 uppercase">NO ACTIVE CLASSES FOUND FOR INTENSITY BATCH.</p>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* FAQS dynamic box below timetables */}
          <div className="mt-24 border-t border-neutral-900 pt-16">
            <div className="text-center mb-12">
              <span className="text-red-500 font-mono text-xs tracking-widest uppercase block mb-1">PLATFORM CRITERIAS</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase italic">TIMETABLE RULES</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-xs leading-relaxed">
              <div className="space-y-2">
                <span className="text-white font-extrabold block uppercase tracking-wide">1. Punctual Entry Requirements</span>
                <p className="text-neutral-450">Classes start exactly on clock boundaries. Platform blocks expire 3 minutes after launch sequence. Late entrants jeopardize warm up joint stability phases and are locked out.</p>
              </div>
              <div className="space-y-2">
                <span className="text-white font-extrabold block uppercase tracking-wide">2. Cancellation Policy Limits</span>
                <p className="text-neutral-450">Platform slot cancellations must occur 2 hours baseline beforehand, giving standby contender clients window egress access. Repeat logs results in temporary booking locks.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
