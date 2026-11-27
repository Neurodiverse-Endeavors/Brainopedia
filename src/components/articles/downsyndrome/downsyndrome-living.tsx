import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Users, HeartHandshake, Megaphone, Scale } from 'lucide-react';

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
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Down Syndrome: Living & Thriving
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('downsyndrome')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
        >
          <span className="text-xl">←</span>
          All About Down Syndrome
        </button>
      </div>

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
          TAB 1: COMMUNITY INCLUSION (CYAN)
      ========================================== */}
      {activeTab === 'community' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Community Card (Tab 1 Default: Cyan with Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Community & Connection</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-living-tab1-community.webp"
              alt="Community inclusion and social participation"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              People with Down syndrome lead fulfilling, meaningful lives and contribute to their communities in profound ways. Active participation in mainstream social environments ensures they are valued for their unique perspectives and capabilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Users className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Social Inclusion</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  True inclusion means moving beyond mere presence and actively fostering participation in schools, recreational programs, and neighborhood events alongside neurotypical peers.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <HeartHandshake className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Deep Relationships</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Adults with Down syndrome build strong, lasting friendships, engage in romantic relationships, and often form the social backbone of their local communities.
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full">
            <button 
              onClick={() => setCurrentArticle?.('downsyndrome')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
            >
              <span className="text-xl">←</span>
              All About Down Syndrome
            </button>
          </div>

          {/* ===== TAB 1 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>National Down Syndrome Society (NDSS). (n.d.). <i>Socialization and Down Syndrome</i>.</li>
                <li>Global Down Syndrome Foundation. (n.d.). <i>Myths & Truths</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: WORK & INDEPENDENCE (NAVY)
      ========================================== */}
      {activeTab === 'independence' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Independence Card (Tab 2 Default: Navy with 3D Left-Stripe Inner Cards, No Icons/Bullets) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Independence & Employment</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-living-tab2-independence.webp"
              alt="Adult with Down syndrome thriving in a workplace environment"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              With the right structural supports, adults with Down syndrome pursue successful careers and exercise high levels of independence. Fostering self-care and robust decision-making skills allows them to live purposefully.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Supported Living
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Many adults live independently or semi-independently in apartments or group homes, utilizing supported living services to assist with complex logistics and household management.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Integrated Employment
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Access to competitive, integrated employment ensures individuals earn fair wages and work alongside people of all abilities, boosting self-esteem and financial autonomy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full">
            <button 
              onClick={() => setCurrentArticle?.('downsyndrome')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
            >
              <span className="text-xl">←</span>
              All About Down Syndrome
            </button>
          </div>

          {/* ===== TAB 2 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>National Down Syndrome Society (NDSS). (n.d.). <i>Employment</i>.</li>
                <li>National Institutes of Health (NIH). Eunice Kennedy Shriver National Institute of Child Health and Human Development. <i>Information on Down Syndrome</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: ADVOCACY & RIGHTS (YELLOW)
      ========================================== */}
      {activeTab === 'advocacy' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Advocacy Card (Tab 3 Default: Yellow with Double-Ring Navy Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Advocacy & Civil Rights</h2>
            
            <ImageWithFallback 
              src="/images/downsyndrome/downsyndrome-living-tab3-advocacy.webp"
              alt="An individual advocating for neurodiversity and inclusion rights"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              The Down syndrome advocacy movement continues to advance civil rights, moving society toward a model of equity and inclusion. Empowering individuals to speak for themselves is the ultimate goal of all developmental supports.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <Megaphone className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Self-Advocacy</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Providing tools and training to ensure individuals can express their own desires, exercise their legal rights, and direct the course of their own lives.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Presumption of Competence</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  A cultural and educational shift demanding that society assumes intellectual capability and potential in individuals with Down syndrome, rather than leading with limitations.
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full">
            <button 
              onClick={() => setCurrentArticle?.('downsyndrome')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
            >
              <span className="text-xl">←</span>
              All About Down Syndrome
            </button>
          </div>

          {/* ===== TAB 3 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>National Down Syndrome Society (NDSS). (n.d.). <i>Self-Advocacy</i>.</li>
                <li>Global Down Syndrome Foundation. (n.d.). <i>Advocacy & Public Policy</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}