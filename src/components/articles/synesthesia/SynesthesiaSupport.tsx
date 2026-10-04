import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SynesthesiaSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function SynesthesiaSupport({ setCurrentArticle, initialTab }: SynesthesiaSupportProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'embracing';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Synesthesia: Support & Management
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('synesthesia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Synesthesia
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('embracing')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'embracing'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Embracing the Experience
        </button>
        <button
          onClick={() => handleTabChange('challenges')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'challenges'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Navigating Challenges
        </button>
        <button
          onClick={() => handleTabChange('community')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'community'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Community & Research
        </button>
      </div>

      {/* ==========================================
          TAB 1: EMBRACING THE EXPERIENCE
      ========================================== */}
      {activeTab === 'embracing' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Unlike many other neurodivergent profiles, synesthesia is not considered a disorder requiring treatment, therapy, or "management" in the traditional sense.<sup>1</sup> Instead, the focus is on understanding and actively leveraging it as a unique, highly beneficial way of perceiving the world.
          </p>

          {/* Core Strengths Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Cognitive & Creative Benefits</h2>
            
            <ImageWithFallback 
              src="/images/synesthesia/synesthesia-support-embracing.webp" 
              alt="Individual engaging in creative, multi-sensory artistic expression"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Far from being a deficit, synesthesia provides a rich, multi-sensory experience of the world that often confers distinct cognitive advantages, particularly in the realms of memory and the arts.<sup>5</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Enhanced Memory</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Sensory Anchors:</strong> Additional sensory cues (like associating a name with a specific color or taste) make recalling facts and figures significantly easier.<sup>2</sup></li>
                  <li><strong>Visuospatial Advantage:</strong> Many synesthetes demonstrate superior spatial memory and pattern recognition abilities.<sup>3</sup></li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Creative Perspectives</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Artistic Edge:</strong> Provides a natural, intuitive advantage in fields like music, visual art, writing, and even mathematics.<sup>4</sup></li>
                  <li><strong>Unique Visualization:</strong> Allows individuals to approach complex problem-solving from entirely novel, multi-dimensional angles.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: NAVIGATING CHALLENGES
      ========================================== */}
      {activeTab === 'challenges' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            While generally a positive experience, the involuntary nature of synesthetic perception can occasionally present situational challenges in daily life, particularly when dealing with intense stimuli or communicating with others.
          </p>

          {/* Environmental & Social Challenges Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Sensory & Social Hurdles</h2>
            
            <ImageWithFallback 
              src="/images/synesthesia/synesthesia-support-challenges.webp" 
              alt="Person managing a highly stimulating auditory environment"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              "Management" for a synesthete typically involves developing strategies to mitigate sensory overload in highly stimulating environments and finding language to explain their internal world to non-synesthetes.<sup>6</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Sensory Overload</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Overstimulation:</strong> Loud, chaotic environments (like concerts or busy cities) can trigger overwhelming cascades of visual colors and shapes.</li>
                  <li><strong>Distraction:</strong> Intense synesthetic perceptions can occasionally distract from primary tasks, such as driving or reading.</li>
                  <li><strong>Unpleasant Associations:</strong> In rare cases, a specific sound or word may trigger a genuinely unpleasant physical taste or sensation.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Interpersonal Communication</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>The "Invisible" Experience:</strong> Difficulty explaining deeply physical, involuntary sensations to people who have never experienced them.</li>
                  <li><strong>Childhood Confusion:</strong> Often feeling isolated or confused in early childhood before realizing that other people do not see the world the same way.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: COMMUNITY & RESEARCH
      ========================================== */}
      {activeTab === 'community' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            A key element of living well with synesthesia is connection. Validating the experience through shared community and contributing to ongoing scientific research provides a strong, positive sense of neurodivergent identity.
          </p>

          {/* Connection Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Finding Community & Purpose</h2>
            
            <ImageWithFallback 
              src="/images/synesthesia/synesthesia-support-community.webp" 
              alt="People connecting in an online forum"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Connecting with other synesthetes often provides profound relief and validation, transforming a solitary, misunderstood experience into a shared, celebrated community identity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Education & Community</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Self-Education:</strong> Learning the vocabulary of synesthesia helps individuals articulate their exact experiences to family, teachers, and employers.</li>
                  <li><strong>Online Forums:</strong> Participating in online groups to share strategies for managing sensory overload and comparing unique color-letter maps.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Contributing to Science</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Online Testing:</strong> Engaging with formalized online batteries (like the Synesthesia Battery) helps validate the individual's specific profile.<sup>7</sup></li>
                  <li><strong>Research Studies:</strong> Scientists are continuously seeking synesthetes to participate in cognitive and genetic research to better understand human brain development.<sup>8</sup></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('synesthesia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Synesthesia
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
            <p>1. Cytowic, R. E. (2002). <i>Synesthesia: A union of the senses</i> (2nd ed.). MIT Press.</p>
            <p>2. Yaro, C., & Ward, J. (2007). Searching for Shereshevskii: What is superior about the memory of synaesthetes? <i>Quarterly Journal of Experimental Psychology</i>.</p>
            <p>3. Simner, J., et al. (2009). A foundation for savantism? Visuo-spatial synaesthetes present with cognitive benefits. <i>Cortex</i>.</p>
            <p>4. Chun, C. A., & Hupé, J. M. (2016). Are synesthetes exceptional beyond their synesthetic associations? A systematic comparison of creativity, personality, cognition, and mental imagery in synesthetes and controls. <i>British Journal of Psychology</i>.</p>
            <p>5. Cytowic, R. E. (1995). Synesthesia: Phenomenology and neuropsychology. A review of current knowledge. <i>Psyche</i>.</p>
            <p>6. Ward, J. (2013). Synesthesia. <i>Annual Review of Psychology</i>.</p>
            <p>7. Rothen, N., et al. (2013). Diagnosing synaesthesia with online colour pickers: Maximising sensitivity and specificity. <i>Journal of Neuroscience Methods</i>.</p>
            <p>8. Galeyev, B., & Vanechkina, I. (2001). Was Scriabin a synesthete? <i>Leonardo</i>.</p>
          </div>
        </div>
      </div>
    </article>
  );
}