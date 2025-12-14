'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const KPICard = ({ title, value, subtext, trend, type, children, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-neutral-900 border border-neutral-800 p-8 rounded-3xl overflow-hidden hover:border-[var(--color-primary)] transition-colors duration-500 h-full flex flex-col justify-between"
    >
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
         {/* Icon based on type placeholder */}
         <div className={`w-24 h-24 rounded-full ${type === 'growth' ? 'bg-green-500' : type === 'money' ? 'bg-[var(--color-primary)]' : 'bg-blue-500'} blur-2xl`}></div>
      </div>
      
      <div>
        <h3 className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-4">{title}</h3>
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">{value}</span>
          {trend && (
            <span className={`text-sm font-bold px-2 py-1 rounded-full ${trend.startsWith('▲') || trend.startsWith('▼') && type === 'health' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'} ${trend.includes('Stable') ? 'bg-blue-500/20 text-blue-500' : ''}`}>
              {trend}
            </span>
          )}
        </div>
        <div className="flex flex-col">
           <p className="text-gray-500 text-sm">{subtext}</p>
        </div>
      </div>

      <div className="mt-8">
        {children}
      </div>
    </motion.div>
  );
};

export const KPIDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 w-full h-full p-4">
      
      {/* MAU - Large Card */}
      <div className="md:col-span-2 row-span-1">
        <KPICard 
          index={0}
          title="Total MAU (Free + Bundled + Paid)" 
          value="2.5M" 
          subtext={
            <>
              Monthly Active Users across all platforms
              <span className="block text-[var(--color-primary)] font-semibold mt-1">Paid subscribers ~600–700K</span>
            </>
          }
          trend="▲ 120%"
          type="growth"
        >
          <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden mt-4">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-green-900 to-green-500"
            />
          </div>
        </KPICard>
      </div>

      {/* ARPU */}
      <div className="md:col-span-1 row-span-1">
         <KPICard 
          index={1}
          title="ARPPU (Paid Users)" 
          value="Rs. 245" 
          subtext="Average revenue per paying user"
          type="money"
        >
          <div className="space-y-3">
             <div className="flex justify-between text-xs text-gray-400"><span>Basic Tier</span> <span>60%</span></div>
             <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
               <div className="h-full bg-neutral-600 w-[60%]"></div>
             </div>
             <div className="flex justify-between text-xs text-gray-400"><span>Premium Tier</span> <span>40%</span></div>
             <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
               <div className="h-full bg-[var(--color-primary)] w-[40%]"></div>
             </div>
          </div>
        </KPICard>
      </div>

      {/* Stickiness */}
      <div className="md:col-span-1 row-span-1">
        <KPICard 
          index={2}
          title="Stickiness (DAU/MAU)" 
          value="28%" 
          subtext="Daily Engagement Rate"
          type="growth"
        >
           <div className="flex gap-1 mt-4">
              {[...Array(10)].map((_, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 10 }}
                  animate={{ height: i < 3 ? 40 : 10 }} // Adjusted roughly for 28%
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className={`flex-1 rounded-sm ${i < 3 ? 'bg-white' : 'bg-neutral-800'}`}
                />
              ))}
           </div>
        </KPICard>
      </div>

      {/* Retention */}
      <div className="md:col-span-1 row-span-1">
         <KPICard 
          index={3}
          title="Retention & Churn" 
          value="5.5%" 
          subtext="Monthly Churn Rate"
          trend="▼ 0.1% (MoM)" 
          type="health"
        >
           <div className="flex justify-between items-end h-16 mt-2 gap-2">
             <div className="flex-1 bg-neutral-800 rounded-t-lg relative group-hover:bg-neutral-700 transition-colors h-[45%]">
                <span className="absolute -top-6 left-0 text-xs text-gray-500">D7: 45%</span>
             </div>
             <div className="flex-1 bg-neutral-800 rounded-t-lg relative group-hover:bg-neutral-700 transition-colors h-[28%]">
                 <span className="absolute -top-6 left-0 text-xs text-gray-500">D30: 28%</span>
             </div>
           </div>
        </KPICard>
      </div>

      {/* Ad Fill Rate */}
      <div className="md:col-span-1 row-span-1">
         <KPICard 
          index={4}
          title="Ad Fill Rate" 
          value="82%" 
          subtext="Live + VOD blended"
          type="money"
        >
           <div className="relative w-full h-2 bg-neutral-800 rounded-full overflow-hidden mt-8">
              <div className="absolute inset-0 bg-neutral-800"></div>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "82%" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute inset-y-0 left-0 bg-[var(--color-primary)]"
              />
           </div>
           <div className="flex justify-between mt-2 text-xs text-gray-500">
             <span>0%</span>
             <span>Target: 85%</span>
           </div>
        </KPICard>
      </div>

    </div>
  );
};
