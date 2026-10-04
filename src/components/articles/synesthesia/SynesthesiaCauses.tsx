import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SynesthesiaCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function SynesthesiaCauses({ setCurrentArticle, initialTab }: SynesthesiaCausesProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'genetics';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Synesthesia: Causes & Origins
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('synesthesia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Synesthesia
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('genetics')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'genetics'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Genetics & Heredity
        </button>
        <button
          onClick={() => handleTabChange('theories')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'theories'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Neurological Theories
        </button>
        <button
          onClick={() => handleTabChange('structure')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'structure'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Brain Structure & Growth
        </button>
      </div>

      {/* ==========================================
          TAB 1: GENETICS & HEREDITY
      ========================================== */}
      {activeTab === 'genetics' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Synesthesia is not a learned behavior or a metaphor; it is a profound neurological trait with deep biological roots. Research heavily indicates that this sensory cross-wiring begins with a person's genetic blueprint.
          </p>

          {/* Heredity Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Genetic Links</h2>
            
            <ImageWithFallback 
              src="/images/synesthesia/synesthesia-causes-genetics.webp" 
              alt="DNA helix and brain neural connections"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Synesthesia has a strong genetic component and frequently runs in families. While the specific manifestations (like which colors match to which letters) are not inherited directly, the underlying neurological predisposition to cross-sensory connections is passed down.<sup>1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Familial Patterns</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Family Clusters:</strong> Approximately 40-50% of synesthetes report having a first-degree relative who also experiences synesthesia.</li>
                  <li><strong>Varying Types:</strong> A parent might have chromesthesia (sound-to-color), while their child might have lexical-gustatory (word-to-taste) synesthesia.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Ongoing Gene Research</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Axonogenesis Genes:</strong> Recent studies have found rare variants in genes related to axonogenesis (the process of forming neural connections) connecting families with sound-color synesthesia.<sup>2</sup></li>
                  <li><strong>Polygenic Trait:</strong> It is likely polygenic, meaning multiple genes interact to create the condition rather than a single "synesthesia gene."</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: NEUROLOGICAL THEORIES
      ========================================== */}
      {activeTab === 'theories' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            How exactly do these sensory experiences cross paths in the brain? Neurologists currently debate two primary theories regarding the physical mechanics of synesthesia.
          </p>

          {/* Theories Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Cross-Wiring Debate</h2>
            
            <ImageWithFallback 
              src="/images/synesthesia/synesthesia-causes-theories.webp" 
              alt="Visual map of sensory pathways in the brain"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              While both leading theories acknowledge that synesthetes process sensory information differently, they differ on whether the cause is an excess of physical connections or a lack of chemical inhibition between existing pathways.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Cross-Activation Theory</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Physical Connections:</strong> Suggests that synesthesia occurs due to an excess of physical neural connections between adjacent brain areas.<sup>3</sup></li>
                  <li><strong>Grapheme-Color Example:</strong> The brain region that processes letters/numbers sits physically adjacent to the region that processes color; excess connections between them cause simultaneous firing.<sup>4</sup></li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Disinhibited Feedback Theory</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Existing Pathways:</strong> Proposes that all humans actually have neural connections between different sensory areas.</li>
                  <li><strong>Reduced Inhibition:</strong> In most people, these cross-sensory connections are inhibited by the brain. In synesthetes, this inhibition is reduced, allowing sensory signals to "leak" or feed back into other regions.<sup>5</sup></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: BRAIN STRUCTURE & GROWTH
      ========================================== */}
      {activeTab === 'structure' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Modern neuroimaging technologies like fMRI and DTI have allowed scientists to look past theory and directly observe the physical differences in a synesthetic brain.
          </p>

          {/* Brain Imaging Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Structure & Development</h2>
            
            <ImageWithFallback 
              src="/images/synesthesia/synesthesia-causes-imaging.webp" 
              alt="fMRI brain scan showing colorful activation regions"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Scans reveal that synesthetes have distinctly different brain structures and activation patterns compared to the general population, showing physical evidence of heightened connectivity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Physical Differences</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Increased Gray Matter:</strong> Scans show greater volumes of gray matter in regions related to perception and attention.<sup>7</sup></li>
                  <li><strong>Structural Connectivity:</strong> DTI (Diffusion Tensor Imaging) confirms significantly enhanced white matter connectivity (the brain's "highways") between sensory areas.<sup>6</sup></li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Neonatal Synesthesia</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>The Infant Brain:</strong> Researchers theorize that all infants may experience the world synesthetically due to highly interconnected, unpruned neural networks.<sup>8</sup></li>
                  <li><strong>The Pruning Process:</strong> As a typical brain develops, it "prunes" away excess connections to differentiate the senses. In synesthetes, this pruning process is incomplete, leaving the cross-connections active for life.<sup>8</sup></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('synesthesia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Synesthesia
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
            Cited Studies & Literature
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p>1. Tomson, S. N., et al. (2011). The genetics of colored sequence synesthesia: Suggestive evidence of linkage to 16q and genetic heterogeneity for the condition. <i>Behavioural Brain Research</i>.</p>
            <p>2. Tilot, A. K., et al. (2018). Rare variants in axonogenesis genes connect three families with sound-color synesthesia. <i>Proceedings of the National Academy of Sciences</i>.</p>
            <p>3. Ramachandran, V. S., & Hubbard, E. M. (2001). Synaesthesia—a window into perception, thought and language. <i>Journal of Consciousness Studies</i>.</p>
            <p>4. Hubbard, E. M., et al. (2005). Individual differences among grapheme-color synesthetes: Brain-behavior correlations. <i>Neuron</i>.</p>
            <p>5. Grossenbacher, P. G., & Lovelace, C. T. (2001). Mechanisms of synesthesia: Cognitive and physiological constraints. <i>Trends in Cognitive Sciences</i>.</p>
            <p>6. Rouw, R., & Scholte, H. S. (2007). Increased structural connectivity in grapheme-color synesthesia. <i>Nature Neuroscience</i>.</p>
            <p>7. Jäncke, L., et al. (2009). The neuroanatomy of grapheme-color synesthesia. <i>European Journal of Neuroscience</i>.</p>
            <p>8. Maurer, D., & Mondloch, C. J. (2005). Neonatal synesthesia: A re-evaluation. In <i>Synesthesia: Perspectives from cognitive neuroscience</i>. Oxford University Press.</p>
          </div>
        </div>
      </div>
    </article>
  );
}