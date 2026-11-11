import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface BiomedicalTiersProps {
  setCurrentArticle?: (article: string) => void;
}

export function BiomedicalTiers({ setCurrentArticle }: BiomedicalTiersProps) {
  
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
          Biomedical: Evidence Tiers
        </h1>
        <BackButton />
      </div>

      <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
        
        {/* Intro Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm">
          <p className="text-slate-700 leading-relaxed text-sm md:text-base max-w-4xl mx-auto text-center">
            Because autism is so complex, desperate families are often targeted by predatory clinics selling unproven "cures." It is vital to separate rigorously researched, helpful medical interventions from those that are experimental, and those that are outright dangerous.
          </p>
        </div>

        {/* 1. Helpful & Targeted */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#10b981] font-bold mb-6 text-2xl border-b-2 border-[#10b981] pb-2">
            Tier 1: Helpful & Targeted (Evidence-Backed)
          </h2>
          
          <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#10b981] shadow-sm">
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              These interventions treat specific, verified physical conditions that co-occur heavily with autism. They do not "cure" autism, but they drastically improve quality of life and neurological regulation.
            </p>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li><strong>Melatonin & Sleep Protocols:</strong> Scientifically proven via meta-analysis to assist with the severe circadian rhythm dysregulation common in autism.<sup>1</sup></li>
              <li><strong>Treating Deficiencies:</strong> Targeted supplementation for clinically verified low levels of Vitamin D, Iron, Zinc, or Omega-3s, which are statistically lower in autistic cohorts.<sup>2</sup></li>
              <li><strong>Leucovorin (Folinic Acid):</strong> Specifically utilized for children diagnosed with Cerebral Folate Deficiency via autoantibody testing to improve language and metabolic function.<sup>3</sup></li>
              <li><strong>GI Medication:</strong> Standard medical treatment for severe reflux, constipation, and EoE to eliminate physical pain driving behavioral distress.<sup>4</sup></li>
            </ul>
          </div>
        </div>

        {/* 2. The Gray Area */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#ffd166] font-bold mb-6 text-2xl border-b-2 border-[#ffd166] pb-2">
            Tier 2: The "Gray Area" (Experimental or Mixed Evidence)
          </h2>
          
          <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              These interventions have strong theoretical biological backing and promising clinical trials, but lack the large-scale, FDA-level consensus required to be standard care. Families often pursue these with specialized integrative doctors.
            </p>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li><strong>Microbiota Transfer Therapy (MTT):</strong> Fecal transplants have shown incredible promise in clinical trials at Arizona State University for improving both severe GI symptoms and autistic behaviors long-term.<sup>5</sup> However, it is not yet FDA-approved for autism.</li>
              <li><strong>Methyl-B12 Injections:</strong> Used to bypass broken methylation pathways to boost glutathione and lower oxidative stress. Clinical trials show subsets of children have marked improvements, while others see no effect.<sup>6</sup></li>
              <li><strong>Hyperbaric Oxygen Therapy (HBOT):</strong> Used to reduce neuroinflammation, though mainstream consensus and Cochrane reviews on its efficacy for autism remain heavily mixed or insufficient.<sup>7</sup></li>
            </ul>
          </div>
        </div>

        {/* 3. Dangerous & Disproven */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#be185d] font-bold mb-6 text-2xl border-b-2 border-[#be185d] pb-2">
            Tier 3: Dangerous & Disproven
          </h2>
          
          <div className="bg-[#fff0f0] p-5 rounded-md border-l-4 border-[#be185d] shadow-sm">
            <p className="text-sm text-slate-700 leading-relaxed mb-4 font-bold">
              Federal agencies and medical consensus explicitly warn against these practices, which offer false hope and carry severe physical risks.
            </p>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li><strong>MMS (Miracle Mineral Solution):</strong> An incredibly dangerous protocol involving feeding or enema-administering industrial bleach (chlorine dioxide) to children under the false premise of killing "parasites." The FDA has issued strict warnings against its use in autism.<sup>8</sup></li>
              <li><strong>Heavy Metal Chelation (without clinical poisoning):</strong> Administering powerful chelating drugs to strip the body of supposed heavy metals. Clinical reviews warn it can strip the body of necessary minerals and cause fatal kidney or liver failure.<sup>9</sup></li>
              <li><strong>Lupron Protocol:</strong> Using chemical castration drugs off-label under the debunked theory that testosterone binds with mercury to cause autism. It is widely condemned by pediatric endocrinologists and clinical reviews.<sup>10</sup></li>
            </ul>
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
            <p>1. Rossignol, D. A., & Frye, R. E. (2011). Melatonin in autism spectrum disorders: a systematic review and meta-analysis. <i>Developmental Medicine & Child Neurology</i>, 53(9), 783-792.</p>
            <p>2. Adams, J. B., et al. (2011). Nutritional and metabolic status of children with autism vs. neurotypical children, and the association with autism severity. <i>Nutrition & Metabolism</i>, 8(1), 34.</p>
            <p>3. Frye, R. E., et al. (2013). Cerebral folate receptor autoantibodies in autism spectrum disorder. <i>Molecular Psychiatry</i>, 18(3), 369-381.</p>
            <p>4. Buie, T., et al. (2010). Evaluation, diagnosis, and treatment of gastrointestinal disorders in individuals with ASDs: a consensus report. <i>Pediatrics</i>, 125 Suppl 1, S1-18.</p>
            <p>5. Kang, D. W., et al. (2019). Long-term benefit of Microbiota Transfer Therapy on autism symptoms and gut microbiota. <i>Scientific Reports</i>, 9(1), 5821.</p>
            <p>6. Hendren, R. L., et al. (2016). Randomized, Placebo-Controlled Trial of Methyl B12 for Children with Autism. <i>Journal of Child and Adolescent Psychopharmacology</i>, 26(9), 774-783.</p>
            <p>7. Xiong, T., et al. (2016). Hyperbaric oxygen therapy for people with autism spectrum disorder (ASD). <i>Cochrane Database of Systematic Reviews</i>, 10.</p>
            <p>8. U.S. Food and Drug Administration (FDA). (2019). <i>Be Aware of Potentially Dangerous Products and Therapies that Claim to Treat Autism</i>. Consumer Updates.</p>
            <p>9. James, S., et al. (2015). Chelation for autism spectrum disorder (ASD). <i>Cochrane Database of Systematic Reviews</i>, (5).</p>
            <p>10. Levy, S. E., & Hyman, S. L. (2015). Complementary and Alternative Medicine Treatments for Children with Autism Spectrum Disorders. <i>Child and Adolescent Psychiatric Clinics of North America</i>, 24(1), 117-143.</p>
          </div>
        </div>
      </div>
    </article>
  );
}