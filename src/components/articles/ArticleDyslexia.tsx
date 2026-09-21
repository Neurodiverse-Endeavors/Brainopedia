import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleDyslexiaProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleDyslexia({ setCurrentArticle }: ArticleDyslexiaProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyslexia-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyslexia-symptoms-core');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyslexia-causes-brain');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyslexia-diagnosis-overview');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyslexia-support-interventions');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Dyslexia',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyslexia-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Dyslexia
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Dyslexia</strong> is a specific learning difference that primarily affects reading and language processing, characterized by difficulties with accurate word recognition, decoding, and spelling. These challenges typically stem from unexpected deficits in the phonological component of language, completely unrelated to a person's overall cognitive abilities or intellect.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Dyslexia"
            image="/images/dyslexia/dyslexia-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'Reading disorder, specific learning disorder with impairment in reading' },
              { label: 'Specialty', value: 'Educational psychology, Neurology' },
              { label: 'Symptoms', value: 'Reading difficulties, poor spelling, slow reading' },
              { label: 'Usual onset', value: 'Early childhood (often noticed in school)' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: '5-20% of population' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-main-overview.webp"
            alt="Overview of dyslexia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4 text-sm text-slate-700 leading-relaxed">
            Dyslexia is widely recognized as the most common specific learning difference, representing 80-90% of all those with learning disabilities and affecting up to 20% of the population.<sup className="text-green-600 font-bold ml-0.5">1</sup> Because individuals with dyslexia often excel in areas requiring broad, big-picture thinking and 3D spatial reasoning, this neurotype is a unique mix of distinct challenges and remarkable cognitive strengths.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyslexia-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CHARACTERISTICS */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-main-symptoms.webp"
            alt="Symptoms of dyslexia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4 text-sm text-slate-700 leading-relaxed">
            Symptoms typically manifest as persistent challenges with phonological awareness, rapid automatized naming, and working memory, which can cause labored reading and frequent spelling errors.<sup className="text-green-600 font-bold ml-0.5">2</sup> The severity of these characteristics exists on a spectrum and often fluctuates as academic reading and language demands increase over time.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyslexia-symptoms-core');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CAUSES */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-main-causes.webp"
            alt="Causes of dyslexia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4 text-sm text-slate-700 leading-relaxed">
            Dyslexia is highly heritable, with studies indicating a strong genetic component and a heritability estimate between 40% and 60%.<sup className="text-green-600 font-bold ml-0.5">3</sup> Brain imaging confirms this is a physical, neurological difference, showing that dyslexic brains process written language differently by relying on distinct activation patterns in the right hemisphere to compensate for reading tasks.<sup className="text-green-600 font-bold ml-0.5">4</sup>
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyslexia-causes-brain');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: DIAGNOSIS */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-main-diagnosis.webp"
            alt="Diagnosing dyslexia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4 text-sm text-slate-700 leading-relaxed">
            A reliable diagnosis requires a comprehensive psychoeducational evaluation—administered by a qualified psychologist or educational diagnostician—to assess cognitive processing, phonological memory, and reading fluency. Securing this official diagnosis is crucial for ruling out other variables like vision impairments and ensuring the individual can access necessary educational accommodations.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyslexia-diagnosis-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: SUPPORT */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-main-support.webp"
            alt="Support for dyslexia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4 text-sm text-slate-700 leading-relaxed">
            The gold standard for dyslexia intervention is Structured Literacy, which involves explicit, systematic, and cumulative instruction in phonics and morphology.<sup className="text-green-600 font-bold ml-0.5">5</sup> Alongside this direct instruction, environmental accommodations like text-to-speech tools and extra exam time allow dyslexic individuals to demonstrate their true intellect without being bottlenecked by decoding struggles.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyslexia-support-interventions');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-main-living.webp"
            alt="Living with dyslexia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Dyslexia</h2>
          
          <p className="mb-4 text-sm text-slate-700 leading-relaxed">
            Because dyslexia is a lifelong neurodivergence, thriving involves embracing a strengths-based identity and developing strong self-advocacy skills. Dyslexic individuals are highly overrepresented in fields like engineering, architecture, and entrepreneurship, highlighting the immense value of their unique spatial and interconnected thinking patterns.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyslexia-living');
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
          <p>1. Shaywitz, S. E. (1998). Dyslexia. <i>New England Journal of Medicine</i>.</p>
          <p>2. Norton, E. S., Beach, S. D., & Gabrieli, J. D. (2015). Neurobiology of dyslexia. <i>Current Opinion in Neurobiology</i>.</p>
          <p>3. Peterson, R. L., & Pennington, B. F. (2015). Developmental dyslexia. <i>The Lancet</i>.</p>
          <p>4. Shaywitz, B. A., Shaywitz, S. E., Pugh, K. R., et al. (2002). Disruption of system for reading in dyslexic children. <i>Biological Psychiatry</i>.</p>
          <p>5. Moats, L. C. (2020). <i>Speech to print: Language essentials for teachers</i>. Paul H. Brookes Publishing Co.</p>
        </div>
      </div>

      {/* BACKGROUND SOURCES: CYAN */}
      <div>
        <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
          Background Sources
        </h4>
        <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
          <li>Eide, B. L., & Eide, F. F. (2011). <i>The Dyslexic Advantage: Unlocking the Hidden Potential of the Dyslexic Brain</i>. Hudson Street Press.</li>
          <li>International Dyslexia Association. (2002). Definition of Dyslexia.</li>
          <li>Wolf, M. (2007). <i>Proust and the Squid: The Story and Science of the Reading Brain</i>. Harper Perennial.</li>
        </ul>
      </div>

      </div>
      
    </article>
  );
}