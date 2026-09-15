import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ShieldCheck, Brain, Heart, Users, ShieldAlert, Sparkles, Compass, Search, GraduationCap, Briefcase, Activity, Map, Lightbulb, CheckCircle, Zap, Monitor, BookOpen, Clock, AlertTriangle } from 'lucide-react';

interface VPDLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function VPDLiving({ setCurrentArticle, initialTab }: VPDLivingProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'daily');

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
          Living with Visual Processing Disorder
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('visual-processing')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About VPD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('visual-processing')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About VPD
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('daily')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'daily'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Daily Life & Emotion
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'education'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Education & Career
        </button>
        <button
          onClick={() => setActiveTab('lifespan')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'lifespan'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Relationships & Lifespan
        </button>
      </div>

      {/* ==========================================
          TAB 1: DAILY LIFE & EMOTION
      ========================================== */}
      {activeTab === 'daily' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Daily Life Card (Cyan) - Uses Float Image & Flow Root */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Daily Life with VPD</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-living-daily.webp"
              alt="Person experiencing visual fatigue, rubbing their eyes after a long day"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Navigating a visually-oriented world with VPD means routine communication tasks require a massive amount of hidden effort. This constant translation process takes a profound physical and emotional toll.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Zap className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Visual Fatigue</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Tasks requiring intense visual processing (reading, navigating cluttered environments) deplete energy rapidly. This exhaustion is not laziness—it is genuine neurological fatigue.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Map className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Spatial Navigation</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Getting lost in familiar places or struggling to follow maps is incredibly common. Driving demands complex visual processing, meaning many rely heavily on GPS with voice directions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Emotional Impact Card (Yellow) - Uses W-64 Centered Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Emotional & Psychological Impact</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-living-emotional.webp"
              alt="Visual representing resilience and emotional regulation"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Repeatedly struggling with tasks that others find completely effortless damages self-esteem. The emotional weight of an invisible disability requires active psychological maintenance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <AlertTriangle className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Anxiety & Frustration</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Anticipatory anxiety about visually challenging situations (like taking a written test or navigating a new building) is common. Chronic frustration frequently presents as irritability or avoidance.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <ShieldAlert className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Identity & Self-Esteem</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Children often internalize labels like "lazy" or "careless." Understanding that these struggles have a real neurological basis is crucial to countering negative self-perceptions.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Brain className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Building Resilience</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Developing resilience requires reframing VPD as a neurodivergent difference rather than purely a deficit. Learning to aggressively advocate for accommodations builds lifelong strength.</p>
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
                <li>Hornsby, B. W., Naylor, G., & Bess, F. H. (2016). A taxonomy of fatigue concepts and their relation to hearing loss. <i>Ear and Hearing</i>.</li>
                <li>Levine, M. (2003). The myth of laziness. <i>Simon & Schuster</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: EDUCATION & CAREER
      ========================================== */}
      {activeTab === 'education' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Education Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Educational Experiences</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-living-education.webp"
              alt="Student navigating a self-directed learning journey on a college campus"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Traditional schooling heavily emphasizes visual learning (textbooks, whiteboards, dense worksheets). Without structural changes, a student with VPD must work twice as hard for the exact same outcomes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <BookOpen className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Homework Burden</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Because reading and writing demand so much visual processing time, homework takes significantly longer, frequently bleeding into the evening and robbing the student of necessary rest.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <GraduationCap className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Higher Education</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">While college vastly increases reading demands, it also allows students to select majors that match their specific strengths (like verbal or analytical fields). Accessing disability services is vital.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Career Card (Cyan) - Uses W-64 Centered Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Career & Work Life</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-living-career.webp"
              alt="Adult utilizing digital accommodations in an uncluttered workspace"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Professional success comes from leaning into natural strengths rather than grinding against deficits. Determining whether to formally disclose the disability to an employer is a highly personal decision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Compass className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Career Selection</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Career paths emphasizing verbal, interpersonal, or conceptual skills (teaching, counseling, management) often bypass visual deficits. Highly visual fields like architecture or graphic design may present more friction.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <ShieldCheck className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Workplace Accommodations</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The Americans with Disabilities Act (ADA) offers legal protections for VPD in the workplace.<sup>1</sup> Reasonable accommodations might include assistive technology, remote work options, or extended deadlines for reading-heavy tasks.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Briefcase className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Professional Success</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Many individuals with VPD have wildly successful careers. Their sheer determination, resilience, and creative problem-solving skills make them highly adaptable, innovative employees.</p>
              </div>
            </div>
          </div>

          {/* TAB 2 REFERENCES */}
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
                <li>Job Accommodation Network. (2021). Accommodation and compliance series: Visual impairments. <i>JAN</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: RELATIONSHIPS & LIFESPAN
      ========================================== */}
      {activeTab === 'lifespan' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Social Life Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Relationships & Social Life</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-living-social.webp"
              alt="Friends or a romantic couple engaged in an accessible conversation"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Socializing requires energy. Because navigating the physical world is exhausting for someone with VPD, choosing social environments wisely is a critical self-care boundary.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Heart className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Explaining VPD</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">It is incredibly frustrating when partners or friends misinterpret visual deficits as a lack of effort. Using the exact phrase, "My eyes see fine, but my brain processes visual information differently," provides instant clarity.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Users className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Social Activities</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Social activities involving intense visual-motor tracking (like playing catch or team sports) cause high anxiety. Participating in conversation-based socializing or interest groups is often vastly more enjoyable.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Advocacy & Strengths Card (Slate) - Uses W-64 Centered Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Advocacy, Strengths & Hope</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-living-advocacy.webp"
              alt="Diverse community group connecting over shared neurodivergent experiences"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              VPD does not limit overall intelligence. By harnessing technology and finding supportive communities, individuals transition from merely surviving to actively thriving.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Lightbulb className="text-[#2abcd4] w-5 h-5" /> Built-In Strengths
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Individuals with VPD frequently develop massive verbal and auditory processing strengths. Furthermore, having to constantly invent new workarounds for a visually-designed world forces the individual to develop out-of-the-box, highly creative problem-solving skills that translate brilliantly to the workplace.
                </p>
                <div className="bg-white p-3 rounded-lg border border-[#0c264d] border-opacity-20 shadow-sm flex items-start gap-2">
                  <Monitor className="text-[#0c264d] w-4 h-4 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-700">Modern technology (audiobooks, voice dictation, GPS) acts as an instant equalizer, granting unprecedented independence.</p>
                </div>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Search className="text-[#2abcd4] w-5 h-5" /> Self-Advocacy & Community
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Connecting with others who have learning differences completely shatters the feeling of isolation. Experiencing these challenges often builds deep empathy and understanding for others, making individuals with VPD highly effective advocates for workplace accessibility.
                </p>
                <div className="bg-white p-3 rounded-lg border border-[#0c264d] border-opacity-20 shadow-sm flex items-start gap-2">
                  <Clock className="text-[#0c264d] w-4 h-4 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-700">While the core processing difference never vanishes, it becomes highly manageable as the individual matures and masters their accommodations.</p>
                </div>
              </div>

            </div>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Rose, D. H., & Meyer, A. (2002). Teaching every student in the digital age. <i>ASCD</i>.</li>
                <li>Esteves, K. J., & Whitten, E. (2011). Assisted reading with digital audiobooks for students with reading disabilities. <i>Reading Horizons</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('visual-processing')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About VPD
        </button>
      </div>

    </article>
  );
}