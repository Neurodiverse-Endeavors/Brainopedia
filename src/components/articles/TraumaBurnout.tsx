import React, { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface TraumaBurnoutProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TraumaBurnout({ setCurrentArticle, initialTab }: TraumaBurnoutProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'burnout');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* Header Area */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Trauma & Burnout Crossovers
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
          onClick={() => setActiveTab('burnout')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'burnout'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Neurodivergent Burnout
        </button>
        <button
          onClick={() => setActiveTab('cptsd')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'cptsd'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Complex PTSD
        </button>
        <button
          onClick={() => setActiveTab('masking')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'masking'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Masking Fatigue
        </button>
      </div>

      {/* ==========================================
          TAB 1: NEURODIVERGENT BURNOUT
      ========================================== */}
      {activeTab === 'burnout' && (
        <div className="space-y-6">
          
          {/* Shared Hero Graphic for Intro */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
            <div className="flex-1">
              <p className="text-slate-700 leading-relaxed text-sm">
                Neurodivergent burnout is a state of severe physical, mental, and emotional exhaustion caused by the prolonged stress of navigating an unaccommodating neurotypical world. Unlike standard occupational burnout, it fundamentally compromises an individual's ability to execute basic daily living skills and often causes a temporary loss of previously mastered abilities.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-64">
              <ImageWithFallback 
                src="/images/mental-health/all-about-trauma-burnout.webp"
                alt="All About Trauma & Burnout"
                className="w-full h-auto rounded-lg shadow-md border-1 border-slate-200"
              />
            </div>
          </div>

          {/* The Burnout Cycle Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Autistic & ADHD Burnout Cycle</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Burnout occurs when the demands of masking, managing sensory overload, and compensating for executive dysfunction vastly outweigh the nervous system's capacity to recover. It is frequently misdiagnosed as clinical depression, but treating it strictly with antidepressants while ignoring the environmental exhaustion usually worsens the condition.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-48">
                <ImageWithFallback 
                  src="/images/mental-health/trauma-burnout-cycle.webp"
                  alt="Chart showing the cumulative effects of sensory and social demands"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Core Triggers</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Sensory accumulation:</strong> Enduring environments that are too loud, bright, or chaotic day after day without adequate recovery time.</li>
                  <li><strong>Life transitions:</strong> Navigating massive changes in routine, such as moving out, starting a new job, or transitioning to college.</li>
                  <li><strong>Masking toll:</strong> The invisible, immense cognitive effort required to mimic neurotypical behavior in professional or social settings.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Key Symptoms</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Skill regression:</strong> Suddenly struggling with tasks that used to be easy, like cooking, speaking, or organizing thoughts.</li>
                  <li><strong>Heightened sensitivity:</strong> Sounds or lights that were previously manageable suddenly cause intense physical pain or immediate meltdowns.</li>
                  <li><strong>Chronic exhaustion:</strong> A bone-deep fatigue that no amount of sleep seems to fix.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recovery Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Radical Rest & Recovery</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="shrink-0 w-full md:w-48">
                <ImageWithFallback 
                  src="/images/mental-health/trauma-burnout-recovery.webp"
                  alt="Individual resting in a low-sensory environment"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Recovering from neurodivergent burnout is not a quick fix; it often takes months of deliberate, radical rest to repair the nervous system. The most crucial step is forcefully lowering daily demands and eliminating any pressure to mask or conform to neurotypical timelines.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Demand dropping:</strong> Audit all daily tasks and completely eliminate or outsource anything that isn't strictly necessary for survival.</li>
                <li><strong>Sensory fasting:</strong> Spend dedicated hours in entirely dark, silent rooms to let the nervous system stop processing external data.</li>
                <li><strong>Unrestricted stimming:</strong> Allow and encourage natural repetitive movements and deep dives into special interests to help the brain self-soothe.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: COMPLEX PTSD
      ========================================== */}
      {activeTab === 'cptsd' && (
        <div className="space-y-6">
          
          {/* Shared Hero Graphic for Intro */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
            <div className="flex-1">
              <p className="text-slate-700 leading-relaxed text-sm">
                Complex Post-Traumatic Stress Disorder (C-PTSD) frequently co-occurs with neurodivergence as a direct result of ongoing systemic invalidation, compliance-based therapies, and peer bullying. Rather than stemming from a single traumatic event, C-PTSD develops from years of being repeatedly misunderstood and forced to ignore one's own physical and sensory needs.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-64">
              <ImageWithFallback 
                src="/images/mental-health/all-about-trauma-burnout.webp"
                alt="All About Trauma & Burnout"
                className="w-full h-auto rounded-lg shadow-md border-1 border-slate-200"
              />
            </div>
          </div>

          {/* Systemic Trauma Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Roots of Systemic Trauma</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Many neurodivergent individuals grow up constantly receiving the message that their natural way of moving, communicating, and feeling is "wrong." When children are repeatedly punished for their neurological reality—or forced through therapies designed to make them look neurotypical at the expense of their well-being—trauma becomes deeply encoded in their nervous system.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/trauma-cptsd-nervous.webp"
                  alt="Nervous system mapping showing trauma response"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Hidden Traumas</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Sensory gaslighting:</strong> Being repeatedly told "it's not that loud" or "it doesn't hurt" when experiencing genuine sensory pain.</li>
                  <li><strong>Compliance therapy:</strong> Interventions that forced the individual to suppress natural stims or enforce uncomfortable eye contact to earn basic autonomy.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Signs of C-PTSD</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Hyper-vigilance:</strong> Constantly scanning environments and people for signs of anger, disappointment, or danger.</li>
                  <li><strong>Toxic shame:</strong> A deep, internalized belief that one is fundamentally broken, burdensome, or unlovable.</li>
                  <li><strong>Emotional flashbacks:</strong> Suddenly feeling the intense emotional terror of childhood invalidation triggered by a minor modern conflict.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Healing Pathways Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Healing Pathways</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/trauma-cptsd-healing.webp"
                  alt="Neuro-affirming therapy space"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Healing C-PTSD requires neuro-affirming therapy that validates the individual's lived experience instead of trying to correct their cognitive processes. It is a slow, deeply personal journey focused on rebuilding bodily autonomy and trusting one's own internal signals again.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Somatic experiencing:</strong> Working with a professional to gently release stored physical trauma from the body without having to verbally relive the events.</li>
                <li><strong>Reclaiming boundaries:</strong> Learning that it is safe to say "no," leave overwhelming environments, and prioritize personal sensory needs.</li>
                <li><strong>Community healing:</strong> Connecting with other neurodivergent adults to break the cycle of isolation and validate shared traumatic experiences.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: MASKING FATIGUE
      ========================================== */}
      {activeTab === 'masking' && (
        <div className="space-y-6">
          
          {/* Shared Hero Graphic for Intro */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
            <div className="flex-1">
              <p className="text-slate-700 leading-relaxed text-sm">
                Masking fatigue is the profound exhaustion that comes from continuously camouflaging neurodivergent traits to survive in neurotypical spaces. While masking often begins as an unconscious survival mechanism, maintaining the performance severely depletes executive function and fragments the individual's sense of self.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-64">
              <ImageWithFallback 
                src="/images/mental-health/all-about-trauma-burnout.webp"
                alt="All About Trauma & Burnout"
                className="w-full h-auto rounded-lg shadow-md border-1 border-slate-200"
              />
            </div>
          </div>

          {/* The Cost of Passing Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Cost of "Passing"</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  When a neurodivergent person successfully masks, society rewards them for "overcoming" their condition and appearing normal. However, this invisible labor takes a massive physiological toll, frequently resulting in late-in-life diagnoses, severe burnout, and a complete disconnection from authentic joy.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/trauma-masking-weight.webp"
                  alt="Conceptual image showing the weight of a social mask"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Common Masking Behaviors</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Scripting:</strong> Endlessly rehearsing conversations in advance to ensure the "correct" responses are given.</li>
                  <li><strong>Suppression:</strong> Forcing the body to sit still and hiding natural stims, leading to extreme physical tension.</li>
                  <li><strong>Mimicry:</strong> Studying and copying the gestures, tone, and interests of neurotypical peers to blend in.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">The Aftermath</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>The crash:</strong> Holding it together perfectly all day at school or work, only to completely meltdown the moment they are safely home.</li>
                  <li><strong>Identity loss:</strong> Reaching adulthood and realizing they have no idea what they actually like, need, or want out of life.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Safe Unmasking Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Journey of Unmasking</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/trauma-masking-unmasking.webp"
                  alt="Person finding freedom in authentic expression"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Unmasking is not a switch that can simply be flipped; it requires actively unlearning years of survival habits in environments that are genuinely safe. It is a deeply vulnerable process of rediscovering one's authentic neurological baseline and allowing oneself to exist without constant self-correction.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Steps Toward Authenticity</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Micro-unmasking:</strong> Start small by allowing a safe, hidden stim (like fidgeting with a ring) or dropping eye contact with a trusted friend.</li>
                <li><strong>Accommodating the self:</strong> Begin unapologetically wearing noise-canceling headphones or sunglasses in public without feeling the need to explain them.</li>
                <li><strong>Grieving the mask:</strong> Allowing space to mourn the energy lost to masking, while slowly celebrating the freedom of living authentically.</li>
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
            <li>Higgins, J. M., et al. (2021). Autistic burnout: 'My physical body and mind started to shut down'. <i>Autism</i>.</li>
            <li>Pearson, A., & Rose, K. (2021). A conceptual analysis of autistic masking. <i>Autism in Adulthood</i>.</li>
            <li>Raymaker, D. M., et al. (2020). Having all of your internal resources exhausted beyond measure and being left with no clean-up crew: Defining autistic burnout. <i>Autism in Adulthood</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}