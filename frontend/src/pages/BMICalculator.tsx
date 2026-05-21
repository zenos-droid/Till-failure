import { useState, useEffect } from 'react';
import { Activity, Flame, ShieldAlert, Award, Calculator, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { motion } from 'motion/react';

type UnitSystem = 'metric' | 'imperial';

export default function BMICalculator() {
  const [unitSystem, setUnitSystem] = useState<UnitSystem>('metric');
  
  // Metric States
  const [weightKg, setWeightKg] = useState<number>(75);
  const [heightCm, setHeightCm] = useState<number>(175);

  // Imperial States
  const [weightLbs, setWeightLbs] = useState<number>(165);
  const [heightFt, setHeightFt] = useState<number>(5);
  const [heightIn, setHeightIn] = useState<number>(9);

  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string>('');
  const [categoryColor, setCategoryColor] = useState<string>('');

  // Calculate live BMI
  useEffect(() => {
    let computedBmi = 0;

    if (unitSystem === 'metric') {
      const heightM = heightCm / 100;
      if (heightM > 0) {
        computedBmi = weightKg / (heightM * heightM);
      }
    } else {
      const totalInches = (heightFt * 12) + heightIn;
      if (totalInches > 0) {
        computedBmi = (weightLbs / (totalInches * totalInches)) * 703;
      }
    }

    const roundedBmi = parseFloat(computedBmi.toFixed(1));
    setBmi(roundedBmi);

    // Compute classifications
    if (roundedBmi < 18.5) {
      setBmiCategory('UNDERWEIGHT &bull; RECRUIT BLOCK');
      setCategoryColor('text-blue-400 border-blue-900/40 bg-blue-950/20');
    } else if (roundedBmi >= 18.5 && roundedBmi < 25) {
      setBmiCategory('NORMAL &bull; CONTENDER THRESHOLD');
      setCategoryColor('text-green-400 border-green-900/40 bg-green-950/20');
    } else if (roundedBmi >= 25 && roundedBmi < 30) {
      setBmiCategory('OVERWEIGHT &bull; ENERGY ACCUMULATION');
      setCategoryColor('text-amber-500 border-amber-900/40 bg-amber-950/20');
    } else {
      setBmiCategory('OBESE &bull; HEAVY CALIBER REDUCTION');
      setCategoryColor('text-red-500 border-red-950/40 bg-red-950/30');
    }

  }, [unitSystem, weightKg, heightCm, weightLbs, heightFt, heightIn]);

  // Dynamic recommendation based on BMI
  const getRecommendation = () => {
    if (!bmi) return null;
    if (bmi < 18.5) {
      return {
        title: 'HYPERTROPHY CALORIC OVERFLOW',
        goal: 'Accelerate structural myofibrillar hypertrophy and muscle mass accretion.',
        program: 'Hypertrophy Mastery Block (12-Week)',
        guidance: 'Increase baseline caloric fuel intake by +500 kcal. Prioritize high-tension mechanical loading (8-12 reps till absolute failure) and 8 hours of restorative deep sleep cycles.'
      };
    } else if (bmi >= 18.5 && bmi < 25) {
      return {
        title: 'KINETIC ELITE STRENGTH FOCUS',
        goal: 'Optimize power ratios, joint torque efficiency, and velocity mechanics.',
        program: 'Kinetic Strength Engine Block (16-Week)',
        guidance: 'Maintain metabolic maintenance calories. Target compound loaders (Squat, Bench press, Joint bracing) at 80% to 92% of your validated 1RM.'
      };
    } else if (bmi >= 25 && bmi < 30) {
      return {
        title: 'RECOMPOSITION FAT EXTRACTION',
        goal: 'Accelerate fat oxidation levels while preserving raw musculoskeletal density.',
        program: 'Metcon Decimation Track (8-Week)',
        guidance: 'Deploy a moderate -15% caloric deficit with high protein density (2.0g/kg lean mass). Pair heavy multi-joint triples with anaerobic assault intervals.'
      };
    } else {
      return {
        title: 'METCON CARDIAC DEVIATION',
        goal: 'Decimate lipid deposits, restore insulin response rates, and secure joint structures.',
        program: 'Metcon Decimation & Conditioning',
        guidance: 'Adopt a steady -500 kcal baseline deficit. Focus on impact-free cardiovascular threshold work (Sled drags, Rowers, Sandbag carries) paired with structural stabilization lines.'
      };
    }
  };

  const advice = getRecommendation();

  return (
    <PageTransition>
      {/* Title Section */}
      <section id="bmi-header" className="relative py-20 bg-neutral-950 text-center overflow-hidden border-b border-neutral-900">
        <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center, rgba(220,38,38,0.08) 0%, transparent 80%) z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-red-500 font-mono text-xs tracking-[0.45em] uppercase block mb-3 font-bold">BIOMETRIC LABS</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase italic leading-none">
            HYPERTROPHY <span className="text-red-500">INDEX CALCULATOR</span>
          </h1>
          <p className="mt-4 text-neutral-400 text-sm max-w-xl mx-auto">
            Input your diagnostics data. Secure live metrics telemetry, muscle mass thresholds, and tailored training recommendations.
          </p>
        </div>
      </section>

      {/* Main Interactive Lab block */}
      <section id="bmi-interface" className="py-20 bg-neutral-950 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Input Config Panel (Column 1) */}
            <div className="lg:col-span-6 bg-neutral-900 border border-neutral-850 p-6 sm:p-8 rounded-lg flex flex-col justify-between">
              
              <div>
                {/* Method selector tab items */}
                <div className="flex border-b border-neutral-800 pb-6 mb-8">
                  <button
                    id="bmi-metric-tab"
                    onClick={() => setUnitSystem('metric')}
                    className={`flex-1 py-2 text-center text-xs font-mono font-bold tracking-widest uppercase border transition-all ${
                      unitSystem === 'metric'
                        ? 'bg-red-650 text-white border-red-600 shadow-[0_0_12px_rgba(220,38,38,0.2)]'
                        : 'bg-neutral-950 text-neutral-450 border-neutral-850 hover:text-white'
                    }`}
                  >
                    METRIC (KG / CM)
                  </button>
                  <button
                    id="bmi-imperial-tab"
                    onClick={() => setUnitSystem('imperial')}
                    className={`flex-1 py-2 text-center text-xs font-mono font-bold tracking-widest uppercase border transition-all ${
                      unitSystem === 'imperial'
                        ? 'bg-red-650 text-white border-red-600 shadow-[0_0_12px_rgba(220,38,38,0.2)]'
                        : 'bg-neutral-950 text-neutral-450 border-neutral-850 hover:text-white'
                    }`}
                  >
                    IMPERIAL (LBS / FT-IN)
                  </button>
                </div>

                {/* Live units adjustments */}
                {unitSystem === 'metric' ? (
                  <div className="space-y-8">
                    {/* Weight Metric slider + manual typing */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-white text-xs font-extrabold tracking-widest uppercase">MASS WEIGHT (KG)</label>
                        <input
                          id="metric-weight-field"
                          type="number"
                          value={weightKg}
                          onChange={(e) => setWeightKg(Math.max(10, Math.min(300, Number(e.target.value))))}
                          className="w-20 bg-neutral-950 text-red-500 font-mono font-bold text-center border border-neutral-800 rounded px-2 py-1 text-xs"
                        />
                      </div>
                      <input
                        id="metric-weight-range"
                        type="range"
                        min="30"
                        max="220"
                        value={weightKg}
                        onChange={(e) => setWeightKg(Number(e.target.value))}
                        className="w-full accent-red-600 cursor-ew-resize bg-neutral-950 h-2 rounded border border-neutral-800"
                      />
                      <div className="flex justify-between text-[9px] font-mono text-neutral-550 mt-1 uppercase">
                        <span>30 KG</span>
                        <span>125 KG</span>
                        <span>220 KG</span>
                      </div>
                    </div>

                    {/* Height Metric slider + typing */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-white text-xs font-extrabold tracking-widest uppercase">STATURE HEIGHT (CM)</label>
                        <input
                          id="metric-height-field"
                          type="number"
                          value={heightCm}
                          onChange={(e) => setHeightCm(Math.max(60, Math.min(250, Number(e.target.value))))}
                          className="w-20 bg-neutral-950 text-red-500 font-mono font-bold text-center border border-neutral-800 rounded px-2 py-1 text-xs"
                        />
                      </div>
                      <input
                        id="metric-height-range"
                        type="range"
                        min="100"
                        max="230"
                        value={heightCm}
                        onChange={(e) => setHeightCm(Number(e.target.value))}
                        className="w-full accent-red-600 cursor-ew-resize bg-neutral-950 h-2 rounded border border-neutral-800"
                      />
                      <div className="flex justify-between text-[9px] font-mono text-neutral-550 mt-1 uppercase">
                        <span>100 CM</span>
                        <span>165 CM</span>
                        <span>230 CM</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {/* Weight Imperial controls */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-white text-xs font-extrabold tracking-widest uppercase">MASS WEIGHT (LBS)</label>
                        <input
                          id="imperial-weight-field"
                          type="number"
                          value={weightLbs}
                          onChange={(e) => setWeightLbs(Math.max(40, Math.min(600, Number(e.target.value))))}
                          className="w-20 bg-neutral-950 text-red-500 font-mono font-bold text-center border border-neutral-800 rounded px-2 py-1 text-xs"
                        />
                      </div>
                      <input
                        id="imperial-weight-range"
                        type="range"
                        min="60"
                        max="480"
                        value={weightLbs}
                        onChange={(e) => setWeightLbs(Number(e.target.value))}
                        className="w-full accent-red-600 cursor-ew-resize bg-neutral-950 h-2 rounded border border-neutral-800"
                      />
                      <div className="flex justify-between text-[9px] font-mono text-neutral-550 mt-1 uppercase">
                        <span>60 LBS</span>
                        <span>270 LBS</span>
                        <span>480 LBS</span>
                      </div>
                    </div>

                    {/* Height Imperial dual inputs feet/inches */}
                    <div>
                      <label className="text-white text-xs font-extrabold tracking-widest uppercase block mb-3">STATURE HEIGHT (FEET & INCHES)</label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-neutral-950 p-4 border border-neutral-800 rounded text-center">
                          <label className="block text-[9px] font-mono text-neutral-500 uppercase mb-1">FEET</label>
                          <input
                            id="imperial-feet-field"
                            type="number"
                            min="3"
                            max="8"
                            value={heightFt}
                            onChange={(e) => setHeightFt(Math.max(3, Math.min(8, Number(e.target.value))))}
                            className="bg-transparent text-xl font-bold font-mono text-red-500 border-none outline-none text-center w-full focus:ring-0"
                          />
                        </div>
                        <div className="bg-neutral-950 p-4 border border-neutral-800 rounded text-center">
                          <label className="block text-[9px] font-mono text-neutral-500 uppercase mb-1">INCHES</label>
                          <input
                            id="imperial-inch-field"
                            type="number"
                            min="0"
                            max="11"
                            value={heightIn}
                            onChange={(e) => setHeightIn(Math.max(0, Math.min(11, Number(e.target.value))))}
                            className="bg-transparent text-xl font-bold font-mono text-white border-none outline-none text-center w-full focus:ring-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Secure disclaimer support block */}
              <div className="mt-8 border-t border-neutral-800 pt-6 text-[10px] text-neutral-550 flex items-start space-x-1.5 uppercase font-mono leading-relaxed">
                <Info className="w-4 h-4 text-neutral-605 flex-shrink-0" />
                <span>* Diagnostics computed instantaneously via local telemetry calculations. Calculations represent validated biological indices.</span>
              </div>

            </div>

            {/* Results output panel (Column 2) */}
            <div className="lg:col-span-6 bg-neutral-900 border border-neutral-850 p-6 sm:p-8 rounded-lg flex flex-col justify-between">
              
              <div className="text-center pb-6 border-b border-neutral-800">
                <span className="text-neutral-500 font-mono text-xs tracking-widest uppercase block mb-2">TELEMETRY DIAGNOSTICS</span>
                
                {/* BMI Large scorecard display */}
                <span className="text-6xl sm:text-7xl font-sans italic font-black text-white leading-none tracking-tighter block mb-2 select-none">
                  {bmi ? bmi : '0.0'}
                </span>
                
                <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest font-black uppercase text-center border ${categoryColor}`}>
                  {bmiCategory}
                </span>

                {/* Visual spectrum meter block */}
                <div className="mt-8">
                  <div className="flex justify-between text-[8px] font-mono text-neutral-500 mb-1.5 uppercase tracking-wider">
                    <span>UNDER (18.5)</span>
                    <span>NORMAL (25)</span>
                    <span>OVER (30)</span>
                    <span>OBESE</span>
                  </div>
                  <div className="h-2.5 bg-neutral-950 border border-neutral-850 rounded-full relative overflow-hidden">
                    {/* Color blocks */}
                    <div className="absolute top-0 bottom-0 left-0 w-[45%] bg-blue-600/20" />
                    <div className="absolute top-0 bottom-0 left-[45%] w-[15%] bg-green-600/30" />
                    <div className="absolute top-0 bottom-0 left-[60%] w-[15%] bg-amber-650/40" />
                    <div className="absolute top-0 bottom-0 left-[75%] w-[25%] bg-red-650/30" />
                    
                    {/* Live marker cursor */}
                    {bmi && (
                      <motion.div
                        className="absolute h-full w-2 bg-red-600 shadow-[0_0_10px_#dc2626] cursor-pointer"
                        style={{
                          left: `${Math.min(98, Math.max(2, ((bmi - 14) / 28) * 100))}%`,
                        }}
                        transition={{ type: 'spring', damping: 15 }}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Training suggestion and recommendation system */}
              {advice && (
                <div className="pt-6">
                  <span className="text-red-500 font-mono text-[9px] tracking-widest uppercase block mb-1">TAILORED RECRUITEMENT ROUTE</span>
                  <h3 className="text-white text-md font-black uppercase tracking-tight mb-2">
                    {advice.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-medium leading-relaxed mb-4">
                    {advice.guidance}
                  </p>
                  
                  {/* Dynamic linked class target */}
                  <div className="bg-neutral-950 border border-neutral-800 rounded p-4 flex items-center justify-between">
                    <div>
                      <span className="text-[8px] font-mono text-neutral-500 uppercase block mb-0.5">SUGGESTED COMBAT PROTOCOL</span>
                      <span className="text-white text-xs font-extrabold uppercase font-sans tracking-wide leading-none">{advice.program}</span>
                    </div>
                    <Link
                      id="bmi-linked-cta"
                      to="/membership"
                      className="w-10 h-10 rounded bg-red-600 flex items-center justify-center text-white hover:bg-red-750 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>
    </PageTransition>
  );
}
