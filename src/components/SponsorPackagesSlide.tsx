'use client';

import { motion } from 'framer-motion';

const packages = [
  {
    title: "Partner",
    subtitle: "High Frequency Reach",
    tier: "Entry",
    features: [
      "Rotation in pre-roll pool",
      "Sponsored row (Fixed week)",
      "Highlight package tag"
    ],
    bg: "bg-neutral-900",
    border: "border-neutral-800",
    text: "text-white"
  },
  {
    title: "Powered By",
    subtitle: "Segment Ownership",
    tier: "Mid-Tier",
    features: [
      "Branded segment (Toss/MVP)",
      "Persistent 'Score Bug' logo",
      "Home takeover on Match Days"
    ],
    bg: "bg-neutral-800",
    border: "border-neutral-700",
    text: "text-white"
  },
  {
    title: "Title Sponsor",
    subtitle: "Complete Domination",
    tier: "Flagship",
    features: [
      "'Presented by' naming rights",
      "Multi-surface domination",
      "Category Exclusivity (Optional)",
      "Push Notification branding"
    ],
    bg: "bg-gradient-to-b from-red-900 to-neutral-900",
    border: "border-red-800",
    text: "text-white",
    highlight: true
  }
];

export const SponsorPackagesSlide = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-baseline mb-12 border-b border-neutral-800 pb-6 shrink-0">
        <div>
           <h2 className="text-5xl font-bold tracking-tight text-white mb-2">Sponsorship Packages</h2>
           <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">Sellable Inventory without Rate Cards</p>
        </div>
        <span className="text-gray-500 font-mono text-xl">20</span>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        {packages.map((pkg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className={`
              relative flex flex-col justify-between p-8 rounded-3xl border ${pkg.border} ${pkg.bg}
              ${pkg.highlight ? 'h-[110%] shadow-[0_0_50px_-10px_rgba(220,38,38,0.5)] z-10' : 'h-full'}
              group transition-transform hover:-translate-y-2
            `}
          >
            <div>
               <div className={`text-xs font-mono uppercase tracking-widest mb-4 ${pkg.highlight ? 'text-red-200' : 'text-gray-500'}`}>
                  {pkg.tier}
               </div>
               <h3 className={`text-4xl font-bold italic tracking-tight mb-2 ${pkg.text}`}>
                  {pkg.title}
               </h3>
               <p className={`text-lg font-medium mb-8 ${pkg.highlight ? 'text-gray-300' : 'text-gray-400'}`}>
                  {pkg.subtitle}
               </p>
               
               <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                     <li key={idx} className="flex items-start gap-3">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${pkg.highlight ? 'bg-red-500' : 'bg-[var(--color-primary)]'}`}></div>
                        <span className={`text-lg leading-snug ${pkg.highlight ? 'text-white font-medium' : 'text-gray-300'}`}>
                           {feature}
                        </span>
                     </li>
                  ))}
               </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

