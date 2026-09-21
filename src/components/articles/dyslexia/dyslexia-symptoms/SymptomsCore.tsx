import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface SymptomsCoreProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaSymptomsCore({ setCurrentArticle }: SymptomsCoreProps) {
  return (
    <article className="max-w-full w-full">
      
      {/* Header and Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          Dyslexia: Symptoms & Characteristics
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
      
      <Tabs defaultValue="core" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger 
            value="core" 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Core Characteristics
          </TabsTrigger>
          <TabsTrigger 
            value="strengths" 
            onClick={() => setCurrentArticle?.('dyslexia-symptoms-strengths')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Strengths
          </TabsTrigger>
          <TabsTrigger 
            value="impact" 
            onClick={() => setCurrentArticle?.('dyslexia-symptoms-impact')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Impact
          </TabsTrigger>
        </TabsList>

        <TabsContent value="core" className="animate-fadeIn">
          
          {/* Centered Intro Section */}
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Core Characteristics
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-symptoms-core-TAB-intro.webp"
              alt="Core characteristics of dyslexia"
              className="w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm"
            />
            <p className="mb-10 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              Dyslexia is primarily characterized by neurobiological differences that impede the development of accurate and fluent word recognition.
            </p>
          </div>

          {/* Primary Reading Challenges Grid */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            Primary Reading Challenges
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            
            {/* Decoding Difficulties */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0c264d] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-[#ffd166]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-2">Decoding Difficulties</h4>
              <p className="text-sm text-slate-700 w-full flex-grow">
                Challenges sounding out new words, often due to underlying phonological processing deficits.
              </p>
            </div>

            {/* Slow Reading */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#ffd166] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-[#0c264d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-2">Slow, Labored Reading</h4>
              <p className="text-sm text-slate-700 w-full flex-grow">
                High cognitive demand spent on decoding leaves little working memory capacity for comprehension.
              </p>
            </div>

            {/* Inaccurate Word Recognition */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0A9DC4] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-2">Inaccurate Word Recognition</h4>
              <p className="text-sm text-slate-700 w-full flex-grow">
                A tendency to guess words based on their shape or context rather than accurately mapping letters to sounds.
              </p>
            </div>

            {/* Phonological Awareness */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#2abcd4] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-2">Phonological Awareness</h4>
              <p className="text-sm text-slate-700 w-full flex-grow">
                Persistent difficulty isolating and manipulating the individual sounds (phonemes) within spoken words.
              </p>
            </div>

          </div>

          {/* Spelling & Writing Split-Cards */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
            Spelling & Writing
          </h3>
          
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-symptoms-core-TAB-writing.webp"
            alt="Spelling and writing challenges"
            className="block mx-auto w-64 max-w-2xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
          />

          <div className="flex flex-col gap-6 mb-10">
            
            {/* Split Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row overflow-hidden">
              <div className="bg-[#0c264d] p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                <svg className="w-10 h-10 text-[#ffd166] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                <h4 className="font-bold text-white text-xl">Poor Spelling</h4>
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <p className="text-sm text-slate-700">
                  Spelling often does not match standard phonological rules. Individuals may produce heavy phonetic spelling errors (spelling a word exactly as it sounds rather than how it is conventionally written) or struggle to recall the visual representation of common words.
                </p>
              </div>
            </div>

            {/* Split Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row overflow-hidden">
              <div className="bg-[#0A9DC4] p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                <svg className="w-10 h-10 text-white mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <h4 className="font-bold text-white text-xl">Writing Output</h4>
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <p className="text-sm text-slate-700">
                  Written expression may be severely limited compared to the individual's oral vocabulary and intelligence. The heavy cognitive toll required by the mechanics of spelling, grammar, and handwriting often bottlenecks their ability to get complex thoughts onto paper.
                </p>
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
            
            {/* Empty Cited Studies Section left as a structural placeholder per standard */}
            <div className="mb-6">
              

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b-2 border-[#2abcd4] pb-2">
                Background Sources
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>Ehri, L. C. (2000). Learning to read and learning to spell: Two sides of a coin. <i>Topics in Language Disorders</i>.</p>
                <p>Graham, S., & Harris, K. R. (2009). Almost everything you need to know about writing instruction. <i>Focus on Exceptional Children</i>.</p>
                <p>Ozernov-Palchik, O., & Gaab, N. (2016). Tackling the 'dyslexia paradox': reading intervention and brain plasticity. <i>Trends in Molecular Medicine</i>.</p>
                <p>Shaywitz, S. E., & Shaywitz, B. A. (2005). Dyslexia (specific reading disability). <i>Biological Psychiatry</i>.</p>
                <p>Snowling, M. J., Hulme, C., & Nation, K. (2020). Defining and understanding dyslexia: past, present and future. <i>Oxford Review of Education</i>.</p>
                <p>Stanovich, K. E. (1988). Explaining the differences between the dyslexic and the garden-variety poor reader. <i>Journal of Learning Disabilities</i>.</p>
                <p>Wagner, R. K., & Torgesen, J. K. (1987). The nature of phonological processing and its causal role in the acquisition of reading skills. <i>Psychological Bulletin</i>.</p>
              </div>
            </div>
          </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}