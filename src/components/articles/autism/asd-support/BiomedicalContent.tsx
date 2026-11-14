import { Activity, History, Microscope, Scale } from 'lucide-react';

interface BiomedicalContentProps {
  setCurrentArticle?: (article: string) => void;
}

export function BiomedicalContent({ setCurrentArticle }: BiomedicalContentProps) {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500 font-spartan">
      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b-2 border-[#0c264d] pb-2">
          Biomedical Approaches & The Gut-Brain Axis
        </h2>
        <p className="text-sm text-gray-700 mb-6 leading-relaxed">
          The biomedical movement approaches autism as a whole-body, systemic condition rather than a strictly neurological one. Select a topic below to explore the history, the gut-brain connection, and a breakdown of which interventions are helpful versus those that are unsafe.
        </p>

        {/* 2x2 Grid for perfectly balanced 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Origins & Practitioners (Navy) */}
          <div className="bg-[#0c264d]/5 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flex flex-col h-full relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
            <div className="flex items-center gap-4 mb-4 border-b border-[#0c264d]/20 pb-4 pl-2">
              <div className="w-12 h-12 rounded-full bg-white text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#0c264d]/30">
                <History className="w-6 h-6" />
              </div>
              <h3 className="text-xl text-[#0c264d] font-bold leading-tight">Origins & Practitioners</h3>
            </div>
            <div className="flex-grow pl-2 flex flex-col">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-[#0c264d] mt-0.5 font-bold">•</span>
                  <span><strong>The Early Movement:</strong> The foundational history of the biomedical approach.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-[#0c264d] mt-0.5 font-bold">•</span>
                  <span><strong>Systems Biology:</strong> Viewing autism as a whole-body, systemic condition.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-[#0c264d] mt-0.5 font-bold">•</span>
                  <span><strong>Metabolics:</strong> The role of mitochondrial function and oxidative stress.</span>
                </li>
              </ul>
              <div className="mt-auto pt-2">
                <button 
                  onClick={() => setCurrentArticle?.('autism-biomedical-history')}
                  className="px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold text-center w-fit shadow-sm"
                >
                  Read more →
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Gut-Brain & Diets (Cyan) */}
          <div className="bg-[#2abcd4]/10 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flex flex-col h-full relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2abcd4]"></div>
            <div className="flex items-center gap-4 mb-4 border-b border-[#2abcd4]/20 pb-4 pl-2">
              <div className="w-12 h-12 rounded-full bg-white text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#2abcd4]/30">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl text-[#0c264d] font-bold leading-tight">Gut-Brain & Diets</h3>
            </div>
            <div className="flex-grow pl-2 flex flex-col">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-[#0A9DC4] mt-0.5 font-bold">•</span>
                  <span><strong>The Microbiome:</strong> Dysbiosis, overgrowth, and targeted probiotics.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-[#0A9DC4] mt-0.5 font-bold">•</span>
                  <span><strong>Intestinal Permeability:</strong> How systemic inflammation crosses the BBB.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-[#0A9DC4] mt-0.5 font-bold">•</span>
                  <span><strong>Specialized Diets:</strong> Navigating GFCF, GAPS, and elimination protocols.</span>
                </li>
              </ul>
              <div className="mt-auto pt-2">
                <button 
                  onClick={() => setCurrentArticle?.('autism-biomedical-gut')}
                  className="px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold text-center w-fit shadow-sm"
                >
                  Read more →
                </button>
              </div>
            </div>
          </div>
          
          {/* Card 3: Intervention Tiers (Yellow) */}
          <div className="bg-[#ffd166]/10 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flex flex-col h-full relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ffd166]"></div>
            <div className="flex items-center gap-4 mb-4 border-b border-[#ffd166]/40 pb-4 pl-2">
              <div className="w-12 h-12 rounded-full bg-white text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#ffd166]/50">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl text-[#0c264d] font-bold leading-tight">Intervention Tiers</h3>
            </div>
            <div className="flex-grow pl-2 flex flex-col">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-[#0c264d] mt-0.5 font-bold">•</span>
                  <span><strong>Helpful & Targeted:</strong> Treating verified deficiencies and GI pain.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-[#0c264d] mt-0.5 font-bold">•</span>
                  <span><strong>The "Gray Area":</strong> Mixed-evidence therapies like high-dose vitamins.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-[#0c264d] mt-0.5 font-bold">•</span>
                  <span><strong>Dangerous & Disproven:</strong> Unsafe protocols warned against by medical boards.</span>
                </li>
              </ul>
              <div className="mt-auto pt-2">
                <button 
                  onClick={() => setCurrentArticle?.('autism-biomedical-tiers')}
                  className="px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold text-center w-fit shadow-sm"
                >
                  Read more →
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: Biological Pathways & OTC (Dark Cyan) */}
          <div className="bg-[#0A9DC4]/10 border-2 border-[#0A9DC4] rounded-xl p-6 shadow-sm flex flex-col h-full relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
            <div className="flex items-center gap-4 mb-4 border-b border-[#0A9DC4]/20 pb-4 pl-2">
              <div className="w-12 h-12 rounded-full bg-white text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#0A9DC4]/30">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl text-[#0c264d] font-bold leading-tight">Biological Pathways</h3>
            </div>
            <div className="flex-grow pl-2 flex flex-col">
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Biomedical research heavily investigates how specific cellular mechanisms naturally intersect with neurodivergent profiles. By safely targeting these underlying pathways, individuals can often modulate neurological excitability.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-[#0A9DC4] mt-0.5 font-bold">•</span>
                  <span>Neurotransmitter synthesis & regulation</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-[#0A9DC4] mt-0.5 font-bold">•</span>
                  <span>Targeted OTC supplementation (NAC, Folate)</span>
                </li>
              </ul>
              <div className="mt-auto pt-2">
                <button 
                  onClick={() => setCurrentArticle?.('biomedical-pathways')}
                  className="px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold text-center w-fit shadow-sm"
                >
                  Read more →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}