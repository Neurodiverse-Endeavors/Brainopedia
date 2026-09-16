import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DLDCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DLDCauses({ setCurrentArticle, initialTab }: DLDCausesProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'genetics');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px]">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          DLD: Causes & Origins
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About DLD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('dld')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About DLD
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('genetics')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'genetics'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Genetics & Neurobiology
        </button>
        <button
          onClick={() => setActiveTab('environment')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'environment'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Cognition & Environment
        </button>
        <button
          onClick={() => setActiveTab('research')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'research'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Myths & Research
        </button>
      </div>

      {/* ==========================================
          TAB 1: GENETICS & NEUROBIOLOGY
      ========================================== */}
      {activeTab === 'genetics' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Genetics Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Genetic Factors</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-causes-genetics.webp"
              alt="DNA helix representing the hereditary nature of language development"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Developmental Language Disorder has complex, multifactorial origins. While the exact mechanisms are still being heavily researched, clinical consensus strongly points to a foundation of genetic and neurobiological differences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Strong Heritability</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">DLD frequently clusters in families. Extensive twin studies have estimated that between 50% to 70% of individual differences in language abilities are highly heritable.<sup>1</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Complex Inheritance</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">DLD is not caused by a single "broken" gene. It is polygenic, meaning multiple genes (like FOXP2 and CNTNAP2) interact with each other and the environment in highly complex ways to influence early language acquisition.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Neurobiology Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Neurobiological Factors</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-causes-neurobiology-hero.webp"
              alt="Brain scan highlighting language processing regions"
              className="block mx-auto w-64 h-auto mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Advanced neuroimaging reveals that the brains of children with DLD are structurally intact but process language differently, relying on distinct neural networks and pathways.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#d4a017] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Brain Structure</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Scans show subtle differences in the perisylvian regions (the brain's primary language centers) and altered connectivity in the white matter pathways responsible for transporting linguistic data.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#d4a017] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Brain Function</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Functional MRIs show that individuals with DLD often use different patterns of neural activation during language tasks, resulting in a less efficient, highly effortful processing network.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#d4a017] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Procedural Deficits</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The <em>Procedural Deficit Hypothesis</em> suggests that DLD stems from dysfunction in the brain's implicit learning system, making it incredibly difficult to naturally "absorb" the subconscious rules of grammar.<sup>2</sup></p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Tomblin, J. B., & Buckwalter, P. R. (1998). Heritability of poor language achievement among twins. <i>Journal of Speech, Language, and Hearing Research</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/9493744/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 9493744</a></p>
                <p>2. Ullman, M. T., & Pierpont, E. I. (2005). Specific language impairment is not specific to language: The procedural deficit hypothesis. <i>Cortex</i>. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0010945208702764" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">https://www.sciencedirect.com/science/article/abs/pii/S0010945208702764</a></p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Bishop, D. V. M. (2006). What causes specific language impairment in children? <i>Current Directions in Psychological Science</i>. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2582396/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMC2582396</a></li>
                <li>Newbury, D. F., & Monaco, A. P. (2010). Genetic advances in the study of speech and language disorders. <i>Neuron</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/20955937/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 20955937</a></li>
                <li>Badcock, N. A., Bishop, D. V. M., Hardiman, M. J., Barry, J. G., & Watkins, K. E. (2012). Co-localisation of abnormal brain structure and function in specific language impairment. <i>Brain and Language</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/22137677/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 22137677</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: COGNITION & ENVIRONMENT
      ========================================== */}
      {activeTab === 'environment' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Cognition Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Cognitive Processing Differences</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-causes-cognition.webp"
              alt="Abstract representation of working memory and processing speed"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-300"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Beneath the surface of grammatical errors and limited vocabulary, individuals with DLD often share fundamental differences in how their brain handles, stores, and accesses real-time data.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Working Memory</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A highly limited capacity for phonological working memory. They struggle to temporarily hold and manipulate sounds and verbal information in their mind long enough to learn new vocabulary or grasp long sentences.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Processing Speed</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Neurologically slower processing of rapid linguistic information. When someone speaks quickly, the child's processing center falls behind, causing them to miss critical pieces of the conversation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Environment Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Environmental & Risk Factors</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-causes-environment-hero.webp"
              alt="A warm, supportive early childhood environment"
              className="block mx-auto w-64 h-auto mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Environmental factors do not directly <em>cause</em> DLD, but certain early life events and environmental conditions can act as significant risk factors or exacerbate underlying genetic vulnerabilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0A9DC4] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Perinatal Risks</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Premature birth and low birth weight are associated with a generally increased risk of developmental delays, as early neural pathways are highly vulnerable during early gestation.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0A9DC4] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Language Input</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">While poor input does not cause DLD (the condition occurs even in language-rich homes), limited early exposure can severely worsen the outcomes of a child already genetically predisposed to language challenges.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0A9DC4] mt-1 shrink-0"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Ear Infections</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Early, chronic ear infections (otitis media) can create inconsistent, muffled hearing during critical periods of language acquisition, acting as a compounding risk factor for delays.</p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Gathercole, S. E., & Baddeley, A. D. (1990). Phonological memory deficits in language disordered children: Is there a causal connection? <i>Journal of Memory and Language</i>. <a href="https://doi.org/10.1016/0749-596X(90)90004-J" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">doi:10.1016/0749-596X(90)90004-J</a></li>
                <li>Leonard, L. B., Weismer, S. E., Miller, C. A., Francis, D. J., Tomblin, J. B., & Kail, R. V. (2007). Speed of processing, working memory, and language impairment in children. <i>Journal of Speech, Language, and Hearing Research</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/17463238/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 17463238</a></li>
                <li>Barre, N., Morgan, A., Doyle, L. W., & Anderson, P. J. (2011). Language abilities in children who were very preterm and/or very low birth weight: A meta-analysis. <i>The Journal of Pediatrics</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/21146182/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 21146182</a></li>
                <li>Roberts, J. E., Rosenfeld, R. M., & Zeisel, S. A. (2004). Otitis media and speech and language: A meta-analysis of prospective studies. <i>Pediatrics</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/14993583/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 14993583</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: MYTHS & RESEARCH
      ========================================== */}
      {activeTab === 'research' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Myths Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">What DLD Is NOT Caused By</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-causes-myths.webp"
              alt="Magnifying glass focusing on facts and shattering misconceptions"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Historically, children with hidden communication barriers were unfairly blamed for their struggles. Eradicating these outdated myths is the first step in providing effective support and protecting the child's self-esteem.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              
              <div className="bg-white p-3 rounded-lg shadow-sm border border-red-200 relative overflow-hidden flex items-center">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-cyan-500"></div>
                <p className="text-xs text-slate-700 font-bold pl-3">NOT caused by poor parenting, lack of reading at home, or neglect.</p>
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-sm border border-red-200 relative overflow-hidden flex items-center">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-cyan-500"></div>
                <p className="text-xs text-slate-700 font-bold pl-3">NOT a result of laziness; children with DLD are often working twice as hard.</p>
              </div>

              <div className="bg-white p-3 rounded-lg shadow-sm border border-red-200 relative overflow-hidden flex items-center">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-cyan-500"></div>
                <p className="text-xs text-slate-700 font-bold pl-3">NOT linked to low intelligence; it occurs across all IQ levels.</p>
              </div>

              <div className="bg-white p-3 rounded-lg shadow-sm border border-red-200 relative overflow-hidden flex items-center">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-cyan-500"></div>
                <p className="text-xs text-slate-700 font-bold pl-3">NOT caused by learning two languages (bilingualism).</p>
              </div>
            </div>
          </div>

          {/* Research Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Theoretical Models & Current Research</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-causes-research-hero.webp"
              alt="Modern research setting analyzing genomic data"
              className="block mx-auto w-64 h-auto mb-8 rounded-lg shadow-sm border border-gray-300"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Multiple Deficit Model</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Most researchers today recognize DLD through a multifactorial model, where genetic vulnerabilities interact with neurobiological differences and environmental factors to create unique language barriers.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Ongoing Studies</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Current research is heavily focused on genome-wide association studies, advanced brain imaging techniques, and longitudinal tracking to see how language brains change in response to targeted treatment.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Future Goals</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The ultimate goal of DLD research is to identify early biological biomarkers for rapid diagnosis, allowing for highly personalized, neurobiology-based interventions before the child ever experiences academic failure.</p>
                </div>
              </div>

            </div>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Paradis, J., Genesee, F., & Crago, M. B. (2011). <i>Dual language development and disorders: A handbook on bilingualism and second language learning</i>. Paul H. Brookes Publishing.</li>
                <li>Bishop, D. V. M., Snowling, M. J., Thompson, P. A., Greenhalgh, T., & CATALISE-2 consortium. (2016). CATALISE: A multinational and multidisciplinary Delphi consensus study. <i>PLoS ONE</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/27392128/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 27392128</a></li>
                <li>Rice, M. L. (2013). Language growth and genetics of specific language impairment. <i>International Journal of Speech-Language Pathology</i>. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3684183/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMCID: PMC3684183</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About DLD
        </button>
      </div>

    </article>
  );
}