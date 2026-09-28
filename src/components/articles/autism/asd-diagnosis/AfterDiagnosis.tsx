import { ImageWithFallback } from "../../../figma/ImageWithFallback";

/* ─── THE GUEST LIST (Interface) ─── */
interface AfterDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function AfterDiagnosis({ setCurrentArticle }: AfterDiagnosisProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">After Receiving a Diagnosis</h2>
        
        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
          <p className="text-sm">
            <strong>Important:</strong> A diagnosis is a beginning, not an ending. It's a doorway 
            to understanding, support, community, and self-advocacy.
          </p>
        </div>
        
        <p className="mb-6">
          Receiving an autism diagnosis can bring a mix of emotions—relief, grief, confusion, hope, or all of the above. 
          Whatever you're feeling is valid. Here's what typically comes next:
        </p>
      </div>

      {/* Benefits of Diagnosis */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Benefits of Diagnosis</h3>
        
        <div className="space-y-3">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Understanding and Clarity</div>
            <div className="text-sm">
              Diagnosis provides an explanation for differences and challenges. "Now I understand why..."
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Access to Services and Support</div>
            <div className="text-sm">
              Eligibility for therapies, educational services, workplace accommodations, disability benefits (if needed)
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Self-Advocacy Framework</div>
            <div className="text-sm">
              Understanding your needs and requesting appropriate accommodations becomes clearer
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Community Connection</div>
            <div className="text-sm">
              Access to autistic community and identity. You're not alone—there's a whole community of people like you!
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Better Support Strategies</div>
            <div className="text-sm">
              Tailored strategies that work FOR autistic thinking and sensing, not against it
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Reduced Self-Blame</div>
            <div className="text-sm">
              Understanding that struggles stem from neurology, not character flaws or "not trying hard enough"
            </div>
          </div>
        </div>
      </div>

      {/* --- CENTERED GRAPHIC SECTION 1 --- */} 
      <div className="text-center w-full mb-8"> 
        <div className="mx-auto w-48 md:w-64"> 
          <ImageWithFallback 
            src="/images/autism/autism-diagnosis-AfterDxtab-GoldInfinity-LightBulb.webp" 
            alt="lightbulb with gold infinity in it symbolizing autism"
          /> 
        </div> 
      </div>
       
      {/* Next Steps */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <div className="space-y-4">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">1. Learn About Autism</div>
            <div className="text-sm">
              <strong>From autistic voices, not just medical model.</strong> Read books by autistic authors, follow 
              autistic advocates on social media, explore neurodiversity-affirming resources. Understand that autism 
              is a different way of being, not a disease.
            </div>
          </div>
          
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">2. Connect with Community</div>
            <div className="text-sm">
              Online and local autism communities (especially those run BY autistic people). Finding "your people" 
              can be incredibly validating.
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">3. Evaluate Support Needs</div>
            <div className="text-sm">
              What services or accommodations would help? Not everyone needs the same supports. 
              Think about: speech therapy, occupational therapy, social skills support (if desired), mental health 
              support, sensory accommodations, etc.
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">4. School or Workplace Planning</div>
            <div className="text-sm">
              <ul className="ml-4 mt-1 space-y-1">
                <li>• <strong>Students K-12:</strong> Develop IEP (Individualized Education Program) or 504 Plan</li>
                <li>• <strong>College students:</strong> Register with Disability Services office</li>
                <li>• <strong>Workers:</strong> Request ADA accommodations through HR (quiet workspace, written instructions, 
                flexible schedule, etc.)</li>
              </ul>
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">5. Address Co-occurring Conditions</div>
            <div className="text-sm">
              Treat anxiety, ADHD, sleep issues, GI problems, etc. Many autistic people's quality of life improves 
              significantly when co-occurring conditions are addressed.
            </div>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">6. Process Emotions</div>
            <div className="text-sm">
              Diagnosis can bring relief, grief, anger, hope, confusion, or all of these at once. Give yourself 
              permission to feel whatever comes up. Consider therapy with an autism-affirming therapist.
            </div>
          </div>
        </div>
      </div>

      {/* --- CENTERED GRAPHIC SECTION 2 --- */} 
      <div className="text-center w-full mb-8"> 
        <div className="mx-auto w-48 md:w-64"> 
          <ImageWithFallback 
            src="/images/autism/autism-diagnosis-AfterDxtab-EducPlan.webp" 
            alt="kid frustrated by schoolwork" 
          /> 
        </div> 
      </div>
       
      {/* Educational Planning for Children */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Educational Planning (for Children)</h3>
        <p className="text-sm mb-4">
          For children, diagnosis often triggers educational planning:
        </p>
        
        <div className="space-y-2">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Develop IEP or 504 Plan:</strong> Outlines accommodations, services, and goals
            </div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Identify Needed Services:</strong> Speech, OT, social support, academic support
            </div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Plan Transition Services:</strong> For older students (14+), planning for post-high school
            </div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Advocate for Appropriate Placement:</strong> Consider: mainstream with support, specialized program, 
              homeschooling, etc.
            </div>
          </div>
        </div>
      </div>

      {/* Ongoing Research */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Ongoing Diagnostic Research</h3>
        <p className="text-sm mb-4">
          Research continues to improve diagnostic methods:
        </p>
        
        <div className="space-y-2">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Earlier identification:</strong> Tools to reliably diagnose under 18 months
            </div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Biomarkers:</strong> Exploring eye-tracking, brain imaging, genetic markers (not yet clinically validated)
            </div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Subtyping:</strong> Identifying autism subgroups based on biology, not just behavior
            </div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Better adult tools:</strong> Instruments designed for adult presentation
            </div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Cultural adaptation:</strong> Culturally responsive diagnostic approaches
            </div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="text-sm">
              <strong>• Dimensional approaches:</strong> Measuring autistic traits dimensionally rather than categorically
            </div>
          </div>
        </div>

        <p className="text-sm mt-4">
          Future diagnostic approaches should incorporate autistic perspectives and focus on supporting flourishing, 
          not just identifying deficits.
        </p>
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
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
            <li>Ayano, G., et al. (2023). Prevalence of attention deficit hyperactivity disorder in adults: Umbrella review. <i>Psychiatry Research</i>.</li>
            <li>Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i> (4th ed.). Guilford Press.</li>
            <li>Centers for Disease Control and Prevention. (2024). Data and Statistics About ADHD. CDC.</li>
            <li>Larsson, H., et al. (2024). The psychiatric comorbidity of ADHD. <i>Molecular Psychiatry</i>.</li>
            <li>National Institute of Mental Health. (2024). Attention-Deficit/Hyperactivity Disorder (ADHD). NIMH.</li>
            <li>Reuben, C., & Elgaddal, N. (2024). ADHD in Children Ages 5–17 Years: US, 2020–2022. <i>NCHS Data Brief</i>.</li>
            <li>Song, P., et al. (2021). The global prevalence of adult attention-deficit hyperactivity disorder: A systematic review and meta-analysis. <i>Journal of Global Health</i>.</li>
            <li>Willcutt, E. G. (2012). The prevalence of DSM-IV attention-deficit/hyperactivity disorder: a meta-analytic review. <i>Neurotherapeutics</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}