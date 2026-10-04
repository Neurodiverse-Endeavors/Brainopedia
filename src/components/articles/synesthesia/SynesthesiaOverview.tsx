import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SynesthesiaOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function SynesthesiaOverview({ setCurrentArticle, initialTab }: SynesthesiaOverviewProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'what';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Synesthesia: Overview
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
          onClick={() => handleTabChange('what')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'what'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          What is Synesthesia?
        </button>
        <button
          onClick={() => handleTabChange('types')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'types'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Types & Presentations
        </button>
        <button
          onClick={() => handleTabChange('facts')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'facts'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Key Facts & Stats
        </button>
      </div>

      {/* ==========================================
          TAB 1: WHAT IS SYNESTHESIA?
      ========================================== */}
      {activeTab === 'what' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Synesthesia is a fascinating neurological phenomenon in which stimulation of one sensory or cognitive pathway leads to involuntary, automatic experiences in a second sensory or cognitive pathway.<sup>1</sup>
          </p>

          {/* Definition Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Joined Sensation</h2>
            
            <ImageWithFallback 
              src="/images/synesthesia/synesthesia-overview-intro.webp" 
              alt="Abstract representation of crossed sensory pathways"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The term comes from the Greek words "syn" (together) and "aisthesis" (sensation).<sup>3</sup> For a synesthete, the senses are uniquely intertwined—they might see vibrant colors when listening to music, or taste distinct flavors when reading words on a page.<sup>2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Core Characteristics</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Involuntary:</strong> The cross-sensory experience happens automatically without conscious effort.<sup>6</sup></li>
                  <li><strong>Consistent:</strong> If the letter "A" appears red, it will always appear red throughout the person's life.<sup>7</sup></li>
                  <li><strong>Lifelong:</strong> It is typically a condition people are born with, not something developed later in life.<sup>4</sup></li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">What It Is Not</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Not a hallucination:</strong> Synesthetes know the colors or tastes are in their mind's eye, not physical objects in the room.</li>
                  <li><strong>Not a disorder:</strong> It does not impair cognitive function or indicate mental illness.</li>
                  <li><strong>Not a metaphor:</strong> They actually experience the sensation, rather than just associating two ideas.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: TYPES & PRESENTATIONS
      ========================================== */}
      {activeTab === 'types' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            There are over 80 known forms of synesthesia, as almost any two senses or cognitive pathways can be linked. Some individuals have just one type, while others experience multiple intersecting forms.
          </p>

          {/* Common Types Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Common Presentations</h2>
            
            <ImageWithFallback 
              src="/images/synesthesia/synesthesia-overview-types.webp" 
              alt="Visual depiction of letters associated with colors"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              While manifestations vary wildly from person to person, certain types of synesthesia appear much more frequently in the population. The most common forms typically involve color mapping to letters, numbers, or time concepts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Grapheme-Color</h3>
                <p className="text-sm text-slate-700 mb-2 font-bold italic">Seeing letters & numbers as colors</p>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>The most common and widely researched form of synesthesia.</li>
                  <li>Each letter or number has an inherent, specific color (e.g., A is always red).</li>
                  <li>Helps many synesthetes remember phone numbers and spelling.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Chromesthesia</h3>
                <p className="text-sm text-slate-700 mb-2 font-bold italic">Hearing sounds as colors</p>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Music, voices, or everyday sounds trigger moving colors, shapes, and textures.</li>
                  <li>Often highly prevalent among musicians and composers.</li>
                  <li>Loud or harsh sounds may produce sharp, bright visual flashes.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Lexical-Gustatory</h3>
                <p className="text-sm text-slate-700 mb-2 font-bold italic">Tasting spoken or written words</p>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>A rarer form where hearing or reading specific words triggers intense physical tastes.</li>
                  <li>The word "society" might taste exactly like baked apples.</li>
                  <li>Can also involve feeling specific textures or temperatures in the mouth.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: KEY FACTS & STATS
      ========================================== */}
      {activeTab === 'facts' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Synesthesia has historically been viewed as a rare anomaly, but modern neurological research has proven it to be a relatively common, harmless, and often beneficial variation in human brain development.
          </p>

          {/* Prevalence Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Prevalence & Benefits</h2>
            
            <ImageWithFallback 
              src="/images/synesthesia/synesthesia-overview-facts.webp" 
              alt="Artist creating vibrant artwork utilizing synesthetic perception"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Rather than being a disability, synesthesia is overwhelmingly viewed by those who have it as a gift. It fundamentally enriches how they perceive the world and frequently acts as a powerful mnemonic device and catalyst for artistic expression.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Population Statistics</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>General Prevalence:</strong> Estimated to occur in roughly 2-4% of the global population.<sup>5</sup></li>
                  <li><strong>Underreported:</strong> Many individuals never realize their perception is unique, assuming everyone sees days of the week as colors.</li>
                  <li><strong>Familial links:</strong> It runs strongly in families, suggesting a clear genetic component.<sup>4</sup></li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Cognitive Strengths</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Enhanced Memory:</strong> The extra sensory associations make recalling facts, names, and dates significantly easier.</li>
                  <li><strong>Creative Link:</strong> Synesthesia is found at much higher rates among artists, musicians, and creative professionals.<sup>8, 9</sup></li>
                  <li><strong>Perceptual richness:</strong> Provides a multidimensional, vibrant overlay to everyday life.</li>
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
            <p>1. Cytowic, R. E., & Eagleman, D. M. (2009). <i>Wednesday is indigo blue: Discovering the brain of synesthesia</i>. MIT Press.</p>
            <p>2. Baron-Cohen, S., & Harrison, J. E. (1997). <i>Synaesthesia: Classic and contemporary readings</i>. Blackwell Publishers.</p>
            <p>3. Simner, J., & Hubbard, E. M. (2013). <i>The Oxford handbook of synesthesia</i>. Oxford University Press.</p>
            <p>4. Baron-Cohen, S., et al. (1996). Synaesthesia: Prevalence and familiality. <i>Perception</i>.</p>
            <p>5. Simner, J., et al. (2006). Synaesthesia: The prevalence of atypical cross-modal experiences. <i>Perception</i>.</p>
            <p>6. Cytowic, R. E. (1989). <i>Synesthesia: A union of the senses</i>. Springer-Verlag.</p>
            <p>7. Baron-Cohen, S., et al. (1987). Hearing words and seeing colours: An experimental investigation of a case of synaesthesia. <i>Perception</i>.</p>
            <p>8. Ward, J., et al. (2008). Synaesthesia, creativity and art: What is the link? <i>British Journal of Psychology</i>.</p>
            <p>9. Rothen, N., & Meier, B. (2010). Higher prevalence of synaesthesia in art students. <i>Perception</i>.</p>
          </div>
        </div>
      </div>
    </article>
  );
}