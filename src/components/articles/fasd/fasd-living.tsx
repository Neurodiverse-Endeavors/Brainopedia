import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Heart, CheckCircle, Clock, Calendar, MessageSquare, Compass, ShieldAlert, Users, Target, Activity, Anchor } from 'lucide-react';

interface FASDLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function FASDLiving({ setCurrentArticle, initialTab }: FASDLivingProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'perspective';

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
          Living with FASD
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('fasd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About FASD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('fasd')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About FASD
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('perspective')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'perspective'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The FASD Perspective
        </button>
        <button
          onClick={() => handleTabChange('strategies')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'strategies'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Daily Strategies & Social
        </button>
        <button
          onClick={() => handleTabChange('resilience')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'resilience'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Strengths & Resilience
        </button>
      </div>

      {/* ==========================================
          TAB 1: THE FASD PERSPECTIVE
      ========================================== */}
      {activeTab === 'perspective' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Perspective Card (Cyan) - Uses Slate/Navy Badges */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Reframing the "Hidden Disability"</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-living-perspective-1.webp"
              alt="Visual demonstrating a brain-based reframing of behavior"
              className="block mx-auto w-64 max-w-full h-auto rounded-lg border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Living with FASD is a lifelong journey requiring a deep understanding of one's unique neurocognitive profile.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> Because FASD primarily affects brain function rather than physical appearance, the most vital aspect of living well is permanently reframing challenges as brain-based rather than intentional or behavioral.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">"Can't vs. Won't"</h3>
                <p className="text-xs text-slate-700 leading-relaxed">When an individual struggles with a task, it is almost always because their brain physically "can't" do it in that moment—not because they "won't."<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3, 4</sup></p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Inconsistency is a Symptom</h3>
                <p className="text-xs text-slate-700 leading-relaxed">A person might perfectly execute a skill one day and fail completely the next. This reflects the "swiss cheese" nature of the FASD brain, not a lack of effort.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup></p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">The Social Age Gap</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Many individuals have a functional "social age" that is approximately half of their chronological age. Understanding this massive gap instantly reduces frustration and unrealistic expectations.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup></p>
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
                <li>1. Streissguth, A. P., & O'Malley, K. (2000). "Fetal alcohol spectrum disorders: A guide for families and communities." <i>Paul H. Brookes</i>.</li>
                <li>2. Malbin, D. (2002). <i>Trying Differently Rather Than Harder</i>. FASCETS.</li>
                <li>3. Kulp, J. (2013). <i>The Best I Can Be: Living with Fetal Alcohol Syndrome-Effects</i>. Better Endings New Beginnings.</li>
                <li>4. Paley, B., & O'Connor, M. J. (2011). "Behavioral interventions for children and adolescents with FASD." <i>Alcohol Research & Health</i>.</li>
                <li>5. Chudley, A. E., et al. (2005). "Fetal alcohol spectrum disorder: Canadian guidelines for diagnosis." <i>CMAJ</i>.</li>
                <li>6. Streissguth, A. P., et al. (2004). "Risk factors for adverse life outcomes in fetal alcohol syndrome." <i>Journal of Developmental & Behavioral Pediatrics</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: DAILY STRATEGIES & SOCIAL
      ========================================== */}
      {activeTab === 'strategies' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Strategies Card (Navy) - CLEAN 3D BORDERS */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Daily Strategies & The "External Brain"</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-living-strategies-1.webp"
              alt="Visual demonstrating environmental scaffolding and daily routine supports"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Successful living with FASD fundamentally involves creating an "external brain"—environmental and structural supports that actively compensate for internal executive function challenges.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Calendar className="w-4 h-4 text-[#ffd166]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Structure & Predictability</h3>
                  </div>
                  <ul className="text-xs text-slate-700 list-disc pl-5 space-y-1">
                    <li>Use explicitly visual schedules and checklists for all daily routines.</li>
                    <li>Keep the environment organized and fiercely minimize sensory clutter.</li>
                    <li>Prepare for transitions well in advance to prevent dysregulation.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup></li>
                    <li>Maintain highly consistent wake, meal, and sleep times.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <CheckCircle className="w-4 h-4 text-[#2abcd4]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Memory & Processing</h3>
                  </div>
                  <ul className="text-xs text-slate-700 list-disc pl-5 space-y-1">
                    <li>Utilize alarms and digital reminders for all temporal tasks.</li>
                    <li>Break instructions strictly into one or two steps at a time.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup></li>
                    <li>Record important information visually rather than relying on working memory.</li>
                    <li>Use "external cues" like sticky notes placed directly at the point of performance.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* Social Card (Yellow) - DOUBLE RINGS */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Social Connections & Safety</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-living-social-1.webp"
              alt="Group of peers interacting in a structured, safe social environment"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Socializing is both a massive strength and a profound challenge. Many people with FASD are highly outgoing and empathetic, but they actively struggle to read social cues or decipher the hidden motives of others.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup>
            </p>

            <div className="space-y-4 max-w-4xl mx-auto">
              
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#2abcd4] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#2abcd4] mt-1 ml-1">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Safety Awareness</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Individuals with FASD are often overly trusting and naive, making them extremely vulnerable to exploitation or "cashing in" by others.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup> Establishing a "safe person" to consult about new social situations is absolutely vital.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#576d8e] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#2abcd4] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mt-1 ml-1">
                  <Users className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Explicit Skills & Community</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Social rules that neurotypical peers pick up intuitively must be explicitly, concretely taught.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup> Connecting with other FASD families radically reduces isolation, providing a space where "everyone gets it."</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#ffd166] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#ffd166] mt-1 ml-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">The "Ten-Second Rule"</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Processing speed is frequently delayed. Giving someone with FASD ten full seconds to internally process a question before repeating it can single-handedly prevent emotional shutdown and anxiety.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">7</sup></p>
                </div>
              </div>

            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>1. Dubovsky, D. (2015). "FASD: A brain-based disability." <i>National Organization on Fetal Alcohol Syndrome</i>.</li>
                <li>2. Jirikowic, T., et al. (2008). "Children with FASD: Problem behaviors and sensory processing." <i>American Journal of Occupational Therapy</i>.</li>
                <li>3. Kalberg, W. O., & Buckley, D. (2007). "FASD: What types of intervention are useful?" <i>Neuroscience & Biobehavioral Reviews</i>.</li>
                <li>4. Kully-Martens, K., et al. (2012). "A review of social skills deficits in individuals with FASD." <i>Alcoholism: Clinical & Experimental Research</i>.</li>
                <li>5. Fast, D. K., & Conry, J. (2004). "Fetal alcohol syndrome and the criminal justice system." <i>Developmental Disabilities Research Reviews</i>.</li>
                <li>6. Keil, V., et al. (2010). "A randomized controlled trial of a social skills intervention for children with FASD." <i>Child Neuropsychology</i>.</li>
                <li>7. Graefe, S. (2003). <i>Parenting Children with FASD</i>. Adoption Council of BC.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: STRENGTHS & RESILIENCE
      ========================================== */}
      {activeTab === 'resilience' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Strengths Card (Yellow) - CSS DOTS utilizing Navy & Slate */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Strengths & Advocacy</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-living-strengths-1.webp"
              alt="Visual demonstrating resilience, creativity, and self-advocacy"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              While FASD brings significant life challenges, individuals with FASD possess remarkable strengths that can be successfully leveraged for a deeply fulfilling life.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-4xl mx-auto mb-8">
              <div className="grid md:grid-cols-2 gap-4">
                
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <div>
                    <strong className="text-sm text-[#0c264d] block mb-1">Creativity</strong>
                    <p className="text-xs text-slate-700 leading-relaxed">Individuals are often highly talented in art, music, or complex hands-on mechanical tasks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#576d8e] mt-1.5 shrink-0"></div>
                  <div>
                    <strong className="text-sm text-[#0c264d] block mb-1">Profound Persistence</strong>
                    <p className="text-xs text-slate-700 leading-relaxed">A remarkable, driving ability to keep trying and pushing forward despite exhausting daily hurdles.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup></p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#576d8e] mt-1.5 shrink-0"></div>
                  <div>
                    <strong className="text-sm text-[#0c264d] block mb-1">Deep Empathy</strong>
                    <p className="text-xs text-slate-700 leading-relaxed">Fiercely caring for others, highly sensitive to emotions, and incredibly loyal to friends and family.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <div>
                    <strong className="text-sm text-[#0c264d] block mb-1">Verbal Engagement</strong>
                    <p className="text-xs text-slate-700 leading-relaxed">Many are excellent, highly engaging storytellers who thrive in interactive, spoken environments.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup></p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-[#f8fafc] border-l-4 border-[#2abcd4] p-5 rounded-r-xl max-w-4xl mx-auto">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#2abcd4]" /> 
                The Power of Self-Advocacy
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Self-advocacy involves learning how to safely and confidently explain one's neurological needs to others. Phrases like, <em>"My brain needs a little extra time to process that,"</em> or <em>"Could you please give me those instructions in writing?"</em> are powerful tools for independence.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup>
              </p>
            </div>
          </div>

          {/* Mental Health Card (Cyan) - DOUBLE RINGS */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Mental Health & Resilience</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-living-resilience-1.webp"
              alt="Individual utilizing mental health support to build lifelong resilience"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Secondary conditions like severe anxiety and depression are common in FASD. They almost entirely result from the chronic, daily stress of trying to fit into a neurotypical world that is not built for the FASD brain.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4 relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#0c264d] opacity-50"></div>
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#576d8e] mt-1 ml-1">
                  <Anchor className="w-5 h-5" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Building the Scaffold</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Resilience requires building a dedicated "support team" of family, friends, and professionals who actively understand the condition, alongside utilizing explicitly FASD-informed therapy.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4 relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#ffd166] opacity-50"></div>
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#2abcd4] mt-1 ml-1">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Self-Compassion</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The ultimate key to resilience is practicing radical self-compassion—recognizing that the challenges are entirely neurological, not personal failings, and intensely focusing on successes and strengths.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup></p>
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
                <li>1. Olson, H. C., et al. (2009). "'Family matters:' FASD and the family." <i>Developmental Disabilities Research Reviews</i>.</li>
                <li>2. Brown, J., et al. (2018). "Living with FASD: A qualitative study of the experiences of young adults." <i>Global Journal of Health Science</i>.</li>
                <li>3. Coggins, T. E., et al. (2007). "Examining the social communicative abilities of school-age children with FASD." <i>Topics in Language Disorders</i>.</li>
                <li>4. NOFASD Australia. (2020). "Self-advocacy for individuals with FASD."</li>
                <li>5. O'Connor, M. J., & Paley, B. (2009). "Psychiatric conditions associated with prenatal alcohol exposure." <i>Developmental Disabilities Research Reviews</i>.</li>
                <li>6. Petrenko, C. L. (2015). "Positive psychopathology: Building resilience in individuals with FASD." <i>Psychology in the Schools</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('fasd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About FASD
        </button>
      </div>

    </article>
  );
}