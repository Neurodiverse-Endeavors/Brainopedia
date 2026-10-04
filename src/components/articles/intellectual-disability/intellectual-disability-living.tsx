import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { MousePointerClick, Scale, Megaphone, MapPin, Users, HeartHandshake, Key, UserPlus, Home, Star } from 'lucide-react';

interface IDLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function IDLiving({ setCurrentArticle, initialTab }: IDLivingProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'independence');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Intellectual Disability: Living & Thriving
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('intellectual-disability')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap hidden md:flex"
        >
          <span className="text-xl">←</span>
          All About ID
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('intellectual-disability')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About ID
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('independence')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'independence'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Independence & Choice
        </button>
        <button
          onClick={() => setActiveTab('community')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'community'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Community & Connections
        </button>
        <button
          onClick={() => setActiveTab('living')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'living'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Living Arrangements
        </button>
      </div>

      {/* ==========================================
          TAB 1: INDEPENDENCE (Cyan Card + Lucide Icons)
      ========================================== */}
      {activeTab === 'independence' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1761069234509-8205bf45a445?w=1080&q=80"
              alt="Self-advocacy and community participation"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Independence & Self-Determination</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Living with an intellectual disability involves navigating a world that often underestimates the potential of neurodivergent individuals. However, with appropriate supports, community inclusion, and a focus on self-determination, people with ID lead rich, fulfilling lives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <MousePointerClick className="w-8 h-8 text-[#0A9DC4] mb-3" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Choice-Making</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Having the fundamental power and autonomy to decide what to eat, what to wear, and how to spend leisure time.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Scale className="w-8 h-8 text-[#0A9DC4] mb-3" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Supported Decision-Making</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Using a trusted network of people to help understand complex choices, rather than having a guardian legally make decisions for them.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Megaphone className="w-8 h-8 text-[#0A9DC4] mb-3" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Self-Advocacy</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Learning to speak up for oneself and understand one's civil rights. The self-advocacy movement has been vital for systemic progress.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('intellectual-disability')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About ID
            </button>
          </div>

          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Nota, L., et al. (2007). Self-determination and quality of life. <i>Journal of Intellectual Disability Research</i>.</li>
                <li>Wehmeyer, M. L., & Abery, B. H. (2013). Self-determination and choice. <i>Intellectual and Developmental Disabilities</i>.</li>
                <li>Blanck, P., & Martinis, J. G. (2015). "The right to make choices": Supported decision-making. <i>Inclusion</i>.</li>
                <li>Caldwell, J. (2011). Disability identity of leaders in self-advocacy. <i>Intellectual and Developmental Disabilities</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: COMMUNITY (Yellow Card + Icon Badges)
      ========================================== */}
      {activeTab === 'community' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            
            <ImageWithFallback 
              src="/images/id/id-living-tab2-community.webp"
              alt="Friends socializing in an inclusive community setting"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Community & Relationships</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Meaningful connections and community presence are essential pillars for emotional well-being. People with ID often build deep networks of family, friends, and romantic partners when given inclusive opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Inclusive Communities</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Being an active part of a local neighborhood where you are individually known, respected, and valued for your contributions.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Social Inclusion</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Actively participating in clubs, religious groups, or community events alongside neurotypical peers without artificial barriers.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Authentic Connections</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Many individuals with ID are known for their genuine, straightforward social styles, leading to incredibly strong and loyal friendships.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('intellectual-disability')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About ID
            </button>
          </div>

          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Brown, I., & Brown, R. I. (2003). <i>Quality of life and disability</i>.</li>
                <li>Carter, E. W., et al. (2009). Self-determination skills and opportunities. <i>American Journal on Intellectual and Developmental Disabilities</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: LIVING ARRANGEMENTS (Slate Card + 3D Borders)
      ========================================== */}
      {activeTab === 'living' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-slate-100 border-2 border-slate-600 rounded-xl p-6 shadow-sm clear-both">
            
            <ImageWithFallback 
              src="/images/id/id-living-tab3-arrangements.webp"
              alt="Supported living and quality of life"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-400"
            />

            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Living Arrangements & Quality of Life</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Where a person lives should be a matter of personal choice and tailored support needs. Quality of life is measured by the same universal standards: personal development, self-determination, and social inclusion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Key className="w-4 h-4 text-[#0c264d]" /> Independent Living
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Living independently in an apartment or home with minimal community support needed for complex tasks like paying bills or grocery shopping.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <UserPlus className="w-4 h-4 text-[#0A9DC4]" /> Supported Living
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Living in one's own home or apartment with the assistance of more intensive, customized staff support to manage daily logistics and safety.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#d4a017]" /> Shared Living
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Residing with a supportive family or roommates who provide integrated, daily assistance and a shared sense of community.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2abcd4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Home className="w-4 h-4 text-[#2abcd4]" /> Family Home
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Remaining in the family home with access to community resources, respite care, and vocational programs to ensure continued growth.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden md:col-span-2 mt-2">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#10b981]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#10b981]" /> Universal Quality of Life
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">When structural barriers are removed and appropriate supports are provided, people with ID contribute unique perspectives and vital talents to the world, thriving just as anyone else would.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex justify-end my-8 w-full clear-both">
            <button 
              onClick={() => setCurrentArticle?.('intellectual-disability')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="text-xl">←</span>
              All About ID
            </button>
          </div>

          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Stancliffe, R. J., et al. (2011). Adults with ID who use services. <i>American Journal on Intellectual and Developmental Disabilities</i>.</li>
                <li>Lachapelle, Y., et al. (2005). Relationship between quality of life and self-determination. <i>Journal of Intellectual Disability Research</i>.</li>
                <li>Schalock, R. L., et al. (2005). Cross-cultural study of quality of life indicators. <i>American Journal on Mental Retardation</i>.</li>
                <li>Walker, N. (2021). <i>Neuroqueer Heresies</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}