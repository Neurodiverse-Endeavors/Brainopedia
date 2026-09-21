import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleDyspraxiaProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleDyspraxia({ setCurrentArticle }: ArticleDyspraxiaProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyspraxia-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyspraxia-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyspraxia-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyspraxia-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyspraxia-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Dyspraxia',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyspraxia-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Dyspraxia (Developmental Coordination Disorder)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Dyspraxia</strong>, also known as <strong>Developmental Coordination Disorder (DCD)</strong>, 
            is a neurological condition that affects physical coordination and movement. Individuals with dyspraxia 
            may appear clumsy or have difficulty with tasks requiring motor planning and coordination, representing a distinct neurotype rather than a lack of intelligence or effort.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

       {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Dyspraxia (Developmental Coordination Disorder)"
            image="/images/dyspraxia/dyspraxia-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'Developmental Coordination Disorder (DCD), Motor Learning Difficulties' },
              { label: 'Specialty', value: 'Occupational therapy, Neurology, Pediatrics' },
              { label: 'Symptoms', value: 'Poor coordination, motor planning difficulties, clumsiness' },
              { label: 'Usual onset', value: 'Present from birth, noticed in early childhood' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: '5-6% of children' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">

          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          <ImageWithFallback 
            src="/images/dyspraxia/dyspraxia-overview-intro.webp"
            alt="Overview of Dyspraxia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <p className="mb-4 text-slate-700 leading-relaxed">
            Affecting approximately 5-6% of children, dyspraxia is a lifelong neurological condition that impairs the brain's ability to plan, sequence, and execute physical movements.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> While it frequently co-occurs with other neurodivergent profiles like ADHD or dyslexia, it represents a distinct diagnosis that impacts fine and gross motor coordination, speech, and spatial organization.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyspraxia-overview');
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
            src="/images/dyspraxia/dyspraxia-symptoms-intro.webp"
            alt="Symptoms of Dyspraxia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <p className="mb-4 text-slate-700 leading-relaxed">
            Individuals with dyspraxia typically experience significant challenges with motor coordination, manifesting as poor balance, an awkward gait, and intense difficulty with fine motor tasks like handwriting or tying shoelaces. Beyond physical movement, this neurological difference often affects cognitive and perceptual skills, leading to challenges with short-term memory, time management, and following multi-step instructions.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyspraxia-symptoms');
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
            src="/images/dyspraxia/dyspraxia-causes-intro.webp"
            alt="Causes of Dyspraxia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />         
          <p className="mb-4 text-slate-700 leading-relaxed">
            Brain imaging studies have revealed that dyspraxia stems from neurological differences in how the motor cortex, cerebellum, and basal ganglia process the information required for movement planning and coordination.<sup className="text-[#10b981] font-bold ml-0.5">2</sup> Although the precise genetic markers are still being investigated, this lifelong condition is present from birth and reflects a fundamental disruption in the neural pathways that govern motor control systems.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyspraxia-causes');
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
            src="/images/dyspraxia/dyspraxia-diagnosis-intro.webp"
            alt="Diagnosing Dyspraxia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <p className="mb-4 text-slate-700 leading-relaxed">
            Diagnosis requires a comprehensive evaluation by specialized healthcare professionals, such as occupational therapists or developmental pediatricians, to assess both fine and gross motor skills. This multidisciplinary assessment explicitly rules out other medical conditions or intellectual disabilities, confirming that the motor coordination difficulties significantly interfere with daily activities and academic performance.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyspraxia-diagnosis');
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
            src="/images/dyspraxia/dyspraxia-support-intro.webp"
            alt="Support for Dyspraxia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <p className="mb-4 text-slate-700 leading-relaxed">
            Effective support relies heavily on targeted occupational and physical therapy to improve motor skills, balance, and coordination through task-specific training. Individuals also benefit significantly from practical environmental accommodations, such as utilizing speech-to-text software, modifying physical education activities, and implementing visual schedules to support organizational challenges.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyspraxia-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">

          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Dyspraxia</h2>
          <ImageWithFallback 
            src="/images/dyspraxia/dyspraxia-living-intro.webp"
            alt="Living with Dyspraxia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          /> 
          <p className="mb-4 text-slate-700 leading-relaxed">
            With self-understanding and appropriate accommodations, individuals with dyspraxia successfully navigate their environments and frequently excel in fields that leverage their strong verbal skills, creativity, and strategic thinking. Long-term thriving involves mastering self-advocacy, utilizing compensatory technologies to reduce motor fatigue, and building confidence through personalized daily living strategies.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyspraxia-living');
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
            <p>1. Lingam, R., Hunt, L., Golding, J., Jongmans, M., & Emond, A. (2009). Prevalence of developmental coordination disorder using the DSM-IV at 7 years of age: A UK population-based study. <i>Pediatrics</i>.</p>
            <p>2. Zwicker, J. G., Missiuna, C., Harris, S. R., & Boyd, L. A. (2011). Brain activation of children with developmental coordination disorder is different than peers. <i>Pediatrics</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2013). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed.). American Psychiatric Publishing.</li>
            <li>Blank, R., Barnett, A. L., Cairney, J., et al. (2019). International clinical practice recommendations on the definition, diagnosis, assessment, intervention, and psychosocial aspects of developmental coordination disorder. <i>Developmental Medicine & Child Neurology</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}