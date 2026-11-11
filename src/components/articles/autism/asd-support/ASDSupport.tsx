import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';


// Updated paths based on your articleMap directory structure
import { OverviewContent } from './OverviewContent';
import { EarlyInterventionContent } from './EarlyInterventionContent';
import { TherapiesContent } from './TherapiesContent';
import { EducationalContent } from './EducationalContent';
import { MedicalContent } from './MedicalContent';
import { EnvironmentalContent } from './EnvironmentalContent';
import { FamilyPrinciplesContent } from './FamilyPrinciplesContent';
import { SafetyContent } from './SafetyContent'; // <-- New Safety Import!

interface ASDSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function ASDSupport({ setCurrentArticle, initialTab }: ASDSupportProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'overview';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
    
    // Quietly clean up the URL bar if it is stuck on the backdoor route
    if (window.location.pathname.includes('autism-support-therapies')) {
      window.history.replaceState(null, '', '/autism-support');
    }
  };

  // --- THE FIX ---
  // This forces React to change the tab if the router sends a new instruction
  useEffect(() => {
    if (initialTab) {
      handleTabChange(initialTab);
    }
  }, [initialTab]);
  // ---------------

  const tabs = [
    { id: 'overview', label: 'Overview & Philosophy' },
    { id: 'early-intervention', label: 'Early Intervention' },
    { id: 'therapies', label: 'Therapies & Treatment' },
    { id: 'educational', label: 'Educational Support' },
    { id: 'medical', label: 'Medical Management' },
    { id: 'environmental', label: 'Environmental Support' },
    { id: 'family', label: 'Family & Principles' },
    { id: 'safety', label: 'Safety Across Lifespan' }, // <-- New Safety Tab!
    { id: 'biomedical', label: 'Biomedical & Alternative' } // <-- New Biomedical Hub!
  ];

  // Reusable button to ensure the key 'autism' is consistent
  const BackButton = () => (
    <button 
      onClick={() => setCurrentArticle?.('autism')}
      className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0"
    >
      <span className="text-xl">←</span>
      All About Autism
    </button>
  );

  return (
    <article className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b-2 border-[#0c264d] pb-2 mt-4">
        <h1 className="text-3xl text-[#0c264d] font-spartan">
          Autism: Support & Management
        </h1>
        <BackButton />
      </div>

      {/* --- TAB NAVIGATION --- */}
      {/* Kept your original md:grid-cols-3! */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-4 py-3 rounded-lg text-sm transition-colors font-normal shadow-sm ${
              activeTab === tab.id
                ? 'bg-[#0A9DC4] text-white shadow-md' // UPDATED to standard Dark Cyan
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="space-y-8 min-h-[400px]">
        {activeTab === 'overview' && (
          <OverviewContent setCurrentArticle={setCurrentArticle} />
        )}
        
        {activeTab === 'early-intervention' && (
          <EarlyInterventionContent setCurrentArticle={setCurrentArticle} />
        )}
        
        {activeTab === 'therapies' && (
          <TherapiesContent setCurrentArticle={setCurrentArticle} />
        )}
        
        {activeTab === 'educational' && (
          <EducationalContent setCurrentArticle={setCurrentArticle} />
        )}
        
        {activeTab === 'medical' && (
          <MedicalContent setCurrentArticle={setCurrentArticle} />
        )}
        
        {activeTab === 'environmental' && (
          <EnvironmentalContent setCurrentArticle={setCurrentArticle} />
        )}
        
        {activeTab === 'family' && (
          <FamilyPrinciplesContent setCurrentArticle={setCurrentArticle} />
        )}
        
        {activeTab === 'safety' && (
          <SafetyContent setCurrentArticle={setCurrentArticle} />
        )}

        {/* ========================================== */}
        {/* TAB 9: BIOMEDICAL & ALTERNATIVE            */}
        {/* ========================================== */}
        {activeTab === 'biomedical' && (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            
            <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm">
              <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b-2 border-[#0c264d] pb-2">
                Biomedical Approaches & The Gut-Brain Axis
              </h2>
              <p className="text-sm text-gray-700 mb-6">
                The biomedical movement approaches autism as a whole-body, systemic condition rather than a strictly neurological one. Select a topic below to explore the history, the gut-brain connection, and a breakdown of which interventions are helpful versus those that are unsafe.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                
        {/* Origins & Practitioners Card */}
              <div className="bg-white p-5 rounded-lg border-l-4 border-[#0c264d] shadow-sm flex flex-col h-full">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Origins & Practitioners</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 flex-grow mb-4">
                  <li><strong>The Early Movement:</strong> Dr. Bernard Rimland, Dr. Sidney Baker, and the foundational biomedical origins.</li>
                  <li><strong>Systems Biology:</strong> Dr. Martha Herbert's paradigm-shifting work viewing autism as a whole-body, systemic condition.</li>
                  <li><strong>Metabolics & Immunology:</strong> Dr. Richard Frye (mitochondrial research) and Dr. S. Jill James (oxidative stress).</li>
                  <li><strong>Integrative Care:</strong> Dr. Daniel Rossignol and the shift toward evidence-based medical and nutritional support.</li>
                </ul>
                <button 
                  onClick={() => setCurrentArticle?.('autism-biomedical-history')}
                  className="mt-auto px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold text-center w-full self-start"
                >
                  Read more →
                </button>
              </div>

{/* Gut-Brain & Diets Card */}
              <div className="bg-white p-5 rounded-lg border-l-4 border-[#2abcd4] shadow-sm flex flex-col h-full">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gut-Brain & Diets</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 flex-grow mb-4">
                  <li><strong>The Microbiome:</strong> Understanding dysbiosis, bacterial/yeast overgrowth, and the role of targeted probiotics.</li>
                  <li><strong>Intestinal Permeability:</strong> How "leaky gut" and systemic inflammation can cross the blood-brain barrier.</li>
                  <li><strong>Specialized Diets:</strong> Navigating GFCF (Gluten/Casein-Free), GAPS, and elimination protocols for food sensitivities.</li>
                  <li><strong>Hidden Pain & Behavior:</strong> Recognizing how undiagnosed GI conditions (like EoE or reflux) drive behavioral dysregulation.</li>
                </ul>
                <button 
                  onClick={() => setCurrentArticle?.('autism-biomedical-gut')}
                  className="mt-auto px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold text-center w-full self-start"
                >
                  Read more →
                </button>
              </div>
               {/* Evidence Tiers Card */}
              <div className="bg-white p-5 rounded-lg border-l-4 border-[#ffd166] shadow-sm flex flex-col h-full">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Intervention Tiers</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 flex-grow mb-4">
                  <li><strong>Helpful & Targeted:</strong> Treating verified deficiencies, chronic GI pain, sleep disorders, and specific metabolic needs.</li>
                  <li><strong>The "Gray Area":</strong> Experimental or mixed-evidence therapies like Microbiota Transfer Therapy (fecal transplants), methyl-B12 injections, and high-dose vitamin protocols.</li>
                  <li><strong>Dangerous & Disproven:</strong> Unsafe protocols like heavy metal chelation (without actual poisoning), MMS (bleach), and Lupron.</li>
                </ul>
                <button 
                  onClick={() => setCurrentArticle?.('autism-biomedical-tiers')}
                  className="mt-auto px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold text-center w-full self-start"
                >
                  Read more →
                </button>
              </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}