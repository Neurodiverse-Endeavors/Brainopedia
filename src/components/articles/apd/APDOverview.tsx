import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Ear, Brain, XCircle, Search, Layers, Activity, Users, Network, BookOpen, Clock, AlertTriangle, Lightbulb, ShieldCheck, Heart, FileText, Target } from 'lucide-react';

interface APDOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function APDOverview({ setCurrentArticle, initialTab }: APDOverviewProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'definition');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* GLOBAL STYLE FOR CITATIONS */}
      <style>
        {`
          sup {
            color: #10b981;
            font-weight: bold;
            margin-left: 2px;
          }
        `}
      </style>

      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Auditory Processing Disorder: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('apd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About APD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('apd')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About APD
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('definition')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'definition'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Definition & Subtypes
        </button>
        <button
          onClick={() => setActiveTab('demographics')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'demographics'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Demographics & Co-occurrence
        </button>
        <button
          onClick={() => setActiveTab('impact')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'impact'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Impact & Trajectory
        </button>
      </div>

      {/* ==========================================
          TAB 1: DEFINITION & SUBTYPES
      ========================================== */}
      {activeTab === 'definition' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Definition Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">What is APD?</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-overview-definition.webp"
              alt="Person with normal hearing but a highlighted brain processing center"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Auditory Processing Disorder (APD)—also known as Central Auditory Processing Disorder (CAPD)—is a neurological condition affecting how the brain interprets sound. The individual's ears detect sound perfectly, but the brain struggles to organize and make sense of what was heard.
            </p>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Brain className="text-[#0A9DC4] w-5 h-5" /> A Central Deficit
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                The American Speech-Language-Hearing Association (ASHA) defines APD as a deficit in the neural processing of auditory information, affecting sound localization, pattern recognition, and auditory performance in degraded environments.<sup>1</sup>
              </p>
            </div>

            <div>
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <XCircle className="text-red-500 w-5 h-5" /> What APD Is Not
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                It is not a hearing loss (hearing thresholds are strictly normal). It is also not primarily a higher-order language disorder or a pure attention deficit, although it heavily impacts how an individual responds to spoken language.
              </p>
            </div>
          </div>

          {/* Subtypes Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Types & Subtypes of APD</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-overview-subtypes-hero.webp"
              alt="Infographic brain map visually separating the different auditory processing deficits"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#ffd166] pb-2">Auditory Decoding</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Difficulty analyzing and identifying sounds, particularly in background noise. The brain struggles to extract the correct acoustic features from a muddy auditory signal.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#ffd166] pb-2">Prosodic Deficit</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Difficulty interpreting prosody—the rhythm, stress, and intonation patterns of speech. The individual frequently misses sarcasm, tone, or subtle emotional nuance.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#ffd166] pb-2">Integration</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Difficulty integrating auditory information across both hemispheres. It heavily affects the ability to combine separate auditory pieces into a single, meaningful whole.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#ffd166] pb-2">Output-Organization</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Difficulty organizing, recalling, and sequencing auditory information. This severely impairs tasks requiring short-term auditory memory and following multi-step directions.</p>
              </div>
            </div>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. American Speech-Language-Hearing Association. (2005). (Central) auditory processing disorders. <i>Technical Report</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Bellis, T. J. (2011). Assessment and management of central auditory processing disorders: From science to practice. <i>Plural Publishing</i>.</li>
                <li>Cacace, A. T., & McFarland, D. J. (2005). The importance of modality specificity in diagnosing central auditory processing disorder. <i>American Journal of Audiology</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: DEMOGRAPHICS & CO-OCCURRENCE
      ========================================== */}
      {activeTab === 'demographics' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Demographics Card (Slate) - CHANGED TO CENTERED W-64 HERO */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Prevalence & Demographics</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-overview-demographics.webp"
              alt="Diverse classroom setting where a student struggles to process verbal instructions"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-300"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              APD is frequently underdiagnosed due to limited clinical awareness and a lack of standardized assessment availability in many school districts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Activity className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Statistical Prevalence</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Estimates suggest approximately 2-5% of school-aged children have APD.<sup>1</sup> Some research points to a male-to-female ratio of roughly 2:1, though this may heavily reflect referral bias rather than true biological prevalence.<sup>2</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Clock className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Age of Diagnosis</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">While symptoms are often apparent much earlier, formal diagnosis is typically delayed until a child is age 7 or older, when the central auditory system has matured enough for valid clinical testing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Co-occurring Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Co-occurring Conditions</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-overview-cooccurring-hero.webp"
              alt="Venn diagram showing APD intersecting with ADHD, Dyslexia, and Autism"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              APD rarely exists in a vacuum. It heavily overlaps with other neurodevelopmental profiles, requiring careful differential diagnosis to ensure accurate support.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Target className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">APD & ADHD</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">They share massive overlapping symptoms, including distractibility and difficulty following directions. Estimates suggest 50% or more of children diagnosed with APD also have ADHD.<sup>3</sup></p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <BookOpen className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">APD & Dyslexia</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Phonological processing deficits strongly link APD and dyslexia. A brain struggling to decode the auditory difference between "b" and "p" will inherently struggle to learn to read those letters on a page.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Network className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">APD & Autism</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Auditory processing differences are highly common in the autistic profile. Many autistic individuals report severe auditory hypersensitivity or extreme difficulty processing spoken language in noisy environments.</p>
              </div>
            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Hind, S. E., et al. (2011). Prevalence of clinical referrals having hearing thresholds within normal limits. <i>International Journal of Audiology</i>.</p>
                <p>2. Neijenhuis, K., et al. (2002). Age effects and normative data on a Dutch test battery for auditory processing disorders. <i>International Journal of Audiology</i>.</p>
                <p>3. Riccio, C. A., et al. (1994). Comorbidity of central auditory processing disorder and attention-deficit hyperactivity disorder. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Sharma, M., Purdy, S. C., & Kelly, A. S. (2009). Comorbidity of auditory processing, language, and reading disorders. <i>Journal of Speech, Language, and Hearing Research</i>.</li>
                <li>O'Connor, K. (2012). Auditory processing in autism spectrum disorder: A review. <i>Neuroscience & Biobehavioral Reviews</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: IMPACT & TRAJECTORY
      ========================================== */}
      {activeTab === 'impact' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Impact Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Daily Impact & Emotional Effects</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-overview-impact.webp"
              alt="Individual experiencing severe listening fatigue in a noisy environment"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The invisible nature of APD makes it incredibly taxing. The constant, active effort required to process basic auditory information leads to severe "listening fatigue" and burnout by the end of a school or workday.
            </p>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <AlertTriangle className="text-[#d4a017] w-5 h-5" /> Academic & Social Hurdles
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Students struggle to follow multi-step verbal directions or take notes from lectures. Socially, environments like cafeterias or parties are exhausting, and constantly asking for repetition damages self-esteem.
              </p>
            </div>

            <div>
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Heart className="text-[#d4a017] w-5 h-5" /> Behavioral Misunderstandings
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                APD is tragically often misunderstood as willful inattention, laziness, or defiance. Frustration from chronic communication breakdowns can quickly lead to severe anxiety, withdrawal, or behavioral outbursts.
              </p>
            </div>
          </div>

          {/* Trajectory & History Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Trajectory, History & Hope</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-overview-trajectory-hero.webp"
              alt="Timeline of a child growing into an adult successfully using compensatory strategies"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <FileText className="text-[#2abcd4] w-5 h-5" /> Historical Context
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  The concept emerged in the 1950s through Helmer Myklebust's observations of children with "auditory disorders" despite perfect hearing.<sup>1</sup> Diagnostic guidelines were later solidified during the 1996 Consensus Conference on APD.<sup>2</sup>
                </p>
                <div className="bg-white p-3 rounded-lg border border-[#0c264d] border-opacity-20 shadow-sm flex items-start gap-2">
                  <ShieldCheck className="text-[#0c264d] w-4 h-4 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-700">Diagnosis provides vital explanation and validation, helping individuals understand their academic struggles aren't their fault, shifting the focus from punishment to accommodation.</p>
                </div>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Lightbulb className="text-[#2abcd4] w-5 h-5" /> Lifespan Outcomes
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Core deficits typically persist into adulthood. However, the condition becomes highly manageable as the individual's auditory system matures and they actively master self-advocacy.
                </p>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Adults learn to structure their lives, avoiding challenging listening environments when possible.</li>
                  <li>Many individuals with APD possess significant cognitive strengths in visual processing, hands-on learning, and creativity, allowing them to thrive professionally.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Myklebust, H. R. (1954). Auditory disorders in children: A manual for differential diagnosis. <i>Grune & Stratton</i>.</p>
                <p>2. Jerger, J., & Musiek, F. (2000). Report of the Consensus Conference on the diagnosis of auditory processing disorders in school-aged children. <i>Journal of the American Academy of Audiology</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Moore, D. R., et al. (2010). Nature of auditory processing disorder in children. <i>Pediatrics</i>.</li>
                <li>Bellis, T. J. (2003). Assessment and management of central auditory processing disorders in the educational setting. <i>Delmar Learning</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('apd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About APD
        </button>
      </div>

    </article>
  );
}