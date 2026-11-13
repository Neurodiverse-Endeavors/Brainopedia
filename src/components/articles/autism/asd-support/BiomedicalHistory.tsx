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
          Biomedical: Origins & Practitioners
        </h1>
        <BackButton />
      </div>

      <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
        
        {/* Intro Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm">
          <p className="text-slate-700 leading-relaxed text-sm md:text-base max-w-4xl mx-auto text-center">
            The biomedical approach to autism focuses on underlying systemic issues—such as immune dysfunction, metabolic abnormalities, and gastrointestinal distress. Below is a map of the legitimate pioneers, integrative clinicians, and the historical controversies that have shaped the biomedical landscape.
          </p>
        </div>

        {/* 1. The Founders */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            1. The Early Founders
          </h2>
          
          <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Dr. Bernard Rimland & The DAN! Protocol</h3>
            <p className="text-sm text-slate-700 space-y-2 leading-relaxed">
              After fundamentally disproving the "refrigerator mother" theory in the 1960s, Dr. Bernard Rimland shifted his focus to biology. In the 1990s, alongside Dr. Sidney Baker and Dr. Jon Pangborn, Rimland launched the <strong>Defeat Autism Now! (DAN!)</strong> project through the Autism Research Institute (ARI).<sup>1</sup> 
              <br/><br/>
              DAN! was the very first concerted effort by doctors to treat autism medically—focusing on nutritional deficiencies, food allergies, and the gut. While ARI officially retired the DAN! protocol in 2011 to distance itself from fringe practitioners, these founders laid the groundwork for modern integrative autism care.
            </p>
          </div>
        </div>

        {/* 2. Systems Biology & Metabolics */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            2. The Scientific Vanguard
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Dr. Martha Herbert</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                A pediatric neurologist, Dr. Herbert legitimized the biomedical framework within mainstream medicine. By defining autism as a "whole-body systemic encephalopathy," she demonstrated that treating underlying physiological inflammation can actively improve neurological function.<sup>2</sup>
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Drs. Richard Frye & S. Jill James</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Leading the charge in metabolics, Dr. James proved the existence of severe oxidative stress and glutathione depletion in autistic individuals. Building on this, Dr. Frye’s clinical trials have validated targeted treatments for mitochondrial dysfunction and folate receptor blockages, giving the biomedical movement robust, peer-reviewed backing.<sup>3</sup>
              </p>
            </div>
          </div>
        </div>

        {/* 3. The Vaccine Controversy */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#be185d] font-bold mb-6 text-2xl border-b-2 border-[#be185d] pb-2">
            3. The Vaccine Controversy & The Data
          </h2>
          
          <div className="bg-[#fff0f0] p-5 rounded-md border-l-4 border-[#be185d] shadow-sm">
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Because autism involves complex immune and metabolic issues, the biomedical space experienced a period of intense public controversy regarding environmental triggers—most notably, vaccines.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              In the late 2000s, figures like celebrity Jenny McCarthy and prominent DAN! doctors such as Dr. Jerry Kartzinel and Dr. Kenneth Bock heavily promoted the theory that vaccines were the environmental trigger for autism in immune-vulnerable children. Through widely publicized books, they advocated for alternative or delayed vaccine schedules.<sup>4, 5</sup>
            </p>
            <p className="text-sm text-slate-700 leading-relaxed font-bold mb-4">
              However, the vaccine-autism theory has been definitively and repeatedly disproven by massive, global epidemiological data. 
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              A 2014 meta-analysis encompassing over 1.25 million children confirmed there is zero relationship between vaccination and autism.<sup>6</sup> Similarly, a landmark Danish cohort study tracking over 537,000 children proved the MMR vaccine does not increase the risk of autism, even in children with other vulnerability factors.<sup>7</sup>
            </p>
            <p className="text-sm text-slate-700 leading-relaxed font-bold">
              While the early biomedical era brought unprecedented attention to the physical suffering of autistic children, the heavy promotion of this false trigger alienated mainstream medicine from legitimate gut-brain research for years and caused lasting damage to global public health.
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
        
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>McCarthy, J., & Kartzinel, J. (2009). <i>Healing and Preventing Autism: A Complete Guide</i>. Dutton Adult.</li>
            <li>Bock, K., & Stauth, C. (2007). <i>Healing the New Childhood Epidemics: Autism, ADHD, Asthma, and Allergies</i>. Ballantine Books.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}