import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleVisualProcessingProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleVisualProcessing({ setCurrentArticle }: ArticleVisualProcessingProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('visual-processing-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('visual-processing-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('visual-processing-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('visual-processing-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('visual-processing-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Visual Processing Disorder',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('visual-processing-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Visual Processing Disorder
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Visual Processing Disorder (VPD)</strong> is a neurological condition where the brain has 
            difficulty interpreting and making sense of visual information, despite normal eyesight. The 
            eyes see clearly, but the brain processes what is seen differently—creating a unique visual 
            neurotype that affects how individuals perceive and interact with the visual world.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Visual Processing Disorder"
            image="/images/vpd/vpd-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'Visual perceptual disorder' },
              { label: 'Specialty', value: 'Developmental Optometry, Occupational Therapy' },
              { label: 'Symptoms', value: 'Difficulty interpreting visual information' },
              { label: 'Key distinction', value: 'Not an eyesight problem, but brain processing difference' },
              { label: 'Affects', value: 'Reading, spatial skills, coordination' },
              { label: 'Related to', value: 'Often co-occurs with dyslexia, ADHD, autism' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/vpd/vpd-overview-intro.webp"
            alt="Overview of VPD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Visual processing disorders occur when the brain's visual pathways function differently, affecting learning, reading, spatial navigation, and daily tasks that require visual interpretation. While it often co-occurs with neurodivergent conditions like dyslexia or ADHD, VPD represents a distinct neurotype involving skills like visual discrimination, sequencing, and spatial processing.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('visual-processing-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CHARACTERISTICS */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/vpd/vpd-symptoms-intro.webp"
            alt="Symptoms of VPD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Individuals with visual processing disorder frequently experience challenges with visual discrimination, sequencing, and memory, making it difficult to distinguish similar shapes or remember the order of visual information. These differences often manifest in daily life as slow reading speed despite normal vision, poor hand-eye coordination, difficulty with spatial math, and feeling overwhelmed in visually busy environments.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('visual-processing-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CAUSES */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/vpd/vpd-causes-intro.webp"
            alt="Causes of VPD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Brain imaging studies reveal that visual processing differences stem from distinct neurological activation patterns in the brain's visual pathways rather than problems with eyesight itself.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> Although the exact genetic or developmental origins are not fully understood, it represents a fundamental difference in how the brain interprets, organizes, and uses visual information after the eyes send it to the brain.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('visual-processing-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: DIAGNOSIS */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/vpd/vpd-diagnosis-intro.webp"
            alt="Diagnosing VPD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Diagnosis requires a comprehensive evaluation by qualified professionals, such as developmental optometrists or neuropsychologists, to rule out simple vision problems and distinguish VPD from overlapping learning differences. Assessments utilize standardized visual processing tests alongside functional observations to evaluate specific skills like visual discrimination, visual-motor integration, and spatial processing.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('visual-processing-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: SUPPORT */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/vpd/vpd-support-intro.webp"
            alt="Support for VPD"
            className="w-64 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Effective management combines specialized occupational or vision therapy with crucial environmental modifications, such as reducing visual clutter, using colored overlays, and increasing text spacing. Individuals also benefit significantly from multi-sensory learning approaches, breaking visual information into smaller chunks, and utilizing compensatory technologies like text-to-speech software and digital audiobooks.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('visual-processing-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/vpd/vpd-living-intro.webp"
            alt="Living with VPD"
            className="w-64 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Visual Processing Disorder</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            With appropriate accommodations and self-understanding, individuals with visual processing disorder develop effective strategies for navigating visual challenges and lead highly successful lives. Long-term thriving involves leveraging auditory and verbal strengths, utilizing compensatory technology in visually demanding environments, and mastering self-advocacy in educational and professional settings.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('visual-processing-living');
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
            <p>1. Eden, G. F., VanMeter, J. W., Rumsey, J. M., Maisog, J. M., Woods, R. P., & Zeffiro, T. A. (1996). Abnormal processing of visual motion in dyslexia revealed by functional brain imaging. <i>Nature</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>National Center for Learning Disabilities. (2023). Visual Processing Disorders.</li>
            <li>Schneck, C. M. (2010). Visual perception. In J. Case-Smith & J. C. O'Brien (Eds.), <i>Occupational therapy for children</i> (6th ed.). Mosby.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}