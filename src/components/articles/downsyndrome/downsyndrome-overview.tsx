import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Dna, Activity, Brain, Target, History, HeartPulse } from 'lucide-react';

interface DownSyndromeOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DownSyndromeOverview({ setCurrentArticle, initialTab }: DownSyndromeOverviewProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'definition');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Down Syndrome: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('downsyndrome')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap hidden md:flex"
        >
          <span className="text-xl">←</span>
          All About Down Syndrome
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('downsyndrome')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About Down Syndrome
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('definition')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'definition'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Definition & Genetics
        </button>
        <button
          onClick={() => setActiveTab('profile')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'profile'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Cognitive Profile
        </button>
        <button
          onClick={() => setActiveTab('lifespan')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'lifespan'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Lifespan & History
        </button>
      </div>

      {/* ==========================================
          TAB 1: DEFINITION & GENETICS
      ========================================== */}
      {activeTab === 'definition' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Definition Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">What is Down Syndrome?</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-overview-tab1-genetics.webp"
              alt="Visual representation of Chromosome 21 and DNA genetics"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Down syndrome (also known as Trisomy 21) is a genetic condition caused by the presence of an extra, or partial extra, copy of chromosome 21. It alters the course of typical development, creating a distinct neurodivergent and physical profile.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Dna className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Genetic Origins</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    The human body is typically composed of 46 chromosomes in each cell (23 from each parent). Individuals with Down syndrome are born with 47 chromosomes, specifically carrying an extra copy of the 21st chromosome.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Activity className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Prevalence & Frequency</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    It affects approximately 1 in 700 babies born in the United States, making it the most common chromosomal condition diagnosed today.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Centers for Disease Control and Prevention (CDC). (2023). Data and Statistics on Down Syndrome.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>National Down Syndrome Society (NDSS). (n.d.). What is Down Syndrome?</li>
                <li>World Health Organization (WHO). (n.d.). Genes and human disease: Chromosomal abnormalities.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: COGNITIVE PROFILE
      ========================================== */}
      {activeTab === 'profile' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Cognitive Profile Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Cognitive Profile</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-overview-tab2-cognition.webp"
              alt="Visual highlighting diverse cognitive strengths and challenges"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Individuals with Down syndrome possess a unique cognitive profile characterized by specific strengths and distinct challenges. While intellectual disability is a hallmark of the condition, cognitive functioning exists on a very wide spectrum.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Brain className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Intellectual Range</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>The range of cognitive functioning varies widely from person to person.</li>
                    <li>While most fall into the mild to moderate range of intellectual disability, some individuals experience borderline differences.</li>
                    <li>Developmental milestones are typically reached, though on a delayed timeline compared to neurotypical peers.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Target className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Learning & Processing</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Often display strong visual-spatial learning abilities compared to auditory processing.</li>
                    <li>Social understanding and empathy are frequently noted as significant cognitive strengths.</li>
                    <li>Expressive language (speaking) may lag behind receptive language (understanding).</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Fidler, D. J., & Nadel, L. (2007). Education and children with Down syndrome: Neuroscience, development, and intervention. <i>Mental Retardation and Developmental Disabilities Research Reviews</i>.</li>
                <li>Grieco, J., Pulsifer, M., Seligsohn, K., Skotko, B., & Schwartz, A. (2015). Down syndrome: Cognitive and behavioral functioning across the lifespan. <i>American Journal of Medical Genetics</i>.</li>
                <li>National Institutes of Health (NIH). Eunice Kennedy Shriver National Institute of Child Health and Human Development. Information on Down Syndrome.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: LIFESPAN & HISTORY
      ========================================== */}
      {activeTab === 'lifespan' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Lifespan Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Lifespan & Outcomes</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-overview-tab3-lifespan.webp"
              alt="Elderly individual with Down syndrome living an active life"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-300"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              The landscape for individuals born with Down syndrome has transformed radically over the past few decades, resulting in profoundly longer, richer lives.
            </p>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2">
                <HeartPulse className="text-[#0c264d] w-5 h-5" />
                <h3 className="text-[#0c264d] font-bold text-sm">A Dramatic Increase in Longevity</h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Life expectancy for individuals with Down syndrome has increased dramatically—from just 25 years in 1983 to 60+ years today.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> This monumental shift is the direct result of improved, proactive medical care (especially regarding congenital heart defects), rigorous early intervention therapies, and the dismantling of institutionalization in favor of societal and educational inclusion.
              </p>
            </div>
          </div>

          {/* Historical Context Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Historical Context</h2>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-3 border-b border-[#2abcd4] border-opacity-20 pb-2">
                <History className="text-[#0A9DC4] w-5 h-5" />
                <h3 className="text-[#0c264d] font-bold text-sm">Did You Know?</h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed mb-3">
                Down syndrome is named after <strong>John Langdon Down</strong>, the British physician who first formally described the condition's distinct characteristics in 1866. 
              </p>
              <p className="text-xs text-slate-700 leading-relaxed">
                While Dr. Down identified the clinical presentation, the actual genetic cause—the presence of an extra 21st chromosome—was not discovered until nearly a century later in 1959 by French pediatrician and geneticist Jérôme Lejeune.
              </p>
            </div>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Presson, A. P., Partyka, G., Jensen, K. M., Devine, O. J., Rasmussen, S. A., McCabe, L. L., & McCabe, E. R. (2013). Current estimate of Down syndrome population prevalence in the United States. <i>The Journal of Pediatrics</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Global Down Syndrome Foundation. (n.d.). History of Down Syndrome.</li>
                <li>National Association for Down Syndrome (NADS). (n.d.). Facts About Down Syndrome.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('downsyndrome')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About Down Syndrome
        </button>
      </div>

    </article>
  );
}