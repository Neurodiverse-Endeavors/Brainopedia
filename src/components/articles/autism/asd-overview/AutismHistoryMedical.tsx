import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface AutismHistoryMedicalProps {
  setCurrentArticle?: (article: string) => void;
}

export function AutismHistoryMedical({ setCurrentArticle }: AutismHistoryMedicalProps) {
  
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
          History: Whole-Body & Medical Pioneers
        </h1>
        <BackButton />
      </div>

      <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
        
        {/* Intro Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm">
          <p className="text-slate-700 leading-relaxed text-sm md:text-base max-w-4xl mx-auto text-center">
            For decades, autism was viewed exclusively as a behavioral or psychiatric disorder of the brain. The medical pioneers below challenged this static view, producing the rigorous science needed to prove that autism is a dynamic, whole-body systemic condition involving the gut, immune system, and cellular metabolism.
          </p>
        </div>

        {/* 1. Systems Biology */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            1. Systems Biology & The Paradigm Shift
          </h2>
          
          <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Dr. Martha Herbert</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              A pediatric neurologist and brain development researcher (formerly at Harvard Medical School and Massachusetts General Hospital), Dr. Herbert fundamentally shifted the clinical conversation with her concept of autism as a "systemic encephalopathy" (a whole-body condition that affects the brain).
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              In her paradigm-shifting book, <i>The Autism Revolution</i>, she argued against the prevailing idea that autism is a fixed, genetically hardwired tragedy. Instead, she presented autism as a dynamic collection of metabolic, immunological, and environmental vulnerabilities that can be supported, optimized, and healed by addressing bodily inflammation.
            </p>
          </div>
        </div>

        {/* 2. The Gut-Brain Axis */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            2. Validating the Gut-Brain Axis
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Dr. Timothy Buie</h3>
              <p className="text-sm text-slate-700 space-y-2 leading-relaxed">
                As a pediatric gastroenterologist at Boston Children's Hospital, Dr. Buie led a landmark 2010 multidisciplinary consensus report in the journal <i>Pediatrics</i>.<sup>1</sup> For years, doctors dismissed severe GI issues in autistic children as "just part of their autism." Dr. Buie’s work definitively proved that these children suffer from very real, diagnosable, and treatable physical GI conditions (like esophagitis and severe constipation) that often manifest as severe behavioral distress due to communication barriers.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Dr. Alessio Fasano</h3>
              <p className="text-sm text-slate-700 space-y-2 leading-relaxed">
                A world-renowned pediatric gastroenterologist (Massachusetts General Hospital), Dr. Fasano discovered <strong>zonulin</strong>, the protein that regulates intestinal permeability.<sup>2</sup> His groundbreaking research on "leaky gut" provided the exact biological mechanism explaining how systemic inflammation in the gut lining allows undigested proteins to cross the blood-brain barrier, directly impacting neurodevelopment and behavior.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Metabolics & Immunology */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            3. Metabolics, Mitochondria, & Immunology
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Dr. Richard Frye</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                A leading pediatric neurologist and researcher, Dr. Frye has pioneered the modern scientific understanding of how metabolic disorders drive autistic presentations. His rigorous clinical trials and research focus heavily on <strong>mitochondrial dysfunction</strong> in autism, as well as cerebral folate deficiency (autoantibodies blocking folate from reaching the brain), proving the efficacy of highly targeted metabolic treatments like folinic acid (leucovorin).<sup>3</sup>
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Dr. S. Jill James</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Working as a biochemical geneticist at the University of Arkansas, Dr. James conducted the foundational studies identifying metabolic biomarkers in autistic children. Her research definitively showed that a large subset of autistic individuals suffer from abnormal methylation pathways, severe glutathione depletion, and high oxidative stress—providing the peer-reviewed biochemical proof for why targeted nutritional supports are so vital.<sup>4</sup>
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
            <p>1. Buie, T., et al. (2010). Evaluation, diagnosis, and treatment of gastrointestinal disorders in individuals with ASDs: a consensus report. <i>Pediatrics</i>, 125 Suppl 1, S1-18.</p>
            <p>2. Fasano, A. (2012). Zonulin, regulation of tight junctions, and autoimmune diseases. <i>Annals of the New York Academy of Sciences</i>, 1258(1), 25-33.</p>
            <p>3. Frye, R. E., et al. (2013). Cerebral folate receptor autoantibodies in autism spectrum disorder. <i>Molecular Psychiatry</i>, 18(3), 369-381.</p>
            <p>4. James, S. J., et al. (2004). Metabolic biomarkers of increased oxidative stress and impaired methylation capacity in children with autism. <i>The American Journal of Clinical Nutrition</i>, 80(6), 1611-1617.</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Herbert, M., & Weintraub, K. (2012). <i>The Autism Revolution: Whole-Body Strategies for Making Life All It Can Be</i>. Ballantine Books.</li>
            <li>Rossignol, D. A., & Frye, R. E. (2012). A review of research trends in physiological abnormalities in autism spectrum disorders. <i>Molecular Psychiatry</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}