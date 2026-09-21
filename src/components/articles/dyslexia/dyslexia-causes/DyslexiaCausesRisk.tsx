import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';
import { BookOpen, Map, Baby, ChevronRight, XCircle, Layers, Lightbulb, Microscope } from 'lucide-react';

interface DyslexiaCausesRiskProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaCausesRisk({ setCurrentArticle }: DyslexiaCausesRiskProps) {
  return (
    <article className="max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px]">
      
      {/* Header and Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          Dyslexia: Causes & Origins
        </h1>
        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-lg">←</span>
          All About Dyslexia
        </button>
      </div>

      {/* Mobile Back Button */}
      <button 
        onClick={() => setCurrentArticle?.('dyslexia')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-lg">←</span>
        All About Dyslexia
      </button>
      
      <Tabs defaultValue="risk" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger 
            value="brain" 
            onClick={() => setCurrentArticle?.('dyslexia-causes-brain')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Brain & Neurobiology
          </TabsTrigger>
          <TabsTrigger 
            value="genetics" 
            onClick={() => setCurrentArticle?.('dyslexia-causes-genetics')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Genetics
          </TabsTrigger>
          <TabsTrigger 
            value="risk" 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Risk Factors
          </TabsTrigger>
        </TabsList>

        <TabsContent value="risk" className="animate-fadeIn">
          
          {/* Centered Intro Section */}
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Risk Factors & Environment
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-causes-Risk-TAB-chart.webp"
              alt="Structural differences and risk factors in the dyslexic brain"
              className="block mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-sm border border-slate-200"
            />
            <p className="mb-10 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              While the biological markers for dyslexia exist from birth, environmental variables actively shape the brain's microstructures. A genetic predisposition combined with specific early life factors dictates the ultimate severity of the reading challenge.
            </p>
          </div>

          {/* Environmental and Risk Factors */}
          <h3 className="text-2xl font-bold mt-8 mb-4 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            Environmental & Lifestyle Influences
          </h3>
          <p className="mb-8 text-slate-700 leading-relaxed text-center max-w-4xl mx-auto">
            Research heavily emphasizes the interplay of gene-environment interactions. Early exposure, educational resources, and even the language you are born speaking act as compounding variables.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            {/* Early Environment */}
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 shadow-sm flow-root">
              <div className="flex flex-col h-full">
                <h4 className="font-bold text-[#0c264d] text-lg flex items-center justify-center gap-3 mb-4 text-center">
                  <BookOpen className="w-7 h-7 text-[#d4a017] shrink-0" />
                  <span>Early Environmental Impact</span>
                </h4>
                <ul className="space-y-3 text-sm text-slate-700 w-full flex-grow text-left">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="text-[#d4a017] shrink-0 mt-0.5 w-5 h-5" /> 
                    <span>Home literacy habits and how frequently a young child is read to significantly alter early white matter development.<sup className="text-[10px]">1</sup></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="text-[#d4a017] shrink-0 mt-0.5 w-5 h-5" /> 
                    <span>Socioeconomic status influences access to early, explicit phonological instruction.<sup className="text-[10px]">2</sup></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="text-[#d4a017] shrink-0 mt-0.5 w-5 h-5" /> 
                    <span>High-quality intervention can structurally compensate for underlying genetic risk.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Language Orthography */}
            <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200 shadow-sm flow-root">
              <div className="flex flex-col h-full">
                <h4 className="font-bold text-[#0c264d] text-lg flex items-center justify-center gap-3 mb-4 text-center">
                  <Map className="w-7 h-7 text-[#0A9DC4] shrink-0" />
                  <span>Language Orthography</span>
                </h4>
                <ul className="space-y-3 text-sm text-slate-700 w-full flex-grow text-left">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="text-[#0A9DC4] shrink-0 mt-0.5 w-5 h-5" /> 
                    <span><strong>Deep vs. Shallow:</strong> Dyslexia manifests very differently depending on the writing system's structure.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="text-[#0A9DC4] shrink-0 mt-0.5 w-5 h-5" /> 
                    <span><strong>English Complexity:</strong> English has highly irregular letter-sound rules, exacerbating genetic risk.<sup className="text-[10px]">3</sup></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="text-[#0A9DC4] shrink-0 mt-0.5 w-5 h-5" /> 
                    <span><strong>Transparent Languages:</strong> Dyslexia in Italian or Finnish is often much less severe due to clear phonetics.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Prenatal and Perinatal Factors */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm md:col-span-2 max-w-2xl mx-auto w-full flow-root">
              <div className="flex flex-col h-full">
                <h4 className="font-bold text-[#0c264d] text-lg flex items-center justify-center gap-3 mb-4 text-center">
                  <Baby className="w-7 h-7 text-[#0c264d] shrink-0" />
                  <span>Pre- & Perinatal Factors</span>
                </h4>
                <ul className="space-y-3 text-sm text-slate-700 w-full flex-grow text-left">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="text-[#0c264d] shrink-0 mt-0.5 w-5 h-5" /> 
                    <span>Premature birth and extremely low birth weight show modest associations with reading difficulties later in life.<sup className="text-[10px]">4</sup></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="text-[#0c264d] shrink-0 mt-0.5 w-5 h-5" /> 
                    <span>These early factors act as compounding variables, interacting with genetic vulnerabilities rather than causing dyslexia independently.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* MYTH BUSTING BOX */}
          <div className="bg-red-50 border-t-4 border-red-500 rounded-xl p-6 mb-12 shadow-sm flow-root">
            <h3 className="text-xl font-bold mb-6 text-red-800 flex items-center gap-3 justify-center md:justify-start">
              <XCircle className="w-6 h-6 shrink-0" />
              What Does NOT Cause Dyslexia
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm border border-red-100">
                <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
                <p className="text-sm text-slate-800"><strong>Vision problems:</strong> Dyslexia is not caused by visual deficits or eye problems.</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm border border-red-100">
                <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
                <p className="text-sm text-slate-800"><strong>Seeing backwards:</strong> This is an outdated myth; dyslexia is a language-based decoding issue.</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm border border-red-100">
                <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
                <p className="text-sm text-slate-800"><strong>Low intelligence:</strong> Dyslexia occurs completely independently of IQ levels.</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm border border-red-100">
                <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
                <p className="text-sm text-slate-800"><strong>Lack of effort:</strong> The dyslexic brain works significantly harder during reading tasks.</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm border border-red-100">
                <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
                <p className="text-sm text-slate-800"><strong>Poor parenting:</strong> While instruction quality matters, it does not rewrite genetic structure.</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm border border-red-100">
                <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✗</span>
                <p className="text-sm text-slate-800"><strong>Too much screen time:</strong> There is absolutely zero evidence linking technology to dyslexia onset.</p>
              </div>
            </div>
          </div>

          {/* Integrative Understanding */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            Integrative Understanding
          </h3>
          <p className="mb-6 text-slate-700 text-center">The current scientific consensus views dyslexia as a dynamic, multifactorial condition:<sup className="text-[10px]">5</sup></p>
          
          <div className="bg-[#0c264d] p-6 rounded-xl shadow-md mb-12 flow-root">
            <h4 className="font-bold mb-6 text-[#ffd166] text-lg flex items-center justify-center gap-3 text-center">
              <Layers className="w-7 h-7 text-[#ffd166] shrink-0" />
              <span>Multiple Levels of Causation</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <strong className="text-white block mb-1">Genetic Level:</strong>
                <span className="text-slate-300 text-sm">Multiple genes affecting early brain development and network function.</span>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <strong className="text-white block mb-1">Neurobiological Level:</strong>
                <span className="text-slate-300 text-sm">Differences in brain structure, white matter connectivity, and activation.</span>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <strong className="text-white block mb-1">Cognitive Level:</strong>
                <span className="text-slate-300 text-sm">Phonological processing deficits and naming speed as the primary mechanism.</span>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <strong className="text-white block mb-1">Behavioral Level:</strong>
                <span className="text-slate-300 text-sm">Real-world reading, spelling, decoding, and writing difficulties.</span>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20 sm:col-span-2 lg:col-span-1">
                <strong className="text-white block mb-1">Environmental Level:</strong>
                <span className="text-slate-300 text-sm">Instruction quality, literacy exposure, and language structure influence severity.</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Implications */}
            <div className="bg-[#ffd166]/20 border-t-4 border-[#0A9DC4] rounded-xl p-6 shadow-sm flow-root">
              <div className="flex flex-col h-full">
                <h4 className="font-bold text-[#0c264d] text-lg flex items-center justify-center gap-3 mb-4 text-center">
                  <Lightbulb className="w-7 h-7 text-[#0A9DC4] shrink-0" />
                  <span>Implications for Intervention</span>
                </h4>
                <p className="text-sm text-slate-700 mb-4 text-left">Understanding the biological roots heavily informs modern treatment:<sup className="text-[10px]">6</sup></p>
                <ul className="space-y-3 text-sm text-slate-700 flex-grow text-left">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" /> 
                    <span>Targeted phonological training specifically addresses the core neuro-cognitive deficit.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" /> 
                    <span>Early intervention safely capitalizes on natural childhood brain plasticity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" /> 
                    <span>Explicit instruction physically compensates for inefficient neural processing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" /> 
                    <span>Understanding the biological basis dramatically reduces stigma and shame.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Research */}
            <div className="bg-[#ffd166]/20 border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
              <div className="flex flex-col h-full">
                <h4 className="font-bold text-[#0c264d] text-lg flex items-center justify-center gap-3 mb-4 text-center">
                  <Microscope className="w-7 h-7 text-[#2abcd4] shrink-0" />
                  <span>Ongoing Research</span>
                </h4>
                <p className="text-sm text-slate-700 mb-4 text-left">Dyslexia research continues to rapidly evolve across the globe:</p>
                <ul className="space-y-3 text-sm text-slate-700 flex-grow text-left">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-[#2abcd4] shrink-0 mt-0.5" /> 
                    <span>Identifying additional polygenic variants and their exact prenatal functions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-[#2abcd4] shrink-0 mt-0.5" /> 
                    <span>Understanding the precise interaction between genetics and classroom environment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-[#2abcd4] shrink-0 mt-0.5" /> 
                    <span>Mapping the structural networks involved in reading with greater fMRI detail.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-[#2abcd4] shrink-0 mt-0.5" /> 
                    <span>Developing physical and cognitive biomarkers for much earlier clinical identification.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-end my-8 clear-both">
            <button 
              onClick={() => setCurrentArticle?.('dyslexia')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
            >
              <span className="text-lg">←</span>
              All About Dyslexia
            </button>
          </div>

          {/* REFERENCES SECTION */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#10b981] mb-3 border-b-2 border-[#10b981] pb-2">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>1. Noble, K. G., et al. (2015). Family income, parental education and brain structure in children and adolescents. <i>Nature Neuroscience</i>.</p>
                <p>2. Ozernov-Palchik, O., et al. (2019). The relationship between socioeconomic status and white matter microstructure in children with reading disability. <i>NeuroImage: Clinical</i>.</p>
                <p>3. Share, D. L. (2008). On the Anglocentricities of current reading research and practice: The perils of overreliance on an outlier orthography. <i>Psychological Bulletin</i>.</p>
                <p>4. Litt, J., et al. (2005). Learning disabilities in children with very low birthweight: Prevalence, neuropsychological correlates, and educational interventions. <i>Journal of Learning Disabilities</i>.</p>
                <p>5. Peterson, R. L., & Pennington, B. F. (2015). Developmental dyslexia. <i>Annual Review of Clinical Psychology</i>.</p>
                <p>6. Snowling, M. J., & Hulme, C. (2011). Evidence-based interventions for reading and language difficulties: Creating a virtuous circle. <i>British Journal of Educational Psychology</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b-2 border-[#2abcd4] pb-2">
                Background Sources
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</p>
                <p>Ziegler, J. C., & Goswami, U. (2005). Reading acquisition, developmental dyslexia, and skilled reading across languages. <i>Psychological Bulletin</i>.</p>
                <p>Fletcher, J. M., et al. (2018). <i>Learning disabilities: From identification to intervention</i> (2nd ed.). Guilford Publications.</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}