import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface MisophoniaOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function MisophoniaOverview({ setCurrentArticle, initialTab }: MisophoniaOverviewProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'definition');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px]">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Misophonia: Overview
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
          onClick={() => setActiveTab('definition')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'definition'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Definition & Prevalence
        </button>
        <button
          onClick={() => setActiveTab('triggers')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'triggers'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Common Triggers
        </button>
        <button
          onClick={() => setActiveTab('brain')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'brain'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Brain's Response
        </button>
      </div>

      {/* ==========================================
          TAB 1: DEFINITION & PREVALENCE
      ========================================== */}
      {activeTab === 'definition' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Definition Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">What Is Misophonia?</h2>
            
            <ImageWithFallback 
              src="/images/misophonia/misophonia-overview-definition.webp"
              alt="Person visibly tensing in a normal environment"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Misophonia, translating to "hatred of sound," is a neurosensory condition characterized by strong negative emotional and physiological reactions to specific, everyday sounds.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Prevalence & Onset</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">It is estimated to affect approximately 6–20% of the population to some degree.<sup>1</sup> It typically begins in late childhood or early adolescence, often between ages 9–13.<sup>2</sup></p>
                </div>
              </div>

              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Not General Sensitivity</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Unlike hyperacusis (sensitivity to loud sounds), misophonia involves specific "trigger" sounds that are typically at normal, quiet volume levels. The reaction is tied to the pattern of the sound, not the decibels.<sup>3</sup></p>
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
                <p>1. Wu, M. S., et al. (2014). Misophonia: Incidence and clinical correlates. <i>Journal of Clinical Psychology</i>.</p>
                <p>2. Edelstein, M., et al. (2013). Misophonia: Physiological investigations. <i>Frontiers in Human Neuroscience</i>.</p>
                <p>3. Swedo, S. E., et al. (2022). Consensus definition of misophonia. <i>Frontiers in Neuroscience</i>.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: COMMON TRIGGERS
      ========================================== */}
      {activeTab === 'triggers' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Triggers Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Trigger Profile</h2>
            
            <ImageWithFallback 
              src="/images/misophonia/misophonia-overview-triggers.webp"
              alt="Collage of common trigger sources like a tapping pen"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The misophonic response is not about the loudness of the sound, but rather the specific type, pattern, and context. Triggers are almost always sounds produced by other living beings.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#d4a017] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Eating Sounds</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">By far the most commonly reported triggers. These include chewing, slurping, swallowing, lip-smacking, and crunching.</p>
                </div>
              </div>

              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#d4a017] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Breathing Sounds</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Nasal or throat-based noises such as heavy breathing, chronic sniffing, loud yawning, or frequent throat clearing.</p>
                </div>
              </div>

              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#d4a017] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Repetitive Noises</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Sharp, repetitive environmental noises caused by human action, such as pen clicking, aggressive keyboard typing, or foot tapping.</p>
                </div>
              </div>

              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#d4a017] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Visual Triggers (Misokinesia)</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Many individuals also experience "misokinesia," where purely visual stimuli (like seeing someone bounce their leg or chew gum silently) trigger the exact same panic response.<sup>1</sup></p>
                </div>
              </div>

            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & STATISTICS
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Swedo, S. E., et al. (2022). Consensus definition of misophonia. <i>Frontiers in Neuroscience</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Rouw, R., & Erfanian, M. (2018). A large-scale study of misophonia. <i>Journal of Clinical Psychology</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: THE BRAIN'S RESPONSE
      ========================================== */}
      {activeTab === 'brain' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Brain Response Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Misophonia Response</h2>
            
            <ImageWithFallback 
              src="/images/misophonia/misophonia-overview-brain.webp"
              alt="Stylized brain highlighting the salience network"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-300"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              For an individual with misophonia, a trigger sound is never just "annoying." It activates an involuntary, profound physiological threat response.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Fight-or-Flight</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Upon hearing a trigger, the body experiences an immediate surge of adrenaline. Heart rate increases, muscles tense, and the individual is flooded with intense anger, disgust, or pure panic.</p>
                </div>
              </div>

              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">The Salience Network</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Neuroimaging shows that in misophonic brains, the "salience network" (which tells the brain what to pay attention to) over-prioritizes these specific sounds, hijacking the emotional control centers before the individual can consciously regulate their reaction.<sup>1</sup></p>
                </div>
              </div>

            </div>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & STATISTICS
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Schröder, A., et al. (2019). Misophonia and the salience network. <i>Scientific Reports</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Kumar, S., et al. (2017). The brain basis for misophonia. <i>Current Biology</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}