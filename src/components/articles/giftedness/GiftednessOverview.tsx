import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Sparkles, Target, Layers, Activity, Users, BookOpen, Globe, Lightbulb, Zap, LineChart, ShieldCheck } from 'lucide-react';

interface GiftednessOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function GiftednessOverview({ setCurrentArticle, initialTab }: GiftednessOverviewProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'definition');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Giftedness: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('giftedness')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About Giftedness
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('giftedness')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About Giftedness
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('definition')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'definition'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Definition & Models
        </button>
        <button
          onClick={() => setActiveTab('traits')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'traits'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Traits & Neurobiology
        </button>
        <button
          onClick={() => setActiveTab('demographics')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'demographics'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Demographics & Education
        </button>
      </div>

      {/* ==========================================
          TAB 1: DEFINITION & MODELS
      ========================================== */}
      {activeTab === 'definition' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Definition Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">What is Giftedness?</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-overview-definition.webp"
              alt="Child deeply engaged in complex learning and problem-solving"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Giftedness refers to exceptional intellectual ability, creativity, or talent that is significantly above average compared to peers. Far beyond simply "getting good grades," it is a pervasive neurocognitive difference resulting in advanced processing, rapid learning, and profound emotional intensity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Brain className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">A Clinical Definition</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">There is no single universally accepted definition. Early conceptions focused purely on individuals scoring above 130 on IQ tests, but modern clinical views emphasize that giftedness is defined by <em>asynchronous development</em> and heightened intensity.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Layers className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Modern Models</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Contemporary models view it as multidimensional. Frameworks like Renzulli's Three-Ring Conception (ability, creativity, task commitment) and Gardner's Multiple Intelligences moved the field beyond pure standardized test scores.<sup className="text-[#10b981] font-bold ml-0.5">1,2</sup></p>
                </div>
              </div>
            </div>
          </div>

          {/* Types & Levels Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Types & Levels of Giftedness</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-overview-levels-hero.webp"
              alt="Infographic showing the expanding spectrum from Moderate to Profound giftedness"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />

            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] mb-6">
              <h3 className="text-[#0c264d] font-bold mb-3 text-sm border-b border-[#ffd166] pb-2 flex items-center gap-2">
                <Target className="text-[#d4a017] w-4 h-4" /> Domains of Giftedness
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 list-disc ml-5 text-xs text-slate-700">
                <li><strong>Intellectual:</strong> Exceptional general cognitive ability and abstract reasoning.</li>
                <li><strong>Creative-Productive:</strong> Developing original ideas, demonstrating extreme fluency and flexibility in thought.</li>
                <li><strong>Specific Academic:</strong> Precocity isolated to distinct areas (e.g., mathematics or language arts) while performing average elsewhere.</li>
                <li><strong>Talent Development:</strong> As outlined in Gagné's DMGT model, transforming raw natural gifts into systematically developed talents.<sup className="text-[#10b981] font-bold ml-0.5">3</sup></li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <h3 className="text-[#0c264d] font-bold text-sm mb-1 text-center">Moderately</h3>
                <p className="text-[10px] text-center text-slate-500 mb-2 font-bold tracking-widest uppercase">IQ 130–144</p>
                <p className="text-xs text-slate-700 text-center leading-relaxed">Represents roughly 2-3% of the population.<sup className="text-[#10b981] font-bold ml-0.5">4</sup> Typically succeed in standard advanced academic programs.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <h3 className="text-[#0c264d] font-bold text-sm mb-1 text-center">Highly</h3>
                <p className="text-[10px] text-center text-slate-500 mb-2 font-bold tracking-widest uppercase">IQ 145–159</p>
                <p className="text-xs text-slate-700 text-center leading-relaxed">Roughly 0.1-1% of the population.<sup className="text-[#10b981] font-bold ml-0.5">5</sup> Often require heavy curriculum differentiation and face social asynchrony.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <h3 className="text-[#0c264d] font-bold text-sm mb-1 text-center">Exceptionally</h3>
                <p className="text-[10px] text-center text-slate-500 mb-2 font-bold tracking-widest uppercase">IQ 160+</p>
                <p className="text-xs text-slate-700 text-center leading-relaxed">Fewer than 1 in 10,000.<sup className="text-[#10b981] font-bold ml-0.5">6</sup> Face profound challenges finding intellectual peers or appropriate education.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <h3 className="text-[#0c264d] font-bold text-sm mb-1 text-center">Profoundly</h3>
                <p className="text-[10px] text-center text-slate-500 mb-2 font-bold tracking-widest uppercase">IQ 180+</p>
                <p className="text-xs text-slate-700 text-center leading-relaxed">Roughly 1 in a million.<sup className="text-[#10b981] font-bold ml-0.5">7</sup> Require extreme, highly specialized educational and emotional support.</p>
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
                <p>1. Renzulli, J. S. (1978). What makes giftedness? Reexamining a definition. <i>Phi Delta Kappan</i>.</p>
                <p>2. Gardner, H. (1983). Frames of mind: The theory of multiple intelligences. <i>Basic Books</i>.</p>
                <p>3. Gagné, F. (2004). Transforming gifts into talents: The DMGT as a developmental theory. <i>High Ability Studies</i>.</p>
                <p>4. Hollingworth, L. S. (1942). Children above 180 IQ Stanford-Binet: Origin and development. <i>World Book Company</i>.</p>
                <p>5. Silverman, L. K. (2009). The measurement of giftedness. In L. V. Shavinina (Ed.), <i>International handbook on giftedness</i>.</p>
                <p>6. Kearney, K. (1996). Highly gifted children in full inclusion classrooms. <i>Highly Gifted Children</i>.</p>
                <p>7. Gross, M. U. M. (1993). Exceptionally gifted children. <i>Routledge</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>National Association for Gifted Children. (2019). What is giftedness?</li>
                <li>U.S. Department of Education. (1993). National excellence: A case for developing America's talent.</li>
                <li>Terman, L. M. (1925). Genetic studies of genius: Vol. 1. Mental and physical traits of a thousand gifted children.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: TRAITS & NEUROBIOLOGY
      ========================================== */}
      {activeTab === 'traits' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Traits Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Asynchrony & Overexcitabilities</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-overview-traits.webp"
              alt="Visual representing asynchronous development and emotional intensity"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Giftedness is rarely a smooth, even advancement. The core lived experience of giftedness involves profound unevenness in development and a highly magnified sensory and emotional experience of the world.
            </p>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 mb-4 clear-both">
              <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2">
                <LineChart className="text-[#0c264d] w-5 h-5" />
                <h3 className="text-[#0c264d] font-bold text-sm">Asynchronous Development</h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed mb-3">Asynchrony occurs when a child's intellectual, physical, social, and emotional domains develop at drastically different rates. A 7-year-old might have the intellectual capacity to grasp existential concepts (like death or global warming) but possess the emotional regulation of a 7-year-old to process the fear, leading to extreme internal conflict and external behavioral misunderstandings.</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2">
                <Zap className="text-[#0c264d] w-5 h-5" />
                <h3 className="text-[#0c264d] font-bold text-sm">Dabrowski's Overexcitabilities</h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed mb-3">Kazimierz Dabrowski proposed that gifted individuals naturally exhibit heightened, intense responses to stimuli across five distinct domains:<sup className="text-[#10b981] font-bold ml-0.5">1</sup></p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 list-disc ml-4 text-xs text-slate-700">
                <li><strong>Psychomotor:</strong> Surplus physical energy, rapid speech, need for movement.</li>
                <li><strong>Sensual:</strong> Heightened sensory input, deep appreciation for aesthetics, texture sensitivities.</li>
                <li><strong>Intellectual:</strong> Ferocious curiosity, need to solve puzzles, constant questioning.</li>
                <li><strong>Imaginational:</strong> Vivid metaphorical thinking, rich inner worlds.</li>
                <li><strong>Emotional:</strong> Profound empathy, deep attachments, intense joy and sorrow.</li>
              </ul>
            </div>
          </div>

          {/* Neurobiology Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Neurobiological Basis</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-overview-brain-hero.webp"
              alt="Glowing brain scan highlighting neural efficiency and the prefrontal cortex"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Giftedness is a physical, neurological reality. Advanced neuroimaging proves that gifted brains are structurally and functionally different from typical brains.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Brain className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Structure & Function</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Scans show distinct variations in cortical thickness and connectivity. The prefrontal cortex, which controls complex executive functioning and abstract reasoning, shows enhanced development and density.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Activity className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Neural Efficiency</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Research suggests gifted brains work highly efficiently, literally requiring less overall neural energy/activation to perform complex cognitive tasks, allowing for incredibly rapid processing speeds.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Sparkles className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Genetic Inheritance</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Twin and adoption studies confirm intelligence has a massive genetic component, with heritability estimates ranging from 50% to 80%.<sup className="text-[#10b981] font-bold ml-0.5">2</sup> However, environmental nourishment is required to actualize it.</p>
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
                <p>1. Dabrowski, K. (1964). Positive disintegration. <i>Little, Brown</i>.</p>
                <p>2. Plomin, R., & Deary, I. J. (2015). Genetics and intelligence differences: Five special findings. <i>Molecular Psychiatry</i>. https://doi.org/10.1038/mp.2014.105</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Silverman, L. K. (1997). The construct of asynchronous development. <i>Peabody Journal of Education</i>.</li>
                <li>Shaw, P., Greenstein, D., Lerch, J., Clasen, L., Lenroot, R., Gogtay, N., ... & Giedd, J. (2006). Intellectual ability and cortical development in children and adolescents. <i>Nature</i>.</li>
                <li>Neubauer, A. C., & Fink, A. (2009). Intelligence and neural efficiency. <i>Neuroscience & Biobehavioral Reviews</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: DEMOGRAPHICS & EDUCATION
      ========================================== */}
      {activeTab === 'demographics' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Demographics Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Prevalence & Special Populations</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-overview-demographics.webp"
              alt="Diverse group of students representing varied gifted populations"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Giftedness exists equally across all races, genders, and socioeconomic backgrounds. However, systemic biases frequently prevent specific populations from being accurately identified or supported in educational settings.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both mb-6">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <LineChart className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Statistical Prevalence</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">If strictly defining giftedness as an IQ ≥130, roughly 2-3% of the population qualifies.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> Broader models identifying domain-specific talent capture 10-15%. In the US, about 6-8% of students actually participate in funded gifted programs.<sup className="text-[#10b981] font-bold ml-0.5">2,3</sup></p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <ShieldCheck className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Twice-Exceptional (2e)</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">2e learners are intellectually gifted but also possess a co-occurring disability (like ADHD, Autism, or Dyslexia). Their high intelligence often masks their disability, and their disability often masks their intelligence, leaving them completely unidentified.</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
              <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                <Globe className="text-[#d4a017] w-4 h-4" />
                <h3 className="text-[#0c264d] font-bold text-sm">Underrepresented Groups</h3>
              </div>
              <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                <li><strong>Cultural & Economic Barriers:</strong> Students from minority or low-income backgrounds are massively underrepresented due to cultural biases in traditional IQ testing and lack of early enrichment resources.</li>
                <li><strong>Gender Dynamics:</strong> While giftedness is found equally across genders, girls face immense social pressure to hide their abilities (especially in STEM) as they enter adolescence due to stereotype threat.</li>
              </ul>
            </div>
          </div>

          {/* Education Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Educational Implications</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-overview-education-hero.webp"
              alt="Student thriving with differentiated instruction and advanced challenges"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <BookOpen className="text-[#2abcd4] w-5 h-5" /> The Need for Differentiation
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Gifted students naturally learn curriculum at a vastly accelerated pace. Without appropriate, rigorous intellectual challenges, they are at high risk of becoming profoundly disengaged, developing poor study habits, or completely underachieving due to boredom. 
                </p>
                <div className="bg-white p-3 rounded-lg border border-[#0c264d] border-opacity-20 shadow-sm flex items-start gap-2">
                  <Lightbulb className="text-[#0c264d] w-4 h-4 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-700">Giftedness alone is never a guarantee of success. Without environmental support, mentorship, and personal motivation, immense potential can go entirely unrealized.</p>
                </div>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Heart className="text-[#2abcd4] w-5 h-5" /> Social-Emotional Support
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Contemporary clinical understanding recognizes that extreme intelligence creates intense social-emotional vulnerabilities. Gifted students require support navigating crippling perfectionism, existential depression/anxiety, and the deep loneliness of feeling fundamentally different from their same-age peers.
                </p>
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
                <p>1. Pfeiffer, S. I. (2015). Essentials of gifted assessment. <i>John Wiley & Sons</i>.</p>
                <p>2. Marland, S. P., Jr. (1972). Education of the gifted and talented: Report to the Congress. <i>U.S. Government Printing Office</i>.</p>
                <p>3. National Center for Education Statistics. (2020). Percentage of public school students enrolled in gifted and talented programs. <i>Digest of Education Statistics</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Baum, S. M., Schader, R. M., & Owen, S. V. (2017). To be gifted and learning disabled. <i>Prufrock Press</i>.</li>
                <li>Ford, D. Y. (2013). Recruiting and retaining culturally different students in gifted education. <i>Prufrock Press</i>.</li>
                <li>Neihart, M., Reis, S. M., Robinson, N. M., & Moon, S. M. (Eds.). (2002). The social and emotional development of gifted children. <i>Prufrock Press</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('giftedness')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About Giftedness
        </button>
      </div>

    </article>
  );
}