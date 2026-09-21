import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';
import { HeartHandshake, Timer, Monitor, BookHeart, Clock, Home } from 'lucide-react';
interface SupportHomeProps {
  setCurrentArticle?: (article: string) => void;
}

export function SupportHome({ setCurrentArticle }: SupportHomeProps) {
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

      <Tabs defaultValue="home" className="w-full">

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

        <TabsContent value="home" className="animate-fadeIn">
          
          {/* Centered Intro Section */}
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Home Support Strategies
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-support-home-TAB-intro.webp"
              alt="Home support strategies for dyslexia"
              className="w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm"
            />
            <p className="mb-8 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              Supporting an individual with dyslexia extends far beyond the classroom. Creating a nurturing, structured, and literacy-rich home environment is crucial for building their confidence and reinforcing the skills they learn at school.
            </p>
          </div>

   {/* GRADE SCHOOL ENVIRONMENT SECTION */}
          <div className="clear-both mt-16">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center border-b border-gray-200 pb-2">
              Grade School: Foundational Environments
            </h2>
            <p className="mb-8 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              For elementary and middle school students, the home environment needs to provide strong scaffolding. The goal is to make routines visible, reduce frustration, and separate the "work" zone from the "rest" zone.
            </p>
          </div>

          {/* Grade School Graphic - Slightly bigger, max-w-4xl, centered */}
          <div className="max-w-4xl mx-auto mb-12">
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-support-home-gradeschool.webp"
              alt="Grade School Home Support Environment"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
            />
          </div>

          {/* Grade School Strategy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch max-w-6xl mx-auto">
            
            {/* The Focus Zone */}
            <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#ff6b6b] shadow-sm flex flex-col h-full">
              <h4 className="font-bold text-[#0c264d] text-xl mb-3 flex items-center gap-2">
                <Home className="w-6 h-6 text-[#ff6b6b] flex-shrink-0" />
                The "Focus Zone"
              </h4>
              <p className="text-sm text-slate-700 mb-6 leading-relaxed">
                Younger children with dyslexia often need active scaffolding and emotional support while working through difficult tasks.
              </p>
              <div className="bg-[#ff6b6b]/10 p-5 rounded-lg border border-[#ff6b6b]/20 flex-grow">
                <ul className="text-sm text-slate-700 space-y-3">
                  <li className="flex gap-2"><span className="text-[#ff6b6b] font-bold">•</span> <div><strong>Common Areas:</strong> Set up the workspace in a shared area (like the dining room) rather than an isolated bedroom so parents can monitor frustration levels.</div></li>
                  <li className="flex gap-2"><span className="text-[#ff6b6b] font-bold">•</span> <div><strong>Clutter-Free:</strong> Keep only the exact materials needed for the current assignment on the table.</div></li>
                </ul>
              </div>
            </div>

            {/* Visual Routines */}
            <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#f59e0b] shadow-sm flex flex-col h-full">
              <h4 className="font-bold text-[#0c264d] text-xl mb-3 flex items-center gap-2">
                <Clock className="w-6 h-6 text-[#f59e0b] flex-shrink-0" />
                Visual Routines
              </h4>
              <p className="text-sm text-slate-700 mb-6 leading-relaxed">
                Children with executive function challenges struggle with abstract concepts like time and multi-step directions.
              </p>
              <div className="bg-[#f59e0b]/10 p-5 rounded-lg border border-[#f59e0b]/20 flex-grow">
                <ul className="text-sm text-slate-700 space-y-3">
                  <li className="flex gap-2"><span className="text-[#f59e0b] font-bold">•</span> <div><strong>Picture Schedules:</strong> Use a magnetic board or chart with physical pictures showing the daily after-school routine (Snack, Homework, Play).</div></li>
                  <li className="flex gap-2"><span className="text-[#f59e0b] font-bold">•</span> <div><strong>Time Timers:</strong> Use visual clocks (where a red disk slowly disappears) to make the passing of time concrete and predictable.</div></li>
                </ul>
              </div>
            </div>

            {/* The Reading Nook */}
            <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#3b82f6] shadow-sm flex flex-col h-full">
              <h4 className="font-bold text-[#0c264d] text-xl mb-3 flex items-center gap-2">
                <BookHeart className="w-6 h-6 text-[#3b82f6] flex-shrink-0" />
                The Reading Nook
              </h4>
              <p className="text-sm text-slate-700 mb-6 leading-relaxed">
                Separating "reading for pleasure" from "homework" is crucial to prevent early burnout and resentment toward books.
              </p>
              <div className="bg-[#3b82f6]/10 p-5 rounded-lg border border-[#3b82f6]/20 flex-grow">
                <ul className="text-sm text-slate-700 space-y-3">
                  <li className="flex gap-2"><span className="text-[#3b82f6] font-bold">•</span> <div><strong>Low-Pressure Space:</strong> Create a cozy, highly preferred spot (beanbags, tents) dedicated strictly to enjoyable reading.</div></li>
                  <li className="flex gap-2"><span className="text-[#3b82f6] font-bold">•</span> <div><strong>Audio-Rich:</strong> Stock the nook with audiobooks and graphic novels. Reading with ears counts as reading!</div></li>
                </ul>
              </div>
            </div>

          </div>

{/* HIGH SCHOOL & COLLEGE ENVIRONMENT SECTION */}
          <div className="clear-both mt-16">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center border-b border-gray-200 pb-2">
              High School & College: Advanced Environments
            </h2>
            <p className="mb-10 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              As students transition into higher education, a supportive environment must go beyond just a quiet desk. The focus shifts toward building autonomy, managing complex workflows, and drastically reducing cognitive fatigue.
            </p>
          </div>
          {/* High School & College Environment Graphic */}
          <div className="max-w-4xl mx-auto mb-16">
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-support-home-HS-college-years.webp"
              alt="High School and College Home Support Environment"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-stretch max-w-6xl mx-auto">
            
            {/* Sensory & Ergonomics */}
            <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#0A9DC4] shadow-sm flex flex-col h-full">
              <h4 className="font-bold text-[#0c264d] text-xl mb-3 flex items-center gap-2">
                <Monitor className="w-6 h-6 text-[#0A9DC4] flex-shrink-0" />
                Sensory & Ergonomics
              </h4>
              <p className="text-sm text-slate-700 mb-6 leading-relaxed">
                Older students often hit a wall not because they don't understand the material, but because their physical environment drains their processing power.
              </p>
              <div className="bg-[#f0f9ff] p-5 rounded-lg border border-[#0A9DC4]/20 flex-grow">
                <ul className="text-sm text-slate-700 space-y-3">
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> <div><strong>Dual-Monitor Setups:</strong> Having research open on one screen while typing on the other completely eliminates the cognitive load of constantly minimizing tabs.</div></li>
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> <div><strong>Sensory Boundaries:</strong> Utilize active noise-canceling headphones, brown noise, and adjustable warm lighting to prevent sensory fatigue.</div></li>
                  <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> <div><strong>Frictionless Tech:</strong> Dictation mics and text-to-speech tools should be permanently plugged in and ready to use without feeling "stigmatized."</div></li>
                </ul>
              </div>
            </div>

            {/* Workflow Systems */}
            <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#8b5cf6] shadow-sm flex flex-col h-full">
              <h4 className="font-bold text-[#0c264d] text-xl mb-3 flex items-center gap-2">
                <Timer className="w-6 h-6 text-[#8b5cf6] flex-shrink-0" />
                Workflow Systems
              </h4>
              <p className="text-sm text-slate-700 mb-6 leading-relaxed">
                Instead of just dictating <em>when</em> to work, the environment needs to help neurodivergent students visualize <em>how</em> to execute the work.
              </p>
              <div className="bg-[#8b5cf6]/10 p-5 rounded-lg border border-[#8b5cf6]/20 flex-grow">
                <ul className="text-sm text-slate-700 space-y-3">
                  <li className="flex gap-2"><span className="text-[#8b5cf6] font-bold">•</span> <div><strong>Body Doubling:</strong> Having another person working quietly in the same room provides passive accountability and breaks task paralysis.</div></li>
                  <li className="flex gap-2"><span className="text-[#8b5cf6] font-bold">•</span> <div><strong>Visualizing Time:</strong> Use physical visual timers (Pomodoro method) to enforce 25-minute work sprints, turning massive papers into manageable chunks.</div></li>
                  <li className="flex gap-2"><span className="text-[#8b5cf6] font-bold">•</span> <div><strong>The Launch Pad:</strong> Designate a specific spot by the door where the backpack, laptop, and keys live, paired with a 5-minute nightly reset ritual.</div></li>
                </ul>
              </div>
            </div>

            {/* Autonomy & Scaffolding */}
            <div className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#10b981] shadow-sm flex flex-col h-full">
              <h4 className="font-bold text-[#0c264d] text-xl mb-3 flex items-center gap-2">
                <HeartHandshake className="w-6 h-6 text-[#10b981] flex-shrink-0" />
                Autonomy & Support
              </h4>
              <p className="text-sm text-slate-700 mb-6 leading-relaxed">
                High school and college are about transitioning the responsibility from the parent/teacher directly to the student.
              </p>
              <div className="bg-[#10b981]/10 p-5 rounded-lg border border-[#10b981]/20 flex-grow">
                <ul className="text-sm text-slate-700 space-y-3">
                  <li className="flex gap-2"><span className="text-[#10b981] font-bold">•</span> <div><strong>The "Consultant" Approach:</strong> Parents should shift from managers to consultants, asking: <em>"What does your workload look like, and how can I support you?"</em></div></li>
                  <li className="flex gap-2"><span className="text-[#10b981] font-bold">•</span> <div><strong>De-stigmatizing Struggle:</strong> Openly discuss that feeling overwhelmed is normal, and that iterating on study habits is a sign of growth.</div></li>
                  <li className="flex gap-2"><span className="text-[#10b981] font-bold">•</span> <div><strong>Utilizing Campus DSS:</strong> Normalize the use of collegiate Disability Support Services as a strategic, highly intelligent move—not a weakness.</div></li>
                </ul>
              </div>
            </div>

          </div>


          {/* Reading at Home (Big Full Pic) */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 clear-both">Reading at Home</h3>
          
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-support-home-TAB-reading.webp"
            alt="Strategies for reading at home"
            className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] mb-2 text-center">Read Aloud Together</h4>
              <p className="text-sm text-slate-700 flex-grow">Modeling fluent, expressive reading helps build vocabulary and comprehension without the cognitive strain of decoding.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] mb-2 text-center">High-Interest Materials</h4>
              <p className="text-sm text-slate-700 flex-grow">Allow reading choices based on passion—comic books, graphic novels, and magazines are all valid and engaging materials.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] mb-2 text-center">Audiobooks Count</h4>
              <p className="text-sm text-slate-700 flex-grow">Listening to audiobooks provides access to complex narratives and advanced vocabulary that may be above their independent reading level.</p>
            </div>
          </div>

