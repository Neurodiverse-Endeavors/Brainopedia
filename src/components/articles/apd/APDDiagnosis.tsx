import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Stethoscope, ClipboardList, Users, Brain, Ear, Activity, FileText, CheckCircle, Search, AlertTriangle, Building, ShieldCheck, Heart, Headphones } from 'lucide-react';

interface APDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function APDDiagnosis({ setCurrentArticle, initialTab }: APDDiagnosisProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'process');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* GLOBAL STYLE FOR CITATIONS */}
      <style>
        {`
          sup {
            color: #10b981;
            font-weight: bold;
            margin-left: 2px;
          }
        `}
      </style>

      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Auditory Processing Disorder: Testing & Diagnosing
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('apd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About APD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('apd')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About APD
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
          The Diagnostic Process
        </button>
        <button
          onClick={() => setActiveTab('tests')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'tests'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Tests & Measures
        </button>
        <button
          onClick={() => setActiveTab('differential')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'differential'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Differential & Access
        </button>
      </div>

      {/* ==========================================
          TAB 1: THE DIAGNOSTIC PROCESS
      ========================================== */}
      {activeTab === 'process' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Process Card (Cyan) - Uses Float Image with organic text flow */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Who & When to Test</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-diagnosis-process.webp"
              alt="Audiologist working with a school-aged child in a clinical setting"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Diagnosing APD requires a highly specialized assessment. Because the central auditory nervous system is still actively developing in early childhood, formal diagnosis requires careful timing and the right professional.
            </p>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Stethoscope className="text-[#0A9DC4] w-5 h-5" /> Qualified Professionals
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Audiologists are the primary professionals qualified to diagnose APD. However, not all audiologists have the specific training or specialized equipment required for central auditory processing assessment; parents must seek out specialized clinical audiologists.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Brain className="text-[#0A9DC4] w-5 h-5" /> Age Considerations
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                APD is typically not formally diagnosed before age 7, as the auditory system must mature sufficiently for the tests to be clinically valid.<sup>1</sup> However, younger children showing red flags can and should receive early intervention therapies without waiting for the official label.
              </p>
            </div>

            <div>
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Users className="text-[#0A9DC4] w-5 h-5" /> Multidisciplinary Team
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                While the audiologist conducts the core APD testing, a comprehensive evaluation relies heavily on speech-language pathologists, psychologists, and educators to rule out other co-occurring conditions like language disorders or ADHD.
              </p>
            </div>
          </div>

          {/* Steps Card (Yellow) - Uses W-64 Centered Hero Image and Grid */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Diagnostic Steps</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-diagnosis-steps-hero.webp"
              alt="Visual flowchart representing the multidisciplinary assessment journey"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-300"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <ClipboardList className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">1. Case History</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Documents developmental milestones, academic performance, and detailed medical history—paying particularly close attention to any history of chronic ear infections.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Ear className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">2. Peripheral Hearing Test</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Standard audiological evaluation must precede APD testing. APD absolutely cannot be diagnosed if a peripheral hearing loss is present and accounts for the difficulties.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Headphones className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">3. Central Auditory Testing</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">A specialized battery of tests assessing how the brain processes degraded speech, rapid timing, and competing signals. No single test can diagnose APD; a full battery is required.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <CheckCircle className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">4. Integration</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The audiologist integrates the battery results with cognitive, language, and academic assessments to determine specific APD subtypes and real-world functional impacts.</p>
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
                <p>1. American Academy of Audiology. (2010). Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder. <i>AAA</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Bellis, T. J. (2003). Assessment and management of central auditory processing disorders in the educational setting. <i>Delmar Learning</i>.</li>
                <li>Emanuel, D. C., Ficca, K. N., & Korczak, P. (2011). Survey of the diagnosis and management of auditory processing disorder. <i>American Journal of Audiology</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: TESTS & MEASURES
      ========================================== */}
      {activeTab === 'tests' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Types of Tests Card (Slate) - Uses Float Image with organic text flow */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Types of APD Tests</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-diagnosis-tests.webp"
              alt="Child wearing specialized headphones in a sound booth, taking a dichotic listening task"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Clinical tests are designed to deliberately stress the auditory system by degrading the signal or introducing competing noise, forcing the brain to work harder to interpret the sound.
            </p>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Headphones className="text-[#0c264d] w-5 h-5" /> Dichotic Listening
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Different stimuli are presented to each ear simultaneously. The patient must either integrate the sounds or ignore one ear to focus on the other. This directly measures interhemispheric transfer.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Activity className="text-[#0c264d] w-5 h-5" /> Temporal Processing
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Tests like the Gaps-In-Noise (GIN) or Frequency Pattern Test assess the brain's ability to perceive the rapid timing, duration, and order of sounds—a critical function for perceiving rapid human speech.
              </p>
            </div>

            <div>
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Search className="text-[#0c264d] w-5 h-5" /> Monaural Low-Redundancy
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Speech signals are artificially degraded (filtered, time-compressed, or buried in noise) and presented to one ear at a time to assess the brain's "auditory closure"—its ability to fill in missing audio gaps.
              </p>
            </div>
          </div>

          {/* Electrophysiology Card (Cyan) - Uses W-64 Centered Hero Image and Grid */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Electrophysiological Measures</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-diagnosis-eeg-hero.webp"
              alt="Clinical visual of an ABR test showing brain waves responding to auditory stimuli"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              While behavioral testing requires the patient to actively respond, electrophysiological measures objectively record the brain's actual electrical response to sound.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Brain className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">ABR & MLR</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Auditory Brainstem Response (ABR) measures electrical activity from the auditory nerve. Middle Latency Response (MLR) measures thalamocortical pathways occurring 15-50 milliseconds after the sound, indicating how the mid-brain processes it.<sup>1</sup></p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <FileText className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Diagnostic Criteria & Batteries</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">APD is typically diagnosed when performance falls 2 or more standard deviations below the mean for the patient's age on at least two auditory processing tests.<sup>2</sup> The SCAN-3 battery is widely used to provide these age-normed scores.<sup>3</sup></p>
              </div>
            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Kraus, N., McGee, T., Carrell, T., & Sharma, A. (1995). Neurophysiologic bases of speech discrimination. <i>Ear and Hearing</i>.</p>
                <p>2. American Academy of Audiology. (2010). Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder. <i>AAA</i>.</p>
                <p>3. Keith, R. W. (2009). SCAN-3 for Children: Tests for Auditory Processing Disorders. <i>Pearson</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Bellis, T. J., & Ferre, J. M. (1999). Multidimensional approach to the differential diagnosis of central auditory processing disorders. <i>Journal of the American Academy of Audiology</i>.</li>
                <li>Musiek, F. E., Shinn, J. B., Jirsa, R., Bamiou, D. E., Baran, J. A., & Zaida, E. (2005). GIN (Gaps-In-Noise) test performance in subjects with central auditory involvement. <i>Ear and Hearing</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: DIFFERENTIAL & ACCESS
      ========================================== */}
      {activeTab === 'differential' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Differential Card (Yellow) - Uses Float Image with organic text flow */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Differential Diagnosis</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-diagnosis-differential.webp"
              alt="Magnifying glass separating the overlapping traits of APD, ADHD, and Language Disorders"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Because APD lacks a universal "gold standard" test, audiologists must carefully rule out other conditions that mimic APD symptoms, particularly ADHD, Autism, and standard language disorders.
            </p>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <AlertTriangle className="text-[#d4a017] w-5 h-5" /> vs. ADHD
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Both involve apparent inattention and difficulty following directions. The key difference is modality: APD difficulties are strictly specific to auditory processing, whereas ADHD impairs attention across all sensory modalities (visual, auditory, tactile).
              </p>
            </div>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Ear className="text-[#d4a017] w-5 h-5" /> vs. ANSD
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Auditory Neuropathy Spectrum Disorder (ANSD) involves dyssynchrony in the auditory nerve. Distinguishing features include absent or severely abnormal acoustic reflexes on medical testing, despite completely normal otoacoustic emissions.
              </p>
            </div>

            <div>
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Users className="text-[#d4a017] w-5 h-5" /> vs. Autism
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                While auditory processing differences are extremely common in autism, isolated APD does not present with the qualitative social-communication impairments, restricted interests, or severe repetitive behaviors required for an autism diagnosis.
              </p>
            </div>
          </div>

          {/* Access Card (Slate) - Uses W-64 Centered Hero Image and Grid */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Access & The Report</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-diagnosis-advocacy-hero.webp"
              alt="Parent reviewing a comprehensive diagnostic report, finding validation"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Securing an APD diagnosis can be administratively challenging, but it provides profound emotional validation and legal backing for academic accommodations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Building className="text-[#2abcd4] w-5 h-5" /> The Access Hurdle
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Not all school districts recognize APD for special education eligibility, and insurance coverage varies wildly (many do not consider it a covered medical diagnosis). Families often must seek out-of-pocket private evaluations at specialized audiology centers.
                </p>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Heart className="text-[#2abcd4] w-5 h-5" /> The Value of Validation
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Diagnosis provides an immediate explanation for longstanding difficulties. Understanding that the child's academic challenges stem from genuine neurological differences—rather than a lack of effort or intelligence—is deeply powerful for their self-esteem.
                </p>
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
                <li>Riccio, C. A., Hynd, G. W., Cohen, M. J., Hall, J., & Molt, L. (1994). Comorbidity of central auditory processing disorder and attention-deficit hyperactivity disorder. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>.</li>
                <li>Emanuel, D. C., Ficca, K. N., & Korczak, P. (2011). Survey of the diagnosis and management of auditory processing disorder. <i>American Journal of Audiology</i>.</li>
                <li>Berlin, C. I., Morlet, T., & Hood, L. J. (2003). Auditory neuropathy/dyssynchrony: Its diagnosis and management. <i>Pediatric Clinics of North America</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('apd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About APD
        </button>
      </div>

    </article>
  );
}