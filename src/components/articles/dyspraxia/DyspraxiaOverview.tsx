import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyspraxiaOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DyspraxiaOverview({ setCurrentArticle, initialTab }: DyspraxiaOverviewProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'what');

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Dyspraxia: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dyspraxia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Dyspraxia
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('what')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'what'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          What is Dyspraxia?
        </button>
        <button
          onClick={() => setActiveTab('mechanics')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'mechanics'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Brain & Movement
        </button>
        <button
          onClick={() => setActiveTab('facts')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'facts'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Key Facts & Stats
        </button>
      </div>

      {/* ==========================================
          TAB 1: WHAT IS DYSPRAXIA?
      ========================================== */}
      {activeTab === 'what' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Dyspraxia, clinically diagnosed as Developmental Coordination Disorder (DCD), is a lifelong neurological condition that affects a person's ability to plan and process physical movements.<sup>1</sup>
          </p>

          {/* Definition Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Understanding DCD</h2>
            
            <ImageWithFallback 
              src="/images/dyspraxia/dyspraxia-overview-intro.webp" 
              alt="Child developing fine and gross motor skills"
              className="w-96 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The term "dyspraxia" comes from the Greek words "dys" (difficulty) and "praxis" (action). It describes a fundamental difference in how the brain organizes and sequences physical actions, often appearing to others as mere "clumsiness."<sup>2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Core Features</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Coordination:</strong> Noticeable difficulty coordinating both large (gross) and small (fine) body movements.</li>
                  <li><strong>Motor Planning:</strong> Struggling to conceptualize, plan, and carry out an unfamiliar sequence of movements.</li>
                  <li><strong>Lifelong Impact:</strong> It is present from birth and continues into adulthood, though individuals develop unique coping strategies over time.<sup>3</sup></li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">What It Is Not</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Not Muscular:</strong> It is not caused by muscle weakness or physical nerve damage.</li>
                  <li><strong>Not Intellectual:</strong> It has absolutely no relation to a person's overall intelligence.</li>
                  <li><strong>Not Laziness:</strong> The brain is simply taking longer to process the motor pathways.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: THE BRAIN & MOVEMENT
      ========================================== */}
      {activeTab === 'mechanics' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            To execute a movement, the brain must conceptualize the goal, plan the sequential steps, and send clear signals to the body. Dyspraxia disrupts this critical communication loop.
          </p>

          {/* Motor Planning Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Motor Planning Process</h2>
            
            <ImageWithFallback 
              src="/images/dyspraxia/dyspraxia-overview-brain.webp" 
              alt="Visual map of the brain processing movement"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The condition fundamentally involves difficulties with motor planning—the brain's ability to seamlessly plan and execute coordinated movements without conscious thought.<sup>4</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Ideation</h3>
                <p className="text-sm text-slate-700 space-y-2">
                  Forming the idea or concept of what needs to be done. Individuals may struggle to figure out how to approach a new physical task.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Organization</h3>
                <p className="text-sm text-slate-700 space-y-2">
                  Sequencing the right steps in the right order. The brain sends mixed signals about which muscle should move first.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Execution</h3>
                <p className="text-sm text-slate-700 space-y-2">
                  Physically carrying out the movement. This often looks awkward, uncoordinated, or requires massive amounts of intense concentration.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: KEY FACTS & STATS
      ========================================== */}
      {activeTab === 'facts' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Despite being highly prevalent, Dyspraxia remains one of the lesser-known neurodivergent profiles, frequently overshadowed by overlapping conditions.
          </p>

          {/* Statistics Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Prevalence & Overlap</h2>
            
            <ImageWithFallback 
              src="/images/dyspraxia/dyspraxia-overview-overlap.webp" 
              alt="Venn diagram showing neurodivergent overlaps"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Dyspraxia is an isolated condition, but it rarely exists in a vacuum. It heavily overlaps with other learning differences, highlighting the interconnected nature of neurological development.<sup>5</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Population Impact</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Prevalence:</strong> It affects approximately 5-6% of all school-aged children, making it highly common.<sup>6</sup></li>
                  <li><strong>Gender:</strong> Historically diagnosed more frequently in boys, though researchers believe girls are significantly under-diagnosed due to better coping strategies.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Co-occurring Conditions</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>ADHD:</strong> Nearly 50% of individuals with DCD also meet the criteria for ADHD.</li>
                  <li><strong>Dyslexia & Dysgraphia:</strong> Frequently occurs alongside specific learning disabilities affecting reading and handwriting.</li>
                  <li><strong>Autism:</strong> Motor planning difficulties are extremely common across the autism spectrum.</li>
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
          All About Dyspraxia
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
            <p>1. Blank, R., et al. (2012). European Academy for Childhood Disability (EACD): Recommendations on the definition, diagnosis and intervention of developmental coordination disorder. <i>Developmental Medicine & Child Neurology</i>.</p>
            <p>2. Gibbs, J., et al. (2007). Understanding developmental coordination disorder. <i>Archives of Disease in Childhood</i>.</p>
            <p>3. Zwicker, J. G., et al. (2012). Developmental coordination disorder: A review and update. <i>European Journal of Paediatric Neurology</i>.</p>
            <p>4. Sugden, D. A., & Chambers, M. E. (2005). <i>Children with developmental coordination disorder</i>. Whurr Publishers.</p>
            <p>5. Kaplan, B. J., et al. (1998). The Calgary syndrome sample: Motor, cognitive, and behavioral overlaps. <i>Journal of Learning Disabilities</i>.</p>
            <p>6. American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</p>
          </div>
        </div>
      </div>
    </article>
  );
}