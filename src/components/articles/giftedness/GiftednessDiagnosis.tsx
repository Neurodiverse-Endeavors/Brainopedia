import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, FileText, PenTool, ClipboardList, LineChart, Globe, Users, Target, ShieldCheck, Search, Lightbulb, Activity, CheckCircle, Scale } from 'lucide-react';

interface GiftednessDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function GiftednessDiagnosis({ setCurrentArticle, initialTab }: GiftednessDiagnosisProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'testing');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Giftedness: Testing & Diagnosing
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('giftedness')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About Giftedness
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('giftedness')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About Giftedness
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('testing')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'testing'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Standardized Testing
        </button>
        <button
          onClick={() => setActiveTab('holistic')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'holistic'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Holistic Models
        </button>
        <button
          onClick={() => setActiveTab('populations')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'populations'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Populations & Guidelines
        </button>
      </div>

      {/* ==========================================
          TAB 1: STANDARDIZED TESTING
      ========================================== */}
      {activeTab === 'testing' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Intelligence & Achievement Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Intelligence & Achievement</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-diagnosis-testing.webp"
              alt="Child taking a standardized cognitive assessment"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Identifying giftedness traditionally begins with standardized testing to establish a baseline of cognitive ability and academic mastery compared to age-level peers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Brain className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">IQ Testing</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li><strong>Wechsler Scales (WISC-V):</strong> Widely used to identify patterns of strengths in verbal comprehension, visual-spatial, and fluid reasoning.</li>
                    <li><strong>Stanford-Binet (SB5):</strong> Features a higher "ceiling," making it ideal for identifying highly and exceptionally gifted individuals.</li>
                    <li><strong>Nonverbal Tests:</strong> Tests like the NNAT assess pure reasoning without requiring language skills, reducing cultural bias.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <FileText className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Achievement Testing</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li><strong>Standardized Measures:</strong> Tools like the Woodcock-Johnson provide detailed data on exact academic mastery.</li>
                    <li><strong>Above-Level Testing:</strong> Giving middle schoolers high school tests (like the SAT/ACT) to avoid "ceiling effects" and accurately measure precocity.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Creativity Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Assessing Creativity</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-diagnosis-creativity-hero.webp"
              alt="Highly original, creative student product or invention"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because giftedness encompasses more than just rote academic achievement, modern diagnostic batteries frequently include assessments designed to measure divergent, out-of-the-box thinking.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <Lightbulb className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Torrance Tests (TTCT)</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  The Torrance Tests of Creative Thinking assess divergent thinking through verbal and figural activities. They specifically measure fluency (number of ideas), flexibility (variety), originality, and elaboration.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <PenTool className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Consensual Assessment</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  An authentic, performance-based approach where panels of subject-matter experts rate a student's actual creative products (writing samples, artwork, or inventions) for originality and technical skill.
                </p>
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
                <li>Pfeiffer, S. I. (2015). Essentials of gifted assessment. <i>John Wiley & Sons</i>.</li>
                <li>Wechsler, D. (2014). Wechsler Intelligence Scale for Children-Fifth Edition. <i>Pearson</i>.</li>
                <li>Roid, G. H. (2003). Stanford-Binet Intelligence Scales, Fifth Edition. <i>Riverside Publishing</i>.</li>
                <li>Torrance, E. P. (1974). Torrance Tests of Creative Thinking: Norms-technical manual. <i>Scholastic Testing Service</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: HOLISTIC MODELS
      ========================================== */}
      {activeTab === 'holistic' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Holistic Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Portfolios & Observation</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-diagnosis-holistic.webp"
              alt="Teacher and student reviewing a rich portfolio of authentic classwork"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Standardized tests can easily miss gifted students who are anxious, unmotivated, or from culturally diverse backgrounds. Holistic assessments observe how the student performs in real-world, dynamic situations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <ClipboardList className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Behavioral Nominations</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li><strong>Teacher Ratings:</strong> Valuable for spotting rapid learning, though untrained teachers often overlook quiet or underachieving gifted students.</li>
                    <li><strong>Parent Inventories:</strong> Parents provide critical insight into early milestones, intense curiosity, and advanced vocabulary at home.</li>
                    <li><strong>Self & Peer:</strong> Useful for identifying leadership and masking behaviors.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Target className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Performance Tasks</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li><strong>Portfolios:</strong> Evaluating a collection of the student's work over time to demonstrate deep conceptual growth.</li>
                    <li><strong>Authentic Tasks:</strong> Presenting a complex, real-world problem to reveal problem-solving abilities that multiple-choice tests miss.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Models Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Modern Identification Models</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-diagnosis-models-hero.webp"
              alt="Wide view of a diverse classroom with data points highlighting hidden potential"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Best practices dictate using a "Multiple Criteria Approach," where no single test score can disqualify a student from receiving gifted services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Users className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Universal Screening</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Assessing <em>all</em> students in a grade level rather than relying on teacher nominations. This is proven to massively increase the identification of gifted minority and low-income students.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Globe className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Local Norms</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Identifying students who are exceptionally gifted relative to their specific school or district, rather than relying strictly on national wealthy-district averages.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <LineChart className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Dynamic Assessment & RtI</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Providing increasingly challenging curriculum and measuring how rapidly the student acquires the new concepts, actively assessing their "learning potential" rather than static knowledge.</p>
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
                <li>Card, D., & Giuliano, L. (2016). Universal screening increases the representation of low-income and minority students in gifted education. <i>Proceedings of the National Academy of Sciences</i>.</li>
                <li>Lidz, C. S., & Elliott, J. G. (Eds.). (2000). Dynamic assessment: Prevailing models and applications. <i>JAI/Elsevier Science</i>.</li>
                <li>Shaklee, B. D., Barbour, N. E., Ambrose, R., & Hansford, S. J. (1997). Designing and using portfolios. <i>Allyn & Bacon</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: POPULATIONS & GUIDELINES
      ========================================== */}
      {activeTab === 'populations' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Populations Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Special Populations</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-diagnosis-populations.webp"
              alt="Culturally diverse student thriving with appropriate, responsive testing"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Traditional identification methods frequently fail to capture giftedness in marginalized populations, requiring specialized assessment strategies to uncover masked potential.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <ShieldCheck className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Twice-Exceptional (2e)</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">2e students have both giftedness and a disability (like Dyslexia or ADHD). Their scores often show massive "scatter" (extreme highs and extreme lows). Evaluators must look beyond the average score to identify both the gift and the disability simultaneously.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Globe className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Cultural & Economic Diversity</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Poverty can mask giftedness due to limited academic vocabulary and enrichment. Culturally responsive identification heavily utilizes nonverbal reasoning tests, local norms, and dynamic assessment to identify true cognitive potential over mere developed achievement.</p>
              </div>
            </div>
          </div>

          {/* Guidelines Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Best Practices & Domain Specifics</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-diagnosis-guidelines-hero.webp"
              alt="Multidisciplinary team of educators reviewing a holistic student profile"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Activity className="text-[#2abcd4] w-5 h-5" /> Domain-Specific Talent
                </h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex items-start gap-2">
                    <CheckCircle className="text-[#0A9DC4] w-4 h-4 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-700"><strong>Math/Verbal:</strong> Assessed via above-level testing (SAT/ACT in middle school) or complex, novel problem-solving tasks.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex items-start gap-2">
                    <CheckCircle className="text-[#0A9DC4] w-4 h-4 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-700"><strong>Artistic/Leadership:</strong> Best assessed through rigorous portfolio reviews, expert-evaluated auditions, and structured peer-nomination surveys.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Scale className="text-[#2abcd4] w-5 h-5" /> Ethical Guidelines
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  The National Association for Gifted Children (NAGC) standards explicitly warn against common identification pitfalls:
                </p>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Never over-rely on a single measure or hard cut-off score.</li>
                  <li>Do not ignore evidence of giftedness simply because it doesn't fit the expected "high-achiever" academic pattern.</li>
                  <li>Identification is not a one-time event; it must be an ongoing, continuous process.</li>
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
                <li>Baum, S. M., Schader, R. M., & Owen, S. V. (2017). To be gifted and learning disabled: Strength-based strategies. <i>Prufrock Press</i>.</li>
                <li>Ford, D. Y. (2013). Recruiting and retaining culturally different students in gifted education. <i>Prufrock Press</i>.</li>
                <li>National Association for Gifted Children. (2010). NAGC Pre-K-Grade 12 Gifted Programming Standards. <i>Author</i>.</li>
                <li>Lohman, D. F. (2005). The role of nonverbal ability tests in identifying academically gifted students. <i>Gifted Child Quarterly</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('giftedness')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About Giftedness
        </button>
      </div>

    </article>
  );
}