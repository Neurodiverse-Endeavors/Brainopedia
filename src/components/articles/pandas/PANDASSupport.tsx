import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Pill, ShieldPlus, Users, Activity, Syringe, Shield, Brain, Heart, GraduationCap, Home, FlaskConical } from 'lucide-react';

interface PANDASSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function PANDASSupport({ setCurrentArticle, initialTab }: PANDASSupportProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'infection';

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
          Support & Management of PANDAS
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
          onClick={() => handleTabChange('infection')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'infection'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Medical & Infection
        </button>
        <button
          onClick={() => handleTabChange('immune')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'immune'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Immunomodulation
        </button>
        <button
          onClick={() => handleTabChange('psych')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'psych'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Psych & Environment
        </button>
      </div>

      {/* ==========================================
          TAB 1: MEDICAL & INFECTION
      ========================================== */}
      {activeTab === 'infection' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Infection Card (Cyan) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Treating the Infection</h2>
            
            <ImageWithFallback 
              src="/images/pandas/pandas-support-infection-1.webp"
              alt="Medical professional organizing antibiotic treatment plans"
              className="block mx-auto w-64 max-w-full h-auto rounded-lg border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              The treatment of PANDAS is highly unique because it must explicitly address both the rogue immune system and the resulting neuropsychiatric symptoms. A multi-pronged approach is necessary to help the child return to their baseline. The absolute first priority is removing the strep bacteria that triggered the response.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Pill className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Active Antibiotics</h3>
                <p className="text-xs text-slate-700 leading-relaxed">A full, aggressive course of targeted antibiotics (like penicillin or amoxicillin) is strictly utilized to clear any active bacterial infection hidden in the body.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <ShieldPlus className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Prophylaxis</h3>
                <p className="text-xs text-slate-700 leading-relaxed">In heavily recurring cases, doctors frequently prescribe low-dose antibiotics long-term to proactively prevent future strep infections from ever triggering a new flare.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0A9DC4] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Family Screening</h3>
                <p className="text-xs text-slate-700 leading-relaxed">It is clinically recommended to test all family members for strep—even if they have zero symptoms—as "asymptomatic carriers" can silently re-infect the child.</p>
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
                <li>Sigra, S., et al. (2018). "Treatment of PANDAS and PANS: A systematic review." <i>Neuroscience & Biobehavioral Reviews</i>.</li>
                <li>Cooperstock, M. S., et al. (2017). "Clinical management of PANS: Part III—treatment of infections." <i>JCAP</i>.</li>
                <li>Murphy, T. K., et al. (2015). "A randomized placebo-controlled pilot study of azithromycin." <i>JCAP</i>.</li>
                <li>Snider, L. A., et al. (2005). "Antibiotic prophylaxis with azithromycin." <i>Biological Psychiatry</i>.</li>
                <li>Swedo, S. E., et al. (2017). "PANS/PANDAS: Clinical presentation."</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: IMMUNOMODULATION
      ========================================== */}
      {activeTab === 'immune' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Immune Card (Navy) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Managing the Immune System</h2>
            
            <ImageWithFallback 
              src="/images/pandas/pandas-support-immune-1.webp"
              alt="Medical visualization of immunomodulatory therapies and IVIG"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Once the infection is cleared, clinicians must intervene to forcefully reduce brain inflammation and physically stop the autoimmune attack on the basal ganglia.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Activity className="w-4 h-4 text-[#ffd166]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">NSAIDs</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Basic anti-inflammatories like ibuprofen can be surprisingly effective at temporarily reducing the severity of neuropsychiatric symptoms during a mild flare.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Shield className="w-4 h-4 text-[#576d8e]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Corticosteroids</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">A short, powerful burst of oral steroids (like prednisone) can dramatically reduce symptoms by temporarily suppressing the overactive immune system.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Syringe className="w-4 h-4 text-[#2abcd4]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">IVIG</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Intravenous Immunoglobulin is utilized for severe, treatment-resistant cases. It floods the body with healthy antibodies from donors to fundamentally "reset" the child's broken immune system.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0c264d]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <FlaskConical className="w-4 h-4 text-[#0c264d]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Plasmapheresis</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">A major medical procedure involving literally filtering the child's blood to physically remove the harmful anti-neuronal antibodies. This is strictly reserved for the most life-threatening, extreme cases.</p>
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
                <li>Frankovich, J., et al. (2017). "Clinical management of PANS: Part II—immunomodulatory therapies." <i>JCAP</i>.</li>
                <li>Brown, K., et al. (2017). "Effect of NSAIDs on flare duration in PANS." <i>JCAP</i>.</li>
                <li>Williams, K. A., et al. (2016). "Randomized trial of IVIG for PANDAS." <i>JAACAP</i>.</li>
                <li>Perlmutter, S. J., et al. (1999). "Therapeutic plasma exchange for OCD and tics." <i>The Lancet</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: PSYCH & ENVIRONMENT
      ========================================== */}
      {activeTab === 'psych' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Psych Card (Yellow) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Psychiatric & Behavioral Support</h2>
            
            <ImageWithFallback 
              src="/images/pandas/pandas-support-psych-1.webp"
              alt="Child receiving compassionate psychological and educational support"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              While the medical treatments work to heal the immune system, the child desperately needs immediate, robust support for their severe psychiatric symptoms.
            </p>

            <div className="space-y-4 max-w-4xl mx-auto mb-8">
              
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#576d8e] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#576d8e] mt-1 ml-1">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">CBT / ERP Therapy</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Cognitive Behavioral Therapy with Exposure and Response Prevention (ERP) remains highly effective for managing the severe, debilitating OCD elements of PANDAS.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup></p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#0c264d] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#2abcd4] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mt-1 ml-1">
                  <Heart className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Psychiatric Medications</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Low-dose SSRIs may be cautiously utilized. However, children with PANDAS are notoriously over-sensitive to psychiatric drugs, requiring "start low, go slow" micro-dosing.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#2abcd4] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#2abcd4] mt-1 ml-1">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">School Accommodations</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Formal 504 Plans or IEPs are critical to support temporary dysgraphia (handwriting loss), separation anxiety, and academic decline during flares.</p>
                </div>
              </div>

            </div>

            <div className="bg-white border-l-4 border-[#0c264d] p-5 rounded-r-xl max-w-4xl mx-auto shadow-sm">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Home className="w-4 h-4 text-[#0c264d]" /> 
                The Home Environment
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Maintaining a low-stress, highly predictable home environment is absolutely vital during a flare. Parents are heavily encouraged to use "external brain" supports—like visual schedules and extremely clear routines—to guide children whose internal cognitive resources are being massively drained by brain inflammation.
              </p>
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
                <p>1. Storch, E. A., et al. (2006). "CBT for PANDAS-related OCD." <i>JAACAP</i>.</p>
              </div>
            </div>
            
            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>Thienemann, M., et al. (2017). "Clinical management of PANS: Part I—psychiatric interventions."</li>
                <li>Calaprice, D., et al. (2018). "Treatment in a large survey population."</li>
                <li>PANDAS Network. (2021). "Supporting Your Child at Home."</li>
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