import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Dna, Activity } from 'lucide-react';

interface DownSyndromeOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function DownSyndromeOverview({ setCurrentArticle }: DownSyndromeOverviewProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Down Syndrome: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('downsyndrome')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
        >
          <span className="text-xl">←</span>
          All About Down Syndrome
        </button>
      </div>

      {/* ==========================================
          SECTION 1: DEFINITION & GENETICS (CYAN)
      ========================================== */}
      <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">What is Down Syndrome?</h2>
        
        <ImageWithFallback 
          src="/images/downsyndrome/downsyndrome-overview-tab1-genetics.webp"
          alt="Visual representation of Chromosome 21 and DNA genetics"
          className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
        />
        
        <p className="text-sm text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
          Down syndrome (also known as Trisomy 21) is a genetic condition caused by the presence of an extra, or partial extra, copy of chromosome 21. It shapes the course of development, creating a distinct neurodivergent and physical profile.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
            <Dna className="text-[#0A9DC4] w-7 h-7 mb-3" />
            <h3 className="text-[#0c264d] font-bold text-sm mb-2">Genetic Origins</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              The human body is typically composed of 46 chromosomes in each cell (23 from each parent). Individuals with Down syndrome are born with 47 chromosomes, specifically carrying an extra copy of the 21st chromosome.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
            <Activity className="text-[#0A9DC4] w-7 h-7 mb-3" />
            <h3 className="text-[#0c264d] font-bold text-sm mb-2">Prevalence & Frequency</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              It affects approximately 1 in 700 babies born in the United States, making it the most common chromosomal condition diagnosed today.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>
          </div>
        </div>
      </div>

      {/* ==========================================
          SECTION 2: LIFESPAN & HISTORY (NAVY)
      ========================================== */}
      <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Lifespan & History</h2>
        
        <p className="text-sm text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
          The landscape for individuals born with Down syndrome has transformed radically over the past few decades, resulting in profoundly longer, richer lives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
            <div className="pl-2">
              <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                A Dramatic Increase in Longevity
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Life expectancy for individuals with Down syndrome has increased dramatically—from just 25 years in 1983 to 60+ years today.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup> This monumental shift is the direct result of improved, proactive medical care (especially regarding congenital heart defects), rigorous early intervention therapies, and the dismantling of institutionalization in favor of societal and educational inclusion.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
            <div className="pl-2">
              <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                Historical Context
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed mb-2">
                Down syndrome is named after <strong>John Langdon Down</strong>, the British physician who first formally described the condition's distinct characteristics in 1866.
              </p>
              <p className="text-xs text-slate-700 leading-relaxed">
                While Dr. Down identified the clinical presentation, the actual genetic cause—the presence of an extra 21st chromosome—was not discovered until nearly a century later in 1959 by French pediatrician and geneticist Jérôme Lejeune.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BUTTON */}
      <div className="mt-8 mb-12 flex justify-end w-full">
        <button 
          onClick={() => setCurrentArticle?.('downsyndrome')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
        >
          <span className="text-xl">←</span>
          All About Down Syndrome
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p>1. Centers for Disease Control and Prevention (CDC). (2023). <i>Data and Statistics on Down Syndrome</i>.</p>
            <p>2. Presson, A. P., Partyka, G., Jensen, K. M., Devine, O. J., Rasmussen, S. A., McCabe, L. L., & McCabe, E. R. (2013). Current estimate of Down syndrome population prevalence in the United States. <i>The Journal of Pediatrics</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Global Down Syndrome Foundation. (n.d.). <i>History of Down Syndrome</i>.</li>
            <li>National Association for Down Syndrome (NADS). (n.d.). <i>Facts About Down Syndrome</i>.</li>
            <li>National Down Syndrome Society (NDSS). (n.d.). <i>What is Down Syndrome?</i></li>
            <li>World Health Organization (WHO). (n.d.). <i>Genes and human disease: Chromosomal abnormalities</i>.</li>
          </ul>
        </div>
      </div>

    </article>
  );
}