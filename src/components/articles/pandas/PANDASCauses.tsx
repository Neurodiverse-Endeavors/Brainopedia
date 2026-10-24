import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ShieldAlert, Crosshair, Brain, Activity, LockOpen, Network, Dna, Users, Thermometer } from 'lucide-react';

interface PANDASCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function PANDASCauses({ setCurrentArticle, initialTab }: PANDASCausesProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'mimicry';

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
          Causes & Origins of PANDAS
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
          onClick={() => handleTabChange('mimicry')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'mimicry'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Molecular Mimicry
        </button>
        <button
          onClick={() => handleTabChange('basal')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'basal'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Basal Ganglia
        </button>
        <button
          onClick={() => handleTabChange('factors')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'factors'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Genetics & Environment
        </button>
      </div>

      {/* ==========================================
          TAB 1: MOLECULAR MIMICRY
      ========================================== */}
      {activeTab === 'mimicry' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Molecular Mimicry</h2>
            
            <ImageWithFallback 
              src="/images/pandas/pandas-causes-mimicry-1.webp"
              alt="Conceptual visual of antibodies and molecular mimicry"
              className="block mx-auto w-full max-w-full h-auto rounded-lg border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              PANDAS is fundamentally a post-infectious autoimmune condition. It is <strong>not</strong> caused by the strep bacteria directly infecting the brain, but rather by a catastrophic error in the immune system's response to that infection.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">The Disguise</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The core mechanism is "molecular mimicry."<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> Group A Streptococcus bacteria have proteins on their surface that look almost identical to proteins naturally found in the human brain.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0A9DC4] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">The Error</h3>
                <p className="text-xs text-slate-700 leading-relaxed">When the immune system creates powerful antibodies to fight off the strep infection, those antibodies get completely "confused" by the bacterial disguise.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Crosshair className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">The Attack</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Instead of only attacking the invading bacteria, the confused antibodies cross the blood-brain barrier and begin relentlessly attacking the child's own healthy brain cells.</p>
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
                <p>1. Kirvan, C. A., et al. (2003). "Mimicry and autoantibody-mediated neuronal cell signaling." <i>Nature Medicine</i>.</p>
              </div>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>Dale, R. C., et al. (2005). "Incidence of anti-brain antibodies in children with OCD." <i>BJPsych</i>.</li>
                <li>Williams, K. A., & Swedo, S. E. (2015). "Post-infectious autoimmune disorders." <i>Brain Research</i>.</li>
                <li>Swedo, S. E., et al. (1994). "Speculations on antineuronal antibody-mediated neuropsychiatric disorders." <i>Pediatrics</i>.</li>
                <li>Cunningham, M. W. (2000). "Pathogenesis of Group A Streptococcal Infections." <i>Clinical Microbiology Reviews</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: THE BASAL GANGLIA
      ========================================== */}
      {activeTab === 'basal' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Basal Ganglia</h2>
            
            <ImageWithFallback 
              src="/images/pandas/pandas-causes-basal-1.webp"
              alt="Medical visual showing the location and function of the basal ganglia"
              className="block mx-auto w-full max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              The confused antibodies do not attack the brain randomly. They specifically target the <strong>basal ganglia</strong>, a cluster of structures deep within the brain that act as a central control hub.
            </p>

            <div className="space-y-4 max-w-4xl mx-auto">
              
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#ffd166] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#ffd166] mt-1 ml-1">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">The Gatekeeper</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The basal ganglia acts as a strict "gatekeeper" for the brain. Under normal conditions, it heavily filters and controls physical movements, emotional regulation, and repetitive behaviors or habits.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#576d8e] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#576d8e] mt-1 ml-1">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Inflammation</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">When the misguided antibodies attack this region, the basal ganglia becomes severely swollen and inflamed (neuroinflammation), fundamentally disrupting its ability to act as a filter.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#2abcd4] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#2abcd4] mt-1 ml-1">
                  <LockOpen className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">The Flood</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Because the inflamed gate is stuck "open," unwanted repetitive thoughts (OCD) and uncontrollable physical movements (tics) are allowed to flood wildly through the child's brain.</p>
                </div>
              </div>

            </div>
          </div>

          {/* ===== REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>Giedd, J. N., et al. (1996). "Case study: Acute basal ganglia enlargement." <i>JAACAP</i>.</li>
                <li>Singer, H. S. (2011). "The immunobiology of Tourette's disorder and PANDAS." <i>JCAP</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: GENETICS & ENVIRONMENT
      ========================================== */}
      {activeTab === 'factors' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Genetics & Environmental Triggers</h2>
            
            <ImageWithFallback 
              src="/images/pandas/pandas-causes-factors-1.webp"
              alt="Conceptual visual linking genetics, environment, and immune response"
              className="block mx-auto w-full max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Not every child who gets strep throat develops PANDAS. An estimated 1 in 200 children experience this reaction, pointing to underlying biological vulnerabilities.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0c264d]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Dna className="w-4 h-4 text-[#0c264d]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Genetic Susceptibility</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Researchers heavily believe there is a specific genetic predisposition that makes some children's immune systems far more likely to "misidentify" the brain as an enemy following an infection.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Users className="w-4 h-4 text-[#576d8e]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Family History</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Clinical studies have repeatedly found significantly higher baseline rates of autoimmune conditions (like lupus or rheumatoid arthritis) existing in the immediate families of children with PANDAS.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Thermometer className="w-4 h-4 text-[#2abcd4]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">The "Primed" System</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">While the initial trigger must be Group A Strep, once the immune system has been "primed," other stressors or completely non-strep infections (like a standard cold) can trigger subsequent symptom flares.</p>
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
                <p>1. Swedo, S. E., et al. (2012). "From research subgroup to clinical syndrome."</p>
              </div>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>Murphy, T. K., et al. (2010). "Maternal history of autoimmune disease in PANDAS." <i>Journal of Neuroimmunology</i>.</li>
                <li>Snider, L. A., & Swedo, S. E. (2004). "PANDAS: Current status and directions." <i>Molecular Psychiatry</i>.</li>
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