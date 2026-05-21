import { useState } from 'react';
import { Check, X, ShieldCheck, Flame, Star, AlertCircle } from 'lucide-react';
import { MEMBERSHIPS } from '../data';
import PageTransition from '../components/PageTransition';
import { motion } from 'motion/react';

const COMPARISON_FEATURES = [
  { item: 'Uncompromised 24/7 Floor Access', basic: true, pro: true, elite: true },
  { item: 'Sleek locker rooms & rain-showers', basic: true, pro: true, elite: true },
  { item: 'Over 200+ Calibrated bumper plates & specialty bars', basic: true, pro: true, elite: true },
  { item: 'Heavy-Metal Live DJ Friday Sessions', basic: true, pro: true, elite: true },
  { item: 'Unlimited Metabolic Conditioning class credits', basic: false, pro: true, elite: true },
  { item: 'Monthly Biometrics reports (InBody metrics)', basic: false, pro: true, elite: true },
  { item: 'Biomonitoring / CNS status evaluations', basic: false, pro: true, elite: true },
  { item: 'Infrared Recovery Sauna Access', basic: false, pro: '4x Passes / Mo', elite: 'UNLIMITED' },
  { item: 'Dedicated Pro Bodybuilding/Coach Allocations', basic: false, pro: false, elite: '2x Sessions / Wk' },
  { item: 'Fully Customized Weekly Sports Nutrition templates', basic: false, pro: false, elite: true },
  { item: 'Cryo-Cold Plunge Pool access', basic: false, pro: false, elite: true },
];

