import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface DiagnosisAgesProps {
  setCurrentArticle?: (article: string) => void;
}

export function DiagnosisAges({ setCurrentArticle }: DiagnosisAgesProps) {
  return (
    <article className="max-w-full w-full">
      
      {/* Header and Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          Dyslexia: Testing & Diagnosing
        </h1>
        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-lg">←</span>
          All About Dyslexia
        </button>
      </div>

      {/* Mobile Back Button */}
      <button 
        onClick={() => setCurrentArticle?.('dyslexia')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-lg">←</span>
        All About Dyslexia
      </button>
      
      <Tabs defaultValue="ages" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger 
            value="overview" 
            onClick={() => setCurrentArticle?.('dyslexia-diagnosis-overview')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Process & Criteria
          </TabsTrigger>
          <TabsTrigger 
            value="evaluation" 
            onClick={() => setCurrentArticle?.('dyslexia-diagnosis-evaluation')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Comprehensive Evaluation
          </TabsTrigger>
          <TabsTrigger 
            value="ages" 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Ages & Next Steps
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ages" className="animate-fadeIn">
          
          {/* Centered Intro Section */}
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Assessment Across Ages
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-diagnosis-ages-TAB-intro.webp"
              alt="Assessment across different age groups"
              className="w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm"
            />
            <p className="mb-10 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              Dyslexia presents differently depending on an individual's stage of development and academic demands. As a result, the focus of a comprehensive evaluation shifts from early phonological skills in childhood to complex comprehension and compensatory strategies in adulthood.
            </p>
          </div>

          {/* Age Groups Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            
            {/* Early Elementary */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#ffd166] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-[#0c264d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-4 text-center">Early Elementary (K-2nd)</h4>
              <ul className="space-y-3 text-sm text-slate-700 w-full">
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Focuses on phonological awareness and early decoding skills.</li>
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Deep assessment of letter-sound knowledge.</li>
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Utilizes early screening measures (like DIBELS or AIMSweb).</li>
              </ul>
            </div>

            {/* Later Elementary */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0c264d] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-[#ffd166]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-4 text-center">Later Elementary (3rd-5th)</h4>
              <ul className="space-y-3 text-sm text-slate-700 w-full">
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Heavy emphasis on reading fluency and comprehension.</li>
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Spelling and written expression assessment.</li>
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Testing with longer reading passages.</li>
              </ul>
            </div>

            {/* Middle and High School */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0A9DC4] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v7m0-7l-9-5m9 5l9-5m-9 5v7m-3-1.5l3 1.5 3-1.5"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-4 text-center">Middle & High School</h4>
              <ul className="space-y-3 text-sm text-slate-700 w-full">
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Checks academic achievement across content areas.</li>
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Analyzes reading rate and reading efficiency.</li>
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Complex text comprehension, note-taking, and study skills.</li>
              </ul>
            </div>

            {/* Adults */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#2abcd4] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-4 text-center">Adults</h4>
              <ul className="space-y-3 text-sm text-slate-700 w-full">
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Historical information mapping early reading difficulties.</li>
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Current reading and writing demands in life/career.</li>
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Identifies compensatory strategies and functional impact.</li>
              </ul>
            </div>

          </div>

          {/* School vs Private Evaluations */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 clear-both text-center">School-Based vs. Private Evaluation</h3>
          
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-diagnosis-ages-TAB-compare.webp"
            alt="Comparing school and private evaluations"
            className="block mx-auto w-64 max-w-2xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            {/* School Evaluations */}
            <div className="bg-gray-300 border-t-4 border-[#0A9DC4] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">School Evaluations</h4>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-white p-4 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Free under IDEA:</strong> Parents can formally request an evaluation at no cost through the public school system.
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Focus on Eligibility:</strong> Determines if a student statistically qualifies for special education services under specific state laws.
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Educational Impact:</strong> Emphasizes exactly how difficulties affect school performance rather than providing a clinical medical diagnosis.
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">IEP or 504 Plan:</strong> The evaluation directly results in an educational plan if the student is found eligible.
                </div>
              </div>
            </div>

            {/* Private Evaluations */}
            <div className="bg-gray-300 border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Private Evaluations</h4>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-white p-4 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Comprehensive Assessment:</strong> Clinical and neuropsychological testing is often more detailed and medically extensive.
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Broader Recommendations:</strong> Includes explicit guidance for private tutoring, therapies, and accommodations extending beyond school.
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Independent Second Opinion:</strong> Parents often seek private testing if they disagree with the school’s evaluation results.
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Out-of-Pocket Cost:</strong> Usually an out-of-pocket expense, typically ranging from $1,500 to $4,000 depending on comprehensiveness.
                </div>
              </div>
            </div>

          </div>

          {/* After Diagnosis Section (Meatier Split-Cards) */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">After Diagnosis</h3>
          
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-diagnosis-ages-TAB-after.webp"
            alt="Next steps after diagnosis"
            className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
          />

          <div className="flex flex-col gap-6 mb-10">
            
            {/* Split Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row overflow-hidden">
              <div className="bg-[#0c264d] p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                <svg className="w-10 h-10 text-[#ffd166] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <h4 className="font-bold text-white text-xl">Understanding the Report</h4>
                <p className="text-sm text-slate-300 mt-2">Decoding clinical terminology into actionable insights.</p>
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">1.</span>
                    <div><strong className="text-[#0c264d]">Scores & Percentiles:</strong> Review these to understand exactly where the individual stands relative to same-age peers.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">2.</span>
                    <div><strong className="text-[#0c264d]">Cognitive Profile:</strong> Identify the unique pattern of learning, highlighting natural strengths to leverage alongside areas needing support.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">3.</span>
                    <div><strong className="text-[#0c264d]">Specific Reading Deficits:</strong> Break down the exact hurdles, distinguishing structural decoding issues from fluency or comprehension struggles.</div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Split Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row overflow-hidden">
              <div className="bg-[#0A9DC4] p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                <svg className="w-10 h-10 text-white mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                <h4 className="font-bold text-white text-xl">Targeted Recommendations</h4>
                <p className="text-sm text-[#0c264d] mt-2 font-medium">Securing the right tools for academic success.</p>
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">•</span>
                    <div><strong className="text-[#0c264d]">Structured Intervention:</strong> Secure explicit, multisensory literacy instruction tailored precisely to the diagnostic profile.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">•</span>
                    <div><strong className="text-[#0c264d]">Immediate Accommodations:</strong> Implement classroom tools like text-to-speech software, audiobooks, or extended testing time.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">•</span>
                    <div><strong className="text-[#0c264d]">Educational Planning:</strong> Use the clinical report as the foundational evidence to legally request an IEP or 504 Plan from the school district.</div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Split Card 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row overflow-hidden">
              <div className="bg-[#2abcd4] p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                <svg className="w-10 h-10 text-white mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <h4 className="font-bold text-[#0c264d] text-xl">Actionable Next Steps</h4>
                <p className="text-sm text-[#0c264d] mt-2 font-medium">Building a support network moving forward.</p>
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">→</span>
                    <div><strong className="text-[#0c264d]">Share Results:</strong> Formally submit the diagnostic report to the school's Special Education department to trigger accommodation meetings.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">→</span>
                    <div><strong className="text-[#0c264d]">Find a Specialist:</strong> Interview and secure a certified dyslexia practitioner or specialized tutor outside of school hours if necessary.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">→</span>
                    <div><strong className="text-[#0c264d]">Reframe the Narrative:</strong> Educate the family and the individual that this is a mechanical learning difference, not a deficit in intelligence.</div>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div className="flex justify-end my-8 clear-both">
            <button 
              onClick={() => setCurrentArticle?.('dyslexia')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
            >
              <span className="text-lg">←</span>
              All About Dyslexia
            </button>
          </div>

          {/* REFERENCES SECTION */}
          <div className="clear-both"></div>
          
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* Empty Cited Studies Section left as a structural placeholder per standard */}
            <div className="mb-6">

            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b-2 border-[#2abcd4] pb-2">
                Background Sources
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</p>
                <p>Berninger, V. W., & Abbott, R. D. (2010). Listening comprehension, oral expression, reading comprehension, and written expression: Related yet unique language systems in grades 1, 3, 5, and 7. <em>Journal of Educational Psychology</em>.</p>
                <p>Bruck, M. (1990). Word-recognition skills of adults with childhood diagnoses of dyslexia. <em>Developmental Psychology</em>.</p>
                <p>Compton, D. L., et al. (2006). Selecting at-risk readers in first grade for early intervention: A two-year longitudinal study of reading disability. <em>Journal of Educational Psychology</em>.</p>
                <p>Edyburn, D. L. (2013). Critical issues in advancing the special education technology evidence base. <em>Exceptional Children</em>.</p>
                <p>Flanagan, D. P., et al. (2011). <em>Essentials of specific learning disability identification</em>. John Wiley & Sons.</p>
                <p>Fuchs, L. S., & Fuchs, D. (2006). Introduction to response to intervention: What, why, and how valid is it? <em>Reading Research Quarterly</em>.</p>
                <p>Good, R. H., & Kaminski, R. A. (Eds.). (2002). <em>Dynamic Indicators of Basic Early Literacy Skills</em> (6th ed.). Institute for the Development of Educational Achievement.</p>
                <p>Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
                <p>International Dyslexia Association. (2017). <i>Dyslexia in the Classroom: What Every Teacher Needs to Know</i>.</p>
                <p>International Dyslexia Association. (2021). <em>Resources for families and individuals</em>.</p>
                <p>McNulty, M. A. (2003). Dyslexia and the life course.<em>Journal of Learning Disabilities</em>.</p>
                <p>Rock, M. L. (2000). Parents as equal partners: Balancing the scales in IEP development.<em>Teaching Exceptional Children</em>.</p>
                <p>Schultz, E. K., & Stephens, T. L. (2015). Core concepts for implementing response to intervention. In S. Jimerson, M. Burns, & A. VanDerHeyden (Eds.), <em>Handbook of response to intervention</em>. Springer.</p>
                <p>Swanson, H. L. (1999). Reading comprehension and working memory in learning-disabled readers: Is the phonological loop more important than the executive system? <em>Journal of Experimental Child Psychology</em>.</p>
                <p>Torgesen, J. K., et al. (2001). Intensive remedial instruction for children with severe reading disabilities: Results of two instructional approaches. <em>Journal of Learning Disabilities</em>.</p>
                <p>Wolf, M., & Katzir-Cohen, T. (2001). Reading fluency and its intervention. <em>Scientific Studies of Reading</em>.</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}