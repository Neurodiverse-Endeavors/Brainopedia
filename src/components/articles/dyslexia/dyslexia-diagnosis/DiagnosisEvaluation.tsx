import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface DiagnosisEvaluationProps {
  setCurrentArticle?: (article: string) => void;
}

export function DiagnosisEvaluation({ setCurrentArticle }: DiagnosisEvaluationProps) {
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
      
      <Tabs defaultValue="evaluation" className="w-full">
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

        <TabsContent value="evaluation" className="animate-fadeIn">
          
          {/* Centered Intro Section */}
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Comprehensive Evaluation
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-diagnosis-eval-TAB-intro.webp"
              alt="Comprehensive dyslexia evaluation process"
              className="block mx-auto w-64 max-w-2xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
            />
            <p className="mb-10 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              A comprehensive evaluation is essential to identify the underlying cognitive and academic profile characteristic of dyslexia. This process involves multiple domains of assessment to ensure an accurate diagnosis and targeted recommendations.
            </p>
          </div>

          {/* Diagnostic Domains Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            
            {/* History Card */}
            <div className="bg-white border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Developmental & Educational History</h4>
              <ImageWithFallback 
                src="/images/dyslexia/dyslexia-diagnosis-eval-TAB-history.webp"
                alt="Developmental history assessment"
                className="w-96 h-auto rounded-md border border-gray-200 block mx-auto mb-5"
              />
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Milestones:</strong> Track early language development and speech milestones.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Genetics:</strong> Evaluate family history for reading or learning difficulties.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Academic Context:</strong> Review previous educational experiences, interventions, and the impact of current reading challenges.
                </div>
              </div>
            </div>

            {/* Cognitive Assessment Card */}
            <div className="bg-white border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Cognitive Assessment</h4>
              <ImageWithFallback 
                src="/images/dyslexia/dyslexia-diagnosis-eval-TAB-cognitive.webp"
                alt="Cognitive assessment tools"
                className="w-96 h-auto rounded-md border border-gray-200 block mx-auto mb-5"
              />
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Intelligence Testing:</strong> Utilize tools like WISC-V, WAIS-IV, or Stanford-Binet to assess overall cognitive ability.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Memory & Speed:</strong> Map out working memory, long-term memory retrieval, and the general rate of cognitive processing.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Reasoning Abilities:</strong> Measure both verbal and nonverbal reasoning skills to identify relative strengths.
                </div>
              </div>
            </div>

            {/* Reading Achievement Card */}
            <div className="bg-white border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Reading & Academic Achievement</h4>
              <ImageWithFallback 
                src="/images/dyslexia/dyslexia-diagnosis-eval-TAB-reading.webp"
                alt="Reading achievement testing"
                className="w-96 h-auto rounded-md border border-gray-200 block mx-auto mb-5"
              />
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Decoding:</strong> Test real word reading accuracy (e.g., WIAT-III, KTEA-3) alongside pseudoword (nonsense word) decoding.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Fluency & Comprehension:</strong> Measure the speed and accuracy of reading connected text, and how well written passages are understood.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Written Expression:</strong> Evaluate the quality, fluency, and mechanical spelling of written text.
                </div>
              </div>
            </div>

            {/* Phonological Processing Card */}
            <div className="bg-white border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Phonological Processing</h4>
              <ImageWithFallback 
                src="/images/dyslexia/dyslexia-diagnosis-eval-TAB-phonological.webp"
                alt="Phonological processing evaluation"
                className="w-96 h-auto rounded-md border border-gray-200 block mx-auto mb-5"
              />
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Phonological Awareness:</strong> Use assessments like the CTOPP-2 or PAT-2 to measure sound manipulation skills.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Phonological Memory:</strong> Test the individual's ability to temporarily hold and process sound information in their memory.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Rapid Automatized Naming (RAN):</strong> Assess the speed of retrieving familiar verbal information (like letters, numbers, or colors).
                </div>
              </div>
            </div>

            {/* Oral Language Card (Full Width Span) */}
            <div className="bg-white border-t-4 border-[#0c264d] rounded-xl p-6 shadow-sm flex flex-col md:col-span-2">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Oral Language</h4>
              <ImageWithFallback 
                src="/images/dyslexia/dyslexia-diagnosis-eval-TAB-oral.webp"
                alt="Oral language assessment"
                className="w-96 h-auto rounded-md border border-gray-200 block mx-auto mb-6"
              />
              <div className="flex flex-col gap-3 flex-grow w-full">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Vocabulary:</strong> Evaluate both receptive (understanding) and expressive (speaking) vocabulary capabilities.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Listening Comprehension:</strong> Test the overall capacity for understanding and processing spoken language in real-time.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Morphological Awareness:</strong> Assess the individual's understanding of word structures, roots, prefixes, and suffixes.
                </div>
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
                <li>Ehri, L. C. (2000). Learning to read and learning to spell: Two sides of a coin. <i>Topics in Language Disorders</i>.</li>
                <li>Fletcher, J. M., et al. (2018). <i>Learning disabilities: From identification to intervention</i> (2nd ed.). Guilford Publications.</li>
                <li>Fuchs, L. S., et al. (2001). Oral reading fluency as an indicator of reading competence: A theoretical, empirical, and historical analysis. <i>Scientific Studies of Reading</i>.</li>
                <li>International Dyslexia Association. (2017). <i>Dyslexia in the Classroom: What Every Teacher Needs to Know</i>.</li>
                <li>Norton, E. S., & Wolf, M. (2012). Rapid automatized naming (RAN) and reading fluency: Implications for understanding and treatment of reading disabilities. <i>Annual Review of Psychology</i>.</li>
                <li>Pearson Education. (2020). <i>Wechsler Individual Achievement Test–Fourth Edition</i>.</li>
                <li>Perfetti, C. (2007). Reading ability: Lexical quality to comprehension. <i>Scientific Studies of Reading</i>.</li>
                <li>Rack, J. P., et al. (1992). The nonword reading deficit in developmental dyslexia: A review. <i>Reading Research Quarterly</i>.</li>
                <li>Scarborough, H. S. (1998). Early identification of children at risk for reading disabilities. In B. K. Shapiro, P. J. Accardo, & A. J. Capute (Eds.), <i>Specific reading disability: A view of the spectrum</i>. York Press.</li>
                <li>Shaywitz, S. E., et al. (2008). The education of dyslexic children from childhood to young adulthood. <i>Annual Review of Psychology</i>.</li>
                <li>Swanson, H. L., & Berninger, V. (1995). The role of working memory in skilled and less skilled readers' comprehension. <i>Intelligence</i>.</li>
                <li>Wagner, R. K., et al. (2013). <i>Comprehensive Test of Phonological Processing–Second Edition</i>. Pro-Ed.</li>
                <li>Wechsler, D. (2014). <i>Wechsler Intelligence Scale for Children–Fifth Edition</i>. Pearson.</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}