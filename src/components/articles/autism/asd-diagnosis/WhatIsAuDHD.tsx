import { ImageWithFallback } from "../../../figma/ImageWithFallback";

/* ─── THE GUEST LIST (Interface) ─── */
interface WhatIsAuDHDProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function WhatIsAuDHD({ setCurrentArticle }: WhatIsAuDHDProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What is AuDHD?</h2>
        
        <p className="mb-6">
          "AuDHD" is a community-created term used primarily within neurodivergent communities to describe individuals 
          who are both autistic and have ADHD. While not an official medical diagnosis in the DSM-5-TR, this dual diagnosis 
          is increasingly recognized by clinicians and researchers as a very real and common pattern with unique characteristics 
          and support needs.
        </p>
      </div>

      {/* --- CENTERED GRAPHIC SECTION 1 --- */} 
      <div className="text-center w-full mb-8"> 
        <div className="mx-auto w-48 md:w-64"> 
          <ImageWithFallback 
            src="/images/autism/autism-diagnosis-WhatAuDHDtab-Lightning-Gold Infinity.webp" 
            alt="lightning with gold infinity in it symbolizing autism and ADHD combined or AuDHD"
          /> 
        </div> 
      </div>
 
      {/* Prevalence and Co-occurrence */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">How Common is AuDHD?</h3>
        
        <p className="text-sm mb-4">
          Research shows that autism and ADHD co-occur at remarkably high rates:
        </p>
        
        <ul className="text-sm space-y-2 ml-6 mb-4">
          <li className="mb-2">• <strong>50-70%</strong> of autistic individuals meet criteria for ADHD<sup>1</sup></li>
          <li className="mb-2">• <strong>30-50%</strong> of individuals with ADHD meet criteria for autism<sup>2</sup></li>
          <li className="mb-2">• Until the DSM-5 (2013), dual diagnosis was not officially permitted, leading to historical underdiagnosis</li>
          <li className="mb-2">• Studies indicate AuDHD may represent one of the most common forms of neurodevelopmental comorbidity<sup>3</sup></li>
        </ul>

        <div className="bg-[#f0f9ff] p-4 rounded-md border border-[#2abcd4]">
          <p className="text-sm">
            <strong>Historical Context:</strong> Before 2013, clinicians could not officially diagnose someone with 
            both autism and ADHD simultaneously according to DSM criteria. The DSM-5 removed this exclusionary criterion, 
            acknowledging that the conditions frequently co-occur and require recognition of both diagnoses for 
            appropriate treatment planning.
          </p>
        </div>
      </div>

      {/* How They Interact */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">How Autism and ADHD Interact</h3>
        
        <p className="text-sm mb-4">
          When autism and ADHD co-occur, they don't simply exist side-by-side—they interact in complex ways 
          that create a unique neurodevelopmental profile:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-[#f0f9ff] p-4 rounded-md border border-[#2abcd4]">
            <h4 className="text-[#0c264d] font-bold text-sm mb-2">Overlapping Traits:</h4>
            <ul className="text-sm space-y-1">
              <li>• Executive function challenges</li>
              <li>• Emotional regulation difficulties</li>
              <li>• Sensory sensitivities</li>
              <li>• Social difficulties</li>
              <li>• Sleep problems</li>
            </ul>
          </div>

          <div className="bg-[#f0f9ff] p-4 rounded-md border border-[#2abcd4]">
            <h4 className="text-[#0c264d] font-bold text-sm mb-2">Compounding Effects:</h4>
            <ul className="text-sm space-y-1">
              <li>• Greater functional impairment than either alone</li>
              <li>• More severe executive dysfunction</li>
              <li>• Increased anxiety and depression</li>
              <li>• More complex support needs</li>
            </ul>
          </div>
        </div>

        <p className="text-sm">
          Research indicates that individuals with both conditions often experience more severe difficulties across 
          multiple domains compared to those with either condition alone, highlighting the importance of recognizing 
          and addressing both diagnoses.
        </p>
      </div>

      {/* --- 2nd CENTERED GRAPHIC SECTION --- */} 
      <div className="text-center w-full mb-8"> 
        <div className="mx-auto w-48 md:w-64"> 
          <ImageWithFallback 
            src="/images/autism/autism-diagnosis-WhatAuDHDtab-gold-blue-splitface.webp" 
            alt="split face - AuDHD"
          /> 
        </div> 
      </div>

      {/* AuDHD Diagram */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Shared and Sole Symptoms</h3>
        
        <div className="mb-4 bg-[#f0f9ff] p-4 rounded-md border border-[#2abcd4]">
          <p className="text-sm text-center">
            <strong>Important:</strong> Individuals with AuDHD experience a variety of symptoms or traits from <strong>all three columns</strong>—
            ADHD-only traits, autism-only traits, <em>and</em> the shared traits in the middle. Since there is no DSM-5-TR diagnosis 
            for autism and ADHD combined together, there isn't a quantifiable way of determining a specific number of traits from 
            each category required for a combined diagnosis. However, they can be diagnosed independently using the ADHD-only or 
            autism-only criteria. If both are diagnosed, it can make sense for someone to identify as AuDHD unofficially.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* ADHD Only Column */}
          <div className="bg-white md:bg-[#ffd166] md:bg-opacity-30 p-3 md:p-5 rounded-lg border-l-4 md:border-l-0 md:border-2 border-[#ffd166]">
            <h4 className="text-[#0c264d] font-bold text-center mb-4 text-lg">ADHD Only</h4>
            <ul className="text-sm space-y-2 md:space-y-3">
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                <span>Hyperactivity or restlessness</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                <span>Impulsivity or risk-taking</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                <span>Difficulty sustaining attention on non-preferred tasks</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                <span>Difficulty with time management skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                <span>Interrupting/talking excessively</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                <span>Hyperfocus on stimulating activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                <span>Forgetfulness with daily tasks</span>
              </li>
            </ul>
          </div>

          {/* Shared/AuDHD Column */}
          <div className="bg-white md:bg-[#0c264d] md:bg-opacity-80 p-3 md:p-5 rounded-lg border-l-4 md:border-l-0 md:border-2 border-[#0c264d] text-[#0c264d] md:text-white">
            <h4 className="font-bold text-center mb-4 text-lg">AuDHD (Both)</h4>
            <ul className="text-sm space-y-2 md:space-y-3">
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">•</span>
                <span>Executive dysfunction</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">•</span>
                <span>Sensory processing differences</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">•</span>
                <span>Emotional regulation challenges</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">•</span>
                <span>Social difficulties</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">•</span>
                <span>Struggles with transitions/change</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">•</span>
                <span>Sleep issues</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">•</span>
                <span>Time perception differences</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">•</span>
                <span>Rejection sensitivity</span>
              </li>
            </ul>
          </div>

          {/* Autism Only Column */}
          <div className="bg-white md:bg-[#2abcd4] md:bg-opacity-30 p-3 md:p-5 rounded-lg border-l-4 md:border-l-0 md:border-2 border-[#2abcd4]">
            <h4 className="text-[#0c264d] font-bold text-center mb-4 text-lg">Autism Only</h4>
            <ul className="text-sm space-y-2 md:space-y-3">
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                <span>Deep, narrow special interests</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                <span>Stimming for self-regulation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                <span>Need for sameness/rigid routines</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                <span>Literal thinking/difficulty with figurative language</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                <span>Difficulty reading social cues/body language</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                <span>Monotropic attention (intense singular focus)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0c264d] mr-2 flex-shrink-0">•</span>
                <span>Strong pattern recognition</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Diagnostic Challenges */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Diagnostic Considerations for AuDHD</h3>
        
        <p className="text-sm mb-4">
          Identifying both autism and ADHD in the same individual can be diagnostically complex:
        </p>

        <div className="bg-[#f0f9ff] p-4 rounded-md border border-[#2abcd4] mb-4">
          <h4 className="text-[#0c264d] font-bold text-sm mb-2">Common Diagnostic Challenges:</h4>
          <ul className="text-sm space-y-2">
            <li><strong>Symptom overlap:</strong> Attention difficulties, social challenges, and executive dysfunction 
            appear in both conditions, making it hard to determine which diagnosis (or both) explains specific behaviors</li>
            <li><strong>Masking effects:</strong> Symptoms of one condition may overshadow or mask symptoms of the other, 
            particularly in verbal, intellectually capable individuals</li>
            <li><strong>Sequential diagnosis:</strong> Often one condition is diagnosed first (frequently ADHD in early 
            childhood), with autism identified later when support needs aren't fully met</li>
            <li><strong>Assessment bias:</strong> Some clinicians may assume attention difficulties in autistic individuals 
            are part of autism rather than recognizing co-occurring ADHD</li>
          </ul>
        </div>

        <p className="text-sm mb-4">
          <strong>Best Practice:</strong> Comprehensive evaluation should systematically assess for both conditions, 
          especially when initial interventions for one diagnosis don't fully address the individual's challenges. 
          Studies show that many autistic individuals benefit from ADHD-specific interventions once ADHD is 
          properly identified.<sup>4</sup>
        </p>
      </div>

      {/* Why Dual Diagnosis Matters */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Why Recognizing Both Conditions Matters</h3>
        
        <p className="text-sm mb-4">
          Accurate identification of both autism and ADHD has significant implications for treatment and support:
        </p>

        <ul className="text-sm space-y-2 ml-6 mb-4">
          <li><strong>Comprehensive treatment planning:</strong> Addressing only one condition leaves significant 
          needs unmet; both require targeted intervention</li>
          <li><strong>Medication considerations:</strong> Stimulant medications for ADHD can be helpful for autistic 
          individuals with co-occurring ADHD, but may require careful monitoring</li>
          <li><strong>Educational accommodations:</strong> Students need supports for both conditions—autism-specific 
          supports (social skills, sensory accommodations) AND ADHD supports (organizational help, attention strategies)</li>
          <li><strong>Self-understanding:</strong> Understanding both aspects of their neurodivergence helps individuals 
          develop effective strategies and advocate for appropriate support</li>
          <li><strong>Realistic expectations:</strong> Recognizing both conditions helps families, educators, and clinicians 
          set appropriate goals and understand the full scope of challenges and strengths</li>
        </ul>
      </div>
 
 {/* --- 3rd CENTERED GRAPHIC SECTION 1 --- */}
     <div className="text-center w-full mb-8">
       {/* The Wrapper: Centers the image and restricts its width */}
       <div className="mx-auto w-48 md:w-64">
         <ImageWithFallback
           src="/images/autism/autism-diagnosis-WhatAuDHDtab-silhouette-splatter.webp"
           alt="AuDHD silhouette with splatter effect"
         />
       </div>
     </div>

      {/* Support Strategies */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Supporting Individuals with AuDHD</h3>
        
        <p className="text-sm mb-4">
          Effective support for AuDHD requires integrating strategies from both autism and ADHD interventions:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#f0f9ff] p-4 rounded-md border border-[#2abcd4]">
            <h4 className="text-[#0c264d] font-bold text-sm mb-2">From Autism Support:</h4>
            <ul className="text-sm space-y-1">
              <li>• Social skills instruction</li>
              <li>• Sensory accommodations</li>
              <li>• Predictability and routine</li>
              <li>• Clear, direct communication</li>
              <li>• Special interest incorporation</li>
            </ul>
          </div>

          <div className="bg-[#f0f9ff] p-4 rounded-md border border-[#2abcd4]">
            <h4 className="text-[#0c264d] font-bold text-sm mb-2">From ADHD Support:</h4>
            <ul className="text-sm space-y-1">
              <li>• Executive function coaching</li>
              <li>• Organizational systems</li>
              <li>• Attention and focus strategies</li>
              <li>• Time management tools</li>
              <li>• Behavioral interventions</li>
              <li>• Possible medication management</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Community Recognition */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">AuDHD in the Neurodivergent Community</h3>
        
        <p className="text-sm mb-4">
          While "AuDHD" is not found in diagnostic manuals, it has become widely embraced within neurodivergent 
          communities because:
        </p>

        <ul className="text-sm space-y-2 ml-6">
          <li>• It acknowledges the unique experience of having both conditions simultaneously</li>
          <li>• It provides identity and community for those who don't fit neatly into either "autistic" or "ADHD" categories alone</li>
          <li>• It validates the complex, sometimes contradictory experiences (e.g., craving routine vs. seeking novelty; 
          social difficulties from different sources)</li>
          <li>• It raises awareness that these conditions frequently co-occur and require integrated understanding</li>
        </ul>
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
            <p>1. Antshel, K. M., & Russo, N. (2019). Autism spectrum disorders and ADHD: Overlapping phenomenology, diagnostic issues, and treatment considerations. <i>Current Psychiatry Reports</i>.</p>
            <p>2. Leitner, Y. (2014). The co-occurrence of autism and attention deficit hyperactivity disorder in children–what do we know? <i>Frontiers in Human Neuroscience</i>.</p>
            <p>3. Jang, J., et al. (2013). Rates of comorbid symptoms in children with ASD, ADHD, and comorbid ASD and ADHD. <i>Research in Developmental Disabilities</i>.</p>
            <p>4. Mulligan, A., et al. (2009). Autism symptoms in attention-deficit/hyperactivity disorder: A familial trait which correlates with conduct, oppositional defiant, language and motor disorders. <i>Journal of Autism and Developmental Disorders</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}> 
            <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
            <li>Lord, C., et al. (2018). Autism spectrum disorder. <i>The Lancet</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}