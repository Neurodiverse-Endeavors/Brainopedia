import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import {
  FastForward,
  Laptop,
  BookOpen,
  Users,
  AlertTriangle,
  Sparkles,
  Compass,
  Layers,
  MessageSquare,
  HeartHandshake,
} from 'lucide-react';

interface TwiceExceptionalSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TwiceExceptionalSupport({ setCurrentArticle, initialTab }: TwiceExceptionalSupportProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'academic';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & BACK BUTTON */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Twice-Exceptional: Support &amp; Management
        </h1>

        <button
          onClick={() => setCurrentArticle?.('twice-exceptional')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm self-start"
        >
          <span className="text-xl">←</span>
          All About 2e
        </button>
      </div>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('academic')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'academic'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Academic Interventions
        </button>
        <button
          onClick={() => handleTabChange('emotional')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'emotional'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Social &amp; Emotional
        </button>
        <button
          onClick={() => handleTabChange('advocacy')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'advocacy'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Advocacy &amp; Transitions
        </button>
      </div>

      {/* ==========================================
          TAB 1: ACADEMIC INTERVENTIONS (Cyan -> Yellow)
      ========================================== */}
      {activeTab === 'academic' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Card 1: Dual Differentiation Framework (Cyan - Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Dual Differentiation Framework
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/2e-support-differentiation.webp"
              alt="Luminous gold and cyan infographic illustrating Dual Differentiation in 2e: rigorous acceleration alongside targeted accommodations"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
              Supporting twice-exceptional students requires a complete refusal to compromise. Educators provide &ldquo;dual differentiation&rdquo;—simultaneously delivering rigorous acceleration for the student&apos;s intellectual gifts while offering robust accommodations and skill support for their learning differences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Sparkles className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Strength-Based Approach</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Focus intensely on developing specific talents first. Nurturing intellectual gifts builds the confidence, intrinsic motivation, and momentum learners need to engage with areas of challenge.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Layers className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Addressing Both Needs</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Neither the gift nor the disability should be neglected. Students benefit from access to complex, abstract concepts through accessible formats (such as audiobooks) alongside explicit skill remediation.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Compass className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Placement Options</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  While many thrive in general education with close collaboration between gifted and special educators, specialized 2e programs or gifted classrooms with accommodations often foster the strongest peer connections.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Modifications & Specific Strategies (Yellow - Double-Ring Navy Circular Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Modifications &amp; Specific Strategies
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/2e-support-interventions.webp"
              alt="Luminous gold and cyan infographic illustrating curriculum compacting, assistive technology, and targeted interventions"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Targeted classroom adjustments remove mechanical bottlenecks so twice-exceptional learners can demonstrate advanced reasoning without unnecessary friction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <FastForward className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Compacting</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Eliminating content already mastered frees time for depth and acceleration. Research shows gifted students can demonstrate mastery of 40–50% of regular curriculum material before it is even taught.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <Laptop className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Assistive Technology</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Technology acts as an equalizer rather than a crutch. Speech-to-text, audiobooks, and calculators allow students to bypass mechanical processing hurdles and express collegiate-level thinking.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Targeted Interventions</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  For dysgraphia, alternative response formats let ideas flow cleanly. For executive function differences, educators explicitly teach organizational frameworks that neurotypical peers absorb implicitly.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM NAVIGATION BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full clear-both">
            <button
              onClick={() => setCurrentArticle?.('twice-exceptional')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm"
            >
              <span className="text-xl">←</span>
              All About 2e
            </button>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>

            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies &amp; Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>
                  1. Reis, S. M., Burns, D. E., &amp; Renzulli, J. S. (1992).{' '}
                  <i>Curriculum compacting: The complete guide to modifying the regular curriculum for high ability students</i>. Creative Learning Press.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul
                className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words"
                style={{ textIndent: 0 }}
              >
                <li>
                  Baum, S. M., Cooper, C. R., &amp; Neu, T. W. (2001). Dual differentiation: An approach for meeting the curricular needs of gifted students with learning disabilities.{' '}
                  <i>Psychology in the Schools</i>.
                </li>
                <li>
                  Foley-Nicpon, M. (2013). Gifted Child Quarterly and talent development for gifted students with co-occurring disabilities.{' '}
                  <i>Gifted Child Quarterly</i>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SOCIAL & EMOTIONAL (Navy -> Cyan)
      ========================================== */}
      {activeTab === 'emotional' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Card 1: Social-Emotional Support (Navy - 3D Left-Stripe Inner Cards, No Icons) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Social-Emotional Support
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/2e-support-emotional.webp"
              alt="Supportive counseling conversation addressing perfectionism and building 2e self-understanding"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
              Navigating asynchronous abilities every day takes substantial emotional energy. Proactive affective support bridges the gap between advanced insight and day-to-day execution, protecting self-worth and resilience.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Targeted Counseling
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    2e individuals thrive with counselors who understand both exceptionalities. Cognitive-behavioral and strengths-oriented strategies help reframe perfectionism, imposter feelings, and fear of making mistakes.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Building Self-Understanding
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Explicitly explaining an individual&apos;s 2e cognitive profile is transformative. Understanding the exact neurological reasons behind uneven strengths fosters self-acceptance and confident self-advocacy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Peer Connection & Social Identity (Cyan - Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Peer Connection &amp; Social Identity
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/2e-support-peers.webp"
              alt="Cluster of twice-exceptional learners collaborating in a talent-focused program"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
              Belonging flourishes when twice-exceptional learners connect with true intellectual peers and receive social guidance that respects their analytical depth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Users className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Finding Intellectual Peers</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  2e learners often feel caught between traditional gifted and special education settings. Connecting with fellow 2e peers through talent-development camps, interest clubs, or dedicated communities reduces isolation and validates their lived experience.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <MessageSquare className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Concept-Driven Social Learning</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  For 2e learners on the autism spectrum (∞) or with ADHD, social dynamics become far clearer when instruction explains the underlying logic and perspective-taking theory behind interactions rather than demanding rote compliance.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM NAVIGATION BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full clear-both">
            <button
              onClick={() => setCurrentArticle?.('twice-exceptional')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm"
            >
              <span className="text-xl">←</span>
              All About 2e
            </button>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul
                className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words"
                style={{ textIndent: 0 }}
              >
                <li>
                  King, E. W. (2005). Addressing the social and emotional needs of twice-exceptional students.{' '}
                  <i>Teaching Exceptional Children</i>.
                </li>
                <li>
                  Neihart, M. (2008). Identifying and providing services to twice exceptional children. In{' '}
                  <i>Handbook of giftedness in children</i>. Springer.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: ADVOCACY & TRANSITIONS (Yellow -> Navy)
      ========================================== */}
      {activeTab === 'advocacy' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Card 1: Educational Planning & Legal Rights (Yellow + Accessible Maroon/Pink Warning) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Educational Planning &amp; Legal Rights
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/2e-support-advocacy.webp"
              alt="Collaborative IEP and 504 planning team supporting dual differentiation"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Effective educational plans formalize dual differentiation so students receive legally protected accommodations without losing access to advanced enrichment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Left Side - Double-Ring Navy Icon Badge Card */}
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Collaborative Family Advocacy</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                  Informed family advocacy helps school teams see both sides of the bell curve together—pairing high intellectual expectations with realistic, compassionate support for processing differences.
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Sharing concrete work samples alongside clinical evaluations empowers teams to craft balanced, strengths-first goals.
                </p>
              </div>

              {/* Right Side - Accessible Warning (Maroon/Pink) */}
              <div className="bg-[#fdf2f8] p-5 rounded-xl shadow-sm border border-[#be185d]">
                <h3 className="text-[#831843] font-bold text-lg mb-3 flex items-center gap-2">
                  <AlertTriangle className="text-[#be185d] w-5 h-5 shrink-0" /> IEP &amp; 504 Mandates
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Do not accept an educational plan that focuses solely on remediation. Federal protections support dual differentiation.
                </p>
                <div className="bg-white p-4 rounded-lg border-l-4 border-[#be185d] shadow-sm">
                  <p className="text-xs text-slate-700 leading-relaxed">
                    When eligible under IDEA or Section 504, a student&apos;s plan should address skill support needs <em>while preserving access</em> to advanced, gifted-level coursework and acceleration.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Programs, Transitions & Beyond (Navy - 3D Left-Stripe Inner Cards, No Icons) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Programs, Transitions &amp; Beyond
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/2e-support-transitions.webp"
              alt="Twice-exceptional young adult transitioning to higher education and career pathways"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Long-term flourishing builds on inclusive instructional design, mentorship, and strong self-advocacy heading into higher education and career pathways.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Promising Programs
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Organizations such as the Jack Kent Cooke Foundation provide dedicated scholarship support and mentorship to expand opportunities for high-potential students from lower-income and culturally diverse backgrounds.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Universal Design for Learning
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    The Universal Design for Learning (UDL) framework naturally supports 2e learners by offering multiple, built-in avenues for engaging with complex material and demonstrating mastery without unnecessary friction.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    College &amp; Career Transitions
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Transitioning to post-secondary life empowers young adults to lead their own accommodation requests and align career paths with deep intellectual strengths and flexible, autonomy-rich work environments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM NAVIGATION BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full clear-both">
            <button
              onClick={() => setCurrentArticle?.('twice-exceptional')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm"
            >
              <span className="text-xl">←</span>
              All About 2e
            </button>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>

            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies &amp; Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
                <p>
                  2. Wyner, J. S., Bridgeland, J. M., &amp; DiIulio, J. J., Jr. (2007).{' '}
                  <i>Achievement trap: How America is failing millions of high-achieving students from lower-income families</i>. Jack Kent Cooke Foundation.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul
                className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words"
                style={{ textIndent: 0 }}
              >
                <li>
                  Assouline, S. G., &amp; Whiteman, C. S. (2011). Twice-exceptionality: Implications for school psychologists in the post-IDEA 2004 era.{' '}
                  <i>Journal of Applied School Psychology</i>.
                </li>
                <li>
                  Edyburn, D. L. (2004). 2003 in review: A synthesis of the special education technology literature.{' '}
                  <i>Journal of Special Education Technology</i>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}