import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleSPDProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleSPD({ setCurrentArticle }: ArticleSPDProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('spd-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('spd-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('spd-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('spd-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('spd-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with SPD',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('spd-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Sensory Processing Disorder (SPD)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Sensory Processing Disorder (SPD)</strong> is a neurodevelopmental condition where the 
            brain has difficulty receiving, organizing, and responding to sensory information from the body 
            and environment. Individuals with SPD experience the world with heightened or reduced sensitivity, 
            creating a unique sensory neurotype that shapes how they interact with their surroundings.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

       {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Sensory Processing Disorder"
            image="/images/spd/spd-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'SPD, Sensory Integration Dysfunction' },
              { label: 'Specialty', value: 'Occupational Therapy, Neurology' },
              { label: 'Symptoms', value: 'Altered sensory responses, sensitivity variations' },
              { label: 'Related to', value: 'Often co-occurs with autism, ADHD' },
              { label: 'Frequency', value: 'Approximately 5% of children' },
              { label: 'Sensory systems', value: 'All 8 sensory systems can be affected' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/spd/spd-overview-intro.webp"
            alt="Overview of SPD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Research suggests that approximately 1 in 20 children experience sensory processing challenges significant enough to impact their daily functioning.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> The condition affects how the nervous system detects, modulates, and integrates input across all eight sensory systems, essentially changing how the brain's filters process the constant stream of environmental information.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('spd-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CHARACTERISTICS */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/spd/spd-symptoms-intro.webp"
            alt="Symptoms of SPD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            SPD typically manifests in three primary patterns: sensory over-responsivity (hypersensitivity to stimuli like textures or sounds), sensory under-responsivity (requiring intense input to register sensation), and sensory discrimination challenges. These processing differences can significantly impact daily functioning across self-care routines, sleep patterns, social interactions, and emotional regulation.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('spd-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CAUSES */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/spd/spd-causes-intro.webp"
            alt="Causes of SPD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Brain imaging research has revealed that SPD stems from distinct neurological differences in white matter microstructure and altered connectivity patterns within the brain's sensory pathways.<sup className="text-[#10b981] font-bold ml-0.5">2</sup> While the exact developmental mechanisms are still being studied, it is recognized as a fundamental difference in nervous system wiring that frequently runs in families.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('spd-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: DIAGNOSIS */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/spd/spd-diagnosis-intro.webp"
            alt="Diagnosing SPD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Diagnosis requires a comprehensive evaluation by an occupational therapist specializing in sensory integration, utilizing standardized assessments, detailed sensory histories, and clinical observations. This multidisciplinary testing identifies specific patterns of responsivity across all eight sensory systems and explicitly evaluates how these processing differences impact the individual's daily life.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('spd-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: SUPPORT */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/spd/spd-support-intro.webp"
            alt="Support for SPD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Effective management centers on specialized occupational therapy to help the nervous system process input more effectively and the implementation of a personalized "sensory diet" of regulating activities. Individuals also benefit heavily from environmental modifications, such as noise-canceling headphones or weighted blankets, combined with learning strong self-advocacy skills to communicate their sensory boundaries.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('spd-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/spd/spd-living-intro.webp"
            alt="Living with SPD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with SPD</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            With self-understanding and appropriate environmental accommodations, individuals with SPD develop effective strategies for navigating sensory challenges and lead highly successful lives. Long-term thriving involves understanding one's unique sensory profile, proactively managing visually or acoustically demanding environments, and recognizing sensory differences as a valid neurological experience rather than a behavioral issue.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('spd-living');
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
            <p>1. Ahn, R. R., Miller, L. J., Milberger, S., & McIntosh, D. N. (2004). Prevalence of parents' perceptions of sensory processing disorders among kindergarten children. <i>American Journal of Occupational Therapy</i>.</p>
            <p>2. Owen, J. P., Marco, E. J., Desai, S., et al. (2013). Abnormal white matter microstructure in children with sensory processing disorders. <i>NeuroImage: Clinical</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Ayres, A. J. (1972). <i>Sensory integration and learning disorders</i>. Western Psychological Services.</li>
            <li>Kranowitz, C. S. (2005). <i>The out-of-sync child: Recognizing and coping with sensory processing disorder</i> (Rev. ed.). Penguin.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}