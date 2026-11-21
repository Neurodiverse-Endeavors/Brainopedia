import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import {
  Brain,
  Zap,
  Hourglass,
  MessageSquare,
  AlertCircle,
  BookX,
  Edit3,
  HeartHandshake,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';

interface TwiceExceptionalSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TwiceExceptionalSymptoms({ setCurrentArticle, initialTab }: TwiceExceptionalSymptomsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'cognitive';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      {/* HEADER & BACK BUTTON */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Twice-Exceptional: Symptoms &amp; Characteristics
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
          onClick={() => handleTabChange('cognitive')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'cognitive'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Cognitive &amp; Academic
        </button>
        <button
          onClick={() => handleTabChange('social')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'social'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Social &amp; Behavioral
        </button>
        <button
          onClick={() => handleTabChange('patterns')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'patterns'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Patterns &amp; Red Flags
        </button>
      </div>

      {/* ==========================================
          TAB 1: COGNITIVE & ACADEMIC (Cyan -> Navy)
      ========================================== */}
      {activeTab === 'cognitive' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Card 1: Cognitive Characteristics (Cyan - Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Cognitive Characteristics
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/2e-symptoms-cognitive.webp"
              alt="Student demonstrating a spiky cognitive profile with complex reasoning but struggling with basic tasks"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
              Twice-exceptional students exhibit a complex profile of traits. Because their giftedness frequently masks their disability (and vice versa), the most defining cognitive characteristic is a wide discrepancy between their abilities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Brain className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Uneven &ldquo;Spiky&rdquo; Profile</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  2e students demonstrate significant &ldquo;scatter&rdquo; in their cognitive abilities. It is common for the standard deviation between index scores to exceed 20 or more points.
                  <sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Zap className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Advanced Reasoning</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  They often show exceptional abstract reasoning and the ability to see complex patterns and connections that others miss, grasping sophisticated concepts very quickly.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Hourglass className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Processing Roadblocks</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Despite high intellect, they frequently experience marked weaknesses in processing speed or working memory, needing more time to complete routine tasks.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <MessageSquare className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Superior Verbal Abilities</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Especially common in students with writing disabilities, they often possess highly sophisticated vocabularies and can articulate mature, abstract concepts orally.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Academic & Work Habits (Navy - 3D Left-Stripe Inner Cards, No Icons) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Academic &amp; Work Habits
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/2e-symptoms-academic.webp"
              alt="Visual highlighting advanced project work alongside disorganized, incomplete daily homework"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Inconsistent Performance
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Their performance fluctuates widely depending on the format. They may create an exceptional, complex science project while struggling with basic math fact worksheets.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Expression Gaps
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    A notable discrepancy between oral and written expression. They can speak brilliantly yet produce written work that is brief, disorganized, or taxing to complete.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Preference for Complexity
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    They strongly resist repetitive drills. They often perform better on advanced, big-picture concepts than on basic, foundational exercises.
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

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>

            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies &amp; Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>
                  1. Silverman, L. K. (2009). The measurement of giftedness. In L. V. Shavinina (Ed.),{' '}
                  <i>International handbook on giftedness</i>. Springer.
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
                  Foley-Nicpon, M., Allmon, A., Sieck, B., &amp; Stinson, R. D. (2011). Empirical investigation of twice-exceptionality: Where have we been and where are we going?{' '}
                  <i>Gifted Child Quarterly</i>.
                </li>
                <li>
                  Baum, S. M., Schader, R. M., &amp; Owen, S. V. (2017).{' '}
                  <i>To be gifted and learning disabled: Strength-based strategies for helping twice-exceptional students</i>. Prufrock Press.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SOCIAL & BEHAVIORAL (Navy -> Yellow)
      ========================================== */}
      {activeTab === 'social' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Card 1: Social-Emotional Characteristics (Navy - 3D Left-Stripe Inner Cards, No Icons) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Social-Emotional Characteristics
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/2e-symptoms-social.webp"
              alt="Child showing intense frustration and perfectionism over a torn paper"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
              2e students are acutely aware of the gap between what their brain knows they can envision and what their body or processing speed will allow them to produce, which can generate deep emotional frustration.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#0A9DC4]"></div>
                <div className="pl-3 w-full">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Perfectionism &amp; Anxiety</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    They often hold themselves to impossibly high internal standards. When a learning difference prevents them from reaching that vision, they may experience intense anxiety or hesitate to start a task.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#576d8e]"></div>
                <div className="pl-3 w-full">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Self-Concept &amp; Asynchronous Development</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Because their abilities vary so sharply across domains, they may internalize academic setbacks and doubt their own intelligence despite clear evidence of exceptional capability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Behavioral Manifestations (Yellow - Double-Ring Navy Circular Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Behavioral Manifestations
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/2e-symptoms-behavior.webp"
              alt="Highly intelligent student acting out as the class clown to deflect from a learning disability"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Task Avoidance as Self-Protection</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  What looks like underachievement is frequently a protective strategy to avoid public failure. Procrastination stems from executive function bottlenecks and performance anxiety rather than a lack of care.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Humor &amp; Deflection</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Many 2e students use quick wit or debate to steer attention away from tasks that expose their learning challenges, masking underlying overwhelm with confidence or humor.
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
                  Reis, S. M., &amp; McCoach, D. B. (2000). The underachievement of gifted students: What do we know and where do we go?{' '}
                  <i>Gifted Child Quarterly</i>.
                </li>
                <li>
                  Webb, J. T., Amend, E. R., Webb, N. E., Goerss, J., Beljan, P., &amp; Olenchak, F. R. (2005).{' '}
                  <i>Misdiagnosis and dual diagnoses of gifted children and adults</i>. Great Potential Press.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: PATTERNS & RED FLAGS (Yellow -> Cyan)
      ========================================== */}
      {activeTab === 'patterns' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Card 1: Specific Disability Patterns (Yellow - Double-Ring Navy Circular Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Specific Disability Patterns
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/2e-symptoms-patterns.webp"
              alt="Visual diagram showing overlapping traits of Giftedness, ADHD, Dyslexia, and Autism"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
              Twice-exceptionality presents differently depending on the specific neurodevelopmental or learning difference overlapping with giftedness.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <BookX className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-1">Gifted + Dyslexia</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Demonstrates superior oral comprehension and vocabulary alongside slower, effortful text decoding, often paired with inventive phonetic spelling.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-1">Gifted + ADHD</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Capable of deep, sustained hyperfocus on complex areas of curiosity while struggling to initiate or regulate attention for routine tasks.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <Edit3 className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-1">Gifted + Dysgraphia</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Displays a wide gap between vivid oral storytelling and physically taxing handwriting, leading to avoidance of manual writing unless accommodations are provided.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-1">Gifted + Autism</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Demonstrates advanced, specialized mastery in focused areas of passion while navigating sensory sensitivities and unwritten social expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Red Flags & Compensatory Strategies (Cyan - Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Red Flags &amp; Compensatory Strategies
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/2e-symptoms-redflags.webp"
              alt="Magnifying glass over an academic record highlighting massive inconsistencies"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Sparkles className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">1. Compensatory Workarounds</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                  2e students use their high intelligence to build sophisticated workarounds, which is why their learning differences often go unrecognized for years.
                </p>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 text-left w-full">
                  <li>
                    Memorizing entire passages from audiobooks or context clues to compensate for phonetic decoding challenges.
                  </li>
                  <li>
                    Inventing elaborate multi-step mental math shortcuts to bypass rote memorization of basic arithmetic facts.
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <AlertCircle className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">2. When to Suspect 2e</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                  Educators and parents should consider a twice-exceptional evaluation when they observe:
                </p>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 text-left w-full">
                  <li>
                    <strong>Significant Scatter:</strong> Large discrepancies between verbal reasoning and written output.
                  </li>
                  <li>
                    <strong>Inconsistent Performance:</strong> Grasping advanced theoretical concepts while struggling with routine spelling or calculation drills.
                  </li>
                  <li>
                    <strong>Under-Challenged yet Overwhelmed:</strong> Finding grade-level concepts too slow yet struggling to organize and submit daily assignments.
                  </li>
                </ul>
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
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul
                className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words"
                style={{ textIndent: 0 }}
              >
                <li>
                  Assouline, S. G., Foley Nicpon, M., &amp; Whiteman, C. (2010). Cognitive and psychosocial characteristics of gifted students with written language disability.{' '}
                  <i>Gifted Child Quarterly</i>.
                </li>
                <li>
                  Lovecky, D. V. (2004).{' '}
                  <i>Different minds: Gifted children with AD/HD, Asperger syndrome, and other learning deficits</i>. Jessica Kingsley Publishers.
                </li>
                <li>
                  West, T. G. (1997).{' '}
                  <i>In the mind&apos;s eye: Visual thinkers, gifted people with dyslexia and other learning difficulties</i>. Prometheus Books.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}