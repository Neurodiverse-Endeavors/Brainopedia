import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { VolumeX, Star, FileVolume, Ear, Flower2Icon, SunMoon, MessageCircle, CheckCircle2, ChevronRight, ChevronDownSquare, ChevronUpCircle, Flower2} from 'lucide-react';

interface MisophoniaSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function MisophoniaSupport({ setCurrentArticle, initialTab }: MisophoniaSupportProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'environment');

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
          Support & Management of Misophonia
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('environment')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'environment'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Environment & Advocacy
        </button>
        <button
          onClick={() => setActiveTab('therapy')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'therapy'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Therapies & Regulation
        </button>
        <button
          onClick={() => setActiveTab('communication')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'communication'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Communication & Boundaries
        </button>
      </div>

      {/* ==========================================
          TAB 1: ENVIRONMENT & ADVOCACY
      ========================================== */}
      {activeTab === 'environment' && (
        <div className="space-y-8 animate-fadeIn">

          <p className="text-sm text-slate-700 leading-relaxed">
            While there is no "cure" for misophonia, a combination of environmental management, therapeutic techniques, and interpersonal communication can significantly reduce the impact of the condition.<sup className="text-[#10b981] font-bold ml-0.5">1</sup>
          </p>

          {/* Environmental Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Environmental Management</h2>
            
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1557173135-7336e73d53d3?w=1080&q=80" 
              alt="Noise-canceling headphones" 
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block" 
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Compensating for trigger sounds by controlling your auditory environment is often the very first and most effective line of defense.<sup className="text-[#10b981] font-bold ml-0.5">2</sup>
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-cyan-100 shadow-sm">
                <FileVolume className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700"><strong>Noise-Canceling Technology:</strong> Active noise-canceling (ANC) headphones or high-fidelity earplugs provide an immediate, crucial "safety net."<sup className="text-[#10b981] font-bold ml-0.5">3</sup></p>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-cyan-100 shadow-sm">
                <VolumeX className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700"><strong>Background Noise:</strong> Utilizing white noise machines, fans, or "brown noise" audio tracks to seamlessly mask and drown out sharp trigger sounds.</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-cyan-100 shadow-sm">
                <VolumeX className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700"><strong>Controlled Environments:</strong> Intentionally designing safe, quiet spaces at home or school where the individual knows they are guaranteed not to be triggered.<sup className="text-[#10b981] font-bold ml-0.5">4</sup></p>
              </div>
            </div>
          </div>

          {/* Advocacy Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl text-center">Advocacy in School & Work</h2>
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Under 504 Plans or workplace ADA guidelines, sensory sensitivities can be legally accommodated. Crucial modifications include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="flex items-start gap-2 bg-white p-4 rounded-xl border border-yellow-200 shadow-sm">
                <CheckCircle2 className="text-[#d4a017] w-5 h-5 shrink-0" />
                <p className="text-sm text-slate-700">Permission to wear discrete earplugs or noise-canceling headphones during focused work periods.</p>
              </div>
              <div className="flex items-start gap-2 bg-white p-4 rounded-xl border border-yellow-200 shadow-sm">
                <CheckCircle2 className="text-[#d4a017] w-5 h-5 shrink-0" />
                <p className="text-sm text-slate-700">Access to alternative, silent testing rooms for school exams to prevent trigger-induced panic.</p>
              </div>
              <div className="flex items-start gap-2 bg-white p-4 rounded-xl border border-yellow-200 shadow-sm">
                <CheckCircle2 className="text-[#d4a017] w-5 h-5 shrink-0" />
                <p className="text-sm text-slate-700">A physical desk location intentionally positioned away from high-traffic breakrooms, kitchens, or loud colleagues.</p>
              </div>
              <div className="flex items-start gap-2 bg-white p-4 rounded-xl border border-yellow-200 shadow-sm">
                <CheckCircle2 className="text-[#d4a017] w-5 h-5 shrink-0" />
                <p className="text-sm text-slate-700">Flexibility for remote work or hybrid scheduling to manually control sensory input.</p>
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
                <p>1. Potgieter, I., et al. (2019). Misophonia: A scoping review. <i>Journal of Clinical Psychology</i>.</p>
                <p>2. Jastreboff, M. M., & Jastreboff, P. J. (2014). Treatments for decreased sound tolerance. <i>Seminars in Hearing</i>.</p>
                <p>3. Brout, J. J., et al. (2018). Investigating misophonia. <i>Frontiers in Neuroscience</i>.</p>
                <p>4. Dozier, T. H. (2015). Counterconditioning treatment. <i>Clinical Case Studies</i>.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: THERAPIES & REGULATION
      ========================================== */}
      {activeTab === 'therapy' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Therapeutic Approaches</h2>
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Therapy for misophonia does not typically eliminate the physical trigger response, but rather focuses on managing the intense emotional and physiological fallout to prevent panic spirals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
                  <Star className="text-[#0c264d] w-9 h-9" />
                  <h3 className="text-[#0c264d] font-bold text-base">Cognitive Behavioral Therapy (CBT)</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">Actively helps manage the emotional fallout and "catastrophizing" thoughts that immediately follow a trigger, reducing the secondary anxiety cycle.<sup className="text-[#10b981] font-bold ml-0.5">1</sup></p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
                  <SunMoon className="text-[#0c264d] w-10 h-10" />
                  <h3 className="text-[#0c264d] font-bold text-base">Mindfulness & Relaxation</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">Systematically lowers the body's overall "baseline" of stress, ensuring the nervous system is less primed for an explosive reaction when a trigger occurs.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
                  <Ear className="text-[#0c264d] w-10 h-10" />
                  <h3 className="text-[#0c264d] font-bold text-base">Sound Therapy</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">Utilizes wearable, in-ear devices that provide constant, low-level sound to essentially "re-train" the brain's focus and reduce contrast with sharp trigger sounds.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
                <Flower2Icon className="text-[#0c264d] w-10 h-10" />
                  <h3 className="text-[#0c264d] font-bold text-base">Dialectical Behavior Therapy (DBT)</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">Heavily focuses on distress tolerance techniques, providing concrete coping tools to physically regulate the intense anger or panic generated by misophonia.<sup className="text-[#10b981] font-bold ml-0.5">2</sup></p>
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
                <p>1. Schröder, A., et al. (2017). CBT is effective in misophonia. <i>Journal of Affective Disorders</i>.</p>
                <p>2. Linehan, M. M. (2014). <i>DBT Skills Training Manual</i>. Guilford Publications.</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Reid, A. M., et al. (2016). Intensive CBT for misophonia. <i>Journal of Obsessive-Compulsive and Related Disorders</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: COMMUNICATION & BOUNDARIES
      ========================================== */}
      {activeTab === 'communication' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Communication & Boundaries</h2>
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Misophonia is often hardest on family dynamics and close relationships. Navigating it successfully requires mutual empathy, explicit communication, and removing personal offense from the equation.
            </p>

            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-yellow-200 shadow-sm">
                <div className="bg-[#fffbeb] p-2 rounded-lg shrink-0">
                  <MessageCircle className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Education & Validation</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The most important step is helping loved ones understand that the rage or disgust is entirely neurological and involuntary, not a personal attack on their eating or breathing habits.<sup className="text-[#10b981] font-bold ml-0.5">1</sup></p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-yellow-200 shadow-sm">
                <div className="bg-[#fffbeb] p-2 rounded-lg shrink-0">
                  <ChevronRight className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Clear Safety Signals</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Developing discreet non-verbal cues (like a specific hand signal) allows the individual to let others know when a situation is becoming unbearable without causing a disruptive scene.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-yellow-200 shadow-sm">
                <div className="bg-[#fffbeb] p-2 rounded-lg shrink-0">
                  <ChevronDownSquare className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Modified Family Routines</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Implementing guilt-free boundaries, such as allowing the person to eat dinner separately before the family meal, wearing headphones during family movie night, or having designated "quiet zones."<sup className="text-[#10b981] font-bold ml-0.5">2</sup></p>
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
                <p>1. Cavanna, A. E. (2015). Misophonia: Current perspectives. <i>Neuropsychiatric Disease and Treatment</i>.</p>
                <p>2. Muller, D., et al. (2018). CBT for an adolescent female with misophonia.</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Swedo, S. E., et al. (2022). Consensus definition of misophonia. <i>Frontiers in Neuroscience</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('misophonia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About Misophonia
        </button>
      </div>

    </article>
  );
}