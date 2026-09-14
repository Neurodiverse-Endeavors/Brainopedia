import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Zap, BookOpen, Users, Brain, Heart, ShieldCheck, Award, Laptop, Home, Wrench, CheckCircle, Lightbulb } from 'lucide-react';

interface GiftednessSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function GiftednessSupport({ setCurrentArticle, initialTab }: GiftednessSupportProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'acceleration');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Giftedness: Support & Management
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
          onClick={() => setActiveTab('acceleration')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'acceleration'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Acceleration & Enrichment
        </button>
        <button
          onClick={() => setActiveTab('emotional')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'emotional'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Grouping & Social-Emotional
        </button>
        <button
          onClick={() => setActiveTab('programs')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'programs'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Populations & Programs
        </button>
      </div>

      {/* ==========================================
          TAB 1: ACCELERATION & ENRICHMENT
      ========================================== */}
      {activeTab === 'acceleration' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Acceleration Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Acceleration Strategies</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-support-acceleration.webp"
              alt="Student accessing advanced, higher-level content"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Supporting gifted individuals requires differentiated educational programming that matches their actual cognitive readiness rather than their chronological age. Acceleration matches instruction with the student's pace of learning.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Zap className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Grade & Subject Acceleration</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li><strong>Whole-Grade Skipping:</strong> Allows students to move ahead. Tools like the Iowa Acceleration Scale provide systematic frameworks for decision-making.</li>
                    <li><strong>Subject-Specific:</strong> Advancing in a specific strength area (like mathematics) while remaining with age peers for other subjects.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <BookOpen className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Compacting & Advanced Credit</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li><strong>Curriculum Compacting:</strong> Eliminating material already mastered. Research demonstrates that gifted students can often master 40-50% of standard curriculum material before it's even taught.<sup className="text-[#10b981] font-bold ml-0.5">1</sup></li>
                    <li><strong>AP & Dual Enrollment:</strong> Providing college-level content in high school to ensure genuine intellectual challenge.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Enrichment Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Enrichment & Curriculum Frameworks</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-support-enrichment-hero.webp"
              alt="Classroom visual showing independent inquiry and problem-based learning"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Enrichment expands breadth and depth, engaging gifted learners in higher-order thinking skills through rigorous curriculum models.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <BookOpen className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Differentiated Instruction</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Modifying content, process, and products to provide greater depth, complexity, and abstraction, as well as opportunities for independent student-led research investigations.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Wrench className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Curriculum Models</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Using frameworks like VanTassel-Baska's Integrated Curriculum Model (ICM) or Kaplan's Depth and Complexity model to explore ethics, patterns, trends, and big ideas.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Lightbulb className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Higher-Order Thinking</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Routinely engaging students at the highest levels of Bloom's Taxonomy—specifically focusing on analysis, evaluation, and creation rather than rote memorization.</p>
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
                <p>1. Reis, S. M., & Renzulli, J. S. (1992). Using curriculum compacting to challenge the above-average. <i>Educational Leadership</i>. 50(2), 51-57.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Colangelo, N., Assouline, S. G., & Gross, M. U. M. (Eds.). (2004). A nation deceived: How schools hold back America's brightest students. <i>Belin-Blank Center</i>.</li>
                <li>Assouline, S. G., Colangelo, N., Lupkowski-Shoplik, A., Lipscomb, J., & Forstadt, L. (2009). Iowa Acceleration Scale (3rd ed.). <i>Great Potential Press</i>.</li>
                <li>Tomlinson, C. A. (2001). How to differentiate instruction in mixed-ability classrooms (2nd ed.). <i>ASCD</i>.</li>
                <li>VanTassel-Baska, J., & Stambaugh, T. (2006). Comprehensive curriculum for gifted learners (3rd ed.). <i>Allyn & Bacon</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: GROUPING & SOCIAL-EMOTIONAL
      ========================================== */}
      {activeTab === 'emotional' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Grouping Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Grouping Strategies</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-support-grouping.webp"
              alt="Cluster grouping setting where high-ability peers collaborate"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Grouping gifted students with intellectual peers is one of the most effective ways to foster academic engagement and social well-being, reducing the isolation of being the "only one" in a standard classroom.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Users className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Cluster Grouping</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Placing 5 to 8 high-ability students together in a mixed-ability classroom with a teacher trained in gifted education. This maintains a heterogeneous environment while making differentiation practical.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <ShieldCheck className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Full-Time Programs</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Self-contained gifted classrooms or specialized schools allow for a radically fast-paced curriculum and immediate, effortless peer socialization.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Counseling Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Social-Emotional Support & Counseling</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-support-counseling-hero.webp"
              alt="Supportive counseling environment helping a student navigate perfectionism"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Addressing affective development is just as important as academic rigor. Gifted students require targeted guidance to navigate perfectionism, intensity, and underachievement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Heart className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Counseling & Guidance</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">School counselors trained specifically in gifted education help students manage emotional intensities, peer dynamics, and identity development through bibliotherapy and affective curriculum.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Brain className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Addressing Perfectionism</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Interventions using cognitive-behavioral strategies to normalize mistakes, teach a growth mindset, and help students distinguish between healthy striving and paralyzing perfectionism.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Award className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Reversing Underachievement</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Reversing underachievement by discovering root causes, building trust-based student-teacher relationships, teaching executive functioning skills, and restoring appropriate intellectual challenge.</p>
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
                <li>Steenbergen-Hu, S., Makel, M. C., & Olszewski-Kubilius, P. (2016). What one hundred years of research says about the effects of ability grouping and acceleration. <i>Review of Educational Research</i>.</li>
                <li>Peterson, J. S. (2015). School counselors and gifted kids: Respecting both cognitive and affective. <i>Journal of Counseling & Development</i>.</li>
                <li>Neihart, M., Reis, S. M., Robinson, N. M., & Moon, S. M. (Eds.). (2002). The social and emotional development of gifted children. <i>Prufrock Press</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: POPULATIONS & PROGRAMS
      ========================================== */}
      {activeTab === 'programs' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Populations Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Supporting Specific Populations</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-support-populations.webp"
              alt="Diverse twice-exceptional students thriving with dual differentiation support"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Giftedness manifests differently across diverse populations. Ensuring equitable support requires customized interventions for twice-exceptional learners, low-income students, culturally diverse groups, and highly gifted youth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <ShieldCheck className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Twice-Exceptional (2e)</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Requires dual differentiation: accommodating their learning disability while providing rigorous intellectual challenge in their strength areas. Collaboration between gifted and special educators is vital.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Home className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Diversity & Disadvantaged</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Culturally responsive teaching, active mentorship, and scholarship programs (like the Jack Kent Cooke Foundation) help bridge resource gaps for low-income and minority gifted students.</p>
              </div>
            </div>
          </div>

          {/* Out-of-School Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Out-of-School Programming & Mentorship</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-support-outofschool-hero.webp"
              alt="Summer residential program or robotics competition with intellectual peers"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Laptop className="text-[#2abcd4] w-5 h-5" /> Talent Searches & Programs
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  University-sponsored summer residential programs and talent search organizations provide intensive academic immersions where students connect with true intellectual peers.
                </p>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Academic competitions (Science and Math Olympiads, robotics, debate) foster deep community and motivation.</li>
                  <li>Online distance education platforms provide access to advanced coursework unavailable in local school districts.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="text-[#2abcd4] w-5 h-5" /> Mentorship & Family Support
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Pairing gifted youth with professional mentors in their field of interest offers authentic career exploration and advanced skill development.
                </p>
                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                  <p className="text-xs text-slate-700"><strong>Parent Advocacy:</strong> Parent support groups and organizations like SENG (Supporting Emotional Needs of the Gifted) offer invaluable community, education, and guidance.</p>
                </div>
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
                <li>Baum, S. M., Schader, R. M., & Owen, S. V. (2017). To be gifted and learning disabled. <i>Prufrock Press</i>.</li>
                <li>Olszewski-Kubilius, P. (2007). The role of summer programs in developing the talents of gifted students. <i>Prufrock Press</i>.</li>
                <li>Webb, J. T., Gore, J. L., Amend, E. R., & DeVries, A. R. (2007). A parent's guide to gifted children. <i>Great Potential Press</i>.</li>
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