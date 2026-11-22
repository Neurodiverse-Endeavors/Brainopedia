import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import {
  Stethoscope,
  Users,
  Brain,
  Ear,
  FileText,
  AlertTriangle,
  Building,
  Heart,
} from 'lucide-react';

interface APDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function APDDiagnosis({ setCurrentArticle, initialTab }: APDDiagnosisProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'process';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">

      {/* HEADER & BACK BUTTON */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Auditory Processing Disorder: Testing &amp; Diagnosing
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
          onClick={() => handleTabChange('process')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'process'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Diagnostic Process
        </button>
        <button
          onClick={() => handleTabChange('tests')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'tests'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Tests &amp; Measures
        </button>
        <button
          onClick={() => handleTabChange('differential')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'differential'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Differential &amp; Access
        </button>
      </div>

      {/* ==========================================
          TAB 1: THE DIAGNOSTIC PROCESS (Cyan -> Navy)
      ========================================== */}
      {activeTab === 'process' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Card 1: Who & When to Test (Cyan - Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Who &amp; When to Test
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-diagnosis-process-1.webp"
              alt="Clinical audiologist guiding a school-aged child through an auditory processing evaluation"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Diagnosing APD requires a specialized central auditory evaluation. Because the central auditory nervous system continues maturing throughout early childhood, an accurate profile depends on developmental readiness and collaborative clinical expertise.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Stethoscope className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Qualified Professionals
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Clinical audiologists with specialized training in central auditory assessment are the sole professionals qualified to formally diagnose APD.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> Families benefit from seeking clinics equipped with calibrated sound booths and standardized central auditory test batteries.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Brain className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Age Considerations
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Comprehensive behavioral APD batteries are typically normed for children ages 7 and older, once neural pathways mature enough for reliable testing.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup> Younger children showing listening differences can still receive targeted screening and supportive language or acoustic strategies early on.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Users className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Multidisciplinary Team
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  While the audiologist leads the auditory assessment, a holistic evaluation integrates insights from speech-language pathologists, educational psychologists, and teachers to map strengths and distinguish co-occurring language or attention profiles.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: The Diagnostic Steps (Navy - 3D Left-Stripe Inner Cards, No Icons/Numbers) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              The Diagnostic Steps
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-diagnosis-steps-1.webp"
              alt="Visual overview of the four-stage multidisciplinary auditory assessment process"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              A thorough central auditory workup follows a structured clinical sequence to verify healthy ear mechanics before evaluating how the brain interprets complex sound.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Step 1: Detailed Case History
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Reviews developmental milestones, family listening history, classroom observations, and medical background—including any history of recurrent childhood ear fluid or concussions.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Step 2: Peripheral Hearing Evaluation
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Pure-tone audiometry, tympanometry, and acoustic reflex testing verify outer, middle, and inner ear health first so peripheral hearing loss is ruled out or accounted for.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Step 3: Central Auditory Test Battery
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Evaluates multiple auditory processes—including speech-in-noise, dichotic listening, and temporal timing—using a cross-check battery rather than a single isolated measure.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Step 4: Synthesis &amp; Functional Profile
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Integrates audiological findings with cognitive, language, and academic profiles to identify specific listening strengths, processing bottlenecks, and tailored support recommendations.
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
                  1. New Zealand Audiological Society. (2019).{' '}
                  <i>New Zealand guidelines on auditory processing disorder</i> (summarized in ASHA Evidence Maps: Central Auditory Processing Disorder).
                </p>
                <p>
                  2. American Academy of Audiology. (2010).{' '}
                  <i>Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder</i>. AAA.
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
                  Bellis, T. J. (2003). <i>Assessment and management of central auditory processing disorders in the educational setting: From science to practice</i> (2nd ed.). Delmar Learning.
                </li>
                <li>
                  Emanuel, D. C., Ficca, K. N., &amp; Korczak, P. (2011). Survey of the diagnosis and management of auditory processing disorder.{' '}
                  <i>American Journal of Audiology</i>, 20(1), 48–60.
                </li>
                <li>
                  Włodarczyk, E., et al. (2024). Etiology, diagnostic, and rehabilitative methods for children with central auditory processing disorders—A scoping review.{' '}
                  <i>Children</i>, 11(8), 998.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: TESTS & MEASURES (Navy -> Yellow)
      ========================================== */}
      {activeTab === 'tests' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Card 1: Types of APD Tests (Navy - 3D Left-Stripe Inner Cards, No Icons/Dots) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Types of APD Tests
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-diagnosis-tests-1.webp"
              alt="Child wearing calibrated audiological headphones in a sound booth during a dichotic listening assessment"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Behavioral central auditory tests gently challenge the auditory system by reducing acoustic redundancy or introducing competing signals, revealing how efficiently the brain organizes speech in real-world conditions.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Dichotic Listening
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Different words or digits are presented to both ears simultaneously. Listeners either repeat both inputs (binaural integration) or focus on one ear while tuning out the other (binaural separation), evaluating interhemispheric transfer.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Temporal Processing
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Measures such as the Gaps-In-Noise (GIN) and Frequency Pattern tests assess how accurately the brain detects millisecond silent gaps, pitch sequences, and rhythmic order essential for parsing rapid speech.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Monaural Low-Redundancy
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Speech signals are filtered, time-compressed, or embedded in background babble and presented to each ear individually to evaluate &ldquo;auditory closure&rdquo;—the brain&apos;s ability to fill in missing phonetic cues.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Electrophysiological Measures (Yellow - Double-Ring Navy Circular Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Electrophysiological Measures
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-diagnosis-eeg-1.webp"
              alt="Clinical visualization of auditory brainstem and middle-latency evoked potential waveforms"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Alongside behavioral tasks requiring active responses, objective electrophysiological recordings measure how neurons along the auditory pathway fire in response to sound.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">ABR, MLR &amp; Cortical Potentials</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Auditory Brainstem Response (ABR) tracks neural timing from the eighth cranial nerve through the brainstem, while Middle Latency Response (MLR) and cortical evoked potentials (P300/MMN) capture thalamocortical processing 15–300 milliseconds post-stimulus.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3,4</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Diagnostic Criteria &amp; Normed Batteries</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Clinical guidelines typically define APD when scores fall at least 2 standard deviations below age norms on two or more tests in the battery (or 3 standard deviations on one measure with significant functional impact).<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup> Standardized tools such as SCAN-3 provide age-normed benchmarks.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup>
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
                Cited Studies &amp; Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>
                  1. Musiek, F. E., &amp; Chermak, G. D. (2015). Psychophysical and behavioral peripheral and central auditory tests.{' '}
                  <i>Handbook of Clinical Neurology</i>, 129, 313–332.
                </p>
                <p>
                  2. Musiek, F. E., Shinn, J. B., Jirsa, R., Bamiou, D. E., Baran, J. A., &amp; Zaida, E. (2005). GIN (Gaps-In-Noise) test performance in subjects with central auditory involvement.{' '}
                  <i>Ear and Hearing</i>, 26(6), 608–618.
                </p>
                <p>
                  3. Kraus, N., McGee, T., Carrell, T., &amp; Sharma, A. (1995). Neurophysiologic bases of speech discrimination.{' '}
                  <i>Ear and Hearing</i>, 16(1), 19–37.
                </p>
                <p>
                  4. McCullagh, J., &amp; Shinn, J. B. (2025). Objective measures of auditory temporal resolution with ABR: Comparing two paradigms.{' '}
                  <i>International Journal of Audiology</i>, 64(10), 1096–1104.
                </p>
                <p>
                  5. American Academy of Audiology. (2010).{' '}
                  <i>Clinical practice guidelines: Diagnosis, treatment and management of children and adults with central auditory processing disorder</i>. AAA.
                </p>
                <p>
                  6. Keith, R. W. (2009). <i>SCAN-3 for Children: Tests for Auditory Processing Disorders</i>. Pearson.
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
                  Bellis, T. J., &amp; Ferre, J. M. (1999). Multidimensional approach to the differential diagnosis of central auditory processing disorders in children.{' '}
                  <i>Journal of the American Academy of Audiology</i>, 10(6), 319–328.
                </li>
                <li>
                  Drosos, K., Papanicolaou, A., Voniati, L., Panayidou, K., &amp; Tafiadis, D. (2024). Auditory processing and speech sound disorders: Behavioral and electrophysiological findings.{' '}
                  <i>Audiology Research</i>, 14(5), 812–827.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: DIFFERENTIAL & ACCESS (Yellow -> Cyan)
      ========================================== */}
      {activeTab === 'differential' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Card 1: Differential Diagnosis (Yellow - Double-Ring Navy Circular Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Differential Diagnosis
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-diagnosis-differential-1.webp"
              alt="Visual comparison clarifying overlapping listening traits across APD, ADHD, ANSD, and Autism"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because listening challenges can arise from multiple neurodevelopmental or peripheral pathways, audiologists use a hierarchical cross-check approach to distinguish APD from conditions with overlapping traits.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">
                  vs. ADHD
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Both profiles can look like inattention or missed instructions in busy classrooms. The distinguishing pattern is modality specificity: APD challenges center on degraded or rapid auditory input, whereas ADHD affects attention regulation across visual, tactile, and auditory tasks alike.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Ear className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">
                  vs. ANSD
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Auditory Neuropathy Spectrum Disorder (ANSD) stems from neural dyssynchrony at the inner-hair-cell synapse or auditory nerve. Unlike classic APD, ANSD typically shows present otoacoustic emissions paired with absent or severely abnormal ABR waveforms and acoustic reflexes.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">
                  vs. Autism
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  While auditory filtering differences and sound sensitivity frequently accompany autism, standalone APD does not involve the broader social-communication reciprocity differences or focused monotropic patterns characteristic of autism.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Access & The Report (Cyan - Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Access &amp; The Diagnostic Report
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-diagnosis-advocacy-1.webp"
              alt="Parent and educator reviewing a comprehensive auditory evaluation report to plan classroom accommodations"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Navigating insurance and school-system policies around APD requires persistence, yet a clear diagnostic report unlocks targeted classroom accommodations and lasting personal self-understanding.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Building className="text-[#0A9DC4] w-8 h-8 mb-4 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Navigating Systems &amp; Coverage
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Insurance coverage and special education eligibility criteria vary across regions and districts.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup> Detailed functional recommendations in the audiologist&apos;s report help families advocate for 504 Plans, IEP accommodations, and remote-microphone technology.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Heart className="text-[#0A9DC4] w-8 h-8 mb-4 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  The Power of Clarity &amp; Validation
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Receiving an accurate profile reframes years of exhausting listening effort. Recognizing that comprehension bottlenecks reflect genuine auditory processing neurology—never a lack of intelligence or motivation—empowers self-advocacy and confidence.
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
                Cited Studies &amp; Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>
                  1. Al-Harbi, M., et al. (2025). Auditory processing disorders: Navigating the diagnostic maze of clinical research from 2011 to 2025.{' '}
                  <i>Journal of Clinical Medicine</i>, 14(7), 2291.
                </p>
                <p>
                  2. Riccio, C. A., Hynd, G. W., Cohen, M. J., Hall, J., &amp; Molt, L. (1994). Comorbidity of central auditory processing disorder and attention-deficit hyperactivity disorder.{' '}
                  <i>Journal of the American Academy of Child &amp; Adolescent Psychiatry</i>, 33(6), 849–857.
                </p>
                <p>
                  3. Berlin, C. I., Morlet, T., &amp; Hood, L. J. (2003). Auditory neuropathy/dyssynchrony: Its diagnosis and management.{' '}
                  <i>Pediatric Clinics of North America</i>, 50(2), 331–340.
                </p>
                <p>
                  4. Emanuel, D. C., Ficca, K. N., &amp; Korczak, P. (2011). Survey of the diagnosis and management of auditory processing disorder.{' '}
                  <i>American Journal of Audiology</i>, 20(1), 48–60.
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
                  Cacace, A. T., &amp; McFarland, D. J. (2005). The importance of modality specificity in diagnosing central auditory processing disorder.{' '}
                  <i>American Journal of Audiology</i>, 14(2), 112–123.
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

    </article>
  );
}