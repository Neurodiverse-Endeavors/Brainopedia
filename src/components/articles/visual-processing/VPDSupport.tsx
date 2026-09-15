import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Layers, Activity, Settings, Eye, Puzzle, Brain, Clock, FileText, BookOpen, Calculator, Monitor, Mic, Sun, Maximize, Folder, List, Home, Heart, Ear, Wrench, MessageSquare, RefreshCw } from 'lucide-react';

interface VPDSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function VPDSupport({ setCurrentArticle, initialTab }: VPDSupportProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'therapy');

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
          Visual Processing Disorder: Support & Management
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('visual-processing')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About VPD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('visual-processing')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About VPD
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('therapy')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'therapy'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Therapies & Remediation
        </button>
        <button
          onClick={() => setActiveTab('accommodations')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'accommodations'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          School & Technology
        </button>
        <button
          onClick={() => setActiveTab('strategies')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'strategies'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Strategies & Home Life
        </button>
      </div>

      {/* ==========================================
          TAB 1: THERAPIES & REMEDIATION
      ========================================== */}
      {activeTab === 'therapy' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Approach Card (Cyan) - W-64 Centered Hero */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Multidisciplinary Approach</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-support-approach.webp"
              alt="An occupational therapist working with a child on a visual-motor integration task"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Effective support is highly individualized. It blends changing the environment to reduce visual demands, teaching compensatory "workarounds," and directly retraining the brain's processing skills.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Layers className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Environmental Tweaks</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The most immediate intervention. Changing the physical environment to optimize access to information, such as reducing visual clutter on walls or modifying classroom lighting.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Settings className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Compensatory Tactics</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Teaching explicit skills to functionally bypass the visual processing deficits. This heavily relies on organizational systems, assistive technology, and utilizing auditory strengths.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Activity className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Occupational Therapy</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">OTs take a holistic, functional approach. They use structured activities to build visual-motor integration (handwriting, cutting) and apply visual perception training to real-world tasks like dressing.</p>
              </div>
            </div>
          </div>

          {/* Vision Therapy Card (Yellow) - W-64 Centered Hero */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Vision Therapy</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-support-vision.webp"
              alt="A child in a clinical optometry setting doing a structured vision therapy exercise"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Vision therapy is a highly structured program conducted by developmental optometrists, designed to systematically strengthen visual processing and eye-teaming skills.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Eye className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Targeted Skills</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Activities are designed to specifically target eye tracking, visual discrimination, and spatial skills. It essentially acts as physical therapy for the visual system.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Puzzle className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Systematic Growth</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Therapy progresses sequentially from easier tasks to more challenging, integrated ones, forcing the brain to build new, more efficient neurological pathways.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Brain className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Clinical Evidence</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Rigorous studies, such as the Convergence Insufficiency Treatment Trial (CITT), have demonstrated the strong clinical effectiveness of vision therapy for binocular dysfunction.<sup>1</sup></p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Clock className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Time Commitment</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Vision therapy typically requires a substantial commitment: weekly in-office visits paired with strict daily home practice over the course of several months.</p>
              </div>
            </div>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Interventions
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Scheiman, M., Mitchell, G. L., Cotter, S., Cooper, J., Kulp, M., Rouse, M., ... & Wensveen, J. (2005). A randomized clinical trial of treatments for convergence insufficiency in children. <i>Archives of Ophthalmology</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Scheiman, M., & Rouse, M. W. (2006). Optometric management of learning-related vision problems. <i>Mosby Elsevier</i>.</li>
                <li>Schneck, C. M. (2010). Visual perception. In <i>Occupational therapy for children</i>. Mosby Elsevier.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SCHOOL & TECHNOLOGY
      ========================================== */}
      {activeTab === 'accommodations' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Accommodations Card (Slate) - W-64 Centered Hero */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Educational Accommodations</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-support-accommodations.webp"
              alt="A desk showing accommodations: enlarged text, wide spacing, and a physical reading guide"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-300"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Accommodations level the playing field without lowering academic expectations. They ensure the student's visual friction doesn't prevent them from demonstrating their true intellectual ability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <FileText className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Visual Formatting</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Simplify worksheets drastically by reducing visual clutter. Increase the font size, use sans-serif fonts, expand line spacing, and ensure high contrast between text and background.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <BookOpen className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Reading Supports</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Allow the use of physical tracking aids (like a bookmark or a slotted reading window) to isolate single lines of text. This completely prevents the student from skipping lines or losing their place.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Calculator className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Math & Writing Tools</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Provide graph paper to easily align numbers in math columns. For writing, provide raised-line paper or slant boards to improve visual-motor control, and absolutely minimize copying from the board.</p>
              </div>
            </div>
          </div>

          {/* Technology Card (Cyan) - W-64 Centered Hero */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Assistive Tech & Environment</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-support-tech.webp"
              alt="A student using an audiobook platform on a tablet while wearing headphones"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Monitor className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Audiobooks & TTS</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Audiobooks and Text-to-Speech (TTS) software completely bypass the visual processing burden, allowing the student to access complex content without immense visual fatigue.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Mic className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Dictation</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Speech-to-text (voice typing) eliminates handwriting demands entirely, allowing the brain to focus on generating ideas rather than agonizing over visual-motor execution.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Sun className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Lighting & Glare</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Adequate, non-glare lighting heavily improves visual processing. Natural light is best; avoid harsh fluorescent glare on whiteboards or device screens.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Maximize className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Seating & Clutter</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Provide preferential seating with clear sight lines to the board. Ensure the classroom walls aren't overly cluttered with posters, which act as visual "noise."</p>
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
                <li>Sireci, S. G., Scarpati, S. E., & Li, S. (2005). Test accommodations for students with disabilities. <i>Review of Educational Research</i>.</li>
                <li>Esteves, K. J., & Whitten, E. (2011). Assisted reading with digital audiobooks for students with reading disabilities. <i>Reading Horizons</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: STRATEGIES & HOME LIFE
      ========================================== */}
      {activeTab === 'strategies' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Home Strategies Card (Yellow) - W-64 Centered Hero */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Compensatory & Home Support</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-support-home.webp"
              alt="A highly organized homework station utilizing color-coded bins and visual checklists"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Home life relies heavily on building external structures to replace the internal organization skills the brain struggles to provide automatically.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Folder className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Organizational Systems</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Explicit systems compensate for visual-spatial deficits. Use color-coded folders, labeled storage bins, and strict routines to prevent backpacks and bedrooms from becoming chronically disorganized.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <List className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">External Memory Supports</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Never rely purely on visual memory. Use written lists, phone reminders, and calendar systems constantly. Breaking complex chores down into simple step-by-step checklists removes the visual planning burden.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Home className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Homework Routines</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Homework requires a distraction-free environment and frequent, scheduled breaks to prevent visual fatigue. Parents can assist massively by simply reading instructions aloud to bypass the visual hurdle.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Heart className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Family Understanding</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Patience is paramount. Families must understand that messy handwriting or disorganized spaces are neurologically based, not a sign of laziness or a lack of caring.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Strengths Card (Slate) - W-64 Centered Hero */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Strengths & Monitoring</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-support-strengths.webp"
              alt="A child excelling in a hands-on, experiential learning environment"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Ear className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Auditory Talents</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Many individuals with VPD develop immensely powerful auditory and verbal skills. Learning through robust discussion and verbal storytelling leverages this strength perfectly.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Wrench className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Kinesthetic Learning</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Experiential, hands-on learning is often far more effective than flat, 2D visual instruction. Physical manipulatives and active experiments engage the brain without visual strain.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <MessageSquare className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Self-Advocacy</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Teaching individuals to explicitly recognize their needs and confidently request accommodations (like asking for a digital copy of the board notes) builds lifelong independence.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <RefreshCw className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Ongoing Review</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Needs shift as individuals mature. A collaborative team (parents, teachers, and OTs) must regularly review accommodations to ensure they are still data-driven and appropriate.</p>
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
                <li>Kolb, D. A. (2014). Experiential learning: Experience as the source of learning and development. <i>Pearson Education</i>.</li>
                <li>Levine, M. (2003). The myth of laziness. <i>Simon & Schuster</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('visual-processing')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About VPD
        </button>
      </div>

    </article>
  );
}