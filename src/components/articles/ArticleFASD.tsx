import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleFASDProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleFASD({ setCurrentArticle }: ArticleFASDProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('fasd-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('fasd-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('fasd-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('fasd-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('fasd-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with FASD',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('fasd-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Fetal Alcohol Spectrum Disorder (FASD)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed text-sm">
            <strong className="text-[#0c264d]">Fetal Alcohol Spectrum Disorder (FASD)</strong> is a permanent brain-based physical disability caused by prenatal alcohol exposure.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> It is the leading preventable cause of developmental disability in the Western world, yet remains one of the most misunderstood and under-diagnosed conditions despite its significant effects on cognition, behavior, and physical health.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        <div className="w-full">
          <InfoBox
            title="Fetal Alcohol Spectrum Disorder"
            image="/images/fasd/fasd-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'FASD, includes FAS, pFAS, ARND, ARBD' },
              { label: 'Specialty', value: 'Developmental Medicine, Neuropsychology' },
              { label: 'Cause', value: 'Prenatal alcohol exposure' },
              { label: 'Nature', value: 'Permanent brain-based physical disability' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: 'Estimated 2-5% of US population' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <ImageWithFallback 
            src="/images/fasd/fasd-overview-intro.webp"
            alt="Prenatal health and fetal development - understanding FASD"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Fetal Alcohol Spectrum Disorder (FASD) is a permanent brain-based physical disability caused by prenatal alcohol exposure, affecting an estimated 2-5% of the population.<sup className="text-[#10b981] font-bold ml-0.5">2</sup> While the neurological damage is lifelong, individuals with FASD can absolutely thrive with early diagnosis, highly protective environments, and neurodiversity-affirming approaches.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('fasd-overview');
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
            src="/images/fasd/fasd-symptoms-intro.webp"
            alt="Cognitive and executive function challenges in FASD"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            FASD frequently manifests as severe executive functioning challenges, including poor impulse control, difficulty learning from consequences, and significant memory inconsistencies.<sup className="text-[#10b981] font-bold ml-0.5">3</sup> Because many individuals lack the classic facial features and are highly outgoing, it is frequently misdiagnosed as an "invisible disability" or mistaken for isolated ADHD.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('fasd-symptoms');
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
            src="/images/fasd/fasd-causes-intro.webp"
            alt="Fetal brain development - neurological basis of FASD"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            FASD is exclusively caused by prenatal alcohol exposure acting as a teratogen, aggressively interfering with cell development and neural organization in the developing fetus.<sup className="text-[#10b981] font-bold ml-0.5">4</sup> This exposure causes permanent changes to brain structure and pathways, directly resulting in the functional impairments that clinically define the condition.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('fasd-causes');
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
            src="/images/fasd/fasd-diagnosis-intro.webp"
            alt="Clinical evaluation - diagnosing FASD"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            FASD is diagnosed through a comprehensive multidisciplinary evaluation utilizing detailed pregnancy history, physical examinations, and extensive neuropsychological testing. Early and accurate diagnosis is absolutely critical, as it unlocks targeted interventions and helps prevent severe secondary disabilities like legal system involvement or chronic unemployment.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('fasd-diagnosis');
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
            src="/images/fasd/fasd-support-intro.webp"
            alt="Supportive care and therapy - supporting individuals with FASD"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            FASD requires a neurodevelopmental approach that recognizes brain-based differences rather than punishing behaviors as willful or oppositional.<sup className="text-[#10b981] font-bold ml-0.5">5</sup> Crucial environmental modifications include utilizing highly concrete instructions with visual supports, maintaining incredibly stable home environments, and securing supported employment with robust job coaching.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('fasd-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with FASD</h2>
          
          <ImageWithFallback 
            src="/images/fasd/fasd-living-intro.webp"
            alt="Stability and meaningful life - living with FASD"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Individuals with FASD lead deeply fulfilling lives when their unique neurocognitive profile is properly understood and fully supported.<sup className="text-[#10b981] font-bold ml-0.5">6</sup> The key to lifelong success is treating FASD as a permanent physical disability requiring developmentally appropriate accommodations rather than expecting the individual to simply outgrow their neurological symptoms.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('fasd-living');
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
            <p>1. Jones, K. L., & Smith, D. W. (1973). Recognition of the fetal alcohol syndrome in early infancy. <i>The Lancet</i>.</p>
            <p>2. May, P. A., Chambers, C. D., Kalberg, W. O., et al. (2018). Prevalence of fetal alcohol spectrum disorders in 4 US communities. <i>JAMA</i>.</p>
            <p>3. Mattson, S. N., Crocker, N., & Nguyen, T. T. (2011). Fetal alcohol spectrum disorders: Neuropsychological and behavioral features. <i>Neuropsychology Review</i>.</p>
            <p>4. Riley, E. P., Infante, M. A., & Warren, K. R. (2011). Fetal alcohol spectrum disorders: An overview. <i>Neuropsychology Review</i>.</p>
            <p>5. Petrenko, C. L. M. (2015). Positive behavioral interventions and family support for fetal alcohol spectrum disorders. <i>Current Developmental Disorders Reports</i>.</p>
            <p>6. Streissguth, A. P., Bookstein, F. L., Barr, H. M., et al. (2004). Risk factors for adverse life outcomes in fetal alcohol syndrome and fetal alcohol effects. <i>Journal of Developmental and Behavioral Pediatrics</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Burd, L., Roberts, D., Olson, M., & Odendaal, H. (2007). Ethanol and the placenta: A review. <i>The Journal of Maternal-Fetal & Neonatal Medicine</i>.</li>
            <li>American Academy of Pediatrics. (2015). Fetal alcohol spectrum disorders. <i>Pediatrics</i>.</li>
            <li>Chudley, A. E., Conry, J., Cook, J. L., et al. (2005). Fetal alcohol spectrum disorder: Canadian guidelines for diagnosis. <i>CMAJ</i>.</li>
            <li>Hoyme, H. E., Kalberg, W. O., Elliott, A. J., et al. (2016). Updated clinical guidelines for diagnosing fetal alcohol spectrum disorders. <i>Pediatrics</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}