import React from 'react';
import { Map, Target, Compass, Sparkles, Sun, ArrowRight } from 'lucide-react';

interface NETTherapyProps {
  setCurrentArticle?: (article: string) => void;
}

export function NETTherapy({ setCurrentArticle }: NETTherapyProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-fadeIn">
      
      {/* ===== HEADER ROW ===== */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-[#0c264d] text-3xl font-bold">
          Natural Environment Teaching (NET)
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
          <Sun size={40} strokeWidth={1.5} />
        </div>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          Natural Environment Teaching (NET) is a core NDBI methodology where therapists teach skills during natural play and everyday routines rather than at a sterile, clinical desk. It was developed to directly combat the biggest flaw of early ABA: the "generalization gap."<sup className="text-[#10b981] font-bold ml-0.5">1</sup>
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          In older models, a child might successfully learn to identify an apple on a flashcard in a clinic, but fail to recognize a real apple in the grocery store. NET solves this by teaching the skill exactly where and when it naturally occurs in the real world.<sup className="text-[#10b981] font-bold ml-0.5">1, 2</sup>
        </p>
      </div>

      {/* ===== THE 4 CORE PILLARS ===== */}
      <div className="bg-white p-6 rounded-md border-l-4 border-[#10b981] shadow-sm mb-8 mt-4">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b border-slate-200 pb-3">
          Core Pillars of NET
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* 1. Natural Settings */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3 text-sm uppercase tracking-wider">
              <div className="bg-[#d1fae5] text-[#10b981] p-1.5 rounded-full ring-2 ring-[#10b981]/40 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
              </div>
              1. Real-World Settings
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Learning takes place in the environments where the individual actually lives and plays—such as the living room floor, the playground, the kitchen, or the local grocery store.
            </p>
          </div>

          {/* 2. Learner-Directed */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3 text-sm uppercase tracking-wider">
              <div className="bg-[#e0f2fe] text-[#0A9DC4] p-1.5 rounded-full ring-2 ring-[#0A9DC4]/40 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <Compass size={18} />
              </div>
              2. Learner-Directed Focus
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              The practitioner does not force an agenda. Instead, they follow the learner's motivation, waiting for them to show interest in an item or activity, and then using that exact moment to teach a targeted skill.
            </p>
          </div>

          {/* 3. Functional Generalization */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3 text-sm uppercase tracking-wider">
              <div className="bg-[#ffe4e6] text-[#ff6b6b] p-1.5 rounded-full ring-2 ring-[#ff6b6b]/40 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <ArrowRight size={18} />
              </div>
              3. Seamless Generalization
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              By teaching a skill (like asking for a snack) in the actual kitchen with real food, the brain immediately maps the skill to its functional, real-world context, removing the need to "transfer" the skill later.
            </p>
          </div>

          {/* 4. Natural Reinforcement */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3 text-sm uppercase tracking-wider">
              <div className="bg-[#fef3c7] text-[#d97706] p-1.5 rounded-full ring-2 ring-[#ffd166]/60 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <Target size={18} />
              </div>
              4. Functional Reinforcers
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Like PRT, rewards are intrinsically tied to the activity. If the child communicates they want to be pushed on a swing, the reward is simply being pushed on the swing—not earning an arbitrary token.
            </p>
          </div>

        </div>
      </div>

   {/* ===== NET VS DTT (THE SHIFT) ===== */}
      <div className="bg-[#fffbeb] p-6 rounded-md border-l-4 border-[#ffd166] shadow-sm mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center gap-2">
          <Sparkles className="text-[#d97706]" size={24} />
          The Shift: NET vs. Traditional Table-Work
        </h2>
        
        <p className="text-sm text-gray-700 leading-relaxed mb-5">
          To truly understand why NET is affirming, it helps to contrast it directly with Discrete Trial Training (DTT), the highly rigid, repetitive style of early ABA that many autistic adults have criticized.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* DTT Card */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 border-t-4 border-t-[#0c264d] flex flex-col h-full">
            <h4 className="font-bold text-[#0c264d] mb-3 text-sm uppercase tracking-wider border-b border-slate-200 pb-2">
              Discrete Trial Training (DTT)
            </h4>
            <ul className="space-y-3 text-xs text-gray-700 flex-grow">
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 mt-0.5 text-[10px]">◆</span>
                <span><strong>Setting:</strong> Sitting in a chair at a clinic desk.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 mt-0.5 text-[10px]">◆</span>
                <span><strong>Pacing:</strong> Rapid, adult-directed trials using flashcards.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 mt-0.5 text-[10px]">◆</span>
                <span><strong>Motivation:</strong> Adult-chosen materials (often boring to the child).</span>
              </li>
            </ul>
          </div>

          {/* NET Card */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-[#10b981]/40 border-t-4 border-t-[#10b981] flex flex-col h-full">
            <h4 className="font-bold text-[#0c264d] mb-3 text-sm uppercase tracking-wider border-b border-slate-200 pb-2">
              Natural Environment Teaching (NET)
            </h4>
            <ul className="space-y-3 text-xs text-gray-700 flex-grow">
              <li className="flex items-start">
                <span className="text-[#10b981] mr-2 mt-0.5 text-[10px]">◆</span>
                <span><strong>Setting:</strong> Moving freely around a natural playroom or home.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#10b981] mr-2 mt-0.5 text-[10px]">◆</span>
                <span><strong>Pacing:</strong> Fluid, embedded into natural play rhythms.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#10b981] mr-2 mt-0.5 text-[10px]">◆</span>
                <span><strong>Motivation:</strong> Child-chosen toys and organic interests.</span>
              </li>
            </ul>
          </div>

        </div>
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
            <p>1. Sundberg, M. L., & Partington, J. W. (1998). <i>Teaching Language to Children with Autism or Other Developmental Disabilities</i>. Behavior Analysts, Inc.</p>
            <p>2. Stokes, T. F., & Baer, D. M. (1977). An implicit technology of generalization. <i>Journal of Applied Behavior Analysis</i>. https://doi.org/10.1901/jaba.1977.10-349</p>
          </div>
        </div>
      </div>

    </article>
  );
}