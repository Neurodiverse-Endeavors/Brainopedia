import { ADHDComorbidities } from '../../infographics/ADHDComorbidities';
import { ADHDDiagnosticProfessionals } from '../../infographics/ADHDDiagnosticProfessionals';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useState } from 'react';

interface ADHDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function ADHDDiagnosis({ setCurrentArticle, initialTab }: ADHDDiagnosisProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'process');

  return (
    <article className="max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl">
          ADHD: Testing & Diagnosing
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-lg">←</span>
          All About ADHD
        </button>
      </div>

      {/* Mobile back button */}
      <button 
        onClick={() => setCurrentArticle?.('adhd')}
        className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About ADHD
      </button>

      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger value="process" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Diagnostic Process
          </TabsTrigger>
          <TabsTrigger value="tests" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Tests & Assessments
          </TabsTrigger>
          <TabsTrigger value="professionals" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Who Can Diagnose
          </TabsTrigger>
          <TabsTrigger value="adults" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Adult Diagnosis
          </TabsTrigger>
          <TabsTrigger value="challenges" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Challenges
          </TabsTrigger>
          <TabsTrigger value="after" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            After Diagnosis
          </TabsTrigger>
          <TabsTrigger value="research" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Recent Research
          </TabsTrigger>
          <TabsTrigger value="audhd" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            What is AuDHD?
          </TabsTrigger>
        </TabsList>

        {/* =========================================
            TAB 1: DIAGNOSTIC PROCESS
            ========================================= */}
        <TabsContent value="process" className="animate-fadeIn">
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">The ADHD Diagnostic Process</h2>
            
            <ImageWithFallback 
              src="/images/adhd/adhd-diag-proc-ball-over-head-boy.webp"
              alt="The ADHD diagnostic process - clinical evaluation"
              className="w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-6"
            />

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded-r-lg mb-6 shadow-sm clear-both">
              <p className="text-sm">
                <strong>Important:</strong> There is no single test for ADHD. Diagnosis requires a comprehensive 
                evaluation by a qualified healthcare professional using multiple sources of information.
              </p>
            </div>

            <p className="mb-4 text-slate-700 leading-relaxed text-center max-w-4xl mx-auto">
              ADHD diagnosis requires a comprehensive evaluation by a qualified healthcare professional—typically a 
              psychiatrist, psychologist, pediatrician, or neurologist with training in ADHD assessment. 
              The diagnostic process involves gathering information from multiple sources to determine whether symptoms 
              meet diagnostic criteria and to rule out other conditions that might better explain the difficulties.
            </p>

            <p className="mb-10 text-slate-700 leading-relaxed text-center max-w-4xl mx-auto">
              ADHD diagnosis is based on the criteria outlined in the Diagnostic and Statistical Manual of Mental 
              Disorders (DSM-5-TR)<sup>1</sup>. To receive an ADHD diagnosis, an individual must display a persistent 
              pattern of inattention and/or hyperactivity-impulsivity that interferes with functioning or development, 
              with symptoms present before age 12, occurring in multiple settings, and not better explained by another 
              condition.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
              Components of an ADHD Evaluation
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0c264d] flex flex-col h-full">
                <div className="font-bold text-[#0c264d] mb-3 text-lg">1. Clinical Interview</div>
                <div className="text-sm text-slate-700 flex-grow">
                  The clinician conducts detailed interviews with the individual (and parents/caregivers for children) 
                  about current symptoms, developmental history, medical history, family history, and functional 
                  impairment in various settings.
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#2abcd4] flex flex-col h-full">
                <div className="font-bold text-[#0c264d] mb-3 text-lg">2. Rating Scales</div>
                <div className="text-sm text-slate-700 flex-grow">
                  Standardized questionnaires completed by the individual, parents, teachers, or other observers 
                  provide quantitative data about symptom frequency and severity. These tools 
                  have demonstrated reliability and validity.
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#ffd166] flex flex-col h-full">
                <div className="font-bold text-[#0c264d] mb-3 text-lg">3. Behavioral Observations</div>
                <div className="text-sm text-slate-700 flex-grow">
                  Clinicians observe the individual's behavior during the evaluation, though it's important to note 
                  that many people with ADHD can focus well in novel, one-on-one situations.
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0A9DC4] flex flex-col h-full">
                <div className="font-bold text-[#0c264d] mb-3 text-lg">4. Medical Examination</div>
                <div className="text-sm text-slate-700 flex-grow">
                  A physical examination and review of medical history help rule out medical conditions that could 
                  cause ADHD-like symptoms (thyroid problems, sleep disorders, hearing/vision problems).
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0c264d] flex flex-col h-full">
                <div className="font-bold text-[#0c264d] mb-3 text-lg">5. Psychological Testing</div>
                <div className="text-sm text-slate-700 flex-grow">
                  While not required for ADHD diagnosis, testing may be conducted to identify learning disabilities, 
                  assess intellectual functioning, or evaluate executive function skills.
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#2abcd4] flex flex-col h-full">
                <div className="font-bold text-[#0c264d] mb-3 text-lg">6. Review of Records</div>
                <div className="text-sm text-slate-700 flex-grow">
                  Report cards, performance reviews, or other documentation can provide historical evidence of long-standing 
                  patterns of difficulty.
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl flex items-center justify-between flex-wrap gap-4 shadow-md">
              <div>
                <strong className="text-[#0c264d] block text-lg">Looking for DSM-5 Criteria?</strong>
                <span className="text-slate-600 text-sm">Review the full list of 18 diagnostic criteria.</span>
              </div>
              <button 
                onClick={(e) => { e.preventDefault(); setCurrentArticle?.('adhd-symptoms'); }}
                className="bg-[#2abcd4] text-white hover:bg-[#0c264d] font-bold py-2 px-6 rounded-lg transition-colors duration-200 shadow-sm"
              >
                View Symptoms Page →
              </button>
            </div>

            <div className="flex justify-end my-8 clear-both">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
              >
                <span className="text-lg">←</span>
                All About ADHD
              </button>
            </div>

            {/* ===== REFERENCES SECTION ===== */}
            <div className="clear-both mt-16 font-spartan">
              <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
              
              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
                  Cited Studies & Statistics
                </h4>
                <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
                  <p>1. American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
                  Background Sources
                </h4>
                <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                  <li>American Academy of Pediatrics. (2019). Clinical practice guideline for the diagnosis, evaluation, and treatment of attention-deficit/hyperactivity disorder in children and adolescents. <i>Pediatrics</i>.</li>
                  <li>Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i> (4th ed.). Guilford Press.</li>
                  <li>Pliszka, S. (2007). Practice parameter for the assessment and treatment of children and adolescents with attention-deficit/hyperactivity disorder. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>.</li>
                </ul>
              </div>
            </div>

          </div>
        </TabsContent>

        {/* =========================================
            TAB 2: TESTS & ASSESSMENTS
            ========================================= */}
        <TabsContent value="tests" className="animate-fadeIn">
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">Tests & Assessments Used</h2>
            
            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded-r-lg mb-10 shadow-sm max-w-4xl mx-auto">
              <p className="text-sm">
                <strong>Important Note:</strong> Not all of these tests are needed for every evaluation. Your clinician 
                will select the appropriate assessments based on your individual situation, age, and presenting concerns. 
                ADHD can be diagnosed with clinical interview and rating scales alone—additional testing is used when needed 
                to clarify diagnosis or identify co-occurring conditions.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
              ADHD-Specific Rating Scales
            </h3>
            <p className="text-slate-700 text-center mb-8 max-w-3xl mx-auto">
              Standardized questionnaires completed by parents, teachers, the individual, or observers 
              to rate symptom frequency and severity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0A9DC4] flex flex-col">
                <div className="font-bold text-[#0c264d] mb-2">Conners Rating Scales (4th Ed.)</div>
                <div className="text-sm text-slate-700">Widely used. Versions available for parents, teachers, and self-report. Assesses ADHD symptoms, executive function, and learning problems.</div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0A9DC4] flex flex-col">
                <div className="font-bold text-[#0c264d] mb-2">ADHD Rating Scale-5 (ADHD-RS-5)</div>
                <div className="text-sm text-slate-700">Brief questionnaire (18 items matching the 18 DSM symptoms) with versions for home and school settings.<sup>1</sup></div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0A9DC4] flex flex-col">
                <div className="font-bold text-[#0c264d] mb-2">Vanderbilt Diagnostic Scales</div>
                <div className="text-sm text-slate-700">Free, publicly available scales often used in primary care settings. Includes screening for common comorbidities.</div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0A9DC4] flex flex-col">
                <div className="font-bold text-[#0c264d] mb-2">SNAP-IV Rating Scale</div>
                <div className="text-sm text-slate-700">Includes DSM-based ADHD items plus oppositional defiant disorder symptoms. Free and widely used in research.</div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0A9DC4] flex flex-col">
                <div className="font-bold text-[#0c264d] mb-2">Brown ADD Scales</div>
                <div className="text-sm text-slate-700">Focuses on executive function aspects of ADHD (activation, focus, effort, emotion, memory).</div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0A9DC4] flex flex-col">
                <div className="font-bold text-[#0c264d] mb-2">Adult ADHD Self-Report (ASRS)</div>
                <div className="text-sm text-slate-700">WHO-developed screening tool specifically for adults.<sup>2</sup> Brief version available for quick screening.</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
              Continuous Performance Tests (CPTs)
            </h3>
            <p className="text-slate-700 text-center mb-8 max-w-3xl mx-auto">
              Computer-based tests measuring sustained attention, impulsivity, and response variability.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#ffd166]">
                <div className="font-bold text-[#0c264d] mb-2">Conners CPT-3</div>
                <div className="text-sm text-slate-700">14-minute computer test measuring inattention, impulsivity, sustained attention, and vigilance via visual targets.</div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#ffd166]">
                <div className="font-bold text-[#0c264d] mb-2">Test of Variables of Attention (TOVA)</div>
                <div className="text-sm text-slate-700">21.6-minute visual or auditory attention test measuring response time, variability, and impulsivity.</div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#ffd166]">
                <div className="font-bold text-[#0c264d] mb-2">Integrated Visual & Auditory (IVA-2)</div>
                <div className="text-sm text-slate-700">Tests both visual and auditory attention and response control simultaneously.</div>
              </div>
            </div>

            <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded-r-lg mb-12 text-sm text-slate-700 max-w-4xl mx-auto shadow-sm">
              <strong>Limitation:</strong> CPTs should NEVER be used alone to diagnose ADHD. Many people with ADHD 
              perform normally on these tests (especially in novel testing environments).
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
              {/* Exec Function */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#0c264d] border-b border-gray-200 pb-2">
                  Executive Function Assessments
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-[#2abcd4]">
                    <div className="font-bold text-[#0c264d] mb-1">BRIEF-2</div>
                    <div className="text-sm text-slate-700">Questionnaire assessing real-world executive function behaviors (working memory, planning, emotional control).</div>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-[#2abcd4]">
                    <div className="font-bold text-[#0c264d] mb-1">D-KEFS</div>
                    <div className="text-sm text-slate-700">Battery of performance-based tests measuring cognitive flexibility, inhibition, problem-solving, and creativity.</div>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-[#2abcd4]">
                    <div className="font-bold text-[#0c264d] mb-1">Wisconsin Card Sorting (WCST)</div>
                    <div className="text-sm text-slate-700">Measures abstract reasoning and set-shifting ability (changing strategies when rules change).</div>
                  </div>
                </div>
              </div>

              {/* Academic */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#0c264d] border-b border-gray-200 pb-2">
                  Intellectual & Academic Tests
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-[#0c264d]">
                    <div className="font-bold text-[#0c264d] mb-1">Wechsler Intelligence Scales</div>
                    <div className="text-sm text-slate-700">WISC-V, WAIS-IV, WPPSI-IV. Comprehensive IQ tests measuring verbal comprehension, processing speed, and working memory.</div>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-[#0c264d]">
                    <div className="font-bold text-[#0c264d] mb-1">Wechsler Achievement Test (WIAT-4)</div>
                    <div className="text-sm text-slate-700">Assesses academic achievement in reading, writing, and math to identify co-occurring learning disabilities.</div>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-[#0c264d]">
                    <div className="font-bold text-[#0c264d] mb-1">Woodcock-Johnson (WJ IV)</div>
                    <div className="text-sm text-slate-700">Comprehensive battery measuring academic skills and cognitive abilities for educational planning.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0c264d] text-white p-6 rounded-xl text-center shadow-md">
              <p className="text-sm md:text-base leading-relaxed">
                <strong>Bottom Line:</strong> A typical ADHD evaluation uses a clinical interview + 1-2 rating scales + medical history. Additional testing is added only when there are questions about learning disabilities or diagnostic uncertainty. <em>Quality of clinical judgment matters more than quantity of tests!</em>
              </p>
            </div>

            <div className="flex justify-end my-8 clear-both">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
              >
                <span className="text-lg">←</span>
                All About ADHD
              </button>
            </div>

            {/* ===== REFERENCES SECTION ===== */}
            <div className="clear-both mt-16 font-spartan">
              <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
              
              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
                  Cited Studies & Statistics
                </h4>
                <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
                  <p>1. DuPaul, G. J., et al. (2016). <i>ADHD Rating Scale-5 for Children and Adolescents: Checklists, Norms, and Clinical Interpretation</i>. Guilford Press.</p>
                  <p>2. Kessler, R. C., et al. (2005). The World Health Organization Adult ADHD Self-Report Scale (ASRS): A short screening scale for use in the general population. <i>Psychological Medicine</i>.</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
                  Background Sources
                </h4>
                <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                  <li>Conners, C. K. (2014). <i>Conners 3rd Edition</i>. Multi-Health Systems.</li>
                  <li>Harrison, P. L., & Thomas, A. (2014). <i>Best Practices in School Psychology: Data-Based and Collaborative Decision Making</i>. National Association of School Psychologists.</li>
                  <li>Ramsay, J. R., & Rostain, A. L. (2015). <i>The Adult ADHD Tool Kit: Using CBT to Facilitate Coping Inside and Out</i>. Routledge.</li>
                </ul>
              </div>
            </div>

          </div>
        </TabsContent>

        {/* =========================================
            TAB 3: WHO CAN DIAGNOSE
            ========================================= */}
        <TabsContent value="professionals" className="animate-fadeIn">
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl clear-both text-center">Professionals Qualified to Diagnose ADHD</h2>
            
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-lg rounded-xl overflow-hidden flex justify-center items-center">
                <ADHDDiagnosticProfessionals />
              </div>
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded-r-lg mb-10 shadow-sm max-w-4xl mx-auto text-center">
              <p className="text-sm">
                <strong>Key Point:</strong> Several types of licensed healthcare professionals can diagnose ADHD. 
                What matters most is that they have specific training and experience in ADHD assessment.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
              Licensed Professionals Who Can Diagnose
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0A9DC4] flex flex-col h-full">
                <div className="font-bold text-[#0c264d] mb-2 text-lg">Psychiatrists</div>
                <div className="text-sm text-slate-700 flex-grow">
                  Medical doctors (M.D. or D.O.) specializing in mental health. Can diagnose ADHD, prescribe medication, and provide therapy.
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0A9DC4] flex flex-col h-full">
                <div className="font-bold text-[#0c264d] mb-2 text-lg">Psychologists</div>
                <div className="text-sm text-slate-700 flex-grow">
                  Doctoral-level (Ph.D. or Psy.D.) trained in psychological assessment. Conduct comprehensive testing, but generally cannot prescribe medication.
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0A9DC4] flex flex-col h-full">
                <div className="font-bold text-[#0c264d] mb-2 text-lg">Pediatricians</div>
                <div className="text-sm text-slate-700 flex-grow">
                  Primary care doctors (M.D. or D.O.) can diagnose and treat ADHD. Often the first point of contact for families.
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0A9DC4] flex flex-col h-full">
                <div className="font-bold text-[#0c264d] mb-2 text-lg">Neurologists</div>
                <div className="text-sm text-slate-700 flex-grow">
                  Medical doctors specializing in the nervous system. Child neurologists frequently diagnose ADHD when neurological conditions are suspected.
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0A9DC4] flex flex-col h-full">
                <div className="font-bold text-[#0c264d] mb-2 text-lg">Nurse Practitioners (NPs)</div>
                <div className="text-sm text-slate-700 flex-grow">
                  Advanced practice providers (PMHNPs) can diagnose ADHD and prescribe medication in most states.
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0A9DC4] flex flex-col h-full">
                <div className="font-bold text-[#0c264d] mb-2 text-lg">Neuropsychologists</div>
                <div className="text-sm text-slate-700 flex-grow">
                  Specialized psychologists conducting deep testing of cognitive functions. Highly helpful when learning disabilities are also suspected.
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
              {/* Cannot Diagnose */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-red-700 border-b border-red-200 pb-2">
                  Who CANNOT Diagnose ADHD
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-xl border border-red-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-t-red-500">
                    <strong className="text-red-900 block mb-1">Teachers & Counselors</strong>
                    <span className="text-sm text-red-800">Can recommend evaluation but cannot diagnose.</span>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-t-red-500">
                    <strong className="text-red-900 block mb-1">LCSWs</strong>
                    <span className="text-sm text-red-800">Can provide therapy but typically cannot diagnose (varies by state).</span>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-t-red-500">
                    <strong className="text-red-900 block mb-1">LPCs</strong>
                    <span className="text-sm text-red-800">Can provide therapy but typically cannot diagnose (varies by state).</span>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-t-red-500">
                    <strong className="text-red-900 block mb-1">Online Tests</strong>
                    <span className="text-sm text-red-800">Internet quizzes cannot replace a professional evaluation.</span>
                  </div>
                </div>
              </div>

              {/* How to Find */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-[#0c264d] border-b border-gray-200 pb-2">
                  How to Find a Provider
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-[#0c264d]">
                    <strong className="text-[#0c264d] block mb-1">Ask About Experience</strong>
                    <span className="text-sm text-slate-700">Look for providers who regularly diagnose ADHD. Ask what percentage of their practice involves ADHD.</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-[#0c264d]">
                    <strong className="text-[#0c264d] block mb-1">Use Directories</strong>
                    <span className="text-sm text-slate-700">CHADD maintains a directory of professionals. Psychology Today allows filtering by specialty.</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-[#0c264d]">
                    <strong className="text-[#0c264d] block mb-1">Check Credentials</strong>
                    <span className="text-sm text-slate-700">Verify state licenses and look for additional ADHD-specific training or board certifications.</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-[#0c264d]">
                    <strong className="text-[#0c264d] block mb-1">Ask Primary Care</strong>
                    <span className="text-sm text-slate-700">Your regular doctor can provide trusted local referrals to specialists with ADHD expertise.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end my-8 clear-both">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
              >
                <span className="text-lg">←</span>
                All About ADHD
              </button>
            </div>

            {/* ===== REFERENCES SECTION ===== */}
            <div className="clear-both mt-16 font-spartan">
              <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
              <div>
                <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
                  Background Sources
                </h4>
                <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                  <li>American Academy of Child and Adolescent Psychiatry. ADHD Resource Center.</li>
                  <li>American Academy of Pediatrics. (2019). Clinical Practice Guideline for the Diagnosis, Evaluation, and Treatment of ADHD in Children and Adolescents. <i>Pediatrics</i>.</li>
                  <li>American Psychological Association. Understanding ADHD: Information for Psychologists.</li>
                  <li>Children and Adults with Attention-Deficit/Hyperactivity Disorder (CHADD). Professional Directory.</li>
                  <li>Psychology Today. Find a Therapist Directory - ADHD Specialists.</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* =========================================
            TAB 4: ADULT DIAGNOSIS
            ========================================= */}
        <TabsContent value="adults" className="animate-fadeIn">
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">Diagnosing ADHD in Adults</h2>
            
            <ImageWithFallback 
              src="/images/adhd/adhd-adult-dx-adult-male.webp"
              alt="Adult ADHD diagnosis - recognizing symptoms in adulthood"
              className="w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm"
            />

            <p className="mb-8 text-slate-700 leading-relaxed text-center max-w-4xl mx-auto">
              Adult ADHD diagnosis presents unique challenges. Many adults seeking evaluation never 
              received a childhood diagnosis but struggled for years without understanding why. Girls, 
              individuals with the inattentive presentation, and those who compensated well academically often 
              go undiagnosed until adulthood when coping strategies can no longer keep up with demands.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
              Unique Challenges in Adult Diagnosis
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#ffd166]">
                <div className="font-bold text-[#0c264d] mb-2 text-lg">Childhood Evidence</div>
                <div className="text-sm text-slate-700">
                  DSM-5 requires symptoms to have been present before age 12.<sup>1</sup> Documenting this decades later is difficult. Clinicians rely on old report cards, adult recall, or parent interviews.
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#ffd166]">
                <div className="font-bold text-[#0c264d] mb-2 text-lg">Symptom Presentation</div>
                <div className="text-sm text-slate-700">
                  Hyperactivity often manifests as internal restlessness rather than physical movement. Adults also develop strong compensatory strategies that can mask symptoms.
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#ffd166]">
                <div className="font-bold text-[#0c264d] mb-2 text-lg">Comorbidities</div>
                <div className="text-sm text-slate-700">
                  Adults often have co-occurring anxiety, depression, or substance use disorders built up over years of struggling, complicating the diagnostic picture.
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#ffd166]">
                <div className="font-bold text-[#0c264d] mb-2 text-lg">Lack of Collateral Info</div>
                <div className="text-sm text-slate-700">
                  Unlike children, adults don't have teachers actively observing them. Partners or close friends must step in to provide secondary input when available.
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
              Adult-Specific Evaluation Components
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-[#2abcd4]">
                <div className="font-bold text-[#0c264d] mb-3 text-lg">Childhood History</div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Review of old report cards (looking for comments on attention/completion)</li>
                  <li>• Retrospective parent interviews</li>
                  <li>• Standardized childhood symptom scales completed via recall</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-[#2abcd4]">
                <div className="font-bold text-[#0c264d] mb-3 text-lg">Adult Rating Scales</div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Adult ADHD Self-Report Scale (ASRS)</li>
                  <li>• Conners Adult ADHD Rating Scales (CAARS)</li>
                  <li>• Barkley Adult ADHD Rating Scale (BAARS-IV)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-[#2abcd4]">
                <div className="font-bold text-[#0c264d] mb-3 text-lg">Differential Diagnosis</div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Differentiating from Anxiety or Depression</li>
                  <li>• Checking for Sleep Disorders (sleep debt mimics ADHD)</li>
                  <li>• Ruling out medical conditions (thyroid, menopause)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-l-4 border-[#2abcd4]">
                <div className="font-bold text-[#0c264d] mb-3 text-lg">Functional Impairment</div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Work performance (missed deadlines, disorganization)</li>
                  <li>• Relationships (forgetfulness, not listening)</li>
                  <li>• Daily responsibilities (paying bills, household management)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
              Common Adult Pathways to Diagnosis
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="font-bold text-[#0A9DC4] mb-2 text-lg">The High-Achiever</div>
                <div className="text-sm text-slate-700">
                  Compensated through high intelligence or supportive structure in childhood. Symptoms become unmanageable in college or complex work environments when supports fade.
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="font-bold text-[#0A9DC4] mb-2 text-lg">The "Daydreamer"</div>
                <div className="text-sm text-slate-700">
                  Often women who were never disruptive in school. Described historically as "spacey" or "not living up to potential." Diagnosed when organizational demands overwhelm them.
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="font-bold text-[#0A9DC4] mb-2 text-lg">The Parent</div>
                <div className="text-sm text-slate-700">
                  Recognizes their own childhood experiences while going through their child's ADHD evaluation. A highly common pathway to an adult diagnosis.
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="font-bold text-[#0A9DC4] mb-2 text-lg">The Career Struggler</div>
                <div className="text-sm text-slate-700">
                  Experiences multiple job changes, underemployment despite intelligence, chronic lateness, and severe difficulty with paperwork/administrative tasks.
                </div>
              </div>
            </div>

            <div className="flex justify-end my-8 clear-both">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
              >
                <span className="text-lg">←</span>
                All About ADHD
              </button>
            </div>

            {/* ===== REFERENCES SECTION ===== */}
            <div className="clear-both mt-16 font-spartan">
              <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
              
              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
                  Cited Studies & Statistics
                </h4>
                <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
                  <p>1. American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
                  Background Sources
                </h4>
                <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                  <li>Barkley, R. A., Murphy, K. R., & Fischer, M. (2008). <i>ADHD in Adults: What the Science Says</i>. Guilford Press.</li>
                  <li>Kessler, R. C., et al. (2006). The prevalence and correlates of adult ADHD in the United States: Results from the National Comorbidity Survey Replication. <i>American Journal of Psychiatry</i>.</li>
                  <li>Ramsay, J. R., & Rostain, A. L. (2015). <i>The Adult ADHD Tool Kit</i>. Routledge.</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* =========================================
            TAB 5:  CHALLENGES
            ========================================= */}
        <TabsContent value="challenges" className="animate-fadeIn">
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">Challenges</h2>
            
            <ImageWithFallback 
              src="/images/adhd/adhd-challenges-question-mark-maze.webp"
              alt="Diagnostic challenges and comorbidities in ADHD"
              className="w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-10 shadow-sm"
            />

            <h3 className="text-2xl font-bold mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
              Challenges in Diagnosis
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0c264d]">
                <div className="font-bold text-[#0c264d] mb-2 text-lg">Symptom Overlap</div>
                <div className="text-sm text-slate-700">
                  Many conditions share symptoms with ADHD (anxiety, depression, sleep disorders). Skilled clinicians must carefully differentiate ADHD from these or recognize when they co-occur.
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0c264d]">
                <div className="font-bold text-[#0c264d] mb-2 text-lg">Subjective Assessment</div>
                <div className="text-sm text-slate-700">
                  Diagnosis relies heavily on subjective reports. Teacher and parent ratings often show modest correlation, reflecting genuine behavior differences across settings.
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0c264d]">
                <div className="font-bold text-[#0c264d] mb-2 text-lg">Diagnostic Biases</div>
                <div className="text-sm text-slate-700">
                  Girls and adults with the inattentive presentation are often overlooked because they are less disruptive. Cultural factors and implicit biases also affect who gets evaluated.
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0c264d]">
                <div className="font-bold text-[#0c264d] mb-2 text-lg">Situational Variability</div>
                <div className="text-sm text-slate-700">
                  ADHD symptoms improve in novel or one-on-one situations (like a clinic!). An individual may appear completely focused during assessment but struggle in the real world.
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
              Conditions to Rule Out
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center">
                <strong className="text-[#0A9DC4] block mb-1">Sleep Disorders</strong>
                <span className="text-sm text-slate-700">Sleep debt/apnea causes severe inattention.</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center">
                <strong className="text-[#0A9DC4] block mb-1">Learning Disabilities</strong>
                <span className="text-sm text-slate-700">Dyslexia looks like inattention during tasks.</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center">
                <strong className="text-[#0A9DC4] block mb-1">Anxiety</strong>
                <span className="text-sm text-slate-700">Worry and rumination cause distraction.</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center">
                <strong className="text-[#0A9DC4] block mb-1">Depression</strong>
                <span className="text-sm text-slate-700">Causes poor concentration and low motivation.</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center">
                <strong className="text-[#0A9DC4] block mb-1">Thyroid Issues</strong>
                <span className="text-sm text-slate-700">Both hyper- and hypothyroidism mimic ADHD.</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center">
                <strong className="text-[#0A9DC4] block mb-1">Vision/Hearing</strong>
                <span className="text-sm text-slate-700">Sensory issues cause apparent inattention.</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
              Common Co-occurring Conditions
            </h3>
            <p className="text-slate-700 text-center mb-8 max-w-3xl mx-auto">
              ADHD rarely travels alone. About two-thirds of individuals with ADHD have at least one other condition.<sup>1</sup>
            </p>
            
            <div className="flex justify-center mb-10">
              <div className="w-full max-w-lg rounded-xl overflow-hidden flex justify-center items-center shadow-md border border-slate-200">
                <ADHDComorbidities />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#ffd166]">
                <div className="font-bold text-[#0c264d] mb-1">Oppositional Defiant (ODD)</div>
                <div className="text-sm text-slate-700">Occurs in ~40% of children with ADHD.<sup>1</sup> Characterized by defiance and irritability.</div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#ffd166]">
                <div className="font-bold text-[#0c264d] mb-1">Anxiety Disorders</div>
                <div className="text-sm text-slate-700">Occurs in ~30% of individuals.<sup>1</sup> Excessive worry, nervousness, or phobias.</div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#ffd166]">
                <div className="font-bold text-[#0c264d] mb-1">Learning Disabilities</div>
                <div className="text-sm text-slate-700">Occurs in ~30-50%.<sup>2</sup> Includes dyslexia, dyscalculia, or dysgraphia.</div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#ffd166]">
                <div className="font-bold text-[#0c264d] mb-1">Autism Spectrum (ASD)</div>
                <div className="text-sm text-slate-700">Significant overlap. Many individuals (AuDHD) meet criteria for both conditions.</div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#ffd166] md:col-span-2 lg:col-span-1">
                <div className="font-bold text-[#0c264d] mb-1">Mood Disorders</div>
                <div className="text-sm text-slate-700">Depression and bipolar disorder co-occur more frequently with ADHD.<sup>1</sup></div>
              </div>
            </div>

            <div className="flex justify-end my-8 clear-both">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
              >
                <span className="text-lg">←</span>
                All About ADHD
              </button>
            </div>

            {/* ===== REFERENCES SECTION ===== */}
            <div className="clear-both mt-16 font-spartan">
              <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
              
              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
                  Cited Studies & Statistics
                </h4>
                <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
                  <p>1. Faraone, S. V., et al. (2021). The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder. <i>Neuroscience & Biobehavioral Reviews</i>.</p>
                  <p>2. Reale, L., et al. (2017). Comorbidity prevalence and treatment outcome in children and adolescents with ADHD. <i>European Child & Adolescent Psychiatry</i>.</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
                  Background Sources
                </h4>
                <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                  <li>Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i> (4th ed.). Guilford Press.</li>
                  <li>Brown, T. E. (2013). <i>A New Understanding of ADHD in Children and Adults: Executive Function Impairments</i>. Routledge.</li>
                  <li>National Institute of Mental Health. (2023). Attention-Deficit/Hyperactivity Disorder.</li>
                </ul>
              </div>
            </div>

          </div>
        </TabsContent>

        {/* =========================================
            TAB 6: AFTER DIAGNOSIS
            ========================================= */}
        <TabsContent value="after" className="animate-fadeIn">
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">What Comes After Diagnosis?</h2>
            
            <ImageWithFallback 
              src="/images/adhd/adhd-after-dx-treatment-roadmap.webp"
              alt="After ADHD diagnosis - next steps and planning"
              className="w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-10 shadow-sm"
            />

            <p className="mb-8 text-slate-700 text-center max-w-3xl mx-auto">
              Receiving an ADHD diagnosis is just the first step. The post-diagnosis period involves 
              understanding what the diagnosis means for you, developing a treatment plan, and building a support 
              system.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0c264d]">
                <h3 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center gap-2">
                  <span className="bg-[#0c264d] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                  Education & Acceptance
                </h3>
                <ul className="text-sm space-y-3 text-slate-700">
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> Learn about ADHD neurobiology.</li>
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> Identify your specific strengths and challenges.</li>
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> Process emotional reactions (relief, grief, anger).</li>
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> Connect with ADHD communities for support.</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#2abcd4]">
                <h3 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center gap-2">
                  <span className="bg-[#2abcd4] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                  Treatment Planning
                </h3>
                <ul className="text-sm space-y-3 text-slate-700">
                  <li className="flex gap-2"><span className="text-[#2abcd4] font-bold">•</span> Discuss medication options with your provider.</li>
                  <li className="flex gap-2"><span className="text-[#2abcd4] font-bold">•</span> Consider therapy (CBT, coaching) for skill-building.</li>
                  <li className="flex gap-2"><span className="text-[#2abcd4] font-bold">•</span> Address lifestyle factors (sleep, exercise).</li>
                  <li className="flex gap-2"><span className="text-[#2abcd4] font-bold">•</span> Treat co-occurring conditions if present.</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#ffd166]">
                <h3 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center gap-2">
                  <span className="bg-[#ffd166] text-[#0c264d] w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                  Accommodations
                </h3>
                <ul className="text-sm space-y-3 text-slate-700">
                  <li className="flex gap-2"><span className="text-[#ffd166] font-bold text-lg leading-none">•</span> <strong>School:</strong> Request IEP or 504 Plan.</li>
                  <li className="flex gap-2"><span className="text-[#ffd166] font-bold text-lg leading-none">•</span> <strong>College:</strong> Register with Disability Services.</li>
                  <li className="flex gap-2"><span className="text-[#ffd166] font-bold text-lg leading-none">•</span> <strong>Work:</strong> Identify helpful modifications.</li>
                  <li className="flex gap-2"><span className="text-[#ffd166] font-bold text-lg leading-none">•</span> <strong>Home:</strong> Organize for executive function.</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#0c264d]">
                <h3 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center gap-2">
                  <span className="bg-[#0c264d] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                  Skill Building
                </h3>
                <ul className="text-sm space-y-3 text-slate-700">
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> Develop systems that work for YOUR brain.</li>
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> Learn time management (timers, visual planners).</li>
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> Practice emotional regulation techniques.</li>
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> Build lifelong self-advocacy skills.</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-end my-8 clear-both">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
              >
                <span className="text-lg">←</span>
                All About ADHD
              </button>
            </div>

            {/* ===== REFERENCES SECTION ===== */}
            <div className="clear-both mt-16 font-spartan">
              <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
              <div>
                <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
                  Background Sources
                </h4>
                <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                  <li>Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i> (4th ed.). Guilford Press.</li>
                  <li>Ramsay, J. R., & Rostain, A. L. (2015). <i>The Adult ADHD Tool Kit: Using CBT to Facilitate Coping Inside and Out</i>. Routledge.</li>
                </ul>
              </div>
            </div>

          </div>
        </TabsContent>

        {/* =========================================
            TAB 7: RECENT RESEARCH
            ========================================= */}
        <TabsContent value="research" className="animate-fadeIn">
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">Recent Research in Diagnosis</h2>
            
            <p className="mb-10 text-slate-700 text-center max-w-3xl mx-auto">
              The field of ADHD research is rapidly evolving. Here are some key recent findings shaping the future of diagnosis:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#2abcd4] flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#f0f9ff] flex items-center justify-center shadow-sm border border-[#2abcd4] border-opacity-20 mb-4">
                  <svg className="w-7 h-7 text-[#2abcd4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </div>
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Objective Markers</h3>
                <p className="text-sm text-slate-700 flex-grow">
                  Researchers are exploring eye-tracking, actigraphy (movement), and EEG patterns to supplement diagnosis.<sup>1</sup> While not ready for standalone use, they show high promise for improving diagnostic accuracy.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#2abcd4] flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#f0f9ff] flex items-center justify-center shadow-sm border border-[#2abcd4] border-opacity-20 mb-4">
                  <svg className="w-7 h-7 text-[#2abcd4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Machine Learning (AI)</h3>
                <p className="text-sm text-slate-700 flex-grow">
                  Studies are investigating how artificial intelligence can analyze patterns in behavioral data, neuroimaging, and genetics to identify specific ADHD subtypes and predict treatment responses.<sup>1</sup>
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#2abcd4] flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#f0f9ff] flex items-center justify-center shadow-sm border border-[#2abcd4] border-opacity-20 mb-4">
                  <svg className="w-7 h-7 text-[#2abcd4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adult-Onset Debate</h3>
                <p className="text-sm text-slate-700 flex-grow">
                  Longitudinal studies have sparked debate about "adult-onset" ADHD. While some argue it emerges later, the consensus remains that it is a childhood neurodevelopmental condition that was simply missed or sub-threshold.<sup>2</sup>
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#2abcd4] flex flex-col items-center text-center">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#f0f9ff] flex items-center justify-center shadow-sm border border-[#2abcd4] border-opacity-20 mb-4">
                  <svg className="w-7 h-7 text-[#2abcd4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                </div>
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Sluggish Cognitive Tempo</h3>
                <p className="text-sm text-slate-700 flex-grow">
                  Research continues into SCT (Cognitive Disengagement Syndrome), characterized by daydreaming and slow processing.<sup>3</sup> It is considered distinct from but related to ADHD Inattentive, though not an official DSM diagnosis yet.
                </p>
              </div>
            </div>

            <div className="flex justify-end my-8 clear-both">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
              >
                <span className="text-lg">←</span>
                All About ADHD
              </button>
            </div>

            {/* ===== REFERENCES SECTION ===== */}
            <div className="clear-both mt-16 font-spartan">
              <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
              
              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
                  Cited Studies & Statistics
                </h4>
                <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
                  <p>1. Chen, J., et al. (2025). Artificial intelligence in ADHD assessment: a comprehensive review of research progress from early screening to precise differential diagnosis. <i>Frontiers in Artificial Intelligence</i>.</p>
                  <p>2. Faraone, S. V., & Biederman, J. (2016). Can Attention-Deficit/Hyperactivity Disorder Onset Occur in Adulthood? <i>JAMA Psychiatry</i>.</p>
                  <p>3. Becker, S. P., et al. (2023). Cognitive Disengagement Syndrome (Sluggish Cognitive Tempo). <i>Journal of Child Psychology and Psychiatry</i>.</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
                  Background Sources
                </h4>
                <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                  <li>Faraone, S. V., et al. (2015). Attention-deficit/hyperactivity disorder. <i>Nature Reviews Disease Primers</i>.</li>
                  <li>Luo, Y., et al. (2019). A Review of Heterogeneity in Attention Deficit/Hyperactivity Disorder (ADHD). <i>Frontiers in Human Neuroscience</i>.</li>
                  <li>Posner, J., Polanczyk, G. V., & Sonuga-Barke, E. (2020). Attention-deficit hyperactivity disorder. <i>The Lancet</i>.</li>
                </ul>
              </div>
            </div>

          </div>
        </TabsContent>

        {/* =========================================
            TAB 8: AUDHD
            ========================================= */}
        <TabsContent value="audhd" className="animate-fadeIn">
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">What is AuDHD?</h2>

            <div className="text-center w-full mb-10"> 
              <div className="mx-auto w-full max-w-lg bg-white p-3 rounded-2xl border-2 border-[#2abcd4] shadow-xl"> 
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  poster="/images/adhd/adhd-audhd-bolt-gold-infinity.webp"
                  className="w-full h-auto rounded-xl object-contain"
                  aria-label="lightning with gold infinity in it symbolizing autism and ADHD combined or AuDHD"
                >
                  <source src="/images/adhd/adhd-audhd-bolt-gold-infinity.mp4" type="video/mp4" />
                </video>
              </div> 
            </div>

            <p className="mb-8 text-slate-700 text-center max-w-3xl mx-auto">
              When autism and ADHD co-occur, they don't simply exist side-by-side—they interact in complex ways 
              that create a unique neurodevelopmental profile.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 border-t-4 border-[#0c264d]">
                <h4 className="text-[#0c264d] font-bold text-lg mb-4">Overlapping Traits</h4>
                <ul className="text-sm space-y-3 text-slate-700">
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> Executive function challenges</li>
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> Emotional regulation difficulties</li>
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> Sensory sensitivities</li>
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> Social difficulties</li>
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> Sleep problems</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 border-t-4 border-[#ffd166]">
                <h4 className="text-[#0c264d] font-bold text-lg mb-4">Compounding Effects</h4>
                <ul className="text-sm space-y-3 text-slate-700">
                  <li className="flex gap-2"><span className="text-[#ffd166] font-bold text-lg leading-none">•</span> Greater functional impairment than either alone</li>
                  <li className="flex gap-2"><span className="text-[#ffd166] font-bold text-lg leading-none">•</span> More severe executive dysfunction</li>
                  <li className="flex gap-2"><span className="text-[#ffd166] font-bold text-lg leading-none">•</span> Increased anxiety and depression</li>
                  <li className="flex gap-2"><span className="text-[#ffd166] font-bold text-lg leading-none">•</span> More complex support needs</li>
                </ul>
              </div>
            </div>

            <div className="mx-auto w-64 mb-10 rounded-xl overflow-hidden shadow-sm"> 
              <ImageWithFallback 
                src="/images/adhd/adhd-audhd-opposing-forces.webp" 
                alt="abstract art showing a gap in the swirly design for oppsoing forces of AuDHD" 
              /> 
            </div>

            <h3 className="text-2xl font-bold mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
              Shared and Sole Symptoms
            </h3>
            
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 mb-8 max-w-4xl mx-auto shadow-sm">
              <p className="text-sm text-center text-slate-700">
                <strong>Important:</strong> Individuals with AuDHD experience traits from <strong>all three columns</strong>. 
                Since there is no DSM-5-TR diagnosis for combined AuDHD, there isn't a quantifiable metric for "how many" 
                from each are required. They are diagnosed independently. If both are diagnosed, it makes sense to identify as AuDHD.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white md:bg-[#ffd166] md:bg-opacity-30 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 md:border-t-0 md:border-2 border-[#ffd166]">
                <h4 className="text-[#0c264d] font-bold text-center mb-4 text-lg">ADHD Only</h4>
                <ul className="text-sm space-y-3 text-slate-700 md:text-[#0c264d]">
                  <li className="flex gap-2"><span className="font-bold">•</span> Hyperactivity or restlessness</li>
                  <li className="flex gap-2"><span className="font-bold">•</span> Impulsivity or risk-taking</li>
                  <li className="flex gap-2"><span className="font-bold">•</span> Difficulty sustaining attention</li>
                  <li className="flex gap-2"><span className="font-bold">•</span> Difficulty with time management</li>
                  <li className="flex gap-2"><span className="font-bold">•</span> Interrupting/talking excessively</li>
                  <li className="flex gap-2"><span className="font-bold">•</span> Hyperfocus on stimulating activities</li>
                </ul>
              </div>

              <div className="bg-[#0c264d] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 text-white border-2 border-[#0c264d]">
                <h4 className="font-bold text-center mb-4 text-lg">AuDHD (Both)</h4>
                <ul className="text-sm space-y-3">
                  <li className="flex gap-2"><span className="text-[#2abcd4] font-bold">•</span> Executive dysfunction</li>
                  <li className="flex gap-2"><span className="text-[#2abcd4] font-bold">•</span> Sensory processing differences</li>
                  <li className="flex gap-2"><span className="text-[#2abcd4] font-bold">•</span> Emotional regulation challenges</li>
                  <li className="flex gap-2"><span className="text-[#2abcd4] font-bold">•</span> Social difficulties</li>
                  <li className="flex gap-2"><span className="text-[#2abcd4] font-bold">•</span> Struggles with transitions</li>
                  <li className="flex gap-2"><span className="text-[#2abcd4] font-bold">•</span> Sleep issues</li>
                  <li className="flex gap-2"><span className="text-[#2abcd4] font-bold">•</span> Rejection sensitivity</li>
                </ul>
              </div>

              <div className="bg-white md:bg-[#2abcd4] md:bg-opacity-20 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 md:border-t-0 md:border-2 border-[#2abcd4]">
                <h4 className="text-[#0c264d] font-bold text-center mb-4 text-lg">Autism Only</h4>
                <ul className="text-sm space-y-3 text-slate-700 md:text-[#0c264d]">
                  <li className="flex gap-2"><span className="font-bold">•</span> Deep, narrow special interests</li>
                  <li className="flex gap-2"><span className="font-bold">•</span> Stimming for self-regulation</li>
                  <li className="flex gap-2"><span className="font-bold">•</span> Need for sameness/routines</li>
                  <li className="flex gap-2"><span className="font-bold">•</span> Literal thinking</li>
                  <li className="flex gap-2"><span className="font-bold">•</span> Difficulty reading social cues</li>
                  <li className="flex gap-2"><span className="font-bold">•</span> Monotropic attention</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
              The AuDHD "Paradox"
            </h3>
     
            <div className="mx-auto w-64 mb-8 rounded-xl overflow-hidden shadow-sm"> 
              <ImageWithFallback 
                src="/images/adhd/adhd-audhd-split-face.webp" 
                alt="Split face illustration representing the internal tug-of-war of AuDHD" 
              /> 
            </div>
             
            <p className="text-slate-700 text-center mb-8">AuDHD can feel like a constant internal tug-of-war:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 border-l-4 border-l-[#0A9DC4]">
                <div className="font-bold text-[#0c264d] mb-2 text-lg">Routine vs. Novelty</div>
                <div className="text-sm text-slate-700">Autism craves predictability and sameness; ADHD craves stimulation and newness. An internal battle where neither need feels met.</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 border-l-4 border-l-[#ffd166]">
                <div className="font-bold text-[#0c264d] mb-2 text-lg">Order vs. Chaos</div>
                <div className="text-sm text-slate-700">Autism wants rigid organization; ADHD struggles to create or maintain it, leading to extreme frustration.</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 border-l-4 border-l-[#ffd166]">
                <div className="font-bold text-[#0c264d] mb-2 text-lg">Social Push-Pull</div>
                <div className="text-sm text-slate-700">ADHD drives impulsive socializing, while autism finds it confusing or exhausting. Creates a cycle of seeking then avoiding connection.</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 border-l-4 border-l-[#0A9DC4]">
                <div className="font-bold text-[#0c264d] mb-2 text-lg">Focus Extremes</div>
                <div className="text-sm text-slate-700">Autism drives intense, sustained focus on special interests; ADHD makes it nearly impossible to sustain attention on anything else.</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
              Diagnostic Considerations
            </h3>
            
            <p className="text-slate-700 text-center mb-8 max-w-3xl mx-auto">
              Identifying both autism and ADHD in the same individual can be diagnostically complex:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="font-bold text-[#0A9DC4] mb-2 text-lg">Symptom Overlap</div>
                <div className="text-sm text-slate-700">Attention difficulties and executive dysfunction appear in both, making it hard to determine which diagnosis explains specific behaviors.</div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="font-bold text-[#0A9DC4] mb-2 text-lg">Masking Effects</div>
                <div className="text-sm text-slate-700">Strict autistic routines might mask ADHD disorganization, or ADHD social impulsivity might mask autistic social withdrawal.</div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="font-bold text-[#0A9DC4] mb-2 text-lg">Sequential Diagnosis</div>
                <div className="text-sm text-slate-700">Often ADHD is diagnosed first in childhood, with autism identified later when support needs aren't fully met by ADHD interventions.</div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="font-bold text-[#0A9DC4] mb-2 text-lg">Assessment Bias</div>
                <div className="text-sm text-slate-700">Some clinicians assume attention difficulties in autistic individuals are just part of autism rather than recognizing co-occurring ADHD.</div>
              </div>
            </div>

            <div className="bg-[#0c264d] text-white p-5 rounded-xl text-center shadow-md mb-12">
              <p className="text-sm md:text-base">
                <strong>Best Practice:</strong> Comprehensive evaluation should systematically assess for both conditions. Studies show that many autistic individuals benefit from ADHD-specific interventions once ADHD is properly identified.<sup>1</sup>
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
              Why Recognizing Both Matters
            </h3>
            
            <ImageWithFallback 
              src="/images/adhd/adhd-audhd-med-edu-symbol.webp" 
              alt="medical type symbol for education and medical support for autism and ADHD" 
              className="w-full max-w-sm mx-auto rounded-lg mb-8 shadow-sm" 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#2abcd4]">
                <div className="font-bold text-[#0c264d] mb-1">Comprehensive Planning</div>
                <div className="text-sm text-slate-700">Addressing only one leaves significant needs unmet.</div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#2abcd4]">
                <div className="font-bold text-[#0c264d] mb-1">Medication Impact</div>
                <div className="text-sm text-slate-700">Stimulants help ADHD but require careful monitoring for autistic sensory sensitivities.</div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#2abcd4]">
                <div className="font-bold text-[#0c264d] mb-1">Educational Supports</div>
                <div className="text-sm text-slate-700">Students need BOTH social/sensory supports AND organizational strategies.</div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 border-t-4 border-[#2abcd4] md:col-span-2 lg:col-span-1">
                <div className="font-bold text-[#0c264d] mb-1">Self-Understanding</div>
                <div className="text-sm text-slate-700">Understanding both aspects builds effective self-advocacy.</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-[#0c264d] font-bold mb-4 text-xl border-b border-gray-200 pb-2">Support Integration</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-[#2abcd4] mb-2">Autism Support:</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Sensory accommodations</li>
                      <li>• Predictability & routine</li>
                      <li>• Direct communication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#ffd166] mb-2">ADHD Support:</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Executive coaching</li>
                      <li>• Organization systems</li>
                      <li>• Focus strategies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-[#0c264d] font-bold mb-4 text-xl border-b border-gray-200 pb-2">Community Recognition</h3>
                <p className="text-sm text-slate-700 mb-3">
                  "AuDHD" is widely embraced within neurodivergent communities because it:
                </p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li><span className="text-[#0c264d] font-bold">•</span> Acknowledges the unique overlap.</li>
                  <li><span className="text-[#0c264d] font-bold">•</span> Provides a distinct identity and community.</li>
                  <li><span className="text-[#0c264d] font-bold">•</span> Validates contradictory internal experiences.</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-end my-8 clear-both">
              <button 
                onClick={() => setCurrentArticle?.('adhd')}
                className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
              >
                <span className="text-lg">←</span>
                All About ADHD
              </button>
            </div>

            {/* ===== REFERENCES SECTION ===== */}
            <div className="clear-both mt-16 font-spartan">
              <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
              
              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
                  Cited Studies & Statistics
                </h4>
                <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
                  <p>1. Joshi, G., et al. (2017). Symptom profile of ADHD in youth with high-functioning autism spectrum disorder. <i>Journal of Attention Disorders</i>.</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
                  Background Sources
                </h4>
                <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                  <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
                  <li>Antshel, K. M., et al. (2016). An update on the comorbidity of ADHD and ASD: A focus on clinical management. <i>Expert Review of Neurotherapeutics</i>.</li>
                  <li>Hollingdale, J., et al. (2023). Understanding comorbid autism and ADHD (AuDHD) in adults. <i>Frontiers in Psychiatry</i>.</li>
                  <li>Leitner, Y. (2014). The co-occurrence of autism and attention deficit hyperactivity disorder in children — what do we know? <i>Frontiers in Human Neuroscience</i>.</li>
                  <li>Rommelse, N. N. J., et al. (2010). Shared heritability of attention-deficit/hyperactivity disorder and autism spectrum disorder. <i>European Child & Adolescent Psychiatry</i>.</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

      </Tabs>
    </article>
  );
}