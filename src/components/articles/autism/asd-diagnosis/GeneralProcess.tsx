import { Dna, Microscope, Zap, Ear, Droplets } from 'lucide-react';

interface GeneralProcessProps {
  setCurrentArticle?: (article: string) => void;
}

export function GeneralProcess({ setCurrentArticle }: GeneralProcessProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="font-bold mb-4 text-2xl">The Core Diagnostic Foundations</h2>
        <p className="mb-6">
          Regardless of whether an individual is three years old or fifty, the formal diagnosis of autism rests on the same core clinical frameworks and the necessity of ruling out other medical conditions. While the tests look different across the lifespan, the baseline requirements remain constant.
        </p>
      </div>
   
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Diagnostic Frameworks (The "Rulebooks")</h3>
        <p className="text-sm mb-4 text-gray-700 leading-relaxed">
          Before administering specific age-related tests, clinicians use standardized diagnostic manuals to determine what constitutes autism. These are the criteria that all test results are ultimately compared against.
        </p>
        
        <div className="space-y-4">
          <div className="border-l-2 border-[#2abcd4] pl-4">
            <div className="font-bold text-[#0c264d] mb-1">DSM-5-TR</div>
            <p className="text-sm text-gray-700">
              The primary manual used in the United States. To meet criteria, an individual must show persistent deficits in <strong>social communication</strong> and exhibit <strong>restricted/repetitive behaviors</strong> that began in early development and cause clinically significant impairment.<sup>1</sup>
            </p>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-4">
            <div className="font-bold text-[#0c264d] mb-1">ICD-11</div>
            <p className="text-sm text-gray-700">
              The World Health Organization's manual, used globally. It closely aligns with the DSM-5 but places a slightly higher emphasis on the impact of co-occurring intellectual development disorders and language impairment.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Medical and Genetic Testing</h3>
        <p className="text-sm mb-4">
          While not required to diagnose autism, medical and genetic testing is commonly recommended for individuals of all ages to identify genetic causes or rule out conditions that mimic autistic traits:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="bg-gradient-to-br from-[#e0f2fe] to-white rounded-lg p-4 border border-[#0A9DC4]/20">
            <Dna className="w-6 h-6 text-[#0A9DC4] mb-2" />
            <div className="font-bold text-[#0c264d] mb-1">Genetic Testing</div>
            <div className="text-sm">Chromosomal microarray to identify genetic causes. Recommended for all with ASD diagnosis. Identifies variants in ~10-20% of cases.</div>
          </div>

          <div className="bg-gradient-to-br from-[#fef3c7] to-white rounded-lg p-4 border border-[#ffd166]/30">
            <Microscope className="w-6 h-6 text-[#d97706] mb-2" />
            <div className="font-bold text-[#0c264d] mb-1">Metabolic Screening</div>
            <div className="text-sm">If specific clinical features suggest metabolic disorder (regression, seizures, dysmorphic features).</div>
          </div>

          <div className="bg-gradient-to-br from-[#d1fae5] to-white rounded-lg p-4 border border-[#10b981]/20">
            <Zap className="w-6 h-6 text-[#10b981] mb-2" />
            <div className="font-bold text-[#0c264d] mb-1">EEG</div>
            <div className="text-sm">Electroencephalogram if seizures suspected or developmental regression occurred.</div>
          </div>

          <div className="bg-gradient-to-br from-[#fce7f3] to-white rounded-lg p-4 border border-[#f472b6]/20">
            <Ear className="w-6 h-6 text-[#f472b6] mb-2" />
            <div className="font-bold text-[#0c264d] mb-1">Hearing Test</div>
            <div className="text-sm">Essential to rule out hearing loss as cause of language delay or reduced response to name.</div>
          </div>

          <div className="bg-gradient-to-br from-[#ede9fe] to-white rounded-lg p-4 border border-[#8b5cf6]/20">
            <Droplets className="w-6 h-6 text-[#8b5cf6] mb-2" />
            <div className="font-bold text-[#0c264d] mb-1">Lead Screening</div>
            <div className="text-sm">If pica (eating non-food items) or environmental lead exposure is present in children.</div>
          </div>
        </div>
      </div>

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
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>World Health Organization. (2019). <i>International statistical classification of diseases and related health problems</i> (11th ed.).</li>
          </ul>
        </div>
      </div>
    </article>
  );
}