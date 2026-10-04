import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyspraxiaCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DyspraxiaCauses({ setCurrentArticle, initialTab }: DyspraxiaCausesProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'neurology';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Dyspraxia: Causes & Origins
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dyspraxia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Dyspraxia
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
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
          onClick={() => handleTabChange('genetics')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'genetics'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Biology & Genetics
        </button>
        <button
          onClick={() => handleTabChange('development')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'development'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Developmental Factors
        </button>
      </div>

      {/* ==========================================
          TAB 1: NEUROLOGY & BRAIN
      ========================================== */}
      {activeTab === 'neurology' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Dyspraxia is entirely rooted in how the brain processes and transmits the electrical signals required for movement planning. It is explicitly not caused by muscle weakness, nerve damage, or low intelligence.
          </p>

          {/* Brain Imaging Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Neurological Disruption</h2>
            
            <ImageWithFallback 
              src="/images/dyspraxia/dyspraxia-causes-neurology.webp" 
              alt="Medical mapping of the brain's motor cortex and cerebellum"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Brain imaging studies have identified distinct functional differences in how the dyspraxic brain activates during physical tasks. The neurological disruption occurs in the pathways that map out spatial awareness and sequence motor commands.<sup>1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Key Brain Regions</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Cerebellum:</strong> The area responsible for fine-tuning smooth, coordinated movements and balance.<sup>2</sup></li>
                  <li><strong>Motor Cortex:</strong> The region that generates the neural impulses directly controlling the execution of movement.</li>
                  <li><strong>Basal Ganglia:</strong> Crucial for facilitating desired movements while inhibiting competing, unwanted movements.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Processing Differences</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Signal Transmission:</strong> Messages from the brain are not consistently or cleanly transmitted to the body.</li>
                  <li><strong>Automation:</strong> The brain struggles to automate movements, requiring intense conscious effort for tasks that should be subconscious (like walking or chewing).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: BIOLOGY & GENETICS
      ========================================== */}
      {activeTab === 'genetics' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            While the exact biological mechanism remains an area of active study, research consistently demonstrates that dyspraxia has a strong hereditary foundation.
          </p>

          {/* Genetics Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Genetic Influence</h2>
            
            <ImageWithFallback 
              src="/images/dyspraxia/dyspraxia-causes-genetics.webp" 
              alt="DNA helix and family heritage concepts"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Dyspraxia frequently runs in families. Although researchers have not isolated a single "dyspraxia gene," the clustering of motor coordination disorders within family lines indicates a clear genetic predisposition.<sup>3</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Familial Patterns</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Inheritance:</strong> A child is significantly more likely to be diagnosed with DCD if a parent or sibling also exhibits motor planning difficulties.</li>
                  <li><strong>Shared Traits:</strong> Relatives may not have a formal dyspraxia diagnosis but often report histories of "clumsiness" or avoiding sports.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Polygenic Nature</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Complex Origin:</strong> It is highly likely that multiple genes interact to influence the structural development of the brain's motor networks.</li>
                  <li><strong>Shared Genetics:</strong> The genetic markers for dyspraxia frequently overlap closely with those for ADHD, Autism, and Dyslexia.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: DEVELOPMENTAL FACTORS
      ========================================== */}
      {activeTab === 'development' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Certain early developmental factors and environmental circumstances can influence how neural pathways mature, contributing to the presentation of dyspraxia.
          </p>

          {/* Development Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Neural Maturation</h2>
            
            <ImageWithFallback 
              src="/images/dyspraxia/dyspraxia-causes-development.webp" 
              alt="Timeline of early childhood motor milestones"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The condition stems from disruptions in neural pathways during early brain development. Because the dyspraxic brain struggles to establish efficient connections, it works much harder to perform tasks that typically become automatic.<sup>4</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Early Risk Factors</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Prematurity:</strong> Babies born prematurely (before 37 weeks) have a statistically higher risk of developing motor coordination issues.</li>
                  <li><strong>Low Birth Weight:</strong> Significantly correlated with delays in fine and gross motor maturation.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">The Cost of Effort</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Cognitive Load:</strong> Because movements aren't automated, individuals use high-level conscious reasoning just to walk or write.</li>
                  <li><strong>Chronic Fatigue:</strong> This neurological "workaround" burns massive amounts of energy, leading to chronic physical and mental fatigue.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dyspraxia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          Back to Dyspraxia
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
            <p>1. Zwicker, J. G., et al. (2009). Brain activation during execution and observation of motor tasks in children with developmental coordination disorder. <i>American Journal of Occupational Therapy</i>.</p>
            <p>2. Gomez, A., & Sirigu, A. (2015). Developmental coordination disorder: core sensorimotor deficits, neurobiology, and etiology. <i>Frontiers in Human Neuroscience</i>.</p>
            <p>3. Lichtenstein, P., et al. (2010). The genetics of autism spectrum disorders and related neuropsychiatric disorders in childhood. <i>American Journal of Psychiatry</i>.</p>
            <p>4. Blank, R., et al. (2012). European Academy for Childhood Disability (EACD): Recommendations on the definition, diagnosis and intervention of developmental coordination disorder. <i>Developmental Medicine & Child Neurology</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Biggs, V. (2005). <i>Caged in Chaos: A Dyspraxic Guide to Breaking Free</i>. Jessica Kingsley Publishers.</li>
            <li>Boon, M. (2010). <i>Understanding Dyspraxia: A Guide for Parents and Teachers</i> (2nd ed.). Jessica Kingsley Publishers.</li>
            <li>Cermak, S. A., & Larkin, D. (Eds.). (2002). <i>Developmental Coordination Disorder</i>. Thomson Delmar Learning.</li>
            <li>Colley, M. (2006). <i>Living with Dyspraxia: A Guide for Adults with Developmental Co-ordination Disorders</i>. Jessica Kingsley Publishers.</li>
            <li>Geuze, R. H. (2005). Postural control in children with developmental coordination disorder. <i>Neural Plasticity</i>.</li>
            <li>Gibbs, J., Appleton, J., & Appleton, R. (2007). Dyspraxia or developmental coordination disorder? Unravelling the enigma. <i>Archives of Disease in Childhood</i>.</li>
            <li>Kirby, A., & Peters, L. (2007). <i>100 Ideas for Supporting Children with Dyspraxia and DCD</i>. Continuum.</li>
            <li>Macintyre, S. (2001). <i>Dyspraxia 5-14: Identifying and Supporting Young People</i>. Routledge.</li>
            <li>Missiuna, C., Rivard, L., & Bartlett, D. (2003). Early identification and risk management of children with clumsy motor behaviors. <i>Pediatric Physical Therapy</i>.</li>
            <li>Sugden, D. A., & Chambers, M. E. (2005). <i>Children with Developmental Coordination Disorder</i>. Whurr Publishers.</li>
            <li>Zwicker, J. G., Missiuna, C., Harris, S. R., & Boyd, L. A. (2012). Developmental coordination disorder: A review and update. <i>European Journal of Paediatric Neurology</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}