import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleSynesthesiaProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleSynesthesia({ setCurrentArticle }: ArticleSynesthesiaProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('synesthesia-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('synesthesia-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('synesthesia-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('synesthesia-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('synesthesia-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Synesthesia',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('synesthesia-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Synesthesia
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Synesthesia</strong> is a neurological phenomenon in which stimulation of one sensory or cognitive 
            pathway leads to involuntary experiences in a second sensory or cognitive pathway. For example, a person 
            with synesthesia might see colors when hearing music, or taste flavors when reading words.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

       {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Synesthesia"
            image="/images/synesthesia/synesthesia-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'Synaesthesia' },
              { label: 'Specialty', value: 'Neurology, Psychology' },
              { label: 'Symptoms', value: 'Involuntary joining of sensory experiences' },
              { label: 'Usual onset', value: 'Present from birth, often recognized later' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: '2-4% of population (estimated)' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">

          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
              <ImageWithFallback 
            src="/images/synesthesia/synesthesia-overview-intro.webp"
            alt="Overview of Synesthesia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />      
          <p className="mb-4 text-slate-700 leading-relaxed">
            Synesthesia is a lifelong neurological phenomenon where stimulation of one sensory or cognitive pathway leads to involuntary, automatic experiences in a second pathway. It is estimated to occur in about 2-4% of the population, though this number may be higher since many individuals do not realize their dual-sensory experiences are unusual.<sup className="text-[#10b981] font-bold ml-0.5">1</sup>
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('synesthesia-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CHARACTERISTICS */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">

          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          <ImageWithFallback 
            src="/images/synesthesia/synesthesia-symptoms-intro.webp"
            alt="Symptoms of Synesthesia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />    
          <p className="mb-4 text-slate-700 leading-relaxed">
            The condition manifests in numerous forms, such as grapheme-color synesthesia where letters appear inherently colored, or chromesthesia where sounds evoke vivid visual colors. These unique associations remain highly consistent and stable throughout a person's entire life, occurring automatically without any conscious effort.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('synesthesia-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CAUSES */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
 
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          <ImageWithFallback 
            src="/images/synesthesia/synesthesia-causes-intro.webp"
            alt="Causes of Synesthesia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />   
          <p className="mb-4 text-slate-700 leading-relaxed">
            Brain imaging studies reveal that synesthesia results from enhanced structural connectivity and cross-activation between brain regions that are typically separate in neurotypical individuals.<sup className="text-[#10b981] font-bold ml-0.5">2</sup> While the exact genetic markers are still being mapped, the trait has a strong familial link and reflects a fundamental difference in how neural pathways prune and develop during infancy.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('synesthesia-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: DIAGNOSIS */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">

          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          <ImageWithFallback 
            src="/images/synesthesia/synesthesia-diagnosis-intro.webp"
            alt="Diagnosing Synesthesia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />       
          <p className="mb-4 text-slate-700 leading-relaxed">
            Because it relies heavily on internal perception, diagnosis involves detailed clinical questionnaires and rigorous consistency testing to verify that a person's sensory associations remain perfectly stable over time. This specialized assessment easily distinguishes true synesthesia from active imagination, hallucinations, or other sensory processing differences.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('synesthesia-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: SUPPORT */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">

          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
           <ImageWithFallback 
            src="/images/synesthesia/synesthesia-support-intro.webp"
            alt="Support for Synesthesia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />         
          <p className="mb-4 text-slate-700 leading-relaxed">
            Synesthesia is not considered a disorder requiring treatment, but rather a unique perceptual gift that often enhances memory, creativity, and problem-solving abilities. Support focuses primarily on education, helping individuals manage occasional sensory overload in highly stimulating environments, and connecting them with broader synesthete communities.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('synesthesia-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">

          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Synesthesia</h2>
          <ImageWithFallback 
            src="/images/synesthesia/synesthesia-living-intro.webp"
            alt="Living with Synesthesia"
            className="w-64 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />     
          <p className="mb-4 text-slate-700 leading-relaxed">
            Many individuals with synesthesia leverage their rich, multi-sensory perspective to excel in creative fields, the arts, and mathematics. Thriving involves embracing these enhanced perceptual experiences as a core part of their identity while advocating for quiet spaces when intersecting sensory inputs become too overwhelming.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('synesthesia-living');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both"></div>
      
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Simner, J., Mulvenna, C., Sagiv, N., et al. (2006). Synaesthesia: The prevalence of atypical cross-modal experiences. <i>Perception</i>.</p>
            <p>2. Rouw, R., & Scholte, H. S. (2007). Increased structural connectivity in grapheme-color synesthesia. <i>Nature Neuroscience</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Cytowic, R. E., & Eagleman, D. M. (2009). <i>Wednesday is indigo blue: Discovering the brain of synesthesia</i>. MIT Press.</li>
            <li>Ward, J. (2013). Synesthesia. <i>Annual Review of Psychology</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}