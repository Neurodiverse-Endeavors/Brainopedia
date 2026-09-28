import { ImageWithFallback } from "../../../figma/ImageWithFallback";

interface SafetyContentProps {
  setCurrentArticle?: (article: string) => void;
}

export function SafetyContent({ setCurrentArticle }: SafetyContentProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Autism Safety: Across the Lifespan</h2>
        
        <p className="mb-6">
         Safety matters to everyone, but the path to feeling and staying safe can look profoundly different on the spectrum. 
         For autistic individuals and their care teams, maintaining safety often means having ongoing, proactive conversations 
         about how to navigate spaces and social expectations that weren't designed with neurodivergence in mind. Because 
          autism affects communication, sensory processing, and social understanding, the types of risks and 
          dangers an individual faces will shift and evolve from childhood through adulthood. 
        </p>

{/* --- CENTERED PRISM VIDEO --- */} 
        <div className="text-center w-full mb-10 mt-6"> 
          <div className="mx-auto w-full max-w-2xl px-4"> 
            <div className="rounded-lg shadow-md overflow-hidden bg-white">
              <video 
                src="/images/autism/autism-support-safetytab-prism.mp4" 
                poster="/images/autism/autism-support-safetytab-prism.webp"
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto block"
                aria-label="Autism Safety Prism diagram showing risks across childhood, adolescence, and adulthood"
              />
            </div>
          </div> 
        </div>

        {/* --- CHILDHOOD DANGERS --- */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8 border-l-4 border-[#2abcd4]">
          <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Childhood Dangers</h3>
          <p className="text-sm mb-4">
            In early childhood, safety protocols heavily rely on caregivers securing the environment and maintaining high vigilance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm border-t-2 border-[#2abcd4]">
              <h4 className="font-bold text-[#0c264d] mb-2">Household & Outdoors</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Securing doors and windows</li>
                <li>• Water safety and drowning risks</li>
                <li>• Sensory-seeking environmental hazards</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm border-t-2 border-[#2abcd4]">
              <h4 className="font-bold text-[#0c264d] mb-2">Wandering & Elopement</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Risk of abduction or getting lost</li>
                <li>• ID bracelets and tracking devices</li>
                <li>• Alerting local first responders</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- ADOLESCENT RISKS --- */}
        <div className="bg-[#fffbf0] p-6 rounded-lg mb-8 border-l-4 border-[#ffd166]">
          <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Adolescent Risks</h3>
          <p className="text-sm mb-4">
            As independence grows, safety shifts toward teaching the autistic adolescent how to navigate complex social spaces, both online and offline.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm border-t-2 border-[#ffd166]">
              <h4 className="font-bold text-[#0c264d] mb-2">Social & Digital</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Navigating bullying and peer pressure</li>
                <li>• Internet and social media safety</li>
                <li>• Recognizing predatory behavior online</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm border-t-2 border-[#ffd166]">
              <h4 className="font-bold text-[#0c264d] mb-2">Life Transitions</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Sexual health and safe dating</li>
                <li>• Driver's education and sensory processing</li>
                <li>• Interacting with law enforcement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- ADULTHOOD CONCERNS --- */}
        <div className="bg-slate-50 p-6 rounded-lg mb-8 border-l-4 border-[#0c264d]">
          <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Adulthood Concerns</h3>
          <p className="text-sm mb-4">
            Adult safety focuses on sustainable independence, legal/financial protection, and maintaining long-term health.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm border-t-2 border-[#0c264d]">
              <h4 className="font-bold text-[#0c264d] mb-2">Independence & Finance</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Independent living skills and home safety</li>
                <li>• Workplace rights and accommodations</li>
                <li>• Protection from financial scams and fraud</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm border-t-2 border-[#0c264d]">
              <h4 className="font-bold text-[#0c264d] mb-2">Health & Relationships</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Self-advocacy in medical settings</li>
                <li>• Independent medication management</li>
                <li>• Navigating complex adult relationships</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
        {/* --- 2nd CENTERED PRISM GRAPHIC --- */} 
        <div className="text-center w-full mb-10 mt-6"> 
          <div className="mx-auto w-64 rounded-lg shadow-md overflow-hidden"> 
            <ImageWithFallback 
              src="/images/autism/autism-support-safetytab-3gens.webp" 
              alt="abstract painting signifyingchildhood, adolescence, and adulthood"
            /> 
          </div> 
        </div>

      {/* --- BOTTOM BACK BUTTON --- */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-normal text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan whitespace-nowrap shrink-0"
        >
          <span className="text-lg">←</span>All About Autism
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Autism Society. Safety in the Community.</li>
            <li>National Autism Association. Autism & Wandering.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}