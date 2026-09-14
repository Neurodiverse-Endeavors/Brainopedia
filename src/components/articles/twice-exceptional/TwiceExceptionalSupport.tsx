import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Scale, Brain, Map, FastForward, Laptop, BookOpen, Heart, Users, Target, ShieldCheck, FileText, Home, GraduationCap, Briefcase, CheckCircle, Lightbulb } from 'lucide-react';

interface TwiceExceptionalSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TwiceExceptionalSupport({ setCurrentArticle, initialTab }: TwiceExceptionalSupportProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'academic');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* GLOBAL STYLE FOR CITATIONS */}
      <style>
        {`
          sup {
            color: #10b981;
            font-weight: bold;
            margin-left: 2px;
          }
        `}
      </style>

      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Twice-Exceptional: Support & Management
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
          onClick={() => setActiveTab('academic')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'academic'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Academic Interventions
        </button>
        <button
          onClick={() => setActiveTab('emotional')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'emotional'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Social & Emotional
        </button>
        <button
          onClick={() => setActiveTab('advocacy')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'advocacy'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Advocacy & Transitions
        </button>
      </div>

      {/* ==========================================
          TAB 1: ACADEMIC INTERVENTIONS
      ========================================== */}
      {activeTab === 'academic' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Differentiation Card (Cyan) - Uses Float Image + flow-root */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Dual Differentiation Framework</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-support-differentiation.webp"
              alt="Teacher providing advanced learning materials alongside assistive technology"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Supporting twice-exceptional students requires a complete refusal to compromise. Educators must provide "dual differentiation"—simultaneously providing rigorous acceleration for the student's gifts while providing robust accommodations for their disabilities.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Brain className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Strength-Based Approach</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Focus intensely on developing their specific talents first. Nurturing their intellectual gifts builds the confidence and motivation they desperately need to tackle their areas of weakness.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Scale className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Addressing Both Exceptionialities</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Neither the gift nor the disability should be neglected. Students need access to complex, abstract content through accessible formats (like audiobooks) alongside explicit skill remediation.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Map className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Placement Options</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">While many succeed in general education with heavy collaboration between gifted and special educators, specialized 2e programs or "gifted classrooms with accommodations" often provide the best peer connections.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Modifications Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Modifications & Specific Strategies</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-support-interventions-hero.webp"
              alt="Student engaging in complex problem-based learning utilizing alternative response formats"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <FastForward className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Compacting</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Eliminating content already mastered. Research shows gifted students can demonstrate mastery of 40-50% of regular curriculum material before it is even taught.<sup>1</sup> This frees up time for necessary remediation.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Laptop className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Assistive Technology</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Tech is an equalizer, not a crutch. Speech-to-text, audiobooks, and calculators allow students to instantly bypass their processing weaknesses and demonstrate their advanced, collegiate-level thinking.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <BookOpen className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Targeted Interventions</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">For dysgraphia, allow alternative response formats (like oral presentations or building models). For executive dysfunction, explicitly teach the organizational systems that neurotypical students absorb implicitly.</p>
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
                <p>1. Reis, S. M., Burns, D. E., & Renzulli, J. S. (1992). Curriculum compacting: The complete guide to modifying the regular curriculum for high ability students. <i>Creative Learning Press</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Baum, S. M., Cooper, C. R., & Neu, T. W. (2001). Dual differentiation: An approach for meeting the curricular needs of gifted students with learning disabilities. <i>Psychology in the Schools</i>.</li>
                <li>Foley-Nicpon, M. (2013). Gifted child quarterly and talent development for gifted students with co-occurring disabilities. <i>Gifted Child Quarterly</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SOCIAL & EMOTIONAL
      ========================================== */}
      {activeTab === 'emotional' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Emotional Card (Slate) - Uses Float Image + flow-root */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Social-Emotional Support</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-support-emotional.webp"
              alt="School counselor having a supportive conversation with a student about perfectionism"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The internal experience of twice-exceptionality is frequently exhausting. Without targeted affective support, the gap between their intellect and their output can easily breed severe depression and anxiety.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Heart className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Targeted Counseling</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">2e students require counselors who understand *both* exceptionalities. Interventions heavily utilize cognitive-behavioral strategies to tackle clinical perfectionism, imposter syndrome, and the fear of failure.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <ShieldCheck className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Building Self-Understanding</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Explicitly teaching the student about their own 2e profile is transformative. Understanding the exact neurological reasons why they are "smart but struggling" promotes self-acceptance and crucial self-advocacy skills.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Peers Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Peer Connection & Social Identity</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-support-peers-hero.webp"
              alt="Cluster of 2e students collaborating happily in a specialized program"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Users className="text-[#2abcd4] w-5 h-5" /> Finding Intellectual Peers
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  2e students frequently feel like they belong nowhere—too "disabled" for the gifted kids, and too "gifted" for the special education kids.
                </p>
                <div className="bg-white p-3 rounded-lg border border-[#2abcd4] border-opacity-30 shadow-sm">
                  <p className="text-xs text-slate-700">Connecting them with other 2e students (through specialized summer camps, talent development programs, or online communities) instantly reduces isolation and validates their deeply contradictory lived experiences.</p>
                </div>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Target className="text-[#2abcd4] w-5 h-5" /> Social Skills Training
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  For 2e students with Autism or ADHD, social interaction can be deeply confusing despite their high intelligence.
                </p>
                <div className="bg-white p-3 rounded-lg border border-[#2abcd4] border-opacity-30 shadow-sm">
                  <p className="text-xs text-slate-700">They benefit massively from explicit social skills instruction that respects their advanced cognitive abilities—explaining the *logic* and *theory* behind social interactions, rather than just demanding blind compliance.</p>
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
                <li>King, E. W. (2005). Addressing the social and emotional needs of twice-exceptional students. <i>Teaching Exceptional Children</i>.</li>
                <li>Neihart, M. (2008). Identifying and providing services to twice exceptional children. In <i>Handbook of giftedness in children</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: ADVOCACY & TRANSITIONS
      ========================================== */}
      {activeTab === 'advocacy' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Advocacy Card (Yellow) - Uses Float Image + flow-root */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Educational Planning & Legal Rights</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-support-advocacy.webp"
              alt="Collaborative IEP meeting with parents and dual-specialists"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Ensuring a 2e student's success requires aggressive, informed advocacy from parents to secure legally binding documentation that addresses both sides of the bell curve.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <FileText className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">IEPs & 504 Plans</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">If eligible under IDEA or Section 504, a student's IEP must explicitly contain goals targeting their areas of weakness <em>while legally ensuring</em> access to advanced, gifted-level curriculum.<sup>1</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Home className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Parent Advocacy</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Parents must often educate the educators. Balancing high expectations for their child's intellect with realistic patience for their disability is challenging, making parent support groups vital.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Transitions Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Programs, Transitions & Beyond</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-support-transitions-hero.webp"
              alt="Older 2e student transitioning to college, utilizing self-advocacy skills"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Lightbulb className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Promising Programs</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Organizations like the Jack Kent Cooke Foundation explicitly provide critical scholarship support and mentoring to bridge the gap for low-income and culturally diverse 2e students.<sup>2</sup></p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <CheckCircle className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Universal Design</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The Universal Design for Learning (UDL) framework naturally benefits 2e students by providing multiple, built-in means of representation and expression, reducing classroom barriers.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <GraduationCap className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">College & Career</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Transitioning to post-secondary life requires students to master self-advocacy. Career planning should heavily leverage their immense strengths while steering them toward flexible work environments.</p>
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
                <p>1. Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
                <p>2. Wyner, J. S., Bridgeland, J. M., & DiIulio, J. J., Jr. (2007). Achievement trap: How America is failing millions of high-achieving students from lower-income families. <i>Jack Kent Cooke Foundation</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Assouline, S. G., & Whiteman, C. S. (2011). Twice-exceptionality: Implications for school psychologists in the post-IDEA 2004 era. <i>Journal of Applied School Psychology</i>.</li>
                <li>Edyburn, D. L. (2004). 2003 in review: A synthesis of the special education technology literature. <i>Journal of Special Education Technology</i>.</li>
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