import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Dna, Network, Brain, Zap, Activity, Home, Puzzle, Target, TrendingUp, Globe, Lightbulb, Sparkles, Layers, Compass } from 'lucide-react';

interface GiftednessCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function GiftednessCauses({ setCurrentArticle, initialTab }: GiftednessCausesProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'biology');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Giftedness: Causes & Origins
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
          Environment & Development
        </button>
        <button
          onClick={() => setActiveTab('theories')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'theories'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Psychology & Theories
        </button>
      </div>

      {/* ==========================================
          TAB 1: GENETICS & NEUROBIOLOGY
      ========================================== */}
      {activeTab === 'biology' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Genetics Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Genetic Factors</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-causes-genetics.webp"
              alt="DNA strand interwoven with abstract patterns representing polygenic heritability"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The development of giftedness results from complex interactions between genetic predispositions, neurobiological factors, and environmental influences. The foundation of high intelligence is deeply rooted in our biology.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Dna className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Heritability</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Twin and adoption studies consistently demonstrate that intelligence is highly heritable. Meta-analyses indicate that approximately 50% to 80% of the variation in human intelligence can be attributed to genetic factors.<sup className="text-[#10b981] font-bold ml-0.5">1</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Network className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Polygenic Nature</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">There is no single "genius gene." Giftedness is polygenic, meaning it is influenced by thousands of tiny genetic variants, each contributing a very small effect to the individual's overall cognitive capacity.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Neurobiology Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Neurobiological Basis</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-causes-neuro-hero.webp"
              alt="Highly active brain scan highlighting efficient neural pathways"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Neuroimaging proves that the brains of gifted individuals are structurally and functionally different. They process information faster, more efficiently, and with greater interconnectivity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Zap className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Neural Efficiency</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Functional MRIs reveal that gifted brains actually use <em>less</em> energy to solve moderately difficult problems than typical brains. They are highly efficient processors.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Brain className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Brain Structure</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The Parieto-Frontal Integration Theory (P-FIT) proposes that high intelligence relies on exceptional white matter connectivity between the frontal and parietal lobes, allowing rapid integration of complex data.<sup className="text-[#10b981] font-bold ml-0.5">2</sup></p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Activity className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Neuroplasticity</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Gifted brains often exhibit enhanced neuroplasticity—the ability to rapidly form strong, new neural connections in response to intense learning, practice, and novel experiences.</p>
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
                <p>2. Jung, R. E., & Haier, R. J. (2007). The Parieto-Frontal Integration Theory (P-FIT) of intelligence: Converging neuroimaging evidence. <i>Behavioral and Brain Sciences</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Neubauer, A. C., & Fink, A. (2009). Intelligence and neural efficiency. <i>Neuroscience & Biobehavioral Reviews</i>.</li>
                <li>Davies, G., et al. (2018). Study of 300,486 individuals identifies 148 independent genetic loci influencing general cognitive function. <i>Nature Communications</i>.</li>
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

          {/* Environment Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Environmental Influences</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-causes-environment.webp"
              alt="Rich early childhood environment with parent scaffolding learning"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Genetics may set the ceiling for potential, but the environment determines how close an individual gets to that ceiling. Environmental nourishment is absolutely required to transform raw intellectual capacity into actualized talent.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Home className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Family & SES</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Socioeconomic Status (SES) heavily impacts talent development. Higher SES families typically provide more educational resources, enrichment opportunities, and academic scaffolding, allowing genetic potential to fully flourish.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Puzzle className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Early Development</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The first years of life represent a critical period for cognitive development. Early sensory experiences, rich language exposure, and cognitive stimulation shape neural development and establish the foundation for later advanced learning.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Practice & Opportunity Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Practice, Chance & Opportunity</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-causes-practice-hero.webp"
              alt="Child intensely practicing a complex skill like chess or music"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Target className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">The Practice Debate</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">While popular culture cites the "10,000-Hour Rule" as the sole cause of expertise, research shows deliberate practice explains only a fraction of performance variance.<sup className="text-[#10b981] font-bold ml-0.5">3</sup> Raw talent and dedicated practice are both necessary.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <TrendingUp className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Matthew Effects</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">"Matthew effects" occur when initial advantages compound over time. A child identified early as gifted receives more resources, mentorship, and opportunities, further accelerating their development over peers.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Globe className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Chance & Luck</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Chance factors—such as birth date, geographic location, and socioeconomic access to high-quality schools—play an undeniable, systemic role in whether a child's raw talent is ever discovered or nurtured.</p>
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
                <p>3. Macnamara, B. N., Hambrick, D. Z., & Oswald, F. L. (2014). Deliberate practice and performance in music, games, sports, education, and professions: A meta-analysis. <i>Psychological Science</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Plucker, J. A., & Peters, S. J. (2016). <i>Excellence gaps in education: Expanding opportunities for talented students</i>. Harvard Education Press.</li>
                <li>Walberg, H. J., & Tsai, S. L. (1983). Matthew effects in education. <i>American Educational Research Journal</i>.</li>
                <li>Ericsson, K. A., Krampe, R. T., & Tesch-Romer, C. (1993). The role of deliberate practice in the acquisition of expert performance. <i>Psychological Review</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: PSYCHOLOGY & THEORIES
      ========================================== */}
      {activeTab === 'theories' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Psychology Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Psychological Factors</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-causes-psychology.webp"
              alt="Student demonstrating intense task commitment and focus"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Beyond structural brain differences and environmental advantages, the realization of giftedness relies heavily on the individual's internal psychological makeup and personality traits.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Lightbulb className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Task Commitment</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Intrinsic motivation, persistence, and the willingness to engage in sustained, grueling effort distinguish those who realize their potential from those who simply have high IQs but underachieve.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Sparkles className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Growth Mindset</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Beliefs about intelligence matter. Gifted students with a "fixed mindset" often avoid challenges for fear of failure, whereas those with a "growth mindset" embrace failure as a necessary step for learning.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Models Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Integrative Models of Giftedness</h2>
            
            <ImageWithFallback 
              src="/images/giftedness/giftedness-causes-models-hero.webp"
              alt="Infographic showing Gagné's DMGT model of gifts transforming into talents"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Layers className="text-[#2abcd4] w-5 h-5" /> The DMGT Model
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Gagné's <em>Differentiated Model of Giftedness and Talent (DMGT)</em> provides the most comprehensive framework for how giftedness develops.<sup className="text-[#10b981] font-bold ml-0.5">4</sup>
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <p className="text-xs text-slate-700"><strong>Gifts:</strong> The raw, natural biological abilities an individual is born with.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <p className="text-xs text-slate-700"><strong>Catalysts:</strong> Environmental factors (teachers, wealth) and intrapersonal factors (motivation, grit) that act upon those raw gifts.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <p className="text-xs text-slate-700"><strong>Talents:</strong> The resulting, systematically developed competencies.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Compass className="text-[#2abcd4] w-5 h-5" /> Domain-Specific Factors
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Contemporary models view giftedness as emerging from dynamic interactions across specific domains. For example:
                </p>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-3">
                  <li><strong>Musical Talent:</strong> Requires genetic auditory processing abilities <em>plus</em> intensive, high-quality practice starting during early childhood "sensitive periods."</li>
                  <li><strong>Athletic Talent:</strong> Depends on genetic physical attributes combined with access to early, specialized, elite training programs.</li>
                </ul>
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
                <p>4. Gagne, F. (2004). Transforming gifts into talents: The DMGT as a developmental theory. <i>High Ability Studies</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Dweck, C. S. (2006). <i>Mindset: The new psychology of success</i>. Random House.</li>
                <li>Renzulli, J. S. (1978). What makes giftedness? Reexamining a definition. <i>Phi Delta Kappan</i>.</li>
                <li>Subotnik, R. F., Olszewski-Kubilius, P., & Worrell, F. C. (2011). Rethinking giftedness and gifted education. <i>Psychological Science in the Public Interest</i>.</li>
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