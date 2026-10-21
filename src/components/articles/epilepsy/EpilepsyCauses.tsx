import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Activity, Brain, Zap, Dna, Network, ShieldAlert, HeartPulse, Building, Eye, Microscope, Search, Stethoscope, AlertTriangle, Crosshair, FileQuestion } from 'lucide-react';

interface EpilepsyCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function EpilepsyCauses({ setCurrentArticle, initialTab }: EpilepsyCausesProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'neuro';

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
          Epilepsy: Causes & Etiology
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
          onClick={() => handleTabChange('neuro')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'neuro'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Neuro & Genetic
        </button>
        <button
          onClick={() => handleTabChange('structural')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'structural'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Structural & Acquired
        </button>
        <button
          onClick={() => handleTabChange('metabolic')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'metabolic'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Metabolic & Immune
        </button>
      </div>

      {/* ==========================================
          TAB 1: NEURO & GENETIC
      ========================================== */}
      {activeTab === 'neuro' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Neuro Card (Cyan) - Uses Slate & Navy Badges */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Neurological Mechanisms</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-causes-neuro-1.webp"
              alt="Detailed neural pathways and electrical activity in the brain"
              className="block mx-auto w-64 max-w-full h-auto rounded-lg border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Epilepsy is not a single disease with a single cause—it is a diverse group of disorders united by the common feature of recurrent seizures.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1, 2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Ion Channel Dysfunction</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Many epilepsies arise from defects in ion channels (channelopathies). Mutations in these regulatory genes alter the electrical excitability of neurons, making them wildly prone to synchronized firing.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup></p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Excitatory Imbalance</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Seizures heavily reflect an imbalance between excitatory (glutamatergic) and inhibitory (GABAergic) neurotransmission. Too much glutamate or too little GABA immediately lowers the seizure threshold.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup></p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Cortical Hyperexcitability</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The epileptogenic zone (the brain region responsible for generating the seizures) exhibits highly abnormal hyperexcitability even between seizures, often involving altered synaptic plasticity.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup></p>
              </div>

            </div>
          </div>

          {/* Genetic Causes Card (Navy) - CLEAN 3D BORDERS */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Genetic Causes</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-causes-genetic-1.webp"
              alt="DNA helix and genetic research visualization"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Dna className="w-4 h-4 text-[#ffd166]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Monogenic Epilepsies</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-2">A single gene mutation actively causes some well-defined syndromes:<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup></p>
                  <ul className="text-xs text-slate-700 list-disc pl-4 space-y-1">
                    <li><strong>SCN1A (Dravet syndrome):</strong> Severe, treatment-resistant.</li>
                    <li><strong>CDKL5 deficiency:</strong> Early-onset epileptic encephalopathy.</li>
                    <li><strong>TSC1/TSC2 (Tuberous sclerosis):</strong> Benign tumors form throughout the brain.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">7</sup></li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Network className="w-4 h-4 text-[#2abcd4]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Polygenic & Copy Number Variants</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Common epilepsies (like juvenile myoclonic) involve multiple genetic variants interacting with environmental factors.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">8</sup> Additionally, chromosomal deletions or duplications (copy number variants) are found at significantly higher rates in people with epilepsy.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">9</sup></p>
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
                <li>2. Scheffer, I. E., et al. (2017). "ILAE classification of the epilepsies." <i>Epilepsia</i>.</li>
                <li>3. Catterall, W. A. (2014). "Sodium channels, inherited epilepsy, and antiepileptic drugs." <i>Annual Review of Pharmacology and Toxicology</i>.</li>
                <li>4. Treiman, D. M. (2001). "GABAergic mechanisms in epilepsy." <i>Epilepsia</i>.</li>
                <li>5. Staley, K. J., & Dudek, F. E. (2006). "Interictal spikes and epileptogenesis." <i>Epilepsy Currents</i>.</li>
                <li>6. Helbig, I., et al. (2009). "15q13.3 microdeletions increase risk of idiopathic generalized epilepsy." <i>Nature Genetics</i>.</li>
                <li>7. Curatolo, P., et al. (2008). "Tuberous sclerosis." <i>The Lancet</i>.</li>
                <li>8. Ottman, R. (2005). "Analysis of genetically complex epilepsies." <i>Epilepsia</i>.</li>
                <li>9. Mefford, H. C., et al. (2010). "Genome-wide copy number variation in epilepsy." <i>PLoS Genetics</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: STRUCTURAL & ACQUIRED
      ========================================== */}
      {activeTab === 'structural' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Structural Card (Navy) - DOUBLE RINGS */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Structural Causes</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-causes-structural-1.webp"
              alt="MRI brain scan indicating structural anomalies"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <div className="space-y-4 max-w-4xl mx-auto">
              
              {/* YELLOW RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#ffd166] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#ffd166] mt-1 ml-1">
                  <Microscope className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Hippocampal Sclerosis</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The single most common structural cause of drug-resistant temporal lobe epilepsy in adults. It involves severe neuronal loss and synaptic reorganization in the hippocampus, often associated with a childhood history of prolonged febrile seizures.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup></p>
                </div>
              </div>

              {/* SLATE RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#576d8e] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#576d8e] mt-1 ml-1">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Cortical Dysplasia</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Malformations where neurons failed to cleanly migrate or differentiate normally during fetal brain development. Focal cortical dysplasia (FCD) is increasingly identified by high-resolution MRI.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup></p>
                </div>
              </div>

              {/* CYAN RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#2abcd4] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#2abcd4] mt-1 ml-1">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Tumors & Vascular</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Low-grade gliomas and neuroepithelial tumors frequently present with epilepsy as their absolute first symptom.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup> Additionally, cavernous malformations can cause chronic focal epilepsy through repeated microhemorrhages.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup></p>
                </div>
              </div>

            </div>
          </div>

          {/* Acquired Causes Card (Yellow) - 3D Accent Borders utilizing Slate */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Acquired Causes</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-causes-acquired-1.webp"
              alt="Medical setting indicating trauma and stroke recovery"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#576d8e] border-opacity-30 pb-2">Traumatic Brain Injury (TBI)</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A leading cause of acquired epilepsy in young adults and veterans.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup> Risk increases dramatically with injury severity; penetrating injuries carry up to a 50% lifetime risk. Epilepsy may develop years after the initial injury.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0c264d]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#0c264d] border-opacity-30 pb-2">Stroke & Cerebrovascular</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Stroke is the most common cause of new-onset epilepsy in adults over 60.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup> Both ischemic and hemorrhagic strokes can cause epilepsy, with approximately 10–15% of survivors developing it within 5 years.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#2abcd4] border-opacity-30 pb-2">CNS Infections</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A major cause worldwide. Neurocysticercosis (tapeworm larvae) is the leading infectious cause globally.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">7</sup> Bacterial meningitis increases risk 7–15×, and it affects ~10% of people with HIV/AIDS.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#ffd166] border-opacity-60 pb-2">Perinatal Injury</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Hypoxic-ischemic encephalopathy (HIE) at birth is a deeply significant cause in children. Premature birth and low birth weight are heavily associated with increased risk.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">8</sup></p>
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
                <p>1. Blümcke, I., et al. (2013). "International consensus classification of hippocampal sclerosis in temporal lobe epilepsy." <i>Epilepsia</i>.</p>
                <p>2. Tassi, L., et al. (2002). "Focal cortical dysplasia: Neuropathological subtypes, EEG, neuroimaging and surgical outcome." <i>Brain</i>.</p>
                <p>3. Prayson, R. A. (2010). "Pathology of epilepsy." <i>Surgical Pathology Clinics</i>.</p>
                <p>4. Josephson, C. B., et al. (2011). "Seizure risk from cavernous or arteriovenous malformations." <i>Neurology</i>.</p>
                <p>5. Annegers, J. F., et al. (1998). "A population-based study of seizures after traumatic brain injuries." <i>New England Journal of Medicine</i>.</p>
                <p>6. Beghi, E., et al. (2011). "Incidence and predictors of acute symptomatic seizures after stroke." <i>Neurology</i>.</p>
                <p>7. Carpio, A., & Hauser, W. A. (2009). "Epilepsy in the developing world." <i>Current Neurology and Neuroscience Reports</i>.</p>
                <p>8. Glass, H. C., et al. (2009). "Antenatal and intrapartum risk factors for seizures in term newborns." <i>JAMA</i>.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: METABOLIC & IMMUNE
      ========================================== */}
      {activeTab === 'metabolic' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Metabolic & Immune Card (Yellow) - CSS DOTS */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Metabolic & Autoimmune Causes</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-causes-metabolic-1.webp"
              alt="Cellular and metabolic research visualization"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <div>
                    <strong className="text-sm text-[#0c264d] block mb-1">Metabolic Disruption</strong>
                    <p className="text-xs text-slate-700 leading-relaxed">Disorders disrupt the chemical environment of neurons. Examples include Pyridoxine (B6) deficiency, GLUT1 deficiency, and untreated PKU.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup></p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#576d8e] mt-1.5 shrink-0"></div>
                  <div>
                    <strong className="text-sm text-[#0c264d] block mb-1">Cellular Storage</strong>
                    <p className="text-xs text-slate-700 leading-relaxed">Mitochondrial disorders (MELAS, Leigh syndrome) and lysosomal storage diseases (Batten disease) frequently present with epilepsy as a core feature.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup></p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
                  <div>
                    <strong className="text-sm text-[#0c264d] block mb-1">Autoimmune Encephalitis</strong>
                    <p className="text-xs text-slate-700 leading-relaxed">Immune attacks on the brain are a newly recognized cause. Crucially, these respond to immunotherapy rather than standard anti-seizure meds.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup></p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffd166] mt-1.5 shrink-0"></div>
                  <div>
                    <strong className="text-sm text-[#0c264d] block mb-1">Specific Antibodies</strong>
                    <p className="text-xs text-slate-700 leading-relaxed">Anti-NMDA receptor encephalitis features prominent psychiatric symptoms. Rasmussen encephalitis causes progressive unilateral inflammation and hemiplegia.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup></p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Unknown & ILAE Card (Cyan) - ROUNDED SQUARES using Slate & Navy */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Unknown & ILAE Categories</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-causes-unknown-1.webp"
              alt="Medical professional reviewing diagnostic criteria"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Despite thorough investigation, no cause is identified in a significant proportion of cases. "Unknown" is not a diagnosis of exclusion, but a marker of our current scientific limits.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup> The ILAE formally categorizes etiology into six distinct buckets:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Structural</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Visible on imaging (dysplasia, tumor, scar tissue).</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <Dna className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Genetic</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Known or inferred gene mutation as direct cause.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Infectious</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Resulting from an ongoing or past CNS infection.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Metabolic</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A core feature of an underlying metabolic disorder.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Immune</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Caused by active immune-mediated inflammation.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <FileQuestion className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Unknown</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Cause currently unidentified by modern science.</p>
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
                <li>1. Gospe, S. M. (2010). "Pyridoxine-dependent epilepsy." In <i>GeneReviews</i>.</li>
                <li>2. Mole, S. E., & Cotman, S. L. (2015). "Genetics of the neuronal ceroid lipofuscinoses (Batten disease)." <i>Biochimica et Biophysica Acta</i>.</li>
                <li>3. Graus, F., et al. (2016). "A clinical approach to diagnosis of autoimmune encephalitis." <i>The Lancet Neurology</i>.</li>
                <li>4. Bien, C. G., et al. (2005). "Pathogenesis, diagnosis and treatment of Rasmussen encephalitis." <i>Brain</i>.</li>
                <li>5. Shorvon, S. D. (2011). "The etiologic classification of epilepsy." <i>Epilepsia</i>.</li>
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