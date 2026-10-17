import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, ShieldAlert, Users, Heart, MessageSquare, Smartphone, CheckCircle, Sparkles } from 'lucide-react';

interface TwiceExceptionalLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TwiceExceptionalLiving({ setCurrentArticle, initialTab }: TwiceExceptionalLivingProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'identity';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

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
          Living with Twice-Exceptionality
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
          onClick={() => handleTabChange('identity')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'identity'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Identity & Relationships
        </button>
        <button
          onClick={() => handleTabChange('career')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'career'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Education & Career
        </button>
        <button
          onClick={() => handleTabChange('wellbeing')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'wellbeing'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Well-being & Management
        </button>
      </div>

      {/* ==========================================
          TAB 1: IDENTITY & RELATIONSHIPS
      ========================================== */}
      {activeTab === 'identity' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Identity Card (Cyan) - Centered Hero + Stacked Icons */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Identity & Self-Understanding</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-living-identity.webp"
              alt="Young adult engaged in deep existential thought and reflection"
              className="block mx-auto w-64 max-w-full h-auto rounded-md border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Developing a healthy identity as a 2e individual requires integrating two seemingly contradictory realities. You are not defined solely by your exceptional gifts, nor are you defined solely by your disabling challenges—you are defined by the complex interplay of both.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Brain className="text-[#0A9DC4] w-6 h-6 mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">The Internal Experience</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Many 2e individuals describe feeling profoundly "different" from both typical learners and from neurotypical gifted peers. Understanding that this internal contradiction is a shared, valid neurological experience often brings massive relief.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <ShieldAlert className="text-[#0A9DC4] w-6 h-6 mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Imposter Syndrome</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Because your disabilities fuel deep self-doubt, accomplishments often feel unearned or "faked." Actively recognizing this pattern is the first step to dismantling imposter syndrome.</p>
              </div>
            </div>
          </div>

          {/* Relationships Card (Yellow) - Centered Hero + Navy Circular Icon Badges */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Relationships & Community</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-living-relationships.webp"
              alt="Friends connecting deeply through shared neurodivergent experiences"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Finding people who appreciate your intense intellectual abilities while simultaneously accepting your processing or executive function challenges is critical for long-term happiness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Finding Your People</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Quality matters far more than quantity. Many 2e individuals feel most comfortable with others who are neurodiverse, gifted, or simply value intense, unfiltered authenticity.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Social Contexts</h3>
                <p className="text-xs text-slate-700 leading-relaxed">You likely shift between different social contexts constantly, adjusting your communication style and depth. This adaptability is a valuable social skill, even if it feels exhausting.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Romantic & Family</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Successful relationships involve partners who value intellectual engagement but respect your need for accommodations. In parenting, understanding your own profile prevents unrealistic expectations.</p>
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
                <li>Foley-Nicpon, M., Allmon, A., Sieck, B., & Stinson, R. D. (2011). Empirical investigation of twice-exceptionality: Where have we been and where are we going? <i>Gifted Child Quarterly</i>.</li>
                <li>Reis, S. M., Baum, S. M., & Burke, E. (2014). An operational definition of twice-exceptional learners: Implications and applications. <i>Gifted Child Quarterly</i>.</li>
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

          {/* Education Card (Yellow) - Centered Hero + Numbered Bars */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Educational Journey</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-living-education.webp"
              alt="Student navigating a college campus, utilizing their accommodations confidently"
              className="block mx-auto w-64 max-w-full h-auto rounded-md border border-[#ffd166] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The K-12 school system is famously difficult for 2e students who feel they don't fit into either gifted or special education boxes. However, higher education often provides the flexibility they have always craved.
            </p>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] text-lg">1</div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Self-Advocacy</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Learning to boldly communicate your needs, request specific accommodations, and decline services that don't fit your profile is the most important skill you can take into adulthood.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] text-lg">2</div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">College & Beyond</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Many 2e students truly thrive in college, where they can finally hyper-focus on their intense interests and choose accessible formats (like project-based courses instead of timed written exams).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Career Card (Navy) - Centered Hero + Pure 3D Accent Borders (NO ICONS/NO DOTS) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Career & Entrepreneurship</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-living-career.webp"
              alt="2e adult thriving in a dynamic, flexible entrepreneurial work environment"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Finding the Fit</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Career selection must ruthlessly leverage your strengths while bypassing your challenges. Careers in tech, the arts, sciences, and specialized research heavily attract 2e individuals.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Entrepreneurship</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Many naturally gravitate toward self-employment. It offers the ultimate autonomy, allowing you to focus purely on creative, strategic thinking while delegating your areas of weakness.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Workplace Accommodations</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Under the ADA, you have the right to reasonable accommodations like assistive tech, flexible scheduling, or modified communication formats. Developing personalized organizational systems is vital.</p>
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
                <li>Baum, S. M., Schader, R. M., & Owen, S. V. (2017). <i>To be gifted and learning disabled: Strength-based strategies</i>. Prufrock Press.</li>
                <li>Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). Identifying alterable patterns in employment success for highly successful adults with learning disabilities. <i>Journal of Learning Disabilities</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: WELL-BEING & MANAGEMENT
      ========================================== */}
      {activeTab === 'wellbeing' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Well-being Card (Navy) - Centered Hero + Pure 3D Accent Borders (NO ICONS/NO DOTS) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Mental Health & Well-being</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-living-wellbeing.webp"
              alt="Calming visual representing mindfulness and finding peace amidst intensity"
              className="block mx-auto w-64 max-w-full h-auto rounded-md border border-[#0c264d] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Rates of anxiety and depression are elevated among 2e individuals due to chronic stress, perfectionism, and the daily exhaustion of navigating a world not built for their neurological profile.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0c264d]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2">Perfectionism & Compassion</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Developing self-compassion counters paralyzing perfectionism. Accepting that mistakes are a necessary part of being human, rather than evidence of a personal intellectual failure, builds resilience.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0c264d]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2">Therapy & Mindfulness</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Working with a therapist who specifically understands 2e is invaluable. Mindfulness practices, meditation, and creative expression help process the extreme emotional intensity characteristic of giftedness.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Thriving Card (Cyan) - Centered Hero + Horizontal Bars with Circled Icons */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Thriving & Practical Management</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-living-thriving.webp"
              alt="Successful adult confidently using organizational tech tools to manage daily life"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <div className="space-y-4 max-w-4xl mx-auto">
              
              <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-lg border border-[#2abcd4] border-opacity-30 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center font-bold shrink-0 shadow-sm border border-[#bae6fd] mt-1">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Tech & Organization</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Executive function challenges affect daily life permanently. Technology is transformative: productivity apps, digital calendars, and visual schedules allow you to manage challenges while leveraging your intellectual strengths.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-lg border border-[#2abcd4] border-opacity-30 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center font-bold shrink-0 shadow-sm border border-[#bae6fd] mt-1">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Building Support Systems</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Asking for help is a strength. Successful 2e adults intentionally build support systems and ruthlessly outsource or delegate tasks in their areas of weakness, freeing up their energy for their strengths.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-lg border border-[#2abcd4] border-opacity-30 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center font-bold shrink-0 shadow-sm border border-[#bae6fd] mt-1">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Authenticity & Legacy</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Living authentically—being true to yourself rather than trying to conform to neurotypical expectations—reduces stress. Many 2e individuals find their ultimate purpose by channeling their gifts into advocacy, innovation, and leaving a meaningful legacy.</p>
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
                <li>Dweck, C. S. (2006). <i>Mindset: The new psychology of success</i>. Random House.</li>
                <li>Armstrong, T. (2010). <i>Neurodiversity: Discovering the extraordinary gifts of autism, ADHD, dyslexia, and other brain differences</i>. Da Capo Press.</li>
                <li>Raskind, M. H., Goldberg, R. J., Higgins, E. L., & Herman, K. L. (1999). Patterns of change and predictors of success in individuals with learning disabilities. <i>Journal of Learning Disabilities</i>.</li>
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