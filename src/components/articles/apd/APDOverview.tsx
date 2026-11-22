import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import {
  Ear,
  Headphones,
  Layers,
  Network,
  Target,
  BookOpen,
  Infinity,
  AlertTriangle,
  Heart,
} from 'lucide-react';

interface APDOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function APDOverview({ setCurrentArticle, initialTab }: APDOverviewProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'definition';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">

      {/* HEADER & BACK BUTTON */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Auditory Processing Disorder: Overview
        </h1>

        <button
          onClick={() => setCurrentArticle?.('apd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm self-start"
        >
          <span className="text-xl">←</span>
          All About APD
        </button>
      </div>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('definition')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'definition'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Definition &amp; Subtypes
        </button>
        <button
          onClick={() => handleTabChange('demographics')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'demographics'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Demographics &amp; Co-occurrence
        </button>
        <button
          onClick={() => handleTabChange('impact')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'impact'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Impact &amp; Trajectory
        </button>
      </div>

      {/* ==========================================
          TAB 1: DEFINITION & SUBTYPES (Cyan -> Yellow)
      ========================================== */}
      {activeTab === 'definition' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Card 1: Definition (Cyan - Stacked Lucide Icons + Accessible Warning Card) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              What is APD?
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-overview-definition.webp"
              alt="Illustration showing normal peripheral hearing paired with central auditory pathway processing"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
              Auditory Processing Disorder (APD)—also referred to as Central Auditory Processing Disorder (CAPD)—is a neurological difference in how the central nervous system interprets sound. While the ears detect acoustic signals accurately, the brain processes, filters, and organizes spoken information differently—particularly in noisy or rapid listening environments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Headphones className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Central Neural Processing</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  The American Speech-Language-Hearing Association (ASHA) defines APD as a difference in the neural processing of auditory stimuli, impacting sound localization, temporal patterning, and speech recognition in competing background noise.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              {/* Accessible Maroon/Pink Warning Card */}
              <div className="bg-[#fdf2f8] border-l-4 border-[#be185d] p-5 rounded-r-xl shadow-sm flex flex-col items-center text-center">
                <AlertTriangle className="text-[#be185d] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#831843] font-bold text-sm mb-2">What APD Is Not</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  APD is not peripheral hearing loss—pure-tone hearing thresholds are within normal limits. Nor is it primarily a higher-order language impairment or an attention deficit, though it strongly influences how spoken language is received and acted upon.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Subtypes (Yellow - Double-Ring Navy Circular Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Types &amp; Subtypes of APD
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-overview-subtypes-hero.webp"
              alt="Visual map separating the four functional profiles of auditory processing"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Clinical frameworks such as the Bellis/Ferre model categorize APD into distinct functional profiles so educators and audiologists can tailor environmental and compensatory supports to each learner's exact strengths and needs.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Ear className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#ffd166] pb-2 w-full">
                  Auditory Decoding
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Difficulty isolating and identifying individual speech sounds, especially amid background noise. The auditory system works harder to extract crisp phonemic features from an overlapping acoustic stream.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Headphones className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#ffd166] pb-2 w-full">
                  Prosodic Profile
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Difficulty perceiving prosody—the rhythm, vocal stress, and pitch contours of speech. Individuals may take remarks literally or miss subtle humor and emotional inflection without visual context.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#ffd166] pb-2 w-full">
                  Integration
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Difficulty coordinating auditory signals across both cerebral hemispheres or linking sound with visual cues, affecting tasks that require synthesizing multi-sensory input in real time.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-[#ffd166] pb-2 w-full">
                  Output-Organization
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Difficulty sequencing, retaining, and acting on spoken information in order, making multi-step verbal instructions or rapid note-taking substantially easier when paired with written checklists.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM NAVIGATION BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full clear-both">
            <button
              onClick={() => setCurrentArticle?.('apd')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm"
            >
              <span className="text-xl">←</span>
              All About APD
            </button>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>

            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies &amp; Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>
                  1. American Speech-Language-Hearing Association. (2005). (Central) auditory processing disorders—The role of the audiologist.{' '}
                  <i>ASHA Technical Report</i>.
                </p>
                <p>
                  2. Cacace, A. T., &amp; McFarland, D. J. (2005). The importance of modality specificity in diagnosing central auditory processing disorder.{' '}
                  <i>American Journal of Audiology</i>, 14(2), 112–123.
                </p>
                <p>
                  3. Bellis, T. J., &amp; Ferre, J. M. (1999). Multidimensional approach to the differential diagnosis of central auditory processing disorders in children.{' '}
                  <i>Journal of the American Academy of Audiology</i>, 10(6), 319–328.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul
                className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words"
                style={{ textIndent: 0 }}
              >
                <li>
                  Bellis, T. J. (2011). <i>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</i> (2nd ed.). Plural Publishing.
                </li>
                <li>
                  Chermak, G. D., &amp; Musiek, F. E. (2014). <i>Handbook of central auditory processing disorder: Auditory neuroscience and diagnosis</i> (Vol. 1, 2nd ed.). Plural Publishing.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: DEMOGRAPHICS & CO-OCCURRENCE (Navy -> Cyan)
      ========================================== */}
      {activeTab === 'demographics' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Card 1: Demographics (Navy - 3D Left-Stripe Inner Cards, No Icons) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Prevalence &amp; Demographics
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-overview-demographics.webp"
              alt="Diverse classroom setting illustrating auditory accessibility and clear visual cues"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
              APD is frequently under-identified because individuals pass standard school hearing screenings and diagnostic audiology batteries require specialized sound-booth equipment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Statistical Prevalence
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Epidemiological estimates indicate that approximately 2–5% of school-aged children experience APD.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> Clinical samples often report a roughly 2:1 male-to-female referral ratio, though researchers note this largely reflects classroom referral patterns rather than biological incidence.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Age of Identification
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Although listening differences appear in early childhood, formal behavioral APD testing is typically conducted at age 7 or older, once auditory neural pathways have matured enough for reliable normative comparison.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Co-occurring Conditions (Cyan - Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Co-occurring Conditions
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-overview-cooccurring-hero.webp"
              alt="Diagram illustrating intersections between APD, ADHD, Dyslexia, and Autism"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              APD frequently co-occurs with other neurodevelopmental profiles. Comprehensive multidisciplinary evaluation ensures each overlapping strength and support need is recognized accurately.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Target className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">APD &amp; ADHD</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Both profiles can look similar in busy classrooms when a student misses multi-step spoken cues. Studies indicate that roughly 50% of children referred for APD evaluation also meet criteria for ADHD.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <BookOpen className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">APD &amp; Dyslexia</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Phonological awareness bridges spoken and written language. When rapid acoustic distinctions between similar phonemes are blurred, mapping those sounds onto printed letters requires structured multisensory instruction.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Infinity className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">APD &amp; Autism</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Auditory processing differences are widely documented in autism, ranging from heightened sensitivity to background frequencies to difficulty filtering speech in crowded acoustic spaces.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup>
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM NAVIGATION BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full clear-both">
            <button
              onClick={() => setCurrentArticle?.('apd')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm"
            >
              <span className="text-xl">←</span>
              All About APD
            </button>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>

            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies &amp; Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>
                  1. Hind, S. E., Haines-Bazrafshan, R., Benton, C. L., Brassington, W., Towle, B., &amp; Moore, D. R. (2011). Prevalence of clinical referrals having hearing thresholds within normal limits.{' '}
                  <i>International Journal of Audiology</i>, 50(10), 708–716.
                </p>
                <p>
                  2. Neijenhuis, K., Snik, A., Priester, G., Kordenoordt, S., &amp; van den Broek, P. (2002). Age effects and normative data on a Dutch test battery for auditory processing disorders.{' '}
                  <i>International Journal of Audiology</i>, 41(6), 334–346.
                </p>
                <p>
                  3. Dawes, P., &amp; Bishop, D. V. M. (2009). Auditory processing disorder in relation to developmental disorders of language, communication and attention: A review and critique.{' '}
                  <i>International Journal of Language &amp; Communication Disorders</i>, 44(4), 440–465.
                </p>
                <p>
                  4. Riccio, C. A., Hynd, G. W., Cohen, M. J., Hall, J., &amp; Molt, L. (1994). Comorbidity of central auditory processing disorder and attention-deficit hyperactivity disorder.{' '}
                  <i>Journal of the American Academy of Child &amp; Adolescent Psychiatry</i>, 33(6), 849–857.
                </p>
                <p>
                  5. Sharma, M., Purdy, S. C., &amp; Kelly, A. S. (2009). Comorbidity of auditory processing, language, and reading disorders.{' '}
                  <i>Journal of Speech, Language, and Hearing Research</i>, 52(3), 706–722.
                </p>
                <p>
                  6. O&apos;Connor, K. (2012). Auditory processing in autism spectrum disorder: A review.{' '}
                  <i>Neuroscience &amp; Biobehavioral Reviews</i>, 36(2), 836–854.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul
                className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words"
                style={{ textIndent: 0 }}
              >
                <li>
                  DeBonis, D. A. (2015). It is time to rethink central auditory processing disorder protocols for school-aged children.{' '}
                  <i>American Journal of Audiology</i>, 24(2), 124–136.
                </li>
                <li>
                  American Academy of Audiology. (2010). <i>Diagnosis, treatment and management of children and adults with central auditory processing disorder</i>. AAA Clinical Practice Guidelines.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: IMPACT & TRAJECTORY (Yellow -> Navy)
      ========================================== */}
      {activeTab === 'impact' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Card 1: Daily Impact (Yellow - Double-Ring Navy Circular Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Daily Impact &amp; Emotional Effects
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-overview-impact.webp"
              alt="Illustration depicting listening fatigue and the cognitive effort of filtering background noise"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Because APD is invisible to others, the continuous cognitive effort required to decode speech in noisy rooms often creates substantial listening fatigue by the end of a school or workday.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Academic &amp; Social Hurdles</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Following rapid multi-step lectures or participating in lively group conversations in cafeterias and open offices demands extra mental energy. Visual notes, captions, and quiet seating dramatically lower this listening load.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Reframing Misunderstandings</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Unrecognized APD is often mistaken for inattention or disengagement. Recognizing the auditory root of communication breakdowns replaces frustration with self-understanding, confidence, and practical accommodations.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Trajectory, History & Hope (Navy - 3D Left-Stripe Inner Cards, No Icons) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Trajectory, History &amp; Hope
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-overview-trajectory-hero.webp"
              alt="Timeline illustrating growth into adulthood using visual strengths and self-advocacy"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Decades of auditory neuroscience have shifted clinical understanding from simple hearing acuity to how the brain actively constructs meaning—empowering adults with APD to thrive through strengths-aligned environments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Historical Context
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Clinical study of APD began in the 1950s with Helmer Myklebust&apos;s research on children experiencing auditory processing barriers despite intact peripheral hearing,<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup> and diagnostic standards were formalized at the 2000 Bruton Consensus Conference.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup> Receiving an accurate profile reframes past struggles and unlocks targeted accommodations.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Lifespan Outcomes &amp; Strengths
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    While core auditory processing traits persist into adulthood, neural maturation and self-advocacy make daily life highly navigable. Many adults with APD excel in visual-spatial reasoning, hands-on engineering, design, and creative problem-solving, structuring workspaces with written workflows and assistive audio tools.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM NAVIGATION BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full clear-both">
            <button
              onClick={() => setCurrentArticle?.('apd')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm"
            >
              <span className="text-xl">←</span>
              All About APD
            </button>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>

            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies &amp; Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>
                  1. Hornsby, B. W. Y., Werfel, K., Camarata, S., &amp; Bess, F. H. (2014). Subjective fatigue in children with hearing loss: Some preliminary findings.{' '}
                  <i>American Journal of Audiology</i>, 23(1), 129–134.
                </p>
                <p>
                  2. Myklebust, H. R. (1954). <i>Auditory disorders in children: A manual for differential diagnosis</i>. Grune &amp; Stratton.
                </p>
                <p>
                  3. Jerger, J., &amp; Musiek, F. (2000). Report of the Consensus Conference on the diagnosis of auditory processing disorders in school-aged children.{' '}
                  <i>Journal of the American Academy of Audiology</i>, 11(9), 467–474.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul
                className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words"
                style={{ textIndent: 0 }}
              >
                <li>
                  Moore, D. R., Ferguson, M. A., Edmondson-Jones, A. M., Ratib, S., &amp; Riley, A. (2010). Nature of auditory processing disorder in children.{' '}
                  <i>Pediatrics</i>, 126(2), e382–e390.
                </li>
                <li>
                  Bellis, T. J. (2003). <i>Assessment and management of central auditory processing disorders in the educational setting</i>. Delmar Learning.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}