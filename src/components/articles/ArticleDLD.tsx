import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleDLDProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleDLD({ setCurrentArticle }: ArticleDLDProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dld-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dld-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dld-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dld-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dld-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with DLD',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dld-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Developmental Language Disorder (DLD)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Developmental Language Disorder (DLD)</strong> is a neurodevelopmental condition 
            characterized by persistent difficulties in learning, understanding, and using spoken and/or 
            written language. Despite normal hearing and intelligence, individuals with DLD experience 
            significant challenges with language that are not explained by other conditions, representing 
            a distinct language-processing neurotype.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

       {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Developmental Language Disorder"
            image="/images/dld/dld-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'DLD, formerly Specific Language Impairment (SLI)' },
              { label: 'Specialty', value: 'Speech-Language Pathology' },
              { label: 'Symptoms', value: 'Persistent language learning difficulties' },
              { label: 'Not caused by', value: 'Hearing loss, autism, intellectual disability' },
              { label: 'Frequency', value: 'Approximately 7-10% of children' },
              { label: 'Duration', value: 'Lifelong, though presentations change' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dld/dld-overview-intro.webp"
            alt="Overview of DLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            DLD affects approximately 7-10% of children, making it one of the most common yet profoundly under-recognized developmental conditions.<sup className="text-[#10b981] font-bold ml-0.5">1, 2</sup> Unlike temporary language delays, DLD is a lifelong, distinct neurotype—not caused by hearing loss, autism, or intellectual disability—that alters how the brain processes grammar, vocabulary, and conversation.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dld-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CHARACTERISTICS */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dld/dld-symptoms-intro.webp"
            alt="Symptoms of DLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            DLD impacts expressive and receptive language in varying patterns, often causing individuals to struggle with limited vocabulary, grammatical errors, and following complex instructions. Pragmatic difficulties, such as taking turns in conversation or making inferences, frequently co-occur alongside speech sound challenges.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dld-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CAUSES */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dld/dld-causes-intro.webp"
            alt="Causes of DLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            DLD has a strong genetic component and reflects neurological differences in how the brain processes and organizes language.<sup className="text-[#10b981] font-bold ml-0.5">3</sup> Brain imaging studies have revealed differences in structure and connectivity in regions specifically associated with phonological processing, grammar, and semantics.<sup className="text-[#10b981] font-bold ml-0.5">4</sup>
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dld-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: DIAGNOSIS */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dld/dld-diagnosis-intro.webp"
            alt="Diagnosing DLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Diagnosis requires a comprehensive assessment by a speech-language pathologist, including standardized language testing, cognitive assessments, and hearing screenings. DLD is formally diagnosed when persistent language difficulties significantly impact daily functioning and cannot be explained by other developmental disabilities.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dld-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: SUPPORT */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dld/dld-support-intro.webp"
            alt="Support for DLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Effective support involves targeted speech-language therapy focused on functional communication, alongside educational accommodations like visual supports, simplified instructions, and extended time. Strategies such as chunking information, allowing extra processing time, and leaning into hands-on learning strengths can significantly improve daily functioning.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dld-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dld/dld-living-intro.webp"
            alt="Living with DLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with DLD</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            With appropriate support, individuals with DLD lead highly successful lives and often thrive in careers that leverage their non-verbal or creative strengths. Long-term success involves understanding one's communication profile, developing compensatory strategies, and recognizing DLD as a neurological difference rather than a personal failing.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dld-living');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>
      </div>

      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-8">
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#10b981] mb-4 border-b border-[#10b981] border-opacity-20 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Tomblin, J. B., Records, N. L., Buckwalter, P., Zhang, X., Smith, E., & O'Brien, M. (1997). Prevalence of specific language impairment in kindergarten children. <i>Journal of Speech, Language, and Hearing Research</i>.</p>
            <p>2. Norbury, C. F., Gooch, D., Wray, C., et al. (2016). The impact of nonverbal ability on prevalence and clinical presentation of language disorder: Evidence from a population study. <i>Journal of Child Psychology and Psychiatry</i>.</p>
            <p>3. Leonard, L. B. (2014). <i>Children with specific language impairment</i> (2nd ed.). MIT Press.</p>
            <p>4. Badcock, N. A., Bishop, D. V. M., Hardiman, M. J., Barry, J. G., & Watkins, K. E. (2012). Co-localisation of abnormal brain structure and function in specific language impairment. <i>Brain and Language</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-4 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>Bishop, D. V. M., Snowling, M. J., Thompson, P. A., Greenhalgh, T., & CATALISE Consortium. (2016). CATALISE: A multinational and multidisciplinary Delphi consensus study. Identifying language impairments in children. <i>PLOS ONE</i>.</p>
            <p>Ebbels, S. H., McCartney, E., Slonims, V., Dockrell, J. E., & Norbury, C. F. (2019). Evidence-based pathways to intervention for children with language disorders. <i>International Journal of Language & Communication Disorders</i>.</p>
            <p>Paul, R., & Norbury, C. F. (2012). <i>Language disorders from infancy through adolescence: Listening, speaking, reading, writing, and communicating</i> (4th ed.). Elsevier.</p>
          </div>
        </div>
      </div>
    </article>
  );
}