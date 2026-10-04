import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Activity, Volume2, Layers, TrendingUp, Clock, Brain, AlertCircle, BookOpen } from 'lucide-react';

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
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Tourette's: Symptoms & Characteristics
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('tourette')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
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
          TAB 1: MOTOR & VOCAL TICS
      ========================================== */}
      {activeTab === 'tics' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Tourette's is primarily characterized by the presence of both motor and vocal tics. These involuntary expressions are generally categorized as either "simple" or "complex" based on how many muscle groups are involved.
          </p>

          {/* Types of Tics Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Classifying Tics</h2>
            
            <ImageWithFallback 
              src="/images/tourette/tourette-symptoms-motor.webp" 
              alt="Visual representation of motor and vocal pathways"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">Motor Tics</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-[#2abcd4] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Simple:</strong> Involve a single muscle group. Examples include eye blinking, head jerking, shoulder shrugging, facial grimacing, nose twitching, or jaw movements.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Layers className="w-5 h-5 text-[#2abcd4] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Complex:</strong> Involve coordinated patterns of movement. Examples include touching specific objects or people, jumping, hopping, twirling, spinning, making gestures, bending, or gyrating.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">Vocal (Phonic) Tics</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Volume2 className="w-5 h-5 text-[#2abcd4] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Simple:</strong> Making brief sounds such as throat clearing, coughing, grunting, sniffing, barking, yelping, or clicking.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Layers className="w-5 h-5 text-[#2abcd4] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Complex:</strong> Repeating words or phrases (echolalia), repeating one's own words (palilalia), making animal sounds, or using socially inappropriate words (coprolalia), which affects only 10-15% of individuals.<sup>1, 2</sup></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: PATTERNS & MODIFIERS
      ========================================== */}
      {activeTab === 'patterns' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Tics are rarely static; they are highly dynamic and deeply influenced by internal states and environmental contexts. Understanding these patterns is key to recognizing how Tourette's fluctuates daily.
          </p>

          {/* Fluctuations Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Ebb and Flow of Tics</h2>
            
            <ImageWithFallback 
              src="/images/tourette/tourette-symptoms-patterns.webp" 
              alt="Chart showing the waxing and waning nature of tics"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">Waxing & Waning</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Frequency & Severity:</strong> Tics naturally wax and wane, meaning they will have periods of intense frequency followed by periods of relative calm.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Changing Types:</strong> A person's specific tics can change type and physical location over time (e.g., a blinking tic may fade, replaced by a shoulder shrug).<sup>7</sup></p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">Contextual Modifiers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Aggravators:</strong> Tics frequently worsen during periods of high stress, intense excitement, or physical fatigue.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Alleviators:</strong> Tics often significantly decrease during highly focused activities (like playing an instrument, reading, or playing sports).<sup>5</sup></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: CO-OCCURRING CONDITIONS
      ========================================== */}
      {activeTab === 'co-occurring' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Tourette's rarely exists in a vacuum. The majority of individuals diagnosed with the condition will also present with one or more co-occurring neurodevelopmental or psychological traits.
          </p>

          {/* Overlap Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Neurodivergent Spectrum</h2>
            
            <ImageWithFallback 
              src="/images/tourette/tourette-symptoms-cooccurring.webp" 
              alt="Venn diagram showing the overlap of Tourette's, ADHD, and OCD"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Clinicians often note that for many patients, the co-occurring conditions cause significantly more functional impairment and daily distress than the physical tics themselves.<sup>3, 4</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">Primary Overlaps</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>ADHD:</strong> Highly prevalent, occurring in approximately 50-60% of individuals with Tourette's.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>OCD:</strong> Obsessive-Compulsive Disorder traits or full diagnoses are present in roughly 30-40% of the Tourette's population.<sup>3</sup></p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">Additional Associations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Anxiety Disorders:</strong> General anxiety and social anxiety are frequently reported, often exacerbated by the effort to suppress tics in public.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Learning Differences:</strong> Specific learning disabilities, such as dysgraphia or dyslexia, are common co-travelers within the neurodivergent spectrum.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('tourette')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Tourette's
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p>1. Robertson, M. M. (2000). Tourette syndrome, associated conditions and the complexities of treatment. <i>Brain</i>.</p>
            <p>2. Van Borsel, J., & Tetnowski, J. A. (2007). Fluency disorders in genetic syndromes. <i>Journal of Fluency Disorders</i>.</p>
            <p>3. Hirschtritt, M. E., et al. (2015). Lifetime prevalence, age of risk, and genetic relationships of comorbid psychiatric disorders in Tourette syndrome. <i>JAMA Psychiatry</i>.</p>
            <p>4. Robertson, M. M., et al. (2009). The international prevalence, epidemiology, and clinical phenomenology of Tourette syndrome: A cross-cultural perspective. <i>Journal of Psychosomatic Research</i>.</p>
            <p>5. Conelea, C. A., & Woods, D. W. (2008). The influence of contextual factors on tic expression in Tourette's syndrome: A review. <i>Journal of Psychosomatic Research</i>.</p>
            <p>6. Jankovic, J., & Kurlan, R. (2011). Tourette syndrome: Evolving concepts. <i>Movement Disorders</i>.</p>
            <p>7. Leckman, J. F., et al. (2014). Clinical features of Tourette syndrome and tic disorders. <i>Journal of Obsessive-Compulsive and Related Disorders</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
            <li>Freeman, R. D., et al. (2000). An international perspective on Tourette syndrome: Selected findings from 3,500 individuals in 22 countries. <i>Developmental Medicine & Child Neurology</i>.</li>
            <li>Leckman, J. F. (2002). Tourette's syndrome. <i>The Lancet</i>.</li>
            <li>Martino, D., & Leckman, J. F. (2013). <i>Tourette Syndrome</i>. Oxford University Press.</li>
            <li>Woods, D. W., et al. (2005). <i>Understanding Tourette Syndrome: A Guide for Parents and Professionals</i>. Jessica Kingsley Publishers.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}