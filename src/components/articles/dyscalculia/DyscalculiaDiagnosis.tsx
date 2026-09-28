import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyscalculiaDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DyscalculiaDiagnosis({ setCurrentArticle, initialTab }: DyscalculiaDiagnosisProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'who');

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* Header Area */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl text-[#0c264d] font-bold">
          Dyscalculia: Testing & Diagnosing
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dyscalculia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Dyscalculia
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('who')}
          className={`px-6 py-3 rounded-md transition-colors font-normal shadow-sm ${
            activeTab === 'who'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          When & Who
        </button>
        <button
          onClick={() => setActiveTab('assessment')}
          className={`px-6 py-3 rounded-md transition-colors font-normal shadow-sm ${
            activeTab === 'assessment'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Assessment
        </button>
        <button
          onClick={() => setActiveTab('results')}
          className={`px-6 py-3 rounded-md transition-colors font-normal shadow-sm ${
            activeTab === 'results'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Results & Next Steps
        </button>
      </div>

      {/* ==========================================
          TAB 1: WHEN & WHO
      ========================================== */}
      {activeTab === 'who' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Centered Intro Paragraph */}
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Despite affecting roughly 3-7% of the global population, dyscalculia is vastly under-diagnosed compared to dyslexia, often being dismissed as simple "math anxiety."<sup>1</sup> Accurate diagnosis requires a comprehensive, multi-disciplinary assessment conducted by qualified educational or clinical professionals. Early identification is highly critical, but pursuing an evaluation at any age provides invaluable insights and opens doors to legally protected academic accommodations.
          </p>

          {/* When to Seek Evaluation Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">When to Seek Evaluation</h2>
            
            <ImageWithFallback 
              src="/images/dyscalculia/dyscalculia-diagnosis-evaluation.webp"
              alt="Educational psychologist conducting math assessment"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Parents and educators should trust their instincts when a child's mathematical struggles seem disproportionate to their overall intelligence or effort. If targeted tutoring and high-quality classroom instruction fail to produce meaningful progress over a six-month period, a formal neuropsychological evaluation is strongly warranted.
            </p>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100 max-w-4xl mx-auto">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Red Flags for Assessment</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li>Performance consistently more than one year below grade level in mathematics.</li>
                <li>Significant, unexplained discrepancy between math ability and success in other academic areas like reading.</li>
                <li>Persistent difficulty grasping concepts despite receiving quality instruction and specific intervention.</li>
                <li>Continued use of immature counting strategies (such as finger counting) well past age 8 or 9.</li>
                <li>Extreme math anxiety, physical distress, or active avoidance behaviors regarding schoolwork.</li>
                <li>A known family history of math learning difficulties or co-occurring disabilities like ADHD or Dyslexia.</li>
              </ul>
            </div>
          </div>

          {/* Diagnostic Criteria Card (Yellow - Text Only) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Diagnostic Criteria</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Medical and psychological professionals rely on strictly defined global criteria to formally diagnose dyscalculia. The two primary manuals used worldwide are the DSM-5 (used primarily in the United States) and the ICD-11 (used globally by the World Health Organization).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">DSM-5 Classification</h3>
                <p className="text-sm text-slate-700 mb-2 font-bold italic">"Specific Learning Disorder with Impairment in Mathematics"<sup>2</sup></p>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>Difficulties learning academic skills for at least 6 months despite targeted interventions.</li>
                  <li>Specific trouble with number sense, math fact retrieval, calculation, or quantitative reasoning.</li>
                  <li>Skills must be substantially and quantifiably below what is expected for chronological age.</li>
                  <li>Not better explained by intellectual disabilities, poor instruction, or sensory impairments.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">ICD-11 Classification</h3>
                <p className="text-sm text-slate-700 mb-2 font-bold italic">"Developmental learning disorder with impairment in mathematics"<sup>3</sup></p>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>Significant and persistent difficulties in learning academic skills related to mathematics.</li>
                  <li>Performance is markedly below what would be expected for age and level of intellectual functioning.</li>
                  <li>The impairment is not due to a disorder of intellectual development or lack of availability of education.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Qualified Professionals Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Who Can Diagnose Dyscalculia?</h2>
            
            <ImageWithFallback 
              src="/images/dyscalculia/dyscalculia-diagnosis-professionals.webp"
              alt="A multi-disciplinary team discussing an academic profile"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              A diagnosis is never rendered by a single individual; it requires a multi-disciplinary team. Evaluators synthesize raw data from standardized tests, insights from classroom teachers, and comprehensive developmental histories from parents to create an accurate neuro-profile.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Qualified Professionals</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Educational Psychologists:</strong> Hold specialized training in learning disabilities and academic testing.</li>
                  <li><strong>Neuropsychologists:</strong> Specialists who map exact brain-behavior relationships and cognitive processing.</li>
                  <li><strong>School Psychologists:</strong> Qualified to conduct assessments directly within the public educational system.</li>
                  <li><strong>Clinical Psychologists:</strong> Licensed professionals with expertise in comprehensive cognitive assessments.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Multi-Disciplinary Team</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Psychologist:</strong> Conducts the formal cognitive and achievement testing.</li>
                  <li><strong>Special Education Teacher:</strong> Provides direct educational assessment and baseline data.</li>
                  <li><strong>Classroom Teacher:</strong> Reports on real-world classroom performance and peer comparisons.</li>
                  <li><strong>Parents/Caregivers:</strong> Provides vital developmental history and home observations.</li>
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
          
          {/* Centered Intro Paragraph */}
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            A proper dyscalculia evaluation goes far beyond a simple math test, utilizing standardized cognitive batteries to map a student's entire neurological profile. Evaluators systematically measure innate number sense, working memory capacity, and processing speed to pinpoint exact processing breakdowns and rule out competing diagnoses.
          </p>

          {/* Core Components Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Core Assessment Components</h2>
            
            <ImageWithFallback 
              src="/images/dyscalculia/dyscalculia-diagnosis-components.webp"
              alt="Standardized testing materials and cognitive assessment"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              To ensure an accurate diagnosis, psychologists utilize a battery of standardized tests that measure both general intelligence and specific mathematical achievement. This allows the evaluator to confirm that the student's mathematical struggles are an isolated neurological difference rather than a general cognitive delay.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Background & History</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Developmental:</strong> Reviewing early milestones and early number concept emergence.</li>
                  <li><strong>Educational:</strong> Tracking academic performance and previous interventions attempted.</li>
                  <li><strong>Family/Medical:</strong> Noting hereditary learning difficulties or relevant health conditions.</li>
                  <li><strong>Socio-emotional:</strong> Assessing math anxiety levels and overall self-esteem.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Cognitive & Achievement</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>IQ Testing:</strong> Standardized tests (WISC-V, WAIS-IV) to assess verbal reasoning, visuospatial processing, and overall cognitive profile.<sup>4</sup></li>
                  <li><strong>Math Achievement Tests:</strong> Tools like the WIAT-III, KeyMath-3, or WJ-IV to accurately measure exact mathematical knowledge and grade-level skills.<sup>4</sup></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Specific Skill Testing Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Targeted Skill & Process Testing</h2>
            
            <ImageWithFallback 
              src="/images/dyscalculia/dyscalculia-diagnosis-skills.webp"
              alt="Student completing a cognitive magnitude assessment"
              className="w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Beyond general math scores, evaluators must isolate the specific cognitive breakdowns causing the difficulty. They test foundational number sense, working memory capacity, and processing speed to build a complete picture of how the student's brain handles data.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-2 text-md border-b border-cyan-100 pb-2">Number Sense</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
                  <li>Magnitude comparison tasks.</li>
                  <li>Number line estimation placing.</li>
                  <li>Rapid quantity recognition (subitizing).</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-2 text-md border-b border-cyan-100 pb-2">Math Execution</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
                  <li>Arithmetic fact retrieval speed.</li>
                  <li>Multi-digit calculation algorithms.</li>
                  <li>Fractions, decimals, and reasoning.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-2 text-md border-b border-cyan-100 pb-2">Memory & Speed</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
                  <li>Verbal and visuospatial memory tracking.</li>
                  <li>Rapid automatized naming of numbers.</li>
                  <li>Timed arithmetic fact fluency limits.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Differential Diagnosis Card (Yellow - Text Only) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Differential Diagnosis</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Evaluators must ensure the mathematical difficulties are not better explained by other environmental or cognitive factors.
            </p>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200 max-w-4xl mx-auto">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Conditions to Rule Out or Consider</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Intellectual Disability:</strong> Low cognitive ability evenly distributed across all academic and functional domains.</li>
                <li><strong>Inadequate Instruction:</strong> Math difficulties resulting strictly from poor teaching or excessive school absences.</li>
                <li><strong>Math Anxiety:</strong> Performance impaired purely by anxiety, but foundational math skills are intact when untimed and unstressed.</li>
                <li><strong>ADHD:</strong> Attention difficulties and impulsivity causing careless mathematical errors, rather than a lack of understanding.</li>
                <li><strong>Language or Sensory Disorders:</strong> Difficulty with word problems due strictly to reading comprehension, vision, or hearing barriers.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: RESULTS & NEXT STEPS
      ========================================== */}
      {activeTab === 'results' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Centered Intro Paragraph */}
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Receiving a formal dyscalculia diagnosis is not a limitation—it is a powerful tool for unlocking targeted interventions and essential structural supports. The final assessment report serves as a legal roadmap to build effective Individualized Education Programs (IEPs) and secure lifelong academic accommodations.
          </p>

          {/* The Report Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Assessment Report & Access</h2>
            
            <ImageWithFallback 
              src="/images/dyscalculia/dyscalculia-diagnosis-report.webp"
              alt="Comprehensive assessment report"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The culmination of the testing process is a comprehensive psychological report that clearly states the diagnosis, maps out the student's unique cognitive profile, and mandates specific educational interventions. Families can pursue this evaluation either through their public school system for free, or via private clinical practice for a faster, independent perspective.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">School-Based Assessment</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Free to families:</strong> Public schools are legally mandated to evaluate if a specific disability is suspected.</li>
                  <li><strong>Request process:</strong> Parents must submit a formal evaluation request in writing.</li>
                  <li><strong>Timeline:</strong> Must legally be completed within 60 days in most U.S. states.</li>
                  <li><strong>Purpose:</strong> Used primarily to determine eligibility for special education services and IEPs.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Private Assessment</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Cost:</strong> Typically ranges from $1,500-$4,000+ depending on the region and comprehensiveness.</li>
                  <li><strong>Advantages:</strong> Often offers a faster timeline, highly detailed cognitive mapping, and an independent clinical opinion.</li>
                  <li><strong>School compliance:</strong> Public schools are legally required to review and consider results from private independent evaluations.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Next Steps Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">After Diagnosis: Next Steps</h2>
            
            <ImageWithFallback 
              src="/images/dyscalculia/dyscalculia-diagnosis-next-steps.webp"
              alt="Parents and teacher planning an IEP meeting"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Once the report is finalized, the team must immediately translate the clinical findings into a living educational document (like an IEP or 504 Plan). This ensures the student receives consistent, evidence-based math interventions while being shielded from traditional testing methods that unfairly penalize their processing speed.
            </p>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100 max-w-4xl mx-auto">
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Educational Planning:</strong> Immediately begin development of an IEP (Individualized Education Program) or 504 Plan to legally secure support.</li>
                <li><strong>Targeted Intervention:</strong> Begin evidence-based, multi-sensory math interventions tailored to the student's specific deficits.</li>
                <li><strong>Implement Accommodations:</strong> Ensure the student has access to recommended tools, such as calculators, formula sheets, and extended testing time.</li>
                <li><strong>Student Education:</strong> Have open, strengths-based conversations to help the student understand their learning profile so they can build self-advocacy skills.</li>
                <li><strong>Progress Monitoring:</strong> Schedule regular check-ins to assess if the chosen interventions are actually effectively improving performance.</li>
              </ul>
            </div>
          </div>

          {/* Remember Card (Slate - Text Only) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm text-center">
            <h2 className="text-[#0c264d] font-bold mb-3 text-xl">A Final Note on Diagnosis</h2>
            <p className="text-sm text-slate-700 leading-relaxed max-w-3xl mx-auto">
              A dyscalculia diagnosis is not a label meant to limit potential—it is an empowering tool for understanding, accessing legal support, and developing brilliant coping strategies. With appropriate intervention, specialized instruction, and fair accommodations, individuals with dyscalculia can absolutely succeed in mathematics and pursue any professional career path they choose.
            </p>
          </div>
        </div>
      )}

      {/* --- BOTTOM BACK BUTTON --- */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dyscalculia')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-normal text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan whitespace-nowrap shrink-0"
        >
          <span className="text-lg">←</span>All About Dyscalculia
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Shalev, R. S., Auerbach, J., Manor, O., & Gross-Tsur, V. (2000). Developmental dyscalculia: Prevalence and prognosis. <i>European Child & Adolescent Psychiatry</i>.</p>
            <p>2. American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</p>
            <p>3. World Health Organization. (2019). <i>International statistical classification of diseases and related health problems</i> (11th ed.). WHO.</p>
            <p>4. Flanagan, D. P., & Alfonso, V. C. (2017). <i>Essentials of specific learning disability identification</i> (2nd ed.). John Wiley & Sons.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2018). <i>Learning disabilities: From identification to intervention</i> (2nd ed.). Guilford Press.</li>
            <li>Kaufmann, L., & von Aster, M. (2012). The diagnosis and management of dyscalculia. <i>Deutsches Ärzteblatt International</i>.</li>
            <li>Mazzocco, M. M., & Myers, G. F. (2003). Complexities in identifying and defining mathematics learning disability in the primary school-age years. <i>Annals of Dyslexia</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}