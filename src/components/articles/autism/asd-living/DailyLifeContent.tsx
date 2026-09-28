import { Home } from 'lucide-react';
import { ImageWithFallback } from "../../../figma/ImageWithFallback";

/* ─── THE GUEST LIST (Interface) ─── */
interface DailyLifeContentProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function DailyLifeContent({ setCurrentArticle }: DailyLifeContentProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-fadeIn">
      <section className="mb-10">
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">
            Daily Life & Practical Considerations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            
            {/* Communication Card */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Communication in Daily Life</h3>
              </div>
              
              <div className="mx-auto w-40 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-Dailytab-AAC-device.webp" 
                    alt="Graphic representing an AAC device for communication"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Autistic people communicate in diverse ways, often diverging from neurotypical expectations:
              </p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                <li><strong>Verbal communication:</strong> Many are fluent but may struggle with processing speed or social pragmatics.</li>
                <li><strong>Selective mutism:</strong> Speaking in certain comfortable situations but not others.</li>
                <li><strong>Nonspeaking:</strong> Roughly 25-30% of autistic people are nonspeaking or minimally speaking.<sup>1</sup></li>
                <li><strong>AAC users:</strong> Utilizing tablets, letter boards, or sign language to communicate.</li>
              </ul>
            </div>

            {/* Sensory Card */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Sensory Experiences</h3>
              </div>
              
              <div className="mx-auto w-40 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-Dailytab-comfy-room.webp" 
                    alt="Graphic representing a comfortable, sensory-friendly room"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Sensory differences are not just "preferences"; they profoundly affect daily functioning:<sup>2</sup>
              </p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                <li><strong>Environmental management:</strong> Curating home spaces to reduce overwhelming stimuli.</li>
                <li><strong>Accommodations:</strong> Using tools like noise-canceling headphones or tinted lenses.</li>
                <li><strong>Sensory seeking:</strong> Actively engaging in "stimming" or sensory input to self-regulate.</li>
              </ul>
            </div>

            {/* Executive Function Card */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Executive Functioning</h3>
              </div>
              
              <div className="mx-auto w-40 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-Dailytab-ex-fxn-mngt.webp" 
                    alt="Graphic representing executive function management"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Managing the "business of being alive" can require significantly more cognitive effort:<sup>4</sup>
              </p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                <li><strong>Visual supports:</strong> Using checklists, calendars, and timers to compensate for internal organization challenges.</li>
                <li><strong>Task initiation:</strong> Finding it difficult to start even simple tasks without a clear "on-ramp."</li>
                <li><strong>Routines:</strong> Relying on strict routines to reduce the daily cognitive load.</li>
              </ul>
            </div>

            {/* Autistic Burnout Card */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Energy & Burnout</h3>
              </div>
              
              <div className="mx-auto w-40 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-Dailytab-exhausted-girl.webp" 
                    alt="Graphic representing an exhausted individual experiencing autistic burnout"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Navigating a neurotypical world requires constant adaptation and energy expenditure:
              </p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                <li><strong>Autistic Burnout:</strong> Chronic exhaustion and loss of skills caused by prolonged masking and over-exertion.<sup>3</sup></li>
                <li><strong>Recovery:</strong> Needing significant, dedicated "recharge time" after social or sensory-heavy outings.</li>
                <li><strong>Pacing:</strong> Learning to measure and protect daily energy reserves.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ===== INDEPENDENT LIVING ARRANGEMENTS ===== */}
      <section className="bg-[#e0f7fa] p-6 rounded-xl mb-10 border-l-4 border-[#0c264d] shadow-sm flow-root">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center gap-2">
          <Home className="text-[#0A9DC4]" size={24} /> 
          Living Arrangements & Housing
        </h2>

        {/* Floated Image Container */}
        <div className="float-right ml-6 mb-4 bg-white p-2 rounded-lg shadow-sm border border-[#0A9DC4]/20 w-64 shrink-0">
          <ImageWithFallback 
            src="/images/autism/autism-living-Dailytab-housing-options.webp"
            alt="Various housing options and living arrangements"
            className="w-full h-auto rounded-md block"
          />
        </div>

        <p className="text-sm text-gray-700 leading-relaxed mb-6">
          Autistic adults live in a wide variety of settings. The right environment depends entirely on an individual's support needs, financial resources, and personal preferences. There is no single "correct" way to live.<sup>5</sup>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card 1: Independent */}
          <div className="bg-white p-4 rounded-lg border-t-4 border-[#10b981] shadow-sm">
            <h4 className="font-bold text-[#0c264d] mb-1 text-sm uppercase tracking-wider">Independent</h4>
            <p className="text-xs text-gray-700 leading-relaxed">Living alone, with roommates, or with a partner without formal support services. This relies heavily on strong executive functioning and self-advocacy skills.</p>
          </div>

          {/* Card 2: Supported */}
          <div className="bg-white p-4 rounded-lg border-t-4 border-[#2abcd4] shadow-sm">
            <h4 className="font-bold text-[#0c264d] mb-1 text-sm uppercase tracking-wider">Supported Living</h4>
            <p className="text-xs text-gray-700 leading-relaxed">Living independently in a private residence, but receiving scheduled visits from support workers to assist with tasks like budgeting, meal prep, or cleaning.</p>
          </div>

          {/* Card 3: With Family */}
          <div className="bg-white p-4 rounded-lg border-t-4 border-[#ffd166] shadow-sm">
            <h4 className="font-bold text-[#0c264d] mb-1 text-sm uppercase tracking-wider">With Family</h4>
            <p className="text-xs text-gray-700 leading-relaxed">Remaining in the family home. This can be a purposeful choice for connection and safety, or a necessity due to a lack of affordable housing or high support needs.</p>
          </div>

          {/* Card 4: Group Homes */}
          <div className="bg-white p-4 rounded-lg border-t-4 border-[#0c264d] shadow-sm">
            <h4 className="font-bold text-[#0c264d] mb-1 text-sm uppercase tracking-wider">Residential Options</h4>
            <p className="text-xs text-gray-700 leading-relaxed">Shared living environments or group homes designed for individuals with higher support needs, offering structured routines and 24-hour staff assistance.</p>
          </div>
        </div>
      </section>

      {/* --- BOTTOM BACK BUTTON --- */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-normal text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan whitespace-nowrap shrink-0"
        >
          <span className="text-lg">←</span>All About Autism
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Tager-Flusberg, H., & Kasari, C. (2013). Minimally verbal school-aged children with autism spectrum disorder: The neglected end of the spectrum. <i>Autism Research</i>.</p>
            <p>2. Belek, B. (2019). Articulating sensory experience: What properties of the world matter to autistic people? <i>Ethos</i>.</p>
            <p>3. Raymaker, D. M., et al. (2020). 'Having All of Your Internal Resources Exhausted Beyond Measure': An Exploratory Study of Autistic Burnout. <i>Autism in Adulthood</i>.</p>
            <p>4. Gallego, E., et al. (2022). Executive Functions in Children and Adolescents with Autism Spectrum Disorder. <i>Children</i>.</p>
            <p>5. Autism Society. (2024). Housing Options and Models for Residential Supports. <i>Autism Society of America</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
            <li>Autism Housing Network. (2024). Housing Directory and National Resources.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}