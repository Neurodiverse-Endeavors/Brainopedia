interface BiomedicalContentProps {
  setCurrentArticle?: (article: string) => void;
}

export function BiomedicalContent({ setCurrentArticle }: BiomedicalContentProps) {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500 font-spartan">
      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b-2 border-[#0c264d] pb-2">
          Biomedical Approaches & The Gut-Brain Axis
        </h2>
        <p className="text-sm text-gray-700 mb-6 leading-relaxed">
          The biomedical movement approaches autism as a whole-body, systemic condition rather than a strictly neurological one. Select a topic below to explore the history, the gut-brain connection, and a breakdown of which interventions are helpful versus those that are unsafe.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Origins & Practitioners Card */}
          <div className="bg-white p-5 rounded-lg border-l-4 border-[#0c264d] shadow-sm flex flex-col h-full">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Origins & Practitioners</h3>
            <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 flex-grow mb-4">
              <li><strong>The Early Movement:</strong> The foundational history of the biomedical approach.</li>
              <li><strong>Systems Biology:</strong> Viewing autism as a whole-body, systemic condition rather than purely neurological.</li>
              <li><strong>Metabolics & Immunology:</strong> The role of mitochondrial function and oxidative stress.</li>
              <li><strong>Integrative Care:</strong> The modern shift toward evidence-based medical and nutritional support.</li>
            </ul>
            {<button 
              onClick={() => setCurrentArticle?.('autism-biomedical-history')}
              className="mt-auto px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold text-center w-full self-start"
            >
              Read more →
            </button>}
          </div>

          {/* Gut-Brain & Diets Card */}
          <div className="bg-white p-5 rounded-lg border-l-4 border-[#2abcd4] shadow-sm flex flex-col h-full">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gut-Brain & Diets</h3>
            <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 flex-grow mb-4">
              <li><strong>The Microbiome:</strong> Understanding dysbiosis, overgrowth, and targeted probiotics.</li>
              <li><strong>Intestinal Permeability:</strong> How systemic inflammation crosses the blood-brain barrier.</li>
              <li><strong>Specialized Diets:</strong> Navigating GFCF, GAPS, and targeted elimination protocols.</li>
              <li><strong>Hidden Pain:</strong> How undiagnosed GI conditions actively drive behavioral dysregulation.</li>
            </ul>
            {<button 
              onClick={() => setCurrentArticle?.('autism-biomedical-gut')}
              className="mt-auto px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold text-center w-full self-start"
            >
              Read more →
            </button>}
          </div>
          
          {/* Evidence Tiers Card */}
          <div className="bg-white p-5 rounded-lg border-l-4 border-[#ffd166] shadow-sm flex flex-col h-full">
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Intervention Tiers</h3>
            <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 flex-grow mb-4">
              <li><strong>Helpful & Targeted:</strong> Treating verified deficiencies, GI pain, and metabolic needs.</li>
              <li><strong>The "Gray Area":</strong> Mixed-evidence therapies like fecal transplants and high-dose vitamins.</li>
              <li><strong>Dangerous & Disproven:</strong> Unsafe, highly risky protocols explicitly warned against by medical boards.</li>
            </ul>
            {<button 
              onClick={() => setCurrentArticle?.('autism-biomedical-tiers')}
              className="mt-auto px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold text-center w-full self-start"
            >
              Read more →
            </button>}
          </div>

        </div>
      </div>
    </div>
  );
}