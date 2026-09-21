import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface SupportSocialEmotionalProps {
  setCurrentArticle?: (article: string) => void;
}

export function SupportSocialEmotional({ setCurrentArticle }: SupportSocialEmotionalProps) {
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

      <Tabs defaultValue="social" className="w-full">
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
        
        <TabsContent value="social" className="animate-fadeIn">
          
          {/* Section Intro */}
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mt-2 mb-8 text-2xl clear-both text-center border-b border-gray-200 pb-2">
              Social-Emotional Well-Being
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-support-social-TAB-intro.webp"
              alt="Social and emotional support for dyslexia"
              className="w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-6"
            />
            <p className="mb-6 text-slate-700 leading-relaxed">
              Navigating a neurotypical academic environment with a learning difference can deeply impact a person's self-image and emotional well-being. Providing robust social-emotional support is just as critical as academic intervention for fostering long-term resilience, confidence, and success.
            </p>
          </div>

          {/* Building Self-Esteem */}
          <h3 className="text-2xl font-bold mt-8 mb-4 text-[#0c264d] border-b border-gray-200 pb-2 clear-both">Building Self-Esteem & Resilience</h3>
          
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-support-social-TAB-esteem.webp"
            alt="Building self-esteem and resilience"
            className="w-64 h-auto rounded-md border border-gray-300 shadow-sm float-right ml-6 mb-4"
          />

          <div className="space-y-4 mb-10">
            <div className="bg-white p-4 rounded-lg border-l-4 border-[#ffd166] shadow-sm flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="font-bold text-[#0A9DC4] md:w-1/4">Strengths Focus</div>
              <div className="text-sm text-slate-700 md:w-3/4">Identify, encourage, and deeply cultivate natural talents and creative abilities rather than solely focusing on remediation and academic weaknesses.</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-l-4 border-[#ffd166] shadow-sm flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="font-bold text-[#0A9DC4] md:w-1/4">Celebrate Effort</div>
              <div className="text-sm text-slate-700 md:w-3/4">Praise the process, resilience, and hard work rather than just the final grades. Redefine what "success" looks like in the classroom.</div>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-[#ffd166] shadow-sm flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="font-bold text-[#0A9DC4] md:w-1/4">Representation</div>
              <div className="text-sm text-slate-700 md:w-3/4">Connect with successful adults and older peers who also navigate dyslexia to provide concrete examples of what is possible and reduce feelings of isolation.</div>
            </div>
          </div>

          {/* Managing Anxiety */}
          <h3 className="text-2xl font-bold mt-10 mb-4 text-[#0c264d] border-b border-gray-200 pb-2 clear-both">Managing Anxiety</h3>
          
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-support-social-TAB-anxiety.webp"
            alt="Strategies for managing anxiety"
            className="w-64 h-auto rounded-md border border-gray-300 shadow-sm float-right ml-6 mb-4"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
              <h4 className="font-bold text-[#0c264d] mb-2">Professional Support</h4>
              <p className="text-sm text-slate-700">Counseling and therapy can provide individuals with dedicated spaces to process school-related trauma and build healthy, actionable coping mechanisms.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
              <h4 className="font-bold text-[#0c264d] mb-2">Regulation Practices</h4>
              <p className="text-sm text-slate-700">Techniques like deep breathing, physical movement, and mindfulness can help regulate the nervous system during overwhelming moments of academic stress.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
              <h4 className="font-bold text-[#0c264d] mb-2">Task Chunking</h4>
              <p className="text-sm text-slate-700">Breaking large assignments or lengthy readings into much smaller, manageable steps reduces cognitive overload and helps prevent avoidance behaviors.</p>
            </div>
          </div>

          {/* Self-Advocacy */}
          <h3 className="text-2xl font-bold mt-10 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 clear-both">Cultivating Self-Advocacy</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 items-start">
            <div className="bg-white border-t-4 border-[#0A9DC4] rounded-xl p-4 shadow-sm">
              <ImageWithFallback 
                src="/images/dyslexia/dyslexia-support-social-TAB-advocacy.webp" 
                alt="Self-advocacy for individuals with dyslexia" 
                className="w-full h-auto rounded-md border border-gray-200 block mx-auto" 
              />
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h4 className="font-bold text-[#0A9DC4] mb-1">Understand Your Profile</h4>
                <p className="text-sm text-slate-700">Help the individual know exactly how their brain works, where they naturally excel, and what specific supports they need to bridge the gap.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h4 className="font-bold text-[#0A9DC4] mb-1">Request Accommodations</h4>
                <p className="text-sm text-slate-700">Practice the language needed to confidently ask teachers or employers for extra time, assistive technology, or alternative formats.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h4 className="font-bold text-[#0A9DC4] mb-1">Explain to Others</h4>
                <p className="text-sm text-slate-700">Develop a short, confident "elevator pitch" to explain dyslexia to peers as a structural learning difference, not a deficit in intelligence.</p>
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
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            
          
            <div className="mb-6">
 
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b-2 border-[#2abcd4] pb-2">
                Background Sources
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>Boetsch, E. A., et al. (1996). Psychosocial correlates of dyslexia across the life span. <i>Development and Psychopathology</i>. </p>
                <p>Daly, C., et al. (2003). <i>Self-advocacy: A valuable skill for your teenager with LD</i>. National Center for Learning Disabilities.</p>
                <p>Gerber, P. J. (2012). The impact of learning disabilities on adulthood: A review of the evidenced-based literature for research and practice in adult education. <i>Journal of Learning Disabilities</i>. </p>
                <p>Gerber, P. J., et al. (1992). Identifying alterable patterns in employment success for highly successful adults with learning disabilities. <i>Journal of Learning Disabilities</i>. </p>
                <p>Grills-Taquechel, A. E., et al. (2012). Anxiety and reading difficulties in early elementary school: Evidence for unidirectional- or bi-directional relations? <i>Child Psychiatry & Human Development</i>. </p>
                <p>Humphrey, N., & Mullins, P. M. (2002). Self-concept and self-esteem in developmental dyslexia. <i>Journal of Research in Special Educational Needs</i>.</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}