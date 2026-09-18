import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { BookOpen, MessageSquare, Users, Heart, GraduationCap, Building, Briefcase, FileText, Network, Brain, Lightbulb, CheckCircle } from 'lucide-react';

interface HyperlexiaLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function HyperlexiaLiving({ setCurrentArticle, initialTab }: HyperlexiaLivingProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'daily');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Living with Hyperlexia
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('hyperlexia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About Hyperlexia
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('hyperlexia')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About Hyperlexia
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
          Daily Life & Social
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
          TAB 1: DAILY LIFE & SOCIAL
      ========================================== */}
      {activeTab === 'daily' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Daily Life Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Navigating Daily Life</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-living-daily.webp"
              alt="Person finding comfort in reading in a busy environment"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Living with hyperlexia involves a unique balancing act: navigating the daily challenges of auditory processing and language comprehension while relying on an extraordinary, lifelong gift for visual decoding.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <BookOpen className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Reading as a Core Interest</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Books and text often remain a central part of life. For many, reading is not just a way to learn—it is a vital tool for self-regulation, comfort, and escaping sensory or social overwhelm.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <MessageSquare className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Communication Hurdles</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Individuals often prefer written communication over verbal exchanges. Fast-paced spoken conversations can cause misunderstandings, requiring the individual to actively ask for clarification or repetition.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Relationships Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Social Relationships</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-living-relationships-hero.webp"
              alt="Friends connecting through a shared text-based interest"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Socializing can be exhausting when you naturally miss nonverbal cues or struggle to process complex spoken language. Building a fulfilling social life often means finding communities that share your communication style.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <Users className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Building Friendships</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Connecting through shared, structured interests (like book clubs or gaming) rather than unstructured socializing.</li>
                  <li>Many individuals find deep connection in online communities where text-based interaction removes the pressure of spoken conversation.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <Heart className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Family Dynamics</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Educating family members to use written communication (like texts or lists) for important information rather than relying on verbal instructions.</li>
                  <li>Fostering an environment that appreciates the individual's reading strengths while supporting their social fatigue.</li>
                </ul>
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
                <li>Nation, K. (1999). Reading skills in hyperlexia: A developmental perspective. <i>Psychological Bulletin</i>.</li>
                <li>Grigorenko, E. L., Klin, A., & Volkmar, F. (2003). Annotation: Hyperlexia: Disability or superability? <i>Journal of Child Psychology and Psychiatry</i>.</li>
                <li>Treffert, D. A. (2011). Hyperlexia III: Separating 'autistic-like' behaviors from autistic disorder. Wisconsin Medical Society.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: EDUCATION & CAREER
      ========================================== */}
      {activeTab === 'career' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Educational Journey Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Educational Journey</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-living-education.webp"
              alt="Student navigating campus with visual and written accommodations"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The academic journey for a hyperlexic student is complex. While they may be the "star reader" in kindergarten, the gap between their flawless decoding and their actual reading comprehension becomes a major hurdle in upper elementary school.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <GraduationCap className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Early Years</h3>
                </div>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Incredible reading ability often masks deep comprehension struggles, meaning they may not get the IEP support they actually need until the work becomes abstract.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Building className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Higher Education</h3>
                </div>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Many individuals successfully attend college by registering early with Disability Services to secure comprehension support.</li>
                  <li>Success often comes from choosing majors that emphasize heavy reading and data over oral communication or abstract philosophy.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Employment Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Employment & Trajectories</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-living-career-hero.webp"
              alt="Professional excelling in a text-heavy career"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Briefcase className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Suitable Career Paths</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Careers that utilize intense reading ability and visual memory are ideal. Many excel in writing, editing, library science, tech/data analysis, or fields requiring the review of heavy technical manuals.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <FileText className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Workplace Strategies</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Success in the workplace means requesting accommodations: relying on email over meetings, asking for written instructions rather than verbal off-the-cuff directions, and choosing independent roles over highly social ones.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Network className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Outcomes by Type</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Trajectory depends on the profile. Type 1 & 3 individuals often see comprehension catch up entirely. Type 2 individuals (with Autism) may need ongoing social support but can highly leverage their reading for career success.</p>
              </div>

            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Nation, K., Clarke, P., Wright, B., & Williams, C. (2006). Patterns of reading ability in children with autism spectrum disorder. <i>Journal of Autism and Developmental Disorders</i>.</li>
                <li>Treffert, D. A. (2011). Hyperlexia III: Separating 'autistic-like' behaviors from autistic disorder. Wisconsin Medical Society.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: WELL-BEING & ADVOCACY
      ========================================== */}
      {activeTab === 'wellbeing' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Self-Advocacy Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Self-Advocacy & Understanding</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-living-advocacy.webp"
              alt="Individual confidently requesting written instructions to support their needs"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Because hyperlexia is often misunderstood (even by medical professionals), learning to become your own advocate is an essential life skill. 
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Brain className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Understanding Your Profile</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">It starts with deep self-awareness. Recognizing that your extraordinary reading ability is paired with genuine comprehension and auditory roadblocks helps remove shame and guilt from misunderstandings.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <MessageSquare className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Communicating Needs</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Practice explicitly asking for what you need. Phrases like, "I process information much better when I can read it—could you email me those instructions?" are powerful tools for self-advocacy.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Strengths Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Strengths & Lifelong Success</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-living-success-hero.webp"
              alt="Empowering visual of a thriving individual embracing their unique reading gift"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              While language and social nuances may always require conscious effort, the exceptional ability to decode and retain written information is a profound, lifelong gift.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-3 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <BookOpen className="text-[#0A9DC4] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">The Gift of Reading</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li><strong>A Learning Tool:</strong> With the right supports, an individual with hyperlexia can learn to master almost any subject through text.</li>
                  <li><strong>A Coping Mechanism:</strong> Reading provides a lifelong, healthy avenue for comfort, regulation, and escape when the world feels overwhelming.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-3 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <CheckCircle className="text-[#0A9DC4] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Keys to Thriving</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Focus relentlessly on your strengths rather than obsessing over limitations.</li>
                  <li>Utilize accommodations without apology—they level the playing field.</li>
                  <li>Find your community: surround yourself with people who appreciate your unique perspective and straightforward communication style.</li>
                </ul>
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
                <li>Kupperman, P., Bligh, S., & Barouski, K. (2002). Hyperlexia. In A. M. Wetherby & B. M. Prizant (Eds.), <i>Autism spectrum disorders</i>.</li>
                <li>Grigorenko, E. L., Klin, A., & Volkmar, F. (2003). Annotation: Hyperlexia: Disability or superability? <i>Journal of Child Psychology and Psychiatry</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('hyperlexia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About Hyperlexia
        </button>
      </div>

    </article>
  );
}