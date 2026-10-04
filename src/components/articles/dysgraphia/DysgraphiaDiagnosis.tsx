import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DysgraphiaDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DysgraphiaDiagnosis({ setCurrentArticle, initialTab }: DysgraphiaDiagnosisProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'who';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Dysgraphia: Testing & Diagnosing
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dysgraphia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          Back to Dysgraphia
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('who')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'who'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          When & Who
        </button>
        <button
          onClick={() => handleTabChange('assessment')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'assessment'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Assessment
        </button>
        <button
          onClick={() => handleTabChange('results')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'results'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Results & Path
        </button>
      </div>

      {/* ==========================================
          TAB 1: WHEN & WHO
      ========================================== */}
      {activeTab === 'who' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Accurate diagnosis of dysgraphia requires a comprehensive, multi-disciplinary assessment conducted by qualified educational or clinical professionals. Early identification is highly critical, but pursuing an evaluation at any age provides invaluable insights and opens doors to legally protected academic accommodations.
          </p>

          {/* When to Seek Evaluation Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">When to Seek Evaluation</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-diagnosis-evaluation.webp" 
              alt="Educator observing a student struggling to write"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Parents and educators should trust their instincts when a child's writing struggles seem completely disproportionate to their verbal intelligence or effort. If targeted handwriting practice and classroom interventions fail to produce meaningful progress, a formal evaluation is strongly warranted.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Red Flags in Children</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Handwriting remains significantly worse than peers despite consistent practice.</li>
                  <li>The physical act of writing causes visible pain, hand cramping, or fatigue.</li>
                  <li>There is a massive, unexplained discrepancy between what they can say and what they can write.</li>
                  <li>Writing difficulties persist forcefully beyond the 2nd or 3rd grade.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Red Flags in Teens/Adults</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Handwriting remains largely illegible even to the writer themselves.</li>
                  <li>Extreme difficulty completing timed written tests or taking live lecture notes.</li>
                  <li>Intentional avoidance of any courses, majors, or jobs that require extensive hand-writing.</li>
                  <li>Heavy, exclusive reliance on others to fill out physical forms or documents.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Qualified Professionals Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Who Can Diagnose Dysgraphia?</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-diagnosis-professionals.webp" 
              alt="A multi-disciplinary team reviewing a student's academic profile"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              A diagnosis is rarely rendered by a single individual; it requires a multi-disciplinary approach. Evaluators synthesize raw data from standardized tests, fine motor assessments, and comprehensive developmental histories to create an accurate neuro-profile.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Qualified Evaluators</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Educational Psychologists:</strong> Hold specialized training in identifying specific learning disabilities.</li>
                  <li><strong>Neuropsychologists:</strong> Specialists who map exact brain-behavior relationships and cognitive processing.</li>
                  <li><strong>Occupational Therapists:</strong> Specifically assess fine motor coordination, grip, and physical graphomotor skills.</li>
                  <li><strong>Speech-Language Pathologists:</strong> Often involved if spelling or language formulation deficits are prominent.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">The Collaborative Team</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Psychologist:</strong> Conducts the formal cognitive, memory, and academic achievement testing.</li>
                  <li><strong>Special Education Teacher:</strong> Provides direct educational assessment and baseline instructional data.</li>
                  <li><strong>Classroom Teacher:</strong> Reports on real-world classroom performance and daily avoidance behaviors.</li>
                  <li><strong>Parents/Caregivers:</strong> Provides vital early developmental history and at-home observations.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Diagnostic Criteria Card (Slate - Text Only) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Diagnostic Criteria</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Medical and psychological professionals rely on strictly defined global criteria to formally diagnose dysgraphia. The two primary manuals used worldwide are the DSM-5 (used primarily in the United States) and the IDEA framework for public educational classification.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">DSM-5 Classification</h3>
                <p className="text-xs text-slate-700 mb-2 font-bold italic">"Specific Learning Disorder with Impairment in Written Expression"</p>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Difficulties learning academic skills for at least 6 months despite targeted, explicit interventions.</li>
                  <li>Specific trouble with spelling accuracy, grammar, punctuation, or clarity of written expression.</li>
                  <li>Skills must be substantially and quantifiably below what is expected for chronological age.</li>
                  <li>Not better explained by intellectual disabilities, poor instruction, or sensory/visual impairments.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">IDEA Educational Classification</h3>
                <p className="text-xs text-slate-700 mb-2 font-bold italic">Qualifies under "Specific Learning Disability (SLD)"</p>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Must demonstrate a disorder in one or more basic psychological processes.</li>
                  <li>Must severely affect the student's ability to engage in written expression.</li>
                  <li>Must not be primarily due to other disabilities (like blindness) or economic disadvantage.</li>
                  <li>Must definitively require the implementation of special education services to succeed.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: THE ASSESSMENT
      ========================================== */}
      {activeTab === 'assessment' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            A proper dysgraphia evaluation goes far beyond simply looking at a messy handwriting sample. Evaluators systematically measure innate intelligence, fine motor coordination, and spelling memory to pinpoint the exact cognitive bottlenecks causing the writing failure.
          </p>

          {/* Core Components Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Core Assessment Components</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-diagnosis-components.webp" 
              alt="Standardized cognitive testing materials on a desk"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              To ensure an accurate diagnosis, psychologists utilize a battery of standardized tests that measure both general intelligence and specific academic achievement. This allows the evaluator to confirm that the student's writing struggles are an isolated neurological difference rather than a general cognitive delay.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Cognitive & Intelligence</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>IQ Testing (WISC/WAIS):</strong> Assesses verbal reasoning, visuospatial processing, and overall cognitive ability to establish a baseline.</li>
                  <li><strong>Processing Speed:</strong> Pinpoints how quickly the brain can process and react to visual information.</li>
                  <li><strong>Working Memory:</strong> Assesses the exact capacity for holding orthographic information in the mind while writing.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Academic & Spelling</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Achievement Tests (WIAT/WJ):</strong> Accurately measures exact grade-level skills in spelling, sentence composition, and essay drafting.</li>
                  <li><strong>Spelling Diagnostics:</strong> Tools like the TWS-5 evaluate whether spelling errors are phonetic, sequential, or orthographic.</li>
                  <li><strong>Error Analysis:</strong> Deeply examining the specific types of spelling errors made across different writing conditions.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Motor Skills & Samples Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Motor Skills & Writing Samples</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-diagnosis-skills.webp" 
              alt="Occupational therapist assessing fine motor grip"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because dysgraphia frequently involves dyspraxia (motor planning deficits), occupational therapists perform specialized physical assessments. These physical tests are cross-referenced with spontaneous writing samples to see how the student's motor skills hold up under real academic pressure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Fine Motor & Integration</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Visual-Motor Integration (VMI):</strong> Tests how well the eyes and hands coordinate during drawing tasks.</li>
                  <li><strong>Pegboard Tests:</strong> Evaluates raw finger dexterity and manual bilateral coordination.</li>
                  <li><strong>Handwriting Speed (DASH):</strong> Specifically measures the speed and legibility of handwriting under timed conditions.</li>
                  <li><strong>Motor Planning:</strong> Assessments involving sequential tapping or complex, repetitive motor tasks.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Sample Analysis</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Spontaneous Generation:</strong> Comparing untimed, creative writing samples against high-pressure, timed tests.</li>
                  <li><strong>Copying Tasks:</strong> Evaluating the speed and accuracy of copying text from a distant board versus a nearby piece of paper.</li>
                  <li><strong>Legibility & Spacing:</strong> Objectively scoring the formation of letters and the spatial organization of the page.</li>
                  <li><strong>Grammar vs. Ideas:</strong> Looking for a discrepancy between the quality of the ideas and the mechanical grammar used to express them.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Differential Diagnosis Card (Slate - Text Only) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Differential Diagnosis</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Evaluators must ensure the writing difficulties are not better explained by other environmental, sensory, or cognitive factors. This careful elimination process prevents misdiagnosis and ensures the student receives the correct type of support.
            </p>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 max-w-4xl mx-auto">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Conditions to Rule Out or Consider</h3>
              <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                <li><strong>Visual Impairment:</strong> A standard vision screening is essential to rule out basic sight limitations.</li>
                <li><strong>Inadequate Instruction:</strong> Ensuring the difficulties aren't strictly resulting from excessive school absences or poor foundational teaching.</li>
                <li><strong>Dyslexia:</strong> Determining if the core deficit is rooted in reading (dyslexia) rather than primarily in writing and motor output.</li>
                <li><strong>ADHD:</strong> Verifying if the writing errors are caused by careless impulsivity and inattention rather than true motor/language barriers.</li>
                <li><strong>DCD/Dyspraxia:</strong> Checking if the motor difficulties are isolated to writing, or if they affect gross motor skills across the board.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: RESULTS & PATH
      ========================================== */}
      {activeTab === 'results' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Receiving a formal dysgraphia diagnosis is not a limitation—it is a powerful tool for unlocking targeted interventions and essential structural supports. The final assessment report serves as a legal roadmap to build effective Individualized Education Programs (IEPs) and secure lifelong academic accommodations.
          </p>

          {/* The Report Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Assessment Report & Access</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-diagnosis-report.webp" 
              alt="Parents reviewing a comprehensive assessment report"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The culmination of the testing process is a comprehensive psychological report that clearly states the diagnosis, maps out the student's unique cognitive profile, and mandates specific educational interventions. Families can pursue this evaluation either through their public school system for free, or via private clinical practice for a faster, independent perspective.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">School-Based Assessment</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Free to families:</strong> Public schools are legally mandated to evaluate if a specific disability is suspected.</li>
                  <li><strong>Request process:</strong> Parents must submit a formal evaluation request in writing to trigger the process.</li>
                  <li><strong>Timeline:</strong> Must legally be completed within specific timelines (typically 60 days in most U.S. states).</li>
                  <li><strong>Purpose:</strong> Used primarily to determine eligibility for special education services and IEPs.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Private Assessment</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Cost:</strong> Typically ranges from $1,500 to $5,000+ depending on the region and comprehensiveness.</li>
                  <li><strong>Advantages:</strong> Often offers a faster timeline, highly detailed cognitive mapping, and an independent clinical opinion.</li>
                  <li><strong>School compliance:</strong> Public schools are legally required to review and consider results from private independent evaluations.</li>
                  <li><strong>Adults:</strong> Often the only pathway for adults seeking a diagnosis for workplace or university accommodations.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Next Steps Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">After Diagnosis: Next Steps</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-diagnosis-next-steps.webp" 
              alt="Student using a laptop as a writing accommodation"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Once the report is finalized, the team must immediately translate the clinical findings into a living educational document (like an IEP or 504 Plan). This ensures the student receives consistent, evidence-based writing interventions while being shielded from traditional testing methods that unfairly penalize their motor output.
            </p>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100 max-w-4xl mx-auto">
              <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                <li><strong>Educational Planning:</strong> Immediately begin development of an IEP or 504 Plan to legally secure support.</li>
                <li><strong>Targeted Intervention:</strong> Begin evidence-based occupational therapy or explicit spelling/handwriting instruction.</li>
                <li><strong>Implement Accommodations:</strong> Ensure the student has immediate access to recommended tools, particularly laptops for typing and speech-to-text software.</li>
                <li><strong>Student Education:</strong> Have open, strengths-based conversations to help the student understand their learning profile so they can build self-advocacy skills.</li>
                <li><strong>Re-evaluation:</strong> Schedule formal re-evaluations every 3 years (or prior to college entry) to ensure accommodations remain relevant.</li>
              </ul>
            </div>
          </div>

          {/* Remember Card (Slate - Text Only) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm text-center">
            <h2 className="text-[#0c264d] font-bold mb-3 text-xl">A Final Note on Diagnosis</h2>
            <p className="text-sm text-slate-700 leading-relaxed max-w-3xl mx-auto">
              A dysgraphia diagnosis is not a label meant to limit potential—it is an empowering tool for understanding, accessing legal support, and developing brilliant technological workarounds. With appropriate intervention and fair accommodations (like typing), individuals with dysgraphia can absolutely succeed in academia and pursue any professional career path they choose.
            </p>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dysgraphia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          Back to Dysgraphia
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>American Occupational Therapy Association. (2014). Occupational therapy practice framework. <i>American Journal of Occupational Therapy</i>.</li>
            <li>American Psychiatric Association. (2013). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed.).</li>
            <li>Amundson, S. J. (1995). <i>Evaluation Tool of Children's Handwriting</i>. O.T. KIDS.</li>
            <li>Association on Higher Education and Disability. (2012). <i>Supporting accommodation requests: Guidance on documentation practices</i>.</li>
            <li>Ayres, A. J. (1989). <i>Sensory Integration and Praxis Tests</i>. Western Psychological Services.</li>
            <li>Barnett, A. L., et al. (2007). <i>Detailed Assessment of Speed of Handwriting</i>. Pearson.</li>
            <li>Beery, K. E., & Beery, N. A. (2010). <i>The Beery-Buktenica developmental test of visual-motor integration</i>. Pearson.</li>
            <li>Berninger, V. W. (2007). <i>Process Assessment of the Learner, Second Edition: Diagnostic for Reading and Writing (PAL-II RW)</i>. Pearson.</li>
            <li>Berninger, V. W. (2009). Highlights of programmatic, interdisciplinary research on writing. <i>Learning Disabilities Research & Practice</i>.</li>
            <li>Berninger, V. W., & Fuller, F. (1992). Gender differences in orthographic, verbal, and compositional fluency. <i>Journal of School Psychology</i>.</li>
            <li>Berninger, V. W., & May, M. O. (2011). Evidence-based diagnosis and treatment for specific learning disabilities. <i>Journal of Learning Disabilities</i>.</li>
            <li>Berninger, V. W., & Richards, T. L. (2010). Inter-relationships among behavioral markers, genes, brain, and treatment. <i>Future Neurology</i>.</li>
            <li>Berninger, V. W., & Wolf, B. J. (2009). <i>Teaching students with dyslexia and dysgraphia</i>. Brookes Publishing.</li>
            <li>Berninger, V. W., et al. (2008). Writing problems in developmental dyslexia. <i>Journal of School Psychology</i>.</li>
            <li>Connelly, V., et al. (2006). Contribution of lower order letter writing skills. <i>Developmental Neuropsychology</i>.</li>
            <li>Deuel, R. K. (1995). Developmental dysgraphia and motor skills disorders. <i>Journal of Child Neurology</i>.</li>
            <li>Dewey, D., et al. (2002). Developmental coordination disorder. <i>Human Movement Science</i>.</li>
            <li>Feder, K. P., & Majnemer, A. (2007). Handwriting development, competency, and intervention. <i>Developmental Medicine & Child Neurology</i>.</li>
            <li>Fletcher, J. M., et al. (2018). <i>Learning disabilities: From identification to intervention</i> (2nd ed.). Guilford Press.</li>
            <li>Fuchs, D., & Fuchs, L. S. (2006). Introduction to response to intervention. <i>Reading Research Quarterly</i>.</li>
            <li>Fuchs, L. S., & Fuchs, D. (2002). <i>What is scientifically-based research on progress monitoring?</i> National Center on Student Progress Monitoring.</li>
            <li>Fuentes, C. T., et al. (2009). Children with autism show specific handwriting impairments. <i>Neurology</i>.</li>
            <li>Gerber, P. J. (2012). The impact of learning disabilities on adulthood. <i>Journal of Learning Disabilities</i>.</li>
            <li>Glascoe, F. P. (2005). Screening for developmental and behavioral problems. <i>Mental Retardation and Developmental Disabilities Research Reviews</i>.</li>
            <li>Graham, S., & Harris, K. R. (2009). Almost 30 years of writing research. <i>Learning Disabilities Research & Practice</i>.</li>
            <li>Graham, S., & Weintraub, N. (1996). A review of handwriting research. <i>Educational Psychology Review</i>.</li>
            <li>Graham, S., et al. (1997). Role of mechanics in composing. <i>Journal of Educational Psychology</i>.</li>
            <li>Graham, S., et al. (2001). Which manuscript letters do primary grade children write legibly? <i>Journal of Educational Psychology</i>.</li>
            <li>Gregg, N. (2009). <i>Adolescents and adults with learning disabilities and ADHD</i>. Guilford Press.</li>
            <li>Gregg, N., et al. (2007). Timed essay writing: Implications for high-stakes tests. <i>Journal of Learning Disabilities</i>.</li>
            <li>Gureasko-Moore, S., et al. (2007). Self-management of classroom preparedness and homework. <i>School Psychology Review</i>.</li>
            <li>Hallahan, D. P., et al. (2013). A brief history of the field of learning disabilities. In <i>Handbook of learning disabilities</i> (2nd ed.). Guilford Press.</li>
            <li>Hammill, D. D., & Larsen, S. C. (2009). <i>Test of Written Language</i> (4th ed.). Pro-Ed.</li>
            <li>Hammill, D. D., et al. (2014). <i>Developmental Test of Visual Perception</i> (3rd ed.). Pro-Ed.</li>
            <li>Hamstra-Bletz, L., & Blöte, A. W. (1993). A longitudinal study on dysgraphic handwriting in primary school. <i>Journal of Learning Disabilities</i>.</li>
            <li>Handler, S. M., & Fierson, W. M. (2011). Learning disabilities, dyslexia, and vision. <i>Pediatrics</i>.</li>
            <li>Hooper, S. R., et al. (2002). Executive functions in elementary school children. <i>Journal of Learning Disabilities</i>.</li>
            <li>Hoy, M. M., et al. (2011). A systematic review of interventions to improve handwriting. <i>Canadian Journal of Occupational Therapy</i>.</li>
            <li>Individuals with Disabilities Education Act, 20 U.S.C. § 1400. (2004).</li>
            <li>Karlsdottir, R., & Stefansson, T. (2002). Problems in developing functional handwriting. <i>Perceptual and Motor Skills</i>.</li>
            <li>Katusic, S. K., et al. (2009). The forgotten learning disability. <i>Pediatrics</i>.</li>
            <li>Larsen, S. C., et al. (2013). <i>Test of Written Spelling</i> (5th ed.). Pro-Ed.</li>
            <li>Learning Disabilities Association of America. (2020). <i>Testing and evaluation</i>.</li>
            <li>Lerner, J., & Johns, B. (2015). <i>Learning disabilities and related disabilities</i> (13th ed.). Cengage Learning.</li>
            <li>Levine, M. D. (1987). <i>Developmental variation and learning disorders</i>. Educators Publishing Service.</li>
            <li>Lichtenstein, R., & Karge, B. D. (1997). Consultation and collaboration in education. In <i>Best practices in school psychology III</i>. NASP.</li>
            <li>MacArthur, C. A. (2009). Reflections on research on writing and technology for struggling writers. <i>Learning Disabilities Research & Practice</i>.</li>
            <li>Mather, N., & Wendling, B. J. (2012). <i>Essentials of evidence-based academic interventions</i>. John Wiley & Sons.</li>
            <li>Mather, N., & Wendling, B. J. (2014). <i>Essentials of dyslexia assessment and intervention</i>. John Wiley & Sons.</li>
            <li>McCutchen, D. (1996). A capacity theory of writing: Working memory in composition. <i>Educational Psychology Review</i>.</li>
            <li>Moats, L. C. (1995). <i>Spelling: Development, disability, and instruction</i>. York Press.</li>
            <li>National Association of School Psychologists. (2015). <i>Position statement on private school placement and services</i>.</li>
            <li>National Association of School Psychologists. (2020). <i>Model for comprehensive and integrated school psychological services</i>.</li>
            <li>National Center for Learning Disabilities. (2014). <i>The state of learning disabilities</i> (3rd ed.).</li>
            <li>Nelson, J. M., & Harwood, H. (2011). Learning disabilities and anxiety: A meta-analysis. <i>Journal of Learning Disabilities</i>.</li>
            <li>Ortiz, S. O., & Dynda, A. M. (2005). Use of intelligence tests with culturally and linguistically diverse populations. In <i>Contemporary intellectual assessment</i>. Guilford Press.</li>
            <li>Peverly, S. T. (2006). The importance of handwriting speed in adult writing. <i>Developmental Neuropsychology</i>.</li>
            <li>Reisman, J. E. (1999). <i>Minnesota Handwriting Assessment</i>. Harcourt Assessment.</li>
            <li>Reynolds, C. R., & Kamphaus, R. W. (2015). <i>BASC-3: Behavior assessment system for children</i> (3rd ed.). Pearson.</li>
            <li>Rosenblum, S., et al. (2003). Computerized temporal handwriting characteristics. <i>American Journal of Occupational Therapy</i>.</li>
            <li>Rosenblum, S., et al. (2003). Product and process evaluation of handwriting difficulties. <i>Educational Psychology Review</i>.</li>
            <li>Salvia, J., et al. (2016). <i>Assessment in special and inclusive education</i> (13th ed.). Cengage Learning.</li>
            <li>Sattler, J. M. (2008). <i>Assessment of children: Cognitive foundations</i> (5th ed.). Jerome M. Sattler Publisher.</li>
            <li>Sattler, J. M., & Hoge, R. D. (2006). <i>Assessment of children: Behavioral, social, and clinical foundations</i> (5th ed.). Jerome M. Sattler Publisher.</li>
            <li>Schulte-Körne, G., et al. (1996). Familial aggregation of spelling disability. <i>Journal of Child Psychology and Psychiatry</i>.</li>
            <li>Shapiro, E. S. (2011). <i>Academic skills problems: Direct assessment and intervention</i> (4th ed.). Guilford Press.</li>
            <li>Smits-Engelsman, B. C., et al. (2001). Fine motor deficiencies in children diagnosed as DCD. <i>Human Movement Science</i>.</li>
            <li>Tannock, R. (2013). Rethinking ADHD and LD in DSM-5. <i>Journal of Learning Disabilities</i>.</li>
            <li>Tiffin, J., & Asher, E. J. (1948). The Purdue pegboard. <i>Journal of Applied Psychology</i>.</li>
            <li>Treiman, R. (1993). <i>Beginning to spell: A study of first-grade children</i>. Oxford University Press.</li>
            <li>Tseng, M. H., & Cermak, S. A. (1993). The influence of ergonomic factors on handwriting performance. <i>American Journal of Occupational Therapy</i>.</li>
            <li>U.S. Department of Education. (2006). <i>Identification of specific learning disabilities</i>.</li>
            <li>Wechsler, D. (2014). <i>Wechsler Intelligence Scale for Children</i> (5th ed.). Pearson.</li>
            <li>Wechsler, D. (2020). <i>Wechsler Individual Achievement Test</i> (4th ed.). Pearson.</li>
            <li>Weintraub, N., & Graham, S. (1998). Writing legibly and quickly. <i>Learning Disabilities Research & Practice</i>.</li>
            <li>Wendling, B. J., & Mather, N. (2009). <i>Essentials of evidence-based academic interventions</i>. John Wiley & Sons.</li>
            <li>Wilson, M. S., & Reschly, D. J. (1996). Assessment in school psychology training and practice. <i>School Psychology Review</i>.</li>
            <li>Wright, P. W. D., & Wright, P. D. (2006). <i>Wrightslaw: Special education law</i> (2nd ed.). Harbor House Law Press.</li>
            <li>Yell, M. L. (2016). <i>The law and special education</i> (4th ed.). Pearson.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}