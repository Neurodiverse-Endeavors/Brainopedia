import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyscalculiaOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DyscalculiaOverview({ setCurrentArticle, initialTab }: DyscalculiaOverviewProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'what';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-fadeIn">
      {/* Header Area */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-[#0c264d] text-3xl font-normal">
          Dyscalculia: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dyscalculia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shrink-0"
        >
          <span className="text-xl">←</span>
          All About Dyscalculia
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('what')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'what'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          What is Dyscalculia?
        </button>
        <button
          onClick={() => handleTabChange('types')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'types'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Types & Presentations
        </button>
        <button
          onClick={() => handleTabChange('facts')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'facts'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Key Facts & Stats
        </button>
      </div>

      {/* TAB 1: What is Dyscalculia? */}
      {activeTab === 'what' && (
        <div className="space-y-6">
          
          {/* Introduction Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What is Dyscalculia?</h2>
            
            <ImageWithFallback 
              src="/images/dyscalculia/dyscalculia-overview-intro.webp" 
              alt="Mathematical concepts and numbers"
              className="w-56 h-auto rounded-md shadow-sm float-right ml-6 mb-4 mt-1"
            />
            
            <p className="mb-4 text-slate-700 leading-relaxed text-sm">
              Dyscalculia is a specific learning disorder that affects a person's ability to understand and work with numbers and mathematical concepts. 
              It is neurobiological in origin and characterized by difficulties with number sense, memorization of arithmetic facts, accurate calculation, and mathematical reasoning.
            </p>
            
            <p className="mb-4 text-slate-700 leading-relaxed text-sm">
              Importantly, dyscalculia is not a reflection of low intelligence or lack of effort. Many individuals with dyscalculia have average or above-average intelligence and can be highly successful when provided with appropriate support and accommodations.
            </p>
          </div>

          {/* Characteristics Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-3 text-xl">Key Characteristics</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm text-slate-700 leading-relaxed">
              <li><strong>Number sense deficits:</strong> Difficulty understanding what numbers represent or judging quantities.</li>
              <li><strong>Calculation problems:</strong> Struggles with executing basic arithmetic operations.</li>
              <li><strong>Math fact retrieval:</strong> Difficulty memorizing foundational math facts like multiplication tables.</li>
              <li><strong>Procedural difficulties:</strong> Challenges tracking and remembering multi-step math procedures.</li>
              <li><strong>Neurobiological basis:</strong> Brain differences related directly to numerical and spatial processing.</li>
              <li><strong>Unexpected difficulty:</strong> Math challenges that cannot be explained by overall intellectual ability.</li>
            </ul>
          </div>

          {/* Misconceptions Card (Navy) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-4 text-xl">What Dyscalculia Is NOT</h2>
            
            <ImageWithFallback 
              src="/images/dyscalculia/dyscalculia-overview-misconceptions.webp" 
              alt="Frustration with math misconceptions"
              className="w-56 h-auto rounded-md shadow-sm float-left mr-6 mb-4 mt-1"
            />

            <div className="text-sm space-y-3 text-slate-700 mt-2">
              <p><strong>✗ Math anxiety:</strong> While anxiety can co-occur, dyscalculia is a neurobiological condition, not just a fear of math.</p>
              <p><strong>✗ Laziness or lack of effort:</strong> The difficulties are brain-based and physical, not due to insufficient motivation.</p>
              <p><strong>✗ Low intelligence:</strong> Dyscalculia occurs across the entire IQ spectrum.</p>
              <p><strong>✗ Poor teaching:</strong> While quality instruction matters, dyscalculia persists despite good teaching.</p>
              <p><strong>✗ Something you outgrow:</strong> Dyscalculia is lifelong, though individuals learn brilliant strategies to manage it.</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Types & Presentations */}
      {activeTab === 'types' && (
        <div className="space-y-6">
          {/* Prevalence Card (Emerald) */}
          <div className="bg-gray-100 border-2 border-gray rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">How Common is Dyscalculia?</h2>
            
            <ImageWithFallback 
              src="/images/dyscalculia/dyscalculia-overview-prevalence.webp" 
              alt="Classroom diversity and learning differences prevalence"
              className="w-56 h-auto rounded-md shadow-sm float-right ml-6 mb-4 mt-1"
            />

            <ul className="list-disc ml-6 space-y-2 text-sm text-slate-700 leading-relaxed">
              <li><strong>Prevalence:</strong> Dyscalculia affects approximately 3-7% of the global population.<sup>1</sup></li>
              <li><strong>Equally affects all genders:</strong> Current research suggests very similar rates across males and females.<sup>2</sup></li>
              <li><strong>Cross-cultural:</strong> It occurs persistently across all cultures, countries, and languages.</li>
              <li><strong>Socioeconomic distribution:</strong> It affects individuals across all socioeconomic levels equally.</li>
              <li><strong>Often undiagnosed:</strong> Compared to dyslexia, dyscalculia is vastly under-identified in school systems.</li>
            </ul>
          </div>

          {/* Spectrum Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Dyscalculia as a Spectrum</h2>
            
            <p className="mb-4 text-sm text-slate-700 leading-relaxed">
              Dyscalculia exists on a wide continuum of severity, and its specific manifestation varies dramatically among individuals:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Severity Levels</h3>
                <ul className="list-disc ml-6 space-y-1 text-sm text-slate-700">
                  <li><strong>Mild:</strong> Difficulties with specific areas; responds well to targeted intervention.</li>
                  <li><strong>Moderate:</strong> Significant challenges requiring sustained support; math remains effortful.</li>
                  <li><strong>Severe:</strong> Persistent difficulties despite intervention; requires extensive accommodations.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Individual Variation</h3>
                <ul className="list-disc ml-6 space-y-1 text-sm text-slate-700">
                  <li>Specific pattern of strengths and weaknesses</li>
                  <li>Response to therapeutic intervention</li>
                  <li>Unique compensatory strategies developed</li>
                  <li>Impact on daily executive functioning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Co-occurring Conditions Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Co-occurring Conditions</h2>
            
            <ImageWithFallback 
              src="/images/dyscalculia/dyscalculia-overview-cooccurring.webp" 
              alt="Overlap of neurodivergent profiles"
              className="w-56 h-auto rounded-md shadow-sm float-left mr-6 mb-4 mt-1"
            />
            
            <p className="mb-4 text-sm text-slate-700 leading-relaxed">
              Neurodivergence rarely exists in a vacuum. Dyscalculia frequently co-occurs alongside other learning differences and conditions:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-sm text-slate-700 leading-relaxed">
              <li><strong>Dyslexia:</strong> Up to 60% of individuals with dyslexia also show symptoms of dyscalculia.<sup>3</sup></li>
              <li><strong>ADHD:</strong> There are significantly higher rates of math difficulties in individuals with ADHD due to working memory impacts.</li>
              <li><strong>Anxiety disorders:</strong> Math anxiety and generalized anxiety disorders frequently co-occur.</li>
              <li><strong>Working memory deficits:</strong> Challenges holding and manipulating information in real-time are incredibly common.</li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB 3: Key Facts & Stats */}
      {activeTab === 'facts' && (
        <div className="space-y-6">
          
          {/* Mathematical Brain Card (Navy) */}
          <div className="bg-slate-50 border-2 border-slate rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Mathematical Brain</h2>
            
            <ImageWithFallback 
              src="/images/dyscalculia/dyscalculia-overview-brain.webp" 
              alt="Brain networks and parietal lobe functioning"
              className="w-56 h-auto rounded-md shadow-sm float-right ml-6 mb-4 mt-1"
            />
            
            <p className="mb-4 text-sm text-slate-700 leading-relaxed">
              Brain imaging studies show that individuals with dyscalculia exhibit different patterns of brain activation and structural connectivity, specifically within the parietal lobe.<sup>4</sup>
            </p>
            
            <h3 className="text-[#0c264d] font-bold mb-2 mt-4 text-lg">Key Neurological Differences:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm text-slate-700 leading-relaxed">
              <li><strong>Parietal lobe variations:</strong> Reduced activity in the intraparietal sulcus, which is critical for processing numbers.</li>
              <li><strong>Number sense deficits:</strong> A weaker intuitive, physical understanding of quantity and scale.</li>
              <li><strong>Working memory challenges:</strong> Biological difficulty holding multiple numerical figures in the mind simultaneously.</li>
              <li><strong>Procedural automation:</strong> The brain struggles to move math facts from active problem-solving into automatic long-term storage.</li>
            </ul>
          </div>

          {/* Strengths Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd6] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Dyscalculia & Strengths</h2>
            
            <ImageWithFallback 
              src="/images/dyscalculia/dyscalculia-overview-key-strengths.webp" 
              alt="Creative collaboration and thinking"
              className="w-56 h-auto rounded-md shadow-sm float-left mr-6 mb-4 mt-1"
            />
            
            <p className="mb-4 text-sm text-slate-700 leading-relaxed">
              Because the brain develops differently, individuals with dyscalculia frequently demonstrate remarkable, highly developed compensatory strengths in other cognitive areas:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-sm text-slate-700 leading-relaxed">
              <li><strong>Verbal reasoning:</strong> Exceptionally strong language, storytelling, and communication skills.</li>
              <li><strong>Creative problem-solving:</strong> A natural ability to find innovative, non-linear solutions to complex problems.</li>
              <li><strong>Intuitive thinking:</strong> Strong holistic understanding and big-picture systems thinking.</li>
              <li><strong>Visual and artistic abilities:</strong> Many individuals with dyscalculia excel in visual arts, writing, and design.</li>
              <li><strong>Deep empathy:</strong> A profound capacity for understanding and supporting others facing challenges.</li>
            </ul>
          </div>

          {/* Moving Forward Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-3 text-xl">Moving Forward</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Dyscalculia is a well-researched, neurobiological condition that affects mathematical processing, but it absolutely does not limit a person's potential. With early identification, evidence-based instruction, and proper accommodations (like calculators and extended time), individuals with dyscalculia build functional numerical skills and thrive academically and professionally. Understanding this neurodivergence is the first step toward self-advocacy and unlocking those incredible creative strengths.
            </p>
          </div>
        </div>
      )}

      {/* --- BOTTOM BACK BUTTON --- */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dyscalculia')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-normal text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan whitespace-nowrap shrink-0"
        >
          <span className="text-lg">←</span>All About Dyscalculia
        </button>
      </div>

      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b-2 border-[#10b981] pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Shalev, R. S., Auerbach, J., Manor, O., & Gross-Tsur, V. (2000). Developmental dyscalculia: Prevalence and prognosis. <i>European Child & Adolescent Psychiatry</i>.</p>
            <p>2. Devine, A., Soltész, F., Nobes, A., Goswami, U., & Szűcs, D. (2013). Gender differences in developmental dyscalculia depend on diagnostic criteria. <i>Learning and Instruction</i>.</p>
            <p>3. Landerl, K., & Moll, K. (2010). Comorbidity of learning disorders: Prevalence and familial transmission. <i>Journal of Child Psychology and Psychiatry</i>.</p>
            <p>4. Arsalidou, M., & Taylor, M. J. (2011). Is 2+2=4? Meta-analyses of brain areas needed for numbers and calculations. <i>NeuroImage</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b-2 border-[#2abcd4] pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Association.</li>
            <li>Butterworth, B., Varma, S., & Laurillard, D. (2011). Dyscalculia: From brain to education. <i>Science</i>.</li>
            <li>Mazzocco, M. M. (2007). Defining and differentiating mathematical learning disabilities and difficulties. <i>Why is math so hard for some children?</i>. Paul H. Brookes Publishing.</li>
            <li>Wilson, A. J., & Dehaene, S. (2007). Number sense and developmental dyscalculia. <i>Human behavior, learning, and the developing brain</i>. Guilford Press.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}