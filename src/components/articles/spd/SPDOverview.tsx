import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Home, Brain, Activity, Ear, Hand, Network, Search, Layers, ShieldAlert, Heart, Users, RefreshCw, CheckCircle } from 'lucide-react';

interface SPDOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function SPDOverview({ setCurrentArticle, initialTab }: SPDOverviewProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'definition');

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
          Sensory Processing Disorder: Overview
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
          onClick={() => setActiveTab('definition')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'definition'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Definition & Senses
        </button>
        <button
          onClick={() => setActiveTab('patterns')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'patterns'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Patterns & Prevalence
        </button>
        <button
          onClick={() => setActiveTab('impact')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'impact'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Impact & Interventions
        </button>
      </div>
{/* ==========================================
          TAB 1: DEFINITION & SENSES
      ========================================== */}
      {activeTab === 'definition' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Definition Card (Cyan) - W-64 Centered */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">What is SPD?</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-overview-definition.webp"
              alt="Child exploring sensory textures like deep-pressure sand"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-200"
            />
            
            <div className="max-w-4xl mx-auto space-y-4 mb-6">
              <p className="text-sm text-slate-700 leading-relaxed text-center">
                Sensory Processing Disorder (SPD) is a neurodevelopmental condition where the brain has difficulty receiving, organizing, and responding to sensory information from the body and the environment. 
              </p>
              <p className="text-sm text-slate-700 leading-relaxed text-center">
                Pioneered by occupational therapist A. Jean Ayres in the 1970s, sensory integration theory explains how the brain must organize multiple sensory streams simultaneously.<sup>1</sup> In SPD, these signals get "stuck in traffic," resulting in a lived experience that feels fundamentally different from a neurotypical person's reality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Brain className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">A Neurological Traffic Jam</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The brain struggles to integrate the sensory data it receives, leading to inappropriate, overwhelming, or delayed physical responses.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Activity className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">A Different Lived Experience</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">This is not a behavioral issue or a choice. The individual experiences a physical reality that feels intensely different from a neurotypical person's experience.</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Senses Card (Yellow) - W-64 Centered */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Eight Sensory Systems</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-overview-senses.webp"
              alt="Infographic showing the 5 traditional senses alongside the 3 internal senses"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              While we are taught about the five traditional senses, SPD heavily impacts three "hidden" internal sensory systems that govern our physical movement, balance, and internal bodily cues.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Ear className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">External Senses</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The classic five: Visual (sight), Auditory (sound), Tactile (touch, texture, and pain), Gustatory (taste), and Olfactory (smell). These process all data coming from outside the body.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <RefreshCw className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Vestibular</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The sense of balance and spatial orientation. Processed through fluid in the inner ear, this system detects head position, movement, and gravity, keeping us upright.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Hand className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Proprioceptive</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The sense of body position and force. Processed through receptors in the muscles and joints, it allows you to know exactly where your limbs are without looking at them.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Heart className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Interoceptive</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The sense of internal bodily states. This system allows the brain to perceive hunger, thirst, temperature, heart rate, and the physical need to use the bathroom.</p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Theories
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Ayres, A. J. (1972). Sensory Integration and Learning Disorders. <i>Western Psychological Services</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Miller, L. J., et al. (2007). Concept evolution in sensory integration: A proposed nosology for diagnosis. <i>American Journal of Occupational Therapy</i>.</li>
                <li>Mahler, K. (2015). Interoception: The Eighth Sensory System. <i>AAPC Publishing</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {/* ==========================================
          TAB 2: PATTERNS & PREVALENCE
      ========================================== */}
      {activeTab === 'patterns' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Prevalence Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Prevalence & Frameworks</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-overview-prevalence.webp"
              alt="A diverse group of children, with one child wearing noise-canceling headphones"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-300"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Activity className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Statistical Prevalence</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Research estimates that approximately 5-16% of school-aged children experience sensory processing challenges significant enough to severely impact their daily functioning.<sup>1</sup></p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <ShieldAlert className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Diagnostic Status</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Despite its prevalence, SPD is not currently recognized as a standalone diagnosis in the DSM-5. However, it is universally recognized by occupational therapists and clinical researchers.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Network className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Dunn's Model</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Winnie Dunn's framework evaluates neurological thresholds across four patterns: Low Registration, Sensation Seeking, Sensory Sensitivity, and Sensation Avoiding.<sup>2</sup></p>
              </div>
            </div>
          </div>

          {/* Three Patterns Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Three Primary Patterns</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-overview-patterns.webp"
              alt="Visual splitting the 3 patterns: over-responsive, craving, and motor-based"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Clinical researchers, led by Lucy Jane Miller, proposed a comprehensive nosology that breaks SPD down into three distinct primary subtypes.<sup>3</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Activity className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">1. Sensory Modulation</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">Difficulty regulating responses to stimuli. This presents in three distinct ways:</p>
                <ul className="text-xs text-slate-600 space-y-2 list-disc ml-4">
                  <li><strong>Over-Responsivity:</strong> Ordinary sensations feel overwhelming or painful.</li>
                  <li><strong>Under-Responsivity:</strong> Delayed responses, often appearing passive or disconnected.</li>
                  <li><strong>Craving:</strong> An intense, insatiable drive to seek extreme sensory input.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Search className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">2. Sensory Discrimination</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Difficulty interpreting the specific qualities or nuances of a sensory stimulus. The brain struggles to distinguish similarities and differences between sensations (e.g., distinguishing between a dime and a penny by touch alone).</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Layers className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">3. Sensory-Based Motor</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Difficulty using sensory information to physically plan and execute motor actions. This includes postural disorders (trouble stabilizing the body) and dyspraxia (severe difficulty planning and sequencing new motor actions).</p>
              </div>
            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Theories
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Ahn, R. R., et al. (2004). Prevalence of parents' perceptions of sensory processing disorders among kindergarten children. <i>American Journal of Occupational Therapy</i>.</p>
                <p>2. Dunn, W. (1997). The impact of sensory processing abilities on the daily lives of young children and their families: A conceptual model. <i>Infants & Young Children</i>.</p>
                <p>3. Miller, L. J., et al. (2007). Concept evolution in sensory integration: A proposed nosology for diagnosis. <i>American Journal of Occupational Therapy</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>American Psychiatric Association. (2013). Diagnostic and Statistical Manual of Mental Disorders (5th ed.).</li>
                <li>Cermak, S. A., & Larkin, D. (2002). Developmental coordination disorder. In <i>Sensory Integration: Theory and Practice</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: IMPACT & INTERVENTIONS
      ========================================== */}
      {activeTab === 'impact' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Impact Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Daily Impact & Co-occurrence</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-overview-impact.webp"
              alt="Venn diagram showing SPD intersecting heavily with Autism and ADHD"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Home className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Daily Life & Sleep</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Basic self-care tasks (eating, dressing, bathing) are frequently excruciating due to sensory sensitivities. Severe sleep difficulties are common, as the nervous system struggles to regulate and calm down.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Heart className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Emotional Regulation</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Because the brain is constantly managing sensory overload, the individual operates in a state of high physiological stress. This frequently triggers anxiety, immense frustration, or overwhelming neurological meltdowns.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Users className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Co-occurrence (Autism)</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">SPD rarely exists in a vacuum. Research indicates that a massive 70-90% of individuals diagnosed with Autism Spectrum Disorder experience severe sensory processing differences.<sup>1</sup></p>
              </div>
            </div>
          </div>

          {/* Neurology & Interventions Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Neurology & Interventions</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-overview-neurology.webp"
              alt="A brain scan visual showing white matter pathways"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Brain className="text-[#2abcd4] w-5 h-5" /> The Biological Basis
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  SPD is physically measurable. Advanced neuroimaging studies have identified clear differences in the brain's white matter microstructure along sensory pathways, proving that SPD is a structural difference in brain connectivity. Furthermore, twin studies indicate moderate genetic heritability.
                </p>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="text-[#2abcd4] w-5 h-5" /> Assessment & Therapy
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Assessment is conducted by occupational therapists with specialized training. Interventions heavily lean on the Ayres Sensory Integration® (ASI) method, which uses structured physical activities to challenge and physically rewire the nervous system over time.<sup>2</sup>
                </p>
              </div>

            </div>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Interventions
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Ben-Sasson, A., et al. (2009). A meta-analysis of sensory modulation symptoms in individuals with autism spectrum disorders. <i>Journal of Autism and Developmental Disorders</i>.</p>
                <p>2. Schaaf, R. C., & Nightlinger, K. M. (2007). Occupational therapy using a sensory integrative approach: A case study of effectiveness. <i>American Journal of Occupational Therapy</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Owen, J. P., et al. (2013). Abnormal white matter microstructure in children with sensory processing disorders. <i>NeuroImage: Clinical</i>.</li>
                <li>Goldsmith, H. H., et al. (2006). A population-based twin study of parentally reported tactile and auditory defensiveness in young children. <i>Journal of Abnormal Child Psychology</i>.</li>
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