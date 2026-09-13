import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Ear, MessageSquare, BookOpen, Search, Focus, BrainCircuit } from 'lucide-react';

interface NVLDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function NVLDSymptoms({ setCurrentArticle, initialTab }: NVLDSymptomsProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'spatial');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          NVLD: Symptoms & Characteristics
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
          onClick={() => setActiveTab('spatial')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'spatial'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Visual-Spatial & Motor
        </button>
        <button
          onClick={() => setActiveTab('social')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'social'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Social & Academic
        </button>
        <button
          onClick={() => setActiveTab('progression')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'progression'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Progression & Strengths
        </button>
      </div>

      {/* ==========================================
          TAB 1: VISUAL-SPATIAL & MOTOR
      ========================================== */}
      {activeTab === 'spatial' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Spatial Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Visual-Spatial Deficits</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-symptoms-spatial.webp"
              alt="Representation of spatial alignment and visual processing challenges"
              className="w-64 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The foundational symptom of Nonverbal Learning Disability is a profound difficulty understanding and organizing visual and spatial information. While their verbal language skills excel, individuals with NVLD struggle to perceive the physical world accurately, making tasks that require geometric reasoning or spatial awareness incredibly exhausting.<sup className="text-[#10b981] font-bold ml-0.5">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <h3 className="text-[#0c264d] font-bold mb-3 text-sm border-b border-[#2abcd4] border-opacity-20 pb-2">Spatial Perception</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Poor awareness:</strong> Difficulty judging distances, speeds, and spatial relationships between objects.<sup className="text-[#10b981] font-bold ml-0.5">2</sup></li>
                  <li><strong>Navigation:</strong> Getting lost easily and possessing a notably poor sense of direction.</li>
                  <li><strong>The Big Picture:</strong> Hyper-focusing on small visual details while completely missing how parts fit into the whole.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <h3 className="text-[#0c264d] font-bold mb-3 text-sm border-b border-[#2abcd4] border-opacity-20 pb-2">Visual-Motor & Organization</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Integration:</strong> Severe difficulty copying shapes, designs, or building with blocks/LEGOs.</li>
                  <li><strong>Layout:</strong> Trouble organizing visual information on a page, causing messy, overlapping written work.</li>
                  <li><strong>Scanning:</strong> Challenges tracking text visually or interpreting graphs, charts, and maps.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Motor Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Motor Coordination Difficulties</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-symptoms-motor-hero.webp"
              alt="Graphic illustrating fine and gross motor challenges"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because the brain struggles to map the physical environment, individuals with NVLD typically experience significant delays and ongoing challenges with both gross and fine motor coordination, often presenting as general physical "clumsiness."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <h3 className="text-[#0c264d] font-bold mb-3 text-sm border-b border-[#ffd166] pb-2">Gross Motor</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Frequent tripping, bumping into doorframes, or dropping items.<sup className="text-[#10b981] font-bold ml-0.5">3</sup></li>
                  <li>Difficulty with activities requiring balance or bilateral coordination (using both sides of the body).</li>
                  <li>Severe struggles with physical education and team sports.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <h3 className="text-[#0c264d] font-bold mb-3 text-sm border-b border-[#ffd166] pb-2">Fine Motor</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Trouble with daily living skills like buttoning shirts, zipping jackets, or tying shoes.</li>
                  <li>Challenges using scissors or coloring within the lines.</li>
                  <li>Difficulty manipulating small objects quickly or accurately.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <h3 className="text-[#0c264d] font-bold mb-3 text-sm border-b border-[#ffd166] pb-2">Graphomotor (Writing)</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Inconsistent, illegible letter formation despite ample instruction.<sup className="text-[#10b981] font-bold ml-0.5">1</sup></li>
                  <li>Difficulty staying on the lines or sizing letters appropriately.</li>
                  <li>A highly effortful, slow, and labored writing process that causes physical fatigue.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SOCIAL & ACADEMIC
      ========================================== */}
      {activeTab === 'social' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Social Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Social & Emotional Symptoms</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-symptoms-social.webp"
              alt="Conceptual graphic showing missed nonverbal social cues"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Up to 65% of human communication is nonverbal. Because NVLD impairs the brain's ability to read visual data, these individuals operate in a social world where they are essentially "blind" to body language, facial expressions, and unspoken social context.<sup className="text-[#10b981] font-bold ml-0.5">4</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-sm border-b border-gray-200 pb-2">Communication & Interaction</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Reading faces:</strong> Complete inability to interpret subtle emotional expressions or eye contact.</li>
                  <li><strong>Literal thinking:</strong> Missing sarcasm, idioms, and implied meanings, relying entirely on exactly what is said.</li>
                  <li><strong>Social timing:</strong> Talking "too much," dominating conversations, or missing the cues for turn-taking.</li>
                  <li><strong>Space:</strong> Frequently violating personal space bubbles without realizing it.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-sm border-b border-gray-200 pb-2">Emotional Regulation</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Anxiety:</strong> High levels of chronic anxiety, specifically triggered by novel or unstructured social situations.<sup className="text-[#10b981] font-bold ml-0.5">5</sup></li>
                  <li><strong>Rigidity:</strong> Difficulty coping with sudden changes or transitions in daily routines.</li>
                  <li><strong>Isolation:</strong> A heightened risk for depression in adolescence as peer relationships become incredibly complex.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Academic Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Academic & Executive Challenges</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-symptoms-academic-hero.webp"
              alt="Visual representation of academic challenges in math and organization"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              While early academic years (which focus heavily on reading and rote memorization) may be highly successful, students with NVLD typically "hit a wall" in later elementary school as subjects shift toward abstract reasoning, visual data, and complex executive function.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <h3 className="text-[#0c264d] font-bold mb-2 text-sm border-b border-[#2abcd4] border-opacity-20 pb-2">Mathematics</h3>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Severe struggles with geometry, graphing, and fractions.</li>
                  <li>Misaligning numbers in multi-step equations.</li>
                  <li>Inability to visualize math word problems.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <h3 className="text-[#0c264d] font-bold mb-2 text-sm border-b border-[#2abcd4] border-opacity-20 pb-2">Reading & Writing</h3>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Can read perfectly, but struggles to infer the "main idea."</li>
                  <li>Writing is highly verbose but lacks structure or organization.</li>
                  <li>Difficulty reading between the lines.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <h3 className="text-[#0c264d] font-bold mb-2 text-sm border-b border-[#2abcd4] border-opacity-20 pb-2">Sciences</h3>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Inability to interpret textbook charts, maps, or diagrams.</li>
                  <li>Physical clumsiness during hands-on lab experiments.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <h3 className="text-[#0c264d] font-bold mb-2 text-sm border-b border-[#2abcd4] border-opacity-20 pb-2">Executive Function</h3>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Chronically disorganized lockers, desks, and backpacks.</li>
                  <li>Poor time management and inability to plan multi-step projects.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: PROGRESSION & STRENGTHS
      ========================================== */}
      {activeTab === 'progression' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Progression Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Developmental Progression</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-symptoms-progression.webp"
              alt="Timeline of symptom evolution from childhood to adulthood"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The presentation of NVLD evolves dramatically as a child grows. Because they are highly articulate and often learn to read early, their profound struggles with spatial reasoning and social dynamics are frequently dismissed early on as mere quirkiness, behavioral issues, or simple anxiety.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <h3 className="text-[#0c264d] font-bold mb-2 text-sm border-b border-[#ffd166] pb-2">Early Childhood</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Advanced verbal skills mask underlying developmental gaps.</li>
                  <li>Noticeable avoidance of physical activities, playgrounds, or fine-motor toys like coloring and puzzles.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <h3 className="text-[#0c264d] font-bold mb-2 text-sm border-b border-[#ffd166] pb-2">Upper Elementary</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Visual-spatial math difficulties (geometry, long division) suddenly become severe obstacles.</li>
                  <li>Social challenges erupt as peer interactions shift from structured play to complex, unspoken social rules.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <h3 className="text-[#0c264d] font-bold mb-2 text-sm border-b border-[#ffd166] pb-2">Adolescence & Beyond</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Massive struggles with independent life skills that require spatial mapping (like learning to drive).</li>
                  <li>High risk for social isolation and secondary depression without explicit social intervention.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Strengths & Indicators Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Strengths & Key Indicators</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-symptoms-strengths-hero.webp"
              alt="Iconic representation of verbal strengths and diagnostic markers"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              A formal diagnostic evaluation will look for a highly specific cluster of traits. The most definitive marker is the stark contrast between the individual's remarkable verbal assets and their visual-spatial deficits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              {/* Icon Mini-Card 1 */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <MessageSquare className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Advanced Language</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Possesses an incredibly rich vocabulary, though they may speak in a manner that sounds overly formal, pedantic, or "adult-like."</p>
                </div>
              </div>

              {/* Icon Mini-Card 2 */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Ear className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Rote Verbal Memory</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Demonstrates a phenomenal ability to memorize, retain, and effortlessly recite extensive verbal facts, lists, and auditory information.</p>
                </div>
              </div>

              {/* Icon Mini-Card 3 */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <BookOpen className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Early Decoding</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Frequently learns to read and decode complex words well ahead of neurotypical milestones, utilizing immense auditory strength.</p>
                </div>
              </div>

              {/* Icon Mini-Card 4 */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-green-500 border-opacity-30 shrink-0">
                  <BrainCircuit className="text-green-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">The VIQ-PIQ Gap</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The ultimate diagnostic indicator: A standardized IQ test revealing a massive point gap between Verbal IQ and Performance (spatial) IQ.<sup className="text-[#10b981] font-bold ml-0.5">1</sup></p>
                </div>
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
            <p>1. Rourke, B. P. (1995). Syndrome of nonverbal learning disabilities: Neurodevelopmental manifestations. <i>Clinical Child and Family Psychology Review</i>. https://doi.org/10.1007/BF02353232</p>
            <p>2. Drummond, C. R., Ahmad, S. A., & Rourke, B. P. (2005). Rules for the classification of younger children with nonverbal learning disabilities. <i>Archives of Clinical Neuropsychology</i>. https://doi.org/10.1016/j.acn.2004.04.004</p>
            <p>3. Semrud-Clikeman, M., & Hynd, G. W. (1990). Right hemispheric dysfunction in nonverbal learning disabilities: Social, academic, and adaptive functioning in adults and children. <i>Psychological Bulletin</i>. https://doi.org/10.1037/0033-2909.107.2.196</p>
            <p>4. Klin, A., Volkmar, F. R., Sparrow, S. S., Cicchetti, D. V., & Rourke, B. P. (1995). Validity and neuropsychological characterization of Asperger syndrome: Convergence with nonverbal learning disabilities syndrome. <i>Journal of Child Psychology and Psychiatry</i>. https://doi.org/10.1111/j.1469-7610.1995.tb01361.x</p>
            <p>5. Rourke, B. P., Young, G. C., & Leenaars, A. A. (1989). A childhood learning disability that predisposes those afflicted to adolescent and adult depression and suicide risk. <i>Journal of Learning Disabilities</i>. https://doi.org/10.1177/002221948902200305</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Rourke, B. P. (1989). Nonverbal learning disabilities: The syndrome and the model. <i>Guilford Press</i>.</li>
            <li>Semrud-Clikeman, M. (2007). Social competence in children. <i>Springer</i>.</li>
            <li>Thompson, S. (1997). The source for nonverbal learning disorders. <i>LinguiSystems</i>.</li>
          </ul>
        </div>
      </div>

    </article>
  );
}