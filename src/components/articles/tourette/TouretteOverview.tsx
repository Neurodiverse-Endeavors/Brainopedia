import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Clock, Activity, TrendingDown, Zap, BatteryWarning, XCircle, CheckCircle2, Users, PieChart } from 'lucide-react';

interface TouretteOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TouretteOverview({ setCurrentArticle, initialTab }: TouretteOverviewProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'what');

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Tourette's: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('tourette')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Tourette's
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
          What is Tourette's?
        </button>
        <button
          onClick={() => setActiveTab('experience')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'experience'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Tic Experience
        </button>
        <button
          onClick={() => setActiveTab('facts')}
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

          {/* Definition Card (Cyan) - Uses CSS Numbered Badges */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Understanding the Spectrum</h2>
            
            <ImageWithFallback 
              src="/images/tourette/tourette-overview-intro.webp" 
              alt="Neurological representation of Tourette Syndrome"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Tourette's is part of a broader spectrum of tic disorders. While tics are the defining feature, the condition is complex and frequently co-occurs with other neurodevelopmental traits.<sup>4</sup>
            </p>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100 max-w-3xl mx-auto">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">Types of Tics</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2abcd4] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
                  <p className="text-sm text-slate-700"><strong>Motor Tics:</strong> Physical movements like eye blinking, shoulder shrugging, facial grimacing, or head jerking.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2abcd4] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
                  <p className="text-sm text-slate-700"><strong>Vocal Tics:</strong> Sounds produced involuntarily, such as throat clearing, sniffing, grunting, or clicking.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2abcd4] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</div>
                  <p className="text-sm text-slate-700"><strong>Complexity:</strong> Tics can be simple (involving one muscle group) or complex (involving coordinated patterns of movement).</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline Card (Slate) - Uses Popped Hover Cards */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Timeline</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-[#f0f9ff] p-3 rounded-full border border-[#2abcd4] border-opacity-30 mb-3">
                  <Clock className="text-[#0A9DC4] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Onset</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Tics typically begin to manifest in childhood, most commonly between the ages of 5 and 10.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-[#fffbeb] p-3 rounded-full border border-[#ffd166] border-opacity-50 mb-3">
                  <Activity className="text-[#d4a017] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Peak Severity</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Symptoms often reach their peak frequency and severity during early adolescence.<sup>3</sup></p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-blue-50 p-3 rounded-full border border-[#0c264d] border-opacity-20 mb-3">
                  <TrendingDown className="text-[#0c264d] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Adulthood</h3>
                <p className="text-xs text-slate-700 leading-relaxed">For many individuals, overall tic severity naturally decreases in late adolescence and early adulthood.</p>
              </div>
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

          {/* Experience Card (Yellow) - Uses Horizontal Rounded Square Icons */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Urges & Suppression</h2>
            
            <ImageWithFallback 
              src="/images/tourette/tourette-overview-experience.webp" 
              alt="Abstract representation of physical tension and release"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Most individuals with Tourette's describe their tics as a semi-voluntary response to an intense, uncomfortable internal sensation, similar to the overwhelming urge to scratch a severe itch.<sup>6</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Zap className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2">The Premonitory Urge</h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-2"><strong>The Sensation:</strong> An uncomfortable physical feeling or building tension in a specific muscle group that occurs just before the tic.<sup>5</sup></p>
                  <p className="text-xs text-slate-700 leading-relaxed"><strong>The Release:</strong> The physical tic is executed specifically to relieve this localized tension. Once performed, the urge momentarily subsides.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <BatteryWarning className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2">The Cost of Suppression</h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-2"><strong>Temporary Control:</strong> Individuals with Tourette's can often voluntarily suppress their tics for varying periods, but it requires immense cognitive effort.</p>
                  <p className="text-xs text-slate-700 leading-relaxed"><strong>The Rebound:</strong> Suppressing tics leads to severe physical tension. Often, it causes a "rebound" where tics explode with greater frequency once the individual relaxes.<sup>5</sup></p>
                </div>
              </div>
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

          {/* Myths Card (Slate) - Uses Plain Lucide Icons */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Debunking Misconceptions</h2>
            
            <ImageWithFallback 
              src="/images/tourette/tourette-overview-facts.webp" 
              alt="Venn diagram separating myths from medical facts"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Most individuals with Tourette's have subtle tics that may go completely unnoticed by strangers. Severe, highly disruptive vocal tics are actually the exception, not the rule.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">The Coprolalia Myth</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>The Stereotype:</strong> Pop culture frequently portrays Tourette's exclusively as the uncontrollable shouting of swear words or inappropriate remarks.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>The Reality:</strong> This specific symptom, known as coprolalia, is incredibly rare. It affects only about 10-15% of all individuals diagnosed with the condition.<sup>2</sup></p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">Prevalence & Demographics</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Frequency:</strong> Tourette's is not exceedingly rare; it affects approximately 1 in 160 children worldwide.<sup>1</sup></p>
                  </li>
                  <li className="flex items-start gap-3">
                    <PieChart className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Gender Split:</strong> For reasons still being researched by neurologists, biological males are diagnosed about 3 to 4 times more frequently than females.<sup>1</sup></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('tourette')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Tourette's
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
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p>1. Knight, T., et al. (2012). Prevalence of tic disorders: A systematic review and meta-analysis. <i>Pediatric Neurology</i>.</p>
            <p>2. Freeman, R. D., et al. (2000). An international perspective on Tourette syndrome: Selected findings from 3,500 individuals in 22 countries. <i>Developmental Medicine & Child Neurology</i>.</p>
            <p>3. Bloch, M. H., & Leckman, J. F. (2009). Clinical course of Tourette syndrome. <i>Journal of Psychosomatic Research</i>.</p>
            <p>4. Jankovic, J. (2001). Tourette's syndrome. <i>New England Journal of Medicine</i>.</p>
            <p>5. Kwak, C., et al. (2003). Premonitory sensory phenomenon in Tourette's syndrome. <i>Movement Disorders</i>.</p>
            <p>6. Leckman, J. F., et al. (1993). Premonitory urges in Tourette's syndrome. <i>American Journal Psychiatry</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
            <li>Cath, D. C., et al. (2011). European clinical guidelines for Tourette syndrome and other tic disorders. Part I: Assessment. <i>European Child & Adolescent Psychiatry</i>.</li>
            <li>Leckman, J. F. (2002). Tourette's syndrome. <i>The Lancet</i>.</li>
            <li>Martino, D., & Leckman, J. F. (2013). <i>Tourette Syndrome</i>. Oxford University Press.</li>
            <li>Woods, D. W., et al. (2005). <i>Understanding Tourette Syndrome: A Guide for Parents and Professionals</i>. Jessica Kingsley Publishers.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}