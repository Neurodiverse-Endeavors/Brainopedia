import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleGiftednessProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleGiftedness({ setCurrentArticle }: ArticleGiftednessProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('giftedness-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('giftedness-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('giftedness-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('giftedness-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('giftedness-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Giftedness',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('giftedness-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Giftedness
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Giftedness</strong> is a neurological difference characterized by advanced cognitive 
            abilities, exceptional intensity of experience, and asynchronous development across domains.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> 
            Far more than simply "being smart," giftedness represents a distinct neurotype involving 
            differences in brain structure, processing speed, pattern recognition, and emotional intensity 
            that fundamentally shape how individuals perceive and interact with the world.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Giftedness"
            image="/images/giftedness/giftedness-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'Intellectually gifted, high ability' },
              { label: 'Specialty', value: 'Gifted Education, Psychology' },
              { label: 'Symptoms', value: 'Advanced cognition, intensity, asynchrony' },
              { label: 'Not the same as', value: 'High achievement or academic success' },
              { label: 'Frequency', value: 'Approximately 2-10% depending on definition' },
              { label: 'Identified through', value: 'IQ testing, creativity, performance, potential' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/giftedness/giftedness-overview-intro.webp"
            alt="Overview of giftedness"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Giftedness affects approximately 2-10% of the population and involves structural and functional brain differences like enhanced neural connectivity and increased synaptic efficiency.<sup className="text-[#10b981] font-bold ml-0.5">2, 3</sup> Far more than just high achievement, it is a distinct neurotype that comes with unique cognitive, social, emotional, and existential experiences that require specialized understanding.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('giftedness-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CHARACTERISTICS */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/giftedness/giftedness-symptoms-intro.webp"
            alt="Symptoms of giftedness"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Gifted individuals demonstrate rapid learning, abstract thinking from a very young age, exceptional memory, and an intense preference for complexity. A hallmark of this neurotype is asynchronous development, where intellectual abilities far outpace emotional or physical development, often accompanied by heightened neurological "overexcitabilities."<sup className="text-[#10b981] font-bold ml-0.5">4</sup>
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('giftedness-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CAUSES */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/giftedness/giftedness-causes-intro.webp"
            alt="Causes of giftedness"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Giftedness has a strong genetic component and represents a natural variation in human neurology that is present from birth, altering how the brain processes information and responds to stimuli. The characteristic intensities and overexcitabilities commonly seen in the gifted are neurological responses rooted in differences in white matter development and neural efficiency, not behavioral choices.<sup className="text-[#10b981] font-bold ml-0.5">5</sup>
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('giftedness-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: DIAGNOSIS */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/giftedness/giftedness-diagnosis-intro.webp"
            alt="Diagnosing giftedness"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Identification traditionally involves IQ testing, academic achievement markers, and creativity assessments to evaluate raw cognitive potential rather than just academic performance. Culturally sensitive identification practices are heavily required, as giftedness in girls, children of color, and twice-exceptional individuals is frequently overlooked or misdiagnosed.<sup className="text-[#10b981] font-bold ml-0.5">6</sup>
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('giftedness-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: SUPPORT */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/giftedness/giftedness-support-intro.webp"
            alt="Support for giftedness"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Educational support must provide appropriately challenging curriculums, independent projects, and clustering with intellectual peers to prevent burnout, apathy, or underachievement. Social and emotional support is equally vital, as gifted individuals benefit immensely from connections with true peer groups, validation of their intense feelings, and strategies to manage perfectionism.<sup className="text-[#10b981] font-bold ml-0.5">7</sup>
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('giftedness-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/giftedness/giftedness-living-intro.webp"
            alt="Living with giftedness"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Giftedness</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Gifted individuals lead deeply fulfilling lives when they are able to embrace their neurotype, understand their asynchronous development, and find an intellectual community. With proper support and self-acceptance, they can successfully navigate unique challenges like multipotentiality or existential anxiety and utilize their intensity as a profound asset.<sup className="text-[#10b981] font-bold ml-0.5">8</sup>
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('giftedness-living');
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
            <p>1. Silverman, L. K. (2013). <i>Giftedness 101</i>. Springer Publishing Company.</p>
            <p>2. Geake, J. G., & Hansen, P. C. (2005). Neural correlates of intelligence as revealed by fMRI of fluid analogies. <i>NeuroImage</i>.</p>
            <p>3. Shaw, P., Greenstein, D., Lerch, J., et al. (2006). Intellectual ability and cortical development in children and adolescents. <i>Nature</i>.</p>
            <p>4. Dąbrowski, K. (1964). <i>Positive disintegration</i>. Little, Brown.</p>
            <p>5. Neubauer, A. C., & Fink, A. (2009). Intelligence and neural efficiency. <i>Neuroscience & Biobehavioral Reviews</i>.</p>
            <p>6. Ford, D. Y. (2013). <i>Recruiting and retaining culturally different students in gifted education</i>. Prufrock Press.</p>
            <p>7. Neihart, M., Reis, S. M., Robinson, N. M., & Moon, S. M. (Eds.). (2002). <i>The social and emotional development of gifted children</i>. Prufrock Press.</p>
            <p>8. Webb, J. T., Amend, E. R., Webb, N. E., Goerss, J., Beljan, P., & Olenchak, F. R. (2005). <i>Misdiagnosis and dual diagnoses of gifted children and adults</i>. Great Potential Press.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Pfeiffer, S. I. (2015). <i>Essentials of gifted assessment</i>. John Wiley & Sons.</li>
            <li>Winner, E. (1996). <i>Gifted children: Myths and realities</i>. Basic Books.</li>
            <li>National Association for Gifted Children. (2019). What is giftedness?</li>
            <li>Subotnik, R. F., Olszewski-Kubilius, P., & Worrell, F. C. (2011). Rethinking giftedness and gifted education. <i>Psychological Science in the Public Interest</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}