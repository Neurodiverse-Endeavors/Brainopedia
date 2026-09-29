import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Clock, Brain, LayoutGrid, Activity, Users, AlertCircle, Lightbulb } from 'lucide-react';

interface ADHDOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function ADHDOverview({ setCurrentArticle }: ADHDOverviewProps) {
  return (
    <article className="max-w-6xl font-spartan animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          ADHD: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About ADHD
        </button>
      </div>

      {/* Mobile Back Button */}
      <button 
        onClick={() => setCurrentArticle?.('adhd')}
        className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About ADHD
      </button>

      <div className="space-y-8">
        
        {/* WHAT IS ADHD? */}
        <section className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 flow-root">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl flex items-center gap-2">
            <Brain className="text-[#0A9DC4]" size={28} />
            What is ADHD?
          </h2>
          
          <div className="float-none sm:float-right mx-auto sm:ml-6 mb-6 sm:mb-4 bg-white p-2 rounded-lg shadow-sm border border-gray-200 w-full sm:w-64 shrink-0">
            <video 
              src="/images/adhd/adhd-overview-squirrel.mp4" 
              poster="/images/adhd/adhd-overview-squirrel.webp"
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto rounded-md block"
              aria-label="A squirrel bites bulb and it lights up, representing the hyperactive and impulsive nature of ADHD."
            />
          </div>
          
          <p className="mb-4 text-sm text-gray-700 leading-relaxed">
            Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental condition characterized 
            by persistent patterns of inattention, hyperactivity, and impulsivity that interfere with functioning 
            or development. It is a persistent neurodevelopmental condition affecting 11.3% of children ages 5 to 17 in the United States, with prevalence higher in boys (14.5%) than girls (8.0%).<sup className="text-green-600 font-bold ml-0.5">1</sup> Among adults, the prevalence is approximately 3.1%,<sup className="text-green-600 font-bold ml-0.5">2</sup> making it one of the most common neurodevelopmental disorders.
          </p>
          <p className="mb-4 text-sm text-gray-700 leading-relaxed">
            ADHD is not simply a childhood disorder—symptoms often persist into adulthood. It's a real medical condition with neurological basis, not a character flaw or result of poor parenting. Brain imaging studies reveal significant differences in brain structure and function.
          </p>
        </section>

        {/* THREE PRESENTATIONS */}
        <section className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#ffd166]">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl flex items-center justify-center gap-2 text-center">
            <LayoutGrid className="text-[#ffd166] shrink-0" size={28} />
            The Three Presentations of ADHD
          </h2>
          
          <p className="mb-8 text-sm text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            According to the DSM-5-TR, ADHD is diagnosed in one of three presentations, based on the predominant symptom pattern over the past six months:<sup className="text-green-600 font-bold ml-0.5">3</sup>
          </p>

          <video 
            src="/images/adhd/adhd-overview-venn.mp4" 
            poster="/images/adhd/adhd-overview-venn.webp"
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full sm:w-80 h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm"
            aria-label="ADHD Three Presentations Venn Diagram"
          />
          
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-[#f0f9ff] p-4 rounded-lg border-t-4 border-[#2abcd4] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-sm uppercase tracking-wider">Predominantly Inattentive</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Individuals primarily struggle with attention and focus. They may appear forgetful, disorganized, 
                easily distracted, and have difficulty completing tasks. This presentation is sometimes still 
                referred to as "ADD" in casual conversation, though that term is no longer used in official diagnosis. 
                People with this presentation may seem to daydream or be "in their own world."
              </p>
            </div>

            <div className="bg-[#fff9e6] p-4 rounded-lg border-t-4 border-[#ffcc00] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-sm uppercase tracking-wider">Hyperactive-Impulsive</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Individuals primarily experience restlessness, excessive energy, difficulty sitting still, and 
                impulsive behaviors. They may fidget constantly, interrupt others, have trouble waiting their turn, 
                and act without thinking about consequences. This presentation is more commonly diagnosed in childhood 
                when hyperactive symptoms are most visible.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-t-4 border-[#10b981] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-sm uppercase tracking-wider">Combined Presentation</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                This is the most common type, where individuals meet criteria for both inattentive and hyperactive-impulsive 
                symptoms. People with combined presentation experience challenges across multiple domains of executive 
                functioning and may find both sustaining attention and managing impulses difficult.
              </p>
            </div>
          </div>
        </section>

        {/* EXECUTIVE FUNCTION */}
        <section className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl flex items-center justify-center gap-2 text-center">
            <Activity className="text-[#0A9DC4] shrink-0" size={28} />
            Executive Function Challenges
          </h2>
          
          <p className="mb-8 text-sm text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            At its core, ADHD is fundamentally a disorder of executive function—the cognitive processes that 
            allow us to plan, focus attention, remember instructions, and manage multiple tasks. Executive 
            functions are controlled primarily by the prefrontal cortex of the brain.
          </p>

          <ImageWithFallback
            src="/images/adhd/adhd-overview-executive-function.webp"
            alt="ADHD Executive Function"
            className="w-full max-w-3xl h-auto rounded-md border border-gray-300 block mx-auto mb-8 shadow-sm"
          /> 

          <p className="mb-6 text-sm text-gray-700 leading-relaxed text-center">
            People with ADHD often struggle with several key executive functions:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm"><strong className="text-[#0c264d] text-sm block mb-1">Working memory:</strong> <span className="text-xs text-gray-600">Holding information in mind while using it</span></div>
            <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm"><strong className="text-[#0c264d] text-sm block mb-1">Inhibition:</strong> <span className="text-xs text-gray-600">Controlling impulses and stopping automatic responses</span></div>
            <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm"><strong className="text-[#0c264d] text-sm block mb-1">Emotional regulation:</strong> <span className="text-xs text-gray-600">Managing emotional responses</span></div>
            <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm"><strong className="text-[#0c264d] text-sm block mb-1">Task initiation:</strong> <span className="text-xs text-gray-600">Getting started on activities</span></div>
            <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm"><strong className="text-[#0c264d] text-sm block mb-1">Planning:</strong> <span className="text-xs text-gray-600">Creating roadmaps for completing tasks</span></div>
            <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm"><strong className="text-[#0c264d] text-sm block mb-1">Organization:</strong> <span className="text-xs text-gray-600">Keeping track of information and materials</span></div>
            <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm"><strong className="text-[#0c264d] text-sm block mb-1">Time management:</strong> <span className="text-xs text-gray-600">Estimating how long tasks will take</span></div>
            <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm"><strong className="text-[#0c264d] text-sm block mb-1">Sustained attention:</strong> <span className="text-xs text-gray-600">Maintaining focus over time</span></div>
            <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm"><strong className="text-[#0c264d] text-sm block mb-1">Flexibility:</strong> <span className="text-xs text-gray-600">Adapting to changing situations</span></div>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-center">
            Understanding ADHD through the lens of executive function helps explain why individuals with ADHD 
            might excel in some situations (like crisis management requiring quick decisions) while struggling 
            in others (like long-term planning projects).
          </p>
        </section>

        {/* WHO IS AFFECTED? */}
        <section className="mb-12 clear-both">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl flex items-center gap-2">
            <Users className="text-[#0A9DC4] shrink-0" size={28} />
            Who is Affected?
          </h2>
          
          <p className="mb-8 text-sm text-gray-700 leading-relaxed">
            ADHD affects people of all ages, genders, races, and socioeconomic backgrounds. However, there are some demographic patterns worth noting:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-sm">
              <h4 className="font-bold text-[#0c264d] mb-2">ADHD in Children</h4>
              <span className="text-4xl font-bold text-[#0A9DC4]">5-7%</span>
              <span className="text-sm text-gray-600 mt-2">of children worldwide</span>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-sm">
              <h4 className="font-bold text-[#0c264d] mb-3">Gender Diagnosis Ratio</h4>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-1">
                  <div className="w-5 h-5 bg-[#0A9DC4] rounded-sm"></div>
                  <div className="w-5 h-5 bg-[#0A9DC4] rounded-sm"></div>
                  <div className="w-5 h-5 bg-[#0A9DC4] rounded-sm"></div>
                </div>
                <span className="font-bold text-gray-400">:</span>
                <div className="w-5 h-5 bg-[#ffd166] rounded-sm"></div>
              </div>
              <span className="text-sm text-gray-600">Boys vs. Girls (2:1 to 3:1)</span>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-sm">
              <h4 className="font-bold text-[#0c264d] mb-3">Most Common Type</h4>
              <div className="w-full bg-[#0A9DC4] text-white py-2 px-4 rounded-md font-bold text-sm mb-2 shadow-sm">
                Combined Presentation
              </div>
              <span className="text-sm text-gray-600">50-75% of cases</span>
            </div>
          </div>

          <div className="space-y-4 mb-10">
            <div className="border-2 border-gray-100 rounded-xl p-6 bg-[#ffd166]/30">
              <h3 className="font-bold text-[#0c264d] mb-3 uppercase tracking-wider text-sm">Gender Differences</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Boys are diagnosed with ADHD more frequently than girls, with ratios ranging from 2:1 to 3:1 in community samples. However, this gap narrows in adulthood, and many experts believe ADHD is underdiagnosed in girls and women. Girls more often present with the inattentive type, which is less disruptive and therefore more likely to be missed. Girls may also develop compensatory strategies or internalize their struggles, leading to later diagnosis.
              </p>
            </div>

            <div className="border-2 border-gray-100 rounded-xl p-6 bg-[#0A9DC4]/20">
              <h3 className="font-bold text-[#0c264d] mb-3 uppercase tracking-wider text-sm">Age and Development</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                ADHD symptoms must be present before age 12 for diagnosis, though many people aren't diagnosed until adulthood. Hyperactivity symptoms often decrease with age, while inattention and executive function challenges may persist or become more problematic as life demands increase.
              </p>
            </div>

            <div className="border-2 border-gray-100 rounded-xl p-6 bg-[#00bf63]/20">
              <h3 className="font-bold text-[#0c264d] mb-3 uppercase tracking-wider text-sm">Cultural Considerations</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Diagnosis rates vary across countries and cultures, reflecting differences in awareness, access to healthcare, diagnostic practices, and cultural attitudes toward mental health. Some cultural contexts may normalize or stigmatize ADHD symptoms differently.
              </p>
            </div>
          </div>

 <div className="border-2 border-[#0c264d] rounded-xl p-6 bg-white shadow-sm mt-8 w-full max-w-4xl mx-auto clear-both">
            <h3 className="text-center font-bold text-[#0c264d] text-lg mb-6">
              ADHD in Adults
            </h3>

            {/* Tight 3-Column Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch w-full">
              
              {/* Column 1: Prevalence Panel */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex flex-col justify-center gap-4 h-full shadow-sm">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0A9DC4] mb-1">2.6%</div>
                  <div className="text-xs text-slate-700 leading-tight">Persistent<br/>(childhood-onset)</div>
                </div>
                <div className="w-12 h-px bg-slate-300 mx-auto"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#ffd166] mb-1">6.8%</div>
                  <div className="text-xs text-slate-700 leading-tight">Symptomatic<br/>(any onset)</div>
                </div>
              </div>

              {/* Column 2: Persistence & Comorbidity */}
              <div className="flex flex-col gap-3 justify-center h-full">
                <div className="bg-[#0c264d] text-white rounded-lg p-4 flex items-center gap-4 flex-1 shadow-sm">
                  <div className="font-bold text-xl shrink-0">50-70%</div>
                  <div className="text-xs leading-tight border-l border-white/30 pl-3">of childhood cases<br/>persist into adulthood</div>
                </div>
                <div className="bg-[#0c264d] text-white rounded-lg p-4 flex items-center gap-4 flex-1 shadow-sm">
                  <div className="font-bold text-xl shrink-0">~70%</div>
                  <div className="text-xs leading-tight border-l border-white/30 pl-3">have ≥1 comorbid<br/>mental health condition</div>
                </div>
              </div>

              {/* Column 3: Gender Differences Panel */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 h-full flex flex-col shadow-sm">
                <h4 className="text-xs font-bold text-[#0c264d] text-center mb-3 uppercase tracking-wider border-b border-slate-200 pb-2">Gender Comorbidity</h4>
                <div className="flex flex-col gap-3 flex-1 justify-center">
                  
                  {/* Females Section */}
                  <div className="flex flex-col gap-1.5">
                    <div className="text-[10px] font-bold text-[#d4a017] uppercase tracking-wide">Females Higher In:</div>
                    <div className="bg-[#fffbeb] border border-[#ffd166] rounded py-1 px-2 flex justify-between items-center text-xs text-[#0c264d]">
                      <span>Anxiety</span> <strong>47-50%</strong>
                    </div>
                    <div className="bg-[#fffbeb] border border-[#ffd166] rounded py-1 px-2 flex justify-between items-center text-xs text-[#0c264d]">
                      <span>Depression</span> <strong>19-53%</strong>
                    </div>
                  </div>
                  
                  {/* Males Section */}
                  <div className="flex flex-col gap-1.5">
                    <div className="text-[10px] font-bold text-[#0A9DC4] uppercase tracking-wide">Males Higher In:</div>
                    <div className="bg-[#f0f9ff] border border-[#0A9DC4] rounded py-1 px-2 flex justify-between items-center text-xs text-[#0c264d]">
                      <span>Substance Use</span> <strong>15-40%</strong>
                    </div>
                    <div className="bg-[#f0f9ff] border border-[#0A9DC4] rounded py-1 px-2 flex justify-between items-center text-xs text-[#0c264d]">
                      <span>Schizophrenia</span> <strong>2-3%</strong>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>     
        </section>

{/* IMPACT ON DAILY LIFE */}
        <section className="bg-gray-200 p-6 rounded-lg shadow-sm border-2 border-[#be185d]">
          <h2 className="text-[#831843] font-bold mb-6 text-2xl flex items-center gap-2">
            <AlertCircle className="text-[#be185d] shrink-0" size={28} />
            Impact on Daily Life
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg border-l-4 border-[#be185d] shadow-sm">
              <h3 className="font-bold text-[#831843] mb-1 text-sm uppercase tracking-wider">Academic/Work</h3>
              <p className="text-xs text-slate-700 leading-relaxed">Difficulty completing assignments, meeting deadlines, staying organized, and maintaining consistent performance.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-[#be185d] shadow-sm">
              <h3 className="font-bold text-[#831843] mb-1 text-sm uppercase tracking-wider">Relationships</h3>
              <p className="text-xs text-slate-700 leading-relaxed">Challenges with listening, following through on commitments, emotional regulation, and managing conflict.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-[#be185d] shadow-sm">
              <h3 className="font-bold text-[#831843] mb-1 text-sm uppercase tracking-wider">Self-esteem</h3>
              <p className="text-xs text-slate-700 leading-relaxed">Repeated experiences of failure or criticism can lead to low self-confidence and negative self-perception.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-[#be185d] shadow-sm">
              <h3 className="font-bold text-[#831843] mb-1 text-sm uppercase tracking-wider">Daily functioning</h3>
              <p className="text-xs text-slate-700 leading-relaxed">Struggles with routine tasks like paying bills, household management, and personal organization.</p>
            </div>
          </div>
          
<p className="text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-lg border-2 border-[#ffd166] shadow-sm text-center max-w-4xl mx-auto">
            <Lightbulb className="inline-block w-5 h-5 text-[#d4a017] mr-1.5 -mt-1" />
            However, it's important to recognize that many individuals with ADHD also describe unique strengths, 
            including creativity, ability to hyperfocus on interesting tasks, high energy, resilience, and 
            thinking outside the box.
          </p>
        </section>

        {/* SPECTRUM SECTION */}
        <section className="flow-root pt-2">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl flex items-center gap-2">
            <LayoutGrid className="text-[#0A9DC4] shrink-0" size={28} />
            Understanding ADHD as a Spectrum
          </h2>

          <div className="flex flex-col lg:flex-row flex-wrap gap-8 items-start mb-6">
            <div className="flex-1 space-y-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                ADHD exists on a spectrum, and no two people with ADHD are exactly alike. Symptoms vary in type, 
                severity, and combination. Some individuals are mildly affected and develop effective coping strategies 
                with minimal support, while others experience significant impairment requiring comprehensive treatment.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Additionally, ADHD commonly co-occurs with other conditions including learning disabilities, anxiety 
                disorders, depression, autism spectrum disorder, and sleep disorders. These co-occurring conditions 
                can complicate diagnosis and treatment, making individualized assessment and care essential.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed font-bold text-[#0c264d]">
                Understanding ADHD as a complex, multifaceted condition—rather than a simple checklist of behaviors—is 
                crucial for effective support and treatment.
              </p>
            </div>

            <div className="shrink-0 w-full lg:w-5/12 max-w-md bg-white rounded-md border-2 border-[#0c264d] p-6 shadow-sm">
              <h3 className="text-center text-[#0c264d] font-bold mb-6 text-lg">The ADHD Spectrum</h3>
              <div className="mb-6">
                <div className="text-sm text-center mb-2 text-[#0c264d] font-bold">Symptom Severity</div>
                <div className="h-16 rounded-lg overflow-hidden relative" style={{ background: 'linear-gradient(to right, #ffd166 0%, #2abcd4 50%, #0c264d 100%)' }}>
                  <div className="absolute inset-0 flex items-center justify-between px-4 text-white text-xs font-bold">
                    <span className="text-[#0c264d]">Mild</span>
                    <span>Moderate</span>
                    <span>Severe</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-center mb-3 text-[#0c264d] font-bold">Common Co-occurring Conditions<sup className="text-green-600 font-bold ml-0.5">6</sup></div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#0A9DC4]/20 border border-[#0A9DC4] rounded p-2 text-center text-xs">
                    <div className="font-bold text-[#0c264d]">59%</div>
                    <div className="text-gray-700">Autism</div>
                  </div>
                  <div className="bg-[#ffd166]/20 border border-[#ffd166] rounded p-2 text-center text-xs">
                    <div className="font-bold text-[#0c264d]">10-92%</div>
                    <div className="text-gray-700">Learning Disorders</div>
                  </div>
                </div>
                <div className="text-xs text-center mt-3 text-gray-600 italic">60-100% of children with ADHD have ≥1 comorbid condition</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md"
        >
          <span className="text-xl">←</span>
          All About ADHD
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      
      
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Reuben, C., & Elgaddal, N. (2024). ADHD in Children Ages 5–17 Years: US, 2020–2022. <i>NCHS Data Brief</i>. </p>
            <p>2. Ayano, G., et al. (2023). Prevalence of attention deficit hyperactivity disorder in adults: Umbrella review. <i>Psychiatry Research</i>. </p>
            <p>3. American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.).</p>
            <p>4. Willcutt, E. G. (2012). The prevalence of DSM-IV attention-deficit/hyperactivity disorder: a meta-analytic review. <i>Neurotherapeutics</i>. </p>
            <p>5. Song, P., et al. (2021). The global prevalence of adult attention-deficit hyperactivity disorder: A systematic review and meta-analysis. <i>Journal of Global Health</i>. </p>
            <p>6. Larsson, H., et al. (2024). The psychiatric comorbidity of ADHD. <i>Molecular Psychiatry</i>. </p>
            <p>7. van Emmerik-van Oortmerssen, K., et al. (2012). Prevalence of attention-deficit hyperactivity disorder in substance use disorder patients: a meta-analysis and meta-regression analysis. <i>Drug and Alcohol Dependence</i>. </p>
            <p>8. Lee, S. S., et al. (2011). Prospective association of childhood attention-deficit/hyperactivity disorder (ADHD) and substance use and abuse/dependence: A meta-analytic review. <i>Clinical Psychology Review</i>. </p>
            <p>9. Arican, I., et al. (2019). Prevalence of attention deficit hyperactivity disorder symptoms in patients with schizophrenia. <i>Acta Psychiatrica Scandinavica</i>. </p>
            <p>10. Brikell, I., et al. (2018). The phenotypic and genetic overlap between attention-deficit/hyperactivity disorder and schizophrenia. <i>Schizophrenia Bulletin</i>. </p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
         <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Centers for Disease Control and Prevention. (2024). Data and Statistics About ADHD. CDC. </li>
            <li>National Institute of Mental Health. (2024). Attention-Deficit/Hyperactivity Disorder (ADHD). NIMH. </li>
            <li>Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i>. Guilford Press. </li>
          </ul>
        </div>
      </div>
    </article>
  );
}