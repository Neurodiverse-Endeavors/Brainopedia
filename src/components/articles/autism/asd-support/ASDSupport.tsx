import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
  };

  // --- THE FIX ---
  // This forces React to change the tab if the router sends a new instruction
  useEffect(() => {
    if (initialTab) {
      handleTabChange(initialTab);
    }
  }, [initialTab]);
  // ---------------

  const handleTabChange = (tabId: string) => {
    handleTabChange(tabId);
    
    // Quietly clean up the URL bar if it is stuck on the backdoor route
    if (window.location.pathname.includes('autism-support-therapies')) {
      window.history.replaceState(null, '', '/autism-support');
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview & Philosophy' },
    { id: 'early-intervention', label: 'Early Intervention' },
    { id: 'therapies', label: 'Therapies & Treatment' },
    { id: 'educational', label: 'Educational Support' },
    { id: 'medical', label: 'Medical Management' },
    { id: 'environmental', label: 'Environmental Support' },
    { id: 'family', label: 'Family & Principles' },
    { id: 'safety', label: 'Safety Across Lifespan' } // <-- New Safety Tab!
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
      </div>
    </article>
  );
}