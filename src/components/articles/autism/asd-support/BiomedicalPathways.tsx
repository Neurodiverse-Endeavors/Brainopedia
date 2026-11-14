import { AlertTriangle, Brain, Dna, Zap, HeartPulse } from 'lucide-react';

interface BiomedicalPathwaysProps {
  setCurrentArticle?: (article: string) => void;
}

export function BiomedicalPathways({ setCurrentArticle }: BiomedicalPathwaysProps) {
  
  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0 mb-12">
      
      {/* Page Header with Right-Aligned Gold Back Button */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        
        {/* Left Side: Title & Description */}
        <div>
          <h1 className="text-4xl text-[#0c264d] font-normal mb-2">
            Biological Pathways & OTC Support
          </h1>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Biomedical Deep Dive</p>
          <p className="mt-4 text-[#0c264d] text-sm max-w-2xl">
            Exploring the underlying cellular mechanisms, neurotransmitter regulation, and targeted over-the-counter interventions utilized in biomedical approaches to neurodivergence.
          </p>
        </div>

        {/* Right Side: Gold Back Button */}
        <button 
          onClick={() => setCurrentArticle?.('autism-support-biomedical')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
        >
          <span className="text-xl">←</span>
          Back to Biomedical
        </button>
        
      </div>

      {/* CRITICAL ACCESSIBLE WARNING (Standard Maroon/Pink) */}
      <div className="bg-[#fdf2f8] border-l-4 border-[#be185d] p-5 rounded-r-xl shadow-sm mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="text-[#be185d] w-6 h-6 shrink-0 mt-0.5" />
          <div>
            <h2 className="font-bold text-[#831843] mb-1 uppercase text-sm">Critical Pharmacological Alert: OTC & Rx Interactions</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              "Over-the-counter" does not mean "biologically inactive." OTC supplements directly alter neurotransmitter levels, liver enzyme processing, and neurological pathways. <strong>Never combine these with prescription psychotropics (like SSRIs, Stimulants, or NMDA antagonists like Memantine) without clinical supervision.</strong> Mixing them can trigger dangerous compounding effects, including Serotonin Syndrome, excitotoxicity, or rapid fluctuations in blood medication levels.
            </p>
          </div>
        </div>
      </div>

      {/* GRID CHART: Pathways (Unified 3D Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        
        {/* Card 1: NAC (Cyan Style) */}
        <div className="bg-[#2abcd4]/10 border-2 border-[#2abcd4] rounded-xl p-5 shadow-sm flex flex-col h-full relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2abcd4]"></div>
          <div className="flex items-center gap-3 mb-3 border-b border-[#2abcd4]/20 pb-3 pl-2">
            <div className="w-10 h-10 rounded-full bg-white text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#2abcd4]/30">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-[#0c264d] font-bold text-base leading-tight">N-Acetylcysteine (NAC)</h3>
              <span className="text-[10px] uppercase font-bold text-[#0A9DC4] tracking-wider">Antioxidant / Glutamate</span>
            </div>
          </div>
          <p className="text-sm text-slate-700 mb-3 flex-grow pl-2">
            Acts as a highly bioavailable precursor to glutathione (the brain's master antioxidant) to combat oxidative stress.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> Modulates the cystine-glutamate antiporter to prevent excitatory neurological burnout.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
          </p>
          <div className="bg-white p-3 rounded-lg border border-[#2abcd4]/20 mt-auto ml-2">
            <p className="text-xs text-slate-600 font-bold mb-1">Clinical Target:</p>
            <p className="text-xs text-slate-600">Severe irritability, self-injurious behavior, and repetitive compulsions.</p>
          </div>
        </div>

        {/* Card 2: L-Methylfolate (Navy Style) */}
        <div className="bg-[#0c264d]/10 border-2 border-[#0c264d] rounded-xl p-5 shadow-sm flex flex-col h-full relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
          <div className="flex items-center gap-3 mb-3 border-b border-[#0c264d]/20 pb-3 pl-2">
            <div className="w-10 h-10 rounded-full bg-white text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#0c264d]/30">
              <Dna className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-[#0c264d] font-bold text-base leading-tight">L-Methylfolate</h3>
              <span className="text-[10px] uppercase font-bold text-[#0c264d] tracking-wider">Methylation Pathway</span>
            </div>
          </div>
          <p className="text-sm text-slate-700 mb-3 flex-grow pl-2">
            Bypasses MTHFR gene mutations by providing the already-active form of folate.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup> Required by the brain to synthesize dopamine, serotonin, and norepinephrine, avoiding cerebral folate deficiency.
          </p>
          <div className="bg-white p-3 rounded-lg border border-[#0c264d]/20 mt-auto ml-2">
            <p className="text-xs text-slate-600 font-bold mb-1">Clinical Target:</p>
            <p className="text-xs text-slate-600">Language delays, cognitive processing speed, and mood dysregulation.</p>
          </div>
        </div>

        {/* Card 3: Magnesium & B6 (Yellow Style - Navy Contrast Applied) */}
        <div className="bg-[#ffd166]/10 border-2 border-[#ffd166] rounded-xl p-5 shadow-sm flex flex-col h-full relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ffd166]"></div>
          <div className="flex items-center gap-3 mb-3 border-b border-[#ffd166]/40 pb-3 pl-2">
            <div className="w-10 h-10 rounded-full bg-white text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#ffd166]/50">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-[#0c264d] font-bold text-base leading-tight">Magnesium + B6</h3>
              <span className="text-[10px] uppercase font-bold text-[#0c264d] tracking-wider">Neurotransmitter Synthesis</span>
            </div>
          </div>
          <p className="text-sm text-slate-700 mb-3 flex-grow pl-2">
            Magnesium acts as the natural "brake pedal" for the NMDA (glutamate) receptor, while Vitamin B6 is a mandatory cofactor enzyme for the conversion of glutamate into calming GABA.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup>
          </p>
          <div className="bg-white p-3 rounded-lg border border-[#ffd166]/40 mt-auto ml-2">
            <p className="text-xs text-slate-600 font-bold mb-1">Clinical Target:</p>
            <p className="text-xs text-slate-600">Sensory overstimulation, anxiety, hyperactivity, and muscle tension.</p>
          </div>
        </div>

        {/* Card 4: Omega-3s (Dark Cyan Style) */}
        <div className="bg-[#0A9DC4]/10 border-2 border-[#0A9DC4] rounded-xl p-5 shadow-sm flex flex-col h-full relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
          <div className="flex items-center gap-3 mb-3 border-b border-[#0A9DC4]/20 pb-3 pl-2">
            <div className="w-10 h-10 rounded-full bg-white text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#0A9DC4]/30">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-[#0c264d] font-bold text-base leading-tight">Omega-3 (EPA & DHA)</h3>
              <span className="text-[10px] uppercase font-bold text-[#0A9DC4] tracking-wider">Cellular Integrity</span>
            </div>
          </div>
          <p className="text-sm text-slate-700 mb-3 flex-grow pl-2">
            Provides the structural lipids required to build flexible, healthy neural membranes. High-EPA ratios specifically target and reduce systemic neuro-inflammation across the central nervous system.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup>
          </p>
          <div className="bg-white p-3 rounded-lg border border-[#0A9DC4]/20 mt-auto ml-2">
            <p className="text-xs text-slate-600 font-bold mb-1">Clinical Target:</p>
            <p className="text-xs text-slate-600">Executive dysfunction, attention deficits, and inflammatory immune responses.</p>
          </div>
        </div>

      </div>

{/* ===== BOTTOM BACK BUTTON (Right-Aligned) ===== */}
      <div className="mt-8 mb-12 flex justify-end w-full">
        <button 
          onClick={() => setCurrentArticle?.('autism-support-biomedical')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm"
        >
          <span className="text-xl">←</span>
          Back to Biomedical
        </button>
      </div>
      
      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Hardan, A. Y., et al. (2012). "A randomized controlled pilot trial of oral N-acetylcysteine in children with autism." <i>Biological Psychiatry</i>.</p>
            <p>2. Deepmala, et al. (2015). "Clinical trials of N-acetylcysteine in psychiatry and neurology: A systematic review." <i>Neuroscience & Biobehavioral Reviews</i>.</p>
            <p>3. Frye, R. E., et al. (2013). "Cerebral folate receptor autoantibodies in autism spectrum disorder." <i>Molecular Psychiatry</i>.</p>
            <p>4. Mousain-Bosc, M., et al. (2006). "Improvement of neurobehavioral disorders in children supplemented with magnesium-vitamin B6." <i>Magnesium Research</i>.</p>
            <p>5. Chang, J. P., et al. (2018). "Omega-3 Polyunsaturated Fatty Acids in Youths with Attention Deficit Hyperactivity Disorder." <i>Neuropsychopharmacology</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Stahl, S. M. Stahl's Essential Psychopharmacology: Neuroscientific Basis and Practical Applications. Cambridge University Press.</li>
            <li>Rossignol, D. A., & Frye, R. E. (2012). A review of research trends in physiological abnormalities in autism spectrum disorders.</li>
          </ul>
        </div>
      </div>

    </article>
  );
}