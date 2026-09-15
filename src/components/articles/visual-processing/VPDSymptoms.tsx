import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Eye, Search, Image as ImageIcon, List, Brain, Map, PenTool, Puzzle, BookOpen, Calculator, Home, Heart, Users, AlertTriangle, Baby, GraduationCap, Briefcase, Clock, LayoutGrid } from 'lucide-react';

interface VPDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function VPDSymptoms({ setCurrentArticle, initialTab }: VPDSymptomsProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'visual');

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
          Visual Processing Disorder: Symptoms & Characteristics
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
          onClick={() => setActiveTab('visual')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'visual'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Visual Skills Profile
        </button>
        <button
          onClick={() => setActiveTab('academic')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'academic'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Academic & Daily Impact
        </button>
        <button
          onClick={() => setActiveTab('lifespan')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'lifespan'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Social & Lifespan
        </button>
      </div>

      {/* ==========================================
          TAB 1: VISUAL SKILLS PROFILE
      ========================================== */}
      {activeTab === 'visual' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Core Visual Deficits Card (Cyan) - Uses W-64 Centered Hero */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Core Visual Deficits</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-symptoms-discrimination-hero.webp"
              alt="Close up of a student struggling to read with letters looking identical"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              VPD encompasses a wide array of sub-skills. A student may struggle profoundly in one of these areas while performing perfectly in another.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Search className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Visual Discrimination</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The brain struggles to notice differences between similar shapes. This causes persistent confusion between "b" and "d," or reading the word "saw" as "was." This is a visual shape issue, not a phonological one.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <ImageIcon className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Figure-Ground</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The inability to distinguish an object from its background. Individuals easily lose their place while reading, struggle to find items in a cluttered room, and are quickly overwhelmed by visually busy worksheets.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <List className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Visual Sequencing</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Difficulty seeing and remembering the order of visual information. This leads to persistent letter or number reversals and an inability to follow multi-step visual instructions.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Brain className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Visual Memory</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Struggling to remember visual information. This makes copying from a blackboard incredibly slow and laborious, as the student must look back and forth repeatedly for every single word.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Spatial & Motor Card (Yellow) - Uses W-Full Centered Hero */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Spatial, Motor & Constancy</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-symptoms-spatial-hero.webp"
              alt="Child attempting to copy a geometric shape, demonstrating visual-motor challenges"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Map className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Visual-Spatial</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Confusion regarding position in space. Deficits cause deep confusion with directional instructions (left/right), poor physical navigation, and extreme difficulty reading maps, graphs, or geometric shapes.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <PenTool className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Motor Integration</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The brain struggles to coordinate visual data with physical movement (eye-hand coordination). This highly affects the legibility of handwriting, cutting with scissors, tying shoes, and playing sports.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Puzzle className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Closure & Constancy</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Closure is the ability to recognize an object when only part is visible. Constancy is recognizing an object regardless of its size or font. Deficits make it incredibly hard to recognize words printed in new formats.</p>
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
                <li>Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). Developmental Test of Visual Perception (3rd ed.). <i>Pro-Ed</i>.</li>
                <li>Scheiman, M., & Rouse, M. W. (2006). Optometric management of learning-related vision problems. <i>Mosby Elsevier</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: ACADEMIC & DAILY IMPACT
      ========================================== */}
      {activeTab === 'academic' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Academic Card (Slate) - Uses W-64 Centered Hero */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Academic Manifestations</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-symptoms-academic-hero.webp"
              alt="Cluttered math worksheet showing how visual issues impact calculation"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-300"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Because modern schooling relies so heavily on visual processing (reading text, copying notes, aligning numbers), VPD creates severe academic friction across almost every subject.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <BookOpen className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Reading Specifics</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Reading is significantly slower because each word requires extra visual processing time. Students frequently skip words, skip lines, or suffer from severe "visual fatigue" and headaches when reading for extended periods.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Calculator className="text-[#0c264d] w-5 h-5" />
               </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Math Specifics</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Students frequently reverse numbers (6/9) or transpose digits (writing 52 instead of 25). Keeping numbers aligned in columns for multi-digit calculations is extremely challenging without the aid of graph paper.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Living Card (Cyan) - Uses W-Full Centered Hero */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Daily Living & Self-Care</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-symptoms-daily-hero.webp"
              alt="Child frustrated while trying to button a shirt, highlighting motor impacts"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              VPD doesn't stop when school ends. It bleeds into practical, daily living tasks that require visual-motor coordination and spatial planning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <LayoutGrid className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Dressing & Hygiene</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Buttoning shirts, zipping jackets, tying shoes, and matching clothes appropriately all involve heavy visual-motor processing. Getting dressed often takes much longer and causes morning friction.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Home className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Eating & Navigation</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Using utensils precisely or pouring drinks without spilling requires excellent visual-motor coordination. These children may appear exceptionally "clumsy" or bump into furniture constantly.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <List className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Personal Organization</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Spatial planning—figuring out where things should go—doesn't come naturally. Backpacks, school lockers, and bedrooms may be chronically, overwhelmingly disorganized.</p>
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
                <li>Levine, M. (2003). The myth of laziness. <i>Simon & Schuster</i>.</li>
                <li>Schneck, C. M. (2010). Visual perception. In <i>Occupational therapy for children</i>. Mosby Elsevier.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: SOCIAL & LIFESPAN
      ========================================== */}
      {activeTab === 'lifespan' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Social Impact Card (Yellow) - Uses W-64 Centered Hero */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Social & Emotional Impact</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-symptoms-social-hero.webp"
              alt="Student sitting apart from peers playing a ball game, illustrating avoidance"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              When a child constantly struggles with tasks that seem effortless to their peers, the emotional toll is immediate and severe.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <AlertTriangle className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Frustration & Avoidance</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Frustration with visual tasks leads directly to avoidance—resisting reading or homework. This is tragically often misinterpreted by adults as laziness, carelessness, or oppositional behavior.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Heart className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Low Self-Esteem & Social Impact</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Children frequently internalize their struggles, believing they are "stupid." Difficulty with visual-motor activities like sports or crafts means they are often picked last, leading them to avoid group social activities entirely.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Age-Related Trajectory Card (Slate) - Uses W-Full Centered Hero */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Age-Related Manifestations</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-symptoms-lifespan-hero.webp"
              alt="Timeline visual showing a toddler with a puzzle transitioning to an adult using tech"
              className="block mx-auto w-96
               h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Baby className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Early Childhood</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Presents primarily as difficulty with shape puzzles, extreme clumsiness, and significant delays in learning to color, cut with scissors, or recognize basic letters.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <GraduationCap className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">School-Age</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Academic demands fully reveal the disorder. Reading difficulties, illegible handwriting, math column struggles, and persistent letter reversals become highly apparent.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Users className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Adolescence</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Higher-level math and rapid note-taking severely challenge the student. Furthermore, learning to drive presents major safety challenges due to visual-spatial deficits.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Briefcase className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Adulthood</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Symptoms continue, but adults typically develop robust workarounds. They naturally select careers that avoid visual-motor demands and heavily utilize assistive technology.</p>
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
                <li>American Optometric Association. (2017). Care of the patient with learning related vision problems. <i>Optometric Clinical Practice Guideline</i>.</li>
                <li>Beery, K. E., et al. (2010). Beery-Buktenica Developmental Test of Visual-Motor Integration (6th ed.). <i>Pearson</i>.</li>
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