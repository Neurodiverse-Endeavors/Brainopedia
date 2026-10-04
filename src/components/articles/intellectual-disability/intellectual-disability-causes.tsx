import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Dna, Network, ShieldAlert, Baby, Activity, AlertTriangle, Wind, Brain, HelpCircle, HeartPulse } from 'lucide-react';

interface IDCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function IDCauses({ setCurrentArticle, initialTab }: IDCausesProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'genetics');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Intellectual Disability: Causes & Origins
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('intellectual-disability')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap hidden md:flex"
        >
          <span className="text-xl">←</span>
          All About ID
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('intellectual-disability')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About ID
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('genetics')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'genetics'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Genetic Factors
        </button>
        <button
          onClick={() => setActiveTab('prenatal')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'prenatal'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Prenatal Influences
        </button>
        <button
          onClick={() => setActiveTab('perinatal')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'perinatal'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Perinatal & Unknown
        </button>
      </div>

      {/* ==========================================
          TAB 1: GENETIC FACTORS (Cyan Card + Lucide Icons)
      ========================================== */}
      {activeTab === 'genetics' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            
            <ImageWithFallback 
              src="/images/id/id-causes-tab1-genetics.webp"
              alt="DNA and genetic research illustration"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Genetic Factors</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              The causes of intellectual disability are highly diverse and can originate at any point during early development. Genetic variations represent the most common identified origins of the condition.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Dna className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Chromosomal Abnormalities</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Occurs when there is an extra, missing, or altered chromosome. Common examples include Down syndrome (Trisomy 21) and Fragile X syndrome.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Activity className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Single Gene Disorders</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Results from a mutation in a single, specific gene that alters cognitive development, such as in Rett syndrome or Phenylketonuria (PKU).</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3 md:col-span-2">
                <Network className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Complex Inherited Traits</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">In many cases, an intellectual disability can run in families without a single identifiable genetic marker, suggesting a complex interplay between multiple inherited genes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('intellectual-disability')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About ID
            </button>
          </div>

          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Rauch, A., et al. (2006). Diagnostic yield of various genetic approaches. <i>American Journal of Medical Genetics</i>.</li>
                <li>Vissers, L. E., et al. (2016). Genetic studies in intellectual disability. <i>Nature Reviews Genetics</i>.</li>
                <li>Dykens, E. M. (2015). Family adjustment in neurodevelopmental disorders. <i>Current Opinion in Psychiatry</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: PRENATAL INFLUENCES (Yellow Card + Icon Badges)
      ========================================== */}
      {activeTab === 'prenatal' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            
            <ImageWithFallback 
              src="/images/id/id-causes-tab2-prenatal.webp"
              alt="Medical professional discussing prenatal health"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Prenatal Influences</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Various environmental, biological, and health factors can deeply affect fetal development during pregnancy. These prenatal complications can permanently alter brain structure and cognitive trajectories before birth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mt-0.5">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Alcohol Exposure</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Prenatal alcohol exposure is a leading preventable cause of cognitive impairment, often resulting in Fetal Alcohol Spectrum Disorder (FASD).</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mt-0.5">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Maternal Infections</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Severe maternal infections passed to the fetus—such as rubella, syphilis, or cytomegalovirus (CMV)—can significantly disrupt neurological development.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mt-0.5">
                  <Baby className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Environmental Toxins</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Prolonged exposure to certain heavy metals (like lead or mercury), environmental pollutants, or teratogenic medications during gestation.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mt-0.5">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Severe Malnutrition</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A severe lack of essential developmental nutrients, such as iodine or folic acid, can fundamentally compromise central nervous system formation.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('intellectual-disability')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About ID
            </button>
          </div>

          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Popova, S., et al. (2017). Prevalence of alcohol use during pregnancy. <i>The Lancet Global Health</i>.</li>
                <li>Hoyme, H. E., et al. (2016). Clinical guidelines for diagnosing FASD. <i>Pediatrics</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: PERINATAL & UNKNOWN (Slate Card + 3D Borders)
      ========================================== */}
      {activeTab === 'perinatal' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-slate-100 border-2 border-slate-600 rounded-xl p-6 shadow-sm clear-both">
            
            <ImageWithFallback 
              src="/images/id/id-causes-tab3-perinatal.webp"
              alt="Medical professional examining an infant"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-400"
            />

            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Perinatal Factors & Unknown Etiology</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Significant medical events during birth or throughout early childhood can also impact cognitive development. However, human brain development is incredibly complex, and finding a singular cause is not always possible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Wind className="w-4 h-4 text-[#0c264d]" /> Oxygen Deprivation
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A severe lack of oxygen (hypoxia) during labor or the birthing process can result in permanent neurological injury.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Baby className="w-4 h-4 text-[#0A9DC4]" /> Extreme Prematurity
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Being born significantly premature, before the brain is fully developed and structurally sound, increases the risk of cognitive impairment.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-[#d4a017]" /> Illness & Injury
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Early childhood illnesses (like meningitis or encephalitis), extreme environmental deprivation, or a severe Traumatic Brain Injury (TBI) during early development.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2abcd4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#2abcd4]" /> Unknown Etiology
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">In approximately 30–50% of cases, the exact cause of an intellectual disability remains completely unknown, even with the most advanced medical testing. <sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup></p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('intellectual-disability')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About ID
            </button>
          </div>

          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Moeschler, J. B., et al. (2014). Evaluation of the child with intellectual disability. <i>Pediatrics</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Graham, E. M., et al. (2008). Intrapartum hypoxia-ischemia in the causation of neonatal encephalopathy. <i>AJOG</i>.</li>
                <li>Nelson, K. B. (2008). Perinatal causes of cerebral palsy. <i>Pediatrics</i>.</li>
                <li>Centers for Disease Control and Prevention (CDC). (2015). Traumatic Brain Injury in the United States.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}