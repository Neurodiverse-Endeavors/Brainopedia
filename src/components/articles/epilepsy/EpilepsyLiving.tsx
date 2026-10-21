import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ShieldAlert, Car, Droplets, Activity, Moon, Heart, Baby, Brain, Compass, Users, AlertTriangle } from 'lucide-react';

interface EpilepsyLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function EpilepsyLiving({ setCurrentArticle, initialTab }: EpilepsyLivingProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'safety';

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
          Epilepsy: Living with Epilepsy
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
          onClick={() => handleTabChange('safety')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'safety'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Safety & Lifestyle
        </button>
        <button
          onClick={() => handleTabChange('women_sleep')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'women_sleep'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Women & Sleep
        </button>
        <button
          onClick={() => handleTabChange('mental_health')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'mental_health'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Mental Health & Advocacy
        </button>
      </div>

      {/* ==========================================
          TAB 1: SAFETY & LIFESTYLE
      ========================================== */}
      {activeTab === 'safety' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Safety Card (Cyan) - Uses requested CYAN #0a9dc4 badge */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Safety in Daily Life</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-living-safety-1.webp"
              alt="Visual demonstrating practical home modifications for seizure safety"
              className="block mx-auto w-64 max-w-full h-auto rounded-lg border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Living with epilepsy means learning to build a life that heavily accommodates unpredictability without being strictly defined by it.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1, 2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                {/* NEW BRIGHT CYAN BADGE */}
                <div className="w-10 h-10 rounded-lg bg-[#0A9DC4] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Home Modifications</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-2">Practical changes drastically reduce injury risk:<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup></p>
                <ul className="text-xs text-slate-700 text-left list-disc pl-5 space-y-1 w-full">
                  <li>Use showers instead of bathtubs.</li>
                  <li>Use microwaves or back burners on stoves.</li>
                  <li>Pad sharp furniture; remove slip rugs.</li>
                  <li>Wear a medical ID or seizure alert device.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                {/* SLATE BADGE */}
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Droplets className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Water & Heights</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Drowning is a massive risk. SUDEP (sudden unexpected death in epilepsy) risk from drowning is highly disproportionate.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup> Never swim alone. Working at heights or with open machinery carries extreme risk and requires vocational modification.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup></p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                {/* NAVY BADGE */}
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Driving Laws</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Driving restrictions are the most significant life impact for many.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup> Jurisdictions frequently require 3–12 months seizure-free before legal driving resumes. This heavily impacts employment, forcing reliance on public/community transit.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">7</sup></p>
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
                <li>1. Jacoby, A., Snape, D., & Baker, G. A. (2005). "Epilepsy and social identity: The stigma of a chronic neurological disorder." <i>The Lancet Neurology</i>.</li>
                <li>2. Devinsky, O. (1999). "Quality of life in epilepsy." <i>Epilepsia</i>.</li>
                <li>3. Josephson, C. B., & Jetté, N. (2017). "Psychiatric comorbidities in epilepsy." <i>International Review of Psychiatry</i>.</li>
                <li>4. Lamberts, R. J., et al. (2012). "Sudden unexpected death in epilepsy." <i>Annals of Neurology</i>.</li>
                <li>5. Drazkowski, J. (2007). "An overview of epilepsy and driving." <i>Epilepsia</i>.</li>
                <li>6. Driving and Epilepsy. (2016). <i>ILAE task force report on epilepsy and driving</i>.</li>
                <li>7. McLachlan, R. S., et al. (2007). "Impact of mandatory physician reporting on accident risk in epilepsy." <i>Epilepsia</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: WOMEN & SLEEP
      ========================================== */}
      {activeTab === 'women_sleep' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Sleep & Lifestyle Card (Navy) - DOUBLE RINGS */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Sleep & Lifestyle Triggers</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-living-lifestyle-1.webp"
              alt="Visual demonstrating lifestyle factors and healthy routines"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <div className="space-y-4 max-w-4xl mx-auto">
              
              {/* YELLOW RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#ffd166] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#ffd166] mt-1 ml-1">
                  <Moon className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Sleep Hygiene</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Sleep deprivation is one of the most potent seizure triggers.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> A hyper-consistent sleep schedule is the most effective non-pharmacological prevention. This requires strict bedtimes, 7–9 hours nightly, and heavily avoiding late-night shift work.</p>
                </div>
              </div>

              {/* SLATE RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#576d8e] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#576d8e] mt-1 ml-1">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Alcohol & Substances</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Alcohol deeply lowers the seizure threshold; and alcohol withdrawal is a particularly potent trigger.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup> Many neurologists mandate strict abstinence. Recreational drugs (cocaine, amphetamines) severely interact with seizure thresholds and medications.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Women & Epilepsy Card (Yellow) - 3D Accent Borders */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Women and Epilepsy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Heart className="w-4 h-4 text-[#2abcd4]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Contraception</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Enzyme-inducing ASMs (carbamazepine, topiramate) actively reduce the effectiveness of hormonal contraceptives.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup> Women must coordinate contraception with their neurologist.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Activity className="w-4 h-4 text-[#576d8e]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Catamenial Epilepsy</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Seizures frequently cluster around menstruation or ovulation due to hormonal swings on the seizure threshold.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup> Cyclic progesterone therapy or adjusting doses perimenstrually helps.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between md:col-span-2">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Baby className="w-4 h-4 text-[#ffd166]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Pregnancy</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Most women have healthy pregnancies, but strict pre-conception counseling is essential.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup> Valproate carries the highest teratogenic risk and must be avoided. Folic acid supplementation (4–5 mg/day) and frequent medication dose adjustments are mandatory, as uncontrolled seizures carry severe fetal risks.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup></p>
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
                <p>1. Bazil, C. W., & Walczak, T. S. (1997). "Effects of sleep and sleep stage on epileptic and nonepileptic seizures." <i>Epilepsia</i>.</p>
                <p>2. Hillbom, M., et al. (2003). "Seizures in alcohol-dependent patients." <i>CNS Drugs</i>.</p>
                <p>3. Zupanc, M. L. (2006). "Antiepileptic drugs and hormonal contraceptives in adolescent women with epilepsy." <i>Neurology</i>.</p>
                <p>4. Harden, C. L., et al. (2009). "Management issues for women with epilepsy — Focus on pregnancy." <i>Epilepsia</i>.</p>
                <p>5. Tomson, T., et al. (2011). "Dose-dependent risk of malformations with antiepileptic drugs." <i>Neurology</i>.</p>
                <p>6. Herzog, A. G. (2015). "Catamenial epilepsy: Definition, prevalence pathophysiology and treatment." <i>Seizure</i>.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: MENTAL HEALTH & ADVOCACY
      ========================================== */}
      {activeTab === 'mental_health' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Mental Health & SUDEP Card (Yellow) - CSS DOTS */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Mental Health & SUDEP</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-living-mental-1.webp"
              alt="Patient receiving mindfulness and mental health support"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Mental health conditions are nearly twice as prevalent in epilepsy as in the general population.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Depression & Anxiety:</strong> Bidirectionally related to epilepsy—not just a psychological reaction, but frequently neurobiologically linked to the seizures themselves.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#576d8e] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Anticipatory Fear:</strong> The intense fear of having a seizure in public frequently leads to extreme social withdrawal and avoidance.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Internalized Stigma:</strong> Associated heavily with depression and reduced quality of life.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup> Mindfulness-based stress reduction (MBSR) shows strong emerging evidence.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup></p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffd166] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>SUDEP Risk:</strong> Sudden unexpected death in epilepsy occurs in roughly 1 in 1,000 per year. Nocturnal seizures are a massive risk factor.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4, 5</sup></p>
                </div>

              </div>
            </div>
          </div>

          {/* Advocacy Card (Cyan) - ROUNDED SQUARES using Slate & Navy */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Community & Advocacy</h2>
            
            <ImageWithFallback 
              src="/images/epilepsy/epilepsy-living-advocacy-1.webp"
              alt="Global advocacy and support community for epilepsy awareness"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Epilepsy advocacy organizations provide critical resources, connection, and vital tools for self-advocacy. Purple Day (March 26) is the international epilepsy awareness day.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Foundational Support</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The Epilepsy Foundation (USA) provides national helplines, local affiliates, online communities, and massive research funding.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Research & Science</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">CURE Epilepsy (Citizens United for Research in Epilepsy) focuses intensely on research toward a cure. The International League Against Epilepsy (ILAE) acts as the global scientific body.</p>
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
                <li>1. Kanner, A. M. (2003). "Depression in epilepsy: Prevalence, clinical semiology, pathogenic mechanisms, and treatment." <i>Biological Psychiatry</i>.</li>
                <li>2. Jacoby, A. (1994). "Felt versus enacted stigma: A concept revisited." <i>Social Science & Medicine</i>.</li>
                <li>3. Tang, V., et al. (2015). "Mindfulness-based therapy for drug-resistant epilepsy." <i>Epilepsy & Behavior</i>.</li>
                <li>4. Shorvon, S., & Tomson, T. (2011). "Sudden unexpected death in epilepsy." <i>The Lancet</i>.</li>
                <li>5. Harden, C., et al. (2017). "Practice guideline summary: Sudden unexpected death in epilepsy incidence rates and risk factors." <i>Neurology</i>.</li>
                <li>6. Epilepsy Foundation. (2019). <i>Living well with epilepsy: A guide for people with epilepsy and their families</i>.</li>
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