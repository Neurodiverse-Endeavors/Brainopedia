import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleMisophoniaProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleMisophonia({ setCurrentArticle }: ArticleMisophoniaProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('misophonia-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('misophonia-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('misophonia-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('misophonia-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('misophonia-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Misophonia',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('misophonia-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Misophonia
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Misophonia</strong>, meaning "hatred of sound," is a neurosensory condition characterized 
            by strong negative emotional and physiological reactions to specific sounds, typically those 
            produced by other people. These trigger sounds, often related to eating, breathing, or repetitive 
            noises, can provoke intense involuntary feelings of anger, anxiety, disgust, or panic.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

       {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Misophonia"
            image="/images/misophonia/misophonia-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'Selective Sound Sensitivity Syndrome (4S)' },
              { label: 'Specialty', value: 'Audiology, Psychology, Psychiatry' },
              { label: 'Symptoms', value: 'Strong reactions to specific trigger sounds' },
              { label: 'Usual onset', value: 'Late childhood to early adolescence (ages 9-13)' },
              { label: 'Duration', value: 'Chronic, often worsens without intervention' },
              { label: 'Frequency', value: '6-20% of population' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">

          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          <ImageWithFallback 
            src="/images/misophonia/misophonia-overview-intro.webp"
            alt="Overview of Misophonia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <p className="mb-4 text-slate-700 leading-relaxed">
            Misophonia is estimated to affect approximately 6-20% of the population to some degree, typically beginning in late childhood and worsening over time without intervention.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> Unlike general noise sensitivity (hyperacusis), misophonia involves involuntary emotional and physiological reactions triggered by specific sounds—usually eating, breathing, or repetitive noises—regardless of their volume.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('misophonia-overview');
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
            src="/images/misophonia/misophonia-symptoms-intro.webp"
            alt="Symptoms of Misophonia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />    
          <p className="mb-4 text-slate-700 leading-relaxed">
            When exposed to trigger sounds, individuals experience immediate, involuntary emotional distress—ranging from intense rage to panic—alongside physical "fight-or-flight" symptoms like a racing heart and muscle tension. Because these triggers are often everyday human noises, it frequently leads to severe avoidance of social situations, family meals, and shared workspaces.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('misophonia-symptoms');
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
            src="/images/misophonia/misophonia-causes-intro.webp"
            alt="Causes of Misophonia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />       
          <p className="mb-4 text-slate-700 leading-relaxed">
            Brain imaging studies have revealed that misophonia stems from atypical connectivity and hyperactivation within the anterior insular cortex, effectively short-circuiting the brain's auditory processing centers directly into its emotional regulation networks.<sup className="text-[#10b981] font-bold ml-0.5">2</sup> While researchers are still mapping the specific genetic markers, it is increasingly understood as a distinct neurobiological difference in sound filtering rather than a psychological disorder.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('misophonia-causes');
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
            src="/images/misophonia/misophonia-diagnosis-intro.webp"
            alt="Diagnosing Misophonia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Because misophonia is not yet officially listed in standard diagnostic manuals like the DSM-5, formal diagnosis requires careful evaluation by specialized audiologists or psychologists. The assessment process typically involves detailed clinical interviews, audiological testing to rule out other hearing conditions, and the use of specific screening tools like the Misophonia Questionnaire (MQ).
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('misophonia-diagnosis');
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
            src="/images/misophonia/misophonia-support-intro.webp"
            alt="Support for Misophonia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <p className="mb-4 text-slate-700 leading-relaxed">
            While there is no "cure," individuals often find significant relief through therapeutic approaches like tailored Cognitive Behavioral Therapy (CBT) and specific emotion regulation skills training. Management relies heavily on environmental adaptations, such as utilizing noise-canceling headphones, implementing strategic seating, and communicating clear boundaries with family and colleagues.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('misophonia-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">

          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Misophonia</h2>
          <ImageWithFallback 
            src="/images/misophonia/misophonia-living-intro.webp"
            alt="Living with Misophonia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <p className="mb-4 text-slate-700 leading-relaxed">
            With self-advocacy and robust coping toolkits, individuals with misophonia successfully navigate their triggers and maintain fulfilling personal and professional relationships. Thriving involves balancing the necessary use of sensory protections with intentional social engagement, while recognizing that these intense reactions are rooted in neurobiology, not personal choice.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('misophonia-living');
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
            <p>1. Zhou, X., Wu, M. S., & Storch, E. A. (2017). Misophonia symptoms among Chinese university students: Incidence, associated impairment, and clinical correlates. <i>Journal of Obsessive-Compulsive and Related Disorders</i>.</p>
            <p>2. Schröder, A., van Wingen, G., Eijsker, N., et al. (2019). Misophonia is associated with altered brain activity in the auditory cortex and salience network. <i>Scientific Reports</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Swedo, S. E., Baguley, D. M., Denys, D., et al. (2022). Consensus definition of misophonia: A Delphi study. <i>Frontiers in Neuroscience</i>.</li>
            <li>Brout, J. J., Edelstein, M., Erfanian, M., et al. (2018). Investigating misophonia: A review of the empirical literature, clinical implications, and a research agenda. <i>Frontiers in Neuroscience</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}