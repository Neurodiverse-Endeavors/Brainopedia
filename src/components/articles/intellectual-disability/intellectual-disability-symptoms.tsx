import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Lightbulb, BookOpen, MessageCircle, Activity, Users, Briefcase, Layers, Star } from 'lucide-react';

interface IDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function IDSymptoms({ setCurrentArticle, initialTab }: IDSymptomsProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'intellectual');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Intellectual Disability: Symptoms & Characteristics
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
          onClick={() => setActiveTab('intellectual')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'intellectual'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Intellectual Functioning
        </button>
        <button
          onClick={() => setActiveTab('adaptive')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'adaptive'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Adaptive Behavior
        </button>
        <button
          onClick={() => setActiveTab('support')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'support'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Support & Strengths
        </button>
      </div>

      {/* ==========================================
          TAB 1: INTELLECTUAL FUNCTIONING (Cyan Card + Lucide Icons)
      ========================================== */}
      {activeTab === 'intellectual' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            
            <ImageWithFallback 
              src="/images/id/id-symptoms-tab1-intellectual.webp"
              alt="Conceptual representation of cognitive reasoning and learning"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Intellectual Functioning</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Intellectual functioning refers to general mental capacity and cognitive processing speed. It encompasses how a person naturally learns, reasons through new situations, and solves complex problems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Reasoning</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Experiencing difficulty with logical sequencing, abstract thinking, and understanding complex or multi-step concepts.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Brain className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Problem-Solving</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Finding it challenging to adapt to sudden changes, solve unexpected everyday problems, or anticipate future consequences.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Learning Trajectory</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Taking significantly more time to absorb, process, and retain new information or academic skills compared to neurotypical peers.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#0A9DC4] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Abstract Thinking</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Processing language highly literally, resulting in difficulty understanding metaphors, idioms, sarcasm, or non-literal social cues.</p>
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
                <li>American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.).</li>
                <li>American Association on Intellectual and Developmental Disabilities (AAIDD). (2010). <i>Intellectual Disability: Definition, Classification, and Systems of Supports</i>.</li>
                <li>Greenspan, S., & Woods, G. W. (2014). Intellectual disability as a disorder of reasoning. <i>Current Opinion in Psychiatry</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: ADAPTIVE BEHAVIOR (Yellow Card + Icon Badges)
      ========================================== */}
      {activeTab === 'adaptive' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1638699532230-1c7676c2a708?w=1080&q=80"
              alt="Adaptive skills and daily living"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Adaptive Behavior</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Adaptive behavior involves the practical, everyday skills needed to function safely and appropriately in daily life. Clinicians evaluate these skills across conceptual, social, and practical domains to accurately determine an individual's support needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Conceptual Skills</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Involves language comprehension, functional reading and writing, basic math, time management, and general knowledge about the world.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Social Skills</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Encompasses interpersonal communication, empathy, social judgment, navigating friendships, and the ability to follow unspoken social rules.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Practical Skills</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Covers personal care routines, hygiene, job responsibilities, money management, travel logistics, and organizing daily schedules.</p>
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
                <li>Tassé, M. J., et al. (2012). The construct of adaptive behavior. <i>American Journal on Intellectual and Developmental Disabilities</i>.</li>
                <li>Harrison, P. L., & Oakland, T. (2015). <i>Adaptive Behavior Assessment System</i> (3rd ed.).</li>
                <li>Leffert, J. S., et al. (2010). Social perception in children with ID. <i>Journal of Intellectual Disability Research</i>.</li>
                <li>Sparrow, S. S., et al. (2016). <i>Vineland Adaptive Behavior Scales</i> (3rd ed.).</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: SUPPORT & STRENGTHS (Slate Card + 3D Borders)
      ========================================== */}
      {activeTab === 'support' && (
        <div className="space-y-8 animate-fadeIn">

          <div className="bg-slate-100 border-2 border-slate-600 rounded-xl p-6 shadow-sm clear-both">
            
            <ImageWithFallback 
              src="/images/id/id-symptoms-tab3-support.webp"
              alt="Individual with an intellectual disability succeeding in a community setting"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-400"
            />

            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Support Levels & Strengths</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Rather than focusing purely on severity, modern clinical frameworks categorize intellectual disability by the level of daily support an individual requires to thrive. It is equally vital to proactively recognize and cultivate the unique strengths and talents inherent in every neurodivergent profile.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              {/* Level Cards */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#0c264d]" /> Mild & Moderate Support
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Mild ID is the most common presentation, accounting for roughly 85% of individuals.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> They often live independently or semi-independently. Moderate support needs typically involve vocational training and routine assistance with complex self-care.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#0A9DC4]" /> Severe & Profound Support
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Individuals requiring severe support need significant supervision for daily activities and safety. Those with profound support needs generally require pervasive, lifelong support and 24-hour dedicated care.</p>
                </div>
              </div>

              {/* Strengths Card (Stretches across both columns) */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden md:col-span-2">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#d4a017]" /> Inherent Strengths & Talents
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Individuals with ID possess a wide range of incredible strengths that are often overlooked by clinical assessments. They frequently exhibit deep social intuition, highly genuine and direct communication styles, notable persistence, and specific talents in art, music, routine-building, and physical activities.</p>
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
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Salvador-Carulla, L., et al. (2011). Intellectual developmental disorders. <i>World Psychiatry</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>World Health Organization (WHO). (2018). <i>International Classification of Diseases</i> (11th rev.).</li>
                <li>Gilmore, L., et al. (2003). Developmental expectations and personality stereotypes. <i>International Journal of Disability, Development and Education</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}