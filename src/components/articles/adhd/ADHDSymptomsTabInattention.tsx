import { Cloud, Clock, EarOff, FileX, FolderOpen, Brain, Search, Wind, CalendarX, Baby, GraduationCap, Briefcase, Users, TrendingDown } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

export function ADHDSymptomsTabInattention() {
  return (
    <div>
      {/* Intro Section */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl flex items-center justify-center gap-2 text-center">
          <Cloud className="text-[#0A9DC4]" size={28} />
          Inattention Symptoms
        </h2>
        
        <p className="text-sm text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          The inattentive presentation is characterized by difficulty sustaining attention and organizational
          challenges. This is sometimes referred to as "ADD" though that term is no longer used diagnostically.
          People with this presentation may seem forgetful, disorganized, or "spacey."
        </p>
      </div>

      <ImageWithFallback 
                src="/images/adhd/adhd-inattention-across-ages.webp"
                alt="ADHD Inattention Across Different Life Stages"
                className="w-full max-w-[16rem] mx-auto mb-4 rounded"
              />
              
              {/* Timeline */}
              <div className="relative">
                {/* Horizontal line connecting all stages - hidden on mobile */}
                <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-[#2abcd4]" style={{zIndex: 0}}></div>
                
                {/* Timeline items */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 relative" style={{zIndex: 1}}>
                  {/* Childhood */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                      <Baby className="w-8 h-8 text-[#0c264d]" />
                    </div>
                    <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full">
                      <div className="font-bold text-[#0c264d] mb-2 text-center">Childhood</div>
                      <div className="text-sm">Trouble completing homework, difficulty following multi-step directions, 
                      losing school supplies, appearing to daydream during lessons, making careless errors on schoolwork.</div>
                    </div>
                  </div>
                  
                  {/* Adolescence */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                      <GraduationCap className="w-8 h-8 text-[#0c264d]" />
                    </div>
                    <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full">
                      <div className="font-bold text-[#0c264d] mb-2 text-center">Adolescence</div>
                      <div className="text-sm">Struggling with long-term projects, difficulty keeping track of 
                      assignments across multiple classes, poor time management, bedroom and backpack disorganization.</div>
                    </div>
                  </div>
                  
                  {/* Adulthood */}
                  <div className="flex flex-col items-center">
                    <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                      <Briefcase className="w-8 h-8 text-[#0c264d]" />
                    </div>
                    <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full">
                      <div className="font-bold text-[#0c264d] mb-2 text-center">Adulthood</div>
                      <div className="text-sm">Missing deadlines at work, difficulty managing household tasks and finances, 
                      chronic lateness, trouble listening in conversations or meetings, frequently misplacing important items 
                      like wallet or keys.</div>
                    </div>
                  </div>
                </div>
              </div>
            
            <div className="bg-[#ffd166]/20 border-l-4 border-[#ffd166] p-4 rounded-lg mt-6 shadow-sm">
              <p className="text-sm text-gray-800">
                <strong className="text-[#0c264d]">Note:</strong> Inattentive symptoms can be less obvious than hyperactive symptoms, particularly in 
                individuals assigned female at birth, leading to underdiagnosis. These individuals may be labeled as "lazy," 
                "unmotivated," or "not living up to potential" when in fact they're struggling with executive function deficits.
              </p>
            </div>
           	 
{/* Long-term Functional Outcomes Section */}
            <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mt-6">
              
              <h3 className="text-[#0c264d] font-bold mb-6 text-xl text-center">Inattention and Long-Term Functional Outcomes</h3>
              
              <div className="w-full sm:w-64 mx-auto mb-6 bg-white p-2 rounded-lg shadow-sm border border-gray-200">
                <ImageWithFallback 
                  src="/images/adhd/adhd-inattention-boy-looks-out-window.webp"
                  alt="ADHD Inattention"
                  className="w-full h-auto rounded-md block"
                />
              </div>
              
              <p className="mb-8 text-sm text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                Several studies indicate that inattention is a stronger or more consistent predictor of negative, long-term functional 
                outcomes in adults with ADHD—specifically regarding career, education, and financial stability—compared to 
                hyperactivity/impulsivity, which tends to wane with age<sup className="text-[#10b981] font-bold ml-0.5">1, 2, 3</sup>.
              </p>

              {/* Three Pillar Cards */}
              <div className="grid md:grid-cols-3 gap-4 clear-both mb-6">
                
                {/* Employment Card */}
                <div className="bg-white p-5 rounded-lg border-t-4 border-[#2abcd4] shadow-sm flex flex-col border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="text-[#2abcd4]" size={20} />
                    <h4 className="font-bold text-[#0c264d] text-sm uppercase tracking-wider leading-tight">Employment & Occupation</h4>
                  </div>
                  <p className="text-xs text-gray-700 flex-grow leading-relaxed">
                    In a study of adults with ADHD (N=149), inattentiveness was a significant predictor of employment status, 
                    while hyperactivity/impulsivity was not<sup className="text-[#10b981] font-bold ml-0.5">1</sup>. A later analysis confirmed a 
                    stronger-than-anticipated role for inattention in predicting negative occupational outcomes, with these outcomes 
                    often mediated by functional impairments<sup className="text-[#10b981] font-bold ml-0.5">1</sup>.
                  </p>
                </div>

                {/* Relationships Card */}
                <div className="bg-white p-5 rounded-lg border-t-4 border-[#ffd166] shadow-sm flex flex-col border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="text-[#d97706]" size={20} />
                    <h4 className="font-bold text-[#0c264d] text-sm uppercase tracking-wider leading-tight">Life Success & Relationships</h4>
                  </div>
                  <p className="text-xs text-gray-700 flex-grow leading-relaxed">
                    Following participants over a 15-year period, research found that inattention symptoms in early/middle adulthood 
                    were consistently associated with poorer life success, including lower career and relationship satisfaction<sup className="text-[#10b981] font-bold ml-0.5">2</sup>. 
                    Inattention emerged as a more consistent predictor of negative life outcomes in middle adulthood.
                  </p>
                </div>

                {/* Financial Card */}
                <div className="bg-white p-5 rounded-lg border-t-4 border-[#ff6b6b] shadow-sm flex flex-col border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingDown className="text-[#ff6b6b]" size={20} />
                    <h4 className="font-bold text-[#0c264d] text-sm uppercase tracking-wider leading-tight">Financial Distress & Welfare</h4>
                  </div>
                  <p className="text-xs text-gray-700 flex-grow leading-relaxed">
                    Research highlights that ADHD, particularly with inattention and executive dysfunction, leads to higher financial 
                    distress, including increased debt and default rates<sup className="text-[#10b981] font-bold ml-0.5">3</sup>. Additionally, 
                    inattention and aggressive behaviors in childhood predicted adult welfare receipt, whereas hyperactivity did not<sup className="text-[#10b981] font-bold ml-0.5">4</sup>.
                  </p>
                </div>
              </div>

              {/* Why Inattention Has Greater Impact Card */}
              <div className="bg-[#f0f9ff] p-5 rounded-lg border border-[#0A9DC4]/20 shadow-sm mt-6">
                <div className="flex items-center gap-2 mb-4 border-b border-[#0A9DC4]/20 pb-3">
                  <Brain className="text-[#0A9DC4]" size={24} />
                  <h4 className="font-bold text-[#0c264d] text-lg">Why Inattention Has Greater Long-Term Impact</h4>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
                    <strong className="text-[#0c264d] text-sm block mb-1 uppercase tracking-wider">Stability of Symptoms</strong>
                    <p className="text-xs text-gray-700 leading-relaxed">While hyperactivity/impulsivity often declines with age, inattention 
                    symptoms often remain stable or become more impairing in adulthood.</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
                    <strong className="text-[#0c264d] text-sm block mb-1 uppercase tracking-wider">Nature of Impairment</strong>
                    <p className="text-xs text-gray-700 leading-relaxed">Inattention typically leads to chronic underachievement, such as missed 
                    deadlines, poor job performance, and lower socioeconomic status.</p>
                  </div>
                  <div className="bg-[#fff9e6] p-4 rounded shadow-sm border border-[#ffd166]/50 border-l-4 border-l-[#ffd166]">
                    <strong className="text-[#d97706] text-sm block mb-1 uppercase tracking-wider">Important Exception</strong>
                    <p className="text-xs text-gray-700 leading-relaxed">Hyperactivity/impulsivity can still be a significant predictor for specific, immediate work-related issues 
                    like receiving disciplinary action<sup className="text-[#10b981] font-bold ml-0.5">2</sup>.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#10b981]/10 border-l-4 border-[#10b981] p-4 rounded-lg mt-6 shadow-sm">
                <p className="text-sm text-gray-800 leading-relaxed">
                  <strong className="text-[#0c264d]">Clinical Implications:</strong> These findings underscore the critical importance of identifying and treating 
                  inattention symptoms in adults with ADHD. Even as hyperactive symptoms diminish with age, ongoing support for 
                  inattentive symptoms is essential for improving long-term career, financial, and relationship outcomes.
                </p>
              </div>
            </div>

            {/* ===== REFERENCES SECTION ===== */}
        <div className="clear-both mt-16 font-spartan">
              <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>

              {/* CITED STUDIES: GREEN */}
              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
                  Cited Studies & Statistics
                </h4>
                <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                  <p>1. Gjervan, B., et al. (2012). Functional impairment and occupational outcome in adults with ADHD. <i>Journal of Attention Disorders</i>.</p> 
                  <p>2. Gjervan, B., et al. (2016). Functional impairments associated with ADHD in adulthood: The mediating role of emotional dysregulation. <i>Nordic Psychology</i>. </p>
                  <p>3. Henning, A., Summerfeldt, L. J., & Parker, J. D. A. (2024). Longitudinal associations between symptoms of ADHD and life success in middle adulthood. <i>Journal of Attention Disorders</i>. </p>
                  <p>4. Beauchaine, T. P., Zisner, A. R., & Sauder, C. L. (2020). ADHD, financial distress, and suicide in adulthood. <i>Science Advances</i>. </p>
                  <p>5. Vergunst, F., et al. (2021). Association of behavior in boys from low socioeconomic neighborhoods with employment earnings in adulthood. <i>JAMA Pediatrics</i>. </p>
                </div>
              </div>    
              
              {/* BACKGROUND SOURCES: CYAN (No Indentation) */}
              <div>
                <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
                  Background Sources
                </h4>
                <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                  <p>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). </p>
                  <p>Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i> (4th ed.). Guilford Press. </p>
                  <p>Willcutt, E. G. (2012). The prevalence of DSM-IV attention-deficit/hyperactivity disorder: A meta-analytic review. <i>Neurotherapeutics</i>. </p>
                  <p>Quinn, P. O., & Madhoo, M. (2014). A review of attention-deficit/hyperactivity disorder in women and girls: Uncovering this hidden diagnosis. <i>The Primary Care Companion for CNS Disorders</i>. </p>
                  <p>Hinshaw, S. P., et al. (2022). Annual Research Review: Attention-deficit/hyperactivity disorder in girls and women: underrepresentation, longitudinal processes, and key directions. <i>Journal of Child Psychology and Psychiatry</i>. </p>
                </div>
              </div>
            </div>
          </div>
    
  );
}