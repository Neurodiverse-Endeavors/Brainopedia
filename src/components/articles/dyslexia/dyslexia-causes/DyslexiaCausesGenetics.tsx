import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';
import { Dna, Network, BrainCircuit, Users, Users2, LineChart, Network as NetworkIcon, DnaOff, Microchip } from 'lucide-react';

interface DyslexiaCausesGeneticsProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaCausesGenetics({ setCurrentArticle }: DyslexiaCausesGeneticsProps) {
  return (
    <article className="max-w-full w-full">
      
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
      
      <Tabs defaultValue="genetics" className="w-full">
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
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Genetics
          </TabsTrigger>
          <TabsTrigger 
            value="risk" 
            onClick={() => setCurrentArticle?.('dyslexia-causes-risk')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Risk Factors
          </TabsTrigger>
        </TabsList>

        <TabsContent value="genetics" className="animate-fadeIn">

          {/* Centered Intro Section */}
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Modern Genetic Discoveries
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-causes-geneticsTAB-Intro-gen.webp"
              alt="Child Reading under Genetics tab"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-slate-200"
            />
            <p className="mb-10 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              Recent large-scale genomic studies have completely revolutionized our understanding of dyslexia. It is not caused by a single "broken" gene, but is instead a complex neurodevelopmental condition driven by polygenic traits that interact with early brain network development.<sup className="text-[#10b981] font-bold ml-0.5 text-xs">1</sup>
            </p>
          </div>

          {/* Polygenic Architecture */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            The Polygenic Network
          </h3>
          <p className="mb-8 text-slate-700 text-center max-w-2xl mx-auto">
            Dyslexia's genetics are deeply complex and multifactorial, representing natural variations in human cognitive architecture rather than a single defect:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#ffd166]/20 border-t-4 border-[#0c264d] rounded-xl p-6 shadow-sm flex flex-col flow-root">
              <h4 className="font-bold text-[#0c264d] text-lg flex items-center justify-center gap-3 mb-4 text-center">
                <Dna className="w-7 h-7 text-[#0c264d] shrink-0" />
                <span>Polygenic Architecture</span>
              </h4>
              <p className="text-sm text-slate-700 text-left flex-grow">
                Large-scale genome-wide studies have identified dozens of genetic risk loci. These exist on a continuum with general reading skills rather than stemming from a single faulty gene.<sup className="text-[#10b981] font-bold ml-0.5 text-xs">2</sup>
              </p>
            </div>

            <div className="bg-[#ffd166]/20 border-t-4 border-[#0A9DC4] rounded-xl p-6 shadow-sm flex flex-col flow-root">
              <h4 className="font-bold text-[#0c264d] text-lg flex items-center justify-center gap-3 mb-4 text-center">
                <Network className="w-7 h-7 text-[#0A9DC4] shrink-0" />
                <span>Neurodevelopmental Overlap</span>
              </h4>
              <p className="text-sm text-slate-700 text-left flex-grow">
                Recent genetic mapping shows massive overlap between the markers for dyslexia and ADHD. With nearly 49 shared genetic loci, this explains exactly why the two conditions so frequently co-occur.<sup className="text-[#10b981] font-bold ml-0.5 text-xs">3</sup>
              </p>
            </div>

            <div className="bg-[#ffd166]/20 border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-sm flex flex-col flow-root">
              <h4 className="font-bold text-[#0c264d] text-lg flex items-center justify-center gap-3 mb-4 text-center">
                <BrainCircuit className="w-7 h-7 text-[#2abcd4] shrink-0" />
                <span>Prenatal Development</span>
              </h4>
              <p className="text-sm text-slate-700 text-left flex-grow">
                The implicated gene networks heavily influence early prenatal processes—specifically neuronal migration, axon guidance, and brain lateralization—long before a child ever attempts to read.<sup className="text-[#10b981] font-bold ml-0.5 text-xs">4</sup>
              </p>
            </div>
          </div>

          {/* Key Genetic Markers */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            Key Genetic Markers
          </h3>
          <p className="mb-8 text-slate-700 text-center max-w-2xl mx-auto">
            While we know dyslexia is polygenic, researchers have identified several highly specific genes that govern the actual brain wiring differences seen in dyslexia:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-50 border-t-4 border-[#0c264d] rounded-xl p-6 shadow-sm flex flex-col flow-root">
              <h4 className="font-bold text-[#0c264d] text-lg flex items-center gap-3 mb-3">
                <Microchip className="w-6 h-6 text-[#0c264d] shrink-0" />
                <span>DYX1C1</span>
              </h4>
              <p className="text-sm text-slate-700">Heavily involved in neuronal migration during early brain development, ensuring neurons travel to the correct cortical layers.<sup className="text-[#10b981] font-bold ml-0.5 text-xs">5</sup></p>
            </div>
            
            <div className="bg-slate-50 border-t-4 border-[#ffd166] rounded-xl p-6 shadow-sm flex flex-col flow-root">
              <h4 className="font-bold text-[#0c264d] text-lg flex items-center gap-3 mb-3">
                <Microchip className="w-6 h-6 text-[#d4a017] shrink-0" />
                <span>DCDC2</span>
              </h4>
              <p className="text-sm text-slate-700">Affects neuronal migration and structural white matter; variations here are highly associated with reading and spelling outcomes.<sup className="text-[#10b981] font-bold ml-0.5 text-xs">6</sup></p>
            </div>
            
            <div className="bg-slate-50 border-t-4 border-[#0A9DC4] rounded-xl p-6 shadow-sm flex flex-col flow-root">
              <h4 className="font-bold text-[#0c264d] text-lg flex items-center gap-3 mb-3">
                <Microchip className="w-6 h-6 text-[#0A9DC4] shrink-0" />
                <span>KIAA0319</span>
              </h4>
              <p className="text-sm text-slate-700">Plays a critical role in neuronal migration and directly influences how the brain organizes functional reading centers.<sup className="text-[#10b981] font-bold ml-0.5 text-xs">7</sup></p>
            </div>
            
            <div className="bg-slate-50 border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-sm flex flex-col flow-root">
              <h4 className="font-bold text-[#0c264d] text-lg flex items-center gap-3 mb-3">
                <Microchip className="w-6 h-6 text-[#2abcd4] shrink-0" />
                <span>ROBO1</span>
              </h4>
              <p className="text-sm text-slate-700">Involved in axon guidance, dictating the overarching white matter connectivity pathways across the brain.<sup className="text-[#10b981] font-bold ml-0.5 text-xs">8</sup></p>
            </div>
          </div>

          <div className="bg-[#0c264d] border-l-4 border-[#ffd166] p-5 rounded-r-lg mb-12 shadow-sm flow-root">
            <p className="text-sm text-slate-200 flex items-start gap-3">
              <DnaOff className="w-5 h-5 text-[#ffd166] shrink-0 mt-0.5" />
              <span><strong>Additional Genes:</strong> Many other genes (such as <i>PPP2R3A</i>) have been actively implicated, including those specifically affecting phonological processing, working memory, and rapid naming speeds.<sup className="text-[#10b981] font-bold ml-0.5 text-xs">9</sup></span>
            </p>
          </div>

          {/* Heritability Evidence */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            Heritability Evidence
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200 shadow-sm flex flex-col flow-root">
              <h4 className="font-bold text-[#0c264d] text-lg flex items-center justify-center gap-3 mb-4 text-center">
                <Users className="w-7 h-7 text-[#0A9DC4] shrink-0" />
                <span>Family Aggregation</span>
              </h4>
              <p className="text-sm text-slate-700 text-left flex-grow">
                Dyslexia runs strongly in families. Children who have a parent with dyslexia have a 40-60% chance of having dyslexia themselves.<sup className="text-[#10b981] font-bold ml-0.5 text-xs">10</sup>
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 shadow-sm flex flex-col flow-root">
              <h4 className="font-bold text-[#0c264d] text-lg flex items-center justify-center gap-3 mb-4 text-center">
                <Users2 className="w-7 h-7 text-[#d4a017] shrink-0" />
                <span>Twin Studies</span>
              </h4>
              <p className="text-sm text-slate-700 text-left flex-grow">
                Identical twins show a 68% concordance rate for reading disability, compared to 38% for fraternal twins, proving a strong genetic link.<sup className="text-[#10b981] font-bold ml-0.5 text-xs">11</sup>
              </p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col flow-root">
              <h4 className="font-bold text-[#0c264d] text-lg flex items-center justify-center gap-3 mb-4 text-center">
                <LineChart className="w-7 h-7 text-[#0c264d] shrink-0" />
                <span>Heritability Estimates</span>
              </h4>
              <p className="text-sm text-slate-700 text-left flex-grow">
                Genetic factors account for 40-70% of the individual differences seen in reading ability across the general population.<sup className="text-[#10b981] font-bold ml-0.5 text-xs">12</sup>
              </p>
            </div>
            
            <div className="bg-sky-50 p-6 rounded-xl border border-sky-200 shadow-sm flex flex-col flow-root">
              <h4 className="font-bold text-[#0c264d] text-lg flex items-center justify-center gap-3 mb-4 text-center">
                <NetworkIcon className="w-7 h-7 text-[#2abcd4] shrink-0" />
                <span>Multigenerational Patterns</span>
              </h4>
              <p className="text-sm text-slate-700 text-left flex-grow">
                Reading difficulties, delayed speech, and spelling challenges consistently span multiple generations within families, creating recognizable neurodivergent family trees.
              </p>
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
                <p>1. Gialluisi, A., et al. (2021). Genome-wide association study reveals new insights into the heritability and genetic correlates of developmental dyslexia. <i>Molecular Psychiatry</i>.</p>
                <p>2. Doust, C., et al. (2022). Discovery of 42 genome-wide significant loci associated with dyslexia. <i>Nature Genetics</i>.</p>
                <p>3. Demontis, D., et al. (2019). Discovery of the first genome-wide significant risk loci for attention deficit/hyperactivity disorder. <i>Nature Genetics</i>.</p>
                <p>4. Eicher, J. D., & Gruen, J. R. (2013). Imaging-genetics in dyslexia: connecting risk genetic variants to brain neuroimaging. <i>Molecular Genetics and Metabolism</i>.</p>
                <p>5. Taipale, M., et al. (2003). A candidate gene for developmental dyslexia encodes a nuclear tetratricopeptide repeat domain protein. <i>Proceedings of the National Academy of Sciences</i>.</p>
                <p>6. Meng, H., et al. (2005). DCDC2 is associated with reading disability and modulates neuronal development. <i>Proceedings of the National Academy of Sciences</i>.</p>
                <p>7. Paracchini, S., et al. (2008). Association of the KIAA0319 dyslexia susceptibility gene with reading skills. <i>American Journal of Psychiatry</i>.</p>
                <p>8. Hannula-Jouppi, K., et al. (2005). The axon guidance receptor gene ROBO1 is a candidate gene for developmental dyslexia. <i>PLoS Genetics</i>.</p>
                <p>9. Carrion-Castillo, A., et al. (2013). Molecular genetics of dyslexia: An overview. <i>Dyslexia</i>.</p>
                <p>10. Pennington, B. F., & Lefly, D. L. (2001). Early reading development in children at family risk for dyslexia. <i>Child Development</i>.</p>
                <p>11. DeFries, J. C., & Alarcón, M. (1996). Genetics of specific reading disability. <i>Mental Retardation and Developmental Disabilities Research Reviews</i>.</p>
                <p>12. Scerri, T. S., & Schulte-Körne, G. (2010). Genetics of developmental dyslexia. <i>European Child & Adolescent Psychiatry</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b-2 border-[#2abcd4] pb-2">
                Background Sources
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}