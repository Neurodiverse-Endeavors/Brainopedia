import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Dna, Split, ShieldAlert, Baby, AlertTriangle } from 'lucide-react';

interface DownSyndromeCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DownSyndromeCauses({ setCurrentArticle, initialTab }: DownSyndromeCausesProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'origins');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Down Syndrome: Causes & Origins
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
          onClick={() => setActiveTab('origins')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'origins'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Genetic Origins
        </button>
        <button
          onClick={() => setActiveTab('variations')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'variations'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Three Variations
        </button>
        <button
          onClick={() => setActiveTab('factors')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'factors'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Factors & Myths
        </button>
      </div>

      {/* ==========================================
          TAB 1: GENETIC ORIGINS
      ========================================== */}
      {activeTab === 'origins' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Role of Chromosomes</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-causes-tab1-origins.webp"
              alt="Microscopic view of chromosome 21"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Down syndrome results from having an extra, or partial extra, copy of chromosome 21. This additional genetic material alters the course of typical development, resulting in the condition's distinct physical and cognitive traits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Dna className="w-4 h-4 text-[#2abcd4]" /> Cellular Division
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The typical human cell contains 46 chromosomes grouped in 23 pairs. Down syndrome occurs when an error in cell division leaves a sperm or egg cell with an extra copy of chromosome 21.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Split className="w-4 h-4 text-[#2abcd4]" /> Developmental Impact
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">This extra genetic material is replicated into every (or almost every) cell in the developing embryo. It influences brain structure, connectivity, and physical formation from the moment of conception.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('downsyndrome')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About Down Syndrome
            </button>
          </div>

          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>National Institutes of Health (NIH). Eunice Kennedy Shriver National Institute of Child Health and Human Development. Information on Down Syndrome.</li>
                <li>World Health Organization (WHO). (n.d.). Genes and human disease: Chromosomal abnormalities.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: THE THREE VARIATIONS
      ========================================== */}
      {activeTab === 'variations' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-slate-100 border-2 border-slate-600 rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Three Genetic Variations</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-causes-tab2-variations.webp"
              alt="Diagram showing three different cell division anomalies"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-600"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              There are three distinct genetic variations that cause this extra chromosomal material to be present. While the outward physical and cognitive characteristics are generally the same, their underlying cellular makeup differs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2">Trisomy 21</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Accounting for about 95% of cases, this occurs when there is an error in cell division called "nondisjunction."<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> As a result, every single cell in the body contains three separate copies of chromosome 21 instead of the usual two.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2">Translocation</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Occurring in about 3-4% of cases, an extra part or a whole extra chromosome 21 is present, but it is attached (translocated) to a different chromosome rather than being a separate chromosome 21.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2abcd4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2">Mosaicism</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Accounting for only 1-2% of cases, this involves a mixture of two types of cells.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup> Some cells have the usual 46 chromosomes, and others have 47 (containing the extra chromosome 21).
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('downsyndrome')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About Down Syndrome
            </button>
          </div>

          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Sherman, S. L., et al. (2007). Epidemiology of Down syndrome. <i>Mental Retardation and Developmental Disabilities Research Reviews</i>.</p>
                <p>2. Centers for Disease Control and Prevention (CDC). (2023). Facts about Down Syndrome.</p>
                <p>3. National Down Syndrome Society (NDSS). (n.d.). Down Syndrome Fact Sheet.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: FACTORS & MYTHS
      ========================================== */}
      {activeTab === 'factors' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Risk Factors & Common Myths</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-causes-tab3-factors.webp"
              alt="Parents of various ages holding a baby"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              While maternal age is a known statistical factor, the vast majority of babies with Down syndrome are born to mothers under 35. It is a naturally occurring genetic variation, not the result of lifestyle choices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Baby className="w-4 h-4 text-[#d4a017]" /> Maternal Age
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The likelihood of having a child with Down syndrome increases with maternal age, particularly after age 35. However, because younger women have more babies overall, 80% of children with Down syndrome are actually born to mothers under 35.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup></p>
                </div>
              </div>

              {/* MAROON ACCESSIBLE WARNING MYTH CARD */}
              <div className="bg-[#fdf2f8] p-4 rounded-xl shadow-sm border border-[#be185d] relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#831843]"></div>
                <div className="pl-2">
                  <h3 className="text-[#831843] font-bold text-sm mb-1 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#831843]" /> Dispelling Myths
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Down syndrome is never caused by anything either parent did or did not do before or during pregnancy. It is a completely natural, random chromosomal variation, not a result of environmental exposure or parental actions.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('downsyndrome')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About Down Syndrome
            </button>
          </div>

          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Centers for Disease Control and Prevention (CDC). (2023). Facts about Down Syndrome.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Global Down Syndrome Foundation. (n.d.). Down Syndrome Facts.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}