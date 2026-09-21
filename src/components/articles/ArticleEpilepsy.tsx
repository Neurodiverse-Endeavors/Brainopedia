import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleEpilepsyProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleEpilepsy({ setCurrentArticle }: ArticleEpilepsyProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('epilepsy-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('epilepsy-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('epilepsy-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('epilepsy-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('epilepsy-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Epilepsy',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('epilepsy-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Epilepsy
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed text-sm">
            <strong className="text-[#0c264d]">Epilepsy</strong> is a neurological condition characterized by recurrent seizures caused by sudden, abnormal electrical activity in the brain.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> As a form of neurodivergence, epilepsy represents a distinct pattern of brain function that creates unique cognitive, sensory, and perceptual experiences far beyond the physical seizures themselves.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        <div className="w-full">
          <InfoBox
            title="Epilepsy"
            image="/images/epilepsy/epilepsy-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'Seizure disorder' },
              { label: 'Specialty', value: 'Neurology' },
              { label: 'Symptoms', value: 'Recurrent seizures, altered consciousness' },
              { label: 'Causes', value: 'Various (genetic, structural, infectious, unknown)' },
              { label: 'Duration', value: 'Often lifelong' },
              { label: 'Frequency', value: '1 in 26 people develop epilepsy' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <ImageWithFallback 
            src="/images/epilepsy/epilepsy-overview-intro.webp"
            alt="Brain neurons and electrical activity - understanding epilepsy"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Epilepsy is a neurological condition characterized by recurrent seizures caused by sudden, abnormal electrical activity in the brain, affecting approximately 1 in 26 people globally.<sup className="text-[#10b981] font-bold ml-0.5">2</sup> Beyond the physical seizures, it fundamentally alters memory, emotional processing, and sensory experiences, creating a distinctly unique neurological profile and way of experiencing reality.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('epilepsy-overview');
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
            src="/images/epilepsy/epilepsy-symptoms-intro.webp"
            alt="Consciousness and perception - characteristics of epilepsy"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Epilepsy is primarily defined by recurrent seizures ranging from brief absence staring spells to full tonic-clonic events involving a total loss of consciousness.<sup className="text-[#10b981] font-bold ml-0.5">3</sup> Living with the condition also involves profoundly altered perception, with many experiencing predictive auras, intense periods of déjà vu, and highly unique creative insights linked directly to their altered neurological state.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('epilepsy-symptoms');
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
            src="/images/epilepsy/epilepsy-causes-intro.webp"
            alt="Neurological imaging - understanding the causes of epilepsy"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Epilepsy involves networks of neurons becoming chronically hyperexcitable due to diverse causes like genetic mutations, structural brain trauma, severe infections, or autoimmune conditions. These hyperexcitable networks can be provoked by highly personal triggers such as severe sleep deprivation, intense emotional stress, flickering lights, or hormonal shifts.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('epilepsy-causes');
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
            src="/images/epilepsy/epilepsy-diagnosis-intro.webp"
            alt="EEG and neurological testing - diagnosing epilepsy"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Epilepsy is diagnosed clinically by neurologists, requiring a history of at least two unprovoked seizures and extensive evaluations including electroencephalograms (EEG) and brain imaging (MRI).<sup className="text-[#10b981] font-bold ml-0.5">4</sup> Accurate diagnosis relies on classifying the specific epilepsy syndrome to effectively guide treatment while carefully ruling out other conditions like complex migraines or severe syncope.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('epilepsy-diagnosis');
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
            src="/images/epilepsy/epilepsy-support-intro.webp"
            alt="Medication and treatment - managing epilepsy"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Management primarily utilizes anti-seizure medications, which successfully control seizures for about 70% of individuals, alongside specialized dietary therapies or implanted neurostimulation devices.<sup className="text-[#10b981] font-bold ml-0.5">5</sup> Crucial lifestyle strategies include adhering to strict sleep schedules, rigorous stress management, meticulous seizure tracking, and educating family members on proper seizure first aid.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('epilepsy-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold clear-both"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Epilepsy</h2>
          
          <ImageWithFallback 
            src="/images/epilepsy/epilepsy-living-intro.webp"
            alt="Living well with epilepsy - quality of life and wellness"
            className="w-56 h-auto rounded-md float-right ml-6 mb-4 mt-1 shadow-sm"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed text-sm">
            Individuals with epilepsy successfully lead fulfilling lives across all areas of society, navigating both their unique cognitive experiences and the complex physical safety concerns of the condition.<sup className="text-[#10b981] font-bold ml-0.5">6</sup> Thriving involves actively reframing epilepsy as a distinct neurological way of being rather than a personal failing, while maintaining consistent treatment and combating societal stigma through continuous self-advocacy.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('epilepsy-living');
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
            <p>1. Fisher, R. S., van Emde Boas, W., Blume, W., et al. (2005). Epileptic seizures and epilepsy: Definitions proposed by the International League Against Epilepsy (ILAE) and the International Bureau for Epilepsy (IBE). <i>Epilepsia</i>.</p>
            <p>2. England, M. J., Liverman, C. T., Schultz, A. M., & Strawbridge, L. M. (Eds.). (2012). <i>Epilepsy across the spectrum: Promoting health and understanding</i>. National Academies Press.</p>
            <p>3. Fisher, R. S., Cross, J. H., French, J. A., et al. (2017). Operational classification of seizure types by the International League Against Epilepsy. <i>Epilepsia</i>.</p>
            <p>4. Fisher, R. S., Acevedo, C., Arzimanoglou, A., et al. (2014). ILAE official report: A practical clinical definition of epilepsy. <i>Epilepsia</i>.</p>
            <p>5. Kwan, P., & Brodie, M. J. (2000). Early identification of refractory epilepsy. <i>New England Journal of Medicine</i>.</p>
            <p>6. Jacoby, A., & Austin, J. K. (2007). Social stigma for adults and children with epilepsy. <i>Epilepsia</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Helmstaedter, C., & Witt, J. A. (2017). Epilepsy and cognition—A bidirectional relationship? <i>Seizure</i>.</li>
            <li>Rayner, G., Jackson, G. D., & Wilson, S. J. (2016). Mechanisms of memory impairment in epilepsy depend on age at disease onset. <i>Neurology</i>.</li>
            <li>Stafstrom, C. E., & Carmant, L. (2015). Seizures and epilepsy: An overview for neuroscientists. <i>Cold Spring Harbor Perspectives in Medicine</i>.</li>
            <li>World Health Organization. (2019). <i>Epilepsy: A public health imperative</i>. World Health Organization.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}