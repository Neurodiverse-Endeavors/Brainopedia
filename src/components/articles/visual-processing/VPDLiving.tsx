import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ShieldCheck, Brain, Heart, Users, ShieldAlert, Sparkles, Compass, Search, GraduationCap, Briefcase, Activity, Map, Lightbulb, CheckCircle, Zap, Monitor, BookOpen, Clock, AlertTriangle } from 'lucide-react';

interface VPDLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function VPDLiving({ setCurrentArticle, initialTab }: VPDLivingProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'daily';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & BACK BUTTON */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Living with Visual Processing Disorder
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('visual-processing')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
        >
          <span className="text-xl">←</span>
          All About VPD
        </button>
      </div>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('daily')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'daily'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Daily Life &amp; Emotion
        </button>
        <button
          onClick={() => handleTabChange('education')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'education'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Education &amp; Career
        </button>
        <button
          onClick={() => handleTabChange('lifespan')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'lifespan'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Relationships &amp; Lifespan
        </button>
      </div>

      {/* ==========================================
          TAB 1: DAILY LIFE & EMOTION
      ========================================== */}
      {activeTab === 'daily' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Single Unified Card (Cyan) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Daily Life &amp; Emotion</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-living-daily.webp"
              alt="Layered 3D paper-cut illustration showing a person rubbing their eyes and a navigational compass with a map"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Navigating a visually-oriented world with VPD means routine communication tasks require a massive amount of hidden effort. This constant translation process takes a profound physical and emotional toll.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Visual Fatigue</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Tasks requiring intense visual processing deplete energy rapidly. This exhaustion is genuine neurological fatigue.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-3">
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Spatial Navigation</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Getting lost in familiar places or struggling to follow maps is incredibly common, making voice-guided GPS essential.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-3">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Anxiety &amp; Frustration</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Anticipatory anxiety about visually challenging situations is common. Chronic frustration frequently presents as avoidance.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-3">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Self-Esteem</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Understanding that these struggles have a real neurological basis is crucial to countering negative self-perceptions.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 mb-12 flex justify-end w-full">
            <button 
              onClick={() => setCurrentArticle?.('visual-processing')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm"
            >
              <span className="text-xl">←</span>
              All About VPD
            </button>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Hornsby, B. W., Naylor, G., &amp; Bess, F. H. (2016). A taxonomy of fatigue concepts and their relation to hearing loss. <i>Ear and Hearing</i>.</li>
                <li>Levine, M. (2003). The myth of laziness. <i>Simon &amp; Schuster</i>.</li>
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

          {/* Single Unified Card (Navy) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Education &amp; Career</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-living-education.webp"
              alt="Graphic Placeholder"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Traditional schooling heavily emphasizes visual learning. Without structural changes, a student with VPD must work twice as hard. Professional success comes from leaning into natural strengths rather than grinding against deficits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]" />
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Homework Burden</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Because reading and writing demand so much visual processing time, homework takes significantly longer, bleeding into needed rest time.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]" />
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Higher Education</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">College vastly increases reading demands, but it allows students to select majors matching verbal or analytical strengths.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]" />
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Career Selection</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Paths emphasizing verbal or conceptual skills bypass visual deficits. Highly visual fields like graphic design may present more friction.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]" />
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Work Accommodations</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The ADA offers legal protections.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> Reasonable accommodations include remote options or extended deadlines for reading tasks.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 mb-12 flex justify-end w-full">
            <button 
              onClick={() => setCurrentArticle?.('visual-processing')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm"
            >
              <span className="text-xl">←</span>
              All About VPD
            </button>
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

          {/* Single Unified Card (Yellow) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Relationships &amp; Lifespan</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-living-social.webp"
              alt="Graphic Placeholder"
              className="block mx-auto w max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Socializing requires energy. Because navigating the physical world is exhausting for someone with VPD, choosing social environments wisely is a critical self-care boundary.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Explaining VPD</h3>
                <p className="text-xs text-slate-700 leading-relaxed">It is frustrating when partners misinterpret visual deficits as lack of effort. Saying "my brain processes visual information differently" provides clarity.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Social Activities</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Social activities involving intense visual-motor tracking cause anxiety. Participating in conversation-based socializing is vastly more enjoyable.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Built-In Strengths</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Constantly inventing workarounds forces the individual to develop out-of-the-box, highly creative problem-solving skills.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Community</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Connecting with others who have learning differences shatters isolation and builds deep empathy and understanding for others.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 mb-12 flex justify-end w-full">
            <button 
              onClick={() => setCurrentArticle?.('visual-processing')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm"
            >
              <span className="text-xl">←</span>
              All About VPD
            </button>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Rose, D. H., &amp; Meyer, A. (2002). Teaching every student in the digital age. <i>ASCD</i>.</li>
                <li>Esteves, K. J., &amp; Whitten, E. (2011). Assisted reading with digital audiobooks for students with reading disabilities. <i>Reading Horizons</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}