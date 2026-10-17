import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Zap, Search, Activity, AlertTriangle, Target, BookOpen, Heart } from 'lucide-react';

interface TwiceExceptionalOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TwiceExceptionalOverview({ setCurrentArticle, initialTab }: TwiceExceptionalOverviewProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'definition';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Twice-Exceptional (2e): Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('twice-exceptional')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About 2e
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('twice-exceptional')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About 2e
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('definition')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'definition'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Definition & Combinations
        </button>
        <button
          onClick={() => handleTabChange('paradox')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'paradox'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Paradox & Profile
        </button>
        <button
          onClick={() => handleTabChange('frameworks')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'frameworks'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Strengths & Frameworks
        </button>
      </div>

      {/* ==========================================
          TAB 1: DEFINITION & COMBINATIONS (Standard Icons)
      ========================================== */}
      {activeTab === 'definition' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Definition Card (Cyan) - Centered Hero + Stacked Icons */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">What is Twice-Exceptionality?</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-overview-definition.webp"
              alt="Student excelling in complex robotics while struggling with a basic worksheet"
              className="block mx-auto w-64 max-w-full h-auto rounded-md border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Twice-exceptional (2e) individuals are those who demonstrate exceptional intellectual ability or talent in one or more domains, while simultaneously exhibiting a learning, developmental, emotional, or physical disability. They exist on the extremes of the bell curve on both ends.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Search className="text-[#0A9DC4] w-6 h-6 mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Historical Context</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Recognition emerged in the 1980s when early research by Joanne Whitmore documented highly gifted students with severe learning disabilities who were systematically under-identified for both their gifts and their disabilities.<sup className="text-[#10b981] font-bold ml-0.5">1</sup></p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Activity className="text-[#0A9DC4] w-6 h-6 mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Prevalence</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Exact prevalence is difficult to pin down due to misdiagnosis, but clinical research suggests 2% to 5% of all students may be twice-exceptional.<sup className="text-[#10b981] font-bold ml-0.5">2</sup> Some estimates indicate that 14% to 20% of all gifted students have a co-occurring learning disability.<sup className="text-[#10b981] font-bold ml-0.5">3</sup></p>
              </div>
            </div>
          </div>

          {/* Combinations Card (Yellow) - Centered Hero + Circular Icon Badges */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Common Combinations</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-overview-combinations-hero.webp"
              alt="Venn diagram showing Giftedness intersecting with ADHD, Dyslexia, and Autism"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Twice-exceptionality is an umbrella term. The specific needs of a 2e student depend entirely on how their unique cognitive gifts interact with their specific disability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#fffbeb] text-[#ffd166] flex items-center justify-center mb-3 shadow-sm border border-[#ffd166] border-opacity-50">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Gifted + LD</h3>
                <p className="text-xs text-slate-700 leading-relaxed">High intellectual ability co-occurring with specific learning disabilities like Dyslexia, Dyscalculia, or Dysgraphia. They may reason at a collegiate level but read at a 2nd-grade level.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#fffbeb] text-[#ffd166] flex items-center justify-center mb-3 shadow-sm border border-[#ffd166] border-opacity-50">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Gifted + ADHD</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Exceptional problem-solving abilities masked by severe executive dysfunction, inattention, or impulsivity that interferes with consistent academic performance.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#fffbeb] text-[#ffd166] flex items-center justify-center mb-3 shadow-sm border border-[#ffd166] border-opacity-50">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Gifted + Autism</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Remarkable talents in specific domains (like math or music) combined with significant challenges navigating unwritten social rules, sensory input, and adaptive functioning.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#fffbeb] text-[#ffd166] flex items-center justify-center mb-3 shadow-sm border border-[#ffd166] border-opacity-50">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Gifted + Emotional</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The profound sensitivity associated with giftedness triggering or exacerbating clinical emotional disorders, such as severe anxiety, depression, or OCD.</p>
              </div>
            </div>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Whitmore, J. R. (1980). <i>Giftedness, conflict, and underachievement</i>. Allyn & Bacon.</p>
                <p>2. Foley-Nicpon, M., Allmon, A., Sieck, B., & Stinson, R. D. (2011). Empirical investigation of twice-exceptionality: Where have we been and where are we going? <i>Gifted Child Quarterly</i>.</p>
                <p>3. McCoach, D. B., Kehle, T. J., Bray, M. A., & Siegle, D. (2001). Best practices in the identification of gifted students with learning disabilities. <i>Psychology in the Schools</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>National Association for Gifted Children. (2013). <i>Position statement: Students with gifts and talents who have learning disabilities</i>. NAGC.</li>
                <li>Brody, L. E., & Mills, C. J. (1997). Gifted children with learning disabilities: A review of the issues. <i>Journal of Learning Disabilities</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: PARADOX & PROFILE (Numbered Badges & Horizontal Bars)
      ========================================== */}
      {activeTab === 'paradox' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Paradox Card (Slate) - Centered Hero + Horizontal Bars with Numbers */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Masking Paradox</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-overview-paradox.webp"
              alt="Conceptual visual of overlapping lenses masking the original colors"
              className="block mx-auto w-64 max-w-full h-auto rounded-md border border-gray-300 mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-8">
              The defining struggle of twice-exceptionality is the "masking effect." High intelligence often compensates for the disability, resulting in average performance that hides both the giftedness <em>and</em> the disability from teachers.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-4 clear-both">
              <h3 className="text-[#0c264d] font-bold text-lg mb-2 text-center">Baum's Three Identification Patterns</h3>
              <p className="text-sm text-slate-600 text-center mb-6">Dr. Susan Baum famously identified three tragic patterns in how 2e students are perceived by the educational system:<sup className="text-[#10b981] font-bold ml-0.5">1</sup></p>
              
              <div className="space-y-4">
                {/* Horizontal Bar 1 */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md text-lg">1</div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0c264d] mb-1">Identified Gifted, Disability Ignored</h4>
                    <p className="text-xs text-slate-700 leading-relaxed">The student is in gifted classes but silently drowning due to a lack of accommodations, often labeled "lazy" or "careless."</p>
                  </div>
                </div>

                {/* Horizontal Bar 2 */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md text-lg">2</div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0c264d] mb-1">Identified Disabled, Giftedness Ignored</h4>
                    <p className="text-xs text-slate-700 leading-relaxed">The student is receiving special education services, but the low-level curriculum completely starves their high intellect.</p>
                  </div>
                </div>

                {/* Horizontal Bar 3 */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md text-lg">3</div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0c264d] mb-1">Neither Recognized</h4>
                    <p className="text-xs text-slate-700 leading-relaxed">The gift and disability perfectly mask each other. The student performs at "grade level" and flies entirely under the radar, never receiving enrichment or intervention.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile & Challenges Card (Cyan) - Centered Hero + Circled Icons */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Characteristics & Challenges</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-overview-profile-hero.webp"
              alt="Spiky cognitive profile graph showing extreme highs and lows"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              2e students experience a massive internal conflict. They are acutely aware of the gap between their high intellectual capacity and their physical or processing limitations, leading to deep frustration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd]">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2">The "Spiky" Cognitive Profile</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Unlike neurotypical peers who have relatively flat, even test scores, 2e students show massive "scatter" in cognitive testing. They may score in the 99th percentile for verbal reasoning but the 10th percentile for processing speed.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd]">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2">Underachievement & Misdiagnosis</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Because their academic performance is incredibly inconsistent, their gifts are frequently misinterpreted as ADHD, or their genuine learning disabilities are dismissed as laziness, leading to chronic underachievement and a refusal to participate.</p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Baum, S. (1990). <i>Gifted but learning disabled: A puzzling paradox</i>. Council for Exceptional Children.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Reis, S. M., & McCoach, D. B. (2000). The underachievement of gifted students: What do we know and where do we go? <i>Gifted Child Quarterly</i>.</li>
                <li>Webb, J. T., Amend, E. R., Webb, N. E., Goerss, J., Beljan, P., & Olenchak, F. R. (2005). <i>Misdiagnosis and dual diagnoses of gifted children and adults</i>. Great Potential Press.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: STRENGTHS & FRAMEWORKS (3D Accents, NO ICONS)
      ========================================== */}
      {activeTab === 'frameworks' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Strengths Card (Yellow) - Centered Hero + 3D Accent Cards */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Strengths & Resilience</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-overview-strengths.webp"
              alt="Visual representing out-of-the-box, compensatory problem solving"
              className="block mx-auto w-64 max-w-full h-auto rounded-md border border-[#ffd166] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-8">
              Despite their challenges, 2e individuals demonstrate remarkable resilience. Because their brains process information differently, they naturally develop sophisticated workarounds and out-of-the-box solutions that neurotypical peers would never consider.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 clear-both">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2">Unique Contributions</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The combination of high ability and a learning difference creates highly innovative thinking. Many of history's most successful innovators, artists, and scientists (such as Albert Einstein and Temple Grandin) are widely believed to have been twice-exceptional.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2">Compensatory Strategies</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">2e students frequently develop incredibly advanced adaptive approaches to bypass their disabilities. This demonstrates profound cognitive flexibility and perseverance in the face of academic roadblocks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Frameworks Card (Slate) - Centered Hero + 3D Accent Layout */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Theoretical Frameworks</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-overview-frameworks-hero.webp"
              alt="Visual celebrating a neurodiverse brain and strength-based learning"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-gray-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-3 border-b border-gray-100 pb-2">Strength-Based Approach</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Pioneered by researchers like Baum, Schader, and Owen, this model dictates that schools must focus on actively developing the student's <em>talents</em> first, rather than focusing solely on remediating their deficits.<sup className="text-[#10b981] font-bold ml-0.5">1</sup></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-3 border-b border-gray-100 pb-2">Dual Differentiation</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The talent development framework recognizes that 2e students explicitly need *both* at the same time: advanced acceleration for their gifts, and robust IEP accommodations for their disabilities.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-3 border-b border-gray-100 pb-2">Neurodiversity</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Contemporary frameworks view twice-exceptionality as representing entirely valid, different ways of thinking and learning, valuing the unique cognitive profile rather than treating the disability as something to be "cured."</p>
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
                <p>1. Baum, S. M., Schader, R. M., & Owen, S. V. (2017). <i>To be gifted and learning disabled: Strength-based strategies for helping twice-exceptional students with LD, ADHD, ASD, and more</i> (3rd ed.). Prufrock Press.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Grandin, T., & Panek, R. (2013). <i>The autistic brain: Thinking across the spectrum</i>. Houghton Mifflin Harcourt.</li>
                <li>Armstrong, T. (2010). <i>Neurodiversity: Discovering the extraordinary gifts of autism, ADHD, dyslexia, and other brain differences</i>. Da Capo Press.</li>
                <li>Reis, S. M., Baum, S. M., & Burke, E. (2014). An operational definition of twice-exceptional learners: Implications and applications. <i>Gifted Child Quarterly</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('twice-exceptional')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About 2e
        </button>
      </div>

    </article>
  );
}