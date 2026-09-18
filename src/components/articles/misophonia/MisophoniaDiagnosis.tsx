import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface MisophoniaDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function MisophoniaDiagnosis({ setCurrentArticle, initialTab }: MisophoniaDiagnosisProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'challenge');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px]">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Testing & Diagnosing Misophonia
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('misophonia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About Misophonia
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('misophonia')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About Misophonia
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <button
          onClick={() => setActiveTab('challenge')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'challenge'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Diagnostic Challenge
        </button>
        <button
          onClick={() => setActiveTab('tools')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'tools'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Tools & Scales
        </button>
        <button
          onClick={() => setActiveTab('process')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'process'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Clinical Process
        </button>
      </div>

      {/* ==========================================
          TAB 1: THE DIAGNOSTIC CHALLENGE
      ========================================== */}
      {activeTab === 'challenge' && (
        <div className="space-y-8 animate-fadeIn">

          {/* The Challenge Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Invisible Condition</h2>
            
            <ImageWithFallback 
              src="/images/misophonia/misophonia-diagnosis-challenge.webp"
              alt="Frustrated patient looking overwhelmed in a doctor's office"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Because misophonia is not yet officially listed in the DSM-5-TR, getting a formal diagnosis can be incredibly frustrating. However, specialized clinicians use validated tools to identify the condition.<sup>1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Frequent Misdiagnoses</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Misophonia is often misdiagnosed as an anxiety disorder, Obsessive-Compulsive Disorder (OCD), or ADHD because of the overlapping symptoms of severe irritability, hyper-vigilance, and intense avoidance behaviors.<sup>2</sup></p>
                </div>
              </div>

              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">A Call for Recognition</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Clinical researchers have heavily petitioned for misophonia to be recognized as a distinct psychiatric or neurodevelopmental disorder, noting that its physiological footprint is entirely unique.<sup>1</sup></p>
                </div>
              </div>

            </div>
          </div>

          {/* Differential Diagnosis Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Differential Diagnosis</h2>
            
            <ImageWithFallback 
              src="/images/misophonia/misophonia-diagnosis-differential.webp"
              alt="Venn diagram showing differences between Misophonia, Hyperacusis, and SPD"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              A key part of the diagnostic process is differentiating misophonia from other auditory and sensory processing conditions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#d4a017] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Hyperacusis</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Sensitivity to <em>loudness</em>. A person with hyperacusis feels physical pain when sounds reach a certain decibel level. Misophonia, however, is about the <em>type</em> of sound, regardless of volume.<sup>3</sup></p>
                </div>
              </div>

              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#d4a017] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Phonophobia</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A specific, psychological fear of sound. While misophonia can cause anticipatory anxiety, the core emotional response is usually profound anger, rage, or disgust—not just fear.</p>
                </div>
              </div>

              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#d4a017] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Sensory Processing Disorder</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">SPD involves a much broader neurological sensitivity across multiple systems (touch, balance, taste). Misophonia is hyper-focused primarily on specific auditory/visual triggers.<sup>4</sup></p>
                </div>
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
                <p>1. Schröder, A., et al. (2013). Misophonia: Diagnostic criteria for a new psychiatric disorder. <i>PLOS ONE</i>.</p>
                <p>2. Wu, M. S., et al. (2014). Misophonia: Incidence, phenomenology, and clinical correlates in an undergraduate student sample. <i>Journal of Clinical Psychology</i>.</p>
                <p>3. Tyler, R. S., et al. (2014). A review of hyperacusis and future directions. <i>American Journal of Audiology</i>.</p>
                <p>4. Brout, J. J., et al. (2018). Investigating misophonia: A review of the empirical literature. <i>Frontiers in Neuroscience</i>.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: TOOLS & SCALES
      ========================================== */}
      {activeTab === 'tools' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Assessment Tools Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Standardized Questionnaires</h2>
            
            <ImageWithFallback 
              src="/images/misophonia/misophonia-diagnosis-tools.webp"
              alt="Clipboard displaying a clinical questionnaire"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-300"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Because there is no blood test or brain scan that officially "diagnoses" misophonia in a clinical setting, specialists rely on several highly validated psychometric scales to measure severity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Amsterdam Misophonia Scale (A-MISO-S)</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">One of the first recognized tools. Adapted from an OCD scale, it measures the impact of the condition on daily life and the specific intensity of the emotional reactions.<sup>1</sup></p>
                </div>
              </div>

              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Misophonia Questionnaire (MQ)</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A specialized two-part scale. The first part assesses trigger sensitivity (which sounds bother the patient), and the second part measures the severity of their emotional and behavioral responses.<sup>2</sup></p>
                </div>
              </div>

            </div>
          </div>

          {/* Modern Assessments Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Modern Clinical Assessments</h2>
            
            <ImageWithFallback 
              src="/images/misophonia/misophonia-diagnosis-scales.webp"
              alt="Stylized visual of a clinical rating scale"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0A9DC4] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">The S-Five Scale</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Published in 2021, the Selective Sound Sensitivity Syndrome Scale (S-Five) is a multi-dimensional tool measuring internalizing responses (like feeling trapped) and externalizing responses (like lashing out).<sup>3</sup></p>
                </div>
              </div>

              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0A9DC4] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">MisoQuest</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Developed in 2020, MisoQuest was specifically built around the newly agreed-upon diagnostic criteria for misophonia, helping reliably separate the condition from general sensory overload.<sup>4</sup></p>
                </div>
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
                <p>1. Schröder, A., et al. (2013). Misophonia: Diagnostic criteria for a new psychiatric disorder. <i>PLOS ONE</i>.</p>
                <p>2. Wu, M. S., et al. (2014). Misophonia: Incidence, phenomenology, and clinical correlates in an undergraduate student sample. <i>Journal of Clinical Psychology</i>.</p>
                <p>3. Vitoratou, S., et al. (2021). The S-Five scale. <i>Psych</i>.</p>
                <p>4. Siepsiak, M., et al. (2020). Development of MisoQuest. <i>International Journal of Environmental Research and Public Health</i>.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: CLINICAL PROCESS
      ========================================== */}
      {activeTab === 'process' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Clinical Interview Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Clinical Interview</h2>
            
            <ImageWithFallback 
              src="/images/misophonia/misophonia-diagnosis-interview.webp"
              alt="Supportive clinician actively listening during a patient interview"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Because symptoms are subjective and internal, a deep, thorough clinical interview is the cornerstone of diagnosis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Trigger Specificity</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The clinician will ask exactly what sounds (and visual stimuli) act as triggers. They will explore whether the reaction changes based on who is making the sound (e.g., family members vs. strangers).</p>
                </div>
              </div>

              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Onset & Emotion</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">They will trace the history to identify when symptoms first started (typically ages 9–13). They will also require the patient to clearly identify their primary involuntary emotion (anger, disgust, or panic).<sup>1</sup></p>
                </div>
              </div>

            </div>
          </div>

          {/* Finding a Specialist Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Finding a Specialist</h2>
            
            <ImageWithFallback 
              src="/images/misophonia/misophonia-diagnosis-specialist.webp"
              alt="Audiologist reviewing an audiogram in a soundproof booth"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-300"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Audiologists</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">An audiologist is often the first critical stop. They are equipped to perform thorough hearing tests to completely rule out physiological hearing loss or other structural auditory processing issues.<sup>2</sup></p>
                </div>
              </div>

              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Psychologists</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Once physical issues are ruled out, psychologists or specialized therapists step in to administer the standardized scales, diagnose the condition, and help develop emotional regulation and coping strategies.</p>
                </div>
              </div>

            </div>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Edelstein, M., et al. (2013). Misophonia: Physiological investigations and case descriptions. <i>Frontiers in Human Neuroscience</i>.</p>
                <p>2. Aazh, H., et al. (2019). Audiological and other factors predicting the presence of misophonia symptoms. <i>Frontiers in Neuroscience</i>.</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}