import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Activity, Volume2, Layers, Brain, AlertCircle, BookOpen } from 'lucide-react';

interface TouretteSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TouretteSymptoms({ setCurrentArticle, initialTab }: TouretteSymptomsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'tics';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Tourette's: Symptoms & Characteristics
        </h1>

        <button
          onClick={() => setCurrentArticle?.('tourette')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
        >
          <span className="text-xl">←</span>
          All About Tourette's
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('tics')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'tics'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Motor & Vocal Tics
        </button>
        <button
          onClick={() => handleTabChange('patterns')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'patterns'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Patterns & Modifiers
        </button>
        <button
          onClick={() => handleTabChange('co-occurring')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'co-occurring'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Co-occurring Conditions
        </button>
      </div>

      {/* ==========================================
          TAB 1: MOTOR & VOCAL TICS (CYAN)
      ========================================== */}
      {activeTab === 'tics' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-3xl mx-auto mb-8">
            Tourette's is primarily characterized by the presence of both motor and vocal tics. These involuntary expressions are generally categorized as either simple or complex based on how many muscle groups are involved and how the movements or sounds unfold.
          </p>

          {/* Types of Tics Card (Tab 1 Default: Cyan) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Classifying Tics</h2>
            
            <ImageWithFallback
              src="/images/tourette/tourette-symptoms-motor.webp"
              alt="Visual representation of motor and vocal pathways"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Activity className="w-8 h-8 text-[#2abcd4] mb-3" />
                <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Simple Motor Tics</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Involve a single muscle group and occur rapidly. Common expressions include eye blinking, head jerking, shoulder shrugging, facial grimacing, nose twitching, or jaw movements.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Layers className="w-8 h-8 text-[#2abcd4] mb-3" />
                <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Complex Motor Tics</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Involve coordinated patterns of movement across multiple muscle groups. Examples include touching specific objects or people, jumping, hopping, twirling, spinning, making gestures, bending, or gyrating.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Volume2 className="w-8 h-8 text-[#2abcd4] mb-3" />
                <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Simple Vocal (Phonic) Tics</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Consist of brief, sudden sounds produced by moving air through the nose or mouth, such as throat clearing, coughing, grunting, sniffing, barking, yelping, or clicking.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Layers className="w-8 h-8 text-[#2abcd4] mb-3" />
                <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Complex Vocal (Phonic) Tics</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Include repeating others' words or phrases (echolalia), repeating one's own words (palilalia), making animal sounds, or uttering socially inappropriate words (coprolalia), which affects only 10–15% of individuals.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1, 2</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: PATTERNS & MODIFIERS (NAVY)
      ========================================== */}
      {activeTab === 'patterns' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-3xl mx-auto mb-8">
            Tics are rarely static; they are highly dynamic and deeply influenced by internal states and environmental contexts. Understanding these patterns helps individuals and allies recognize how Tourette's naturally shifts from day to day.
          </p>

          {/* Fluctuations Card (Tab 2 Default: Navy with 3D Left-Stripe Inner Cards, No Icons/Bullets) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Ebb and Flow of Tics</h2>
            
            <ImageWithFallback
              src="/images/tourette/tourette-symptoms-patterns.webp"
              alt="Visual representation of the waxing and waning nature of tics"
              className="block mx-auto w-full max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Frequency & Severity
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Tics naturally wax and wane over weeks and months, moving through periods of heightened frequency followed by stretches of relative calm.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Changing Types
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    A person's specific tics can evolve in type, complexity, and physical location over time—for example, a blinking tic may gradually fade and be replaced by a shoulder shrug.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Environmental Aggravators
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Tics frequently intensify during periods of high stress, heightened excitement, sensory overload, or physical fatigue.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Focused Alleviators
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Tics often decrease significantly during deeply engaging, goal-directed activities—such as playing a musical instrument, reading, creating art, or participating in sports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: CO-OCCURRING CONDITIONS (YELLOW)
      ========================================== */}
      {activeTab === 'co-occurring' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-3xl mx-auto mb-8">
            Tourette's rarely exists in isolation. The majority of individuals with Tourette's also experience one or more co-occurring neurodevelopmental or psychological traits that shape their unique profile of strengths and support needs.
          </p>

          {/* Overlap Card (Tab 3 Default: Yellow with Double-Ring Navy Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Neurodivergent Spectrum</h2>
            
            <ImageWithFallback
              src="/images/tourette/tourette-symptoms-cooccurring.webp"
              alt="Visual representation of the overlap between Tourette's, ADHD, and OCD"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Clinicians frequently note that for many individuals, supporting these co-occurring traits makes an even bigger positive impact on daily well-being than focusing on physical tics alone.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1, 2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold mb-2 text-lg">ADHD</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Highly prevalent alongside Tourette's, occurring in approximately 50–60% of individuals and bringing distinct patterns of attention, energy, and executive functioning.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold mb-2 text-lg">OCD</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Obsessive-Compulsive Disorder traits or full diagnoses are present in roughly 30–40% of the Tourette's population, often involving "just right" sensory sensations.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Anxiety Disorders</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  General anxiety and social anxiety are frequently reported, often heightened by the mental energy spent masking or suppressing tics in public spaces.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Learning Differences</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Specific learning differences, such as dysgraphia or dyslexia, are common co-travelers within the neurodivergent spectrum and benefit from tailored accommodations.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="mt-8 mb-12 flex justify-end w-full">
        <button
          onClick={() => setCurrentArticle?.('tourette')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
        >
          <span className="text-xl">←</span>
          All About Tourette's
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p className="font-bold text-[#0c264d]">Motor & Vocal Tics</p>
            <p>1. Robertson, M. M. (2000). Tourette syndrome, associated conditions and the complexities of treatment. <i>Brain</i>.</p>
            <p>2. Van Borsel, J., & Tetnowski, J. A. (2007). Fluency disorders in genetic syndromes. <i>Journal of Fluency Disorders</i>.</p>
            <p className="font-bold text-[#0c264d] pt-2">Co-occurring Conditions</p>
            <p>1. Hirschtritt, M. E., et al. (2015). Lifetime prevalence, age of risk, and genetic relationships of comorbid psychiatric disorders in Tourette syndrome. <i>JAMA Psychiatry</i>.</p>
            <p>2. Robertson, M. M., et al. (2009). The international prevalence, epidemiology, and clinical phenomenology of Tourette syndrome: A cross-cultural perspective. <i>Journal of Psychosomatic Research</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
            <li>Conelea, C. A., & Woods, D. W. (2008). The influence of contextual factors on tic expression in Tourette's syndrome: A review. <i>Journal of Psychosomatic Research</i>.</li>
            <li>Freeman, R. D., et al. (2000). An international perspective on Tourette syndrome: Selected findings from 3,500 individuals in 22 countries. <i>Developmental Medicine & Child Neurology</i>.</li>
            <li>Jankovic, J., & Kurlan, R. (2011). Tourette syndrome: Evolving concepts. <i>Movement Disorders</i>.</li>
            <li>Leckman, J. F. (2002). Tourette's syndrome. <i>The Lancet</i>.</li>
            <li>Leckman, J. F., et al. (2014). Clinical features of Tourette syndrome and tic disorders. <i>Journal of Obsessive-Compulsive and Related Disorders</i>.</li>
            <li>Martino, D., & Leckman, J. F. (2013). <i>Tourette Syndrome</i>. Oxford University Press.</li>
            <li>Woods, D. W., et al. (2005). <i>Understanding Tourette Syndrome: A Guide for Parents and Professionals</i>. Jessica Kingsley Publishers.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}