import { AlertTriangle, Clock, Users, TrendingUp, Baby, GraduationCap, Briefcase, Brain, Zap, FileText } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

export function ADHDSymptomsTabImpulsivity() {
  return (
    <div className="animate-in fade-in duration-300 space-y-6">
      
      {/* Intro Section */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl flex items-center justify-center gap-2 text-center">
          <AlertTriangle className="text-[#0A9DC4]" size={28} />
          Impulsivity Symptoms
        </h2>
        
        <p className="text-sm text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          Impulsivity involves acting without forethought or consideration of consequences. It reflects difficulty 
          with inhibition—the ability to stop oneself from acting on immediate impulses.
        </p>
      </div>
       
      {/* Lifespan Development Section */}
      <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] shadow-sm">
        <h3 className="text-[#0c264d] font-bold mb-6 text-xl text-center">
          Impulsivity Across the Lifespan
        </h3>
        
        <div className="w-full sm:w-64 mx-auto mb-8 bg-white p-2 rounded-lg shadow-sm border border-gray-200">
          <ImageWithFallback 
            src="/images/adhd/adhd-impulsivity-shopping.webp"
            alt="Impulse shopping - impulsivity in daily life"
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
                <div className="text-xs text-gray-700 leading-relaxed text-center">Grabbing toys from others, running into the street without looking, 
                shouting out in class, difficulty waiting in line or taking turns.</div>
              </div>
            </div>
            
            {/* Adolescence */}
            <div className="flex flex-col items-center">
              <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                <GraduationCap className="w-8 h-8 text-[#0c264d]" />
              </div>
              <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full h-full">
                <div className="font-bold text-[#0c264d] mb-2 text-center">Adolescence</div>
                <div className="text-xs text-gray-700 leading-relaxed text-center">Experimenting with risky behaviors, saying hurtful things without 
                thinking, impulsive spending, quick decisions about relationships or commitments.</div>
              </div>
            </div>
            
            {/* Adulthood */}
            <div className="flex flex-col items-center">
              <div className="bg-[#ffd166] p-4 rounded-full mb-3 relative z-10 border-4 border-white shadow-lg">
                <Briefcase className="w-8 h-8 text-[#0c264d]" />
              </div>
              <div className="bg-[#f0f9ff] p-4 rounded-lg border-2 border-[#2abcd4] w-full h-full">
                <div className="font-bold text-[#0c264d] mb-2 text-center">Adulthood</div>
                <div className="text-xs text-gray-700 leading-relaxed text-center">Impulse purchases, quitting jobs suddenly, interrupting conversations, 
                risky driving, making major life decisions without adequate planning.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Note Banner */}
      <div className="bg-[#ffd166]/20 border-l-4 border-[#ffd166] p-4 rounded-lg shadow-sm">
        <p className="text-sm text-gray-800 leading-relaxed">
          <strong className="text-[#0c264d]">Two Sides:</strong> Impulsivity can have serious consequences including financial problems, relationship difficulties, 
          legal issues, and safety concerns. However, it can also manifest as spontaneity and willingness to 
          take creative risks.
        </p>
      </div>

      {/* Research on Impulsivity Section */}
      <div className="bg-white p-6 rounded-lg border-l-4 border-[#0c264d] shadow-sm">
        <h3 className="text-[#0c264d] font-bold mb-6 text-xl text-center">Research on Impulsivity as a Core ADHD Symptom</h3>
        
        <div className="w-full sm:w-64 mx-auto mb-6 bg-white p-2 rounded-lg shadow-sm border border-gray-200">
          <ImageWithFallback 
            src="/images/adhd/adhd-impulsivity-purple-wires.webp"
            alt="Impulsivity and neural connections"
            className="w-full h-auto rounded-md block"
          />
        </div>
        
        <p className="mb-8 text-sm text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          Studies confirm that impulsivity is a core symptom of ADHD across the lifespan, characterized by deficits in motor, 
          cognitive, and attentional control<sup className="text-[#10b981] font-bold ml-0.5">1</sup>. Research indicates that children and adults 
          with ADHD show higher rates of impulsive decision-making, such as instant gratification seeking and difficulty waiting, which 
          are linked to structural changes in the caudate nucleus and frontostriatal pathways<sup className="text-[#10b981] font-bold ml-0.5">2</sup>.
        </p>

        {/* 6-Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 clear-both mb-6">
          
          {/* Longitudinal Impact Card */}
          <div className="bg-white p-5 rounded-lg border-t-4 border-[#2abcd4] shadow-sm flex flex-col border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="text-[#2abcd4]" size={20} />
              <h4 className="font-bold text-[#0c264d] text-sm uppercase tracking-wider leading-tight">Longitudinal Impact</h4>
            </div>
            <p className="text-xs text-gray-700 flex-grow leading-relaxed">
              A 2024 study highlighted that key impulsive behaviors—specifically difficulty waiting turn, blurting out, and 
              interrupting—are central to ADHD and disruptive behavior disorder (DBD) from childhood through adolescence<sup className="text-[#10b981] font-bold ml-0.5">3</sup>. 
              This demonstrates how core symptoms persist through developmental stages.
            </p>
          </div>

          {/* Decision-Making Card */}
          <div className="bg-white p-5 rounded-lg border-t-4 border-[#ffd166] shadow-sm flex flex-col border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-[#d97706]" size={20} />
              <h4 className="font-bold text-[#0c264d] text-sm uppercase tracking-wider leading-tight">Decision-Making & Delays</h4>
            </div>
            <p className="text-xs text-gray-700 flex-grow leading-relaxed">
              Research shows adults with ADHD often prioritize immediate, less valuable rewards over delayed, higher-value ones 
              (delay discounting)<sup className="text-[#10b981] font-bold ml-0.5">4</sup>. A 2016 meta-analysis found this impulsive decision-making 
              was consistently present across ages<sup className="text-[#10b981] font-bold ml-0.5">5</sup>.
            </p>
          </div>

          {/* Dimensions Card */}
          <div className="bg-white p-5 rounded-lg border-t-4 border-[#ff6b6b] shadow-sm flex flex-col border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="text-[#ff6b6b]" size={20} />
              <h4 className="font-bold text-[#0c264d] text-sm uppercase tracking-wider leading-tight">Dimensions of Impulsivity</h4>
            </div>
            <p className="text-xs text-gray-700 flex-grow leading-relaxed">
              Adults with ADHD exhibit higher impulsivity across three main dimensions: motor (acting without thinking), cognitive 
              (poor planning), and attentional (short attention span)<sup className="text-[#10b981] font-bold ml-0.5">6</sup>. This explains why 
              impulsivity manifests in diverse ways.
            </p>
          </div>

          {/* Neurobiological Card */}
          <div className="bg-white p-5 rounded-lg border-t-4 border-[#10b981] shadow-sm flex flex-col border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="text-[#10b981]" size={20} />
              <h4 className="font-bold text-[#0c264d] text-sm uppercase tracking-wider leading-tight">Neurobiological Basis</h4>
            </div>
            <p className="text-xs text-gray-700 flex-grow leading-relaxed">
              Unlike other conditions, ADHD-related impulsivity is strongly associated with structural differences in the caudate 
              nucleus and frontostriatal pathways<sup className="text-[#10b981] font-bold ml-0.5">2</sup>. These findings provide 
              evidence for the biological underpinnings of impulsive behavior in ADHD.
            </p>
          </div>

          {/* Behavioral Consequences Card */}
          <div className="bg-white p-5 rounded-lg border-t-4 border-[#0c264d] shadow-sm flex flex-col border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <Users className="text-[#0c264d]" size={20} />
              <h4 className="font-bold text-[#0c264d] text-sm uppercase tracking-wider leading-tight">Behavioral Consequences</h4>
            </div>
            <p className="text-xs text-gray-700 flex-grow leading-relaxed">
              High levels of impulsivity in ADHD are associated with increased risk for poor interpersonal skills, substance abuse, 
              and dangerous behavior<sup className="text-[#10b981] font-bold ml-0.5">7</sup>. These adverse outcomes underscore the importance of 
              addressing impulsivity through support systems.
            </p>
          </div>

          {/* Commonly Used Measures Card */}
          <div className="bg-[#f0f9ff] p-5 rounded-lg border-t-4 border-[#0A9DC4] shadow-sm flex flex-col border border-[#0A9DC4]/20">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="text-[#0A9DC4]" size={20} />
              <h4 className="font-bold text-[#0c264d] text-sm uppercase tracking-wider leading-tight">Commonly Used Measures</h4>
            </div>
            <p className="text-xs text-gray-700 mb-2 leading-relaxed">
              Researchers use several standardized tools to quantify impulsivity in ADHD:
            </p>
            <ul className="text-xs space-y-1.5 text-gray-700 flex-grow leading-relaxed">
              <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> <span><strong>BIS:</strong> Measures cognitive, motor, and non-planning impulsivity</span></li>
              <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> <span><strong>CPT-II:</strong> Measures errors of commission (impulsive actions)</span></li>
              <li className="flex gap-2"><span className="text-[#0A9DC4] font-bold">•</span> <span><strong>IGT:</strong> Evaluates risky decision-making</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-[#10b981]/10 border-l-4 border-[#10b981] p-4 rounded-lg mt-6 shadow-sm">
          <p className="text-sm text-gray-800 leading-relaxed">
            <strong className="text-[#0c264d]">Clinical Significance:</strong> These studies, often published in journals like <em>Journal of Child Psychology 
            and Psychiatry</em> and covered in PubMed and PMC, emphasize that ADHD impulsivity is a neurobiological trait that 
            requires distinct management compared to other disorders.
          </p>
        </div>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
           
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}

          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Nigg, J. T. (2017). Annual Research Review: On the relations among self-regulation, self-control, executive functioning, effortful control, cognitive control, impulsivity, risk-taking, and inhibition for developmental psychopathology. <i>Journal of Child Psychology and Psychiatry</i>. </p>
            <p>2. Plichta, M. M., & Scheres, A. (2014). Ventral-striatal responsiveness during reward anticipation in ADHD and its relation to trait impulsivity in the healthy population: A meta-analytic review of the fMRI literature. <i>Neuroscience & Biobehavioral Reviews</i>. </p>
            <p>3. Burns, G. L., et al. (2024). Longitudinal developmental relations of ADHD and oppositional defiant disorder symptoms with impulsivity symptoms in childhood and early adolescence. <i>Journal of Child Psychology and Psychiatry</i>. </p>
            <p>4. Sonuga-Barke, E. J., & Fairchild, G. (2012). Neuroeconomics of attention-deficit/hyperactivity disorder: differential influences of medial, dorsal, and ventral prefrontal brain networks on suboptimal decision making? <i>Biological Psychiatry</i>. </p>
            <p>5. Jackson, J. N., & MacKillop, J. (2016). Attention-deficit/hyperactivity disorder and monetary delay discounting: A meta-analysis of case-control studies. <i>Biological Psychiatry: Cognitive Neuroscience and Neuroimaging</i>. </p>
            <p>6. Moeller, F. G., et al. (2001). Psychiatric aspects of impulsivity. <i>American Journal of Psychiatry</i>. </p>
            <p>7. Barkley, R. A., & Fischer, M. (2010). The unique contribution of emotional impulsiveness to impairment in major life activities in hyperactive children as adults. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>. </p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: BLUE */}
     
       
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). </p>
            <p>Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i> (4th ed.). Guilford Press. </p>
            <p>Dalley, J. W., & Robbins, T. W. (2017). Fractionating impulsivity: neuropsychiatric implications. <i>Nature Reviews Neuroscience</i>. </p>
            <p>Solanto, M. V. (2011). <i>Cognitive-Behavioral Therapy for Adult ADHD: Targeting Executive Dysfunction</i>. Guilford Press. </p>
          </div>
        </div>
      
    
    
  );
}