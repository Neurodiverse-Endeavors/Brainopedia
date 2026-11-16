import { ASDComorbidities } from '../../../infographics/ASDComorbidities';

interface MentalHealthProps {
  setCurrentArticle?: (article: string) => void;
}

export function MentalHealth({ setCurrentArticle }: MentalHealthProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-fadeIn">
      
      {/* Header with Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-[#0c264d] text-3xl font-bold">Mental Health Support & Counseling</h1>
        
        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shrink-0"
        >
          <span className="text-xl">←</span>
          Back to Therapies
        </button>
      </div>

{/* ===== MENTAL HEALTH & THE NERVOUS SYSTEM ===== */}
      <div className="bg-[#f0f9ff] p-6 md:p-8 rounded-lg shadow-sm border border-[#0A9DC4]/20 mb-8">
        <h2 className="font-bold text-[#0c264d] mb-4 text-xl uppercase tracking-wider border-b border-[#0A9DC4]/20 pb-2">
          The Intersection of Mental Health & The Nervous System
        </h2>
        
        <p className="text-sm text-gray-700 leading-relaxed mb-6">
          Navigating mental health support for autistic individuals requires a nuanced approach that looks beyond traditional psychiatric labels. These challenges rarely exist in a vacuum—they are deeply intertwined with the individual's autonomic nervous system.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          
          {/* Box 1: The Psychiatric Reality (Navy 3D) */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
            <div className="pl-2">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                Traditional Co-Morbidities
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed mb-3">
                The autistic community experiences significantly high rates of co-occurring mental health conditions. However, treating these strictly as psychiatric flaws misses the root cause.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <span className="text-xs text-slate-700">Anxiety & Depression</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <span className="text-xs text-slate-700">Obsessive-Compulsive Disorder (OCD)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <span className="text-xs text-slate-700">Complex Trauma</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Box 2: The Physiological Reality (Cyan 3D) */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2abcd4]"></div>
            <div className="pl-2">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                Physiological Dysregulation
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed mb-3">
                Frequently, a severe psychiatric crisis is actually a nervous system trapped in a fight-or-flight response, driven by a compounding cycle of stress:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
                  <span className="text-xs text-slate-700">Chronic sensory overload</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
                  <span className="text-xs text-slate-700">The exhaustion of long-term masking</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
                  <span className="text-xs text-slate-700">Unmet communication needs & medical pain</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Box 3: The Affirming Conclusion (Slate 3D) */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden mb-4">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
          <div className="pl-2">
            <p className="text-sm text-gray-700 leading-relaxed">
              True neurodiversity-affirming mental health care requires us to address both the psychological experience and this underlying nervous system distress, recognizing that <strong className="text-[#0c264d]">sustainable emotional well-being cannot happen without physical and sensory safety.</strong>
            </p>
          </div>
        </div>

        {/* Box 4: Volume 5 Cross-Reference (Yellow 3D) */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ffd166]"></div>
          <div className="pl-2">
            <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
              Explore Volume 5: Mental Health Crossovers
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              For a deeper clinical breakdown of how neurodivergence specifically intersects with psychiatric conditions, please refer to <strong>Volume 5</strong>, which comprehensively outlines the four primary areas of mental health crossovers.
            </p>
          </div>
        </div>

      </div>

      {/* Infographic stays here because it's vital evidence */}
      <div className="flex justify-center my-10 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <ASDComorbidities />
      </div>

      <div className="space-y-8">
        <section className="bg-[#2abcd4]/10 p-6 rounded-lg border-l-4 border-[#2abcd4] shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-xl">Neuro-Affirming Therapy</h2>
          <p className="text-gray-700 mb-4">
            Effective mental health support focuses on:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li><strong>Modifying CBT:</strong> Using concrete language and addressing sensory needs during Talk Therapy.</li>
            <li><strong>Addressing Masking:</strong> Helping individuals reduce the exhaustion of "performing" neurotypicality.<sup>3</sup></li>
            <li><strong>Trauma-Informed Care:</strong> Recognizing the high rates of PTSD within the community.<sup>2</sup></li>
          </ul>
        </section>
      </div>

 
{/* CROSS-REFERENCE TO DYSREGULATION */}
      <div className="bg-[#f4f4f4] p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden mb-8 mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
        <div className="pl-2">
          <h3 className="text-[#0c264d] font-bold text-lg mb-2">
            Looking for help with Meltdowns or Reactive Aggression?
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            While dysregulation can severely impact mental health (often leading to anxiety or burnout), the root causes are usually physiological—such as sensory overload, communication barriers, or hidden medical pain. We have a dedicated, comprehensive guide on understanding and supporting the nervous system during crisis.
          </p>
          <button 
            onClick={() => setCurrentArticle?.('autism-dysregulation')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm py-2 px-5 rounded-lg transition-colors duration-200 font-bold"
          >
            Read the Dysregulation Guide →
          </button>
        </div>
      </div>

     {/* --- BOTTOM BACK BUTTON --- */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-normal text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan whitespace-nowrap shrink-0"
        >
          <span className="text-lg">←</span>Back to Therapies
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
            <p>1. Lugo-Marín, J., et al. (2019). Prevalence of psychiatric disorders in adults with autism spectrum disorder: A systematic review and meta-analysis. <i>Research in Autism Spectrum Disorders</i>.</p>
            <p>2. Cassidy, S., et al. (2018). Risk markers for suicidality in autistic adults. <i>Molecular Autism</i>.</p>
            <p>3. Cage, E., et al. (2018). Experiences of Autism Acceptance and Mental Health in Autistic Adults. <i>Journal of Autism and Developmental Disorders</i>.</p>
          </div>
        </div>
      </div>
    </article>
  );
}