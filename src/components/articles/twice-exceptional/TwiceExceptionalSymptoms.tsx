import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Zap, Hourglass, MessageSquare, AlertCircle, PenTool, BookOpen, Target, Heart, ShieldAlert, Users, BookX, Edit3, Puzzle, Lightbulb, EyeOff, Flag } from 'lucide-react';

interface TwiceExceptionalSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TwiceExceptionalSymptoms({ setCurrentArticle, initialTab }: TwiceExceptionalSymptomsProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'cognitive');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* RESTORED GLOBAL STYLE FOR CITATIONS */}
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
          Twice-Exceptional: Symptoms & Characteristics
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
          Social & Behavioral
        </button>
        <button
          onClick={() => setActiveTab('patterns')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'patterns'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Patterns & Red Flags
        </button>
      </div>

      {/* ==========================================
          TAB 1: COGNITIVE & ACADEMIC
      ========================================== */}
      {activeTab === 'cognitive' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Cognitive Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Cognitive Characteristics</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-symptoms-cognitive.webp"
              alt="Student demonstrating a spiky cognitive profile with complex reasoning but struggling with basic tasks"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Twice-exceptional students exhibit a complex profile of traits. Because their giftedness frequently masks their disability (and vice versa), the most defining cognitive characteristic is a massive discrepancy between their abilities.
            </p>

            {/* Removed clear-both to fix the beige background spooling issue */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Brain className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Uneven "Spiky" Profile</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">2e students demonstrate significant "scatter" in their cognitive abilities. It is common for the standard deviation between different index scores on their intelligence tests to exceed 20 or more points.<sup>1</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Zap className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Advanced Reasoning</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">They often show exceptional abstract reasoning and the ability to see complex patterns and connections that others miss, grasping highly sophisticated collegiate concepts very quickly.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Hourglass className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Processing Roadblocks</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Despite high intellect, they frequently suffer from severe weaknesses in processing speed or working memory, meaning they need significantly more time to complete simple tasks or hold information in their mind.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <MessageSquare className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Superior Verbal Abilities</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Especially common in students with reading or writing disabilities, they often possess highly sophisticated vocabularies and can articulate mature, abstract concepts orally.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Academic & Work Habits</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-symptoms-academic-hero.webp"
              alt="Visual highlighting advanced project work alongside disorganized, incomplete daily homework"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <AlertCircle className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Inconsistent Performance</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Their performance fluctuates wildly depending on the format. They may create an exceptional, complex science project but consistently fail basic math fact worksheets.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <PenTool className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Expression Gaps</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">A massive discrepancy between oral and written expression. They can speak brilliantly but produce written work that is brief, poorly organized, and full of spelling errors.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <BookOpen className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Preference for Complexity</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">They strongly resist repetitive drills. They actually perform *better* on advanced, complex concepts than they do on basic, foundational skills, causing massive confusion for teachers.</p>
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
                <p>1. Silverman, L. K. (2009). The measurement of giftedness. In L. V. Shavinina (Ed.), <i>International handbook on giftedness</i>. Springer.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Foley-Nicpon, M., Allmon, A., Sieck, B., & Stinson, R. D. (2011). Empirical investigation of twice-exceptionality: Where have we been and where are we going? <i>Gifted Child Quarterly</i>.</li>
                <li>Baum, S. M., Schader, R. M., & Owen, S. V. (2017). To be gifted and learning disabled: Strength-based strategies for helping twice-exceptional students. <i>Prufrock Press</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SOCIAL & BEHAVIORAL
      ========================================== */}
      {activeTab === 'social' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Emotional Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Social-Emotional Characteristics</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-symptoms-social.webp"
              alt="Child showing intense frustration and perfectionism over a torn paper"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              2e students are acutely aware of the gap between what their brain knows they can do and what their body or processing speed will actually allow them to produce. This creates deep emotional distress.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Target className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Perfectionism & Anxiety</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">They often set impossibly high standards. When their learning disability prevents them from reaching that standard, they experience severe anxiety, give up easily, or refuse to even start the task.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Heart className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Low Self-Esteem</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Because their abilities are so inconsistent, they often internalize their failures, believing they are secretly "lazy" or "stupid" despite overwhelming evidence of their high intelligence.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Behavioral Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Behavioral Manifestations</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-symptoms-behavior-hero.webp"
              alt="Highly intelligent student acting out as the class clown to deflect from a learning disability"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-3 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <ShieldAlert className="text-[#0A9DC4] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Underachievement & Avoidance</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Underachievement is frequently a coping mechanism to avoid failure. Procrastination stems directly from executive function weaknesses and intense anxiety about performance, not laziness.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-3 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Users className="text-[#0A9DC4] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Class Clown & Argumentative</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Many 2e students use humor or disruptiveness to deflect from academic struggles they are embarrassed by. They may appear oppositional when asked to complete basic tasks, which is actually a manifestation of deep frustration.</p>
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
                <li>Reis, S. M., & McCoach, D. B. (2000). The underachievement of gifted students: What do we know and where do we go? <i>Gifted Child Quarterly</i>.</li>
                <li>Webb, J. T., Amend, E. R., Webb, N. E., Goerss, J., Beljan, P., & Olenchak, F. R. (2005). Misdiagnosis and dual diagnoses of gifted children and adults. <i>Great Potential Press</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: PATTERNS & RED FLAGS
      ========================================== */}
      {activeTab === 'patterns' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Specific Profiles Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Specific Disability Patterns</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-symptoms-patterns.webp"
              alt="Visual puzzle showing overlapping traits of Giftedness, ADHD, Dyslexia, and Autism"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Twice-exceptionality looks completely different depending on the specific disability that is overlapping with the giftedness.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <BookX className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Gifted + Dyslexia</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Demonstrates vastly superior oral comprehension and vocabulary, but suffers from slow, labored reading. They may show highly creative, phonetic spelling that proves they understand the concept despite the errors.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Zap className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Gifted + ADHD</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Capable of intense hyperfocus on complex areas of interest, but completely unable to sustain attention for routine tasks. They may blurt out highly insightful, genius responses at wildly inappropriate times.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Edit3 className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Gifted + Dysgraphia</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Possesses a massive gap between brilliant oral storytelling and physically illegible handwriting. They actively avoid writing tasks due to the sheer physical fatigue and frustration it causes them.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Puzzle className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Gifted + Autism</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Displays incredibly advanced, collegiate-level knowledge in specific, narrow interests, but struggles profoundly to navigate basic social communication or take the perspective of others.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Red Flags Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Red Flags & Compensatory Strategies</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-symptoms-redflags-hero.webp"
              alt="Magnifying glass over an academic record highlighting massive inconsistencies"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Lightbulb className="text-[#2abcd4] w-5 h-5" /> Workarounds
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  2e students use their high intelligence to build sophisticated compensatory strategies, which is why their disabilities go unnoticed for so long.
                </p>
                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex items-start gap-2 mb-2">
                  <EyeOff className="text-[#0c264d] w-4 h-4 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-700">They may memorize entire passages from audiobooks to mask their severe reading/decoding difficulties.</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex items-start gap-2">
                  <EyeOff className="text-[#0c264d] w-4 h-4 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-700">They may use elaborate mental calculation strategies simply to avoid memorizing basic math facts.</p>
                </div>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Flag className="text-[#2abcd4] w-5 h-5" /> When to Suspect 2e
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Educators and parents should immediately suspect twice-exceptionality when they see:
                </p>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Significant Scatter:</strong> Large, inexplicable discrepancies between verbal intelligence and written output.</li>
                  <li><strong>Inconsistent Performance:</strong> A student who grasps advanced theoretical concepts but fails simple spelling tests.</li>
                  <li><strong>Bored but Struggling:</strong> A student who constantly complains that school is "too easy and boring," yet fails to turn in their assignments.</li>
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
                <li>Assouline, S. G., Foley Nicpon, M., & Whiteman, C. (2010). Cognitive and psychosocial characteristics of gifted students with written language disability. <i>Gifted Child Quarterly</i>.</li>
                <li>Lovecky, D. V. (2004). Different minds: Gifted children with AD/HD, Asperger syndrome, and other learning deficits. <i>Jessica Kingsley Publishers</i>.</li>
                <li>West, T. G. (1997). In the mind's eye: Visual thinkers, gifted people with dyslexia and other learning difficulties. <i>Prometheus Books</i>.</li>
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