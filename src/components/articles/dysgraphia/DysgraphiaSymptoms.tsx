import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DysgraphiaSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DysgraphiaSymptoms({ setCurrentArticle, initialTab }: DysgraphiaSymptomsProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'physical');

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Dysgraphia: Symptoms & Characteristics
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dysgraphia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          Back to Dysgraphia
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('physical')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'physical'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Physical & Motor
        </button>
        <button
          onClick={() => setActiveTab('expression')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'expression'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Expression & Spelling
        </button>
        <button
          onClick={() => setActiveTab('impact')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'impact'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Age & Impact
        </button>
      </div>

      {/* ==========================================
          TAB 1: PHYSICAL & MOTOR
      ========================================== */}
      {activeTab === 'physical' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Dysgraphia manifests through a variety of physical and motor symptoms directly related to the mechanical act of writing. These physical challenges exist entirely independent of a student's intelligence, often appearing in otherwise highly capable learners.
          </p>

          {/* Handwriting Difficulties Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Handwriting Difficulties</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-symptoms-handwriting.webp" 
              alt="Close up of illegible handwriting on lined paper"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Dysgraphia primarily manifests through profound difficulties with the physical act and legibility of writing. These challenges go far beyond typical sloppy handwriting, making the transcription process laborious, slow, and highly inconsistent.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Illegible Writing</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Letter formation:</strong> Inconsistent or poorly formed letters that require great physical effort.</li>
                  <li><strong>Letter reversals:</strong> Confusion with writing letters like b/d and p/q.</li>
                  <li><strong>Mixed case:</strong> Inconsistent use of uppercase and lowercase letters within words.</li>
                  <li><strong>Overall legibility:</strong> Handwriting that is incredibly difficult for others, or even the student themselves, to read.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Spatial Alignment</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Inconsistent spacing:</strong> Irregular spaces between letters and frequently running words together.</li>
                  <li><strong>Letter sizing:</strong> A mixture of abnormally large and small letters within the same sentence.</li>
                  <li><strong>Line awareness:</strong> Difficulty staying on the lines, causing words to float above or drop below the baseline.</li>
                  <li><strong>Writing speed:</strong> A slow, effortful process that makes it nearly impossible to keep up with standard note-taking.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Motor and Physical Symptoms Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Motor & Physical Symptoms</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-symptoms-motor.webp" 
              alt="Student showing an awkward pencil grip"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The mechanical act of writing requires complex fine motor coordination that is frequently disrupted by dysgraphia. This disruption leads to awkward physical postures, severe hand cramping, and extreme difficulty rapidly copying information from a board.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Grip and Posture</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Unusual pencil grip:</strong> Holding the writing utensil in an awkward or highly inefficient manner.</li>
                  <li><strong>Excessive pressure:</strong> Gripping the pencil too tightly and pressing too hard into the paper, causing lead to break.</li>
                  <li><strong>Body posture:</strong> Awkward positioning of the body, arm, or wrist while attempting to write.</li>
                  <li><strong>Physical discomfort:</strong> Frequent complaints of hand cramping, muscle fatigue, or pain during writing tasks.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Copying Difficulties</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Near-point copying:</strong> Difficulty copying text from a book directly onto a paper sitting on the desk.</li>
                  <li><strong>Far-point copying:</strong> Losing their place constantly when looking back and forth from the teacher's board to their paper.</li>
                  <li><strong>Omissions:</strong> Frequently omitting or adding letters and words while trying to hold text in working memory.</li>
                  <li><strong>Fine motor issues:</strong> Correlated challenges with tasks requiring precision, such as buttoning shirts or tying shoes.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: EXPRESSION & SPELLING
      ========================================== */}
      {activeTab === 'expression' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Beyond physical mechanics, dysgraphia deeply impacts how the brain retrieves spelling rules and organizes complex thoughts onto paper. This often creates a frustrating, highly visible disconnect between a student's brilliant oral vocabulary and their simplified written output.
          </p>

          {/* Spelling Difficulties Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Spelling Difficulties</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-symptoms-spelling.webp" 
              alt="Paper showing inconsistent spelling errors"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because dysgraphia interferes with the brain's ability to automatically recall and sequence letters, spelling becomes a highly conscious and exhausting effort. Students will frequently misspell the exact same word multiple different ways within a single paragraph.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Inconsistent Spelling</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>Spelling the same word differently across multiple sentences in the same document.</li>
                  <li>Being able to spell a word correctly out loud, but completely unable to write it down accurately.</li>
                  <li>Spelling accuracy deteriorating rapidly as the writing task lengthens and cognitive fatigue sets in.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Types of Spelling Errors</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Phonetic errors:</strong> Writing words exactly as they sound rather than following orthographic rules.</li>
                  <li><strong>Omissions:</strong> Leaving out critical letters or entire syllables while focusing on motor control.</li>
                  <li><strong>Transpositions:</strong> Reversing the order of letters within a perfectly known word.</li>
                  <li><strong>Homophones:</strong> Persistent confusion with context words like to/too/two and there/their/they're.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Written Expression Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Written Expression Challenges</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-symptoms-expression.webp" 
              alt="Student struggling to organize an essay on a laptop"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              One of the most profound symptoms is the massive gap between a student's highly articulate verbal abilities and their simplified written output. The intense cognitive strain of forming letters leaves virtually no working memory available for organizing paragraphs, utilizing grammar, or managing complex syntax.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">The Oral-Written Gap</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Verbal intelligence:</strong> Can articulate highly complex ideas clearly when speaking, but produces basic sentences when writing.</li>
                  <li><strong>Vocabulary limits:</strong> Uses a rich oral vocabulary in conversation but relies on simple, repetitive words in written work.</li>
                  <li><strong>Output length:</strong> Written work is drastically shorter than expected or required for the assignment.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Organization & Syntax</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Paragraph structure:</strong> Extreme difficulty organizing thoughts into a clear beginning, middle, and end.</li>
                  <li><strong>Flow:</strong> Disjointed or highly illogical flow of ideas on paper due to working memory overload.</li>
                  <li><strong>Grammar:</strong> Incomplete sentences, run-on sentences, and missing punctuation marks.</li>
                  <li><strong>Word omission:</strong> Frequently omitting or misusing small connector words (a, the, is).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: AGE & IMPACT
      ========================================== */}
      {activeTab === 'impact' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            As educational demands increase over time, the unaddressed symptoms of dysgraphia can trigger profound emotional and behavioral challenges. Identifying these age-specific red flags early is critical to preventing long-term writing anxiety and deep academic avoidance.
          </p>

          {/* Symptoms by Age Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Symptoms by Age Group</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-symptoms-age.webp" 
              alt="Timeline of educational writing demands"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because writing demands increase exponentially as a student moves through school, dysgraphia symptoms often evolve and compound year over year. What begins as an awkward pencil grip in kindergarten can quickly become a complete inability to take legible lecture notes in high school.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-2 text-md border-b pb-2">Preschool</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Actively avoids drawing or coloring.</li>
                  <li>Difficulty learning to write their own name.</li>
                  <li>Displays a highly awkward or tight pencil grip.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-2 text-md border-b pb-2">Elementary</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Illegible handwriting despite rigorous practice.</li>
                  <li>Mixes print and cursive letters randomly.</li>
                  <li>Complains frequently of hand pain.</li>
                  <li>Routinely fails timed writing tests.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-2 text-md border-b pb-2">Middle/High</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Cannot take notes during fast-paced lectures.</li>
                  <li>Intentionally avoids writing-intensive courses.</li>
                  <li>Fails essay tests despite demonstrating mastery of the material verbally.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-2 text-md border-b pb-2">Adults</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Strict reliance on typing or voice-to-text tools.</li>
                  <li>Avoids career paths requiring hand-written logs.</li>
                  <li>Struggles with physical forms and providing consistent signatures.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Emotional Impact Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Behavioral & Emotional Impact</h2>
            
            <ImageWithFallback 
              src="/images/dysgraphia/dysgraphia-symptoms-emotional.webp" 
              alt="Student expressing frustration over written work"
              className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The chronic stress of struggling with a fundamental academic skill frequently triggers profound psychological impacts. Without proper identification, these daily frustrations often spiral into severe writing anxiety, complete academic avoidance, and damaged self-esteem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Avoidance & Resistance</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>Strong resistance and procrastination regarding writing tasks of any length.</li>
                  <li>Making creative excuses to avoid writing, or acting out to escape the assignment entirely.</li>
                  <li>Extreme difficulty monitoring their own writing for errors or participating in the revision process.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Emotional Responses</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li>Intense frustration and anger specifically triggered by unexpected writing demands.</li>
                  <li>Feelings of being "dumb" despite obvious intelligence and success in verbal subjects.</li>
                  <li>Deep embarrassment about handwriting quality when forced to perform in front of peers or teachers.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Red Flags & Distinctions Card (Warning/Red) */}
          <div className="bg-white border-4 border-red-500 rounded-xl p-6 shadow-sm">
            <h2 className="text-red-700 font-bold mb-6 text-2xl text-center">Important Distinctions & Red Flags</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Dysgraphia is a legitimate neurological learning disability that requires targeted intervention. It is explicitly not a result of laziness, low intelligence, or a developmental phase that a child will simply outgrow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                <h3 className="text-red-800 font-bold mb-3 text-lg border-b border-red-200 pb-2">What Dysgraphia Is NOT</h3>
                <ul className="list-disc ml-5 text-sm text-red-900 space-y-2">
                  <li><strong>Laziness:</strong> Individuals with dysgraphia are generally working much harder than their peers to produce less output.</li>
                  <li><strong>Lack of effort:</strong> The physical act of writing is genuinely painful and difficult, not a behavioral choice.</li>
                  <li><strong>Poor teaching:</strong> While excellent instruction matters, dysgraphia has a strict neurological basis.</li>
                </ul>
              </div>

              <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                <h3 className="text-red-800 font-bold mb-3 text-lg border-b border-red-200 pb-2">When to Seek Evaluation</h3>
                <ul className="list-disc ml-5 text-sm text-red-900 space-y-2">
                  <li>Handwriting is significantly worse than peers despite ample practice and instruction.</li>
                  <li>Writing causes physical pain, hand cramping, or extreme, disproportionate frustration.</li>
                  <li>There is a massive, unexplained gap between oral abilities and written work.</li>
                  <li>The child begins avoiding school or shows high anxiety specifically surrounding writing activities.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- BOTTOM BACK BUTTON --- */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dysgraphia')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-normal text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan whitespace-nowrap shrink-0"
        >
          <span className="text-lg">←</span>Back to Dysgraphia
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Al-Yagon, M., & Mikulincer, M. (2004). Patterns of close relationships and socioemotional and academic adjustment among school-age children with learning disabilities. <i>Learning Disabilities Research & Practice</i>.</li>
            <li>Berninger, V. W. (2004). Understanding the graphia in developmental dysgraphia. In <i>Developmental motor disorders: A neuropsychological perspective</i>. Guilford Press.</li>
            <li>Berninger, V. W., & Fuller, F. (1992). Gender differences in orthographic, verbal, and compositional fluency: Implications for assessing writing disabilities in primary grade children. <i>Journal of School Psychology</i>.</li>
            <li>Berninger, V. W., & Wolf, B. J. (2009). <i>Teaching students with dyslexia and dysgraphia: Lessons from teaching and science</i>. Paul H. Brookes Publishing.</li>
            <li>Berninger, V. W., et al. (2008). Writing problems in developmental dyslexia: Under-recognized and under-treated. <i>Journal of School Psychology</i>.</li>
            <li>Berninger, V. W., et al. (1997). Treatment of handwriting problems in beginning writers: Transfer from handwriting to composition. <i>Journal of Educational Psychology</i>.</li>
            <li>Connelly, V., et al. (2006). Contribution of lower order letter writing skills to the written composition of college students with and without dyslexia. <i>Developmental Neuropsychology</i>.</li>
            <li>Feder, K. P., & Majnemer, A. (2007). Handwriting development, competency, and intervention. <i>Developmental Medicine & Child Neurology</i>.</li>
            <li>Graham, S., & Harris, K. R. (2000). The role of self-regulation and transcription skills in writing and writing development. <i>Educational Psychologist</i>.</li>
            <li>Graham, S., & Perin, D. (2007). A meta-analysis of writing instruction for adolescent students. <i>Journal of Educational Psychology</i>.</li>
            <li>Graham, S., & Weintraub, N. (1996). A review of handwriting research: Progress and prospects from 1980 to 1994. <i>Educational Psychology Review</i>.</li>
            <li>Graham, S., et al. (1997). Role of mechanics in composing of elementary school students: A new methodological approach. <i>Journal of Educational Psychology</i>.</li>
            <li>Graham, S., et al. (2001). Which manuscript letters do primary grade children write legibly? <i>Journal of Educational Psychology</i>.</li>
            <li>Gregg, N. (2009). <i>Adolescents and adults with learning disabilities and ADHD: Assessment and accommodation</i>. Guilford Press.</li>
            <li>Hamstra-Bletz, L., & Blote, A. W. (1993). A longitudinal study on dysgraphic handwriting in primary school. <i>Journal of Learning Disabilities</i>.</li>
            <li>Hayes, J. R., & Flower, L. S. (1980). Identifying the organization of writing processes. In <i>Cognitive processes in writing</i>. Lawrence Erlbaum.</li>
            <li>Katusic, S. K., et al. (2009). The forgotten learning disability: Epidemiology of written language disorder in a population-based birth cohort. <i>Pediatrics</i>.</li>
            <li>Marr, D., & Cermak, S. (2002). Predicting handwriting performance of early elementary students with the Developmental Test of Visual-Motor Integration. <i>Perceptual and Motor Skills</i>.</li>
            <li>Moats, L. C. (1995). <i>Spelling: Development, disability, and instruction</i>. York Press.</li>
            <li>Nelson, J. M., & Harwood, H. (2011). Learning disabilities and anxiety: A meta-analysis. <i>Journal of Learning Disabilities</i>.</li>
            <li>Peverly, S. T. (2006). The importance of handwriting speed in adult writing. <i>Developmental Neuropsychology</i>.</li>
            <li>Rosenblum, S., et al. (2003). Computerized temporal handwriting characteristics of proficient and non-proficient handwriters. <i>American Journal of Occupational Therapy</i>.</li>
            <li>Rosenblum, S., et al. (2003). Product and process evaluation of handwriting difficulties. <i>Educational Psychology Review</i>.</li>
            <li>Tseng, M. H., & Cermak, S. A. (1993). The influence of ergonomic factors and perceptual-motor abilities on handwriting performance. <i>American Journal of Occupational Therapy</i>.</li>
            <li>Weintraub, N., & Graham, S. (1998). Writing legibly and quickly: A study of children's ability to adjust their handwriting to meet common classroom demands. <i>Learning Disabilities Research & Practice</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}