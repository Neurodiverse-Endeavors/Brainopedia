import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { BookOpen, Eye, Split, Ear, MessageSquare, Repeat, Type, Users, Target, Clock, Brain, Activity, Baby, GraduationCap, CheckCircle } from 'lucide-react';

interface HyperlexiaSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function HyperlexiaSymptoms({ setCurrentArticle, initialTab }: HyperlexiaSymptomsProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'reading');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Hyperlexia: Symptoms & Characteristics
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
          onClick={() => setActiveTab('reading')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'reading'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Reading & Comprehension
        </button>
        <button
          onClick={() => setActiveTab('language')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'language'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Language & Social
        </button>
        <button
          onClick={() => setActiveTab('cognition')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'cognition'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Cognition & Lifespan
        </button>
      </div>

      {/* ==========================================
          TAB 1: READING & COMPREHENSION
      ========================================== */}
      {activeTab === 'reading' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Reading Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Reading Characteristics</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-symptoms-reading.webp"
              alt="Toddler reading environmental print and complex text"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Hyperlexia presents with a highly distinctive pattern. The most visible symptom is an astonishing, advanced reading ability that emerges years before neurotypical expectations, almost always driven by an intense internal fascination rather than external teaching.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <BookOpen className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Precocious Decoding</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Onset often occurs before age 5, sometimes as early as 2 or 3 years old.</li>
                    <li>Entirely self-taught; they learn to read without explicit phonics instruction.</li>
                    <li>Can accurately pronounce and decode complex words far beyond their developmental age level.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Eye className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Symbol Fascination</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Intense, magnetic obsession with letters, numbers, and logos.</li>
                    <li>Compulsively reading environmental print (street signs, cereal boxes) aloud.</li>
                    <li>A strong preference for reading over traditional play activities or toys.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Comprehension Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Comprehension Difficulties</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-symptoms-comprehension-hero.webp"
              alt="Visual representing the split between perfect decoding and lacking meaning"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The true defining marker of hyperlexia is not just early reading, but the stark contrast between the child's ability to mechanically sound out words and their inability to understand what those words actually mean.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <Split className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">The Reading Split</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Can flawlessly read complex paragraphs but cannot answer basic "who, what, or why" questions about the text.</li>
                  <li>Highly literal interpretation of language, completely missing metaphors, sarcasm, or inferential context clues.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <Ear className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Listening Comprehension</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Significant difficulty understanding spoken language in real-time.</li>
                  <li>Trouble following verbal instructions unless they are written down.</li>
                  <li>Limited understanding of conversational flow and unwritten social rules.</li>
                </ul>
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
                <li>Silberberg, N. E., & Silberberg, M. C. (1967). Hyperlexia: Specific word recognition skills in young children. <i>Exceptional Children</i>.</li>
                <li>Nation, K. (1999). Reading skills in hyperlexia: A developmental perspective. <i>Psychological Bulletin</i>.</li>
                <li>Grigorenko, E. L., Klin, A., & Volkmar, F. (2003). Annotation: Hyperlexia: Disability or superability? <i>Journal of Child Psychology and Psychiatry</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: LANGUAGE & SOCIAL
      ========================================== */}
      {activeTab === 'language' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Language Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Language Development</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-symptoms-language.webp"
              alt="Child scripting or repeating phrases rather than engaging in conversation"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Paradoxically, despite their advanced mastery of written letters, children with hyperlexia almost always present with delayed, disordered, or highly atypical spoken language development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <MessageSquare className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Delayed Speech</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Children often experience late talking and limited expressive language, struggling significantly to formulate their own original thoughts verbally.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Repeat className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Echolalia</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">High reliance on echolalia (echoing what is heard) and scripting (repeating memorized phrases from books, movies, or TV shows) to communicate.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Type className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Vocabulary Gaps</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">May use incredibly advanced vocabulary they have read, but lack functional, everyday vocabulary needed to request a snack or express physical pain.</p>
              </div>
            </div>
          </div>

          {/* Social & Behavioral Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Social & Behavioral Traits</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-symptoms-social-hero.webp"
              alt="Child retreating into the comfort of a book during a social setting"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-3 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Users className="text-[#0A9DC4] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Pragmatics & Peers</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Severe difficulty initiating or maintaining back-and-forth conversation.</li>
                  <li>Missing nonverbal communication cues entirely.</li>
                  <li>Frequently preferring solitary activities (especially reading) over interacting with peers.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-3 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Target className="text-[#0A9DC4] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Restricted Interests</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Reading often serves as an intense perseveration or special interest.</li>
                  <li>May exhibit repetitive behaviors like obsessively lining up books, sorting alphabet blocks, or re-reading the exact same passage.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 md:col-span-2">
                <div className="flex items-center gap-2 mb-3 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Clock className="text-[#0A9DC4] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Need for Routine</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  A strong preference for sameness and predictability. Children with hyperlexia often struggle immensely with transitions, using reading as a way to self-regulate or find comfort in unpredictable environments.
                </p>
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
                <li>Kupperman, P., Bligh, S., & Barouski, K. (2002). Hyperlexia. In A. M. Wetherby & B. M. Prizant (Eds.), <i>Autism spectrum disorders: A developmental transactional perspective</i>.</li>
                <li>Nation, K., Clarke, P., Wright, B., & Williams, C. (2006). Patterns of reading ability in children with autism spectrum disorder. <i>Journal of Autism and Developmental Disorders</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: COGNITION & LIFESPAN
      ========================================== */}
      {activeTab === 'cognition' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Cognitive Profile Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Cognitive Profile</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-symptoms-cognition.webp"
              alt="Glowing brain highlighting visual memory and pattern recognition"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Hyperlexia is defined by a sharply uneven "spiky" cognitive profile. The brain is uniquely wired to excel in visual domains while struggling heavily with auditory and abstract processing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Brain className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Exceptional Strengths</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Photographic visual memory and rote memorization skills.</li>
                    <li>Extremely strong pattern recognition and sequential processing.</li>
                    <li>High capacity for visual learning.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Activity className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Cognitive Weaknesses</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Auditory processing delays (struggling to learn via listening).</li>
                    <li>Abstract reasoning challenges.</li>
                    <li>Executive function deficits regarding flexibility.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Lifespan Progression Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Progression & Key Indicators</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-symptoms-lifespan-hero.webp"
              alt="Timeline of hyperlexic traits evolving from toddlerhood to school age"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Baby className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Toddler (Ages 2-3)</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Characterized by a pure fascination with letters and early word reading, coupled with noticeable delays in speech and limited social interaction with peers.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Activity className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Preschool (Ages 3-5)</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Advanced reading becomes obvious and undeniable. However, the gap between decoding and comprehension widens, and autism-like behaviors may emerge.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <GraduationCap className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">School Age (Ages 6+)</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Academic challenges hit as school transitions from "learning to read" to "reading to learn." Social difficulties compound, requiring targeted support.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#0c264d] border-opacity-20 max-w-4xl mx-auto">
              <h3 className="text-[#0c264d] font-bold mb-3 text-sm flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#2abcd4]" /> Distinguishing from Giftedness
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Gifted children also read early, but they exhibit strong comprehension and use their reading to learn about the world. Hyperlexia is specifically defined by the intense decoding-comprehension split and the accompanying language/social deficits.
              </p>
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
                <li>Treffert, D. A. (2011). Hyperlexia III: Separating 'autistic-like' behaviors from autistic disorder; Assessing children who read early or speak late. <i>Wisconsin Medical Society</i>.</li>
                <li>Nation, K. (1999). Reading skills in hyperlexia: A developmental perspective. <i>Psychological Bulletin</i>.</li>
                <li>Grigorenko, E. L., Klin, A., & Volkmar, F. (2003). Annotation: Hyperlexia: Disability or superability? <i>Journal of Child Psychology and Psychiatry</i>.</li>
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