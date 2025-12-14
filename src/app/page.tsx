import { Deck } from '@/components/Deck';
import { Slide } from '@/components/Slide';
import { ReactNode } from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';
import { PillarsSlide } from '@/components/PillarsSlide';
import { KPIDashboard } from '@/components/KPIDashboard';
import { FlywheelSlide } from '@/components/FlywheelSlide';
import { SportsTitleSlide } from '@/components/SportsTitleSlide';
import { SportsPortfolioSlide } from '@/components/SportsPortfolioSlide';
import { SportsStrategySlide } from '@/components/SportsStrategySlide';
import { SportsFinancialsSlide } from '@/components/SportsFinancialsSlide';
import { EsportsSlide } from '@/components/EsportsSlide';
import { FightLeagueSlide } from '@/components/FightLeagueSlide';
import { AdvertisingTitleSlide } from '@/components/AdvertisingTitleSlide';
import { AdvertisingSlide } from '@/components/AdvertisingSlide';
import { SponsorPackagesSlide } from '@/components/SponsorPackagesSlide';
import { MeasurementSlide } from '@/components/MeasurementSlide';
import { EntertainmentTitleSlide } from '@/components/EntertainmentTitleSlide';
import { FlagshipOriginalSlide } from '@/components/FlagshipOriginalSlide';
import { RegionalRealitySlide } from '@/components/RegionalRealitySlide';
import { SliceOfLifeSlide } from '@/components/SliceOfLifeSlide';
import { SpecialsTitleSlide } from '@/components/SpecialsTitleSlide';
import { StandUpSpecialsSlide } from '@/components/StandUpSpecialsSlide';
import { MusicStrategySlide } from '@/components/MusicStrategySlide';
import { CinemaTitleSlide } from '@/components/CinemaTitleSlide';
import { PrestigeCinemaSlide } from '@/components/PrestigeCinemaSlide';
import { MovieWindowingSlide } from '@/components/MovieWindowingSlide';
import { KidsTitleSlide } from '@/components/KidsTitleSlide';
import { KidsContentSlide } from '@/components/KidsContentSlide';
import { MarketingOpsTitleSlide } from '@/components/MarketingOpsTitleSlide';
import { TertiaryMarketingSlide } from '@/components/TertiaryMarketingSlide';
import { ExpenseRoadmapSlide } from '@/components/ExpenseRoadmapSlide';
import { RevenueRoadmapSlide } from '@/components/RevenueRoadmapSlide';
import { PricingTiersSlide } from '@/components/PricingTiersSlide';
import { TeamStructureSlide } from '@/components/TeamStructureSlide';
import { TimelineRiskSlide } from '@/components/TimelineRiskSlide';

