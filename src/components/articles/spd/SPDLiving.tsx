import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Home, Brain, Clock, Zap, MessageSquare, GraduationCap, Briefcase, Heart, Users, Smartphone, Compass, ShieldCheck, AlertTriangle } from 'lucide-react';

interface SPDLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function SPDLiving({ setCurrentArticle, initialTab }: SPDLivingProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'daily');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px]">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          SPD: Living with Sensory Processing Disorder
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('spd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About SPD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('spd')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About SPD
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <button
          onClick={() => setActiveTab('daily')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'daily'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Daily Life & Coping
        </button>
        <button
          onClick={() => setActiveTab('social')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'social'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Social, School & Work
        </button>
        <button
          onClick={() => setActiveTab('lifespan')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'lifespan'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Mental Health & Lifespan
        </button>
      </div>

      {/* ==========================================
          TAB 1: DAILY LIFE & COPING
      ========================================== */}
      {activeTab === 'daily' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Sensory Profile Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Understanding Your Profile</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-living-profile.webp"
              alt="Person practicing self-awareness in a calm space"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Self-awareness is foundational to thriving with SPD. Rather than fighting the nervous system, individuals must learn to precisely map their unique triggers and preferences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Zap className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Identifying Triggers</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Map exactly which inputs cause pain or exhaustion. Is it all loud noises, or specifically high-pitched electronics? Is it all bright light, or specifically fluorescent strobing? Precision helps avoid unnecessary fatigue.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Brain className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Recognizing Needs</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Determine what actively calms the nervous system down. Some individuals need absolute silence in a dark room; others require intense deep-pressure input (like a weighted blanket or heavy lifting) to regulate.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <AlertTriangle className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Warning Signs</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Learn the physiological signs of an impending meltdown or sensory crash. Common early warning signs include suddenly feeling irritable, developing a headache, or noticing that lights suddenly appear blindingly bright.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Strategies Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Daily Living Strategies</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-living-routines.webp"
              alt="A highly organized, visually calm daily routine setup"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Clock className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Sensory Routines</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Establish consistent, highly predictable daily routines to remove sensory surprises. Always plan buffer time for transitions, and schedule demanding tasks solely during peak regulation hours.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Heart className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Modifying Self-Care</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Adapt hygiene entirely around comfort. Adjust shower water pressure, use unscented products, invest in tagless/seamless compression clothing, and utilize manual toothbrushes if electric ones are too intense.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Home className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Eating Environments</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Sensory sensitivities can severely restrict diets. Respect food texture preferences while focusing on calm, distraction-free eating environments to reduce the overall sensory load during meals.<sup>1</sup></p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Interventions
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Cermak, S. A., Curtin, C., & Bandini, L. G. (2010). Food selectivity and sensory sensitivity in children with autism spectrum disorders. <i>Journal of the Academy of Nutrition and Dietetics</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Dunn, W. (2007). Supporting children to participate successfully in everyday life by using sensory processing knowledge. <i>Infants & Young Children</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SOCIAL, SCHOOL & WORK
      ========================================== */}
      {activeTab === 'social' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Social Life Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Social & Recreational Participation</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-living-social.webp"
              alt="Friends socializing comfortably in a low-sensory environment"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-300"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Socializing should not be physically painful. Setting firm boundaries around the duration and intensity of social events is a vital part of managing SPD.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <Users className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Social Strategies</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Choose venues that match your sensory needs (e.g., quiet cafes or hiking instead of crowded concerts). Always plan recovery time after demanding events, and never feel guilty about leaving an overwhelming environment early.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <MessageSquare className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Explaining SPD to Others</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Educate friends clearly and directly. Frame SPD as a neurological difference in how your nervous system is wired, not a behavioral quirk or a choice. Explain exactly what helps (e.g., "I need to sit away from the speakers to focus on you").</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Career Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Education & Career Environments</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-living-workplace.webp"
              alt="Professional using noise-canceling headphones at an uncluttered desk"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <GraduationCap className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">School Success</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Students thrive when formal accommodations (IEPs/504s) are utilized. These include explicit sensory breaks, alternative seating options, extended time for motor-heavy tasks, and the right to use discreet sensory tools in class.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Compass className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Career Selection</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Select careers based on your sensory profile. Consider the work environment deeply—open-plan offices are notoriously difficult for SPD. Remote work, schedule flexibility, and control over environmental conditions are massive assets.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <ShieldCheck className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Workplace & ADA</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Under the Americans with Disabilities Act (ADA), employees have the right to request reasonable accommodations.<sup>1</sup> This includes noise-canceling headphones, modified lighting, or requesting a private workspace to avoid sensory overwhelm.</p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Legal Protections
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Americans with Disabilities Act of 1990, 42 U.S.C. § 12101 et seq.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Cosbey, J., Johnston, S. S., & Dunn, M. L. (2010). Sensory processing disorders and social participation. <i>American Journal of Occupational Therapy</i>.</li>
                <li>Ashburner, J., Ziviani, J., & Rodger, S. (2008). Sensory processing and classroom emotional, behavioral, and educational outcomes. <i>American Journal of Occupational Therapy</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: MENTAL HEALTH & LIFESPAN
      ========================================== */}
      {activeTab === 'lifespan' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Mental Health Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Mental Health & Advocacy</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-living-wellbeing.webp"
              alt="Person engaging in a regulating, grounding activity like deep breathing"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Living with chronic sensory friction frequently leads to anxiety and isolation. Actively managing psychological well-being is just as important as managing physical environments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Heart className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Managing Stress</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Recognize the direct biological connection between sensory experiences and emotional stress. Employing mindfulness, deep breathing, and dedicated sensory-recovery time prevents chronic burnout.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Brain className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Building Resilience</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Focus intensely on strengths and abilities rather than deficits. Connecting with others who share the neurodivergent experience shatters isolation and helps reframe SPD as a difference rather than a flaw.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <MessageSquare className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Self-Advocacy</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Self-advocacy is a survival skill. Practice communicating your needs respectfully but firmly. Build alliances with supervisors or teachers who support your need to utilize environmental modifications.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lifespan & Tech Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Lifelong Journey & Technology</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-living-lifespan.webp"
              alt="Adult confidently navigating a modern environment using digital accessibility tools"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <Compass className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">A Lifelong Evolution</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">SPD is a lifelong journey. Sensory needs are not static; they evolve with development, aging, and life circumstances. What is challenging at one stage may become highly manageable with maturity and refined strategies.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <Users className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Family Support</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The way a family adapts to sensory needs dictates a child's early success. Recent studies emphasize that families who actively modify their shared occupations to accommodate sensory needs dramatically reduce stress for everyone.<sup>1</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <Smartphone className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Digital Accessibility</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Modern technology offers unprecedented liberation. Text-to-speech, audiobooks, smart-home lighting controls, and GPS navigation apps allow individuals to seamlessly bypass their most draining sensory friction points.</p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Bagby, M. S., Dickie, V. A., & Baranek, G. T. (2012). How sensory experiences of children with and without autism affect family occupations. <i>American Journal of Occupational Therapy</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Reynolds, S., & Lane, S. J. (2009). Sensory overresponsivity and anxiety in children with ADHD. <i>American Journal of Occupational Therapy</i>.</li>
                <li>Test, D. W., et al. (2005). A conceptual framework of self-advocacy for students with disabilities. <i>Remedial and Special Education</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}