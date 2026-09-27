import { Zap, Baby, GraduationCap, Briefcase, Activity, Clock, Brain, Users } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

export function ADHDSymptomsTabHyperactivity() {
  return (
    <div className="animate-in fade-in duration-300 space-y-6">
      
      {/* Intro Section */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl flex items-center justify-center gap-2 text-center">
          <Zap className="text-[#0A9DC4]" size={28} />
          Hyperactivity Symptoms
        </h2>
        
        <p className="text-sm text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          Hyperactivity involves excessive motor activity and restlessness. While often associated with children, 
          hyperactivity persists into adulthood, though it typically manifests differently.
        </p>
      </div>
      
      {/* Lifespan Section */}
      <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] shadow-sm">
        <h3 className="text-[#0c264d] font-bold mb-6 text-xl text-center">
          Hyperactivity Across the Lifespan
        </h3>
        
        <div className="w-full sm:w-64 mx-auto mb-8 bg-white p-2 rounded-lg shadow-sm border border-gray-200">
          <ImageWithFallback 
            src="/images/adhd/adhd-hyperactivity-lifespan.webp"
            alt="Hyperactivity changes across the lifespan"
            className="w-full h-auto rounded-md block" 
          />
        </div>

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
              <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full h-full">
                <div className="font-bold text-[#0c264d] mb-2 text-center">Childhood</div>
                <div className="text-xs text-gray-700 leading-relaxed text-center">Running around excessively, difficulty playing quietly, constantly 
                climbing on furniture, inability to sit still during meals or class time.</div>
              </div>
            </div>
            
            {/* Adolescence */}
            <div className="flex flex-col items-center">
              <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                <GraduationCap className="w-8 h-8 text-[#0c264d]" />
              </div>
              <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full h-full">
                <div className="font-bold text-[#0c264d] mb-2 text-center">Adolescence</div>
                <div className="text-xs text-gray-700 leading-relaxed text-center">Feeling restless during classes, tapping feet or clicking pens, 
                needing to move around frequently, difficulty sitting through movies or long activities.</div>
              </div>
            </div>
            
            {/* Adulthood */}
            <div className="flex flex-col items-center">
              <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                <Briefcase className="w-8 h-8 text-[#0c264d]" />
              </div>
              <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full h-full">
                <div className="font-bold text-[#0c264d] mb-2 text-center">Adulthood</div>
                <div className="text-xs text-gray-700 leading-relaxed text-center">Internal sense of restlessness, choosing active jobs over sedentary ones, 
                fidgeting during meetings, feeling uncomfortable in situations requiring stillness, constantly keeping 
                busy.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Note Banner */}
      <div className="bg-[#ffd166]/20 border-l-4 border-[#ffd166] p-4 rounded-lg shadow-sm">
        <p className="text-sm text-gray-800 leading-relaxed">
          <strong className="text-[#0c264d]">Age Trend:</strong> Hyperactivity symptoms tend to decrease with age, which is why many adults report 
          that as children they "couldn't sit still" but now feel more internally restless rather than physically hyperactive.
        </p>
      </div>

      {/* Research on Hyperactivity Section */}
      <div className="bg-white p-6 rounded-lg border-l-4 border-[#0c264d] shadow-sm">
        <h3 className="text-[#0c264d] font-bold mb-6 text-xl text-center">Research on Hyperactivity as a Core ADHD Symptom</h3>
        
        <div className="w-full sm:w-64 mx-auto mb-6 bg-white p-2 rounded-lg shadow-sm border border-gray-200">
          <ImageWithFallback 
            src="/images/adhd/adhd-hyperactivity-street-view.webp"
            alt="Hyperactivity in everyday life - street view"
            className="w-full h-auto rounded-md block"
          />
        </div>
        
        <p className="mb-8 text-sm text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          Studies on ADHD hyperactivity show it is a persistent, quantifiable, and core symptom often characterized by 
          excessive, non-goal-directed movement and high levels of behavioral impulsivity. Research utilizes infrared motion 
          analysis, behavioral observation, and self-report surveys to track these behaviors across the lifespan, noting that 
          they often manifest as high thought variability and social challenges.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 clear-both mb-6">
          
          {/* Objective Measurement Card */}
          <div className="bg-white p-5 rounded-lg border-t-4 border-[#2abcd4] shadow-sm flex flex-col border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="text-[#2abcd4]" size={20} />
              <h4 className="font-bold text-[#0c264d] text-sm uppercase tracking-wider leading-tight">Objective Measurement</h4>
            </div>
            <p className="text-xs text-gray-700 flex-grow leading-relaxed">
              A National Institutes of Health (NIH) study used infrared motion analysis to objectively quantify hyperactive 
              behavior in children with ADHD<sup className="text-[#10b981] font-bold ml-0.5">1</sup>. Boys with ADHD 
              moved their heads 2.3 times more often and 3.4 times as far as typical children<sup className="text-[#10b981] font-bold ml-0.5">1</sup>, 
              demonstrating that hyperactivity is a measurable neurobiological phenomenon.
            </p>
          </div>

          {/* Persistence in Adults Card */}
          <div className="bg-white p-5 rounded-lg border-t-4 border-[#ffd166] shadow-sm flex flex-col border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-[#d97706]" size={20} />
              <h4 className="font-bold text-[#0c264d] text-sm uppercase tracking-wider leading-tight">Persistence in Adults</h4>
            </div>
            <p className="text-xs text-gray-700 flex-grow leading-relaxed">
              Research indicates that while hyperactivity may decrease with age, it still persists in many adults with ADHD<sup className="text-[#10b981] font-bold ml-0.5">2</sup>. 
              Studies comparing movements to control groups have documented that hyperactive symptoms 
              remain present and measurable in adulthood, though they manifest differently<sup className="text-[#10b981] font-bold ml-0.5">2</sup>.
            </p>
          </div>

          {/* Behavioral and Cognitive Card */}
          <div className="bg-white p-5 rounded-lg border-t-4 border-[#ff6b6b] shadow-sm flex flex-col border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="text-[#ff6b6b]" size={20} />
              <h4 className="font-bold text-[#0c264d] text-sm uppercase tracking-wider leading-tight">Behavioral & Cognitive</h4>
            </div>
            <p className="text-xs text-gray-700 flex-grow leading-relaxed">
              Studies indicate that hyperactive, rather than inattentive, symptoms are specifically linked to increased 
              variability in thought content<sup className="text-[#10b981] font-bold ml-0.5">3</sup>. This suggests that motor 
              restlessness characteristic of hyperactivity may reflect underlying cognitive processes.
            </p>
          </div>

          {/* Social Functioning Card */}
          <div className="bg-white p-5 rounded-lg border-t-4 border-[#10b981] shadow-sm flex flex-col border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <Users className="text-[#10b981]" size={20} />
              <h4 className="font-bold text-[#0c264d] text-sm uppercase tracking-wider leading-tight">Social Functioning</h4>
            </div>
            <p className="text-xs text-gray-700 flex-grow leading-relaxed">
              Research highlights that hyperactivity/impulsivity is a strong predictor of social impairment, particularly in 
              early childhood<sup className="text-[#10b981] font-bold ml-0.5">4</sup>. The excessive movement and difficulty with behavioral 
              inhibition can interfere with peer relationships.
            </p>
          </div>

          {/* Neurobiological Basis Card */}
          <div className="bg-white p-5 rounded-lg border-t-4 border-[#0c264d] shadow-sm flex flex-col border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="text-[#0c264d]" size={20} />
              <h4 className="font-bold text-[#0c264d] text-sm uppercase tracking-wider leading-tight">Neurobiological Basis</h4>
            </div>
            <p className="text-xs text-gray-700 flex-grow leading-relaxed">
              Findings indicate that levels of hyperactivity correlate with dopamine D₂ receptor density in the caudate<sup className="text-[#10b981] font-bold ml-0.5">5</sup>, 
              providing evidence for the neurobiological underpinnings of hyperactive behavior.
            </p>
          </div>

          {/* Prevalence and Treatment Card */}
          <div className="bg-[#f0f9ff] p-5 rounded-lg border-t-4 border-[#0A9DC4] shadow-sm flex flex-col border border-[#0A9DC4]/20">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="text-[#0A9DC4]" size={20} />
              <h4 className="font-bold text-[#0c264d] text-sm uppercase tracking-wider leading-tight">Prevalence & Treatment</h4>
            </div>
            <p className="text-xs text-gray-700 flex-grow leading-relaxed">
              Studies show the hyperactive/impulsive and combined types account for a significant portion of ADHD cases<sup className="text-[#10b981] font-bold ml-0.5">6</sup>. 
              Research has evaluated treatments like methylphenidate, demonstrating targeted pharmacological treatment can effectively address hyperactive symptoms<sup className="text-[#10b981] font-bold ml-0.5">7</sup>.
            </p>
          </div>
        </div>

        <div className="bg-[#10b981]/10 border-l-4 border-[#10b981] p-4 rounded-lg mt-6 shadow-sm">
          <p className="text-sm text-gray-800 leading-relaxed">
            <strong className="text-[#0c264d]">Clinical Implications:</strong> These findings suggest that hyperactivity is not just "excess energy" but a 
            significant neurobiological component of ADHD that affects behavioral, cognitive, and social functioning, often 
            requiring targeted treatment. Understanding hyperactivity as a measurable, persistent, and biologically-based symptom 
            helps reduce stigma and supports evidence-based intervention approaches.
          </p>
        </div>
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
            <p>1. Teicher, M. H., et al. (1996). Objective measurement of hyperactivity and attentional problems in ADHD. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>. </p>
            <p>2. Teicher, M. H., et al. (2012). Hyperactivity persists in male and female adults with ADHD and remains a highly discriminative feature of the disorder: A case-control study. <i>BMC Psychiatry</i>. </p>
            <p>3. Shaw, G. A., & Giambra, L. (1993). Task-unrelated thoughts of college students diagnosed as hyperactive in childhood. <i>Developmental Neuropsychology</i>. </p>
            <p>4. McQuade, J. D., & Hoza, B. (2008). Peer problems in attention deficit hyperactivity disorder: Current status and future directions. <i>Developmental Disabilities Research Reviews</i>. </p>
            <p>5. Volkow, N. D., et al. (2009). Evaluating dopamine reward pathway in ADHD: Clinical implications. <i>JAMA</i>. </p>
            <p>6. Willcutt, E. G. (2012). The prevalence of DSM-IV attention-deficit/hyperactivity disorder: A meta-analytic review. <i>Neurotherapeutics</i>. </p>
            <p>7. Greenhill, L. L., Halperin, J. M., & Abikoff, H. (1999). Stimulant medications. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>. </p>
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
            <p>Faraone, S. V., et al. (2006). Age-dependent decline of symptoms of attention deficit hyperactivity disorder: impact of remission definition and symptom type. <i>American Journal of Psychiatry</i>. </p>
            <p>Sibley, M. H., et al. (2012). Diagnosing ADHD in adolescence. <i>Journal of Consulting and Clinical Psychology</i>. </p>
            <p>Wilens, T. E., & Spencer, T. J. (2010). Understanding attention-deficit/hyperactivity disorder from childhood to adulthood. <i>Postgraduate Medicine</i>. </p>
          </div>
        </div>
      </div>
    </div>
  );
}