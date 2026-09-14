import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { BookOpen, Split, Brain, LayoutTemplate, Activity, Network, Eye, Ear, Users, Target, History, Lightbulb, CheckCircle, Search } from 'lucide-react';

interface HyperlexiaOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function HyperlexiaOverview({ setCurrentArticle, initialTab }: HyperlexiaOverviewProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'definition');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Hyperlexia: Overview
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
          onClick={() => setActiveTab('definition')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'definition'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Definition & Types
        </button>
        <button
          onClick={() => setActiveTab('signs')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'signs'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Signs & Connections
        </button>
        <button
          onClick={() => setActiveTab('profile')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'profile'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Profile & Outlook
        </button>
      </div>

      {/* ==========================================
          TAB 1: DEFINITION & TYPES
      ========================================== */}
      {activeTab === 'definition' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Definition Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">What is Hyperlexia?</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-overview-definition.webp"
              alt="Toddler intensely focused on reading a complex book"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Hyperlexia is a fascinating neurodivergent profile characterized by an intense, precocious ability to decode and read written words at an incredibly early age—often before age 5, and entirely self-taught. However, this extraordinary reading skill exists alongside significant difficulties with spoken language comprehension and social communication. 
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <History className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Historical Context</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The term was first coined in 1967 by Silberberg and Silberberg to describe children who could read exceptionally well but struggled profoundly to understand the meaning of what they had just read.<sup className="text-[#10b981] font-bold ml-0.5">1</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Split className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">The Reading Split</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The absolute hallmark of hyperlexia is the vast gap between <em>decoding</em> (mechanically sounding out words perfectly) and <em>comprehension</em> (actually understanding the language).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Types Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Treffert's Three Types</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-overview-types-hero.webp"
              alt="Infographic showing three diverging developmental paths"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Not all hyperlexia is exactly the same. Dr. Darold Treffert and colleagues proposed a widely used framework identifying three distinct types of hyperlexia based on the child's broader developmental profile.<sup className="text-[#10b981] font-bold ml-0.5">2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] hover:-translate-y-1 transition-transform duration-200">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <BookOpen className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Type 1: Neurotypical</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Early, precocious readers who are otherwise typically developing. They have no underlying developmental or social concerns, and their reading comprehension naturally catches up to their advanced decoding over time.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] hover:-translate-y-1 transition-transform duration-200">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <Network className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Type 2: With Autism</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Hyperlexic reading combined with Autism Spectrum Disorder. This is the most common clinical presentation. Reading serves as an intense special interest, and social communication challenges persist.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] hover:-translate-y-1 transition-transform duration-200">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <Activity className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Type 3: Transient</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Children who initially show intense "autistic-like" symptoms (such as delayed speech and social withdrawal) alongside early reading, but whose autistic traits fade dramatically as they grow older.</p>
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
                <p>1. Silberberg, N. E., & Silberberg, M. C. (1967). Hyperlexia: Specific word recognition skills in young children. <i>Exceptional Children</i>. https://doi.org/10.1177/001440296703400104</p>
                <p>2. Treffert, D. A. (2011). Hyperlexia III: Separating 'autistic-like' behaviors from autistic disorder; Assessing children who read early or speak late. <i>Wisconsin Medical Society</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Grigorenko, E. L., Klin, A., & Volkmar, F. (2003). Annotation: Hyperlexia: Disability or superability? <i>Journal of Child Psychology and Psychiatry</i>.</li>
                <li>Nation, K. (1999). Reading skills in hyperlexia: A developmental perspective. <i>Psychological Bulletin</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SIGNS & CONNECTIONS
      ========================================== */}
      {activeTab === 'signs' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Signs Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Early Signs of Hyperlexia</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-overview-signs.webp"
              alt="Child reading flawlessly but showing confusion regarding meaning"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Hyperlexia is often first noticed when parents are stunned by a toddler's unexpected, untaught ability to read. However, these advanced reading skills are almost always accompanied by distinct delays in spoken language.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <LayoutTemplate className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Reading Behaviors</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>An intense, magnetic fascination with letters, numbers, and symbols before age 2.</li>
                    <li>Self-taught reading without any formal phonics instruction.</li>
                    <li>Rote memorization of long strings of written words.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Ear className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Language Behaviors</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Noticeably delayed conversational speech development.</li>
                    <li>Difficulty answering "W" questions (who, what, where, why).</li>
                    <li>Echolalia: Repeating words, phrases, or movie quotes exactly as heard.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Autism Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Relationship to Autism</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-overview-autism-hero.webp"
              alt="Venn diagram showing Hyperlexia and Autism intersecting"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Hyperlexia is not a formal diagnosis in the DSM-5. Because exact prevalence is unknown, it is considered rare, though research indicates a powerful connection with the autism spectrum.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-3 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Network className="text-[#0A9DC4] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">The Autism Overlap</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Estimates suggest that between 6% to 14% of autistic children demonstrate hyperlexia.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> For these children, letters and reading often serve as a profound special interest or a self-soothing perseverance. They share core autistic traits like restricted interests and social challenges.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-3 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Search className="text-[#0A9DC4] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Not Always Autism</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  It is a myth that all hyperlexic children are autistic. As outlined in Treffert's Type 1 and Type 3 profiles, hyperlexia can occur entirely without autism, following a completely different developmental trajectory where social skills naturally normalize.
                </p>
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
                <p>1. Grigorenko, E. L., Klin, A., & Volkmar, F. (2003). Annotation: Hyperlexia: Disability or superability? <i>Journal of Child Psychology and Psychiatry</i>. https://doi.org/10.1111/1469-7610.00193</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Nation, K., Clarke, P., Wright, B., & Williams, C. (2006). Patterns of reading ability in children with autism spectrum disorder. <i>Journal of Autism and Developmental Disorders</i>.</li>
                <li>Kupperman, P., Bligh, S., & Barouski, K. (2002). Hyperlexia. In <i>Autism spectrum disorders: A developmental transactional perspective</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: PROFILE & OUTLOOK
      ========================================== */}
      {activeTab === 'profile' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Profile Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Strengths & Challenges</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-overview-profile.webp"
              alt="Visual highlighting exceptional decoding and pattern recognition"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Hyperlexia is not just a list of deficits; it is a unique cognitive profile driven by an incredible visual memory and a hyper-focus on patterns.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Target className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Cognitive Strengths</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Flawless, mechanical decoding accuracy far beyond age expectations.</li>
                    <li>A photographic visual memory.</li>
                    <li>Exceptional pattern recognition and attention to minute details in text.</li>
                    <li>Using books and reading as a powerful tool for self-soothing and comfort.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Users className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Challenges Beyond Reading</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Severe difficulty grasping abstract concepts or answering "why" questions.</li>
                    <li>Intensely literal interpretation of language.</li>
                    <li>Challenges initiating social communication, often preferring the predictable world of books to unpredictable peers.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Outlook Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Prognosis & Key Takeaways</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-overview-outlook-hero.webp"
              alt="Child thriving using their love of reading as a bridge to learning"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Brain className="text-[#2abcd4] w-5 h-5" /> Variable Outcomes
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  The long-term outlook for a child with hyperlexia depends almost entirely on which "Type" they fall into. 
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="text-[#0c264d] font-bold text-xs mb-1">Type 1 & Type 3</h4>
                    <p className="text-xs text-slate-700">Have an excellent prognosis. Social skills naturalize, and their reading comprehension eventually catches up to their decoding ability.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="text-[#0c264d] font-bold text-xs mb-1">Type 2</h4>
                    <p className="text-xs text-slate-700">Outcomes vary widely depending on the support received for their co-occurring autism, but their reading ability serves as a massive academic advantage.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Lightbulb className="text-[#2abcd4] w-5 h-5" /> The Core Takeaways
                </h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-[#2abcd4] border-opacity-30 shadow-sm flex items-start gap-2">
                    <CheckCircle className="text-[#0A9DC4] w-4 h-4 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-700"><strong>Different from Giftedness:</strong> Gifted early readers easily understand what they read. Hyperlexia requires the reading-comprehension split.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#2abcd4] border-opacity-30 shadow-sm flex items-start gap-2">
                    <CheckCircle className="text-[#0A9DC4] w-4 h-4 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-700"><strong>A Bridge, Not a Barrier:</strong> Their intense love of written words can be leveraged. Teach them social skills and language <em>through</em> writing and text.</p>
                  </div>
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
                <p>1. Silberberg, N. E., & Silberberg, M. C. (1967). Hyperlexia: Specific word recognition skills in young children. <i>Exceptional Children</i>. https://doi.org/10.1177/001440296703400104</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Treffert, D. A. (2011). Hyperlexia III: Separating 'autistic-like' behaviors from autistic disorder; Assessing children who read early or speak late. <i>Wisconsin Medical Society</i>.</li>
                <li>Nation, K. (1999). Reading skills in hyperlexia: A developmental perspective. <i>Psychological Bulletin</i>.</li>
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