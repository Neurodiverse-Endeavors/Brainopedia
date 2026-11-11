import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface AutismHistoryNeurobiologyProps {
  setCurrentArticle?: (article: string) => void;
}

export function AutismHistoryNeurobiology({ setCurrentArticle }: AutismHistoryNeurobiologyProps) {
  
  const BackButton = () => (
    <button 
      onClick={() => setCurrentArticle?.('autism-overview-history')}
      className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
    >
      <span className="text-xl">←</span>
      Back to Overview
    </button>
  );

  return (
    <article className="max-w-6xl mx-auto animate-in fade-in duration-300 w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b-2 border-[#0c264d] pb-4 mt-4">
        <h1 className="text-3xl font-regular text-[#0c264d]">
          History: Genetics & Neurobiology
        </h1>
        <BackButton />
      </div>

      <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
        
        {/* Intro Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm">
          <p className="text-slate-700 leading-relaxed text-sm md:text-base max-w-4xl mx-auto text-center">
            How did we discover that autism is rooted in biology and DNA? The pioneers of genetics and neurobiology shifted the focus from psychoanalysis to the physical structure of the brain and the complex genetic code that drives neurodevelopment.
          </p>
        </div>

        {/* 1. Proving Heritability */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            1. Proving Genetic Heritability (1970s)
          </h2>
          
          <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Drs. Susan Folstein & Michael Rutter</h3>
            <p className="text-sm text-slate-700 space-y-2 leading-relaxed">
              In 1977, Folstein and Rutter published a groundbreaking twin study that changed the course of autism research forever.<sup>1</sup> By studying identical twins (who share 100% of their DNA) versus fraternal twins, they found a massive concordance rate for autism in identical twins. This was the first definitive, empirical proof that autism had a strong genetic and biological basis, striking a final blow against the "poor parenting" theories of the era.
            </p>
          </div>
        </div>

        {/* 2. Neuroanatomy & Brain Development */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            2. Neuroanatomy & Brain Development
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Drs. Margaret Bauman & Thomas Kemper</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                In the 1980s, neurologist Margaret Bauman and neuropathologist Thomas Kemper conducted some of the very first microscopic examinations of the autistic brain.<sup>2</sup> They discovered distinct structural differences in the limbic system (which processes emotions) and the cerebellum, proving that autistic brains physically develop differently from neurotypical brains on a cellular level.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Dr. Eric Courchesne</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                A pioneering neuroscientist at UC San Diego, Dr. Courchesne discovered the phenomenon of "early brain overgrowth" in autistic toddlers.<sup>3</sup> His research showed that autistic brains often grow unusually fast in the first few years of life, creating an overabundance of cortical neurons, which fundamentally alters how different regions of the brain communicate with one another.
              </p>
            </div>
          </div>
        </div>

        {/* 3. The Genomic Era */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            3. The Modern Genomic Era
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1 bg-slate-50 p-5 rounded-md border-l-4 border-[#0A9DC4] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Drs. Thomas Bourgeron & Wendy Chung</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                In 2003, Dr. Thomas Bourgeron's lab in Paris identified the very first specific genetic mutations linked to autism (in the <i>NLGN3</i> and <i>NLGN4</i> genes), establishing that synaptic function—how neurons talk to each other—is a core component of the spectrum.<sup>4</sup>
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Today, clinical geneticists like Dr. Wendy Chung lead massive cohort studies (like SPARK) that have identified hundreds of rare genetic variations (including <i>de novo</i> or spontaneous mutations) that contribute to autism, proving that the spectrum is highly polygenic.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER & REFERENCES */}
      <div className="flex justify-end mt-12 mb-6">
        <BackButton />
      </div>

      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
      
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
            Cited Studies & Empirical Literature
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Folstein, S., & Rutter, M. (1977). Infantile autism: a genetic study of 21 twin pairs. <i>Journal of Child Psychology and Psychiatry</i>, 18(4), 297-321.</p>
            <p>2. Bauman, M., & Kemper, T. L. (1985). Histoanatomic observations of the brain in early infantile autism. <i>Neurology</i>, 35(6), 866-874.</p>
            <p>3. Courchesne, E., et al. (2001). Unusual brain growth patterns in early life in patients with autistic disorder. <i>Neurology</i>, 57(2), 245-254.</p>
            <p>4. Jamain, S., et al. (2003). Mutations of the X-linked genes encoding neuroligins NLGN3 and NLGN4 are associated with autism. <i>Nature Genetics</i>, 34(1), 27-29.</p>
          </div>
        </div>
      </div>
    </article>
  );
}