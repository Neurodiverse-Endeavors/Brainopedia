import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Microscope, Zap, Brain, ShieldAlert, Beaker, Leaf } from 'lucide-react';

// 1. ADD THE INTERFACE TO ACCEPT ROUTING PROPS
interface ADHDEpigeneticsProps {
  setCurrentArticle?: (article: string) => void;
}

// 2. PASS THE PROP INTO THE COMPONENT
export function ADHDEpigenetics({ setCurrentArticle }: ADHDEpigeneticsProps) {
  return (
    <article className="max-w-6xl mx-auto p-4 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      
      {/* --- PAGE HEADER & TOP BACK BUTTON --- */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4">
        <h1 className="text-3xl text-[#0c264d] font-normal font-spartan">
          Epigenetics and ADHD
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-normal text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan whitespace-nowrap shrink-0"
        >
          <span className="text-lg">←</span>All About ADHD
        </button>
      </div>

      {/* --- INTRO SECTION WITH FLOATING GRAPHIC --- */}
      <div className="bg-[#f0f9ff] p-8 rounded-xl text-[#0c264d] border border-[#0c264d]/5 mb-8 shadow-sm overflow-hidden">
        
        {/* The Graphic Placeholder: Floated right */}
        <div className="md:float-right md:ml-8 mb-6 md:mb-2 w-full md:w-72 text-center">
          <p className="text-[#0c264d]/80 mb-3 italic font-medium text-xs">
            The Molecular Bridge: Genetics & Environment
          </p>
          <div className="mx-auto border border-[#0c264d]/10 rounded-lg shadow-sm bg-white p-1">
            <ImageWithFallback 
              src="/images/adhd/adhd-epigenetics-main-brain-dna.webp" 
              alt="Epigenetic mechanisms in ADHD"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
        
        <p className="leading-relaxed font-spartan text-lg mt-2">
          Epigenetics—the study of how environmental factors alter the way our genes work without changing the underlying DNA sequence—is revolutionizing our understanding of ADHD. While ADHD is highly heritable, genetics alone do not tell the whole story. Epigenetic mechanisms act as a molecular switchboard, turning specific genes "on" or "off" in response to environmental exposures during early development. This helps explain the wide variability in ADHD symptoms and why certain environmental factors can increase the likelihood of ADHD traits expressing themselves.<sup>1, 2</sup>
        </p>
      </div>

      {/* --- KEY CONNECTIONS GRID --- */}
      <div className="grid md:grid-cols-3 gap-6 mb-8 clear-both mt-6">
        <div className="bg-white p-5 rounded-lg border-t-4 border-[#ffd166] shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-[#ffd166]">
            <Zap size={20} className="text-[#e6bc5c]" />
            <h3 className="font-bold font-spartan text-[#0c264d]">Dopamine Pathways</h3>
          </div>
          <p className="text-sm font-spartan leading-relaxed text-gray-700">
            Epigenetic marks frequently target genes responsible for dopamine regulation (like DAT1 and DRD4), directly influencing executive function and reward processing networks.<sup>3</sup>
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg border-t-4 border-green-400 shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-green-500">
            <Leaf size={20} />
            <h3 className="font-bold font-spartan text-[#0c264d]">Plasticity & Reversibility</h3>
          </div>
          <p className="text-sm font-spartan leading-relaxed text-gray-700">
            Unlike fixed DNA, epigenetic modifications are fluid. Positive environmental factors, lifestyle interventions, and certain medications can potentially reverse adverse epigenetic marks over time.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg border-t-4 border-[#2abcd4] shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-[#2abcd4]">
            <Brain size={20} />
            <h3 className="font-bold font-spartan text-[#0c264d]">Neurodevelopment</h3>
          </div>
          <p className="text-sm font-spartan leading-relaxed text-gray-700">
            Crucial epigenetic changes occur during fetal and early childhood development, guiding the formation of neural circuits in the prefrontal cortex and basal ganglia.
          </p>
        </div>
      </div>

      {/* --- MECHANISMS & RISK FACTORS --- */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        
        {/* Mechanisms Card */}
        <div className="bg-white p-6 rounded-xl border-l-4 border-[#0c264d] shadow-sm">
          <h3 className="font-bold mb-4 text-lg font-spartan flex items-center gap-2 text-[#0c264d]">
            <Beaker size={20} /> Biological Mechanisms
          </h3>
          <ul className="space-y-4 font-spartan text-sm text-gray-700">
            <li>
              <strong className="font-bold text-[#0c264d]">DNA Methylation:</strong> The most studied mechanism in ADHD. Research shows distinct methylation patterns in genes related to neurotransmitter signaling, which can reduce the production of essential proteins needed for sustained attention.<sup>4</sup>
            </li>
            <li>
              <strong className="font-bold text-[#0c264d]">Histone Modification:</strong> Changes in how tightly DNA is spooled around histone proteins can limit the brain's ability to express genes necessary for rapid neural adaptability and learning.
            </li>
          </ul>
        </div>

        {/* Risk Factors Card */}
        <div className="bg-white p-6 rounded-xl border-l-4 border-red-400 shadow-sm">
          <h3 className="font-bold mb-4 text-lg font-spartan flex items-center gap-2 text-red-500">
            <ShieldAlert size={20} /> Environmental Interactors
          </h3>
          <ul className="space-y-4 font-spartan text-sm text-gray-700">
            <li>
              <strong className="font-bold text-red-600">Prenatal Exposures:</strong> Exposure to maternal stress, tobacco smoke, or heavy metals (like lead) during pregnancy has been shown to alter DNA methylation at specific ADHD-risk gene sites.<sup>5</sup>
            </li>
            <li>
              <strong className="font-bold text-red-600">Early Life Stress:</strong> Significant psychosocial adversity in early childhood can induce epigenetic changes that alter the reactivity of the HPA axis (the body's stress response system), compounding ADHD symptoms.
            </li>
          </ul>
        </div>
      </div>

      {/* --- EPIGENETICS VIDEO EMBED --- */}
      <div className="my-8 flex flex-col items-center">
        <div className="w-full max-w-2xl">
          <h4 className="text-sm uppercase tracking-wider text-[#0c264d] font-bold mb-4 font-spartan">
            Featured Resource: How Environment Shapes the Brain
          </h4>
        </div>
        
        {/* Responsive sizing: Full width on mobile, max-width on desktop, locked to 16:9 ratio */}
        <div className="relative w-full max-w-2xl aspect-video overflow-hidden rounded-lg shadow-inner border border-[#0c264d] border-opacity-10 bg-slate-50">
          <iframe 
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/g12kIu9jrIk?rel=0" 
            title="Epigenetics: How Environment Shapes the Brain"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="w-full max-w-2xl mt-3">
          <p className="text-xs text-slate-600 leading-relaxed ml-1">
            <strong>Video:</strong> Understanding the physical changes that occur at the molecular level when genetic risk meets environmental exposure.
          </p>
        </div>
      </div>

      {/* --- FUTURE HORIZONS --- */}
      <div className="bg-[#ffffff] bg-opacity-10 p-6 rounded-lg border-2 border-dashed border-[#ffd166] mb-10 shadow-sm">
        <h3 className="font-bold mb-3 text-xl font-spartan flex items-center gap-2 text-[#0c264d]">
          <Microscope className="text-[#e6bc5c]" size={24} /> 
          Diagnosis & Targeted Therapies
        </h3>
        <p className="text-sm leading-relaxed font-spartan mb-4 text-gray-700">
          The future of ADHD treatment may lie in the epigenome. Researchers are actively mapping epigenetic "signatures" in peripheral blood that could serve as objective biomarkers for ADHD subtypes. Furthermore, because epigenetic changes are reversible, nutritional interventions (like specific methyl-donor diets) and novel behavioral therapies are being studied for their ability to positively re-regulate epigenetic markers associated with ADHD.<sup>6</sup>
        </p>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both"></div>
      
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Nigg, J. T., et al. (2020). DNA methylation and attention-deficit/hyperactivity disorder. <i>Journal of Child Psychology and Psychiatry</i>.</p>
            <p>2. Heinrich, H., et al. (2017). Epigenetic mechanisms in ADHD: A current perspective. <i>Translational Psychiatry</i>.</p>
            <p>3. Walton, E., et al. (2017). Epigenetic profiling of ADHD symptoms trajectories: A prospective, methylome-wide study. <i>Molecular Psychiatry</i>.</p>
            <p>4. Mooney, M. A., et al. (2020). Epigenome-wide association study of ADHD symptom severity. <i>American Journal of Medical Genetics Part B: Neuropsychiatric Genetics</i>.</p>
            <p>5. Cecil, C. A., et al. (2014). Environmental risk, Oxytocin Receptor Gene (OXTR) methylation and youth callous-unemotional traits. <i>Development and Psychopathology</i>.</p>
            <p>6. Mill, J., & Heijmans, B. T. (2013). From promises to practical strategies in epigenetic epidemiology. <i>Nature Reviews Genetics</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN (No Indentation) */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i> (4th ed.). Guilford Press.</li>
            <li>Faraone, S. V., & Larsson, H. (2019). Genetics of attention deficit hyperactivity disorder. <i>Molecular Psychiatry</i>.</li>
            <li>Thapar, A., et al. (2013). Gene-environment interplay in attention-deficit hyperactivity disorder and the importance of a developmental perspective. <i>British Journal of Psychiatry</i>.</li>
          </ul>
        </div>
      </div>

      {/* --- BOTTOM BACK BUTTON --- */}
      <div className="flex justify-end mt-8">
        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-normal text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan whitespace-nowrap shrink-0"
        >
          <span className="text-lg">←</span>All About ADHD
        </button>
      </div>

    </article>
  );
}