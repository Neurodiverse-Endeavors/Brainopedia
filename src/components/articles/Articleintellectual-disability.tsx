import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleIntellectualDisabilityProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleIntellectualDisability({ setCurrentArticle }: ArticleIntellectualDisabilityProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('intellectual-disability-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('intellectual-disability-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('intellectual-disability-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('intellectual-disability-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('intellectual-disability-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Intellectual Disability',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('intellectual-disability-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Intellectual Disability (ID)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed text-sm">
            <strong className="text-[#0c264d]">Intellectual Disability (ID)</strong>, also known as intellectual developmental disorder, is a neurodevelopmental condition characterized by significant limitations in both intellectual functioning (reasoning, learning, problem-solving) and adaptive behavior (practical, social, and conceptual skills).<sup className="text-[#10b981] font-bold ml-0.5">1</sup> ID represents a diverse spectrum of cognitive functioning and is a distinct neurotype with unique support needs and strengths.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        <div className="w-full">
          <InfoBox
            title="Intellectual Disability"
            image="/images/intellectual-disability/intellectual-disability-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'ID, Intellectual developmental disorder' },
              { label: 'Specialty', value: 'Developmental Medicine, Psychology' },
              { label: 'Symptoms', value: 'Limitations in cognitive and adaptive functioning' },
              { label: 'Onset', value: 'During developmental period (before age 18)' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: 'Approximately 1-3% of global population' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <ImageWithFallback 
            src="/images/intellectual-disability/intellectual-disability-overview-intro.webp"
            alt="Learning and cognitive development - understanding intellectual disability"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Intellectual disability affects approximately 1-3% of the global population and represents a highly diverse spectrum of cognitive functioning.<sup className="text-[#10b981] font-bold ml-0.5">2</sup> With appropriate person-centered supports and environmental accommodations, individuals with ID lead fulfilling, self-determined lives and contribute meaningfully to their communities.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('id-overview');
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
            src="/images/intellectual-disability/intellectual-disability-symptoms-intro.webp"
            alt="Adaptive skills and daily living - characteristics of ID"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            ID affects conceptual, social, and practical adaptive skills, with support needs ranging from intermittent assistance to pervasive 24-hour care.<sup className="text-[#10b981] font-bold ml-0.5">3</sup> Alongside these challenges, individuals frequently possess profound strengths in emotional intuition, deep loyalty in relationships, and highly authentic social interactions.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('id-symptoms');
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
            src="/images/intellectual-disability/intellectual-disability-causes-intro.webp"
            alt="Brain development - neurological basis of intellectual disability"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            ID stems from diverse factors that disrupt early brain development, including genetic variations like Down syndrome or environmental factors such as prenatal complications. While medical evaluations can identify many genetic or structural origins, the specific cause remains unidentified in up to 40% of cases, highlighting the immense complexity of neurological development.<sup className="text-[#10b981] font-bold ml-0.5">4</sup>
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('id-causes');
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
            src="/images/intellectual-disability/intellectual-disability-diagnosis-intro.webp"
            alt="Psychological assessment - diagnosing intellectual disability"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Diagnosis is conducted by developmental specialists through comprehensive evaluations measuring both intellectual ability and adaptive functioning.<sup className="text-[#10b981] font-bold ml-0.5">5</sup> Modern diagnostic practices focus actively on identifying the individual's unique strengths rather than just deficits, ensuring they receive the most empowering and appropriate structural supports.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('id-diagnosis');
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
            src="/images/intellectual-disability/intellectual-disability-support-intro.webp"
            alt="Supported employment and training - supporting individuals with ID"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Effective management prioritizes inclusion and self-determination through Individualized Education Programs (IEPs), functional life skills training, and supported employment initiatives. Strong self-advocacy support is critical, actively promoting supported decision-making over strict guardianship to protect the individual's civil rights and personal autonomy.<sup className="text-[#10b981] font-bold ml-0.5">6</sup>
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('id-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Intellectual Disability</h2>
          
          <ImageWithFallback 
            src="/images/intellectual-disability/intellectual-disability-living-intro.webp"
            alt="Community inclusion - living with intellectual disability"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Individuals with intellectual disabilities lead highly meaningful lives across all areas of society when provided with appropriate structural inclusion.<sup className="text-[#10b981] font-bold ml-0.5">7</sup> Led by self-advocates, the global movement continues to aggressively advance workplace inclusion, personal rights, and the unconditional recognition of full personhood for the ID community.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('id-living');
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
            <p>1. American Psychiatric Association. (2013). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed.). American Psychiatric Publishing.</p>
            <p>2. Maulik, P. K., Mascarenhas, M. N., Mathers, C. D., Dua, T., & Saxena, S. (2011). Prevalence of intellectual disability: A meta-analysis of population-based studies. <i>Research in Developmental Disabilities</i>.</p>
            <p>3. Schalock, R. L., Borthwick-Duffy, S. A., Bradley, V. J., et al. (2010). <i>Intellectual disability: Definition, classification, and systems of supports</i> (11th ed.). American Association on Intellectual and Developmental Disabilities.</p>
            <p>4. Daily, D. K., Ardinger, H. H., & Holmes, G. E. (2000). Identification and evaluation of mental retardation. <i>American Family Physician</i>.</p>
            <p>5. Tassé, M. J., Schalock, R. L., Balboni, G., et al. (2012). The construct of adaptive behavior: Its conceptualization, measurement, and use in the field of intellectual disability. <i>American Journal on Intellectual and Developmental Disabilities</i>.</p>
            <p>6. Wehmeyer, M. L., & Abery, B. H. (2013). Self-determination and choice. <i>Intellectual and Developmental Disabilities</i>.</p>
            <p>7. Shakespeare, T. (2006). The social model of disability. In L. J. Davis (Ed.), <i>The disability studies reader</i> (2nd ed.). Routledge.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Schalock, R. L., Luckasson, R. A., & Shogren, K. A. (2007). The renaming of mental retardation: Understanding the change to the term intellectual disability. <i>Intellectual and Developmental Disabilities</i>.</li>
            <li>World Health Organization. (2019). <i>International statistical classification of diseases and related health problems</i> (11th ed.). World Health Organization.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}