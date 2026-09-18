import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { FileSearch, Search, Users, ClipboardList, BookOpen, Ear, Brain, Activity, CheckCircle, Network, Eye } from 'lucide-react';

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

          {/* Challenges Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Diagnostic Challenges</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-diagnosis-challenges.webp"
              alt="Visual representing the lack of a formal DSM-5 classification"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Diagnosing hyperlexia presents a unique set of challenges because it is not an official diagnosis in the DSM-5 or ICD-11 medical manuals. Clinicians focus on identifying the characteristic pattern rather than checking boxes on a standardized diagnostic list.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Search className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Easily Overlooked</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Early, flawless reading ability often heavily masks the child's underlying language difficulties. The child may simply be labeled "gifted," causing their severe comprehension problems to be completely missed until school demands increase.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <FileSearch className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">A Complex Syndrome</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Because there are no standardized criteria, it is often diagnosed as a descriptive "syndrome" alongside a primary diagnosis of Autism Spectrum Disorder or Developmental Language Disorder.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Evaluation Team & Process</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-diagnosis-process-hero.webp"
              alt="Multidisciplinary team reviewing a child's developmental history"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              A hyperlexic profile involves reading, speech, cognition, and social development. Therefore, an accurate evaluation requires a multidisciplinary team rather than a single doctor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <Users className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Qualified Professionals</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li><strong>Speech-Language Pathologists:</strong> Essential for mapping the gap between reading decoding and language comprehension.</li>
                  <li><strong>Neuropsychologists:</strong> Conduct comprehensive cognitive and IQ testing to identify specific visual strengths and processing delays.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <ClipboardList className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Clinical Observation</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>The process begins with a detailed developmental history, specifically noting when and how the child learned to read.</li>
                  <li>Clinicians observe the child's natural play, watching to see if they prefer interacting with text/letters over interacting with peers.</li>
                </ul>
              </div>
            </div>
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
                <li>American Speech-Language-Hearing Association. (n.d.). <i>Reading and writing disorders</i>. ASHA.</li>
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

          {/* Reading & Language Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Reading & Language Assessment</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-diagnosis-testing.webp"
              alt="Child reading aloud during a standardized assessment"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The primary goal of testing is to definitively document the "split" between the child's mechanical reading ability and their actual understanding of the words.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <BookOpen className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Reading Assessment</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li><strong>Decoding:</strong> Tests like the TOWRE-2 assess the ability to sound out real words and pseudowords (nonsense words), which is typically years above age level.</li>
                    <li><strong>Comprehension:</strong> Tests like the GORT-5 measure if the child can answer inferential questions about the text, which is typically significantly lower than their decoding score.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Ear className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Spoken Language</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li><strong>Receptive:</strong> Assessing the child's ability to follow multi-step verbal instructions and understand vocabulary without visual cues.</li>
                    <li><strong>Expressive:</strong> Assessing narrative abilities and conversational skills, often revealing a reliance on scripted or echoed language.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Cognitive Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Cognitive Assessment</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-diagnosis-cognitive-hero.webp"
              alt="Visualizations of standard cognitive tests like block design"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Intelligence testing helps clinicians understand the child's underlying cognitive profile, distinguishing hyperlexia from global intellectual delays.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-3 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Brain className="text-[#0A9DC4] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">IQ Testing</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Nonverbal IQ tests are crucial because the child's verbal delays can artificially lower standard IQ scores.</li>
                  <li>Nonverbal cognition is typically average or above average in hyperlexic profiles.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-3 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Eye className="text-[#0A9DC4] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Memory & Processing</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Assessments heavily contrast the child's visual memory (often exceptional) against their verbal and auditory working memory (often delayed).</li>
                </ul>
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

          {/* Autism Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Autism Screening</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-diagnosis-autism.webp"
              alt="Clinician conducting play-based observation for social communication"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Because hyperlexia is so heavily associated with the autism spectrum, a formal autism evaluation is almost always a required step in the diagnostic process.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#ffd166] pb-2">Observation Tools</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Clinicians use the ADOS-2 (Autism Diagnostic Observation Schedule) to systematically evaluate social communication and play behaviors.</li>
                  <li>They will assess if reading is being used as a repetitive, restricted interest rather than for functional communication.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#ffd166] pb-2">Differentiating Types</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Type 1:</strong> Cleared of autism; good prognosis.</li>
                  <li><strong>Type 2:</strong> Meets full criteria for autism diagnosis.</li>
                  <li><strong>Type 3:</strong> Shows autistic traits early on, requiring longitudinal tracking to see if they fade over time.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Profile & Report Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Diagnostic Profile & Report</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-diagnosis-profile-hero.webp"
              alt="Clinical report highlighting the hyperlexic cognitive profile"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Network className="text-[#2abcd4] w-5 h-5" /> The Characteristic Pattern
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Ultimately, clinicians look for a highly specific "spiky" profile across the test results:
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex items-start gap-2">
                    <CheckCircle className="text-green-600 w-4 h-4 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-700">Reading decoding is significantly advanced for age.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex items-start gap-2">
                    <CheckCircle className="text-red-500 w-4 h-4 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-700">Reading comprehension is far below decoding level.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex items-start gap-2">
                    <CheckCircle className="text-green-600 w-4 h-4 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-700">Visual memory and nonverbal cognition are strong.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex items-start gap-2">
                    <CheckCircle className="text-red-500 w-4 h-4 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-700">Spoken language and social pragmatics are delayed.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <ClipboardList className="text-[#2abcd4] w-5 h-5" /> Terminology & Reporting
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Because hyperlexia is not in the DSM-5, the final evaluation report must carefully frame the findings for school support.
                </p>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-3">
                  <li>Clinicians often describe it as a "hyperlexic reading pattern" within the narrative of the report.</li>
                  <li>It is usually attached to an official diagnosis of Autism Spectrum Disorder or Developmental Language Disorder to ensure the child legally qualifies for an IEP and school-based speech therapy.</li>
                </ul>
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
                <li>Kupperman, P., Bligh, S., & Barouski, K. (2002). Hyperlexia. In A. M. Wetherby & B. M. Prizant (Eds.), <i>Autism spectrum disorders</i>.</li>
                <li>Lord, C., Rutter, M., DiLavore, P. C., Risi, S., Gotham, K., & Bishop, S. (2012). <i>Autism Diagnostic Observation Schedule</i> (2nd ed.). Western Psychological Services.</li>
                <li>Nation, K., Clarke, P., Wright, B., & Williams, C. (2006). Patterns of reading ability in children with autism spectrum disorder. <i>Journal of Autism and Developmental Disorders</i>.</li>
                <li>Treffert, D. A. (2011). Hyperlexia III: Separating 'autistic-like' behaviors from autistic disorder. Wisconsin Medical Society.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('hyperlexia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About Hyperlexia
        </button>
      </div>

    </article>
  );
}