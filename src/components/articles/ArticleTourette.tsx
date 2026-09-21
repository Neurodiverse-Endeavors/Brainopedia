import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleTouretteProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleTourette({ setCurrentArticle }: ArticleTouretteProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tourette-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tourette-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tourette-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tourette-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tourette-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Tourette Syndrome',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('tourette-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan animate-in fade-in duration-300">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Tourette Syndrome
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Tourette syndrome (TS)</strong> is a neurodevelopmental disorder characterized by repetitive, involuntary movements and vocalizations called tics. Named after French physician Georges Gilles de la Tourette who first described the condition in 1885, Tourette syndrome typically begins in childhood and varies widely in severity from person to person.
          </p>
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>
        <div className="w-full">
          <InfoBox title="Tourette Syndrome" 
          image="/images/tourette/tourette-main-infobox.webp"
          data={[
            { label: 'Other names', value: 'Tourette disorder, TS, Gilles de la Tourette syndrome' },
            { label: 'Specialty', value: 'Neurology, Psychiatry' },
            { label: 'Symptoms', value: 'Motor and vocal tics' },
            { label: 'Usual onset', value: 'Ages 5-10' },
            { label: 'Duration', value: 'Often lifelong, may improve in adulthood' },
            { label: 'Frequency', value: '1 in 160 children' },
          ]} />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* OVERVIEW SECTION */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/tourette/tourette-main-overview.webp"
            alt="Overview of Tourette syndrome"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4 text-sm text-slate-700 leading-relaxed">
            Tourette syndrome affects approximately 1 in 160 children, with males being diagnosed about 3-4 times more frequently than females.<sup className="text-green-600 font-bold ml-0.5">1</sup> The condition typically begins between ages 5 and 10, characterized by sudden, rapid, recurrent movements or vocalizations called tics that individuals can temporarily suppress with significant effort.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tourette-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* CHARACTERISTICS SECTION */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/tourette/tourette-main-characteristics.webp"
            alt="Tourette Symptoms and Characteristics"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4 text-sm text-slate-700 leading-relaxed">
            Tourette syndrome is characterized by both motor and vocal tics that wax and wane in severity, ranging from simple eye blinking and throat clearing to complex movements and repeated phrases. These tics frequently change type and location over time, often worsening with stress and decreasing during focused activities or sleep.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tourette-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* CAUSES SECTION */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/tourette/tourette-main-causes.webp"
            alt="Tourette Causes and Origins"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4 text-sm text-slate-700 leading-relaxed">
            Tourette syndrome has a strong but complex genetic component, involving multiple genes that interact with environmental factors to influence circuits connecting the basal ganglia, thalamus, and frontal cortex. Research also suggests variations in neurotransmitter systems—particularly dopamine and serotonin—which help explain why individuals experience premonitory urges and face difficulty suppressing involuntary movements.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tourette-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* DIAGNOSIS SECTION */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/tourette/tourette-main-diagnosis.webp"
            alt="Tourette Testing and Diagnosis"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4 text-sm text-slate-700 leading-relaxed">
            Tourette syndrome is diagnosed clinically when an individual experiences multiple motor tics and one or more vocal tics for over a year, with onset before age 18. Because no blood test or brain scan can diagnose the condition, the process relies on a comprehensive evaluation by a specialist to assess tic severity and screen for co-occurring conditions like ADHD or OCD.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tourette-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SUPPORT SECTION */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/tourette/tourette-main-support.webp"
            alt="Tourette Support and Management"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4 text-sm text-slate-700 leading-relaxed">
            While many individuals with mild symptoms do not require treatment, those seeking support often benefit from behavioral therapies—such as Comprehensive Behavioral Intervention for Tics (CBIT)—as a first-line approach for building management strategies. When behavioral methods are insufficient, a highly individualized management plan may include medication to reduce tic severity, alongside crucial environmental accommodations and peer education to reduce stigma.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tourette-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* LIVING SECTION */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/tourette/tourette-main-living.webp"
            alt="Living with Tourette Syndrome"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Tourette Syndrome</h2>
          
          <p className="mb-4 text-sm text-slate-700 leading-relaxed">
            Individuals with Tourette syndrome lead highly successful, fulfilling lives, and for many, tic severity improves significantly during late adolescence or early adulthood. By developing strategies to manage premonitory urges, building robust self-advocacy skills, and securing appropriate workplace or academic accommodations, individuals can effectively navigate misconceptions and thrive in their endeavors.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('tourette-living');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>
      </div>

{/* ===== REFERENCES SECTION ===== */}
      
      {/* CLEAR FLOATS AND ADD SPACING BEFORE REFERENCES */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
      
      {/* CITED STUDIES: GREEN */}
      <div className="mb-6">
        <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
          Cited Studies & Statistics
        </h4>
        <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
          <p>1. Knight, T., et al. (2012). Prevalence of tic disorders: A systematic review and meta-analysis. <i>Pediatric Neurology</i>.</p>
          <p>2. Freeman, R. D., et al. (2000). An international perspective on Tourette syndrome: Selected findings from 3,500 individuals in 22 countries. <i>Developmental Medicine & Child Neurology</i>.</p>
          <p>3. Hirschtritt, M. E., et al. (2015). Lifetime prevalence, age of risk, and genetic relationships of comorbid psychiatric disorders in Tourette syndrome. <i>JAMA Psychiatry</i>.</p>
          <p>4. Robertson, M. M., et al. (2009). The international prevalence, epidemiology, and clinical phenomenology of Tourette syndrome: A cross-cultural perspective. <i>Journal of Psychosomatic Research</i>.</p>
        </div>
      </div>
      
      {/* BACKGROUND SOURCES: CYAN */}
      <div>
        <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
          Background Sources
        </h4>
        <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
          <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
          <li>Jankovic, J. (2001). Tourette's syndrome. <i>New England Journal of Medicine</i>.</li>
          <li>Leckman, J. F. (2002). Tourette's syndrome. <i>The Lancet</i>.</li>
          <li>Mink, J. W. (2001). Basal ganglia dysfunction in Tourette's syndrome: A new hypothesis. <i>Pediatric Neurology</i>.</li>
          <li>Pringsheim, T., et al. (2019). Practice guideline recommendations summary: Treatment of tics in people with Tourette syndrome and chronic tic disorders. <i>Neurology</i>.</li>
          <li>Roessner, V., et al. (2011). European clinical guidelines for Tourette syndrome and other tic disorders. Part II: Pharmacological treatment. <i>European Child & Adolescent Psychiatry</i>.</li>
          <li>Singer, H. S. (2005). Tourette's syndrome: From behaviour to biology. <i>The Lancet Neurology</i>.</li>
          <li>World Health Organization. (2018). <i>International classification of diseases for mortality and morbidity statistics</i> (11th ed.). Geneva: WHO.</li>
        </ul>
      </div>
    </div>

    </article>
  );
}