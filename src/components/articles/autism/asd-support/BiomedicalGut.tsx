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
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Biomedical: The Gut-Brain Axis & Diets
        </h1>
        <BackButton />
      </div>

      <div className="space-y-10 animate-in slide-in-from-bottom-4 duration-500">
        
        {/* Intro Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#2abcd4]">
          <p className="text-slate-700 leading-relaxed text-sm md:text-base max-w-4xl mx-auto text-center font-medium">
            The gastrointestinal system and the brain are inextricably linked via the vagus nerve and the microbiome—a biological superhighway known as the Gut-Brain Axis. For many autistic individuals, treating physical GI distress and optimizing diet is not about "treating autism," but rather resolving systemic neuroinflammation to achieve profound improvements in comfort, emotional regulation, and cognitive focus.
          </p>
        </div>

        {/* 1. Microbiome & Permeability */}
        <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            1. The Microbiome & Intestinal Permeability
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Dysbiosis & Neurotoxic Metabolites</h3>
              <p className="text-sm text-slate-700 space-y-2 leading-relaxed mb-3">
                Research demonstrates autistic individuals frequently harbor highly distinct, less diverse gut microbiomes, often featuring overgrowths of yeast (<i>Candida</i>) or specific pathogenic bacteria (like <i>Clostridia</i>).<sup>1</sup> 
              </p>
              <p className="text-sm text-slate-700 space-y-2 leading-relaxed">
                Breakthrough research by Dr. Derrick MacFabe has shown that certain dysbiotic bacteria produce excessive amounts of Propionic Acid (PPA). PPA is a short-chain fatty acid that readily crosses the blood-brain barrier, altering neurotransmitter pathways and triggering neuroinflammation that closely mimics autism-like behaviors.<sup>2</sup> Botanical antimicrobials and targeted probiotics are often utilized to clear these toxic overgrowths.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">"Leaky Gut" & Systemic Inflammation</h3>
              <p className="text-sm text-slate-700 space-y-2 leading-relaxed mb-3">
                Dr. Alessio Fasano’s foundational research identified <i>zonulin</i>, a protein that regulates the tight junctions of the intestinal wall. High levels of zonulin cause these junctions to break apart, creating intestinal permeability ("leaky gut").<sup>3</sup>
              </p>
              <p className="text-sm text-slate-700 space-y-2 leading-relaxed">
                When undigested food proteins (like gluten or casein) and bacterial toxins slip through this porous barrier into the bloodstream, the immune system launches an attack. Groundbreaking studies by Dr. Elaine Hsiao have shown that this resulting systemic inflammation directly impacts the brain, and that healing this permeability can actively reverse behavioral dysregulation.<sup>4</sup>
              </p>
            </div>
          </div>
        </div>

        {/* 2. Hidden Pain */}
        <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            2. Hidden Pain & The Vagal Superhighway
          </h2>
          
          <div className="bg-[#ffd166]/10 p-6 rounded-md border-l-4 border-[#ffd166] shadow-sm mb-6">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The "Fight or Flight" Hijack</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              The vagus nerve is the biological superhighway connecting the enteric nervous system (the gut) to the central nervous system (the brain). According to Dr. Emeran Mayer's research on the gut-brain axis, nearly 80% of vagal nerve fibers send information <i>from</i> the gut <i>up</i> to the brain.<sup>5</sup>
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Normally, the vagus nerve controls the parasympathetic "rest and digest" calming system (as mapped out in Dr. Stephen Porges' Polyvagal Theory).<sup>6</sup> However, chronic visceral pain from undiagnosed GI conditions sends overwhelming, constant distress signals up the afferent vagal fibers. The brain interprets this severe gut pain as a literal threat to survival, completely hijacking the nervous system and locking the autistic child into a sympathetic "fight or flight" panic state.
            </p>
            <p className="text-sm text-[#be185d] font-bold leading-relaxed">
              When an autistic individual with high support needs exhibits sudden self-injury, aggression, or intense meltdowns, it is frequently dismissed as "autistic behavior." In reality, clinical gastroenterologists note these behaviors are often a direct biological alarm bell signaling severe, untreated physical pain.<sup>7</sup>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-[#0c264d] mb-1">Eosinophilic Esophagitis (EoE)</h4>
              <p className="text-xs text-slate-700 leading-relaxed">A painful allergic inflammatory condition of the esophagus, frequently discovered during GI endoscopies ("scopes"). Swallowing can feel like broken glass.</p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-[#0c264d] mb-1">Severe Acid Reflux & Impaction</h4>
              <p className="text-xs text-slate-700 leading-relaxed">Chronic impaction (severe constipation) stretches the bowel wall, sending continuous mechanical distress signals up the vagus nerve to the brain.</p>
            </div>
          </div>
        </div>

        {/* 3. Specialized Diets */}
        <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            3. Specialized Dietary Protocols
          </h2>
          
          <p className="text-sm text-slate-700 leading-relaxed mb-6">
            Dietary interventions are not attempts to "cure" the autistic neurotype; they are targeted medical interventions used to reduce the immune reactivity and systemic inflammation caused by intestinal permeability.
          </p>

          <div className="space-y-4">
            <div className="bg-slate-50 p-5 rounded-md border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 border border-[#bae6fd] font-bold text-lg">1</div>
              <div>
                <h3 className="font-bold text-[#0c264d] text-lg mb-1">Gluten-Free / Casein-Free (GFCF)</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Removes the proteins found in wheat (gluten) and dairy (casein). This is based on pioneering biochemical research demonstrating that, in a "leaky gut" environment, these specific proteins fail to break down fully. Instead, they form peptide chains (gluteomorphins and casomorphins) that cross the blood-brain barrier and bind to opiate receptors in the brain, causing severe "brain fog," pain insensitivity, and dysregulation.<sup>8</sup>
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-5 rounded-md border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-[#ffd166]/20 text-[#0c264d] flex items-center justify-center shrink-0 border border-[#ffd166] border-opacity-50 font-bold text-lg">2</div>
              <div>
                <h3 className="font-bold text-[#0c264d] text-lg mb-1">GAPS & Specific Carbohydrate Diet (SCD)</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Highly restrictive diets that completely remove complex carbohydrates and disaccharides (complex sugars). The clinical goal is to physically "starve out" the pathogenic yeast and bacteria that feed on sugar, while simultaneously healing the damaged mucosal lining of the gut wall using easily digestible, nutrient-dense foods like bone broths and fermented foods.<sup>9</sup>
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-md border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-[#f0fdf4] text-[#10b981] flex items-center justify-center shrink-0 border border-[#bbf7d0] font-bold text-lg">3</div>
              <div>
                <h3 className="font-bold text-[#0c264d] text-lg mb-1">Elimination Diets (Low-Oxalate / Additive-Free)</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Focuses on removing artificial dyes, synthetic preservatives, natural salicylates, or oxalates. Research indicates that subsets of neurodivergent individuals have impaired detoxification pathways, causing these chemical compounds to build up and trigger severe neurological hyperactivity, mast cell activation, or joint pain.<sup>10</sup>
                </p>
              </div>
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
            Cited Studies & STATISTICS
          </h4>
          <div className="text-xs space-y-4 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Adams, J. B., et al. (2011). "Gastrointestinal flora and gastrointestinal status in children with autism--comparisons to typical children and correlation with autism severity." <i>BMC Gastroenterology</i>.</p>
            <p>2. MacFabe, D. F. (2012). "Short-chain fatty acid fermentation products of the gut microbiome: implications in autism spectrum disorders." <i>Microbial Ecology in Health and Disease</i>.</p>
            <p>3. Fasano, A. (2012). "Zonulin, regulation of tight junctions, and autoimmune diseases." <i>Annals of the New York Academy of Sciences</i>.</p>
            <p>4. Hsiao, E. Y., et al. (2013). "Microbiota modulate behavioral and physiological abnormalities associated with neurodevelopmental disorders." <i>Cell</i>.</p>
            <p>5. Mayer, E. A. (2011). "Gut feelings: the emerging biology of gut-brain communication." <i>Nature Reviews Neuroscience</i>.</p>
            <p>6. Porges, S. W. (2011). <i>The Polyvagal Theory: Neurophysiological Foundations of Emotions, Attachment, Communication, and Self-regulation</i>. W. W. Norton & Company.</p>
            <p>7. Buie, T., et al. (2010). "Evaluation, diagnosis, and treatment of gastrointestinal disorders in individuals with ASDs: a consensus report." <i>Pediatrics</i>.</p>
            <p>8. Reichelt, K. L., et al. (1990). "Biologically active peptide-containing fractions in schizophrenia and childhood autism." <i>Advances in Biochemical Psychopharmacology</i>.</p>
            <p>9. Campbell-McBride, N. (2004). <i>Gut and Psychology Syndrome: Natural Treatment for Autism, ADD/ADHD, Dyslexia, Dyspraxia, Depression, Schizophrenia</i>. Medinform Publishing.</p>
            <p>10. Nigg, J. T., et al. (2012). "Meta-analysis of attention-deficit/hyperactivity disorder or attention-deficit/hyperactivity disorder symptoms, restriction diet, and synthetic food color additives." <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>. / Konstantynowicz, J., et al. (2012). "A potential pathogenic role of oxalate in autism." <i>European Journal of Paediatric Neurology</i>.</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Navarro, F., et al. (2016). "Research review: the role of diets in the treatment of autism spectrum disorder." <i>Child and Adolescent Psychiatric Clinics of North America</i>.</li>
            <li>Herbert, M., & Weintraub, K. (2012). <i>The Autism Revolution: Whole-Body Strategies for Making Life All It Can Be</i>. Ballantine Books.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}