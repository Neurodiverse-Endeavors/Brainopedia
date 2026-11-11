import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface BiomedicalGutProps {
  setCurrentArticle?: (article: string) => void;
}

export function BiomedicalGut({ setCurrentArticle }: BiomedicalGutProps) {
  
  const BackButton = () => (
    <button 
      onClick={() => setCurrentArticle?.('autism-support-biomedical')}
      className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
    >
      <span className="text-xl">←</span>
      Back to Support
    </button>
  );

  return (
    <article className="max-w-6xl mx-auto animate-in fade-in duration-300 w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b-2 border-[#0c264d] pb-4 mt-4">
        <h1 className="text-3xl font-regular text-[#0c264d]">
          Biomedical: The Gut-Brain Axis & Diets
        </h1>
        <BackButton />
      </div>

      <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
        
        {/* Intro Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm">
          <p className="text-slate-700 leading-relaxed text-sm md:text-base max-w-4xl mx-auto text-center">
            The gastrointestinal system and the brain are deeply connected via the vagus nerve and the microbiome. For many autistic individuals, treating physical GI distress and optimizing diet can lead to profound improvements in comfort, regulation, and cognitive focus.
          </p>
        </div>

        {/* 1. Microbiome & Permeability */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            1. The Microbiome & Intestinal Permeability
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Dysbiosis & Yeast</h3>
              <p className="text-sm text-slate-700 space-y-2 leading-relaxed">
                Research shows autistic individuals often have distinct gut microbiomes, frequently lacking diverse beneficial bacteria while harboring overgrowths of yeast (Candida) or specific bacteria (like Clostridia).<sup>1</sup> Botanical antimicrobials like Olive Leaf Extract or Oil of Oregano, combined with high-quality probiotics, are frequently used to attempt to rebalance this flora.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-lg">"Leaky Gut" (Zonulin)</h3>
              <p className="text-sm text-slate-700 space-y-2 leading-relaxed">
                Dr. Alessio Fasano’s research revealed that high levels of <i>zonulin</i> can cause the intestinal wall to become overly permeable ("leaky gut").<sup>2</sup> When undigested proteins (like gluten) slip into the bloodstream, the immune system attacks them, creating systemic inflammation that can cross the blood-brain barrier and cause neuroinflammation.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Hidden Pain */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            2. Hidden Pain & The Vagus Nerve
          </h2>
          
          <div className="bg-[#ffd166]/20 p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              When an autistic child with high support needs exhibits sudden self-injury, aggression, or intense dysregulation, it is often dismissed as "autistic behavior." However, clinical GI doctors (like Dr. Timothy Buie) have proven that these behaviors are frequently the only way a child can communicate severe physical pain.<sup>3</sup>
            </p>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li><strong>Eosinophilic Esophagitis (EoE):</strong> A painful allergic inflammatory condition of the esophagus, frequently discovered during GI endoscopies ("scopes").</li>
              <li><strong>Severe Acid Reflux & Constipation:</strong> Chronic conditions that constantly trigger the vagus nerve, sending a continuous "fight or flight" panic signal directly to the brain.</li>
            </ul>
          </div>
        </div>

        {/* 3. Specialized Diets */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            3. Specialized Dietary Protocols
          </h2>
          
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded border border-gray-200">
              <h3 className="font-bold text-[#0c264d] text-base mb-1">Gluten-Free / Casein-Free (GFCF)</h3>
              <p className="text-sm text-slate-700">Removes the proteins found in wheat and dairy. Based on the theory that leaky gut allows these proteins to convert into gluteomorphins and casomorphins (opiate-like compounds) in the brain. Often the first diet families attempt.</p>
            </div>
            
            <div className="bg-slate-50 p-4 rounded border border-gray-200">
              <h3 className="font-bold text-[#0c264d] text-base mb-1">GAPS & Specific Carbohydrate Diet (SCD)</h3>
              <p className="text-sm text-slate-700">Highly restrictive diets that remove complex carbohydrates and sugars to "starve out" bad bacteria and heal the mucosal lining of the gut using bone broths and fermented foods.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded border border-gray-200">
              <h3 className="font-bold text-[#0c264d] text-base mb-1">Elimination Diets (Feingold / Low-Oxalate)</h3>
              <p className="text-sm text-slate-700">Focuses on removing artificial dyes, preservatives, salicylates, or oxalates that can trigger neurological hyperactivity or systemic inflammation in sensitive individuals.</p>
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
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Adams, J. B., et al. (2011). Gastrointestinal flora and gastrointestinal status in children with autism--comparisons to typical children and correlation with autism severity. <i>BMC Gastroenterology</i>, 11, 22.</p>
            <p>2. Fasano, A. (2012). Zonulin, regulation of tight junctions, and autoimmune diseases. <i>Annals of the New York Academy of Sciences</i>, 1258(1), 25-33.</p>
            <p>3. Buie, T., et al. (2010). Evaluation, diagnosis, and treatment of gastrointestinal disorders in individuals with ASDs: a consensus report. <i>Pediatrics</i>, 125 Suppl 1, S1-18.</p>
          </div>
        </div>
        
        {/* ADDED BACKGROUND SOURCES SECTION */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Navarro, F., et al. (2016). Research review: the role of diets in the treatment of autism spectrum disorder. <i>Child and Adolescent Psychiatric Clinics of North America</i>, 25(1), 117-143.</li>
            <li>Herbert, M., & Weintraub, K. (2012). <i>The Autism Revolution: Whole-Body Strategies for Making Life All It Can Be</i>. Ballantine Books.</li>
            <li>MacFabe, D. F. (2012). Short-chain fatty acid fermentation products of the gut microbiome: implications in autism spectrum disorders. <i>Microbial Ecology in Health and Disease</i>, 23(1).</li>
          </ul>
        </div>
      </div>
    </article>
  );
}