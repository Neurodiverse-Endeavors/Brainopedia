import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ClipboardCheck, Activity, Clock, Brain, FileText, Search, Star, Target } from 'lucide-react';

interface IDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function IDDiagnosis({ setCurrentArticle, initialTab }: IDDiagnosisProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'criteria');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Intellectual Disability: Testing & Diagnosing
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
          onClick={() => setActiveTab('criteria')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'criteria'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Diagnostic Criteria
        </button>
        <button
          onClick={() => setActiveTab('process')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'process'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Evaluation Process
        </button>
        <button
          onClick={() => setActiveTab('earlyid')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'earlyid'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Early ID & Strengths
        </button>
      </div>

      {/* ==========================================
          TAB 1: DIAGNOSTIC CRITERIA (Cyan Card + Lucide Icons)
      ========================================== */}
      {activeTab === 'criteria' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            
            <ImageWithFallback 
              src="/images/id/id-diagnosis-tab1-criteria.webp"
              alt="Medical and psychological diagnostic criteria checklist"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Diagnostic Criteria</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Diagnosing an intellectual disability involves a comprehensive evaluation of both cognitive abilities and daily life skills. According to the DSM-5 and ICD-11, three specific criteria must be met for a formal diagnosis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Brain className="w-8 h-8 text-[#0A9DC4] mb-3" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Intellectual Deficits</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Confirmed by clinical assessment and individualized standardized intelligence testing, typically denoted by an IQ score of 70 or below.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Activity className="w-8 h-8 text-[#0A9DC4] mb-3" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Adaptive Deficits</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Resulting in a failure to meet developmental and sociocultural standards for personal independence and social responsibility in daily life.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Clock className="w-8 h-8 text-[#0A9DC4] mb-3" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Developmental Onset</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The clear onset of both intellectual and adaptive deficits must occur during the developmental period (prior to adulthood).</p>
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
                <p>1. American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.).</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Salvador-Carulla, L., et al. (2011). Intellectual developmental disorders. <i>World Psychiatry</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: THE EVALUATION PROCESS (Yellow Card + Icon Badges)
      ========================================== */}
      {activeTab === 'process' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            
            <ImageWithFallback 
              src="/images/id/id-diagnosis-tab2-evaluation.webp"
              alt="Psychological assessment and testing"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Evaluation Process</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Clinicians utilize a variety of standardized tools to assess an individual's cognitive and functional profile. Gathering comprehensive information from multiple settings ensures a holistic understanding of the person's true capabilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Intellectual Testing</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Standardized tests (like the WISC or Stanford-Binet) measure verbal comprehension, perceptual reasoning, working memory, and processing speed.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Adaptive Assessment</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Scales such as the Vineland-3 or ABAS-3 collect vital information from parents and teachers about the person's functional skills in real-world settings.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Medical History</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Reviewing prenatal records, birth history, and developmental milestones to identify potential causes or underlying co-occurring conditions.</p>
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
                <li>Sattler, J. M. (2004). <i>Assessment of children</i>.</li>
                <li>Sparrow, S. S., et al. (2016). <i>Vineland Adaptive Behavior Scales</i> (3rd ed.).</li>
                <li>Harrison, P. L., & Oakland, T. (2015). <i>Adaptive Behavior Assessment System</i> (3rd ed.).</li>
                <li>Shevell, M., et al. (2003). Evaluation of the child with global developmental delay. <i>Neurology</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: EARLY ID & STRENGTHS (Slate Card + 3D Borders)
      ========================================== */}
      {activeTab === 'earlyid' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-slate-100 border-2 border-slate-600 rounded-xl p-6 shadow-sm clear-both">
            
            <ImageWithFallback 
              src="/images/id/id-diagnosis-tab3-strengths.webp"
              alt="A strengths-based approach to early intervention"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-400"
            />

            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Early ID & Strengths</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Early identification is crucial for accessing foundational supports that significantly improve long-term outcomes. Modern diagnosis focuses on understanding the person's unique profile of strengths rather than solely cataloging deficits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#0c264d]" /> Early Identification
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Developmental screening at well-child visits helps identify early delays in language, motor skills, or social interaction, allowing families to access intervention services immediately.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#0A9DC4]" /> A Strengths-Based Approach
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The ultimate goal of an evaluation is to create a roadmap for services and accommodations by determining exactly what levels of support are needed for the individual to thrive.</p>
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
                <li>Centers for Disease Control and Prevention (CDC). (2020). Developmental Monitoring and Screening.</li>
                <li>Shogren, K. A., et al. (2006). Application of positive psychology to intellectual disability. <i>Research and Practice for Persons with Severe Disabilities</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}