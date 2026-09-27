import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

interface CurrentResearchProps {
  setCurrentArticle?: (article: string) => void;
}

export function CurrentResearch({ setCurrentArticle }: CurrentResearchProps) {
  return (
    <article className="max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      
      {/* --- Main Content Wrapper --- */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg text-[#0c264d]">
        <h2 className="font-bold mb-6 text-2xl text-center clear-both text-[#0c264d]">Current Understanding & Future Research</h2>
        
        <ImageWithFallback
          src="/images/autism/autism-causes-CurrentRestab-female-researcher.webp"
          alt="Female researching"
          className="w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm"
        />      
        
        <p className="mb-10 leading-relaxed text-center max-w-3xl mx-auto">
          Our understanding of autism's causes continues to evolve as technology allows for deeper genetic sequencing and more nuanced neurological studies.<sup>1</sup>
        </p>

        {/* Knowledge Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* What We Know */}
          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-500">
            <h3 className="font-bold mb-4 text-lg flex items-center gap-2">
              <span className="text-green-500">✓</span> What We Know
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><span>•</span> Autism is highly heritable but genetically complex.</li>
              <li className="flex gap-2"><span>•</span> Multiple genes and environmental factors contribute.</li>
              <li className="flex gap-2"><span>•</span> Brain development is affected during prenatal periods.</li>
              <li className="flex gap-2"><span>•</span> It is a natural neurological variation, not a disease.</li>
            </ul>
          </div>

          {/* What We're Still Learning */}
          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#2abcd4]">
            <h3 className="font-bold mb-4 text-lg flex items-center gap-2">
              <span className="text-[#2abcd4]">?</span> What We're Still Learning
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><span>•</span> How specific genetic variations lead to specific traits.</li>
              <li className="flex gap-2"><span>•</span> Which environmental factors matter most and for whom.</li>
              <li className="flex gap-2"><span>•</span> Why autism presentation varies so widely.</li>
              <li className="flex gap-2"><span>•</span> Biomarkers that could enable earlier identification.</li>
            </ul>
          </div>
        </div>

        {/* Research Priorities Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#ffd166] mb-10">
          <h3 className="font-bold mb-6 text-xl text-center">Current Research Priorities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-[#f0f9ff] rounded-lg">
              <h4 className="font-bold text-sm mb-2 text-[#0c264d]">Biological Mechanisms</h4>
              <p className="text-xs">Translating genetic risk into understanding how autistic traits develop and identifying biological subtypes.</p>
            </div>
            <div className="p-4 bg-[#f0f9ff] rounded-lg">
              <h4 className="font-bold text-sm mb-2 text-[#0c264d]">Quality of Life</h4>
              <p className="text-xs">Developing interventions and supports that improve day-to-day life and understanding co-occurring conditions.</p>
            </div>
            <div className="p-4 bg-[#f0f9ff] rounded-lg md:col-span-2 text-center">
              <h4 className="font-bold text-base mb-3 text-[#0c264d]">Neurodiversity-Led Research</h4>
              <ImageWithFallback 
                src="/images/autism/autism-causes-CurrentRestab-neurodiversitysymbol.webp"
                alt="Neurodiversity Symbol"
                className="w-32 h-auto block mx-auto mb-3"
              />
              <p className="text-sm max-w-lg mx-auto">Centering autistic voices in research priorities to ensure methods align with the needs of the community.</p>
            </div>
          </div>
        </div>

        {/* Important Perspective Box */}
        <div className="bg-[#0c264d] text-white p-8 rounded-xl shadow-lg mb-10">
          <h3 className="font-bold mb-4 text-xl flex items-center gap-2">
            Important Perspective
          </h3>
          <p className="text-sm leading-relaxed opacity-90">
            While understanding autism's causes is scientifically significant, many in the autistic community emphasize that autism is not a disease requiring a "cure" but a neurological difference requiring <strong>acceptance, accommodation, and support.</strong> 
          </p>
        </div>
      </div>
      {/* --- End of Main Content Wrapper --- */}
      
      {/* --- BOTTOM BACK BUTTON --- */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-normal text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan whitespace-nowrap shrink-0"
        >
          <span className="text-lg">←</span>All About Autism
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Lord, C., et al. (2018). Autism spectrum disorder. <i>The Lancet</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
            <li>Chapman, R., & Carel, H. (2022). Neurodiversity, epistemic injustice, and the good human life. <i>Journal of Social Philosophy</i>.</li>
            <li>Kapp, S. K. (Ed.). (2020). <i>Autistic Community and the Neurodiversity Movement: Stories from the Frontline</i>. Palgrave Macmillan.</li>
            <li>Lyall, K., et al. (2017). The changing epidemiology of autism spectrum disorders. <i>Annual Review of Public Health</i>.</li>
            <li>Pellicano, E., & den Houting, J. (2022). Annual Research Review: Shifting from 'normal science' to neurodiversity in autism science. <i>Journal of Child Psychology and Psychiatry</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
