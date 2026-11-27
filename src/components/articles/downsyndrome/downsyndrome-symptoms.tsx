import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Eye, Activity, HeartPulse, ShieldAlert } from 'lucide-react';

interface DownSyndromeSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DownSyndromeSymptoms({ setCurrentArticle, initialTab }: DownSyndromeSymptomsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'physical';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Down Syndrome: Symptoms & Characteristics
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('downsyndrome')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
        >
          <span className="text-xl">←</span>
          All About Down Syndrome
        </button>
      </div>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('physical')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'physical'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Physical Traits
        </button>
        <button
          onClick={() => handleTabChange('cognition')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'cognition'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Cognitive Profile
        </button>
        <button
          onClick={() => handleTabChange('health')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'health'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Associated Health
        </button>
      </div>

      {/* ==========================================
          TAB 1: PHYSICAL TRAITS (CYAN)
      ========================================== */}
      {activeTab === 'physical' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Physical Characteristics Card (Tab 1 Default: Cyan with Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Physical Characteristics</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-symptoms-tab1-physical.webp"
              alt="Visual illustrating the common facial and physical features of Down syndrome"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Down syndrome is associated with several distinct physical characteristics, though these can vary significantly from person to person. While individuals share traits with others who have the condition, they will ultimately look most like their own family members.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Eye className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Facial Features</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 text-left">
                  <li>Almond-shaped eyes that may slant slightly upward.</li>
                  <li>A somewhat flattened facial profile, particularly at the bridge of the nose.</li>
                  <li>Small white spots on the colored part of the eye (Brushfield spots).</li>
                  <li>A smaller mouth, which can make the tongue appear larger.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Activity className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Body & Tone</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 text-left">
                  <li>Decreased or poor muscle tone (hypotonia).</li>
                  <li>Shorter stature as children and adults.</li>
                  <li>A single deep crease across the center of the palm.</li>
                  <li>Small hands and feet.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FOOTER BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full">
            <button 
              onClick={() => setCurrentArticle?.('downsyndrome')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
            >
              <span className="text-xl">←</span>
              All About Down Syndrome
            </button>
          </div>

          {/* ===== TAB 1 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Centers for Disease Control and Prevention (CDC). (2023). <i>Facts about Down Syndrome</i>.</li>
                <li>National Down Syndrome Society (NDSS). (n.d.). <i>Down Syndrome Fact Sheet</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: COGNITIVE PROFILE (NAVY)
      ========================================== */}
      {activeTab === 'cognition' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Cognitive Profile Card (Tab 2 Default: Navy with 3D Left-Stripe Inner Cards, No Icons/Bullets) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Cognitive Profile</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-symptoms-tab2-cognition.webp"
              alt="Visual learning and education representing cognitive strengths"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Down syndrome creates a distinct pattern of cognitive processing that heavily favors visual information. By understanding this specific neurodivergent learning style, educators and families can lean into natural strengths rather than focusing on deficits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2 space-y-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Relative Strengths
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong>Visual Learning:</strong> Extremely strong visual-spatial processing and visual memory.
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong>Social Intelligence:</strong> High empathy, social awareness, and observational learning.
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong>Vocabulary:</strong> Receptive language (understanding what is said) is typically much stronger than expressive language.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2 space-y-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Common Challenges
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong>Auditory Memory:</strong> Verbal short-term memory is often a significant vulnerability.
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong>Expressive Speech:</strong> Motor planning required for speaking can delay expressive language.
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong>Information Processing:</strong> May require more time to process complex verbal instructions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full">
            <button 
              onClick={() => setCurrentArticle?.('downsyndrome')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
            >
              <span className="text-xl">←</span>
              All About Down Syndrome
            </button>
          </div>

          {/* ===== TAB 2 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>D'Souza, D., et al. (2020). Profiling the neurocognitive phenotypes of Down syndrome. <i>Child Development</i>.</li>
                <li>Fidler, D. J., & Nadel, L. (2007). Education and children with Down syndrome: Neuroscience, development, and intervention. <i>Mental Retardation and Developmental Disabilities Research Reviews</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: ASSOCIATED HEALTH (YELLOW)
      ========================================== */}
      {activeTab === 'health' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Associated Health Card (Tab 3 Default: Yellow with Double-Ring Navy Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Associated Health Conditions</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-symptoms-tab3-health.webp"
              alt="Medical icons highlighting proactive screening and healthcare"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Individuals with Down syndrome have an increased predisposition to certain medical conditions that require proactive monitoring. While not everyone will experience these complications, comprehensive medical screening significantly improves quality of life.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Cardiac Health</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Congenital heart defects are highly prevalent, affecting approximately 50% of babies born with Down syndrome.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Vision & Hearing</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Frequent vision issues (such as cataracts or near-sightedness) and hearing loss due to fluid buildup or structural differences in the ear.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Thyroid & Endocrine</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  An increased risk of thyroid dysfunction (most commonly hypothyroidism), which requires routine blood screening.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Immune & Sleep</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Increased susceptibility to respiratory infections and a higher likelihood of obstructive sleep apnea due to airway anatomy.
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full">
            <button 
              onClick={() => setCurrentArticle?.('downsyndrome')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
            >
              <span className="text-xl">←</span>
              All About Down Syndrome
            </button>
          </div>

          {/* ===== TAB 3 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Bull, M. J. (2011). Health supervision for children with Down syndrome. <i>Pediatrics</i>.</p>
              </div>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>National Institutes of Health (NIH). (n.d.). <i>What are common conditions associated with Down syndrome?</i></li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}