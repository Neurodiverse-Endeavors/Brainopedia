import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Layers, Brain, Activity, Mic, Monitor, Eye, Ear, MessageSquare, Edit3, Laptop, MessageCircle, BookOpen, FileText, Home, Heart, Briefcase, Zap, CheckCircle } from 'lucide-react';

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
          Auditory Processing Disorder: Support & Management
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
          onClick={() => handleTabChange('environment')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'environment'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Environment & Tech
        </button>
        <button
          onClick={() => handleTabChange('skills')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'skills'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Skills & Therapy
        </button>
        <button
          onClick={() => handleTabChange('accommodations')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'accommodations'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Accommodations & Life
        </button>
      </div>

      {/* ==========================================
          TAB 1: ENVIRONMENT & TECH
      ========================================== */}
      {activeTab === 'environment' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Environment Card (Cyan) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Three-Pronged Approach</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-support-environment-1.webp"
              alt="Classroom being actively modified for better acoustics"
              className="block mx-auto w-64 max-w-full h-auto rounded-lg border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Managing APD effectively requires a highly individualized, three-pronged approach: actively changing the environment, teaching workarounds, and directly training the brain's auditory pathways.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Environmental Modifications</h3>
                <p className="text-xs text-slate-700 leading-relaxed">This is the most immediate intervention. It includes installing acoustic tiles, carpeting, and preferential seating (front-row center) to drastically optimize the signal-to-noise ratio in a noisy classroom.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Compensatory Strategies</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Teaching the individual metacognitive skills to functionally "work around" their auditory processing deficits, allowing them to participate fully despite persistent internal processing difficulties.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Direct Remediation</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Targeted, neuroplasticity-based training aimed at physically improving the underlying auditory processing abilities through highly structured, repetitive listening exercises.</p>
              </div>
            </div>
          </div>

          {/* Tech Card (Navy) - Removed redundant numbered circles, kept clean standard cards */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Assistive Technology</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-support-tech-1.webp"
              alt="Student confidently using an FM system and speech-to-text captioning"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Technology acts as an instant equalizer for APD, completely bypassing the brain's areas of weakness to ensure the individual receives the information accurately.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-2 border-b border-gray-100 pb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 text-xs shadow-sm">1</div>
                  <h3 className="text-[#0c264d] font-bold text-sm">FM / Remote Mic</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">These systems dramatically improve the signal-to-noise ratio by transmitting the speaker's voice directly to the listener's ears, completely eliminating the negative effects of room distance and background chatter.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-2 border-b border-gray-100 pb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 text-xs shadow-sm">2</div>
                  <h3 className="text-[#0c264d] font-bold text-sm">Captioning</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Real-time captioning or automated speech-to-text apps during lectures provide instant visual access to spoken information, completely removing the heavy burden of auditory processing.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-2 border-b border-gray-100 pb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 text-xs shadow-sm">3</div>
                  <h3 className="text-[#0c264d] font-bold text-sm">Visual Supports</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Written agendas, structured PowerPoint slides, and graphic organizers provide essential structure. Always pair critical auditory instructions with a permanent visual equivalent.</p>
              </div>

            </div>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Bellis, T. J. (2002). Developing deficit-specific intervention plans for individuals with auditory processing disorders. <i>Seminars in Hearing</i>.</li>
                <li>Anderson, K. L., & Goldstein, H. (2004). Speech perception benefits of FM and infrared devices. <i>Language, Speech, and Hearing Services in Schools</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SKILLS & THERAPY
      ========================================== */}
      {activeTab === 'skills' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Skills Card (Navy) - Clean 3D Accent Borders WITHOUT redundant dots */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Compensatory Strategies</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-support-skills-1.webp"
              alt="Student using active listening and highly structured graphic organizers"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Because APD is a lifelong neurological profile, teaching the individual metalinguistic and metacognitive workarounds is vital for their independent functioning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Active Listening</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Explicit instruction in active listening techniques—such as intentionally watching the speaker's face for visual cues and continuously self-monitoring their own comprehension during a conversation.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Request Strategies</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Empowering individuals to advocate for their needs. They must be taught to use specific requests (e.g., "Could you repeat the third step?") rather than relying on a general, frustrated "What?"</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Note-Taking & Memory</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Teaching structured note-taking frameworks (like Cornell notes) and memory strategies (chunking, visualization) to capture and firmly anchor incoming auditory information.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Therapy Card (Yellow) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Direct Remediation & Therapy</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-support-therapy-1.webp"
              alt="Speech-language pathologist working one-on-one with a child on auditory training"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Direct remediation aims to utilize neuroplasticity—forcing the brain to physically strengthen its auditory processing pathways through intensive, sustained practice.
            </p>

            <div className="space-y-4 max-w-4xl mx-auto">
              
              <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-lg border border-[#ffd166] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mt-1">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Computer Training</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Programs like Fast ForWord, Earobics, and LACE provide systematic, highly repetitive, and adaptive auditory training exercises targeting specific processing deficits.<sup>1</sup></p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-lg border border-[#ffd166] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mt-1">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Phonological Support</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">For those struggling with decoding, multisensory structured literacy approaches like Orton-Gillingham explicitly build phonological awareness, distinguishing individual sound components.<sup>2</sup></p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-lg border border-[#ffd166] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mt-1">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Language Intervention</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Speech-Language Pathologists provide intensive metalinguistic training, teaching the brain to actively use context clues and vocabulary to "fill in the blanks" of what the ears missed.</p>
                </div>
              </div>

            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Interventions
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Strong, G. K., et al. (2011). A systematic meta-analytic review of evidence for the effectiveness of the 'Fast ForWord' language intervention program. <i>Journal of Child Psychology and Psychiatry</i>.</p>
                <p>2. Snowling, M. J., & Hulme, C. (2011). Evidence-based interventions for reading and language difficulties. <i>British Journal of Educational Psychology</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Chermak, G. D., & Musiek, F. E. (2002). Auditory training: Principles and approaches for remediating and managing auditory processing disorders. <i>Seminars in Hearing</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: ACCOMMODATIONS & LIFE
      ========================================== */}
      {activeTab === 'accommodations' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Educational Card (Yellow) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Educational & Home Support</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-support-accommodations-1.webp"
              alt="Collaborative meeting with parents drafting an IEP tailored to reduce auditory demands"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Legal documentation and steadfast parental advocacy are essential to ensure the student's learning environment shifts from punitive to heavily accommodated.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">IEP & 504 Plans</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Eligible students should receive formal documents mandating critical modifications: extended time, quiet testing locations, and written directions. Because APD eligibility varies by state, robust documentation is vital for advocacy.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Home className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Home Support</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Families must optimize the home by reducing background noise (e.g., turning off the TV during homework). Communication requires gaining the child's attention before speaking and rephrasing rather than simply repeating louder.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Counseling</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The chronic stress of communication breakdowns frequently breeds severe anxiety. Professional counseling is heavily recommended to support identity formation, build resilience, and dismantle perfectionism.</p>
              </div>

            </div>
          </div>

          {/* Workplace Card (Cyan) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Workplace & Thriving</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-support-workplace-1.webp"
              alt="Adult with APD thriving in a quiet office environment, leveraging visual strengths"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Briefcase className="text-[#0A9DC4] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Accommodations</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Under the ADA, employees have the legal right to request reasonable accommodations.<sup>1</sup> This includes noise-canceling headphones, requesting instructions via email rather than phone, and closed-door offices rather than open cubicles.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Zap className="text-[#0A9DC4] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Leveraging Strengths</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Individuals with APD frequently possess massive cognitive strengths in visual processing, technology, or hands-on spatial reasoning. Choosing careers that heavily lean on these visual talents bypasses the disability entirely.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <CheckCircle className="text-[#0A9DC4] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Regular Re-evaluation</h3>
                <p className="text-xs text-slate-700 leading-relaxed">APD support is not a one-time fix. Needs change dramatically as the individual matures, transitions through school phases, and enters the workforce. Ongoing, data-driven re-evaluations are strictly necessary.</p>
              </div>

            </div>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Legal Protections
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Americans with Disabilities Act of 1990, 42 U.S.C. § 12101 et seq.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Yell, M. L. (2016). The law and special education. <i>Pearson</i>.</li>
                <li>Job Accommodation Network. (2021). Accommodation and compliance: Auditory processing disorder. <i>JAN</i>.</li>
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