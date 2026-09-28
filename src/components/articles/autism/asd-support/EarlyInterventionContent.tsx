import { ImageWithFallback } from "../../../figma/ImageWithFallback";

interface EarlyInterventionContentProps {
  setCurrentArticle?: (article: string) => void;
}

export function EarlyInterventionContent({ setCurrentArticle }: EarlyInterventionContentProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Early Intervention (Ages 0-3)</h2>
        
        <p className="mb-6">
          Early intervention services can significantly impact developmental trajectories for autistic children. 
          A person-centered approach focuses on understanding symptoms, implementing effective strategies, and 
          connecting with appropriate services to improve individual lives.<sup>1</sup>
        </p>
    
      {/* --- CENTERED GRAPHIC video - SECTION 1 --- */} 
      <div className="text-center w-full mb-8"> 
        {/* The Wrapper: Reverted to original starting size */} 
        <div className="mx-auto w-48 md:w-64"> 
          <div className="rounded-lg shadow-md overflow-hidden bg-white">
            <video 
              src="/images/autism/autism-support-EarlyIntervtab-ages0to3.mp4" 
              poster="/images/autism/autism-support-EarlyIntervtab-ages0to3.webp"
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto block"
              aria-label="arrows surrounding brain symbolizing early intervention"
            />
          </div>
        </div> 
      </div>
      
        {/* Early Intervention Services */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Early Intervention Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Federal Programs</h4>
              </div>
              <p className="text-sm">
                Part C of IDEA provides early intervention services for infants and toddlers with developmental 
                delays, ages 0-3.<sup>2</sup>
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Service Coordination</h4>
              </div>
              <p className="text-sm">
                A service coordinator helps families navigate services and develop an Individualized Family 
                Service Plan (IFSP).<sup>2</sup>
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Home-Based Services</h4>
              </div>
              <p className="text-sm">
                Services often delivered in the child's natural environment—home, daycare, or community 
                settings.<sup>2</sup>
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Parent Coaching</h4>
              </div>
              <p className="text-sm">
                Teaching parents and caregivers strategies to support development throughout daily routines 
                and activities.<sup>3</sup>
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <h4 className="text-[#0c264d] font-bold text-lg">Evidence-Based Approaches</h4>
            </div>
            <p className="text-sm mb-3">
              Research-supported early intervention models include:
            </p>
            <ul className="space-y-1 text-xs">
              <li>• Early Start Denver Model (ESDM)</li>
              <li>• Pivotal Response Treatment (PRT)</li>
              <li>• Naturalistic Developmental Behavioral Interventions (NDBIs)<sup>4</sup></li>
              <li>• Project ImPACT (parent-mediated intervention)<sup>5</sup></li>
            </ul>
          </div>
        </div>

        {/* --- NEW: ESSENTIAL US RESOURCES CALLOUT --- */}
        <div className="bg-[#f0f9ff] border-l-4 border-[#2abcd4] p-6 rounded-lg shadow-sm mb-8">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Essential US Early Intervention Resources</h3>
          <p className="text-sm mb-5">
            Navigating the Early Intervention (EI) landscape can be overwhelming. These authoritative external resources provide invaluable, deep-dive information into how the US system works:
          </p>
          
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-[#2abcd4] font-bold text-lg mt-0.5">→</span>
              <div>
                <a 
                  href="https://www.zerotothree.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-[#0c264d] underline hover:text-[#2abcd4] transition-colors text-base"
                >
                  Zero to Three
                </a>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  While not autism-specific, this is a premier organization that beautifully lays out the entire landscape of early childhood development and Early Intervention in the United States.
                </p>
              </div>
            </li>
            
            <li className="flex items-start gap-3">
              <span className="text-[#2abcd4] font-bold text-lg mt-0.5">→</span>
              <div>
                <a 
                  href="https://www.zerotothree.org/wp-content/uploads/2010/02/Georgetown-States-Early-Intervention.webp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-[#0c264d] underline hover:text-[#2abcd4] transition-colors text-base"
                >
                  State-by-State EI Eligibility Map
                </a>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  A visual graphic (originally sourced from Georgetown University) that illustrates how Early Intervention eligibility criteria vary dramatically across different US states.
                </p>
              </div>
            </li>
            
            <li className="flex items-start gap-3">
              <span className="text-[#2abcd4] font-bold text-lg mt-0.5">→</span>
              <div>
                <a 
                  href="https://www.ecfr.gov/current/title-34/subtitle-B/chapter-III/part-303" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-[#0c264d] underline hover:text-[#2abcd4] transition-colors text-base"
                >
                  eCFR Part 303: Early Intervention Federal Regulations
                </a>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  For those who want to read the exact letter of the law, this is the official Electronic Code of Federal Regulations detailing IDEA Part C (the federal grant program that assists states in operating EI services).
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* --- END NEW RESOURCES CALLOUT --- */}

        {/* Research on Early Intervention */}
        <div className="bg-[#ffd166] p-5 rounded-lg mb-8 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-[#0c264d] font-bold text-lg">Research on Early Intervention</h3>
          </div>
          <p className="text-[#0c264d] text-sm">
            Research shows that early, intensive intervention can improve outcomes, though every child's response is 
            individual.<sup>6</sup>
          </p>
        </div>

        {/* Researching Strategies */}
        <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Researching Strategies</h3>
          <p className="mb-6 text-sm">
            A diagnosis often brings the task of choosing effective supports and treatment approaches, which can 
            be stressful or manageable depending on the individual. Combining approaches is common, and a strong 
            support system with clear communication among the care team is essential for success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-2 text-center">Medically Driven</h4>
              <ul className="space-y-1 text-xs">
                <li>• Evidence-based methods</li>
                <li>• Clinical assessments</li>
                <li>• Structured protocols</li>
                <li>• Professional oversight</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-2 text-center">Educational & Social</h4>
              <ul className="space-y-1 text-xs">
                <li>• School-based supports</li>
                <li>• Community programs</li>
                <li>• Social skills groups</li>
                <li>• Peer connections</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <div className="text-center mb-3">
              </div>
              <h4 className="text-[#0c264d] font-bold mb-2 text-center">Needs-Guided</h4>
              <ul className="space-y-1 text-xs">
                <li>• Less structured choices</li>
                <li>• Individual preferences</li>
                <li>• Flexible approaches</li>
                <li>• Family-centered care</li>
              </ul>
            </div>
          </div>
        </div>

      {/* --- CENTERED GRAPHIC SECTION 2 --- */} 
      <div className="text-center w-full mb-8"> 
        {/* The Wrapper: Scaled to max-w-lg for a "bigger" but controlled presence */} 
        <div className="mx-auto w-full max-w-lg px-4"> 
          <ImageWithFallback 
            src="/images/autism/autism-support-EarlyIntervtab-ResStartegies.webp" 
            alt="Brainopedia roadmap showing path of EI"
          /> 
        </div> 
      </div>
      
        {/* Navigating Roadmaps */}
        <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Navigating Roadmaps</h3>
          <p className="mb-6 text-sm">
            Roadmaps outline the typical steps along an autism pathway, from diagnosis through life stages. 
            The overview spans the entire lifespan with resources organized into stage-specific roadmaps.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div className="flex-1">
                <div className="font-bold text-[#0c264d] mb-1">Early Intervention (Ages 0-3)</div>
                <div className="text-sm">Diagnosis, Part C services, IFSP development, home-based supports, 
                parent coaching, and naturalistic interventions.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-[#2abcd4] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div className="flex-1">
                <div className="font-bold text-[#0c264d] mb-1">School Years (Ages 3-21)<sup>7</sup></div>
                <div className="text-sm">IEP development, special education services, classroom accommodations, 
                therapies, and educational supports.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-[#ffd166] text-[#0c264d] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div className="flex-1">
                <div className="font-bold text-[#0c264d] mb-1">Transition Years (Ages 14-21)</div>
                <div className="text-sm">Transition planning, vocational training, post-secondary education 
                preparation, and independent living skills.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-[#0c264d] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <div className="flex-1">
                <div className="font-bold text-[#0c264d] mb-1">Young Adulthood (Ages 18-30)</div>
                <div className="text-sm">Employment, higher education, relationships, housing, financial 
                independence, and community participation.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-[#10b981] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</div>
              <div className="flex-1">
                <div className="font-bold text-[#0c264d] mb-1">Adulthood (Ages 30+)</div>
                <div className="text-sm">Career development, relationships, family planning, aging with autism, 
                healthcare navigation, and long-term support needs.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Provider Options & Services */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Provider Options & Services</h3>
          <p className="mb-6 text-sm">
            Explore provider options and relevant online documents. Discover organizations, navigate barriers, 
            and understand the types of information available to help you make informed choices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Who Offers Support</h4>
              </div>
              <ul className="space-y-1 text-xs">
                <li>• Developmental pediatricians</li>
                <li>• Speech-language pathologists</li>
                <li>• Occupational therapists</li>
                <li>• Behavior analysts (BCBAs)</li>
                <li>• Early intervention specialists</li>
                <li>• Service coordinators</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Organizations</h4>
              </div>
              <ul className="space-y-1 text-xs">
                <li>• State Part C programs</li>
                <li>• Regional centers</li>
                <li>• Parent training centers</li>
                <li>• Autism support organizations</li>
                <li>• Family resource centers</li>
                <li>• Community programs</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <h4 className="text-[#0c264d] font-bold text-lg">Navigating Barriers</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="text-center">
                <div className="font-bold text-[#0c264d] mb-1">Language</div>
                <div>Translation services, multilingual providers</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-[#0c264d] mb-1">Finances</div>
                <div>Free/low-cost services, sliding scales</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-[#0c264d] mb-1">Insurance</div>
                <div>Coverage navigation, Medicaid options</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-[#0c264d] mb-1">Where to Start</div>
                <div>Referral processes, first steps</div>
              </div>
            </div>
          </div>
        </div>

        {/* Understanding Symptoms During the Early Intervention Period */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Understanding Symptoms During the Early Intervention Period</h3>
          <p className="mb-4 text-sm">
            Exploring autism and neurodivergence sets the stage for deeper analysis: understanding symptoms helps 
            identify strengths and challenges for autistic individuals of all ages, caregivers, providers, and 
            the general public, with humane strategies to support understanding.
          </p>

          <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
            <p className="text-sm">
              <strong>For Complete Symptom Information:</strong> See the{' '}
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); setCurrentArticle?.('autism-symptoms'); }}
                className="text-[#0c264d] underline font-bold hover:text-[#2abcd4]"
              >
                Symptoms & Characteristics page
              </a>
              {' '}which includes a comprehensive Symptoms Wheel visual guide to understanding autistic experiences across all areas.
            </p>
          </div>
          
      {/* --- CENTERED GRAPHIC SECTION 3 --- */} 
      <div className="text-center w-full mb-8"> 
        {/* The Wrapper: Shrunk back down to match Graphic 1 */} 
        <div className="mx-auto w-48 md:w-64"> 
          <ImageWithFallback 
            src="/images/autism/autism-support-EarlyIntervtab-road-thru-the-years.webp" 
            alt="road symbolizing autism journey"
          /> 
        </div> 
      </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Re-framing Behaviors</h4>
              </div>
              <p className="text-sm">
                Understanding behaviors through a neurodivergent lens—from re-framing aggression as dysregulation 
                to recognizing communication attempts and sensory needs.
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Sensory Overload</h4>
              </div>
              <p className="text-sm">
                Recognizing signs of sensory overload, understanding individual sensory profiles, and 
                identifying triggers across environments.
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Communication Struggles</h4>
              </div>
              <p className="text-sm">
                Understanding diverse communication styles, recognizing nonverbal communication, and supporting 
                all forms of expression.
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Attention Needs</h4>
              </div>
              <p className="text-sm">
                Recognizing differences in attention patterns, understanding hyperfocus and distractibility, 
                and supporting individual attention styles.
              </p>
            </div>
          </div>
        </div>

        {/* Research & Outcomes */}
        <div className="bg-white border-l-4 border-[#10b981] p-5 rounded-md shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-3">
            <h4 className="text-[#0c264d] font-bold text-lg">Research on Early Intervention</h4>
          </div>
          <p className="text-sm">
            Research shows that early, intensive intervention can improve outcomes, though every child's 
            response is individual. The most effective programs are family-centered, delivered in natural 
            environments, and respect the child's neurodivergent development.<sup>6</sup>
          </p>
        </div>

        {/* Key Principle Callout */}
        <div className="bg-[#ffd166] border-2 border-[#0c264d] p-5 rounded-lg shadow-md">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg flex items-center gap-2">
            Remember
          </h3>
          <p className="text-sm">
            Early intervention isn't about "fixing" autism—it's about supporting development, building 
            communication skills, and helping families understand and support their autistic child. The goal 
            is to enhance quality of life and help children reach their individual potential, not to make 
            them less autistic.
          </p>
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
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Whitehouse, A., et al. (2021). A randomized controlled trial of a pre-emptive intervention for infants at high clinical risk for autism. <i>JAMA Pediatrics</i>.</p>
            <p>2. U.S. Department of Education. (2023). Individuals with Disabilities Education Act (IDEA) Part C: Infants and Toddlers with Disabilities. <i>ED.gov</i>.</p>
            <p>3. Oono, I. P., et al. (2013). Parent-mediated early intervention for young children with autism spectrum disorders (ASD). <i>Cochrane Database of Systematic Reviews</i>.</p>
            <p>4. Schreibman, L., et al. (2015). Naturalistic Developmental Behavioral Interventions: Empirically Validated Treatments for Autism Spectrum Disorder. <i>Journal of Autism and Developmental Disorders</i>.</p>
            <p>5. Ingersoll, B., & Wainer, A. (2013). Initial efficacy of Project ImPACT: A parent-mediated social communication intervention for young children with ASD. <i>Journal of Autism and Developmental Disorders</i>.</p>
            <p>6. Dawson, G., et al. (2010). Randomized, controlled trial of an intervention for toddlers with autism: the Early Start Denver Model. <i>Pediatrics</i>.</p>
            <p>7. U.S. Department of Education. (2023). Individuals with Disabilities Education Act (IDEA) Part B: Assistance for All Children with Disabilities. <i>ED.gov</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Academy of Pediatrics (AAP). Autism Spectrum Disorder: Early Intervention.</li>
            <li>Zero to Three. Early Intervention for Infants and Toddlers.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}