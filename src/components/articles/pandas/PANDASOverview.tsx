import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Target, Zap, Search, Activity, ShieldAlert, Clock, Users, Globe } from 'lucide-react';

interface PANDASOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function PANDASOverview({ setCurrentArticle, initialTab }: PANDASOverviewProps) {
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
          PANDAS: Overview
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
          onClick={() => handleTabChange('understanding')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'understanding'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Understanding PANDAS
        </button>
        <button
          onClick={() => handleTabChange('distinction')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'distinction'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          PANS vs. PANDAS
        </button>
        <button
          onClick={() => handleTabChange('traits')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'traits'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Key Traits & Scope
        </button>
      </div>

      {/* ==========================================
          TAB 1: UNDERSTANDING PANDAS
      ========================================== */}
      {activeTab === 'understanding' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">What Is PANDAS?</h2>
            
            <ImageWithFallback 
              src="/images/pandas/pandas-overview-understanding-1.webp"
              alt="Medical illustration demonstrating autoimmune brain inflammation"
              className="block mx-auto w-64 max-w-full h-auto rounded-lg border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              PANDAS (Pediatric Autoimmune Neuropsychiatric Disorders Associated with Streptococcal Infections) is a condition where a streptococcal infection effectively triggers an autoimmune response that mistakenly targets the brain.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Neuropsychiatric Symptoms</h3>
                <p className="text-xs text-slate-700 leading-relaxed">This autoimmune attack directly leads to the sudden onset of severe neuropsychiatric symptoms in children, most notably presenting as sudden-onset OCD and tics.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">The Basal Ganglia</h3>
                <p className="text-xs text-slate-700 leading-relaxed">After fighting a strep infection, the immune system mistakenly attacks the basal ganglia—the highly specific brain region fundamentally responsible for movement, habits, and emotional regulation.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0A9DC4] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">The "Overnight" Shift</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The resulting severe neuroinflammation causes a dramatic, terrifying shift in the child's personality and behavior, routinely described by parents as occurring literally "overnight."</p>
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
                <li>Swedo, S. E., et al. (1998). "PANDAS: Clinical description of the first 50 cases." <i>American Journal of Psychiatry</i>.</li>
                <li>Frankovich, J., et al. (2015). "Youth with PANS: Presenting characteristics." <i>JCAP</i>.</li>
                <li>Williams, K. A., & Swedo, S. E. (2015). "Post-infectious autoimmune disorders." <i>Brain Research</i>.</li>
                <li>Murphy, T. K., et al. (2010). "The immunobiology of Tourette's and PANDAS." <i>JCAP</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: PANS VS. PANDAS
      ========================================== */}
      {activeTab === 'distinction' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The PANDAS vs. PANS Distinction</h2>
            
            <ImageWithFallback 
              src="/images/pandas/pandas-overview-distinction-1.webp"
              alt="Medical diagram showing the overlapping relationship between PANS and PANDAS"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <div className="space-y-5 max-w-4xl mx-auto">
              
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#ffd166] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#ffd166] mt-1 ml-1">
                  <Search className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">PANDAS (Streptococcus)</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">PANDAS is a highly specific diagnosis. The autoimmune attack on the basal ganglia must be explicitly, exclusively linked to a Group A Streptococcus infection (like strep throat or scarlet fever).</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#576d8e] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#576d8e] mt-1 ml-1">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">PANS (Broader Category)</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">PANS (Pediatric Acute-onset Neuropsychiatric Syndrome) is the much broader umbrella category. It includes identical neuropsychiatric symptom presentations that were triggered by other infections (like Lyme disease, flu, or mycoplasma) or even environmental factors.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#2abcd4] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#2abcd4] mt-1 ml-1">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">The Subset Relationship</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Simply put: PANDAS is an exact, specific subset of PANS. All children with PANDAS have PANS, but not all children with PANS have PANDAS.</p>
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
                <li>Swedo, S. E., et al. (2012). "From PANDAS to PANS." <i>Pediatrics & Therapeutics</i>.</li>
                <li>Chang, K., et al. (2015). "Clinical evaluation of youth with PANS." <i>JCAP</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: KEY TRAITS & SCOPE
      ========================================== */}
      {activeTab === 'traits' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Key Characteristics & Prevalence</h2>
            
            <ImageWithFallback 
              src="/images/pandas/pandas-overview-traits-1.webp"
              alt="Medical visual indicating the demographic scope and onset of symptoms"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Clock className="w-4 h-4 text-[#576d8e]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Sudden Onset</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Unlike traditional OCD or Tic disorders which develop gradually, PANDAS symptoms appear aggressively "out of the blue" or dramatically worsen in an incredibly short period of time.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0c264d]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Users className="w-4 h-4 text-[#0c264d]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Pediatric Focus</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">It is heavily a pediatric condition, typically affecting children explicitly between the age of 3 and the onset of puberty.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Activity className="w-4 h-4 text-[#2abcd4]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">The Infection Link</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">A clear, documented temporal connection between a recent strep infection (which may have been mild or asymptomatic) and the explosion of neuropsychiatric symptoms.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Globe className="w-4 h-4 text-[#ffd166]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Prevalence</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Considered a rare condition, though frequently misdiagnosed. It is currently estimated to affect 1 in 200 children.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> As awareness spreads among pediatricians, accurate identifications are rising.</p>
                </div>
              </div>

            </div>
          </div>

          {/* ===== REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
                <p>1. PANDAS Network. (2020). "Statistics and Awareness."</p>
              </div>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>Gabbay, V., et al. (2008). "PANDAS: Comparison of diagnosis and treatment." <i>Pediatrics</i>.</li>
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