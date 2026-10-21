import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Pill, Activity, Brain, Utensils, Zap, Settings, ShieldAlert, HeartPulse, BookOpen, Briefcase, Heart, Stethoscope } from 'lucide-react';

interface EpilepsySupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function EpilepsySupport({ setCurrentArticle, initialTab }: EpilepsySupportProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'meds';

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
          Epilepsy: Support & Treatment
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
          onClick={() => handleTabChange('meds')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'meds'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Medications & Diet
        </button>
        <button
          onClick={() => handleTabChange('surgery')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'surgery'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Surgical & Devices
        </button>
        <button
          onClick={() => handleTabChange('lifestyle')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'lifestyle'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          First Aid & Lifestyle
        </button>
      </div>

      {/* ==========================================
          TAB 1: MEDICATIONS & DIET
      ========================================== */}
      {activeTab === 'meds' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Medications Card (Cyan) - Uses requested CYAN #0a9dc4 badge */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Anti-Seizure Medications (ASMs)</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-support-meds-1.webp"
              alt="Medical professional reviewing pharmacological options"
              className="block mx-auto w-64 max-w-full h-auto rounded-lg border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Epilepsy management extends well beyond seizure suppression—encompassing medication, surgical options, dietary therapies, and lifestyle accommodations. Approximately 70% of people achieve seizure freedom with medication alone.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1, 2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-6">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                {/* NEW BRIGHT CYAN BADGE */}
                <div className="w-10 h-10 rounded-lg bg-[#0A9DC4] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Pill className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">First-Line Options</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-2">Selection depends deeply on seizure type and patient profile:<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup></p>
                <ul className="text-xs text-slate-700 text-left list-disc pl-5 space-y-1 w-full">
                  <li><strong>Levetiracetam/Lamotrigine:</strong> Broad-spectrum, well-tolerated.</li>
                  <li><strong>Valproate:</strong> Highly effective for generalized, but teratogenic caution.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup></li>
                  <li><strong>Ethosuximide:</strong> First-line specifically for childhood absence.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                {/* SLATE BADGE */}
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Core Principles & Newer Meds</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-2">Newer generations (lacosamide, brivaracetam) often have better tolerability profiles.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup> Principles include:</p>
                <ul className="text-xs text-slate-700 text-left list-disc pl-5 space-y-1 w-full">
                  <li>Start low, titrate slowly to minimize side effects.</li>
                  <li>Monotherapy is heavily preferred.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup></li>
                  <li><strong>Never</strong> stop ASMs abruptly (risks status epilepticus).</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Diet Card (Navy) - 3D Accent Borders */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Dietary Therapies</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Activity className="w-4 h-4 text-[#ffd166]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Ketogenic Diet</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">A strictly high-fat, low-carbohydrate diet that forces ketosis, yielding proven anti-seizure effects. It reduces seizures by 50%+ in roughly half of children who try it, and is particularly vital for Dravet and GLUT1 syndromes.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">7</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Utensils className="w-4 h-4 text-[#2abcd4]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Modified Atkins & Low GI</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">The Modified Atkins Diet and Low Glycemic Index Treatment provide less restrictive alternatives to the classic ketogenic diet, making them much more practical and sustainable for older children and adults.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">8</sup></p>
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
                <li>1. Kwan, P., & Brodie, M. J. (2000). "Early identification of refractory epilepsy." <i>New England Journal of Medicine</i>.</li>
                <li>2. Brodie, M. J., et al. (2012). "Patterns of treatment response in newly diagnosed epilepsy." <i>Neurology</i>.</li>
                <li>3. Glauser, T., et al. (2013). "Updated ILAE evidence review of antiepileptic drug efficacy." <i>Epilepsia</i>.</li>
                <li>4. Tomson, T., et al. (2011). "Dose-dependent risk of malformations with antiepileptic drugs." <i>Neurology</i>.</li>
                <li>5. Bialer, M., & White, H. S. (2010). "Key factors in the discovery and development of new antiepileptic drugs." <i>Nature Reviews Drug Discovery</i>.</li>
                <li>6. Perucca, E. (2005). "An introduction to antiepileptic drugs." <i>Epilepsia</i>.</li>
                <li>7. Neal, E. G., et al. (2008). "The ketogenic diet for the treatment of childhood epilepsy." <i>The Lancet Neurology</i>.</li>
                <li>8. Kossoff, E. H., et al. (2009). "Optimal clinical management of children receiving the ketogenic diet." <i>Epilepsia</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SURGICAL & DEVICES
      ========================================== */}
      {activeTab === 'surgery' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Surgery Card (Navy) - DOUBLE RINGS */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Surgical Treatments</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-support-surgery-1.webp"
              alt="Medical visual indicating advanced surgical and neurological procedures"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <div className="space-y-4 max-w-4xl mx-auto">
              
              {/* YELLOW RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#ffd166] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#ffd166] mt-1 ml-1">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Resective Surgery</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">For drug-resistant focal epilepsy, surgical removal of the epileptogenic zone offers complete seizure freedom in 60–80% of appropriately selected patients with temporal lobe epilepsy.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup></p>
                </div>
              </div>

              {/* SLATE RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#576d8e] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#576d8e] mt-1 ml-1">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Corpus Callosotomy & LITT</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Sectioning the corpus callosum prevents seizures from spreading between hemispheres (highly effective for drop attacks).<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup> LITT uses minimally invasive, laser-guided heat to carefully ablate the seizure focus.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup></p>
                </div>
              </div>

              {/* CYAN RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#2abcd4] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#2abcd4] mt-1 ml-1">
                  <Settings className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Responsive Neurostimulation (RNS)</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">An implanted device constantly monitors brain activity and delivers targeted electrical stimulation when it detects abnormal patterns, actively aborting seizures before they fully develop.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup></p>
                </div>
              </div>

            </div>
          </div>

          {/* Neurostimulation Devices Card (Yellow) - 3D Borders */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Neuromodulation Devices</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Zap className="w-4 h-4 text-[#2abcd4]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Vagus Nerve Stimulation (VNS)</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">An implanted device delivers regular electrical pulses to the vagus nerve, reducing seizure frequency in ~50% of patients. It also features an on-demand therapy mode: patients can swipe a magnet over the device when they feel an aura to abort the seizure.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Brain className="w-4 h-4 text-[#576d8e]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Deep Brain Stimulation (DBS)</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Stimulation of the anterior nucleus of the thalamus (ANT-DBS) actively reduces seizure frequency by roughly 40–50%. It is fully FDA-approved specifically for drug-resistant focal epilepsy.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup></p>
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
                <p>1. Engel, J. Jr., et al. (2012). "Early surgical therapy for drug-resistant temporal lobe epilepsy." <i>JAMA</i>.</p>
                <p>2. Maehara, T., & Shimizu, H. (2001). "Surgical outcome of corpus callosotomy in patients with drop attacks." <i>Seizure</i>.</p>
                <p>3. Jermakowicz, W. J., et al. (2017). "Laser thermal ablation for mesiotemporal epilepsy." <i>Epilepsy Research</i>.</p>
                <p>4. Bergey, G. K., et al. (2015). "Long-term treatment with responsive brain stimulation in adults with refractory partial seizures." <i>Neurology</i>.</p>
                <p>5. Morris, G. L., & Mueller, W. M. (1999). "Long-term treatment with vagus nerve stimulation in patients with refractory epilepsy." <i>Neurology</i>.</p>
                <p>6. Fisher, R., et al. (2010). "Electrical stimulation of the anterior nucleus of thalamus for treatment of refractory epilepsy." <i>Epilepsia</i>.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: FIRST AID & LIFESTYLE
      ========================================== */}
      {activeTab === 'lifestyle' && (
        <div className="space-y-8 animate-fadeIn">

          {/* First Aid Card (Yellow) - CSS DOTS */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Seizure First Aid</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-support-firstaid-1.webp"
              alt="Visual demonstrating safe and proper seizure first aid techniques"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Everyone in a person's life should know basic seizure first aid. The absolute most important rule is to protect them from injury without restraining them.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1, 2</sup>
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Stay Calm & Time It:</strong> Most seizures resolve naturally within 1–3 minutes. Call emergency services if it lasts more than 5 minutes.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#576d8e] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Protect from Injury:</strong> Clear the area of hard objects, cushion the head softly, and turn them on their side to prevent choking.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffd166] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Do NOT Restrain:</strong> Never hold them down, and absolutely never force anything into their mouth.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Rescue Meds:</strong> If prescribed (e.g., Nayzilam, Valtoco), administer them specifically for prolonged seizures as directed.</p>
                </div>

              </div>
            </div>
          </div>

          {/* Lifestyle Card (Cyan) - ROUNDED SQUARES using Slate & Navy */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Psychological, School & Workplace Support</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-support-lifestyle-1.webp"
              alt="Patient receiving workplace and educational accommodations"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Mental Health & Family</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Mental health support is as critical as seizure control. CBT is highly effective for epilepsy-related anxiety and PNES.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup> Family members also require intensive education on seizure recognition and emotional support strategies.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">School (IDEA / 504)</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Students are entitled to Individualized Health Plans (IHPs), extra time on tests (to account for post-ictal cognitive effects), flexible attendance, and immediate access to rescue medications on campus.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4 md:col-span-2">
                <div className="w-10 h-10 rounded-lg bg-[#0A9DC4] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Workplace (ADA)</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Under the ADA, reasonable accommodations can include flexible scheduling, remote work allowances during recovery periods, and formally modified safety protocols to ensure a secure working environment.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup></p>
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
                <li>1. Epilepsy Foundation. (2017). <i>Seizure first aid and safety</i>.</li>
                <li>2. St. Louis, E. K., & Cascino, G. D. (2016). "Diagnosis of epilepsy and related episodic disorders." <i>CONTINUUM: Lifelong Learning in Neurology</i>.</li>
                <li>3. Kerr, M. P., et al. (2011). "International consensus clinical practice statements for the treatment of neuropsychiatric conditions associated with epilepsy." <i>Epilepsia</i>.</li>
                <li>4. Leenen, L. A., et al. (2016). "What do patients and their caregivers want from epilepsy care?" <i>Epilepsy & Behavior</i>.</li>
                <li>5. Wodrich, D. L., & Cunningham, M. M. (2008). "School-based tertiary and targeted interventions for students with chronic medical conditions." <i>Psychology in the Schools</i>.</li>
                <li>6. Lineberry, T. W., & Bostwick, J. M. (2006). "Epilepsy in the workplace." <i>Mayo Clinic Proceedings</i>.</li>
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