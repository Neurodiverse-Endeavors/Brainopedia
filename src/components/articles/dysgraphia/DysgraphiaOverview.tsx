import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DysgraphiaOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function DysgraphiaOverview({ setCurrentArticle }: DysgraphiaOverviewProps) {
  return (
    <article className="max-w-6xl font-spartan animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Dysgraphia: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dysgraphia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About Dysgraphia
        </button>
      </div>

      {/* Mobile Back Button */}
      <button 
        onClick={() => setCurrentArticle?.('dysgraphia')}
        className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About Dysgraphia
      </button>

      <div className="space-y-8 animate-fadeIn">
        
        {/* Centered Intro Paragraph */}
        <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
          Dysgraphia is a specific learning disability that affects writing abilities, making the physical act of 
          writing difficult despite adequate instruction and normal intelligence. It is one of the 
          lesser-known learning disabilities but can significantly impact academic performance and daily functioning.
        </p>

        {/* ==========================================
            CARD 1: WHAT IS DYSGRAPHIA? (Cyan)
        ========================================== */}
        <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">What is Dysgraphia?</h2>
          
          <ImageWithFallback 
            src="/images/dysgraphia/dysgraphia-overview-handwriting.webp" 
            alt="Close up of a hand holding a pencil and writing"
            className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
          />
          
          <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
            The term "dysgraphia" comes from the Greek words "dys" (impaired) and "graphia" (writing). 
            It refers to difficulties with the mechanics of writing that are not due to lack of instruction, 
            intellectual disability, or neurological damage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Core Features</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Impaired handwriting:</strong> Illegible or slow handwriting.</li>
                <li><strong>Difficulty with spelling:</strong> Inconsistent spelling errors.</li>
                <li><strong>Challenges with written expression:</strong> Gap between oral and written abilities.</li>
                <li><strong>Physical discomfort:</strong> Hand cramping or fatigue while writing.</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Not Just "Bad Handwriting"</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Dysgraphia is a neurologically-based condition, not simply poor penmanship or laziness. It involves 
                underlying processing difficulties that make writing an effortful and often frustrating task.
              </p>
            </div>
          </div>
        </div>

        {/* ==========================================
            CARD 2: TYPES OF DYSGRAPHIA (Yellow)
        ========================================== */}
        <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Types of Dysgraphia</h2>
          
          <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
            Researchers have identified different types of dysgraphia based on the underlying causes and specific manifestations of the disability:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">1. Dyslexic Dysgraphia</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li>Illegible spontaneously written work.</li>
                <li>Normal spelling when typing or using oral spelling tests.</li>
                <li>Normal copying abilities.</li>
                <li>Often associated with reading difficulties.</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">2. Motor Dysgraphia</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li>Poor fine motor skills affecting letter formation.</li>
                <li>Illegible writing across all tasks.</li>
                <li>May have normal spelling ability orally.</li>
                <li>Slow, effortful, and physically tiring writing.</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">3. Spatial Dysgraphia</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li>Difficulties with the spatial aspects of writing.</li>
                <li>Problems with letter spacing and sizing.</li>
                <li>Difficulty staying on lines or within margins.</li>
                <li>Directly related to visual-spatial processing.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==========================================
            CARD 3: PREVALENCE & CO-OCCURRING (Slate)
        ========================================== */}
        <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Prevalence & Co-occurring Conditions</h2>
          
          <ImageWithFallback 
            src="/images/dysgraphia/dysgraphia-overview-cooccurring.webp" 
            alt="Visual representation of overlapping learning differences"
            className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-200"
          />
          
          <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
            Exact prevalence is difficult to determine due to varying definitions, but studies suggest it affects approximately 5-20% of children.<sup className="text-green-600 font-bold ml-0.5">1</sup> It is a lifelong condition that persists into adulthood if not addressed, occurring across all intelligence levels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Gender Differences</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Research on gender prevalence is limited, but some studies suggest boys may be more frequently 
                identified, possibly due to motor skill development differences or reporting biases.<sup className="text-green-600 font-bold ml-0.5">2</sup>
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-slate-200 pb-2">Co-occurring Conditions</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Dyslexia:</strong> Reading and writing difficulties often overlap.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
                <li><strong>ADHD:</strong> Attention difficulties compound writing challenges.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
                <li><strong>Autism Spectrum Disorder:</strong> Motor and executive function challenges.</li>
                <li><strong>Dyspraxia:</strong> Broader motor planning difficulties.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==========================================
            CARD 4: IMPACT ON DAILY LIFE (Cyan)
        ========================================== */}
        <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Impact on Daily Life</h2>
          
          <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
            The invisible demands of writing permeate almost every aspect of society, meaning dysgraphia can significantly impact academic performance, self-esteem, and everyday practical tasks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Academic Impact</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li>Difficulty taking notes during lectures.</li>
                <li>Slower completion of written assignments.</li>
                <li>Poor performance on timed tests requiring written responses.</li>
                <li>Lower grades despite understanding the content completely.</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Emotional Impact</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li>Embarrassment about handwriting quality in front of peers.</li>
                <li>Low self-esteem related to repeated academic struggles.</li>
                <li>Anxiety and avoidance regarding any writing tasks.</li>
                <li>Frustration from being misperceived as "lazy."</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-cyan-100 pb-2">Everyday Challenges</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li>Filling out medical, legal, and job application forms.</li>
                <li>Writing quick shopping lists or household reminders.</li>
                <li>Providing consistent signatures on documents.</li>
                <li>Taking rapid phone messages or jotting down directions.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==========================================
            CARD 5: DIAGNOSIS, STRENGTHS & OUTLOOK (Yellow)
        ========================================== */}
        <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Diagnosis, Strengths & Outlook</h2>
          
          <ImageWithFallback 
            src="/images/dysgraphia/dysgraphia-overview-diagnosis.webp" 
            alt="Individual successfully utilizing speech-to-text software on a laptop"
            className="w-64 h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
          />
          
          <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
            While dysgraphia is a lifelong condition, its impact can be drastically reduced through early identification, appropriate educational accommodations, and the strategic use of compensatory technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Diagnosis & Classification</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>DSM-5:</strong> Falls under "Specific Learning Disorder with impairment in written expression."</li>
                <li><strong>IDEA:</strong> Students may qualify for special education services under the category of "Specific Learning Disability."</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Strengths & Abilities</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Strong verbal abilities:</strong> Often highly articulate and expressive when speaking.</li>
                <li><strong>Creative thinking:</strong> Innovative problem-solving approaches.</li>
                <li><strong>Visual-spatial strengths:</strong> May excel in art, design, or spatial reasoning.</li>
                <li><strong>Intellectual abilities:</strong> Occurs across all intelligence levels.</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">Prognosis</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li>Skills can notably improve with targeted, explicit intervention.</li>
                <li>Educational and workplace accommodations can level the playing field.</li>
                <li>Many highly successful individuals and visual thinkers have dysgraphia.</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-yellow-200 pb-2">The Role of Technology</h3>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li>Word processing dramatically reduces handwriting demands.</li>
                <li>Speech-to-text software provides highly effective alternative input methods.</li>
                <li>Most professional work is now done digitally rather than by hand.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==========================================
            CARD 6: ADVOCACY & TAKEAWAYS (Slate)
        ========================================== */}
        <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Advocacy & Looking Ahead</h2>
          
          <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
            Dysgraphia has been called "the forgotten learning disability" because it receives significantly less attention 
            and research than dyslexia or ADHD. Increasing awareness is critical for earlier identification, reducing stigma, and ensuring appropriate accommodations.
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 max-w-3xl mx-auto">
            <h3 className="text-[#0c264d] font-bold mb-4 text-xl border-b border-slate-200 pb-2">Key Takeaways</h3>
            <ul className="list-disc ml-6 space-y-3 text-sm text-slate-700">
              <li>Dysgraphia is a specific learning disability affecting writing mechanics, not a result of laziness or lack of effort.</li>
              <li>Multiple types exist (Dyslexic, Motor, Spatial), each with different underlying neurological causes.</li>
              <li>It frequently co-occurs with other neurodevelopmental conditions like ADHD and Dyslexia.</li>
              <li>With appropriate support, targeted accommodations, and modern technology, individuals with dysgraphia can succeed academically and professionally.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dysgraphia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About Dysgraphia
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />
      
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p>1. Katusic, S. K., Colligan, R. C., Weaver, A. L., & Barbaresi, W. J. (2009). The forgotten learning disability: Epidemiology of written language disorder in a population-based birth cohort. <i>Pediatrics</i>, <i>123</i>(5), 1306-1313. https://doi.org/10.1542/peds.2008-2098</p>
            <p>2. Berninger, V. W., & Fuller, F. (1992). Gender differences in orthographic, verbal, and compositional fluency: Implications for assessing writing disabilities in primary grade children. <i>Journal of School Psychology</i>, <i>30</i>(4), 363-382. https://doi.org/10.1016/0022-4405(92)90004-O</p>
            <p>3. Berninger, V. W., Nielsen, K. H., Abbott, R. D., Wijsman, E., & Raskind, W. (2008). Writing problems in developmental dyslexia: Under-recognized and under-treated. <i>Journal of School Psychology</i>, <i>46</i>(1), 1-21. https://doi.org/10.1016/j.jsp.2007.11.002</p>
            <p>4. Willcutt, E. G., Pennington, B. F., Olson, R. K., & DeFries, J. C. (2007). Understanding comorbidity: A twin study of reading disability and attention-deficit/hyperactivity disorder. <i>Developmental Neuropsychology</i>, <i>31</i>(2), 129-153. https://doi.org/10.1080/87565640701190793</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
         <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2013). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed.). https://doi.org/10.1176/appi.books.9780890425596</li>
            <li>Berninger, V. W. (2004). Understanding the 'graphia' in developmental dysgraphia. In D. Dewey & D. E. Tupper (Eds.), <i>Developmental motor disorders: A neuropsychological perspective</i>. Guilford Press.</li>
            <li>Berninger, V. W., & May, M. O. (2011). Evidence-based diagnosis and treatment for specific learning disabilities involving impairments in written and/or oral language. <i>Journal of Learning Disabilities</i>, <i>44</i>(2), 167-183. https://doi.org/10.1177/0022219410391189</li>
            <li>Berninger, V. W., & Richards, T. L. (2010). Inter-relationships among behavioral markers, genes, brain, and treatment in dyslexia and dysgraphia. <i>Future Neurology</i>, <i>5</i>(4), 597-617. https://doi.org/10.2217/fnl.10.22</li>
            <li>Berninger, V. W., & Wolf, B. J. (2009). <i>Teaching students with dyslexia and dysgraphia: Lessons from teaching and science</i>. Paul H. Brookes Publishing.</li>
            <li>Connelly, V., Campbell, S., MacLean, M., & Barnes, J. (2006). Contribution of lower order letter writing skills to the written composition of college students with and without dyslexia. <i>Developmental Neuropsychology</i>, <i>29</i>(1), 175-196. https://doi.org/10.1207/s15326942dn2901_9</li>
            <li>Deuel, R. K. (1995). Developmental dysgraphia and motor skills disorders. <i>Journal of Child Neurology</i>, <i>10</i>(1_suppl), S6-S8. https://doi.org/10.1177/0883073895010001031</li>
            <li>Fuentes, C. T., Mostofsky, S. H., & Bastian, A. J. (2009). Children with autism show specific handwriting impairments. <i>Neurology</i>, <i>73</i>(19), 1532-1537. https://doi.org/10.1212/WNL.0b013e3181c0d48c</li>
            <li>Gerber, P. J. (2012). The impact of learning disabilities on adulthood: A review of the evidenced-based literature for research and practice in adult education. <i>Journal of Learning Disabilities</i>, <i>45</i>(1), 31-46. https://doi.org/10.1177/0022219411426858</li>
            <li>Graham, S., Berninger, V. W., Abbott, R. D., Abbott, S. P., & Whitaker, D. (1997). Role of mechanics in composing of elementary school students: A new methodological approach. <i>Journal of Educational Psychology</i>, <i>89</i>(1), 170-182. https://doi.org/10.1037/0022-0663.89.1.170</li>
            <li>Graham, S., & Harris, K. R. (2009). Almost 30 years of writing research: Making sense of it all with The Wrath of Khan. <i>Learning Disabilities Research & Practice</i>, <i>24</i>(2), 63-77. https://doi.org/10.1111/j.1540-5826.2009.00284.x</li>
            <li>Graham, S., & Weintraub, N. (1996). A review of handwriting research: Progress and prospects from 1980 to 1994. <i>Educational Psychology Review</i>, <i>8</i>(1), 7-87. https://doi.org/10.1007/BF01464047</li>
            <li>Individuals with Disabilities Education Act, 20 U.S.C. § 1400. (2004). https://sites.ed.gov/idea/</li>
            <li>MacArthur, C. A. (2009). Reflections on research on writing and technology for struggling writers. <i>Learning Disabilities Research & Practice</i>, <i>24</i>(2), 93-103. https://doi.org/10.1111/j.1540-5826.2009.00286.x</li>
            <li>Nelson, J. M., & Harwood, H. (2011). Learning disabilities and anxiety: A meta-analysis. <i>Journal of Learning Disabilities</i>, <i>44</i>(1), 3-17. https://doi.org/10.1177/0022219409359939</li>
            <li>Peverly, S. T. (2006). The importance of handwriting speed in adult writing. <i>Developmental Neuropsychology</i>, <i>29</i>(1), 197-216. https://doi.org/10.1207/s15326942dn2901_10</li>
            <li>Rosenblum, S., Weiss, P. L., & Parush, S. (2003). Product and process evaluation of handwriting difficulties. <i>Educational Psychology Review</i>, <i>15</i>(1), 41-81. https://doi.org/10.1023/A:1021371425220</li>
            <li>West, T. G. (1997). <i>In the mind's eye: Visual thinkers, gifted people with dyslexia and other learning difficulties, computer images, and the ironies of creativity</i>. Prometheus Books.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}