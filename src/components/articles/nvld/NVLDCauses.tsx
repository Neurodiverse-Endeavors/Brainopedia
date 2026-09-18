import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Activity, Network, Stethoscope, Dna, Baby, ShieldAlert, XCircle, Microscope, Search } from 'lucide-react';

interface NVLDCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function NVLDCauses({ setCurrentArticle, initialTab }: NVLDCausesProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'biology');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          NVLD: Causes & Origins
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('nvld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About NVLD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('nvld')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About NVLD
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('biology')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'biology'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Biology & Brain
        </button>
        <button
          onClick={() => setActiveTab('development')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'development'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Development & Overlap
        </button>
        <button
          onClick={() => setActiveTab('myths')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'myths'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Myths & Research
        </button>
      </div>

      {/* ==========================================
          TAB 1: BIOLOGY & BRAIN
      ========================================== */}
      {activeTab === 'biology' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Neurological Basis Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Neurological Basis</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-causes-neurology.webp"
              alt="Brain scan showing right hemisphere and white matter"
              className="w-64 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Unlike some learning challenges that are heavily influenced by environment or instruction, Nonverbal Learning Disability has strong, distinct neurobiological underpinnings. The causes are not yet fully understood, but decades of research point directly to neurological differences in how specific areas of the brain develop and communicate.<sup className="text-[#10b981] font-bold ml-0.5">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both mt-6">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Brain className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Right Hemisphere Dysfunction</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The right hemisphere of the brain specializes in visual-spatial processing and nonverbal perception. NVLD strongly aligns with early deficits or dysfunction specifically within this right hemisphere, while the left (verbal) hemisphere remains highly preserved.<sup className="text-[#10b981] font-bold ml-0.5">2</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Network className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">White Matter Hypothesis</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Cerebral white matter acts as the brain's "cabling," connecting different regions. Rourke’s model suggests NVLD stems from damage or dysfunction in these white matter pathways, making it difficult for the brain to integrate complex visual information.<sup className="text-[#10b981] font-bold ml-0.5">3</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4 md:col-span-2">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Activity className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Brain Imaging Findings</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Modern neuroimaging studies consistently show abnormalities in white matter volume and differences in the corpus callosum (the structure connecting the two hemispheres) in individuals exhibiting the NVLD profile.<sup className="text-[#10b981] font-bold ml-0.5">4</sup></p>
                </div>
              </div>
            </div>
          </div>

          {/* Genetics & Medical Factors Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Genetics & Medical Risk Factors</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-causes-genetics-hero.webp"
              alt="Medical and genetic imagery"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              While NVLD is often idiopathic (arising spontaneously without a known cause), it frequently presents secondary to early medical events or genetic predispositions that impact the brain's early structural development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="bg-[#fffbeb] p-3 rounded-full border border-[#ffd166] border-opacity-50 mb-3">
                  <Dna className="text-[#d4a017] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Familial Patterns</h3>
                <p className="text-xs text-slate-700 leading-relaxed">NVLD appears to run in families. While specific genetic markers are still being researched, a family history of learning disabilities or autism spectrum traits significantly increases the likelihood of an NVLD profile.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
                <div className="bg-[#fffbeb] p-3 rounded-full border border-[#ffd166] border-opacity-50 mb-3">
                  <Stethoscope className="text-[#d4a017] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Acquired Conditions</h3>
                <p className="text-xs text-slate-700 leading-relaxed">NVLD-like symptoms frequently emerge following medical conditions that impact white matter, such as hydrocephalus, brain tumors, multiple sclerosis, or early traumatic brain injury to the right hemisphere.<sup className="text-[#10b981] font-bold ml-0.5">5</sup></p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
                <div className="bg-[#fffbeb] p-3 rounded-full border border-[#ffd166] border-opacity-50 mb-3">
                  <Baby className="text-[#d4a017] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Perinatal Complications</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Premature birth and very low birth weight are significant risk factors, as the brain's white matter tracts are incredibly vulnerable to damage or oxygen deprivation during early development.<sup className="text-[#10b981] font-bold ml-0.5">1</sup></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: DEVELOPMENT & OVERLAP
      ========================================== */}
      {activeTab === 'development' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Developmental Trajectory Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Developmental Trajectory</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-causes-development.webp"
              alt="Brain development timeline"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              NVLD is neurodevelopmental, meaning it is present from birth, but the symptoms often remain hidden during early childhood. Because the right hemisphere of the brain develops at a different pace than the left hemisphere, the deficits in spatial and social processing only become obvious as academic and social demands mature.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-sm border-b border-gray-200 pb-2">The Masking Effect</h3>
                <p className="text-xs text-slate-700 leading-relaxed">In early childhood, education is heavily focused on language acquisition and reading—areas where the NVLD brain excels. These early verbal strengths frequently mask underlying spatial deficits until upper elementary school.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-sm border-b border-gray-200 pb-2">Increasing Demands</h3>
                <p className="text-xs text-slate-700 leading-relaxed">As a student enters middle school, math becomes abstract and visual, and social interactions rely heavily on unspoken nuances. It is the environment's increasing demand for right-hemisphere processing that finally exposes the condition.</p>
              </div>
            </div>
          </div>

          {/* Overlap Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Relationship to Other Conditions</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-causes-overlap-hero.webp"
              alt="Network connections showing condition overlap"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because neurodevelopmental pathways are deeply interconnected, NVLD shares significant biological etiology with other learning and developmental profiles, frequently leading to co-occurring conditions or diagnostic confusion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <h3 className="text-[#0c264d] font-bold mb-3 text-sm border-b border-[#2abcd4] border-opacity-20 pb-2">Autism Spectrum Disorder</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Significant overlap exists between NVLD and ASD, as they share profound social and nonverbal communication difficulties.</li>
                  <li>Many researchers believe they share common neurological underpinnings, with some arguing NVLD belongs on the broader autism spectrum.</li>
                  <li>The primary biological distinction is based on the presence of restricted interests and repetitive behaviors (core to ASD, but not NVLD).</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <h3 className="text-[#0c264d] font-bold mb-3 text-sm border-b border-[#2abcd4] border-opacity-20 pb-2">Developmental Coordination</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Both NVLD and Developmental Coordination Disorder (Dyspraxia) involve significant motor coordination difficulties and clumsiness.</li>
                  <li>However, NVLD includes a much broader cognitive profile of visual-spatial deficits and social challenges not inherently present in motor disorders alone.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: MYTHS & RESEARCH
      ========================================== */}
      {activeTab === 'myths' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Myths Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">What NVLD Is NOT Caused By</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-causes-myths.webp"
              alt="Shattering misconceptions"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Because children with NVLD are highly verbal and intelligent, their severe struggles with spatial reasoning, math, and social integration are frequently misunderstood by teachers and parents as behavioral choices. It is critical to understand that NVLD is a structural, neurological difference.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-red-200 flex items-center gap-3">
                <XCircle className="text-red-500 w-5 h-5 shrink-0" />
                <p className="text-xs text-slate-700 font-bold">NOT caused by poor parenting or a bad home environment.</p>
              </div>
              
              <div className="bg-white p-3 rounded-lg shadow-sm border border-red-200 flex items-center gap-3">
                <XCircle className="text-red-500 w-5 h-5 shrink-0" />
                <p className="text-xs text-slate-700 font-bold">NOT a result of laziness, lack of effort, or defiance.</p>
              </div>

              <div className="bg-white p-3 rounded-lg shadow-sm border border-red-200 flex items-center gap-3">
                <XCircle className="text-red-500 w-5 h-5 shrink-0" />
                <p className="text-xs text-slate-700 font-bold">NOT caused by low intelligence (verbal IQ is often gifted).</p>
              </div>

              <div className="bg-white p-3 rounded-lg shadow-sm border border-red-200 flex items-center gap-3">
                <XCircle className="text-red-500 w-5 h-5 shrink-0" />
                <p className="text-xs text-slate-700 font-bold">NOT the result of inadequate education or bad teachers.</p>
              </div>
            </div>
          </div>

          {/* Research Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Current Research & Future Directions</h2>
            
            <ImageWithFallback 
              src="/images/nvld/nvld-causes-research-hero.webp"
              alt="Scientific research and data analysis"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full border border-[#0c264d] border-opacity-20 mb-3">
                  <Microscope className="text-[#0c264d] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Ongoing Studies</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 text-left">
                  <li>Advanced fMRI neuroimaging research mapping the exact structural brain differences in the right hemisphere.</li>
                  <li>Longitudinal studies tracking how the NVLD profile develops and changes from early childhood into adulthood.</li>
                  <li>Genetic sequencing studies exploring the hereditary overlap with the autism spectrum.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full border border-[#0c264d] border-opacity-20 mb-3">
                  <Search className="text-[#0c264d] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Future Goals</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2 text-left">
                  <li>Establishing universally accepted diagnostic criteria to advocate for official inclusion in the DSM.</li>
                  <li>Identifying early biological biomarkers to allow for intervention before academic failure occurs.</li>
                  <li>Developing targeted, evidence-based academic interventions specific to visual-spatial learners.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('nvld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About NVLD
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p>1. Rourke, B. P. (1989). <i>Nonverbal learning disabilities: The syndrome and the model</i>. Guilford Press.</p>
            <p>2. Semrud-Clikeman, M., & Hynd, G. W. (1990). Right hemispheric dysfunction in nonverbal learning disabilities: Social, academic, and adaptive functioning in adults and children. <i>Psychological Bulletin</i>.</p>
            <p>3. Rourke, B. P. (1987). Syndrome of nonverbal learning disabilities: The final common pathway of white-matter disease/dysfunction? <i>The Clinical Neuropsychologist</i>.</p>
            <p>4. Fine, J. G., Semrud-Clikeman, M., Bledsoe, J. C., & Musielak, K. A. (2013). A critical review of the literature on NLD as a developmental disorder. <i>Child Neuropsychology</i>.</p>
            <p>5. Bellinger, D. C., Wypij, D., duPlessis, A. J., Rappaport, L. A., Jonas, R. A., Wernovsky, G., & Newburger, J. W. (2003). Neurodevelopmental status at eight years in children with dextro-transposition of the great arteries. <i>The Journal of Thoracic and Cardiovascular Surgery</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Klin, A., Volkmar, F. R., Sparrow, S. S., Cicchetti, D. V., & Rourke, B. P. (1995). Validity and neuropsychological characterization of Asperger syndrome: Convergence with nonverbal learning disabilities syndrome. <i>Journal of Child Psychology and Psychiatry</i>.</li>
            <li>Mammarella, I. C., & Cornoldi, C. (2014). An analysis of the criteria used to diagnose children with nonverbal learning disability (NLD). <i>Child Neuropsychology</i>.</li>
            <li>Thompson, S. (1997). <i>The source for nonverbal learning disorders</i>. LinguiSystems.</li>
          </ul>
        </div>
      </div>

    </article>
  );
}