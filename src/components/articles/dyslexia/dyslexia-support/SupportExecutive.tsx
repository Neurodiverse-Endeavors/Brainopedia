import React from 'react';
import { Layout, Table, Network, BrainCircuitIcon, Leaf, Link } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface SupportExecutiveProps {
  setCurrentArticle?: (article: string) => void;
}

export function SupportExecutive({ setCurrentArticle }: SupportExecutiveProps) {
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

      <Tabs defaultValue="executive" className="w-full">
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

        <TabsContent value="executive" className="animate-in fade-in duration-300">
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 clear-both text-center">
            How to Support Executive Dysfunction
          </h3>
          
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-support-execdys-TAB-tools.webp"
            alt="Executive dysfunction support tools"
            className="block mx-auto w-full max-w-2xl mb-10 rounded-lg shadow-sm border border-slate-200 bg-white"
          />

          <p className="mb-8 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
            Many individuals with dyslexia also experience co-occurring executive function challenges. Supporting these foundational skills is just as vital as providing direct reading intervention.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Organization Card */}
            <div className="bg-gray-300 border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Organization</h4>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Color-Coding:</strong> Use color-coded folders and binders to quickly categorize subjects and reduce physical clutter.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Digital Planners:</strong> Centralize assignments and due dates using digital tools like Google Calendar or Notion.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Checklist Systems:</strong> Provide explicit, step-by-step visual breakdowns for routine daily tasks.
                </div>
              </div>
            </div>

            {/* Time Management Card */}
            <div className="bg-gray-300 border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Time Management</h4>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Visual Timers:</strong> Use visual clocks to make the abstract concept of passing time concrete and visible.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Task Chunking:</strong> Break large, overwhelming projects into smaller milestones with mini-deadlines.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Time Allowances:</strong> Formalize extended time for reading and testing to remove the pressure of processing speed.
                </div>
              </div>
            </div>

            {/* Study Skills Card */}
            <div className="bg-gray-300 border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Study Skills</h4>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">SQ3R Method:</strong> Survey, Question, Read, Recite, and Review to actively engage with the text rather than passively scanning.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Targeted Notes:</strong> Try structured note-taking systems that force the summarization and synthesis of key concepts.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Concept Maps:</strong> Leverage mind-mapping tools to visually connect ideas, bypassing heavy text-based outlining.
                </div>
              </div>
            </div>
          </div>

          {/* NOTE-TAKING DEEP DIVE SECTION */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">
              Alternative Note-Taking Systems
            </h3>
            
            {/* Cornell Notes Pop-out */}
            <div className="bg-[#fff5f5] p-6 md:p-8 rounded-xl shadow-md border-t-4 border-[#B31B1B] relative overflow-hidden mb-6">
              {/* Decorative Ivy League background crest */}
              <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none transform translate-x-4 -translate-y-4 text-[#B31B1B]">
                <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9z"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                <h4 className="font-bold text-2xl mb-2 font-spartan tracking-wide text-[#B31B1B]">The Cornell Note-Taking System</h4>
                <p className="text-sm text-slate-700 leading-relaxed mb-6 max-w-3xl">
                  Developed at Cornell University, this Ivy League method is exceptionally helpful for executive dysfunction. Instead of frantically transcribing everything, it forces the brain to organize, synthesize, and review information actively.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[#0c264d] text-sm">
                  <div className="md:col-span-1 bg-white p-4 rounded-lg shadow-sm border border-[#B31B1B]/20 flex flex-col">
                    <strong className="block text-[#B31B1B] mb-2 uppercase text-xs tracking-wider border-b border-[#B31B1B]/10 pb-1">Cue Column (Left)</strong>
                    <p className="text-xs text-slate-700 flex-grow">Write down questions, keywords, and main ideas here after class. It acts as a built-in study guide.</p>
                  </div>
                  <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-sm border border-[#B31B1B]/20 flex flex-col">
                    <strong className="block text-[#B31B1B] mb-2 uppercase text-xs tracking-wider border-b border-[#B31B1B]/10 pb-1">Notes Column (Right)</strong>
                    <p className="text-xs text-slate-700 flex-grow">Take concise notes during the lecture using bullet points, abbreviations, and short phrases rather than full sentences.</p>
                  </div>
                  <div className="md:col-span-3 bg-[#fcfcfc] p-4 rounded-lg shadow-sm border border-[#B31B1B]/20 flex flex-col mt-1">
                    <strong className="block text-[#B31B1B] mb-2 uppercase text-xs tracking-wider border-b border-[#B31B1B]/10 pb-1">Summary (Bottom)</strong>
                    <p className="text-xs text-slate-700">Write a 1-2 sentence synthesis of the entire page. This forces the brain to process the "big picture" meaning.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Visual Systems Expanded */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              
              {/* Mind Mapping Expanded */}
              <div className="bg-white p-6 rounded-xl border-l-4 border-[#0A9DC4] shadow-sm flex flex-col h-full">
                <h4 className="font-bold text-[#0c264d] text-xl mb-3 flex items-center gap-2">
                 <BrainCircuitIcon className="w-6 h-6 text-[#0A9DC4]" />
                  Mind Mapping (Non-Linear)
                </h4>
                <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                  Perfect for visual thinkers, this technique bypasses the need for strict, linear text processing. It allows dyslexic learners to instantly see "big picture" connections and relationships between concepts without the heavy cognitive load of reading standard outlines.
                </p>
                <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20 flex-grow mb-6">
                  <strong className="text-[#0c264d] text-sm block mb-2">How to build one:</strong>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> <div><strong>Start Center:</strong> Place the main topic or core idea in the middle of a blank page.</div></li>
                    <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> <div><strong>Radiate Outward:</strong> Draw thick branches for major subtopics, and thinner twigs branching off them for details.</div></li>
                    <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> <div><strong>Keywords Only:</strong> Restrict text to 1-2 words per branch to reduce the burden of reading and writing full sentences.</div></li>
                    <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> <div><strong>Color Code:</strong> Use a different color for each main branch to dramatically boost visual memory recall.</div></li>
                  </ul>
                </div>
                
                {/* Mind Mapping Graphics */}
                <div className="mt-auto flex flex-col gap-4">
                  <ImageWithFallback 
                    src="/images/dyslexia/dyslexia-support-executiveTAB-mind-mapping-process.webp" 
                    alt="Mind Mapping Process" 
                    className="w-full h-auto rounded-lg shadow-sm border border-gray-200 block" 
                  />
                  <ImageWithFallback 
                    src="/images/dyslexia/dyslexia-support-executiveTAB-mind-mapping-example.webp" 
                    alt="Mind Mapping Example - Sustainable Living" 
                    className="w-full h-auto rounded-lg shadow-sm border border-gray-200 block" 
                  />
                </div>
              </div>
              
              {/* Sketchnoting Expanded */}
              <div className="bg-white p-6 rounded-xl border-l-4 border-[#ffd166] shadow-sm flex flex-col h-full">
                <h4 className="font-bold text-[#0c264d] text-xl mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#ffd166]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  Sketchnoting (Visual)
                </h4>
                <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                  This system combines simple doodles, varied typography, and symbols with minimal text. By utilizing "Dual Coding Theory" (processing information visually and verbally at the same time), it translates complex verbal data directly into memorable visual cues.
                </p>
                <div className="bg-[#fff9e6] p-4 rounded-lg border border-[#ffd166]/30 flex-grow mb-6">
                  <strong className="text-[#0c264d] text-sm block mb-2">Key elements to use:</strong>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li className="flex gap-2"><span className="text-[#d97706] font-bold">•</span> <div><strong>Containers:</strong> Draw boxes, clouds, or speech bubbles around key ideas to group related thoughts together.</div></li>
                    <li className="flex gap-2"><span className="text-[#d97706] font-bold">•</span> <div><strong>Connectors:</strong> Use arrows, lines, or dotted paths to visually map out how concepts flow into one another.</div></li>
                    <li className="flex gap-2"><span className="text-[#d97706] font-bold">•</span> <div><strong>Icons:</strong> Draw simple stick figures, stars, or exclamation points to flag important facts for quick scanning.</div></li>
                    <li className="flex gap-2"><span className="text-[#d97706] font-bold">•</span> <div><strong>Typography:</strong> Write main headers in large block letters and minor details in standard handwriting to create a natural visual hierarchy.</div></li>
                  </ul>
                </div>

                {/* Sketchnoting Graphics */}
                <div className="mt-auto flex flex-col gap-4">
                  <ImageWithFallback 
                    src="/images/dyslexia/dyslexia-support-executiveTAB-sketchnoting-explained.webp" 
                    alt="Sketchnoting Process Explained" 
                    className="w-full h-auto rounded-lg shadow-sm border border-gray-200 block" 
                  />
                  <ImageWithFallback 
                    src="/images/dyslexia/dyslexia-support-executiveTAB-sketchnoting-example-Sustain.webp" 
                    alt="Sketchnoting Example - Sustainability" 
                    className="w-full h-auto rounded-lg shadow-sm border border-gray-200 block" 
                  />
                </div>
              </div>

              {/* Boxing Method */}
              <div className="bg-white p-6 rounded-xl border-l-4 border-[#10b981] shadow-sm flex flex-col h-full">
                <h4 className="font-bold text-[#0c264d] text-xl mb-3 flex items-center gap-2">
                  <Layout className="w-6 h-6 text-[#10b981]" />
                  Boxing Method (Compartmentalized)
                </h4>
                <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                  This highly visual method combats the dreaded "wall of text." By drawing literal boundaries around related concepts, it prevents dyslexic eyes from skipping lines and getting lost on the page.
                </p>
                <div className="bg-[#10b981]/10 p-4 rounded-lg border border-[#10b981]/20 flex-grow mb-6">
                  <strong className="text-[#0c264d] text-sm block mb-2">How to build one:</strong>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li className="flex gap-2"><span className="text-[#10b981] font-bold">•</span> <div><strong>Read First:</strong> Listen or read a section completely before writing to understand the core concept.</div></li>
                    <li className="flex gap-2"><span className="text-[#10b981] font-bold">•</span> <div><strong>Group & Box:</strong> Write notes on that specific topic, then draw a distinct box around the entire cluster.</div></li>
                    <li className="flex gap-2"><span className="text-[#10b981] font-bold">•</span> <div><strong>Connect:</strong> Use a new box for the next topic, and draw arrows between boxes if the concepts relate.</div></li>
                  </ul>
                </div>
                
                {/* Boxing Method Graphics */}
                <div className="mt-auto flex flex-col gap-4">
                  <ImageWithFallback 
                    src="/images/dyslexia/dyslexia-support-executiveTAB-boxing-method.webp" 
                    alt="Boxing Method Process and Example" 
                    className="w-full h-auto rounded-lg shadow-sm border border-gray-200 block" 
                  />
                </div>
              </div>

              {/* Charting Method */}
              <div className="bg-white p-6 rounded-xl border-l-4 border-[#ff6b6b] shadow-sm flex flex-col h-full">
                <h4 className="font-bold text-[#0c264d] text-xl mb-3 flex items-center gap-2">
                  <Table className="w-6 h-6 text-[#ff6b6b]" />
                  Charting Method (Structured Data)
                </h4>
                <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                  Perfect for comparing items or tracking historical events. Organizing facts into distinct rows and columns tells the brain what the information means instantly, bypassing the need to decode full sentences.
                </p>
                <div className="bg-[#ff6b6b]/10 p-4 rounded-lg border border-[#ff6b6b]/20 flex-grow mb-6">
                  <strong className="text-[#0c264d] text-sm block mb-2">How to build one:</strong>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li className="flex gap-2"><span className="text-[#ff6b6b] font-bold">•</span> <div><strong>Set the Grid:</strong> Before the lecture/reading, draw columns for the main categories (e.g., Date, Event, Impact).</div></li>
                    <li className="flex gap-2"><span className="text-[#ff6b6b] font-bold">•</span> <div><strong>Sort Instantly:</strong> Drop keywords directly into their designated columns as you learn them.</div></li>
                    <li className="flex gap-2"><span className="text-[#ff6b6b] font-bold">•</span> <div><strong>Easy Review:</strong> When studying, your brain can read vertically to understand a category, or horizontally to understand a specific item.</div></li>
                  </ul>
                </div>
                
                {/* Charting Method Graphics */}
                <div className="mt-auto flex flex-col gap-4">
                  <ImageWithFallback 
                    src="/images/dyslexia/dyslexia-support-executiveTAB-charting-method.webp" 
                    alt="Charting Method Process and Example" 
                    className="w-full h-auto rounded-lg shadow-sm border border-gray-200 block" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Back Button */}
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
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#10b981] mb-3 border-b-2 border-[#10b981] pb-2">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>1. Reiter, A., et al. (2005). Executive functions in children with dyslexia. <i>Dyslexia</i>. </p>
                <p>2. Hughes, C. A., & Suritsky, S. K. (1994). Note-taking skills of university students with and without learning disabilities. <i>Journal of Learning Disabilities</i>. </p>
                <p>3. Gureasko-Moore, S., et al. (2007). Self-management of classroom preparedness and homework. <i>School Psychology Review</i>. </p>
                <p>4. Barkley, R. A. (1997). Behavioral inhibition, sustained attention, and executive functions: constructing a unifying theory of ADHD. <i>Psychological Bulletin</i>. </p>
              </div>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b-2 border-[#2abcd4] pb-2">
                Background Sources
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>Dawson, P., & Guare, R. (2010). <i>Executive skills in children and adolescents: A practical guide to assessment and intervention</i>. Guilford Press. </p>
                <p>Novak, J. D., & Gowin, D. B. (1984). <i>Learning how to learn</i>. Cambridge University Press. </p>
                <p>Robinson, F. P. (1970). <i>Effective study</i>. Harper & Row.</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}