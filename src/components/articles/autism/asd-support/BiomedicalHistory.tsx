import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface BiomedicalHistoryProps {
  setCurrentArticle?: (article: string) => void;
}

export function BiomedicalHistory({ setCurrentArticle }: BiomedicalHistoryProps) {
  
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
          Biomedical: Origins & History
        </h1>
        <BackButton />
      </div>

      <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500 font-spartan">
        
        {/* Intro Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#2abcd4]">
          <p className="text-slate-700 leading-relaxed text-sm md:text-base max-w-4xl mx-auto text-center font-medium">
            The biomedical approach to autism focuses on underlying systemic issues—such as immune dysfunction, metabolic abnormalities, and gastrointestinal distress. Below is a map of the legitimate pioneers, the academic researchers, and the historical controversies that have shaped this complex landscape.
          </p>
        </div>

        {/* 1. The Founders */}
        <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            1. The Early Pioneers & The Fall of DAN!
          </h2>
          
          <div className="bg-slate-50 p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Dr. Bernard Rimland & The Autism Research Institute</h3>
            <p className="text-sm text-slate-700 space-y-2 leading-relaxed mb-4">
              After fundamentally disproving the deeply harmful "refrigerator mother" theory (which falsely blamed autism on cold parenting) in the 1960s, Dr. Bernard Rimland shifted his focus entirely to biology. In the 1990s, Rimland launched the <strong>Defeat Autism Now! (DAN!)</strong> project through the Autism Research Institute (ARI).<sup>1</sup> 
            </p>
            <p className="text-sm text-slate-700 space-y-2 leading-relaxed mb-4">
              DAN! was the very first concerted effort by doctors to treat autism medically—focusing on nutritional deficiencies, food allergies, and the gut-brain connection. 
            </p>
            <p className="text-sm text-[#be185d] font-bold leading-relaxed">
              However, as the movement grew, the DAN! network became heavily infiltrated by fringe practitioners promoting dangerous, unregulated therapies. Recognizing the threat to patient safety, ARI officially retired the DAN! protocol in 2011 to distance itself from these practices, effectively ending the era of the "DAN! Doctor."
            </p>
          </div>
        </div>

        {/* 2. Systems Biology & Metabolics */}
        <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            2. The Scientific Vanguard
          </h2>
          
          <p className="text-sm text-slate-700 leading-relaxed mb-6">
            Today, the legitimate biomedical movement is anchored not by independent clinics, but by highly credentialed academic researchers publishing in peer-reviewed medical journals.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Dr. Martha Herbert</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                A pediatric neurologist at Harvard Medical School, Dr. Herbert legitimized the biomedical framework within mainstream medicine. By defining autism as a "whole-body systemic encephalopathy" rather than just a static brain condition, she demonstrated that treating underlying physiological inflammation can actively improve neurological function and daily regulation.<sup>2</sup>
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Drs. Richard Frye & S. Jill James</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Leading the charge in metabolics at Arkansas Children's Hospital, Dr. James proved the existence of severe oxidative stress and glutathione depletion in autistic individuals. Building on this, Dr. Frye’s clinical trials have validated targeted treatments for mitochondrial dysfunction and folate receptor blockages, giving the biomedical movement robust, unassailable data.<sup>3</sup>
              </p>
            </div>
          </div>
        </div>

        {/* 3. The Controversies */}
        <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#be185d] font-bold mb-6 text-2xl border-b-2 border-[#be185d] pb-2">
            3. The "Wild West" & The Vaccine Controversy
          </h2>
          
          <div className="bg-[#fff0f0] p-6 rounded-md border-l-4 border-[#be185d] shadow-sm mb-6">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Vaccine Controversy</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Because autism involves complex immune and metabolic issues, the early biomedical space experienced a period of intense public controversy regarding environmental triggers. In the late 2000s, heavily publicized celebrity books and alternative practitioners aggressively promoted the theory that childhood vaccines were the primary trigger for autism. 
            </p>
            <p className="text-sm text-slate-700 leading-relaxed font-bold mb-4">
              This theory has been definitively and repeatedly disproven by massive, global epidemiological data. 
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              A 2014 meta-analysis encompassing over 1.25 million children confirmed there is zero relationship between vaccination and autism.<sup>4</sup> Similarly, a landmark Danish cohort study tracking over 537,000 children proved the MMR vaccine does not increase the risk of autism, even in children with other immune vulnerability factors.<sup>5</sup>
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-md border-l-4 border-[#ffd166] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Trap of the "Integrative Clinic"</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              While the early biomedical era brought unprecedented attention to the physical suffering of autistic children, the heavy promotion of false triggers spawned a highly lucrative, unregulated industry. 
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Today, the "integrative" or "functional" autism landscape remains a "buyer beware" environment. Many clinics operate on a cash-only basis, charging desperate families thousands of dollars for proprietary lab tests and aggressive, unproven therapies. In severe cases, federal regulatory agencies have had to intervene to shut down the manufacturing and administration of dangerous compounds billed as "miracle cures."
            </p>
            <p className="text-sm text-slate-700 leading-relaxed font-bold">
              True biomedical care should never involve dangerous medical extremes. It should rely on standard gastroenterology, verified metabolic screening, and foundational nutritional support.
            </p>
          </div>
        </div>

      </div>

      {/* FOOTER & REFERENCES */}
      <div className="flex justify-end mt-12 mb-6">
        <BackButton />
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
      
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Edelson, S. M. (2020). "The Autism Research Institute: 50+ Years of Advancing Research and Supporting Families." <i>Autism Research Institute</i>.</p>
            <p>2. Herbert, M. (2005). "Large brains in autism: the challenge of pervasive abnormality." <i>The Neuroscientist</i>.</p>
            <p>3. Frye, R. E., & Rossignol, D. A. (2014). "Treatments for biomedical abnormalities associated with autism spectrum disorder." <i>Frontiers in Pediatrics</i>.</p>
            <p>4. Taylor, L. E., Swerdfeger, A. L., & Eslick, G. D. (2014). "Vaccines are not associated with autism: an evidence-based meta-analysis of case-control and cohort studies." <i>Vaccine</i>.</p>
            <p>5. Madsen, K. M., et al. (2002). "A population-based study of measles, mumps, and rubella vaccination and autism." <i>New England Journal of Medicine</i>.</p>
          </div>
        </div>
      </div>
    </article>
  );
}