import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DysgraphiaLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DysgraphiaLiving({ setCurrentArticle, initialTab }: DysgraphiaLivingProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'daily-life';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Living with Dysgraphia
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dysgraphia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          Back to Dysgraphia
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('daily-life')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'daily-life'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Daily Life & Emotions
        </button>
        <button
          onClick={() => handleTabChange('education-career')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'education-career'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Education & Career
        </button>
        <button
          onClick={() => handleTabChange('strategies-strengths')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'strategies-strengths'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Strategies & Strengths
        </button>
      </div>

      {/* ==========================================
          TAB 1: DAILY LIFE & EMOTIONS
      ========================================== */}
      {activeTab === 'daily-life' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Living successfully with dysgraphia involves understanding one's strengths, developing effective technological strategies, and advocating for needed accommodations. With appropriate support and tools, individuals with dysgraphia lead deeply fulfilling lives and achieve success across all domains.
          </p>

          {/* Daily Logistics Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Navigating Daily Logistics</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-living-daily.webp" 
              alt="Confident individual managing daily tasks on a digital device"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Dyscalculia impacts far more than academic testing, often seeping into the foundational logistics of adult independence and daily communication. Routine tasks that neurotypical individuals process automatically often require intense cognitive effort or digital workarounds.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Common Challenges</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Paperwork:</strong> Filling out bank forms, medical history clipboards, and physical job applications.</li>
                  <li><strong>Information capture:</strong> Taking rapid notes during meetings, doctor appointments, or phone calls.</li>
                  <li><strong>Signatures:</strong> Providing consistent signatures on legal documents or credit card receipts.</li>
                  <li><strong>Correspondence:</strong> Writing out physical thank-you notes, birthday cards, or postcards.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Practical Solutions</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Digital default:</strong> Requesting electronic forms or fillable PDFs prior to arriving at appointments.</li>
                  <li><strong>Voice capture:</strong> Utilizing voice-to-text to dictate grocery lists, reminders, and daily notes.</li>
                  <li><strong>Stamps & templates:</strong> Using a custom signature stamp or digital signature tool for physical paperwork.</li>
                  <li><strong>Smart apps:</strong> Relying completely on smartphone apps for task management and list organization.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Emotional Impact Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Emotional & Social Impact</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-living-emotions.webp" 
              alt="Two individuals engaging in a supportive conversation"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The invisible nature of dysgraphia often leads to profound emotional distress, as individuals are frequently misjudged as careless or unintelligent. Building lifelong resilience requires dismantling the shame associated with utilizing necessary accommodations in public spaces.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Emotional Hurdles</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Frustration:</strong> Managing the massive gap between what the brain is thinking and what the hand can produce.</li>
                  <li><strong>Anxiety:</strong> Feeling sudden panic when asked to write on a whiteboard or fill out a form in public.</li>
                  <li><strong>Imposter syndrome:</strong> Feeling intellectually inadequate despite possessing high intelligence in other domains.</li>
                  <li><strong>Shame:</strong> Deep embarrassment about handwriting quality when viewed by peers or colleagues.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Building Resilience</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Strengths focus:</strong> Actively identifying and leaning into natural talents in verbal communication or visual arts.</li>
                  <li><strong>Self-compassion:</strong> Recognizing that the writing struggle is neurological, not a moral failing.</li>
                  <li><strong>Disclosure power:</strong> Deciding when and how to comfortably disclose the diagnosis to friends or romantic partners.</li>
                  <li><strong>Support networks:</strong> Connecting with mentors or online communities of neurodivergent adults.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: EDUCATION & CAREER
      ========================================== */}
      {activeTab === 'education-career' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            The traditional education system and modern workplace are highly reliant on written fluency, often creating artificial barriers for those with dysgraphia. By focusing on individual strengths and securing legal accommodations, individuals can pursue highly successful academic and professional trajectories.
          </p>

          {/* Educational Journey Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Educational Journey</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-living-education.webp" 
              alt="Student using a laptop in a modern classroom"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              From early childhood through higher education, dysgraphia requires constant self-advocacy to secure the digital tools necessary to prove conceptual mastery. Without targeted interventions and accommodations, the cumulative nature of writing demands can result in profound learned helplessness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">K-12 Progression</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Elementary:</strong> Establishing IEPs early to formalize typing instruction and reduce sheer copying demands.</li>
                  <li><strong>Middle School:</strong> Navigating increased multi-subject writing demands by transitioning fully to digital note-taking.</li>
                  <li><strong>High School:</strong> Securing critical extended-time and laptop accommodations for high-stakes standardized testing (SAT/ACT).</li>
                  <li><strong>Transition planning:</strong> Preparing the student to take over their own advocacy before leaving the public school system.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">College & University</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Disability services:</strong> Proactively registering with the university office and providing recent diagnostic documentation.</li>
                  <li><strong>Accommodation shifts:</strong> Securing collegiate-level support like peer note-takers and alternative testing formats.</li>
                  <li><strong>Course planning:</strong> Strategically balancing the semester workload to avoid taking multiple writing-heavy courses simultaneously.</li>
                  <li><strong>Writing centers:</strong> Utilizing campus support for structural essay organization and proofreading.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Career & Employment Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Career & Employment</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-living-career.webp" 
              alt="Professional successfully managing a creative project"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Many adults with dysgraphia excel professionally by leaning into their verbal, creative, and interpersonal strengths to bypass manual writing demands. Success in the workplace often involves finding the right organizational culture, utilizing assistive technologies, and understanding ADA protections.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Career Considerations</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>STEM fields:</strong> Science, technology, and engineering roles that rely on digital logic and coding rather than prose.</li>
                  <li><strong>Creative fields:</strong> Art, design, film, and photography that prioritize visual-spatial intelligence.</li>
                  <li><strong>Interpersonal roles:</strong> Sales, marketing, and management roles that prioritize strong verbal communication skills.</li>
                  <li><strong>Healthcare & Trades:</strong> Skilled technical work and medical roles that utilize standardized digital charting.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Workplace Accommodations</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Legal protection:</strong> Utilizing the Americans with Disabilities Act (ADA) to mandate reasonable workplace accommodations.</li>
                  <li><strong>Software integration:</strong> Installing professional speech recognition software (like Dragon) for dictating emails and reports.</li>
                  <li><strong>Process shifts:</strong> Requesting to provide verbal project updates in meetings rather than submitting written status briefs.</li>
                  <li><strong>Disclosure strategy:</strong> Understanding that disclosing the disability during an interview is optional, but necessary for securing formal accommodations.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: STRATEGIES & STRENGTHS
      ========================================== */}
      {activeTab === 'strategies-strengths' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Living effectively with dysgraphia is fundamentally about working smarter, not harder, through the unapologetic use of technology and support networks. By embracing these tools and focusing on inherent strengths, individuals can protect their mental health and achieve significant personal success.
          </p>

          {/* Technology as an Equalizer Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Technology as an Equalizer</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-living-technology.webp" 
              alt="Person using a smartphone with voice assistant features"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The modern smartphone and computer have revolutionized independence for those with dysgraphia. Offloading the physical burden of transcription to reliable digital systems allows the brain to focus its energy entirely on executing high-level ideas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Modern Advantages</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Decreased demands:</strong> Most modern professional work is already done digitally, naturally aligning with dysgraphia needs.</li>
                  <li><strong>Text messaging:</strong> Brief, informal communication where autocorrect naturally steps in to fix spelling errors.</li>
                  <li><strong>Voice assistants:</strong> Utilizing Siri or Google Assistant to effortlessly log reminders, appointments, and quick notes.</li>
                  <li><strong>Digital signatures:</strong> Services like DocuSign eliminating the anxiety of physical paperwork entirely.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Essential Tools</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Speech-to-text apps:</strong> Mobile dictation tools that turn verbal thoughts directly into formatted text.</li>
                  <li><strong>Cloud word processors:</strong> Accessing typing software universally across phones, tablets, and computers.</li>
                  <li><strong>Audio note-taking:</strong> Using apps like Notability or Otter to record live audio synced to minimal typed notes.</li>
                  <li><strong>Email templates:</strong> Creating and saving standard responses for repetitive, professional communications.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Strengths & Success Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Strengths & Success</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-living-strengths.webp" 
              alt="Creative individual sketching a big-picture concept"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Dysgraphia is characterized by a specific deficit in writing mechanics, not a global cognitive delay or lack of intelligence. Because the brain develops uniquely, many individuals with dysgraphia naturally excel in areas requiring holistic, big-picture thinking and deep verbal empathy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Associated Strengths</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Verbal abilities:</strong> Exceptionally strong oral communication and public speaking skills.</li>
                  <li><strong>Creative thinking:</strong> Highly innovative, non-linear problem-solving capabilities developed from years of adapting.</li>
                  <li><strong>Visual-spatial talent:</strong> Often demonstrating advanced aptitude in art, 3D design, architecture, and engineering.</li>
                  <li><strong>Deep empathy:</strong> A profound understanding and compassion for others who face invisible struggles.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Reframing the Narrative</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Identity:</strong> Dysgraphia is simply one facet of how your brain processes output; it is not your identity.</li>
                  <li><strong>Notable success:</strong> Thousands of brilliant scientists, artists, and business leaders share this exact learning profile.</li>
                  <li><strong>Tool validation:</strong> Utilizing a keyboard or dictation software is an intelligent strategy, not a "crutch."</li>
                  <li><strong>Limitless potential:</strong> Your worth and intelligence are absolutely not determined by your ability to hold a pencil.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dysgraphia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          Back to Dysgraphia
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p>1. Butterworth, B., et al. (2011). Dyscalculia: From brain to education. <i>Science</i>.</p>
            <p>2. Parsons, S., & Bynner, J. (2005). Does numeracy matter more? <i>National Research and Development Centre for Adult Literacy and Numeracy</i>.</p>
            <p>3. Kaufmann, L., et al. (2013). Dyscalculia from a developmental and differential perspective. <i>Frontiers in Psychology</i>.</p>
            <p>4. Burny, E., et al. (2012). Clock reading: An underestimated topic in children with mathematics difficulties. <i>Journal of Learning Disabilities</i>.</p>
            <p>5. Desoete, A., et al. (2012). Can we predict mathematical learning disabilities from symbolic and non-symbolic comparison tasks in kindergarten? <i>British Journal of Educational Psychology</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Americans with Disabilities Act of 1990, 42 U.S.C. § 12101 et seq.</li>
            <li>Anderson-Inman, L., & Horney, M. A. (1998). Transforming text for at-risk readers. In <i>Handbook of literacy and technology</i>. Erlbaum.</li>
            <li>Association on Higher Education and Disability. (2012). <i>Supporting accommodation requests</i>.</li>
            <li>Bargh, J. A., & McKenna, K. Y. (2004). The Internet and social life. <i>Annual Review of Psychology</i>.</li>
            <li>Berninger, V. W. (2009). Highlights of programmatic, interdisciplinary research on writing. <i>Learning Disabilities Research & Practice</i>.</li>
            <li>Berninger, V. W., & Fuller, F. (1992). Gender differences in orthographic, verbal, and compositional fluency. <i>Journal of School Psychology</i>.</li>
            <li>Berninger, V. W., & Wolf, B. J. (2009). <i>Teaching students with dyslexia and dysgraphia: Lessons from teaching and science</i>. Brookes Publishing.</li>
            <li>Brooks, R., & Goldstein, S. (2001). <i>Raising resilient children</i>. McGraw-Hill.</li>
            <li>Case-Smith, J. (2002). Effectiveness of school-based occupational therapy intervention on handwriting. <i>American Journal of Occupational Therapy</i>.</li>
            <li>Connelly, V., et al. (2006). Contribution of lower order letter writing skills. <i>Developmental Neuropsychology</i>.</li>
            <li>Dweck, C. S. (2006). <i>Mindset: The new psychology of success</i>. Random House.</li>
            <li>Edyburn, D. L. (2000). Assistive technology and students with mild disabilities. <i>Focus on Exceptional Children</i>.</li>
            <li>Epstein, J. L. (2001). <i>School, family, and community partnerships</i>. Westview Press.</li>
            <li>Gerber, P. J. (2012). The impact of learning disabilities on adulthood. <i>Journal of Learning Disabilities</i>.</li>
            <li>Graham, S., & Harris, K. R. (2009). Almost 30 years of writing research. <i>Learning Disabilities Research & Practice</i>.</li>
            <li>Graham, S., & Weintraub, N. (1996). A review of handwriting research. <i>Educational Psychology Review</i>.</li>
            <li>Gregg, N. (2009). <i>Adolescents and adults with learning disabilities and ADHD</i>. Guilford Press.</li>
            <li>Individuals with Disabilities Education Act, 20 U.S.C. § 1400. (2004).</li>
            <li>Katusic, S. K., et al. (2009). The forgotten learning disability. <i>Pediatrics</i>.</li>
            <li>MacArthur, C. A. (2009). Reflections on research on writing and technology for struggling writers. <i>Learning Disabilities Research & Practice</i>.</li>
            <li>Mayes, S. D., et al. (2009). IQ and neuropsychological predictors of academic achievement. <i>Learning and Individual Differences</i>.</li>
            <li>Nelson, J. M., & Harwood, H. (2011). Learning disabilities and anxiety: A meta-analysis. <i>Journal of Learning Disabilities</i>.</li>
            <li>Peverly, S. T. (2006). The importance of handwriting speed in adult writing. <i>Developmental Neuropsychology</i>.</li>
            <li>Sireci, S. G., et al. (2005). Test accommodations for students with disabilities. <i>Review of Educational Research</i>.</li>
            <li>West, T. G. (1997). <i>In the mind's eye: Visual thinkers, gifted people with dyslexia</i>. Prometheus Books.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}