interface ABATherapyProps {
  setCurrentArticle?: (article: string) => void;
}

export function ABATherapy({ setCurrentArticle }: ABATherapyProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-fadeIn">
      
      {/* Header with Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-[#0c264d] text-3xl font-bold">Applied Behavior Analysis (ABA)</h1>
        
        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shrink-0"
        >
          <span className="text-xl">←</span>
          Back to Therapies
        </button>
      </div>

      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 mb-8">
        <p className="text-base text-gray-700 leading-relaxed">
          ABA is a behavior-focused therapy that uses reinforcement to teach skills. While it is widely used, it is important to understand both its goals and the ongoing community dialogue regarding its implementation.<sup>1</sup>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-5 rounded-lg border-l-4 border-[#0c264d] shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-3">Key Concepts</h3>
          <ul className="text-sm space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#0c264d] mr-2 mt-0.5 text-[10px]">◆</span>
              <span><strong>Positive Reinforcement:</strong> Rewarding desired behaviors to encourage repetition.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0c264d] mr-2 mt-0.5 text-[10px]">◆</span>
              <span><strong>Task Analysis:</strong> Breaking complex skills into tiny, achievable steps.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0c264d] mr-2 mt-0.5 text-[10px]">◆</span>
              <span><strong>Data-Driven:</strong> Constant measurement of progress to adjust the plan.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-[#fffbeb] p-5 rounded-lg border-l-4 border-[#d97706] shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-3">Community Perspective</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Modern advocates emphasize that ABA should never be used to "mask" autistic traits or suppress harmless stimming.<sup>2</sup> The focus should always be on the individual's safety, autonomy, and chosen goals.
          </p>
        </div>
      </div>

  <div className="grid md:grid-cols-2 gap-5">
          
          {/* PRT */}
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20 shadow-sm flex flex-col h-full">
            <h4 className="font-bold text-[#0c264d] mb-2 border-b border-[#0A9DC4]/20 pb-1 text-sm uppercase tracking-wider">
              Pivotal Response Treatment (PRT)
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed mb-4 flex-grow">
              Rather than targeting individual, isolated behaviors, PRT focuses on "pivotal" areas of a child's development—such as motivation, responding to multiple cues, and self-management. It uses natural reinforcers directly tied to the task (e.g., if a child asks for a car, they are rewarded with the car, not a piece of candy).<sup>4</sup>
            </p>
            <button 
              onClick={() => setCurrentArticle?.('autism-aba-prt')}
              className="px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold text-xs w-fit flex items-center gap-1"
            >
              Read more →
            </button>
          </div>

          {/* ESDM */}
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20 shadow-sm flex flex-col h-full">
            <h4 className="font-bold text-[#0c264d] mb-2 border-b border-[#0A9DC4]/20 pb-1 text-sm uppercase tracking-wider">
              Early Start Denver Model (ESDM)
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed mb-4 flex-grow">
              A comprehensive early intervention program designed specifically for toddlers and young children. ESDM heavily utilizes naturalistic, play-based ABA principles combined with relationship-based developmental frameworks to foster joint attention and language.<sup>5</sup>
            </p>
            <button 
              onClick={() => setCurrentArticle?.('autism-aba-esdm')}
              className="px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold text-xs w-fit flex items-center gap-1"
            >
              Read more →
            </button>
          </div>

          {/* NET */}
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20 shadow-sm flex flex-col h-full">
            <h4 className="font-bold text-[#0c264d] mb-2 border-b border-[#0A9DC4]/20 pb-1 text-sm uppercase tracking-wider">
              Natural Environment Teaching (NET)
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed mb-4 flex-grow">
              A core methodology where therapists teach skills during natural play and everyday routines rather than at a sterile desk. By teaching a skill exactly where it will be used (e.g., learning to request a snack in the kitchen), NET significantly improves the generalization of that skill.
            </p>
            <button 
              onClick={() => setCurrentArticle?.('autism-aba-net')}
              className="px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold text-xs w-fit flex items-center gap-1"
            >
              Read more →
            </button>
          </div>

          {/* IT */}
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20 shadow-sm flex flex-col h-full">
            <h4 className="font-bold text-[#0c264d] mb-2 border-b border-[#0A9DC4]/20 pb-1 text-sm uppercase tracking-wider">
              Incidental Teaching (IT)
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed mb-4 flex-grow">
              A child-led technique where the practitioner sets up an engaging environment and waits for the individual to initiate an interaction about an object of interest. The practitioner then uses that natural, highly motivated moment to prompt a skill, such as expressive communication.
            </p>
            <button 
              onClick={() => setCurrentArticle?.('autism-aba-it')}
              className="px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold text-xs w-fit flex items-center gap-1"
            >
              Read more →
            </button>
          </div>

        </div>

      {/* --- BOTTOM BACK BUTTON --- */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-normal text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan whitespace-nowrap shrink-0"
        >
          <span className="text-lg">←</span>Back to Therapies
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Lovaas, O. I. (1987). Behavioral treatment and normal educational and intellectual functioning in young autistic children. <i>Journal of Consulting and Clinical Psychology</i>.</p>
            <p>2. Kapp, S. K., et al. (2019). 'People should be allowed to do what they like': Autistic adults' views and experiences of stimming. <i>Autism</i>.</p>
            <p>3. Schreibman, L., et al. (2015). Naturalistic Developmental Behavioral Interventions: Empirically Validated Treatments for Autism Spectrum Disorder. <i>Journal of Autism and Developmental Disorders</i>.</p>
            <p>4. Koegel, R. L., & Koegel, L. K. (2006). <i>Pivotal Response Treatments for Autism: Communication, Social, & Academic Development</i>. Brookes Publishing.</p>
            <p>5. Dawson, G., et al. (2010). Randomized, Controlled Trial of an Intervention for Toddlers with Autism: The Early Start Denver Model. <i>Pediatrics</i>.</p>
          </div>
        </div>
      </div>
    </article>
  );
}