import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Hand, VolumeX, EyeOff, Activity, BatteryMedium, Zap, Search, Compass, RefreshCw, Layers, Heart, ShieldAlert, Home, BookOpen, Users } from 'lucide-react';

interface SPDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function SPDSymptoms({ setCurrentArticle, initialTab }: SPDSymptomsProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'responsivity');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px]">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          SPD: Symptoms & Characteristics
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('spd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About SPD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('spd')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About SPD
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <button
          onClick={() => setActiveTab('responsivity')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'responsivity'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Responsivity Profiles
        </button>
        <button
          onClick={() => setActiveTab('motor')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'motor'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Discrimination & Motor
        </button>
        <button
          onClick={() => setActiveTab('impact')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'impact'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Emotional & Daily Impact
        </button>
      </div>

      {/* ==========================================
          TAB 1: RESPONSIVITY PROFILES
      ========================================== */}
      {activeTab === 'responsivity' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Over-Responsivity Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Sensory Over-Responsivity</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-symptoms-over-responsive.webp"
              alt="Person covering ears, experiencing sensory overload"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Sensory over-responsivity (hypersensitivity) occurs when the nervous system responds too strongly, too quickly, or for too long to sensory stimuli that most people find completely tolerable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Hand className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Tactile Defensiveness</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A term coined by occupational therapist Patricia Wilbarger describing extreme sensitivity to touch.<sup>1</sup> Results in distress from clothing tags, light touches, or messy textures like finger paint.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <VolumeX className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Auditory Over-Responsivity</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Heightened sensitivity to sounds. This triggers strong startle responses to unexpected noises and severe distress in loud, chaotic environments like cafeterias or stores.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <EyeOff className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Visual Sensitivities</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Discomfort or genuine pain when exposed to bright sunlight or fluorescent lighting. These individuals are often highly sensitive to visual clutter and busy patterns.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Activity className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Olfactory & Gustatory</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Extreme reactions to smells that others barely notice, leading to nausea or gagging. This heavily impacts eating routines and frequently results in a highly restricted diet.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Under-Responsivity & Seeking Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Under-Responsivity & Seeking</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-symptoms-seeking.webp"
              alt="Child engaged in intense active play"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Some nervous systems require significantly more intense sensory input just to register a sensation. This leads to either passive under-responsivity or an active, aggressive drive to seek out that missing input.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <BatteryMedium className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Sensory Under-Responsivity (SUR)</h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">When the brain fails to register incoming data. Individuals may appear lethargic, passive, or disconnected from their surroundings.</p>
                  <ul className="text-xs text-slate-600 space-y-2 list-disc ml-4">
                    <li>Unusually high pain threshold; failing to notice injuries.</li>
                    <li>Difficulty detecting internal cues (hunger, thirst, bathroom needs).</li>
                    <li>Failing to notice extreme temperature changes.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Zap className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Sensory Seeking (Craving)</h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">An intense, active drive to pursue sensory experiences to satisfy the nervous system's high threshold.</p>
                  <ul className="text-xs text-slate-600 space-y-2 list-disc ml-4">
                    <li>Constantly touching objects or craving deep-pressure hugs.</li>
                    <li>Excessive movement: jumping, spinning, rocking, or "crashing."</li>
                    <li>Chewing on non-food items like clothing or pencils.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Concepts
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Wilbarger, P., & Wilbarger, J. L. (1991). Sensory Defensiveness in Children Aged 2-12. <i>Avanti Educational Programs</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Schoen, S. A., et al. (2009). Physiological and behavioral differences in sensory processing. <i>Frontiers in Integrative Neuroscience</i>.</li>
                <li>Dunn, W. (1997). The impact of sensory processing abilities on the daily lives of young children. <i>Infants & Young Children</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: DISCRIMINATION & MOTOR
      ========================================== */}
      {activeTab === 'motor' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Discrimination Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Sensory Discrimination</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-symptoms-discrimination.webp"
              alt="Hands struggling to distinguish between similar tactile objects"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-300"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Discrimination involves difficulty interpreting the specific nuances of a stimulus. The brain struggles to distinguish similarities and differences between sensations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <Search className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Tactile Challenges</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Difficulty identifying objects by touch alone (e.g., reaching into a pocket and distinguishing a coin from a key). Highly impacts fine motor tasks like manipulating zippers or buttons.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <Compass className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Proprioceptive Challenges</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Poor body awareness. Leads to frequent clumsiness, bumping into furniture, and difficulty grading force (e.g., writing too hard and breaking pencils, or playing too roughly with pets).</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <RefreshCw className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Vestibular Challenges</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Difficulty interpreting gravity and motion. Results in poor balance, deep uncertainty about the body's position in space, and severe struggles with activities like bike riding or climbing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Motor Difficulties Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Sensory-Based Motor Difficulties</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-symptoms-motor.webp"
              alt="Child visibly frustrated while trying to coordinate tying their shoes"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The brain relies heavily on accurate sensory feedback to plan and execute physical movements. When that feedback is scrambled, severe motor difficulties arise.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Layers className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Postural Disorder</h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">Difficulty stabilizing the body during movement or maintaining appropriate muscle tone.</p>
                  <ul className="text-xs text-slate-600 space-y-2 list-disc ml-4">
                    <li>Chronically poor posture; frequently slumping or leaning on desks.</li>
                    <li>Tiring incredibly quickly during physical activities.</li>
                    <li>Low muscle tone and weak core stability.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Hand className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Dyspraxia (Motor Planning)</h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">Severe difficulty planning, sequencing, and executing new motor actions.</p>
                  <ul className="text-xs text-slate-600 space-y-2 list-disc ml-4">
                    <li>Extreme difficulty learning new motor skills or multi-step sequences.</li>
                    <li>Illegible handwriting and difficulty drawing.</li>
                    <li>Awkwardness and avoidance of team sports or physical activities.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Cermak, S. A., & Larkin, D. (2002). Developmental coordination disorder. In <i>Sensory Integration: Theory and Practice</i>.</li>
                <li>Blanche, E. I., et al. (2012). Proprioceptive processing difficulties among children with autism spectrum disorders and developmental disabilities. <i>American Journal of Occupational Therapy</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: EMOTIONAL & DAILY IMPACT
      ========================================== */}
      {activeTab === 'impact' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Emotional Impact Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Emotional & Behavioral Responses</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-symptoms-emotional.webp"
              alt="Child experiencing a sensory meltdown in a busy public space"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Because the nervous system is constantly operating under the threat of sensory overload, the connection between sensory input and extreme emotional responses is profound.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <ShieldAlert className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Meltdowns & Overload</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Unlike tantrums (which are behavioral tools to get a desired outcome), meltdowns are involuntary neurological crash states caused by complete sensory system overload. The individual completely loses control of emotional regulation.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Heart className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Anxiety & Avoidance</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Living with unpredictable sensory pain breeds intense anticipatory anxiety. This results in heavy avoidance behaviors—refusing to participate in social events, school assemblies, or physical activities to protect themselves from distress.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Activities Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Impact on Daily Activities</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-symptoms-daily.webp"
              alt="Child pulling away from a hairbrush due to sensory sensitivity"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <Home className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Self-Care Routines</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Daily hygiene can be a battleground. Extreme resistance to bathing, hair brushing, and nail trimming is common due to tactile pain. Picky eating is frequently driven by texture and smell sensitivities.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <BookOpen className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">School Environment</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Difficulty concentrating in visually and auditorily chaotic classrooms. Avoiding messy art projects, refusing to participate in noisy P.E. classes, and struggling with the motor demands of handwriting.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <Users className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Individual Variation</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">SPD is highly complex. An individual may be over-responsive to auditory input but actively crave extreme proprioceptive input (jumping/crashing). Sensory profiles are completely unique to the individual.</p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Lane, S. J., et al. (2010). Sensory over-responsivity and ADHD: Differentiating using electrodermal responses. <i>Frontiers in Integrative Neuroscience</i>.</li>
                <li>Dunn, W. (2014). Sensory Profile 2: User's Manual. <i>Pearson</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('spd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About SPD
        </button>
      </div>

    </article>
  );
}