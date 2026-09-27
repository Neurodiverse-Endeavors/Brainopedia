import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

interface EnvironmentalFactorsProps {
  setCurrentArticle?: (article: string) => void;
}

export function EnvironmentalFactors({ setCurrentArticle }: EnvironmentalFactorsProps) {
  return (
    <article className="space-y-6 max-w-full w-full text-[#0c264d] [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental Factors</h2>
        
        <ImageWithFallback 
          src="/images/autism/autism-causes-Envirotab-pregnant.webp" 
          alt="Pregnant woman representing environmental factors"
          className="w-48 h-auto float-left mr-6 mb-4 rounded-xl shadow-md border border-gray-300"
        />
      
        <p className="mb-4 leading-relaxed text-[#0c264d]">
          When geneticists and researchers talk about the "environment" in relation to autism, they aren't just talking about trees, weather, or pollution. In developmental biology, "environmental factors" refer to any non-genetic biological influence that affects a child's development, particularly during the critical prenatal window.
        </p>

        <p className="mb-8 leading-relaxed text-[#0c264d]">
          Research indicates that while autism is highly heritable, these non-genetic factors—such as maternal immune responses, metabolic conditions, or exposure to certain medications in utero—can interact with a child's genetic blueprint to influence brain development.<sup>2</sup>
        </p>
      </div>

      <div className="bg-[#ffd166]/50 border-l-4 border-[#2abcd4] p-6 rounded-xl shadow-sm my-8 clear-both">
        <h3 className="text-[#0c264d] font-bold text-lg mb-3">
          Understanding the "Natal" Timeline
        </h3>
        <p className="text-sm text-gray-700 mb-5 leading-relaxed">
          When researching environmental factors that can influence neurodevelopment, you will frequently encounter these medical terms describing the different stages of early life:
        </p>
        
        <div className="space-y-5">
          <div className="bg-white p-4 rounded-lg border border-[#0A9DC4]/20 shadow-sm">
            <h4 className="text-[#0A9DC4] font-bold text-sm uppercase tracking-wider mb-1">Prenatal (or Antenatal)</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>When:</strong> During pregnancy, before the baby is born.<br/>
              <strong>Environment:</strong> Factors during this time include maternal health, nutrition, stress levels, and the baby's exposure to the mother's internal environment.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-[#0A9DC4]/20 shadow-sm">
            <h4 className="text-[#0A9DC4] font-bold text-sm uppercase tracking-wider mb-1">Perinatal</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>When:</strong> Around the time of birth (typically the weeks immediately right before, during, and right after delivery).<br/>
              <strong>Environment:</strong> Focuses on factors during the labor and delivery process itself, such as oxygen supply, birth weight, or any complications during birth.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-[#0A9DC4]/20 shadow-sm">
            <h4 className="text-[#0A9DC4] font-bold text-sm uppercase tracking-wider mb-1">Neonatal</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>When:</strong> Immediately after birth (specifically the first 28 days of life).<br/>
              <strong>Environment:</strong> Relates to the newborn's immediate adaptation to the outside world, including early feeding, sleep environments, and neonatal medical care.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-[#0A9DC4]/20 shadow-sm">
            <h4 className="text-[#0A9DC4] font-bold text-sm uppercase tracking-wider mb-1">Postnatal</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>When:</strong> After birth (usually referring to the first year of life and beyond).<br/>
              <strong>Environment:</strong> Environmental factors here shift heavily to the external world—the home environment, family dynamics, early social interactions, and childhood experiences.
            </p>
          </div>
        </div>
      </div>
      
      <div className="clear-both"></div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#ffd166]">
          <h3 className="font-bold mb-3 text-lg font-spartan text-[#0c264d]">Prenatal Factors</h3>
          <p className="text-sm mb-3 text-[#0c264d] opacity-90 italic">Factors during pregnancy associated with increased risk:</p>
          <ul className="list-disc ml-5 space-y-2 text-sm text-[#0c264d] opacity-90">
            <li><strong>Advanced parental age:</strong> Both maternal and paternal age over 35.<sup>2</sup></li>
            <li><strong>Maternal infections:</strong> Severe infections, particularly in the second trimester.<sup>3</sup></li>
            <li><strong>Maternal immune activation:</strong> Immune responses affecting fetal brain development.<sup>3</sup></li>
            <li><strong>Certain medications:</strong> Valproic acid exposure during pregnancy.<sup>4</sup></li>
            <li><strong>Prenatal nutrition:</strong> Deficiencies in nutrients like folic acid.<sup>3</sup></li>
            <li><strong>Gestational diabetes:</strong> Metabolic conditions affecting development.<sup>1</sup></li>
            <li><strong>Air pollution:</strong> Exposure during pregnancy and early life.<sup>3</sup></li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#53c3d5]">
          <h3 className="font-bold mb-3 text-lg font-spartan text-[#0c264d]">Perinatal & Neonatal Factors</h3>
          <p className="text-sm mb-3 text-[#0c264d] opacity-90 italic">Complications around birth associated with modest risk increases:</p>
          <ul className="list-disc ml-5 space-y-2 text-sm text-[#0c264d] opacity-90">
            <li><strong>Preterm birth:</strong> Birth before 37 weeks, especially very preterm birth.<sup>1</sup></li>
            <li><strong>Low birth weight:</strong> Particularly very low birth weight infants.<sup>1</sup></li>
            <li><strong>Birth complications:</strong> Significant oxygen deprivation (hypoxia).<sup>3</sup></li>
            <li><strong>Multiple births:</strong> Twins/multiples have a slightly elevated risk.<sup>1</sup></li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0c264d] mb-8">
        <h3 className="font-bold mb-3 text-lg font-spartan text-[#0c264d]">The Complexity of Antidepressants (SSRIs)</h3>
        <p className="text-sm mb-4 leading-relaxed text-[#0c264d]">
          Parents often ask about the safety of taking antidepressants during pregnancy. Studying this is notoriously difficult; researchers cannot ethically run randomized trials on pregnant women, so they must rely on observational data. While early studies suggested a slight link between SSRIs and autism, massive, rigorous sibling-studies revealed that when researchers adjust for the mother's underlying depression and psychiatric genetics, the link to the medication itself largely disappears.<sup>5</sup> 
        </p>
        
        <h4 className="font-bold text-[#0c264d] text-sm mb-1">The Third Trimester Debate</h4>
        <p className="text-sm text-[#0c264d] leading-relaxed">
          Historically, some doctors advised tapering off SSRIs in the third trimester. This was primarily to prevent "neonatal adaptation syndrome" (mild, temporary withdrawal symptoms like jitteriness in the newborn), not because it caused autism. Today, major medical guidelines often advise against tapering if it risks severe postpartum depression. Untreated maternal depression carries intense risks for fetal development, and a healthy, bonded mother is the most critical environmental factor for a newborn's development.
        </p>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-[#00bf63] mb-10">
        <h3 className="font-bold mb-4 text-xl font-spartan text-[#0c264d]">Gene-Environment Interactions</h3>
        <p className="text-sm leading-relaxed text-[#0c264d]">
          Environmental factors likely don't act alone but interact with genetic susceptibility. Genetic vulnerability may determine which environmental factors affect a child, or environmental factors may "trigger" a genetic risk in susceptible individuals.<sup>2</sup>
        </p>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-[#53c3d5] mb-10">
        <h3 className="font-bold mb-4 text-xl font-spartan text-[#0c264d]">Vaccines, The Schedule & The Immune System</h3>
        
        <ImageWithFallback 
          src="/images/autism/autism-causes-Envirotab-SmallShot.webp" 
          alt="Toddler in nature"
          className="w-40 md:w-56 h-auto float-right ml-6 mb-4 rounded-xl shadow-sm border border-gray-200"
        />

        <p className="mb-4 text-sm leading-relaxed text-[#0c264d]">
          It is a deeply understandable, protective instinct for parents to worry about the "immunological load" of the vaccine schedule on a tiny infant. Many wonder if spacing vaccines out might be safer, particularly for a genetically susceptible child. Extensive, global research has conclusively proven that vaccines do not cause autism. To address parents' specific concerns about the <i>schedule</i>, researchers have thoroughly studied these critical areas:
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-[#0c264d] text-sm">1. The Antigen Load</h4>
            <p className="text-sm text-[#0c264d] leading-relaxed">
              Because modern vaccines are highly purified, the total "antigen load" (the immune-stimulating proteins) a child receives today from the <i>entire</i> schedule is a fraction of what a child received decades ago from just one or two shots. Clinical studies measuring the exact antigen load in children with and without autism show absolutely no difference.<sup>6</sup> 
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#0c264d] text-sm">2. "Why so early?" (The Hepatitis B Example)</h4>
            <p className="text-sm text-[#0c264d] leading-relaxed">
              Parents often ask why a 2-hour-old newborn needs a Hepatitis B shot. Hep B can be entirely asymptomatic in adults, and tests can yield false negatives. If transmitted during the fluids of childbirth, an infant has a 90% chance of developing a chronic, lifelong infection that frequently leads to liver failure or cancer. The newborn vaccine acts as an immediate, life-saving safety net.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#0c264d] text-sm">3. The Window of Vulnerability</h4>
            <p className="text-sm text-[#0c264d] leading-relaxed">
              The schedule is not designed for a doctor's convenience; it is meticulously timed to protect infants during their highest "window of vulnerability." Spacing out vaccines does not reduce autism risk; it artificially extends the amount of time an infant is unprotected from lethal diseases (like pertussis/whooping cough) during the exact months their airways are too small to handle them. Furthermore, spacing them out increases the number of trips to a pediatrician's waiting room, unnecessarily exposing the infant to everyday viruses like RSV.<sup>7</sup>
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#0c264d] text-sm">4. What if the baby is already sick?</h4>
            <p className="text-sm text-[#0c264d] leading-relaxed">
              For mild illnesses (like a runny nose or low-grade fever), an infant's immune system is capable of handling a vaccine safely. However, if a child has a moderate or severe illness (such as a high fever or an infection requiring hospitalization), pediatricians <i>will</i> recommend holding off on the vaccine. This is a clinical precaution to ensure that a normal, mild vaccine side-effect (like a temperature) isn't confused with the underlying illness getting dangerously worse. 
            
              Please consult your child's physician for medical guidance and personalized care.
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
            <p>1. Centers for Disease Control and Prevention. (2023). Autism Spectrum Disorder (ASD): Data and Statistics. <i>CDC</i>.</p>
            <p>2. Bai, D., et al. (2019). Association of genetic and environmental factors with autism in a 5-country cohort. <i>JAMA Psychiatry</i>.</p>
            <p>3. Modabbernia, A., et al. (2017). Environmental risk factors for autism: An evidence-based review of systematic reviews and meta-analyses. <i>Molecular Autism</i>.</p>
            <p>4. Lyall, K., et al. (2017). The changing epidemiology of autism spectrum disorders. <i>Annual Review of Public Health</i>.</p>
            <p>5. Brown, H. K., et al. (2017). Association Between Maternal Antidepressant Use During Pregnancy and Autism Spectrum Disorder: An Analysis of Sibling Subsets. <i>JAMA</i>.</p>
            <p>6. DeStefano, F., et al. (2013). Increasing exposure to antibody-stimulating proteins and polysaccharides in vaccines is not associated with risk of autism. <i>The Journal of Pediatrics</i>.</p>
            <p>7. Institute of Medicine (US) Committee on the Assessment of Studies of Health Outcomes Related to the Recommended Childhood Immunization Schedule. (2013). <i>The Childhood Immunization Schedule and Safety: Stakeholder Concerns, Scientific Evidence, and Future Studies</i>. National Academies Press.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Academy of Pediatrics (AAP). (2022). Vaccine Safety: Get the Facts. HealthyChildren.org.</li>
            <li>American Psychiatric Association. (2022). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
            <li>Lord, C., et al. (2018). Autism spectrum disorder. <i>The Lancet</i>.</li>
            <li>Taylor, L. E., et al. (2014). Vaccines are not associated with autism: An evidence-based meta-analysis of case-control and cohort studies. <i>Vaccine</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}