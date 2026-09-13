import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Stethoscope, FileSearch, Users, Triangle, BookOpen, Eye, Search, GraduationCap, ArrowRightCircle } from 'lucide-react';

interface NVLDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function NVLDDiagnosis({ setCurrentArticle, initialTab }: NVLDDiagnosisProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'process');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          NVLD: Testing & Diagnosing
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('nvld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About NVLD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('nvld')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About NVLD
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
          Criteria & Outcomes
        </button>
      </div>

      {/* ==========================================
          TAB 1: EVALUATION PROCESS
      ========================================== */}
      {activeTab === 'process' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Challenges Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Diagnostic Challenges & Professionals</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-diagnosis-challenges.webp"
              alt="Representation of the diagnostic classification challenge"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Obtaining a formal Nonverbal Learning Disability diagnosis presents unique bureaucratic challenges because NVLD is not currently an official code in the DSM-5 or ICD-11 medical manuals.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> Instead of a simple blood test or standard checklist, identifying NVLD requires a comprehensive neuropsychological assessment to expose the subtle, distinctive gap between a child's verbal strengths and their nonverbal weaknesses.
            </p>

            <h3 className="text-[#0c264d] font-bold mt-6 mb-4 text-lg clear-both border-b border-[#2abcd4] border-opacity-20 pb-2">Who Can Evaluate for NVLD?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Brain className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[#0c264d] font-bold text-sm mb-1">Neuropsychologists</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">The most highly qualified professionals to identify the NVLD pattern, as they specialize in brain-behavior relationships and detailed cognitive testing.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Stethoscope className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[#0c264d] font-bold text-sm mb-1">Clinical Psychologists</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">Those with specific expertise in complex learning disabilities and developmental profiles can administer the necessary battery of IQ tests.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Evaluation Process</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-diagnosis-process-hero.webp"
              alt="Visual timeline of a comprehensive clinical evaluation"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because NVLD symptoms overlap heavily with Autism, ADHD, and Dyspraxia, the evaluation process is extensive. It looks far beyond basic academic scores to analyze the child's entire developmental history and daily functioning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <FileSearch className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Background & History</h3>
                </div>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Developmental:</strong> Tracking early motor milestones and language acquisition timelines.</li>
                  <li><strong>Medical:</strong> Reviewing history for neurological conditions, premature birth, or head injuries.</li>
                  <li><strong>Academic:</strong> Analyzing early report cards for the classic pattern of strong reading but struggling math/handwriting.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <Users className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Clinical Interviews</h3>
                </div>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Parent insights:</strong> Detailing struggles with daily living skills, motor coordination, and emotional regulation at home.</li>
                  <li><strong>Teacher feedback:</strong> Observations of social interactions with peers, unstructured recess behavior, and organizational failures in the classroom.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: CORE TESTING AREAS
      ========================================== */}
      {activeTab === 'testing' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Cognitive Testing Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Cognitive & Intelligence Testing</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-diagnosis-iq.webp"
              alt="Bar chart showing the split between Verbal and Spatial IQ"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The cornerstone of an NVLD diagnosis is standardized Intelligence Quotient (IQ) testing—most commonly the WISC-V for children or WAIS-IV for adults. Clinicians are not looking at the "Full Scale" overall IQ score, but rather the dramatic discrepancy between specific sub-indices.<sup className="text-[#10b981] font-bold ml-0.5">2</sup>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Verbal Comprehension (VCI)</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Typically scores average, above-average, or gifted. This measures verbal reasoning, vocabulary, and auditory knowledge.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Visual-Spatial (VSI)</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Scores significantly lower than the VCI. A gap of 10 to 15+ points between these two indices is the primary diagnostic marker of NVLD.<sup className="text-[#10b981] font-bold ml-0.5">3</sup></p>
              </div>
            </div>
          </div>

          {/* Specialized Assessments Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Specialized Assessments</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-diagnosis-assessments-hero.webp"
              alt="Visual representations of specialized clinical testing tools"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Beyond standard IQ testing, neuropsychologists utilize specialized tools to isolate exact deficits in motor control, spatial processing, and academic achievement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Triangle className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Visual-Spatial & Motor</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li><strong>Rey-Osterrieth Figure:</strong> Tests ability to copy and recall a highly complex geometric drawing.</li>
                  <li><strong>Grooved Pegboard:</strong> Measures fine motor dexterity and visual-motor coordination speed.</li>
                  <li><strong>Block Design:</strong> Recreating patterns using colored blocks.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <BookOpen className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Academic Achievement</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li><strong>Reading:</strong> Identifies the gap between excellent word decoding and poor abstract comprehension.</li>
                  <li><strong>Math:</strong> Highlights severe computational errors, misaligned columns, and poor geometric reasoning.</li>
                  <li><strong>Writing:</strong> Assesses graphomotor (handwriting) fatigue and disorganized essay structure.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Eye className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Social-Emotional</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Evaluating pragmatic (social) language use and conversational turn-taking.</li>
                  <li>Testing the ability to accurately read facial expressions from photographs.</li>
                  <li>Screening for secondary anxiety or depression using self-report behavioral scales.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: CRITERIA & OUTCOMES
      ========================================== */}
      {activeTab === 'criteria' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Criteria Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Diagnostic Criteria</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-diagnosis-criteria.webp"
              alt="Clipboard highlighting clinical diagnostic criteria"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Because there is no DSM-5 checklist, most neuropsychologists rely on Byron Rourke’s established diagnostic guidelines to confirm an NVLD profile. A diagnosis requires a consistent pattern of deficits across multiple domains, rather than just a single low math score.<sup className="text-[#10b981] font-bold ml-0.5">3</sup>
            </p>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] clear-both max-w-3xl">
              <h3 className="text-[#0c264d] font-bold mb-3 text-sm border-b border-[#ffd166] pb-2">Rourke's Core Indicators:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 list-disc ml-5 text-xs text-slate-700">
                <li>Bilateral tactile-perceptual deficits (left side of body typically worse).</li>
                <li>Bilateral psychomotor coordination deficits (clumsiness).</li>
                <li>Severe visual-spatial-organizational deficits.</li>
                <li>Extreme difficulty adapting to novel or complex situations.</li>
                <li>Deficits in nonverbal, abstract problem-solving.</li>
                <li>Highly developed rote verbal memory and reading decoding.</li>
                <li>Verbosity (talking excessively).</li>
                <li>Significant social interaction and cue-reading deficits.</li>
                <li>Academic failure specifically in advanced mathematics.</li>
              </ul>
            </div>
          </div>

          {/* Outcomes Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Differential Diagnosis & School Support</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-diagnosis-outcomes-hero.webp"
              alt="Conceptual graphic showing paths to academic support and clear diagnosis"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Search className="text-[#2abcd4] w-5 h-5" /> Distinguishing Conditions
                </h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="text-[#0c264d] font-bold text-xs mb-1">Autism Spectrum Disorder</h4>
                    <p className="text-xs text-slate-700">Unlike ASD, NVLD generally lacks restricted special interests and repetitive motor behaviors (stimming).<sup className="text-[#10b981] font-bold ml-0.5">4</sup></p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="text-[#0c264d] font-bold text-xs mb-1">ADHD</h4>
                    <p className="text-xs text-slate-700">While ADHD shares executive function issues, it does not intrinsically cause the severe visual-spatial or fine-motor deficits central to NVLD.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="text-[#0c264d] font-bold text-xs mb-1">Dyslexia</h4>
                    <p className="text-xs text-slate-700">The mirror opposite of NVLD; dyslexia features language deficits with strong spatial abilities, while NVLD features language strengths with spatial deficits.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <GraduationCap className="text-[#2abcd4] w-5 h-5" /> Educational Classification
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Because schools require official IDEA categories for Special Education, an NVLD report must translate clinical findings into educational law.
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-[#2abcd4] border-opacity-30 shadow-sm flex items-start gap-2">
                    <ArrowRightCircle className="text-[#0A9DC4] w-4 h-4 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-700">Often qualifies under <strong>Specific Learning Disability (SLD)</strong> in mathematics or written expression.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#2abcd4] border-opacity-30 shadow-sm flex items-start gap-2">
                    <ArrowRightCircle className="text-[#0A9DC4] w-4 h-4 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-700">May qualify under <strong>Other Health Impairment (OHI)</strong> if executive function/attention severely impacts learning.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#2abcd4] border-opacity-30 shadow-sm flex items-start gap-2">
                    <ArrowRightCircle className="text-[#0A9DC4] w-4 h-4 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-700">If denied an IEP, a <strong>504 Plan</strong> can legally mandate accommodations like typed notes and extended time.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('nvld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About NVLD
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p>1. American Psychiatric Association. (2022). Diagnostic and statistical manual of mental disorders (5th ed., text rev.). <i>American Psychiatric Association</i>. https://doi.org/10.1176/appi.books.9780890425787</p>
            <p>2. Fine, J. G., Semrud-Clikeman, M., Bledsoe, J. C., & Musielak, K. A. (2013). A critical review of the literature on NLD as a developmental disorder. <i>Child Neuropsychology</i>. https://doi.org/10.1080/09297049.2011.648923</p>
            <p>3. Mammarella, I. C., & Cornoldi, C. (2014). An analysis of the criteria used to diagnose children with nonverbal learning disability (NLD). <i>Child Neuropsychology</i>. https://doi.org/10.1080/09297049.2013.796920</p>
            <p>4. Klin, A., Volkmar, F. R., Sparrow, S. S., Cicchetti, D. V., & Rourke, B. P. (1995). Validity and neuropsychological characterization of Asperger syndrome: Convergence with nonverbal learning disabilities syndrome. <i>Journal of Child Psychology and Psychiatry</i>. https://doi.org/10.1111/j.1469-7610.1995.tb01361.x</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Rourke, B. P. (1989). Nonverbal learning disabilities: The syndrome and the model. <i>Guilford Press</i>.</li>
            <li>Thompson, S. (1997). The source for nonverbal learning disorders. <i>LinguiSystems</i>.</li>
          </ul>
        </div>
      </div>

    </article>
  );
}