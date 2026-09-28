import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

/* ─── THE GUEST LIST (Interface) ─── */
interface IdentityCommunityContentProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function IdentityCommunityContent({ setCurrentArticle }: IdentityCommunityContentProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-fadeIn">
      <section className="mb-10">
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">
            Identity & Community
          </h2>

          {/* Grid for the two main cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-8">
            
            {/* Identity Development Card */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">The Journey of Identity</h3>
              </div>
              
              <div className="mx-auto w-40 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-ICtab-acceptance.webp" 
                    alt="Brain with infinity symbol representing all neurodiversity"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Understanding oneself as autistic is often a lifelong process of reframing experiences through a neuro-affirming lens:
              </p>
              <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
                <li><strong>Late Diagnosis:</strong> For many adults, a diagnosis provides a "missing piece," replacing years of self-criticism with self-understanding.<sup>1</sup></li>
                <li><strong>Moving Beyond Shame:</strong> Shifting from a "disorder" mindset to seeing autism as a natural neurological variation.</li>
                <li><strong>Disclosure:</strong> Navigating when and how to share one's autistic identity with employers, friends, or the public.</li>
              </ul>
            </div>

            {/* Culture & Rights Card */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Autistic Culture & Rights</h3>
              </div>
              
              <div className="mx-auto w-40 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <video 
                    src="/images/autism/autism-living-ICtab-legal-rights-autism.mp4" 
                    poster="/images/autism/autism-living-ICtab-legal-rights-autism.webp"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-auto block"
                    aria-label="Scales representing legal rights for autism"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                A vibrant culture has emerged, characterized by shared communication styles, humor, and a focus on self-advocacy:
              </p>
              <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
                <li><strong>Community Spaces:</strong> Online forums and local meetups where "autistic-to-autistic" communication flourishes.</li>
                <li><strong>Legal Rights:</strong> Leveraging the ADA (Americans with Disabilities Act) and other protections to ensure equal access.</li>
                <li><strong>Self-Advocacy:</strong> Learning to speak up for specific sensory or cognitive needs in public and private spaces.<sup>3</sup></li>
              </ul>
            </div>
            
          </div>

          {/* Neurodiversity Movement Section (Full Width Banner) */}
          <div className="bg-[#0c264d] text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-[#ffd166] font-bold mb-3 text-lg text-center uppercase tracking-wider">
              The Neurodiversity Perspective
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-center italic">
              "Autism is not a tragedy. The tragedy is the way society treats us."
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4 max-w-3xl mx-auto">
              <li className="flex items-start gap-2">
                <span className="text-[#ffd166]">✓</span>
                <span>Focus on <strong>acceptance</strong> over "cures."</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ffd166]">✓</span>
                <span>Celebrating autistic communication styles.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ffd166]">✓</span>
                <span>Challenging deficit-based narratives in medicine.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ffd166]">✓</span>
                <span><strong>Nothing About Us Without Us:</strong> Centering autistic voices.<sup>2</sup></span>
              </li>
            </ul>
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
            <p>1. Singer, J. (2017). <i>NeuroDiversity: The Birth of an Idea</i>. Published independently.</p>
            <p>2. Kapp, S. K. (Ed.). (2020). <i>Autistic Community and the Neurodiversity Movement: Stories from the Frontline</i>. Palgrave Macmillan.</p>
            <p>3. Botha, M., et al. (2020). 'Autism is me': an investigation of how autistic individuals make sense of autism and stigma. <i>Disability & Society</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Autistic Self Advocacy Network (ASAN). Welcome to the Autistic Community.</li>
            <li>Neurodiversity Network. Neurodiversity Terminology and Concepts.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}