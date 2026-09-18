import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Ear, MessageSquare, BookOpen, LayoutTemplate, Brain, CheckCircle, Users, Activity, Laptop, Home, Heart, ShieldCheck, FileText, Lightbulb } from 'lucide-react';

interface HyperlexiaSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function HyperlexiaSupport({ setCurrentArticle, initialTab }: HyperlexiaSupportProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'academic');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Hyperlexia: Support & Management
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
          onClick={() => setActiveTab('academic')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'academic'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Academic & Therapy
        </button>
        <button
          onClick={() => setActiveTab('social')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'social'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Social & Behavioral
        </button>
        <button
          onClick={() => setActiveTab('home')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'home'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Home & Strengths
        </button>
      </div>

      {/* ==========================================
          TAB 1: ACADEMIC & THERAPY
      ========================================== */}
      {activeTab === 'academic' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Therapy Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Speech-Language Therapy</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-support-therapy.webp"
              alt="Speech-Language Pathologist working with a child using visual reading aids"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Supporting a child with hyperlexia involves a unique approach: you must actively use their advanced reading abilities to treat their language and comprehension deficits. Speech-Language Therapy is the foundation of this intervention.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <BookOpen className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Reading Comprehension</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Explicitly teaching "reading between the lines" and inferencing.</li>
                    <li>Training the child to stop decoding and start asking "why" and "how" questions about the text.</li>
                    <li>Building deep vocabulary meaning, not just word recognition.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Ear className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Listening & Spoken Language</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Building receptive language by having the child follow spoken directions without written clues.</li>
                    <li>Connecting spoken instructions directly to written text so the child learns the auditory equivalent of what they read.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Educational Strategies Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Educational Strategies & Planning</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-support-education-hero.webp"
              alt="Classroom setting highlighting visual supports and structured schedules"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              In the classroom, teachers must recognize that perfect reading fluency does not equal understanding. Academic accommodations should bridge the gap between their visual strengths and auditory challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <LayoutTemplate className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Classroom Accommodations</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Provide written instructions alongside verbal directions.</li>
                  <li>Use graphic organizers and charts to visually structure abstract concepts.</li>
                  <li>Pre-teach complex vocabulary before the lesson begins.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <Brain className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Teaching Strategies</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Use the child's intense interest in reading to engage them in non-preferred subjects.</li>
                  <li>Perform frequent "comprehension checks" rather than assuming they understand because they read it flawlessly.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <FileText className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">IEP / 504 Planning</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Ensure IEP goals focus explicitly on language comprehension and social pragmatics, not decoding.</li>
                  <li>May qualify under Speech-Language Impairment or Autism categories based on their specific profile.</li>
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
                <li>American Speech-Language-Hearing Association. (n.d.). Language disorders. ASHA.</li>
                <li>Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SOCIAL & BEHAVIORAL
      ========================================== */}
      {activeTab === 'social' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Social Skills Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Social Skills Support</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-support-social.webp"
              alt="Child reading a Social Story book with an adult to prepare for a playdate"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Because spoken language is difficult, social interactions can be overwhelming. The most effective way to teach a hyperlexic child how to navigate the social world is to give them a script to read.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <BookOpen className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Reading for Social Learning</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li><strong>Social Stories:</strong> Using custom-written stories to explain the "rules" of specific social situations (like sharing at recess).</li>
                    <li><strong>Scripts:</strong> Providing written scripts so the child knows exactly what to say to initiate play.</li>
                    <li>Reading books that explicitly name characters' thoughts and emotions.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Users className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Social Skills Training</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Explicitly teaching pragmatic language (e.g., how to take turns talking).</li>
                    <li>Role-playing scenarios with an adult before attempting them with peers.</li>
                    <li>Using structured peer-buddy systems in the classroom.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Behavioral & Tech Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Behavioral & Tech Support</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-support-behavior-hero.webp"
              alt="Child using a tablet with visual schedules to manage transitions"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Activity className="text-[#2abcd4] w-5 h-5" /> Behavioral Support
                </h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="text-[#0c264d] font-bold text-xs mb-1">Managing Perseveration</h4>
                    <p className="text-xs text-slate-700">If compulsive reading interferes with daily life, gently set limits (e.g., "We will read three pages, then eat lunch") or use reading time as a reward for completing non-preferred tasks.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="text-[#0c264d] font-bold text-xs mb-1">Targeted Therapies</h4>
                    <p className="text-xs text-slate-700">For children with co-occurring autism (Type 2), structured behavioral therapies can help build functional communication and ease transition anxiety.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Laptop className="text-[#2abcd4] w-5 h-5" /> Helpful Technology
                </h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-[#2abcd4] border-opacity-30 shadow-sm flex items-start gap-2">
                    <CheckCircle className="text-[#0A9DC4] w-4 h-4 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-700"><strong>Visual Schedule Apps:</strong> Providing written, predictable routines to ease anxiety.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#2abcd4] border-opacity-30 shadow-sm flex items-start gap-2">
                    <CheckCircle className="text-[#0A9DC4] w-4 h-4 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-700"><strong>Interactive E-Books:</strong> Using apps that specifically target reading comprehension by requiring the child to interact with the meaning of the text.</p>
                  </div>
                </div>
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
                <li>Gray, C. (2010). <i>The new social story book</i>. Future Horizons.</li>
                <li>National Research Council. (2001). <i>Educating children with autism</i>. National Academy Press.</li>
                <li>Grigorenko, E. L., Klin, A., & Volkmar, F. (2003). Annotation: Hyperlexia: Disability or superability? <i>Journal of Child Psychology and Psychiatry</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: HOME & STRENGTHS
      ========================================== */}
      {activeTab === 'home' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Home Strategies Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Home & Parent Strategies</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-support-home.webp"
              alt="Parent pausing to ask questions during shared reading"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Parents can profoundly impact a hyperlexic child's development by transforming reading from an isolated, mechanical activity into an interactive, shared experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <BookOpen className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Active Shared Reading</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Don't just let them speed-read aloud. Pause frequently to ask "What happened?" or "Why did the character do that?"</li>
                    <li>Explicitly explain vocabulary words rather than just letting them read the word and move on.</li>
                    <li>Connect the book to real life (e.g., "Look, a dog! Just like the dog we saw at the park.").</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Home className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">A Language-Rich Environment</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Narrate your daily activities aloud to bathe the child in functional, everyday language.</li>
                    <li>Model correct grammar when speaking to them without demanding they repeat it perfectly.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Strengths Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Leveraging Strengths & Key Principles</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-support-strengths-hero.webp"
              alt="Child proudly using their advanced reading skills to learn and communicate"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The goal of hyperlexia support is never to suppress their love of letters or reading. Instead, the goal is to use their exceptional visual processing as a bridge to overcome their auditory and social barriers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full border border-[#0c264d] border-opacity-20 mb-3">
                  <MessageSquare className="text-[#0c264d] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Reading as Communication</h3>
                <p className="text-xs text-slate-700 leading-relaxed">If spoken language is too frustrating, encourage them to write or type to communicate their needs. Written choice boards are incredibly effective.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full border border-[#0c264d] border-opacity-20 mb-3">
                  <Heart className="text-[#0c264d] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Protect Self-Esteem</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Celebrate their reading abilities! Build on their individual interests and ensure they feel successful, protecting against secondary anxiety or depression.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full border border-[#0c264d] border-opacity-20 mb-3">
                  <ShieldCheck className="text-[#0c264d] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">The Whole-Child Approach</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Focus on comprehension over decoding, explicitly teach social skills through text, and ensure parents, teachers, and therapists are collaborating as a team.</p>
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
                <li>Treffert, D. A. (2011). Hyperlexia III: Separating 'autistic-like' behaviors from autistic disorder. Wisconsin Medical Society.</li>
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