{/* School Communication (Cards) */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 clear-both">School Communication</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Check-ins Card */}
            <div className="bg-gray-300 border-t-4 border-[#0A9DC4] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-3 text-center">Teacher Check-ins</h4>
              <div className="bg-white p-5 rounded-lg shadow-sm text-sm text-slate-700 flex-grow space-y-5">
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0c264d] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-[#ffd166]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Align Strategies:</strong>
                    Maintain open, regular communication with teachers. Share what is working at home and ask for classroom updates.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ffd166] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-[#0c264d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Map Timelines:</strong>
                    For college-bound students, use meetings to proactively map out transition timelines and deadlines.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0A9DC4] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Update Evaluations:</strong>
                    Ensure psychoeducational evaluations remain current (universities typically require testing within three years).
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2abcd4] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Shift to Self-Advocacy:</strong>
                    Gradually hand over the reins toward student-led meetings to build university-level independence.
                  </div>
                </div>

              </div>
            </div>

            {/* IEP/504 Card */}
            <div className="bg-gray-300 border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-3 text-center">IEP & 504 Advocacy</h4>
              <div className="bg-white p-5 rounded-lg shadow-sm text-sm text-slate-700 flex-grow space-y-5">
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0c264d] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-[#ffd166]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Meeting Preparation:</strong>
                    Prepare thoroughly for school meetings to effectively advocate for necessary accommodations.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ffd166] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-[#0c264d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Digital Organization:</strong>
                    Keep a dedicated folder of documents on your computer or phone for quick reference during meetings.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0A9DC4] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Physical Binder:</strong>
                    If you prefer paper copies, maintain an organized binder of all evaluations, work samples, and formal communications.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2abcd4] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Actionable Advocacy:</strong>
                    Use these organized records to clearly demonstrate the student's progress and secure necessary interventions.
                  </div>
                </div>

              </div>
            </div>
          </div>
                  
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-support-home-TAB-school.webp"
            alt="School communication and advocacy strategies"
            className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
          />

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
            
            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b-2 border-[#2abcd4] pb-2">
                Background Sources
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>Aronson, A. G. (2010). New perspectives on reading intervention through audiobook technology. <i>Reading Psychology</i>. </p>
                <p>Bus, A. G., et al. (1995). Joint book reading makes for success in learning to read: A meta-analysis on intergenerational transmission of literacy. <i>Review of Educational Research</i>. </p>
                <p>Cooper, H., et al. (2006). Does homework improve academic achievement? A synthesis of research, 1987–2003. <i>Review of Educational Research</i>. </p>
                <p>Epstein, J. L. (2001). School, family, and community partnerships: Preparing educators and improving schools. Westview Press. </p>
                <p>Epstein, J. L., & Van Voorhis, F. L. (2001). More than minutes: Teachers' roles in designing homework. <i>Educational Psychologist</i>. </p>
                <p>Garriott, P. P., et al. (2000). Teachers as parents, parents as children: What's wrong with this picture? <i>Preventing School Failure</i>. </p>
                <p>Guthrie, J. T., & Humenick, N. M. (2004). Motivating students to read: Evidence for classroom practices that increase reading motivation and achievement. In <i>The voice of evidence in reading research</i>. Paul H. Brookes.</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}