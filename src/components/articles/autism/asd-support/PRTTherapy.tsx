import React from 'react';
import { Target, MessageCircle, Brain, Layers, Play, Sparkles } from 'lucide-react';

interface PRTTherapyProps {
  setCurrentArticle?: (article: string) => void;
}

export function PRTTherapy({ setCurrentArticle }: PRTTherapyProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-fadeIn">
      
      {/* ===== HEADER ROW ===== */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-[#0c264d] text-3xl font-bold">
          Pivotal Response Treatment (PRT)
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
          <Play size={40} strokeWidth={1.5} />
        </div>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          Pivotal Response Treatment (PRT) is a naturalistic, play-based intervention that falls under the NDBI (Naturalistic Developmental Behavioral Interventions) umbrella. Originally developed by Dr. Robert Koegel and Dr. Lynn Kern Koegel at UC Santa Barbara, PRT represents a major evolution from early, highly rigid forms of ABA.<sup className="text-[#10b981] font-bold ml-0.5">1</sup>
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          Instead of targeting dozens of individual, isolated skills (like pointing at a card at a desk), PRT focuses on a few <strong>"pivotal"</strong> areas of a child's development. The theory is that by targeting these core foundational areas, widespread collateral improvements will naturally occur in other areas of sociability, communication, and behavior.<sup className="text-[#10b981] font-bold ml-0.5">1, 2</sup>
        </p>
      </div>

      {/* ===== THE 4 PIVOTAL AREAS ===== */}
      <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-8 mt-4">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b border-slate-200 pb-3">
          The 4 Pivotal Areas of Development
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* 1. Motivation */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3 text-sm uppercase tracking-wider">
              <div className="bg-[#ffe4e6] text-[#ff6b6b] p-1.5 rounded-full ring-2 ring-[#ff6b6b]/40 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <Target size={18} />
              </div>
              1. Motivation
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed mb-3">
              Motivation is the primary engine of PRT. Practitioners use the child's natural special interests to drive learning, offering choices and rewarding even <em>attempts</em> at a skill, rather than requiring perfection.
            </p>
          </div>

          {/* 2. Initiation */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3 text-sm uppercase tracking-wider">
              <div className="bg-[#e0f2fe] text-[#0A9DC4] p-1.5 rounded-full ring-2 ring-[#0A9DC4]/40 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <MessageCircle size={18} />
              </div>
              2. Initiation
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed mb-3">
              Teaching the individual how to spontaneously initiate social interactions, ask questions, or request help on their own terms, rather than waiting for a therapist to prompt them.
            </p>
          </div>

          {/* 3. Self-Management */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3 text-sm uppercase tracking-wider">
              <div className="bg-[#fef3c7] text-[#d97706] p-1.5 rounded-full ring-2 ring-[#ffd166]/60 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <Brain size={18} />
              </div>
              3. Self-Management
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed mb-3">
              Helping the individual learn to evaluate and regulate their own behavior and sensory needs independently, increasing their autonomy and decreasing reliance on adults.
            </p>
          </div>

          {/* 4. Multiple Cues */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3 text-sm uppercase tracking-wider">
              <div className="bg-[#d1fae5] text-[#10b981] p-1.5 rounded-full ring-2 ring-[#10b981]/40 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <Layers size={18} />
              </div>
              4. Responding to Multiple Cues
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed mb-3">
              Autistic individuals often focus on a single detail (e.g., the color of a shoe rather than the whole shoe). This area helps them process multiple pieces of information in their environment simultaneously.
            </p>
          </div>

        </div>
      </div>

      {/* ===== NATURAL VS ARBITRARY REINFORCEMENT ===== */}
      <div className="bg-white p-6 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center gap-2">
          <Sparkles className="text-[#2abcd4]" size={24} /> 
          The Power of Natural Reinforcers
        </h2>
        
        <p className="text-sm text-gray-700 leading-relaxed mb-5">
          One of the most affirming aspects of PRT is its strict reliance on <strong>natural reinforcers</strong>, which directly contrasts with older compliance-based models. 
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 p-4 rounded-lg border border-red-100">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Arbitrary Reinforcement (Older Models)</h4>
            <p className="text-xs text-gray-700 leading-relaxed mb-3">
              A child is asked to point to a picture of a train on a flashcard. If they do it correctly, they are rewarded with an M&M or a sticker. The reward has nothing to do with the task, making it harder for the child to generalize the skill outside of therapy.
            </p>
          </div>

          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/30">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Natural Reinforcement (PRT)</h4>
            <p className="text-xs text-gray-700 leading-relaxed mb-3">
              The child is playing with toy trains (their natural interest). The therapist pauses the train. The child attempts to say "go" or signs for "more." The direct reward is that <em>the train immediately continues moving.</em> The reward is intrinsically tied to the communication.
            </p>
          </div>
        </div>
      </div>

      {/* ===== WHY PRT IS NEURODIVERSITY-AFFIRMING ===== */}
      <div className="bg-[#fffbeb] p-6 rounded-md border-l-4 border-[#ffd166] shadow-sm mb-8">
        <h3 className="font-bold text-[#0c264d] mb-4 text-lg">Why PRT Aligns with Affirming Care</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-start">
            <span className="text-[#d97706] mr-3 mt-1 text-[10px]">◆</span>
            <span><strong>Child-Led:</strong> Therapy happens on the floor, following what the child genuinely wants to play with, rather than forcing them to sit at a table and comply with adult-chosen tasks.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#d97706] mr-3 mt-1 text-[10px]">◆</span>
            <span><strong>Rewards Attempts:</strong> PRT practitioners reinforce <em>any</em> clear attempt at a goal. This prevents frustration and builds immense self-confidence.</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#d97706] mr-3 mt-1 text-[10px]">◆</span>
            <span><strong>Generalization:</strong> Because PRT happens in the natural environment (living rooms, parks, grocery stores), families can seamlessly weave it into their daily lives without it feeling like "therapy time."</span>
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
            <p>1. Koegel, R. L., & Koegel, L. K. (2006). <i>Pivotal Response Treatments for Autism: Communication, Social, & Academic Development</i>. Brookes Publishing.</p>
            <p>2. Schreibman, L., et al. (2015). Naturalistic Developmental Behavioral Interventions: Empirically Validated Treatments for Autism Spectrum Disorder. <i>Journal of Autism and Developmental Disorders</i>. https://doi.org/10.1007/s10803-015-2407-8</p>
          </div>
        </div>
      </div>

    </article>
  );
}