import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyspraxiaLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DyspraxiaLiving({ setCurrentArticle, initialTab }: DyspraxiaLivingProps) {
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
          Living with Dyspraxia
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dyspraxia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Dyspraxia
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
          onClick={() => handleTabChange('strategies-success')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'strategies-success'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Strategies & Success
        </button>
      </div>

      {/* ==========================================
          TAB 1: DAILY LIFE & EMOTIONS
      ========================================== */}
      {activeTab === 'daily-life' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Living successfully with dyspraxia involves recognizing that your brain simply organizes action differently. While the underlying neurological profile is lifelong, many individuals find their "clumsiness" becomes highly manageable as they refine their environment and develop resilient coping mechanisms.<sup>1</sup>
          </p>

          {/* Daily Life Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Navigating the Physical World</h2>
            
            <ImageWithFallback 
              src="/images/dyspraxia/dyspraxia-living-daily.webp" 
              alt="Person taking a deep breath while organizing a physical space"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because everyday movements are not fully automated, dyspraxic individuals must use high-level conscious reasoning just to navigate a physical space, which carries a significant energetic cost.<sup>2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">The Cost of Effort</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Chronic Fatigue:</strong> Feeling physically and mentally drained after seemingly simple tasks like grocery shopping, cooking, or driving.</li>
                  <li><strong>Sensory Overload:</strong> Navigating crowded or chaotic environments requires immense coordination, often leading to rapid sensory exhaustion.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Emotional Impact</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Anxiety:</strong> Anticipatory anxiety surrounding physical performance, such as carrying a full tray in a busy cafeteria.<sup>3</sup></li>
                  <li><strong>Frustration:</strong> Managing the emotional gap between knowing exactly how a task should be done and struggling to make the body execute it smoothly.</li>
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
            Individuals with dyspraxia lead fulfilling and highly successful lives across many professional fields. Success often relies on gravitating toward roles that reward verbal intelligence, empathy, and strategic thinking rather than pure manual dexterity.
          </p>

          {/* Education & Career Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Professional Success</h2>
            
            <ImageWithFallback 
              src="/images/dyspraxia/dyspraxia-living-career.webp" 
              alt="Professional creatively brainstorming and mapping ideas"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              In adulthood, the focus shifts away from "fixing" the coordination issues and toward finding supportive environments and careers that naturally align with the dyspraxic brain's unique strengths.<sup>4</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Career Trajectories</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Creative Industries:</strong> Thriving in fields like writing, conceptual design, and the arts where non-linear thinking is highly valued.</li>
                  <li><strong>Empathy-Driven Roles:</strong> Excelling in teaching, counseling, or advocacy work due to a profound capacity for emotional understanding.</li>
                  <li><strong>Strategic Planning:</strong> Succeeding in management and big-picture strategy where complex sequential details can be delegated.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Workplace Advocacy</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Clear Instructions:</strong> Requesting written rather than verbal instructions for complex, multi-step projects.</li>
                  <li><strong>Digital Tools:</strong> Utilizing speech-to-text software, ergonomic keyboards, and digital calendar alerts to manage daily workflows.</li>
                  <li><strong>Physical Setup:</strong> Arranging the workspace to minimize physical obstacles and streamline repetitive manual tasks.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: STRATEGIES & SUCCESS
      ========================================== */}
      {activeTab === 'strategies-success' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Living well with dyspraxia requires proactive self-advocacy and a healthy dose of humor. By building a personalized toolkit of accommodations, individuals can navigate a world designed for typical coordination with confidence.
          </p>

          {/* Strategies Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Keys to Thriving</h2>
            
            <ImageWithFallback 
              src="/images/dyspraxia/dyspraxia-living-strategies.webp" 
              alt="Person enjoying an alternative, low-pressure physical activity"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Resilience and highly creative problem-solving are often the hallmarks of the dyspraxic experience. Over time, these daily adaptations forge an incredibly adaptable and determined mindset.<sup>5</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Environment Engineering</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Wardrobe:</strong> Choosing slip-on shoes, elastic laces, and clothes without complex fasteners to simplify mornings.</li>
                  <li><strong>Organization:</strong> Creating highly visible, dedicated spots for keys, wallets, and daily essentials to combat short-term memory drops.</li>
                  <li><strong>Kitchen Hacks:</strong> Using pre-chopped vegetables, specialized grip utensils, and non-slip mats to make cooking safe and enjoyable.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Joy & Advocacy</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Movement for Joy:</strong> Finding physical activities that feel genuinely good—like swimming, hiking, or tai chi—without the intense pressure of complex team sports.</li>
                  <li><strong>Self-Advocacy:</strong> Confidently asking for accommodations at school or work. It is about establishing equal access, not asking for special treatment.</li>
                  <li><strong>Self-Compassion:</strong> Forgiving oneself for broken dishes or clumsy moments, recognizing they are a neurological reality, not a personal flaw.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dyspraxia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          Back to Dyspraxia
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
            Cited Studies & Literature
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p>1. Kirby, A., et al. (2014). Do children with developmental coordination disorder grow out of it? <i>Journal of Child Psychology and Psychiatry</i>.</p>
            <p>2. Tal Saban, M., et al. (2012). The daily functioning of adults with developmental coordination disorder. <i>Research in Developmental Disabilities</i>.</p>
            <p>3. Hill, E. L., & Brown, D. (2013). Mood impairments in adults previously diagnosed with developmental coordination disorder. <i>Journal of Mental Health</i>.</p>
            <p>4. Kirby, A., et al. (2008). Educational and social outcomes of adults with developmental coordination disorder. <i>Dyslexia</i>.</p>
            <p>5. Missiuna, C., et al. (2007). Mysteries and mazes: Parents' experiences of children with developmental coordination disorder. <i>Canadian Journal of Occupational Therapy</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Biggs, V. (2005). <i>Caged in Chaos: A Dyspraxic Guide to Breaking Free</i>. Jessica Kingsley Publishers.</li>
            <li>Boon, M. (2010). <i>Understanding Dyspraxia: A Guide for Parents and Teachers</i> (2nd ed.). Jessica Kingsley Publishers.</li>
            <li>Colley, M. (2006). <i>Living with Dyspraxia: A Guide for Adults with Developmental Co-ordination Disorders</i>. Jessica Kingsley Publishers.</li>
            <li>Cousins, M., & Smyth, M. M. (2003). Developmental coordination impairments in adulthood. <i>Human Movement Science</i>.</li>
            <li>Dawson, P., & Guare, R. (2010). <i>Executive Skills in Children and Adolescents: A Practical Guide to Assessment and Intervention</i>. Guilford Press.</li>
            <li>Kirby, A., & Peters, L. (2007). <i>100 Ideas for Supporting Children with Dyspraxia and DCD</i>. Continuum.</li>
            <li>Macintyre, S. (2001). <i>Dyspraxia 5-14: Identifying and Supporting Young People</i>. Routledge.</li>
            <li>Zwicker, J. G., Missiuna, C., Harris, S. R., & Boyd, L. A. (2012). Developmental coordination disorder: A review and update. <i>European Journal of Paediatric Neurology</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}