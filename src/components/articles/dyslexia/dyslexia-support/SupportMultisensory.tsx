import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface SupportMultisensoryProps {
  setCurrentArticle?: (article: string) => void;
}

export function SupportMultisensory({ setCurrentArticle }: SupportMultisensoryProps) {
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

      <Tabs defaultValue="multisensory" className="w-full">
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
        <TabsContent value="multisensory" className="animate-fadeIn">
          <p className="mb-8 text-slate-700 leading-relaxed">
            Multisensory instruction engages multiple pathways in the brain simultaneously—visual, auditory, and kinesthetic-tactile—to strengthen learning and memory for individuals with dyslexia.<sup className="text-green-600 font-bold ml-0.5">1</sup>
          </p>
          
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-support-multisens-TAB-chart.webp"
            alt="Timeline and intensity of dyslexia intervention"
            className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="border border-[#2abcd4] rounded-lg p-5">
              <h4 className="font-bold text-[#0c264d] mb-3">Visual Strategies</h4>
              <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
                <li>Color-coding different phonemes or word parts to improve recognition.</li>
                <li>Visual cue cards for spelling and phonics rules.</li>
                <li>Using graphic organizers to structure reading comprehension and writing planning.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
              </ul>
            </div>

            <div className="border border-[#2abcd4] rounded-lg p-5">
              <h4 className="font-bold text-[#0c264d] mb-3">Auditory Strategies</h4>
              <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
                <li>Saying sounds aloud while reading and writing to reinforce letter-sound connections.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
                <li>Rhyming activities and games to build core phonological awareness.</li>
                <li>Listening to audiobooks while following along with the printed text to connect auditory and visual input.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
              </ul>
            </div>

            <div className="border border-[#2abcd4] rounded-lg p-5">
              <h4 className="font-bold text-[#0c264d] mb-3">Kinesthetic Strategies</h4>
              <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
                <li>Tracing letters in sand, shaving cream, or on sandpaper surfaces.</li>
                <li>Building words with magnetic letters or tiles for tactile manipulation.</li>
                <li>Finger-tapping syllables or sounds to internalize word structure.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
                <li>"Skywriting" letters in the air using gross motor movements.</li>
              </ul>
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
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#10b981] mb-3 border-b-2 border-[#10b981] pb-2">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>1. Shams, L., & Seitz, A. R. (2008). Benefits of multisensory learning. <i>Trends in Cognitive Sciences</i>. </p>
                <p>2. Dexter, D. D., & Hughes, C. A. (2011). Graphic organizers and students with learning disabilities: A meta-analysis. <i>Learning Disability Quarterly</i>. </p>
                <p>3. Ehri, L. C., & Wilce, L. S. (1980). The influence of orthography on readers' conceptualization of the phonemic structure of words. <i>Applied Psycholinguistics</i>. </p>
                <p>4. Whittingham, J., et al. (2013). Use of audiobooks in a school library and positive effects of struggling readers' participation in a library-sponsored audiobook club. <i>School Library Research</i>. </p>
                <p>5. Boyer-Crane, C., et al. (2008). Improving early language and literacy skills: Differential effects of an oral language versus a phonology with reading intervention. <i>Journal of Child Psychology and Psychiatry</i>. </p>
              
            </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b-2 border-[#2abcd4] pb-2">
                Background Sources
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing. </p>
                <p>Fernald, G. M. (1943). <i>Remedial techniques in basic school subjects</i>. McGraw-Hill. </p>
                <p>International Dyslexia Association. (2017). <i>Dyslexia in the Classroom: What Every Teacher Needs to Know</i>. </p>
                <p>Moats, L., & Tolman, C. (2009). <i>Language essentials for teachers of reading and spelling (LETRS): The challenge of learning to read</i>. Sopris West Educational Services. </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}