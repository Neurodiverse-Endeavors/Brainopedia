import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyspraxiaSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DyspraxiaSymptoms({ setCurrentArticle, initialTab }: DyspraxiaSymptomsProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'motor');

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Dyspraxia: Symptoms & Characteristics
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dyspraxia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          Back to Dyspraxia
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('motor')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'motor'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Motor Challenges
        </button>
        <button
          onClick={() => setActiveTab('cognitive')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'cognitive'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Cognitive & Daily
        </button>
        <button
          onClick={() => setActiveTab('strengths')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'strengths'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Strengths & Growth
        </button>
      </div>

      {/* ==========================================
          TAB 1: MOTOR CHALLENGES
      ========================================== */}
      {activeTab === 'motor' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Dyspraxia profoundly affects both gross motor skills (large body movements) and fine motor skills (small, precise movements). Individuals often face invisible exhaustion from performing activities that others execute automatically.
          </p>

          {/* Motor Skills Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Physical Coordination</h2>
            
            <ImageWithFallback 
              src="/images/dyspraxia/dyspraxia-symptoms-motor.webp" 
              alt="Person tying shoelaces, demonstrating fine motor skills"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because the brain struggles to map out sequential physical actions, everyday tasks require intense concentration, often resulting in delayed milestones or significant physical fatigue.<sup>1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Gross Motor Skills</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Spatial Awareness:</strong> Poor balance and frequently bumping into objects or people.</li>
                  <li><strong>Sports:</strong> Difficulty catching balls, riding a bike, or coordinating jumping jacks.</li>
                  <li><strong>Posture:</strong> Often displaying an awkward gait, slouching, or having difficulty standing completely still.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Fine Motor Skills</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Writing:</strong> Severe difficulty with handwriting, maintaining pencil grip, or typing efficiently.<sup>2</sup></li>
                  <li><strong>Daily Living:</strong> Struggling with multi-step physical tasks like tying shoelaces, using cutlery, or buttoning shirts.</li>
                  <li><strong>Tool Usage:</strong> Awkward handling of scissors, keys, or crafting tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: COGNITIVE & DAILY
      ========================================== */}
      {activeTab === 'cognitive' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Beyond physical movement, dyspraxia heavily impacts the brain's "executive functions." The same neurological delays that affect physical planning also disrupt cognitive planning, organization, and verbal output.
          </p>

          {/* Cognitive Effects Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Cognitive & Verbal Symptoms</h2>
            
            <ImageWithFallback 
              src="/images/dyspraxia/dyspraxia-symptoms-cognitive.webp" 
              alt="Visual map of planning and organizational hurdles"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Individuals with dyspraxia frequently struggle to sequence ideas or retrieve memories quickly, which can make independent daily life highly stressful without proper organizational accommodations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Memory & Planning</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Instructions:</strong> Significant difficulty following multi-step verbal instructions.<sup>3</sup></li>
                  <li><strong>Memory:</strong> Poor short-term memory, frequently forgetting appointments or losing items.<sup>4</sup></li>
                  <li><strong>Time Management:</strong> Underestimating how long tasks will take and struggling to establish functional routines.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Verbal Dyspraxia</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Articulation:</strong> Difficulty coordinating the complex muscle movements of the mouth and tongue required for clear speech.</li>
                  <li><strong>Pacing:</strong> Speaking too loudly, too quickly, or with irregular intonation.</li>
                  <li><strong>Thought Sequencing:</strong> Losing one's train of thought while trying to articulate a complex story.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: STRENGTHS & GROWTH
      ========================================== */}
      {activeTab === 'strengths' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            While dyspraxia presents distinct physical challenges, the neurological profile also confers incredible strengths. Because the brain cannot rely on automatic pathways, individuals develop extraordinary resilience and unique problem-solving capabilities.
          </p>

          {/* Strengths Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Inherent Strengths</h2>
            
            <ImageWithFallback 
              src="/images/dyspraxia/dyspraxia-symptoms-strengths.webp" 
              alt="Creative individual demonstrating high empathy and strategic thinking"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Neurodivergent conditions are not simply a list of deficits. Many individuals with dyspraxia excel in careers and hobbies that leverage their highly creative, big-picture thinking.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Cognitive Talents</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Creativity:</strong> High levels of artistic and conceptual creativity, often thinking entirely outside the box.<sup>5</sup></li>
                  <li><strong>Strategic Thinking:</strong> An incredible ability to see the "big picture" rather than getting bogged down in sequential details.</li>
                  <li><strong>Verbal Intelligence:</strong> Often possessing an advanced vocabulary and deep subject-matter knowledge.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Interpersonal Strengths</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>High Empathy:</strong> A profound capacity to understand and support others who are struggling.</li>
                  <li><strong>Resilience:</strong> Having navigated a world not built for them, they demonstrate incredible grit and determination.</li>
                  <li><strong>Humor:</strong> Often utilizing strong humor to navigate social situations and deflect from physical clumsiness.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dyspraxia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          Back to Dyspraxia
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
            Cited Studies & Literature
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p>1. Missiuna, C., et al. (2007). Mysteries and mazes: Parents' experiences of children with developmental coordination disorder. <i>Canadian Journal of Occupational Therapy</i>.</p>
            <p>2. Rosenblum, S., & Livneh-Zirinski, M. (2008). Handwriting process and product characteristics of children diagnosed with developmental coordination disorder. <i>Human Movement Science</i>.</p>
            <p>3. Alloway, T. P. (2007). Working memory, reading, and mathematical skills in children with developmental coordination disorder. <i>Journal of Experimental Child Psychology</i>.</p>
            <p>4. Alloway, T. P., & Temple, K. J. (2007). A comparison of working memory skills and learning in children with developmental coordination disorder and moderate learning difficulties. <i>Applied Cognitive Psychology</i>.</p>
            <p>5. Kirby, A., et al. (2010). Non-motor problems in children with developmental coordination disorder. <i>Research in Developmental Disabilities</i>.</p>
          </div>
        </div>
      </div>
    </article>
  );
}