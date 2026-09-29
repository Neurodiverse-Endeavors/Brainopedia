import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DysgraphiaCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DysgraphiaCauses({ setCurrentArticle, initialTab }: DysgraphiaCausesProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'biology');

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Dysgraphia: Causes & Origins
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
          onClick={() => setActiveTab('biology')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'biology'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Biology & Genetics
        </button>
        <button
          onClick={() => setActiveTab('cognitive')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'cognitive'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Cognition & Motor
        </button>
        <button
          onClick={() => setActiveTab('environment')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'environment'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Environment & Factors
        </button>
      </div>

      {/* ==========================================
          TAB 1: BIOLOGY & GENETICS
      ========================================== */}
      {activeTab === 'biology' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            The biological roots of dysgraphia are primarily found within the brain's unique neurological wiring and genetic inheritance patterns. By identifying these physical factors, professionals can provide targeted accommodations rather than unfairly questioning a student's effort.
          </p>

          {/* Neurological Basis Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Neurological Basis</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-causes-neurological.webp" 
              alt="Medical mapping of brain regions involved in writing"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Writing is a complex cognitive task requiring precise coordination between the brain's language, motor, and spatial processing centers. Neuroimaging studies reveal that individuals with dysgraphia exhibit reduced activation in left hemisphere regions and altered white matter connectivity during writing tasks.<sup>1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Brain Regions Involved</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Language areas:</strong> Left hemisphere regions like Broca's and Wernicke's areas process vocabulary.</li>
                  <li><strong>Motor cortex:</strong> Directly controls the complex hand movements required for transcription.</li>
                  <li><strong>Parietal lobe:</strong> Processes critical spatial information and integrates sensory feedback.</li>
                  <li><strong>Cerebellum:</strong> Coordinates fine motor fluidity and the sequencing of movements.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Processing Differences</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Motor planning:</strong> Difficulty sequencing the internal commands needed to write.</li>
                  <li><strong>Integration:</strong> Challenges seamlessly combining visual targets with motor execution.</li>
                  <li><strong>Neural speed:</strong> Slower overall processing speed for orthographic coding.</li>
                  <li><strong>Connectivity:</strong> Weakened neural pathways connecting language centers to motor centers.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Genetic Factors Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Genetic Factors</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-causes-genetics.webp" 
              alt="DNA helix representing the hereditary nature of dysgraphia"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Research indicates that dysgraphia is highly heritable, frequently clustering within families and demonstrating high concordance rates in identical twins.<sup>2</sup> This condition is highly polygenic, meaning multiple genes interact to shape how the brain's transcription centers develop.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Familial Patterns</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Family clustering:</strong> Learning disabilities related to writing frequently run through multiple generations.</li>
                  <li><strong>Twin studies:</strong> Identical twins show significantly higher matches for writing differences than fraternal twins.</li>
                  <li><strong>Shared genetics:</strong> Genetic predispositions often overlap closely with dyslexia and ADHD.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Candidate Genes</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Motor development:</strong> Specific genes associated with fine motor coordination pathways.</li>
                  <li><strong>Language genes:</strong> Genetic markers that heavily influence orthographic processing.</li>
                  <li><strong>Ongoing research:</strong> Science continues to map the specific chromosomal variations linking writing and reading challenges.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Developmental Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Acquired vs. Developmental</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-causes-developmental.webp" 
              alt="Timeline of childhood development milestones"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              While dysgraphia is typically a developmental condition present from birth, writing challenges can occasionally be acquired later in life following a medical event. Understanding the timeline of when symptoms emerge helps clinicians determine the exact nature of the writing difficulty.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Developmental Factors</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Early emergence:</strong> Delays in fine motor milestones often predate formal schooling.</li>
                  <li><strong>Critical periods:</strong> Preschool years are highly sensitive windows for establishing physical writing pathways.</li>
                  <li><strong>Delayed automatization:</strong> The brain takes significantly longer to automate the mechanical act of drawing letters.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Acquired Dysgraphia</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Brain injury:</strong> Direct trauma to the specific brain regions required for writing.</li>
                  <li><strong>Stroke:</strong> Left hemisphere strokes frequently damage language formulation centers.</li>
                  <li><strong>Medical conditions:</strong> Neurodegenerative diseases or tumors altering motor pathways.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: COGNITION & MOTOR
      ========================================== */}
      {activeTab === 'cognitive' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            The mechanics of writing require seamless integration between physical motor skills and high-level cognitive processing. When any of these internal systems fall out of sync, the transcription process becomes slow, labored, and exhausting.
          </p>

          {/* Motor & Physical Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Motor & Physical Mechanics</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-causes-motor.webp" 
              alt="Close up of fine motor mechanics during writing"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Many individuals with dysgraphia experience distinct dyspraxia, making it difficult to physically plan and execute the complex motor sequences required for letter formation. These fine motor bottlenecks consume massive amounts of energy, leaving the hand fatigued and cramping.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Motor Planning Deficits</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Apraxia:</strong> Difficulty internally planning the physical execution of written strokes.</li>
                  <li><strong>Motor memory:</strong> Challenges rapidly retrieving the physical pattern required to draw a specific letter.</li>
                  <li><strong>Kinesthetic awareness:</strong> A reduced internal sense of exactly where the hand is positioned in space.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Graphomotor Control</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Letter formation:</strong> An inability to make the drawing of letters a subconscious, automatic task.</li>
                  <li><strong>Stroke sequencing:</strong> Struggling to remember the proper order of lines needed to create a character.</li>
                  <li><strong>Bilateral coordination:</strong> Difficulty using the non-writing hand to stabilize the paper simultaneously.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Language & Memory Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Language & Working Memory</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-causes-language.webp" 
              alt="Visual representation of memory and cognitive processing"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Writing places exceptionally heavy demands on working memory and orthographic processing, which involves recognizing and storing visual word patterns. When these cognitive systems are overwhelmed by the physical act of writing, the student's brilliant oral language fails to translate onto the page.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Orthographic & Phonological</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Visual memory:</strong> Trouble remembering the exact visual spelling patterns of common words.</li>
                  <li><strong>Retrieval speed:</strong> Slow access to stored language data during the act of writing.</li>
                  <li><strong>Sound-to-symbol:</strong> Difficulty instantly connecting a spoken sound to its correct written letter.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Working Memory Overload</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Juggling tasks:</strong> Inability to hold ideas in mind while simultaneously trying to spell and form letters.</li>
                  <li><strong>Lost trains of thought:</strong> Frequently forgetting what to write next mid-sentence due to transcription demands.</li>
                  <li><strong>Reduced capacity:</strong> Exhausting mental resources on mechanics, leaving nothing for creative composition.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Executive & Spatial Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Executive Function & Spatial</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-causes-executive.webp" 
              alt="Student carefully aligning text on ruled paper"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Higher-level executive functions are required to organize thoughts, plan paragraph structures, and self-regulate during the writing process. Additionally, visual-spatial differences can make orienting letters and respecting margins highly challenging.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Planning & Self-Regulation</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Pre-writing organization:</strong> Extreme difficulty organizing thoughts into an outline before drafting.</li>
                  <li><strong>Sequencing ideas:</strong> Problems ordering arguments and paragraphs logically.</li>
                  <li><strong>Self-editing:</strong> A profound inability to detect errors or self-correct while actively writing.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Visual-Spatial Integration</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Letter orientation:</strong> Confusion regarding the directional features of letters (like loops and tails).</li>
                  <li><strong>Page organization:</strong> Difficulty judging margins, spacing, and the layout of text on a blank page.</li>
                  <li><strong>Eye-hand coordination:</strong> A disconnect between what the eyes see and what the hand replicates.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: ENVIRONMENT & CO-OCCURRING
      ========================================== */}
      {activeTab === 'environment' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Dysgraphia does not exist in a vacuum, often sharing underlying biological traits with other common neurodivergent profiles. Furthermore, while the environment does not cause the condition, classroom demands heavily influence the severity of the student's daily struggle.
          </p>

          {/* Co-occurring Conditions Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Co-occurring Conditions</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-causes-cooccurring.webp" 
              alt="Venn diagram of overlapping neurodivergent traits"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Dysgraphia frequently shares genetic etiology and cognitive processing differences with other learning profiles. Recognizing these overlapping traits ensures the individual receives comprehensive, holistic support for their entire neurodivergent experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Dyslexia & ADHD</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Dyslexia:</strong> Shares foundational phonological and orthographic processing differences.</li>
                  <li><strong>ADHD:</strong> Exacerbates working memory limits and makes sustained attention during writing nearly impossible.</li>
                  <li><strong>Shared genetics:</strong> All three conditions frequently overlap within the same genetic family tree.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">DCD & Autism</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Dyspraxia (DCD):</strong> Deeply shares the motor planning and physical execution difficulties.</li>
                  <li><strong>Autism Spectrum:</strong> Often involves similar motor skill delays and executive functioning hurdles.</li>
                  <li><strong>Sensory differences:</strong> Shared sensory processing profiles that can make holding pencils physically uncomfortable.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Environmental Factors Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Environmental Factors & Research</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-causes-environment.webp" 
              alt="Modern classroom environment focused on research-backed interventions"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Environmental factors like inadequate instruction or unrealistic academic pacing can rapidly exacerbate a student's underlying neurological writing delays. Fortunately, ongoing research continues to identify specific neural markers to help educators implement more effective early interventions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Educational Impact</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Inadequate instruction:</strong> A lack of explicit handwriting instruction in early grades prevents skill automation.</li>
                  <li><strong>Unrealistic demands:</strong> Timed essays and heavy copying expectations trigger intense anxiety.</li>
                  <li><strong>Intervention delays:</strong> Waiting to provide support until the student fails compounds emotional distress.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Future Research</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Neural markers:</strong> Identifying exact neurological patterns to improve diagnostic accuracy.</li>
                  <li><strong>Genetic mapping:</strong> Further isolating the specific genes responsible for orthographic coding.</li>
                  <li><strong>Targeted solutions:</strong> Developing evidence-based, technology-driven interventions for modern classrooms.</li>
                </ul>
              </div>
            </div>
          </div>

{/* What Dysgraphia is NOT Card (Soft Pink Warning) */}
          <div className="bg-[#fdf2f8] border-2 border-[#be185d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#831843] font-bold mb-6 text-2xl flex items-center justify-center gap-2">
              <span>⚠</span> What Dysgraphia is NOT
            </h2>
            
            <p className="text-sm text-slate-800 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Dysgraphia is a legitimate, brain-based neurological difference that requires targeted academic accommodations. It is explicitly not a behavioral choice, a result of laziness, or an indicator of low intelligence.
            </p>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#fbcfe8] max-w-4xl mx-auto">
              <h3 className="text-[#831843] font-bold mb-3 text-lg border-b border-[#fbcfe8] pb-2">Debunked Myths</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>"They are just lazy":</strong> Students with dysgraphia expend vastly more energy to write than their peers.</li>
                <li><strong>"They aren't trying hard enough":</strong> The physical and cognitive barriers are involuntary and beyond the student's control.</li>
                <li><strong>"They are not intelligent":</strong> Writing difficulties occur across all IQ levels and do not reflect intellectual capacity.</li>
                <li><strong>"It's just bad parenting":</strong> Strict discipline or forcing a child to practice writing will not cure a neurological difference.</li>
              </ul>
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
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Richards, T. L., et al. (2009). fMRI activation differences between 11-year-old good and poor spellers' access in working memory to temporary and long-term orthographic representations. <i>Journal of Neurolinguistics</i>.</p>
            <p>2. Fisher, S. E., & DeFries, J. C. (2002). Developmental dyslexia: Genetic dissection of a complex cognitive trait. <i>Nature Reviews Neuroscience</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Barnett, A. L., & Prunty, M. (2021). Handwriting difficulties in developmental coordination disorder (DCD). In <i>Developmental coordination disorder</i>. Wiley.</li>
            <li>Berninger, V. W. (2004). Understanding the 'graphia' in developmental dysgraphia. In <i>Developmental motor disorders: A neuropsychological perspective</i>. Guilford Press.</li>
            <li>Berninger, V. W., & Wolf, B. J. (2009). <i>Teaching students with dyslexia and dysgraphia: Lessons from teaching and science</i>. Paul H. Brookes Publishing.</li>
            <li>Deuel, R. K. (1995). Developmental dysgraphia and motor skills disorders. <i>Journal of Child Neurology</i>.</li>
            <li>Fuentes, C. T., et al. (2009). Children with autism show specific handwriting impairments. <i>Neurology</i>.</li>
            <li>Graham, S., & Harris, K. R. (2000). The role of self-regulation and transcription skills in writing and writing development. <i>Educational Psychologist</i>.</li>
            <li>Greven, C. U., et al. (2009). More than just IQ. <i>Psychological Science</i>.</li>
            <li>Heilman, K. M., et al. (2008). Agraphia and micrographia. In <i>Handbook of clinical neurology</i>. Elsevier.</li>
            <li>Katusic, S. K., et al. (2009). The forgotten learning disability: Epidemiology of written language disorder in a population-based birth cohort. <i>Pediatrics</i>.</li>
            <li>McCutchen, D. (1996). A capacity theory of writing: Working memory in composition. <i>Educational Psychology Review</i>.</li>
            <li>Moats, L. C. (1995). <i>Spelling: Development, disability, and instruction</i>. York Press.</li>
            <li>Roux, F. E., et al. (2010). Who actually read Exner? <i>Brain</i>.</li>
            <li>Schulte-Körne, G., et al. (1996). Familial aggregation of spelling disability. <i>Journal of Child Psychology and Psychiatry</i>.</li>
            <li>Willcutt, E. G., et al. (2007). Understanding comorbidity: A twin study of reading disability and attention-deficit/hyperactivity disorder. <i>Developmental Neuropsychology</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}