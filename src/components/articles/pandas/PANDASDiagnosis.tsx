import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ClipboardCheck, Brain, Clock, Activity, Bug, Search, Microscope, FlaskConical, AlertTriangle, ShieldAlert, Target, ListChecks, Stethoscope } from 'lucide-react';

interface PANDASDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function PANDASDiagnosis({ setCurrentArticle, initialTab }: PANDASDiagnosisProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'criteria';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

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
          Testing & Diagnosing PANDAS
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('pandas')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About PANDAS
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('pandas')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About PANDAS
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('criteria')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'criteria'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Criteria
        </button>
        <button
          onClick={() => handleTabChange('workup')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'workup'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Diagnostic Workup
        </button>
        <button
          onClick={() => handleTabChange('misdiagnoses')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'misdiagnoses'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Differential & Misdiagnoses
        </button>
      </div>

      {/* ==========================================
          TAB 1: THE CRITERIA (PANDAS & PANS)
      ========================================== */}
      {activeTab === 'criteria' && (
        <div className="space-y-8 animate-fadeIn">

          {/* PANDAS Criteria Card (Cyan) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The PANDAS Clinical Checklist</h2>
            
            <ImageWithFallback 
              src="/images/pandas/pandas-diagnosis-criteria-1.webp"
              alt="Medical checklist and pediatric consultation"
              className="block mx-auto w-120 max-w-full h-auto rounded-lg border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Diagnosing PANDAS is primarily a clinical process, based entirely on a specialist's observation of the child's symptoms and history. There is no single blood test that can conclusively "prove" a child has PANDAS.
            </p>

            <h3 className="text-[#0c264d] font-bold mb-4 text-xl text-center border-t border-[#0c264d] border-opacity-20 pt-6">The 5 Diagnostic Criteria</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              To be officially diagnosed with PANDAS, a child must explicitly meet all five of the following clinical criteria:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">1. OCD and/or Tics</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The clear presence of intensive Obsessive-Compulsive symptoms, new motor tics, or vocal tics that are dramatically worsened.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">2. Pediatric Onset</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The symptoms must first manifest strictly within the pediatric window, defined as between age 3 and the onset of puberty.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0A9DC4] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">3. Episodic Course</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Symptoms appear virtually "overnight" or flare up with intense, terrifying severity alongside strep infections (the "sawtooth" pattern).</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center md:col-span-2 lg:col-span-1 lg:col-start-2">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Bug className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">4. Strep Link</h3>
                <p className="text-xs text-slate-700 leading-relaxed">A documented link to Group A Strep, confirmed by a positive throat culture or elevated blood antibodies (ASO or Anti-DNase B).</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">5. Neurological Signs</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The presence of neurological abnormalities during a flare, such as extreme motor hyperactivity or severe deterioration in handwriting.</p>
              </div>

            </div>
          </div>

          {/* PANS Criteria Card (Navy) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The PANS Diagnostic Criteria</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Because PANDAS is technically a subset of PANS, clinicians rely on the broader PANS criteria when a child presents with the explosive "overnight" symptoms but lacks a clear, documented strep infection.
            </p>

            <div className="space-y-4 max-w-4xl mx-auto">
              
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#ffd166] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#ffd166] mt-1 ml-1">
                  <Target className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">1. Abrupt, Dramatic Onset</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The sudden, dramatic onset of Obsessive-Compulsive Disorder (OCD) or severely restricted food intake (anorexia).</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#2abcd4] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#2abcd4] mt-1 ml-1">
                  <ListChecks className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">2. Concurrent Symptoms</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The concurrent presence of acute-onset symptoms from at least <strong>two</strong> of the following seven categories: severe anxiety; emotional lability/depression; irritability/aggression; behavioral regression; school performance deterioration; sensory/motor abnormalities; or somatic signs (sleep disturbances, urinary frequency).</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#576d8e] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#576d8e] mt-1 ml-1">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">3. Exclusion of Other Disorders</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The symptoms are not better explained by a known neurologic or medical disorder, such as Sydenham chorea, systemic lupus erythematosus, or Tourette disorder.</p>
                </div>
              </div>

            </div>
          </div>

          {/* ===== REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>Chang, K., et al. (2015). "Clinical evaluation of youth with PANS." <i>JCAP</i>.</li>
                <li>Swedo, S. E., et al. (1998). "PANDAS: First 50 cases." <i>American Journal of Psychiatry</i>.</li>
                <li>Garvey, M. A., et al. (1998). "PANDAS: Lessons from rheumatic fever." <i>Journal of Child Neurology</i>.</li>
                <li>Murphy, T. K., et al. (2010). "The immunobiology of Tourette's and PANDAS."</li>
                <li>Murphy, M. L., & Pichichero, M. E. (2002). "Prospective identification of children with PANDAS." <i>Archives of Pediatrics</i>.</li>
                <li>Leckman, J. F., et al. (2011). "Strep infections and exacerbations of tics." <i>JAACAP</i>.</li>
                <li>Swedo, S. E., et al. (2012). "From PANDAS to PANS." <i>Pediatrics & Therapeutics</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: THE DIAGNOSTIC WORKUP
      ========================================== */}
      {activeTab === 'workup' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Workup Card (Navy) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Diagnostic Workup</h2>
            
            <ImageWithFallback 
              src="/images/pandas/pandas-diagnosis-workup-1.webp"
              alt="Medical laboratory and specialized blood testing"
              className="block mx-auto w-120 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <FlaskConical className="w-4 h-4 text-[#ffd166]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Infection Testing</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">The doctor will aggressively look for evidence of a current or recent strep infection. This includes a rapid strep test, a 48-hour throat culture, or blood tests tracking titer levels to verify if the body has recently fought strep.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Microscope className="w-4 h-4 text-[#2abcd4]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Clinical Observation</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Sudden dysgraphia (deterioration in handwriting) is a common "soft sign." Clinicians may also order the Cunningham Panel, a highly specialized test looking for specific anti-neuronal antibodies.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup></p>
                </div>
              </div>

            </div>
          </div>

          {/* ===== REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
                <p>1. Shimasaki, C., et al. (2020). "Evaluation of the Cunningham Panel." <i>Journal of Neuroimmunology</i>.</p>
              </div>
            </div>
            
            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>Singer, H. S., et al. (2012). "Moving from PANDAS to CANS." <i>The Journal of Pediatrics</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: DIFFERENTIAL & MISDIAGNOSES
      ========================================== */}
      {activeTab === 'misdiagnoses' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Differential Card (Yellow) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Differential & Misdiagnoses</h2>
            
            <ImageWithFallback 
              src="/images/pandas/pandas-diagnosis-misdiagnoses-1.webp"
              alt="Medical chart distinguishing between overlapping psychiatric conditions"
              className="block mx-auto w-120 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because PANDAS is relatively rare and remains controversial in some specific medical communities, children are unfortunately frequently misdiagnosed during their first acute flare.
            </p>

            <div className="space-y-4 max-w-4xl mx-auto">
              
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#576d8e] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#576d8e] mt-1 ml-1">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Ruling Out Other Conditions</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A thorough, rigorous clinical workup absolutely must rule out other potential causes for sudden neuropsychiatric changes. This includes testing for Sydenham's chorea, Lyme disease, or standard acute-onset OCD that is fundamentally not immune-related.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#2abcd4] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#2abcd4] mt-1 ml-1">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Common Misdiagnoses</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Children are routinely misdiagnosed with standard Pediatric OCD, Tourette's Syndrome, or Oppositional Defiant Disorder (ODD). The "overnight" nature of the symptoms remains the absolute most important clinical clue separating PANDAS from standard psychiatric diagnoses.</p>
                </div>
              </div>

            </div>
          </div>

          {/* ===== REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>Kurlan, R., & Kaplan, E. L. (2004). "The PANDAS etiology for tics: Hypothesis or entity?" <i>Pediatrics</i>.</li>
                <li>Gabbay, V., et al. (2008). "PANDAS: Comparison of diagnosis in community vs. specialty clinics."</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('pandas')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About PANDAS
        </button>
      </div>

    </article>
  );
}