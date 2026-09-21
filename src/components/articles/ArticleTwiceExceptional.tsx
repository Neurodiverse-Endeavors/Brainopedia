import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleTwiceExceptionalProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleTwiceExceptional({ setCurrentArticle }: ArticleTwiceExceptionalProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('twice-exceptional-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('twice-exceptional-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('twice-exceptional-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('twice-exceptional-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('twice-exceptional-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Twice Exceptionality',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('twice-exceptional-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Twice Exceptional (2e)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Twice Exceptional</strong> (often abbreviated as 2e) refers to individuals who are both intellectually gifted and have one or more learning differences, disabilities, or neurodivergent conditions. These students possess high cognitive abilities alongside specific learning challenges, creating a unique profile of strengths and difficulties.
          </p>
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox 
            title="Twice Exceptional (2e)" 
            image="/images/twice-exceptional/twice-exceptional-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'Gifted with Learning Disabilities, Gifted/LD, 2e' },
              { label: 'Specialty', value: 'Gifted Education, Educational Psychology' },
              { label: 'Symptoms', value: 'Coexistence of high ability and learning challenges' },
              { label: 'First described', value: '1970s-1980s in gifted education literature' },
              { label: 'Duration', value: 'Lifelong profile' },
              { label: 'Frequency', value: '2-5% of student population' },
            ]} 
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/twice-exceptional/twice-exceptional-overview-intro.webp"
            alt="Overview of Twice Exceptionality"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Twice exceptional (2e) individuals represent roughly 2-5% of the student population, possessing both high cognitive abilities and specific learning or neurodivergent challenges.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> Because their giftedness can mask their disabilities—and vice versa—many remain unidentified and require specialized understanding to thrive.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('twice-exceptional-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CHARACTERISTICS */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/twice-exceptional/twice-exceptional-symptoms-intro.webp"
            alt="Symptoms of Twice Exceptionality"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Twice exceptional individuals typically demonstrate advanced reasoning and exceptional creativity alongside frustrating struggles with specific academic skills, executive functioning, or emotional regulation. This asynchronous development often leads to extreme perfectionism and a unique cognitive profile filled with stark peaks and valleys.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('twice-exceptional-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CAUSES */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/twice-exceptional/twice-exceptional-causes-intro.webp"
            alt="Causes of Twice Exceptionality"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Twice exceptionality is simply the co-occurrence of intellectual giftedness—which involves neurological differences in brain development—with one or more specific learning differences. Both giftedness and learning differences have strong genetic components, creating unique, complex patterns of brain organization.<sup className="text-[#10b981] font-bold ml-0.5">2</sup>
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('twice-exceptional-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: DIAGNOSIS */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/twice-exceptional/twice-exceptional-diagnosis-intro.webp"
            alt="Diagnosing Twice Exceptionality"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Identifying twice exceptional individuals requires a comprehensive psychoeducational evaluation that examines both cognitive potential and specific learning challenges. Assessors look for significant scatter in test scores and a discrepancy between high ability and actual achievement to uncover both the giftedness and the masked disability.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('twice-exceptional-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: SUPPORT */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/twice-exceptional/twice-exceptional-support-intro.webp"
            alt="Support for Twice Exceptionality"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Effective support requires a strength-based approach that provides advanced, differentiated instruction to nurture the individual's gifts while explicitly accommodating their areas of difficulty. Essential interventions also include robust social-emotional support to help 2e individuals manage anxiety and the inherent frustration of asynchronous development.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('twice-exceptional-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/twice-exceptional/twice-exceptional-living-intro.webp"
            alt="Living with Twice Exceptionality"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Twice Exceptionality</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            With appropriate accommodations, twice exceptional individuals lead highly successful lives, often thriving in creative, entrepreneurial, or specialized technical fields. Living well involves embracing one's unique profile, developing self-advocacy skills, and finding a community that celebrates exceptional abilities rather than focusing solely on deficits.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('twice-exceptional-living');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>
      </div>

      {/* REFERENCES SECTION */}
      
      
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Foley Nicpon, M., Allmon, A., Sieck, B., & Stinson, R. D. (2011). Empirical investigation of twice-exceptionality: Where have we been and where are we going? <i>Gifted Child Quarterly</i>.</p>
            <p>2. Plomin, R., & Deary, I. J. (2015). Genetics and intelligence differences: Five special findings. <i>Molecular Psychiatry</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Baum, S. M., Schader, R. M., & Owen, S. V. (2017). <i>To be gifted and learning disabled: Strength-based strategies for helping twice-exceptional students with LD, ADHD, ASD, and more</i>. Prufrock Press.</li>
            <li>Trail, B. A. (2011). <i>Twice-exceptional gifted children: Understanding, teaching, and counseling gifted students</i>. Prufrock Press.</li>
            <li>Webb, J. T., Amend, E. R., Webb, N. E., Goerss, J., Beljan, P., & Olenchak, F. R. (2005). <i>Misdiagnosis and dual diagnoses of gifted children and adults: ADHD, bipolar, OCD, Asperger's, depression, and other disorders</i>. Great Potential Press.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}