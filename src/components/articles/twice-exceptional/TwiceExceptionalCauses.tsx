import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Dna, Network, Microscope, Brain, Activity, Hourglass, Baby, Home, Clock, BookX, Zap, Puzzle, Layers, ShieldCheck, Globe, Link, XCircle, Lightbulb } from 'lucide-react';

interface TwiceExceptionalCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TwiceExceptionalCauses({ setCurrentArticle, initialTab }: TwiceExceptionalCausesProps) {
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
          Twice-Exceptional: Causes & Origins
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('twice-exceptional')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About 2e
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('twice-exceptional')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About 2e
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
          Genetics & Neurobiology
        </button>
        <button
          onClick={() => setActiveTab('environment')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'environment'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Development & Environment
        </button>
        <button
          onClick={() => setActiveTab('theories')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'theories'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Theories & Misconceptions
        </button>
      </div>

      {/* ==========================================
          TAB 1: GENETICS & NEUROBIOLOGY
      ========================================== */}
      {activeTab === 'biology' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Genetics Card (Cyan) - Uses Float Image + flow-root to prevent spooling */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Genetics & Epigenetics</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-causes-genetics.webp"
              alt="DNA strand interwoven with abstract patterns representing polygenic heritability"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Twice-exceptionality is not a random coincidence. Research increasingly shows that the very same genetic and neurological differences that contribute to a child's exceptional abilities often directly contribute to their specific challenges.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Dna className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Heritability & Pleiotropy</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Intelligence is highly heritable (estimates show a 50-80% genetic contribution).<sup>1</sup> Pleiotropy occurs when a single gene affects multiple traits. Genetic variants that massively enhance one cognitive ability may simultaneously create deficits in another area.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Network className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Shared Risk Factors</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Genome-wide studies show an overlap between high cognitive ability and conditions like ADHD and Autism. The same genes contributing to advanced reasoning increase vulnerability to these conditions.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Microscope className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Epigenetics</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Epigenetic mechanisms dictate how the environment influences gene expression. Prenatal stress or early environmental factors can flip "switches" on DNA, influencing whether a genetic predisposition manifests purely as a gift, a disability, or both.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Neurobiology Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Neurological Factors</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-causes-neuro-hero.webp"
              alt="Highly active brain scan highlighting distinct neural pathways and connectivity"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Neuroimaging reveals that 2e individuals show a physical blend in brain structure—possessing both the neurological characteristics of giftedness and the neural signatures of their specific disability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Brain className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Hemispheric Activity</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">A 2e student with dyslexia might show the enhanced right-hemisphere activation typical of high giftedness, sitting right alongside the left-hemisphere processing deficits characteristic of dyslexia.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Activity className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Atypical Connectivity</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Variations in neurotransmitters, especially dopamine, drive both high ability and ADHD. The same dopaminergic differences that fuel incredible divergent creativity also disrupt attention regulation.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Hourglass className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Processing Disconnects</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Advanced abstract reasoning circuits often develop rapidly, entirely outpacing the brain's white-matter connectivity required for basic processing speed and working memory efficiency.</p>
              </div>
            </div>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Plomin, R., & Deary, I. J. (2015). Genetics and intelligence differences: Five special findings. <i>Molecular Psychiatry</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Foley-Nicpon, M., Allmon, A., Sieck, B., & Stinson, R. D. (2011). Empirical investigation of twice-exceptionality: Where have we been and where are we going? <i>Gifted Child Quarterly</i>.</li>
                <li>Gilger, J. W., & Hynd, G. W. (2008). Neurodevelopmental variation as a framework for thinking about the twice exceptional. <i>Roeper Review</i>.</li>
                <li>Szyf, M. (2015). Nongenetic inheritance and transgenerational epigenetics. <i>Trends in Molecular Medicine</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: DEVELOPMENT & ENVIRONMENT
      ========================================== */}
      {activeTab === 'environment' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Development Card (Slate) - Uses Float Image + flow-root to prevent spooling */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Development & Environment</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-causes-development.webp"
              alt="Visual of a child in an enriching environment, illustrating environmental scaffolding"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              While twice-exceptionality has strong, undeniable biological roots, a child's environment drastically influences how those abilities and disabilities actually manifest in daily life.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Baby className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Asynchronous Growth</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Uneven development across different domains is the core feature of 2e. The exact same biological developmental processes that create hyper-advanced abilities in one area inherently cause delays or bottlenecks in others.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Clock className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Critical Periods</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The brain develops through "critical periods" when specific skills are most readily acquired. Variations in the timing or duration of these critical periods can permanently alter the brain's cognitive profile.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Home className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Environmental Amplification</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">School and home experiences do not *cause* 2e, but highly enriched environments often make both the gifts and the disabilities much more apparent by placing high demands on the child's processing capabilities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specific Etiologies Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Specific Condition Etiologies</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-causes-conditions-hero.webp"
              alt="Conceptual visual showing different neural signatures for Dyslexia, ADHD, and Autism"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <BookX className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Gifted + Dyslexia</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Geschwind and Galaburda's theory proposed that prenatal testosterone influences brain lateralization, potentially creating both high visual-spatial talent and severe phonological reading difficulties simultaneously.<sup>1</sup></p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Zap className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Gifted + ADHD</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The exact same prefrontal cortex variations and dopamine levels that allow for incredible divergent thinking, rapid idea generation, and hyperfocus also severely impair the brain's ability to regulate attention on demand.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Puzzle className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Gifted + Autism</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The "intense world" theory of autism suggests that extreme neural hyper-connectivity is responsible for both the individual's astonishingly advanced abilities (like savantism) and their debilitating sensory/social overloads.<sup>2</sup></p>
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
                <p>1. Geschwind, N., & Galaburda, A. M. (1987). <i>Cerebral lateralization: Biological mechanisms, associations, and pathology</i>. MIT Press.</p>
                <p>2. Markram, K., & Markram, H. (2010). The intense world theory-A unifying theory of the neurobiology of autism. <i>Frontiers in Human Neuroscience</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Eide, B. L., & Eide, F. F. (2011). <i>The dyslexic advantage: Unlocking the hidden potential of the dyslexic brain</i>. Hudson Street Press.</li>
                <li>Fugate, C. M., Zentall, S. S., & Gentry, M. (2013). Creativity and working memory in gifted students with and without characteristics of attention deficit hyperactive disorder. <i>Gifted Child Quarterly</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: THEORIES & MISCONCEPTIONS
      ========================================== */}
      {activeTab === 'theories' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Theories Card (Yellow) - Uses Float Image + flow-root */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Theoretical Models</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-causes-models.webp"
              alt="Infographic visualization of asynchrony, showing gears of different sizes turning at different speeds"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Researchers use several theoretical frameworks to explain why these intense contradictions exist within a single brain.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Layers className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">The Asynchrony Model</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Silverman's theory suggests that all gifted individuals naturally develop unevenly.<sup>1</sup> In 2e individuals, this asynchrony is simply pushed to its absolute extreme, creating vast chasms between their strengths and weaknesses.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <ShieldCheck className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Dual Differentiation</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Proposes that because the exact same neurological substrate produces *both* the gift and the disability, educators cannot separate them. The student requires accommodations for their disability simultaneously with acceleration for their gifts.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Globe className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Neurodiversity Perspective</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Views 2e as a natural variation in human neurology, rather than a broken brain. The same brain differences that create severe struggles in a standardized classroom provide massive advantages in specific real-world contexts.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Myths Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Co-Occurrence & Misconceptions</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-causes-myths-hero.webp"
              alt="Magnifying glass shattering common misconceptions about 2e students being lazy"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Link className="text-[#2abcd4] w-5 h-5" /> Why Do They Co-Occur?
                </h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="text-[#0c264d] font-bold text-xs mb-1">Shared Etiology</h4>
                    <p className="text-xs text-slate-700">The primary cause of 2e is shared biological pathways. The genetic factors that drive high intelligence inherently increase the risk for specific neurodevelopmental conditions.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="text-[#0c264d] font-bold text-xs mb-1">Compensation Theory</h4>
                    <p className="text-xs text-slate-700">Neuroplasticity allows the brain to "over-develop" intact pathways (creating a gift) to compensate for impaired pathways (a disability), though this doesn't fully explain the extreme highs of 2e.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <XCircle className="text-red-500 w-5 h-5" /> What 2e is NOT Caused By
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  The difficulties experienced by 2e students are neurologically based. They are absolutely NOT caused by:
                </p>
                <div className="bg-white p-3 rounded-lg border border-red-200 shadow-sm flex items-start gap-2 mb-2">
                  <Lightbulb className="text-red-500 w-4 h-4 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-700"><strong>Poor Parenting or Teaching:</strong> While bad environments worsen symptoms, they do not create the neurological wiring of 2e.</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-red-200 shadow-sm flex items-start gap-2">
                  <Lightbulb className="text-red-500 w-4 h-4 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-700"><strong>Laziness or Lack of Effort:</strong> The massive inconsistencies in their performance are due to genuine processing variations, not a lack of willpower or intentional underachievement.</p>
                </div>
              </div>

            </div>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Silverman, L. K. (1997). The construct of asynchronous development. <i>Peabody Journal of Education</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Armstrong, T. (2010). <i>Neurodiversity: Discovering the extraordinary gifts of autism, ADHD, dyslexia, and other brain differences</i>. Da Capo Press.</li>
                <li>Rimm, S. B. (2008). Underachievement syndrome: A national epidemic. In S. I. Pfeiffer (Ed.), <i>Handbook of giftedness in children</i>. Springer.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('twice-exceptional')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About 2e
        </button>
      </div>

    </article>
  );
}