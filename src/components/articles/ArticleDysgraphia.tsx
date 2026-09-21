import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleDysgraphiaProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleDysgraphia({ setCurrentArticle }: ArticleDysgraphiaProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dysgraphia-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dysgraphia-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dysgraphia-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dysgraphia-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dysgraphia-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Dysgraphia',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dysgraphia-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl">
      <style>
        {`
          sup {
            color: #10b981;
            font-weight: 600;
          }
        `}
      </style>
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl font-spartan text-[#0c264d]">
        Dysgraphia
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Dysgraphia</strong> is a specific learning difference that affects written expression and 
            the physical act of writing. It impacts a person's ability to produce legible, organized written 
            work and can involve difficulties with handwriting, spelling, and putting thoughts into written form 
            despite adequate language and cognitive abilities.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

       {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Dysgraphia"
            image="/images/dysgraphia/dysgraphia-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'Writing Learning Disorder, Disorder of Written Expression' },
              { label: 'Specialty', value: 'Educational psychology, Occupational therapy' },
              { label: 'Symptoms', value: 'Handwriting difficulties, spelling issues, written expression challenges' },
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
            src="/images/dysgraphia/dysgraphia-overview-intro.webp"
            alt="Overview of dysgraphia"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Dysgraphia affects 5-20% of the population and has a neurological basis.<sup>1</sup> It is completely unrelated to intelligence; individuals can have average or above-average cognitive abilities and often excel in verbal communication and creative thinking. The core issue lies in the mechanical aspects of writing, fine motor coordination, and orthographic coding (holding written words in working memory).
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dysgraphia-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CHARACTERISTICS */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dysgraphia/dysgraphia-symptoms-intro.webp"
            alt="Symptoms of dysgraphia"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Dysgraphia is often characterized by illegible handwriting, an awkward pencil grip, incredibly slow writing speeds, and inconsistent spacing. Beyond mechanics, it significantly impacts organizing thoughts on paper, grammar, and spelling despite strong verbal skills. This commonly leads to hand fatigue, immense frustration, and writing-related anxiety.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dysgraphia-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CAUSES */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dysgraphia/dysgraphia-causes-intro.webp"
            alt="Causes of dysgraphia"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Research indicates dysgraphia involves differences in brain areas responsible for language processing, motor planning, and working memory.<sup>2</sup> The cerebellum, which coordinates fine motor movements, may also play a crucial role. These underlying neurological differences impact how the brain plans and executes the physical movements required to write.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dysgraphia-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: DIAGNOSIS */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dysgraphia/dysgraphia-diagnosis-intro.webp"
            alt="Diagnosing dysgraphia"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Dysgraphia is diagnosed through comprehensive evaluations by educational psychologists or occupational therapists. Assessments measure written expression, fine motor skills, visual-motor integration, and spelling. Early identification is key to providing appropriate support and preventing secondary issues like academic struggles or diminished self-confidence.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dysgraphia-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: SUPPORT */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dysgraphia/dysgraphia-support-intro.webp"
            alt="Support for dysgraphia"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Accommodations often include extended time, reduced writing requirements, and note-taking support. Occupational therapy can help build fine motor skills, while assistive technology like speech-to-text software, graphic organizers, and keyboarding programs effectively bypass handwriting barriers entirely.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dysgraphia-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dysgraphia/dysgraphia-living-intro.webp"
            alt="Living with dysgraphia"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Dysgraphia</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            With the right strategies, individuals with dysgraphia pursue highly successful careers. Technology has been transformative, allowing people to demonstrate their knowledge effectively without physical writing strain. Thriving involves leveraging verbal strengths, self-advocacy, and utilizing appropriate workplace accommodations.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dysgraphia-living');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES */}
        <div className="mb-8">
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#10b981] mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Chung, P. J., Patel, D. R., & Nizami, I. (2020). Disorder of written expression and dysgraphia: Definition, diagnosis, and management. <i>Translational Pediatrics</i>.</p>
            <p>2. Berninger, V. W., & Richards, T. L. (2010). Inter-relationships among behavioral markers, genes, brain, and treatment in dyslexia and dysgraphia. <i>Future Neurology</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>Berninger, V. W. (2004). Understanding the 'graphia' in developmental dysgraphia: A developmental neuropsychological perspective for disorders in producing written language. <i>The Handbook of Learning Disabilities</i>.</p>
            <p>Graham, S., & Weintraub, N. (1996). A review of handwriting research: Progress and prospects from 1980 to 1994. <i>Educational Psychology Review</i>.</p>
            <p>MacArthur, C. A. (2009). Reflections on research on writing and technology for struggling writers. <i>Learning Disabilities Research & Practice</i>.</p>
            <p>Rosenblum, S., Weiss, P. L., & Parush, S. (2003). Product and process evaluation of handwriting difficulties. <i>Educational Psychology Review</i>.</p>
          </div>
        </div>
      </div>
    </article>
  );
}