import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

interface MythsMisconceptionsProps {
  setCurrentArticle?: (article: string) => void;
}

export function MythsMisconceptions({ setCurrentArticle }: MythsMisconceptionsProps) {
  return (
    <article className="max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      
      <div className="bg-[#e0f7fa] p-6 rounded-lg text-[#0c264d]">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Myths & Misconceptions</h2>
        
        <p className="mb-8 leading-relaxed text-[#0c264d]">
          Because autism was historically misunderstood by both the medical community and the media, several persistent myths continue to circulate. Understanding what does <strong>not</strong> cause autism, and clearing up these misconceptions, is vital for creating a world that truly supports autistic individuals.
        </p>

        <div className="bg-white rounded-xl shadow-md border-2 border-red-100 p-6 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <ImageWithFallback 
                src="/images/autism/autism-causes-Mythstab-vax.webp" 
                alt="Scientific debunking of vaccine myths"
                className="w-full rounded-xl shadow-sm border-2 border-gray-100"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-red-500 font-bold text-xl mb-2 flex items-center gap-2">
                <span>✗</span> The Vaccine Myth
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Extensive global studies involving millions of children have consistently shown <strong>no link</strong> between vaccines (including the MMR vaccine) and autism.<sup>1</sup>
              </p>
              <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-500">
                <p className="text-sm text-green-900 leading-relaxed">
                  <strong>The Fact:</strong> The original 1998 study that suggested a link was found to be highly fraudulent and was fully retracted. Modern science conclusively confirms vaccines are safe and do not cause ASD.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-cyan-400 mb-8">
          <h3 className="font-bold mb-2 text-lg font-spartan text-[#0c264d]">
            <span className="text-red-500 mr-2">✗</span> Myth: Specific diets (like GFCF) can "cure" autism.
          </h3>
          <h4 className="font-bold text-green-600 mb-3 text-base">
            <span className="mr-2">✓</span> Fact: Diets don't change neurology, but they can alleviate severe, hidden physical pain.
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            There is no diet that "cures" autism, but many parents report dramatic behavioral improvements when putting their child on a Gluten-Free/Casein-Free (GFCF) diet. Why? The answer lies in the gut. Research shows that autistic children are up to <strong>4 times more likely</strong> to experience chronic gastrointestinal (GI) issues, with 40% to 80% suffering from chronic abdominal pain or GI distress.<sup>2</sup> 
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Many also experience "leaky gut" (increased intestinal permeability), where the gut lining is inflamed.<sup>3</sup> If a child with severe GI inflammation is non-speaking or struggles with interoception (feeling internal body signals), they cannot say, "My stomach cramps when I eat wheat." They express that pain through meltdowns, self-injury, or losing focus. When a specialized diet removes the inflammatory foods, the stomach stops hurting, and the distress behaviors vanish. The diet didn't cure the autism; it removed the physical pain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-gray-400">
            <h3 className="font-bold mb-2 text-lg font-spartan text-[#0c264d]">
              <span className="text-red-500 mr-2">✗</span> Myth: "Refrigerator Mothers"
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              In the 1950s, a devastatingly harmful theory suggested that "cold" or unaffectionate parenting caused autism. <strong>Research has entirely debunked this.</strong><sup>4, 5</sup> Autism is a biological and neurological developmental difference, not the result of parenting style or a lack of love.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#2abcd4]">
            <h3 className="font-bold mb-2 text-lg font-spartan text-[#0c264d]">
              <span className="text-red-500 mr-2">✗</span> Myth: Lack of Empathy
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Many autistic individuals actually experience <em>hyper-empathy</em>. Researchers now recognize the <strong>"Double Empathy Problem."</strong><sup>6</sup> It isn't that autistic people lack empathy; rather, autistic and neurotypical people struggle to read <em>each other's</em> unique social cues. Autistic people show profound empathy when communicating with one another.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#ffd166]">
            <h3 className="font-bold mb-2 text-lg font-spartan text-[#0c264d]">
              <span className="text-red-500 mr-2">✗</span> Myth: It's a "Boy's Condition"
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Historically, the diagnostic criteria were primarily based on how autism presents in young boys. Autistic girls often present differently, and intense societal pressure forces them to "mask" or mimic neurotypical behaviors much earlier.<sup>7</sup> This leads to generations of women only being diagnosed in adulthood after severe autistic burnout.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#0c264d]">
            <h3 className="font-bold mb-2 text-lg font-spartan text-[#0c264d]">
              <span className="text-red-500 mr-2">✗</span> Myth: The "Rain Man" Savant
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Media often relies on the trope of the autistic genius. In reality, "savant syndrome" is exceptionally rare, occurring in only about 10% of the autistic population.<sup>8</sup> Expecting every autistic person to have a superhuman academic skill places unfair expectations on them and invalidates their real support needs.
            </p>
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
            <p>1. Hviid, A., et al. (2019). Measles, Mumps, Rubella Vaccination and Autism: A Nationwide Cohort Study. <i>Annals of Internal Medicine</i>.</p>
            <p>2. McElhanon, B. O., et al. (2014). Gastrointestinal symptoms in autism spectrum disorder: a meta-analysis. <i>Pediatrics</i>.</p>
            <p>3. Fiorentino, M., et al. (2016). Blood-brain barrier and intestinal epithelial barrier alterations in autism spectrum disorders. <i>Molecular Autism</i>.</p>
            <p>4. Rimland, B. (1964). <i>Infantile Autism: The Syndrome and Its Implications for a Neural Theory of Behavior</i>. Appleton-Century-Crofts.</p>
            <p>5. Folstein, S., & Rutter, M. (1977). Infantile Autism: A Genetic Study of 21 Twin Pairs. <i>Journal of Child Psychology and Psychiatry</i>.</p>
            <p>6. Milton, D. E. (2012). On the ontological status of autism: the 'double empathy problem'. <i>Disability & Society</i>.</p>
            <p>7. Loomes, R., et al. (2017). What is the male-to-female ratio in autism spectrum disorder? A systematic review and meta-analysis. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>.</p>
            <p>8. Treffert, D. A. (2009). The savant syndrome: an extraordinary condition. A synopsis: past, present, future. <i>Philosophical Transactions of the Royal Society B: Biological Sciences</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
            <li>Institute of Medicine (US) Immunization Safety Review Committee. (2004). <i>Immunization Safety Review: Vaccines and Autism</i>. National Academies Press.</li>
            <li>Piwowarczyk, A., et al. (2018). Gluten- and casein-free diet and autism spectrum disorders in children: a systematic review. <i>European Journal of Nutrition</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}