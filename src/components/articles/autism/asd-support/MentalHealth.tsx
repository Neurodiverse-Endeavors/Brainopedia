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

      <div className="mb-8">
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          Mental health support for autistic individuals requires a neuro-affirming approach that recognizes 
          autistic traits as differences to be supported rather than "symptoms" to be cured.
        </p>
      </div>

      {/* Infographic stays here because it's vital evidence */}
      <div className="flex justify-center my-10 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <ASDComorbidities />
      </div>

      <div className="space-y-8">
        <section className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] shadow-sm">
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