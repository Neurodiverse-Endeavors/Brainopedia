import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { LifespanContent } from './LifespanContent';
import { DailyLifeContent } from './DailyLifeContent';
import { RelationshipsContent } from './RelationshipsContent';
import { EducationEmploymentContent } from './EducationEmploymentContent';
import { MentalHealthContent } from './MentalHealthContent';
import { IdentityCommunityContent } from './IdentityCommunityContent';

interface ASDLivingProps {
  setCurrentArticle?: (id: string) => void;
  initialTab?: string;
}

export function ASDLiving({ setCurrentArticle, initialTab }: ASDLivingProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'lifespan';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  useEffect(() => {
    if (initialTab) {
      handleTabChange(initialTab);
    }
  }, [initialTab]);

  

  const BackButton = () => (
    <button 
      onClick={() => setCurrentArticle?.('autism')}
      className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0"
    >
      <span className="text-xl">←</span>
      All About Autism
    </button>
  );

  const tabs = [
    { id: 'lifespan', label: 'Across the Lifespan' },
    { id: 'daily-life', label: 'Daily Life & Functioning' },
    { id: 'relationships', label: 'Relationships & Social' },
    { id: 'education-employment', label: 'Education & Employment' },
    { id: 'mental-health', label: 'Mental Health & Wellbeing' },
    { id: 'identity-community', label: 'Identity & Community' }
  ];

  function renderTabContent() {
    switch (activeTab) {
      case 'lifespan': return <LifespanContent setCurrentArticle={setCurrentArticle} />;
      case 'daily-life': return <DailyLifeContent setCurrentArticle={setCurrentArticle} />;
      case 'relationships': return <RelationshipsContent setCurrentArticle={setCurrentArticle} />;
      case 'education-employment': return <EducationEmploymentContent setCurrentArticle={setCurrentArticle} />;
      case 'mental-health': return <MentalHealthContent setCurrentArticle={setCurrentArticle} />;
      case 'identity-community': return <IdentityCommunityContent setCurrentArticle={setCurrentArticle} />;
      default: return <LifespanContent setCurrentArticle={setCurrentArticle} />;
    }
  }

  return (
    <article className="max-w-6xl mx-auto">
      {/* --- PAGE HEADER SECTION --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b-2 border-[#0c264d] pb-2 mt-4">
        <h1 className="text-3xl text-[#0c264d] font-spartan">
          Autism: Daily Living
        </h1>
        <BackButton />
      </div>

      {/* Tab Navigation Grid */}
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

      {/* Content Area */}
      <div className="min-h-[400px]">
        {renderTabContent()}
      </div>
    </article>
  );
}