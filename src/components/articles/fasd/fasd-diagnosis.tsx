import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { FileText, Search, Brain, Activity, Users, ClipboardCheck, Dna, ShieldAlert, Building, EyeOff, AlertTriangle, Scale, Target, BookOpen } from 'lucide-react';

interface FASDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function FASDDiagnosis({ setCurrentArticle, initialTab }: FASDDiagnosisProps) {
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
          FASD: Diagnosis & Assessment
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('fasd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About FASD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('fasd')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About FASD
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
          The Assessment Process
        </button>
        <button
          onClick={() => handleTabChange('differential')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'differential'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Differential & Barriers
        </button>
      </div>

      {/* ==========================================
          TAB 1: DIAGNOSTIC CRITERIA
      ========================================== */}
      {activeTab === 'criteria' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Criteria Card (Cyan) - Uses Slate/Navy to avoid Cyan clash */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Diagnostic Categories</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-diagnosis-criteria-1.webp"
              alt="Medical chart displaying the spectrum of diagnostic criteria for FASD"
              className="block mx-auto w-64 max-w-full h-auto rounded-lg border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              FASD remains profoundly underdiagnosed. Many individuals accumulate various psychiatric labels that address isolated symptoms, but miss the underlying etiology entirely.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> Early, accurate diagnosis is the single most important factor for improving long-term outcomes.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Full FAS</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-2">Requires all three of the following, plus confirmed or unknown PAE:<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup></p>
                <ul className="text-xs text-slate-700 text-left list-disc pl-5 space-y-1">
                  <li>All 3 facial features (smooth philtrum, thin lip, small palpebral fissures)</li>
                  <li>Growth deficiency (≤10th percentile)</li>
                  <li>CNS abnormality (structural, neurological, or functional)</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Partial FAS (pFAS)</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Requires two of the three facial features, plus <em>either</em> growth deficiency or CNS involvement, alongside confirmed prenatal alcohol exposure.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup></p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">ARND</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Alcohol-Related Neurodevelopmental Disorder requires CNS abnormalities meeting criteria for the full spectrum, with confirmed PAE, but <em>without</em> facial features or growth deficiency.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup> This is the most commonly missed diagnosis.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">ND-PAE (DSM-5)</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Neurobehavioral Disorder Associated with PAE focuses purely on the neurobehavioral profile, requiring confirmed exposure plus impairments in three domains: neurocognitive, self-regulation, and adaptive functioning.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup></p>
              </div>

            </div>
          </div>

          {/* Guidelines Card (Navy) - CLEAN 3D BORDERS using Slate & Yellow */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Diagnostic Guidelines</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-diagnosis-guidelines-1.webp"
              alt="Visual demonstrating different international diagnostic frameworks for FASD"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Several competing diagnostic guidelines are used internationally. This lack of a single, unified standardized system heavily contributes to diagnostic confusion and inconsistent prevalence estimates worldwide.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">7, 8</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Hoyme / CDC Guidelines</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Updated clinical guidelines (2016) that are widely used across the United States for clinical diagnosis.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Astley 4-Digit Code</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A highly systematic coding approach ranking four distinct features on a 4-point severity scale for each.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0c264d]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Canadian Guidelines</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Comprehensive multidisciplinary approach (Chudley et al., 2005; Cook et al., 2016) widely respected internationally.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Australian Guidelines</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A population-adapted framework specifically tailored to local demographics and diagnostic access.</p>
                </div>
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
                <li>1. Chasnoff, I. J., et al. (2010). "Neurodevelopmental functioning in children with FAS, pFAS, and ARND." <i>Journal of Developmental and Behavioral Pediatrics</i>.</li>
                <li>2. Astley, S. J., et al. (2009). "Neuropsychological and behavioral outcomes from a comprehensive magnetic resonance study of children with fetal alcohol spectrum disorders." <i>Canadian Journal of Clinical Pharmacology</i>.</li>
                <li>3. Hoyme, H. E., et al. (2016). "Updated clinical guidelines for diagnosing fetal alcohol spectrum disorders." <i>Pediatrics</i>.</li>
                <li>4. Bertrand, J., et al. (2004). <i>Fetal alcohol syndrome: Guidelines for referral and diagnosis</i>. CDC.</li>
                <li>5. Sokol, R. J., Delaney-Black, V., & Nordstrom, B. (2003). "Fetal alcohol spectrum disorder." <i>JAMA</i>.</li>
                <li>6. American Psychiatric Association. (2013). <i>Diagnostic and statistical manual of mental disorders (5th ed.)</i>.</li>
                <li>7. Cook, J. L., et al. (2016). "Fetal alcohol spectrum disorder: A guideline for diagnosis across the lifespan." <i>CMAJ</i>.</li>
                <li>8. Chudley, A. E., et al. (2005). "Fetal alcohol spectrum disorder: Canadian guidelines for diagnosis." <i>CMAJ</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: THE ASSESSMENT PROCESS
      ========================================== */}
      {activeTab === 'process' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Multidisciplinary Card (Navy) - DOUBLE RINGS */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Multidisciplinary Assessment</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-diagnosis-team-1.webp"
              alt="Visual demonstrating a multidisciplinary team collaborating on an assessment"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              A comprehensive FASD diagnosis cannot be performed by a single clinician. It requires a highly coordinated, multidisciplinary team approach.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="space-y-4 max-w-4xl mx-auto">
              
              {/* YELLOW RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#ffd166] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#ffd166] mt-1 ml-1">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Medical & Physical</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A Dysmorphologist or Developmental Pediatrician conducts the physical examination, formal facial feature assessment, and precise growth measurements.</p>
                </div>
              </div>

              {/* SLATE RING (Avoiding Cyan clash) */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#576d8e] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#576d8e] mt-1 ml-1">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Neuropsychology & Therapy</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Neuropsychologists test cognitive capacity and executive function. Speech-Language Pathologists evaluate pragmatic communication, while Occupational Therapists assess sensory processing and fine motor skills.</p>
                </div>
              </div>

              {/* CYAN RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#2abcd4] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#2abcd4] mt-1 ml-1">
                  <Users className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Mental Health & Social</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Psychiatrists/Psychologists evaluate the profound behavioral profile and mental health comorbidities, while Social Workers document family history, secure support needs, and navigate referrals.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Neuropsych Testing Card (Yellow) - 3D Accent Borders */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Neuropsychological Testing</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-diagnosis-testing-1.webp"
              alt="Patient engaged in executive function testing"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Testing must go far beyond simple IQ. A comprehensive assessment actively examines the highly specific domains known to be severely affected by FASD.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#576d8e] border-opacity-30 pb-2">Intelligence & Speed</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">While Full-scale IQ (WISC, WAIS) is measured, it is fundamentally insufficient alone. Processing speed is also heavily evaluated through tasks like Coding and Symbol Search.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0c264d]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#0c264d] border-opacity-30 pb-2">Executive Function & Memory</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Working memory (Digit Span) and Executive Function (Wisconsin Card Sorting, BRIEF) are heavily scrutinized alongside verbal learning and recall (CVLT, WRAML).</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between md:col-span-2">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#2abcd4] border-opacity-30 pb-2">Adaptive Behavior Focus</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Tools like the Vineland Adaptive Behavior Scales are utterly critical, as they often reveal the true, massive gap between cognitive capability and actual real-world functional impairment.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup></p>
                </div>
              </div>

            </div>
          </div>

          {/* PAE Confirmation Card (Cyan) - CSS DOTS utilizing Slate/Navy */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Confirming PAE</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-diagnosis-pae-1.webp"
              alt="Medical professional reviewing complex patient history files"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Confirmation of Prenatal Alcohol Exposure (PAE) is notoriously the single most challenging aspect of an FASD diagnosis.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#576d8e] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Maternal Stigma:</strong> Biological mothers may not disclose drinking due to intense shame, guilt, or fear of legal/CPS consequences.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Systemic Blindspots:</strong> Adoptees and foster children frequently arrive with completely missing or sealed birth histories.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Recall Accuracy:</strong> Retrospective reporting of exact alcohol use months or years later is highly unreliable.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#576d8e] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Future Biomarkers:</strong> Research is heavily focused on biomarkers like PEth in newborn blood spots to objectively confirm exposure without relying on maternal reporting.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup></p>
                </div>

              </div>
            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>1. Clarren, S. K., et al. (2000). "A child with fetal alcohol syndrome." In M. Guralnick (Ed.), <i>Interdisciplinary clinical assessment of young children with developmental disabilities</i>.</li>
                <li>2. Chasnoff, I. J., Wells, A. M., & King, L. (2015). "Misdiagnosis and missed diagnoses in foster and adopted children with prenatal alcohol exposure." <i>Pediatrics</i>.</li>
                <li>3. Bearer, C. F., et al. (2003). "Validation of a new biomarker of fetal exposure to alcohol." <i>Journal of Pediatrics</i>.</li>
                <li>4. Mattson, S. N., Crocker, N., & Nguyen, T. T. (2011). "Fetal alcohol spectrum disorders: Neuropsychological and behavioral features." <i>Neuropsychology Review</i>.</li>
                <li>5. Crocker, N., et al. (2009). "Comparison of adaptive behavior in children with heavy prenatal alcohol exposure or attention-deficit/hyperactivity disorder." <i>Alcoholism: Clinical and Experimental Research</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: DIFFERENTIAL & BARRIERS
      ========================================== */}
      {activeTab === 'differential' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Differential Card (Yellow) - BARE DARK ICONS */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Differential Diagnosis</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-diagnosis-differential-1.webp"
              alt="Medical magnification examining the overlaps between various neurodevelopmental conditions"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              FASD overlaps significantly with many other neurodevelopmental conditions. These diagnoses may severely co-occur with FASD rather than exclude it, making clinical un-tangling critical.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <Target className="text-[#0c264d] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">ADHD & Autism</h3>
                <p className="text-xs text-slate-700 leading-relaxed">ADHD shares the highest diagnostic overlap. Social difficulties and repetitive behaviors also frequently overlap with Autism Spectrum criteria.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <BookOpen className="text-[#0c264d] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Learning & Intellect</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Specific learning disabilities in math/reading are common. Global Intellectual Disability is present in some, but absolutely not all, FASD cases.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <Dna className="text-[#0c264d] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Genetics & Trauma</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Williams or Noonan syndrome can perfectly mimic facial features,<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup> while Reactive Attachment Disorder heavily masks the behavioral profile in trauma histories.</p>
              </div>

            </div>
          </div>

          {/* Barriers Card (Cyan) - ROUNDED SQUARES using Slate & Navy */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Barriers to Diagnosis</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-diagnosis-barriers-1.webp"
              alt="Conceptual visual of systemic roadblocks preventing timely clinical assessment"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Despite its massive neurological impact, FASD diagnosis remains incredibly rare relative to its actual population prevalence.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <EyeOff className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">The "Invisible" Presentation</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Because the vast majority of cases completely lack the associated facial features, patients appear outwardly "normal," meaning clinicians simply never think to consider or screen for it.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Systemic Roadblocks</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Stigma fiercely discourages maternal disclosure. Furthermore, general clinician training in FASD recognition is incredibly limited, and specialized multidisciplinary teams are virtually non-existent outside of major urban medical centers.</p>
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
                <li>1. Fryer, S. L., et al. (2007). "Evaluation of psychopathological conditions in children with heavy prenatal alcohol exposure." <i>Pediatrics</i>.</li>
                <li>2. Hagberg, B., & Kyllerman, M. (1983). "Epidemiology of mental retardation — A Swedish survey." <i>Brain and Development</i>.</li>
                <li>3. Burd, L., et al. (2003). "Fetal alcohol syndrome: Neuropsychiatric phenomics." <i>Neurotoxicology and Teratology</i>.</li>
                <li>4. Mukherjee, R. A., Hollins, S., & Turk, J. (2006). "Fetal alcohol spectrum disorder: An overview." <i>Journal of the Royal Society of Medicine</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('fasd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About FASD
        </button>
      </div>

    </article>
  );
}