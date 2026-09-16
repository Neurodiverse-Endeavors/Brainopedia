import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Network, Activity, Dna, Baby, Microscope, Users, Layers, Search, ShieldAlert, Sparkles } from 'lucide-react';

interface SPDCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function SPDCauses({ setCurrentArticle, initialTab }: SPDCausesProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'neurology');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px]">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          SPD: Causes & Origins
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
          onClick={() => setActiveTab('neurology')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'neurology'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Neurology & Brain
        </button>
        <button
          onClick={() => setActiveTab('genetics')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'genetics'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Genetics & Environment
        </button>
        <button
          onClick={() => setActiveTab('models')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'models'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Models & Co-occurrence
        </button>
      </div>

      {/* ==========================================
          TAB 1: NEUROLOGY & BRAIN
      ========================================== */}
      {activeTab === 'neurology' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Neurological Differences Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Neurological Differences</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-causes-neurology.webp"
              alt="Glowing visualization of the brain highlighting white matter tracts"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-200"
            />
            
            <div className="max-w-4xl mx-auto space-y-4 mb-6">
              <p className="text-sm text-slate-700 leading-relaxed text-center">
                Modern neuroimaging has revolutionized our understanding of SPD. Unlike older theories that relied purely on behavioral observation, recent technology proves that SPD is a tangible, measurable structural difference in the brain's wiring.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Brain className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">White Matter Connectivity</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Advanced Diffusion Tensor Imaging (DTI) has identified clear differences in the white matter microstructure of children with SPD.<sup>1</sup> White matter acts as the brain's "cabling." When these cables are structurally altered, sensory data cannot travel efficiently.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Network className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">A Distinct Signature</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Recent clinical reviews (2020+) confirm that children with SPD exhibit shared white matter disruption in sensory pathways that are biologically distinct from the patterns seen in autism spectrum disorder.<sup>2</sup></p>
                </div>
              </div>
            </div>
          </div>

          {/* Sensory Centers Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Sensory Centers & Processing</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-causes-pathways.webp"
              alt="Conceptual visual of a neural pathway with data passing through a bottleneck"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Activity className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">The Thalamus Bottleneck</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The thalamus acts as the brain's primary relay station for sensory information. Brain imaging suggests that in SPD, this station processes information atypically, causing data to become backlogged or sent to the wrong emotional centers.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Sparkles className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Neurotransmitter Imbalance</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Emerging studies suggest that neurotransmitter systems—particularly serotonin and GABA, which help calm the nervous system down—may play a significant role in regulating sensory thresholds and preventing sensory overload.</p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Interventions
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Owen, J. P., et al. (2013). Abnormal white matter microstructure in children with sensory processing disorders. <i>NeuroImage: Clinical</i>.</p>
                <p>2. Galiana-Simal, A., et al. (2020). Sensory processing disorder: Key points of a frequent alteration in neurodevelopmental disorders. <i>Cogent Medicine</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Chang, Y. S., et al. (2014). Autism and sensory processing disorders: Shared white matter disruption in sensory pathways but divergent connectivity. <i>PLOS ONE</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: GENETICS & ENVIRONMENT
      ========================================== */}
      {activeTab === 'genetics' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Genetics Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Genetic Contributions</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-causes-genetics.webp"
              alt="A double-helix DNA strand subtly interwoven with diverse, sensory-related textures"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-300"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <Dna className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Heritability</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Evidence strongly suggests that genetic factors contribute to sensory processing differences. Twin studies have explicitly demonstrated that tactile and auditory defensiveness have moderate genetic heritability.<sup>1</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <Users className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Familial Patterns</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Parents of children with SPD very frequently report experiencing similar sensory sensitivities themselves. However, the genetic architecture is complex—involving multiple genes with small effects rather than one single "SPD gene."</p>
                </div>
              </div>
            </div>
          </div>

          {/* Environment & Prenatal Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Prenatal & Environmental Factors</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-causes-prenatal.webp"
              alt="Medical illustration of an infant's developing nervous system"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              While genetics lay the blueprint, environmental and physical factors during critical developmental windows determine how those sensory pathways finalize their connections.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Baby className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Prematurity</h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">Premature birth is heavily associated with increased risk of SPD. The sensory systems undergo critical development during the final weeks of pregnancy in a highly controlled environment (the womb). Premature birth violently interrupts this process.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <ShieldAlert className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Adverse Experiences</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Significant physical stress or early trauma can alter how the nervous system establishes its threat-detection baseline, sometimes creating acquired sensory sensitivities or defensive responses later in life.</p>
                </div>
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
                <p>1. Goldsmith, H. H., et al. (2006). A population-based twin study of parentally reported tactile and auditory defensiveness in young children. <i>Journal of Abnormal Child Psychology</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Bart, O., et al. (2011). Prediction of participation and sensory modulation of late preterm infants. <i>Research in Developmental Disabilities</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: MODELS & CO-OCCURRENCE
      ========================================== */}
      {activeTab === 'models' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Co-occurrence Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Overlapping Conditions</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-causes-cooccurrence.webp"
              alt="Diagram showing overlapping neurological pathways of SPD, Autism, and ADHD"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              SPD frequently co-occurs with other neurodevelopmental conditions, suggesting a deeply shared genetic and neurological architecture.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Network className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Autism Spectrum</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Upwards of 90% of individuals with Autism experience sensory differences. Sensory symptoms are so foundational they are now explicitly written into the DSM-5 diagnostic criteria for Autism.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Activity className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">ADHD</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Recent 2020+ reviews confirm a massive overlap between ADHD and SPD. The inability to filter out background sensory noise (like a humming light) directly severely impairs attention regulation.<sup>1</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Layers className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Dyspraxia</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Developmental Coordination Disorder (Dyspraxia) is heavily tied to SPD, highlighting how the brain cannot execute smooth physical motor planning without accurate, stable sensory feedback.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Research & Models Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Theoretical Models & Future Research</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-causes-research.webp"
              alt="Child wearing an EEG cap in a modern clinical research setting"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <Search className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Predictive Coding Models</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A modern theory suggesting that SPD involves atypical "predictive processing." The neurotypical brain constantly makes subconscious predictions about incoming sensory data to ignore it; the SPD brain may fail to generate these predictions, making every sensation feel jarring and "new."</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <Microscope className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Physiological Markers</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Current research is moving beyond behavioral surveys to identify objective biological markers. Studies using EEG and electrodermal responses (measuring sweat and stress reactions) are proving that sensory overload creates a massive, involuntary physiological stress spike.<sup>2</sup></p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Theories
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Crasta, J. E., et al. (2020). Sensory processing and attention profiles among children with sensory processing disorders and autism spectrum disorders. <i>Frontiers in Integrative Neuroscience</i>.</p>
                <p>2. Lane, S. J., et al. (2010). Sensory over-responsivity and ADHD: Differentiating using electrodermal responses, cortisol, and anxiety. <i>Frontiers in Integrative Neuroscience</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Van de Cruys, S., et al. (2014). Precise minds in uncertain worlds: Predictive coding in autism. <i>Psychological Review</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}