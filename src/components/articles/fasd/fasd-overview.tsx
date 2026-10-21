import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Activity, Users, Baby, ShieldCheck, Heart, AlertTriangle, Search, FileText, Zap, Compass, CheckCircle, Network } from 'lucide-react';

interface FASDOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function FASDOverview({ setCurrentArticle, initialTab }: FASDOverviewProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'understanding';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Fetal Alcohol Spectrum Disorder: Overview
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
          onClick={() => handleTabChange('understanding')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'understanding'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Understanding FASD
        </button>
        <button
          onClick={() => handleTabChange('brain')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'brain'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Brain & Neurodiversity
        </button>
        <button
          onClick={() => handleTabChange('conditions')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'conditions'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Co-occurring & Protection
        </button>
      </div>

      {/* ==========================================
          TAB 1: UNDERSTANDING FASD
      ========================================== */}
      {activeTab === 'understanding' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Intro & Spectrum Card (Cyan) - ROUNDED SQUARES */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">What Is FASD?</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-overview-understanding-1.webp"
              alt="Conceptual visual of the diverse neurodevelopmental spectrum of FASD"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Fetal Alcohol Spectrum Disorder (FASD) is an umbrella term describing the range of lifelong physical, behavioral, and cognitive effects that can occur in a person whose mother consumed alcohol during pregnancy.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> It is the leading known preventable cause of neurodevelopmental disability worldwide—yet remains significantly underdiagnosed.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
            </p>

            <h3 className="text-[#0c264d] font-bold mb-4 text-xl border-b border-[#2abcd4] border-opacity-30 pb-2">The Spectrum</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              FASD is not a single diagnosis but a spectrum of conditions caused by prenatal alcohol exposure (PAE).<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup> Alcohol's effects vary enormously depending on timing, amount, genetics, and environment.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup> The spectrum includes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Fetal Alcohol Syndrome (FAS)</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The most recognizable form, involving the full triad of facial features, growth deficits, and central nervous system abnormalities.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-3">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Partial FAS (pFAS)</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Involves some of the facial features and growth deficits of FAS, but not the complete physical triad, alongside neurocognitive challenges.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">ARND</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Alcohol-Related Neurodevelopmental Disorder features severe neurocognitive and behavioral impairments completely without the facial features.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-3">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">ARBD</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Alcohol-Related Birth Defects involve structural abnormalities of organs (heart, kidney, bones) but lack the central nervous system features.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-3">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">ND-PAE</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Neurobehavioral Disorder Associated with Prenatal Alcohol Exposure is the DSM-5 diagnostic category emphasizing the neurobehavioral profile.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup></p>
              </div>
            </div>
          </div>

          {/* Prevalence Card (Navy) - CLEAN 3D BORDERS */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Prevalence & Scope</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-overview-prevalence-1.webp"
              alt="Global map overlay highlighting the widespread, invisible nature of FASD"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">General Population</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">FASD affects an estimated <strong>2–5% of the population</strong> in the United States and Western Europe.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup> FAS alone affects roughly 0.2–1.5 per 1,000 live births.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">7</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Demographics</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">FASD affects all races, ethnicities, and socioeconomic groups. While rates are higher in some communities with heavy drinking patterns,<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">8</sup> it remains a universal issue.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between md:col-span-2">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">The Hidden Disability</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Because the physical facial features only appear if alcohol is consumed during a highly specific window in the first trimester, the vast majority of individuals with FASD have no outward physical markers. Consequently, many individuals remain completely undiagnosed into adulthood.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">9</sup></p>
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
                <p>1. Hoyme, H. E., et al. (2016). "Updated clinical guidelines for diagnosing fetal alcohol spectrum disorders." <i>Pediatrics</i>.</p>
                <p>2. Lange, S., et al. (2017). "Global prevalence of fetal alcohol spectrum disorder among children and youth." <i>JAMA Pediatrics</i>.</p>
                <p>3. Bertrand, J., et al. (2004). "Fetal alcohol syndrome: Guidelines for referral and diagnosis." <i>CDC</i>.</p>
                <p>4. Guerri, C., Bazinet, A., & Riley, E. P. (2009). "Foetal alcohol spectrum disorders and alterations in brain and behaviour." <i>Alcohol and Alcoholism</i>.</p>
                <p>5. American Psychiatric Association. (2013). <i>Diagnostic and statistical manual of mental disorders (5th ed.)</i>.</p>
                <p>6. May, P. A., et al. (2018). "Prevalence of fetal alcohol spectrum disorders in 4 US communities." <i>JAMA</i>.</p>
                <p>7. Centers for Disease Control and Prevention. (2020). <i>Data and statistics: Fetal alcohol spectrum disorders</i>.</p>
                <p>8. Popova, S., et al. (2017). "Estimation of national, regional, and global prevalence of alcohol use during pregnancy." <i>BMC Medicine</i>.</p>
                <p>9. Streissguth, A. P., et al. (2004). "Risk factors for adverse life outcomes in fetal alcohol syndrome and fetal alcohol effects." <i>Journal of Developmental and Behavioral Pediatrics</i>.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: BRAIN & NEURODIVERSITY
      ========================================== */}
      {activeTab === 'brain' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Brain Impacts Card (Navy) - CLEAN 3D BORDERS */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">How Alcohol Affects the Developing Brain</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-overview-brain-1.webp"
              alt="Microscopic representation of disrupted neuronal migration during fetal development"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Alcohol is a teratogen—a substance that radically disrupts normal cellular development.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> Because the fetal brain is continuously developing from conception through birth, there is no "safe" trimester.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#2abcd4] border-opacity-30 pb-2">Cell Death</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Alcohol actively triggers apoptosis (programmed cell death) in developing neurons, particularly during periods of intense brain growth.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#ffd166] border-opacity-60 pb-2">Disrupted Migration</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Neurons completely fail to migrate to their correct, intended positions in the cortex, causing structural disorganization.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#576d8e] border-opacity-30 pb-2">Impaired Myelination</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Alcohol disrupts the formation of myelin sheaths (the brain's "insulation"), severely slowing down neural transmission and processing speed.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#0A9DC4] border-opacity-30 pb-2">Oxidative Stress & Genes</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Alcohol metabolism generates free radicals that damage developing cells,<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup> while epigenetic changes permanently alter how genes are expressed throughout life.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Neurodiversity Card (Yellow) - DOUBLE RINGS */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The FASD Brain: A Neurodiversity Perspective</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-overview-neurodiversity-1.webp"
              alt="Artistic representation of a neurodivergent brain showing unique pathways and strengths"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <div className="space-y-4 max-w-4xl mx-auto">
              
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#2abcd4] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#2abcd4] mt-1 ml-1">
                  <Network className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Differently Organized</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">People with FASD have brains that are genuinely organized differently—not simply "damaged" versions of neurotypical brains.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup> The FASD brain shows relative strengths alongside its challenges, frequently displaying high creativity, humor, intense loyalty, enthusiasm, and strong visual-spatial abilities.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#576d8e] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#2abcd4] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mt-1 ml-1">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">The Strengths-Based Model</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A strengths-based approach recognizes that behavioral challenges arise from a mismatch between the FASD brain's needs and environmental demands. The neurodiversity framework does not minimize the real struggles of FASD, but it situates the condition within a broader understanding of natural brain variation.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup></p>
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
                <p>1. Sokol, R. J., Delaney-Black, V., & Nordstrom, B. (2003). "Fetal alcohol spectrum disorder." <i>JAMA</i>.</p>
                <p>2. Clarren, S. K., et al. (1978). "Brain malformations related to prenatal exposure to ethanol." <i>Journal of Pediatrics</i>.</p>
                <p>3. Brocardo, P. S., Gil-Mohapel, J., & Christie, B. R. (2011). "The role of oxidative stress in fetal alcohol spectrum disorders." <i>Brain Research Reviews</i>.</p>
                <p>4. Kully-Martens, K., et al. (2012). "A review of social skills deficits in individuals with fetal alcohol spectrum disorders." <i>Alcoholism: Clinical and Experimental Research</i>.</p>
                <p>5. Paley, B., & O'Connor, M. J. (2011). "Behavioral interventions for children and adolescents with fetal alcohol spectrum disorders." <i>Alcohol Research and Health</i>.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: CO-OCCURRING & PROTECTION
      ========================================== */}
      {activeTab === 'conditions' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Co-occurring Card (Yellow) - DOUBLE RINGS */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Co-occurring Conditions</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-overview-conditions-1.webp"
              alt="Visual demonstrating the complex overlap of FASD with ADHD and Anxiety"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              FASD rarely occurs in isolation—co-occurring conditions are the rule rather than the exception, heavily complicating both diagnosis and treatment.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">ADHD & Sleep</h3>
                <p className="text-xs text-slate-700 leading-relaxed">ADHD is present in approximately 50–70% of individuals with FASD. Additionally, severely disrupted sleep architecture is nearly universal across the spectrum.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup></p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Mental Health & Trauma</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Anxiety and depression are highly prevalent, often secondary to repeated social failures. Reactive Attachment Disorder is also common due to trauma histories in foster/adoption settings.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center md:col-span-2">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Neurodevelopmental Overlap</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Autism spectrum disorder frequently co-occurs due to overlapping sensory and social features. While Intellectual Disability is present in full FAS, it is <em>not</em> present in all types of FASD.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup></p>
              </div>

            </div>
          </div>

          {/* Protective Factors Card (Cyan) - CSS DOTS */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Key Protective Factors</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-overview-protective-1.webp"
              alt="Supportive family environment providing stability for a child with FASD"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Research has identified critical environmental factors that drastically improve lifelong outcomes and build resilience for individuals with FASD.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup>
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Early Diagnosis:</strong> Receiving an accurate diagnosis before age 6 leads to significantly better outcomes.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup></p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Stable Home:</strong> A nurturing, highly structured environment (whether biological, adoptive, or foster).</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Safety:</strong> Complete absence of violence or trauma in the home environment.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Service Eligibility:</strong> Successfully qualifying for and receiving disability-related services.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Educational Support:</strong> Accommodations that allow the individual to remain in school until age 18.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Supported Adulthood:</strong> Living in a stable home as an adult rather than attempting independent living before developmentally ready.</p>
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
                <p>1. Landgraf, M. N., et al. (2013). "The diagnosis of fetal alcohol syndrome." <i>Deutsches Ärzteblatt International</i>.</p>
                <p>2. Jan, J. E., et al. (2010). "Sleep health issues for children with FASD." <i>International Journal of Pediatrics</i>.</p>
                <p>3. Mattson, S. N., Crocker, N., & Nguyen, T. T. (2011). "Fetal alcohol spectrum disorders: Neuropsychological and behavioral features." <i>Neuropsychology Review</i>.</p>
                <p>4. Streissguth, A. P., et al. (2004). "Risk factors for adverse life outcomes in fetal alcohol syndrome." <i>Journal of Developmental and Behavioral Pediatrics</i>.</p>
                <p>5. Astley, S. J., et al. (2009). "Neuropsychological and behavioral outcomes from a comprehensive magnetic resonance study of children with fetal alcohol spectrum disorders." <i>Canadian Journal of Clinical Pharmacology</i>.</p>
              </div>
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