const Card = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm p-8 md:p-12 rounded-3xl w-full h-full shadow-2xl relative overflow-hidden flex flex-col justify-center ${className}`}>
    {/* Decorative gradient blob */}
    <div className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--color-primary)] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
    <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
    
    <div className="relative z-10 w-full h-full flex flex-col">
      {children}
    </div>
  </div>
);

const Highlight = ({ children }: { children: ReactNode }) => (
  <span className="text-[var(--color-primary)] font-semibold">{children}</span>
);

export default function Home() {
  return (
    <Deck>
      {/* Slide 1: Title */}
      <Slide>
        <div className="relative z-10 text-center space-y-8">
          <div className="inline-block px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/80 text-xs font-mono tracking-widest text-gray-400 mb-4">
            CONFIDENTIAL • INTERNAL
          </div>
          
          <div className="flex justify-center mb-4">
        <Image
              src={getAssetPath("/DishHome GO_White.png")}
              alt="DHGO Logo" 
              width={600} 
              height={180} 
              className="object-contain"
          priority
        />
          </div>
          
          <div className="h-2 w-32 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          
          <h2 className="text-4xl font-light text-gray-300 tracking-tight">
            The Future of <br className="hidden md:block" />
            <span className="font-bold text-white">Nepali Streaming</span>
          </h2>
          
          <p className="text-gray-500 font-mono text-sm tracking-wide mt-12">
            2026 STRATEGIC ROADMAP • CONTENT PILLARS • FINANCIALS
          </p>
        </div>
      </Slide>

      {/* Slide 2: Executive Summary */}
      <Slide>
        <Card>
          <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
            <h2 className="text-5xl font-bold tracking-tight">Executive Summary</h2>
            <span className="text-gray-500 font-mono text-xl">02</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
            <div className="flex flex-col justify-center space-y-12">
              <div className="bg-neutral-900/40 p-8 rounded-3xl border border-neutral-800/50">
                <h3 className="text-sm font-mono text-[var(--color-primary)] uppercase tracking-wider mb-4">Core Strategy</h3>
                <p className="text-4xl font-light leading-tight">
                  <span className="font-bold text-white">Sports</span> acquires users, <br/>
                  <span className="font-bold text-white">Entertainment</span> retains them.
                </p>
              </div>
              
              <div className="pl-4 border-l-2 border-neutral-800">
                <h3 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-6">5 Strategic Pillars</h3>
                <ul className="text-2xl text-gray-300 space-y-4">
                  <li className="flex items-center gap-4"><div className="w-2 h-2 bg-white rounded-full"/> Sports</li>
                  <li className="flex items-center gap-4"><div className="w-2 h-2 bg-gray-500 rounded-full"/> Entertainment</li>
                  <li className="flex items-center gap-4"><div className="w-2 h-2 bg-gray-600 rounded-full"/> Specials & Events</li>
                  <li className="flex items-center gap-4"><div className="w-2 h-2 bg-gray-700 rounded-full"/> Cinema</li>
                  <li className="flex items-center gap-4"><div className="w-2 h-2 bg-gray-800 rounded-full"/> Kids</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-8 bg-black/20 p-8 rounded-3xl border border-neutral-800/50 h-full">
               <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-sm font-mono text-[var(--color-primary)] uppercase tracking-wider mb-8">Monetization Mix</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between text-xl mb-2 text-gray-300"><span>Subscriptions</span> <span className="font-bold text-white">45%</span></div>
                    <div className="h-4 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-white w-[45%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xl mb-2 text-gray-300"><span>Ads</span> <span className="font-bold text-white">35%</span></div>
                    <div className="h-4 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-400 w-[35%]"></div>
                    </div>
                  </div>
                   <div>
                    <div className="flex justify-between text-xl mb-2 text-gray-300"><span>TVOD / PPV</span> <span className="font-bold text-white">20%</span></div>
                    <div className="h-4 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--color-primary)] w-[20%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-neutral-800">
                <h3 className="text-sm font-mono text-[var(--color-primary)] uppercase tracking-wider mb-2">Break-even Target</h3>
                <div className="text-6xl font-bold text-white tracking-tighter">Q4 2026</div>
                <div className="text-lg text-gray-500 mt-2">Post-flagship launch + renewals</div>
              </div>
            </div>
          </div>
        </Card>
      </Slide>

      {/* Slide 3: The Problem */}
      <Slide>
        <Card>
           <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
            <h2 className="text-5xl font-bold tracking-tight text-white">The Problem</h2>
            <span className="text-gray-500 font-mono text-xl">03</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[2fr_1fr] gap-6 h-full">
            
            {/* Problem 1 */}
            <div className="group relative p-10 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-red-900/50 transition-all duration-500 overflow-hidden flex flex-col justify-between">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
               </div>
               
               <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20 group-hover:border-red-500 transition-colors duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
               </div>
               
               <div>
                 <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">Event-Driven Churn</h3>
                 <p className="text-xl text-gray-400 leading-relaxed">
                   Nepal's OTT market suffers from "install-watch-delete" behavior. Users flood in for cricket, then leave immediately after.
                 </p>
               </div>
               
               <div className="h-1 w-full bg-neutral-800 mt-8 rounded-full overflow-hidden">
                 <div className="h-full w-3/4 bg-red-500/30"></div>
               </div>
            </div>
            
            {/* Problem 2 */}
            <div className="group relative p-10 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-red-900/50 transition-all duration-500 overflow-hidden flex flex-col justify-between">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
               </div>

               <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20 group-hover:border-red-500 transition-colors duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4M4 12L12 4M4 12L12 20" opacity="0.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
               </div>
               
               <div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">The "Empty" Platform</h3>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    Between tentpole events, the content library feels dormant. No compelling reason for daily login creates a perception of low value.
                  </p>
               </div>

               <div className="flex gap-2 mt-8">
                 <div className="h-1 flex-1 bg-red-500/30 rounded-full"></div>
                 <div className="h-1 flex-1 bg-neutral-800 rounded-full"></div>
                 <div className="h-1 flex-1 bg-neutral-800 rounded-full"></div>
               </div>
            </div>

            {/* Critical Need - Spans full width */}
            <div className="md:col-span-2 relative p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors flex items-center gap-12 overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               
               <div className="flex-shrink-0 w-24 h-24 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 flex items-center justify-center shadow-[0_0_40px_-10px_var(--color-primary)] group-hover:scale-110 transition-transform duration-500">
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
               </div>
               
               <div className="relative z-10">
                  <div className="text-[var(--color-primary)] font-mono text-sm uppercase tracking-widest mb-2">The Solution</div>
                  <h3 className="text-4xl font-bold text-white mb-2">Build <span className="text-[var(--color-primary)] underline decoration-2 underline-offset-8 decoration-white/20">Habit</span>, Not Just Hype</h3>
                  <p className="text-xl text-gray-400">Transform from an event-utility to a daily entertainment destination.</p>
               </div>
               
               <div className="ml-auto hidden md:block opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-9xl font-black text-white/5 tracking-tighter">GOAL</span>
               </div>
            </div>

          </div>
        </Card>
      </Slide>

      {/* Slide 4: The DHGO Opportunity */}
      <Slide>
        <Card>
           <div className="flex justify-between items-baseline mb-12 border-b border-neutral-800 pb-8 shrink-0">
            <h2 className="text-5xl font-bold tracking-tight">The DHGO Opportunity</h2>
            <span className="text-gray-500 font-mono text-xl">04</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full items-stretch">
             {/* Step 1 */}
             <div className="relative h-full">
                <div className="absolute -top-6 -left-6 text-8xl font-black text-neutral-800 z-0">1</div>
                <div className="relative z-10 bg-neutral-900 border border-neutral-800 p-8 md:p-10 rounded-3xl h-full flex flex-col justify-center hover:border-white/20 transition-colors">
                  <div className="text-[var(--color-primary)] font-mono text-sm uppercase tracking-widest mb-6">Acquisition</div>
                  <h3 className="text-4xl font-bold mb-6">Win Installs</h3>
                  <p className="text-xl text-gray-400 leading-relaxed">Leverage <span className="text-white font-semibold">Sports</span> events to drive user acquisition at massive scale.</p>
                </div>
             </div>

             {/* Step 2 */}
             <div className="relative h-full">
                <div className="absolute -top-6 -left-6 text-8xl font-black text-neutral-800 z-0">2</div>
                <div className="relative z-10 bg-neutral-900 border border-neutral-800 p-8 md:p-10 rounded-3xl h-full flex flex-col justify-center hover:border-white/20 transition-colors">
                  <div className="text-[var(--color-primary)] font-mono text-sm uppercase tracking-widest mb-6">Retention (LTV)</div>
                  <h3 className="text-4xl font-bold mb-6">Reduce Churn</h3>
                  <p className="text-xl text-gray-400 leading-relaxed">Deploy weekly <span className="text-white font-semibold">Entertainment + Kids</span> content to keep users engaged daily.</p>
                </div>
             </div>

             {/* Step 3 */}
             <div className="relative h-full">
                <div className="absolute -top-6 -left-6 text-8xl font-black text-neutral-800 z-0">3</div>
                <div className="relative z-10 bg-neutral-900 border border-neutral-800 p-8 md:p-10 rounded-3xl h-full flex flex-col justify-center hover:border-white/20 transition-colors">
                  <div className="text-[var(--color-primary)] font-mono text-sm uppercase tracking-widest mb-6">Revenue</div>
                  <h3 className="text-4xl font-bold mb-6">Cash Spikes</h3>
                  <p className="text-xl text-gray-400 leading-relaxed">Utilize <span className="text-white font-semibold">TVOD</span> (Fight League + Movies) for high-margin revenue events.</p>
                </div>
             </div>
          </div>

          <div className="mt-12 text-center shrink-0">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10">
              <span className="w-3 h-3 bg-[var(--color-primary)] rounded-full animate-pulse"></span>
              <span className="text-2xl font-light">End State: <span className="font-bold text-white">Self-sustaining ecosystem by Year 2</span></span>
            </div>
          </div>
        </Card>
      </Slide>

      {/* Slide 5: Brand Evolution */}
      <Slide className="relative">
        {/* Full Page Red Background - Behind Everything */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={getAssetPath("/red-background.png")}
            alt="Red Background" 
            fill
            className="object-cover opacity-40"
          />
        </div>
        
        <Card className="relative z-10 bg-neutral-900/40 backdrop-blur-md">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-baseline mb-12 border-b border-neutral-800 pb-8 shrink-0">
              <h2 className="text-5xl font-bold tracking-tight">Brand Evolution</h2>
              <span className="text-gray-500 font-mono text-xl">05</span>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="flex flex-col md:flex-row items-center gap-16 justify-center py-8">
                {/* Current Brand */}
                <div className="flex flex-col items-center gap-8 group">
                  <div className="flex items-center justify-center relative">
                    <div className="text-white/60 font-mono text-sm absolute -top-6 right-0">CURRENT</div>
                    {/* DishHome Logo - No Background */}
                    <Image 
                      src={getAssetPath("/DishHome GO_White.png")}
                      alt="DishHome Go Logo" 
                      width={280} 
                      height={84} 
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-medium text-gray-400 group-hover:text-gray-300 transition-colors">Dishhome Go</h3>
                    <p className="text-lg text-gray-500 mt-2">Implies ISP Tether</p>
                  </div>
                </div>

              {/* Arrow Divider */}
              <div className="flex flex-col items-center gap-4 text-[var(--color-primary)]">
                <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></div>
                <span className="text-sm font-mono uppercase tracking-widest">Evolved</span>
                <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent"></div>
              </div>

              {/* Proposed Brand */}
              <div className="flex flex-col items-center gap-8">
                <div className="w-80 h-52 bg-[var(--color-primary)]/10 rounded-3xl border border-[var(--color-primary)] relative shadow-[0_0_80px_-20px_var(--color-primary)] overflow-hidden">
                  <div className="text-[var(--color-primary)] font-mono text-xs absolute top-2 right-2 z-10">PROPOSED</div>
                  {/* DHGO Logo - Fills container */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={getAssetPath("/dh-go-logo.png")}
                      alt="DHGO Logo" 
                      width={800} 
                      height={320} 
                      className="object-contain w-full h-full scale-[1.35]"
                    />
                  </div>
                  <div className="absolute bottom-2 text-xs font-mono text-white/50 bg-black/30 px-3 py-1 rounded-full border border-white/10 z-10">All New UI/UX</div>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white">DHGO</h3>
                  <p className="text-lg text-[var(--color-primary)] mt-2">Platform Agnostic • Tech-First</p>
                </div>
              </div>
            </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                <div className="bg-neutral-900/60 backdrop-blur-sm p-8 rounded-2xl border border-neutral-800">
                  <div className="text-red-400 text-sm font-bold mb-3 uppercase tracking-wide">Problem</div>
                  <p className="text-xl text-gray-400">"Dishhome Go" sounds like a cable extension, limiting the market to existing subscribers.</p>
                </div>
                <div className="bg-neutral-900/60 backdrop-blur-sm p-8 rounded-2xl border border-neutral-800">
                  <div className="text-green-400 text-sm font-bold mb-3 uppercase tracking-wide">Solution</div>
                  <p className="text-xl text-gray-400">DHGO is for everyone (Worldlink, Vianet, CG Net). It's a standalone tech-first OTT product.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Slide>

      {/* Slide 6: The 5-Pillar Ecosystem */}
      <Slide>
        <div className="w-full h-full flex flex-col px-8 py-8">
           <div className="flex justify-between items-baseline mb-8">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-2">The Ecosystem</h2>
              <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">5 Pillars of Content Dominance</p>
            </div>
            <span className="text-gray-500 font-mono text-sm">06</span>
          </div>
          
          <div className="flex-1 min-h-0">
            <PillarsSlide />
          </div>
        </div>
      </Slide>

      {/* Slide 7: 2026 KPI Dashboard */}
      <Slide>
        <div className="w-full h-full flex flex-col px-8 py-8">
           <div className="flex justify-between items-baseline mb-8">
            <div>
               <h2 className="text-4xl font-bold tracking-tight mb-2">2026 Success Metrics</h2>
               <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">KPI Dashboard • Year-End Targets</p>
            </div>
            <span className="text-gray-500 font-mono text-sm">07</span>
          </div>
          
          <div className="flex-1 min-h-0">
            <KPIDashboard />
          </div>
        </div>
      </Slide>

      {/* Slide 8: The Flywheel */}
      <Slide>
        <div className="w-full h-full flex flex-col px-8 py-8">
           <div className="flex justify-between items-baseline mb-8">
            <div>
               <h2 className="text-4xl font-bold tracking-tight mb-2">The Flywheel Effect</h2>
               <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">Self-Sustaining Growth Loop</p>
            </div>
            <span className="text-gray-500 font-mono text-sm">08</span>
          </div>
          
          <div className="flex-1 min-h-0 relative">
            <FlywheelSlide />
          </div>
        </div>
      </Slide>

      {/* Slide 9: Sports Title */}
      <Slide className="!p-0 !max-w-none">
        <SportsTitleSlide />
      </Slide>

      {/* Slide 10: Sports Portfolio */}
      <Slide>
        <Card>
          <div className="w-full h-full">
            <SportsPortfolioSlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 11: Sports Strategy & Cadence */}
      <Slide>
        <Card>
           <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
            <div>
               <h2 className="text-4xl font-bold tracking-tight mb-2">Sports Strategy</h2>
               <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">Moments & Habits • The Playbook</p>
            </div>
            <span className="text-gray-500 font-mono text-sm">11</span>
          </div>
          
          <div className="flex-1 min-h-0">
            <SportsStrategySlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 12: Sports Financials & Deep Dive */}
      <Slide>
        <Card>
           <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
            <div>
               <h2 className="text-4xl font-bold tracking-tight mb-2">Sports Economics</h2>
               <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">ROI Analysis • P&L Breakdown</p>
            </div>
            <span className="text-gray-500 font-mono text-sm">12</span>
          </div>
          
          <div className="flex-1 min-h-0">
            <SportsFinancialsSlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 13: Esports Ecosystem */}
      <Slide>
        <Card>
           <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
            <div>
               <h2 className="text-4xl font-bold tracking-tight mb-2">Niche Vertical: Esports</h2>
               <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">Gen Z Acquisition • Low Cost, High Engagement</p>
            </div>
            <span className="text-gray-500 font-mono text-sm">13</span>
          </div>
          
          <div className="flex-1 min-h-0">
            <EsportsSlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 14: The Fight League */}
      <Slide>
        <Card>
           <div className="flex justify-between items-baseline mb-8 border-b border-neutral-800 pb-6 shrink-0">
            <div>
               <h2 className="text-4xl font-bold tracking-tight mb-2">Niche Vertical: Combat</h2>
               <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">Owned IP • High Margin TVOD</p>
            </div>
            <span className="text-gray-500 font-mono text-sm">14</span>
          </div>
          
          <div className="flex-1 min-h-0">
            <FightLeagueSlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 15: Advertising Title */}
      <Slide className="!p-0 !max-w-none">
        <AdvertisingTitleSlide />
      </Slide>

      {/* Slide 16: Ad Inventory - DHGO Ads */}
      <Slide>
        <Card>
          <AdvertisingSlide 
            title="DHGO Ad Inventory"
            subtitle="Where Brands Appear"
            index="16"
            items={[
              "Live Player Inventory",
              "VOD Player Inventory",
              "Home Screen Inventory",
              "Content Detail Page",
              "Browse / Search",
              "Notifications / CRM"
            ]}
            placeholderText="DHGO UI Mockup"
            overlayText="Ad Placement Example"
            alignment="left"
          />
        </Card>
      </Slide>

      {/* Slide 17: Ad Inventory - Live Match */}
      <Slide>
        <Card>
          <AdvertisingSlide 
            title="Live Match Anatomy"
            subtitle="In-Stream Monetization"
            index="17"
            items={[
              "Pre-roll before stream",
              "Mid-roll (Natural breaks)",
              "Squeeze-back Stings",
              "Persistent Score Bug",
              "Branded Segments (Toss/MVP)",
              "Highlight Package Sponsor"
            ]}
            placeholderText="Live Match Player"
            overlayText="Live Stream Ad Assets"
            alignment="right"
          />
        </Card>
      </Slide>

      {/* Slide 18: Ad Inventory - VOD & Originals */}
      <Slide>
        <Card>
          <AdvertisingSlide 
            title="VOD & Originals"
            subtitle="Series & Movie Inventory"
            index="18"
            items={[
              "Pre-roll on Episodes",
              "Mid-roll (Premium)",
              "Post-roll CTA (Upgrade/Next)",
              "Next Episode Sponsor Card",
              "Sponsored Trailer Slot"
            ]}
            placeholderText="VOD Interface"
            overlayText="VOD Ad Placements"
            alignment="left"
          />
        </Card>
      </Slide>

      {/* Slide 19: Ad Inventory - Discovery */}
      <Slide>
        <Card>
          <AdvertisingSlide 
            title="Home & Discovery"
            subtitle="App Surface Opportunities"
            index="19"
            items={[
              "Home Hero Takeover",
              "Sponsored 'Trending' Row",
              "Sponsored Carousel Tile",
              "Branded Collection Pages",
              "Search Keyword Sponsorship"
            ]}
            placeholderText="Home Screen"
            overlayText="App Discovery Ads"
            alignment="right"
          />
        </Card>
      </Slide>

      {/* Slide 20: Sponsor Packages */}
      <Slide>
        <Card>
          <div className="w-full h-full">
            <SponsorPackagesSlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 21: Measurement & Reporting */}
      <Slide>
        <Card>
          <div className="w-full h-full">
            <MeasurementSlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 22: Entertainment Title */}
      <Slide className="!p-0 !max-w-none">
        <EntertainmentTitleSlide />
      </Slide>

      {/* Slide 23: Flagship Original */}
      <Slide>
        <Card>
          <div className="w-full h-full">
            <FlagshipOriginalSlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 24: Regional + Reality */}
      <Slide>
        <Card>
          <div className="w-full h-full">
            <RegionalRealitySlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 25: Slice of Life */}
      <Slide>
        <Card>
          <div className="w-full h-full">
            <SliceOfLifeSlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 28: Specials Title */}
      <Slide className="!p-0 !max-w-none">
        <SpecialsTitleSlide />
      </Slide>

      {/* Slide 29: Stand-Up Specials */}
      <Slide>
        <Card>
          <div className="w-full h-full">
            <StandUpSpecialsSlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 30: Music Strategy */}
      <Slide>
        <Card>
          <div className="w-full h-full">
            <MusicStrategySlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 31: Cinema Title */}
      <Slide className="!p-0 !max-w-none">
        <CinemaTitleSlide />
      </Slide>

      {/* Slide 32: Prestige Cinema */}
      <Slide>
        <Card className="!p-0">
          <div className="w-full h-full">
            <PrestigeCinemaSlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 33: Movie Windowing */}
      <Slide>
        <Card>
          <div className="w-full h-full">
            <MovieWindowingSlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 34: Kids Title */}
      <Slide className="!p-0 !max-w-none">
        <KidsTitleSlide />
      </Slide>

      {/* Slide 35: DHGO Junior */}
      <Slide>
        <Card>
          <div className="w-full h-full">
            <KidsContentSlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 36: Marketing & Ops Title */}
      <Slide className="!p-0 !max-w-none">
        <MarketingOpsTitleSlide />
      </Slide>

      {/* Slide 37: Tertiary Marketing */}
      <Slide>
        <Card>
          <div className="w-full h-full">
            <TertiaryMarketingSlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 38: Expense Roadmap */}
      <Slide>
        <Card>
          <div className="w-full h-full">
            <ExpenseRoadmapSlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 39: Revenue Roadmap */}
      <Slide>
        <Card>
          <div className="w-full h-full">
            <RevenueRoadmapSlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 40: Pricing Tiers */}
      <Slide>
        <Card>
          <div className="w-full h-full">
            <PricingTiersSlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 41: Team Structure */}
      <Slide>
        <Card>
          <div className="w-full h-full">
            <TeamStructureSlide />
          </div>
        </Card>
      </Slide>

      {/* Slide 42: Timeline & Risk */}
      <Slide>
        <Card>
          <div className="w-full h-full">
            <TimelineRiskSlide />
    </div>
        </Card>
      </Slide>
    </Deck>
  );
}
