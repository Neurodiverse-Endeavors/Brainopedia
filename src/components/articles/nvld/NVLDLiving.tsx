import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { MapPin, Activity, Home, Users, Heart, GraduationCap, Briefcase, Scale, MessageSquare, Brain, ShieldAlert, Lightbulb, CheckCircle, Handshake } from 'lucide-react';

interface NVLDLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function NVLDLiving({ setCurrentArticle, initialTab }: NVLDLivingProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'daily');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Living with NVLD
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('nvld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About NVLD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('nvld')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About NVLD
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('daily')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'daily'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Daily Life & Relationships
        </button>
        <button
          onClick={() => setActiveTab('career')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'career'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Education & Career
        </button>
        <button
          onClick={() => setActiveTab('wellbeing')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'wellbeing'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Well-being & Advocacy
        </button>
      </div>

      {/* ==========================================
          TAB 1: DAILY LIFE & RELATIONSHIPS
      ========================================== */}
      {activeTab === 'daily' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Daily Life Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Navigating Daily Challenges</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-living-daily.webp"
              alt="Person using a GPS map and checklists to organize their day"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Living with NVLD means the physical world often feels like a puzzle with missing pieces. Tasks that rely on spatial mapping, motor skills, or implicit understanding require conscious, deliberate effort. However, with the right strategies and tools, independence is highly achievable.<sup className="text-[#10b981] font-bold ml-0.5">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <MapPin className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Navigation & Transport</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Getting lost is a frequent reality. Adults with NVLD often rely heavily on GPS apps, pre-planning routes meticulously, using public transit with written schedules, or utilizing rideshare apps to reduce driving stress.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Activity className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Motor Activities</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Daily clumsiness and difficulty with fine motor tasks (like cooking or crafts) are common. Success comes from choosing non-competitive physical recreation focused entirely on personal enjoyment.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3 md:col-span-2">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Home className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Independent Living Skills</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Managing a household requires externalizing executive functions: strictly following written recipes step-by-step, using budgeting apps for money management, and implementing visual timers to keep daily routines on track.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Relationships Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Relationships & Social Life</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-living-relationships-hero.webp"
              alt="Friends communicating openly and enjoying shared verbal interests"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because NVLD obscures nonverbal cues, socializing can feel like watching a foreign film without subtitles. Thriving socially means shifting away from guessing body language and leaning into direct, explicit communication.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <Users className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Friendships</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li><strong>Quality over quantity:</strong> Cultivating a few close friends who appreciate directness is often more fulfilling than navigating large groups.<sup className="text-[#10b981] font-bold ml-0.5">2</sup></li>
                  <li><strong>Shared interests:</strong> Connecting through highly verbal hobbies like book clubs, tabletop games, or debate teams.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <Heart className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Romantic Partners</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Requires a partner who appreciates deep verbal connection and understands the need for explicit communication rather than subtle hints.</li>
                  <li>Open, honest conversations about sensory limits and spatial challenges are essential for harmony.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <Handshake className="text-[#d4a017] w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm">Family Dynamics</h3>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Educating family members about the reality of the profile helps transition them from frustration to support.</li>
                  <li>Asking explicitly for help when overwhelmed by visual-spatial demands (like assembling furniture).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: EDUCATION & CAREER
      ========================================== */}
      {activeTab === 'career' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Education Journey Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Education Journey</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-living-education.webp"
              alt="Student navigating college campus with accommodations"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The academic journey for a student with NVLD is often a rollercoaster—starting strong in early elementary reading, hitting severe turbulence in middle school math and social dynamics, and finally stabilizing in high school and college once they can select courses that cater to their verbal strengths.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#ffd166] pb-2">Primary & Secondary School</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Middle School:</strong> Social challenges intensify as peer interactions become complex and abstract math (geometry) is introduced.</li>
                  <li><strong>High School:</strong> Support focuses on leveraging high-level verbal abilities in coursework while utilizing IEP/504 accommodations for visual-spatial deficits.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#ffd166] pb-2">Higher Education</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Course Selection:</strong> Students thrive when they minimize visual-spatial requirements and choose majors emphasizing verbal abilities.</li>
                  <li><strong>Disability Services:</strong> Registering early for college accommodations (like digital textbooks or extended testing time) is critical for success.<sup className="text-[#10b981] font-bold ml-0.5">2</sup></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Career Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Career & Employment</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-living-career-hero.webp"
              alt="Successful professional utilizing verbal strengths in a specialized career"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Adults with NVLD are highly intelligent, articulate, and dedicated. Finding professional success is entirely about environmental fit—choosing career paths that demand verbal reasoning and minimizing roles that require spatial organization or rapid physical coordination.<sup className="text-[#10b981] font-bold ml-0.5">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Briefcase className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Suitable Pathways</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li><strong>Writing/Journalism:</strong> Excelling in research, editing, and verbal expression.</li>
                  <li><strong>Law & Academia:</strong> Thriving in environments of verbal reasoning, historical analysis, and legal advocacy.</li>
                  <li><strong>Counseling/Therapy:</strong> Utilizing strong verbal communication to help others.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Scale className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Workplace Support</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Requesting written instructions and standardized procedures rather than visual flowcharts.</li>
                  <li>Utilizing digital task-management apps to offset executive function demands.</li>
                  <li>Seeking verbal clarification after visual presentations.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <MessageSquare className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Disclosure Decisions</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Disclosing NVLD to an employer is entirely optional, but it is required to receive formal accommodations under the ADA.</li>
                  <li>Many choose to frame it positively as a "highly verbal learning style."</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: WELL-BEING & ADVOCACY
      ========================================== */}
      {activeTab === 'wellbeing' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Emotional Well-being Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Emotional Well-being</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-living-wellbeing.webp"
              alt="Calming visual representing resilience and self-compassion"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The chronic stress of navigating a world that assumes visual and spatial intuition takes a heavy toll. Protecting mental health is just as important as securing academic accommodations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Brain className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Mental Health Risks</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Individuals with NVLD face significantly heightened risks for severe social anxiety and secondary depression, particularly as they enter adolescence and adulthood where social isolation can peak.<sup className="text-[#10b981] font-bold ml-0.5">1</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <ShieldAlert className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Coping Strategies</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Cognitive-behavioral therapy (CBT) is highly effective because it relies on language and logic. Building resilience means practicing deep self-compassion and recognizing that spatial struggles are neurological, not personal failings.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Advocacy & Success Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Self-Advocacy & Success</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-living-advocacy-hero.webp"
              alt="Confident individual self-advocating and succeeding"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Many individuals with NVLD lead incredibly successful, fulfilling lives. The key to unlocking that potential is understanding your unique cognitive profile, embracing your strengths, and advocating fiercely for the tools you need.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Lightbulb className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Leverage Your Assets</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Your advanced vocabulary, rote memory, and strong reading comprehension are superpowers. Use them to compensate for spatial weaknesses—when you can't visualize a solution, talk or write your way through it.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <MessageSquare className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Own Your Narrative</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Use your exceptional verbal skills to advocate for yourself. Educate professors, bosses, and partners about what NVLD is, and request accommodations clearly and specifically without apology.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <CheckCircle className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Keys to Success</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Remember that accommodations level the playing field; they are never "cheating." Focus your energy on what you *can* do, give yourself grace on the tasks that exhaust you, and remember that NVLD is just one aspect of your brilliant mind.</p>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('nvld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About NVLD
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p>1. Rourke, B. P. (1989). <i>Nonverbal learning disabilities: The syndrome and the model</i>. Guilford Press.</p>
            <p>2. Tanguay, P. B. (2002). <i>Nonverbal learning disabilities at school: Educating students with NLD, Asperger syndrome, and related conditions</i>. Jessica Kingsley Publishers.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Semrud-Clikeman, M. (2007). <i>Social competence in children</i>. Springer.</li>
            <li>Thompson, S. (1997). <i>The source for nonverbal learning disorders</i>. LinguiSystems.</li>
          </ul>
        </div>
      </div>

    </article>
  );
}