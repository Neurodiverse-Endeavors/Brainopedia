import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleHyperlexiaProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleHyperlexia({ setCurrentArticle }: ArticleHyperlexiaProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('hyperlexia-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('hyperlexia-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('hyperlexia-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('hyperlexia-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('hyperlexia-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Hyperlexia',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('hyperlexia-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Hyperlexia
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Hyperlexia</strong> is a neurodevelopmental condition characterized by an advanced ability 
            to read at an early age, often significantly beyond what would be expected for a child's 
            chronological age. However, this precocious decoding ability is typically accompanied by 
            difficulties with verbal language comprehension and social communication.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Hyperlexia"
            image="/images/hyperlexia/hyperlexia-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'Precocious Reading Syndrome' },
              { label: 'Specialty', value: 'Developmental Pediatrics, Speech-Language Pathology' },
              { label: 'Symptoms', value: 'Early reading ability, language comprehension difficulties' },
              { label: 'Usual onset', value: 'Ages 2-5' },
              { label: 'Duration', value: 'Lifelong, though symptoms may change over time' },
              { label: 'Frequency', value: 'Less than 1% of population' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/hyperlexia/hyperlexia-overview-intro.webp"
            alt="Overview of hyperlexia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Hyperlexia is a relatively rare neurodevelopmental condition, estimated to affect fewer than 1% of the population, where children often begin reading spontaneously before age five.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> Despite their advanced decoding and word recognition skills, individuals consistently face significant challenges with reading comprehension and verbal language.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('hyperlexia-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CHARACTERISTICS */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/hyperlexia/hyperlexia-symptoms-intro.webp"
            alt="Symptoms of hyperlexia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Hyperlexia is defined by an intense, early fascination with letters and numbers that leads to self-taught reading abilities. However, this remarkable decoding skill is paired with stark challenges in understanding spoken language, grasping abstract concepts, and navigating social communication.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('hyperlexia-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CAUSES */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/hyperlexia/hyperlexia-causes-intro.webp"
            alt="Causes of hyperlexia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Research suggests hyperlexia involves distinct differences in the brain's language processing centers, representing a unique neurological pattern where visual word recognition pathways develop exceptionally early.<sup className="text-[#10b981] font-bold ml-0.5">2</sup> While it frequently co-occurs with autism spectrum disorder, hyperlexia is recognized as a separate and distinct neurological phenomenon.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('hyperlexia-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: DIAGNOSIS */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/hyperlexia/hyperlexia-diagnosis-intro.webp"
            alt="Diagnosing hyperlexia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Identification is typically conducted by developmental pediatricians or speech-language pathologists between ages two and five when the severe contrast between reading ability and language comprehension becomes apparent. The evaluation process analyzes the gap between decoding and comprehension skills while screening for social communication challenges and co-occurring conditions.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('hyperlexia-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: SUPPORT */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/hyperlexia/hyperlexia-support-intro.webp"
            alt="Support for hyperlexia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Effective support leverages the individual's exceptional reading abilities to build their language comprehension, using written words to explicitly teach spoken vocabulary and social rules. Strategies include utilizing visual aids, teaching specific reading comprehension techniques, and providing explicit instruction on pragmatic language and social navigation.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('hyperlexia-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/hyperlexia/hyperlexia-living-intro.webp"
            alt="Living with hyperlexia"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Hyperlexia</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            With early intervention and targeted support, individuals with hyperlexia can make significant progress and lead highly fulfilling lives. The key to thriving is honoring their advanced reading and visual memory abilities while actively scaffolding their comprehension and accessing necessary educational accommodations.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('hyperlexia-living');
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
            <p>1. Burd, L., & Kerbeshian, J. (1985). Hyperlexia and a variant of hypergraphia. <i>Perceptual and Motor Skills</i>.</p>
            <p>2. Turkeltaub, P. E., Flowers, D. L., Verbalis, A., Miranda, M., Gareau, L., & Eden, G. F. (2004). The neural basis of hyperlexic reading: An fMRI case study. <i>Neuron</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Grigorenko, E. L., Klin, A., & Volkmar, F. (2003). Annotation: Hyperlexia: disability or superability? <i>Journal of Child Psychology and Psychiatry</i>.</li>
            <li>Nation, K. (1999). Reading skills in hyperlexia: A developmental perspective. <i>Psychological Bulletin</i>.</li>
            <li>Newman, T. M., Macomber, D., Naples, A. J., Babitz, T., Volkmar, F., & Grigorenko, E. L. (2007). Hyperlexia in children with autism spectrum disorders. <i>Journal of Autism and Developmental Disorders</i>.</li>
            <li>Ostrolenk, A., Bao, V. A., Mottron, L., Collignon, O., & Bertone, A. (2019). Hyperlexia: Systematic review, neurocognitive modelling, and outcome. <i>Neuroscience & Biobehavioral Reviews</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}