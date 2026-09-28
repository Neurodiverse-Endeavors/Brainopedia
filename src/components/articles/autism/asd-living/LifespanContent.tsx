import { ImageWithFallback } from "../../../figma/ImageWithFallback";

/* ─── THE GUEST LIST (Interface) ─── */
interface LifespanContentProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function LifespanContent({ setCurrentArticle }: LifespanContentProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-fadeIn">
      <section>
        <p className="mb-4 text-gray-800 leading-relaxed">
          Living with autism means experiencing the world differently—processing information, communicating, and 
          interacting in ways that diverge from neurotypical patterns. <strong>The autistic experience varies tremendously:</strong> some individuals develop effective coping strategies or master the art of masking, allowing them to perform 
          at their highest capacity while still facing internal struggles, while others with the highest support needs 
          require comprehensive assistance across their entire lifespan in areas such as communication, daily living, 
          and safety.
        </p>
        <p className="mb-8 text-gray-800 leading-relaxed">
          While autism presents challenges, many autistic individuals lead fulfilling, meaningful lives 
          and contribute uniquely to their communities. Quality of life for autistic people depends not just on the 
          characteristics of autism itself, but on access to support, acceptance, and accommodation.
        </p>
      </section>

      <section className="space-y-8">
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">
            Autism Across the Lifespan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Early Childhood */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Early Childhood</h3>
              </div>
              
              <div className="mx-auto w-40 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-Acrosstab-early-childhood.webp" 
                    alt="Graphic representing early childhood stage"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Early signs often appear before age 2, though diagnosis may come later.<sup>1</sup>
              </p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                <li>Focus on early intervention and developmental therapies</li>
                <li>Navigating initial diagnosis and understanding the child's unique profile</li>
                <li>Developing communication systems (verbal or AAC)</li>
              </ul>
            </div>

            {/* School Age */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">School Age</h3>
              </div>

              <div className="mx-auto w-40 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-Acrosstab-school-years.webp" 
                    alt="Graphic representing school years stage"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Increasing social demands and structured environments present new challenges.
              </p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                <li>Navigating Special Education (IEPs/504 Plans)</li>
                <li>Social difficulties often become more apparent</li>
                <li>Many develop coping mechanisms, leading to masking and autistic burnout<sup>2</sup></li>
              </ul>
            </div>

            {/* Adolescence */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Adolescence & Transition</h3>
              </div>

              <div className="mx-auto w-40 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-Acrosstab-adolescence.webp" 
                    alt="Graphic representing adolescence and transition stage"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                A complex period combining puberty with changing social landscapes.
              </p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                <li>High rates of co-occurring anxiety and depression emerge<sup>3</sup></li>
                <li>Executive functioning demands increase significantly</li>
                <li>Critical period for transition planning toward adulthood</li>
              </ul>
            </div>

            {/* Adulthood */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Adulthood</h3>
              </div>
              
              {/* NEW ADULTHOOD GRAPHIC */}
              <div className="mx-auto w-40 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-Acrosstab-adulthood.webp" 
                    alt="Graphic representing adulthood stage"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Autism is a lifelong condition; autistic children become autistic adults.
              </p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                <li>Navigating higher education and employment<sup>4</sup></li>
                <li>Relationships: Friendships, romantic partnerships, and family dynamics</li>
                <li>Self-understanding: Late diagnosis often leads to profound self-discovery</li>
              </ul>
            </div>
          </div>

          {/* Aging */}
          <div className="bg-white p-5 rounded-md border-t-4 border-[#0c264d] shadow-sm mt-6 flex flex-col items-center">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg text-center">Aging</h3>
            
            <p className="mb-4 text-sm text-gray-700 text-center w-full max-w-2xl">
              Research on aging autistic adults is limited but growing:<sup>5</sup>
            </p>
            <ul className="list-disc ml-6 space-y-2 text-sm text-gray-700 w-full max-w-2xl">
              <li>Autism doesn't disappear; core characteristics persist throughout life</li>
              <li>Acceptance and reduced pressure to conform often come with age</li>
              <li>Need for autism-informed elder care and support systems</li>
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
            <p>1. Zwaigenbaum, L., et al. (2015). Early identification and interventions for autism spectrum disorder: Executive summary. <i>Pediatrics</i>.</p>
            <p>2. Hull, L., et al. (2017). 'Putting on my best normal': Social camouflaging in adults with autism spectrum conditions. <i>Journal of Autism and Developmental Disorders</i>.</p>
            <p>3. Simonoff, E., et al. (2008). Psychiatric disorders in children with autism spectrum disorders: Prevalence, comorbidity, and associated factors in a population-derived sample. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>.</p>
            <p>4. Howlin, P., et al. (2004). Adult outcome for children with autism. <i>Journal of Child Psychology and Psychiatry</i>.</p>
            <p>5. Happé, F., & Charlton, R. A. (2012). Aging in autism spectrum disorders: A mini-review. <i>Gerontology</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
            <li>National Institute of Mental Health. (2023). <i>Autism Spectrum Disorder Throughout the Life Course</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}