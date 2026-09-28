import { ImageWithFallback } from "../../../figma/ImageWithFallback";

interface EducationalContentProps {
  setCurrentArticle?: (article: string) => void;
}

export function EducationalContent({ setCurrentArticle }: EducationalContentProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Support</h2>
        
        <p className="mb-6">
          Under the Individuals with Disabilities Education Act (IDEA), autistic students are entitled to 
          a free appropriate public education (FAPE) with services tailored to their unique needs.<sup>1</sup>
        </p>
        
        {/* --- CENTERED SCALES VIDEO --- */} 
        <div className="text-center w-full mb-8"> 
          <div className="mx-auto w-64"> 
            <div className="rounded-lg shadow-md overflow-hidden bg-white">
              <video 
                src="/images/autism/autism-support-EduSuptab-scales.mp4" 
                poster="/images/autism/autism-support-EduSuptab-scales.webp"
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto block"
                aria-label="Animation displaying educational scales and supports"
              />
            </div>
          </div> 
        </div>

        {/* Special Education Services */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Special Education Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">IEP (Individualized Education Program)</h4>
              </div>
              <p className="text-sm mb-3">
                Legally binding document outlining goals, services, and accommodations for students ages 3-21.<sup>2</sup>
              </p>
              <ul className="space-y-1 text-xs">
                <li>• Annual goals and progress monitoring</li>
                <li>• Specialized instruction and services</li>
                <li>• Accommodations and modifications</li>
                <li>• Placement decisions</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">504 Plan</h4>
              </div>
              <p className="text-sm mb-3">
                Accommodations for students who don't need specialized instruction.<sup>3</sup>
              </p>
              <ul className="space-y-1 text-xs">
                <li>• Covers K-12 and college</li>
                <li>• Focuses on access and barriers</li>
                <li>• Less intensive than IEP</li>
                <li>• Covers broader disabilities</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Least Restrictive Environment (LRE)</h4>
              </div>
              <p className="text-sm">
                Students should be educated with non-disabled peers to the maximum extent appropriate, 
                with supports provided as needed.<sup>4</sup>
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Related Services</h4>
              </div>
              <p className="text-sm mb-2">
                Support services necessary for students to benefit from special education:
              </p>
              <ul className="space-y-1 text-xs">
                <li>• Speech-language therapy</li>
                <li>• Occupational therapy</li>
                <li>• Counseling services</li>
                <li>• Transportation</li>
                <li>• Assistive technology</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <h4 className="text-[#0c264d] font-bold text-lg">Transition Planning</h4>
            </div>
            <p className="text-sm">
              Beginning at age 14-16, IEPs must include transition planning for post-secondary education, 
              employment, and independent living.<sup>5</sup>
            </p>
          </div>
        </div>

        {/* --- CENTERED ACCOMMODATIONS VIDEO --- */} 
        <div className="text-center w-full mb-8"> 
          <div className="mx-auto w-64"> 
            <div className="rounded-lg shadow-md overflow-hidden bg-white">
              <video 
                src="/images/autism/autism-support-EduSuptab-Accommodations.mp4" 
                poster="/images/autism/autism-support-EduSuptab-Accommodations.webp"
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto block"
                aria-label="Animation displaying educational accommodations and supports"
              />
            </div>
          </div> 
        </div>

        {/* Educational Accommodations */}
        <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Educational Accommodations</h3>
          <p className="mb-6 text-sm">
            Common helpful accommodations that can support autistic students in accessing the curriculum:<sup>6</sup>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-3 text-center">Environmental</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Quiet workspace</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Noise-canceling headphones</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Sensory-friendly lighting</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Movement breaks</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Fidget tools allowed</span></li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-3 text-center">Instructional</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Visual schedules</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Written instructions</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Advance notice of changes</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Reduced homework</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Modified assignments</span></li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-3 text-center">Assessment</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Extended time on tests</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Alternative formats</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Quiet testing room</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Oral responses allowed</span></li>
                <li className="flex items-start gap-2"><span className="text-[#10b981] mt-1">✓</span><span>Calculator/computer use</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <h4 className="text-[#0c264d] font-bold text-lg">Social Skills Support</h4>
            </div>
            <p className="text-sm">
              Social skills groups, lunch bunches, peer buddy systems, and structured recess support can 
              help autistic students navigate social situations at school.
            </p>
          </div>
        </div>

        {/* Educational Placement Options */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Educational Placement Options</h3>
          <p className="mb-6 text-sm">
            Placement should be determined by the student's individual needs, following the principle of 
            least restrictive environment:
          </p>

          <div className="space-y-4">
            {[
              { num: '1', bg: 'bg-[#10b981]', text: 'text-white', label: 'General Education with Supports', desc: 'Full inclusion in general education classroom with accommodations, modifications, and support services. Student participates in all typical classroom activities with appropriate supports.' },
              { num: '2', bg: 'bg-[#2abcd4]', text: 'text-white', label: 'Resource Room', desc: 'Part-time specialized instruction in a resource room for specific subjects or skills, with the rest of the day spent in general education. Often used for reading, math, or academic support.' },
              { num: '3', bg: 'bg-[#ffd166]', text: 'text-[#0c264d]', label: 'Special Education Classroom', desc: 'Self-contained classroom with smaller class size, specialized curriculum, and intensive support. May include opportunities for inclusion in general education for certain subjects or activities.' },
              { num: '4', bg: 'bg-[#0c264d]', text: 'text-white', label: 'Specialized School', desc: 'School specifically designed for students with disabilities, with specialized staff, programs, and therapeutic services on-site. May be public or private.' },
              { num: '5', bg: 'bg-[#10b981]', text: 'text-white', label: 'Homeschooling', desc: "Some families choose to homeschool with support from online programs, co-ops, therapists, and educational consultants. May still access some school services depending on state laws." },
            ].map((item) => (
              <div key={item.num} className="flex items-start gap-3">
                <div className={`${item.bg} ${item.text} rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold`}>{item.num}</div>
                <div className="flex-1">
                  <div className="font-bold text-[#0c264d] mb-1">{item.label}</div>
                  <div className="text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#ffd166] border-2 border-[#0c264d] p-5 rounded-lg shadow-md">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg flex items-center gap-2">
            Remember
          </h3>
          <p className="text-sm">
            Parents are equal members of the IEP team. You have the right to participate fully in educational 
            decisions, request evaluations, bring advocates, and if needed, pursue dispute resolution. Don't 
            hesitate to ask questions and advocate for your child's needs.
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
            <p>1. U.S. Department of Education. (2023). Sec. 300.101 Free appropriate public education (FAPE). <i>Individuals with Disabilities Education Act (IDEA)</i>.</p>
            <p>2. U.S. Department of Education. (2023). Sec. 300.320 Definition of individualized education program. <i>Individuals with Disabilities Education Act (IDEA)</i>.</p>
            <p>3. U.S. Department of Education, Office for Civil Rights. (2023). Protecting Students With Disabilities. <i>Section 504 of the Rehabilitation Act of 1973</i>.</p>
            <p>4. U.S. Department of Education. (2023). Sec. 300.114 LRE requirements. <i>Individuals with Disabilities Education Act (IDEA)</i>.</p>
            <p>5. U.S. Department of Education. (2023). Sec. 300.320(b) Transition services. <i>Individuals with Disabilities Education Act (IDEA)</i>.</p>
            <p>6. Hume, K., et al. (2021). Evidence-based practices for children, youth, and young adults with autism spectrum disorder: A comprehensive review. <i>Journal of Autism and Developmental Disorders</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Organization for Autism Research (OAR). Navigating the Special Education System.</li>
            <li>Wrightslaw. Special Education Law and Advocacy for Parents.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}