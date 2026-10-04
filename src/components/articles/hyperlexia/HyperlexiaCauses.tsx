import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Dna, Eye, Ear, Network, Layers, Activity, Users, BookOpen, Search, XCircle, Microscope, Target } from 'lucide-react';

interface HyperlexiaCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function HyperlexiaCauses({ setCurrentArticle, initialTab }: HyperlexiaCausesProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'biology';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Hyperlexia: Causes & Origins
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('hyperlexia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About Hyperlexia
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('hyperlexia')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About Hyperlexia
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('biology')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'biology'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Biology & Cognition
        </button>
        <button
          onClick={() => handleTabChange('theories')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'theories'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Theories & Autism
        </button>
        <button
          onClick={() => handleTabChange('environment')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'environment'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Environment & Research
        </button>
      </div>

      {/* ==========================================
          TAB 1: BIOLOGY & COGNITION
      ========================================== */}
      {activeTab === 'biology' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Neurology Card (Cyan Container / Centered Lucide Icons) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Neurological Basis</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-causes-neurology.webp"
              alt="Brain scan highlighting visual-orthographic pathways"
              className="w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              The exact causes of hyperlexia remain heavily researched, but clinical evidence strongly suggests it is rooted in profound neurobiological differences affecting how the brain develops language networks and processes visual information.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Brain className="text-[#0A9DC4] w-8 h-8 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Brain Differences</h3>
                <div className="text-xs text-slate-700 space-y-2">
                  <p>Unusual, highly intense activation of reading-related neural pathways at an extraordinarily young age.</p>
                  <p>Significant differences in the brain networks responsible for semantic language comprehension.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Network className="text-[#0A9DC4] w-8 h-8 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Hemispheric Development</h3>
                <div className="text-xs text-slate-700 space-y-2">
                  <p>Enhanced left hemisphere visual-orthographic processing (the area that recognizes written words as distinct shapes).</p>
                  <p>Right hemisphere differences that impact broad language comprehension and social nuance.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cognition & Genetics Card (Yellow Container / Centered Icon Badges) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Cognition & Genetic Factors</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-causes-cognition-hero.webp"
              alt="DNA strand interwoven with abstract visual patterns"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Visual Processing</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Characterized by superior visual memory and pattern recognition. The brain possesses an exceptional ability to map visual word forms orthographically without needing phonics instruction.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <Ear className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Auditory Differences</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Children with hyperlexia often exhibit significant auditory processing challenges, relying heavily on their visual modality to make sense of the world while struggling with spoken language.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <Dna className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Family Patterns</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Hyperlexia frequently runs in families. A known family history of autism spectrum disorder, giftedness, or other learning differences significantly increases the likelihood of a hyperlexic profile.</p>
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
                <li>Nation, K. (1999). Reading skills in hyperlexia: A developmental perspective. <i>Psychological Bulletin</i>.</li>
                <li>Grigorenko, E. L., Klin, A., & Volkmar, F. (2003). Annotation: Hyperlexia: Disability or superability? <i>Journal of Child Psychology and Psychiatry</i>.</li>
                <li>Treffert, D. A. (2011). Hyperlexia III: Separating 'autistic-like' behaviors from autistic disorder. Wisconsin Medical Society.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: THEORIES & AUTISM
      ========================================== */}
      {activeTab === 'theories' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Theories Card (Slate Container / 3D Borders + Inline Dots) */}
          <div className="bg-slate-100 border-2 border-slate-600 rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Theoretical Models</h2>
            
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              poster="/images/hyperlexia/hyperlexia-causes-autism-hero.webp"
              className="w-80 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-400"
              aria-label="Conceptual visual of overlapping detail-focused neural networks"
            >
              <source src="/images/hyperlexia/hyperlexia-causes-autism-hero.mp4" type="video/mp4" />
              <img 
                src="/images/hyperlexia/hyperlexia-causes-autism-hero.webp" 
                alt="Conceptual visual of overlapping detail-focused neural networks" 
              />
            </video>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Researchers have proposed several distinct theoretical models to explain why a child's brain might rapidly prioritize decoding written words while simultaneously ignoring or struggling with spoken language comprehension.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex items-start gap-3">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#0A9DC4] mt-1.5 shrink-0 ml-1.5 shadow-sm"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Compensatory Mechanism Theory</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">This theory suggests that children with profound spoken language or auditory difficulties subconsciously turn to their visual strengths. Reading literally becomes a compensatory workaround—a way to bypass auditory processing and access language visually.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex items-start gap-3">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d4a017]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#d4a017] mt-1.5 shrink-0 ml-1.5 shadow-sm"></div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Modular Reading System</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">This model argues that the brain's decoding (reading) system can develop entirely independently of the semantic (meaning) system. This explains the massive "split" between flawless mechanical reading and poor reading comprehension.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Autism Card (Cyan Container / Centered Lucide Icons) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Relationship to Autism</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-causes-models.webp"
              alt="Visual representing the bypassing of auditory roadblocks via visual pathways"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because hyperlexia so frequently co-occurs with autism spectrum disorder (Treffert's Type 2), neuroscientists believe they likely share highly similar neurodevelopmental pathways and genetic vulnerabilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Network className="text-[#0A9DC4] w-8 h-8 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Shared Mechanisms</h3>
                <div className="text-xs text-slate-700 space-y-2">
                  <p>Both profiles feature a highly detail-focused, pattern-based processing style.</p>
                  <p>Both involve atypical neurodevelopment during critical early language-sensitive periods.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Users className="text-[#0A9DC4] w-8 h-8 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Autism-Specific Features</h3>
                <div className="text-xs text-slate-700 space-y-2">
                  <p>In an autistic profile, reading often functions strictly as a restricted special interest.</p>
                  <p>The reading behavior itself may become a repetitive, self-soothing ritual rather than an attempt to communicate.</p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Nation, K., Clarke, P., Wright, B., & Williams, C. (2006). Patterns of reading ability in children with autism spectrum disorder. <i>Journal of Autism and Developmental Disorders</i>.</li>
                <li>Treffert, D. A. (2011). Hyperlexia III: Separating 'autistic-like' behaviors from autistic disorder. Wisconsin Medical Society.</li>
                <li>Nation, K. (1999). Reading skills in hyperlexia: A developmental perspective. <i>Psychological Bulletin</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: ENVIRONMENT & RESEARCH
      ========================================== */}
      {activeTab === 'environment' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Environment Card (Yellow Container / Centered Icon Badges) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Environmental Factors</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-causes-environment.webp"
              alt="Young child self-selecting books from a home library"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              It is critical to emphasize that hyperlexia is a neurobiological difference; it is not created or caused by external environmental pressure. While a print-rich environment provides the tools, the brain's drive to decode those tools is entirely innate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#2abcd4] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Early Exposure</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Early exposure to books and print may interact with a child's genetic predisposition, but the environment alone does not cause the condition. Hyperlexic children intensely self-select reading activities over all other play.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#2abcd4] text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#d4a017] border-opacity-30 mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Savant Skill Theory</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Some researchers categorize hyperlexia as a "savant-like" splinter skill—an exceptional, narrow ability in one isolated domain that develops rapidly despite broader developmental or social delays.</p>
              </div>
            </div>
          </div>

          {/* Research & Myths Card (Slate Container / 3D Borders + Inline Dots) */}
          <div className="bg-slate-100 border-2 border-slate-600 rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Myths & Future Research</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-causes-research-hero.webp"
              alt="Magnifying glass shattering common misconceptions about early reading"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-400"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div className="flex flex-col gap-4">
                <h3 className="text-[#0c264d] font-bold text-lg mb-2 text-center">What It Is NOT Caused By</h3>
                
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex items-start gap-3">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1 shrink-0 ml-1.5 shadow-sm"></div>
                  <p className="text-xs text-slate-700 font-bold leading-relaxed">NOT caused by "pushy parents" teaching their child to read too early. These children are entirely self-taught.</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex items-start gap-3">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1 shrink-0 ml-1.5 shadow-sm"></div>
                  <p className="text-xs text-slate-700 font-bold leading-relaxed">NOT caused by having "too many books" or flashcards in the home environment.</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex items-start gap-3">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1 shrink-0 ml-1.5 shadow-sm"></div>
                  <p className="text-xs text-slate-700 font-bold leading-relaxed">NOT caused by excessive screen time, educational videos, or tablet applications.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-[#0c264d] font-bold text-lg mb-2 text-center">Current Research Needs</h3>
                <p className="text-xs text-slate-700 leading-relaxed text-center mb-1">
                  Compared to conditions like Dyslexia, research on Hyperlexia is astonishingly limited and often only studied as a small sub-category of Autism research.
                </p>
                
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex items-start gap-3 h-full">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0A9DC4] mt-1.5 shrink-0 ml-1.5 shadow-sm"></div>
                  <div>
                    <h4 className="text-[#0c264d] font-bold text-sm mb-3">Future Goals:</h4>
                    <div className="text-xs text-slate-700 space-y-3">
                      <p>Expanded functional neuroimaging studies specific to hyperlexic brains.</p>
                      <p>Longitudinal tracking to better understand the differing trajectories of Treffert's Three Types.</p>
                      <p>Deeper exploration into the specific genetic overlap with the autism spectrum.</p>
                    </div>
                  </div>
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
                <li>Kupperman, P., Bligh, S., & Barouski, K. (2002). Hyperlexia. In A. M. Wetherby & B. M. Prizant (Eds.), <i>Autism spectrum disorders: A developmental transactional perspective</i>.</li>
                <li>Grigorenko, E. L., Klin, A., & Volkmar, F. (2003). Annotation: Hyperlexia: Disability or superability? <i>Journal of Child Psychology and Psychiatry</i>.</li>
                <li>Treffert, D. A. (2011). Hyperlexia III: Separating 'autistic-like' behaviors from autistic disorder. Wisconsin Medical Society.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('hyperlexia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About Hyperlexia
        </button>
      </div>

    </article>
  );
}