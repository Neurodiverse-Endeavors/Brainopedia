import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyspraxiaDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DyspraxiaDiagnosis({ setCurrentArticle, initialTab }: DyspraxiaDiagnosisProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'criteria');

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Dyspraxia: Testing & Diagnosing
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dyspraxia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          Back to Dyspraxia
        </button>
      </div>

      {/* Tab Navigation */}
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
          onClick={() => setActiveTab('tests')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'tests'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Standardized Tests
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
      </div>

      {/* ==========================================
          TAB 1: DIAGNOSTIC CRITERIA
      ========================================== */}
      {activeTab === 'criteria' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Dyspraxia is formally diagnosed in the medical community under the clinical term Developmental Coordination Disorder (DCD). A diagnosis requires observing strict developmental criteria.
          </p>

          {/* Criteria Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">DSM-5 Diagnostic Standards</h2>
            
            <ImageWithFallback 
              src="/images/dyspraxia/dyspraxia-diagnosis-criteria.webp" 
              alt="Medical professional reviewing a patient file"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              For a formal diagnosis to be rendered, the individual's motor difficulties must meet the four foundational criteria outlined in the Diagnostic and Statistical Manual of Mental Disorders.<sup>1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Acquisition & Impact</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Delay:</strong> The acquisition and execution of coordinated motor skills are substantially below what is expected for the individual's age and opportunities for skill learning.</li>
                  <li><strong>Interference:</strong> The motor skills deficit significantly and persistently interferes with activities of daily living or impacts academic/work productivity.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Onset & Exclusions</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Early Onset:</strong> The onset of symptoms must occur during the early developmental period (childhood).</li>
                  <li><strong>Exclusions:</strong> The deficits are explicitly not better explained by intellectual disability, visual impairment, or a neurological condition affecting movement (like cerebral palsy).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: STANDARDIZED TESTS
      ========================================== */}
      {activeTab === 'tests' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Clinicians use specific, research-validated physical assessments to objectively measure a patient's motor proficiency and compare it securely against age-matched peers.
          </p>

          {/* Testing Batteries Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Motor Proficiency Assessments</h2>
            
            <ImageWithFallback 
              src="/images/dyspraxia/dyspraxia-diagnosis-tests.webp" 
              alt="Physical testing utilizing specialized blocks and balance boards"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              These standardized tests are highly interactive, requiring the individual to perform a series of timed physical tasks involving balance, throwing, catching, and precise manual dexterity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">MABC-2</h3>
                <p className="text-sm text-slate-700 mb-2 font-bold italic">Movement Assessment Battery for Children</p>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>The most commonly used test for diagnosing DCD globally.<sup>2</sup></li>
                  <li>Evaluates three specific domains: manual dexterity, aiming and catching, and both static and dynamic balance.</li>
                  <li>Provides an objective percentile rank indicating how far behind the individual is compared to their peers.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">BOT-2</h3>
                <p className="text-sm text-slate-700 mb-2 font-bold italic">Bruininks-Oseretsky Test</p>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>A highly comprehensive evaluation of fine and gross motor skills across eight distinct sub-categories.<sup>3</sup></li>
                  <li>Tests fine motor precision, manual dexterity, bilateral coordination, and upper-limb agility.</li>
                  <li>Often preferred for older children and adolescents.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: THE EVALUATION PROCESS
      ========================================== */}
      {activeTab === 'process' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Dyspraxia is evaluated comprehensively by observing the individual's performance in clinical settings, tracking their real-world navigation of environments, and reviewing their developmental milestones.
          </p>

          {/* Clinical Process Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Clinical Evaluation</h2>
            
            <ImageWithFallback 
              src="/images/dyspraxia/dyspraxia-diagnosis-process.webp" 
              alt="Occupational therapist interacting with a child during an assessment"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Assessments are primarily conducted by specialized Occupational Therapists (OTs) or developmental pediatricians, ensuring a holistic understanding of how the motor deficits affect daily living.<sup>4</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Functional Observation</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Real-World Impact:</strong> Clinicians directly observe how the individual moves in natural settings (e.g., navigating a classroom, manipulating scissors, or walking down a hallway).</li>
                  <li><strong>Task Breakdown:</strong> Watching the individual attempt multi-step physical tasks to pinpoint exactly where the motor planning process breaks down.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Developmental History</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Milestone Review:</strong> Tracing the history of early motor milestones such as age of sitting up, crawling, walking, and learning to ride a bike.<sup>5</sup></li>
                  <li><strong>Parent/Teacher Questionnaires:</strong> Utilizing tools like the DCDQ (Developmental Coordination Disorder Questionnaire) to gather structured feedback from parents regarding daily functioning.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dyspraxia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          Back to Dyspraxia
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
            Cited Studies & Literature
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p>1. American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</p>
            <p>2. Henderson, S. E., Sugden, D. A., & Barnett, A. L. (2007). <i>Movement Assessment Battery for Children-2</i>. Pearson.</p>
            <p>3. Bruininks, R. H., & Bruininks, B. D. (2005). <i>Bruininks-Oseretsky Test of Motor Proficiency</i> (2nd ed.). Pearson.</p>
            <p>4. Blank, R., et al. (2012). European Academy for Childhood Disability (EACD): Recommendations on the definition, diagnosis and intervention of developmental coordination disorder. <i>Developmental Medicine & Child Neurology</i>.</p>
            <p>5. Kirby, A., & Sugden, D. A. (2007). Children with developmental coordination disorders. <i>Journal of the Royal Society of Medicine</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>American Occupational Therapy Association. (2014). Occupational therapy practice framework. <i>American Journal of Occupational Therapy</i>.</li>
            <li>Biggs, V. (2005). <i>Caged in Chaos: A Dyspraxic Guide to Breaking Free</i>. Jessica Kingsley Publishers.</li>
            <li>Boon, M. (2010). <i>Understanding Dyspraxia: A Guide for Parents and Teachers</i> (2nd ed.). Jessica Kingsley Publishers.</li>
            <li>Cermak, S. A., & Larkin, D. (Eds.). (2002). <i>Developmental Coordination Disorder</i>. Thomson Delmar Learning.</li>
            <li>Colley, M. (2006). <i>Living with Dyspraxia: A Guide for Adults with Developmental Co-ordination Disorders</i>. Jessica Kingsley Publishers.</li>
            <li>Geuze, R. H. (2005). Postural control in children with developmental coordination disorder. <i>Neural Plasticity</i>.</li>
            <li>Gibbs, J., Appleton, J., & Appleton, R. (2007). Dyspraxia or developmental coordination disorder? Unravelling the enigma. <i>Archives of Disease in Childhood</i>.</li>
            <li>Kirby, A., & Peters, L. (2007). <i>100 Ideas for Supporting Children with Dyspraxia and DCD</i>. Continuum.</li>
            <li>Macintyre, S. (2001). <i>Dyspraxia 5-14: Identifying and Supporting Young People</i>. Routledge.</li>
            <li>Missiuna, C., Rivard, L., & Bartlett, D. (2003). Early identification and risk management of children with clumsy motor behaviors. <i>Pediatric Physical Therapy</i>.</li>
            <li>Sugden, D. A., & Chambers, M. E. (2005). <i>Children with Developmental Coordination Disorder</i>. Whurr Publishers.</li>
            <li>Wilson, P. H. (2005). Practitioner review: Approaches to assessment and treatment of children with DCD. <i>Journal of Child Psychology and Psychiatry</i>.</li>
            <li>Zwicker, J. G., Missiuna, C., Harris, S. R., & Boyd, L. A. (2012). Developmental coordination disorder: A review and update. <i>European Journal of Paediatric Neurology</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}