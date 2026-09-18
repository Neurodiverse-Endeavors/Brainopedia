import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, FileText, Calculator, Activity, Eye, Heart, ClipboardList, Users, Target, LineChart, ShieldCheck, CheckCircle, Lightbulb, Search } from 'lucide-react';

interface TwiceExceptionalDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TwiceExceptionalDiagnosis({ setCurrentArticle, initialTab }: TwiceExceptionalDiagnosisProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'cognitive');

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
          onClick={() => setActiveTab('cognitive')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'cognitive'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Cognitive & Academic
        </button>
        <button
          onClick={() => setActiveTab('behavioral')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'behavioral'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Behavioral & Autism
        </button>
        <button
          onClick={() => setActiveTab('holistic')}
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
          TAB 1: COGNITIVE & ACADEMIC
      ========================================== */}
      {activeTab === 'cognitive' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Cognitive Card (Cyan) - Uses Float Image + flow-root */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Cognitive & IQ Testing</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-diagnosis-cognitive.webp"
              alt="Child engaged in a cognitive assessment puzzle"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The primary hurdle in diagnosing 2e is the "masking effect"—where a student's high intelligence perfectly hides their disability, resulting in average, unremarkable test scores. Evaluators must look past the averages and actively search for "scatter."
            </p>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Brain className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Analyzing Subtest Scatter</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">2e students typically show massive scatter among subtests. Discrepancies of 20+ points between the highest and lowest index scores on tests like the WISC-V or SB5 are incredibly common, indicating uneven development.<sup>1</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <LineChart className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Beyond Full Scale IQ</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A Full Scale IQ (FSIQ) is deeply misleading for a 2e student because their low processing speed mathematically drags down their high verbal reasoning. Evaluators should use the General Ability Index (GAI) to better represent their true reasoning capacity.<sup>2</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Search className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Nonverbal Measures</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Tests like the Naglieri Nonverbal Ability Test (NNAT) or Raven's Progressive Matrices assess pure reasoning without language, which is vital for uncovering giftedness in students with severe language-based learning disabilities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Achievement & Specific LDs</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-diagnosis-academic-hero.webp"
              alt="Visual contrast showing advanced oral concepts but struggling with a basic written worksheet"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Achievement testing requires comparing the student's academic output against their intellectual *ability*, not just against their grade level. A highly gifted student reading "at grade level" may actually possess a severe reading disability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <FileText className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Reading (Dyslexia)</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Gifted students with dyslexia often show vastly superior comprehension when material is read aloud to them, revealing the massive discrepancy between their decoding limits and actual understanding.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Calculator className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Math (Dyscalculia)</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Assessment must separate reasoning from calculation. A 2e student may effortlessly grasp high-level theoretical algebra while consistently failing to memorize basic multiplication facts.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Target className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Above-Level Testing</h3>
                </div>
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
          TAB 2: BEHAVIORAL & AUTISM
      ========================================== */}
      {activeTab === 'behavioral' && (
        <div className="space-y-8 animate-fadeIn">

          {/* ADHD Card (Slate) - Uses Float Image + flow-root */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">ADHD & Executive Function</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-diagnosis-adhd.webp"
              alt="Child taking a computerized Continuous Performance Test (CPT)"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              ADHD and giftedness share massive behavioral overlaps (high energy, intense questioning, boredom with routine). Evaluators must carefully distinguish between genuine executive dysfunction and a gifted child reacting to an under-stimulating environment.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <ClipboardList className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Rating Scales & Context</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Tools like the BASC or BRIEF evaluate attention across multiple settings.<sup>1</sup> A key differentiator for 2e is consistency: a gifted child is only inattentive when bored, whereas a child with ADHD will show impairment even during tasks they genuinely want to complete.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Activity className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Performance Limitations</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Continuous Performance Tests (CPTs) measure sustained attention. However, gifted children can sometimes "hyperfocus" during these brief testing windows, temporarily masking their severe ADHD symptoms that appear in daily life.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Autism Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Autism & Emotional Assessment</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-diagnosis-autism-hero.webp"
              alt="Clinician conducting a play-based observation to evaluate social communication"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Users className="text-[#2abcd4] w-5 h-5" /> Autism Assessment
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Giftedness and Autism share traits like intense niche interests and literal thinking. Evaluators rely on the ADOS-2 and ADI-R to distinguish between the two.<sup>2</sup>
                </p>
                <div className="bg-white p-3 rounded-lg border border-[#2abcd4] border-opacity-30 shadow-sm">
                  <h4 className="text-[#0c264d] font-bold text-xs mb-1">The Masking Challenge</h4>
                  <p className="text-xs text-slate-700">Highly gifted individuals with autism often use their advanced intellect to actively "mask" their social deficits during brief, structured clinical testing. Assessors must observe them in complex, naturalistic social situations to see the genuine impairment.</p>
                </div>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Heart className="text-[#2abcd4] w-5 h-5" /> Mental Health Screening
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Because of their constant internal awareness of their own discrepancies, 2e students suffer from drastically elevated rates of anxiety and depression.
                </p>
                <div className="bg-white p-3 rounded-lg border border-[#2abcd4] border-opacity-30 shadow-sm">
                  <h4 className="text-[#0c264d] font-bold text-xs mb-1">Perfectionism & Self-Esteem</h4>
                  <p className="text-xs text-slate-700">Formal evaluations must aggressively screen for crippling perfectionism. The gap between a 2e child's intellectual capacity and their actual academic output often demolishes their self-esteem, leading to severe behavioral withdrawal.</p>
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
          TAB 3: HOLISTIC & BEST PRACTICES
      ========================================== */}
      {activeTab === 'holistic' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Holistic Card (Yellow) - Uses Float Image + flow-root */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Portfolios & Observation</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-diagnosis-holistic.webp"
              alt="Teacher, parent, and student collaboratively reviewing a portfolio of authentic project work"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Because standardized testing environments often trigger anxiety or executive dysfunction in 2e students, holistic, performance-based assessments are critical for uncovering their true capabilities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <FileText className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Work Portfolios</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Collections of student work reveal the precise discrepancy between their sophisticated thinking (advanced scientific concepts) and basic skill execution (illegible handwriting or calculation errors).</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <CheckCircle className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Rating Scales</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Parent and teacher interviews are vital. Tools like the SRBCSS assess multiple dimensions of giftedness outside of testing environments, capturing creativity and intense early interests.<sup>1</sup></p>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Best Practices & Interpretation</h2>
            
            <ImageWithFallback 
              src="/images/2e/2e-diagnosis-bestpractices-hero.webp"
              alt="Multidisciplinary team reviewing a spiky profile chart"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-[#2abcd4] w-5 h-5" /> Comprehensive Evaluation
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  No single measure captures twice-exceptionality. Diagnosticians must utilize triangulation—comparing IQ scores against behavioral observations, teacher reports, and authentic classwork. 
                </p>
                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex items-start gap-2">
                  <Eye className="text-[#0c264d] w-4 h-4 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-700">Evaluators must actively look for "scatter" and actively account for *compensation* (how the student's high intelligence is artificially inflating their disability scores).</p>
                </div>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Lightbulb className="text-[#2abcd4] w-5 h-5" /> Avoiding Single-Label Thinking
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