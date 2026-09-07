import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Microscope, Zap, Brain, ShieldAlert, Beaker, Leaf } from 'lucide-react';

// 1. Define the props so TypeScript knows what setCurrentArticle is
interface EpigeneticsProps {
  setCurrentArticle?: (article: string) => void;
}

// 2. Pass it into the component here
export function Epigenetics({ setCurrentArticle }: EpigeneticsProps) {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* --- INTRO SECTION WITH FLOATING GRAPHIC --- */}
      <div className="bg-[#f0f9ff] p-8 rounded-xl text-[#0c264d] border border-[#0c264d]/5 mb-8 shadow-sm overflow-hidden">
        
        {/* The Graphic: Floated right */}
        <div className="md:float-right md:ml-8 mb-6 md:mb-2 w-full md:w-72 text-center">
          <p className="text-[#0c264d]/80 mb-3 italic font-medium text-xs">
            The Molecular Bridge: Genetics & Environment
          </p>
          <div className="mx-auto border border-[#0c264d]/10 rounded-lg shadow-sm bg-white p-1">
            <ImageWithFallback 
              src="/images/autism/autism-causes-epigenetics.webp" 
              alt="Epigenetic mechanisms in autism"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        <h2 className="font-bold mb-4 text-2xl font-spartan underline decoration-[#2abcd4] decoration-2 underline-offset-4">
          Epigenetics and Autism Spectrum Disorder
        </h2>
        <p className="leading-relaxed font-spartan text-lg">
          Epigenetics — the study of how gene expression is regulated without changes to the underlying DNA sequence — has emerged as a critical framework for understanding Autism Spectrum Disorder (ASD). Acting as a molecular bridge between genetic predisposition and environmental exposure, epigenetic mechanisms help explain how factors such as prenatal stress, nutrition, and toxin exposure can shape neurodevelopment and contribute to the wide variability seen across the autism spectrum<sup className="text-green-700 font-bold ml-0.5 cursor-help" title="Han et al. (2025); Cao-Lei et al. (2025)">1,3</sup>.
        </p>
      </div>

      {/* --- KEY CONNECTIONS GRID --- */}
      <div className="grid md:grid-cols-3 gap-6 mb-8 clear-both mt-6">
        <div className="bg-white p-5 rounded-lg border-t-4 border-[#2abcd4] shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-[#2abcd4]">
            <Zap size={20} />
            <h3 className="font-bold font-spartan">Gene-Environment</h3>
          </div>
          <p className="text-sm font-spartan leading-relaxed">
            Mediates effects of genetic susceptibility and environmental factors like advanced parental age and maternal immune activation on fetal neurodevelopment.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg border-t-4 border-green-400 shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-green-500">
            <Leaf size={20} />
            <h3 className="font-bold font-spartan">Reversibility</h3>
          </div>
          <p className="text-sm font-spartan leading-relaxed">
            Unlike fixed DNA mutations, these modifications are potentially reversible, offering promise for novel, personalized treatment strategies<sup className="text-green-700 font-bold ml-0.5 cursor-help" title="Gholamalizadeh et al. (2024)">2</sup>.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg border-t-4 border-[#0c264d] shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-[#0c264d]">
            <Brain size={20} />
            <h3 className="font-bold font-spartan">Brain Development</h3>
          </div>
          <p className="text-sm font-spartan leading-relaxed">
            Dynamic changes occur during critical windows in genes regulating synaptic function, making timing of exposure a key risk factor.
          </p>
        </div>
      </div>

      {/* --- MECHANISMS & RISK FACTORS (FIXED THE NAVY BOX) --- */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* FIXED: Now a white card with a navy left-border to match the site's design language */}
        <div className="bg-white p-6 rounded-xl border-l-4 border-[#0c264d] shadow-sm">
          <h3 className="font-bold mb-4 text-lg font-spartan flex items-center gap-2 text-[#0c264d]">
            <Beaker size={20} /> Common Mechanisms
          </h3>
          <ul className="space-y-4 font-spartan text-sm text-gray-700">
            <li>
              <strong className="font-bold text-[#0c264d]">DNA Methylation:</strong> Patterns affecting synaptic signaling and GABAergic systems are consistent enough to serve as promising candidate biomarkers<sup className="text-green-700 font-bold ml-0.5 cursor-help" title="Gholamalizadeh et al. (2024)">2</sup>.
            </li>
            <li>
              <strong className="font-bold text-[#0c264d]">Histone Modification:</strong> Changes in DNA packaging regulate gene accessibility; disruptions are consistently observed in ASD epigenomic profiles.
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border-l-4 border-red-400 shadow-sm">
          <h3 className="font-bold mb-4 text-lg font-spartan flex items-center gap-2 text-red-500">
            <ShieldAlert size={20} /> Critical Risk Factors
          </h3>
          <ul className="space-y-4 font-spartan text-sm text-gray-700">
            <li>
              <strong className="font-bold text-red-600">Valproic Acid (VPA):</strong> In utero exposure significantly elevates ASD-like outcomes via altered DNA methylation and histone inhibition<sup className="text-green-700 font-bold ml-0.5 cursor-help" title="Dorsey et al. (2024); Yang et al. (2025)">4,5</sup>.
            </li>
            <li>
              <strong className="font-bold text-red-600">Maternal Stress:</strong> Induces DNA methylation changes that mediate increased risk, reinforcing the importance of the prenatal environment<sup className="text-green-700 font-bold ml-0.5 cursor-help" title="Han et al. (2025); Cao-Lei et al. (2025)">1,3</sup>.
            </li>
          </ul>
        </div>
      </div>
      {/* --- EPIGENETICS VIDEO EMBED --- */}
      <div className="my-8">
        <h4 className="text-sm uppercase tracking-wider text-[#0c264d] font-bold mb-4 font-spartan">
          Featured Resource: Epigenetics in Action
        </h4>
        
        <div className="relative w-full overflow-hidden pt-[56.25%] rounded-lg shadow-inner border border-[#0c264d] border-opacity-10 bg-slate-50">
          <iframe 
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/fp-XHU3_V5w?rel=0" 
            title="What Makes Identical Twins Different?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        
        <p className="mt-3 text-xs text-slate-600 leading-relaxed ml-1">
          <strong>Video:</strong> Explores how environmental factors influence gene expression, demonstrating the core principles of DNA methylation referenced in the clinical studies above.
        </p>
      </div>
      {/* --- FUTURE HORIZONS --- */}
      <div className="bg-[#ffffff] bg-opacity-10 p-6 rounded-lg border-2 border-dashed border-[#2abcd4] mb-10 shadow-sm">
        <h3 className="font-bold mb-3 text-xl font-spartan flex items-center gap-2 text-[#0c264d]">
          <Microscope className="text-[#2abcd4]" size={24} /> 
          Diagnosis & Targeted Therapies
        </h3>
        <p className="text-sm leading-relaxed font-spartan mb-4">
          Researchers are identifying epigenetic signatures in peripheral blood that mirror brain tissue patterns, offering a pathway to non-invasive early diagnosis. Additionally, the development of <strong>"Epidrugs"</strong> — pharmacological agents designed to modify aberrant methylation patterns — represents a growing frontier in symptom-targeted treatment<sup className="text-green-700 font-bold ml-0.5 cursor-help" title="Gholamalizadeh et al. (2024)">2</sup>.
        </p>
      </div>
   
      {/* Bottom back button: Simplified for cleaner exit */}
      <div className="flex justify-end mt-12 mb-6">
        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-normal text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan whitespace-nowrap shrink-0"
        >
          <span className="text-lg">←</span>All About Autism
        </button>
      </div>
 
      {/* --- REFERENCES SECTION --- */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />

      <div className="pt-2">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] border-opacity-10 pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Han, E., et al. (2025). "The convergence of early-life stress and autism spectrum disorder on the epigenetics of genes key to the HPA axis." <i>Biology</i>. https://doi.org/10.3390/biology15010066</p>
            <p>2. Gholamalizadeh, H., et al. (2024). "DNA methylation in autism spectrum disorders: Biomarker or pharmacological target?" <i>Brain Sciences</i>. https://doi.org/10.3390/brainsci14080737</p>
            <p>3. Cao-Lei, L., et al. (2025). "DNA methylation mediates the association between prenatal maternal stress and the broad autism phenotype in human adolescents: Project Ice Storm." <i>International Journal of Molecular Sciences</i>. https://doi.org/10.3390/ijms26199468</p>
            <p>4. Dorsey, S. G., et al. (2024). "Rapid effects of valproic acid on the fetal brain transcriptome: Implications for brain development and autism." <i>Translational Psychiatry</i>. https://doi.org/10.1038/s41398-024-03179-1</p>
            <p>5. Yang, J., et al. (2025). "Prenatal exposure to valproic acid induces increased autism-like behaviors and impairment of learning and memory functions in rat offspring by upregulating ADAM10 expression." <i>Neurochemical Research</i>. https://doi.org/10.1007/s11064-025-04398-8</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] border-opacity-10 pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>Arca, G., et al. (2024). "Intercontinental insights into ASD: A synthesis of DNA methylation and environment." <i>Environmental Epigenetics</i>. https://doi.org/10.1093/eep/dvae012</p>
            <p>Herrera, M. L., et al. (2024). "Targeting epigenetic dysregulation in autism spectrum disorders." <i>Trends in Molecular Medicine</i>. https://doi.org/10.1016/j.molmed.2024.06.004</p>
            <p>Grazioli, S., et al. (2025). "Epigenetic changes and their potential reversibility in mental health." <i>Clinical Epigenetics</i>. https://doi.org/10.1186/s13148-025-01824-w</p>
            <p>Park, J., & Kim, J. W. (2024). "Epigenetic insights into ASD: DNA methylation in promoter regions and blood samples." <i>Clinical Psychopharmacology and Neuroscience</i>. https://doi.org/10.9758/cpn.23.1114</p>
          </div>
        </div>
      </div>
    </div>
  );
}