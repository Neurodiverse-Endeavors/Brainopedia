import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleNVLDProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleNVLD({ setCurrentArticle }: ArticleNVLDProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('nvld-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('nvld-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('nvld-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('nvld-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('nvld-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with NVLD',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('nvld-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Non-Verbal Learning Disability (NVLD)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Non-Verbal Learning Disability (NVLD)</strong> is a neurological condition characterized 
            by a specific pattern of strengths and challenges: exceptional verbal abilities combined with 
            difficulties in visual-spatial processing, motor coordination, and social perception. This creates 
            a unique learning profile where language-based tasks come easily while non-verbal information 
            processing presents significant challenges.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

       {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Non-Verbal Learning Disability"
            image="/images/nvld/nvld-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'NVLD, NLD' },
              { label: 'Specialty', value: 'Neuropsychology, Educational Psychology' },
              { label: 'Symptoms', value: 'Strong verbal skills, visual-spatial challenges' },
              { label: 'Key pattern', value: 'Left hemisphere strengths, right hemisphere challenges' },
              { label: 'Frequency', value: 'Approximately 3-4% of population' },
              { label: 'Often confused with', value: 'Autism spectrum (but distinct)' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/nvld/nvld-overview-intro.webp"
            alt="Overview of NVLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            NVLD represents a distinct pattern of brain organization—affecting approximately 3-4% of the population<sup className="text-[#10b981] font-bold ml-0.5">1</sup>—where right hemisphere processing differs while left hemisphere language skills often exceed typical development. Although it shares some social perception challenges with autism, NVLD is a distinctly separate neurological condition.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('nvld-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CHARACTERISTICS */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/nvld/nvld-symptoms-intro.webp"
            alt="Symptoms of NVLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            NVLD presents across three primary domains: visual-spatial processing (trouble with maps and spatial relationships), motor coordination (clumsiness), and social perception (difficulty reading non-verbal cues). In stark contrast to these challenges, individuals usually demonstrate remarkable strengths in vocabulary, verbal memory, and advanced auditory reasoning.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('nvld-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CAUSES */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/nvld/nvld-causes-intro.webp"
            alt="Causes of NVLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Research suggests NVLD stems from differences in right hemisphere information processing and white matter development, particularly affecting pattern recognition and holistic thinking.<sup className="text-[#10b981] font-bold ml-0.5">2</sup> While the specific genetic markers are still being mapped, this distinct neurological profile is present from birth and tends to run in families.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('nvld-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: DIAGNOSIS */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/nvld/nvld-diagnosis-intro.webp"
            alt="Diagnosing NVLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Diagnosis requires a comprehensive neuropsychological evaluation to identify the characteristic pattern of exceptionally high verbal abilities contrasting sharply with lower visual-spatial and motor skills. While often first noticed in elementary school when social and spatial demands increase, many individuals are not formally diagnosed until adulthood.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('nvld-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: SUPPORT */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/nvld/nvld-support-intro.webp"
            alt="Support for NVLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Effective support leans heavily on an individual's verbal strengths, utilizing strategies like explicitly narrating visual information and breaking complex tasks into verbal sequential steps. Occupational therapy and assistive technology, such as digital navigation and organizational apps, can also be highly beneficial in managing daily spatial challenges.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('nvld-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/nvld/nvld-living-intro.webp"
            alt="Living with NVLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with NVLD</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            With appropriate support, individuals with NVLD lead highly successful lives and frequently excel in language-heavy careers such as writing, law, or counseling. Thriving involves intentionally leveraging these exceptional verbal abilities, utilizing compensatory technology for spatial demands, and developing explicit self-advocacy strategies.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('nvld-living');
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
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-8">
          <h4 className="font-bold text-sm uppercase tracking-wider text-green-700 mb-4 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Pelletier, P. M., Ahmad, S. A., & Rourke, B. P. (2001). Classification rules for basic phonological processing disabilities and nonverbal learning disabilities: Formulation and external validity. <i>Child Neuropsychology</i>.</p>
            <p>2. Rourke, B. P. (1989). <i>Nonverbal learning disabilities: The syndrome and the model</i>. Guilford Press.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-cyan-500 mb-4 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-4 text-slate-700 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Davis, J. M., & Broitman, J. (2011). <i>Nonverbal learning disabilities in children: Bridging the gap between science and practice</i>. Springer Science & Business Media.</li>
            <li>Fine, J. G., Semrud-Clikeman, M., Bledsoe, J. C., & Musielak, K. A. (2013). A critical review of the literature on NLD as a developmental disorder. <i>Child Neuropsychology</i>.</li>
            <li>Semrud-Clikeman, M., & Hynd, G. W. (1990). Right hemispheric dysfunction in nonverbal learning disabilities: Social, academic, and adaptive functioning in adults and children. <i>Psychological Bulletin</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}