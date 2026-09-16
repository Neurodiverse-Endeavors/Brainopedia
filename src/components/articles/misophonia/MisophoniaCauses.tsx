import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface MisophoniaCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function MisophoniaCauses({ setCurrentArticle, initialTab }: MisophoniaCausesProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'neurology');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px]">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Causes & Origins of Misophonia
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('misophonia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About Misophonia
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('misophonia')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About Misophonia
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <button
          onClick={() => setActiveTab('neurology')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'neurology'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Neurology & Brain
        </button>
        <button
          onClick={() => setActiveTab('motor')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'motor'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Motor Basis
        </button>
        <button
          onClick={() => setActiveTab('genetics')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'genetics'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Genetics & Context
        </button>
      </div>

      {/* ==========================================
          TAB 1: NEUROLOGY & BRAIN
      ========================================== */}
      {activeTab === 'neurology' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Neurological Shift Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Neurological Shift</h2>
            
            <ImageWithFallback 
              src="/images/misophonia/misophonia-causes-brain.webp"
              alt="Glowing brain visualization highlighting the limbic system"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              While the exact cause is still being researched, advanced brain imaging has provided massive clinical breakthroughs. Misophonia is now overwhelmingly viewed as a structural neurological condition rather than a purely psychological one.<sup>1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Hyper-Connectivity</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Research suggests that misophonia is caused by severe "hyper-connectivity" between the brain's auditory processing system and the limbic system (the emotional center). Sound is physically routed to the emotion centers too intensely.<sup>2</sup></p>
                </div>
              </div>

              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">The Salience Network</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The brain's "salience network" acts as a filter, deciding what sensory data matters. In misophonia, this network is broken, incorrectly identifying mundane trigger sounds as highly threatening and demanding an immediate, massive emotional response.<sup>3</sup></p>
                </div>
              </div>

            </div>
          </div>

          {/* Hyper-Connectivity Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Specific Brain Regions</h2>
            
            <ImageWithFallback 
              src="/images/misophonia/misophonia-causes-connectivity.webp"
              alt="Stylized visual showing thick neural pathways connecting the ear to the emotional center"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />

            <div className="grid grid-cols-1 max-w-3xl mx-auto">
              
              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#d4a017] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Anterior Insular Cortex (AIC)</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The AIC is a part of the brain that processes emotions and internal body states. fMRI studies have definitively proven that the AIC is significantly more active in people with misophonia the exact second they hear a trigger sound, proving the physiological reality of the disorder.<sup>4</sup></p>
                </div>
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
                <p>1. Brout, J. J., et al. (2018). Investigating misophonia: A review of the empirical literature. <i>Frontiers in Neuroscience</i>.</p>
                <p>2. Kumar, S., et al. (2017). The brain basis for misophonia. <i>Current Biology</i>.</p>
                <p>3. Palumbo, D. B., et al. (2018). Misophonia and potential underlying mechanisms. <i>Frontiers in Psychology</i>.</p>
                <p>4. Schröder, A., et al. (2019). Misophonia and the salience network. <i>Scientific Reports</i>.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: THE MOTOR BASIS
      ========================================== */}
      {activeTab === 'motor' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Motor Discovery Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Hyper-Mirroring Discovery</h2>
            
            <ImageWithFallback 
              src="/images/misophonia/misophonia-causes-motor.webp"
              alt="Brain scan specifically illuminating the premotor cortex"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-300"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              A groundbreaking 2021 study completely shifted how clinical science understands this condition. Researchers discovered that misophonia might actually be caused by "hyper-mirroring."<sup>1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">The Premotor Cortex</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The part of the brain that physically controls mouth and facial movements (the premotor cortex) is intensely activated when a misophonic person hears someone else chewing—even though they aren't chewing themselves.<sup>1</sup></p>
                </div>
              </div>

              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Involuntary Imitation</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The brain is essentially trying to forcefully mimic the action of the person making the sound. This intense, unwanted internal mirroring creates massive distress and feeling a loss of control over one's own body.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Beyond Sound Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Beyond Just Audio</h2>
            
            <ImageWithFallback 
              src="/images/misophonia/misophonia-causes-mirroring.webp"
              alt="Two people facing each other with mirrored silhouettes"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0A9DC4] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">A "Motor" Response</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Because of this hyper-mirroring, leading researchers now believe misophonia is actually a "motor" response disorder just as much as an auditory processing disorder. The sound is just the delivery mechanism.<sup>2</sup></p>
                </div>
              </div>

              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0A9DC4] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Visual Misokinesia</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">This motor-basis theory perfectly explains why seeing someone silently chew gum or bounce their leg (misokinesia) triggers the exact same rage response—the brain is still hyper-mirroring the movement, even without the sound.</p>
                </div>
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
                <p>1. Kumar, S., et al. (2021). The motor basis for misophonia. <i>Journal of Neuroscience</i>.</p>
                <p>2. Rouw, R., & Erfanian, M. (2018). A large-scale study of misophonia. <i>Journal of Clinical Psychology</i>.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: GENETICS & CONTEXT
      ========================================== */}
      {activeTab === 'genetics' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Genetics Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Genetics & Brain Development</h2>
            
            <ImageWithFallback 
              src="/images/misophonia/misophonia-causes-genetics.webp"
              alt="DNA strand seamlessly transitioning into neural brain synapses"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Familial Connections</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Misophonia very frequently runs in families, strongly suggesting an underlying genetic component that predisposes a nervous system to develop this specific auditory-motor crossover.<sup>1</sup></p>
                </div>
              </div>

              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">The Pruning Phase</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The condition typically emerges between ages 9 and 13. This coincides perfectly with a major "pruning" phase of brain development, suggesting misophonia may be an accidental byproduct of how neural connections reorganize during late childhood.<sup>2</sup></p>
                </div>
              </div>

            </div>
          </div>

          {/* Social Context Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Social Mystery</h2>
            
            <ImageWithFallback 
              src="/images/misophonia/misophonia-causes-context.webp"
              alt="Visual isolating a single person in a crowd"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-300"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              A key mystery of misophonia is why the reaction is almost exclusively limited to sounds made by <em>people</em>. A dog chewing loudly rarely triggers a response, but a human chewing quietly causes pure rage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Selective Interpersonal Triggers</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Triggers are incredibly specific to human actions. Furthermore, individuals often report that the reaction is significantly worse when the sound is made by close family members compared to strangers.<sup>3</sup></p>
                </div>
              </div>

              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Social Processing Pathways</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Because the reaction depends on who is making the sound, researchers believe that the brain's complex social and interpersonal processing pathways are heavily intertwined with the trigger response. The emotional "meaning" or context of the sound dictates the severity of the reaction.<sup>4</sup></p>
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
                <p>1. Sanchez, T. G., & Silva, F. E. (2018). Familial misophonia. <i>Brazilian Journal of Otorhinolaryngology</i>.</p>
                <p>2. Wu, M. S., et al. (2014). Misophonia: Incidence and clinical correlates. <i>Journal of Clinical Psychology</i>.</p>
                <p>3. Edelstein, M., et al. (2013). Misophonia: Physiological investigations and case descriptions. <i>Frontiers in Human Neuroscience</i>.</p>
                <p>4. Jager, I., et al. (2020). Misophonia: Phenomenology, incomprehensibility and clinical correlates. <i>PLOS ONE</i>.</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}