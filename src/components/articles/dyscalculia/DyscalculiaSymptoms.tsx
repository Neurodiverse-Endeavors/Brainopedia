import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyscalculiaSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DyscalculiaSymptoms({ setCurrentArticle, initialTab }: DyscalculiaSymptomsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'core';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* Header Area */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Dyscalculia: Symptoms & Characteristics
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dyscalculia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Dyscalculia
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('core')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'core'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Core & Age
        </button>
        <button
          onClick={() => handleTabChange('cognitive')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'cognitive'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Cognitive & Daily
        </button>
        <button
          onClick={() => handleTabChange('emotional')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'emotional'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Emotional & Coping
        </button>
      </div>

      {/* ==========================================
          TAB 1: CORE MATHEMATICAL SYMPTOMS & AGE
      ========================================== */}
      {activeTab === 'core' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Centered Intro Paragraph */}
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Dyscalculia presents differently across individuals and developmental stages, but certain core symptoms are consistently observed. Recognizing these signs early can lead to timely intervention and support, improving mathematical outcomes and reducing severe math anxiety.
          </p>

          {/* Core Math Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Core Mathematical Symptoms</h2>
            
            <ImageWithFallback 
              src="/images/dyscalculia/dyscalculia-symptoms-core-math.webp"
              alt="Student struggling with mathematical calculations"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              At its core, dyscalculia fundamentally alters how the brain intuitively grasps and interacts with numerical information. This neurological difference manifests through profound challenges with innate "number sense"—such as estimating quantities or instantly recognizing small amounts—which directly cascades into persistent difficulties with rote counting, memorizing basic math facts, and executing foundational arithmetic without manual workarounds like finger counting.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Number Sense Deficits</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Poor understanding of quantity:</strong> Difficulty grasping what numbers actually represent.</li>
                  <li><strong>Magnitude comparison problems:</strong> Trouble intuitively determining which number is larger.</li>
                  <li><strong>Number line difficulties:</strong> Cannot accurately place numbers on a continuum.</li>
                  <li><strong>Subitizing deficits:</strong> Cannot instantly recognize small quantities (1-4 items) without manually counting.</li>
                  <li><strong>Estimation problems:</strong> Poor at estimating quantities, distances, or calculations.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Counting & Arithmetic</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>Struggles with rote counting, especially beyond 20 or backwards.</li>
                  <li>Relies heavily on finger counting long past the developmentally appropriate age.</li>
                  <li>Extreme difficulty memorizing math facts (like times tables) despite extensive practice.</li>
                  <li>Must manually recalculate basic facts (like 3+4=7) every single time instead of retrieving them from memory.</li>
                  <li>Doesn't understand place value (ones, tens, hundreds) or multi-digit borrowing/carrying.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Symptoms by Age Group Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Symptoms by Age Group</h2>
            
            <ImageWithFallback 
              src="/images/dyscalculia/dyscalculia-symptoms-age.webp"
              alt="Developmental progression of math learning"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because dyscalculia is a lifelong neurobiological difference, its outward symptoms evolve as a child's environment demands increasingly complex mathematical skills. What begins as foundational difficulties with rote counting and recognizing number symbols in early childhood often compounds into severe struggles with fractions, abstract algebra, and real-world financial applications during the teenage and young adult years.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Early Childhood (Ages 3-6)</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>Difficulty learning to count to 10 or recognizing number symbols.</li>
                  <li>Cannot understand one-to-one correspondence (one number = one object).</li>
                  <li>Difficulty comparing basic quantities (more/less, bigger/smaller).</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Elementary (Ages 6-11)</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>Persistent finger counting for simple calculations.</li>
                  <li>Trouble with word problems and basic mathematical reasoning.</li>
                  <li>Confusion about math symbols (+, -, ×, ÷, =) and telling time on analog clocks.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Middle & High (Ages 11+)</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>Difficulty with fractions, decimals, percentages, and negative numbers.</li>
                  <li>Continued reliance on calculators for basic single-digit operations.</li>
                  <li>Problems applying math to real-world situations, such as managing a budget or understanding loans.</li>
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
          
          {/* Associated Cognitive Symptoms Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Associated Cognitive Symptoms</h2>
            
            <ImageWithFallback 
              src="/images/dyscalculia/dyscalculia-symptoms-cognitive.webp"
              alt="Cognitive processing and working memory in math"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Beyond fundamental arithmetic, dyscalculia significantly impacts the broader cognitive networks required for complex mathematical problem-solving. Individuals frequently experience working memory limits that make mental math and multi-step equations exceptionally draining, compounded by executive function and visual-spatial differences that slow processing speed and make organizing numbers or interpreting charts highly challenging.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-200 pb-2">Working Memory</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>Cannot hold numbers in mind while actively performing operations.</li>
                  <li>Frequently forgets steps in the middle of multi-step problems.</li>
                  <li>Extreme difficulty with mental math and following multi-step numerical instructions.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-200 pb-2">Executive Function</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>Very slow at completing math problems, unable to finish timed math tests.</li>
                  <li>Difficulty maintaining focus during math tasks, leading to careless errors.</li>
                  <li>Struggles with organizing mathematical work on paper or planning an approach.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-200 pb-2">Visual-Spatial</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>Problems aligning numbers vertically in columns for addition/subtraction.</li>
                  <li>Difficulty reading charts, graphs, and tables.</li>
                  <li>Trouble visualizing geometric concepts and spatial relationships.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Daily Life Symptoms Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Daily Life Symptoms</h2>
            
            <ImageWithFallback 
              src="/images/dyscalculia/dyscalculia-symptoms-daily-life.webp"
              alt="Everyday situations showing time and money handling challenges"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The impacts of dyscalculia extend far beyond the classroom into everyday adult functioning. Foundational struggles with numerical concepts frequently translate into lifelong difficulties managing personal finances, tracking time, estimating measurements, and confidently navigating spatial directions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Time & Money Management</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>Difficulty reading analog clocks or estimating how long a task will take.</li>
                  <li>Frequently late due to a poor internal sense of time passing.</li>
                  <li>Difficulty calculating correct change, recognizing coin values, or comparing prices.</li>
                  <li>Struggles heavily with adult financial planning, budgeting, or calculating tips.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Measurement & Navigation</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>Trouble measuring ingredients accurately while cooking or baking.</li>
                  <li>Difficulty using rulers, measuring tapes, or gauging amounts (e.g., gas needed).</li>
                  <li>Difficulty reading maps or following directional instructions involving distances.</li>
                  <li>Gets lost easily in familiar places due to poor spatial reasoning.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: EMOTIONAL & COPING
      ========================================== */}
      {activeTab === 'emotional' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Emotional Symptoms Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Emotional and Behavioral Symptoms</h2>
            
            <ImageWithFallback 
              src="/images/dyscalculia/dyscalculia-symptoms-emotional.webp"
              alt="Student experiencing severe math anxiety"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The chronic stress of navigating a society built on numerical fluency often triggers profound psychological impacts for individuals with dyscalculia. Without proper identification and support, early struggles can quickly spiral into severe math anxiety, deeply ingrained avoidance behaviors, and devastating blows to an individual's overall self-esteem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Math Anxiety & Avoidance</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>Extreme nervousness about math tasks, often leading to physical symptoms (sweating, nausea).</li>
                  <li>Panic during math tests or when called upon in math class.</li>
                  <li>Actively refuses to do math homework or makes excuses to miss math class entirely.</li>
                  <li>Prematurely eliminates career options that involve even minor mathematical skills.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Self-Esteem & Frustration</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>Develops learned helplessness, feeling "stupid" or inadequate despite being highly intelligent.</li>
                  <li>Negative self-talk and constantly comparing themselves unfavorably to peers.</li>
                  <li>Frequent meltdowns, tantrums, or giving up easily during math tasks due to intense frustration.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Compensatory Strategies Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Compensatory Strategies</h2>
            
            <ImageWithFallback 
              src="/images/dyscalculia/dyscalculia-symptoms-compensatory.webp"
              alt="Creative coping strategies and tools for math"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because their brains are wired differently, individuals with dyscalculia instinctively develop intelligent, creative workarounds to cope with a world built on numbers. These compensatory strategies allow individuals to function in daily life, though they often rely heavily on memorization, physical tools, and approximations rather than genuine mathematical fluency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Tool & Physical Reliance</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Excessive finger counting:</strong> Or utilizing tally marks to manually track numbers long past typical developmental windows.</li>
                  <li><strong>Total calculator dependence:</strong> Relying exclusively on calculators for even the most basic single-digit calculations.</li>
                  <li><strong>Asking for help:</strong> Consistently needing peer or adult assistance to verify everyday mathematical tasks.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Cognitive Workarounds</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Rote memorization:</strong> Attempting to memorize procedural steps like a script without actually understanding the underlying math concepts.</li>
                  <li><strong>Approximations:</strong> Constantly avoiding precision by rounding numbers or using broad estimates in conversation.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Red Flags Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl flex items-center justify-center gap-2">
              <span className="text-red-600">⚠</span> Red Flags Requiring Evaluation
            </h2>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 max-w-4xl mx-auto">
              <p className="mb-4 text-sm text-[#0c264d] font-bold text-center">Consider a professional neuropsychological evaluation if the individual:</p>
              <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
                <li>Is consistently more than one year behind peers in math despite receiving good instruction.</li>
                <li>Shows mathematical difficulties that are dramatically worse than their performance in reading or writing.</li>
                <li>Uses immature counting strategies (like finger counting) well past age 8 or 9.</li>
                <li>Cannot memorize basic math facts despite extensive, repetitive practice.</li>
                <li>Shows extreme, visceral math anxiety, physical illness, or intense avoidance behaviors when facing numbers.</li>
                <li>Has a known family history of dyscalculia or other specific learning disabilities.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Bottom navigation button */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dyscalculia')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-normal text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan whitespace-nowrap shrink-0"
        >
          <span className="text-lg">←</span>All About Dyscalculia
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
            <li>Butterworth, B., Varma, S., & Laurillard, D. (2011). Dyscalculia: From brain to education. <i>Science</i>.</li>
            <li>Dehaene, S. (2011). <i>The number sense: How the mind creates mathematics</i>. Oxford University Press.</li>
            <li>Geary, D. C. (2004). Mathematics and learning disabilities. <i>Journal of Learning Disabilities</i>.</li>
            <li>Kaufmann, L., & von Aster, M. (2012). The diagnosis and management of dyscalculia. <i>Deutsches Ärzteblatt International</i>.</li>
            <li>Mazzocco, M. M., Feigenson, L., & Halberda, J. (2011). Preschoolers' precision of the approximate number system predicts later school mathematics performance. <i>PLoS One</i>.</li>
            <li>Rubinsten, O., & Tannock, R. (2010). Mathematics anxiety in children with developmental dyscalculia. <i>Behavioral and Brain Functions</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}