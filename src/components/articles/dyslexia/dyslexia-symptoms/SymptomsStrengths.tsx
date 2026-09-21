import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface DyslexiaSymptomsStrengthsProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaSymptomsStrengths({ setCurrentArticle }: DyslexiaSymptomsStrengthsProps) {
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
      
      <Tabs defaultValue="strengths" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger 
            value="core" 
            onClick={() => setCurrentArticle?.('dyslexia-symptoms-core')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Core Characteristics
          </TabsTrigger>
          <TabsTrigger 
            value="strengths" 
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

        <TabsContent value="strengths" className="animate-fadeIn">
          
          {/* Centered Intro Section */}
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Strengths & Advantages
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-symptoms-strengths-TAB-intro.webp"
              alt="Strengths and advantages of dyslexia"
              className="w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm"
            />
            <p className="mb-10 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              It is a misconception that dyslexia is only defined by reading challenges. Many individuals with dyslexia demonstrate unique cognitive strengths that often correlate with the neurobiological differences inherent to the condition.
            </p>
          </div>

          {/* Cognitive Strengths Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            {/* Visual-Spatial Processing */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0c264d] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-[#ffd166]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-xl mb-3">Visual-Spatial Processing</h4>
              <p className="text-sm text-slate-700 flex-grow">
                Enhanced ability to visualize and manipulate complex 3D objects and structural systems. Many excel in architecture, engineering, and visual design fields where spatial reasoning is critical.
              </p>
            </div>
            
            {/* Creative & Big-Picture Thinking */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#ffd166] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-[#0c264d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-xl mb-3">Creative & Big-Picture Thinking</h4>
              <p className="text-sm text-slate-700 flex-grow">
                A tendency to prioritize holistic, conceptual "big-picture" understanding over rote memorization of details. This promotes innovative problem-solving and unique connections between disparate ideas.
              </p>
            </div>

            {/* Problem-Solving & Reasoning */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0A9DC4] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-xl mb-3">Problem-Solving & Reasoning</h4>
              <p className="text-sm text-slate-700 flex-grow">
                Often possess high aptitude for complex problem-solving, particularly in situations that require novel approaches rather than traditional, linear algorithmic thinking.
              </p>
            </div>

            {/* Resilience & Perseverance */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#2abcd4] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-xl mb-3">Resilience & Perseverance</h4>
              <p className="text-sm text-slate-700 flex-grow">
                Navigating learning differences requires developing robust compensatory strategies and resilience, often leading to strong self-advocacy and perseverance in the face of academic or career challenges.
              </p>
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
                <li>Eide, B. L., & Eide, F. F. (2011). <i>The Dyslexic Advantage: Unlocking the Hidden Potential of the Dyslexic Brain</i>. Hudson Street Press.</li>
                <li>Everatt, J., et al. (1999). Dyslexia, spatial ability, and creative thinking. <i>Dyslexia</i>.</li>
                <li>Goldberg, R. J., et al. (2003). Predictors of success in individuals with learning disabilities: A qualitative analysis of a 20-year longitudinal study. <i>Learning Disabilities Research & Practice</i>.</li>
                <li>Schneps, M. H., et al. (2012). Dyslexia favors visual thinking. <i>Psychological Science</i>.</li>
                <li>Taylor, H., & Vestergaard, M. (2022). Developmental dyslexia: disorder or specialization in exploration? <i>Frontiers in Psychology</i>.</li>
                <li>Von Karolyi, C. (2001). Visual-spatial strength in dyslexia: Rapid discrimination of impossible figures. <i>Journal of Learning Disabilities</i>.</li>
                <li>West, T. G. (2009). <i>In the Mind's Eye: Creative Visual Thinkers, Gifted Dyslexics, and the Rise of Visual Technologies</i>. Prometheus Books.</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}