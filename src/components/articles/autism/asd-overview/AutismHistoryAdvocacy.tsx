import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface AutismHistoryAdvocacyProps {
  setCurrentArticle?: (article: string) => void;
}

export function AutismHistoryAdvocacy({ setCurrentArticle }: AutismHistoryAdvocacyProps) {
  
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
          History: Cognition & Self-Advocacy
        </h1>
        <BackButton />
      </div>

      <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
        
        {/* Intro Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm">
          <p className="text-slate-700 leading-relaxed text-sm md:text-base max-w-4xl mx-auto text-center">
            For much of history, clinical research focused exclusively on deficits—what autistic people could not do. The researchers and advocates below revolutionized the field by exploring how the autistic brain uniquely processes the world, and by insisting that autistic individuals have a guiding voice in their own care.
          </p>
        </div>

        {/* 1. Cognitive Models of Strength */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            1. Cognitive Models: Identifying Strengths
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Dr. Laurent Mottron</h3>
              <p className="text-sm text-slate-700 space-y-2 leading-relaxed">
                Dr. Mottron, a psychiatrist and researcher at the University of Montreal, developed the <strong>Enhanced Perceptual Functioning (EPF)</strong> model.<sup>1</sup> Instead of framing sensory sensitivities simply as a "deficit," EPF demonstrates that autistic brains are highly specialized to process local, detail-oriented sensory information at superior levels. His work fundamentally proved that autistic intelligence operates differently, not defectively.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Dr. Simon Baron-Cohen</h3>
              <p className="text-sm text-slate-700 space-y-2 leading-relaxed">
                Director of the Autism Research Centre at Cambridge, Dr. Baron-Cohen advanced several major cognitive theories. While his "Mindblindness" theory focused on deficits in neurotypical social expectations, his <strong>Empathizing-Systemizing (E-S) Theory</strong> highlighted immense autistic strengths.<sup>2</sup> He showed that many autistic individuals possess an extraordinary, innate drive to analyze systems, recognize complex patterns, and understand rule-based mechanics.
              </p>
            </div>
          </div>
        </div>

        {/* 2. The Self-Advocacy Revolution */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            2. The Self-Advocacy Revolution
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1 bg-[#fff0f0] p-5 rounded-md border-l-4 border-[#be185d] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Jim Sinclair & "Don't Mourn For Us"</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                In the early 1990s, the medical and parental narrative surrounding autism was overwhelmingly one of tragedy, grief, and "curing" the child. Jim Sinclair, an early autistic self-advocate, co-founded the Autism Network International (ANI) and fundamentally challenged this narrative.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                In 1993, Sinclair presented the seminal essay <i>"Don't Mourn For Us."</i><sup>3</sup> Addressed directly to parents, the piece argued that grieving an autism diagnosis is actively harmful to the child. Sinclair established the foundation of the neurodiversity movement by insisting that autism is inextricably linked to a person's identity and cannot be separated from who they are.
              </p>
            </div>
          </div>
        </div>

        {/* 3. The Double Empathy Problem */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            3. Redefining Communication
          </h2>
          
          <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Dr. Damian Milton</h3>
            <p className="text-sm text-slate-700 space-y-2 leading-relaxed mb-4">
              For decades, clinical criteria stated that autistic people lacked social empathy. In 2012, autistic sociologist Dr. Damian Milton introduced the <strong>Double Empathy Problem</strong>.<sup>4</sup> 
            </p>
            <p className="text-sm text-slate-700 space-y-2 leading-relaxed">
              His theory, now heavily supported by clinical data, demonstrated that communication breakdowns between autistic and neurotypical people are a two-way street. Autistic people do not lack empathy; rather, two radically different neurotypes simply struggle to naturally understand each other's social cues and experiences. This shifted the burden of "poor communication" away from solely being an autistic deficit.
            </p>
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
            <p>1. Mottron, L., et al. (2006). Enhanced perceptual functioning in autism: an update, and eight principles of autistic perception. <i>Journal of Autism and Developmental Disorders</i>, 36(1), 27-43.</p>
            <p>2. Baron-Cohen, S. (2009). Autism: the empathizing-systemizing (E-S) theory. <i>Annals of the New York Academy of Sciences</i>, 1156, 68-80.</p>
            <p>3. Sinclair, J. (1993). Don't mourn for us. <i>Our Voice</i>, 1(3).</p>
            <p>4. Milton, D. E. (2012). On the ontological status of autism: the 'double empathy problem'. <i>Disability & Society</i>, 27(6), 883-887.</p>
          </div>
        </div>
      </div>
    </article>
  );
}