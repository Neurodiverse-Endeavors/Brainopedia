import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Activity, Volume2, Layers, Info, Users, PieChart } from 'lucide-react';

interface TouretteOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TouretteOverview({ setCurrentArticle, initialTab }: TouretteOverviewProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'what';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Tourette's: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('tourette')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
        >
          <span className="text-xl">←</span>
          All About Tourette's
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('what')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'what'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          What is Tourette's?
        </button>
        <button
          onClick={() => handleTabChange('experience')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'experience'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Tic Experience
        </button>
        <button
          onClick={() => handleTabChange('facts')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'facts'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Facts vs. Myths
        </button>
      </div>

      {/* ==========================================
          TAB 1: WHAT IS TOURETTE'S?
      ========================================== */}
      {activeTab === 'what' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Tourette Syndrome is a neurological condition characterized by sudden, rapid, recurrent, and non-rhythmic motor movements or vocalizations known as tics.
          </p>

          {/* Primary Card (Cyan) - Stacked Lucide Icons */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Understanding the Spectrum</h2>
            
            <ImageWithFallback 
              src="/images/tourette/tourette-overview-intro.webp" 
              alt="Neurological representation of Tourette Syndrome"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Tourette's is part of a broader spectrum of tic disorders. While tics are the defining feature, the condition is complex and frequently co-occurs with other neurodevelopmental traits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Activity className="text-[#0A9DC4] w-7 h-7 mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Motor Tics</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Physical movements like eye blinking, shoulder shrugging, facial grimacing, or head jerking.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Volume2 className="text-[#0A9DC4] w-7 h-7 mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Vocal Tics</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Sounds produced involuntarily, such as throat clearing, sniffing, grunting, or clicking.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Layers className="text-[#0A9DC4] w-7 h-7 mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Complexity</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Tics can be simple (involving one muscle group) or complex (involving coordinated patterns of movement).
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Card (Navy) - Chronological Timeline with 3D Accent Border Cards */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Timeline</h2>
            
            <div className="relative max-w-3xl mx-auto pl-2 sm:pl-4">
              {/* Vertical Timeline Connector Line */}
              <div className="absolute left-6 sm:left-8 top-4 bottom-4 w-0.5 bg-[#0c264d]/40"></div>

              <div className="space-y-6">
                {/* Stage 1 */}
                <div className="relative flex items-start gap-4 sm:gap-6">
                  <div className="relative z-10 w-8 h-8 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center font-bold text-sm shrink-0 shadow-sm ring-2 ring-[#0c264d]">
                    1
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                    <div className="pl-2">
                      <span className="text-[11px] uppercase tracking-wider text-[#576d8e] font-bold block mb-1">
                        Childhood • Ages 5–10
                      </span>
                      <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">Onset</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        Tics typically begin to manifest in childhood, most commonly between the ages of 5 and 10.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="relative flex items-start gap-4 sm:gap-6">
                  <div className="relative z-10 w-8 h-8 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center font-bold text-sm shrink-0 shadow-sm ring-2 ring-[#0c264d]">
                    2
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2abcd4]"></div>
                    <div className="pl-2">
                      <span className="text-[11px] uppercase tracking-wider text-[#576d8e] font-bold block mb-1">
                        Early Adolescence
                      </span>
                      <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">Peak Severity</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        Symptoms often reach their peak frequency and severity during early adolescence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="relative flex items-start gap-4 sm:gap-6">
                  <div className="relative z-10 w-8 h-8 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center font-bold text-sm shrink-0 shadow-sm ring-2 ring-[#0c264d]">
                    3
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                    <div className="pl-2">
                      <span className="text-[11px] uppercase tracking-wider text-[#576d8e] font-bold block mb-1">
                        Late Adolescence & Adulthood
                      </span>
                      <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">Adulthood</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        For many individuals, overall tic severity naturally decreases in late adolescence and early adulthood.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full">
            <button 
              onClick={() => setCurrentArticle?.('tourette')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
            >
              <span className="text-xl">←</span>
              All About Tourette's
            </button>
          </div>

          {/* ===== TAB 1 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
                <li>Bloch, M. H., & Leckman, J. F. (2009). Clinical course of Tourette syndrome. <i>Journal of Psychosomatic Research</i>.</li>
                <li>Jankovic, J. (2001). Tourette's syndrome. <i>New England Journal of Medicine</i>.</li>
                <li>Leckman, J. F. (2002). Tourette's syndrome. <i>The Lancet</i>.</li>
                <li>Martino, D., & Leckman, J. F. (2013). <i>Tourette Syndrome</i>. Oxford University Press.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: THE TIC EXPERIENCE
      ========================================== */}
      {activeTab === 'experience' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            To understand Tourette's, one must understand that tics are not entirely involuntary in the same way a reflex is, nor are they voluntary. They exist in a unique neurological middle ground.
          </p>

          {/* Primary Card (Navy) - 3D Accent Border Cards (No Icons) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Urges & Suppression</h2>
            
            <ImageWithFallback 
              src="/images/tourette/tourette-overview-experience.webp" 
              alt="Abstract representation of physical tension and release"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Unlike classic spinal or brainstem reflexes—which fire automatically without conscious buildup—clinicians often describe tics as <strong>unvoluntary</strong> or semi-voluntary.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> They are not chosen to achieve a goal, yet they frequently arise as a compelled response to an intense internal sensation, similar to the overwhelming urge to scratch a severe itch or hold back a sneeze.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">The Premonitory Urge</h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-2">
                    <strong>The Sensation:</strong> Reported by roughly 80–93% of older children and adults with Tourette's, this is an uncomfortable localized feeling—such as pressure, tension, itchiness, tingling, or a sense that something feels "not right"—that builds just before a tic.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup> (Younger children may not always notice or report these urges.)
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong>The Release:</strong> Performing the tic temporarily relieves this mounting sensory buildup, though the relief is typically brief before the cycle repeats.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">The Cost of Suppression</h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-2">
                    <strong>Temporary Control:</strong> Many individuals can voluntarily suppress tics for periods of time—such as in class or a meeting—but doing so requires active cognitive focus and sustained mental effort.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong>The Rebound:</strong> Holding tics in often intensifies the internal urge, leading to a "rebound" where tics discharge with greater frequency once the person is in a safe, relaxed setting.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full">
            <button 
              onClick={() => setCurrentArticle?.('tourette')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
            >
              <span className="text-xl">←</span>
              All About Tourette's
            </button>
          </div>

          {/* ===== TAB 2 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Cavanna, A. E., & Nani, A. (2013). Tourette syndrome and consciousness of action. <i>Tremor and Other Hyperkinetic Movements</i>.</p>
                <p>2. Leckman, J. F., Walker, D. E., & Cohen, D. J. (1993). Premonitory urges in Tourette's syndrome. <i>American Journal of Psychiatry</i>.</p>
                <p>3. Conelea, C. A., & Woods, D. W. (2008). The influence of contextual factors on tic expression in Tourette's syndrome: A review. <i>Journal of Psychosomatic Research</i>.</p>
              </div>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Kwak, C., et al. (2003). Premonitory sensory phenomenon in Tourette's syndrome. <i>Movement Disorders</i>.</li>
                <li>Leckman, J. F. (2002). Tourette's syndrome. <i>The Lancet</i>.</li>
                <li>Martino, D., & Leckman, J. F. (2013). <i>Tourette Syndrome</i>. Oxford University Press.</li>
                <li>Woods, D. W., et al. (2005). <i>Understanding Tourette Syndrome: A Guide for Parents and Professionals</i>. Jessica Kingsley Publishers.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: FACTS VS. MYTHS
      ========================================== */}
      {activeTab === 'facts' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Media representations of Tourette Syndrome have historically been highly exaggerated, leading to widespread public misunderstanding of what the condition actually looks like.
          </p>

          {/* Primary Card (Yellow) - Double-Ring Navy Icon Badges Stacked Above Text */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Debunking Misconceptions</h2>
            
            <ImageWithFallback 
              src="/images/tourette/tourette-overview-facts.webp" 
              alt="Visual diagram separating myths from medical facts"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Most individuals with Tourette's have subtle tics that may go completely unnoticed by strangers. Severe, highly disruptive vocal tics are actually the exception, not the rule.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <Info className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">The Coprolalia Myth</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Pop culture often portrays Tourette's as uncontrollable swearing, yet this specific symptom (coprolalia) affects only about 10–15% of diagnosed individuals.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Prevalence</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Tourette's is not exceedingly rare; it affects approximately 1 in 160 children worldwide.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <PieChart className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Gender Split</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  For reasons still being researched by neurologists, biological males are diagnosed about 3 to 4 times more frequently than females.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full">
            <button 
              onClick={() => setCurrentArticle?.('tourette')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
            >
              <span className="text-xl">←</span>
              All About Tourette's
            </button>
          </div>

          {/* ===== TAB 3 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Freeman, R. D., et al. (2000). An international perspective on Tourette syndrome: Selected findings from 3,500 individuals in 22 countries. <i>Developmental Medicine & Child Neurology</i>.</p>
                <p>2. Knight, T., et al. (2012). Prevalence of tic disorders: A systematic review and meta-analysis. <i>Pediatric Neurology</i>.</p>
              </div>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
                <li>Cath, D. C., et al. (2011). European clinical guidelines for Tourette syndrome and other tic disorders. Part I: Assessment. <i>European Child & Adolescent Psychiatry</i>.</li>
                <li>Martino, D., & Leckman, J. F. (2013). <i>Tourette Syndrome</i>. Oxford University Press.</li>
                <li>Woods, D. W., et al. (2005). <i>Understanding Tourette Syndrome: A Guide for Parents and Professionals</i>. Jessica Kingsley Publishers.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}