import { ImageWithFallback } from "../../../figma/ImageWithFallback";

interface FamilyPrinciplesContentProps {
  setCurrentArticle?: (article: string) => void;
}

export function FamilyPrinciplesContent({ setCurrentArticle }: FamilyPrinciplesContentProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      {/* Family Support Section */}
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Family Support</h2>

        <p className="mb-6">
          Supporting an autistic family member impacts the whole family. Families need support, resources, 
          and understanding to thrive alongside their autistic loved ones.<sup>1</sup>
        </p>
                {/* --- CENTERED GRAPHIC SECTION 1 --- */} 
          <div className="text-center w-full mb-8"> 
          <div className="mx-auto w-64">
                      <div className="rounded-lg shadow-md overflow-hidden bg-white">
                        <ImageWithFallback 
                          src="/images/autism/autism-support-FPtab-3shoulders.webp" 
                          alt="Three family members with arms around shoulders showing family support"
                        /> 
                      </div>
                    </div> 
                  </div>    

        <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Family Support Resources</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Parent Training Programs</h4>
              </div>
              <p className="text-sm">Evidence-based programs teaching strategies to support child development and behavior<sup>2</sup></p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Respite Care</h4>
              </div>
              <p className="text-sm">Temporary relief care allowing families necessary breaks to rest and recharge<sup>3</sup></p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Support Groups</h4>
              </div>
              <p className="text-sm">Connection with other autism families for shared experiences and mutual support</p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Sibling Support</h4>
              </div>
              <p className="text-sm">Programs and resources specifically for siblings of autistic children<sup>4</sup></p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Mental Health Support</h4>
              </div>
              <p className="text-sm">Therapy and counseling for family members experiencing stress, anxiety, or depression</p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Financial Assistance</h4>
              </div>
              <p className="text-sm">Understanding benefits like SSI, Medicaid waivers, tax deductions, and other financial resources</p>
            </div>
          </div>
        </div>

        {/* Advocacy Training */}
        <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-[#0c264d] font-bold text-lg">Advocacy Training</h3>
          </div>
          <p className="mb-4 text-sm">
            Learning to effectively advocate for your family member's needs across settings:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">School Advocacy</h4>
              <ul className="space-y-1 text-xs">
                <li>• IEP/504 meetings</li>
                <li>• Requesting evaluations</li>
                <li>• Understanding rights</li>
                <li>• Documenting concerns</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">Medical Advocacy</h4>
              <ul className="space-y-1 text-xs">
                <li>• Communicating with doctors</li>
                <li>• Requesting accommodations</li>
                <li>• Getting referrals</li>
                <li>• Insurance navigation</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">Community Advocacy</h4>
              <ul className="space-y-1 text-xs">
                <li>• Access to programs</li>
                <li>• Public accommodations</li>
                <li>• Legal protections</li>
                <li>• Awareness education</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Principles of Good Support */}
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Principles of Effective, Respectful Support</h2>

        <p className="mb-6">
          Quality autism support is grounded in neurodiversity-affirming principles that respect autistic 
          ways of being while providing meaningful assistance.
        </p>

        <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Core Principles</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Presume Competence', sup: '5', desc: 'Assume understanding and potential even when not obvious' },
              { label: 'Respect Autonomy', sup: '5', desc: 'Support choice-making and self-determination' },
              { label: 'Focus on Quality of Life', sup: '', desc: 'Not just skill acquisition or behavior reduction' },
              { label: 'Build on Strengths', sup: '', desc: 'Leverage special interests for learning and engagement' },
              { label: 'Accept Autistic Ways of Being', sup: '', desc: "Don't target harmless behaviors like stimming" },
              { label: 'Listen to Autistic Voices', sup: '5', desc: 'Center autistic perspectives in decisions' },
              { label: 'Teach to the Individual', sup: '', desc: 'One size does not fit all' },
              { label: 'Support Communication', sup: '', desc: 'Provide access to communication methods that work' },
              { label: 'Create Sensory-Friendly Environments', sup: '', desc: 'Reduce barriers rather than expecting constant adaptation' },
              { label: 'Promote Inclusion', sup: '5', desc: 'Support participation in community life' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="bg-[#10b981] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">✓</div>
                <div>
                  <div className="font-bold text-[#0c264d] mb-1">{item.label}{item.sup && <sup>{item.sup}</sup>}</div>
                  <div className="text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#ffd166] border-2 border-[#0c264d] p-5 rounded-lg shadow-md mb-8">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg flex items-center gap-2">
            Remember
          </h3>
          <p className="text-sm">
            "Nothing about us without us" — autistic individuals should be included in decisions about 
            their own support, services, and lives. The best support respects autonomy, builds on strengths, 
            and centers the autistic person's own goals and preferences.
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
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Karst, J. S., & Van Hecke, A. V. (2012). Parent and family impact of autism spectrum disorders: A review and proposed model for intervention evaluation. <i>Clinical Child and Family Psychology Review</i>.</p>
            <p>2. Bearss, K., et al. (2015). Effect of parent training vs parent education on behavioral problems in children with autism spectrum disorder: A randomized clinical trial. <i>JAMA</i>.</p>
            <p>3. Whitmore, K. E. (2016). Respite care and stress among caregivers of children with autism spectrum disorder: An integrative review. <i>Journal of Pediatric Nursing</i>.</p>
            <p>4. Mead, J., et al. (2011). A systematic review of the psychosocial needs of siblings of children with autism spectrum disorders. <i>Journal of Autism and Developmental Disorders</i>.</p>
            <p>5. Leadbitter, K., et al. (2021). Autistic self-advocacy and the neurodiversity movement: Implications for autism early intervention and childhood education. <i>Frontiers in Psychology</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}