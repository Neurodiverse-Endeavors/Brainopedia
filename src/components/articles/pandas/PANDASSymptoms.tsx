import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Zap, AlertTriangle, Moon, Activity, Eye, BookOpen, Droplets, HeartPulse, LineChart, ShieldAlert, Thermometer } from 'lucide-react';

interface PANDASSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function PANDASSymptoms({ setCurrentArticle, initialTab }: PANDASSymptomsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'primary';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Symptoms & Characteristics of PANDAS
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
          onClick={() => handleTabChange('primary')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'primary'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Primary Symptoms
        </button>
        <button
          onClick={() => handleTabChange('associated')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'associated'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Associated & Physical
        </button>
        <button
          onClick={() => handleTabChange('cycle')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'cycle'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Flare Cycle
        </button>
      </div>

      {/* ==========================================
          TAB 1: PRIMARY SYMPTOMS
      ========================================== */}
      {activeTab === 'primary' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The "Explosion" of Symptoms</h2>
            
            <ImageWithFallback 
              src="/images/pandas/pandas-symptoms-primary-1.webp"
              alt="Conceptual visual of sudden onset anxiety and intrusive thoughts"
              className="block mx-auto w-64 max-w-full h-auto rounded-lg border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              The absolute hallmark of PANDAS is the sudden, dramatic "explosion" of neuropsychiatric symptoms. A child who was previously functioning typically may abruptly exhibit severe, crippling anxiety, OCD, or physical tics.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0A9DC4] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Sudden Onset OCD</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Intensive, highly intrusive thoughts and repetitive physical or mental rituals that simply were not there before. To meet PANDAS criteria, this onset must be abruptly dramatic.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Sudden Onset Tics</h3>
                <p className="text-xs text-slate-700 leading-relaxed">New motor tics (frequent blinking, facial twitching, limb jerking) or vocal tics (grunting, clearing the throat, repeating sounds) that appear virtually overnight.</p>
              </div>

            </div>
          </div>

          {/* ===== REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>Swedo, S. E., et al. (1998). "PANDAS: First 50 cases." <i>American Journal of Psychiatry</i>.</li>
                <li>Chang, K., et al. (2015). "Clinical evaluation of youth with PANS." <i>JCAP</i>.</li>
                <li>Murphy, T. K., et al. (2010). "Immunobiology of Tourette's and PANDAS."</li>
                <li>Perlmutter, S. J., et al. (1999). "Therapeutic plasma exchange for OCD and tics." <i>The Lancet</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: ASSOCIATED & PHYSICAL
      ========================================== */}
      {activeTab === 'associated' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Associated Neuropsychiatric Symptoms</h2>
            
            <ImageWithFallback 
              src="/images/pandas/pandas-symptoms-associated-1.webp"
              alt="Medical visual showing the overlapping neuropsychiatric symptoms of PANDAS"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Alongside OCD and tics, most children with PANDAS simultaneously experience a wide range of intense secondary symptoms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-8">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <AlertTriangle className="w-4 h-4 text-[#ffd166]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Emotional Lability</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Severe, unpredictable mood swings, sudden crying spells, or extreme irritability and uncharacteristic aggression.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <ShieldAlert className="w-4 h-4 text-[#576d8e]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Separation Anxiety</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Suddenly being completely unable to be away from a parent or primary caregiver, even in highly familiar settings like their own home.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Moon className="w-4 h-4 text-[#2abcd4]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Sleep Disturbance</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Profound difficulty falling asleep, refusal to sleep alone, frequent intense nightmares, or disruptive night terrors.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0c264d]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <BookOpen className="w-4 h-4 text-[#0c264d]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Cognitive Decline</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">A sudden, noticeable deterioration in school performance, loss of math skills, or severe degradation in handwriting (dysgraphia).</p>
                </div>
              </div>

            </div>

            <h3 className="text-[#0c264d] font-bold mb-4 text-xl text-center border-t border-[#0c264d] border-opacity-20 pt-6">Physical Signs</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Droplets className="w-4 h-4 text-[#576d8e]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Urinary Frequency</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">A sudden, urgent, and highly frequent need to use the bathroom, which tests confirm is explicitly not related to a UTI.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Eye className="w-4 h-4 text-[#ffd166]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Dilated Pupils</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Parents frequently report that the child's pupils remain extremely large and dilated, regardless of ambient light levels.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0c264d]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <HeartPulse className="w-4 h-4 text-[#0c264d]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Joint Pain</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Unexplained, sometimes migrating aches and pains, particularly occurring in the knees, wrists, or other major joints.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Activity className="w-4 h-4 text-[#2abcd4]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Sensory Sensitivity</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">A sudden, intense intolerance to everyday stimuli—such as tags on clothing, seams in socks, loud noises, or certain fluorescent lights.</p>
                </div>
              </div>

            </div>
          </div>

          {/* ===== REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>Swedo, S. E., et al. (2017). "PANS/PANDAS: Clinical presentation." <i>Psychiatric Times</i>.</li>
                <li>Thienemann, M., et al. (2017). "Clinical management of PANS: Part I." <i>JCAP</i>.</li>
                <li>Calaprice, D., et al. (2018). "Treatment of PANDAS in a large survey population." <i>JCAP</i>.</li>
                <li>Brandi, M. L., et al. (2012). "Deterioration of handwriting in PANDAS."</li>
                <li>Frankovich, J., et al. (2015). "Multidisciplinary clinic for PANS." <i>JCAP</i>.</li>
                <li>NIMH. (2019). "Information about PANDAS/PANS."</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: THE FLARE CYCLE
      ========================================== */}
      {activeTab === 'cycle' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The "Sawtooth" Pattern</h2>
            
            <ImageWithFallback 
              src="/images/pandas/pandas-symptoms-cycle-1.webp"
              alt="Line graph demonstrating the episodic, sawtooth nature of PANDAS flares"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              PANDAS is fundamentally an episodic condition. The clinical presentation is heavily defined by what immunologists and neurologists refer to as a "sawtooth" course of illness.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center max-w-2xl mx-auto">
              <LineChart className="text-[#0c264d] w-12 h-12 mb-4" />
              <h3 className="text-[#0c264d] font-bold text-lg mb-3 w-full border-b border-[#ffd166] border-opacity-50 pb-3">Episodic Spikes and Remission</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Symptoms do not remain constant. Instead, they flare up incredibly intensely during or shortly after a streptococcal infection. With time or treatment, symptoms will gradually decrease or even completely resolve. However, they will aggressively flare up again—often with even greater intensity—upon the next exposure to strep or an immune trigger. This sharp spike followed by gradual decline creates the visual "sawtooth" pattern on symptom tracking charts.
              </p>
            </div>
          </div>

          {/* ===== REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>Murphy, T. K., et al. (2007). "Relationship of behaviors to Group A Strep." <i>Biological Psychiatry</i>.</li>
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