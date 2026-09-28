interface SocialSkillsProps {
  setCurrentArticle?: (article: string) => void;
}

export function SocialSkills({ setCurrentArticle }: SocialSkillsProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-fadeIn">
      
      {/* Header with Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-[#0c264d] text-3xl font-bold">Social Connection & Navigation</h1>
        
        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shrink-0"
        >
          <span className="text-xl">←</span>
          Back to Therapies
        </button>
      </div>

      {/* Intro */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 mb-8">
        <p className="text-base mb-4 text-gray-700 leading-relaxed">
          Traditional social skills therapy for autism often creates a normalization issue by forcing autistic individuals to suppress natural traits and adopt neurotypical behaviors. This approach prioritizes conformity over authentic communication, leading to serious mental health consequences.<sup>1</sup>
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          Support in this area is actively shifting toward social navigation, building meaningful relationships, and understanding social nuances in a way that respects the individual's autonomy.
        </p>
      </div>

      {/* The Problem with Normalization */}
      <div className="bg-white p-5 rounded-md border-l-4 border-red-400 shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">The Problem with Normalization</h3>
        <div className="space-y-4">
          <div className="border-l-2 border-red-200 pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Forced Masking</div>
            <div className="text-sm text-gray-700">Therapy often trains individuals to mimic neurotypical body language, facial expressions, and eye contact, which drains mental energy and causes chronic stress.<sup>2</sup></div>
          </div>
          <div className="border-l-2 border-red-200 pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Suppression of Autistic Traits</div>
            <div className="text-sm text-gray-700">Behaviors like stimming or monotropic focus are treated as deficits to eliminate rather than valid self-regulation methods.</div>
          </div>
          <div className="border-l-2 border-red-200 pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Mental Health Impact</div>
            <div className="text-sm text-gray-700">Trying to appear "indistinguishable from peers" is linked to high rates of anxiety, depression, and autistic burnout.<sup>1</sup></div>
          </div>
        </div>
      </div>

      {/* Shift Toward Neurodiversity-Affirming Approaches */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#10b981] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Shift Toward Neurodiversity-Affirming Approaches</h3>
        <div className="space-y-4">
          <div className="border-l-2 border-[#10b981]/30 pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Mutual Understanding</div>
            <div className="text-sm text-gray-700">Focus shifts from changing the autistic person to educating communication partners about different communication styles.</div>
          </div>
          <div className="border-l-2 border-[#10b981]/30 pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Authentic Connection</div>
            <div className="text-sm text-gray-700">Encourages finding compatible peers and shared-interest communities rather than performing social scripts.</div>
          </div>
          <div className="border-l-2 border-[#10b981]/30 pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Self-Regulation Support</div>
            <div className="text-sm text-gray-700">Prioritizes emotional safety and sensory needs over compliance and quiet hands.</div>
          </div>
        </div>
      </div>

      {/* Support Strategies & Advocacy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#f5f3ff] p-5 rounded-lg border border-purple-100 shadow-sm border-l-4 border-l-[#8b5cf6]">
          <h3 className="font-bold text-[#0c264d] mb-3">Support Strategies</h3>
          <ul className="text-sm space-y-3 text-gray-700">
            <li>• <strong>Social Stories & Scripts:</strong> Tools for preparing for specific social interactions.</li>
            <li>• <strong>Peer-Mediated Support:</strong> Inclusive settings that foster natural connection.</li>
            <li>• <strong>Double Empathy Training:</strong> Helping both neurodivergent and neurotypical people understand each other.<sup>1</sup></li>
          </ul>
        </div>
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm border-l-4 border-l-[#0A9DC4]">
          <h3 className="font-bold text-[#0c264d] mb-3">Identity & Advocacy</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Support should prioritize the individual's comfort and self-advocacy skills, 
            ensuring they have the tools to communicate their boundaries in social settings safely.
          </p>
        </div>
      </div>

      {/* Back Button Bottom */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          Back to Therapies
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
            <p>1. Milton, D. E. (2012). On the ontological status of autism: the 'double empathy problem'. <i>Disability & Society</i>.</p>
            <p>2. Reichow, B., et al. (2012). Social skills groups for people aged 6 to 21 with autism spectrum disorders (ASD). <i>Cochrane Database of Systematic Reviews</i>.</p>
          </div>
        </div>
      </div>
    </article>
  );
}