import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import {
  Layers,
  Brain,
  Activity,
  Laptop,
  MessageCircle,
  BookOpen,
  FileText,
  Home,
  Heart,
  Briefcase,
  Zap,
  CheckCircle,
} from 'lucide-react';

interface APDSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function APDSupport({ setCurrentArticle, initialTab }: APDSupportProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'environment';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">

      {/* HEADER & BACK BUTTON */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Auditory Processing Disorder: Support &amp; Management
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
          onClick={() => handleTabChange('environment')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'environment'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Environment &amp; Tech
        </button>
        <button
          onClick={() => handleTabChange('skills')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'skills'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Skills &amp; Therapy
        </button>
        <button
          onClick={() => handleTabChange('accommodations')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'accommodations'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Accommodations &amp; Life
        </button>
      </div>

      {/* ==========================================
          TAB 1: ENVIRONMENT & TECH (Cyan -> Navy)
      ========================================== */}
      {activeTab === 'environment' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Card 1: The Three-Pronged Approach (Cyan - Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              The Three-Pronged Approach
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-support-environment-1.webp"
              alt="Classroom environment optimized with acoustic panels, clear sightlines, and visual supports"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Effective APD support combines three complementary pillars: optimizing physical and acoustic surroundings, building metacognitive and visual workarounds, and strengthening auditory neural pathways through targeted practice.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Layers className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Environmental Modifications
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Acoustic panels, soft furnishings, carpeting, and preferential seating (front-row center with clear sightlines to the speaker) immediately reduce reverberation and elevate the speech signal-to-noise ratio.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Brain className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Compensatory Strategies
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Metacognitive and language-based tools empower individuals to leverage strong visual, contextual, and organizational abilities so spoken information is captured reliably without exhausting listening fatigue.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Activity className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Direct Remediation
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Structured, neuroplasticity-driven auditory training exercises target specific temporal, binaural, or phonological skills to progressively strengthen central auditory efficiency.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Assistive Technology (Navy - 3D Left-Stripe Inner Cards, No Icons/Numbers) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Assistive Technology
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-support-tech-1.webp"
              alt="Student using a wireless remote-microphone system and live captioning display in class"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Assistive acoustic and visual technologies bridge environmental noise barriers directly, delivering crisp speech clarity while freeing cognitive energy for learning and participation.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Remote-Microphone (FM/DM) Systems
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Wireless personal remote-microphone systems transmit the speaker&apos;s voice directly to low-gain ear-level receivers, significantly improving speech recognition in noise and reducing listening effort.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2,3</sup>
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Live Captioning &amp; Transcription
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Real-time captioning and speech-to-text tools convert spoken lectures and meetings into synchronized text, offering immediate visual verification alongside audio input.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Structured Visual Anchors
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Written agendas, visual schedules, pre-shared slide decks, and graphic organizers pair every key verbal instruction with a lasting visual reference.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM NAVIGATION BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full">
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
                  1. Bellis, T. J. (2002). Developing deficit-specific intervention plans for individuals with auditory processing disorders.{' '}
                  <i>Seminars in Hearing</i>, 23(4), 287–296.
                </p>
                <p>
                  2. Keith, W. J., &amp; Purdy, S. C. (2014). Assistive and therapeutic effects of amplification for auditory processing disorder.{' '}
                  <i>Seminars in Hearing</i>, 35(1), 27–38.
                </p>
                <p>
                  3. Schafer, E. C., et al. (2023). Remote-microphone technology for children with auditory processing disorder: Speech recognition and functional outcomes.{' '}
                  <i>Journal of the American Academy of Audiology</i>, 34(3–4), 78–89.
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
                  Anderson, K. L., &amp; Goldstein, H. (2004). Speech perception benefits of FM and infrared devices to children with hearing aids in a typical classroom.{' '}
                  <i>Language, Speech, and Hearing Services in Schools</i>, 35(2), 169–184.
                </li>
                <li>
                  American Speech-Language-Hearing Association. (2025).{' '}
                  <i>Central auditory processing disorder (CAPD): Evidence map and clinical guidance</i>. ASHA.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SKILLS & THERAPY (Navy -> Yellow)
      ========================================== */}
      {activeTab === 'skills' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Card 1: Compensatory Strategies (Navy - 3D Left-Stripe Inner Cards, No Icons/Dots) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Compensatory Strategies
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-support-skills-1.webp"
              alt="Student applying active listening cues and structured visual note-taking organizers"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Developing metalinguistic and metacognitive strategies equips learners and adults to self-advocate confidently, clarify rapid speech, and organize incoming information in real time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Active Listening &amp; Visual Cues
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Practicing whole-body listening—positioning toward the speaker, pairing facial and gesture cues with audio, and monitoring comprehension checkpoints—sharpens speech perception in dynamic settings.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Specific Clarification Requests
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Replacing a broad &ldquo;What?&rdquo; with targeted prompts (such as &ldquo;Could you repeat the second step?&rdquo; or &ldquo;Did you say fifteen or fifty?&rdquo;) pinpoints the exact missing word immediately.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Structured Note-Taking &amp; Chunking
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Using Cornell note templates, color-coded mind maps, and information chunking converts transient spoken details into durable visual memory anchors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Direct Remediation & Therapy (Yellow - Double-Ring Navy Circular Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Direct Remediation &amp; Therapy
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-support-therapy-1.webp"
              alt="Speech-language pathologist guiding a child through interactive auditory discrimination exercises"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Direct auditory remediation harnesses experience-dependent neuroplasticity—using structured, adaptive listening practice to strengthen neural timing and auditory discrimination.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Laptop className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Computerized Auditory Training</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Deficit-specific programs such as LACE, Dichotic Interaural Intensity Difference (DIID) training, and adaptive speech-in-noise software deliver targeted, progressive listening exercises.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1,2</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Phonological &amp; Literacy Support</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Multisensory structured literacy approaches (such as Orton-Gillingham) connect visual, tactile, and auditory channels to build crisp phoneme discrimination and decoding confidence.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Metalinguistic &amp; Speech Therapy</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Speech-language pathologists strengthen vocabulary depth, syntax prediction, and contextual auditory closure so listeners effortlessly fill in missed acoustic fragments.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM NAVIGATION BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full">
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
                Cited Studies &amp; Interventions
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>
                  1. Włodarczyk, E., et al. (2024). Etiology, diagnostic, and rehabilitative methods for children with central auditory processing disorders—A scoping review.{' '}
                  <i>Children</i>, 11(8), 998.
                </p>
                <p>
                  2. Loo, J. H. Y., Rosen, S., &amp; Bamiou, D. E. (2023). Auditory training effects on the listening skills of children with auditory processing disorder.{' '}
                  <i>Ear and Hearing</i>, 37(1), 38–47.
                </p>
                <p>
                  3. Snowling, M. J., &amp; Hulme, C. (2011). Evidence-based interventions for reading and language difficulties: Creating a virtuous circle.{' '}
                  <i>British Journal of Educational Psychology</i>, 81(1), 1–23.
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
                  Chermak, G. D., &amp; Musiek, F. E. (2002). Auditory training: Principles and approaches for remediating and managing auditory processing disorders.{' '}
                  <i>Seminars in Hearing</i>, 23(4), 297–308.
                </li>
                <li>
                  Strong, G. K., Torgerson, C. J., Torgerson, D., &amp; Hulme, C. (2011). A systematic meta-analytic review of evidence for the effectiveness of the &lsquo;Fast ForWord&rsquo; language intervention program.{' '}
                  <i>Journal of Child Psychology and Psychiatry</i>, 52(3), 224–235.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: ACCOMMODATIONS & LIFE (Yellow -> Cyan)
      ========================================== */}
      {activeTab === 'accommodations' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Card 1: Educational & Home Support (Yellow - Double-Ring Navy Circular Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Educational &amp; Home Support
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-support-accommodations-1.webp"
              alt="Collaborative school and family planning session establishing written IEP and 504 classroom accommodations"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Consistent accommodations at school and thoughtful communication habits at home turn daily listening friction into an accessible, low-stress environment where learners thrive.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">
                  IEP &amp; 504 Plans
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Formal Section 504 Plans or IEPs safeguard essential classroom supports: preferential seating, written instructions alongside verbal ones, quiet testing spaces, and extended time for language-heavy tasks.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Home className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">
                  Home Communication Habits
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Reducing background TV or appliance noise during homework, gaining visual attention before speaking, and rephrasing rather than speaking louder make home routines calm and connected.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">
                  Emotional Resilience &amp; Counseling
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Affirming counseling helps young people release listening-related anxiety, replace self-doubt with self-advocacy, and recognize that their auditory wiring is paired with rich cognitive strengths.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Workplace & Thriving (Cyan - Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Workplace &amp; Thriving
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-support-workplace-1.webp"
              alt="Adult with APD thriving in an acoustically balanced workspace equipped with visual project workflows"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              In higher education and adult careers, pairing legal workplace accommodations with visual-spatial and analytical strengths unlocks sustained productivity and confidence.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Briefcase className="text-[#0A9DC4] w-8 h-8 mb-4 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Workplace Accommodations
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Under the Americans with Disabilities Act (ADA), employees can request reasonable accommodations such as noise-canceling headsets, written meeting recaps, live video captions, and quieter seating zones.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2,3</sup>
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Zap className="text-[#0A9DC4] w-8 h-8 mb-4 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Leveraging Cognitive Strengths
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Many individuals with APD excel in visual reasoning, pattern recognition, hands-on engineering, design, and asynchronous digital collaboration where visual clarity leads the workflow.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <CheckCircle className="text-[#0A9DC4] w-8 h-8 mb-4 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Periodic Re-Evaluation
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  As academic, workplace, and acoustic environments evolve across life stages, periodic audiological check-ins ensure assistive tools and accommodations stay aligned with current goals.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM NAVIGATION BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full">
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
                Cited Legal Protections &amp; Guidance
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Section 504 of the Rehabilitation Act of 1973, 29 U.S.C. § 794.</p>
                <p>2. Americans with Disabilities Act of 1990, 42 U.S.C. § 12101 et seq.</p>
                <p>
                  3. Job Accommodation Network. (2024).{' '}
                  <i>Accommodation and compliance series: Auditory processing disorder</i>. U.S. Department of Labor, Office of Disability Employment Policy.
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
                  Yell, M. L. (2019). <i>The law and special education</i> (5th ed.). Pearson.
                </li>
                <li>
                  American Academy of Audiology. (2010).{' '}
                  <i>Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder</i>. AAA.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}