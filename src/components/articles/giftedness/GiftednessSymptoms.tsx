import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Zap, BookOpen, Search, AlertTriangle, Heart, Users, ShieldAlert, HelpCircle, Sparkles, Activity, Compass, Star } from 'lucide-react';

interface GiftednessSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function GiftednessSymptoms({ setCurrentArticle, initialTab }: GiftednessSymptomsProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'cognitive');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Giftedness: Symptoms & Characteristics
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
          onClick={() => setActiveTab('cognitive')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'cognitive'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Cognitive & Academic
        </button>
        <button
          onClick={() => setActiveTab('social')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'social'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Social & Emotional
        </button>
        <button
          onClick={() => setActiveTab('creative')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'creative'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Creative & Behavioral
        </button>
      </div>

      {/* ==========================================
          TAB 1: COGNITIVE & ACADEMIC
      ========================================== */}
      {activeTab === 'cognitive' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Cognitive Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Cognitive Characteristics</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-symptoms-cognitive.webp"
              alt="Child deeply focused on solving a complex puzzle or pattern"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Gifted individuals exhibit a constellation of cognitive traits that distinguish them from their age peers. Their brains are wired for rapid processing, deep pattern recognition, and exceptional memory retention.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Brain className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Advanced Reasoning</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Ability to understand abstract relationships far earlier than peers.</li>
                    <li>Exceptional logical reasoning and cause-and-effect mapping.</li>
                    <li>Remarkable long-term retention and working memory capacity.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Zap className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Rapid Processing</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Ability to master new concepts with minimal instruction or repetition.</li>
                    <li>Faster cognitive processing speeds across multiple domains.</li>
                    <li>Exceptional ability to transfer learned knowledge to new, novel situations.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Learning & Academic Profile</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-symptoms-academic-hero.webp"
              alt="Advanced student studying independently with diverse materials"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              In an educational setting, gifted students are driven by an insatiable curiosity. However, their uneven development means they require constant challenge to remain engaged.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Search className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Intense Curiosity</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed mb-2">A constant desire to understand the "how" and "why" behind concepts. They ask probing, complex questions and often challenge authority, traditions, or established rules if they lack logical sense.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <BookOpen className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Early Achievement</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed mb-2">Many teach themselves to read before formal instruction or grasp mathematical concepts years ahead of grade level. They prefer independent, self-directed learning and autonomy.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <AlertTriangle className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Need for Challenge</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed mb-2">They experience intense frustration with the slow pace of regular classrooms. Repetitive drill-and-practice causes them to check out entirely, as they crave depth and complexity over breadth.</p>
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
                <li>Clark, B. (2012). <i>Growing up gifted: Developing the potential of children at home and at school</i> (8th ed.). Pearson.</li>
                <li>Sternberg, R. J. (1985). <i>Beyond IQ: A triarchic theory of human intelligence</i>. Cambridge University Press.</li>
                <li>Winner, E. (1996). <i>Gifted children: Myths and realities</i>. Basic Books.</li>
                <li>Silverman, L. K. (2002). <i>Upside-down brilliance: The visual-spatial learner</i>. DeLeon Publishing.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SOCIAL & EMOTIONAL
      ========================================== */}
      {activeTab === 'social' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Emotional Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Emotional Intensity & Sensitivity</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-symptoms-social.webp"
              alt="Child showing deep empathy or having an intense conversation with an older peer"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Giftedness is deeply emotional. Advanced cognitive processing paired with typical chronological emotional regulation creates a highly sensitive internal world.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Heart className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Heightened Sensitivity</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Experiencing emotions (both joy and sorrow) more deeply and intensely than peers.</li>
                    <li>Profound empathy and awareness of others' feelings.</li>
                    <li>Strong, uncompromising sense of moral justice and fairness from a very young age.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Users className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Social Awareness</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Frequently gravitating toward older children or adults for companionship.</li>
                    <li>Possessing a keen awareness of complex social dynamics.</li>
                    <li>Feeling a deep, unmet need for true "intellectual peers" who share their specific interests.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Challenges Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Challenges & Vulnerabilities</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-symptoms-challenges-hero.webp"
              alt="Student looking overwhelmed by perfectionism or isolated in a classroom"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Without the right support, the very traits that make a child gifted can become sources of immense anxiety, isolation, and underachievement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <ShieldAlert className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Perfectionism</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Setting impossibly high standards for themselves, leading to harsh self-judgment. This intense fear of failure often causes them to completely avoid tasks where success isn't guaranteed.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <HelpCircle className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Existential Concerns</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Pondering heavy concepts like death, infinity, or global injustice at very young ages. This combination of high awareness and youthful helplessness can lead to true existential depression.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Activity className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Underachievement</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">If early schoolwork is too easy, they never develop proper study skills. When they finally encounter challenging work later in life, they often panic, procrastinate, or give up entirely.</p>
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
                <li>Neihart, M., Reis, S. M., Robinson, N. M., & Moon, S. M. (Eds.). (2002). <i>The social and emotional development of gifted children: What do we know?</i> Prufrock Press.</li>
                <li>Webb, J. T., Amend, E. R., Webb, N. E., Goerss, J., Beljan, P., & Olenchak, F. R. (2005). <i>Misdiagnosis and dual diagnoses of gifted children and adults</i>. Great Potential Press.</li>
                <li>Silverman, L. K. (1994). The moral sensitivity of gifted children and the evolution of society. <i>Roeper Review</i>.</li>
                <li>Schuler, P. A. (2000). Perfectionism and gifted adolescents. <i>Journal of Secondary Gifted Education</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: CREATIVE & BEHAVIORAL
      ========================================== */}
      {activeTab === 'creative' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Creativity Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Creativity & Innovation</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-symptoms-creative.webp"
              alt="Child creating a highly imaginative, unconventional art project or invention"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Beyond pure intellect, giftedness frequently manifests as boundless creativity. These individuals thrive on originality, viewing the world through an unconventional and highly imaginative lens.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Sparkles className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Originality</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Approaching problems from entirely unexpected angles.</li>
                    <li>Willingness to take intellectual risks and improvise in the moment.</li>
                    <li>A rich, vivid inner world featuring elaborate pretend scenarios and sophisticated storytelling.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Zap className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Humor & Energy</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Advanced sense of humor, understanding complex wordplay, puns, and satire early on.</li>
                    <li>A visible surplus of physical and mental energy (psychomotor excitability).</li>
                    <li>Fiercely independent; resisting doing things "just because."</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Domains Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Domain-Specific Talents</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-symptoms-domains-hero.webp"
              alt="Collage showing children excelling in math, science, and the arts"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              While some individuals possess "global" giftedness across all subjects, many exhibit extreme precocity in one specific domain while remaining completely average in others.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Activity className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Mathematical</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">An intuitive "number sense," exceptional spatial reasoning, and the ability to utilize highly sophisticated, efficient problem-solving strategies.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <BookOpen className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Linguistic</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Voracious reading habits, vast vocabulary, advanced compositional writing skills, and a deep grasp of verbal analogies and logic.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Compass className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Scientific</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">A natural inclination to generate hypotheses, experiment, and deeply understand complex systems and the natural world.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Star className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Artistic</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Heightened aesthetic sensitivity, production of highly original work, and an attention to technical detail that is years beyond their age.</p>
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
                <li>Renzulli, J. S. (1978). What makes giftedness? Reexamining a definition. <i>Phi Delta Kappan</i>.</li>
                <li>Runco, M. A. (2014). <i>Creativity: Theories and themes</i>. Elsevier.</li>
                <li>Daniels, S., & Piechowski, M. M. (2009). <i>Living with intensity</i>. Great Potential Press.</li>
                <li>Winner, E., & Martino, G. (1993). Giftedness in the visual arts and music. In <i>International handbook of research and development of giftedness and talent</i>.</li>
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