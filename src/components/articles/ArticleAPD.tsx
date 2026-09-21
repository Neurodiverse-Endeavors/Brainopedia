import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleAPDProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleAPD({ setCurrentArticle }: ArticleAPDProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('apd-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('apd-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('apd-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('apd-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('apd-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with APD',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('apd-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Auditory Processing Disorder (APD)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Auditory Processing Disorder (APD)</strong>, also known as Central Auditory Processing 
            Disorder (CAPD), is a neurological condition where the brain has difficulty processing and 
            interpreting auditory information. While hearing sensitivity is typically normal, the brain 
            struggles to make sense of what the ears detect—creating a unique auditory neurotype.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Auditory Processing Disorder"
            image="/images/apd/apd-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'APD, CAPD, Central Auditory Processing Disorder' },
              { label: 'Specialty', value: 'Audiology, Speech-Language Pathology' },
              { label: 'Symptoms', value: 'Difficulty processing auditory information' },
              { label: 'Key distinction', value: 'Not a hearing loss, but brain processing difference' },
              { label: 'Frequency', value: 'Approximately 5% of school-aged children' },
              { label: 'Related to', value: 'Often co-occurs with ADHD, dyslexia, autism' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/apd/apd-overview-intro.webp"
            alt="Overview of APD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Affecting approximately 5% of school-aged children, APD alters how the central auditory nervous system filters, analyzes, and integrates sound despite normal hearing sensitivity.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> The condition creates distinct challenges in distinguishing similar sounds, filtering background noise, and processing verbal instructions, often co-occurring with neurodivergent profiles like ADHD or dyslexia.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('apd-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CHARACTERISTICS */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/apd/apd-symptoms-intro.webp"
            alt="Symptoms of APD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Individuals with APD typically experience significant challenges with auditory discrimination, working memory, and processing speed, especially when trying to understand speech in noisy environments. These differences manifest as delayed responses to verbal instructions, difficulty distinguishing similar-sounding words, and feeling rapidly overwhelmed in acoustically busy spaces.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('apd-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CAUSES */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/apd/apd-causes-intro.webp"
            alt="Causes of APD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Brain imaging studies reveal that APD stems from distinct neurological differences in how the central auditory nervous system processes, filters, and integrates sound.<sup className="text-[#10b981] font-bold ml-0.5">2</sup> While the exact genetic or developmental origins remain under investigation, it represents a core difference in brain wiring rather than a peripheral hearing deficit.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('apd-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: DIAGNOSIS */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/apd/apd-diagnosis-intro.webp"
            alt="Diagnosing APD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Diagnosis requires a specialized battery of tests administered by an audiologist—typically after age seven when auditory pathways are more mature—to measure how the brain interprets complex sounds and speech in noise. This comprehensive evaluation explicitly rules out peripheral hearing loss and distinguishes APD from overlapping neurodivergent traits like ADHD or language disorders.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('apd-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: SUPPORT */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/apd/apd-support-intro.webp"
            alt="Support for APD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Effective management heavily relies on environmental accommodations, such as reducing background noise, utilizing personal FM amplification systems, and explicitly pairing verbal instructions with visual or written supports. Individuals also benefit significantly from compensatory technologies like closed captioning, noise-canceling headphones, and targeted auditory training therapies.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('apd-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/apd/apd-living-intro.webp"
            alt="Living with APD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with APD</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            With self-understanding and appropriate accommodations, individuals with APD successfully navigate their environments and thrive in diverse professional fields. Long-term success involves mastering self-advocacy, utilizing compensatory technologies to prevent auditory fatigue, and leaning into visual or hands-on strengths.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('apd-living');
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
            <p>1. Chermak, G. D., Tucker, E., & Seikel, J. A. (2002). Behavioral characteristics of auditory processing disorder and attention-deficit hyperactivity disorder: Predominantly inattentive type. <i>Journal of the American Academy of Audiology</i>.</p>
            <p>2. Banai, K., & Kraus, N. (2008). The dynamic brainstem: Implications for auditory processing disorder. In D. B. McFarland & A. T. Cacace (Eds.), <i>Current controversies in central auditory processing disorder</i>. Plural Publishing.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-4 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>American Speech-Language-Hearing Association. (2005). <i>(Central) Auditory Processing Disorders—The Role of the Audiologist - Technical Report</i>.</p>
            <p>Bellis, T. J. (2003). <i>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</i> (2nd ed.). Thomson Delmar Learning.</p>
            <p>Moore, D. R. (2007). Auditory processing disorders: Acquisition and treatment. <i>Journal of Communication Disorders</i>.</p>
          </div>
        </div>
      </div>
    </article>
  );
}