import { ImageWithFallback } from "../../../figma/ImageWithFallback";

interface OverviewContentProps {
  setCurrentArticle?: (article: string) => void;
}

export function OverviewContent({ setCurrentArticle }: OverviewContentProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      {/* Introduction */}
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support Philosophy & Approach</h2>
        
        <p className="mb-4">
          Support for autistic individuals should be individualized, strengths-based, and centered on improving 
          quality of life rather than simply reducing autistic traits.<sup>1</sup> The goal is to help autistic 
          people thrive as themselves, not to make them "indistinguishable from their peers."<sup>1</sup> Effective 
          support respects neurodiversity while providing accommodations and skills to navigate a neurotypical world.
        </p>
   
      {/* --- CENTERED GRAPHIC SECTION 1 --- */} 
      <div className="text-center w-full mb-8"> 
        {/* The Wrapper: Centers the image and restricts its width */} 
        <div className="mx-auto w-48 md:w-64"> 
          <ImageWithFallback 
            src="/images/autism/autism-support-Overvtab-philosph.webp" 
            alt="abstract painting of philosophy and support"
          /> 
        </div> 
      </div>
      
        <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mb-4 shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-3">Core Support Principles:</h3>
          <ul className="text-sm space-y-2">
            <li>✓ <strong>Presume competence:</strong> Assume understanding and potential even when not obvious<sup>2</sup></li>
            <li>✓ <strong>Respect autonomy:</strong> Support choice-making and self-determination<sup>3</sup></li>
            <li>✓ <strong>Focus on quality of life:</strong> Not just skill acquisition or behavior reduction</li>
            <li>✓ <strong>Build on strengths and interests:</strong> Leverage special interests for learning and engagement</li>
            <li>✓ <strong>Accept autistic ways of being:</strong> Don't target harmless behaviors like stimming</li>
            <li>✓ <strong>Listen to autistic voices:</strong> Center autistic perspectives in decisions<sup>4</sup></li>
            <li>✓ <strong>Teach to the individual:</strong> One size does not fit all</li>
            <li>✓ <strong>Support communication:</strong> Provide access to communication methods that work</li>
            <li>✓ <strong>Create sensory-friendly environments:</strong> Reduce barriers rather than expecting constant adaptation</li>
            <li>✓ <strong>Promote inclusion:</strong> Support participation in community life<sup>3</sup></li>
          </ul>
        </div>
      </div>
      
      {/* Unsupported Treatments */}
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Unsupported and Harmful "Treatments" to Avoid</h2>
        
        <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-4 shadow-sm">
          <h3 className="text-center text-[#0c264d] font-bold mb-4">Treatments Lacking Evidence or Potentially Harmful</h3>
          <div className="text-sm space-y-3">
            <p><strong>Bleach/"MMS" protocols:</strong> Extremely dangerous; can cause serious harm or death<sup>5</sup></p>
            <p><strong>Chelation therapy:</strong> Not supported by evidence; has caused deaths<sup>6</sup></p>
            <p><strong>Hyperbaric oxygen chambers:</strong> Little evidence to prove effectiveness<sup>7</sup></p>
            <p><strong>Secretin:</strong> Thoroughly debunked<sup>8</sup></p>
            <p><strong>Facilitated communication/RPM:</strong> Discredited; shown to reflect facilitator's thoughts, not autistic person's<sup>9</sup></p>
            <p><strong>Conversion/compliance-focused interventions:</strong> Harmful to mental health and self-esteem<sup>10</sup></p>
            <p><strong>Restrictive diets without medical indication:</strong> Limited evidence; may cause nutritional deficiencies<sup>11</sup></p>
          </div>
        </div>

        <p className="mb-4">
          Always consult with qualified medical professionals and be skeptical of "miracle cures" or treatments 
          promising to eliminate autism.<sup>12</sup>
        </p>

    
      {/* --- CENTERED GRAPHIC SECTION 2 --- */} 
      <div className="text-center w-full mb-8"> 
        {/* The Wrapper: Centers the image and restricts its width */} 
        <div className="mx-auto w-48 md:w-64"> 
          <ImageWithFallback 
            src="/images/autism/autism-support-Overvtab-harmful.webp" 
            alt="doctor explaining approaches photo"
          /> 
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
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Leadbitter, K., et al. (2021). Autistic Self-Advocacy and the Neurodiversity Movement: Implications for Autism Early Intervention Research and Practice. <i>Frontiers in Psychology</i>.</p>
            <p>2. Biklen, D., & Burke, J. (2006). Presuming Competence. <i>Equity & Excellence in Education</i>.</p>
            <p>3. Wehmeyer, M. L., et al. (2010). Self-Determination and Individuals with Severe Disabilities: Re-evaluating Meanings and Misinterpretations. <i>Research and Practice for Persons with Severe Disabilities</i>.</p>
            <p>4. Fletcher-Watson, S., et al. (2019). Making the future together: Shaping autism research through meaningful participation. <i>Autism</i>.</p>
            <p>5. U.S. Food and Drug Administration. (2019). FDA warns consumers about the dangerous and potentially life threatening side effects of Miracle Mineral Solution. <i>FDA Safety Alert</i>.</p>
            <p>6. James, S., et al. (2015). Chelation for autism spectrum disorder (ASD). <i>Cochrane Database of Systematic Reviews</i>.</p>
            <p>7. Xiong, T., et al. (2016). Hyperbaric oxygen therapy for people with autism spectrum disorder (ASD). <i>Cochrane Database of Systematic Reviews</i>.</p>
            <p>8. Williams, K., et al. (2012). Intravenous secretin for autism spectrum disorder (ASD). <i>Cochrane Database of Systematic Reviews</i>.</p>
            <p>9. Hemsley, B., et al. (2018). Systematic review of facilitated communication 2014-2018 finds no new evidence that messages delivered using facilitated communication are authored by the person with disability. <i>Autism & Developmental Language Impairments</i>.</p>
            <p>10. Kupferstein, H. (2018). Evidence of increased PTSD symptoms in autistics exposed to applied behavior analysis. <i>Advances in Autism</i>.</p>
            <p>11. Piwowarczyk, A., et al. (2018). Gluten- and casein-free diet and autism spectrum disorders in children: a systematic review. <i>European Journal of Nutrition</i>.</p>
            <p>12. Levy, S. E., & Hyman, S. L. (2015). Complementary and Alternative Medicine Treatments for Children with Autism Spectrum Disorders. <i>Child and Adolescent Psychiatric Clinics of North America</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>AANE (Asperger/Autism Network). Navigating Autism Therapies and Interventions.</li>
            <li>Autistic Self Advocacy Network (ASAN). Position Statements on Support and Treatments.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}