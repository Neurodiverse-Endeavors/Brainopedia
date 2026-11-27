import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { CheckCircle2, Clock, Calendar, ShieldCheck, Layers, Brain, AlertCircle, BookOpen, HeartHandshake } from 'lucide-react';

interface TouretteDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TouretteDiagnosis({ setCurrentArticle, initialTab }: TouretteDiagnosisProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'criteria';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Tourette's: Testing & Diagnosing
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
          onClick={() => handleTabChange('criteria')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'criteria'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Diagnostic Criteria
        </button>
        <button
          onClick={() => handleTabChange('process')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'process'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Evaluation Process
        </button>
        <button
          onClick={() => handleTabChange('screening')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'screening'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Co-occurring Screening
        </button>
      </div>

      {/* ==========================================
          TAB 1: DIAGNOSTIC CRITERIA (CYAN)
      ========================================== */}
      {activeTab === 'criteria' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-3xl mx-auto mb-8">
            Tourette's is diagnosed clinically based on a specific timeline and pattern of involuntary movements and sounds. There is no blood test, brain scan, or genetic screening that can definitively diagnose the condition.
          </p>

          {/* Criteria Card (Tab 1 Default: Cyan with Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Diagnostic Standard</h2>
            
            <ImageWithFallback 
              src="/images/tourette/tourette-diagnosis-main.webp"
              alt="Medical professional reviewing diagnostic criteria"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Clinicians rely on established international medical manuals—primarily the DSM-5-TR and ICD-11—to determine whether an individual's tics meet the threshold for Tourette's or another condition on the tic disorder spectrum.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1, 2</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <CheckCircle2 className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Multiple Tics</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  The individual must have experienced multiple motor tics and at least one vocal tic at some point, though they do not need to occur at the exact same time.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Clock className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Duration</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Tics may wax and wane in frequency, but they must have persisted for more than one year since the very first tic was noticed.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Calendar className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Age of Onset</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  The tics must have begun before the age of 18, even if a formal diagnosis is not made until adulthood.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <ShieldCheck className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Ruling Out Other Causes</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Symptoms must not be the direct physiological result of a substance or medication, nor caused by another underlying medical condition such as Huntington's disease or post-viral encephalitis.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center md:col-span-2 lg:col-span-2">
                <Layers className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">The Broader Tic Spectrum</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  If tics have been present for less than one year, clinicians diagnose <strong>Provisional Tic Disorder</strong>. If either motor or vocal tics (but not both) persist for more than one year, the diagnosis is <strong>Persistent (Chronic) Motor or Vocal Tic Disorder</strong>.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>
            </div>
          </div>

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

          {/* ===== TAB 1 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</p>
                <p>2. World Health Organization. (2019). <i>International Statistical Classification of Diseases and Related Health Problems</i> (11th ed.). WHO.</p>
              </div>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Centers for Disease Control and Prevention. (2024). <i>Diagnosing Tic Disorders</i>. U.S. Department of Health and Human Services.</li>
                <li>Müller-Vahl, K. R., et al. (2019). Tic disorders revisited: Introduction of the term tic spectrum disorders. <i>European Child & Adolescent Psychiatry</i>.</li>
                <li>Singer, H. S. (2005). Tourette's syndrome: From behaviour to biology. <i>The Lancet Neurology</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: THE EVALUATION PROCESS (NAVY)
      ========================================== */}
      {activeTab === 'process' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-3xl mx-auto mb-8">
            Because a diagnosis relies on clinical observation rather than lab results, the evaluation process is thorough—focusing on the individual's developmental history, lived experience, and daily functioning.
          </p>

          {/* Process Card (Tab 2 Default: Navy with 3D Left-Stripe Inner Cards, No Icons/Bullets) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Clinical Assessment</h2>
            
            <ImageWithFallback 
              src="/images/tourette/tourette-diagnosis-process.webp"
              alt="Clinician conducting an evaluation"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Diagnosis is typically made by a neurologist, psychiatrist, or developmental pediatrician who specializes in movement conditions and neurodivergence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Neurological Exam
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    A physical and neurological examination is conducted to observe tics firsthand and rule out other neuromuscular or physical causes for the movements.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Detailed History & Home Videos
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Clinicians gather a comprehensive family and developmental history. Because many individuals unconsciously suppress tics in a doctor's office, bringing brief home videos of tics in natural settings is often encouraged.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    The YGTSS
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Specialists frequently use the Yale Global Tic Severity Scale (YGTSS) to measure tic frequency, complexity, and how much they impact daily life.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Differentiating Functional Tic-Like Behaviors
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Modern evaluations also distinguish neurodevelopmental tics from functional tic-like behaviors (FTLBs), which typically emerge abruptly in adolescence with complex movements and respond to different therapeutic approaches.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>

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

          {/* ===== TAB 2 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Leckman, J. F., et al. (1989). The Yale Global Tic Severity Scale: Initial testing of a clinician-rated scale of tic severity. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>.</p>
                <p>2. Cavanna, A. E., et al. (2025). Neurodevelopmental tics with co-morbid functional tic-like behaviors: Diagnostic challenges of a complex Tourette syndrome phenotype. <i>Brain Sciences</i>.</p>
              </div>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
                <li>Pringsheim, T., et al. (2019). Practice guideline recommendations summary: Treatment of tics in people with Tourette syndrome and chronic tic disorders. <i>Neurology</i>.</li>
                <li>Singer, H. S. (2005). Tourette's syndrome: From behaviour to biology. <i>The Lancet Neurology</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: CO-OCCURRING SCREENING (YELLOW)
      ========================================== */}
      {activeTab === 'screening' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-3xl mx-auto mb-8">
            An accurate Tourette's diagnosis is rarely just about identifying tics. A thorough clinical evaluation screens for the neurodevelopmental traits that frequently travel alongside it so support can be tailored to the whole person.
          </p>

          {/* Screening Card (Tab 3 Default: Yellow with Double-Ring Navy Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Assessing the Whole Picture</h2>
            
            <ImageWithFallback 
              src="/images/tourette/tourette-diagnosis-screening.webp"
              alt="Visual map showing co-occurring screening processes"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because Tourette's shares strong genetic and neurological overlap with other conditions, specialists conduct a broad screening to build a complete map of an individual's strengths and support needs.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">ADHD & Executive Function</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Screening for attention patterns, impulsivity, and working memory differences, which appear alongside Tourette's in a large proportion of individuals.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">OCD & Anxiety</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Assessing for obsessive thoughts, "just right" sensory compulsions, and general or social anxiety, which often benefit even more from targeted support than the tics themselves.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Learning Differences</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Evaluating for specific learning differences—such as dysgraphia or dyslexia—so students can receive tailored academic accommodations right away.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Sensory & Sleep Profiles</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Checking for sensory sensitivities and sleep disruptions, as addressing fatigue and sensory overload can meaningfully reduce daily tic intensity.
                </p>
              </div>
            </div>
          </div>

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

          {/* ===== TAB 3 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Scahill, L., et al. (2014). The prevalence of tic disorders and clinical characteristics in children. <i>Journal of Obsessive-Compulsive and Related Disorders</i>.</p>
              </div>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Centers for Disease Control and Prevention. (2024). <i>Diagnosing Tic Disorders</i>. U.S. Department of Health and Human Services.</li>
                <li>Eddy, C. M., et al. (2009). Neuropsychological aspects of Tourette syndrome: A review. <i>Journal of Psychosomatic Research</i>.</li>
                <li>Roessner, V., et al. (2011). European clinical guidelines for Tourette syndrome and other tic disorders. Part II: Pharmacological treatment. <i>European Child & Adolescent Psychiatry</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}