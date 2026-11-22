import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import {
  Ear,
  MessageSquare,
  Activity,
  VolumeX,
  Music,
  Layers,
  Baby,
  GraduationCap,
  Briefcase,
  Search,
  ShieldAlert,
  FileText,
} from 'lucide-react';

interface APDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function APDSymptoms({ setCurrentArticle, initialTab }: APDSymptomsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'auditory';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">

      {/* HEADER & BACK BUTTON */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Auditory Processing Disorder: Symptoms &amp; Characteristics
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
          onClick={() => handleTabChange('auditory')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'auditory'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Auditory &amp; Academic
        </button>
        <button
          onClick={() => handleTabChange('social')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'social'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Social &amp; Sensory
        </button>
        <button
          onClick={() => handleTabChange('lifespan')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'lifespan'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Lifespan &amp; Diagnosis
        </button>
      </div>

      {/* ==========================================
          TAB 1: AUDITORY & ACADEMIC (Cyan -> Navy)
      ========================================== */}
      {activeTab === 'auditory' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Card 1: Core Auditory Processing (Cyan - Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Core Auditory Processing
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-symptoms-auditory-1.webp"
              alt="Illustration showing the cognitive effort of separating speech from background noise"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
              The characteristics of APD reflect a central auditory system that organizes incoming sound differently despite intact peripheral hearing sensitivity. These differences become most noticeable in acoustically complex or fast-paced environments where background noise competes with speech.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Ear className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Hearing in Noise
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Speech-in-noise difficulty is the hallmark feature of APD. While speech is understood clearly in quiet one-on-one settings, comprehension drops sharply in reverberant classrooms, cafeterias, or busy group spaces.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <MessageSquare className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Auditory Discrimination
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Frequently asking for repetition stems from rapid acoustic ambiguity rather than inattention. Subtle phonemic contrasts—such as distinguishing &ldquo;cat&rdquo; from &ldquo;cap&rdquo; or &ldquo;seventy&rdquo; from &ldquo;seventeen&rdquo;—require extra processing time.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Activity className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Temporal Processing
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Tracking rapid speech rates, subtle pauses, and sound sequences requires precise neural timing. Slowing down spoken delivery or pairing audio with visual text immediately boosts clarity.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Academic & Language Profile (Navy - 3D Left-Stripe Inner Cards, No Icons) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Academic &amp; Language Profile
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-symptoms-academic-1.webp"
              alt="Student thriving with visual diagrams and written checklists alongside spoken instruction"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Because traditional classrooms rely heavily on rapid verbal instruction, learners with APD often demonstrate a striking contrast between spoken-only tasks and visually supported learning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Following Directions
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Multi-step verbal sequences tax auditory working memory—by the time the third instruction is spoken, earlier details may still be decoding. Written agendas, numbered checklists, and visual models make expectations effortless to follow.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Reading &amp; Spelling
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Fine-grained phonological awareness links spoken sounds to written letters. When similar phonemes blur acoustically, structured multisensory literacy and whole-word pattern recognition support strong reading comprehension.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Note-Taking
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Simultaneously decoding live speech and writing notes creates a processing bottleneck. Access to lecture slides, guided outlines, or live captioning frees cognitive bandwidth for deep conceptual understanding.
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

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>

            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies &amp; Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>
                  1. Iliadou, V. V., Ptok, M., Grech, H., Pedersen, E. R., Brechmann, A., Deggouj, N., ... &amp; Bamiou, D. E. (2017). A European perspective on auditory processing disorder—Current knowledge and future research focus.{' '}
                  <i>Frontiers in Neurology</i>, 8, 622.
                </p>
                <p>
                  2. Koiek, S., &amp; Keith, R. W. (2022). Speech-in-noise perception and spatial processing in children with suspected auditory processing disorder.{' '}
                  <i>International Journal of Pediatric Otorhinolaryngology</i>, 158, 111164.
                </p>
                <p>
                  3. Moore, D. R., Ferguson, M. A., Halliday, L. F., &amp; Riley, A. (2011). Frequency discrimination in children: Perception, learning and attention.{' '}
                  <i>Hearing Research</i>, 276(1–2), 16–23.
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
                  Tallal, P. (1980). Auditory temporal perception, phonics, and reading disabilities in children.{' '}
                  <i>Brain and Language</i>, 9(2), 182–198.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SOCIAL & SENSORY (Navy -> Yellow)
      ========================================== */}
      {activeTab === 'social' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Card 1: Social & Emotional Impact (Navy - 3D Left-Stripe Inner Cards, No Icons) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Social &amp; Emotional Impact
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-symptoms-social-1.webp"
              alt="Illustration depicting listening fatigue in loud group settings versus calm one-on-one connection"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Because everyday socializing often happens in noisy restaurants, playgrounds, or open offices, sustained listening effort can quietly drain energy and shape social confidence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Group Conversations
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Tracking overlapping speakers in crowded rooms requires intense concentration. Preferring quiet one-on-one or small-group settings enables deep, effortless connection without acoustic overload.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Listening Fatigue
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Continuously filling in missed syllables recruits extra executive and cognitive resources, leading to measurable listening fatigue.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> Quiet recovery breaks prevent burnout and irritability.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Reading Prosodic Cues
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    When vocal stress, rhythm, or pitch contours are harder to parse, subtle sarcasm or dry humor can sound literal. Clear, direct communication and visible facial expressions make social intent transparent.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Sensory & Prosodic Differences (Yellow - Double-Ring Navy Circular Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Sensory &amp; Prosodic Differences
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-symptoms-sensory-1.webp"
              alt="Visual representing auditory sensitivity, musical pitch contours, and background sound filtering"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Beyond speech comprehension, APD influences how the nervous system regulates volume, filters ambient frequencies, and perceives musical rhythm and pitch.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <VolumeX className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Auditory Hypersensitivity</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Many individuals with APD experience hyperacusis—where sudden noises or specific high-frequency hums feel physically overwhelming.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup> Acoustic dampening and filtered earplugs provide immediate relief.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Music className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Musical &amp; Pitch Processing</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Discriminating subtle pitch intervals, reproducing melodies, or parsing fast song lyrics without written text can be challenging, whereas visual rhythm cues or instrumental patterns are often deeply appreciated.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Background Filtering</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Auditory figure-ground filtering allows the brain to suppress ambient sound. When this filter is less selective, an HVAC fan or hallway chatter competes at equal volume with a speaker&apos;s voice.
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
                  1. McGarrigle, R., Munro, K. J., Dawes, P., Stewart, A. J., Moore, D. R., Barry, J. G., &amp; Amitay, S. (2014). Listening effort and fatigue: What exactly are we measuring? A British Society of Audiology Cognition in Hearing Special Interest Group &lsquo;white paper&rsquo;.{' '}
                  <i>International Journal of Audiology</i>, 53(7), 433–445.
                </p>
                <p>
                  2. Gokula, R., Sharma, M., Cupples, L., &amp; Valderrama, J. T. (2019). Comorbidity of auditory processing, attention, and memory in children with word reading difficulties.{' '}
                  <i>Frontiers in Psychology</i>, 10, 2383.
                </p>
                <p>
                  3. Potgieter, I., Fackrell, K., Kennedy, V., Telford, E., &amp; Hoare, D. J. (2020). Hyperacusis in children: A scoping review.{' '}
                  <i>BMC Pediatrics</i>, 20(1), 319.
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
                  Chermak, G. D., &amp; Musiek, F. E. (2014). <i>Handbook of central auditory processing disorder: Auditory neuroscience and diagnosis</i> (Vol. 1, 2nd ed.). Plural Publishing.
                </li>
                <li>
                  Baum, S. R., &amp; Pell, M. D. (1999). The neural bases of prosody: Insights from lesion studies and neuroimaging.{' '}
                  <i>Aphasiology</i>, 13(8), 581–608.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: LIFESPAN & DIAGNOSIS (Yellow -> Cyan)
      ========================================== */}
      {activeTab === 'lifespan' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Card 1: Age-Related Trajectory (Yellow - Double-Ring Navy Circular Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Age-Related Trajectory
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-symptoms-lifespan-1.webp"
              alt="Lifespan progression from early childhood to school years and adaptive adult workspaces"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Auditory processing traits evolve across development as neural pathways mature and acoustic demands shift from early play to classrooms and collaborative workplaces.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Baby className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">
                  Early Childhood
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Young children may take longer to respond when called from another room, find rhyming games tricky, or become overwhelmed in loud group play while showing strong visual curiosity and hands-on focus.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">
                  School Years
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  As multi-step verbal lectures and phonics demands increase, acoustic barriers become clearer. Remote microphone systems, preferential seating, and visual study guides unlock strong academic performance.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">
                  Adulthood
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Adults may still find open-plan offices or audio-only calls tiring, yet frequently thrive by leveraging visual-spatial strengths, live meeting transcripts, noise-canceling headphones, and clear written workflows.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Distinguishing APD (Cyan - Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Distinguishing APD
            </h2>

            {/* Wide Centered (w-96) for detailed differential comparison chart */}
            <ImageWithFallback
              src="/images/apd/apd-symptoms-diagnosis-1.webp"
              alt="Comparative diagram distinguishing APD from peripheral hearing loss, ADHD, and language disorders"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Because listening challenges can look similar on the surface, careful differential assessment distinguishes central auditory processing from peripheral hearing loss, ADHD, and broader language profiles.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Search className="text-[#0A9DC4] w-8 h-8 mb-4 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  vs. Hearing Loss
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Unlike peripheral hearing loss, an individual with APD passes a standard pure-tone audiogram with normal detection thresholds. The difference lies in how central neural pathways decode and organize sound.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <ShieldAlert className="text-[#0A9DC4] w-8 h-8 mb-4 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  vs. ADHD
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  While both can involve missed instructions, APD is anchored in the <em>auditory modality</em>—focus and comprehension remain strong on visual or written tasks, whereas ADHD shapes attention regulation across all sensory channels.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup>
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <FileText className="text-[#0A9DC4] w-8 h-8 mb-4 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  vs. Language Disorders
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Developmental language disorders affect vocabulary and grammar across both spoken and written formats. In APD, comprehension improves markedly whenever information is presented visually rather than solely through speech.
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

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>

            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies &amp; Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>
                  1. Sanfins, M. D., Borges, L. R., Ubiali, T., &amp; Colella-Santos, M. F. (2017). Speech auditory brainstem response (speech ABR) in the differential diagnosis of scholastic difficulties.{' '}
                  <i>Brazilian Journal of Otorhinolaryngology</i>, 83(1), 112–116.
                </p>
                <p>
                  2. Bamiou, D. E., Musiek, F. E., &amp; Luxon, L. M. (2001). Aetiology and clinical presentations of auditory processing disorders—A review.{' '}
                  <i>Archives of Disease in Childhood</i>, 85(5), 361–365.
                </p>
                <p>
                  3. Dawes, P., &amp; Bishop, D. V. M. (2009). Auditory processing disorder in relation to developmental disorders of language, communication and attention: A review and critique.{' '}
                  <i>International Journal of Language &amp; Communication Disorders</i>, 44(4), 440–465.
                </p>
                <p>
                  4. Stavrinos, G., Iliadou, V. M., Edwards, L., Sirimanna, T., &amp; Bamiou, D. E. (2018). The relationship between types of attention and auditory processing skills: Reconsidering auditory processing disorder diagnosis.{' '}
                  <i>Frontiers in Psychology</i>, 9, 34.
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
                  Chermak, G. D., Tucker, E., &amp; Seikel, J. A. (2002). Behavioral characteristics of auditory processing disorder and attention-deficit hyperactivity disorder.{' '}
                  <i>Journal of the American Academy of Audiology</i>, 13(6), 332–338.
                </li>
                <li>
                  Cacace, A. T., &amp; McFarland, D. J. (2005). The importance of modality specificity in diagnosing central auditory processing disorder.{' '}
                  <i>American Journal of Audiology</i>, 14(2), 112–123.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}