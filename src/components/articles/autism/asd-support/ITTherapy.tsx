import React from 'react';
import { MessageCircle, Eye, HandHeart, Gift, Sparkles, MousePointerClick } from 'lucide-react';

interface ITTherapyProps {
  setCurrentArticle?: (article: string) => void;
}

export function ITTherapy({ setCurrentArticle }: ITTherapyProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-fadeIn">
      
      {/* ===== HEADER ROW ===== */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-[#0c264d] text-3xl font-bold">
          Incidental Teaching (IT)
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
          <HandHeart size={40} strokeWidth={1.5} />
        </div>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          Incidental Teaching (IT) is one of the earliest forms of naturalistic intervention, originally developed in the 1970s by Betty Hart and Todd Risley to help children develop spontaneous language. It operates on a very simple but powerful premise: learning happens best when the child makes the first move.<sup className="text-[#10b981] font-bold ml-0.5">1</sup>
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          Instead of sitting a child down and telling them what to do, the practitioner creates a rich, engaging environment and simply <em>waits</em>. When the child shows interest in something, the practitioner uses that highly motivated moment as an "incidental" opportunity to teach or expand a communication skill.<sup className="text-[#10b981] font-bold ml-0.5">2</sup>
        </p>
      </div>

      {/* ===== THE 4 STEPS OF IT ===== */}
      <div className="bg-white p-6 rounded-md border-l-4 border-[#ff6b6b] shadow-sm mb-8 mt-4">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b border-slate-200 pb-3">
          The 4 Steps of Incidental Teaching
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Step 1 */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3 text-sm uppercase tracking-wider">
              <div className="bg-[#ffe4e6] text-[#ff6b6b] p-1.5 rounded-full ring-2 ring-[#ff6b6b]/40 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <Eye size={18} />
              </div>
              1. Arrange the Environment
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              The practitioner sets up the room with highly preferred toys and activities. Often, items are placed in view but slightly out of reach (like a favorite train in a clear bin) to naturally encourage the child to ask for help.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3 text-sm uppercase tracking-wider">
              <div className="bg-[#e0f2fe] text-[#0A9DC4] p-1.5 rounded-full ring-2 ring-[#0A9DC4]/40 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <MousePointerClick size={18} />
              </div>
              2. Wait for Initiation
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              The adult steps back and waits. The teaching moment does not begin until the child initiates an interaction—this could be a glance, reaching for the bin, pointing, or handing the bin to the adult.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3 text-sm uppercase tracking-wider">
              <div className="bg-[#fef3c7] text-[#d97706] p-1.5 rounded-full ring-2 ring-[#ffd166]/60 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <MessageCircle size={18} />
              </div>
              3. Prompt for Elaboration
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Once the child initiates, the adult asks for a slightly more elaborated response. For example, if the child reaches and grunts, the adult might model the sign for "open" or ask, "What do you need?"
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3 text-sm uppercase tracking-wider">
              <div className="bg-[#d1fae5] text-[#10b981] p-1.5 rounded-full ring-2 ring-[#10b981]/40 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <Gift size={18} />
              </div>
              4. Natural Reward
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              As soon as the child attempts the requested elaboration, they are immediately granted access to the item they initiated for. The item itself is the natural reinforcer for the communication attempt.
            </p>
          </div>

        </div>
      </div>

      {/* ===== WHY IT MATTERS (AFFIRMING CARE) ===== */}
      <div className="bg-[#fffbeb] p-6 rounded-md border-l-4 border-[#ffd166] shadow-sm mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center gap-2">
          <Sparkles className="text-[#d97706]" size={24} />
          Fostering Self-Advocacy & Autonomy
        </h2>
        
        <p className="text-sm text-gray-700 leading-relaxed mb-5">
          Incidental Teaching is highly regarded in neurodiversity-affirming circles because it fundamentally shifts the balance of power back to the autistic individual.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
            <h4 className="font-bold text-[#0c264d] mb-3 text-sm uppercase tracking-wider border-b border-slate-200 pb-2">Reduces Power Struggles</h4>
            <ul className="space-y-3 text-xs text-gray-700">
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 mt-0.5 text-[10px]">◆</span>
                <span>Because the child selects the activity, there is no need for a therapist to coerce compliance.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 mt-0.5 text-[10px]">◆</span>
                <span>The child only works on communication goals when they are actively engaged and willing.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
            <h4 className="font-bold text-[#0c264d] mb-3 text-sm uppercase tracking-wider border-b border-slate-200 pb-2">Builds Genuine Language</h4>
            <ul className="space-y-3 text-xs text-gray-700">
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 mt-0.5 text-[10px]">◆</span>
                <span>It teaches the individual that their voice and gestures have direct power to change their environment.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 mt-0.5 text-[10px]">◆</span>
                <span>It prioritizes spontaneous, self-initiated communication over robotic, adult-prompted scripting.</span>
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
            <p>1. Hart, B., & Risley, T. R. (1975). Incidental teaching of language in the preschool. <i>Journal of Applied Behavior Analysis</i>. https://doi.org/10.1901/jaba.1975.8-411</p>
            <p>2. McGee, G. G., Krantz, P. J., & McClannahan, L. E. (1985). The facilitative effects of incidental teaching on preposition use by autistic children. <i>Journal of Applied Behavior Analysis</i>.</p>
          </div>
        </div>
      </div>

    </article>
  );
}