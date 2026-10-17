import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, FileText, Calculator, Activity, Eye, Heart, ClipboardList, Users, Target, LineChart, ShieldCheck, CheckCircle, Lightbulb, Search } from 'lucide-react';

interface TwiceExceptionalDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TwiceExceptionalDiagnosis({ setCurrentArticle, initialTab }: TwiceExceptionalDiagnosisProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'cognitive';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* GLOBAL STYLE FOR CITATIONS */}
      <style>
        {`
          sup {
            color: #10b981;
            font-weight: bold;
            margin-left: 2px;
          }
        `}
      </style>

      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Twice-Exceptional: Testing & Diagnosing
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('twice-exceptional')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About 2e
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('twice-exceptional')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About 2e
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('cognitive')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'cognitive'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Cognitive & Academic
        </button>
        <button
          onClick={() => handleTabChange('behavioral')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'behavioral'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Behavioral & Autism
        </button>
        <button
          onClick={() => handleTabChange('holistic')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'holistic'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Holistic & Best Practices
        </button>
      </div>

      {/* ==========================================
          TAB 1: COGNITIVE & ACADEMIC (Icons Tab)
      ========================================== */}
      {activeTab === 'cognitive' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Cognitive Card (Cyan) - Centered Hero + Stacked Icons */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Cognitive & IQ Testing</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-diagnosis-cognitive.webp"
              alt="Child engaged in a cognitive assessment puzzle"
              className="block mx-auto w-64 max-w-full h-auto rounded-md border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The primary hurdle in diagnosing 2e is the "masking effect"—where a student's high intelligence perfectly hides their disability, resulting in average, unremarkable test scores. Evaluators must look past the averages and actively search for "scatter."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Brain className="text-[#0A9DC4] w-6 h-6 mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Analyzing Scatter</h3>
                <p className="text-xs text-slate-700 leading-relaxed">2e students typically show massive scatter among subtests. Discrepancies of 20+ points between the highest and lowest index scores on tests like the WISC-V or SB5 are incredibly common.<sup>1</sup></p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <LineChart className="text-[#0A9DC4] w-6 h-6 mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Beyond Full Scale IQ</h3>
                <p className="text-xs text-slate-700 leading-relaxed">A Full Scale IQ is deeply misleading for a 2e student because low processing speed drags down high reasoning. Evaluators should use the General Ability Index (GAI) instead.<sup>2</sup></p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Search className="text-[#0A9DC4] w-6 h-6 mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Nonverbal Measures</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Tests like the NNAT or Raven's Matrices assess pure reasoning without language, which is vital for uncovering giftedness in students with severe language-based learning disabilities.</p>
              </div>
            </div>
          </div>

          {/* Achievement Card (Yellow) - Centered Hero + Stacked Icons */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Achievement & Specific LDs</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-diagnosis-academic.webp"
              alt="Visual contrast showing advanced oral concepts but struggling with a basic written worksheet"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Achievement testing requires comparing the student's academic output against their intellectual *ability*, not just against their grade level. A highly gifted student reading "at grade level" may actually possess a severe reading disability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <FileText className="text-[#d4a017] w-6 h-6 mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Reading (Dyslexia)</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Gifted students with dyslexia often show vastly superior comprehension when material is read aloud to them, revealing the massive discrepancy between their decoding limits and actual understanding.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <Calculator className="text-[#d4a017] w-6 h-6 mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Math (Dyscalculia)</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Assessment must separate reasoning from calculation. A 2e student may effortlessly grasp high-level theoretical algebra while consistently failing to memorize basic multiplication facts.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <Target className="text-[#d4a017] w-6 h-6 mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Above-Level Testing</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Giving middle schoolers high school tests avoids "ceiling effects," revealing genuine giftedness in 2e children whose disabilities artificially depress their grade-level achievement scores.</p>
              </div>
            </div>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Silverman, L. K. (2009). The measurement of giftedness. In L. V. Shavinina (Ed.), <i>International handbook on giftedness</i>. Springer.</p>
                <p>2. Saklofske, D. H., Prifitera, A., Weiss, L. G., Rolfhus, E., & Zhu, J. (2005). <i>Clinical interpretation of the WISC-IV FSIQ and GAI</i>. Elsevier Academic Press.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Pfeiffer, S. I. (2015). <i>Essentials of gifted assessment</i>. John Wiley & Sons.</li>
                <li>Mazzocco, M. M., & Myers, G. F. (2003). Complexities in identifying and defining mathematics learning disability. <i>Annals of Dyslexia</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: BEHAVIORAL & AUTISM (Horizontal Bars / Badges)
      ========================================== */}
      {activeTab === 'behavioral' && (
        <div className="space-y-8 animate-fadeIn">

          {/* ADHD Card (Navy) - Horizontal Bars + Numbered Badges */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">ADHD & Executive Function</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-diagnosis-adhd.webp"
              alt="Child taking a computerized Continuous Performance Test (CPT)"
              className="block mx-auto w-64 max-w-full h-auto rounded-md border border-[#0c264d] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              ADHD and giftedness share massive behavioral overlaps (high energy, intense questioning, boredom with routine). Evaluators must carefully distinguish between genuine executive dysfunction and a gifted child reacting to an under-stimulating environment.
            </p>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md text-lg">1</div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Rating Scales & Context</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Tools like the BASC or BRIEF evaluate attention across settings.<sup>1</sup> A key differentiator: a gifted child is only inattentive when bored, whereas a child with ADHD shows impairment even during tasks they want to complete.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md text-lg">2</div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Performance Limitations</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Continuous Performance Tests (CPTs) measure sustained attention. However, gifted children can sometimes "hyperfocus" during these brief testing windows, temporarily masking their severe ADHD symptoms.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Autism Card (Cyan) - Horizontal Bars + Circled Icons */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Autism & Emotional Assessment</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-diagnosis-autism.webp"
              alt="Clinician conducting a play-based observation to evaluate social communication"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-lg border border-[#2abcd4] border-opacity-30 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center font-bold shrink-0 shadow-sm border border-[#bae6fd] mt-1">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Autism Assessment & Masking</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Giftedness and Autism share traits like intense niche interests. Evaluators rely on the ADOS-2 and ADI-R to distinguish between them.<sup>2</sup> Highly gifted individuals with autism often use their advanced intellect to actively "mask" their social deficits during testing. Assessors must observe them in complex, naturalistic situations.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-lg border border-[#2abcd4] border-opacity-30 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center font-bold shrink-0 shadow-sm border border-[#bae6fd] mt-1">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Mental Health & Perfectionism</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Because of their constant internal awareness of their own discrepancies, 2e students suffer from drastically elevated rates of anxiety. Formal evaluations must aggressively screen for crippling perfectionism, which often demolishes self-esteem and leads to behavioral withdrawal.</p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Gioia, G. A., Isquith, P. K., Guy, S. C., & Kenworthy, L. (2000). <i>Behavior Rating Inventory of Executive Function: BRIEF</i>. Psychological Assessment Resources.</p>
                <p>2. Lord, C., Rutter, M., DiLavore, P. C., Risi, S., Gotham, K., & Bishop, S. L. (2012). <i>Autism Diagnostic Observation Schedule-Second Edition (ADOS-2)</i>. Western Psychological Services.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Webb, J. T., Amend, E. R., Webb, N. E., Goerss, J., Beljan, P., & Olenchak, F. R. (2005). <i>Misdiagnosis and dual diagnoses of gifted children and adults</i>. Great Potential Press.</li>
                <li>Foley-Nicpon, M., Doobay, A. F., & Assouline, S. G. (2010). Parent, teacher, and self perceptions of psychosocial functioning in intellectually gifted children and adolescents with autism. <i>Journal of Autism and Developmental Disorders</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: HOLISTIC & BEST PRACTICES (3D Borders, No Icons/Dots)
      ========================================== */}
      {activeTab === 'holistic' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Holistic Card (Yellow) - 3D Accent Borders */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Portfolios & Observation</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-diagnosis-holistic.webp"
              alt="Teacher, parent, and student collaboratively reviewing a portfolio of authentic project work"
              className="block mx-auto w-64 max-w-full h-auto rounded-md border border-[#ffd166] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Because standardized testing environments often trigger anxiety or executive dysfunction in 2e students, holistic, performance-based assessments are critical for uncovering their true capabilities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0c264d]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2">Work Portfolios</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Collections of student work reveal the precise discrepancy between their sophisticated thinking (advanced scientific concepts) and basic skill execution (illegible handwriting or calculation errors).</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0c264d]"></div>
                <div className="pl-3 py-1">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2">Rating Scales</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Parent and teacher interviews are vital. Tools like the SRBCSS assess multiple dimensions of giftedness outside of testing environments, capturing creativity and intense early interests.<sup>1</sup></p>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices Card (Navy) - 3D Accent Borders */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Best Practices & Interpretation</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-diagnosis-bestpractices.webp"
              alt="Multidisciplinary team reviewing a spiky profile chart"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#0A9DC4]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-3 border-b border-gray-100 pb-2">
                    Comprehensive Evaluation
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-4">
                    No single measure captures twice-exceptionality. Diagnosticians must utilize triangulation—comparing IQ scores against behavioral observations, teacher reports, and authentic classwork. 
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Evaluators must actively look for "scatter" and actively account for *compensation* (how the student's high intelligence is artificially inflating their disability scores).
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#0A9DC4]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-3 border-b border-gray-100 pb-2">
                    Avoiding Single-Label Thinking
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-4">
                    The most destructive mistake a school can make is categorizing a 2e student as simply "gifted with a few quirks" or "disabled with some smarts." 
                  </p>
                  <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                    <li>They must be recognized as genuinely twice-exceptional.</li>
                    <li>Both exceptionalities deserve equal, simultaneous consideration in the resulting IEP or 504 plan.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Renzulli, J. S., Smith, L. H., White, A. J., Callahan, C. M., Hartman, R. K., & Westberg, K. L. (2002). <i>Scales for Rating the Behavioral Characteristics of Superior Students</i>. Creative Learning Press.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Gilman, B. J., et al. (2013). Critical issues in the identification of gifted students with co-existing disabilities: The twice-exceptional. <i>SAGE Open</i>.</li>
                <li>Baum, S. M., & Owen, S. V. (1988). High ability/learning disabled students: How are they different? <i>Gifted Child Quarterly</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('twice-exceptional')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About 2e
        </button>
      </div>

    </article>
  );
}