import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Activity, Brain, Zap, AlertTriangle, Eye, Clock, BatteryLow, Thermometer, Pill, Calendar, Music, HeartPulse, MessageSquare, ShieldAlert, Compass } from 'lucide-react';

interface EpilepsySymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function EpilepsySymptoms({ setCurrentArticle, initialTab }: EpilepsySymptomsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'types';

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
          Epilepsy: Symptoms & Characteristics
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('epilepsy')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About Epilepsy
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('epilepsy')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About Epilepsy
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('types')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'types'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Seizure Types
        </button>
        <button
          onClick={() => handleTabChange('cycle')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'cycle'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Seizure Cycle
        </button>
        <button
          onClick={() => handleTabChange('interictal')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'interictal'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Triggers & Interictal
        </button>
      </div>

      {/* ==========================================
          TAB 1: SEIZURE TYPES
      ========================================== */}
      {activeTab === 'types' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Focal Seizures Card (Cyan) - Uses Slate & Navy Badges */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Focal Onset Seizures</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-symptoms-focal-1.webp"
              alt="Medical illustration of localized brain activity"
              className="block mx-auto w-64 max-w-full h-auto rounded-lg border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Epilepsy is characterized by recurrent seizures, but the experience of epilepsy extends well beyond the seizures themselves.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1, 2</sup> Focal seizures begin in one highly specific area (focus) of the brain.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Focal Aware</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-2">The person remains fully conscious. Symptoms depend on the brain region:<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup></p>
                <ul className="text-xs text-slate-700 text-left list-disc pl-5 space-y-1 w-full">
                  <li><strong>Motor:</strong> rhythmic jerking or stiffening</li>
                  <li><strong>Sensory:</strong> tingling, strange smells/tastes</li>
                  <li><strong>Psychic:</strong> déjà vu, sudden fear or euphoria</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Focal Impaired Awareness</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Consciousness is altered. Automatisms (repetitive semi-purposeful movements like lip smacking or fumbling) are extremely common.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup> The person appears dazed and typically has zero memory of the event.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Focal to Bilateral</h3>
                <p className="text-xs text-slate-700 leading-relaxed">A focal seizure that rapidly spreads to involve both hemispheres of the brain, ultimately resulting in a full convulsion (formerly known as secondary generalization).<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup></p>
              </div>

            </div>
          </div>

          {/* Generalized Seizures Card (Navy) - CLEAN 3D BORDERS */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Generalized Onset Seizures</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-symptoms-generalized-1.webp"
              alt="Conceptual visual of whole-brain electrical activity"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Tonic-Clonic</h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-2">Formerly "Grand Mal."<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup></p>
                  <ul className="text-xs text-slate-700 list-disc pl-4 space-y-1">
                    <li><strong>Tonic:</strong> Sudden stiffening, loss of consciousness.</li>
                    <li><strong>Clonic:</strong> Rhythmic jerking of limbs.</li>
                    <li>Lasts 1–3 minutes, followed by severe fatigue.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Absence</h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-2">Formerly "Petit Mal."<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">7</sup></p>
                  <ul className="text-xs text-slate-700 list-disc pl-4 space-y-1">
                    <li>Brief lapse of awareness (5–30 sec).</li>
                    <li>Staring spell, subtle eye fluttering.</li>
                    <li>Can occur hundreds of times per day.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Myoclonic</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Brief, shock-like muscle jerks, most frequently occurring in the morning shortly after waking. Extremely common in Juvenile Myoclonic Epilepsy.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">8</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between md:col-span-1 lg:col-start-2">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0c264d]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Atonic</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Also known as "Drop Attacks." A sudden, complete loss of muscle tone causing the person to collapse. Protective headgear is frequently necessary.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">9</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between md:col-span-1">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Tonic</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A sudden muscle stiffening that usually occurs during sleep, but can cause severe, rigid falls if the person happens to be standing.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">10</sup></p>
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
                <li>1. Devinsky, O., et al. (2018). "Epilepsy." <i>Nature Reviews Disease Primers</i>.</li>
                <li>2. Helmstaedter, C., & Witt, J. A. (2017). "Epilepsy and cognition — A bidirectional relationship?" <i>Seizure</i>.</li>
                <li>3. Fisher, R. S., et al. (2017). "Operational classification of seizure types by the ILAE." <i>Epilepsia</i>.</li>
                <li>4. Blumenfeld, H. (2012). "Impaired consciousness in epilepsy." <i>The Lancet Neurology</i>.</li>
                <li>5. Engel, J. Jr. (2001). "A proposed diagnostic scheme for people with epileptic seizures and with epilepsy." <i>Epilepsia</i>.</li>
                <li>6. Lüders, H., et al. (1998). "Semiological seizure classification." <i>Epilepsia</i>.</li>
                <li>7. Panayiotopoulos, C. P. (1999). "Typical absence seizures and their treatment." <i>Archives of Disease in Childhood</i>.</li>
                <li>8. Janz, D. (1985). "Epilepsy with impulsive petit mal (juvenile myoclonic epilepsy)." <i>Acta Neurologica Scandinavica</i>.</li>
                <li>9. Oguni, H., et al. (1992). "Video-EEG analysis of drop seizures in myoclonic astatic epilepsy of early childhood." <i>Epilepsia</i>.</li>
                <li>10. Beaumanoir, A., & Dravet, C. (1992). "The Lennox-Gastaut syndrome." <i>Epileptic syndromes in infancy, childhood and adolescence</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: THE SEIZURE CYCLE
      ========================================== */}
      {activeTab === 'cycle' && (
        <div className="space-y-8 animate-fadeIn">

          {/* The Aura Card (Navy) - DOUBLE RINGS */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Aura</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-symptoms-aura-1.webp"
              alt="Visual demonstrating sensory perception shifts leading up to a seizure"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              An aura is actually a focal aware seizure that precedes a larger seizure—functioning essentially as a biological warning sign.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> Auras allow some individuals crucial time to get to safety.
            </p>

            <div className="space-y-4 max-w-4xl mx-auto">
              
              {/* YELLOW RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#ffd166] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#ffd166] mt-1 ml-1">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Physical & Visceral</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Common physical experiences include a "rising epigastric sensation" (a wave of feeling rising from the stomach to the throat) or sudden, unprovoked autonomic changes like a racing heart.</p>
                </div>
              </div>

              {/* SLATE RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#576d8e] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#576d8e] mt-1 ml-1">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Cognitive & Emotional</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Experiences often include intense Déjà vu (familiarity) or Jamais vu (unfamiliarity with a known place). Sudden, intense fear, unprovoked dread, or feelings of profound detachment (depersonalization) are also frequent.</p>
                </div>
              </div>

              {/* CYAN RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#2abcd4] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#2abcd4] mt-1 ml-1">
                  <Eye className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Sensory Hallucinations</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Visual disturbances (flashing lights, colored spots, distortions) and olfactory/gustatory auras (strange smells or tastes, frequently described as burning rubber or metallic) are strong localizing signs.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2, 3</sup></p>
                </div>
              </div>

            </div>
          </div>

          {/* Post-Ictal Card (Yellow) - 3D Accent Borders */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Post-Ictal State</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-symptoms-postictal-1.webp"
              alt="Medical visual indicating the recovery phase and neurological exhaustion"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The post-ictal period is the recovery phase immediately following a seizure.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup> Symptoms vary drastically by seizure type and the individual, but the brain essentially needs to "reboot."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#576d8e] border-opacity-30 pb-2">Confusion & Fatigue</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Deep confusion and disorientation can last minutes to hours. This is accompanied by extreme neurological exhaustion, frequently described as feeling "hit by a truck."</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0c264d]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#0c264d] border-opacity-30 pb-2">Amnesia & Pain</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Memory loss (amnesia) for the seizure itself and sometimes surrounding events is standard.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup> Severe headaches are incredibly common after convulsive seizures.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between md:col-span-2">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#2abcd4] border-opacity-30 pb-2">Todd's Paralysis & Emotion</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Some individuals experience "Todd's paralysis"—a temporary, terrifying weakness or complete paralysis on one side of the body lasting minutes to hours.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup> Emotional disturbances, including agitation or intense depression, can also occur during this reboot phase.</p>
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
                <p>1. Schulz, R., et al. (2001). "Interictal EEG and ictal scalp EEG propagation are highly predictive of surgical outcome in mesial temporal lobe epilepsy." <i>Epilepsia</i>.</p>
                <p>2. Daly, D. D. (1975). "Ictal clinical manifestations of complex partial seizures." <i>Advances in Neurology</i>.</p>
                <p>3. Rajna, P., et al. (1997). "Hungarian multicentre epidemiologic study of the warning and initial symptoms (prodrome, aura) of epileptic seizures." <i>Seizure</i>.</p>
                <p>4. Tomson, T., et al. (1992). "Nonconvulsive status epilepticus in adults: Thirty-two consecutive patients from a general hospital population." <i>Epilepsia</i>.</p>
                <p>5. Kapur, N. (1993). "Transient epileptic amnesia — A clinically distinct form of neurological memory disorder." <i>Brain</i>.</p>
                <p>6. Rolak, L. A., & Rutecki, P. (1992). "Todd's paralysis." <i>Journal of Neurology, Neurosurgery & Psychiatry</i>.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: TRIGGERS & INTERICTAL
      ========================================== */}
      {activeTab === 'interictal' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Triggers Card (Yellow) - CSS DOTS */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Seizure Triggers</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-symptoms-triggers-1.webp"
              alt="Visual demonstrating environmental and physiological stress factors"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Many people with epilepsy can identify highly specific physiological or environmental factors that lower their seizure threshold and increase likelihood of an event:<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Sleep Deprivation:</strong> One of the most common and potent triggers globally.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#576d8e] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Missed Medications:</strong> Skipping doses is the absolute leading cause of breakthrough seizures.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup></p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffd166] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Stress & Illness:</strong> Severe emotional/physical stress, or high fevers, actively lower the seizure threshold.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Photosensitivity:</strong> Flashing lights trigger seizures in ~3% of people with epilepsy.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Hormones & Alcohol:</strong> Catamenial epilepsy worsens around menstruation. Alcohol withdrawal is also a massive trigger.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup></p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#576d8e] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Reflex Epilepsy:</strong> Rare triggers can include specific music, reading, or even the act of eating.</p>
                </div>

              </div>
            </div>
          </div>

          {/* Interictal Card (Cyan) - ROUNDED SQUARES using Slate & Navy */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Between-Seizure (Interictal) Symptoms</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-symptoms-interictal-1.webp"
              alt="Conceptual visual showing the continuous neurological impact of epilepsy between seizures"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Epilepsy affects brain function continuously—not just during a seizure. The interictal state reveals the true neurodivergent profile of the condition.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Cognitive Impact</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Memory difficulties are profound (particularly verbal memory in temporal lobe epilepsy). Processing speed, sustained attention, and word-finding (aphasia) are frequently affected.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Emotional & Physical Burden</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Heightened emotional responses and severe mood variability are common. Individuals deal with chronic fatigue far beyond post-ictal effects,<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup> compounded by the cognitive dulling and sedation caused by high-dose anti-seizure medications.</p>
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
                <li>1. Frucht, M. M., et al. (2000). "Distribution of seizure precipitants among epilepsy syndromes." <i>Epilepsia</i>.</li>
                <li>2. Ettinger, A. B., & Argoff, C. E. (2007). "Use of antiepileptic drugs in the treatment of epilepsy and bipolar disorder." <i>Epilepsy & Behavior</i>.</li>
                <li>3. Hillbom, M., et al. (2003). "Seizures in alcohol-dependent patients." <i>CNS Drugs</i>.</li>
                <li>4. Thompson, P. J., & Duncan, J. S. (2005). "Cognitive decline in severe intractable epilepsy." <i>Epilepsia</i>.</li>
                <li>5. Jacoby, A., et al. (1996). "The clinical course of epilepsy and its psychosocial correlates." <i>Epilepsia</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('epilepsy')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About Epilepsy
        </button>
      </div>

    </article>
  );
}