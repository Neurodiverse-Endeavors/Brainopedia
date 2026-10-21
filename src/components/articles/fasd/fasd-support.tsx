import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Heart, GraduationCap, Building, Activity, ShieldAlert, Target, ClipboardCheck, Compass, Briefcase, Pill, Users } from 'lucide-react';

interface FASDSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function FASDSupport({ setCurrentArticle, initialTab }: FASDSupportProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'principles';

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
          FASD: Support & Intervention
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
          onClick={() => handleTabChange('principles')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'principles'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Core Principles
        </button>
        <button
          onClick={() => handleTabChange('interventions')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'interventions'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Interventions & Meds
        </button>
        <button
          onClick={() => handleTabChange('caregivers')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'caregivers'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Caregivers & Transitions
        </button>
      </div>

      {/* ==========================================
          TAB 1: CORE PRINCIPLES
      ========================================== */}
      {activeTab === 'principles' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Core Principles Card (Cyan) - Uses Slate/Navy Badges */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Core Support Philosophy</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-support-principles-1.webp"
              alt="Visual demonstrating a neurodivergent-affirming framework for brain-based support"
              className="block mx-auto w-64 max-w-full h-auto rounded-lg border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              There is no cure for FASD—the brain differences are permanent.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> However, outcomes are profoundly shaped by intervention quality. Informed, appropriately structured support dramatically reduces secondary conditions.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Brain-Based Understanding</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Behaviors are not willful defiance. They reflect genuine neurological limitations in regulation, memory, and judgment. We must distinguish between "cannot" and "will not." Punishing a neurological inability is both ineffective and deeply harmful.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3, 4</sup></p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Building className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">External Scaffolding</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The FASD brain desperately needs heavy external structure to compensate for internal executive function deficits. Environmental consistency and extreme predictability are required to reduce anxiety and improve daily functioning.</p>
              </div>

            </div>
          </div>

          {/* Education Card (Navy) - DOUBLE RINGS */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Educational Accommodations</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-support-education-1.webp"
              alt="Classroom setting demonstrating structured, visual learning environments"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <div className="space-y-5 max-w-4xl mx-auto">
              
              {/* YELLOW RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#ffd166] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#ffd166] mt-1 ml-1">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Academic Structure</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Students require concrete, visual learning environments.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup> This includes explicit visual schedules, preferential seating, and heavily chunked instructions (one step at a time). Because working memory is impaired, new learning requires massive repetition. Written output should be heavily reduced.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup></p>
                </div>
              </div>

              {/* SLATE RING (Avoiding Cyan clash) */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#576d8e] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#576d8e] mt-1 ml-1">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Behavioral Philosophy</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">School behavioral interventions must be proactive, not reactive.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">7</sup> Focus on skill-building rather than consequences. Sarcasm, idioms, and abstract language must be avoided. Calming spaces and mandatory movement breaks are essential to prevent escalating dysregulation.</p>
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
                <li>1. Riley, E. P., Infante, M. A., & Warren, K. R. (2011). "Fetal alcohol spectrum disorders: An overview." <i>Neuropsychology Review</i>.</li>
                <li>2. Streissguth, A. P., et al. (2004). "Risk factors for adverse life outcomes in fetal alcohol syndrome." <i>Journal of Developmental and Behavioral Pediatrics</i>.</li>
                <li>3. Malbin, D. V. (2002). <i>Trying differently rather than harder: Fetal alcohol spectrum disorders</i>. FASCETS.</li>
                <li>4. Koren, G., Nulman, I., Chudley, A. E., & Loocke, C. (2003). "Fetal alcohol spectrum disorder." <i>CMAJ</i>.</li>
                <li>5. Conry, J. L., & Fast, D. K. (2000). <i>Fetal alcohol syndrome and the criminal justice system</i>. Fetal Alcohol Syndrome Resource Society.</li>
                <li>6. Clarren, S. K., & Lutke, J. (2008). "Building clinical capacity for fetal alcohol spectrum disorder diagnoses in Western and Northern Canada." <i>Canadian Journal of Clinical Pharmacology</i>.</li>
                <li>7. Olson, H. C., Jirikowic, T., Kartin, D., & Astley, S. (2007). "Responding to the challenge of early intervention for fetal alcohol spectrum disorders." <i>Infants and Young Children</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: INTERVENTIONS & MEDS
      ========================================== */}
      {activeTab === 'interventions' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Evidence-Based Interventions Card (Navy) - CLEAN 3D BORDERS using varied stripes */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Evidence-Based Interventions</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-support-interventions-1.webp"
              alt="Visual demonstrating active therapeutic intervention and skill-building"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#576d8e] border-opacity-30 pb-2">GoFAR</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">(Game On! Fostering Awareness and Resilience) A family-based intervention combining parent coaching and child skills training, showing distinct improvements in attention and adaptive behavior.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#ffd166] border-opacity-60 pb-2">Neurocognitive Habilitation</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A manualized parent coaching program teaching caregivers to use explicitly brain-based, strengths-oriented strategies. It is one of the most extensively studied FASD interventions.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0c264d]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#0c264d] border-opacity-30 pb-2">Social Skills Training</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Programs targeting social cognition—like Children's Friendship Training—show positive effects, though generalizing these skills to unscripted, real-world settings requires ongoing practice.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#2abcd4] border-opacity-30 pb-2">MILE</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">(Math Interactive Learning Experience) A math intervention developed specifically for children with FASD using highly concrete, repetitive, multi-sensory approaches.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup></p>
                </div>
              </div>

            </div>
          </div>

          {/* Medication Card (Yellow) - CSS DOTS */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Medication Management</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-support-medication-1.webp"
              alt="Medical professional reviewing pharmacological options for co-occurring conditions"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              No medication treats FASD itself. However, pharmacological interventions are frequently required to address severe co-occurring conditions. Medication decisions require intense care, as polypharmacy is common and highly complicated.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5, 6</sup>
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Stimulants:</strong> May help attention, but FASD response differs sharply from typical ADHD; often requires lower doses and extreme monitoring.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#576d8e] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Sleep Aids:</strong> Melatonin is frequently utilized for sleep initiation difficulties, which are nearly universal across the FASD spectrum.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffd166] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Antidepressants/Anxiolytics:</strong> Heavily utilized for co-occurring depression and high-level anxiety.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Mood Stabilizers:</strong> Deployed specifically for severe emotional dysregulation when environmental scaffolding is insufficient.</p>
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
                <li>1. Kable, J. A., et al. (2012). "Comparing the effectiveness of on-line versus in-person caregiver education and training for FASD." <i>International Journal of Mental Health and Addiction</i>.</li>
                <li>2. Bertrand, J. (2009). "Interventions for children with fetal alcohol spectrum disorders (FASDs): Overview of findings." <i>Research in Developmental Disabilities</i>.</li>
                <li>3. O'Connor, M. J., et al. (2006). "A controlled social skills training for children with fetal alcohol spectrum disorders." <i>Journal of Consulting and Clinical Psychology</i>.</li>
                <li>4. Coles, C. D., et al. (2009). "Math performance and behavior problems in children affected by prenatal alcohol exposure." <i>Alcoholism: Clinical and Experimental Research</i>.</li>
                <li>5. Doig, J., et al. (2008). "Medication effects on symptoms of attention-deficit/hyperactivity disorder in children with fetal alcohol spectrum disorder." <i>Journal of Child and Adolescent Psychopharmacology</i>.</li>
                <li>6. Frankel, F., et al. (2006). "Stimulants, neuroleptics, and children's friendship training for children with fetal alcohol spectrum disorders." <i>Journal of Child and Adolescent Psychopharmacology</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: CAREGIVERS & TRANSITIONS
      ========================================== */}
      {activeTab === 'caregivers' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Caregiver Card (Yellow) - BARE DARK ICONS */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Caregiver Support</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-support-caregiver-1.webp"
              alt="Caregiver participating in a supportive group therapy session"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Caregivers—whether biological, foster, or adoptive—are central to outcomes. Caring for a child with FASD is exceptionally demanding, and caregivers themselves are in desperate need of structured support.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <Target className="text-[#0c264d] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Training Programs</h3>
                <p className="text-xs text-slate-700 leading-relaxed">FASD-specific programs (like Families Moving Forward) dramatically reduce caregiver stress. Caregivers trained in brain-based frameworks have children with far fewer secondary conditions.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup></p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <Heart className="text-[#0c264d] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Respite Care</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The high neurological needs of the child mean caregiver burnout is exceptionally common. Dedicated, accessible respite care is a clinical necessity, not a luxury.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <Users className="text-[#0c264d] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Support Groups</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Because FASD is an invisible disability, parenting can feel highly isolating. Specific caregiver groups reduce this isolation and act as vital networks for sharing practical strategies.</p>
              </div>

            </div>
          </div>

          {/* Adulthood Card (Cyan) - ROUNDED SQUARES using Slate & Navy */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Transitioning to Adulthood</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-support-adulthood-1.webp"
              alt="Young adult receiving guided vocational training and life skills support"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Transition planning for adolescents with FASD must begin exceptionally early—ideally by age 14. With appropriate support and realistic expectations, adults with FASD can lead fulfilling lives.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3, 4</sup>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Vocational & Life Skills</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Supported employment planning is critical. Independent living skills (budgeting, cooking, personal hygiene, transportation) require explicit, repetitive training rather than assumption of capability.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Safety & Legal Navigation</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Benefits navigation (SSI/SSDI, supported housing) is essential. Families should explore Supported Decision-Making frameworks early, and prioritize safety planning around exploitation and healthy relationship education.</p>
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
                <li>1. Olson, H. C., & Montague, R. A. (2011). "An innovative look at early intervention for children affected by prenatal alcohol exposure." In <i>Prenatal alcohol use and fetal alcohol spectrum disorders</i>. Bentham Science.</li>
                <li>2. Families Moving Forward Program. (2012). <i>Supporting families of children with FASD</i>. University of Washington.</li>
                <li>3. Conry, J. L., & Fast, D. K. (2000). <i>Fetal alcohol syndrome and the criminal justice system</i>.</li>
                <li>4. Brown, J., et al. (2014). "Does stepping stones triple P plus a FASD module improve caregiver and child outcomes?" <i>Research in Developmental Disabilities</i>.</li>
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