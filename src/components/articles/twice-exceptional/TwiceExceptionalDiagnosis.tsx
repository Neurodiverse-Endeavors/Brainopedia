import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import {
  Brain,
  FileText,
  Calculator,
  Heart,
  ClipboardList,
  Users,
  Target,
  LineChart,
  Search,
  Layers,
  Gauge,
  BatteryCharging,
  NotebookPen, 
  Zap
} from 'lucide-react';

interface TwiceExceptionalDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TwiceExceptionalDiagnosis({ setCurrentArticle, initialTab }: TwiceExceptionalDiagnosisProps) {
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
          Twice-Exceptional: Testing &amp; Diagnosing
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
          onClick={() => handleTabChange('behavioral')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'behavioral'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Behavioral &amp; Autism
        </button>
        <button
          onClick={() => handleTabChange('holistic')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'holistic'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Holistic &amp; Best Practices
        </button>
      </div>

      {/* ==========================================
          TAB 1: COGNITIVE & ACADEMIC (Cyan -> Yellow -> Navy -> Cyan)
      ========================================== */}
      {activeTab === 'cognitive' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Card 1: Cognitive & IQ Testing (Cyan - Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Cognitive &amp; IQ Testing
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/2e-diagnosis-cognitive.webp"
              alt="Watercolor infographic illustrating cognitive and IQ testing in 2e including analyzing scatter, GAI, and nonverbal measures"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
              The primary hurdle in identifying twice-exceptionality is the &ldquo;masking effect&rdquo;—where an individual&apos;s high intelligence and learning differences compensate for one another, resulting in average composite test scores. Evaluators must look past composite averages and examine subtest scatter.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Brain className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Analyzing Scatter</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  2e individuals typically show marked scatter among subtests. Discrepancies of 20+ points between the highest and lowest index scores on tests like the WISC-V or SB5 are very common.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <LineChart className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Beyond Full Scale IQ</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  A Full Scale IQ can be misleading for a 2e learner because processing speed or working memory demands pull down high reasoning scores. Evaluators use the General Ability Index (GAI) instead.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Search className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Nonverbal Measures</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Tests like the NNAT or Raven&apos;s Matrices assess pure abstract reasoning without language demands, helping uncover giftedness in learners with language-based processing differences.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Achievement & Specific Educational Profiles (Yellow - Double-Ring Navy Circular Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Achievement &amp; Specific Educational Profiles
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/2e-diagnosis-academic.webp"
              alt="Watercolor infographic illustrating reading comprehension vs decoding, math reasoning vs calculation, and above-level testing"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Achievement testing requires comparing academic output against intellectual capability, not just against grade-level norms. A gifted learner performing &ldquo;at grade level&rdquo; may still be navigating an unaddressed learning difference.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Reading (Dyslexia)</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Twice-exceptional learners with dyslexia often show far more advanced comprehension when materials are read aloud or shared verbally. This distinct mismatch highlights the difference between phonetic decoding challenges and high-level conceptual understanding.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Math (Dyscalculia)</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Assessment should verify conceptual mathematical reasoning separately from rote, automatic memory retrieval. A 2e learner can deeply grasp theoretical algebra or advanced math concepts while concurrently struggling to quickly recall basic calculation facts.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Above-Level Testing</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Utilizing above-level assessment options bypasses common &ldquo;ceiling effects.&rdquo; This process reveals advanced reasoning strengths in 2e learners whose processing differences might otherwise suppress and mask scores on grade-level testing.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Adult WAIS Profiles: GAI vs. Cognitive Proficiency (Navy - 3D Left-Stripe Inner Cards, No Icons) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Adult WAIS Profiles: GAI vs. Cognitive Proficiency
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/twice-exceptional-diagnosis-tab1-3.webp"
              alt="Watercolor infographic comparing adult WAIS General Ability Index reasoning strengths against Cognitive Proficiency processing bottlenecks"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
              When evaluating adults on the Wechsler Adult Intelligence Scale (WAIS-IV / WAIS-5), a single summary number rarely reflects lived capability.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup> Separating high-level reasoning from real-time processing efficiency clarifies why an adult can excel at complex systems thinking while feeling drained by routine clerical demands.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Four-Index Scatter on the WAIS
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    In a 2e adult profile, Verbal Comprehension (VCI) and Perceptual or Fluid Reasoning (PRI / VSI &amp; FRI) often sit in the Superior to Very Superior range, while Working Memory (WMI) and Processing Speed (PSI) drop 15 to 30+ points lower due to co-occurring ADHD, autism, dyslexia, or chronic anxiety.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    GAI vs. Cognitive Proficiency Index (CPI)
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Clinicians compare the General Ability Index (VCI + reasoning) against the Cognitive Proficiency Index (WMI + PSI). A wide GAI–CPI gap validates the adult experience of effortlessly solving intricate conceptual problems while hitting bottlenecks during timed tasks, multi-step emails, or rapid administrative switching.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Adult Subtest Nuances & Lifelong Compensation (Cyan - Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Adult Subtest Nuances &amp; Lifelong Compensation
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/twice-exceptional-diagnosis-tab1-4.webp"
              alt="Watercolor infographic illustrating WAIS subtest nuances across verbal, visual-spatial, working memory, and processing speed tasks alongside adult cognitive compensation"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
              Unlike children, 2e adults enter testing with decades of learned cognitive workarounds. Examining individual subtest mechanics alongside qualitative testing behaviors reveals the hidden energy cost behind seemingly &ldquo;average&rdquo; performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Layers className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Reasoning &amp; Verbal Subtest Peaks</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Adults frequently reach the 99th percentile on abstract tasks like <em>Similarities</em>, <em>Matrix Reasoning</em>, or <em>Visual Puzzles</em>, even when rote fact recall (<em>Information</em>) or motor-timed assembly (<em>Block Design</em>) dips due to educational gaps, dyspraxia, or perfectionistic double-checking.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Gauge className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Processing Speed &amp; Memory Mechanics</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Comparing <em>Digit Span</em> with <em>Arithmetic</em> distinguishes auditory sequencing limits from attentional drift, while lower <em>Symbol Search</em> or <em>Coding</em> scores in 2e adults typically stem from visual-motor friction and meticulous over-analysis rather than slow comprehension.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <BatteryCharging className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">High-Effort Masking &amp; Triangulation</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Adults often use mnemonic workarounds to brute-force early memory items until cognitive load hits a tipping point. Pairing qualitative fatigue notes with adult rating scales like the BRIEF-A grounds test scores in everyday life.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup>
                </p>
              </div>
            </div>
          </div>
{/* Card 5: High Processing Speed vs. Low Working Memory (Yellow - Double-Ring Navy Circular Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              High Processing Speed vs. Low Working Memory
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/twice-exceptional-diagnosis-tab1-5.webp"
              alt="Watercolor infographic illustrating rapid visual intake from high processing speed alongside externalizing scaffolds for a smaller working memory buffer"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              When an adult demonstrates very high Processing Speed (PSI) alongside significantly lower Working Memory (WMI), their mind absorbs and connects visible patterns far faster than their short-term mental scratchpad can hold temporary details. Understanding this specific split reframes everyday forgetfulness as an executive buffer bottleneck rather than a limit in reasoning ability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Rapid Intake vs. Mental Buffer</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  High PSI enables quick visual scanning and big-picture insight when information is right in front of you, while lower WMI causes thoughts to outpace short-term holding—leading to lost trains of thought mid-sentence or forgotten multi-step verbal directions.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Auditory vs. Visual Asymmetry</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  On the WAIS, Processing Speed tasks are primarily visual-motor, whereas Working Memory subtests rely heavily on auditory sequential holding. Adults with strong visual-spatial speed and co-occurring ADHD or auditory strain often show a pronounced PSI–WMI split.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <NotebookPen className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Externalizing the Scratchpad</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Fast processors often mask working memory slips through constant mental re-checking, which drains daily energy. Offloading details onto whiteboards, dual monitors, or written checklists frees rapid reasoning strengths to run at full capacity.
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
                  1. Silverman, L. K. (2009). The measurement of giftedness. In L. V. Shavinina (Ed.),{' '}
                  <i>International handbook on giftedness</i>. Springer.
                </p>
                <p>
                  2. Saklofske, D. H., Prifitera, A., Weiss, L. G., Rolfhus, E., &amp; Zhu, J. (2005).{' '}
                  <i>Clinical interpretation of the WISC-IV FSIQ and GAI</i>. Elsevier Academic Press.
                </p>
                <p>
                  3. Wechsler, D. (2008).{' '}
                  <i>Wechsler Adult Intelligence Scale–Fourth Edition (WAIS-IV): Technical and interpretive manual</i>. Pearson.
                </p>
                <p>
                  4. Roth, R. M., Isquith, P. K., &amp; Gioia, G. A. (2005).{' '}
                  <i>Behavior Rating Inventory of Executive Function–Adult Version (BRIEF-A)</i>. Psychological Assessment Resources.
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
                  Pfeiffer, S. I. (2015). <i>Essentials of gifted assessment</i>. John Wiley &amp; Sons.
                </li>
                <li>
                  Mazzocco, M. M., &amp; Myers, G. F. (2003). Complexities in identifying and defining mathematics learning disability.{' '}
                  <i>Annals of Dyslexia</i>.
                </li>
                <li>
                  Lichtenberger, E. O., &amp; Kaufman, A. S. (2012).{' '}
                  <i>Essentials of WAIS-IV assessment</i> (2nd ed.). John Wiley &amp; Sons.
                </li>
                <li>
                  Baddeley, A. (2012). Working memory: Theories, models, and controversies.{' '}
                  <i>Annual Review of Psychology</i>.
                </li>
                <li>
                  Kaufman, A. S., Raiford, S. E., &amp; Coalson, D. L. (2016).{' '}
                  <i>Intelligent testing with the WISC-V and WAIS-IV</i>. John Wiley &amp; Sons.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: BEHAVIORAL & AUTISM (Navy -> Yellow)
      ========================================== */}
      {activeTab === 'behavioral' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Card 1: ADHD & Executive Function (Navy - 3D Left-Stripe Inner Cards, No Icons) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              ADHD &amp; Executive Function
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/2e-diagnosis-adhd.webp"
              alt="Cubist-inspired tactile impasto infographic illustrating ADHD and Executive Function in 2e"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
              ADHD and giftedness share substantial behavioral overlaps, including high energy, intense questioning, and boredom with repetitive routines. Evaluators distinguish between executive function differences and a gifted learner reacting to an under-stimulating environment.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Rating Scales &amp; Cross-Setting Context
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Tools like the BASC or BRIEF evaluate attention across home and school settings.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> A key differentiator is consistency: a gifted learner without ADHD typically sustains focus on self-selected challenges, whereas ADHD impacts executive regulation even during preferred tasks.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Continuous Performance Nuances
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Continuous Performance Tests (CPTs) measure sustained vigilance, yet gifted individuals can often hyperfocus during brief, novel clinic sessions—requiring evaluators to pair lab tasks with longitudinal real-world observations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Autism & Emotional Assessment (Yellow - Double-Ring Navy Circular Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Autism &amp; Emotional Assessment
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/2e-diagnosis-autism.webp"
              alt="Staggered diagonal cubist impasto infographic illustrating Autism and Emotional Assessment in 2e"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Giftedness and autism share overlapping traits such as deep, specialized passions and analytical pattern recognition, making nuanced clinical observation essential.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Autism Assessment &amp; Masking</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Evaluators rely on tools like the ADOS-2 and ADI-R alongside developmental history.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup> Because gifted autistic individuals often use advanced verbal reasoning to compensate during structured one-on-one tasks, naturalistic social observation is vital.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Emotional Well-Being &amp; Perfectionism</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Acute awareness of uneven internal abilities can fuel intense perfectionism and performance anxiety. Comprehensive evaluations screen for emotional stress to support healthy self-concept early.
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

            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies &amp; Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>
                  1. Gioia, G. A., Isquith, P. K., Guy, S. C., &amp; Kenworthy, L. (2000).{' '}
                  <i>Behavior Rating Inventory of Executive Function: BRIEF</i>. Psychological Assessment Resources.
                </p>
                <p>
                  2. Lord, C., Rutter, M., DiLavore, P. C., Risi, S., Gotham, K., &amp; Bishop, S. L. (2012).{' '}
                  <i>Autism Diagnostic Observation Schedule-Second Edition (ADOS-2)</i>. Western Psychological Services.
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
                  Webb, J. T., Amend, E. R., Webb, N. E., Goerss, J., Beljan, P., &amp; Olenchak, F. R. (2005).{' '}
                  <i>Misdiagnosis and dual diagnoses of gifted children and adults</i>. Great Potential Press.
                </li>
                <li>
                  Foley-Nicpon, M., Doobay, A. F., &amp; Assouline, S. G. (2010). Parent, teacher, and self perceptions of psychosocial functioning in intellectually gifted children and adolescents with autism.{' '}
                  <i>Journal of Autism and Developmental Disorders</i>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: HOLISTIC & BEST PRACTICES (Yellow -> Navy)
      ========================================== */}
      {activeTab === 'holistic' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Card 1: Portfolios & Observation (Yellow - Double-Ring Navy Circular Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Portfolios &amp; Observation
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/2e-diagnosis-holistic.webp"
              alt="Watercolor infographic illustrating work portfolios and behavioral rating scales (SRBCSS)"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
              Because timed standardized testing environments can trigger anxiety or executive bottlenecks, holistic, performance-based evidence is essential for uncovering a 2e learner&apos;s authentic strengths.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Work Portfolios</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Curated collections of authentic projects highlight the contrast between sophisticated conceptual thinking and mechanical execution hurdles such as handwriting fatigue or calculation slips.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Behavioral Rating Scales</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Parent and educator observations capture curiosity and deep early interests outside formal test settings. Tools like the SRBCSS evaluate multiple dimensions of superior potential.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Best Practices & Interpretation (Navy - 3D Left-Stripe Inner Cards, No Icons) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Best Practices &amp; Interpretation
            </h2>

            <ImageWithFallback
              src="/images/twice-exceptional/2e-diagnosis-bestpractices.webp"
              alt="Watercolor infographic illustrating best evaluation practices: triangulating data, accounting for compensation, and dual differentiation"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Accurate interpretation ensures an individual is recognized across their full profile rather than defined by a single score or label.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#0A9DC4]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-3 border-b border-gray-100 pb-2">
                    Comprehensive Triangulation
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-4">
                    No single test captures twice-exceptionality. Diagnosticians triangulate subtest scatter alongside developmental history, educator observations, and authentic work samples.
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Evaluators account for intellectual compensation—recognizing when strong reasoning masks underlying processing or literacy challenges.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#0c264d]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-3 border-b border-gray-100 pb-2">
                    Dual Differentiation Planning
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-4">
                    Categorizing a 2e learner by only one side of their profile leaves core needs unmet. Effective educational plans address both sides together:
                  </p>
                  <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                    <li>Sustained access to advanced, intellectually challenging enrichment and acceleration.</li>
                    <li>Targeted accommodations and skill supports documented within an IEP or 504 plan.</li>
                  </ul>
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
                <p>
                  1. Renzulli, J. S., Smith, L. H., White, A. J., Callahan, C. M., Hartman, R. K., &amp; Westberg, K. L. (2002).{' '}
                  <i>Scales for Rating the Behavioral Characteristics of Superior Students</i>. Creative Learning Press.
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
                  Gilman, B. J., et al. (2013). Critical issues in the identification of gifted students with co-existing disabilities: The twice-exceptional.{' '}
                  <i>SAGE Open</i>.
                </li>
                <li>
                  Baum, S. M., &amp; Owen, S. V. (1988). High ability/learning disabled students: How are they different?{' '}
                  <i>Gifted Child Quarterly</i>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}