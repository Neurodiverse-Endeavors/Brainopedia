import { useState } from 'react';

// --- ACTUAL IMPORTS ---
import { EnvironmentalFactors } from './EnvironmentalFactors';
import { BrainDevelopment } from './BrainDevelopment';
import { MythsMisconceptions } from './MythsMisconceptions';
import { GeneticsHeredity } from './GeneticsHeredity';
import { CurrentResearch } from './CurrentResearch';

interface ASDCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function ASDCauses({ setCurrentArticle, initialTab }: ASDCausesProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'environmental');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const tabs = [
    { id: 'environmental', label: 'Environmental Factors' },
    { id: 'brain', label: 'Brain Development' },
    { id: 'myths', label: 'Myths & Misconceptions' },
    { id: 'genetics', label: 'Genetics & Heredity' },
    { id: 'current-research', label: 'Current Research' }
  ];

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
      
      {/* Title and Button Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b-2 border-[#0c264d] pb-2 mt-4">
        <h1 className="text-3xl text-[#0c264d] font-spartan">
          Autism: Causes & Origins
        </h1>
        <BackButton />
      </div>

      {/* --- 5-TAB NAVIGATION GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-4 py-4 rounded-lg text-sm transition-colors font-normal shadow-sm ${
              activeTab === tab.id
                ? 'bg-[#0A9DC4] text-white shadow-md' 
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="space-y-8 min-h-[400px]">
        {activeTab === 'environmental' && (
          <EnvironmentalFactors setCurrentArticle={setCurrentArticle} />
        )}
        
        {activeTab === 'brain' && (
          <BrainDevelopment setCurrentArticle={setCurrentArticle} />
        )}
        
        {activeTab === 'myths' && (
          <MythsMisconceptions setCurrentArticle={setCurrentArticle} />
        )}
        
        {activeTab === 'genetics' && (
          <GeneticsHeredity setCurrentArticle={setCurrentArticle} />
        )}
        
        {activeTab === 'current-research' && (
          <CurrentResearch setCurrentArticle={setCurrentArticle} />
        )}
      </div>
    </article>
  );
}
