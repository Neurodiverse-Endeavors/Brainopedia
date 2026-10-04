import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Activity, ShieldAlert, HeartPulse, Eye, Brain, Stethoscope, Dna, FileSearch } from 'lucide-react';

interface DownSyndromeDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DownSyndromeDiagnosis({ setCurrentArticle, initialTab }: DownSyndromeDiagnosisProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'prenatal');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Down Syndrome: Testing & Diagnosing
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
          onClick={() => setActiveTab('prenatal')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'prenatal'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Prenatal Testing
        </button>
        <button
          onClick={() => setActiveTab('birth')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'birth'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Birth Diagnosis
        </button>
        <button
          onClick={() => setActiveTab('evaluation')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'evaluation'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Post-Diagnosis
        </button>
      </div>

      {/* ==========================================
          TAB 1: PRENATAL TESTING
      ========================================== */}
      {activeTab === 'prenatal' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Prenatal Screening & Diagnostics</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-diagnosis-tab1-prenatal.webp"
              alt="Medical professional reviewing an ultrasound and genetic test results"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Down syndrome is frequently identified before birth through a sequence of medical evaluations. These evaluations are broadly categorized into screening tests, which assess probability, and diagnostic tests, which confirm the condition.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#2abcd4]" /> Screening Tests
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Routine blood tests and ultrasounds (such as nuchal translucency screenings) are used to gauge the likelihood that a fetus has Down syndrome. These tests are non-invasive but cannot provide a definitive diagnosis.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Dna className="w-4 h-4 text-[#2abcd4]" /> Diagnostic Tests
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">If screening tests indicate a high risk, invasive diagnostic tests like Chorionic Villus Sampling (CVS) or amniocentesis can be performed. These analyze the actual genetic material of the fetus for an exact chromosomal count.</p>
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
                <li>American College of Obstetricians and Gynecologists (ACOG). (n.d.). Prenatal Diagnostic Testing for Genetic Disorders.</li>
                <li>National Institutes of Health (NIH). Eunice Kennedy Shriver National Institute of Child Health and Human Development. Information on Down Syndrome.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: BIRTH DIAGNOSIS
      ========================================== */}
      {activeTab === 'birth' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Diagnosis at Birth</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-diagnosis-tab2-birth.webp"
              alt="Pediatrician examining a newborn baby"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              When not diagnosed prenatally, Down syndrome is typically identified immediately at birth based on clinical observation. The initial visual diagnosis is then formally confirmed through a specific genetic laboratory test.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#d4a017] mt-1.5 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Clinical Observation</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Medical professionals often recognize the condition upon delivery by identifying distinct physical traits, such as low muscle tone, a flattened facial profile, or the characteristic single crease across the infant's palm.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#d4a017] mt-1.5 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Chromosomal Karyotype</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Because physical traits alone can be inconclusive, a blood sample is drawn to perform a karyotype test. This laboratory analysis physically maps and counts the baby's chromosomes to definitively confirm the presence of an extra chromosome 21.</p>
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
                <li>National Down Syndrome Society (NDSS). (n.d.). Diagnosing Down Syndrome.</li>
                <li>Centers for Disease Control and Prevention (CDC). (2023). Facts about Down Syndrome.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: POST-DIAGNOSIS
      ========================================== */}
      {activeTab === 'evaluation' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-slate-100 border-2 border-slate-600 rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Post-Diagnosis Evaluation</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-diagnosis-tab3-evaluation.webp"
              alt="Medical icons highlighting a comprehensive developmental and physical evaluation"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-400"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Following a formal diagnosis, a comprehensive medical evaluation is initiated to establish a baseline of health. Early identification is crucial because it allows families to immediately access early intervention services that significantly improve long-term outcomes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-[#0A9DC4]" /> Cardiac Evaluation
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">An echocardiogram is standard protocol immediately following birth to evaluate the structure and function of the heart, screening for any congenital heart defects.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#0c264d]" /> Sensory Screening
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Early and rigorous testing for both hearing and vision is conducted to identify and address any sensory impairments before they can delay learning and development.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#d4a017]" /> Thyroid Testing
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Routine blood work is established to continuously monitor thyroid function, as endocrine issues are common and can impact overall growth and energy levels.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2abcd4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-[#2abcd4]" /> Developmental Assessment
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A baseline for physical and cognitive functioning is established to help coordinate effective early intervention programs, including physical, speech, and occupational therapies.</p>
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
                <li>Bull, M. J. (2011). Health supervision for children with Down syndrome. <i>Pediatrics</i>.</li>
                <li>National Institutes of Health (NIH). Eunice Kennedy Shriver National Institute of Child Health and Human Development. Information on Down Syndrome.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}