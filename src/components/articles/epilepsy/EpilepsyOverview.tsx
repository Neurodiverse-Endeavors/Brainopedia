import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Zap, AlertTriangle, Activity, Network, Layers, Heart, Globe, Users, Target, ShieldAlert, Compass, CheckCircle, Sparkles } from 'lucide-react';

interface EpilepsyOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function EpilepsyOverview({ setCurrentArticle, initialTab }: EpilepsyOverviewProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'understanding';

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
          Epilepsy: Overview
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
          onClick={() => handleTabChange('understanding')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'understanding'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Understanding Epilepsy
        </button>
        <button
          onClick={() => handleTabChange('scope')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'scope'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Scope & Co-occurrence
        </button>
        <button
          onClick={() => handleTabChange('neurodiversity')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'neurodiversity'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Neurodiversity & Future
        </button>
      </div>

      {/* ==========================================
          TAB 1: UNDERSTANDING EPILEPSY
      ========================================== */}
      {activeTab === 'understanding' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Intro Card (Cyan) - Uses Slate/Navy Badges */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">What Is Epilepsy?</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-overview-understanding-1.webp"
              alt="Conceptual visual of neural pathways and brain electrical activity"
              className="block mx-auto w-64 max-w-full h-auto rounded-lg border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Epilepsy is one of the most common neurological conditions worldwide. As a form of neurodivergence, it represents a distinct pattern of brain activity that shapes how a person perceives and experiences the world—not only during seizures, but in the intervals between them as well.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1, 2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Definition</h3>
                <p className="text-xs text-slate-700 leading-relaxed">A neurological disorder characterized by recurrent, unprovoked seizures. The ILAE defines it as at least two unprovoked seizures occurring more than 24 hours apart, or one seizure with a high probability of further seizures.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3, 4</sup></p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">How Seizures Occur</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The brain communicates through electrical signals. In epilepsy, groups of neurons sometimes fire in an abnormally synchronized burst, disrupting normal brain function.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5, 6</sup></p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Seizures vs. Epilepsy</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Not all seizures indicate epilepsy. A single seizure triggered by a highly specific external cause—such as a high fever, low blood sugar, or alcohol withdrawal—is not epilepsy.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">7</sup></p>
              </div>

            </div>
          </div>

          {/* Types Card (Navy) - CLEAN 3D BORDERS */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Types of Epilepsy</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-overview-types-1.webp"
              alt="Medical visual demonstrating focal vs. generalized brain network activity"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Focal Onset</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Seizures strictly begin in one specific area (focus) of the brain. They may remain localized or eventually spread.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">8</sup> Temporal lobe epilepsy is the most common focal form in adults.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Generalized Onset</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Seizures involve both hemispheres of the brain simultaneously from the very outset.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">9</sup> Examples include Childhood Absence Epilepsy and Juvenile Myoclonic Epilepsy (JME).</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Unknown Onset</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">This classification is used when the exact beginning of the seizure is not clinically observed or simply cannot be definitively classified with current data.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">10</sup></p>
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
                <li>1. Hauser, W. A., et al. (1993). "Incidence of epilepsy and unprovoked seizures in Rochester, Minnesota: 1935–1984." <i>Epilepsia</i>.</li>
                <li>2. Hermann, B., Seidenberg, M., & Jones, J. (2008). "The neurobehavioural comorbidities of epilepsy." <i>The Lancet Neurology</i>.</li>
                <li>3. Fisher, R. S., et al. (2005). "Epileptic seizures and epilepsy: Definitions proposed by the ILAE and the IBE." <i>Epilepsia</i>.</li>
                <li>4. Fisher, R. S., et al. (2014). "ILAE official report: A practical clinical definition of epilepsy." <i>Epilepsia</i>.</li>
                <li>5. Stafstrom, C. E., & Carmant, L. (2015). "Seizures and epilepsy: An overview for neuroscientists." <i>Cold Spring Harbor Perspectives in Medicine</i>.</li>
                <li>6. Scheffer, I. E., et al. (2017). "ILAE classification of the epilepsies." <i>Epilepsia</i>.</li>
                <li>7. Beghi, E. (2020). "The epidemiology of epilepsy." <i>Neuroepidemiology</i>.</li>
                <li>8. Fisher, R. S., et al. (2017). "Operational classification of seizure types by the ILAE." <i>Epilepsia</i>.</li>
                <li>9. Berg, A. T., et al. (2010). "Revised terminology and concepts for organization of seizures and epilepsies." <i>Epilepsia</i>.</li>
                <li>10. Scheffer, I. E., et al. (2017). "ILAE classification of the epilepsies." <i>Epilepsia</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SCOPE & CO-OCCURRENCE
      ========================================== */}
      {activeTab === 'scope' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Prevalence Card (Navy) - DOUBLE RINGS */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Prevalence & Scope</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-overview-prevalence-1.webp"
              alt="Global map illustrating the widespread incidence of epilepsy"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <div className="space-y-5 max-w-4xl mx-auto">
              
              {/* YELLOW RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#ffd166] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#ffd166] mt-1 ml-1">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">The "1 in 26" Statistic</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Approximately 1 in 26 people will develop epilepsy at some point during their lifetime.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup> It affects roughly 3.4 million people in the United States alone,<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> making it one of the most widespread neurological conditions.</p>
                </div>
              </div>

              {/* SLATE RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#576d8e] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#576d8e] mt-1 ml-1">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Global Impact</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">An estimated 65 million people worldwide have epilepsy.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup> Significantly, about 80% of individuals with epilepsy live in low- and middle-income countries, where medical access is often limited.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup></p>
                </div>
              </div>

              {/* CYAN RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#2abcd4] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#2abcd4] mt-1 ml-1">
                  <Users className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Demographics</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Epilepsy uniquely affects all ages, sexes, races, and ethnicities indiscriminately. However, the condition sees its highest rate of new incidences occurring in very young children and in adults over the age of 65.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup></p>
                </div>
              </div>

            </div>
          </div>

          {/* Co-occurring Card (Yellow) - 3D Accent Borders utilizing Slate */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Co-occurring Conditions</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-overview-conditions-1.webp"
              alt="Medical visual showing the overlap of neurological and psychiatric conditions"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Epilepsy frequently occurs alongside other neurological and psychiatric conditions. These are not merely secondary reactions, but often share underlying neurobiological mechanisms.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#576d8e] border-opacity-30 pb-2">Mental Health</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Depression is 2–3 times more prevalent than in the general population. Anxiety disorders affect approximately 20–25% of all people living with epilepsy.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">7</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0c264d]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#0c264d] border-opacity-30 pb-2">Neurodivergent Overlap</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">ADHD is particularly common in children with epilepsy. Additionally, Autism Spectrum Disorder occurs at notably higher rates, especially in childhood-onset epilepsy syndromes.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#2abcd4] border-opacity-30 pb-2">Migraine & Sleep</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Migraines have a highly bidirectional relationship with epilepsy.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">8</sup> Furthermore, sleep disorders and severely disrupted sleep architecture are common across the spectrum.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#ffd166] border-opacity-60 pb-2">Cognitive Impacts</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">While many individuals have average or above-average intelligence, specific intellectual disability is a core component of several severe, childhood-onset epilepsy syndromes.</p>
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
                <p>1. Zack, M. M., & Kobau, R. (2017). "National and state estimates of the numbers of adults and children with active epilepsy." <i>MMWR</i>.</p>
                <p>2. Ngugi, A. K., et al. (2010). "Estimation of the burden of active and life-time epilepsy." <i>Epilepsia</i>.</p>
                <p>3. Hesdorffer, D. C., et al. (2011). "Estimating risk for developing epilepsy: A population-based study in Rochester, Minnesota." <i>Neurology</i>.</p>
                <p>4. Hauser, W. A. (1997). "Incidence and prevalence." In <i>Epilepsy: A comprehensive textbook</i>.</p>
                <p>5. World Health Organization. (2019). <i>Epilepsy: A public health imperative</i>.</p>
                <p>6. Kerr, M. P., et al. (2011). "International consensus clinical practice statements for the treatment of neuropsychiatric conditions associated with epilepsy." <i>Epilepsia</i>.</p>
                <p>7. Scott, A. J., et al. (2017). "Anxiety and depressive disorders in people with epilepsy: A meta-analysis." <i>Epilepsia</i>.</p>
                <p>8. Ottman, R., & Lipton, R. B. (1994). "Comorbidity of migraine and epilepsy." <i>Neurology</i>.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: NEURODIVERSITY & FUTURE
      ========================================== */}
      {activeTab === 'neurodiversity' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Neurodiversity Card (Yellow) - BARE DARK ICONS */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Neurodivergent Perspective</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-overview-neurodiversity-1.webp"
              alt="Artistic representation of unique perception and neurological identity"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Beyond managing seizures, many people with epilepsy describe a fundamentally different relationship with consciousness, time, and perception.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <Sparkles className="text-[#0c264d] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Altered Perception & Creativity</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Some individuals describe highly intense emotional experiences, heightened creativity, and unique perceptual states—particularly those with temporal lobe epilepsy.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup> Historical figures believed to have epilepsy include Julius Caesar, Dostoevsky, and Van Gogh.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <ShieldAlert className="text-[#0c264d] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Stigma vs. Identity</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Epilepsy carries massive social stigma in many cultures, which can be more disabling than the actual seizures.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup> The neurodiversity framework encourages recognizing epilepsy as a brain difference that, while requiring strict medical management, uniquely shapes identity.</p>
              </div>

            </div>
          </div>

          {/* Looking Ahead Card (Cyan) - CSS DOTS */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Looking Ahead</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-overview-takeaways-1.webp"
              alt="Medical professional discussing positive future outcomes with a patient"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b border-[#2abcd4] border-opacity-30 pb-2">Key Takeaways</h3>
              <div className="grid md:grid-cols-2 gap-4">
                
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed">Defined by recurrent, unprovoked seizures, affecting roughly 1 in 26 people globally.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#576d8e] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed">Encompasses many distinct types, classified largely by seizure onset location and etiology.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffd166] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed">Approximately 70% of people achieve total seizure control with modern medication.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup></p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed">Co-occurring mental health conditions are incredibly common and require dedicated attention.</p>
                </div>

                <div className="flex items-start gap-3 md:col-span-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed">With appropriate treatment, support, and anti-stigma advocacy, people with epilepsy can and do live full, deeply meaningful lives.</p>
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
                <li>1. Trimble, M. R., & Schmitz, B. (Eds.). (2011). <i>The neuropsychiatry of epilepsy (2nd ed.)</i>. Cambridge University Press.</li>
                <li>2. Waxman, S. G., & Geschwind, N. (1975). "The interictal behavior syndrome of temporal lobe epilepsy." <i>Archives of General Psychiatry</i>.</li>
                <li>3. Jacoby, A., Snape, D., & Baker, G. A. (2005). "Epilepsy and social identity: The stigma of a chronic neurological disorder." <i>The Lancet Neurology</i>.</li>
                <li>4. Kwan, P., & Brodie, M. J. (2000). "Early identification of refractory epilepsy." <i>New England Journal of Medicine</i>.</li>
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