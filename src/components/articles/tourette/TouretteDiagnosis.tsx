import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { CheckCircle2, XCircle, Stethoscope, ClipboardList, Activity } from 'lucide-react';

interface TouretteDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TouretteDiagnosis({ setCurrentArticle, initialTab }: TouretteDiagnosisProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'criteria';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Tourette's: Testing & Diagnosing
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('tourette')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Tourette's
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('criteria')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'criteria'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Diagnostic Criteria
        </button>
        <button
          onClick={() => handleTabChange('process')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'process'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Evaluation Process
        </button>
        <button
          onClick={() => handleTabChange('screening')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'screening'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Co-occurring Screening
        </button>
      </div>

      {/* ==========================================
          TAB 1: DIAGNOSTIC CRITERIA
      ========================================== */}
      {activeTab === 'criteria' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Tourette's is diagnosed clinically based on a very specific timeline and pattern of involuntary movements. There is no blood test, brain scan, or genetic screening that can definitively diagnose the condition.
          </p>

          {/* Criteria Card (Cyan) - Uses Pure Lucide Icons */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <ImageWithFallback 
              src="/images/tourette/tourette-diagnosis-main.webp"
              alt="Medical professional reviewing diagnostic criteria"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center clear-both">The Diagnostic Standard</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Clinicians rely on established international medical manuals to determine if an individual's tics meet the full threshold for a formal Tourette's diagnosis.<sup>1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">Required for Diagnosis</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Multiple Tics:</strong> The individual must have experienced multiple motor tics and at least one vocal tic, though they do not have to occur at the exact same time.<sup>1</sup></p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Duration:</strong> Tics must have been present for more than one year since the very first tic was noticed.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Onset:</strong> The tics must have begun before the age of 18.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">Ruling Out Other Causes</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Substances:</strong> Symptoms must not be the direct physiological result of a substance or medication (such as stimulants).</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Medical Conditions:</strong> Symptoms must not be caused by another underlying medical condition, such as Huntington's disease or post-viral encephalitis.<sup>1</sup></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: THE EVALUATION PROCESS
      ========================================== */}
      {activeTab === 'process' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Because a diagnosis relies on clinical observation rather than lab results, the evaluation process is highly thorough, focusing on the individual's developmental history and daily functioning.
          </p>

          {/* Process Card (Yellow) - Uses Popped Hover Layout */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <ImageWithFallback 
              src="/images/tourette/tourette-diagnosis-process.webp"
              alt="Clinician conducting an evaluation"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center clear-both">Clinical Assessment</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Diagnosis is typically made by a neurologist, psychiatrist, or developmental pediatrician who specializes in pediatric movement conditions and neurodivergence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-[#f0f9ff] p-3 rounded-full border border-[#2abcd4] border-opacity-30 mb-3">
                  <Stethoscope className="text-[#0A9DC4] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Neurological Exam</h3>
                <p className="text-xs text-slate-700 leading-relaxed">A physical and neurological examination is conducted to observe the tics firsthand and rule out any other neuromuscular or physical causes for the movements.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-[#fffbeb] p-3 rounded-full border border-[#ffd166] border-opacity-50 mb-3">
                  <ClipboardList className="text-[#d4a017] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Detailed History</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The clinician will take a comprehensive family history (looking for genetic links) and a personal developmental history, tracking exactly when and how the tics first appeared.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-blue-50 p-3 rounded-full border border-[#0c264d] border-opacity-20 mb-3">
                  <Activity className="text-[#0c264d] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">The YGTSS</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Clinicians frequently use the Yale Global Tic Severity Scale (YGTSS) to formally measure how frequently tics occur and how much they impact the individual's daily life.<sup>1</sup></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: CO-OCCURRING SCREENING
      ========================================== */}
      {activeTab === 'screening' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            An accurate Tourette's diagnosis is rarely just about identifying tics. A proper clinical evaluation must screen for the neurodevelopmental conditions that frequently travel alongside it.
          </p>

          {/* Screening Card (Slate) - Uses CSS Badges */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <ImageWithFallback 
              src="/images/tourette/tourette-diagnosis-screening.webp"
              alt="Visual map showing co-occurring screening processes"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-200"
            />
            
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center clear-both">Assessing the Whole Picture</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because Tourette's frequently shares genetic and neurological overlap with other conditions, a specialist will conduct a broad screening to ensure the individual receives comprehensive support.<sup>1</sup>
            </p>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 max-w-3xl mx-auto">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">Common Screening Targets</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0c264d] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
                  <p className="text-sm text-slate-700"><strong>ADHD & Executive Function:</strong> Screening for attention difficulties, impulsivity, and challenges with working memory, which affect the majority of the Tourette's population.<sup>1</sup></p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0c264d] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
                  <p className="text-sm text-slate-700"><strong>OCD & Anxiety:</strong> Assessing for obsessive thoughts, compulsive behaviors, and general anxiety, which can often cause more distress than the physical tics.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0c264d] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</div>
                  <p className="text-sm text-slate-700"><strong>Learning Differences:</strong> Evaluating for specific learning disabilities (like dysgraphia) to ensure the individual is provided with the correct academic accommodations moving forward.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('tourette')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Tourette's
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p>1. American Psychiatric Association. (2022). Diagnostic and Statistical Manual of Mental Disorders (5th ed., text rev.). <i>American Psychiatric Publishing</i>.</p>
            <p>2. Leckman, J. F., et al. (1989). The Yale Global Tic Severity Scale: Initial testing of a clinician-rated scale of tic severity. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>.</p>
            <p>3. Scahill, L., et al. (2014). The prevalence of tic disorders and clinical characteristics in children. <i>Journal of Obsessive-Compulsive and Related Disorders</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Eddy, C. M., et al. (2009). Neuropsychological aspects of Tourette syndrome: A review. <i>Journal of Psychosomatic Research</i>.</li>
            <li>Müller-Vahl, K. R., et al. (2019). Tic disorders revisited: Introduction of the term tic spectrum disorders. <i>European Child & Adolescent Psychiatry</i>.</li>
            <li>Roessner, V., et al. (2011). European clinical guidelines for Tourette syndrome and other tic disorders. Part II: Pharmacological treatment. <i>European Child & Adolescent Psychiatry</i>.</li>
            <li>Singer, H. S. (2005). Tourette's syndrome: From behaviour to biology. <i>The Lancet Neurology</i>.</li>
            <li>World Health Organization. (2018). <i>International classification of diseases for mortality and morbidity statistics</i> (11th ed.). Geneva: WHO.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}