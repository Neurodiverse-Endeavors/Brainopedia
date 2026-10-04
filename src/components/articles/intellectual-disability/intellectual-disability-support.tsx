import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { FileSignature, Clock, Laptop, Users, MessageCircle, Hand, Activity, Brain, Briefcase, Target, Scale, Compass } from 'lucide-react';

interface IDSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function IDSupport({ setCurrentArticle, initialTab }: IDSupportProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'education';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Intellectual Disability: Support & Management
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
          onClick={() => handleTabChange('therapies')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'therapies'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Therapeutic Interventions
        </button>
        <button
          onClick={() => handleTabChange('vocational')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'vocational'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Vocational & Planning
        </button>
      </div>

      {/* ==========================================
          TAB 1: EDUCATIONAL SUPPORT (Cyan Card + Lucide Icons)
      ========================================== */}
      {activeTab === 'education' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            
            <ImageWithFallback 
              src="/images/id/id-support-tab1-education.webp"
              alt="Inclusive classroom and educational support"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Educational Support</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Educational support enhances functioning, promotes independence, and drastically improves quality of life. It is most effective when it is highly individualized, person-centered, and rigorously consistent across environments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <FileSignature className="w-8 h-8 text-[#0A9DC4] mb-3" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Individualized Education Program (IEP)</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A legally binding, tailored plan that outlines specific goals, testing accommodations, and related services for students within the school system.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Clock className="w-8 h-8 text-[#0A9DC4] mb-3" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Functional Life Skills</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Integrating practical abilities into the curriculum, such as money management, telling time, self-care routines, and community safety.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Laptop className="w-8 h-8 text-[#0A9DC4] mb-3" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Assistive Technology</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The active use of devices, tablets, and specialized software to support communication, academic learning, and daily organization.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Users className="w-8 h-8 text-[#0A9DC4] mb-3" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Inclusive Education</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Providing opportunities for students to learn alongside their neurotypical peers in mainstream classrooms to foster social modeling and belonging.</p>
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
                <li>Kleinert, H. L., et al. (2015). Where students with the most significant cognitive disabilities are taught. <i>Exceptional Children</i>.</li>
                <li>Browder, D. M., et al. (2008). Teaching mathematics to students with significant cognitive disabilities. <i>Exceptional Children</i>.</li>
                <li>Shogren, K. A., et al. (2014). The definition of 'context' in intellectual disability. <i>Journal of Policy and Practice in Intellectual Disabilities</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: THERAPEUTIC INTERVENTIONS (Yellow Card + Icon Badges)
      ========================================== */}
      {activeTab === 'therapies' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            
            <ImageWithFallback 
              src="/images/id/id-support-tab2-therapies.webp"
              alt="Therapist working with an individual on developmental skills"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Therapeutic Interventions</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              A multi-disciplinary therapeutic approach addresses specific developmental needs across the lifespan. These interventions build the crucial motor, communication, and behavioral skills necessary for daily living.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Speech-Language Therapy</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Supports expressive and receptive language development, articulation, augmentative communication tools, and successful social interaction.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <Hand className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Occupational Therapy</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Helps develop the fine motor coordination, sensory processing skills, and self-care routines needed for independence in daily tasks.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Physical Therapy</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Focuses on gross motor skills, core balance, and physical mobility to ensure safe and confident navigation of the physical environment.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Behavioral Support</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Utilizes positive behavior support (PBS) to help manage emotional regulation, process frustration, and teach effective replacement skills.</p>
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
                <li>American Association on Intellectual and Developmental Disabilities (AAIDD). (2020). Communication Support.</li>
                <li>American Occupational Therapy Association. (2014). OT with people with intellectual disabilities.</li>
                <li>Carr, E. G., et al. (2002). Positive behavior support. <i>Journal of Positive Behavior Interventions</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: VOCATIONAL & PLANNING (Slate Card + 3D Borders)
      ========================================== */}
      {activeTab === 'vocational' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-slate-100 border-2 border-slate-600 rounded-xl p-6 shadow-sm clear-both">
            
            <ImageWithFallback 
              src="/images/id/id-support-tab3-vocational.webp"
              alt="Person-centered planning and vocational support"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-400"
            />

            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Vocational & Person-Centered Planning</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Transitioning to adulthood involves finding meaningful work, active community involvement, and exercising self-determination. The core of modern support is person-centered planning, where the individual's own preferences and dreams drive their roadmap.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#0c264d]" /> Supported Employment
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Providing dedicated job coaching and ongoing workplace support to help individuals find, learn, and keep competitive, integrated jobs.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#0A9DC4]" /> Vocational Rehabilitation
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">State or local services that provide specialized training, interview preparation, and skill-building resources for future employment.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#d4a017]" /> Community Participation
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Actively engaging in volunteer work, local recreation, and social clubs to build a strong sense of belonging and community presence.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2abcd4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#2abcd4]" /> Supported Decision-Making
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Respecting the individual's civil right to make their own life choices by focusing on their capabilities rather than enforcing restrictive guardianships.</p>
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
                <li>Thompson, J. R., et al. (2009). Conceptualizing supports. <i>Intellectual and Developmental Disabilities</i>.</li>
                <li>Claes, C., et al. (2010). Person-centered planning: Analysis of research. <i>Intellectual and Developmental Disabilities</i>.</li>
                <li>Wehman, P., et al. (2014). Competitive employment for youth with autism and ID. <i>Journal of Autism and Developmental Disorders</i>.</li>
                <li>Stancliffe, R. J., et al. (2011). Adults with intellectual disabilities who use services. <i>American Journal on Intellectual and Developmental Disabilities</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}