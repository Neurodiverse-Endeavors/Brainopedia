import React from 'react';
import { TableOfContents } from '../TableOfContents';
import { InfoBox } from '../InfoBox';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleADHDProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleADHD({ setCurrentArticle }: ArticleADHDProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('adhd-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('adhd-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('adhd-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('adhd-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('adhd-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with ADHD',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('adhd-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        <span className="md:hidden">ADHD</span>
        <span className="hidden md:block">Attention-Deficit/Hyperactivity Disorder (ADHD)</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p>
            <strong>Attention-deficit/hyperactivity disorder (ADHD)</strong> is a neurodevelopmental disorder 
            characterized by persistent patterns of inattention, hyperactivity, and impulsivity that interfere 
            with functioning or development. It is one of the most common neurodevelopmental disorders of childhood, 
            though it often continues into adulthood.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        <div className="w-full">
          <InfoBox
            title="ADHD"
            image="/images/adhd/adhd-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'Attention deficit disorder (ADD), Hyperkinetic disorder' },
              { label: 'Specialty', value: 'Psychiatry, Pediatrics' },
              { label: 'Symptoms', value: 'Inattention, hyperactivity, impulsivity' },
              { label: 'Usual onset', value: 'Before age 12' },
              { label: 'Duration', value: 'Often lifelong' },
              { label: 'Frequency', value: '11.3% of children (ages 5-17, US), 3.1% of adults (US)' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/adhd/adhd-main-overview.webp"
            alt="ADHD Overview"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4">
            ADHD is a lifelong neurodevelopmental condition involving severe inattention, hyperactivity, and impulsivity that disrupts daily life. It affects 11.3% of U.S. children (more common in boys at 14.5% than girls at 8.0%)<sup className="text-green-600 font-bold ml-0.5">1</sup> and approximately 3.1% of adults.<sup className="text-green-600 font-bold ml-0.5">2</sup> Recognizing ADHD as a neurological difference rather than a behavioral flaw helps reduce stigma and encourages effective support.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('adhd-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CHARACTERISTICS */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/adhd/adhd-main-symptoms.webp"
            alt="ADHD Symptoms"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4">
            ADHD presents in three main patterns: inattentive, hyperactive-impulsive, or a combination of both. Core challenges include executive function deficits, such as difficulties with working memory, emotional regulation, and organization. Because the brain matures over time, these symptoms often shift and evolve as a person grows from childhood into adulthood.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('adhd-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CAUSES */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/adhd/adhd-main-causes.webp"
            alt="ADHD Causes"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4">
            ADHD stems from a mix of genetic, neurological, and environmental factors, though it is highly hereditary (70–80% heritability).<sup className="text-green-600 font-bold ml-0.5">3</sup> Brain imaging shows physical differences in regions responsible for attention and impulse control, alongside variations in the dopamine and norepinephrine systems. While environmental factors like premature birth can contribute, genetics play the largest role.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('adhd-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: DIAGNOSIS */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/adhd/adhd-main-diagnosis.webp"
            alt="ADHD Diagnosis"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4">
            A formal diagnosis requires a comprehensive evaluation by a qualified professional, which can occur at any age. To meet the criteria, symptoms must have started before age 12, appear in multiple settings (like home and work), and significantly impair daily functioning. The process relies on clinical interviews, rating scales, and ruling out other overlapping conditions like anxiety or sleep disorders.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('adhd-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: SUPPORT */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/adhd/adhd-main-support.webp"
            alt="ADHD Support"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4">
            Managing ADHD requires a highly individualized approach using a mix of behavioral therapies, educational accommodations, and lifestyle adjustments. Medications are also highly effective: stimulants improve symptoms for 70-80% of individuals,<sup className="text-green-600 font-bold ml-0.5">4</sup> while non-stimulants offer a beneficial alternative for 50-60% of people.<sup className="text-green-600 font-bold ml-0.5">5</sup> The goal is to build strategies that fit the neurodivergent brain rather than trying to force it to act neurotypical.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('adhd-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/adhd/adhd-main-living.webp"
            alt="Living with ADHD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with ADHD</h2>
          
          <p className="mb-4">
            With the right support and accommodations, individuals with ADHD lead incredibly fulfilling lives. The ADHD brain offers unique strengths, including the capacity for hyperfocus, rapid adaptability, high energy, and innovative problem-solving. Thriving with ADHD involves celebrating these strengths, building self-advocacy skills, and connecting with community support.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('adhd-living');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
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
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Centers for Disease Control and Prevention. (2022). Data and statistics about ADHD. U.S. Department of Health and Human Services.</p>
            <p>2. Kessler, R. C., Adler, L., Barkley, R., et al. (2006). The prevalence and correlates of adult ADHD in the United States: Results from the National Comorbidity Survey Replication. <i>American Journal of Psychiatry</i>.</p>
            <p>3. Faraone, S. V., & Larsson, H. (2019). Genetics of attention deficit hyperactivity disorder. <i>Molecular Psychiatry</i>.</p>
            <p>4. Cortese, S., Adamo, N., Del Giovane, C., et al. (2018). Comparative efficacy and tolerability of medications for attention-deficit hyperactivity disorder in children, adolescents, and adults: A systematic review and network meta-analysis. <i>The Lancet Psychiatry</i>.</p>
            <p>5. Michelkoetter, U., & Brams, M. (2010). Atomoxetine in the treatment of children and adolescents with ADHD. <i>Neuropsychiatric Disease and Treatment</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN (No Indentation) */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>American Psychiatric Association. (2013). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed.). American Psychiatric Publishing.</p>
            <p>Children and Adults with Attention-Deficit/Hyperactivity Disorder (CHADD). (n.d.). About ADHD. National Resource Center on ADHD.</p>
            <p>Barkley, R. A. (2015). <i>Attention-deficit hyperactivity disorder: A handbook for diagnosis and treatment</i> (4th ed.). Guilford Press.</p>
          </div>
        </div>
      </div>
    </article>
  );
}