import { ImageWithFallback } from "../../../figma/ImageWithFallback";

/* ─── THE GUEST LIST (Interface) ─── */
interface RelationshipsContentProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function RelationshipsContent({ setCurrentArticle }: RelationshipsContentProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-fadeIn">
      <section className="mb-10">
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">
            Relationships & Social Life
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            
            {/* Friendships Card */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Friendships</h3>
              </div>
              
              <div className="mx-auto w-40 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-RStab-friends.webp" 
                    alt="Graphic representing autistic friendships"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Autistic people form deep, meaningful friendships, though the patterns of these connections may differ from neurotypical expectations:
              </p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                <li><strong>Quality over Quantity:</strong> Many prefer one or two intense, loyal friendships over a large social circle.</li>
                <li><strong>Shared Interests:</strong> Connections are often built around "parallel play" or shared deep passions rather than small talk.</li>
                <li><strong>The "Autistic-Autistic" Bond:</strong> Many report that friendships with other neurodivergent people feel more natural and require less "masking."<sup>1, 2</sup></li>
                <li><strong>Digital Connection:</strong> Online communities can provide vital social outlets that are less sensory-taxing than in-person hangouts.</li>
              </ul>
            </div>

            {/* Romantic Relationships Card */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Romantic Relationships</h3>
              </div>
              
              <div className="mx-auto w-40 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-RStab-romance.webp" 
                    alt="Graphic representing romantic relationships"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Many autistic people lead fulfilling romantic lives, bringing unique strengths like radical honesty and deep devotion to their partners:<sup>4</sup>
              </p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                <li><strong>Communication Styles:</strong> Direct communication can be a massive strength, reducing the "mind-reading" common in many relationships.</li>
                <li><strong>Sensory Intimacy:</strong> Navigating physical touch requires open dialogue about sensory boundaries and preferences.</li>
                <li><strong>Neurodiverse Couples:</strong> Relationships between autistic and neurotypical partners thrive when both parties learn each other's "social languages."</li>
              </ul>
            </div>

            {/* Family Dynamics Card */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Family Relationships</h3>
              </div>
              
              <div className="mx-auto w-40 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-RStab-family.webp" 
                    alt="Graphic representing family relationships and dynamics"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Autism often runs in families, creating unique multi-generational dynamics:
              </p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                <li><strong>Acceptance:</strong> Family understanding is the single greatest predictor of long-term wellbeing for autistic individuals.<sup>3</sup></li>
                <li><strong>Autistic Parenting:</strong> Many autistic adults are parents themselves, often finding deep empathy for their children's sensory or social needs.<sup>5</sup></li>
                <li><strong>Renegotiating Autonomy:</strong> As autistic adults age, family relationships often shift toward "supported decision-making" rather than guardianship.</li>
              </ul>
            </div>

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
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b-2 border-[#10b981] pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Crompton, C. J., et al. (2020). Autistic peer-to-peer information transfer is highly effective. <i>Autism</i>.</p>
            <p>2. Milton, D. E. (2012). On the ontological status of autism: the 'double empathy problem'. <i>Disability & Society</i>.</p>
            <p>3. Lewis, L. F. (2017). Realizing a diagnosis of autism spectrum disorder as an adult. <i>International Journal of Mental Health Nursing</i>.</p>
            <p>4. Hancock, G., et al. (2020). Autistic adults' experiences of romantic relationships. <i>Autism</i>.</p>
            <p>5. Talbott, M. R., et al. (2023). Love, joy, and a lens of childhood trauma: Exploring factors that influence autistic parenting. <i>Autism</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b-2 border-[#2abcd4] pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
            <li>Autistic Women & Nonbinary Network (AWN). Community Resources on Relationships.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}