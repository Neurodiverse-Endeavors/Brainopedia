import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SynesthesiaLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function SynesthesiaLiving({ setCurrentArticle, initialTab }: SynesthesiaLivingProps) {
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
          Living with Synesthesia
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
          onClick={() => handleTabChange('careers')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'careers'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Careers & Creativity
        </button>
        <button
          onClick={() => handleTabChange('community')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'community'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Community & Identity
        </button>
      </div>

      {/* ==========================================
          TAB 1: DAILY LIFE & EMOTIONS
      ========================================== */}
      {activeTab === 'daily-life' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Living successfully with synesthesia involves deeply understanding one's specific sensory crossings, celebrating the rich perception it provides, and occasionally managing the environmental hurdles that come with it.<sup>1</sup>
          </p>

          {/* Sensory Experience Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Sensory Experience</h2>
            
            <ImageWithFallback 
              src="/images/synesthesia/synesthesia-living-daily.webp" 
              alt="Person enjoying a vibrant, multi-sensory environment"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              For a synesthete, the world is naturally infused with an extra layer of vibrancy. Living well means recognizing this unique neurological trait as a profound gift rather than a disorder.<sup>2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">The Synesthetic Overlay</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Everyday Magic:</strong> Ordinary tasks, like reading a book or listening to the radio, are experienced as multidimensional, colorful events.<sup>3</sup></li>
                  <li><strong>Intuitive Memory:</strong> Using inherent sensory associations to intuitively remember names, phone numbers, and complex dates without conscious effort.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Environmental Management</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Sensory Overload:</strong> Highly stimulating environments (like crowded cities or loud concerts) can trigger overwhelming cascades of crossing senses.</li>
                  <li><strong>Decompression:</strong> Learning to actively manage sensory diets by taking quiet breaks in low-stimuli environments to prevent fatigue.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: CAREERS & CREATIVITY
      ========================================== */}
      {activeTab === 'careers' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Synesthetes frequently excel in academic, creative, and professional fields that require out-of-the-box problem solving. Their unique neural pathways provide a natural advantage in synthesizing abstract concepts.
          </p>

          {/* Professional Advantages Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Careers & Creativity</h2>
            
            <ImageWithFallback 
              src="/images/synesthesia/synesthesia-living-careers.webp" 
              alt="Professional creatively visualizing project data"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Individuals with synesthesia lead incredibly successful lives across all areas of society, with a disproportionately high representation in the arts, music, and writing communities.<sup>4</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Notable Synesthetes</h3>
                <p className="text-sm text-slate-700 mb-2 font-bold italic">History is filled with famous examples:</p>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Musicians:</strong> Duke Ellington, Billy Joel, Pharrell Williams, and Franz Liszt all utilized their cross-sensory abilities to compose music.</li>
                  <li><strong>Visual Artists:</strong> Abstract pioneer Wassily Kandinsky famously painted the colors he heard.</li>
                  <li><strong>Writers:</strong> Novelist Vladimir Nabokov frequently wrote about his grapheme-color synesthesia.<sup>5</sup></li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Professional Advantages</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Creative Fields:</strong> Thriving in environments that require connecting disparate ideas or designing highly aesthetic visual maps.</li>
                  <li><strong>Mathematics & Logic:</strong> Utilizing number-form synesthesia to physically "see" complex mathematical equations and coding sequences in space.<sup>6</sup></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: COMMUNITY & IDENTITY
      ========================================== */}
      {activeTab === 'community' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Because synesthesia is an entirely internal experience, discovering that it is a recognized, shared neurological trait can be a profound moment of personal validation.
          </p>

          {/* Community Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Community & Identity</h2>
            
            <ImageWithFallback 
              src="/images/synesthesia/synesthesia-living-community.webp" 
              alt="Diverse group of people connecting and sharing experiences"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Connecting with the broader synesthesia community provides shared understanding and a space to openly discuss the nuances of a multi-sensory life.<sup>7</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">The "Aha" Moment</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Validation:</strong> Discovering that their sensory crossings have a scientific name is incredibly validating for many adults.</li>
                  <li><strong>Explaining the Unseen:</strong> Finding the right vocabulary helps synesthetes explain their unique internal world to family, friends, and employers.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Connection & Research</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Online Forums:</strong> Joining global communities to compare color alphabets and share strategies for managing sensory environments.</li>
                  <li><strong>Scientific Contribution:</strong> Participating in ongoing psychological and genetic research to help scientists better understand human consciousness.</li>
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
            <p>1. Ward, J., & Simner, J. (2020). Synesthesia: The current state of the field. In <i>Multisensory perception: From laboratory to clinic</i>. Academic Press.</p>
            <p>2. Ramachandran, V. S., & Hubbard, E. M. (2003). The phenomenology of synaesthesia. <i>Journal of Consciousness Studies</i>.</p>
            <p>3. Smilek, D., et al. (2001). Synaesthetic photisms influence visual perception. <i>Journal of Cognitive Neuroscience</i>.</p>
            <p>4. Mulvenna, C. M. (2007). Synaesthesia, the arts and creativity: A neurological connection. In <i>Cartographies of the mind: Philosophy and psychology in intersection</i>. Springer.</p>
            <p>5. Galeyev, B., & Vanechkina, I. (2001). Was Scriabin a synesthete? <i>Leonardo</i>.</p>
            <p>6. Cytowic, R. E., & Wood, F. B. (1982). Synesthesia: II. Psychophysical relations in the synesthesia of geometrically shaped taste and colored hearing. <i>Brain and Cognition</i>.</p>
            <p>7. Cohen Kadosh, R., et al. (2009). Synaesthesia: Learned or lost? <i>Developmental Science</i>.</p>
          </div>
        </div>
      </div>
    </article>
  );
}