export default function Membership() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const toggleBilling = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly');
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setTimeout(() => {
      setSelectedPlan(null);
    }, 5000);
  };

  return (
    <PageTransition>
      {/* Page Title & Ingress Banner */}
      <section id="pricing-title" className="relative py-20 bg-neutral-950 text-center overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center, rgba(220,38,38,0.08) 0%, transparent 80%) z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-red-500 font-mono text-xs tracking-[0.4em] uppercase block mb-3 font-bold">COVENANTS & INGRES PLANS</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase italic leading-none">
            CHOOSE YOUR <span className="text-red-500">LEVEL OF FOCUS</span>
          </h1>
          <p className="mt-4 text-neutral-400 text-sm max-w-xl mx-auto">
            Choose standard access or immersive professional coaching. Toggle billing cycles for maximum savings.
          </p>

          {/* Billing Toggle Module */}
          <div className="mt-10 flex items-center justify-center space-x-4">
            <span className={`text-xs font-mono font-bold tracking-widest uppercase transition-colors ${billingCycle === 'monthly' ? 'text-white' : 'text-neutral-500'}`}>
              MONTHLY CHARGE
            </span>
            <button
              id="billing-cycle-toggle-btn"
              onClick={toggleBilling}
              className="relative w-14 h-8 bg-neutral-900 border border-neutral-800 rounded-full transition-colors flex items-center focus:outline-none focus:ring-1 focus:ring-red-650"
              aria-label="Toggle Billing Cycle"
            >
              <span
                className={`absolute w-6 h-6 rounded-full bg-red-600 transition-all duration-300 ${
                  billingCycle === 'annual' ? 'left-7' : 'left-1'
                }`}
              />
            </button>
            <span className={`text-xs font-mono font-bold tracking-widest uppercase flex items-center transition-colors ${billingCycle === 'annual' ? 'text-white' : 'text-neutral-500'}`}>
              ANNUAL VALUE PLAN <span className="ml-1.5 px-2 py-0.5 border border-red-600 bg-red-950/40 rounded text-red-500 text-[9px] animate-pulse">SAVE 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards Layout */}
      <section id="pricing-cards" className="py-12 bg-neutral-950 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {selectedPlan && (
            <motion.div
              id="checkout-trigger-msg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xl mx-auto bg-green-950/40 border border-green-800 rounded p-4 text-green-400 text-xs font-mono tracking-wider text-center mb-10"
            >
              TRANSACTION SECURED: Priority ingress tokens generated for {selectedPlan.toUpperCase()}. Check email coordinates.
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {MEMBERSHIPS.map((plan) => {
              const currentPrice = billingCycle === 'annual' ? plan.priceAnnualMonthly : plan.priceMonthly;
              const savedSum = (plan.priceMonthly - plan.priceAnnualMonthly) * 12;

              return (
                <div
                  id={`plan-card-${plan.id}`}
                  key={plan.id}
                  className={`bg-neutral-900 border rounded-lg p-8 flex flex-col justify-between relative transition-all duration-300 ${
                    plan.isPopular 
                      ? 'border-red-600/90 shadow-xl shadow-red-950/10 md:-translate-y-4' 
                      : 'border-neutral-850 hover:border-neutral-700'
                  }`}
                >
                  {/* Popular Tag Indicator */}
                  {plan.isPopular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-650 text-white font-black text-[9px] font-mono tracking-[0.2em] px-4 py-1.5 rounded uppercase shadow-lg shadow-red-600/30">
                      RECOMMENDED CONTENDER
                    </span>
                  )}

                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase block mb-1">
                      {plan.tag}
                    </span>
                    <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-xs text-neutral-450 leading-relaxed min-h-[40px]">
                      {plan.description}
                    </p>

                    <div className="my-6 border-y border-neutral-850/80 py-4 flex items-baseline">
                      <span className="text-4xl sm:text-5xl font-black text-white italic tracking-tighter">
                        ${currentPrice}
                      </span>
                      <span className="text-neutral-500 font-mono text-xs ml-2">/ MONTH</span>
                    </div>

                    {billingCycle === 'annual' && (
                      <span className="block text-[10px] font-mono text-neutral-400 mb-6 bg-neutral-950 py-1.5 px-3 rounded border border-neutral-850 uppercase">
                        Billed annually (${currentPrice * 12}/yr) &bull; SAVES ${savedSum}/YR
                      </span>
                    )}

                    <ul className="space-y-3 pt-2">
                      {plan.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start space-x-2.5 text-xs text-neutral-350">
                          {feature.included ? (
                            <Check className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-4 h-4 text-neutral-600 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={feature.included ? 'text-neutral-300' : 'text-neutral-500 line-through'}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-neutral-850/60">
                    <button
                      id={`plan-subscribe-btn-${plan.id}`}
                      onClick={() => handleSelectPlan(plan.name)}
                      className={`w-full py-3 text-center text-xs font-black tracking-widest uppercase rounded transition-all focus:outline-none focus:ring-1 focus:ring-red-650 ${
                        plan.isPopular
                          ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/10'
                          : 'bg-neutral-950 text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-800'
                      }`}
                    >
                      SECURE ACTIVE RECRUITEMENT
                    </button>
                    <span className="block text-center text-[9px] font-mono tracking-wide text-neutral-650 mt-3 uppercase">
                      SECURED &bull; INSTANT INGRESS TOKEN
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section id="pricing-matrix" className="py-24 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-red-500 font-mono text-xs tracking-widest uppercase block mb-2">COMPLETE MATRIX BREAKDOWN</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase italic">
              FEATURE <span className="text-red-650">COMPARISON MATRIX</span>
            </h2>
          </div>

          <div className="overflow-x-auto rounded-lg border border-neutral-850/80 bg-neutral-900/50">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-850 bg-neutral-900">
                  <th className="px-6 py-4 text-xs font-black tracking-widest uppercase text-white">BENCHMARK STRUCTURE</th>
                  <th className="px-6 py-4 text-xs font-black tracking-widest uppercase text-red-500 text-center">BLACK STEEL</th>
                  <th className="px-6 py-4 text-xs font-black tracking-widest uppercase text-white text-center">REDLINE AGGRESSIVE</th>
                  <th className="px-6 py-4 text-xs font-black tracking-widest uppercase text-red-500 text-center">TILL FAILURE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-850 text-xs">
                {COMPARISON_FEATURES.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-950/40 transition-colors">
                    <td className="px-6 py-4 text-neutral-300 font-medium">{row.item}</td>
                    
                    {/* Basic cell */}
                    <td className="px-6 py-4 text-center">
                      {typeof row.basic === 'boolean' ? (
                        row.basic ? (
                          <Check className="w-4 h-4 text-red-500 mx-auto" />
                        ) : (
                          <X className="w-3.5 h-3.5 text-neutral-600 mx-auto" />
                        )
                      ) : (
                        <span className="font-mono text-[10px] text-neutral-500">{row.basic}</span>
                      )}
                    </td>

                    {/* Pro cell */}
                    <td className="px-6 py-4 text-center">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? (
                          <Check className="w-4 h-4 text-red-500 mx-auto" />
                        ) : (
                          <X className="w-3.5 h-3.5 text-neutral-600 mx-auto" />
                        )
                      ) : (
                        <span className="font-mono text-[11px] font-bold text-red-400 whitespace-nowrap">{row.pro}</span>
                      )}
                    </td>

                    {/* Elite cell */}
                    <td className="px-6 py-4 text-center bg-red-950/10">
                      {typeof row.elite === 'boolean' ? (
                        row.elite ? (
                          <Check className="w-4 h-4 text-red-500 mx-auto" />
                        ) : (
                          <X className="w-3.5 h-3.5 text-neutral-600 mx-auto" />
                        )
                      ) : (
                        <span className="font-mono text-[11px] font-bold text-red-400 whitespace-nowrap">{row.elite}</span>
                      )}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Secure disclaimer support bar */}
          <div className="mt-8 flex items-start space-x-2 p-4 bg-neutral-900 border border-neutral-850 rounded">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-[11px] text-neutral-500 leading-normal">
              * Rates are locked at enrollment intervals. All covenants have a mandatory 3-month setup clause. Contract terminations require a 15-day notice block initiated from your dashboard logs or in person. No hidden processing costs.
            </p>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
