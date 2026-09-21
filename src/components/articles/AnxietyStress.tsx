import React, { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface AnxietyStressProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function AnxietyStress({ setCurrentArticle, initialTab }: AnxietyStressProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'generalized');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* Header Area */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Anxiety & Stress Crossovers
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
          onClick={() => setActiveTab('generalized')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'generalized'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Generalized Anxiety
        </button>
        <button
          onClick={() => setActiveTab('social')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'social'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Social Anxiety
        </button>
        <button
          onClick={() => setActiveTab('phobias')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'phobias'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Phobias & Panic
        </button>
      </div>

      {/* ==========================================
          TAB 1: GENERALIZED ANXIETY
      ========================================== */}
      {activeTab === 'generalized' && (
        <div className="space-y-6">
          
          {/* Shared Hero Graphic for Intro */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
            <div className="flex-1">
              <p className="text-slate-700 leading-relaxed text-sm">
                Generalized anxiety is incredibly common among neurodivergent individuals who are constantly forced to navigate a world designed for a different neurotype. It is a physiological state of hyper-arousal, not a character flaw, reflecting a nervous system that is perpetually bracing for the unexpected.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-64">
              <ImageWithFallback 
                src="/images/mental-health/all-about-anxiety-stress.webp"
                alt="All About Anxiety & Stress"
                className="w-full h-auto rounded-lg shadow-md border-1 border-slate-200"
              />
            </div>
          </div>

          {/* The Neurodivergent Connection Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Neurodivergent Connection</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  For many neurodivergent individuals, generalized anxiety is a completely logical response to chronic environmental stress. When the brain consistently struggles to predict routines, filter sensory input, or manage executive function demands, the nervous system adapts by staying locked in "survival mode" at all times.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/anxiety-gad-overview.webp"
                  alt="Abstract representation of generalized anxiety"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Common Triggers</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Sensory unpredictability:</strong> Living in fear of sudden loud noises or overwhelming environments.</li>
                  <li><strong>Executive function strain:</strong> The chronic, exhausting fear of forgetting important tasks or losing items.</li>
                  <li><strong>Routine disruption:</strong> Anxiety that spikes immediately when expected schedules change without warning.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Physical Symptoms</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Muscle tension:</strong> Chronic stiffness, especially in the neck, jaw, and shoulders.</li>
                  <li><strong>Sleep disruption:</strong> Inability to turn off racing thoughts at night, leading to severe exhaustion.</li>
                  <li><strong>Digestive distress:</strong> Frequent stomach aches or nausea linked directly to nervous system arousal.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Management Strategies Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Management & Support</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/anxiety-nervous-system.webp"
                  alt="Nervous system regulation tools"
                  className="w-full h-auto rounded-lg shadow-md border-3 border-slate-200"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Traditional anxiety therapies often fail neurodivergent individuals because they attempt to "logic away" fears that are entirely based in sensory reality. Effective management requires directly accommodating the neurodivergent brain and physically regulating the nervous system first.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Accommodate before treating:</strong> Lower the environmental demands (using noise-canceling headphones, providing visual schedules) before attempting cognitive therapy.</li>
                <li><strong>Somatic regulation:</strong> Utilize deep pressure therapy, swinging, or intense physical movement to help reset the nervous system.</li>
                <li><strong>Predictability systems:</strong> Build highly reliable, externalized systems (like shared calendars or written instructions) to offload executive function worry.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SOCIAL ANXIETY
      ========================================== */}
      {activeTab === 'social' && (
        <div className="space-y-6">

          {/* Shared Hero Graphic for Intro */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
            <div className="flex-1">
              <p className="text-slate-700 leading-relaxed text-sm">
                Social anxiety in neurodivergent individuals often stems from a history of missed social cues, peer rejection, or the exhausting demand to mask natural traits. Rather than an irrational fear of people, it is a highly logical protective response to a lifetime of unpredictable social rules.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-64">
              <ImageWithFallback 
                src="/images/mental-health/all-about-anxiety-stress.webp"
                alt="All About Anxiety & Stress"
                className="w-full h-auto rounded-lg shadow-md border-1 border-slate-200"
              />
            </div>
          </div>

          {/* Masking & Exhaustion Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Masking & Exhaustion</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Neurodivergent individuals frequently experience social anxiety because socializing requires them to manually perform behaviors that neurotypical brains execute automatically. The intense concentration required to maintain eye contact, monitor tone, and suppress natural stims turns every social interaction into a high-stakes performance.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/anxiety-social-masking.webp"
                  alt="Visual representation of social masking exhaustion"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">The Autistic Experience</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Translation fatigue:</strong> The exhausting process of translating autistic communication into neurotypical expectations in real-time.</li>
                  <li><strong>Rule confusion:</strong> Severe anxiety over breaking unspoken, unwritten social rules that frequently change based on context.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">The ADHD Experience</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Impulse fear:</strong> Intense anxiety about accidentally interrupting, oversharing, or talking too much during conversations.</li>
                  <li><strong>Rejection sensitivity:</strong> A hyper-awareness of facial expressions, leading to the assumption that peers are annoyed or bored.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Building Confidence Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Building Authentic Confidence</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/anxiety-social-support.webp"
                  alt="Connecting through shared neurodivergent interests"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Supporting neurodivergent social anxiety means abandoning the goal of making the person appear "normal" and instead focusing on finding environments where they feel safe. Confidence is built through authentic connection and radical self-acceptance.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Parallel play:</strong> Encourage socializing through shared activities (gaming, art, building) where the pressure of direct eye contact and small talk is removed.</li>
                <li><strong>Neuro-kin connections:</strong> Prioritize finding spaces with other neurodivergent peers who share the same communication styles and special interests.</li>
                <li><strong>Unmasking support:</strong> Validate the individual's natural communication style and provide permission to drop the exhausting performance.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: PHOBIAS & PANIC
      ========================================== */}
      {activeTab === 'phobias' && (
        <div className="space-y-6">

          {/* Shared Hero Graphic for Intro */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
            <div className="flex-1">
              <p className="text-slate-700 leading-relaxed text-sm">
                Specific phobias and panic attacks often emerge when sensory sensitivities or intense cognitive load push the nervous system far past its coping capacity. Recognizing panic as a sensory or systemic overload—rather than just a psychological breakdown—is the key to effective regulation and recovery.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-64">
              <ImageWithFallback 
                src="/images/mental-health/all-about-anxiety-stress.webp"
                alt="All About Anxiety & Stress"
                className="w-full h-auto rounded-lg shadow-md border-1 border-slate-200"
              />
            </div>
          </div>

          {/* Sensory Triggers Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Sensory & Systemic Triggers</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  What appears to be an irrational phobia from the outside is often deeply rooted in neurological sensory pain on the inside. For instance, an extreme fear of dogs may not be about the animal itself, but about the unpredictable barking that triggers severe auditory processing distress.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/anxiety-panic-sensory.webp"
                  alt="Sensory overwhelm and environmental triggers"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Common Phobias</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Emetophobia (Fear of vomiting):</strong> Extremely common in neurodivergent populations due to high interoceptive sensitivity and fear of losing bodily control.</li>
                  <li><strong>Medical trauma:</strong> Severe fear of doctors or dentists driven by past experiences with sensory overload (bright lights, textures, unexpected touches).</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">The Panic Response</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Autonomic dysregulation:</strong> Panic attacks often manifest as sudden spikes in heart rate, sweating, and the feeling of being trapped.</li>
                  <li><strong>Meltdown overlap:</strong> Panic attacks and sensory meltdowns can look identical, but require different approaches to de-escalate.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Regulation Strategies Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Regulation & Recovery Tools</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/anxiety-regulation-tools.webp"
                  alt="Grounding techniques and regulation tools"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  During a panic response, the rational, language-processing part of the brain effectively shuts down. Attempting to reason or talk someone out of a panic attack is rarely effective; the goal must be physical safety and sensory grounding.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Temperature regulation:</strong> Use cold exposure (like holding an ice cube or splashing cold water on the face) to force the mammalian dive reflex and slow the heart rate.</li>
                <li><strong>Reduce demands instantly:</strong> Remove all social expectations, turn off bright lights, and eliminate background noise.</li>
                <li><strong>Non-verbal comfort:</strong> Provide safe, predictable deep pressure (like a weighted blanket) if welcomed, but do not force physical contact.</li>
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
            <li>Hwang, Y. I., Foley, K. R., & Trollor, J. N. (2020). Aging well on the autism spectrum. <i>Autism Research</i>.</li>
            <li>Kessler, R. C., et al. (2005). Lifetime prevalence and age-of-onset distributions of DSM-IV disorders. <i>Archives of General Psychiatry</i>.</li>
            <li>Kooij, J. J. S., et al. (2010). European consensus statement on diagnosis and treatment of adult ADHD. <i>BMC Psychiatry</i>.</li>
            <li>Neugebauer, A., et al. (2021). Social anxiety in autism spectrum disorder and attention-deficit/hyperactivity disorder. <i>Journal of Autism and Developmental Disorders</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}