import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Users, Share2, Layers, ShieldAlert, Microscope } from 'lucide-react';

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
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Tourette's: Causes & Origins
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('tourette')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
        >
          <span className="text-xl">←</span>
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
          TAB 1: GENETICS & HEREDITY (CYAN)
      ========================================== */}
      {activeTab === 'genetics' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-3xl mx-auto mb-8">
            Tourette's is fundamentally a biological condition with a strong genetic foundation. While researchers have mapped its inheritance patterns, the exact genetic code remains highly complex.
          </p>

          {/* Genetics Card (Tab 1 Default: Cyan with Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Genetic Links & Inheritance</h2>
            
            <ImageWithFallback 
              src="/images/tourette/tourette-causes-genetics.webp" 
              alt="DNA helix representing genetic inheritance patterns"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Population studies consistently demonstrate an increased risk of tic disorders in the immediate family members of individuals diagnosed with Tourette's, indicating a clear genetic predisposition.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1, 2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Users className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Familial Risk</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  First-degree relatives (parents, siblings, children) of an individual with Tourette's have a significantly higher statistical likelihood of developing a tic disorder.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Share2 className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Polygenic Nature</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  There is no single "Tourette gene." The condition is polygenic, meaning it is caused by the complex interaction of multiple different genetic variations.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Layers className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Shared Genetics</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  The genetic markers for Tourette's frequently overlap with the genetic markers for Obsessive-Compulsive Disorder (OCD) and ADHD.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full">
            <button 
              onClick={() => setCurrentArticle?.('tourette')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
            >
              <span className="text-xl">←</span>
              All About Tourette's
            </button>
          </div>

          {/* ===== TAB 1 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. O'Rourke, J. A., et al. (2009). The genetics of Tourette syndrome: A review. <i>Journal of Psychosomatic Research</i>.</p>
                <p>2. Pauls, D. L., et al. (2014). The inheritance of Tourette disorder: A review. <i>Journal of Obsessive-Compulsive and Related Disorders</i>.</p>
                <p>3. Mataix-Cols, D., et al. (2015). Familial risks of Tourette syndrome and chronic tic disorders: A population-based cohort study. <i>JAMA Psychiatry</i>.</p>
              </div>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Leckman, J. F. (2002). Tourette's syndrome. <i>The Lancet</i>.</li>
                <li>Martino, D., & Leckman, J. F. (2013). <i>Tourette Syndrome</i>. Oxford University Press.</li>
                <li>Robertson, M. M. (2000). Tourette syndrome, associated conditions and the complexities of treatment. <i>Brain</i>.</li>
                <li>State, M. W. (2011). The genetics of Tourette syndrome. <i>Current Opinion in Genetics & Development</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: NEUROLOGY & BRAIN (NAVY)
      ========================================== */}
      {activeTab === 'neurology' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-3xl mx-auto mb-8">
            The biological root of Tourette's lies deep within the brain's motor control centers. Structural and chemical differences in these circuits explain the powerful urges and involuntary movements associated with the condition.
          </p>

          {/* Neurology Card (Tab 2 Default: Navy with 3D Left-Stripe Inner Cards, No Icons/Bullets) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Brain's Motor Circuits</h2>
            
            <ImageWithFallback 
              src="/images/tourette/tourette-causes-main.webp" 
              alt="Medical scan highlighting the basal ganglia in the brain"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Neurologically, Tourette's involves distinct differences in the cortico-striato-thalamo-cortical (CSTC) circuits—the pathways connecting the basal ganglia, thalamus, and frontal cortex.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Basal Ganglia
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    This deep brain structure, which acts as the "brakes" for unwanted movements, shows functional differences and reduced volume in patients with Tourette's.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Inhibition
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    The brain struggles to inhibit automatic impulses, leading directly to the premonitory urge and the execution of the tic.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Dopamine
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    A hypersensitivity to dopamine (the neurotransmitter involved in reward and movement) is a primary driver of tic expression.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup>
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Other Transmitters
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Differences in serotonin and GABA (an inhibitory neurotransmitter) also play significant roles in the condition's severity.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full">
            <button 
              onClick={() => setCurrentArticle?.('tourette')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
            >
              <span className="text-xl">←</span>
              All About Tourette's
            </button>
          </div>

          {/* ===== TAB 2 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Mink, J. W. (2001). Basal ganglia dysfunction in Tourette's syndrome: A new hypothesis. <i>Pediatric Neurology</i>.</p>
                <p>2. Peterson, B. S., et al. (2003). Basal ganglia volumes in patients with Gilles de la Tourette syndrome. <i>Archives of General Psychiatry</i>.</p>
                <p>3. Jackson, G. M., et al. (2015). Inhibition, disinhibition, and the control of action in Tourette syndrome. <i>Trends in Cognitive Sciences</i>.</p>
                <p>4. Buse, J., et al. (2013). Neuromodulation in Tourette syndrome: Dopamine and beyond. <i>Neuroscience & Biobehavioral Reviews</i>.</p>
                <p>5. Singer, H. S., & Minzer, K. (2003). Neurobiology of Tourette's syndrome: Concepts of neuroanatomic localization and neurochemical abnormalities. <i>Brain and Development</i>.</p>
              </div>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Leckman, J. F. (2002). Tourette's syndrome. <i>The Lancet</i>.</li>
                <li>Martino, D., & Leckman, J. F. (2013). <i>Tourette Syndrome</i>. Oxford University Press.</li>
                <li>Robertson, M. M. (2000). Tourette syndrome, associated conditions and the complexities of treatment. <i>Brain</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: ENVIRONMENT & IMMUNE (YELLOW)
      ========================================== */}
      {activeTab === 'environment' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-3xl mx-auto mb-8">
            While genetics load the gun, environmental and immunological factors often pull the trigger. External stressors and biological responses play a critical role in the onset and severity of tics.
          </p>

          {/* Environmental Card (Tab 3 Default: Yellow with Double-Ring Navy Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">External & Immune Factors</h2>
            
            <ImageWithFallback 
              src="/images/tourette/tourette-causes-environment.webp" 
              alt="Microscopic view of immune system responses"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <Microscope className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Prenatal Complications</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Environmental factors during pregnancy, such as maternal stress, severe nausea, or low birth weight, have been correlated with an increased risk of severe tic expressions.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Autoimmune Responses</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Ongoing research indicates that immune system abnormalities or severe post-infectious autoimmune responses (such as PANDAS) may trigger or severely exacerbate tic disorders in genetically vulnerable children.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <Share2 className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Epigenetics</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  The modern understanding of Tourette's relies on epigenetics—the concept that an individual's genetic vulnerabilities are explicitly "switched on" by their unique environmental interactions.
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full">
            <button 
              onClick={() => setCurrentArticle?.('tourette')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
            >
              <span className="text-xl">←</span>
              All About Tourette's
            </button>
          </div>

          {/* ===== TAB 3 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Martino, D., et al. (2015). The role of immune mechanisms in Tourette syndrome. <i>Brain Research</i>.</p>
              </div>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Leckman, J. F. (2002). Tourette's syndrome. <i>The Lancet</i>.</li>
                <li>Martino, D., & Leckman, J. F. (2013). <i>Tourette Syndrome</i>. Oxford University Press.</li>
                <li>Swedo, S. E., et al. (1998). Pediatric autoimmune neuropsychiatric disorders associated with streptococcal infections. <i>American Journal of Psychiatry</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}