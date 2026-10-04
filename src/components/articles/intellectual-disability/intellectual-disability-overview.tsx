import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { BookOpen, Users, Brain, Activity, Globe, Scale, ShieldCheck, Lightbulb, Clock } from 'lucide-react';

interface IDOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function IDOverview({ setCurrentArticle, initialTab }: IDOverviewProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'what';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Intellectual Disability: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('intellectual-disability')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap hidden md:flex"
        >
          <span className="text-xl">←</span>
          All About ID
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('intellectual-disability')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About ID
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('what')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'what'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          What is ID?
        </button>
        <button
          onClick={() => handleTabChange('characteristics')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'characteristics'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Key Characteristics
        </button>
        <button
          onClick={() => handleTabChange('neurodiversity')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'neurodiversity'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Prevalence & Neurodiversity
        </button>
      </div>

      {/* ==========================================
          TAB 1: WHAT IS ID? (Cyan + Lucide Icons)
      ========================================== */}
      {activeTab === 'what' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Understanding the Condition</h2>
            
            <ImageWithFallback 
              src="/images/id/id-overview-intro.webp" 
              alt="Group of individuals engaging in a collaborative learning environment"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Intellectual Disability (ID) is a neurodevelopmental condition representing a diverse spectrum of cognitive functioning. It is a distinct neurotype with unique support needs, inherent strengths, and a shift toward holistic life contexts rather than purely cognitive deficits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Clinical Definition</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Characterized by significant limitations in both intellectual functioning (reasoning, learning) and adaptive behavior (everyday practical skills) that originate before the age of 18.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Users className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">The Social Model</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Modern frameworks emphasize that challenges result not solely from individual limitations, but from the interaction between the person and inflexible environmental barriers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('intellectual-disability')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About ID
            </button>
          </div>

          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.).</li>
                <li>Schalock, R. L., et al. (2010). <i>Intellectual disability: Definition, classification, and systems of supports</i>. AAIDD.</li>
                <li>Shakespeare, T. (2006). The social model of disability. In <i>The Disability Studies Reader</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: KEY CHARACTERISTICS (Yellow + Icon Badges)
      ========================================== */}
      {activeTab === 'characteristics' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Diagnostic Pillars</h2>
            
            <ImageWithFallback 
              src="/images/id/id-overview-characteristics.webp" 
              alt="Visual map showing intelligence, life skills, and environment"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              An intellectual disability diagnosis requires a comprehensive evaluation of how an individual processes information and navigates practical demands. Clinicians look at three foundational pillars to determine if criteria are met, shifting away from a reliance on IQ scores alone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mt-0.5">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Intellectual Functioning</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Refers to general mental capacity, such as abstract reasoning, learning from experience, and logical problem-solving.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mt-0.5">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Adaptive Behavior</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The collection of conceptual, social, and practical skills that are learned and independently performed in everyday life.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Developmental Onset</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The limitations in both cognitive and adaptive functioning must visibly appear during the early developmental period (before age 18).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('intellectual-disability')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About ID
            </button>
          </div>

          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Shogren, K. A., et al. (2014). The definition of 'context' in intellectual disability. <i>Journal of Policy and Practice in Intellectual Disabilities</i>.</li>
                <li>Tassé, M. J., et al. (2012). The construct of adaptive behavior. <i>American Journal on Intellectual and Developmental Disabilities</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: PREVALENCE & NEURODIVERSITY (Slate + 3D Cards)
      ========================================== */}
      {activeTab === 'neurodiversity' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-slate-100 border-2 border-slate-600 rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Global Impact & New Paradigms</h2>
            
            <ImageWithFallback 
              src="/images/id/id-overview-neurodiversity.webp" 
              alt="Diverse community emphasizing support and neurodiversity"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-400"
            />

            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Intellectual disability is one of the most common developmental conditions worldwide. Reframing ID through the lens of neurodiversity is essential for fostering true societal inclusion and human rights.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#0c264d]" /> Global Rates
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">While rates vary by country, it is estimated that 1% to 3% of the global population has an intellectual disability.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#0A9DC4]" /> Systemic Factors
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">In low- and middle-income countries, prevalence is often higher due to systemic factors like malnutrition, environmental toxins, and reduced healthcare access.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#d4a017]" /> Natural Variation
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The neurodiversity movement views intellectual disability as a natural, expected part of human cognitive diversity rather than an inherently broken state.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2abcd4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#2abcd4]" /> Rights & Supports
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">This perspective directly challenges the "tragedy" narrative. It emphasizes that with appropriate, tailored supports, individuals with ID lead fulfilling, self-determined lives.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('intellectual-disability')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About ID
            </button>
          </div>

          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Maulik, P. K., et al. (2011). Prevalence of intellectual disability: A meta-analysis. <i>Research in Developmental Disabilities</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Centers for Disease Control and Prevention. (2020). Facts about Intellectual Disability.</li>
                <li>World Health Organization. (2021). Disability and health fact sheet.</li>
                <li>Walker, N. (2021). <i>Neuroqueer Heresies: Notes on the Neurodiversity Paradigm</i>. Autonomous Press.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}