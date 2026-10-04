import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Users, Share2, Layers, Brain, ShieldAlert, Zap, Activity, Microscope } from 'lucide-react';

interface TouretteCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TouretteCauses({ setCurrentArticle, initialTab }: TouretteCausesProps) {
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
          Tourette's: Causes & Origins
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('tourette')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Tourette's
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
          onClick={() => handleTabChange('neurology')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'neurology'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Neurology & Brain
        </button>
        <button
          onClick={() => handleTabChange('environment')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'environment'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Environment & Immune
        </button>
      </div>

      {/* ==========================================
          TAB 1: GENETICS & HEREDITY
      ========================================== */}
      {activeTab === 'genetics' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Tourette's is fundamentally a biological condition with a strong genetic foundation. While researchers have mapped its inheritance patterns, the exact genetic code remains highly complex.
          </p>

          {/* Genetics Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Genetic Links & Inheritance</h2>
            
            <ImageWithFallback 
              src="/images/tourette/tourette-causes-genetics.webp" 
              alt="DNA helix representing genetic inheritance patterns"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Population studies consistently demonstrate an increased risk of tic disorders in the immediate family members of individuals diagnosed with Tourette's, indicating a clear genetic predisposition.<sup>1, 2</sup>
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-cyan-100 max-w-4xl mx-auto">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#2abcd4] shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong>Familial Risk:</strong> First-degree relatives (parents, siblings, children) of an individual with Tourette's have a significantly higher statistical likelihood of developing a tic disorder.<sup>8</sup>
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <Share2 className="w-5 h-5 text-[#2abcd4] shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong>Polygenic Nature:</strong> There is no single "Tourette gene." The condition is polygenic, meaning it is caused by the complex interaction of multiple different genetic variations.<sup>1</sup>
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <Layers className="w-5 h-5 text-[#2abcd4] shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong>Shared Genetics:</strong> The genetic markers for Tourette's frequently overlap with the genetic markers for Obsessive-Compulsive Disorder (OCD) and ADHD.<sup>2</sup>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: NEUROLOGY & BRAIN
      ========================================== */}
      {activeTab === 'neurology' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            The biological root of Tourette's lies deep within the brain's motor control centers. Structural and chemical differences in these circuits explain the powerful urges and involuntary movements associated with the condition.
          </p>

          {/* Neurology Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Brain's Motor Circuits</h2>
            
            <ImageWithFallback 
              src="/images/tourette/tourette-causes-main.webp" 
              alt="Medical scan highlighting the basal ganglia in the brain"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Neurologically, Tourette's involves distinct differences in the cortico-striato-thalamo-cortical (CSTC) circuits—the pathways connecting the basal ganglia, thalamus, and frontal cortex.<sup>9</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">Structural Differences</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">
                      <strong>Basal Ganglia:</strong> This deep brain structure, which acts as the "brakes" for unwanted movements, shows functional differences and reduced volume in patients with Tourette's.<sup>5</sup>
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">
                      <strong>Inhibition:</strong> The brain struggles to inhibit automatic impulses, leading directly to the premonitory urge and the execution of the tic.<sup>6</sup>
                    </p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">Chemical Imbalances</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">
                      <strong>Dopamine:</strong> A hypersensitivity to dopamine (the neurotransmitter involved in reward and movement) is a primary driver of tic expression.<sup>4</sup>
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">
                      <strong>Other Transmitters:</strong> Differences in serotonin and GABA (an inhibitory neurotransmitter) also play significant roles in the condition's severity.<sup>3</sup>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: ENVIRONMENT & IMMUNE
      ========================================== */}
      {activeTab === 'environment' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            While genetics load the gun, environmental and immunological factors often pull the trigger. External stressors and biological responses play a critical role in the onset and severity of tics.
          </p>

          {/* Environmental Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">External & Immune Factors</h2>
            
            <ImageWithFallback 
              src="/images/tourette/tourette-causes-environment.webp" 
              alt="Microscopic view of immune system responses"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 max-w-4xl mx-auto">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Microscope className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong>Prenatal Complications:</strong> Environmental factors during pregnancy, such as maternal stress, severe nausea, or low birth weight, have been correlated with an increased risk of severe tic expressions.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong>Autoimmune Responses:</strong> Ongoing research indicates that immune system abnormalities or severe post-infectious autoimmune responses (such as PANDAS) may trigger or severely exacerbate tic disorders in genetically vulnerable children.<sup>7</sup>
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <Share2 className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong>Epigenetics:</strong> The modern understanding of Tourette's relies on epigenetics—the concept that an individual's genetic vulnerabilities are explicitly "switched on" by their unique environmental interactions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('tourette')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Tourette's
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
            <p>1. O'Rourke, J. A., et al. (2009). The genetics of Tourette syndrome: A review. <i>Journal of Psychosomatic Research</i>.</p>
            <p>2. Pauls, D. L., et al. (2014). The inheritance of Tourette disorder: A review. <i>Journal of Obsessive-Compulsive and Related Disorders</i>.</p>
            <p>3. Singer, H. S., & Minzer, K. (2003). Neurobiology of Tourette's syndrome: Concepts of neuroanatomic localization and neurochemical abnormalities. <i>Brain and Development</i>.</p>
            <p>4. Buse, J., et al. (2013). Neuromodulation in Tourette syndrome: Dopamine and beyond. <i>Neuroscience & Biobehavioral Reviews</i>.</p>
            <p>5. Peterson, B. S., et al. (2003). Basal ganglia volumes in patients with Gilles de la Tourette syndrome. <i>Archives of General Psychiatry</i>.</p>
            <p>6. Jackson, G. M., et al. (2015). Inhibition, disinhibition, and the control of action in Tourette syndrome. <i>Trends in Cognitive Sciences</i>.</p>
            <p>7. Martino, D., et al. (2015). The role of immune mechanisms in Tourette syndrome. <i>Brain Research</i>.</p>
            <p>8. Mataix-Cols, D., et al. (2015). Familial risks of Tourette syndrome and chronic tic disorders: A population-based cohort study. <i>JAMA Psychiatry</i>.</p>
            <p>9. Mink, J. W. (2001). Basal ganglia dysfunction in Tourette's syndrome: A new hypothesis. <i>Pediatric Neurology</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Leckman, J. F. (2002). Tourette's syndrome. <i>The Lancet</i>.</li>
            <li>Martino, D., & Leckman, J. F. (2013). <i>Tourette Syndrome</i>. Oxford University Press.</li>
            <li>Robertson, M. M. (2000). Tourette syndrome, associated conditions and the complexities of treatment. <i>Brain</i>.</li>
            <li>State, M. W. (2011). The genetics of Tourette syndrome. <i>Current Opinion in Genetics & Development</i>.</li>
            <li>Swedo, S. E., et al. (1998). Pediatric autoimmune neuropsychiatric disorders associated with streptococcal infections. <i>American Journal of Psychiatry</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}