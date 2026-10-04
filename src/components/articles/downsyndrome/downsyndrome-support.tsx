import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Activity, Target, MessageSquare, Brain, Users, LayoutTemplate, GraduationCap, Compass, Stethoscope, Network, UserCheck, HeartPulse } from 'lucide-react';

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
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Down Syndrome: Support & Management
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('downsyndrome')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap hidden md:flex"
        >
          <span className="text-xl">←</span>
          All About Down Syndrome
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('downsyndrome')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About Down Syndrome
      </button>

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
          TAB 1: THERAPIES & INTERVENTION
      ========================================== */}
      {activeTab === 'therapies' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Therapeutic Services</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-support-tab1-therapies.webp"
              alt="Therapist working with a young child on motor skills"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Comprehensive, early, and ongoing support enables individuals with Down syndrome to reach their full potential. Early intervention services (from birth to age 3) establish a critical foundation for motor, communication, and cognitive development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#0A9DC4]" /> Physical Therapy (PT)
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Focuses extensively on gross motor development, building core strength, and helping the child safely navigate their physical environment despite low muscle tone.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#0A9DC4]" /> Occupational Therapy (OT)
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Supports the development of fine motor skills, self-care routines, and adaptive techniques to foster independence in daily living activities.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#0A9DC4]" /> Speech-Language Therapy
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Crucial for developing expressive communication skills (including sign language) and addressing early physiological challenges related to feeding or swallowing.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-[#0A9DC4]" /> Behavioral Support
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Utilizes positive reinforcement strategies to help process complex emotions, adapt to new routines, and navigate frustration caused by communication barriers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('downsyndrome')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About Down Syndrome
            </button>
          </div>

          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>National Down Syndrome Society (NDSS). (n.d.). Early Intervention.</li>
                <li>National Institutes of Health (NIH). (n.d.). What are the treatments for Down syndrome?</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: EDUCATIONAL SUPPORT
      ========================================== */}
      {activeTab === 'education' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Educational Support</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-support-tab2-education.webp"
              alt="Student with Down syndrome learning in an inclusive classroom environment"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Educational support should prioritize inclusive learning environments alongside neurotypical peers whenever possible. Utilizing an Individualized Education Program (IEP) ensures that teaching methods, particularly visual learning strategies, are adapted to the student's unique cognitive profile.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#d4a017]" /> Inclusive Education
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Learning alongside neurotypical peers in mainstream classrooms provides crucial social modeling and has been shown to promote higher academic achievement.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <LayoutTemplate className="w-4 h-4 text-[#0c264d]" /> Visual Learning Strategies
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Leveraging the Down syndrome cognitive profile, teaching relies heavily on visual aids, hands-on learning, graphic organizers, and direct modeling.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#0A9DC4]" /> IEP Utilization
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Individualized Education Programs legally protect access to necessary accommodations, assistive technology, and specialized service providers within the school.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#d4a017]" /> Transition Planning
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Post-secondary planning is integrated into later schooling, focusing heavily on vocational training, independent living skills, and community integration.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('downsyndrome')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About Down Syndrome
            </button>
          </div>

          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Fidler, D. J., & Nadel, L. (2007). Education and children with Down syndrome: Neuroscience, development, and intervention. <i>Mental Retardation and Developmental Disabilities Research Reviews</i>.</li>
                <li>Global Down Syndrome Foundation. (n.d.). Education and Down Syndrome.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: HEALTHCARE MANAGEMENT
      ========================================== */}
      {activeTab === 'healthcare' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-slate-100 border-2 border-slate-600 rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Healthcare Management</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-support-tab3-healthcare.webp"
              alt="Medical team coordinating care with an individual with Down syndrome"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-400"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Medical care must follow Down syndrome-specific healthcare guidelines, requiring proactive coordination across multiple medical specialties throughout the lifespan. Furthermore, providers must prioritize accessible communication to ensure the individual's dignity, autonomy, and active participation in their own care.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-[#0c264d]" /> Specialized Guidelines
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Clinicians must follow established clinical guidelines specific to Down syndrome, which dictate different growth charts, screening schedules, and risk assessments.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Network className="w-4 h-4 text-[#0A9DC4]" /> Care Coordination
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Managing the condition requires seamless, proactive communication between primary pediatricians, cardiologists, endocrinologists, and developmental therapists.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#d4a017]" /> Autonomy & Dignity
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Medical professionals must communicate directly with the individual rather than just the caregiver, utilizing accessible language to foster self-advocacy and bodily autonomy.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2abcd4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-[#2abcd4]" /> Lifespan Transitions
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Successfully transitioning from pediatric to adult healthcare providers is a critical step in long-term medical management and ensuring continuity of care.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('downsyndrome')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About Down Syndrome
            </button>
          </div>

          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>American Academy of Pediatrics (AAP). (2022). Health Supervision for Children and Adolescents With Down Syndrome.</li>
                <li>National Institutes of Health (NIH). Eunice Kennedy Shriver National Institute of Child Health and Human Development. Information on Down Syndrome.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}