import { ImageWithFallback } from '../../figma/ImageWithFallback';

export function ADHDSymptomsTabFemales() {
  return (
    <article className="max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      
      {/* --- MAIN CONTENT WRAPPER (Light Blue Box) --- */}
      <div className="space-y-8 bg-[#f0f9ff] p-6 rounded-xl">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center w-full mb-8">
          <h2 className="text-[#0c264d] font-bold mb-6 text-3xl">ADHD in Females</h2>
          
          {/* Shrunk to w-56, centered, and framed with a gold border */}
          <ImageWithFallback 
            src="/images/adhd/adhd-females-diversity-faces.webp" 
            alt="Diverse female faces representing ADHD in females" 
            className="block mx-auto w-56 h-auto rounded-xl shadow-md border-4 border-[#ffd166] object-contain mb-6" 
          />
          
          <p className="text-slate-700 leading-relaxed max-w-3xl mx-auto text-lg">
            ADHD in individuals assigned female at birth is significantly underdiagnosed and undertreated. Research 
            suggests that girls and women with ADHD often present differently than boys and men, leading to missed or delayed 
            diagnoses. The inattentive presentation is more common in females, and symptoms may be less externally 
            disruptive, causing them to be overlooked.
          </p>
        </div>
        
        {/* --- DISCLAIMER NOTE --- */}
        <div className="bg-white p-5 rounded-lg border-l-4 border-[#0c264d] shadow-sm max-w-4xl mx-auto">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Note on Gender and Research:</strong> Much of the research on ADHD has historically focused on individuals 
            assigned male at birth, leading to an understanding of symptoms that may not fully capture the experiences of those 
            assigned female at birth or those who identify as women and girls. While this section uses the terms "girls" and "women" 
            based on the language used in clinical research, we acknowledge that gender exists on a spectrum and that ADHD affects 
            people of all gender identities. The symptom patterns described here are relevant to anyone assigned female at birth and 
            may also resonate with individuals across the gender spectrum.
          </p>
        </div>
              
        {/* --- KEY RESEARCH FINDINGS (Strips) --- */}
        <div className="bg-white p-6 rounded-xl border-t-4 border-[#0c264d] shadow-sm mt-8">
          <h3 className="text-[#0c264d] font-bold mb-6 text-2xl text-center sm:text-left">Key Research Findings</h3>
          
          <div className="space-y-4">
            
            {/* STRIP 1: Faded Green/Teal */}
            <div className="bg-teal-50 p-5 rounded-lg border border-teal-100 shadow-sm border-l-4 border-l-teal-500">
              <div className="font-bold text-[#0c264d] mb-3">Symptom Presentation & Comorbidity</div>
              <div className="text-sm space-y-3 text-slate-700">
                <p>• Women with ADHD are more likely to have the combined type, experience greater emotional dysregulation, 
                and report higher levels of anxiety and depression compared to men.<sup>1</sup></p>
                <p>• Research indicates a significant association between adult female ADHD and higher rates of insomnia, 
                substance abuse, chronic pain, and histories of childhood abuse.<sup>2</sup></p>
                <p>• Women often exhibit inattentive symptoms, making them less likely to be diagnosed in childhood, often 
                waiting until they recognize similar symptoms in their own children.</p>
              </div>
            </div>
            
            {/* STRIP 2 */}
            <div className="bg-[#f0f9ff] p-5 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-[#2abcd4]">
              <div className="font-bold text-[#0c264d] mb-3">Persistence Into Adulthood</div>
              <div className="text-sm space-y-3 text-slate-700">
                <p>• Research suggests that while 60% of women have symptoms lasting into adulthood, they are less likely to 
                "outgrow" the condition than men (30%).<sup>1</sup></p>
              </div>
            </div>
            
            {/* STRIP 3 */}
            <div className="bg-[#fdf2f8] p-5 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-[#ec4899]">
              <div className="font-bold text-[#0c264d] mb-3">Social & Personal Impact</div>
              <div className="text-sm space-y-3 text-slate-700">
                <p>• Women with ADHD face greater difficulties with peer relationships, social behavior, and sustaining stable 
                relationships compared to women without ADHD.<sup>3</sup></p>
                <p>• A qualitative study found that women with late-diagnosed ADHD experienced severe, long-term consequences, 
                including low self-esteem, intense guilt, shame, and a sense of grieving over the life they could have led 
                if diagnosed earlier.<sup>4</sup></p>
              </div>
            </div>
            
            {/* STRIP 4 */}
            <div className="bg-[#fcfcfa] p-5 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-[#ffd166]">
              <div className="font-bold text-[#0c264d] mb-3">Medical & Diagnostic Bias</div>
              <div className="text-sm space-y-3 text-slate-700">
                <p>• Studies demonstrate a "missed diagnosis" phenomenon where professionals mislabel ADHD in women as only 
                anxiety or depression.<sup>2</sup></p>
                <p>• Female adolescents (over 13) may experience more frequent and different adverse events from stimulant 
                medications compared to males.<sup>1</sup></p>
              </div>
            </div>
          </div>
        </div>
              
        {/* --- ADHD IN GIRLS --- */}
        <div className="bg-white p-6 rounded-xl border-t-4 border-[#ec4899] shadow-sm">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
            <ImageWithFallback 
              src="/images/adhd/adhd-females-girl-studying.webp" 
              alt="Girl studying representing ADHD presentation in girls" 
              className="w-48 shrink-0 rounded-xl shadow-md border-4 border-[#ec4899] object-contain" 
            />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-[#0c264d] font-bold mb-3 text-2xl">ADHD in Girls</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                In childhood, symptom presentation often diverges significantly from traditional diagnostic models, leading to systemic under-identification in educational environments.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-2 border-[#ec4899] pl-4">
              <div className="font-bold text-[#0c264d] mb-2">Presentation Differences</div>
              <div className="text-sm space-y-2 text-slate-700">
                <p>• Girls are more likely to present with the inattentive type. They may appear dreamy, spacey, or lost in thought rather than disruptive.</p>
                <p>• Hyperactivity may manifest as excessive talking, social chattiness, or emotional reactivity rather than physical restlessness.</p>
              </div>
            </div>
            
            <div className="border-l-2 border-[#ec4899] pl-4">
              <div className="font-bold text-[#0c264d] mb-2">Academic Challenges</div>
              <div className="text-sm space-y-2 text-slate-700">
                <p>• Girls often mask symptoms through extra effort, maintaining acceptable grades early on but struggling as demands increase.</p>
                <p>• Common challenges include organization, time management, and test-taking despite understanding the material.</p>
              </div>
            </div>
            
            <div className="border-l-2 border-[#ec4899] pl-4">
              <div className="font-bold text-[#0c264d] mb-2">Social and Emotional Aspects</div>
              <div className="text-sm space-y-2 text-slate-700">
                <p>• More internalizing symptoms (anxiety, low self-esteem). More aware of social difficulties and internalize negative feedback.</p>
                <p>• Many develop coping strategies like people-pleasing, excessive social accommodation, or withdrawal.</p>
              </div>
            </div>
            
            <div className="border-l-2 border-[#ec4899] pl-4">
              <div className="font-bold text-[#0c264d] mb-2">Diagnostic Challenges</div>
              <div className="text-sm space-y-2 text-slate-700">
                <p>• Often diagnosed much later than boys; symptoms are frequently attributed to personality traits ("shy" or "daydreamer").</p>
                <p>• More likely to receive misdiagnoses of anxiety or depression before ADHD is identified.</p>
              </div>
            </div>
          </div>
        </div>
              
        {/* --- ADHD IN WOMEN --- */}
        <div className="bg-white p-6 rounded-xl border-t-4 border-[#2abcd4] shadow-sm">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
            <ImageWithFallback 
              src="/images/adhd/adhd-females-woman-working.webp" 
              alt="Woman working representing ADHD presentation in adult women" 
              className="w-48 shrink-0 rounded-xl shadow-md border-4 border-[#2abcd4] object-contain" 
            />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-[#0c264d] font-bold mb-3 text-2xl">ADHD in Women</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Adult women frequently manage an immense invisible cognitive load, masking executive function differences until life stressors or shifting hormonal landscapes force a reevaluation.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#f0f9ff] p-4 rounded-lg border-l-4 border-[#2abcd4]">
              <div className="font-bold text-[#0c264d] mb-2">Adult Presentation</div>
              <div className="text-sm space-y-2 text-slate-700">
                <p>• Often overwhelmed by managing multiple responsibilities (work, household, family, social obligations).</p>
                <p>• Elaborate compensatory strategies (excessive list-making, hyper-focus on organization) work until life stressors increase.</p>
              </div>
            </div>
            
            <div className="bg-[#f0f9ff] p-4 rounded-lg border-l-4 border-[#2abcd4]">
              <div className="font-bold text-[#0c264d] mb-2">Hormonal Influences</div>
              <div className="text-sm space-y-2 text-slate-700">
                <p>• Symptoms fluctuate with estrogen levels across the menstrual cycle, pregnancy, postpartum period, and menopause.</p>
                <p>• Often first diagnosed when the demands of parenting exceed previous coping capacities.</p>
              </div>
            </div>
            
            <div className="bg-[#f0f9ff] p-4 rounded-lg border-l-4 border-[#2abcd4]">
              <div className="font-bold text-[#0c264d] mb-2">Mental Health Considerations</div>
              <div className="text-sm space-y-2 text-slate-700">
                <p>• Higher rates of anxiety, depression, eating disorders, and trauma. Chronic stress from untreated ADHD contributes to this.</p>
                <p>• Increased risk for self-harm and suicidal ideation, particularly when undiagnosed.</p>
              </div>
            </div>
            
            <div className="bg-[#f0f9ff] p-4 rounded-lg border-l-4 border-[#2abcd4]">
              <div className="font-bold text-[#0c264d] mb-2">Late Diagnosis</div>
              <div className="text-sm space-y-2 text-slate-700">
                <p>• Often diagnosed in 30s, 40s, or later, frequently when seeking an evaluation for their own child.</p>
                <p>• Late diagnosis can be both deeply validating and grief-inducing (mourning the lack of earlier support).</p>
              </div>
            </div>
          </div>
          
          {/* YouTube Video for Women with ADHD */}
          <div className="mt-10 max-w-2xl mx-auto bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h4 className="text-[#0c264d] font-bold mb-4 text-center">Featured Video: ADHD in Women</h4>
            <div className="relative w-full shadow-md rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/EMpt40zNK-w"
                title="ADHD in Women"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
              
        {/* --- ADVOCACY BANNER --- */}
        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-5 rounded-lg shadow-sm mt-8">
          <p className="text-sm text-[#0c264d] leading-relaxed">
            <strong>Advocacy Note:</strong> Increased awareness of how ADHD presents in individuals assigned female at birth 
            is crucial for improving diagnosis and treatment. Healthcare providers, educators, and the general public need better 
            education about the diverse presentations of ADHD across gender identities to ensure everyone receives appropriate 
            support and care.
          </p>
        </div>

      </div> 
      {/* <-- End of Light Blue Wrapper */}

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Rucklidge, J. J. (2008). Gender differences in 2 clinical trials of adults with attention-deficit/hyperactivity disorder: A retrospective data analysis. <i>Journal of Clinical Psychiatry</i>.</p>
            <p>2. Young, J. L., et al. (2023). Miss. Diagnosis: A Systematic Review of ADHD in Adult Women. <i>Journal of Attention Disorders</i>.</p>
            <p>3. Dorani, F., et al. (2021). Prevalence of hormone-related mood disorder symptoms in women with ADHD. <i>Journal of Psychiatric Research</i>.</p>
            <p>4. Smith, A., et al. (2025). Adverse experiences of women with undiagnosed ADHD and the consequences of late diagnosis.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Hinshaw, S. P., et al. (2012). Prospective follow-up of girls with attention-deficit/hyperactivity disorder into early adulthood: Continuing impairment includes elevated risk for suicide attempts and self-injury. <i>Journal of Consulting and Clinical Psychology</i>.</li>
            <li>Nadeau, K. G., Littman, E. B., & Quinn, P. O. (2015). <i>Understanding girls with ADHD: How they feel and why they do what they do</i> (Updated ed.). Advantage Books.</li>
            <li>Quinn, P. O., & Madhoo, M. (2014). A review of attention-deficit/hyperactivity disorder in women and girls: Uncovering this hidden diagnosis. <i>The Primary Care Companion for CNS Disorders</i>.</li>
            <li>Skogli, E. W., et al. (2013). ADHD in girls and boys—gender differences in co-existing symptoms and executive function measures. <i>BMC Psychiatry</i>.</li>
            <li>Young, S., et al. (2020). Females with ADHD: An expert consensus statement taking a lifespan approach providing guidance for the identification and treatment of attention-deficit/hyperactivity disorder in girls and women. <i>BMC Psychiatry</i>.</li>
          </ul>
        </div>
      </div>
      
    </article>
  );
}