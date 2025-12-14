'use client';

import { motion } from 'framer-motion';

export const PricingTiersSlide = () => {
  const tiers = [
    { name: "DHGO Mobile", price: "499", features: ["Mobile only", "SD Quality", "1 Screen"], color: "bg-neutral-800" },
    { name: "DHGO Gold", price: "999", features: ["TV + Mobile", "HD Quality", "2 Screens"], color: "bg-[var(--color-primary)]", featured: true },
    { name: "DHGO Platinum", price: "1499", features: ["All Devices", "4K Quality", "4 Screens"], color: "bg-neutral-800" },
    { name: "DHGO Ultimate", price: "1999", features: ["All Access", "Free PPVs", "VIP Support"], color: "bg-neutral-800" },
  ];

  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
          <div>
             <h2 className="text-4xl font-bold tracking-tight mb-2">Pricing Strategy</h2>
             <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">Simple Tiers • Frictionless Scale</p>
          </div>
          <span className="text-gray-500 font-mono text-sm">36</span>
       </div>
       
       <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 h-full min-h-0">
          
          {/* Tiers Display */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4 items-end pb-4">
             {tiers.map((tier, idx) => (
                <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   className={`relative rounded-2xl border ${tier.featured ? 'border-[var(--color-primary)] shadow-[0_0_30px_-10px_var(--color-primary)] h-[110%] z-10' : 'border-neutral-800 bg-neutral-900/50 h-full'} flex flex-col p-6 group transition-all duration-300 hover:scale-[1.02]`}
                >
                   {tier.featured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                         Core Target
                      </div>
                   )}
                   
                   <div className="text-center mb-6">
                      <h3 className={`text-lg font-bold uppercase tracking-wide mb-2 ${tier.featured ? 'text-[var(--color-primary)]' : 'text-gray-400'}`}>{tier.name}</h3>
                      <div className="flex items-baseline justify-center gap-1">
                         <span className="text-lg text-gray-500">NPR</span>
                         <span className={`text-4xl font-black ${tier.featured ? 'text-white' : 'text-gray-200'}`}>{tier.price}</span>
                      </div>
                      <div className="text-xs text-gray-500 uppercase">/mo</div>
                   </div>

                   <ul className="space-y-4 mb-8 flex-1">
                      {tier.features.map((feature, fIdx) => (
                         <li key={fIdx} className="text-sm text-gray-300 flex items-center justify-center gap-2">
                            <svg className={`w-4 h-4 ${tier.featured ? 'text-[var(--color-primary)]' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            {feature}
                         </li>
                      ))}
                   </ul>

                   <div className={`w-full py-3 rounded-lg text-sm font-bold text-center uppercase tracking-wider ${tier.featured ? 'bg-[var(--color-primary)] text-white' : 'bg-neutral-800 text-gray-500'}`}>
                      {tier.featured ? 'Select' : 'View'}
                   </div>
                </motion.div>
             ))}
          </div>

          {/* Strategy Narrative Sidebar */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6 pl-4 border-l border-neutral-800">
             
             {/* Volume Driver Insight */}
             <div className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Volume Driver</h3>
                </div>
                <p className="text-gray-400 text-base leading-relaxed">
                   While Gold is the target, <span className="text-white font-semibold">DHGO Mobile (499)</span> will dominate initial adoption in Nepal due to price sensitivity.
                </p>
             </div>

             {/* The "Why" - Anti-Complexity Strategy */}
             <div className="space-y-6">
                <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest">The "Anti-ISP" Strategy</h3>
                
                <div className="group flex items-start gap-4">
                   <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0 group-hover:scale-150 transition-transform"></div>
                   <div>
                      <h4 className="text-white font-bold text-lg">No Content Bifurcation</h4>
                      <p className="text-sm text-gray-400 mt-1">Don't split Sports vs. Movies. One platform, one subscription. Reduce decision fatigue.</p>
                   </div>
                </div>

                <div className="group flex items-start gap-4">
                   <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0 group-hover:scale-150 transition-transform"></div>
                   <div>
                      <h4 className="text-white font-bold text-lg">Monthly Only</h4>
                      <p className="text-sm text-gray-400 mt-1">Avoid "scary" annual commitments. Low barrier to entry.</p>
                   </div>
                </div>

                <div className="group flex items-start gap-4">
                   <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0 group-hover:scale-150 transition-transform"></div>
                   <div>
                      <h4 className="text-white font-bold text-lg">Netflix Model</h4>
                      <p className="text-sm text-gray-400 mt-1">"Pay & Forget." Simple, frictionless, recurring revenue.</p>
                   </div>
                </div>
             </div>

          </div>
       </div>
    </div>
  );
};

