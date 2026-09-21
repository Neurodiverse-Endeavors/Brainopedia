import React, { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CompulsionsCopingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function CompulsionsCoping({ setCurrentArticle, initialTab }: CompulsionsCopingProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'ocd');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* Header Area */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Compulsions & Coping Crossovers
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('home')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:block hidden"
        >
          <span className="text-xl">←</span>
          Back to Home
        </button>
      </div>

      {/* Mobile button */}
      <button 
        onClick={() => setCurrentArticle?.('home')}
        className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        Back to Home
      </button>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('ocd')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'ocd'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Obsessive-Compulsive (OCD)
        </button>
        <button
          onClick={() => setActiveTab('bfrbs')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'bfrbs'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Body-Focused Behaviors
        </button>
        <button
          onClick={() => setActiveTab('arfid')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'arfid'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          ARFID & Sensory Eating
        </button>
      </div>

      {/* ==========================================
          TAB 1: OCD
      ========================================== */}
      {activeTab === 'ocd' && (
        <div className="space-y-6">

          {/* Shared Hero Graphic for Intro */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
            <div className="flex-1">
              <p className="text-slate-700 leading-relaxed text-sm">
                Obsessive-Compulsive Disorder (OCD) in neurodivergent individuals often centers around a desperate need to exert control over an unpredictable, sensorily overwhelming environment. Distinguishing between joyful autistic special interests and highly distressing, fear-based OCD compulsions is critical for providing the right support.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-64">
              <ImageWithFallback 
                src="/images/mental-health/all-about-compulsions-coping.webp"
                alt="All About Compulsions & Coping"
                className="w-full h-auto rounded-lg shadow-md border-1 border-slate-200"
              />
            </div>
          </div>

          {/* The Neurodivergent Overlap Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Neurodivergent Overlap</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  The overlap between neurodivergence and OCD is exceptionally high, as rigid routines often serve as a shared coping mechanism for anxiety. However, while autistic routines bring a deep sense of comfort and regulation, OCD compulsions are driven entirely by intrusive thoughts and a terrifying sense of impending doom.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/compulsions-ocd-cycle.webp"
                  alt="Diagram showing the intrusive thought and compulsion cycle"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Autism & OCD</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>The core difference:</strong> Autistic hyper-focus is ego-syntonic (it feels good and aligns with the self), whereas OCD obsessions are ego-dystonic (they feel horrifying and alien).</li>
                  <li><strong>Sensory obsessions:</strong> OCD may hyper-fixate on the fear of specific textures, contamination, or bodily sensations.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">ADHD & Tourette's</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Intrusive thoughts:</strong> The ADHD brain's struggle to filter thoughts makes it highly susceptible to getting "stuck" on intrusive, anxiety-inducing mental loops.</li>
                  <li><strong>Tic vs. Compulsion:</strong> Tourette's tics are purely physical urges, while OCD compulsions are performed to neutralize a specific mental fear.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Treatment Considerations Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Treatment Considerations</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/compulsions-ocd-therapy.webp"
                  alt="Therapist adapting ERP therapy for a neurodivergent client"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Standard Exposure and Response Prevention (ERP) therapy can sometimes traumatize neurodivergent individuals if the therapist fails to recognize underlying sensory pain. Treatment must be carefully modified to respect genuine sensory boundaries while slowly dismantling the fear-based OCD cycles.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-md border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">ERP Modifications</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Respecting sensory limits:</strong> Never forcing exposure to a texture or sound that causes legitimate neurological distress under the guise of "treating" the OCD.</li>
                  <li><strong>Pacing:</strong> Slowing down the exposure timeline to account for the neurodivergent nervous system's longer recovery period.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Identifying the Root</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Motivation tracking:</strong> Working to understand <i>why</i> the behavior is happening—is the person washing their hands because they fear germs (OCD), or because the sticky texture is unbearable (Sensory)?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: BFRBs
      ========================================== */}
      {activeTab === 'bfrbs' && (
        <div className="space-y-6">

          {/* Shared Hero Graphic for Intro */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
            <div className="flex-1">
              <p className="text-slate-700 leading-relaxed text-sm">
                Body-Focused Repetitive Behaviors (BFRBs), such as chronic skin picking or hair pulling, frequently originate as subconscious sensory regulation strategies that eventually escalate into clinical compulsions. Because these behaviors often provide intense neurobiological feedback to a dysregulated nervous system, simply telling the individual to stop is entirely ineffective.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-64">
              <ImageWithFallback 
                src="/images/mental-health/all-about-compulsions-coping.webp"
                alt="All About Compulsions & Coping"
                className="w-full h-auto rounded-lg shadow-md border-1 border-slate-200" 
              />
            </div>
          </div>

          {/* The Sensory Drive Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Sensory Drive</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Conditions like dermatillomania (skin picking) or trichotillomania (hair pulling) often start as intense physical stims that help the brain focus or self-soothe. Over time, the brain becomes chemically dependent on the dopamine and endorphin release these behaviors provide, transforming a harmless stim into a damaging compulsion.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/compulsions-bfrb-sensory.webp"
                  alt="Illustration of tactile sensory seeking"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Common Behaviors</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Dermatillomania:</strong> Chronic picking of the skin, cuticles, or lips, often causing bleeding or scarring.</li>
                  <li><strong>Trichotillomania:</strong> Compulsive pulling of hair from the scalp, eyebrows, or eyelashes.</li>
                  <li><strong>Onychophagia:</strong> Severe, chronic nail biting that extends to the surrounding tissue.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">The Dopamine Factor</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Under-stimulation:</strong> ADHD brains frequently use BFRBs to artificially generate the dopamine required to focus on boring tasks.</li>
                  <li><strong>Over-stimulation:</strong> Autistic brains may use the sharp physical pain of a BFRB to drown out overwhelming external sensory noise.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Replacement & Regulation Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Replacement & Regulation</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/compulsions-bfrb-tools.webp"
                  alt="Sensory replacement tools like acupressure rings"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Attempting to eradicate a BFRB using shame, punishment, or sheer willpower almost always increases the underlying anxiety and worsens the behavior. Effective management requires identifying the sensory need the behavior fulfills and providing a safer, equally stimulating physical replacement.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Sensory Substitutions</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Tactile replacements:</strong> Utilizing spiky acupressure rings, velcro strips, or textured silicone chewables to replicate the sensory feedback.</li>
                  <li><strong>Barrier methods:</strong> Wearing finger cots, thin gloves, or hydrocolloid bandages over trigger spots to disrupt the unconscious physical loop.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Environmental Adjustments</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Trigger mapping:</strong> Tracking when the behavior peaks (e.g., during stressful meetings or while watching TV) to proactively introduce replacement tools.</li>
                  <li><strong>Lighting shifts:</strong> Removing harsh bathroom lighting and covering magnifying mirrors to reduce the visual trigger for skin picking.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: ARFID & SENSORY EATING
      ========================================== */}
      {activeTab === 'arfid' && (
        <div className="space-y-6">

          {/* Shared Hero Graphic for Intro */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
            <div className="flex-1">
              <p className="text-slate-700 leading-relaxed text-sm">
                Avoidant/Restrictive Food Intake Disorder (ARFID) is an eating disorder driven by extreme sensory sensitivities, fear of aversive consequences, or a lack of interoceptive hunger cues, rather than body image concerns. For many neurodivergent individuals, eating is an exhausting multi-sensory demand where unpredictable textures and smells trigger an immediate threat response.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-64">
              <ImageWithFallback 
                src="/images/mental-health/all-about-compulsions-coping.webp"
                alt="All About Compulsions & Coping"
                className="w-full h-auto rounded-lg shadow-md border-1 border-slate-200"
              />
            </div>
          </div>

          {/* The Sensory Reality Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Sensory Reality of Eating</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  To a neurodivergent brain, a slightly bruised strawberry or an unexpected crunch in a soft food isn't just unpleasant; it registers as a severe neurological threat. When this sensory pain is compounded by interoceptive blindness—the inability to actually feel the sensation of hunger—eating becomes a chore to avoid rather than a biological drive.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/compulsions-arfid-textures.webp"
                  alt="Close up of mixed food textures causing sensory overwhelm"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Texture & Taste Avoidance</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>The need for sameness:</strong> Many processed foods (like crackers or nuggets) are preferred because they guarantee an identical texture and flavor every single time, unlike fresh produce.</li>
                  <li><strong>Contamination fear:</strong> Severe distress when safe foods touch each other on a plate, mingling wet and dry textures.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Interoceptive Blindness</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Missed cues:</strong> Failing to notice hunger cues until the body reaches a state of starvation or physical illness.</li>
                  <li><strong>Executive function failure:</strong> The multi-step process of deciding what to eat, preparing it, and cleaning up is often too overwhelming to initiate.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Affirming Support Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Affirming Nutritional Support</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/compulsions-arfid-safe-foods.webp"
                  alt="A plate of predictable, sensory-safe foods"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Traditional eating disorder treatments that force exposure to fear-foods or withhold preferred meals can cause severe trauma and permanent food aversions in ARFID patients. Affirming care prioritizes "fed is best," rigorously protecting the individual's safe foods while gently expanding their sensory tolerance at their own pace.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Supportive Frameworks</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Protecting safe foods:</strong> Never arbitrarily restricting or hiding the individual's trusted, predictable foods.</li>
                <li><strong>De-medicalizing meals:</strong> Removing all pressure, judgment, and emotional weight from the dinner table to reduce mealtime anxiety.</li>
                <li><strong>Food chaining:</strong> A gentle therapy technique that introduces new foods by linking them to the sensory properties (color, crunch, temperature) of already established safe foods.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Bottom navigation button */}
      <div className="mt-12 mb-6 flex flex-col md:flex-row md:justify-end clear-both">
        <button 
          onClick={() => setCurrentArticle?.('home')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
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
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2013). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed.). American Psychiatric Publishing.</li>
            <li>Brigham, K. S., et al. (2018). Avoidant/restrictive food intake disorder (ARFID). <i>Current Opinion in Pediatrics</i>.</li>
            <li>Grant, J. E., & Chamberlain, S. R. (2016). Trichotillomania. <i>American Journal of Psychiatry</i>.</li>
            <li>Ruzich, E., et al. (2015). Measuring autistic traits in the general population: A systematic review of the Autism-Spectrum Quotient (AQ) in a nonclinical population sample of 6,900 typical adult males and females. <i>Molecular Autism</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}