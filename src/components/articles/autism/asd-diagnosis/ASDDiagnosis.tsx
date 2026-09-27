import { useState } from 'react'; 
import { GeneralProcess } from './GeneralProcess';
import { ChildDiagnosis } from './ChildDiagnosis';
import { AdultDiagnosis } from './AdultDiagnosis';
import { WhoCanDiagnose } from './WhoCanDiagnose';
import { AcrossLifespan } from './AcrossLifespan';
import { ChallengesDisparities } from './ChallengesDisparities';
import { AfterDiagnosis } from './AfterDiagnosis';
import { WhatIsAuDHD } from './WhatIsAuDHD';

interface ASDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function ASDDiagnosis({ setCurrentArticle, initialTab }: ASDDiagnosisProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'general');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const tabs = [
    { id: 'general', label: 'General Process' },
    { id: 'child', label: 'Child Diagnosis' },
    { id: 'adult', label: 'Adult Diagnosis' },
    { id: 'professionals', label: 'Who Can Diagnose' },
    { id: 'lifespan', label: 'Across the Lifespan' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'after', label: 'After Diagnosis' },
    { id: 'audhd', label: 'What is AuDHD?' }
  ];

  return (
    <article className="max-w-6xl mx-auto">
      
      {/* Title and Button Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b-2 border-[#0c264d] pb-2 mt-4">
        <h1 className="text-3xl text-[#0c264d] font-spartan">
          Autism: Testing & Diagnosing
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0"
        >
          <span className="text-xl">←</span>
          All About Autism
        </button>
      </div>

      {/* --- 8-TAB NAVIGATION GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-4 py-3 rounded-lg text-sm transition-colors font-normal shadow-sm ${
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
        {activeTab === 'general' && (
          <GeneralProcess setCurrentArticle={setCurrentArticle} />
        )}
        
        {activeTab === 'child' && (
          <ChildDiagnosis setCurrentArticle={setCurrentArticle} />
        )}
        
        {activeTab === 'adult' && (
          <AdultDiagnosis setCurrentArticle={setCurrentArticle} />
        )}
        
        {activeTab === 'professionals' && (
          <WhoCanDiagnose setCurrentArticle={setCurrentArticle} />
        )}
        
        {activeTab === 'lifespan' && (
          <AcrossLifespan setCurrentArticle={setCurrentArticle} />
        )}
        
        {activeTab === 'challenges' && (
          <ChallengesDisparities setCurrentArticle={setCurrentArticle} />
        )}
        
        {activeTab === 'after' && (
          <AfterDiagnosis setCurrentArticle={setCurrentArticle} />
        )}
        
        {activeTab === 'audhd' && (
          <WhatIsAuDHD setCurrentArticle={setCurrentArticle} />
        )}
      </div>
    </article>
  );
}