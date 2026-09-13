import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Stethoscope, Brain, ClipboardList, UserCheck, FileSearch, Ear, MessageSquare, FileText, Layers, Search, AlertTriangle, GraduationCap, CheckCircle, Mic } from 'lucide-react';

interface DLDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DLDDiagnosis({ setCurrentArticle, initialTab }: DLDDiagnosisProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'process');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          DLD: Testing & Diagnosing
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About DLD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('dld')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About DLD
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('process')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'process'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Evaluation Process
        </button>
        <button
          onClick={() => setActiveTab('testing')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'testing'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Core Testing Areas
        </button>
        <button
          onClick={() => setActiveTab('criteria')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'criteria'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Diagnosis & Outcomes
        </button>
      </div>

      {/* ==========================================
          TAB 1: EVALUATION PROCESS
      ========================================== */}
      {activeTab === 'process' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Professionals Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Diagnostic Team & Process</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-diagnosis-professionals.webp"
              alt="Speech-Language Pathologist working with a child"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Diagnosing Developmental Language Disorder requires a comprehensive assessment. Because language impacts so many areas of development, the diagnostic process involves a multidisciplinary approach, standardized testing, and careful observation of the child's language use in everyday contexts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <UserCheck className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Qualified Professionals</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li><strong>SLPs:</strong> Speech-Language Pathologists are the primary professionals for DLD assessment.</li>
                    <li><strong>Psychologists:</strong> Educational or neuropsychologists assist with cognitive profiling.</li>
                    <li><strong>Pediatricians:</strong> Provide medical screening to rule out physical causes.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <FileSearch className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Case History</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li><strong>Developmental:</strong> Tracking exact language and motor milestones.</li>
                    <li><strong>Family:</strong> Identifying any family history of learning or language difficulties.</li>
                    <li><strong>Hearing:</strong> An essential audiological screening to rule out hearing loss as the primary cause.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CATALISE Criteria Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The CATALISE Diagnostic Criteria</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-diagnosis-catalise-hero.webp"
              alt="Visual representation of international consensus criteria"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              In 2017, the multinational CATALISE consortium established the definitive, modern diagnostic criteria for DLD, moving the clinical world away from strict, arbitrary cutoff scores and toward functional, real-world impact.<sup className="text-[#10b981] font-bold ml-0.5">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <AlertTriangle className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Persistent Difficulty</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The child must exhibit persistent problems with language learning and use that interfere significantly with their everyday life, academic achievement, or social interactions.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Search className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Rule-Outs</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The language deficit cannot be primarily explained by another known biomedical condition (like a brain injury), intellectual disability, hearing impairment, or severe environmental deprivation.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <ClipboardList className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Clinical Flexibility</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Clinical judgment is prioritized alongside standardized test scores, allowing SLPs to diagnose children whose test scores might barely pass but whose functional language severely impacts them.</p>
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
                <p>1. Bishop, D. V. M., Snowling, M. J., Thompson, P. A., Greenhalgh, T., & CATALISE consortium. (2017). Phase 2 of CATALISE: A multinational and multidisciplinary Delphi consensus study of problems with language development: Terminology. <i>Journal of Child Psychology and Psychiatry</i>. https://doi.org/10.1111/jcpp.12721</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>American Speech-Language-Hearing Association. (n.d.). <i>Spoken language disorders</i>.</li>
                <li>Leonard, L. B. (2014). Children with specific language impairment (2nd ed.). <i>MIT Press</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: CORE TESTING AREAS
      ========================================== */}
      {activeTab === 'testing' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Standardized Testing Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Standardized Language Testing</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-diagnosis-testing.webp"
              alt="Child engaging in a receptive language test with an SLP"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              To accurately map a child's language profile, Speech-Language Pathologists utilize comprehensive test batteries that separate language into specific, measurable domains.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Ear className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Receptive Language</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Tests like the PPVT-5 (Peabody Picture Vocabulary Test) or TROG-2 measure how well the child understands vocabulary and grammar without requiring them to speak.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <MessageSquare className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Expressive Language</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Tests like the EVT-3 (Expressive Vocabulary Test) assess word retrieval, sentence formulation, and the ability to generate correct syntax.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4 md:col-span-2">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Layers className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Comprehensive Batteries</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Tests like the CELF-5 (Clinical Evaluation of Language Fundamentals) or CASL-2 are massive, multi-hour batteries that assess all language domains to provide a full developmental profile.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specialized Assessments Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Language Sampling & Additional Testing</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-diagnosis-assessments-hero.webp"
              alt="Visualizing natural language sampling and speech analysis"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Mic className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Natural Language Samples</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed mb-2">Standardized tests can miss real-world struggles. SLPs record natural conversation and narrative storytelling to analyze spontaneous grammar errors, vocabulary diversity, and sentence complexity.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <FileText className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Clinical Markers</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed mb-2">During sampling, SLPs look for highly specific grammatical markers that differentiate DLD from typical development, specifically errors with the past tense <em>-ed</em> and the third-person singular <em>-s</em>.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Brain className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Working Memory</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed mb-2">Testing often includes phonological working memory and processing speed tasks to identify the underlying cognitive roadblocks preventing efficient language acquisition.</p>
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
                <li>Wiig, E. H., Semel, E., & Secord, W. A. (2013). Clinical Evaluation of Language Fundamentals (5th ed.). <i>Pearson</i>.</li>
                <li>Heilmann, J., Nockerts, A., & Miller, J. F. (2010). Language sampling: Does the length of the transcript matter? <i>Language, Speech, and Hearing Services in Schools</i>.</li>
                <li>Rice, M. L., & Wexler, K. (1996). Toward tense as a clinical marker of specific language impairment in English-speaking children. <i>Journal of Speech and Hearing Research</i>.</li>
                <li>Gathercole, S. E., & Baddeley, A. D. (1990). Phonological memory deficits in language disordered children. <i>Journal of Memory and Language</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: DIAGNOSIS & OUTCOMES
      ========================================== */}
      {activeTab === 'criteria' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Differential Diagnosis Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Differential Diagnosis</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-diagnosis-differential.webp"
              alt="Conceptual visual of sorting different diagnostic profiles"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Because language delays are a symptom of many different conditions, the diagnostic team must carefully distinguish primary DLD from other neurodevelopmental profiles. It is also critical to identify co-occurring conditions, as ADHD and Dyslexia frequently present alongside DLD.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#ffd166] pb-2">Distinguishing Profiles</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Autism:</strong> DLD lacks the restricted interests and repetitive behaviors characteristic of ASD.</li>
                  <li><strong>Intellectual Disability:</strong> In DLD, language is significantly more impaired than general nonverbal cognition.</li>
                  <li><strong>Environmental:</strong> DLD persists even when environmental or bilingual exposure improves.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#ffd166] pb-2">Early Identification</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>While many children with DLD were "late talkers," not all late talkers have DLD.</li>
                  <li>Brief screening measures at well-child pediatric visits are essential for flagging at-risk children for early intervention.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Outcomes Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Educational Classification & The Report</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-diagnosis-report-hero.webp"
              alt="Formal educational support meeting and IEP planning"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <ClipboardList className="text-[#2abcd4] w-5 h-5" /> The Evaluation Report
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  A formal diagnostic report should provide a clear roadmap for parents and educators, synthesizing test data into actionable support strategies.
                </p>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="text-[#0c264d] font-bold text-sm mb-2">Key Components:</h4>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Developmental and medical history.</li>
                    <li>Standardized test scores and interpretations.</li>
                    <li>Language sample analysis data.</li>
                    <li>Formal diagnostic classification.</li>
                    <li>Detailed, actionable classroom recommendations.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <GraduationCap className="text-[#2abcd4] w-5 h-5" /> School-Based Services
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  To receive specialized instruction in the public school system, the clinical diagnosis must be translated into an educational classification under IDEA.
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-[#2abcd4] border-opacity-30 shadow-sm flex items-start gap-2">
                    <CheckCircle className="text-[#0A9DC4] w-4 h-4 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-700">Most children with DLD qualify for an IEP under the <strong>Speech or Language Impairment</strong> category.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#2abcd4] border-opacity-30 shadow-sm flex items-start gap-2">
                    <CheckCircle className="text-[#0A9DC4] w-4 h-4 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-700">If a child does not qualify for an IEP, a <strong>504 Plan</strong> can legally mandate classroom accommodations.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Mueller, K. L., & Tomblin, J. B. (2012). Examining the comorbidity of language disorders and ADHD. <i>Topics in Language Disorders</i>.</li>
                <li>Law, J., Boyle, J., Harris, F., Harkness, A., & Nye, C. (2000). The feasibility of universal screening for primary speech and language delay. <i>Developmental Medicine & Child Neurology</i>.</li>
                <li>Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About DLD
        </button>
      </div>

    </article>
  );
}