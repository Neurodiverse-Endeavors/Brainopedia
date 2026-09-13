import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { BookOpen, Calculator, MessageSquare, Clock, Laptop, Map, Hand, Eye, Activity, Users, Heart, ListChecks, ShieldCheck, Mic, Briefcase, Lightbulb } from 'lucide-react';

interface NVLDSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function NVLDSupport({ setCurrentArticle, initialTab }: NVLDSupportProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'academic');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          NVLD: Support & Management
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('nvld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About NVLD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('nvld')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About NVLD
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
          Academic & Classroom
        </button>
        <button
          onClick={() => setActiveTab('therapies')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'therapies'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Therapies & Social
        </button>
        <button
          onClick={() => setActiveTab('lifestyle')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'lifestyle'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Life Skills & Strengths
        </button>
      </div>

      {/* ==========================================
          TAB 1: ACADEMIC & CLASSROOM
      ========================================== */}
      {activeTab === 'academic' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Educational Interventions Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Educational Interventions</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-support-classroom.webp"
              alt="Teacher working with a student on explicit verbal instruction"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Because children with NVLD learn best through language rather than visual demonstration, standard classroom environments that rely heavily on "discovery learning" or visual aids can be highly frustrating. Effective support requires explicit, step-by-step verbal instruction that directly bypasses their spatial deficits.<sup className="text-[#10b981] font-bold ml-0.5">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <MessageSquare className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Verbal Mediation</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Teach the student to "talk themselves through" complex visual tasks. Providing explicit verbal descriptions of visual materials helps their brain map the information.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Calculator className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Math Support</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Use graph paper to force correct column alignment. Minimize geometric drawing requirements and provide heavy verbal explanations for math concepts.<sup className="text-[#10b981] font-bold ml-0.5">2</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4 md:col-span-2">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <BookOpen className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Reading Comprehension</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">While decoding is strong, inferencing is weak. Teachers must explicitly teach students how to identify the "main idea" and read between the lines using structured questioning strategies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accommodations Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Accommodations & Assistive Tech</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-support-tech-hero.webp"
              alt="Student utilizing a laptop and digital planner for accommodations"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Bypassing the physical barriers of handwriting and spatial organization is critical. An IEP or 504 Plan should heavily incorporate assistive technology to allow the student's brilliant verbal mind to shine.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="bg-[#fffbeb] p-3 rounded-full border border-[#ffd166] border-opacity-50 mb-3">
                  <Clock className="text-[#d4a017] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Classroom Modifications</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Provide extended time for tests, dramatically reduce board-copying (provide printed notes instead), and use preferential seating to minimize distractions.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="bg-[#fffbeb] p-3 rounded-full border border-[#ffd166] border-opacity-50 mb-3">
                  <Laptop className="text-[#d4a017] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Writing Technology</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Allow typing for all assignments instead of handwriting. Implement speech-to-text dictation software to capture their high-level verbal ideas before working memory drops them.<sup className="text-[#10b981] font-bold ml-0.5">3</sup></p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="bg-[#fffbeb] p-3 rounded-full border border-[#ffd166] border-opacity-50 mb-3">
                  <Map className="text-[#d4a017] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Organizational Apps</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Replace messy paper planners with digital calendars, automated task-management apps, and timers to help support their challenged executive function.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: THERAPIES & SOCIAL
      ========================================== */}
      {activeTab === 'therapies' && (
        <div className="space-y-8 animate-fadeIn">

          {/* OT Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Occupational Therapy</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-support-therapy.webp"
              alt="Occupational therapy session focusing on fine motor skills"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Because NVLD inherently impacts motor coordination and visual-spatial mapping, Pediatric Occupational Therapy (OT) is often one of the most critical early interventions to help build physical competence and reduce frustration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Hand className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Fine Motor & Writing</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Activities to build hand strength, implement adaptive pencil grips, and provide targeted handwriting interventions (or formally transition the student to keyboarding).</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Activity className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Gross Motor Control</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Targeted exercises to improve core balance, bilateral coordination (using both sides of the body), and spatial orientation in physical environments.<sup className="text-[#10b981] font-bold ml-0.5">3</sup></p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Psychological Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Social & Psychological Support</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-support-social-hero.webp"
              alt="Therapist working with a teen on identifying facial expressions in a small group"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Social skills do not develop naturally for children with NVLD. They must be taught social interaction exactly like a neurotypical child is taught a foreign language: explicitly, logically, and systematically.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Users className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Structured Social Groups</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Explicit instruction in reading facial expressions and understanding personal space.<sup className="text-[#10b981] font-bold ml-0.5">1</sup></li>
                  <li>Direct teaching of the "unwritten" rules of peer interaction.</li>
                  <li>Practicing skills in a safe, guided peer environment.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <MessageSquare className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Pragmatic Language</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Speech-language therapy to focus heavily on conversational turn-taking.</li>
                  <li>Explicit teaching to understand sarcasm, idioms, and non-literal figurative language.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Heart className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Mental Health</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Cognitive-behavioral therapy (CBT) to manage the severe anxiety caused by chronic social missteps.</li>
                  <li>Building resilience and coping strategies for frustration in visual-heavy environments.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: LIFE SKILLS & STRENGTHS
      ========================================== */}
      {activeTab === 'lifestyle' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Daily Living Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Daily Living & Safety Skills</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-support-daily.webp"
              alt="Visual schedules and checklists for daily routines"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Because spatial navigation and motor planning are impaired, simple daily routines that neurotypical children pick up through observation must be explicitly taught and practiced for a child with NVLD.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <ListChecks className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Self-Care Routines</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Breaking down morning and evening routines into step-by-step written checklists. Repeated practice is required to build motor muscle memory for tasks like grooming or dressing.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <ShieldCheck className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Navigation & Safety</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Direct teaching of geographical navigation, explicit safety rules for interacting with strangers (to counter social naivety), and heavy reliance on smartphone GPS apps.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Leveraging Strengths Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Leveraging Unique Strengths</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-support-strengths-hero.webp"
              alt="Adult in a highly verbal career confidently leading a discussion"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The ultimate goal of NVLD support is not to "fix" the spatial deficits, but to provide enough accommodation so the individual can lean entirely into their profound verbal and auditory strengths. When placed in the right environment, individuals with NVLD thrive.<sup className="text-[#10b981] font-bold ml-0.5">3</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-blue-50 p-3 rounded-full border border-[#0c264d] border-opacity-20 mb-3">
                  <Briefcase className="text-[#0c264d] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Verbal Careers</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Directing students toward career paths that rely exclusively on language, memory, and writing—such as law, journalism, counseling, broadcasting, or history.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-blue-50 p-3 rounded-full border border-[#0c264d] border-opacity-20 mb-3">
                  <Lightbulb className="text-[#0c264d] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Creative Arts</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Fostering deep creativity through storytelling, creative writing, podcasting, and the verbal arts, allowing their extensive vocabulary to shine.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-blue-50 p-3 rounded-full border border-[#0c264d] border-opacity-20 mb-3">
                  <Mic className="text-[#0c264d] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Self-Advocacy</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Teaching the student to use their high-level speaking skills to actively explain their learning profile to professors and bosses to secure necessary accommodations.</p>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('nvld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About NVLD
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p>1. Rourke, B. P. (1989). Nonverbal learning disabilities: The syndrome and the model. <i>Guilford Press</i>. https://doi.org/10.1007/978-1-4757-0635-2</p>
            <p>2. Rourke, B. P., & Conway, J. A. (1997). Disabilities of arithmetic and mathematical reasoning: Perspectives from neurology and neuropsychology. <i>Journal of Learning Disabilities</i>. https://doi.org/10.1177/002221949703000104</p>
            <p>3. Tanguay, P. B. (2002). Nonverbal learning disabilities at school: Educating students with NLD, Asperger syndrome, and related conditions. <i>Jessica Kingsley Publishers</i>. https://doi.org/10.1037/10515-000</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Beery, K. E., & Beery, N. A. (2010). The Beery-Buktenica developmental test of visual-motor integration. <i>Pearson</i>.</li>
            <li>Semrud-Clikeman, M. (2007). Social competence in children. <i>Springer</i>.</li>
            <li>Thompson, S. (1997). The source for nonverbal learning disorders. <i>LinguiSystems</i>.</li>
          </ul>
        </div>
      </div>

    </article>
  );
}