import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticledownsyndromeProps {
  setCurrentArticle?: (article: string) => void;
}

export function Articledownsyndrome({ setCurrentArticle }: ArticledownsyndromeProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('downsyndrome-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('downsyndrome-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('downsyndrome-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('downsyndrome-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('downsyndrome-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Down Syndrome',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('downsyndrome-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Down Syndrome
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed text-sm">
            <strong className="text-[#0c264d]">Down syndrome</strong> (also known as Trisomy 21) is a genetic condition caused by the presence of an extra copy of chromosome 21.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> This naturally occurring chromosomal difference results in a distinct neurocognitive profile, characteristic physical features, and specific health considerations that manifest across all racial and socioeconomic groups.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        <div className="w-full">
          <InfoBox
            title="Down Syndrome"
            image="/images/downsyndrome/downsyndrome-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'Trisomy 21' },
              { label: 'Specialty', value: 'Medical Genetics, Developmental Medicine' },
              { label: 'Cause', value: 'Extra copy of chromosome 21' },
              { label: 'Identified', value: 'Prenatal testing or at birth' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: 'Approximately 1 in 700 births' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <ImageWithFallback 
            src="/images/downsyndrome/downsyndrome-overview-intro.webp"
            alt="Chromosomes and genetics - understanding Down syndrome"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Down syndrome is a naturally occurring genetic variation caused by the presence of an extra copy of chromosome 21, resulting in a distinct neurocognitive profile and characteristic physical features.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> Due to immensely improved medical care and societal inclusion, individuals with Down syndrome now enjoy a life expectancy of 60+ years and participate fully as engaged members of their communities.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('downsyndrome-overview');
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
            src="/images/downsyndrome/downsyndrome-symptoms-intro.webp"
            alt="Visual learning and education - cognitive strengths in Down syndrome"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Individuals possess a unique cognitive profile highlighted by incredible strengths in visual-spatial processing, learning through imitation, and highly affectionate emotional intelligence. While expressive language is typically delayed and low muscle tone is common, they frequently display exceptional long-term memory for faces and deep social awareness.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('downsyndrome-symptoms');
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
            src="/images/downsyndrome/downsyndrome-causes-intro.webp"
            alt="Chromosome 21 - genetic basis of Down syndrome"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Down syndrome is a naturally occurring genetic variation that happens when a spontaneous event during cell division creates an extra copy of chromosome 21, with the vast majority of cases not being inherited.<sup className="text-[#10b981] font-bold ml-0.5">19</sup> This additional genetic material directly influences physical development throughout the body, particularly shaping brain structure and the resulting cognitive profile.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('downsyndrome-causes');
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
            src="/images/downsyndrome/downsyndrome-diagnosis-intro.webp"
            alt="Genetic testing - diagnosing Down syndrome"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            The condition can be identified before birth through prenatal screening blood tests followed by definitive diagnostic testing like amniocentesis, or immediately at birth by observable physical characteristics.<sup className="text-[#10b981] font-bold ml-0.5">25</sup> Early identification is vital as it allows families to connect rapidly with early intervention services, specialized healthcare providers, and local community support networks.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('downsyndrome-diagnosis');
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
            src="/images/downsyndrome/downsyndrome-support-intro.webp"
            alt="Healthcare and wellness - supporting individuals with Down syndrome"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Comprehensive support leverages their visual learning strengths through inclusive classrooms, early intervention therapies, and specialized literacy instruction.<sup className="text-[#10b981] font-bold ml-0.5">32</sup> Modern management also prioritizes rigorous preventative healthcare tailored to specific medical guidelines, competitive integrated employment, and actively advocating for supported decision-making over strict guardianship.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('downsyndrome-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Down Syndrome</h2>
          
          <ImageWithFallback 
            src="/images/downsyndrome/downsyndrome-living-intro.webp"
            alt="Community inclusion - living with Down syndrome"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Individuals with Down syndrome lead incredibly fulfilling lives, with many adults living semi-independently, pursuing competitive careers, and forming deep romantic relationships.<sup className="text-[#10b981] font-bold ml-0.5">40</sup> The ongoing advocacy movement continues to aggressively dismantle stigmas, proving that these individuals are defined by their dreams and capabilities rather than their chromosomal count.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('downsyndrome-living');
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
            <p>1. Lejeune, J., Gautier, M., & Turpin, R. (1959). Study of somatic chromosomes from 9 mongoloid children. <i>Comptes Rendus Hebdomadaires des Seances de l'Academie des Sciences</i>. https://pubmed.ncbi.nlm.nih.gov/13639368/</p>
            <p>2. Antonarakis, S. E., Lyle, R., Dermitzakis, E. T., Reymond, A., & Deutsch, S. (2004). Chromosome 21 and Down syndrome: From genomics to pathophysiology. <i>Nature Reviews Genetics</i>. https://doi.org/10.1038/nrg1448</p>
            <p>3. Parker, S. E., Mai, C. T., Canfield, M. A., et al. (2010). Updated national birth prevalence estimates for selected birth defects in the United States, 2004-2006. <i>Birth Defects Research Part A: Clinical and Molecular Teratology</i>. https://doi.org/10.1002/bdra.20735</p>
            <p>4. Mai, C. T., Isenburg, J. L., Canfield, M. A., et al. (2019). National population-based estimates for major birth defects, 2010-2014. <i>Birth Defects Research</i>. https://doi.org/10.1002/bdr2.1589</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Down, J. L. (1866). Observations on an ethnic classification of idiots. <i>London Hospital Reports</i>. https://wellcomecollection.org/works/w6k3q77k</li>
            <li>Chapman, R. S., & Hesketh, L. J. (2000). Behavioral phenotype of individuals with Down syndrome. <i>Mental Retardation and Developmental Disabilities Research Reviews</i>. https://doi.org/10.1002/1098-2779(2000)6:2&lt;84::AID-MRDD2&gt;3.0.CO;2-P</li>
          </ul>
        </div>
      </div>
    </article>
  );
}