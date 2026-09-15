import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Eye, Brain, Layers, Search, Image as ImageIcon, List, Map, PenTool, Puzzle, Box, Activity, Clock, Users, BookOpen, Zap, Network, Home, Heart, Lightbulb, Glasses } from 'lucide-react';

interface VPDOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function VPDOverview({ setCurrentArticle }: VPDOverviewProps) {
  const [activeTab, setActiveTab] = useState('definition');

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
          Visual Processing Disorder: Overview
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
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
          onClick={() => setActiveTab('demographics')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'demographics'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Demographics & Co-occurrence
        </button>
        <button
          onClick={() => setActiveTab('impact')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'impact'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Impact & Lifespan
        </button>
      </div>

      {/* ==========================================
          TAB 1: DEFINITION & TYPES
      ========================================== */}
      {activeTab === 'definition' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Definition Card (Cyan) - Uses W-64 Centered Hero */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Understanding Visual Processing</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-overview-definition-hero.webp"
              alt="Glowing visualization of the brain highlighting the optic nerves and processing lobes"
              className="block mx-auto w-96 h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Visual Processing Disorder (VPD) is a neurological condition affecting how the brain interprets and makes sense of visual information. It is entirely possible for a child to have perfect 20/20 eyesight and still suffer from severe VPD.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Eye className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Vision vs. Processing</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Vision is the eye's mechanical ability to detect light and focus correctly. Processing is what the brain actively does with that image after the optic nerve delivers it.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Brain className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">The Brain's System</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Visual data must be parsed by the occipital lobe (basics), temporal lobe (identifying objects), and parietal lobe (spatial relationships). VPD involves differences in these neural pathways.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Layers className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">A Spectrum of Skills</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Visual processing encompasses numerous distinct skills. A student may have profound deficits in one specific area (like spatial awareness) while being perfectly average in others.</p>
              </div>
            </div>
          </div>

          {/* Types Card (Yellow) - Uses W-Full Centered Hero */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Types of Processing Skills</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-overview-types-hero.webp"
              alt="Infographic map breaking down various visual skills like discrimination and figure-ground"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Search className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Visual Discrimination</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Noticing differences between similar objects. Deficits cause confusion between "b" and "d" or missing subtle differences in pictures.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <ImageIcon className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Figure-Ground</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Distinguishing an object from its background. A student with this deficit will be completely overwhelmed by a busy, cluttered worksheet.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <List className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Visual Sequencing</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Remembering the order of visual data. Deficits lead to severe letter/number reversals and an inability to follow multi-step visual instructions.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Brain className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Visual Memory</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Remembering visual information. Difficulties include trouble remembering what was just read on a page or failing to learn sight words.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Map className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Visual-Spatial</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Understanding position in space. Deficits cause deep confusion with left/right, poor physical navigation, and an inability to read maps or graphs.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <PenTool className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Motor Integration</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Coordinating visual data with physical movement (eye-hand coordination). Highly affects handwriting, cutting with scissors, and sports.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Puzzle className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Visual Closure</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Recognizing an object when only part is visible. Deficits make it incredibly hard to predict what comes next or recognize partially obscured words.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Box className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Form Constancy</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Recognizing objects regardless of their size, orientation, or context. Causes struggles with recognizing the same letter if printed in a new font or size.</p>
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
                <li>Scheiman, M., & Rouse, M. W. (2006). Optometric management of learning-related vision problems. <i>Mosby Elsevier</i>.</li>
                <li>Williams, L. J., & DeAngelis, G. C. (2007). The neural basis of visual processing. In <i>The cognitive neurosciences</i>. MIT Press.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: DEMOGRAPHICS & CO-OCCURRENCE
      ========================================== */}
      {activeTab === 'demographics' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Demographics Card (Slate) - Uses W-64 Centered Hero */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Prevalence & Demographics</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-overview-demographics-hero.webp"
              alt="Student leaning closely into a busy worksheet in a classroom"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-300"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Precise prevalence data for VPD is limited due to varying diagnostic definitions, but it is deeply embedded within the broader spectrum of learning disabilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Activity className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Statistical Prevalence</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">VPD affects a massive portion of neurodivergent children. Research indicates that 75% or more of students diagnosed with a learning disability have co-occurring visual processing deficits.<sup>1</sup></p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Clock className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Age of Recognition</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">It often becomes highly apparent when children enter early elementary school and face rigid demands for reading and writing, though early signs exist in toddlerhood (struggling with basic puzzles).</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Users className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Demographics</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">VPD occurs uniformly across all demographic groups, cultures, and socioeconomic levels. However, accurate diagnosis is heavily dependent on a family's access to specialized clinical assessment services.</p>
              </div>
            </div>
          </div>

          {/* Co-occurring Card (Cyan) - Uses W-Full Centered Hero */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Co-occurring Conditions</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-overview-cooccurring-hero.webp"
              alt="Venn diagram showing VPD intersecting with Dyslexia, ADHD, Autism, NVLD, and Dyspraxia"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <BookOpen className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">VPD & Dyslexia</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">While Dyslexia is primarily a phonological (auditory) issue, visual processing skills heavily contribute to reading proficiency. The two very frequently co-occur.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Zap className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">VPD & ADHD</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The two constantly interact. Difficulty processing visual information depletes attention quickly, while baseline attention problems artificially drag down visual performance.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Network className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">VPD & Autism</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Atypical visual processing is a hallmark of autism, presenting as different visual attention patterns, difficulty with face processing, or an extreme hyper-focus on visual details.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Map className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">VPD & NVLD</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Nonverbal Learning Disability (NVLD) centrally involves visual-spatial deficits. Many clinicians consider severe visual-spatial processing deficits to be the core driving feature of NVLD.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Activity className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">VPD & DCD (Dyspraxia)</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Visual-motor integration difficulties heavily link VPD with Developmental Coordination Disorder. Both severely affect physical coordination, handwriting, and balance.</p>
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
                <p>1. Kulp, M. T., & Schmidt, P. P. (1996). Visual predictors of reading performance in kindergarten and first grade children. <i>Optometry and Vision Science</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Kavale, K., & Forness, S. (2000). Auditory and visual perception processes and reading ability. <i>Learning Disability Quarterly</i>.</li>
                <li>Rourke, B. P. (1989). Nonverbal learning disabilities: The syndrome and the model. <i>Guilford Press</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: IMPACT & LIFESPAN
      ========================================== */}
      {activeTab === 'impact' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Impact Card (Yellow) - Uses W-64 Centered Hero */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Daily Impact & Strengths</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-overview-impact-hero.webp"
              alt="Child struggling with fine motor tasks, contrasted with them thriving via audiobooks"
              className="block mx-auto w-96 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Home className="text-[#d4a017] w-5 h-5" /> Academic & Daily Life
                </h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-[#ffd166] border-opacity-50 shadow-sm">
                    <h4 className="text-[#0c264d] font-bold text-xs mb-1">Academics</h4>
                    <p className="text-xs text-slate-700">Reading is profoundly affected—tracking lines of text and remembering sight words require heavy processing. Mathematics, especially geometry, is incredibly taxing.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#ffd166] border-opacity-50 shadow-sm">
                    <h4 className="text-[#0c264d] font-bold text-xs mb-1">Daily Skills</h4>
                    <p className="text-xs text-slate-700">VPD physically impacts daily life, affecting dressing (buttoning/zippers), eating (using utensils), physical navigation, and heavily impacting sports that require visual-motor tracking.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Lightbulb className="text-[#d4a017] w-5 h-5" /> Built-In Strengths
                </h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-[#ffd166] border-opacity-50 shadow-sm">
                    <h4 className="text-[#0c264d] font-bold text-xs mb-1">Verbal & Auditory Strengths</h4>
                    <p className="text-xs text-slate-700">To compensate, many develop incredibly strong auditory processing skills. Audiobooks and verbal instructions often work far better for them than standard visual materials.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#ffd166] border-opacity-50 shadow-sm">
                    <h4 className="text-[#0c264d] font-bold text-xs mb-1">Innovative Thinking</h4>
                    <p className="text-xs text-slate-700">Having to constantly invent new workarounds for a visually-designed world forces the individual to develop out-of-the-box, highly creative problem-solving skills.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lifespan & Vision Card (Slate) - Uses W-Full Centered Hero */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Lifespan & Vision vs. VPD</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-overview-lifespan-hero.webp"
              alt="Clinical comparison of an optometrist checking an eye chart versus a neuropsychologist administering a visual puzzle"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Clock className="text-[#2abcd4] w-5 h-5" /> VPD Across the Lifespan
                </h3>
                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex gap-2"><span className="font-bold text-[#0c264d] shrink-0">Early Years:</span> Shows up as extreme clumsiness or difficulty copying basic designs and shapes.</li>
                  <li className="flex gap-2"><span className="font-bold text-[#0c264d] shrink-0">School Age:</span> Academic demands expose the deficits, frequently resulting in the child being incorrectly labeled "careless" or "lazy."</li>
                  <li className="flex gap-2"><span className="font-bold text-[#0c264d] shrink-0">Adolescence:</span> Driving presents major challenges due to intense visual-spatial and visual-motor demands.</li>
                  <li className="flex gap-2"><span className="font-bold text-[#0c264d] shrink-0">Adulthood:</span> While core difficulties persist forever, adults generally succeed by choosing careers that bypass their specific deficits and utilizing assistive technology.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Glasses className="text-[#2abcd4] w-5 h-5" /> Distinguishing from Eye Issues
                </h3>
                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex gap-2"><span className="font-bold text-[#0c264d] shrink-0">Refractive Errors:</span> Nearsightedness or astigmatism affects how the eye physically focuses light. Corrected with glasses. VPD persists even with 20/20 vision.</li>
                  <li className="flex gap-2"><span className="font-bold text-[#0c264d] shrink-0">Eye Teaming:</span> Convergence insufficiency means the two eyes physically fail to work together. This is treated with mechanical vision therapy.</li>
                  <li className="flex gap-2"><span className="font-bold text-[#0c264d] shrink-0">The Difference:</span> VPD is strictly a neurological translation error. The camera (the eye) works perfectly, but the computer (the brain) cannot process the file.</li>
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
                <li>Levine, M. (2003). The myth of laziness. <i>Simon & Schuster</i>.</li>
                <li>American Optometric Association. (2017). Care of the patient with learning related vision problems. <i>Optometric Clinical Practice Guideline</i>.</li>
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