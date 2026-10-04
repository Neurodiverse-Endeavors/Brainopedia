import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DysgraphiaSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DysgraphiaSupport({ setCurrentArticle, initialTab }: DysgraphiaSupportProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'interventions';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Dysgraphia: Support & Management
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dysgraphia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          Back to Dysgraphia
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('interventions')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'interventions'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Interventions & Therapy
        </button>
        <button
          onClick={() => handleTabChange('accommodations')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'accommodations'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Accommodations & Tech
        </button>
        <button
          onClick={() => handleTabChange('home')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'home'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Home & Holistic Support
        </button>
      </div>

      {/* ==========================================
          TAB 1: INTERVENTIONS & THERAPY
      ========================================== */}
      {activeTab === 'interventions' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Effective management of dysgraphia involves a comprehensive combination of evidence-based educational interventions, structured occupational therapy, and practical compensatory strategies. With appropriate support, individuals with dysgraphia can fully demonstrate their intelligence and function effectively in daily academic life.
          </p>

          {/* Educational Interventions Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Educational Interventions</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-support-education.webp" 
              alt="Multi-sensory writing instruction"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Direct instruction in handwriting and spelling must utilize explicit, multi-sensory approaches that bypass frustrated motor pathways. By integrating visual, auditory, and kinesthetic learning, educators can help students build reliable neural connections for written expression.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Handwriting Instruction</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Explicit teaching:</strong> Direct, systematic instruction in letter formation and writing mechanics rather than simple tracing.</li>
                  <li><strong>Targeted programs:</strong> Utilizing developmentally appropriate programs like "Handwriting Without Tears" or "Size Matters."</li>
                  <li><strong>Cursive vs. Print:</strong> Allowing the student to utilize cursive if the continuous flow is easier for their motor planning.</li>
                  <li><strong>Daily practice:</strong> Utilizing short, highly frequent practice sessions rather than grueling, lengthy drills.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Writing Process & Spelling</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Strategy Development:</strong> Explicit teaching of planning, writing, and revising strategies (like the SRSD framework).</li>
                  <li><strong>Graphic organizers:</strong> Providing visual templates and paragraph frames to scaffold the organization of thoughts.</li>
                  <li><strong>Systematic phonics:</strong> Teaching structural spelling through word families, patterns, and morphology.</li>
                  <li><strong>Personalized lists:</strong> Creating targeted spelling lists based directly on the student's unique error patterns.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Occupational Therapy Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Occupational Therapy</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-support-ot.webp" 
              alt="Occupational therapist working on fine motor skills"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Occupational therapists play a vital role in developing the fine motor coordination and graphomotor skills required for physical writing. Through targeted exercises and sensory strategies, therapy helps reduce the physical pain and fatigue associated with transcription.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Fine Motor Development</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Strengthening exercises:</strong> Engaging in activities designed to build intrinsic hand and finger strength.</li>
                  <li><strong>Dexterity tasks:</strong> Manipulating small objects, using tweezers, and practicing in-hand manipulation.</li>
                  <li><strong>Bilateral coordination:</strong> Exercises that train the brain to use both hands together seamlessly.</li>
                  <li><strong>Visual-Motor:</strong> Completing mazes, tracing exercises, and structured dot-to-dot activities.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Posture & Sensory Tools</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Grip training:</strong> Utilizing adaptive grips to encourage an efficient tripod or quadrupod hold.</li>
                  <li><strong>Ergonomic support:</strong> Ensuring appropriate desk height and using slant boards for better wrist positioning.</li>
                  <li><strong>Sensory strategies:</strong> Engaging in "heavy work" or proprioceptive activities immediately before writing tasks.</li>
                  <li><strong>Weighted tools:</strong> Utilizing weighted pencils or wrist weights to provide better kinesthetic feedback to the brain.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Compensatory Strategies Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Compensatory Strategies</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-support-compensatory.webp" 
              alt="Student using a visual mind map"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Compensatory strategies empower students to bypass physical writing barriers by shifting the cognitive load during the planning and drafting phases. By utilizing oral brainstorming and structured outlines, individuals can focus their working memory entirely on generating ideas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Pre-Writing & Drafting</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Verbal brainstorming:</strong> Talking ideas out loud or recording them before attempting to write.</li>
                  <li><strong>Visual mapping:</strong> Drawing connections between ideas rather than relying on linear text outlines.</li>
                  <li><strong>Segmented focus:</strong> Focusing strictly on idea generation first, completely ignoring spelling and mechanics until the end.</li>
                  <li><strong>Shorthand:</strong> Encouraging the use of personalized abbreviations and shorthand during the drafting phase.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Revision & Organization</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Separate processes:</strong> Slicing the revision process into two distinct steps: revise content first, edit mechanics second.</li>
                  <li><strong>Auditory review:</strong> Reading the paper aloud (or using text-to-speech) to catch missing words and grammatical errors.</li>
                  <li><strong>Color-coding:</strong> Utilizing color-coded folders and digital calendars to bypass the need for handwritten assignment notebooks.</li>
                  <li><strong>Checklists:</strong> Providing a clear, systematic checklist for the student to follow during the editing phase.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: ACCOMMODATIONS & TECH
      ========================================== */}
      {activeTab === 'accommodations' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            When interventions alone cannot bridge the gap, environmental accommodations and technology step in to level the playing field. These tools do not give the student an unfair advantage; they simply remove the physical barrier preventing them from demonstrating their actual intelligence.
          </p>

          {/* Classroom Accommodations Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Classroom Accommodations</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-support-accommodations.webp" 
              alt="Student utilizing extended time and modified worksheets"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Classroom accommodations remove arbitrary physical barriers, allowing students to demonstrate their true conceptual understanding of the material. Adjusting the format, volume, and pacing of written assignments ensures dysgraphia does not artificially deflate a student's academic grades.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Reducing Demands</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Alternative demonstration:</strong> Permitting oral presentations, verbal exams, or video recordings instead of written reports.</li>
                  <li><strong>Shortened assignments:</strong> Focusing on quality over quantity by reducing the sheer volume of writing required.</li>
                  <li><strong>Pre-printed notes:</strong> Providing teacher outlines or guided fill-in-the-blank notes to eliminate rapid copying from the board.</li>
                  <li><strong>Extended time:</strong> Guaranteeing time-and-a-half on tests and extending deadlines for major written assignments.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Grading & Environment</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Split grading:</strong> Grading the conceptual content entirely separately from the spelling and mechanics.</li>
                  <li><strong>Spelling amnesty:</strong> Never penalizing for spelling errors on assignments where spelling is not the primary learning objective.</li>
                  <li><strong>Adaptive materials:</strong> Providing raised-line paper for writing and grid paper to help align math equations.</li>
                  <li><strong>Preferential seating:</strong> Seating the student near the board to reduce the visual strain of far-point copying.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Assistive Technology Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Assistive Technology</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-support-technology.webp" 
              alt="Student using dictation software on a laptop"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Assistive technology serves as a critical cognitive bridge, allowing individuals to completely bypass the physical mechanics of handwriting. Tools like speech-to-text software and predictive typing free up working memory so the student can focus on high-level composition.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Input & Dictation</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Touch-typing:</strong> Providing systematic keyboarding instruction as early as possible so typing becomes automatic.</li>
                  <li><strong>Speech-to-Text:</strong> Utilizing dictation software (like Dragon Naturally Speaking or Google Voice Typing) to draft essays orally.</li>
                  <li><strong>Word Prediction:</strong> Using software like Co:Writer to predict words as the student types, drastically reducing physical keystrokes.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Review & Note-Taking</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Text-to-Speech:</strong> Having the computer read drafted essays aloud so the student can catch errors auditorily.</li>
                  <li><strong>Smartpens:</strong> Utilizing tools like the Livescribe pen, which records audio while the student jots minimal notes.</li>
                  <li><strong>Grammar assists:</strong> Leveraging digital tools like Grammarly to provide continuous mechanical support.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Specific Task Support Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Support for Specific Situations</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-support-specific.webp" 
              alt="Student using a formula sheet during a math test"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Certain academic tasks, like taking live lecture notes or completing timed math tests, place disproportionate strain on students with dysgraphia. Providing specialized supports for these specific situations prevents extreme cognitive fatigue and academic anxiety.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Note-Taking & Math</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Peer note-takers:</strong> Providing the student with a clean copy of a designated classmate's notes.</li>
                  <li><strong>Board photography:</strong> Allowing the student to simply take a photo of the whiteboard instead of frantically copying.</li>
                  <li><strong>Math formatting:</strong> Using graph paper to align columns and providing pre-printed worksheets to reduce copying errors.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">High-Stakes Testing</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Human scribe:</strong> Permitting the student to dictate essay answers to a dedicated scribe during formal exams.</li>
                  <li><strong>Digital formatting:</strong> Allowing the student to type all short-answer and essay responses on a school laptop.</li>
                  <li><strong>Reduced burden:</strong> Reducing the overall number of questions to test mastery without testing physical endurance.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: HOME & HOLISTIC SUPPORT
      ========================================== */}
      {activeTab === 'home' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            A comprehensive support plan must extend beyond the classroom walls to address the emotional toll of chronic academic struggle. By actively involving parents, securing legal rights, and monitoring emotional wellbeing, students can maintain a positive relationship with learning.
          </p>

          {/* Home Support Strategies Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Home Support Strategies</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-support-home.webp" 
              alt="Parent and child working on homework in a quiet space"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              A supportive home environment rebuilds academic confidence by integrating fine motor practice into low-stress, enjoyable daily routines. By focusing on the learning process rather than perfect handwriting, families can actively dismantle severe writing anxiety.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Homework Environment</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Designated space:</strong> Creating a quiet, highly organized area with appropriate furniture and good lighting.</li>
                  <li><strong>Chunking:</strong> Breaking massive writing assignments into small, manageable chunks to prevent emotional meltdowns.</li>
                  <li><strong>Parental scribing:</strong> Serving as a scribe for homework when the child reaches total physical or cognitive exhaustion.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Skill Building at Home</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Playful motor tasks:</strong> Engaging in activities like working with Play-Doh, building Legos, or stringing beads.</li>
                  <li><strong>Keyboarding practice:</strong> Encouraging fun, game-based touch-typing practice over traditional handwriting drills.</li>
                  <li><strong>Expectation management:</strong> Communicating clearly with teachers to establish reasonable, healthy boundaries for homework volume.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Progress & Co-occurring Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Progress & Holistic Health</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-support-progress.webp" 
              alt="Data tracking chart showing student progress"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because dysgraphia frequently co-occurs with conditions like ADHD or dyslexia, holistic management may involve addressing broader attention and emotional needs. Consistent progress monitoring ensures that interventions remain effective and accommodations evolve alongside the student's academic demands.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Medical & Emotional</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>ADHD Management:</strong> If ADHD co-occurs, appropriate medication can significantly improve sustained attention during writing tasks.</li>
                  <li><strong>Anxiety Support:</strong> Utilizing therapy or medication to manage severe anxiety specifically triggered by academic failure.</li>
                  <li><strong>No "Dysgraphia Pill":</strong> Understanding that there is no medical cure or specific medication for dysgraphia itself.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Progress Monitoring</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Sample tracking:</strong> Regularly collecting writing samples to objectively compare fluency and legibility over time.</li>
                  <li><strong>Data-driven pivots:</strong> Actively adjusting or abandoning interventions if the data shows the student is not making progress.</li>
                  <li><strong>Self-assessment:</strong> Teaching the student to track their own progress to build feelings of internal locus of control.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Advocacy & Principles Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Advocacy & Core Principles</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-support-advocacy.webp" 
              alt="Parents and teachers collaborating in an IEP meeting"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Successful long-term management of dysgraphia requires strong, consistent collaboration between parents, educators, and the student. By maintaining a strengths-based approach and securing legal protections, individuals can pursue any academic or professional goal.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Rights & Collaboration</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Team approach:</strong> Ensuring parents, teachers, and therapists communicate regularly and use consistent strategies across environments.</li>
                  <li><strong>Legal knowledge:</strong> Understanding the student's legal rights under IDEA, Section 504, or the ADA.</li>
                  <li><strong>Documentation:</strong> Meticulously documenting all needs, interventions, and meeting outcomes to ensure compliance.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Principles for Success</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Early intervention:</strong> Initiating support the moment difficulties are identified, rather than waiting for failure.</li>
                  <li><strong>Technology embrace:</strong> Viewing technology as a necessary tool for success, not as "cheating."</li>
                  <li><strong>Strengths focus:</strong> Actively celebrating the student's non-writing strengths to build a resilient, confident identity.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dysgraphia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          Back to Dysgraphia
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Anderson-Inman, L., & Horney, M. A. (1998). Transforming text for at-risk readers. In <i>Handbook of literacy and technology</i>. Erlbaum.</li>
            <li>Beery, K. E., & Beery, N. A. (2010). <i>The Beery-Buktenica developmental test of visual-motor integration</i>. Pearson.</li>
            <li>Berninger, V. W. (2009). Highlights of programmatic, interdisciplinary research on writing. <i>Learning Disabilities Research & Practice</i>.</li>
            <li>Berninger, V. W., et al. (2009). Comparison of pen and keyboard transcription modes. <i>Learning Disability Quarterly</i>.</li>
            <li>Berninger, V. W., et al. (1997). Treatment of handwriting problems in beginning writers. <i>Journal of Educational Psychology</i>.</li>
            <li>Berninger, V. W., & Richards, T. L. (2010). Inter-relationships among behavioral markers, genes, brain, and treatment. <i>Future Neurology</i>.</li>
            <li>Berninger, V. W., & Wolf, B. J. (2009). <i>Teaching students with dyslexia and dysgraphia</i>. Brookes Publishing.</li>
            <li>Boyle, J. R. (2001). Enhancing the note-taking skills of students with mild disabilities. <i>Intervention in School and Clinic</i>.</li>
            <li>Boyle, J. R., & Weishaar, M. (1997). The effects of expert-generated versus student-generated cognitive organizers on the reading comprehension of students with learning disabilities. <i>Learning Disabilities Research & Practice</i>.</li>
            <li>Cahill, S. M. (2009). Where does handwriting fit in? <i>Intervention in School and Clinic</i>.</li>
            <li>Calhoon, M. B., & Fuchs, L. S. (2003). The effects of peer-assisted learning strategies and curriculum-based measurement on the mathematics performance of secondary students with disabilities. <i>Remedial and Special Education</i>.</li>
            <li>Carlisle, J. F. (2010). Effects of instruction in morphological awareness on literacy achievement. <i>Reading Research Quarterly</i>.</li>
            <li>Case-Smith, J. (2002). Effectiveness of school-based occupational therapy intervention on handwriting. <i>American Journal of Occupational Therapy</i>.</li>
            <li>Case-Smith, J., & O'Brien, V. (2010). <i>Occupational therapy for children and adolescents</i>. Mosby/Elsevier.</li>
            <li>Connelly, V., et al. (2006). Contribution of lower order letter writing skills. <i>Developmental Neuropsychology</i>.</li>
            <li>Cooper, H., et al. (2006). Does homework improve academic achievement? <i>Review of Educational Research</i>.</li>
            <li>Cudd, E. T., & Roberts, L. L. (1989). Using writing to enhance content area learning in the primary grades. <i>The Reading Teacher</i>.</li>
            <li>De La Paz, S. (1999). Self-regulated strategy instruction in regular education settings. <i>Learning Disabilities Research & Practice</i>.</li>
            <li>Denton, P. L., et al. (2006). The effects of sensorimotor-based intervention versus therapeutic practice on improving handwriting performance in 6- to 11-year-old children. <i>American Journal of Occupational Therapy</i>.</li>
            <li>DiPardo, A., & Freedman, S. W. (1988). Peer response groups in the writing classroom. <i>Review of Educational Research</i>.</li>
            <li>Dweck, C. S. (2006). <i>Mindset: The new psychology of success</i>. Random House.</li>
            <li>Edyburn, D. L. (2000). Assistive technology and students with mild disabilities. <i>Focus on Exceptional Children</i>.</li>
            <li>Englert, C. S., & Mariage, T. V. (1991). Making students partners in the comprehension process. <i>Learning Disability Quarterly</i>.</li>
            <li>Epstein, J. L. (2001). <i>School, family, and community partnerships</i>. Westview Press.</li>
            <li>Exner, C. E. (2001). Development of hand skills. In <i>Occupational therapy for children</i>. Mosby.</li>
            <li>Feder, K., et al. (2000). Handwriting: Current trends in occupational therapy practice. <i>Canadian Journal of Occupational Therapy</i>.</li>
            <li>Fernald, G. M. (1943). <i>Remedial techniques in basic school subjects</i>. McGraw-Hill.</li>
            <li>Fitzgerald, J. (1987). Research on revision in writing. <i>Review of Educational Research</i>.</li>
            <li>Fuchs, L. S., & Fuchs, D. (2002). <i>What is scientifically-based research on progress monitoring?</i> National Center on Student Progress Monitoring.</li>
            <li>Gillingham, A., & Stillman, B. W. (1997). <i>The Gillingham manual</i>. Educators Publishing Service.</li>
            <li>Graham, S., & Harris, K. R. (2005). <i>Writing better: Effective strategies for teaching students with learning difficulties</i>. Brookes Publishing.</li>
            <li>Graham, S., & Harris, K. R. (2009). Almost 30 years of writing research. <i>Learning Disabilities Research & Practice</i>.</li>
            <li>Graham, S., & Miller, L. (1980). Handwriting research and practice: A unified approach. <i>Focus on Exceptional Children</i>.</li>
            <li>Graham, S., & Perin, D. (2007). A meta-analysis of writing instruction for adolescent students. <i>Journal of Educational Psychology</i>.</li>
            <li>Graham, S., & Weintraub, N. (1996). A review of handwriting research. <i>Educational Psychology Review</i>.</li>
            <li>Graham, S., et al. (1997). Role of mechanics in composing. <i>Journal of Educational Psychology</i>.</li>
            <li>Graham, S., et al. (2001). Which manuscript letters do primary grade children write legibly? <i>Journal of Educational Psychology</i>.</li>
            <li>Graham, S., et al. (2000). Is handwriting causally related to learning to write? <i>Journal of Educational Psychology</i>.</li>
            <li>Graham, S., et al. (2011). <i>Informing writing: The benefits of formative assessment</i>. Alliance for Excellent Education.</li>
            <li>Graham, S., et al. (2005). Improving the writing performance, knowledge, and self-efficacy of struggling young writers. <i>Contemporary Educational Psychology</i>.</li>
            <li>Gregg, N., et al. (2007). Timed essay writing: Implications for high-stakes tests. <i>Journal of Learning Disabilities</i>.</li>
            <li>Grimes, D., & Warschauer, M. (2010). Utility in a fallible tool: A multi-site case study of automated writing evaluation. <i>Journal of Technology, Learning, and Assessment</i>.</li>
            <li>Harris, K. R., & Graham, S. (1996). <i>Making the writing process work: Strategies for composition and self-regulation</i>. Brookline Books.</li>
            <li>Hattie, J., & Timperley, H. (2007). The power of feedback. <i>Review of Educational Research</i>.</li>
            <li>Hayes, J. R., & Flower, L. S. (1980). Identifying the organization of writing processes. In <i>Cognitive processes in writing</i>. Lawrence Erlbaum.</li>
            <li>Higgins, E. L., & Raskind, M. H. (2005). The compensatory effectiveness of the Quicktionary Reading Pen II. <i>Journal of Special Education Technology</i>.</li>
            <li>Howe, T. H., et al. (2013). Assessing handwriting intervention effectiveness in elementary school students. <i>OTJR: Occupation, Participation and Health</i>.</li>
            <li>Hoy, M. M., et al. (2011). A systematic review of interventions to improve handwriting. <i>Canadian Journal of Occupational Therapy</i>.</li>
            <li>Individuals with Disabilities Education Act, 20 U.S.C. § 1400. (2004).</li>
            <li>Katusic, S. K., et al. (2009). The forgotten learning disability. <i>Pediatrics</i>.</li>
            <li>Kawano, S., et al. (2018). Handwriting input and recognition for tablet PCs. In <i>Proceedings of the 2018 ACM International Conference</i>.</li>
            <li>Kiewra, K. A. (1989). A review of note-taking: The encoding-storage paradigm. <i>Educational Psychology Review</i>.</li>
            <li>Lindstrom, J. H. (2007). Determining appropriate accommodations for postsecondary students with reading and written expression disorders. <i>Learning Disabilities Research & Practice</i>.</li>
            <li>MacArthur, C. A. (1998). Word processing with speech synthesis and word prediction. <i>Learning Disability Quarterly</i>.</li>
            <li>MacArthur, C. A. (2009). Reflections on research on writing and technology for struggling writers. <i>Learning Disabilities Research & Practice</i>.</li>
            <li>MacArthur, C. A., et al. (1996). Spelling checkers and students with learning disabilities. <i>Learning Disabilities Research & Practice</i>.</li>
            <li>Mayes, S. D., et al. (2009). IQ and neuropsychological predictors of academic achievement. <i>Learning and Individual Differences</i>.</li>
            <li>McMaster, K. L., & Campbell, H. (2008). New and existing curriculum-based writing measures. <i>Exceptional Children</i>.</li>
            <li>Moats, L. C. (1995). <i>Spelling: Development, disability, and instruction</i>. York Press.</li>
            <li>Montague, M. (2008). Self-regulation strategies to improve mathematical problem solving for students with learning disabilities. <i>Learning Disability Quarterly</i>.</li>
            <li>Olsen, J. Z., & Knapton, E. F. (2008). <i>Handwriting Without Tears</i>. Handwriting Without Tears.</li>
            <li>Patton, J. R. (1994). Practical recommendations for using homework with students with learning disabilities. <i>Journal of Learning Disabilities</i>.</li>
            <li>Pauk, W., & Owens, R. J. Q. (2010). <i>How to study in college</i>. Wadsworth.</li>
            <li>Peverly, S. T. (2006). The importance of handwriting speed in adult writing. <i>Developmental Neuropsychology</i>.</li>
            <li>Ratzon, N. Z., et al. (2007). A short-term graphomotor program for improving writing readiness skills of first-grade students. <i>American Journal of Occupational Therapy</i>.</li>
            <li>Re, A. M., et al. (2007). Expressive writing difficulties in children described as exhibiting ADHD symptoms. <i>Journal of Learning Disabilities</i>.</li>
            <li>Rello, L., & Baeza-Yates, R. (2013). Good fonts for dyslexia. In <i>Proceedings of the 15th International ACM SIGACCESS Conference</i>.</li>
            <li>Russell, M., & Plati, T. (2001). Effects of computer versus paper administration of a state-mandated writing assessment. <i>Teachers College Record</i>.</li>
            <li>Saddler, B., & Graham, S. (2005). The effects of peer-assisted sentence-combining instruction on the writing performance of more and less skilled young writers. <i>Journal of Educational Psychology</i>.</li>
            <li>Schilling, D. L., et al. (2003). Classroom seating for children with attention deficit hyperactivity disorder. <i>American Journal of Occupational Therapy</i>.</li>
            <li>Schumaker, J. B., & Deshler, D. D. (2003). Can students with LD become competent writers? <i>Learning Disability Quarterly</i>.</li>
            <li>Schwellnus, H., et al. (2012). Effect of pencil grasp on the speed and legibility of handwriting. <i>American Journal of Occupational Therapy</i>.</li>
            <li>Sheridan, S. M., & Kratochwill, T. R. (2007). <i>Conjoint behavioral consultation</i>. Springer.</li>
            <li>Sireci, S. G., et al. (2005). Test accommodations for students with disabilities. <i>Review of Educational Research</i>.</li>
            <li>Stickney, E. M., et al. (2012). Technology-enhanced assessment of math fact automaticity. <i>Assessment for Effective Intervention</i>.</li>
            <li>Sturm, J. M., & Rankin-Erickson, J. L. (2002). Effects of hand-drawn and computer-generated concept mapping on the expository writing of middle school students with learning disabilities. <i>Learning Disabilities Research & Practice</i>.</li>
            <li>Thurber, D. N. (1993). <i>D'Nealian handwriting</i>. Scott Foresman.</li>
            <li>Tindal, G., & Fuchs, L. (2000). <i>A summary of research on test changes: An empirical basis for defining accommodations</i>. Mid-South Regional Resource Center.</li>
            <li>Troia, G. A. (2006). Writing instruction for students with learning disabilities. In <i>Handbook of writing research</i>. Guilford Press.</li>
            <li>Troia, G. A., & Graham, S. (2002). The effectiveness of a highly explicit, teacher-directed strategy instruction routine. <i>Journal of Learning Disabilities</i>.</li>
            <li>Vygotsky, L. S. (1978). <i>Mind in society: The development of higher psychological processes</i>. Harvard University Press.</li>
            <li>West, T. G. (1997). <i>In the mind's eye: Visual thinkers, gifted people with dyslexia</i>. Prometheus Books.</li>
            <li>Wood, D., et al. (1976). The role of tutoring in problem solving. <i>Journal of Child Psychology and Psychiatry</i>.</li>
            <li>Wright, P. W. D., & Wright, P. D. (2006). <i>Wrightslaw: Special education law</i>. Harbor House Law Press.</li>
            <li>Zimmerman, B. J., & Risemberg, R. (1997). Becoming a self-regulated writer. <i>Contemporary Educational Psychology</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}