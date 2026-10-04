import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { FileSearch, Search, Users, ClipboardList, BookOpen, Ear, Brain, Eye, Activity, Network } from 'lucide-react';

interface HyperlexiaDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function HyperlexiaDiagnosis({ setCurrentArticle, initialTab }: HyperlexiaDiagnosisProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'process');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Hyperlexia: Testing & Diagnosing
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('hyperlexia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About Hyperlexia
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('hyperlexia')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About Hyperlexia
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
          onClick={() => setActiveTab('autism')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'autism'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Autism & Outcomes
        </button>
      </div>

      {/* ==========================================
          TAB 1: EVALUATION PROCESS
      ========================================== */}
      {activeTab === 'process' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Challenges Card (Cyan Container / Centered Lucide Icons) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Diagnostic Challenges</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-diagnosis-challenges.webp"
              alt="Visual representing the lack of a formal DSM-5 classification"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Diagnosing hyperlexia presents a unique set of challenges because it is not an official diagnosis in the DSM-5 or ICD-11 medical manuals. Clinicians focus on identifying the characteristic pattern rather than checking boxes on a standardized diagnostic list.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Search className="text-[#0A9DC4] w-8 h-8 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Easily Overlooked</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Early, flawless reading ability often heavily masks the child's underlying language difficulties. The child may simply be labeled "gifted," causing their severe comprehension problems to be completely missed until school demands increase.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <FileSearch className="text-[#0A9DC4] w-8 h-8 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">A Complex Syndrome</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Because there are no standardized criteria, it is often diagnosed as a descriptive "syndrome" alongside a primary diagnosis of Autism Spectrum Disorder or Developmental Language Disorder.</p>
              </div>
            </div>
          </div>

          {/* Process Card (Yellow Container / Centered Icon Badges) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Evaluation Team & Process</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-diagnosis-process-hero.webp"
              alt="Multidisciplinary team reviewing a child's developmental history"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              A hyperlexic profile involves reading, speech, cognition, and social development. Therefore, an accurate evaluation requires a multidisciplinary team rather than a single doctor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Qualified Professionals</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Speech-Language Pathologists are essential for mapping the gap between reading decoding and language comprehension. Neuropsychologists conduct comprehensive cognitive testing to identify specific visual strengths and processing delays.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Clinical Observation</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The process begins with a detailed developmental history, specifically noting when and how the child learned to read. Clinicians observe the child's natural play, watching to see if they prefer interacting with text over peers.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('hyperlexia')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About Hyperlexia
            </button>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>American Psychiatric Association. (2013). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed.). American Psychiatric Publishing.</li>
                <li>Grigorenko, E. L., Klin, A., & Volkmar, F. (2003). Annotation: Hyperlexia: Disability or superability? <i>Journal of Child Psychology and Psychiatry</i>.</li>
                <li>American Speech-Language-Hearing Association. (n.d.). <i>Reading and writing disorders</i>.</li>
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

          {/* Reading & Language Card (Slate Container / 3D Borders + Dots) */}
          <div className="bg-slate-100 border-2 border-slate-600 rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Reading & Language Assessment</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-diagnosis-testing.webp"
              alt="Child reading aloud during a standardized assessment"
              className="w-full h-auto block mx-auto mb-6 rounded-lg shadow-smborder border-slate-400"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              The primary goal of testing is to definitively document the "split" between the child's mechanical reading ability and their actual understanding of the words. This requires specialized, targeted assessments across both reading and spoken language domains.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex items-start gap-3">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#0A9DC4] mt-1 shrink-0 ml-1.5 shadow-sm"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Reading Assessment</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Tests like the TOWRE-2 assess the ability to sound out real words and pseudowords (nonsense words), which is typically years above age level. Tests like the GORT-5 measure if the child can answer inferential questions about the text, which is typically significantly lower than their decoding score.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex items-start gap-3">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#d4a017] mt-1 shrink-0 ml-1.5 shadow-sm"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Spoken Language</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Receptive assessments check the child's ability to follow multi-step verbal instructions and understand vocabulary without visual cues. Expressive assessments evaluate narrative abilities and conversational skills, often revealing a reliance on scripted or echoed language.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cognitive Card (Cyan Container / Centered Lucide Icons) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Cognitive Assessment</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-diagnosis-cognitive-hero.webp"
              alt="Visualizations of standard cognitive tests like block design"
              className="w-full h-auto block mx-auto mb-6 rounded-lg shadow-smborder border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Intelligence testing helps clinicians understand the child's underlying cognitive profile, distinguishing hyperlexia from global intellectual delays.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Brain className="text-[#0A9DC4] w-8 h-8 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">IQ Testing</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Nonverbal IQ tests are crucial because the child's verbal delays can artificially lower standard IQ scores. Nonverbal cognition is typically average or above average in hyperlexic profiles.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Eye className="text-[#0A9DC4] w-8 h-8 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Memory & Processing</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Assessments heavily contrast the child's visual memory (which is often exceptional) against their verbal and auditory working memory (which is often delayed).</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('hyperlexia')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About Hyperlexia
            </button>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Nation, K. (1999). Reading skills in hyperlexia: A developmental perspective. <i>Psychological Bulletin</i>.</li>
                <li>Wiederholt, J. L., & Bryant, B. R. (2012). <i>Gray Oral Reading Tests</i> (5th ed.). Pro-Ed.</li>
                <li>Wiig, E. H., Semel, E., & Secord, W. A. (2013). <i>Clinical Evaluation of Language Fundamentals</i> (5th ed.). Pearson.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: AUTISM & OUTCOMES
      ========================================== */}
      {activeTab === 'autism' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Autism Card (Yellow Container / Centered Icon Badges) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Autism Screening</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-diagnosis-autism.webp"
              alt="Clinician conducting play-based observation for social communication"
              className="w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Because hyperlexia is so heavily associated with the autism spectrum, a formal autism evaluation is almost always a required step in the diagnostic process. This helps differentiate the underlying cause of the child's social and communication delays.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Observation Tools</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Clinicians use the ADOS-2 (Autism Diagnostic Observation Schedule) to systematically evaluate social communication and play behaviors. They will assess if reading is being used as a repetitive, restricted interest rather than for functional communication.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Differentiating Types</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Type 1 is cleared of autism with a good prognosis, while Type 2 meets full criteria for an autism diagnosis. Type 3 shows autistic traits early on, requiring longitudinal tracking to see if they fade over time.</p>
              </div>
            </div>
          </div>

          {/* Profile & Report Card (Slate Container / 3D Borders + Dots) */}
          <div className="bg-slate-100 border-2 border-slate-600 rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Diagnostic Profile & Report</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-diagnosis-profile-hero.webp"
              alt="Clinical report highlighting the hyperlexic cognitive profile"
              className="w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-400"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Ultimately, clinicians look for a highly specific "spiky" profile across the test results to identify hyperlexia. Because it is not in the DSM-5, the final evaluation report must carefully frame the findings to secure appropriate school support.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex items-start gap-3">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1 shrink-0 ml-1.5 shadow-sm"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">The Characteristic Pattern</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Reading decoding is significantly advanced for their age, while reading comprehension is far below their decoding level. Visual memory and nonverbal cognition remain strong, contrasting with delayed spoken language and social pragmatics.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex items-start gap-3">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#0A9DC4] mt-1 shrink-0 ml-1.5 shadow-sm"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Terminology & Reporting</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Clinicians often describe it as a "hyperlexic reading pattern" within the narrative of the report. It is usually attached to an official diagnosis of Autism Spectrum Disorder or Developmental Language Disorder to ensure the child legally qualifies for an IEP.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('hyperlexia')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About Hyperlexia
            </button>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Kupperman, P., Bligh, S., & Barouski, K. (2002). Hyperlexia. In A. M. Wetherby & B. M. Prizant (Eds.), <i>Autism spectrum disorders</i>.</li>
                <li>Lord, C., Rutter, M., DiLavore, P. C., Risi, S., Gotham, K., & Bishop, S. (2012). <i>Autism Diagnostic Observation Schedule</i> (2nd ed.). Western Psychological Services.</li>
                <li>Nation, K., Clarke, P., Wright, B., & Williams, C. (2006). Patterns of reading ability in children with autism spectrum disorder. <i>Journal of Autism and Developmental Disorders</i>.</li>
                <li>Treffert, D. A. (2011). Hyperlexia III: Separating 'autistic-like' behaviors from autistic disorder. Wisconsin Medical Society.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}