import React from 'react';
import { Baby, Heart, Home, Users, Sparkles, Activity } from 'lucide-react';

interface ESDMTherapyProps {
  setCurrentArticle?: (article: string) => void;
}

export function ESDMTherapy({ setCurrentArticle }: ESDMTherapyProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-fadeIn">
      
      {/* ===== HEADER ROW ===== */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-[#0c264d] text-3xl font-bold">
          Early Start Denver Model (ESDM)
        </h1>
        
        <button 
          onClick={() => setCurrentArticle?.('autism-aba-therapy')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shrink-0"
        >
          <span className="text-xl">←</span>
          Back to ABA & NDBIs
        </button>
      </div>

      {/* ===== INTRODUCTION ===== */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 mb-8 flow-root">
        <div className="float-right ml-6 mb-4 bg-white p-3 rounded-full shadow-sm border border-[#0A9DC4]/30 text-[#0A9DC4]">
          <Baby size={40} strokeWidth={1.5} />
        </div>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          The Early Start Denver Model (ESDM) is a comprehensive, naturalistic early intervention program designed specifically for toddlers and preschoolers (ages 12 to 48 months). Developed by Dr. Sally Rogers and Dr. Geraldine Dawson, it seamlessly blends behavioral principles from ABA with developmental and relationship-based sciences.<sup className="text-[#10b981] font-bold ml-0.5">1</sup>
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          Unlike older, rigid clinical models, ESDM happens entirely through play and daily routines. It places a massive emphasis on fostering positive emotions, joint attention, and deep social connections, recognizing that young children learn best when they are joyful, engaged, and playing with people they love.<sup className="text-[#10b981] font-bold ml-0.5">1, 2</sup>
        </p>
      </div>

      {/* ===== THE 4 CORE PILLARS ===== */}
      <div className="bg-white p-6 rounded-md border-l-4 border-[#ff6b6b] shadow-sm mb-8 mt-4">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b border-slate-200 pb-3">
          Core Pillars of ESDM
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* 1. Relationship-Based */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3 text-sm uppercase tracking-wider">
              <div className="bg-[#ffe4e6] text-[#ff6b6b] p-1.5 rounded-full ring-2 ring-[#ff6b6b]/40 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <Heart size={18} />
              </div>
              1. Relationship & Affect
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Therapy is entirely rooted in positive shared experiences. The goal is to build "joint attention" (sharing focus on an object or activity) through smiling, singing, and reciprocal play, rather than demanding compliance.
            </p>
          </div>

          {/* 2. Embedded in Routines */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3 text-sm uppercase tracking-wider">
              <div className="bg-[#e0f2fe] text-[#0A9DC4] p-1.5 rounded-full ring-2 ring-[#0A9DC4]/40 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <Home size={18} />
              </div>
              2. Embedded in Daily Routines
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Skills are taught exactly where they happen in real life. Communication and motor goals are woven seamlessly into naturally occurring daily events like bath time, eating meals, getting dressed, and playing on the floor.
            </p>
          </div>

          {/* 3. Parent Coaching */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3 text-sm uppercase tracking-wider">
              <div className="bg-[#fef3c7] text-[#d97706] p-1.5 rounded-full ring-2 ring-[#ffd166]/60 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <Users size={18} />
              </div>
              3. Deep Parent Coaching
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Parents are viewed as the most important therapists. ESDM heavily prioritizes empowering caregivers, teaching them the strategies so that naturalistic intervention happens consistently across all waking hours, not just when a professional is present.
            </p>
          </div>

          {/* 4. Interdisciplinary */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3 text-sm uppercase tracking-wider">
              <div className="bg-[#d1fae5] text-[#10b981] p-1.5 rounded-full ring-2 ring-[#10b981]/40 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <Activity size={18} />
              </div>
              4. Interdisciplinary Goals
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Unlike strict behavior-only models, an ESDM curriculum comprehensively integrates goals from Speech-Language Pathology (SLP) and Occupational Therapy (OT) to support whole-child development across motor, sensory, and language domains.
            </p>
          </div>

        </div>
      </div>

      {/* ===== WHY IT IS AFFIRMING ===== */}
      <div className="bg-[#fffbeb] p-6 rounded-md border-l-4 border-[#ffd166] shadow-sm mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center gap-2">
          <Sparkles className="text-[#d97706]" size={24} />
          Why ESDM Aligns with Affirming Care
        </h2>
        <ul className="space-y-3 text-sm text-gray-700 mt-4">
          <li className="flex items-start">
            <span className="text-[#d97706] mr-3 mt-1 text-[10px]">◆</span>
            <span><strong>Zero Table-Time:</strong> Young toddlers are not biologically meant to sit at tables working on flashcards. ESDM respects developmental readiness by staying on the floor and moving with the child.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#d97706] mr-3 mt-1 text-[10px]">◆</span>
            <span><strong>Intrinsic Motivation:</strong> By embedding goals into play routines the child already loves, learning feels like a game, drastically reducing the frustration and burnout often associated with early intensive therapies.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#d97706] mr-3 mt-1 text-[10px]">◆</span>
            <span><strong>Preserves Autonomy:</strong> The practitioner follows the child's lead, ensuring the toddler has agency over the toys, pacing, and activities they engage with throughout the session.</span>
          </li>
        </ul>
      </div>

      {/* --- BOTTOM BACK BUTTON --- */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('autism-aba-therapy')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-normal text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan whitespace-nowrap shrink-0"
        >
          <span className="text-lg">←</span>Back to ABA & NDBIs
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Rogers, S. J., & Dawson, G. (2010). <i>Early Start Denver Model for Young Children with Autism: Promoting Language, Learning, and Engagement</i>. Guilford Press.</p>
            <p>2. Dawson, G., et al. (2010). Randomized, Controlled Trial of an Intervention for Toddlers with Autism: The Early Start Denver Model. <i>Pediatrics</i>. https://doi.org/10.1542/peds.2009-0958</p>
          </div>
        </div>
      </div>

    </article>
  );
}