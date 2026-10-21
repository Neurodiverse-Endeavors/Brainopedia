import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Zap, Dna, Clock, ShieldAlert, AlertTriangle, Users, Activity, Heart, Network, Calendar, Wine, Baby, BookOpen, Compass } from 'lucide-react';

interface FASDCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function FASDCauses({ setCurrentArticle, initialTab }: FASDCausesProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'mechanisms';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          FASD: Causes & Risk Factors
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
          onClick={() => handleTabChange('mechanisms')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'mechanisms'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Brain Mechanisms
        </button>
        <button
          onClick={() => handleTabChange('factors')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'factors'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Dose & Maternal
        </button>
        <button
          onClick={() => handleTabChange('environment')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'environment'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Genetics & Environment
        </button>
      </div>

      {/* ==========================================
          TAB 1: BRAIN MECHANISMS
      ========================================== */}
      {activeTab === 'mechanisms' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Mechanisms Card (Cyan) - Uses Slate & Navy Badges to avoid Cyan clash */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">How Alcohol Damages the Brain</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-causes-mechanisms-1.webp"
              alt="Microscopic representation of disrupted neuronal pathways and cell activity"
              className="block mx-auto w-64 max-w-full h-auto rounded-lg border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              FASD has one necessary cause: prenatal alcohol exposure (PAE).<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> However, understanding the exact biological mechanisms helps explain the massive variability in outcomes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Apoptosis (Cell Death)</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Alcohol triggers excessive programmed cell death in developing neurons.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup> This premature, excessive pruning permanently reduces the neural substrate available for cognitive functions.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Disrupted Migration</h3>
                <p className="text-xs text-slate-700 leading-relaxed">During weeks 6–24, neurons must migrate to their final positions in the cortex.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup> Alcohol disrupts this, producing cortical abnormalities and displaced neuron clusters.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Neurotransmitter Disruption</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Alcohol blocks excitatory NMDA receptors during critical development periods,<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup> severely interfering with the formation of lasting neural connections and synapses.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center md:col-span-2 lg:col-span-1 lg:col-start-2">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Dna className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Epigenetic Changes</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Alcohol permanently alters how genes are expressed without altering the DNA sequence itself.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup> These changes can persist throughout life and influence subsequent generations.</p>
              </div>

            </div>
          </div>

          {/* Timing Card (Navy) - 3D Accent Borders utilizing Slate */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Timeline of Exposure</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-causes-timing-1.webp"
              alt="Visual timeline showing fetal development stages and associated risks"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Different brain structures and facial features are uniquely vulnerable at different gestational periods. Because brain development never stops during pregnancy, there is no "safe window" for alcohol consumption.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">7, 8</sup>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Clock className="w-4 h-4 text-[#576d8e]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Weeks 3–4</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">The neural tube is actively forming. Alcohol exposure during this window can severely disrupt the earliest, foundational brain architecture.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Clock className="w-4 h-4 text-[#2abcd4]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Weeks 6–10</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">This is the critical window for the physical facial features of FAS; face and brain development are closely, physically linked at this specific time.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Clock className="w-4 h-4 text-[#ffd166]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Weeks 10–25</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">The period of intense neuronal proliferation and migration. Disruption during this phase causes lasting cortical abnormalities and wiring issues.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Clock className="w-4 h-4 text-[#576d8e]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Third Trimester</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">The "brain growth spurt"—the cerebellum, hippocampus, and cortex are rapidly developing. Exposure here can be just as damaging as early pregnancy.</p>
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
                <li>1. Jones, K. L., & Smith, D. W. (1973). "Recognition of the fetal alcohol syndrome in early infancy." <i>The Lancet</i>.</li>
                <li>2. Ikonomidou, C., et al. (2000). "Ethanol-induced apoptotic neurodegeneration and fetal alcohol syndrome." <i>Science</i>.</li>
                <li>3. Clarren, S. K., et al. (1978). "Brain malformations related to prenatal exposure to ethanol." <i>Journal of Pediatrics</i>.</li>
                <li>4. Costa, L. G., et al. (2005). "Modulation of paraoxonase (PON1) activity." <i>Biochemical Pharmacology</i>.</li>
                <li>5. Brocardo, P. S., Gil-Mohapel, J., & Christie, B. R. (2011). "The role of oxidative stress in fetal alcohol spectrum disorders." <i>Brain Research Reviews</i>.</li>
                <li>6. Resendiz, M., et al. (2013). "Epigenetic medicine and fetal alcohol spectrum disorders." <i>Epigenomics</i>.</li>
                <li>7. West, J. R. (1987). <i>Alcohol and brain development</i>. Oxford University Press.</li>
                <li>8. Riley, E. P., Infante, M. A., & Warren, K. R. (2011). "Fetal alcohol spectrum disorders: An overview." <i>Neuropsychology Review</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: DOSE & MATERNAL FACTORS
      ========================================== */}
      {activeTab === 'factors' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Dose Card (Navy) - DOUBLE RINGS */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Amount & Pattern of Drinking</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-causes-dose-1.webp"
              alt="Visual demonstrating the relationship between alcohol volume, frequency, and risk"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <div className="space-y-5 max-w-4xl mx-auto">
              
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#2abcd4] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#2abcd4] mt-1 ml-1">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Dose-Response Relationship</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">There is a clear dose-response relationship—heavier drinking causes more severe outcomes.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> Binge drinking (4+ drinks per occasion) is uniquely harmful because peak blood alcohol concentration matters significantly to the developing brain.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#576d8e] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#576d8e] mt-1 ml-1">
                  <Wine className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Low-Level Drinking</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Research on low levels of alcohol (1–2 drinks per week) is highly mixed and inconclusive.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup> The impossibility of establishing a safe lower limit is why health authorities worldwide recommend complete abstinence.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup></p>
                </div>
              </div>

            </div>
          </div>

          {/* Maternal Factors Card (Yellow) - 3D Borders utilizing Slate */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Maternal Factors</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-causes-maternal-1.webp"
              alt="Medical visual showing maternal health factors influencing fetal outcomes"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Not all pregnancies with alcohol exposure result in FASD. A mother's unique biological and health factors deeply modulate the level of risk to the fetus.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#576d8e] border-opacity-30 pb-2">Alcohol Metabolism</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Genetic variation in alcohol-metabolizing enzymes affects how quickly a mother clears alcohol. Slower metabolism means higher, prolonged fetal exposure for the exact same amount consumed.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0c264d]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#0c264d] border-opacity-30 pb-2">Nutritional Status</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Nutritional deficiencies—particularly folate, zinc, and vitamins A/E—amplify alcohol's teratogenic effects. Poor nutrition severely compounds the fetal risk.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#2abcd4] border-opacity-30 pb-2">Age and Parity</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Older maternal age and higher parity (number of previous pregnancies) appear to significantly increase the risk of FASD with equivalent alcohol exposure.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#ffd166] border-opacity-60 pb-2">Other Substance Use</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Tobacco, cannabis, and other drug use alongside alcohol aggressively increase the teratogenic risk and complicate the attribution of specific developmental effects.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">7</sup></p>
                </div>
              </div>

            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>1. Jacobson, J. L., & Jacobson, S. W. (2002). "Effects of prenatal alcohol exposure on child development." <i>Alcohol Research and Health</i>.</li>
                <li>2. Henderson, J., Gray, R., & Brocklehurst, P. (2007). "Systematic review of effects of low-moderate prenatal alcohol exposure on pregnancy outcome." <i>BJOG</i>.</li>
                <li>3. National Institute on Alcohol Abuse and Alcoholism. (2020). <i>Alcohol facts and statistics</i>.</li>
                <li>4. McCarver, D. G., et al. (1994). "Alcohol dehydrogenase-2*3 allele protects against alcohol-related birth defects." <i>Journal of Pharmacology and Experimental Therapeutics</i>.</li>
                <li>5. Coles, C. D. (1994). "Critical periods for prenatal alcohol exposure: Evidence from animal and human studies." <i>Alcohol Health and Research World</i>.</li>
                <li>6. May, P. A., et al. (2009). "Prevalence and epidemiologic characteristics of FASD from various research methods." <i>Developmental Disabilities Research Reviews</i>.</li>
                <li>7. Sood, B., et al. (2001). "Prenatal alcohol exposure and childhood behavior at age 6 to 7 years." <i>Pediatrics</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: GENETICS & ENVIRONMENT
      ========================================== */}
      {activeTab === 'environment' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Genetics Card (Yellow) - BARE DARK ICONS */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Fetal Genetic Factors</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-causes-genetics-1.webp"
              alt="DNA helix representing the fetus's unique genetic susceptibility"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The fetus's own genetic makeup heavily influences its specific susceptibility to alcohol's effects.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> This explains why siblings with similar prenatal exposure can have completely different FASD presentations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <Users className="text-[#0c264d] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Twin Studies</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Studies show that when one twin is affected, the co-twin may be entirely unaffected or differently affected—even with the exact same identical exposure.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <Dna className="text-[#0c264d] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Genetic Variants</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Specific variants affecting the fetus's own alcohol metabolism, neural repair mechanisms, and developmental pathways actively modulate the ultimate risk.</p>
              </div>

            </div>
          </div>

          {/* Social Context Card (Cyan) - CSS DOTS using Slate & Navy */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Social & Environmental Context</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-causes-environment-1.webp"
              alt="Visual demonstrating the systemic societal factors surrounding alcohol use"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Prenatal alcohol exposure does not occur in a vacuum—it is deeply embedded in a complex social context. Prevention efforts must address the broader social determinants of health.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2, 3</sup>
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-5">
                
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <div>
                    <strong className="text-sm text-[#0c264d] block mb-1">Alcohol Use Disorder</strong>
                    <p className="text-xs text-slate-700 leading-relaxed">The majority of pregnancies affected by heavy PAE involve maternal alcohol use disorder, which requires medical treatment, not stigma.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#576d8e] mt-1.5 shrink-0"></div>
                  <div>
                    <strong className="text-sm text-[#0c264d] block mb-1">Trauma & ACEs</strong>
                    <p className="text-xs text-slate-700 leading-relaxed">Adverse childhood experiences deeply predict later heavy drinking; mothers who drink during pregnancy frequently have significant trauma histories.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#576d8e] mt-1.5 shrink-0"></div>
                  <div>
                    <strong className="text-sm text-[#0c264d] block mb-1">Poverty & Instability</strong>
                    <p className="text-xs text-slate-700 leading-relaxed">Economic stress, housing instability, and lack of accessible healthcare are highly correlated with heavy drinking.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup></p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <div>
                    <strong className="text-sm text-[#0c264d] block mb-1">Cultural Norms</strong>
                    <p className="text-xs text-slate-700 leading-relaxed">In some cultural contexts, moderate drinking during pregnancy is heavily normalized, contributing to accidental exposure.</p>
                  </div>
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
                <li>1. Gemma, S., Vichi, S., & Testai, E. (2007). "Metabolic and genetic factors contributing to alcohol induced effects and fetal alcohol syndrome." <i>Neuroscience and Biobehavioral Reviews</i>.</li>
                <li>2. Popova, S., et al. (2017). "Estimation of national, regional, and global prevalence of alcohol use during pregnancy." <i>BMC Medicine</i>.</li>
                <li>3. May, P. A., & Gossage, J. P. (2011). "Maternal risk factors for fetal alcohol spectrum disorders." <i>Alcohol Research and Health</i>.</li>
                <li>4. Salmon, A. (2011). "Aboriginal mothering, FASD prevention and the contested terrain of risk." <i>Canadian Journal of Public Health</i>.</li>
              </ul>
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