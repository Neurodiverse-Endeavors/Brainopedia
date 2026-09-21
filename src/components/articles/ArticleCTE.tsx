import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleCTEProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleCTE({ setCurrentArticle }: ArticleCTEProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('cte-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('cte-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('cte-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('cte-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('cte-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with CTE',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('cte-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Chronic Traumatic Encephalopathy (CTE)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed text-sm">
            <strong className="text-[#0c264d]">Chronic Traumatic Encephalopathy (CTE)</strong> is a progressive neurodegenerative disease found in people with a history of repetitive head impacts, including symptomatic concussions as well as asymptomatic subconcussive hits.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> CTE has been most commonly found in contact sport athletes, military veterans, and others with a history of repeated brain trauma.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        <div className="w-full">
          <InfoBox
            title="CTE or Chronic Traumatic Encephalopathy"
            image="/images/cte/cte-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'CTE, formerly "punch drunk syndrome"' },
              { label: 'Specialty', value: 'Neurology, Neuropathology' },
              { label: 'Cause', value: 'Repeated head impacts over time' },
              { label: 'Classification', value: 'Acquired neurodegenerative disease' },
              { label: 'Diagnosis', value: 'Currently only after death (post-mortem)' },
              { label: 'Duration', value: 'Progressive, lifelong' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <ImageWithFallback 
            src="/images/cte/cte-overview-intro.webp"
            alt="Brain protein accumulation in neurodegenerative disease"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            CTE is an acquired, progressive neurodegenerative disease characterized by the abnormal buildup of tau proteins that clump together and slowly destroy healthy brain cells over time.<sup className="text-[#10b981] font-bold ml-0.5">2</sup> Unlike acute brain injuries, this condition is strictly caused by repeated trauma occurring over months or years, requiring entirely unique diagnostic approaches and long-term care strategies.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('cte-overview');
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
            src="/images/cte/cte-symptoms-intro.webp"
            alt="Cognitive decline and memory loss in CTE"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Because CTE is a progressive disease, initial symptoms like impulsivity, depression, and short-term memory problems often do not appear until years or decades after the individual's final head trauma.<sup className="text-[#10b981] font-bold ml-0.5">3</sup> As the abnormal tau protein spreads throughout the brain tissue, individuals typically experience progressively severe executive dysfunction, severe mood changes, and eventually profound cognitive impairment akin to dementia.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('cte-symptoms');
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
            src="/images/cte/cte-causes-intro.webp"
            alt="Contact sports and repeated head impacts causing CTE"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            The exclusive primary cause of CTE is repeated head impacts sustained over time, which frequently include highly visible concussions alongside thousands of asymptomatic subconcussive hits that occur during routine practice or combat. Risk is heavily correlated with the total duration of exposure to these impacts, meaning individuals with long careers in contact sports or military blast exposure carry the highest statistical vulnerability.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('cte-causes');
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
            src="/images/cte/cte-diagnosis-intro.webp"
            alt="Brain tissue pathology research and microscopic examination"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Currently, CTE can only be definitively and officially diagnosed post-mortem through highly specialized microscopic examinations identifying the unique pattern of tau protein deposits within the brain tissue. However, medical professionals can clinically suspect the condition in living patients by rigorously assessing an individual's trauma history, analyzing cognitive decline patterns, and comprehensively ruling out overlapping neurodegenerative diseases.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('cte-diagnosis');
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
            src="/images/cte/cte-support-intro.webp"
            alt="Medical support and healthcare management for CTE"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            While there is no established cure to halt the progression of CTE, individuals benefit immensely from highly targeted medical management focusing on specific symptoms like depression, severe anxiety, and sleep disturbances. Comprehensive care requires utilizing cognitive rehabilitation strategies, creating strong family support networks, and engaging in preventative health measures to actively protect the brain from any further traumatic exposure.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('cte-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with CTE</h2>
          
          <ImageWithFallback 
            src="/images/cte/cte-living-intro.webp"
            alt="Family support and caregiving for individuals with CTE"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Living with suspected CTE involves profoundly challenging emotional hurdles, as individuals must manage progressive behavioral changes and cognitive decline while simultaneously coping with immense diagnostic uncertainty. To maximize quality of life, families must prioritize securing comprehensive mental health resources, actively utilizing caregiving networks, and often participating heavily in advocacy to demand better safety protocols in sports.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('cte-living');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. McKee, A. C., Cairns, N. J., Dickson, D. W., et al. (2016). The first NINDS/NIBIB consensus meeting to define neuropathological criteria for the diagnosis of chronic traumatic encephalopathy. <i>Acta Neuropathologica</i>.</p>
            <p>2. McKee, A. C., Stein, T. D., Nowinski, C. J., et al. (2013). The spectrum of disease in chronic traumatic encephalopathy. <i>Brain</i>.</p>
            <p>3. Mez, J., Daneshvar, D. H., Kiernan, P. T., et al. (2017). Clinicopathological evaluation of chronic traumatic encephalopathy in players of American football. <i>JAMA</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Stein, T. D., Alvarez, V. E., & McKee, A. C. (2014). Chronic traumatic encephalopathy: A spectrum of neuropathological changes following repetitive brain trauma in athletes and military personnel. <i>Alzheimer's Research & Therapy</i>.</li>
            <li>Baugh, C. M., Stamm, J. M., Riley, D. O., et al. (2012). Chronic traumatic encephalopathy: Neurodegeneration following repetitive concussive and subconcussive brain trauma. <i>Brain Imaging and Behavior</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}