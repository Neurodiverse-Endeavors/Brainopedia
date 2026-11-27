import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import {
  Activity,
  Target,
  MessageSquare,
  Brain,
  Stethoscope,
  Network,
  UserCheck,
  HeartPulse
} from 'lucide-react';

interface DownSyndromeSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DownSyndromeSupport({ setCurrentArticle, initialTab }: DownSyndromeSupportProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'therapies';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Down Syndrome: Support & Management
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
          onClick={() => handleTabChange('therapies')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'therapies'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Therapies & Intervention
        </button>
        <button
          onClick={() => handleTabChange('education')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'education'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Educational Support
        </button>
        <button
          onClick={() => handleTabChange('healthcare')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'healthcare'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Healthcare Management
        </button>
      </div>

      {/* ==========================================
          TAB 1: THERAPIES & INTERVENTION (CYAN)
      ========================================== */}
      {activeTab === 'therapies' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Therapies Card (Tab 1 Default: Cyan with Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Therapeutic Services</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-support-tab1-therapies.webp"
              alt="Therapist working with a young child on motor skills"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Comprehensive, early, and ongoing support enables individuals with Down syndrome to reach their full potential. Early intervention services (from birth to age 3) establish a critical foundation for motor, communication, and cognitive development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Activity className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Physical Therapy (PT)</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Focuses extensively on gross motor development, building core strength, and helping the child safely navigate their physical environment despite low muscle tone.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Target className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Occupational Therapy (OT)</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Supports the development of fine motor skills, self-care routines, and adaptive techniques to foster independence in daily living activities.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <MessageSquare className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Speech-Language Therapy</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Crucial for developing expressive communication skills (including sign language) and addressing early physiological challenges related to feeding or swallowing.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Brain className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Behavioral Support</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Utilizes positive reinforcement strategies to help process complex emotions, adapt to new routines, and navigate frustration caused by communication barriers.
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

          {/* ===== TAB 1 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>National Down Syndrome Society (NDSS). (n.d.). <i>Early Intervention</i>.</li>
                <li>National Institutes of Health (NIH). (n.d.). <i>What are the treatments for Down syndrome?</i></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: EDUCATIONAL SUPPORT (NAVY)
      ========================================== */}
      {activeTab === 'education' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Education Card (Tab 2 Default: Navy with 3D Left-Stripe Inner Cards, No Icons/Bullets) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Educational Support</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-support-tab2-education.webp"
              alt="Student with Down syndrome learning in an inclusive classroom environment"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Educational support should prioritize inclusive learning environments alongside neurotypical peers whenever possible. Utilizing an Individualized Education Program (IEP) ensures that teaching methods, particularly visual learning strategies, are adapted to the student's unique cognitive profile.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Inclusive Education
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Learning alongside neurotypical peers in mainstream classrooms provides crucial social modeling and has been shown to promote higher academic achievement.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Visual Learning Strategies
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Leveraging the Down syndrome cognitive profile, teaching relies heavily on visual aids, hands-on learning, graphic organizers, and direct modeling.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    IEP Utilization
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Individualized Education Programs legally protect access to necessary accommodations, assistive technology, and specialized service providers within the school.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Transition Planning
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Post-secondary planning is integrated into later schooling, focusing heavily on vocational training, independent living skills, and community integration.
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
                <li>Fidler, D. J., & Nadel, L. (2007). Education and children with Down syndrome: Neuroscience, development, and intervention. <i>Mental Retardation and Developmental Disabilities Research Reviews</i>.</li>
                <li>Global Down Syndrome Foundation. (n.d.). <i>Education and Down Syndrome</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: HEALTHCARE MANAGEMENT (YELLOW)
      ========================================== */}
      {activeTab === 'healthcare' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Healthcare Card (Tab 3 Default: Yellow with Double-Ring Navy Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Healthcare Management</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-support-tab3-healthcare.webp"
              alt="Medical team coordinating care with an individual with Down syndrome"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Medical care must follow Down syndrome-specific healthcare guidelines, requiring proactive coordination across multiple medical specialties throughout the lifespan. Furthermore, providers must prioritize accessible communication to ensure the individual's dignity, autonomy, and active participation in their own care.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Specialized Guidelines</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Clinicians must follow established clinical guidelines specific to Down syndrome, which dictate different growth charts, screening schedules, and risk assessments.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Care Coordination</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Managing the condition requires seamless, proactive communication between primary pediatricians, cardiologists, endocrinologists, and developmental therapists.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Autonomy & Dignity</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Medical professionals must communicate directly with the individual rather than just the caregiver, utilizing accessible language to foster self-advocacy and bodily autonomy.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Lifespan Transitions</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Successfully transitioning from pediatric to adult healthcare providers is a critical step in long-term medical management and ensuring continuity of care.
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
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>American Academy of Pediatrics (AAP). (2022). <i>Health Supervision for Children and Adolescents With Down Syndrome</i>.</li>
                <li>National Institutes of Health (NIH). Eunice Kennedy Shriver National Institute of Child Health and Human Development. <i>Information on Down Syndrome</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}