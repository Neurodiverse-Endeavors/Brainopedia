import React from 'react';
import { Scale, AlertCircle, CheckCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface DiagnosisOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function DiagnosisOverview({ setCurrentArticle }: DiagnosisOverviewProps) {
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

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger 
            value="overview" 
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
            onClick={() => setCurrentArticle?.('dyslexia-diagnosis-ages')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Ages & Next Steps
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="animate-fadeIn">
          
          {/* Centered Intro Section */}
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Testing & Diagnosis Overview
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-diagnosis-overview-TAB-intro.webp"
              alt="Overview of dyslexia diagnosis process"
              className="w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm"
            />
            <p className="mb-8 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              Diagnosing dyslexia requires comprehensive evaluation by qualified professionals using multiple assessment methods. Early identification enables timely intervention, which significantly improves reading outcomes. There is no single test for dyslexia—diagnosis involves gathering information from various sources to understand an individual's reading profile.
            </p>
          </div>

          {/* Who Can Diagnose Cards */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 clear-both">Who Can Diagnose Dyslexia?</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] mb-2">Educational Psychologists</h4>
              <p className="text-sm text-slate-700 flex-grow">Specialize in learning and academic assessment.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] mb-2">School Psychologists</h4>
              <p className="text-sm text-slate-700 flex-grow">Conduct evaluations within school settings.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] mb-2">Clinical Psychologists</h4>
              <p className="text-sm text-slate-700 flex-grow">Licensed psychologists with expertise in learning disorders.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] mb-2">Neuropsychologists</h4>
              <p className="text-sm text-slate-700 flex-grow">Assess brain-behavior relationships.</p>
            </div>

            <div className="bg-white p-5 rounded-xl border-t-4 border-[#0c264d] shadow-sm flex flex-col justify-center items-center">
               <ImageWithFallback 
                 src="/images/dyslexia/dyslexia-diagnosis-overview-TAB-professionals.webp"
                 alt="Diagnostic professionals"
                 className="w-full h-auto rounded-md"
               />
            </div>
            
            <div className="bg-white p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] mb-2">Learning Specialists</h4>
              <p className="text-sm text-slate-700 flex-grow">Professionals trained specifically in dyslexia assessment.</p>
            </div>
  
          </div>

          {/* Criteria & Patterns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            {/* Criteria Card */}
            <div className="bg-gray-300 border-t-4 border-[#0A9DC4] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Diagnostic Criteria</h4>
              <ImageWithFallback 
                src="/images/dyslexia/dyslexia-diagnosis-overview-TAB-criteria.webp"
                alt="DSM-5 Diagnostic Criteria"
                className="w-full h-auto rounded-md border border-gray-200 mb-5 bg-white"
              />
              <p className="text-sm text-slate-800 mb-4 font-medium text-center">
                DSM-5 criteria for Specific Learning Disorder with impairment in reading:
              </p>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] mr-2">•</strong> Persistent difficulties learning and using academic skills for at least 6 months despite targeted intervention.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] mr-2">•</strong> Academic skills substantially and measurably below expected for age - though this was later changed.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] mr-2">•</strong> Learning difficulties begin during formal school years.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] mr-2">•</strong> Not better explained by intellectual disability, uncorrected vision/hearing, or lack of instruction.
                </div>
              </div>
            </div>

            {/* Pattern Recognition Card */}
            <div className="bg-gray-300 border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Pattern Recognition</h4>
              <ImageWithFallback 
                src="/images/dyslexia/dyslexia-diagnosis-overview-TAB-patterns.webp"
                alt="Pattern Recognition in Dyslexia"
                className="w-full h-auto rounded-md border border-gray-200 mb-5 bg-white"
              />
              <p className="text-sm text-slate-800 mb-4 font-medium text-center">
                Evaluators look for specific profiles and cognitive patterns:
              </p>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] mr-2">•</strong> Discrepancy between listening comprehension and reading comprehension.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] mr-2">•</strong> Evident phonological processing and decoding deficits.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] mr-2">•</strong> Slow, effortful reading despite adequate educational instruction.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] mr-2">•</strong> Unexpected reading difficulty relative to general cognitive abilities.
                </div>
              </div>
            </div>

          </div>

          {/* DSM-5 & THE IQ DISCREPANCY MODEL SECTION */}
          <div className="clear-both mt-12 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
              DSM-5 & The Shift Away From the "IQ Gap"
            </h3>
            
            <p className="mb-8 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              In the DSM-5, dyslexia is formally classified under the overarching category of a <strong>Specific Learning Disorder with impairment in reading</strong> rather than as a standalone diagnosis. However, clinicians can still use "dyslexia" as an alternative descriptive term. One of the most critical changes in the DSM-5 was eliminating the requirement for an "IQ gap."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 items-stretch">
              
              {/* What Was the IQ Gap? */}
              <div className="bg-white p-6 rounded-xl border-l-4 border-[#8b5cf6] shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-[#0c264d] text-xl mb-3 flex items-center gap-2">
                    <Scale className="w-6 h-6 text-[#8b5cf6] flex-shrink-0" />
                    The Historical "IQ Gap" Model
                  </h4>
                  <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                    Historically known as the <em>cognitive discrepancy model</em>, this traditional formula required a severe statistical gap (typically 1.5 to 2 standard deviations, or 15–22 points) between an individual's overall intelligence (IQ score) and their academic achievement scores.
                  </p>
                  
                  <div className="bg-[#8b5cf6]/10 p-4 rounded-lg border border-[#8b5cf6]/20 mb-4 text-center">
                    <span className="text-xs uppercase tracking-wider text-[#8b5cf6] font-bold block mb-1">Discrepancy Formula</span>
                    <div className="text-sm font-semibold text-[#0c264d] py-1">
                      Discrepancy = Full Scale IQ Score - Standardized Achievement Score
                    </div>
                  </div>

                  <ul className="text-sm text-slate-700 space-y-2 mb-4">
                    <li className="flex gap-2">
                      <span className="text-[#8b5cf6] font-bold">•</span>
                      <div><strong>Expected Reading Ability:</strong> Predicted directly by standardized intelligence tests like the WISC.</div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#8b5cf6] font-bold">•</span>
                      <div><strong>Actual Reading Performance:</strong> Measured using academic achievement tests like the Woodcock-Johnson.</div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Why DSM-5 Eliminated It */}
              <div className="bg-white p-6 rounded-xl border-l-4 border-[#ff6b6b] shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-[#0c264d] text-xl mb-3 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-[#ff6b6b] flex-shrink-0" />
                    Why the Discrepancy Model Was Removed
                  </h4>
                  <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                    Decades of educational research revealed fundamental flaws in requiring an IQ-achievement gap:
                  </p>
                  <div className="bg-[#ff6b6b]/10 p-4 rounded-lg border border-[#ff6b6b]/20 mb-4">
                    <ul className="text-sm text-slate-700 space-y-3">
                      <li className="flex gap-2">
                        <span className="text-[#ff6b6b] font-bold">•</span>
                        <div><strong>The "Wait to Fail" Trap:</strong> Children with dyslexia rarely show a massive gap in early childhood. Clinicians had to wait until 3rd or 4th grade for academic deficits to widen, missing critical early intervention windows.</div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#ff6b6b] font-bold">•</span>
                        <div><strong>Flawed Neurological Logic:</strong> Research proved the brain mechanisms causing reading difficulties are identical regardless of whether a person has a high, average, or below-average IQ score.</div>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#ff6b6b] font-bold">•</span>
                        <div><strong>Socioeconomic & Cultural Inequity:</strong> IQ tests can carry cultural, linguistic, and economic biases, leading to inaccurate predictions of true reading potential.</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Modern Diagnostic Alternative: Response to Intervention (RTI) */}
            <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#10b981] shadow-sm">
              <h4 className="font-bold text-[#0c264d] text-xl mb-3 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-[#10b981] flex-shrink-0" />
                Modern Diagnostic Alternative: Response to Intervention (RTI)
              </h4>
              <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                Instead of searching for a statistical gap, DSM-5 and modern educational systems evaluate reading difficulties based on <strong>low absolute performance</strong> relative to age peers and <strong>lack of progress</strong> following targeted help:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#10b981]/10 p-4 rounded-lg border border-[#10b981]/20">
                  <strong className="text-[#0c264d] text-sm block mb-1">1. Inadequate Response to Intervention:</strong>
                  <p className="text-xs text-slate-700">
                    The individual fails to make expected progress despite receiving targeted, evidence-based reading instruction for at least 6 months.
                  </p>
                </div>
                <div className="bg-[#10b981]/10 p-4 rounded-lg border border-[#10b981]/20">
                  <strong className="text-[#0c264d] text-sm block mb-1">2. Low Absolute Performance:</strong>
                  <p className="text-xs text-slate-700">
                    Academic skills are simply low relative to age-matched peers, regardless of how high or average the individual's IQ score is.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* FAQ Section */}
          <div className="bg-[#0c264d] border-l-4 border-[#ffd166] p-6 mb-10 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-[#ffd166] mb-5 uppercase text-sm tracking-wider">
              Frequently Asked Questions
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-bold text-[#0A9DC4] mb-1">How long does an evaluation take?</p>
                <p className="text-sm text-slate-700">Typically 4-6 hours of testing plus report writing; may be spread across multiple sessions.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-bold text-[#0A9DC4] mb-1">Can dyslexia be diagnosed in kindergarten?</p>
                <p className="text-sm text-slate-700">Risk factors can be identified early, but formal diagnosis usually occurs after reading instruction begins.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-bold text-[#0A9DC4] mb-1">Do adults need a formal diagnosis?</p>
                <p className="text-sm text-slate-700">It is highly helpful for understanding oneself, accessing accommodations at work or school, and receiving appropriate support.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-bold text-[#0A9DC4] mb-1">What if my child doesn't qualify for school services?</p>
                <p className="text-sm text-slate-700">Options include private tutoring, advocating for a 504 Plan (which is less intensive than an IEP), or pursuing a private evaluation.</p>
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
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
                <li>Catts, H. W., et al. (2006). Language deficits in poor comprehenders: A case for the simple view of reading. <i>Journal of Speech, Language, and Hearing Research</i>.</li>
                <li>Fletcher, J. M., et al. (2018). <i>Learning disabilities: From identification to intervention</i> (2nd ed.). Guilford Publications.</li>
                <li>Gerber, P. J. (2012). The impact of learning disabilities on adulthood: A review of the evidenced-based literature for research and practice in adult education. <i>Journal of Learning Disabilities</i>.</li>
                <li>Hale, J. B., & Fiorello, C. A. (2004). <i>School neuropsychology: A practitioner's handbook</i>. Guilford Press.</li>
                <li>International Dyslexia Association. (2017). <i>Dyslexia in the Classroom: What Every Teacher Needs to Know</i>.</li>
                <li>Mather, N., & Wendling, B. J. (2011). <i>Essentials of dyslexia assessment and intervention</i>. John Wiley & Sons.</li>
                <li>National Association of School Psychologists. (2015). <i>Identification of students with specific learning disabilities</i>.</li>
                <li>Odegard, T. N., et al. (2020). Characteristics of students identified with dyslexia within the context of state legislation. <i>Journal of Learning Disabilities</i>.</li>
                <li>Shaywitz, S. E., & Shaywitz, B. A. (2005). Dyslexia (specific reading disability). <i>Biological Psychiatry</i>.</li>
                <li>Snowling, M. J. (2013). Early identification and interventions for dyslexia: A contemporary view. <i>Journal of Research in Special Educational Needs</i>.</li>
                <li>Snowling, M. J., & Hulme, C. (2012). Annual research review: The nature and classification of reading disorders–a commentary on proposals for DSM-5. <i>Journal of Child Psychology and Psychiatry</i>.</li>
                <li>Torgesen, J. K. (2004). Lessons learned from research on interventions for students who have difficulty learning to read. In P. McCardle & V. Chhabra (Eds.), <i>The voice of evidence in reading research</i>. Paul H. Brookes.</li>
                <li>Wagner, R. K., et al. (2020). The prevalence of dyslexia: A new approach to its estimation. <i>Journal of Learning Disabilities</i>.</li>
                <li>Zirkel, P. A. (2013). Is it time for elevating the standard for FAPE under IDEA? <i>Exceptional Children</i>.</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}