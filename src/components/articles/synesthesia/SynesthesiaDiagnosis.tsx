import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SynesthesiaDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function SynesthesiaDiagnosis({ setCurrentArticle, initialTab }: SynesthesiaDiagnosisProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'traits');

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Synesthesia: Testing & Diagnosing
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('synesthesia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Synesthesia
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('traits')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'traits'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Identification & Traits
        </button>
        <button
          onClick={() => setActiveTab('assessment')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'assessment'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Assessment Process
        </button>
        <button
          onClick={() => setActiveTab('tools')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'tools'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Tools & Verification
        </button>
      </div>

      {/* ==========================================
          TAB 1: IDENTIFICATION & TRAITS
      ========================================== */}
      {activeTab === 'traits' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Because synesthesia is a harmless neuro-cognitive variation rather than a medical disorder, "diagnosis" is primarily focused on identification, validation, and understanding the individual's unique sensory profile.
          </p>

          {/* Core Characteristics Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Core Identifying Traits</h2>
            
            <ImageWithFallback 
              src="/images/synesthesia/synesthesia-diagnosis-traits.webp" 
              alt="Person reflecting on their unique sensory experiences"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Clinical identification relies on observing three key characteristics that distinguish true synesthesia from highly imaginative thinking, metaphors, or memory associations.<sup>4, 5</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Automaticity</h3>
                <p className="text-sm text-slate-700 space-y-2">
                  The sensory experiences occur entirely involuntarily, without any conscious effort. The individual cannot choose to turn the association on or off.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Consistency</h3>
                <p className="text-sm text-slate-700 space-y-2">
                  The same trigger stimulus always produces the exact same synesthetic response. If the number "4" is perceived as dark blue, it will remain dark blue.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Lifelong Presence</h3>
                <p className="text-sm text-slate-700 space-y-2">
                  Synesthetic associations are established early in childhood and remain highly stable and persistent throughout the individual's entire life.
                </p>
              </div>
            </div>
          </div>

          {/* Personal Realization Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Journey of Realization</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Interestingly, many synesthetes do not realize their sensory experiences are unusual until adolescence or adulthood. They naturally assume that everyone perceives the world exactly the same way they do—believing it is universally understood that Wednesday is light blue, or that trumpets produce sharp geometric flashes.<sup>6</sup>
            </p>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200 max-w-4xl mx-auto">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">The Moment of Discovery</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Self-Reporting:</strong> The initial step toward identification almost always begins with self-reporting—often triggered by casually mentioning a colored letter or tasting a word in conversation, only to be met with confusion from peers.</li>
                <li><strong>Validation:</strong> Because it is not a disorder, the diagnostic process is often less about seeking treatment and more about validating the individual's lived experience and understanding their unique cognitive strengths.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: THE ASSESSMENT PROCESS
      ========================================== */}
      {activeTab === 'assessment' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            While self-reporting is the first step, researchers and clinicians utilize structured, objective methodologies to confirm the presence of synesthesia and distinguish it from other psychological phenomena.
          </p>

          {/* The Process Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Clinical Assessment</h2>
            
            <ImageWithFallback 
              src="/images/synesthesia/synesthesia-diagnosis-evaluation.webp" 
              alt="Psychological testing and consistency verification"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Synesthesia is typically identified through detailed self-report questionnaires and subsequently validated through rigorous consistency testing.<sup>1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Consistency Testing</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>The Gold Standard:</strong> Consistency over time is the ultimate clinical benchmark for synesthesia.</li>
                  <li><strong>Methodology:</strong> The individual is presented with a large set of stimuli (like 100 different words or numbers) and asked to match them to a color palette.</li>
                  <li><strong>Verification:</strong> The exact same test is administered suddenly months or even years later. True synesthetes will reliably give the exact same highly specific responses.<sup>2, 3</sup></li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Differential Diagnosis</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Ruling out Hallucinations:</strong> Ensuring the sensory crossings are not related to psychosis or schizophrenia.</li>
                  <li><strong>Medical Events:</strong> Ruling out acquired sensory changes caused by brain trauma, tumors, or stroke.</li>
                  <li><strong>External Substances:</strong> Confirming the experiences occur naturally and are not drug-induced (such as via psychedelics).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: TOOLS & VERIFICATION
      ========================================== */}
      {activeTab === 'tools' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            As the scientific understanding of synesthesia has grown, specialized standardized tools and advanced neuroimaging techniques have been developed to study and verify these unique sensory networks.
          </p>

          {/* Tools Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Standardized Tools & Imaging</h2>
            
            <ImageWithFallback 
              src="/images/synesthesia/synesthesia-diagnosis-tools.webp" 
              alt="Digital test battery and brain imaging scans"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Modern testing utilizes digital platforms that can precisely measure consistency and reaction times, while advanced medical imaging allows researchers to physically observe the cross-activation taking place in the brain.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">The Synesthesia Battery</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Standardized Assessment:</strong> Online tests, most notably the Synesthesia Battery, have been explicitly developed to assess and objectively verify synesthetic experiences.<sup>7</sup></li>
                  <li><strong>Data Collection:</strong> These tools record the exact RGB color values a user associates with stimuli, measuring consistency down to the microscopic shade level over long periods of time.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Brain Imaging</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Research Applications:</strong> While not used for standard clinical diagnosis, brain imaging studies (like fMRI and DTI scans) are frequently used for academic research purposes.<sup>2, 3</sup></li>
                  <li><strong>Physical Proof:</strong> These scans physically demonstrate the simultaneous activation of multiple sensory regions, providing objective, biological proof of the phenomenon.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('synesthesia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Synesthesia
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
            <p>1. Eagleman, D. M., et al. (2007). A standardized test battery for the study of synesthesia. <i>Journal of Neuroscience Methods</i>.</p>
            <p>2. Baron-Cohen, S., et al. (1993). Coloured speech perception: Is synaesthesia what happens when modularity breaks down? <i>Perception</i>.</p>
            <p>3. Simner, J., et al. (2006). Synaesthesia: The prevalence of atypical cross-modal experiences. <i>Perception</i>.</p>
            <p>4. Simner, J., & Logie, R. H. (2007). Synaesthetic consistency spans decades in a lexical-gustatory synaesthete. <i>Neurocase</i>.</p>
            <p>5. Rich, A. N., et al. (2005). A systematic, large-scale study of synaesthesia: Implications for the role of early experience in lexical-colour associations. <i>Cognition</i>.</p>
            <p>6. Carmichael, D. A., et al. (2015). Validating a standardised test battery for synesthesia: Does the Synesthesia Battery reliably detect synesthesia? <i>Consciousness and Cognition</i>.</p>
            <p>7. Hochel, M., & Milán, E. G. (2008). Synaesthesia: The existing state of affairs. <i>Cognitive Neuropsychology</i>.</p>
          </div>
        </div>
      </div>
    </article>
  );
}