import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { FileText, ClipboardCheck, History, Activity, Monitor, Search, Brain, Eye, Dna, Zap, FlaskConical, Target, ShieldAlert, BookOpen } from 'lucide-react';

interface EpilepsyDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function EpilepsyDiagnosis({ setCurrentArticle, initialTab }: EpilepsyDiagnosisProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'history';

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
          Epilepsy: Diagnosis & Assessment
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
          onClick={() => handleTabChange('history')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'history'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Clinical History
        </button>
        <button
          onClick={() => handleTabChange('imaging')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'imaging'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          EEG & Neuroimaging
        </button>
        <button
          onClick={() => handleTabChange('differential')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'differential'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Differential & Testing
        </button>
      </div>

      {/* ==========================================
          TAB 1: CLINICAL HISTORY
      ========================================== */}
      {activeTab === 'history' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Clinical Card (Cyan) - Uses requested CYAN #0a9dc4 badges mixed with Slate/Navy */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Clinical History</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-diagnosis-history-1.webp"
              alt="Medical consultation and deep patient history taking"
              className="block mx-auto w-64 max-w-full h-auto rounded-lg border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Diagnosing epilepsy is primarily a clinical process—there is no single magical test that confirms or rules it out.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> The goal is not just to confirm epilepsy, but to classify the exact seizure type, identify the broader syndrome, and determine the etiology to guide treatment.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                {/* NEW CYAN BADGE */}
                <div className="w-10 h-10 rounded-lg bg-[#0A9DC4] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Eyewitness Description</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-2">The most critical diagnostic information comes from eyewitness accounts.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup> Clinicians ask specifically about:</p>
                <ul className="text-xs text-slate-700 text-left list-disc pl-5 space-y-1 w-full">
                  <li>Duration of the episode</li>
                  <li>Level of awareness or consciousness</li>
                  <li>Specific movements, automatisms, or vocalizations</li>
                  <li>Recovery time and precise post-ictal symptoms</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                {/* SLATE BADGE */}
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <History className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Medical & Family History</h3>
                <p className="text-xs text-slate-700 leading-relaxed">History of birth complications, childhood febrile seizures, head injuries, CNS infections, or stroke are deeply relevant.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup> A family history of epilepsy raises the probability of a genetic etiology. Sleep patterns and substance use are also heavily reviewed.</p>
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
                <li>1. Krumholz, A., et al. (2015). "Evidence-based guideline: Management of an unprovoked first seizure in adults." <i>Neurology</i>.</li>
                <li>2. Scheffer, I. E., et al. (2017). "ILAE classification of the epilepsies." <i>Epilepsia</i>.</li>
                <li>3. Pohlmann-Eden, B., et al. (2006). "The first seizure and its management in adults and children." <i>BMJ</i>.</li>
                <li>4. Ottman, R., et al. (2010). "Genetic testing in the epilepsies." <i>Epilepsia</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: EEG & NEUROIMAGING
      ========================================== */}
      {activeTab === 'imaging' && (
        <div className="space-y-8 animate-fadeIn">

          {/* EEG Card (Navy) - DOUBLE RINGS */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Electroencephalography (EEG)</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-diagnosis-eeg-1.webp"
              alt="Patient undergoing a scalp EEG monitoring session"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <div className="space-y-4 max-w-4xl mx-auto">
              
              {/* YELLOW RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#ffd166] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#ffd166] mt-1 ml-1">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Standard EEG & Limits</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">EEG records electrical activity from the scalp. Interictal epileptiform discharges (IEDs) directly support a diagnosis. However, a normal EEG does not rule out epilepsy. It only captures 20–40 minutes of time, and the seizure focus may be deep within the brain.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1, 4</sup></p>
                </div>
              </div>

              {/* SLATE RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#576d8e] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#576d8e] mt-1 ml-1">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Activation Procedures</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Hyperventilation and photic stimulation (flashing lights) are routinely performed during the EEG to actively provoke abnormal activity.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup> Sleep deprivation before the test also heavily increases the diagnostic yield.</p>
                </div>
              </div>

              {/* CYAN RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#2abcd4] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#2abcd4] mt-1 ml-1">
                  <Monitor className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Prolonged Video-EEG</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">When a standard EEG is normal but clinical suspicion remains high, prolonged monitoring (24–72 hours) or long-term video-EEG telemetry is utilized.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup> This allows clinicians to directly correlate physical behaviors with electrical spikes.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Neuroimaging Card (Navy) - CLEAN 3D BORDERS */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Neuroimaging</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-diagnosis-imaging-1.webp"
              alt="High resolution MRI brain scan indicating structural anomalies"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">MRI</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The modality of choice. Epilepsy-protocol MRI uses specific sequences to identify structural causes like hippocampal sclerosis, dysplasia, or tumors. 3T MRI provides far greater detail than standard 1.5T.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">CT Scan</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Used strictly in emergency settings when MRI is unavailable, to rapidly exclude severe hemorrhage or large tumors. CT is highly inferior to MRI for detecting most epilepsy-causing lesions.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Functional Imaging</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">PET shows reduced glucose use in the epileptogenic zone. SPECT shows hyperperfusion in the seizure focus during a seizure. Both are utilized heavily in presurgical evaluations.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">7</sup></p>
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
                <p>1. Blume, W. T., et al. (2001). "Glossary of descriptive terminology for ictal semiology." <i>Epilepsia</i>.</p>
                <p>2. Binnie, C. D., & Stefan, H. (1999). "Modern electroencephalography: Its role in epilepsy management." <i>Clinical Neurophysiology</i>.</p>
                <p>3. Cascino, G. D. (2002). "Video-EEG monitoring in adults." <i>Epilepsia</i>.</p>
                <p>4. Pillai, J., & Sperling, M. R. (2006). "Interictal EEG and the diagnosis of epilepsy." <i>Epilepsia</i>.</p>
                <p>5. Bernasconi, N., et al. (2003). "Mesial temporal damage in temporal lobe epilepsy." <i>Annals of Neurology</i>.</p>
                <p>6. Gaillard, W. D., et al. (2009). "Guidelines for imaging infants and children with recent-onset epilepsy." <i>Epilepsia</i>.</p>
                <p>7. la Fougère, C., et al. (2009). "PET and SPECT in epilepsy." <i>Epilepsy & Behavior</i>.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: DIFFERENTIAL & TESTING
      ========================================== */}
      {activeTab === 'differential' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Differential Card (Yellow) - CSS DOTS */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Differential Diagnosis</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-diagnosis-differential-1.webp"
              alt="Medical visual distinguishing epilepsy from overlapping neurological events"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Many conditions powerfully mimic seizures and can be heavily mistaken for epilepsy in clinical settings.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Syncope:</strong> Fainting can include brief, terrifying myoclonic jerks, often misidentified as convulsive seizures.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#576d8e] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>PNES:</strong> Psychogenic non-epileptic seizures are psychological events without EEG changes. They occur in ~20–30% of patients referred to epilepsy centers.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2, 3</sup></p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffd166] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Migraine & TIA:</strong> Visual auras from migraines, or focal deficits from a TIA, frequently resemble focal aware seizures.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Sleep Disorders:</strong> Night terrors, REM sleep behavior disorder, and severe hypnic jerks can easily masquerade as nocturnal epilepsy.</p>
                </div>

              </div>
            </div>
          </div>

          {/* Testing Card (Cyan) - ROUNDED SQUARES using NEW CYAN BADGE */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Laboratory & Neuropsychological Testing</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-diagnosis-testing-1.webp"
              alt="Lab samples and cognitive testing charts"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                {/* NEW CYAN BADGE */}
                <div className="w-10 h-10 rounded-lg bg-[#0A9DC4] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Laboratory Panels</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Blood tests strictly rule out metabolic/systemic causes. Panels include complete blood count, toxicology, thyroid function, and autoimmune encephalitis antibodies (anti-NMDAR, LGI1). Genetic testing (microarrays, whole exome sequencing) is increasingly critical.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4, 5</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Neuropsychology</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Comprehensive testing evaluates memory, processing speed, and executive function. This is vital in drug-resistant epilepsy. In presurgical evaluation, the Wada test (or fMRI) specifically lateralizes language and memory before surgical resection.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6, 7</sup></p>
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
                <li>1. Huff, J. S., & Fountain, N. B. (2011). "Pathophysiology and definitions of seizures and status epilepticus." <i>Emergency Medicine Clinics of North America</i>.</li>
                <li>2. Benbadis, S. R., & Hauser, W. A. (2000). "An estimate of the prevalence of psychogenic non-epileptic seizures." <i>Seizure</i>.</li>
                <li>3. LaFrance, W. C. Jr., & Benbadis, S. R. (2006). "Avoiding the costs of unrecognized psychological nonepileptic seizures." <i>Neurology</i>.</li>
                <li>4. Olson, H., et al. (2014). "Copy number variation plays an important role in clinical epilepsy." <i>Annals of Neurology</i>.</li>
                <li>5. Graus, F., et al. (2016). "A clinical approach to diagnosis of autoimmune encephalitis." <i>The Lancet Neurology</i>.</li>
                <li>6. Helmstaedter, C. (2004). "Neuropsychological aspects of epilepsy surgery." <i>Epilepsy & Behavior</i>.</li>
                <li>7. Wada, J., & Rasmussen, T. (1960). "Intracarotid injection of sodium amytal for the lateralization of cerebral speech dominance." <i>Journal of Neurosurgery</i>.</li>
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