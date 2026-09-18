import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Dna, Eye, Ear, Network, Layers, Activity, Users, BookOpen, Search, XCircle, Microscope, Target } from 'lucide-react';

interface HyperlexiaCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function HyperlexiaCauses({ setCurrentArticle, initialTab }: HyperlexiaCausesProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'biology');

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
          onClick={() => setActiveTab('biology')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'biology'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Biology & Cognition
        </button>
        <button
          onClick={() => setActiveTab('theories')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'theories'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Theories & Autism
        </button>
        <button
          onClick={() => setActiveTab('environment')}
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

          {/* Neurology Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Neurological Basis</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-causes-neurology.webp"
              alt="Brain scan highlighting visual-orthographic pathways"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The exact causes of hyperlexia remain heavily researched, but clinical evidence strongly suggests it is rooted in profound neurobiological differences affecting how the brain develops language networks and processes visual information.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Brain className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Brain Differences</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Unusual, highly intense activation of reading-related neural pathways at an extraordinarily young age.</li>
                    <li>Significant differences in the brain networks responsible for semantic language comprehension.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Network className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Hemispheric Development</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Enhanced left hemisphere visual-orthographic processing (the area that recognizes written words as distinct shapes).</li>
                    <li>Right hemisphere differences that impact broad language comprehension and social nuance.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Cognition & Genetics Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Cognition & Genetic Factors</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-causes-cognition-hero.webp"
              alt="DNA strand interwoven with abstract visual patterns"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Eye className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Visual Processing</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Characterized by superior visual memory and pattern recognition. The brain possesses an exceptional ability to map visual word forms orthographically without needing phonics instruction.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Ear className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Auditory Differences</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Children with hyperlexia often exhibit significant auditory processing challenges, relying heavily on their visual modality to make sense of the world while struggling with spoken language.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Dna className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Family Patterns</h3>
                </div>
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

          {/* Theories Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Theoretical Models</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-causes-models.webp"
              alt="Visual representing the bypassing of auditory roadblocks via visual pathways"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Researchers have proposed several distinct theoretical models to explain why a child's brain might rapidly prioritize decoding written words while simultaneously ignoring or struggling with spoken language comprehension.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Activity className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Compensatory Mechanism Theory</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">This theory suggests that children with profound spoken language or auditory difficulties subconsciously turn to their visual strengths. Reading literally becomes a compensatory workaround—a way to bypass auditory processing and access language visually.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Layers className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Modular Reading System</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">This model argues that the brain's decoding (reading) system can develop entirely independently of the semantic (meaning) system. This explains the massive "split" between flawless mechanical reading and poor reading comprehension.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Autism Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Relationship to Autism</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-causes-autism-hero.webp"
              alt="Conceptual visual of overlapping detail-focused neural networks"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because hyperlexia so frequently co-occurs with autism spectrum disorder (Treffert's Type 2), neuroscientists believe they likely share highly similar neurodevelopmental pathways and genetic vulnerabilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-3 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Network className="text-[#0A9DC4] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Shared Mechanisms</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Both profiles feature a highly detail-focused, pattern-based processing style.</li>
                  <li>Both involve atypical neurodevelopment during critical early language-sensitive periods.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-3 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Users className="text-[#0A9DC4] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Autism-Specific Features</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>In an autistic profile, reading often functions strictly as a restricted special interest.</li>
                  <li>The reading behavior itself may become a repetitive, self-soothing ritual rather than an attempt to communicate.</li>
                </ul>
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

          {/* Environment Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Environmental Factors</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-causes-environment.webp"
              alt="Young child self-selecting books from a home library"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              It is critical to emphasize that hyperlexia is a neurobiological difference; it is not created or caused by external environmental pressure. While a print-rich environment provides the tools, the brain's drive to decode those tools is entirely innate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <BookOpen className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Early Exposure</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Early exposure to books and print may interact with a child's genetic predisposition, but the environment alone does not cause the condition. Hyperlexic children intensely self-select reading activities over all other play.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Target className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Savant Skill Theory</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Some researchers categorize hyperlexia as a "savant-like" splinter skill—an exceptional, narrow ability in one isolated domain that develops rapidly despite broader developmental or social delays.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Research & Myths Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Myths & Future Research</h2>
            
            <ImageWithFallback 
              src="/images/hyperlexia/hyperlexia-causes-research-hero.webp"
              alt="Magnifying glass shattering common misconceptions about early reading"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <XCircle className="text-red-500 w-5 h-5" /> What It Is NOT Caused By
                </h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-red-200 shadow-sm">
                    <p className="text-xs text-slate-700 font-bold">NOT caused by "pushy parents" teaching their child to read too early. These children are entirely self-taught.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-red-200 shadow-sm">
                    <p className="text-xs text-slate-700 font-bold">NOT caused by having "too many books" or flashcards in the home environment.</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-red-200 shadow-sm">
                    <p className="text-xs text-slate-700 font-bold">NOT caused by excessive screen time, educational videos, or tablet applications.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Microscope className="text-[#2abcd4] w-5 h-5" /> Current Research Needs
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Compared to conditions like Dyslexia, research on Hyperlexia is astonishingly limited and often only studied as a small sub-category of Autism research.
                </p>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="text-[#0c264d] font-bold text-sm mb-2">Future Goals:</h4>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Expanded functional neuroimaging studies specific to hyperlexic brains.</li>
                    <li>Longitudinal tracking to better understand the differing trajectories of Treffert's Three Types.</li>
                    <li>Deeper exploration into the specific genetic overlap with the autism spectrum.</li>
                  </ul>
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