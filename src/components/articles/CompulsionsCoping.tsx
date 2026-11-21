import { useSearchParams } from 'react-router-dom';
import {
  Brain,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Utensils,
  Compass,
  Clock,
  Layers,
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CompulsionsCopingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function CompulsionsCoping({ setCurrentArticle, initialTab }: CompulsionsCopingProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'ocd';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      {/* Header Area */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Compulsions &amp; Coping Crossovers
        </h1>

        <button
          onClick={() => setCurrentArticle?.('home')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm self-start"
        >
          <span className="text-xl">←</span>
          Back to Home
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('ocd')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'ocd'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Obsessive-Compulsive (OCD)
        </button>
        <button
          onClick={() => handleTabChange('bfrbs')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'bfrbs'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Body-Focused Behaviors
        </button>
        <button
          onClick={() => handleTabChange('arfid')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'arfid'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          ARFID &amp; Sensory Eating
        </button>
      </div>

      {/* ==========================================
          TAB 1: OCD (Primary Card: Cyan)
      ========================================== */}
      {activeTab === 'ocd' && (
        <div className="space-y-8">
          {/* Centered Intro Graphic & Paragraph */}
          <div className="mb-6">
            <ImageWithFallback
              src="/images/mental-health/all-about-compulsions-coping.webp"
              alt="All About Compulsions & Coping"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            <p className="text-slate-700 leading-relaxed text-sm max-w-3xl mx-auto text-center">
              Obsessive-Compulsive Disorder (OCD) in neurodivergent individuals often centers around a need to establish predictability within an overwhelming sensory environment. Distinguishing between joyful autistic special interests and distressing, fear-based OCD compulsions is essential for providing affirming, effective support.
            </p>
          </div>

          {/* Card 1: The Neurodivergent Overlap (Cyan - Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl text-center">
              The Neurodivergent Overlap
            </h2>
            <ImageWithFallback
              src="/images/mental-health/compulsions-ocd-cycle.webp"
              alt="Diagram showing the intrusive thought and compulsion cycle"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            <p className="text-sm text-slate-700 leading-relaxed max-w-3xl mx-auto text-center mb-6">
              The overlap between neurodivergence and OCD is remarkably common, as structured routines often serve as a shared coping strategy for navigating uncertainty. However, while autistic routines bring deep comfort and nervous system regulation, OCD compulsions are driven by intrusive thoughts and a sense of impending dread.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/30 flex flex-col items-center text-center">
                <Brain className="w-8 h-8 text-[#0A9DC4] mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-gray-100 pb-2 w-full">
                  Autism &amp; OCD
                </h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 text-left w-full">
                  <li>
                    <strong>The core difference:</strong> Autistic hyper-focus is ego-syntonic (it feels energizing and aligns with the self), whereas OCD obsessions are ego-dystonic (they feel intrusive and distressing).
                  </li>
                  <li>
                    <strong>Sensory obsessions:</strong> OCD may hyper-fixate on fears surrounding specific textures, contamination, or bodily sensations.
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/30 flex flex-col items-center text-center">
                <Sparkles className="w-8 h-8 text-[#0A9DC4] mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-gray-100 pb-2 w-full">
                  ADHD &amp; Tourette&apos;s
                </h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 text-left w-full">
                  <li>
                    <strong>Intrusive thoughts:</strong> The ADHD brain&apos;s open attentional filter can make it easier to get caught in sticky, anxiety-inducing mental loops.
                  </li>
                  <li>
                    <strong>Tic vs. compulsion:</strong> Tourette&apos;s tics respond to premonitory physical urges, while OCD compulsions are performed to neutralize a specific fear.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Treatment Considerations (Navy - 3D Accent Border, No Icons/Bullets) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl text-center">
              Treatment Considerations
            </h2>
            <ImageWithFallback
              src="/images/mental-health/compulsions-ocd-therapy.webp"
              alt="Therapist adapting ERP therapy for a neurodivergent client"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            <p className="text-sm text-slate-700 leading-relaxed max-w-3xl mx-auto text-center mb-6">
              Standard Exposure and Response Prevention (ERP) therapy can overwhelm neurodivergent individuals if clinicians overlook genuine sensory pain. Affirming treatment modifies pacing and exposure hierarchies to respect neurological sensory limits while gently dismantling fear-based OCD cycles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-gray-100 pb-2">
                    ERP Modifications
                  </h3>
                  <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                    <p>
                      <strong>Respecting sensory limits:</strong> Avoid forcing exposure to textures or sounds that cause genuine neurological pain under the assumption that distress is purely an OCD fear.
                    </p>
                    <p>
                      <strong>Intentional pacing:</strong> Adjust exposure timelines to honor the neurodivergent nervous system&apos;s need for longer decompression and recovery windows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-gray-100 pb-2">
                    Identifying the Root Motivation
                  </h3>
                  <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                    <p>
                      <strong>Function over appearance:</strong> Two identical behaviors can have completely different roots—such as washing hands out of a fear of contamination (OCD) versus relieving an unbearable sticky texture (Sensory).
                    </p>
                    <p>
                      <strong>Collaborative mapping:</strong> Tracking what brings relief helps tailor sensory accommodations alongside anxiety tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: BFRBs (Primary Card: Navy)
      ========================================== */}
      {activeTab === 'bfrbs' && (
        <div className="space-y-8">
          {/* Centered Intro Graphic & Paragraph */}
          <div className="mb-6">
            <ImageWithFallback
              src="/images/mental-health/all-about-compulsions-coping.webp"
              alt="All About Compulsions & Coping"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            <p className="text-slate-700 leading-relaxed text-sm max-w-3xl mx-auto text-center">
              Body-Focused Repetitive Behaviors (BFRBs), such as chronic skin picking or hair pulling, frequently originate as subconscious sensory regulation strategies that gradually become habitual. Because these behaviors deliver immediate neurobiological feedback to a dysregulated nervous system, willpower alone rarely resolves them—compassionate sensory substitution is key.
            </p>
          </div>

          {/* Card 1: The Sensory Drive (Navy - 3D Accent Border, No Icons/Bullets) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl text-center">
              The Sensory Drive
            </h2>
            <ImageWithFallback
              src="/images/mental-health/compulsions-bfrb-sensory.webp"
              alt="Illustration of tactile sensory seeking"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            <p className="text-sm text-slate-700 leading-relaxed max-w-3xl mx-auto text-center mb-6">
              Conditions like dermatillomania (skin picking) or trichotillomania (hair pulling) often begin as tactile stims that help the brain focus, release tension, or self-soothe. Over time, the nervous system relies on the dopamine and endorphin release these behaviors provide, turning a regulatory stim into an automatic loop.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2abcd4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-gray-100 pb-2">
                    Common Presentations
                  </h3>
                  <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                    <p>
                      <strong>Dermatillomania:</strong> Repetitive picking of the skin, cuticles, or lips, often triggered by uneven textures or dry spots.
                    </p>
                    <p>
                      <strong>Trichotillomania:</strong> Compulsive pulling of hair from the scalp, eyebrows, or eyelashes during periods of deep concentration or stress.
                    </p>
                    <p>
                      <strong>Onychophagia:</strong> Persistent nail and cuticle biting that serves as an accessible, continuous oral-tactile stim.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-gray-100 pb-2">
                    The Dopamine &amp; Regulation Factor
                  </h3>
                  <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                    <p>
                      <strong>Under-stimulation:</strong> ADHD brains frequently use BFRBs to generate steady tactile stimulation and dopamine required to stay anchored during low-interest tasks.
                    </p>
                    <p>
                      <strong>Over-stimulation:</strong> Autistic brains may use focused physical sensation to filter out chaotic external sensory noise and regain internal control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Replacement & Regulation (Yellow - Double Ring Navy Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl text-center">
              Replacement &amp; Regulation
            </h2>
            <ImageWithFallback
              src="/images/mental-health/compulsions-bfrb-tools.webp"
              alt="Sensory replacement tools like acupressure rings"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            <p className="text-sm text-slate-700 leading-relaxed max-w-3xl mx-auto text-center mb-6">
              Attempting to stop a BFRB through shame or rigid restriction typically amplifies nervous system stress and reinforces the habit loop. Sustainable relief comes from honoring the underlying sensory need and offering safer, equally satisfying tactile alternatives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-gray-100 pb-2 w-full">
                  Sensory Substitutions
                </h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 text-left w-full">
                  <li>
                    <strong>Tactile replacements:</strong> Keep spiky acupressure rings, textured silicone strips, or picking stones within reach to match the exact finger feedback.
                  </li>
                  <li>
                    <strong>Gentle barriers:</strong> Use finger cots, breathable gloves, or hydrocolloid patches over healing skin to interrupt unconscious autopilot movements.
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-gray-100 pb-2 w-full">
                  Environmental Adjustments
                </h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 text-left w-full">
                  <li>
                    <strong>Trigger mapping:</strong> Notice when urges peak—such as during long video calls or while reading—and place fidget tools in those exact spots ahead of time.
                  </li>
                  <li>
                    <strong>Visual softening:</strong> Swap harsh overhead bathroom bulbs for warm, softer lighting and cover magnifying mirrors to reduce visual scanning triggers.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: ARFID & SENSORY EATING (Primary Card: Yellow)
      ========================================== */}
      {activeTab === 'arfid' && (
        <div className="space-y-8">
          {/* Centered Intro Graphic & Paragraph */}
          <div className="mb-6">
            <ImageWithFallback
              src="/images/mental-health/all-about-compulsions-coping.webp"
              alt="All About Compulsions & Coping"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            <p className="text-slate-700 leading-relaxed text-sm max-w-3xl mx-auto text-center">
              Avoidant/Restrictive Food Intake Disorder (ARFID) is driven by intense sensory sensitivities, fear of aversive physical reactions, or muted interoceptive hunger cues rather than body image concerns. For many neurodivergent individuals, mealtime is a high-demand multi-sensory experience where unpredictable textures and aromas trigger an immediate nervous system threat response.
            </p>
          </div>

          {/* Card 1: The Sensory Reality of Eating (Yellow - Double Ring Navy Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl text-center">
              The Sensory Reality of Eating
            </h2>
            <ImageWithFallback
              src="/images/mental-health/compulsions-arfid-textures.webp"
              alt="Close up of mixed food textures causing sensory overwhelm"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            <p className="text-sm text-slate-700 leading-relaxed max-w-3xl mx-auto text-center mb-6">
              To a heightened sensory system, an unexpectedly mushy berry or a surprise crunch in a soft meal registers as a genuine threat rather than a minor annoyance. When sensory intensity combines with interoceptive differences—difficulty detecting internal hunger signals—eating becomes an exhausting task rather than an automatic cue.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <Utensils className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-gray-100 pb-2 w-full">
                  Texture &amp; Predictability
                </h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 text-left w-full">
                  <li>
                    <strong>The strength of sameness:</strong> Packaged staples (such as crackers or nuggets) offer reliable, uniform crunch and flavor every time, unlike variable fresh produce.
                  </li>
                  <li>
                    <strong>Sensory boundaries:</strong> Using divided plates keeps wet and dry textures separate, preventing distress when safe foods touch.
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-gray-100 pb-2 w-full">
                  Interoception &amp; Executive Load
                </h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 text-left w-full">
                  <li>
                    <strong>Delayed hunger signals:</strong> Subtle stomach cues may go unnoticed until blood sugar drops sharply, making food preparation feel even harder.
                  </li>
                  <li>
                    <strong>Decision fatigue:</strong> Planning, prepping, eating, and cleaning up involves dozens of executive steps that benefit from low-friction routines.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Affirming Nutritional Support (Cyan - Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl text-center">
              Affirming Nutritional Support
            </h2>
            <ImageWithFallback
              src="/images/mental-health/compulsions-arfid-safe-foods.webp"
              alt="A plate of predictable, sensory-safe foods"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            <p className="text-sm text-slate-700 leading-relaxed max-w-3xl mx-auto text-center mb-6">
              Coercive feeding approaches that withhold preferred meals or force bites of distressing foods erode trust and deepen food trauma. Affirming care centers on &ldquo;fed is best,&rdquo; fiercely protecting reliable safe foods while expanding sensory comfort at the individual&apos;s own pace.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/30 flex flex-col items-center text-center">
                <ShieldCheck className="w-8 h-8 text-[#0A9DC4] mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-gray-100 pb-2 w-full">
                  Protecting Safe Foods
                </h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 text-left w-full">
                  <li>
                    <strong>Zero stealth changes:</strong> Never hide unfamiliar ingredients inside trusted foods, as surprise textures break sensory safety.
                  </li>
                  <li>
                    <strong>Pressure-free tables:</strong> Remove negotiation, timers, and guilt from mealtimes so the nervous system can stay relaxed during digestion.
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/30 flex flex-col items-center text-center">
                <HeartHandshake className="w-8 h-8 text-[#0A9DC4] mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-gray-100 pb-2 w-full">
                  Gentle Exploration
                </h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 text-left w-full">
                  <li>
                    <strong>Food chaining:</strong> Introduce optional new foods by matching the color, crunch, or temperature of an already beloved safe food.
                  </li>
                  <li>
                    <strong>No-obligation tasting:</strong> Allow looking, smelling, or exploring a tiny portion on a separate side dish with full permission to decline.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation Button */}
      <div className="mt-8 mb-12 flex justify-end w-full clear-both">
        <button
          onClick={() => setCurrentArticle?.('home')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm"
        >
          <span className="text-xl">←</span>
          Back to Home
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul
            className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0"
            style={{ textIndent: 0 }}
          >
            <li>
              American Psychiatric Association. (2013).{' '}
              <i>Diagnostic and statistical manual of mental disorders</i> (5th ed.). American Psychiatric Publishing.
            </li>
            <li>
              Brigham, K. S., et al. (2018). Avoidant/restrictive food intake disorder (ARFID).{' '}
              <i>Current Opinion in Pediatrics</i>.
            </li>
            <li>
              Grant, J. E., &amp; Chamberlain, S. R. (2016). Trichotillomania.{' '}
              <i>American Journal of Psychiatry</i>.
            </li>
            <li>
              Ruzich, E., et al. (2015). Measuring autistic traits in the general population: A systematic review of the Autism-Spectrum Quotient (AQ) in a nonclinical population sample of 6,900 typical adult males and females.{' '}
              <i>Molecular Autism</i>.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}