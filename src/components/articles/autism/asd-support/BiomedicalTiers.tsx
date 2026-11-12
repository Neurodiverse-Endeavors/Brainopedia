import { ImageWithFallback } from '../../../figma/ImageWithFallback';
import { Moon, Activity, Dna, Stethoscope, Microscope, Leaf, Syringe, Wind, AlertTriangle, ShieldAlert, XCircle, Ban } from 'lucide-react';

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
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Biomedical: Evidence Tiers
        </h1>
        <BackButton />
      </div>

      <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500">
        
        {/* Intro Section: The Philosophy */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#2abcd4]">
          <h2 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-[#2abcd4] pb-2">Healing the Body, Not "Curing" the Neurotype</h2>
          <p className="text-slate-700 leading-relaxed text-sm mb-4">
            It is critical to state clearly: none of the interventions below "cure" autism. Autism is a neurodevelopmental difference. However, autistic individuals suffer from notoriously high rates of co-occurring medical issues—like severe gastrointestinal disease, immune dysregulation, and metabolic blockages.
          </p>
          <p className="text-slate-700 leading-relaxed text-sm font-bold text-[#0c264d]">
            When a child is in chronic physical pain, their nervous system dysregulates. The biomedical interventions listed here under Tier 1 are specific, studied medical treatments designed to heal underlying physiology. When physical pain and inflammation are resolved, regulation, communication, and overall quality of life drastically improve. As stated, Tier 2 have more limited evidence. And Tier 3 interventions are dangerous or disproven. Please read carefully and consult a license physician before pursuing any biomedical intervention.
          </p>
        </div>

        {/* TIER 1: Helpful & Targeted */}
        <div>
          <h2 className="text-[#10b981] font-bold mb-4 text-2xl border-b-2 border-[#10b981] pb-2">
            Tier 1: Standard & Targeted (Evidence-Backed)
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-6">
            These interventions treat specific, verified physical conditions. They boast robust clinical consensus and drastically improve daily regulation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Melatonin */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#f0fdf4] text-[#10b981] flex items-center justify-center shrink-0 shadow-sm border border-[#bbf7d0] mb-4">
                <Moon className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Melatonin & Sleep Protocols</h4>
              <p className="text-sm text-slate-700 leading-relaxed">Meta-analyses show this definitively improves sleep onset and duration for the severe circadian rhythm dysregulation common in autism.<sup>1</sup></p>
            </div>

            {/* Deficiencies */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#f0fdf4] text-[#10b981] flex items-center justify-center shrink-0 shadow-sm border border-[#bbf7d0] mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Targeted Nutritional Repletion</h4>
              <p className="text-sm text-slate-700 leading-relaxed">Supplementing verified low levels of Vitamin D, Iron, Zinc, and Omega-3s significantly improves cellular function and reduces baseline inflammation.<sup>2</sup></p>
            </div>

            {/* Folinic Acid */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#f0fdf4] text-[#10b981] flex items-center justify-center shrink-0 shadow-sm border border-[#bbf7d0] mb-4">
                <Dna className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Leucovorin (Folinic Acid)</h4>
              <p className="text-sm text-slate-700 leading-relaxed">Utilized for Cerebral Folate Deficiency. Clinical trials demonstrate it actively improves expressive language by bypassing blocked folate pathways.<sup>3</sup></p>
            </div>

            {/* GI Management */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#f0fdf4] text-[#10b981] flex items-center justify-center shrink-0 shadow-sm border border-[#bbf7d0] mb-4">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Standard GI Management</h4>
              <p className="text-sm text-slate-700 leading-relaxed">Treating chronic constipation and acid reflux actively improves behavioral distress, self-injury, and sleep disturbances by eliminating chronic pain.<sup>4</sup></p>
            </div>

          </div>
        </div>

        {/* TIER 2: The Gray Area */}
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b-2 border-[#ffd166] pb-2">
            Tier 2: The "Gray Area" (Integrative Medicine)
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-6">
            These have strong biological backing and promising clinical trials showing distinct improvements in subsets of autistic children. However, they lack the massive, FDA-level consensus required for standard pediatric care.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* MTT */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#ffd166]/20 text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#ffd166] border-opacity-50 mb-4">
                <Microscope className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Microbiota Transfer Therapy (MTT)</h4>
              <p className="text-sm text-slate-700 leading-relaxed">Fecal transplants radically improve severe GI distress while simultaneously driving long-term improvements in social and behavioral regulation.<sup>5</sup></p>
            </div>

            {/* Botanicals */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#ffd166]/20 text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#ffd166] border-opacity-50 mb-4">
                <Leaf className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Botanical Antimicrobials</h4>
              <p className="text-sm text-slate-700 leading-relaxed">Extracts like Oil of Oregano are used to combat severe gut dysbiosis (yeast/bacteria) or immune flares without the destructive side effects of antibiotics.<sup>6</sup></p>
            </div>

            {/* Methyl-B12 */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#ffd166]/20 text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#ffd166] border-opacity-50 mb-4">
                <Syringe className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Methyl-B12 Injections</h4>
              <p className="text-sm text-slate-700 leading-relaxed">Used to bypass broken methylation pathways. Trials show subsets of children experience marked improvements in language and lowered oxidative stress.<sup>7</sup></p>
            </div>

            {/* HBOT */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#ffd166]/20 text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#ffd166] border-opacity-50 mb-4">
                <Wind className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Hyperbaric Oxygen Therapy (HBOT)</h4>
              <p className="text-sm text-slate-700 leading-relaxed">Utilized to physically reduce systemic neuroinflammation. Many families report improvements, though mainstream clinical evidence remains heavily mixed.<sup>8</sup></p>
            </div>

          </div>
        </div>

        {/* TIER 3: Dangerous & Disproven */}
        <div>
          <h2 className="text-[#be185d] font-bold mb-4 text-2xl border-b-2 border-[#be185d] pb-2">
            Tier 3: Dangerous & Disproven (The "Miracle Cure" Trap)
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-6 font-bold">
            Federal agencies and global medical consensus explicitly warn against these practices. They offer false hope and carry severe physical risks.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* MMS / Bleach */}
            <div className="bg-[#0c264d]/5 p-5 rounded-xl border border-[#fbcfe8] shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#fdf2f8] text-[#be185d] flex items-center justify-center shrink-0 shadow-sm border border-[#fbcfe8] mb-4">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">MMS (Miracle Mineral Solution)</h4>
              <p className="text-sm text-[#831843] leading-relaxed">A protocol involving feeding industrial bleach to children. The FDA warns it causes life-threatening low blood pressure and acute liver failure.<sup>9</sup></p>
            </div>

            {/* Chelation */}
            <div className="bg-[#0c264d]/5 p-5 rounded-xl border border-[#fbcfe8] shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#fdf2f8] text-[#be185d] flex items-center justify-center shrink-0 shadow-sm border border-[#fbcfe8] mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Heavy Metal Chelation</h4>
              <p className="text-sm text-[#831843] leading-relaxed">Administering chelating drugs to strip supposed heavy metals. Clinical reviews warn it strips vital minerals and causes fatal kidney/liver failure.<sup>10</sup></p>
            </div>

            {/* Lupron */}
            <div className="bg-[#0c264d]/5 p-5 rounded-xl border border-[#fbcfe8] shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#fdf2f8] text-[#be185d] flex items-center justify-center shrink-0 shadow-sm border border-[#fbcfe8] mb-4">
                <XCircle className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">The Lupron Protocol</h4>
              <p className="text-sm text-[#831843] leading-relaxed">Using chemical castration drugs off-label under the debunked theory that testosterone binds with mercury. Widely condemned by endocrinologists.<sup>11</sup></p>
            </div>

            {/* Secretin */}
            <div className="bg-[#0c264d]/5 p-5 rounded-xl border border-[#fbcfe8] shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#fdf2f8] text-[#be185d] flex items-center justify-center shrink-0 shadow-sm border border-[#fbcfe8] mb-4">
                <Ban className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Secretin Injections</h4>
              <p className="text-sm text-[#831843] leading-relaxed">Hyped in the 1990s as a "miracle cure." Subsequent massive double-blind trials definitively proved it offered zero improvement over a placebo.<sup>12</sup></p>
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
            <p>1. Rossignol, D. A., & Frye, R. E. (2011). Melatonin in autism spectrum disorders: a systematic review and meta-analysis. <i>Developmental Medicine & Child Neurology</i>, 53(9), 783-792.</p>
            <p>2. Adams, J. B., et al. (2011). Nutritional and metabolic status of children with autism vs. neurotypical children, and the association with autism severity. <i>Nutrition & Metabolism</i>, 8(1), 34.</p>
            <p>3. Frye, R. E., et al. (2013). Cerebral folate receptor autoantibodies in autism spectrum disorder. <i>Molecular Psychiatry</i>, 18(3), 369-381.</p>
            <p>4. Buie, T., et al. (2010). Evaluation, diagnosis, and treatment of gastrointestinal disorders in individuals with ASDs: a consensus report. <i>Pediatrics</i>, 125 Suppl 1, S1-18.</p>
            <p>5. Kang, D. W., et al. (2019). Long-term benefit of Microbiota Transfer Therapy on autism symptoms and gut microbiota. <i>Scientific Reports</i>, 9(1), 5821.</p>
            <p>6. Levy, S. E., & Hyman, S. L. (2015). Complementary and Alternative Medicine Treatments for Children with Autism Spectrum Disorders. <i>Child and Adolescent Psychiatric Clinics of North America</i>, 24(1), 117-143.</p>
            <p>7. Hendren, R. L., et al. (2016). Randomized, Placebo-Controlled Trial of Methyl B12 for Children with Autism. <i>Journal of Child and Adolescent Psychopharmacology</i>, 26(9), 774-783.</p>
            <p>8. Xiong, T., et al. (2016). Hyperbaric oxygen therapy for people with autism spectrum disorder (ASD). <i>Cochrane Database of Systematic Reviews</i>, 10.</p>
            <p>9. U.S. Food and Drug Administration (FDA). (2019). <i>Be Aware of Potentially Dangerous Products and Therapies that Claim to Treat Autism</i>. Consumer Updates.</p>
            <p>10. James, S., et al. (2015). Chelation for autism spectrum disorder (ASD). <i>Cochrane Database of Systematic Reviews</i>, (5).</p>
            <p>11. Hyman, S. L., et al. (2020). Identification, Evaluation, and Management of Children With Autism Spectrum Disorder. <i>Pediatrics</i>, 145(1).</p>
            <p>12. Williams, K., et al. (2012). Intravenous secretin for autism spectrum disorder (ASD). <i>Cochrane Database of Systematic Reviews</i>, (4).</p>
          </div>
        </div>
      </div>
    </article>
  );
}