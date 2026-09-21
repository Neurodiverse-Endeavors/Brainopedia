import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleDyscalculiaProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleDyscalculia({ setCurrentArticle }: ArticleDyscalculiaProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyscalculia-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyscalculia-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyscalculia-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyscalculia-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyscalculia-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Dyscalculia',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyscalculia-living');
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
        Dyscalculia
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Dyscalculia</strong> is a specific learning difference that affects a person's ability to 
            understand and work with numbers and mathematical concepts. Often called "math dyslexia," dyscalculia 
            is characterized by difficulties with number sense, mathematical reasoning, and performing mathematical 
            calculations that are inconsistent with overall cognitive abilities.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

       {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Dyscalculia"
            image="/images/dyscalculia/dyscalculia-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'Math learning disability, number blindness' },
              { label: 'Specialty', value: 'Educational psychology, Neurology' },
              { label: 'Symptoms', value: 'Difficulty with numbers, calculations, and math concepts' },
              { label: 'Usual onset', value: 'Early childhood' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: '3-7% of population' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dyscalculia/dyscalculia-overview-intro.webp"
            alt="Overview of dyscalculia"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Dyscalculia affects approximately 3-7% of the population and is thought to have a neurological basis.<sup>1</sup> Like dyslexia, it is entirely unrelated to intelligence—individuals with dyscalculia can have average or above-average intelligence and often excel in reading, writing, or the arts. It specifically impacts the ability to understand numerical quantities, symbols, and their relationships.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyscalculia-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CHARACTERISTICS */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dyscalculia/dyscalculia-symptoms-intro.webp"
            alt="Symptoms of dyscalculia"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Dyscalculia goes far beyond struggling with algebra. It is characterized by core deficits in "number sense"—struggling to understand quantities, estimating distances, or counting accurately. Beyond the classroom, these hurdles often impact daily living tasks like financial budgeting, measuring ingredients, reading analog clocks, and navigating directions.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyscalculia-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CAUSES */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dyscalculia/dyscalculia-causes-intro.webp"
            alt="Causes of dyscalculia"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Brain imaging studies suggest that dyscalculia involves differences in the areas responsible for numerical processing, particularly the intraparietal sulcus located in the parietal lobe.<sup>2</sup> This neurological difference tends to run in families, strongly pointing toward a genetic component that affects how basic mathematical relationships are intuitively processed.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyscalculia-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: DIAGNOSIS */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dyscalculia/dyscalculia-diagnosis-intro.webp"
            alt="Diagnosing dyscalculia"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            A formal diagnosis requires a comprehensive evaluation by an educational or neuropsychologist. The assessment measures mathematical ability, numerical reasoning, and working memory to rule out other factors. Because dyscalculia is less recognized than dyslexia, many individuals aren't diagnosed until adulthood when numerical demands increase at work or in daily life.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyscalculia-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: SUPPORT */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dyscalculia/dyscalculia-support-intro.webp"
            alt="Support for dyscalculia"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Effective support relies on multi-sensory instruction, breaking complex problems down into smaller steps, and physically using concrete manipulatives to build a visual understanding of math concepts. Classroom accommodations often include calculator use, access to formula sheets, and extended testing time, while adults benefit heavily from digital tools and financial management apps.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyscalculia-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dyscalculia/dyscalculia-living-intro.webp"
            alt="Living with dyscalculia"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Dyscalculia</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            With appropriate strategies, individuals with dyscalculia can pursue highly successful academic and professional careers. Thriving involves understanding your unique learning profile, leaning heavily into strengths outside of mathematics, utilizing modern technology to bypass calculation hurdles, and knowing your legal rights to educational and workplace accommodations.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dyscalculia-living');
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
            <p>1. Gross-Tsur, V., Manor, O., & Shalev, R. S. (1996). Developmental dyscalculia: Prevalence and demographic features. <i>Developmental Medicine & Child Neurology</i>.</p>
            <p>2. Butterworth, B., Varma, S., & Laurillard, D. (2011). Dyscalculia: From brain to education. <i>Science</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>Dehaene, S. (1997). <i>The Number Sense: How the Mind Creates Mathematics</i>. Oxford University Press.</p>
            <p>Geary, D. C. (2004). Mathematics and learning disabilities. <i>Journal of Learning Disabilities</i>.</p>
            <p>Kaufmann, L., & von Aster, M. (2012). The diagnosis and management of dyscalculia. <i>Deutsches Ärzteblatt International</i>.</p>
            <p>Shalev, R. S. (2004). Developmental dyscalculia. <i>Journal of Child Neurology</i>.</p>
          </div>
        </div>
      </div>
    </article>
  );
}