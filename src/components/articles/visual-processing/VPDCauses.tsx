import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Eye, Network, Dna, Link, Microscope, Baby, Clock, Activity, ShieldAlert, AlertTriangle, Glasses, Layers, Search, BookOpen, Calculator, PenTool } from 'lucide-react';

interface VPDCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function VPDCauses({ setCurrentArticle, initialTab }: VPDCausesProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'biology');

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
          Visual Processing Disorder: Causes & Origins
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
          onClick={() => setActiveTab('biology')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'biology'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Genetics & Neurology
        </button>
        <button
          onClick={() => setActiveTab('environment')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'environment'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Environment & Development
        </button>
        <button
          onClick={() => setActiveTab('models')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'models'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Models & Co-occurrence
        </button>
      </div>

      {/* ==========================================
          TAB 1: GENETICS & NEUROLOGY
      ========================================== */}
      {activeTab === 'biology' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Neurology Card (Cyan) - W-64 Centered Hero */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Neurological Pathways</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-causes-neurology-hero.webp"
              alt="Glowing visualization of the brain highlighting the ventral and dorsal processing streams"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              VPD arises from differences in how the brain processes visual information, rather than mechanical problems with the eyes themselves.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Eye className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Eyes vs. Brain</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The eyes act solely as cameras capturing light. Visual processing occurs entirely in the brain, which interprets and organizes that data. VPD is a translation error, not a hardware failure.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Brain className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">The Three Lobes</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The occipital lobe processes basic edges and colors. The parietal lobe integrates spatial information (visual-motor). The temporal lobe recognizes complex objects. Atypical development in any of these causes VPD.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Network className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Ventral & Dorsal Streams</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Once data hits the visual cortex, it splits. The Ventral stream is the "what" pathway (object recognition). The Dorsal stream is the "where" pathway (spatial relationships). Differences here drive specific VPD profiles.</p>
              </div>
            </div>
          </div>

          {/* Genetics Card (Yellow) - W-64 Centered Hero */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Genetic Factors</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-causes-genetics-hero.webp"
              alt="Double helix DNA strand interwoven with abstract reading and math symbols"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Dna className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Familial Patterns</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Visual processing difficulties heavily run in families. Parents or siblings of children with VPD frequently possess similar visual deficits or related neurodivergent conditions.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Link className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Shared Genetics</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Genes affecting broad brain development contribute to multiple conditions simultaneously. This shared genetic architecture is why VPD so frequently co-occurs with Dyslexia and Dyscalculia.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Microscope className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Complex Architecture</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">There is no single "VPD gene." Visual processing abilities involve hundreds of genes, each contributing a small effect, which interact closely with environmental and developmental factors.</p>
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
                <li>Williams, L. J., & DeAngelis, G. C. (2007). The neural basis of visual processing. In <i>The cognitive neurosciences</i>. MIT Press.</li>
                <li>Bishop, D. V. (2006). Developmental cognitive genetics: How psychology can inform genetics and vice versa. <i>Quarterly Journal of Experimental Psychology</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: ENVIRONMENT & DEVELOPMENT
      ========================================== */}
      {activeTab === 'environment' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Development Card (Slate) - W-64 Centered Hero */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Developmental Timelines</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-causes-development-hero.webp"
              alt="Visual symbolizing critical periods of brain development in children"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-300"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Clock className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Critical Periods</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The brain utilizes "critical periods" when visual system organization is highly malleable. Disruptions during these exact windows can have lasting, permanent effects on visual processing capabilities.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Baby className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Prenatal & Perinatal</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The visual system begins developing in utero. Premature birth abruptly interrupts this process. Hypoxia (oxygen deprivation) or birth trauma can also significantly impact visual pathway formation.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Activity className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Neuroplasticity</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The brain's ability to wire itself (neuroplasticity) means early visual experiences shape the neural pathways. This is why early intervention and visual-motor practice is so critical.</p>
              </div>
            </div>
          </div>

          {/* Environment Card (Cyan) - W-64 Centered Hero */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Environmental Impacts</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-causes-environment-hero.webp"
              alt="Conceptual medical visual representing environmental or perinatal disruptors"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              While genetics lay the foundation, physical experiences and medical events dictate how those visual processing networks finalize their connections.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <ShieldAlert className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Acquired Brain Injury</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Traumatic brain injury (TBI), concussions, or strokes affecting the occipital, parietal, or temporal regions can cause "acquired VPD," proving the disorder is entirely neurological rather than optical.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Glasses className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Uncorrected Early Vision</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">If a child has severe, uncorrected vision problems during critical developmental periods, the brain receives blurry or misaligned input, causing the processing pathways to wire themselves atypically.</p>
                </div>
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
                <li>Knudsen, E. I. (2004). Sensitive periods in the development of the brain and behavior. <i>Journal of Cognitive Neuroscience</i>.</li>
                <li>Volpe, J. J. (2009). Brain injury in premature infants: A complex amalgam of destructive and developmental disturbances. <i>Lancet Neurology</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: MODELS & CO-OCCURRENCE
      ========================================== */}
      {activeTab === 'models' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Theories Card (Yellow) - W-64 Centered Hero */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Theories & Models</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-causes-models-hero.webp"
              alt="Abstract visualization of the Magnocellular vs. Parvocellular neural pathways"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Layers className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Magnocellular Theory</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The visual system has two parallel pathways: magnocellular (processing motion and rapid changes) and parvocellular (detail and form). This prominent theory proposes that Dyslexia and VPD involve specific deficits in the magnocellular pathway.<sup>1</sup></p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Search className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Evidence & Controversy</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">While functional brain imaging shows many individuals with reading disabilities do possess magnocellular differences, the theory remains debated, as it does not neatly explain every single case of VPD.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Network className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Multiple Pathways</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Current models agree that VPD is heterogeneous. There is no single universal cause. It likely represents a final common pathway resulting from multiple different genetic, developmental, and environmental origins.</p>
              </div>
            </div>
          </div>

          {/* Co-occurrence Card (Slate) - W-64 Centered Hero */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Overlap with Learning Disabilities</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-causes-cooccurrence-hero.webp"
              alt="Overlapping pathway map showing the shared neurological roots of VPD and Dyslexia"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <BookOpen className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">VPD and Dyslexia</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">While dyslexia primarily involves phonological processing, visual processing strictly dictates reading fluency. Shared genetic factors frequently cause these conditions to overlap, compounding reading difficulties.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Calculator className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">VPD and Dyscalculia</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Mathematics relies heavily on visual-spatial processing (geometry, fractions, column alignment). Severe visual-spatial processing deficits directly contribute to many clinical cases of dyscalculia.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <PenTool className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">VPD and Dysgraphia</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Translating visual information into motor output is essential for handwriting. A breakdown in visual-motor integration is a primary driver behind the illegible, laborious handwriting seen in dysgraphia.</p>
              </div>
            </div>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Theories
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Stein, J. (2001). The magnocellular theory of developmental dyslexia. <i>Dyslexia</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Pennington, B. F. (2006). From single to multiple deficit models of developmental disorders. <i>Cognition</i>.</li>
                <li>Butterworth, B., Varma, S., & Laurillard, D. (2011). Dyscalculia: From brain to education. <i>Science</i>.</li>
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