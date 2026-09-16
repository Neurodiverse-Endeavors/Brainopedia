import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface MisophoniaSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function MisophoniaSymptoms({ setCurrentArticle, initialTab }: MisophoniaSymptomsProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'emotions');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px]">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Symptoms & Characteristics of Misophonia
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
          onClick={() => setActiveTab('emotions')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'emotions'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Emotional Reactions
        </button>
        <button
          onClick={() => setActiveTab('physical')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'physical'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Physiological Symptoms
        </button>
        <button
          onClick={() => setActiveTab('behavior')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'behavior'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Behavioral Impact
        </button>
      </div>

      {/* ==========================================
          TAB 1: EMOTIONAL REACTIONS
      ========================================== */}
      {activeTab === 'emotions' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Emotional Reactions Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Emotional Flash</h2>
            
            <ImageWithFallback 
              src="/images/misophonia/misophonia-symptoms-emotional.webp"
              alt="Person visibly distressed or tense at a dinner table"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              The symptoms of misophonia are primarily emotional and physiological. When exposed to a trigger sound, an individual experiences an immediate and intense internal reaction that far exceeds the objective volume or importance of the sound.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0A9DC4] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Anger & Rage</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Often the most prominent response, felt as a sudden, involuntary "flash" of fury directed at the source of the sound. Studies show this anger is immediate and overwhelming.<sup>1</sup></p>
                </div>
              </div>

              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0A9DC4] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Disgust</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A deep, visceral sense of revulsion toward the sound, and frequently, toward the person making it. This disgust is difficult to rationalize away.<sup>2</sup></p>
                </div>
              </div>

              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0A9DC4] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Anxiety & Panic</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A feeling of being physically trapped by the sound, leading to a desperate, urgent need to escape the room to stop the sensory input.</p>
                </div>
              </div>

              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0A9DC4] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Chronic Irritability</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A high baseline of tension. Because triggers can happen at any moment, the individual often remains in a state of hyper-arousal even when no triggers are present.</p>
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
                <p>1. Jager, I., et al. (2020). Misophonia: Phenomenology, incomprehensibility and clinical correlates. <i>PLOS ONE</i>.</p>
                <p>2. Dozier, T. H., & Morrison, K. L. (2017). Phenomenology of misophonia. <i>American Journal of Psychology</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Schröder, A., et al. (2013). Misophonia: Diagnostic criteria for a new psychiatric disorder. <i>PLOS ONE</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: PHYSIOLOGICAL SYMPTOMS
      ========================================== */}
      {activeTab === 'physical' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Physical Symptoms Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Physiological Symptoms</h2>
            
            <ImageWithFallback 
              src="/images/misophonia/misophonia-symptoms-physical.webp"
              alt="Close-up emphasizing physical tension, such as clenched fists or a tight jaw"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because misophonia bypasses logical processing and directly triggers the sympathetic nervous system, severe physical symptoms accompany the emotional distress.<sup>1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Cardiovascular Spikes</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Immediate increases in heart rate and blood pressure occur the moment the trigger is registered, identical to the body's response to an aggressive physical threat.</p>
                </div>
              </div>

              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Muscle Tension</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Severe, involuntary muscle tension is extremely common, specifically manifesting as a tightly clenched jaw, tightened neck muscles, or balled fists.<sup>2</sup></p>
                </div>
              </div>

              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Thermal Reactions</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Individuals frequently report sweating or feeling a sudden, intense "rush" of heat flushing through their body when the sound occurs.</p>
                </div>
              </div>

              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Chest Pressure</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A physical sensation of constriction or heavy pressure in the chest or abdomen, often accompanying the intense feeling of panic or the urge to flee.</p>
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
                <p>1. Edelstein, M., et al. (2013). Misophonia: Physiological investigations and case descriptions. <i>Frontiers in Human Neuroscience</i>.</p>
                <p>2. Brout, J. J., et al. (2018). Investigating misophonia: A review of the empirical literature. <i>Frontiers in Neuroscience</i>.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: BEHAVIORAL IMPACT
      ========================================== */}
      {activeTab === 'behavior' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Behavioral Patterns Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Behavioral Patterns</h2>
            
            <ImageWithFallback 
              src="/images/misophonia/misophonia-symptoms-behavior.webp"
              alt="Person proactively wearing noise-canceling headphones in a public space"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Living with these intense physiological and emotional reactions radically alters how an individual navigates the world, leading to strict, protective behavioral patterns.<sup>1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0A9DC4] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Systematic Avoidance</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">To prevent a meltdown, individuals will actively avoid triggers. This leads to skipping family meals, refusing to go to movie theaters, or severe social isolation.<sup>2</sup></p>
                </div>
              </div>

              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0A9DC4] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Escape Mechanisms</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">When avoidance fails, escape is the next step. An individual may suddenly stand up and leave a room mid-conversation if a trigger (like someone chewing gum) suddenly begins.</p>
                </div>
              </div>

              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0A9DC4] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Protective Coping</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The constant use of preventative tools. This includes wearing noise-canceling headphones everywhere, sleeping with earplugs, or running loud white noise machines at their desk.</p>
                </div>
              </div>

              {/* CSS SHAPE (DOT) INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0A9DC4] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Hypervigilance</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The nervous system is always on guard. Individuals constantly scan their environment for potential triggers, assessing if someone is holding a bag of chips or clicking a pen.<sup>3</sup></p>
                </div>
              </div>

            </div>
          </div>

          {/* Invisible Struggle Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The "Invisible" Struggle</h2>
            
            <ImageWithFallback 
              src="/images/misophonia/misophonia-symptoms-invisible.webp"
              alt="Person sitting alone, looking overwhelmed, representing isolation"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">External Misunderstanding</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">To outsiders, the reaction simply looks like "overreacting," "being dramatic," or "being difficult." Because the disability is entirely invisible, friends and family frequently dismiss the individual's distress, telling them to "just ignore it."</p>
                </div>
              </div>

              {/* ACCENT BORDER INSTEAD OF ICON */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Internal Shame</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">This friction leads to significant internal shame and guilt. The person with misophonia is often highly self-aware; they realize their reaction is entirely out of proportion to the sound, yet they are biologically unable to stop it.</p>
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
                <p>1. Rouw, R., & Erfanian, M. (2018). A large-scale study of misophonia. <i>Journal of Clinical Psychology</i>.</p>
                <p>2. Wu, M. S., et al. (2014). Misophonia in an undergraduate student sample. <i>Clinical Psychology Review</i>.</p>
                <p>3. Palumbo, D. B., et al. (2018). Misophonia and potential underlying mechanisms. <i>Frontiers in Psychology</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Cavanna, A. E. (2014). The invisible border between health and disease. <i>Journal of Psychosomatic Research</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}