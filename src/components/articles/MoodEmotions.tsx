import React, { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface MoodEmotionsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function MoodEmotions({ setCurrentArticle, initialTab }: MoodEmotionsProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'depression');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* Header Area */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Mood & Emotions Crossovers
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
          onClick={() => setActiveTab('depression')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'depression'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Depression
        </button>
        <button
          onClick={() => setActiveTab('rsd')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'rsd'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Rejection Sensitive Dysphoria
        </button>
        <button
          onClick={() => setActiveTab('bipolar')}
          className={`px-6 py-3 rounded-md transition-colors font-normal ${
            activeTab === 'bipolar'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Bipolar & Dysregulation
        </button>
      </div>

      {/* ==========================================
          TAB 1: DEPRESSION
      ========================================== */}
      {activeTab === 'depression' && (
        <div className="space-y-6">
          
          {/* Shared Hero Graphic for Intro */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
            <div className="flex-1">
              <p className="text-slate-700 leading-relaxed text-sm">
                Depression in neurodivergent individuals is frequently a secondary reaction to chronic burnout, systemic lack of support, and the lifelong exhaustion of masking natural traits. Recognizing this environmental root cause is essential, as treating the depression without accommodating the underlying neurodivergence often leads to therapeutic failure.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-64">
              <ImageWithFallback 
                src="/images/mental-health/all-about-mood-emotions.webp"
                alt="All About Mood & Emotions"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* The Masking Toll Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Toll of Masking</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  For many autistic and ADHD individuals, existing in neurotypical spaces requires actively suppressing who they are to appear "normal" and avoid rejection. Over time, this chronic suppression destroys self-esteem and leads to a profound sense of isolation, which serves as the primary catalyst for severe depressive episodes.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/mood-depression-masking.webp"
                  alt="Visual representation of the emotional toll of masking"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">The Exhaustion Cycle</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Sensory depression:</strong> Lethargy and flat affect caused entirely by sensory overload shutting the brain down.</li>
                  <li><strong>Social isolation:</strong> Withdrawing from peers not from a lack of desire to connect, but because the effort to mask is too physically draining.</li>
                  <li><strong>Loss of identity:</strong> Masking for so long that the individual no longer knows what their genuine interests or needs actually are.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Atypical Presentation</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Skill regression:</strong> A sudden loss of previously mastered executive functioning skills, rather than just classic "sadness."</li>
                  <li><strong>Increased stimming:</strong> A sharp increase in repetitive behaviors as the nervous system desperately tries to self-soothe.</li>
                  <li><strong>Alexithymia:</strong> Difficulty identifying or describing the depression, presenting instead as physical pain or extreme irritability.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Affirming Support Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Affirming Support Strategies</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/mood-depression-support.webp"
                  alt="Therapist providing neuro-affirming care"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Traditional Cognitive Behavioral Therapy (CBT) can sometimes inadvertently gaslight neurodivergent individuals by telling them their thoughts are "distorted" when they are actually reacting accurately to an unaccommodating world. Therapy must shift from changing the person to changing their environment and validating their burnout.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Therapeutic Shifts</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Neuro-affirming therapy:</strong> Finding counselors who understand that autism or ADHD are not the problem, but systemic lack of support is.</li>
                  <li><strong>Special interest focus:</strong> Using the individual's deepest passions as a bridge back to joy, rather than viewing them as "obsessions."</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Environmental Rest</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Radical downtime:</strong> Scheduling mandatory, low-demand rest periods with zero social or sensory expectations.</li>
                  <li><strong>Removing demands:</strong> Temporarily lowering academic or household expectations to allow the nervous system to physically recover.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: RSD
      ========================================== */}
      {activeTab === 'rsd' && (
        <div className="space-y-6">

          {/* Shared Hero Graphic for Intro */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
            <div className="flex-1">
              <p className="text-slate-700 leading-relaxed text-sm">
                Rejection Sensitive Dysphoria (RSD) is characterized by extreme emotional pain triggered by the perception of being rejected, teased, or criticized by important people in one's life. While not an official DSM diagnosis, it is a defining, intensely physical reality for the vast majority of individuals with ADHD and Autism.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-64">
              <ImageWithFallback 
                src="/images/mental-health/all-about-mood-emotions.webp"
                alt="All About Mood & Emotions"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* The Neurological Impact Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Neurological Impact</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  RSD is not a sign of weakness or a lack of resilience; it is a neurological misfiring where the brain processes emotional rejection with the exact same intensity as severe physical trauma. Because ADHD brains struggle to regulate the flow of emotion, a minor perceived slight floods the system instantly, bypassing rational thought.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/mood-rsd-brain.webp"
                  alt="Brain map showing emotional flooding during RSD"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">The Physical Response</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Sudden onset:</strong> The emotional drop happens in a split second, often catching both the individual and their peers completely off guard.</li>
                  <li><strong>Physical pain:</strong> Sufferers describe the sensation as a physical blow to the chest, nausea, or a sudden draining of all energy.</li>
                  <li><strong>Perception vs. Reality:</strong> The rejection does not have to be real; the brain triggers the alarm based purely on the <i>perception</i> of failure.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Internalized vs. Externalized</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Internalized RSD:</strong> The individual instantly withdraws, spirals into severe self-loathing, and shuts down communication.</li>
                  <li><strong>Externalized RSD:</strong> The emotional flood translates into sudden rage, defensiveness, and lashing out to protect against the pain.</li>
                  <li><strong>People-pleasing:</strong> A long-term coping mechanism where the individual abandons their boundaries to ensure they are never criticized.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Management Strategies Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Management Strategies</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/mood-rsd-management.webp"
                  alt="Individual using grounding techniques"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Because RSD hits so rapidly, traditional in-the-moment talk therapy is often ineffective. Management requires creating distance between the trigger and the reaction, allowing the physiological storm to pass before attempting to analyze the situation logically.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Cognitive & Social Tools</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Name it to tame it:</strong> Recognizing and naming the episode ("I am having an RSD spike right now") to separate identity from the emotion.</li>
                  <li><strong>The 24-hour rule:</strong> Enforcing a strict rule of waiting a full day before responding to a triggering text or email.</li>
                  <li><strong>Clarity checks:</strong> Teaching the individual to ask, "Are you mad at me, or am I just feeling RSD right now?" to trusted partners.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Medical & Somatic</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Alpha-agonists:</strong> Medications like Guanfacine or Clonidine are frequently prescribed to lower the baseline physiological response to triggers.</li>
                  <li><strong>Physical reset:</strong> Using extreme temperature changes (ice packs) or intense exercise to physically clear the adrenaline from the body.</li>
                </ul>
              </div>
            </div>
            
            <div className="w-full text-center mt-6">
              <button 
                onClick={() => setCurrentArticle?.('rsd-deep-dive')}
                className="mt-2 px-6 py-3 bg-[#ffd166] text-[#0c264d] rounded-lg hover:bg-[#0c264d] hover:text-white transition-colors font-bold shadow-sm"
              >
                Read the Full RSD Deep-Dive →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: BIPOLAR & DYSREGULATION
      ========================================== */}
      {activeTab === 'bipolar' && (
        <div className="space-y-6">

          {/* Shared Hero Graphic for Intro */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
            <div className="flex-1">
              <p className="text-slate-700 leading-relaxed text-sm">
                Bipolar Disorder involves distinct periods of intense elevated mood and severe depressive slumps, which can sometimes overlap with the natural hyperfocus and burnout cycles of neurodivergence. Carefully untangling innate emotional dysregulation from clinical mood episodes ensures individuals receive the most accurate and effective therapeutic support.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-64">
              <ImageWithFallback 
                src="/images/mental-health/all-about-mood-emotions.webp"
                alt="All About Mood & Emotions"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* Untangling the Overlap Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Untangling the Overlap</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Neurodivergent individuals are frequently misdiagnosed with Bipolar Disorder due to surface-level similarities in emotional intensity and energy shifts. The key diagnostic difference lies in the trigger and duration: neurodivergent emotions are highly reactive to immediate environmental changes and pass quickly, whereas Bipolar episodes are autonomous, sustained over weeks, and completely detached from daily events.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/mood-bipolar-cycles.webp"
                  alt="Chart distinguishing neurodivergent energy cycles from bipolar cycles"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">ADHD vs. Bipolar</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Hyperfocus vs. Mania:</strong> ADHD hyperfocus is driven by deep interest in a specific subject, whereas mania is a global state of euphoria and decreased need for sleep.</li>
                  <li><strong>Speed of shift:</strong> ADHD moods can shift multiple times a day based on setbacks; Bipolar moods shift slowly over days or weeks.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Autism vs. Bipolar</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Burnout vs. Depression:</strong> Autistic burnout is a direct result of sensory and masking exhaustion, requiring rest, not necessarily antidepressants.</li>
                  <li><strong>Agitation triggers:</strong> Autistic distress is usually tied to routine disruption, while manic agitation is untethered from routine.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Emotional Dysregulation Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Managing General Dysregulation</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="shrink-0 w-full md:w-64">
                <ImageWithFallback 
                  src="/images/mental-health/mood-dysregulation-tools.webp"
                  alt="Tools for managing big emotions and dysregulation"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Regardless of a co-occurring diagnosis, almost all neurodivergent individuals struggle with emotional dysregulation—the inability to flexibly manage the intensity of their feelings. Validating these intense emotions while providing structured outlets prevents them from turning into destructive meltdowns.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Stabilization Techniques</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Interoceptive training:</strong> Helping the individual learn the physical signs of rising emotion (e.g., tight chest) before it reaches a boiling point.</li>
                <li><strong>Safe venting spaces:</strong> Designating a safe room where pacing, vocalizing, or intense movement is allowed without judgment during high-emotion periods.</li>
                <li><strong>Co-regulation:</strong> A calm, steady presence from a support partner whose own nervous system serves as an anchor, rather than matching the escalating panic.</li>
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
            <li>Barkley, R. A. (2015). <i>Attention-deficit hyperactivity disorder: A handbook for diagnosis and treatment</i> (4th ed.). Guilford Press.</li>
            <li>Ginapp, C. M., et al. (2023). Dysregulated not deficit: A qualitative study on symptomatology of ADHD in young adults. <i>PLOS One</i>.</li>
            <li>Hirvikoski, T., et al. (2016). Premature mortality in autism spectrum disorder. <i>The British Journal of Psychiatry</i>.</li>
            <li>Shaw, P., et al. (2014). Emotion dysregulation in attention deficit hyperactivity disorder. <i>The American Journal of Psychiatry</i>.</li>
            <li>Skirrow, C., et al. (2012). Everyday emotional experience of adults with attention deficit hyperactivity disorder. <i>Journal of Affective Disorders</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}