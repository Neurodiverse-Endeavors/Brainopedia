import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Dna, Split, Microscope, Baby, ShieldCheck } from 'lucide-react';

interface DownSyndromeCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DownSyndromeCauses({ setCurrentArticle, initialTab }: DownSyndromeCausesProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'origins';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Down Syndrome: Causes & Origins
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('downsyndrome')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
        >
          <span className="text-xl">←</span>
          All About Down Syndrome
        </button>
      </div>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('origins')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'origins'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Genetic Origins
        </button>
        <button
          onClick={() => handleTabChange('variations')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'variations'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Three Variations
        </button>
        <button
          onClick={() => handleTabChange('factors')}
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
          TAB 1: GENETIC ORIGINS (CYAN)
      ========================================== */}
      {activeTab === 'origins' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Genetic Origins Card (Tab 1 Default: Cyan with Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Role of Chromosomes</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-causes-tab1-origins.webp"
              alt="Microscopic view of chromosome 21"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Down syndrome is strictly a chromosomal condition caused by having an extra, or partial extra, copy of chromosome 21. Because this chromosomal makeup is established at or before the moment of conception, it is entirely biological—never caused by environmental factors during pregnancy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Dna className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Meiotic Nondisjunction</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Typical human cells contain 46 chromosomes in 23 pairs. Down syndrome most commonly begins before conception during meiosis, when a pair of chromosome 21 fails to separate (nondisjunction), leaving an egg or sperm cell with an extra copy—a random biological event originating in the egg in roughly 90% of cases.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Split className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Established at Conception</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Once fertilization occurs, that extra genetic material is copied into every (or nearly every) cell as the embryo grows. It shapes brain connectivity, gene expression, and physical development from day one—long before any external pregnancy factor could play a role.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Microscope className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Direct Genetic Proof</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Unlike conditions diagnosed through behavioral observation alone, Down syndrome is confirmed directly through a chromosomal karyotype—a microscopic map of a person's chromosomes that visibly shows the third copy of chromosome 21.
                </p>
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

          {/* ===== TAB 1 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Antonarakis, S. E., et al. (2020). Down syndrome. <i>Nature Reviews Disease Primers</i>.</p>
              </div>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>National Institutes of Health (NIH). Eunice Kennedy Shriver National Institute of Child Health and Human Development. <i>Information on Down Syndrome</i>.</li>
                <li>World Health Organization (WHO). (n.d.). <i>Genes and human disease: Chromosomal abnormalities</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: THE THREE VARIATIONS (NAVY)
      ========================================== */}
      {activeTab === 'variations' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Variations Card (Tab 2 Default: Navy with 3D Left-Stripe Inner Cards, No Icons/Bullets) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Three Genetic Variations</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-causes-tab2-variations.webp"
              alt="Diagram showing three different cell division anomalies"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              There are three distinct genetic pathways through which this extra chromosomal material occurs. While the outward physical and cognitive characteristics are generally similar, their underlying cellular patterns—and whether they can be inherited—differ.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Trisomy 21
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Accounting for about 95% of cases, this occurs when there is a random cell division event called nondisjunction.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> Every cell in the body contains three separate copies of chromosome 21 instead of two. It is not inherited from either parent.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Translocation
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Occurring in about 3–4% of cases, an extra whole or partial chromosome 21 is attached (translocated) to another chromosome.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup> This is the only variation that can occasionally be inherited from an unaffected parent who carries a balanced rearrangement.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Mosaicism
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Accounting for only 1–2% of cases, mosaicism occurs shortly after fertilization, creating a mixture of two cell lines—some cells have the typical 46 chromosomes, while others have 47 containing the extra chromosome 21.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
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

          {/* ===== TAB 2 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Sherman, S. L., et al. (2007). Epidemiology of Down syndrome. <i>Mental Retardation and Developmental Disabilities Research Reviews</i>.</p>
                <p>2. Centers for Disease Control and Prevention (CDC). (2023). <i>Facts about Down Syndrome</i>.</p>
                <p>3. National Down Syndrome Society (NDSS). (n.d.). <i>Down Syndrome Fact Sheet</i>.</p>
              </div>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Antonarakis, S. E., et al. (2020). Down syndrome. <i>Nature Reviews Disease Primers</i>.</li>
                <li>National Institutes of Health (NIH). Eunice Kennedy Shriver National Institute of Child Health and Human Development. <i>What causes Down syndrome?</i></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: FACTORS & MYTHS (YELLOW)
      ========================================== */}
      {activeTab === 'factors' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Factors Card (Tab 3 Default: Yellow with Double-Ring Navy Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Biological Factors & Scientific Consensus</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-causes-tab3-factors.webp"
              alt="Parents of various ages holding a baby"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Decades of global epidemiological research have reached a clear conclusion: maternal age is the only well-established biological factor linked to an increased likelihood of nondisjunction, and Down syndrome occurs naturally across every population, geography, and socioeconomic group worldwide.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <Baby className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Maternal Age</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  The individual probability of nondisjunction increases with maternal age, particularly after age 35, as eggs naturally age. However, because younger women have more babies overall, approximately 80% of children with Down syndrome are born to mothers under 35.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">No Established Environmental Cause</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Extensive genetic and population studies have found no scientific evidence that environmental factors, prenatal lifestyle, or parental behavior cause the extra copy of chromosome 21.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Card: Accessible Warning & Myth Card (Maroon/Pink) */}
          <div className="bg-[#fdf2f8] border-2 border-[#be185d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#831843] font-bold mb-4 text-2xl text-center">What Does NOT Cause Down Syndrome</h2>
            <p className="text-sm text-[#831843] leading-relaxed text-center max-w-3xl mx-auto mb-6">
              Down syndrome is a natural, random chromosomal variation—never the result of anything either parent did or did not do before or during pregnancy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white border-l-4 border-[#be185d] p-4 rounded-r-xl shadow-sm">
                <h3 className="text-[#831843] font-bold text-sm mb-1">Parental Actions or Lifestyle</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Diet, exercise, daily routines, or choices made before or during pregnancy do not cause chromosomal nondisjunction.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#be185d] p-4 rounded-r-xl shadow-sm">
                <h3 className="text-[#831843] font-bold text-sm mb-1">Environmental Exposures</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Everyday environmental factors, geography, or climate do not trigger Down syndrome; birth prevalence is remarkably consistent across human populations worldwide.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#be185d] p-4 rounded-r-xl shadow-sm">
                <h3 className="text-[#831843] font-bold text-sm mb-1">Stress or Illness During Pregnancy</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Because the extra chromosome 21 is already present at conception, emotional stress, minor illnesses, or events later in pregnancy cannot cause Down syndrome.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#be185d] p-4 rounded-r-xl shadow-sm">
                <h3 className="text-[#831843] font-bold text-sm mb-1">Vaccines or Routine Medications</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Neither parental nor childhood vaccinations cause Down syndrome; a person's chromosomal karyotype is fixed from the earliest cell divisions of life.
                </p>
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

          {/* ===== TAB 3 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Centers for Disease Control and Prevention (CDC). (2023). <i>Facts about Down Syndrome</i>.</p>
                <p>2. Sherman, S. L., et al. (2007). Epidemiology of Down syndrome. <i>Mental Retardation and Developmental Disabilities Research Reviews</i>.</p>
              </div>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Global Down Syndrome Foundation. (n.d.). <i>Down Syndrome Facts</i>.</li>
                <li>National Down Syndrome Society (NDSS). (n.d.). <i>What is Down Syndrome?</i></li>
                <li>World Health Organization (WHO). (n.d.). <i>Genes and human disease: Chromosomal abnormalities</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}