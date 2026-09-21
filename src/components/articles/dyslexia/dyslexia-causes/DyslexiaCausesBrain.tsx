import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';
import { Eye, Activity, Lightbulb, Puzzle, ChevronRight, MessageSquare, Brain, Ear } from 'lucide-react';

interface DyslexiaCausesBrainProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaCausesBrain({ setCurrentArticle }: DyslexiaCausesBrainProps) {
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
      
      <Tabs defaultValue="brain" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger value="brain" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
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
            onClick={() => setCurrentArticle?.('dyslexia-causes-risk')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Risk Factors
          </TabsTrigger>
        </TabsList>

        <TabsContent value="brain" className="animate-fadeIn">
          
          {/* Centered Intro Section */}
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Brain Structure & Function
            </h2>
            <p className="mb-10 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              Brain imaging studies have revealed consistent differences in structural networks and functional volume, particularly in regions involved in language processing. However, the dyslexic brain is not "broken"—it simply prioritizes different neural pathways, leading to remarkable compensatory strengths.<sup className="text-[10px]">1</sup>
            </p>
          </div>

          {/* Functional Differences */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            Atypical Connectivity & Strengths
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200 shadow-sm flow-root">
              <div className="flex flex-col h-full items-center text-center">
                <h4 className="font-bold text-[#0c264d] text-lg flex items-center justify-center gap-3 mb-4">
                  <Activity className="w-7 h-7 text-[#0A9DC4] shrink-0" />
                  <span>Phonological Hypoactivation</span>
                </h4>
                <p className="text-sm text-slate-700 text-left flex-grow">
                  Advanced neuroimaging reveals reduced white matter integrity in the left hemisphere's temporo-parietal and occipito-temporal regions, making decoding and sounding out words significantly more taxing.<sup className="text-[10px]">2</sup>
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 shadow-sm flow-root">
              <div className="flex flex-col h-full items-center text-center">
                <h4 className="font-bold text-[#0c264d] text-lg flex items-center justify-center gap-3 mb-4">
                  <Lightbulb className="w-7 h-7 text-[#d4a017] shrink-0" />
                  <span>Compensatory Strengths</span>
                </h4>
                <p className="text-sm text-slate-700 text-left flex-grow">
                  While phonological areas show hypoactivation, regions linked to visuospatial reasoning, pattern recognition, and big-picture thinking demonstrate vastly heightened efficiency and hyper-connectivity.<sup className="text-[10px]">1</sup>
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm flow-root">
              <div className="flex flex-col h-full items-center text-center">
                <h4 className="font-bold text-[#0c264d] text-lg flex items-center justify-center gap-3 mb-4">
                  <Puzzle className="w-7 h-7 text-[#0c264d] shrink-0" />
                  <span>Cerebellar & Sensory</span>
                </h4>
                <p className="text-sm text-slate-700 text-left flex-grow">
                  Emerging findings point to subtle cerebellar differences affecting working memory and automatic language processing, alongside atypical auditory neural synchronization.<sup className="text-[10px]">3</sup>
                </p>
              </div>
            </div>
            
            <div className="bg-sky-50 p-6 rounded-xl border border-sky-200 shadow-sm flow-root">
              <div className="flex flex-col h-full items-center text-center">
                <h4 className="font-bold text-[#0c264d] text-lg flex items-center justify-center gap-3 mb-4">
                  <Eye className="w-7 h-7 text-[#2abcd4] shrink-0" />
                  <span>Visual Word Form Area</span>
                </h4>
                <p className="text-sm text-slate-700 text-left flex-grow">
                  Reduced activation in the occipito-temporal region forces the right hemisphere and frontal lobe to work overtime to recognize written words, making reading slower and highly exhausting.
                </p>
              </div>
            </div>
          </div>
          
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-causes-BrainNeuroTAB-Functional Diff.webp"
            alt="Functional differences in the dyslexic brain"
            className="block mx-auto w-full max-w-3xl mb-8 rounded-lg shadow-sm border border-slate-200"
          />

          {/* Structural Differences */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            Structural Network Variances
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border-l-4 border-[#0c264d] p-5 rounded-r-lg shadow-sm">
              <h4 className="font-bold text-[#0c264d] text-lg mb-1">Gray Matter Volume</h4>
              <p className="text-sm text-slate-700">Specific variations in cortical thickness and volume in reading-related functional hubs.</p>
            </div>
            <div className="bg-white border-l-4 border-[#ffd166] p-5 rounded-r-lg shadow-sm">
              <h4 className="font-bold text-[#0c264d] text-lg mb-1">White Matter Integrity</h4>
              <p className="text-sm text-slate-700">Reduced density in the physical pathways connecting the brain's language and reading centers.</p>
            </div>
          </div>

          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-causes-BrainNeuroTAB-Structural.webp"
            alt="Structural differences in the dyslexic brain"
            className="block mx-auto w-full max-w-3xl mb-8 rounded-lg shadow-sm border border-slate-200"
          />

          {/* Neural Migration */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            Neural Migration & Development
          </h3>
          
          <p className="mb-6 text-slate-700 text-center">These structural differences begin forming in utero during early brain development:</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <div className="bg-slate-50 p-5 rounded-lg border-t-4 border-[#0A9DC4] shadow-sm flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700 font-medium">Atypical neuronal migration pathways during fetal development.<sup className="text-[10px]">4</sup></span>
            </div>
            <div className="bg-slate-50 p-5 rounded-lg border-t-4 border-[#0A9DC4] shadow-sm flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700 font-medium">Ectopias (clusters of neurons functioning in non-standard locations).</span>
            </div>
            <div className="bg-slate-50 p-5 rounded-lg border-t-4 border-[#0A9DC4] shadow-sm flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700 font-medium">Unique differences in cortical organization and surface layering.</span>
            </div>
            <div className="bg-slate-50 p-5 rounded-lg border-t-4 border-[#0A9DC4] shadow-sm flex items-start gap-3">
              <ChevronRight className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700 font-medium">Altered physical development of reading-specialized brain circuits.</span>
            </div>
          </div>

          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-causes-BrainNeuroTAB-Neural-Mig.webp"
            alt="Neural migration and development differences in dyslexia"
            className="block mx-auto w-full max-w-3xl mb-8 rounded-lg shadow-sm border border-slate-200"
          />

          {/* Phonological Deficit Hypothesis */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            The Phonological Deficit Hypothesis
          </h3>
          <p className="mb-8 text-slate-700 text-center max-w-2xl mx-auto">
            The most widely accepted explanation for dyslexia is the phonological deficit theory, which links these structural changes to specific cognitive struggles:<sup className="text-[10px]">5</sup>
          </p>

          <div className="flex flex-col gap-6 mb-12">
            <div className="bg-[#ffd166]/20 rounded-xl shadow-sm border border-[#ffd166]/30 flex flex-col md:flex-row overflow-hidden">
              <div className="bg-[#0c264d] p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                <MessageSquare className="w-10 h-10 text-[#ffd166] mb-3" />
                <h4 className="font-bold text-white text-xl">Core Mechanism</h4>
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" />
                    <span><strong className="text-[#0c264d]">Phonological Representations:</strong> Difficulty creating, storing, or accessing mental representations of speech sounds.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" />
                    <span><strong className="text-[#0c264d]">Phoneme Awareness:</strong> Challenges identifying and manipulating individual sounds in words.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" />
                    <span><strong className="text-[#0c264d]">Phonological Memory:</strong> Reduced capacity to hold sound-based information in working memory.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Theories */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            Additional Theories
          </h3>
          <p className="mb-8 text-slate-700 text-center max-w-2xl mx-auto">
            While phonological deficits are central, other well-established theories propose additional mechanisms that compound reading struggles:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Double-Deficit */}
            <div className="bg-[#ffd166]/20 border-t-4 border-[#0c264d] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-lg flex items-center justify-center gap-3 mb-4 text-center">
                <Brain className="w-7 h-7 text-[#0c264d] shrink-0" />
                <span>Double-Deficit</span>
              </h4>
              <ul className="space-y-3 text-slate-700 text-sm flex-grow">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" /> 
                  <span>Proposes two independent deficits: phonological awareness AND rapid automatized naming (RAN).<sup className="text-[10px]">6</sup></span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" /> 
                  <span>Individuals with both deficits have substantially more severe reading difficulties.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" /> 
                  <span>Perfectly explains why some individuals respond very differently to traditional interventions.</span>
                </li>
              </ul>
            </div>

            {/* Magnocellular */}
            <div className="bg-[#ffd166]/20 border-t-4 border-[#ffd166] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-lg flex items-center justify-center gap-3 mb-4 text-center">
                <Eye className="w-7 h-7 text-[#d4a017] shrink-0" />
                <span>Magnocellular</span>
              </h4>
              <ul className="space-y-3 text-slate-700 text-sm flex-grow">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-[#d4a017] shrink-0 mt-0.5" /> 
                  <span>Dysfunction in visual magnocellular pathways affects visual processing specifically during reading.<sup className="text-[10px]">7</sup></span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-[#d4a017] shrink-0 mt-0.5" /> 
                  <span>Results in a reduced capacity to process multiple letters simultaneously across the page.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-[#d4a017] shrink-0 mt-0.5" /> 
                  <span>Explains the visual-distortion symptoms that impact some (but not all) dyslexic readers.</span>
                </li>
              </ul>
            </div>

            {/* Cerebellar */}
            <div className="bg-[#ffd166]/20 border-t-4 border-[#0A9DC4] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-lg flex items-center justify-center gap-3 mb-4 text-center">
                <Ear className="w-7 h-7 text-[#0A9DC4] shrink-0" />
                <span>Cerebellar Theory</span>
              </h4>
              <ul className="space-y-3 text-slate-700 text-sm flex-grow">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" /> 
                  <span>Proposes cerebellar dysfunction impairs the crucial process of skill automatization.<sup className="text-[10px]">8</sup></span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" /> 
                  <span>Reading requires the seamless, unconscious automatization of many distinct cognitive sub-skills.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" /> 
                  <span>Accounts for the frequent crossover of dyslexia with dysgraphia and subtle motor coordination differences.</span>
                </li>
              </ul>
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
                <p>1. Eide, B. L., & Eide, F. F. (2011). <i>The Dyslexic Advantage: Unlocking the Hidden Potential of the Dyslexic Brain</i>. Penguin.</p>
                <p>2. Richlan, F., et al. (2011). Meta-analyzing brain dysfunctions in dyslexic children and adults. <i>NeuroImage</i>.</p>
                <p>3. Goswami, U. (2011). A temporal sampling framework for developmental dyslexia. <i>Trends in Cognitive Sciences</i>.</p>
                <p>4. Galaburda, A. M., et al. (1985). Developmental dyslexia: Four consecutive patients with cortical anomalies. <i>Annals of Neurology</i>.</p>
                <p>5. Ramus, F. (2003). Developmental dyslexia: Specific phonological deficit or general sensorimotor dysfunction? <i>Current Opinion in Neurobiology</i>.</p>
                <p>6. Wolf, M., & Bowers, P. G. (1999). The double-deficit hypothesis for the developmental dyslexias. <i>Journal of Educational Psychology</i>.</p>
                <p>7. Stein, J., & Walsh, V. (1997). To see but not to read: the magnocellular theory of dyslexia. <i>Trends in Neurosciences</i>.</p>
                <p>8. Nicolson, R. I., et al. (2001). Developmental dyslexia: The cerebellar deficit hypothesis. <i>Trends in Neurosciences</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b-2 border-[#2abcd4] pb-2">
                Background Sources
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>Hancock, R., et al. (2017). Atypical cerebellar structure and function in developmental dyslexia. <i>NeuroImage: Clinical</i>.</p>
                <p>Norton, E. S., et al. (2015). Neurobiology of dyslexia. <i>Current Opinion in Neurobiology</i>.</p>
                <p>Vandermosten, M., et al. (2012). A qualitative and quantitative review of diffusion tensor imaging studies in reading and dyslexia. <i>Neuroscience & Biobehavioral Reviews</i>.</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}