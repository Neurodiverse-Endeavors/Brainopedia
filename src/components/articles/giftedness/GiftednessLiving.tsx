import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Heart, Users, ShieldAlert, Sparkles, Compass, Target, GraduationCap, Briefcase, Activity, Map, Lightbulb, CheckCircle } from 'lucide-react';

interface GiftednessLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function GiftednessLiving({ setCurrentArticle, initialTab }: GiftednessLivingProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'identity');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Living with Giftedness
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
          onClick={() => setActiveTab('identity')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'identity'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Identity & Well-being
        </button>
        <button
          onClick={() => setActiveTab('social')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'social'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Social & Relationships
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
      </div>

      {/* ==========================================
          TAB 1: IDENTITY & WELL-BEING
      ========================================== */}
      {activeTab === 'identity' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Identity Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Identity Development</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-living-identity.webp"
              alt="Young adult engaged in deep existential thought and reflection"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Developing a healthy identity as a gifted individual involves recognizing and accepting one's extreme cognitive abilities without developing arrogance or excessive modesty. Because they process the world differently, many struggle with feeling fundamentally "alien" or disconnected from society.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <ShieldAlert className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Imposter Syndrome</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Highly gifted individuals frequently experience imposter syndrome—feeling like a fraud despite overwhelming evidence of competence, largely driven by perfectionism and the awareness of how much they *don't* know.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Compass className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Multipotentiality</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Having intense interests and high abilities in multiple, unrelated domains. While exciting, this often leads to "analysis paralysis" when trying to commit to a single college major or career path.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Emotional Well-being Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Emotional Well-Being & Growth</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-living-wellbeing-hero.webp"
              alt="Visual representing mindfulness, resilience, and managing emotional intensity"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The gifted mind is a high-performance engine. Without the right emotional maintenance, it is prone to overheating. Managing intensity, perfectionism, and existential anxiety are lifelong practices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Activity className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Managing Intensity</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Learning to reframe intense emotional and sensory experiences as a strength (passion, deep empathy) rather than a flaw (being "too sensitive" or "too dramatic").</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Target className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Existential Depression</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Gifted individuals often grapple with the meaning of life, death, and systemic injustice. This requires engaging in highly meaningful pursuits and finding community with others who share these heavy concerns.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Brain className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Mindfulness & Burnout</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The constantly racing mind benefits profoundly from mindfulness and presence. Setting strict boundaries and saying "no" to opportunities protects the individual from chronic burnout.</p>
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
                <li>Neihart, M., Reis, S. M., Robinson, N. M., & Moon, S. M. (Eds.). (2002). The social and emotional development of gifted children: What do we know? <i>Prufrock Press</i>.</li>
                <li>Webb, J. T. (2013). Searching for meaning: Idealism, bright minds, disillusionment, and hope. <i>SENG</i>.</li>
                <li>Rysiew, K. J., Shore, B. M., & Leeb, R. T. (1999). Multipotentiality, giftedness, and career choice: A review. <i>Journal of Counseling & Development</i>.</li>
                <li>Sakulku, J., & Alexander, J. (2011). The impostor phenomenon. <i>International Journal of Behavioral Science</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SOCIAL & RELATIONSHIPS
      ========================================== */}
      {activeTab === 'social' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Relationships Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Social Relationships</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-living-social.webp"
              alt="Friends or a romantic couple engaged in an intense, deeply engaging conversation"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              For a gifted individual, socializing isn't just about having fun; it's about the deep craving for intellectual engagement and finding people who naturally follow their rapid, complex leaps of logic.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Users className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Intellectual Peers</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Gifted individuals desperately need peers who share their thinking patterns. This often means finding friends based on shared intellectual intensity rather than chronological age. Quality matters far more than quantity.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Heart className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Romantic Relationships</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">In romance, gifted adults require partners who appreciate deep, philosophical conversation, respect their need to process intensely, and share core values. Matching IQ scores is far less important than matching emotional respect.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Community & Lifespan Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Community & The Lifespan</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-living-community-hero.webp"
              alt="Diverse community group connecting over shared intellectual passions or advocacy"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Giftedness doesn't disappear when a person graduates high school. It is a lifelong trajectory that requires constant adaptation, community finding, and advocacy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Map className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Navigating Contexts</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Gifted adults frequently "code-switch," constantly adjusting their vocabulary and topic depth depending on the audience to avoid intimidating others. This adaptability is a skill, but can be highly exhausting.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Sparkles className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Advocacy & Justice</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">A core trait of the gifted profile is a burning need for justice. Channeling this intense concern into constructive action—through careers, volunteer work, or advocacy—provides a highly necessary outlet.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Users className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Support Networks</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Organizations like Mensa and SENG, as well as specialized online forums, are critical for adults to find a "tribe" that understands the lived experience of neurodivergent intensity.</p>
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
                <li>Janos, P. M., & Robinson, N. M. (1985). Psychosocial development in intellectually gifted children. <i>American Psychological Association</i>.</li>
                <li>Gross, M. U. M. (2002). Social and emotional issues for exceptionally intellectually gifted students. <i>Prufrock Press</i>.</li>
                <li>Cross, T. L., & Cross, J. R. (2015). Clinical and mental health issues in counseling the gifted individual. <i>Journal of Counseling & Development</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: EDUCATION & CAREER
      ========================================== */}
      {activeTab === 'career' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Educational Journey Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Educational Journey</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-living-education.webp"
              alt="Student navigating a self-directed learning journey with excitement"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The educational journey for a gifted individual is rarely linear. It requires constant advocacy to ensure they are placed in environments that stimulate their intellect rather than extinguishing their natural love of learning.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <GraduationCap className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">College Selection</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Highly selective, brand-name colleges aren't the only path to success. Gifted students thrive when they find a campus culture that matches their specific intellectual interests, personal values, and need for autonomy.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <BookOpen className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Lifelong Learning</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Learning does not end with formal degrees. Gifted adults must continue to intellectually stimulate themselves through professional development, reading, and deep-dive hobbies to maintain life satisfaction.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Career & Thriving Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Career, Innovation & Thriving</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-living-career-hero.webp"
              alt="Gifted adult thriving in a dynamic, innovative work environment"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Giftedness is neither a guarantee of wealth nor a burden to bear; it is simply a unique operating system. Thriving means finding environments that allow that system to run at full capacity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Briefcase className="text-[#2abcd4] w-5 h-5" /> Workplace Dynamics
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Gifted adults often experience severe frustration with slow corporate processes, bureaucracy, and rigid authority figures. They thrive in work environments that value rapid innovation, provide complex intellectual challenges, and allow for high degrees of independence. Because of multipotentiality, they may change careers multiple times.
                </p>
                <div className="bg-white p-3 rounded-lg border border-[#0c264d] border-opacity-20 shadow-sm flex items-start gap-2">
                  <Lightbulb className="text-[#0c264d] w-4 h-4 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-700">Many are naturally drawn to entrepreneurship, which offers the ultimate autonomy, creativity, and ability to pursue a singular vision without bureaucratic red tape.</p>
                </div>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="text-[#2abcd4] w-5 h-5" /> Defining Success
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Not all gifted individuals need to pursue prestigious or high-profile careers. Personal fulfillment and alignment with core values matter far more than external markers of success.
                </p>
                <div className="bg-white p-3 rounded-lg border border-[#0c264d] border-opacity-20 shadow-sm flex items-start gap-2">
                  <Activity className="text-[#0c264d] w-4 h-4 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-700">Terman's famous longitudinal study found that life satisfaction in gifted adults related far more to personal relationships and life balance than to professional achievement alone.<sup className="text-[#10b981] font-bold ml-0.5">1</sup></p>
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
                <p>1. Oden, M. H. (1968). The fulfillment of promise: 40-year follow-up of the Terman gifted group. <i>Genetic Psychology Monographs</i>. 77(1), 3-93.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Subotnik, R. F., Olszewski-Kubilius, P., & Worrell, F. C. (2011). Rethinking giftedness and gifted education: A proposed direction forward. <i>Psychological Science in the Public Interest</i>.</li>
                <li>Kerr, B. A., & Sodano, S. (2003). Career assessment with intellectually gifted students. <i>Journal of Career Assessment</i>.</li>
                <li>Ibarra, H. (2003). Working identity: Unconventional strategies for reinventing your career. <i>Harvard Business School Press</i>.</li>
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