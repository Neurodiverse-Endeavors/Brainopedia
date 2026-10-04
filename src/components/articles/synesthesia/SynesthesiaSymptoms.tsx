import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface SynesthesiaSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function SynesthesiaSymptoms({ setCurrentArticle, initialTab }: SynesthesiaSymptomsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'sensory';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Synesthesia: Symptoms & Characteristics
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
          onClick={() => handleTabChange('sensory')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'sensory'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Sensory Types
        </button>
        <button
          onClick={() => handleTabChange('spatial')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'spatial'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Spatial & Cognitive
        </button>
        <button
          onClick={() => handleTabChange('tactile')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'tactile'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Tactile & Complex
        </button>
      </div>

      {/* ==========================================
          TAB 1: SENSORY TYPES
      ========================================== */}
      {activeTab === 'sensory' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            There are many documented forms of synesthesia involving various combinations of senses and cognitive processes.<sup>1</sup> The most frequently observed presentations involve vivid visual or gustatory reactions to sounds and written language.
          </p>

          {/* Grapheme-Color Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Grapheme-Color</h2>
            
            <ImageWithFallback 
              src="/images/synesthesia/synesthesia-symptoms-visual.webp" 
              alt="Visual depiction of numbers and letters associated with specific colors"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Grapheme-color synesthesia is the most widely researched and most common form of the condition. It occurs when letters and numbers are perceived as inherently colored.
            </p>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100 max-w-4xl mx-auto">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Key Characteristics</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Unique Palettes:</strong> Each synesthete has their own highly unique set of color associations.<sup>2</sup></li>
                <li><strong>Consistency:</strong> The letter "A" might be fire-engine red, while the number "4" is deep blue, and these associations rarely change over a lifetime.</li>
                <li><strong>Mnemonic Aid:</strong> Frequently acts as a powerful, automatic tool for memorizing spelling and long numbers.</li>
              </ul>
            </div>
          </div>

          {/* Sound & Taste Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Chromesthesia & Lexical-Gustatory</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Chromesthesia (Sound-to-Color)</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  Involves perceiving colors when hearing sounds, music, or voices.
                </p>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>Different musical pitches, notes, or timbres evoke highly specific, often moving colors.<sup>3</sup></li>
                  <li>Everyday sounds (like a dog barking or a car door slamming) can trigger visual flashes.</li>
                  <li>Highly prevalent among musicians and composers.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Lexical-Gustatory</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  A rarer form that occurs when words or phonemes evoke specific taste sensations.<sup>4</sup>
                </p>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>Hearing or reading certain words triggers intense, physical tastes on the tongue.</li>
                  <li>Can also involve feeling specific textures or temperatures in the mouth.</li>
                  <li>Associations are highly idiosyncratic (e.g., the word "society" might taste like baked apples).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SPATIAL & COGNITIVE
      ========================================== */}
      {activeTab === 'spatial' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Many forms of synesthesia revolve around mapping abstract concepts—like time, sequences, or raw numbers—onto a physical, spatial plane, or assigning them distinct human characteristics.
          </p>

          {/* Spatial Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Spatial Sequence & Number-Form</h2>
            
            <ImageWithFallback 
              src="/images/synesthesia/synesthesia-symptoms-spatial.webp" 
              alt="Visual representation of numbers arranged in physical space"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Spatial synesthesia involves perceiving abstract sequences as occupying specific, tangible locations in the space around the individual's body or in their mind's eye.<sup>5</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Spatial Sequences</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Time Mapping:</strong> Months of the year or days of the week are visualized in a specific shape, such as a circle, spiral, or wavy line.</li>
                  <li><strong>Physical Navigation:</strong> The individual feels they can physically "walk through" the calendar year in their mind.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Number-Form</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Number Lines:</strong> Numbers are visualized in specific, consistent spatial arrangements.<sup>5</sup></li>
                  <li><strong>Calculation Aid:</strong> Often assists with mathematical calculations, as the person can mentally "see" where the answer physically sits on their number map.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Personification Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Ordinal Linguistic Personification</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              A fascinating cognitive variant where ordered sequences are automatically infused with rich, distinct human personalities.
            </p>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100 max-w-4xl mx-auto">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Personality Mapping</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Inherent Traits:</strong> Letters, numbers, or days have distinct, unchangeable personalities and genders.<sup>6</sup></li>
                <li><strong>Interpersonal Dynamics:</strong> The number "8" might be perceived as a bossy, arrogant older sister to the timid number "7".</li>
                <li><strong>Emotional Response:</strong> The synesthete may feel genuine affection or dislike for specific numbers based purely on their perceived personalities.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: TACTILE & COMPLEX
      ========================================== */}
      {activeTab === 'tactile' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Some of the most profound forms of synesthesia cross over into physical, tactile sensations, blurring the boundaries between sound, sight, and touch. 
          </p>

          {/* Tactile Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Tactile Presentations</h2>
            
            <ImageWithFallback 
              src="/images/synesthesia/synesthesia-symptoms-tactile.webp" 
              alt="Conceptual representation of sound and touch mapping"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Mirror-Touch</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Physical Reflection:</strong> Observing a touch on another person triggers identical tactile sensations on one's own body.<sup>7</sup></li>
                  <li><strong>Emotional Depth:</strong> This variant is strongly linked with exceptionally high levels of interpersonal empathy.<sup>7</sup></li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Auditory-Tactile</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Sound as Feeling:</strong> Specific sounds produce distinct, physical tactile sensations on or inside the body.<sup>7</sup></li>
                  <li><strong>Consistency:</strong> The strum of a guitar might consistently produce a warm tingling sensation on the back of the neck.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core Traits Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Synesthetic Experience</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              While the specific sensory pairings vary wildly, the underlying mechanics of how these experiences manifest are universally shared among synesthetes.
            </p>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 max-w-4xl mx-auto">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Universal Characteristics</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Multiple Forms:</strong> It is incredibly common for a single person to have multiple intersecting forms of synesthesia (e.g., experiencing both chromesthesia and grapheme-color simultaneously).<sup>8</sup></li>
                <li><strong>Lifelong Traits:</strong> The experiences are automatic, consistent, and completely involuntary, occurring throughout the person's life.<sup>9</sup></li>
                <li><strong>Genetic Links:</strong> Genetic markers for these auditory-visual crossings have been mapped to specific chromosomes.<sup>9</sup></li>
              </ul>
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
            <p>1. Day, S. (2005). Some demographic and socio-cultural aspects of synesthesia. In <i>Synesthesia: Perspectives from cognitive neuroscience</i>. Oxford University Press.</p>
            <p>2. Simner, J., & Ward, J. (2006). The taste of words on the tip of the tongue. <i>Nature</i>.</p>
            <p>3. Ward, J., et al. (2006). Sound-colour synaesthesia: To what extent does it use cross-modal mechanisms common to us all? <i>Cortex</i>.</p>
            <p>4. Ward, J., & Simner, J. (2003). Lexical-gustatory synaesthesia: Linguistic and conceptual factors. <i>Cognition</i>.</p>
            <p>5. Sagiv, N., et al. (2006). What is the relationship between synaesthesia and visuo-spatial number forms? <i>Cognition</i>.</p>
            <p>6. Simner, J., & Holenstein, E. (2007). Ordinal linguistic personification as a variant of synesthesia. <i>Journal of Cognitive Neuroscience</i>.</p>
            <p>7. Banissy, M. J., & Ward, J. (2007). Mirror-touch synesthesia is linked with empathy. <i>Nature Neuroscience</i>.</p>
            <p>8. Novich, S., et al. (2011). Is synaesthesia one condition or many? A large-scale analysis reveals subgroups. <i>Journal of Neuropsychology</i>.</p>
            <p>9. Asher, J. E., et al. (2009). A whole-genome scan and fine-mapping linkage study of auditory-visual synesthesia reveals evidence of linkage to chromosomes 2q24, 5q33, 6p12, and 12p12. <i>American Journal of Human Genetics</i>.</p>
          </div>
        </div>
      </div>
    </article>
  );
}