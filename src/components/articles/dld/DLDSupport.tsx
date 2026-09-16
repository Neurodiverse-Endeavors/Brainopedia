import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { MessageSquare, Ear, Users, BookOpen, Laptop, Home, Heart, ShieldCheck, CheckCircle, FileText, Brain, LayoutDashboard, Volume2, Mic, Activity } from 'lucide-react';

interface DLDSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DLDSupport({ setCurrentArticle, initialTab }: DLDSupportProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'therapies');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          DLD: Support & Management
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About DLD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('dld')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About DLD
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('therapies')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'therapies'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Therapies & Intervention
        </button>
        <button
          onClick={() => setActiveTab('academic')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'academic'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Academic & Classroom
        </button>
        <button
          onClick={() => setActiveTab('lifestyle')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'lifestyle'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Home & Lifestyle
        </button>
      </div>

      {/* ==========================================
          TAB 1: THERAPIES & INTERVENTION
      ========================================== */}
      {activeTab === 'therapies' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Speech Therapy Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Speech-Language Therapy</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-support-therapy.webp"
              alt="Speech-Language Pathologist working with a child"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Because DLD is fundamentally a language processing condition, targeted Speech-Language Therapy is the absolute cornerstone of support. Intervention must be explicit, systematic, and highly repetitive, focusing on the specific linguistic domains where the child struggles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Mic className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Core SLP Strategies</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li><strong>Recasting:</strong> Gently repeating the child's sentence with the correct grammar without outright criticizing.</li>
                    <li><strong>Focused Stimulation:</strong> Intentionally exposing the child to a target word or grammatical structure dozens of times in one session.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <FileText className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Grammar & Syntax</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Using visual supports (like Shape Coding) to make invisible grammar rules visible.</li>
                    <li>Intensive, isolated practice targeting specific morphemes like past tense <em>-ed</em> or plurals.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <BookOpen className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Vocabulary Building</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Explicitly teaching new words with semantic maps and word webs.</li>
                    <li>Providing significantly more repetitions and exposures than a neurotypical child requires to lock a word into memory.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <MessageSquare className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Narrative Intervention</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Directly teaching "story grammar" (setting, characters, problem, solution).</li>
                    <li>Using graphic organizers to help the child structure and retell events in a logical sequence.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Evidence Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Social Communication & Efficacy</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-support-social-hero.webp"
              alt="Small peer group practicing structured social communication"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Therapy must extend beyond clinical grammar drills into real-world pragmatic application. Social skills training ensures the child can actually use their language to negotiate, build friendships, and self-advocate.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Users className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Social Skills Training</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Explicit teaching of conversation skills, including turn-taking, repairing conversational breakdowns, and reading body language. SLPs often use role-playing and customized social stories to safely practice these scenarios.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Heart className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Facilitating Friendships</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Transitioning from one-on-one therapy to small, structured peer groups allows the child to practice banter, compromise, and shared interests in a supportive environment with immediate coaching.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Activity className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Evidence of Success</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Extensive meta-analyses prove that language therapy works. The key factors for success are intensity (frequency of sessions) and dosage (total amount of targeted intervention over time).</p>
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
                <li>Law, J., Garrett, Z., & Nye, C. (2004). The efficacy of treatment for children with developmental speech and language delay/disorder. <i>Journal of Speech, Language, and Hearing Research</i>. <a href="https://doi.org/10.1044/1092-4388(2004/069)" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">doi:10.1044/1092-4388(2004/069)</a></li>
                <li>Ebbels, S. H. (2014). Effectiveness of intervention for grammar in school-aged children with primary language impairments: A review of the evidence. <i>Child Language Teaching and Therapy</i>. <a href="https://doi.org/10.1177/0265659013516135" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">doi:10.1177/0265659013516135</a></li>
                <li>Camarata, S. M., Nelson, K. E., & Camarata, M. N. (1994). Comparison of conversational-recasting and imitative procedures for training grammatical structures in children with specific language impairment. <i>Journal of Speech and Hearing Research</i>. <a href="https://doi.org/10.1044/jshr.3706.1414" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">doi:10.1044/jshr.3706.1414</a></li>
                <li>Marulis, L. M., & Neuman, S. B. (2010). The effects of vocabulary intervention on young children's word learning: A meta-analysis. <i>Review of Educational Research</i>. <a href="https://doi.org/10.3102/0034654310382242" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">doi:10.3102/0034654310382242</a></li>
                <li>Petersen, D. B., Gillam, S. L., Spencer, T., & Gillam, R. B. (2010). The effects of literate narrative intervention on children with neurologically based language impairments. <i>Journal of Speech, Language, and Hearing Research</i>. <a href="https://doi.org/10.1044/1092-4388(2009/08-0247)" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">doi:10.1044/1092-4388(2009/08-0247)</a></li>
                <li>Boyle, J., McCartney, E., O'Hare, A., & Forbes, J. (2009). Direct versus indirect and individual versus group modes of language therapy for children with primary language impairment. <i>International Journal of Language & Communication Disorders</i>. <a href="https://doi.org/10.1080/13682820802371190" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">doi:10.1080/13682820802371190</a></li>
                <li>Warren, S. F., Fey, M. E., & Yoder, P. J. (2007). Differential treatment intensity research: A missing link to creating optimally effective communication interventions. <i>Mental Retardation and Developmental Disabilities Research Reviews</i>. <a href="https://doi.org/10.1002/mrdd.20139" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">doi:10.1002/mrdd.20139</a></li>
              </ul>
            </div>
          </div>      </div>
      )}

      {/* ==========================================
          TAB 2: ACADEMIC & CLASSROOM
      ========================================== */}
      {activeTab === 'academic' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Classroom Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Classroom Strategies & Planning</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-support-classroom.webp"
              alt="Teacher providing simplified, direct instruction with visual supports"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Because classrooms are highly verbal environments, students with DLD are constantly at risk of missing instruction. Teachers must adapt how they deliver information to reduce the "language load" on the student's processing system.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <LayoutDashboard className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Environmental Modifications</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Reducing background noise to help auditory focus.</li>
                    <li>Preferential seating near the teacher.</li>
                    <li>Pairing verbal instructions with heavy visual supports and predictable routines.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Ear className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Teacher Communication</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Using simplified, shorter sentences and slowing the pace of speech.</li>
                    <li>Repeating and rephrasing important information.</li>
                    <li>Checking comprehension by asking the student to repeat instructions back.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <CheckCircle className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Academic Accommodations</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Providing extended time for processing and formulating responses.</li>
                    <li>Pre-teaching critical vocabulary before the lesson begins.</li>
                    <li>Using written instructions to supplement verbal directions.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <FileText className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">IEP and 504 Plans</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Legally securing specific, measurable language goals and regular progress monitoring.</li>
                    <li>Securing formal SLP pull-out or push-in therapy time during the school day.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Literacy & Tech Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Literacy & Assistive Technology</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-support-literacy-hero.webp"
              alt="Student using text-to-speech software and graphic organizers"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Reading and writing are the ultimate stress tests for a child with DLD. Systematic literacy instruction combined with powerful assistive technology allows these students to access grade-level curriculum.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">Reading Intervention</h3>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                  <li>Explicit teaching of phonological awareness and systematic phonics.</li>
                  <li>Directly teaching comprehension strategies and inferencing skills.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">Writing Support</h3>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                  <li>Sentence-combining exercises to build complex syntax.</li>
                  <li>Graphic organizers, writing templates, and customized word banks.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">Assistive Technology</h3>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                  <li>Text-to-speech software to reduce reading fatigue.</li>
                  <li>Speech-to-text dictation and word prediction software to aid written output.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">Language Apps</h3>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                  <li>Interactive e-books with built-in vocabulary definitions.</li>
                  <li>Gamified apps targeting specific grammar and syntax rules.</li>
                </ul>
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
                <li>Cirrin, F. M., & Gillam, R. B. (2008). Language intervention practices for school-age children with spoken language disorders. <i>Language, Speech, and Hearing Services in Schools</i>. <a href="https://doi.org/10.1044/0161-1461(2008/07-0027)" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">doi:10.1044/0161-1461(2008/07-0027)</a></li>
                <li>Dockrell, J. E., & Shield, B. M. (2006). Acoustical barriers in classrooms: The impact of noise on performance in the classroom. <i>British Educational Research Journal</i>. <a href="https://doi.org/10.1080/01411920500402030" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">doi:10.1080/01411920500402030</a></li>
                <li>Catts, H. W., Fey, M. E., Tomblin, J. B., & Zhang, X. (2002). A longitudinal investigation of reading outcomes in children with language impairments. <i>Journal of Speech, Language, and Hearing Research</i>. <a href="https://doi.org/10.1044/1092-4388(2002/093)" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">doi:10.1044/1092-4388(2002/093)</a></li>
                <li>Saddler, B., & Graham, S. (2005). The effects of peer-assisted sentence-combining instruction on the writing performance of more and less skilled young writers. <i>Journal of Educational Psychology</i>. <a href="https://doi.org/10.1037/0022-0663.97.1.43" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">doi:10.1037/0022-0663.97.1.43</a></li>
                <li>Elkind, J., Cohen, K., & Murray, C. (1993). Using computer-based readers to improve reading comprehension of students with dyslexia. <i>Annals of Dyslexia</i>. <a href="https://doi.org/10.1007/BF02648083" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">doi:10.1007/BF02648083</a></li>
                <li>Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004). <a href="https://sites.ed.gov/idea/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">https://sites.ed.gov/idea/</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: HOME & LIFESTYLE
      ========================================== */}
      {activeTab === 'lifestyle' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Home Strategies Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Home Strategies for Parents</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-support-home.webp"
              alt="Parent and child engaging in shared dialogic reading"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Therapy doesn't end when the child leaves the clinic. Parents play a vital role in carrying over language strategies into a natural, loving home environment where the child feels safe to practice and make mistakes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both max-w-4xl">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Volume2 className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Communication Strategies</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                  <li><strong>Rich Input:</strong> Talk frequently with your child, modeling good grammar and varied vocabulary without forcing them to repeat it.</li>
                  <li><strong>Expansion:</strong> Naturally add to your child's short sentences (e.g., if they say "Dog run," you say "Yes, the big dog is running fast!").</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Home className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Daily Activities</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                  <li><strong>Shared Reading:</strong> Read books together daily, pausing to ask questions and discuss the pictures.</li>
                  <li><strong>Narration:</strong> Talk through daily routines like cooking or getting dressed, exposing them to sequence and vocabulary.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Whole Child Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Whole-Child Approach</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-support-wholechild-hero.webp"
              alt="Confident child thriving in an area of strength like art or building"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              A child is much more than their language disorder. True management of DLD means protecting their self-esteem and giving them opportunities to shine in areas that don't rely on words.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full border border-[#0c264d] border-opacity-20 mb-3">
                  <Heart className="text-[#0c264d] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Building Self-Esteem</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Actively focus on their strengths, whether it's visual arts, sports, math, or building. Praise their effort, not just their communication.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full border border-[#0c264d] border-opacity-20 mb-3">
                  <Brain className="text-[#0c264d] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Protecting Mental Health</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Be vigilant for signs of anxiety or depression caused by chronic social miscommunication. Provide access to supportive therapy when needed.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full border border-[#0c264d] border-opacity-20 mb-3">
                  <ShieldCheck className="text-[#0c264d] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Self-Advocacy</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Teach the child how to safely advocate for themselves—how to comfortably say "I didn't understand that, can you say it differently?"</p>
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
                <li>Hoff, E. (2003). The specificity of environmental influence: Socioeconomic status affects early vocabulary development via maternal speech. <i>Child Development</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/14580061/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 14580061</a></li>
                <li>Mol, S. E., Bus, A. G., de Jong, M. T., & Smeets, D. J. H. (2008). Added value of dialogic parent-child book readings: A meta-analysis. <i>Early Education and Development</i>. <a href="https://doi.org/10.1080/10409280701838603" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">doi:10.1080/10409280701838603</a></li>
                <li>Jerome, A. C., Fujiki, M., Brinton, B., & James, S. L. (2002). Self-esteem in children with specific language impairment. <i>Journal of Speech, Language, and Hearing Research</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/12199401/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 12199401</a></li>
                <li>Fujiki, M., Brinton, B., & Clarke, D. (2002). Emotion regulation in children with specific language impairment. <i>Language, Speech, and Hearing Services in Schools</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/12051614/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 12051614</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About DLD
        </button>
      </div>

    </article>
  );
}