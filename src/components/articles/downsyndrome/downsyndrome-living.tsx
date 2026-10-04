import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Users, HeartHandshake, Briefcase, Home, Megaphone, Scale } from 'lucide-react';

interface DownSyndromeLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DownSyndromeLiving({ setCurrentArticle, initialTab }: DownSyndromeLivingProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'community';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Down Syndrome: Living & Thriving
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('downsyndrome')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap hidden md:flex"
        >
          <span className="text-xl">←</span>
          All About Down Syndrome
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('downsyndrome')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About Down Syndrome
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('community')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'community'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Community Inclusion
        </button>
        <button
          onClick={() => handleTabChange('independence')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'independence'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Work & Independence
        </button>
        <button
          onClick={() => handleTabChange('advocacy')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'advocacy'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Advocacy & Rights
        </button>
      </div>

      {/* ==========================================
          TAB 1: COMMUNITY INCLUSION (Standard Cards)
      ========================================== */}
      {activeTab === 'community' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Community & Connection</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-living-tab1-community.webp"
              alt="Community inclusion and social participation"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              People with Down syndrome lead fulfilling, meaningful lives and contribute to their communities in profound ways. Active participation in mainstream social environments ensures they are valued for their unique perspectives and capabilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Users className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Social Inclusion</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">True inclusion means moving beyond mere presence and actively fostering participation in schools, recreational programs, and neighborhood events alongside neurotypical peers.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Deep Relationships</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Adults with Down syndrome build strong, lasting friendships, engage in romantic relationships, and often form the social backbone of their local communities.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('downsyndrome')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About Down Syndrome
            </button>
          </div>

          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>National Down Syndrome Society (NDSS). (n.d.). Socialization and Down Syndrome.</li>
                <li>Global Down Syndrome Foundation. (n.d.). Myths & Truths.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: WORK & INDEPENDENCE (3D Border Cards)
      ========================================== */}
      {activeTab === 'independence' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-slate-100 border-2 border-slate-600 rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Independence & Employment</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-living-tab2-independence.webp"
              alt="Adult with Down syndrome thriving in a workplace environment"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-400"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              With the right structural supports, adults with Down syndrome pursue successful careers and exercise high levels of independence. Fostering self-care and robust decision-making skills allows them to live purposefully.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Home className="w-4 h-4 text-[#0c264d]" /> Supported Living
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Many adults live independently or semi-independently in apartments or group homes, utilizing supported living services to assist with complex logistics and household management.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#0A9DC4]" /> Integrated Employment
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Access to competitive, integrated employment ensures individuals earn fair wages and work alongside people of all abilities, boosting self-esteem and financial autonomy.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('downsyndrome')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About Down Syndrome
            </button>
          </div>

          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>National Down Syndrome Society (NDSS). (n.d.). Employment.</li>
                <li>National Institutes of Health (NIH). Eunice Kennedy Shriver National Institute of Child Health and Human Development. Information on Down Syndrome.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: ADVOCACY & RIGHTS (Icon Badges)
      ========================================== */}
      {activeTab === 'advocacy' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Advocacy & Civil Rights</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-living-tab3-advocacy.webp"
              alt="An individual advocating for neurodiversity and inclusion rights"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              The Down syndrome advocacy movement continues to advance civil rights, moving society toward a model of equity and inclusion. Empowering individuals to speak for themselves is the ultimate goal of all developmental supports.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              {/* BADGE 1: Yellow Background with Navy Icon */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mt-0.5">
                  <Megaphone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Self-Advocacy</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Providing tools and training to ensure individuals can express their own desires, exercise their legal rights, and direct the course of their own lives.</p>
                </div>
              </div>

              {/* BADGE 2: Cyan Background with Navy Icon */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#2abcd4] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#0A9DC4] border-opacity-30 mt-0.5">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Presumption of Competence</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A cultural and educational shift demanding that society assumes intellectual capability and potential in individuals with Down syndrome, rather than leading with limitations.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('downsyndrome')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About Down Syndrome
            </button>
          </div>

          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>National Down Syndrome Society (NDSS). (n.d.). Self-Advocacy.</li>
                <li>Global Down Syndrome Foundation. (n.d.). Advocacy & Public Policy.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}