import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { AlertTriangle, Zap, Heart, Briefcase, ShieldCheck, Eye, Baby, Users, Compass, MessageSquare, CheckCircle } from 'lucide-react';

interface APDLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function APDLiving({ setCurrentArticle, initialTab }: APDLivingProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'life';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      {/* HEADER & BACK BUTTON */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Living with APD
        </h1>

        <button
          type="button"
          onClick={() => setCurrentArticle?.('apd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
        >
          <span className="text-xl">←</span>
          All About APD
        </button>
      </div>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          type="button"
          onClick={() => handleTabChange('life')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'life'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Life &amp; Relationships
        </button>
        <button
          type="button"
          onClick={() => handleTabChange('work')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'work'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Work &amp; Strategies
        </button>
        <button
          type="button"
          onClick={() => handleTabChange('future')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'future'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Lifespan &amp; Community
        </button>
      </div>

      {/* ==========================================
          TAB 1: LIFE & RELATIONSHIPS
      ========================================== */}
      {activeTab === 'life' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Daily Life Card (Cyan) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Daily Life &amp; Emotional Impact
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-living-daily-1.webp"
              alt="Person experiencing listening fatigue, visually separating from a noisy environment"
              className="block mx-auto w-80 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Routine communication tasks that others take for granted can be exhausting with APD. Because this neurological profile is completely invisible, navigating an auditory-first environment requires sustained cognitive energy and emotional resilience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-3">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  The Invisible Challenge
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Others frequently misinterpret APD differences as distraction, rudeness, or inattention. Constantly explaining how your brain processes sound to peers or strangers takes significant ongoing effort.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Listening Fatigue
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  The active cognitive work required to filter background noise and decode spoken language leads to deep exhaustion. End-of-day depletion is genuine neurological fatigue, not a lack of motivation.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-3">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Emotional Toll
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Repeated communication friction and the stress of missing key details can heighten social anxiety and low mood. Choosing restorative downtime helps prevent social withdrawal and protects emotional well-being.
                </p>
              </div>
            </div>
          </div>

          {/* Relationships Card (Navy) - 3D Accent Left Stripes */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Relationships &amp; Social Contexts
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-living-relationships-1.webp"
              alt="Friends engaged in a quiet, intimate, and accessible conversation"
              className="block mx-auto w-80 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Meaningful connection thrives when environments support clear, unhurried communication. Shared understanding among friends, family, and peers turns everyday social spaces into welcoming places to connect.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]" />
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">
                    Friendships &amp; Dating
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Group conversations with overlapping voices are notoriously demanding. Close, one-on-one friendships in calm settings feel far more comfortable, and supportive partners readily adapt their communication habits.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]" />
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">
                    Family Dynamics
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Family members may initially wonder why someone hears clearly in quiet rooms yet misses speech in noisy ones. Open conversations about APD build patience, visual cues, and accessible household routines.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]" />
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">
                    School Socializing
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Echoing cafeterias, playgrounds, and busy hallways create intense auditory overload. Seeking quieter lunch spaces or small-group clubs is a practical, healthy boundary that preserves energy for learning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BACK BUTTON (Before References) */}
          <div className="mt-8 mb-12 flex justify-end w-full">
            <button
              type="button"
              onClick={() => setCurrentArticle?.('apd')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm"
            >
              <span className="text-xl">←</span>
              All About APD
            </button>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Hornsby, B. W., Naylor, G., &amp; Bess, F. H. (2016). A taxonomy of fatigue concepts and their relation to hearing loss. <i>Ear and Hearing</i>.</li>
                <li>Bellis, T. J. (2003). Assessment and management of central auditory processing disorders in the educational setting. <i>Delmar Learning</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: WORK & STRATEGIES
      ========================================== */}
      {activeTab === 'work' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Strategies Card (Navy) - 3D Accent Left Stripes */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Practical Management &amp; Tech
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-living-strategies-1.webp"
              alt="Person utilizing practical management tools like noise-canceling headphones"
              className="block mx-auto w-80 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Intentional daily habits and assistive tools reduce listening strain across work and home routines. Building personalized systems for visual follow-up, acoustic comfort, and energy pacing supports sustainable independence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]" />
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">
                    Technology as an Equalizer
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Live captioning apps, noise-canceling headphones, and meeting transcripts (with permission) bridge auditory bottlenecks. Written messaging and email also reduce reliance on fast-paced phone calls.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]" />
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">
                    Environmental Control
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Shaping your acoustic setting makes communication far smoother. Choosing quieter seating away from kitchens or speakers and scheduling key discussions during lower-noise hours preserves clarity.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]" />
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">
                    Energy &amp; Memory
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Capturing key action items in writing removes pressure from auditory working memory. Scheduling quiet recovery breaks between meetings keeps cognitive energy steady throughout the week.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Career Card (Yellow) - Double Ring Navy Badges */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Career &amp; Strengths
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-living-career-1.webp"
              alt="Adult with APD thriving in a visually-oriented career"
              className="block mx-auto w-80 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Individuals with APD bring sharp visual reasoning, creative problem-solving, and deep focus to the workplace. Choosing roles and accommodations aligned with your natural strengths creates lasting career momentum.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">
                  Finding the Fit
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Fields highlighting visual, analytical, or hands-on strengths—such as design, engineering, research, and technology—are natural matches. Entrepreneurship and flexible roles also offer autonomy over work environments.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">
                  Accommodations
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Under the Americans with Disabilities Act (ADA), employees can request reasonable workplace accommodations.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> Practical options include written project summaries, quiet workspaces, captioning tools, or hybrid schedules.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">
                  Visual Strengths
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Many people with APD excel at spatial awareness, written synthesis, and sustained concentration. Navigating an auditory world also cultivates inventive, adaptable problem-solving skills that benefit entire teams.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM BACK BUTTON (Before References) */}
          <div className="mt-8 mb-12 flex justify-end w-full">
            <button
              type="button"
              onClick={() => setCurrentArticle?.('apd')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm"
            >
              <span className="text-xl">←</span>
              All About APD
            </button>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>

            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies &amp; Statistics
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
                <li>Job Accommodation Network. (2021). Accommodation and compliance: Auditory processing disorder. <i>JAN</i>.</li>
                <li>Mayer, R. E. (2009). Multimedia learning. <i>Cambridge University Press</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: LIFESPAN & COMMUNITY
      ========================================== */}
      {activeTab === 'future' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Lifespan Card (Yellow) - Double Ring Navy Badges */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Life Across the Ages
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-living-lifespan-1.webp"
              alt="Split visual showing a child receiving early support and an adult advocating for needs"
              className="block mx-auto w-80 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Auditory Processing Disorder is a lifelong neurological wiring—not a phase to outgrow. Across every life stage, self-knowledge, supportive environments, and tailored strategies turn auditory awareness into lasting confidence.
            </p>

            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-lg border border-[#ffd166] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mt-1">
                  <Baby className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">
                    Childhood &amp; School
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Early recognition and language-rich visual instruction give young learners a strong foundation. As classroom instruction becomes more verbal, structured accommodations such as preferential seating, written directions, and assistive listening systems protect confidence and curiosity.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-lg border border-[#ffd166] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mt-1">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">
                    Adolescence
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Teenagers balance fast-paced classes, extracurriculars, and nuanced peer conversations. Understanding their own sensory profile empowers teens to speak up for captions, notes, and quiet study spaces with self-assurance.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-lg border border-[#ffd166] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mt-1">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">
                    Adulthood &amp; Beyond
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Many adults experience greater ease after school because they gain autonomy over their careers, living spaces, and communication tools. Even as natural age-related hearing shifts emerge later in life, decades of adaptive habits provide deep resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Advocacy Card (Cyan) - Stacked Lucide Icons */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Advocacy, Community &amp; Hope
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-living-advocacy-1.webp"
              alt="Diverse support group connecting over shared neurodivergent experiences"
              className="block mx-auto w-80 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Connecting with peers who share similar sensory experiences replaces isolation with genuine belonging. Together, self-advocacy and neurodiversity-affirming communities expand accessibility across classrooms, workplaces, and everyday life.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Users className="text-[#0A9DC4] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Finding Your People
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Connecting with others who share your auditory profile brings immediate validation and practical wisdom. Neurodivergent peer groups and advocacy networks offer community where no extra explanation is needed.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <MessageSquare className="text-[#0A9DC4] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Self-Advocacy
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Clearly requesting written follow-ups, captions, or quieter meeting spots is an empowering skill. Sharing your needs also educates educators, employers, and colleagues so future spaces become more inclusive for everyone.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <CheckCircle className="text-[#0A9DC4] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Redefining Success
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Thriving with APD means measuring success by authentic fulfillment, curiosity, and sustainable well-being rather than one-size-fits-all auditory norms.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM BACK BUTTON (Before References) */}
          <div className="mt-8 mb-12 flex justify-end w-full">
            <button
              type="button"
              onClick={() => setCurrentArticle?.('apd')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm"
            >
              <span className="text-xl">←</span>
              All About APD
            </button>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Dawes, P., &amp; Bishop, D. (2009). Auditory processing disorder in relation to developmental disorders. <i>International Journal of Language &amp; Communication Disorders</i>.</li>
                <li>Peelle, J. E., &amp; Wingfield, A. (2016). The neural consequences of age-related hearing loss. <i>Trends in Neurosciences</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}