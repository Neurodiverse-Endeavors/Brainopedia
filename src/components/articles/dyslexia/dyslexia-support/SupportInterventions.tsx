import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface SupportInterventionsProps {
  setCurrentArticle?: (article: string) => void;
}

export function SupportInterventions({ setCurrentArticle }: SupportInterventionsProps) {
  return (
    <article className="max-w-full w-full">
      
      {/* Header and Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          Dyslexia: Support & Management
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

      <Tabs defaultValue="interventions" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger 
            value="interventions" 
            onClick={() => setCurrentArticle?.('dyslexia-support-interventions')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Interventions
          </TabsTrigger>
          <TabsTrigger 
            value="tutoring" 
            onClick={() => setCurrentArticle?.('dyslexia-support-tutoring')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Tutoring
          </TabsTrigger>
          <TabsTrigger 
            value="multisensory" 
            onClick={() => setCurrentArticle?.('dyslexia-support-multisensory')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Multisensory
          </TabsTrigger>
          <TabsTrigger 
            value="technology" 
            onClick={() => setCurrentArticle?.('dyslexia-support-technology')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Tech & Tools
          </TabsTrigger>
          <TabsTrigger 
            value="executive" 
            onClick={() => setCurrentArticle?.('dyslexia-support-executive')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Executive Function
          </TabsTrigger>
          <TabsTrigger 
            value="social" 
            onClick={() => setCurrentArticle?.('dyslexia-support-social')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Social-Emotional
          </TabsTrigger>
          <TabsTrigger 
            value="home" 
            onClick={() => setCurrentArticle?.('dyslexia-support-home')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Home Support
          </TabsTrigger>
        </TabsList>
        <TabsContent value="interventions" className="animate-fadeIn">
          
         <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Evidence-Based Interventions
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-support-INTERV-TAB-intro.webp"
              alt="Evidence-based dyslexia interventions overview"
              className="w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm"
            />
            <p className="mb-6 text-slate-700 leading-relaxed">
              Effective support for dyslexia requires evidence-based interventions delivered by trained professionals. Research consistently shows that systematic, explicit instruction in phonics and reading skills can significantly improve outcomes for individuals with dyslexia.<sup className="text-green-600 font-bold ml-0.5">1</sup> Early intervention is most effective, but support at any age can lead to meaningful improvements.
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-2 mb-4 text-[#0c264d] border-b border-gray-200 pb-2 clear-both">Structured Literacy Approach</h3>
          <p className="mb-6 text-slate-700">Structured literacy is an explicit, systematic approach to teaching reading that encompasses several core components:</p>
          
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-support-INTERV-TAB-structured-literacy.webp"
            alt="Components of Structured Literacy"
            className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            <div className="bg-gray-100 p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm">
              <h4 className="font-bold text-[#0c264d] mb-2">Phonology</h4>
              <p className="text-sm text-black">The sound structure of language, emphasizing crucial skills like phonemic awareness.</p>
            </div>
            <div className="bg-gray-100 p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm">
              <h4 className="font-bold text-[#0c264d] mb-2">Sound-Symbol</h4>
              <p className="text-sm text-black">The direct, explicit relationship between written letters and their spoken sounds (phonics).</p>
            </div>
            <div className="bg-gray-100 p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm">
              <h4 className="font-bold text-[#0c264d] mb-2">Syllable Instruction</h4>
              <p className="text-sm text-black">Teaching the six syllable types in English to help decode longer, more complex words.</p>
            </div>
            <div className="bg-gray-100 p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm">
              <h4 className="font-bold text-[#0c264d] mb-2">Morphology</h4>
              <p className="text-sm text-black">The study of meaningful word parts, including prefixes, suffixes, and base roots.</p>
            </div>
            <div className="bg-gray-100 p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm">
              <h4 className="font-bold text-[#0c264d] mb-2">Syntax</h4>
              <p className="text-sm text-black">The rules of sentence structure, grammar, and how words combine to convey meaning.</p>
            </div>
            <div className="bg-gray-100 p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm">
              <h4 className="font-bold text-[#0c264d] mb-2">Semantics</h4>
              <p className="text-sm text-black">The overarching focus on comprehending meaning in language and connected text.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-[#0c264d] border-b border-gray-200 pb-2 clear-both">Orton-Gillingham-Based Programs</h3>
          
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-support-INTERV-TAB-orton-gillingham.webp"
            alt="Orton-Gillingham multisensory approach"
            className="w-56 h-auto rounded-md border border-gray-300 shadow-sm float-right ml-6 mb-4"
          />
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            The Orton-Gillingham approach is a well-established method for teaching reading to individuals with dyslexia. It relies heavily on <strong>multisensory</strong> engagement, integrating visual, auditory, and kinesthetic-tactile pathways to reinforce learning. 
          </p>
          <p className="mb-10 text-slate-700 leading-relaxed">
            Rather than relying on rote memorization, the instruction is highly <strong>systematic and sequential</strong>, ensuring concepts are taught in a logical, building-block order. Furthermore, educators use a <strong>diagnostic and prescriptive</strong> approach so that every lesson is continuously individualized to the student's evolving needs. Common programs rooted in this philosophy include the Wilson Reading System and the Barton Reading & Spelling System.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-[#0c264d] border-b border-gray-200 pb-2 clear-both">Other Evidence-Based Programs</h3>
          
          <div className="space-y-4 mb-10">
            <div className="bg-[#0c264d] p-4 rounded-lg border border-gray-200 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="font-bold text-white md:w-1/4">Lindamood-Bell</div>
              <div className="text-sm text-white md:w-3/4">Programs like LiPS (focusing on phonemic awareness) and Seeing Stars (focusing on symbol imagery).</div>
            </div>
            
            <div className="bg-[#0c264d] p-4 rounded-lg border border-gray-200 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="font-bold text-white md:w-1/4">Reading Recovery</div>
              <div className="text-sm text-white md:w-3/4">An intensive early intervention program specifically designed for first graders who are struggling to read.</div>
            </div>

            <div className="bg-[#0c264d] p-4 rounded-lg border border-gray-200 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="font-bold text-white md:w-1/4">RAVE-O</div>
              <div className="text-sm text-white md:w-3/4">A comprehensive program targeting Retrieval, Automaticity, Vocabulary, Engagement, and Orthography.</div>
            </div>

            <div className="bg-[#0c264d] p-4 rounded-lg border border-gray-200 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="font-bold text-white md:w-1/4">Leveled Literacy (LLI)</div>
              <div className="text-sm text-white md:w-3/4">A short-term, supplementary reading intervention designed to bring students up to grade-level achievement.</div>
            </div>

            <div className="bg-[#0c264d] p-4 rounded-lg border border-gray-200 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="font-bold text-white md:w-1/4">Corrective Reading</div>
              <div className="text-sm text-white md:w-3/4">A direct instruction program aimed at older students and adults to improve decoding and comprehension.</div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-[#0c264d] border-b border-gray-200 pb-2 clear-both">Building Reading Fluency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-200 p-5 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-bold mb-2 text-[#0c264d]">Repeated Reading</h4>
              <p className="text-sm text-black">Student reads same passage multiple times until achieving target fluency. Improves automaticity, rate, and expression.</p>
            </div>
            <div className="bg-gray-200 p-5 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-bold mb-2 text-[#0c264d]">Partner Reading</h4>
              <p className="text-sm text-black">Reading with a more fluent reader who models good reading. Includes choral and echo reading.</p>
            </div>
            <div className="bg-gray-200 p-5 rounded-lg border border-gray-200 shadow-sm md:col-span-2">
              <h4 className="text-lg font-bold mb-2 text-[#0c264d]">Wide Reading</h4>
              <p className="text-sm text-black">Reading large amounts of text at independent level to build stamina and confidence. Emphasizes high-interest, decodable books.</p>
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
            
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#10b981] mb-3 border-b-2 border-[#10b981] pb-2">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>1. Snowling, M. J., & Hulme, C. (2011). Evidence‐based interventions for reading and language difficulties. <em>British Journal of Educational Psychology</em>.</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b-2 border-[#2abcd4] pb-2">
                Background Sources
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing. </p>
                <p>Birsh, J. R. (Ed.). (2018). <em>Multisensory teaching of basic language skills</em> (4th ed.). Paul H. Brookes Publishing.</p>
                <p>Carlisle, J. F. (2010). "Effects of instruction in morphological awareness on literacy achievement." <em>Reading Research Quarterly</em>.</p>
                <p>Cunningham, A. E., & Stanovich, K. E. (1998). What reading does for the mind. <em>American Educator</em>. </p>
                <p>D'Agostino, J. V., & Murphy, J. A. (2004). A meta-analysis of Reading Recovery in United States schools. <em>Educational Evaluation and Policy Analysis</em>. </p>
                <p>Ehri, L. C., et al. (2001). Phonemic awareness instruction helps children learn to read. <em>Reading Research Quarterly</em>. </p>
                <p>Henry, M. K. (2010). <em>Unlocking literacy: Effective decoding and spelling instruction</em> (2nd ed.). Paul H. Brookes Publishing.</p>
                <p>International Dyslexia Association. (2017). <i>Dyslexia in the Classroom: What Every Teacher Needs to Know</i>. </p>
                <p>International Dyslexia Association. (2020). <em>Structured literacy: An introductory guide</em>. </p>
                <p>Malmgren, K. W., & Leone, P. E. (2000). Effects of a short-term auxiliary reading program on the reading skills of incarcerated youth. <em>Education and Treatment of Children</em>. </p>
                <p>Morgan, P. L., & Sideridis, G. D. (2006). Contrasting the effectiveness of fluency interventions. <em>Learning Disabilities Research & Practice</em>. </p>
                <p>National Reading Panel. (2000). <em>Teaching children to read: An evidence-based assessment of the scientific research literature on reading and its implications for reading instruction</em>. National Institute of Child Health and Human Development. </p>
                <p>Oakland, T., et al. (1998). An evaluation of the dyslexia training program. <em>Journal of Learning Disabilities</em>. </p>
                <p>Ransford-Kaldon, C. R., et al. (2011). A randomized controlled trial of a response to intervention (RTI) tier 2 literacy program: Leveled Literacy Intervention (LLI). <em>RTI International</em>. </p>
                <p>Rasinski, T. V., & Hoffman, J. V. (2003). Oral reading in the school literacy curriculum. <em>Reading Research Quarterly</em>. </p>
                <p>Ritchey, K. D., & Goeke, J. L. (2006). Orton-Gillingham—based reading instruction: A review of the literature. <em>The Journal of Special Education</em>. </p>
                <p>Samuels, S. J. (1979). The method of repeated readings. <em>The Reading Teacher</em>. </p>
                <p>Scarborough, H. S. (2001). Connecting early language and literacy to later reading (dis)abilities. In <em>Handbook of early literacy research</em>. Guilford Press. </p>
                <p>Therrien, W. J. (2004). Fluency and comprehension gains as a result of repeated reading. <em>Remedial and Special Education</em>. </p>
                <p>Topping, K. J. (2005). Trends in peer learning. <em>Educational Psychology</em>.</p>
                <p>Torgesen, J. K. (2004). Lessons learned from research on interventions for students who have difficulty learning to read. In <em>The voice of evidence in reading research</em>. Paul H. Brookes. </p>
                <p>Torgesen, J. K., et al. (2001). Intensive remedial instruction for children with severe reading disabilities. <em>Journal of Learning Disabilities</em>. </p>
                <p>Wolf, M., et al. (2000). Retrieval, automaticity, vocabulary elaboration, orthography (RAVE-O). <em>Journal of Learning Disabilities</em>. </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}