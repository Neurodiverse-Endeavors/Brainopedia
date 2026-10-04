import { useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { CoreSymptoms } from './CoreSymptoms';
import { SocialCommunication } from './SocialCommunication';
import { RepetitiveBehaviors } from './RepetitiveBehaviors';
import { AdditionalCharacteristics } from './AdditionalCharacteristics';
import { StrengthsAbilities } from './StrengthsAbilities';

interface ASDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function ASDSymptoms({ setCurrentArticle, initialTab }: ASDSymptomsProps) {
  // FIX: Default to 'core' so the landing page isn't empty
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'core';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  const handleTabChange = (tabId: string) => {
    handleTabChange(tabId);
  };

  const tabs = [
    { id: 'core', label: 'Core Symptoms' },
    { id: 'social', label: 'Social Communication' },
    { id: 'repetitive', label: 'Restricted/Repetitive Behaviors' },
    { id: 'additional', label: 'Additional Characteristics' },
    { id: 'strengths', label: 'Strengths & Abilities' },
  ];

  return (
    <article className="max-w-6xl mx-auto">
      
      {/* --- PAGE HEADER SECTION --- */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4">
        {/* Explicitly set to font-normal to remove any bolding */}
        <h1 className="text-3xl text-[#0c264d] font-normal font-spartan">
          Autism: Symptoms & Characteristics
        </h1>

        {/* Mobile anti-smush classes applied: whitespace-nowrap and shrink-0 */}
        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-normal text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan whitespace-nowrap shrink-0"
        >
          <span className="text-lg">←</span>All About Autism
        </button>
      </div>

      {/* Tab Navigation: 3-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-4 py-3 rounded-lg font-normal text-sm transition-all duration-200 shadow-sm font-spartan ${
              activeTab === tab.id
                ? 'bg-[#0A9DC4] text-white shadow-md' // UPDATED to standard Dark Cyan
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

{/* How it needs to look (After) */}
<div className="space-y-8 min-h-[400px]">
  {activeTab === 'core' && (
    <CoreSymptoms setCurrentArticle={setCurrentArticle} />
  )}
  
  {activeTab === 'social' && (
    <SocialCommunication setCurrentArticle={setCurrentArticle} />
  )}
  
  {activeTab === 'repetitive' && (
    <RepetitiveBehaviors setCurrentArticle={setCurrentArticle} />
  )}
  
  {activeTab === 'additional' && (
    <AdditionalCharacteristics setCurrentArticle={setCurrentArticle} />
  )}
  
  {activeTab === 'strengths' && (
    <StrengthsAbilities setCurrentArticle={setCurrentArticle} />
  )}
</div>

    </article>
  );
}