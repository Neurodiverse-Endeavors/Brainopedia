import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleTBIProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleTBI({ setCurrentArticle }: ArticleTBIProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tbi-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tbi-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tbi-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tbi-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tbi-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with TBI',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tbi-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Traumatic Brain Injury (TBI)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed text-sm">
            <strong className="text-[#0c264d]">Traumatic Brain Injury (TBI)</strong> occurs when an external force injures the brain, causing temporary or permanent changes to cognitive function, emotional regulation, sensory processing, and behavior.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> When these changes persist permanently, TBI evolves into an acquired neurodivergence—a fundamental shift in how the brain processes information and experiences the world.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        <div className="w-full">
          <InfoBox
            title="Traumatic Brain Injury"
            image="/images/tbi/tbi-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'TBI, acquired brain injury' },
              { label: 'Specialty', value: 'Neurology, Rehabilitation Medicine' },
              { label: 'Cause', value: 'External force injuring the brain' },
              { label: 'Classification', value: 'Acquired neurodivergence when permanent' },
              { label: 'Duration', value: 'Variable (days to lifelong)' },
              { label: 'Frequency', value: '2.8 million new cases annually (US)' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <ImageWithFallback 
            src="/images/tbi/tbi-overview-intro.webp"
            alt="Brain imaging showing traumatic brain injury"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Approximately 2.8 million traumatic brain injuries occur annually in the United States alone, with an estimated 5.3 million Americans currently living long-term with TBI-related cognitive or physical disabilities.<sup className="text-[#10b981] font-bold ml-0.5">2</sup> By explicitly understanding long-term TBI as an acquired neurodivergence, we can powerfully validate the individual's radically altered lived experience and emphasize the critical necessity for ongoing societal accommodation.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tbi-overview');
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
            src="/images/tbi/tbi-symptoms-intro.webp"
            alt="Cognitive and memory challenges following TBI"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            TBI impacts nearly every facet of cognition, frequently resulting in dramatically slowed information processing, highly fragmented short-term memory, intense mental fatigue, and profound executive functioning disruptions.<sup className="text-[#10b981] font-bold ml-0.5">3</sup> Beyond pure cognition, individuals frequently experience intense emotional dysregulation, rapid mood lability, and an inability to filter intense sensory input, requiring extensive patience and targeted therapeutic support to navigate safely.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tbi-symptoms');
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
            src="/images/tbi/tbi-causes-intro.webp"
            alt="Emergency trauma - causes of traumatic brain injury"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            TBI occurs when an intense external force physically damages the brain—whether through closed head injuries, penetrating trauma, or blast waves—fundamentally disrupting delicate neural pathways and neurotransmitter systems. Whether sustained in a sudden car accident or cumulatively through repeated sports impacts, this physical trauma fundamentally and permanently alters how the brain's circuitry processes information.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tbi-causes');
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
            src="/images/tbi/tbi-diagnosis-intro.webp"
            alt="Brain imaging and neurological testing for TBI diagnosis"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Initial diagnosis in acute trauma settings relies on assessing consciousness via the Glasgow Coma Scale combined with emergency CT or MRI scans, while long-term management utilizes comprehensive neuropsychological testing to map out new cognitive strengths and deficits. Unfortunately, many individuals with "mild" TBIs are clinically dismissed despite enduring severe, lasting symptoms, powerfully highlighting the need to formally recognize chronic post-concussive conditions as an acquired neurodivergence.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tbi-diagnosis');
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
            src="/images/tbi/tbi-support-intro.webp"
            alt="Rehabilitation and therapeutic support for TBI recovery"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Successful long-term rehabilitation requires assembling a highly individualized, multidisciplinary team offering cognitive rehabilitation therapy alongside critical daily accommodations like external memory aids and strictly paced activity schedules. Because a TBI forces an individual to abandon their pre-injury identity, therapeutic support must actively address immense grief and complex personality adjustments while accepting that some neurological changes are utterly permanent.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tbi-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with TBI</h2>
          
          <ImageWithFallback 
            src="/images/tbi/tbi-living-intro.webp"
            alt="Adaptation and quality of life after TBI"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Living long-term with a TBI means relentlessly navigating a world that expects a pre-injury level of functioning while coping with profound diagnostic uncertainty and a highly fragmented sense of self. By building unshakeable self-advocacy skills and fiercely managing cognitive stamina, survivors frequently forge entirely new, deeply meaningful paths forward by leaning into resilience and radically redefined capabilities.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tbi-living');
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
            <p>1. Maas, A. I., Stocchetti, N., & Bullock, R. (2008). Moderate and severe traumatic brain injury in adults. <i>The Lancet Neurology</i>.</p>
            <p>2. Taylor, C. A., Bell, J. M., Breiding, M. J., & Xu, L. (2017). Traumatic brain injury-related emergency department visits, hospitalizations, and deaths—United States, 2007 and 2013. <i>MMWR Surveillance Summaries</i>.</p>
            <p>3. Rabinowitz, A. R., & Levin, H. S. (2014). Cognitive sequelae of traumatic brain injury. <i>Psychiatric Clinics</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Langlois, J. A., Rutland-Brown, W., & Wald, M. M. (2006). The epidemiology and impact of traumatic brain injury: A brief overview. <i>The Journal of Head Trauma Rehabilitation</i>.</li>
            <li>Dikmen, S. S., Corrigan, J. D., Levin, H. S., Machamer, J., Stiers, W., & Weisskopf, M. G. (2009). Cognitive outcome following traumatic brain injury. <i>The Journal of Head Trauma Rehabilitation</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}