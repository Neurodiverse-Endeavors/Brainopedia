import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ADHDMedicationComparison } from '../../infographics/ADHDMedicationComparison';
import { Pill, BrainCircuit, GraduationCap, Heart, Users, Settings, AlertTriangle, Clock, CheckSquare, Sun, Activity, BookOpen } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface ADHDSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

// ---------------------------------------------------------
// SUB-COMPONENTS (Moved outside to prevent re-renders)
// ---------------------------------------------------------

function OverviewContent() {
  return (
    <>
      {/* TAB 1: CYAN THEME OVERVIEW */}
      <div>
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Comprehensive Treatment Approaches</h2>
 
        <ImageWithFallback 
          src="/images/adhd/adhd-support-overview-gray-happy-sad-brain.webp"
          alt="ADHD treatment and support overview"
          className="w-64 max-w-full h-auto rounded-lg border-2 border-[#2abcd4] shadow-sm block mx-auto mb-8"
        />       
        
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            ADHD is now understood as a chronic, life-course persistent disorder requiring ongoing, integrated treatment 
            across development. Effective ADHD management typically involves a multimodal approach combining 
            several treatment strategies. There is no one-size-fits-all solution; the best treatment plan is individualized 
            based on age, symptom severity, co-occurring conditions, personal preferences, and life circumstances.
          </p>
          <p>
            The most effective treatment plans often include medication, behavioral interventions, educational or 
            workplace accommodations, lifestyle modifications, and support systems. Research consistently shows that 
            combination treatments are more effective than any single intervention alone. The landmark MTA study demonstrated that combined medication and behavioral treatment produced the best outcomes for children with ADHD.<sup>1, 2</sup>
          </p>
        </div>
        
        <ImageWithFallback 
          src="/images/adhd/adhd-support-overview-charts-running.webp"
          alt="Treatment approach charts and outcomes"
          className="w-64 max-w-full h-auto rounded-lg border-2 border-[#2abcd4] shadow-sm block mx-auto my-8"
        />

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-l-4 border-[#2abcd4] pl-3">Treatment Sequencing</h3>
        <p className="text-slate-700 leading-relaxed mb-8">
          Recent research on treatment sequencing suggests that starting with behavioral interventions first may be 
          more effective and cost less than medication-first approaches, particularly for reducing classroom discipline 
          referrals and disruptive behaviors.<sup>3</sup> However, the optimal treatment sequence depends on individual 
          circumstances, severity of symptoms, and treatment response. Many individuals benefit from combining both 
          medication and behavioral interventions from the outset.
        </p>
        
        <ImageWithFallback 
          src="/images/adhd/adhd-support-overview-pills-scattered.webp"
          alt="Overview of medication and treatment options"
          className="w-64 max-w-full h-auto rounded-lg border-2 border-[#2abcd4] shadow-sm block mx-auto my-8"
        />

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-l-4 border-[#2abcd4] pl-3">Access to Evidence-Based Treatment</h3>
        <p className="text-slate-700 leading-relaxed mb-10">
          Despite strong evidence supporting psychosocial interventions, there is a significant gap between research 
          and practice. Recent data indicates that only 31% of families of children with ADHD receive behavioral parent 
          training, and just 32% receive behavioral classroom management interventions.<sup>4, 5</sup> Barriers include 
          workforce shortages, lack of available providers trained in evidence-based approaches, and practical challenges 
          such as transportation, childcare, and scheduling conflicts.
        </p>
      </div>
      
      {/* Multimodal Treatment Components (Cyan Card Grid) */}
      <div className="my-8 bg-[#f4f4f4] p-6 rounded-xl border border-gray-200">
        <div className="text-center mb-8">
          <h3 className="text-[#0c264d] font-bold text-2xl">Multimodal ADHD Treatment Approach</h3>
          <p className="text-slate-600 text-sm mt-2">Research shows combination treatments are more effective than any single intervention alone.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border-t-4 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center">
            <Pill className="w-8 h-8 text-[#2abcd4] mb-3" />
            <h4 className="text-[#0c264d] font-bold text-lg mb-2">Medication</h4>
            <p className="text-sm text-slate-600 mb-3">Stimulant and non-stimulant options to improve focus and reduce ADHD symptoms</p>
            <ul className="text-xs space-y-1 text-left w-full text-slate-700">
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2abcd4] mt-1 shrink-0"></div>First-line treatment for moderate to severe symptoms</li>
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2abcd4] mt-1 shrink-0"></div>Individualized dosing and monitoring</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border-t-4 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center">
            <BrainCircuit className="w-8 h-8 text-[#2abcd4] mb-3" />
            <h4 className="text-[#0c264d] font-bold text-lg mb-2">Behavioral Interventions</h4>
            <p className="text-sm text-slate-600 mb-3">Therapy, CBT, coaching, and skill development strategies</p>
            <ul className="text-xs space-y-1 text-left w-full text-slate-700">
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2abcd4] mt-1 shrink-0"></div>Cognitive Behavioral Therapy (CBT)</li>
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2abcd4] mt-1 shrink-0"></div>Parent training & executive function coaching</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border-t-4 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center">
            <GraduationCap className="w-8 h-8 text-[#2abcd4] mb-3" />
            <h4 className="text-[#0c264d] font-bold text-lg mb-2">Educational & Workplace</h4>
            <p className="text-sm text-slate-600 mb-3">IEP/504 plans and reasonable workplace accommodations</p>
            <ul className="text-xs space-y-1 text-left w-full text-slate-700">
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2abcd4] mt-1 shrink-0"></div>School-based support and modifications</li>
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2abcd4] mt-1 shrink-0"></div>Environmental adaptations</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border-t-4 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center">
            <Heart className="w-8 h-8 text-[#2abcd4] mb-3" />
            <h4 className="text-[#0c264d] font-bold text-lg mb-2">Lifestyle Modifications</h4>
            <p className="text-sm text-slate-600 mb-3">Exercise, sleep, nutrition, mindfulness, and stress management</p>
            <ul className="text-xs space-y-1 text-left w-full text-slate-700">
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2abcd4] mt-1 shrink-0"></div>Regular physical exercise & sleep hygiene</li>
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2abcd4] mt-1 shrink-0"></div>Balanced nutrition and hydration</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border-t-4 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center">
            <Users className="w-8 h-8 text-[#2abcd4] mb-3" />
            <h4 className="text-[#0c264d] font-bold text-lg mb-2">Support Systems</h4>
            <p className="text-sm text-slate-600 mb-3">Family, friends, support groups, and community resources</p>
            <ul className="text-xs space-y-1 text-left w-full text-slate-700">
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2abcd4] mt-1 shrink-0"></div>Family education and involvement</li>
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2abcd4] mt-1 shrink-0"></div>Peer support groups & advocacy</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border-t-4 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center">
            <Settings className="w-8 h-8 text-[#2abcd4] mb-3" />
            <h4 className="text-[#0c264d] font-bold text-lg mb-2">Self-Management Tools</h4>
            <p className="text-sm text-slate-600 mb-3">Organizational systems, time management, and productivity strategies</p>
            <ul className="text-xs space-y-1 text-left w-full text-slate-700">
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2abcd4] mt-1 shrink-0"></div>Digital and physical planning tools</li>
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2abcd4] mt-1 shrink-0"></div>Routine and structure building</li>
            </ul>
          </div>
        </div>
      </div>

      {/* References Section */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. MTA Cooperative Group. (1999). A 14-month randomized clinical trial of treatment strategies for attention-deficit/hyperactivity disorder. <i>Archives of General Psychiatry</i>.</p>
            <p>2. Cortese, S., et al. (2018). Comparative efficacy and tolerability of medications for attention-deficit hyperactivity disorder in children, adolescents, and adults: a systematic review and network meta-analysis. <i>The Lancet Psychiatry</i>.</p>
            <p>3. Pelham, W. E., Jr., et al. (2016). Sequential, adaptive, behavioral and pharmacological treatment for childhood ADHD. <i>Journal of Clinical Child & Adolescent Psychology</i>.</p>
            <p>4. Chacko, A., et al. (2024). Improving the efficacy and effectiveness of evidence-based psychosocial interventions for attention-deficit/hyperactivity disorder (ADHD) in children and adolescents. <i>Translational Psychiatry</i>.</p>
            <p>5. Fabiano, G. A., et al. (2015). A systematic review of meta-analyses of psychosocial treatment for attention-deficit/hyperactivity disorder. <i>Clinical Child and Family Psychology Review</i>.</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Academy of Pediatrics. (2011). ADHD: Clinical practice guideline for the diagnosis, evaluation, and treatment of attention-deficit/hyperactivity disorder in children and adolescents. <i>Pediatrics</i>.</li>
            <li>Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i> (4th ed.). Guilford Press.</li>
            <li>National Institute of Mental Health. (2024). Attention-Deficit/Hyperactivity Disorder.</li>
            <li>Wolraich, M. L., et al. (2019). Clinical practice guideline for the diagnosis, evaluation, and treatment of attention-deficit/hyperactivity disorder in children and adolescents. <i>Pediatrics</i>.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

function MedicalContent() {
  return (
    <>
      {/* TAB 2: NAVY THEME MEDICAL */}
      <div>
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Medication</h2>
        
        <ImageWithFallback 
          src="/images/adhd/adhd-medical-pills-packaged.webp"
          alt="ADHD medication - packaged pills"
          className="w-64 max-w-full h-auto rounded-lg border-2 border-[#0c264d] shadow-sm block mx-auto mb-8"
        />

        <div className="bg-[#fdf2f8] border-l-4 border-[#be185d] p-5 rounded-r-xl shadow-sm mb-8">
          <h3 className="font-bold text-[#831843] mb-2 uppercase text-xs flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" /> Medical Disclaimer
          </h3>
          <p className="text-sm text-[#831843]">
            All prescription and over-the-counter medications should only be used under the guidance and recommendations of a qualified medical professional. This information is for educational purposes only and does not replace professional medical advice.
          </p>
        </div>
        
        <p className="text-slate-700 leading-relaxed mb-8">
          Medication is often the first-line treatment for ADHD, particularly for moderate to severe symptoms. 
          Stimulant medications are highly effective for about 70-80% of people with ADHD,<sup>1, 2</sup> with improvements 
          typically seen in attention, impulse control, and hyperactivity. Meta-analyses consistently demonstrate large effect sizes for stimulant medications across multiple outcome domains.<sup>3, 4</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-l-4 border-[#0c264d] pl-3">Stimulant Medications</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Despite the name, stimulants have a paradoxically calming effect for people with ADHD by increasing 
          dopamine and norepinephrine in the brain. Two main categories exist:
        </p>
        <ul className="list-disc ml-6 mb-6 text-slate-700 space-y-2">
          <li><strong>Methylphenidate-based:</strong> Ritalin, Concerta, Focalin, Daytrana patch. Available in short-acting (3-6 hours) and long-acting (8-12 hours) formulations<sup>5, 6</sup></li>
          <li><strong>Amphetamine-based:</strong> Adderall, Vyvanse, Dexedrine. Also available in various durations of action</li>
        </ul>
        <p className="text-slate-700 leading-relaxed mb-10">
          Common side effects include decreased appetite, difficulty sleeping, increased heart rate, and mild headaches. 
          Most side effects are mild and diminish over time or with dosage adjustment.
        </p>
      </div>

      <div>
        <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-l-4 border-[#0c264d] pl-3">Non-Stimulant Medications</h3>
        
        <p className="text-slate-700 leading-relaxed mb-4">
          Alternative options for those who don't respond to or can't tolerate stimulants:
        </p>
        <ul className="list-disc ml-6 mb-10 text-slate-700 space-y-2">
          <li><strong>Atomoxetine (Strattera):</strong> A norepinephrine reuptake inhibitor that takes several weeks to reach full effect</li>
          <li><strong>Guanfacine (Intuniv):</strong> An alpha-2 adrenergic agonist, helpful for hyperactivity and impulsivity</li>
          <li><strong>Clonidine (Kapvay):</strong> Another alpha-2 agonist, sometimes used in combination with stimulants</li>
          <li><strong>Bupropion (Wellbutrin):</strong> Off-label use, particularly helpful if depression is also present</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-l-4 border-[#0c264d] pl-3">Medication Considerations</h3>
        <ul className="list-disc ml-6 mb-8 text-slate-700 space-y-2">
          <li>Finding the right medication and dosage may take time and adjustment</li>
          <li>Side effects are usually mild and often diminish over time</li>
          <li>Regular monitoring by a healthcare provider is important for safety and effectiveness</li>
          <li>Medication effectiveness can be influenced by sleep, nutrition, and stress levels</li>
        </ul>

        <div className="bg-[#fdf2f8] border-l-4 border-[#be185d] p-5 rounded-r-xl shadow-sm mb-8">
          <h3 className="font-bold text-[#831843] mb-2 uppercase text-xs flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" /> Important Reminder
          </h3>
          <p className="text-sm text-[#831843]">
            All prescription and over-the-counter medications should only be used under the guidance and recommendations of a qualified medical professional.
          </p>
        </div>

        <div className="flex justify-center my-8 clear-both w-full overflow-x-auto bg-[#f4f4f4] p-4 rounded-xl border border-gray-200">
          <ADHDMedicationComparison />
        </div>
      </div>

      {/* References Section */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Faraone, S. V., & Buitelaar, J. (2010). Comparing the efficacy of stimulants for ADHD in children and adolescents using meta-analysis. <i>European Child & Adolescent Psychiatry</i>.</p>
            <p>2. Spencer, T., et al. (1996). Pharmacotherapy of attention-deficit hyperactivity disorder across the life cycle. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>.</p>
            <p>3. Cortese, S., et al. (2018). Comparative efficacy and tolerability of medications for attention-deficit hyperactivity disorder in children, adolescents, and adults: a systematic review and network meta-analysis. <i>The Lancet Psychiatry</i>.</p>
            <p>4. Faraone, S. V., & Glatt, S. J. (2010). A comparison of the efficacy of medications for adult attention-deficit/hyperactivity disorder using meta-analysis of effect sizes. <i>The Journal of Clinical Psychiatry</i>.</p>
            <p>5. Pelham, W. E., et al. (2001). Once-a-day Concerta methylphenidate versus three-times-daily methylphenidate in laboratory and natural settings. <i>Pediatrics</i>.</p>
            <p>6. Biederman, J., et al. (2003). A comparison of once-daily and divided doses of modafinil in children with attention-deficit/hyperactivity disorder. <i>Journal of Clinical Psychiatry</i>.</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i> (4th ed.). Guilford Press.</li>
            <li>National Institute of Mental Health. (2024). Attention-Deficit/Hyperactivity Disorder.</li>
            <li>Wolraich, M. L., et al. (2019). Clinical practice guideline for the diagnosis, evaluation, and treatment of attention-deficit/hyperactivity disorder in children and adolescents. <i>Pediatrics</i>.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

function BehavioralContent() {
  return (
    <>
      {/* TAB 3: YELLOW THEME BEHAVIORAL */}
      <div>
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Behavioral Interventions and Therapy</h2>
        
        <ImageWithFallback 
          src="/images/adhd/adhd-behavioral-family-therapy.webp"
          alt="Behavioral therapy and interventions for ADHD"
          className="w-64 max-w-full h-auto rounded-lg border-2 border-[#ffd166] shadow-sm block mx-auto mb-8"
        />

        <p className="text-slate-700 leading-relaxed mb-8">
          Evidence-based psychosocial interventions play a critical role in ADHD treatment, particularly for children 
          and adolescents. Recent research continues to refine these approaches to improve their efficacy and 
          effectiveness in real-world settings.<sup>1, 2</sup>
        </p>
        
        {/* CBT CARD */}
        <div className="bg-white p-6 rounded-xl border-l-4 border-[#ffd166] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold text-xl flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#fff9e6] flex items-center justify-center shrink-0">
              <BrainCircuit className="text-[#ffd166] w-5 h-5" />
            </div>
            Cognitive Behavioral Therapy (CBT)
          </h3>
          <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
            <p>
              CBT for ADHD helps individuals develop practical skills for managing symptoms and addressing negative 
              thought patterns. It focuses on organization, time management, planning, and challenging unhelpful beliefs 
              about oneself. Studies show that CBT is effective for adults with ADHD, with significant reductions in ADHD symptoms and improvements in executive functioning.<sup>3, 4, 5</sup>
            </p>
            <p>
              Modern CBT approaches for ADHD incorporate skills training modules targeting specific executive function deficits. These include cognitive restructuring to address negative self-perceptions that often develop after years of ADHD-related challenges, mindfulness techniques to improve sustained attention and reduce impulsivity, and practical problem-solving strategies for everyday situations. Group CBT formats have shown particular promise, offering peer support while being more cost-effective than individual therapy.<sup>6, 7</sup>
            </p>
            <p>
              Recent developments in CBT delivery include digital therapeutics and smartphone-based interventions that provide real-time support and skill practice. These technology-enhanced approaches show promising results in improving treatment accessibility and engagement, particularly for young adults who may prefer app-based support over traditional therapy sessions.<sup>8</sup>
            </p>
          </div>
        </div>

        {/* PARENT TRAINING CARD */}
        <div className="bg-white p-6 rounded-xl border-l-4 border-[#ffd166] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold text-xl flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#fff9e6] flex items-center justify-center shrink-0">
              <Users className="text-[#ffd166] w-5 h-5" />
            </div>
            Behavioral Parent Training
          </h3>
          <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
            <p>
              Behavioral Parent Training (BPT) is the most well-studied psychosocial intervention for ADHD and serves as 
              a first-line intervention for younger children with ADHD. BPT is based on operant conditioning and social 
              learning theories, teaching caregivers strategies for managing challenging behaviors, improving communication, 
              establishing routines, and providing consistent positive reinforcement.
            </p>
            <p>
              BPT focuses on both antecedents (effective instructions, clear rules) and consequences (active ignoring, 
              time-out from positive reinforcement, rewards for positive behaviors). Research shows statistically significant 
              improvements with small-to-medium effect sizes on child ADHD symptoms, parenting behaviors, parenting sense of 
              competence, and parental mental health, with benefits sustained over the course of a year.<sup>9, 10, 11</sup>
            </p>
            
            <div className="bg-[#f4f4f4] p-5 rounded-lg mt-4 border border-gray-200">
              <h4 className="text-[#0c264d] font-semibold mb-2">Modern Adaptations & Challenges</h4>
              <p className="mb-3">
                To address access barriers, researchers have developed innovative delivery formats including self-directed online programs, videoconference-based sessions, and brief intervention models that can be delivered in pediatric primary care settings. These adaptations show comparable effectiveness to traditional in-person formats while significantly improving accessibility for families facing transportation, work schedule, or geographic challenges.<sup>12, 13, 8</sup>
              </p>
              <p className="mb-3">
                Recent programs also incorporate cultural adaptations to better serve diverse families, recognizing that parenting practices and family structures vary across cultures. Tailored approaches that respect cultural values while teaching core behavioral principles have demonstrated improved engagement and outcomes in underserved communities.<sup>14, 15</sup>
              </p>
              <p>
                Despite its effectiveness, many families who could benefit from BPT never receive it. Common barriers include practical challenges, perceptual barriers about treatment, and cultural factors.
              </p>
            </div>
          </div>
        </div>
        
        {/* CLASSROOM MANAGEMENT CARD */}
        <div className="bg-white p-6 rounded-xl border-l-4 border-[#ffd166] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold text-xl flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#fff9e6] flex items-center justify-center shrink-0">
              <BookOpen className="text-[#ffd166] w-5 h-5" />
            </div>
            Behavioral Classroom Management
          </h3>
          <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
            <p>
              School-based behavioral interventions modify the classroom environment to support children with ADHD. Effective strategies include token economy systems, daily report cards that communicate between teachers and parents, preferential seating, and clear classroom rules with consistent consequences. These interventions directly target academic and social functioning in the setting where impairment is most pronounced.
            </p>
            <p>
              Contemporary classroom interventions emphasize positive reinforcement systems and proactive environmental modifications rather than punitive approaches. Teachers are trained to provide frequent, specific feedback and to break tasks into manageable segments. Daily behavior report cards allow for home-school collaboration, enabling parents to reinforce classroom successes at home.
            </p>
          </div>
        </div>
        
        {/* MINDFULNESS CARD */}
        <div className="bg-white p-6 rounded-xl border-l-4 border-[#ffd166] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold text-xl flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#fff9e6] flex items-center justify-center shrink-0">
              <Sun className="text-[#ffd166] w-5 h-5" />
            </div>
            Mindfulness-Based Interventions
          </h3>
          <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
            <p>
              Mindfulness training has emerged as a complementary approach to traditional behavioral interventions. Mindfulness-based programs teach present-moment awareness and non-judgmental acceptance of thoughts and feelings. For individuals with ADHD, these practices can improve attention regulation, reduce impulsivity, and enhance emotional control.
            </p>
            <p>
              Adaptations designed specifically for ADHD incorporate shorter meditation periods, more movement-based practices, and concrete skill-building exercises. Family-based mindfulness programs that teach both parents and children have shown benefits for reducing parental stress while improving child behavior regulation.<sup>16, 17, 18</sup> While still an emerging area, mindfulness appears most effective when combined with other evidence-based treatments rather than used in isolation.
            </p>
          </div>
        </div>
        
        {/* COACHING CARD */}
        <div className="bg-white p-6 rounded-xl border-l-4 border-[#ffd166] shadow-sm mb-8">
          <h3 className="text-[#0c264d] font-bold text-xl flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#fff9e6] flex items-center justify-center shrink-0">
              <Activity className="text-[#ffd166] w-5 h-5" />
            </div>
            ADHD Coaching
          </h3>
          <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
            <p>
              ADHD coaching is a collaborative partnership between coach and client focused on developing practical strategies and systems for managing daily life challenges. Unlike therapy, coaching is action-oriented and future-focused, helping individuals identify goals, create accountability structures, and develop personalized organizational systems.
            </p>
            <p>
              Coaches work with clients on time management, project planning, workplace productivity, academic success strategies, and relationship skills. Sessions typically occur weekly via phone or video call, with check-ins throughout the week. While research on ADHD coaching is still developing, preliminary studies suggest improvements in executive functioning, time management, and quality of life, particularly when coaching supplements medication or therapy.<sup>19, 20</sup>
            </p>
          </div>
        </div>
      </div>

      {/* References Section */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Chacko, A., et al. (2024). Improving the efficacy and effectiveness of evidence-based psychosocial interventions for attention-deficit/hyperactivity disorder (ADHD) in children and adolescents. <i>Translational Psychiatry</i>.</p>
            <p>2. Evans, S. W., et al. (2018). Evidence-based psychosocial treatments for children and adolescents with attention deficit/hyperactivity disorder. <i>Journal of Clinical Child & Adolescent Psychology</i>.</p>
            <p>3. Safren, S. A., et al. (2005). Cognitive-behavioral therapy for ADHD in medication-treated adults with continued symptoms. <i>Behaviour Research and Therapy</i>.</p>
            <p>4. Ramsay, J. R., & Rostain, A. L. (2008). <i>Cognitive-Behavioral Therapy for Adult ADHD: An Integrative Psychosocial and Medical Approach</i>. Routledge.</p>
            <p>5. Solanto, M. V., et al. (2010). Efficacy of meta-cognitive therapy for adult ADHD. <i>American Journal of Psychiatry</i>.</p>
            <p>6. Virta, M., et al. (2010). Adults with ADHD benefit from cognitive-behaviorally oriented group rehabilitation. <i>Journal of Attention Disorders</i>.</p>
            <p>7. Bramham, J., et al. (2009). Evaluation of group cognitive behavioral therapy for adults with ADHD. <i>Journal of Attention Disorders</i>.</p>
            <p>8. Franke, N., et al. (2018). Technology-assisted parenting interventions for families of children with ADHD. <i>Journal of Child and Family Studies</i>.</p>
            <p>9. Pelham, W. E., Jr., & Fabiano, G. A. (2008). Evidence-based psychosocial treatments for attention-deficit/hyperactivity disorder. <i>Journal of Clinical Child & Adolescent Psychology</i>.</p>
            <p>10. Fabiano, G. A., et al. (2015). A systematic review of meta-analyses of psychosocial treatment for attention-deficit/hyperactivity disorder. <i>Clinical Child and Family Psychology Review</i>.</p>
            <p>11. Fabiano, G. A., et al. (2009). A meta-analysis of behavioral treatments for attention-deficit/hyperactivity disorder. <i>Clinical Psychology Review</i>.</p>
            <p>12. Jones, D. J., et al. (2013). Technology-enhanced program for child disruptive behavior disorders. <i>Journal of Clinical Child & Adolescent Psychology</i>.</p>
            <p>13. Xie, Y., et al. (2013). Effectiveness of videoconferencing on teaching parent training skills to parents of children with ADHD. <i>Telemedicine and e-Health</i>.</p>
            <p>14. Epstein, J. N., et al. (2015). The role of children's ethnicity in the relationship between teacher ratings of ADHD and observed classroom behavior. <i>Journal of Consulting and Clinical Psychology</i>.</p>
            <p>15. Matos, M., et al. (2009). Parent-child interaction therapy for Puerto Rican preschool children with ADHD and behavior problems. <i>Family Process</i>.</p>
            <p>16. Zylowska, L., et al. (2008). Mindfulness meditation training in adults and adolescents with ADHD. <i>Journal of Attention Disorders</i>.</p>
            <p>17. Cairncross, M., & Miller, C. J. (2016). The effectiveness of mindfulness-based therapies for ADHD: A meta-analytic review. <i>Journal of Attention Disorders</i>.</p>
            <p>18. Mitchell, J. T., et al. (2017). A pilot trial of mindfulness meditation training for ADHD in adulthood. <i>Journal of Attention Disorders</i>.</p>
            <p>19. Safren, S. A. (2006). Cognitive-behavioral approaches to ADHD treatment in adulthood. <i>The Journal of Clinical Psychiatry</i>.</p>
            <p>20. Ramsay, J. R. (2010). <i>Nonmedication Treatments for Adult ADHD</i>. American Psychological Association.</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Academy of Pediatrics. (2011). ADHD: Clinical practice guideline for the diagnosis, evaluation, and treatment of attention-deficit/hyperactivity disorder in children and adolescents. <i>Pediatrics</i>.</li>
            <li>Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i> (4th ed.). Guilford Press.</li>
            <li>National Institute of Mental Health. (2024). Attention-Deficit/Hyperactivity Disorder.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

function EducationalContent() {
  return (
    <>
      {/* TAB 4: CYAN THEME EDUCATIONAL */}
      <div>
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Educational Accommodations and Support</h2>
        
        <ImageWithFallback 
          src="/images/adhd/adhd-work-overhead-organized.webp"
          alt="Educational and workplace accommodations for ADHD"
          className="w-64 max-w-full h-auto rounded-lg border-2 border-[#2abcd4] shadow-sm block mx-auto mb-8"
        />

        <p className="text-slate-700 leading-relaxed mb-8">
          Students with ADHD are entitled to accommodations under Section 504 of the Rehabilitation Act or through an Individualized Education Program (IEP) under the Individuals with Disabilities Education Act (IDEA).
        </p>
        
        {/* ACADEMIC ACCOMMODATIONS CARD */}
        <div className="bg-white p-6 rounded-xl border-t-4 border-[#2abcd4] shadow-sm mb-10">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg flex items-center gap-2">
            <GraduationCap className="text-[#2abcd4] w-5 h-5" />
            Common Academic Accommodations
          </h3>
          <ul className="space-y-3 text-slate-700 text-sm">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
              <span>Extended time on tests and assignments</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
              <span>Preferential seating near the teacher, away from distractions</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
              <span>Breaking long assignments into smaller chunks</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
              <span>Providing written and verbal instructions</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
              <span>Use of assistive technology (computer for writing, calculators)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
              <span>Modified homework load and frequent breaks during work periods</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
              <span>Note-taking assistance or access to teacher notes</span>
            </li>
          </ul>
        </div>
      </div>

      {/* OST HIGHLIGHT SECTION */}
      <div className="bg-[#f0f9ff] p-8 rounded-2xl border border-[#2abcd4]/30 mb-10">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl text-center">Organizational Skills Training (OST)</h2>
        
        <p className="text-slate-700 text-sm leading-relaxed mb-6 text-center max-w-3xl mx-auto">
          Children and adolescents with ADHD have impaired organization, time management, and planning skills that 
          undermine their academic abilities and potential. Homework management and organizational skills predict 
          concurrent GPA and later academic outcomes.<sup>1</sup> Organizational Skills Training (OST) utilizes behavioral 
          methods to directly teach these skills to students with ADHD.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/20">
            <h3 className="text-[#0c264d] font-bold mb-2 text-sm">What OST Includes</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              OST programs focus on materials organization (binders, lockers), time management (estimating task duration), and planning larger assignments. Behavioral management procedures reinforce skill use and progress.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/20">
            <h3 className="text-[#0c264d] font-bold mb-2 text-sm">Age & Effectiveness</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Developed primarily for ages 10-14, research demonstrates improvements in organizational skills, planner use, homework performance, and reduced adolescent impairment across multiple domains.<sup>2, 3</sup>
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/20">
            <h3 className="text-[#0c264d] font-bold mb-2 text-sm">School Implementation</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Embedding OST in schools enhances reach. Studies show that OST delivered by minimally trained school counselors leads to massive improvements in organization, time management, and planning.<sup>4</sup>
            </p>
          </div>
        </div>
      </div>

      {/* WORKPLACE ACCOMMODATIONS CARD */}
      <div className="bg-white p-6 rounded-xl border-t-4 border-[#2abcd4] shadow-sm mb-10">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center gap-2">
          <Settings className="text-[#2abcd4] w-5 h-5" />
          Workplace Accommodations
        </h2>
        
        <p className="text-slate-700 text-sm leading-relaxed mb-4">
          Under the Americans with Disabilities Act (ADA), adults with ADHD may request reasonable accommodations:
        </p>
        <ul className="space-y-3 text-slate-700 text-sm mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
            <span>Quiet workspace or noise-canceling headphones</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
            <span>Flexible scheduling or work-from-home options</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
            <span>Written instructions for complex tasks and regular check-ins with supervisors</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
            <span>Task prioritization assistance and technology tools (apps, reminders, timers)</span>
          </li>
        </ul>
        <div className="bg-slate-50 p-4 rounded-lg text-xs text-slate-600 italic">
          Disclosure of ADHD to employers is a personal choice. Some find that disclosure allows them to access 
          helpful accommodations, while others prefer to implement unofficial strategies independently.
        </div>
      </div>

      {/* References Section */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Langberg, J. M., et al. (2011). Patterns and predictors of adolescent academic achievement and performance in a sample of children with ADHD. <i>Journal of Clinical Child & Adolescent Psychology</i>.</p>
            <p>2. Gureasko-Moore, S., et al. (2006). The effects of self-management in general education classrooms on the organizational skills of adolescents with ADHD. <i>Behavior Modification</i>.</p>
            <p>3. Vidal, R., et al. (2013). Organizational skills training for children with ADHD: A randomized controlled trial. <i>Journal of Clinical Child & Adolescent Psychology</i>.</p>
            <p>4. Evans, S. W., et al. (2016). Evaluation of a school-based treatment program for young adolescents with ADHD. <i>Journal of Consulting and Clinical Psychology</i>.</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>U.S. Department of Education. (2016). Supporting Child and Student Social, Emotional, Behavioral, and Mental Health Needs.</li>
            <li>Individuals with Disabilities Education Act (IDEA). (2004). 20 U.S.C. § 1400 et seq.</li>
            <li>Job Accommodation Network. (2024). Accommodation and Compliance: Attention Deficit/Hyperactivity Disorder (ADHD).</li>
          </ul>
        </div>
      </div>
    </>
  );
}

function LifestyleContent() {
  return (
    <>
      {/* TAB 5: NAVY THEME LIFESTYLE */}
      <div>
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Lifestyle Modifications</h2>
        
        <ImageWithFallback 
          src="/images/adhd/adhd-support-lifestyle-kids-yoga.webp"
          alt="Kids doing yoga - lifestyle modifications for ADHD"
          className="w-64 max-w-full h-auto rounded-lg border-2 border-[#0c264d] shadow-sm block mx-auto mb-8"
        />

        <p className="text-slate-700 leading-relaxed mb-8">
          While lifestyle modifications alone are not sufficient to treat ADHD, they play a crucial supporting role 
          in symptom management and overall well-being. Research increasingly demonstrates that certain lifestyle 
          interventions can meaningfully improve ADHD symptoms, executive function, and quality of life when combined 
          with other evidence-based treatments.<sup>1</sup>
        </p>
        
        {/* PHYSICAL EXERCISE CARD */}
        <div className="bg-white p-6 rounded-xl border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold text-xl flex items-center gap-3 mb-4">
            <Activity className="text-[#0c264d] w-6 h-6" />
            Physical Exercise
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            Physical exercise has emerged as one of the most promising lifestyle interventions for ADHD management.{' '}
            A comprehensive meta-analysis of 14 studies found that acute and regular physical exercise significantly 
            improved attention, hyperactivity, impulsivity, anxiety, executive function, and social disorders in 
            children with ADHD.<sup>2</sup> The benefits appear to be most pronounced with moderate-to-vigorous 
            intensity aerobic exercise.
          </p>
          
          <div className="bg-slate-50 p-5 rounded-lg mb-4">
            <h4 className="text-[#0c264d] font-semibold text-sm mb-2">Neurobiological Mechanisms</h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Exercise benefits ADHD through multiple mechanisms: it increases dopamine and norepinephrine levels in 
              the brain (the same neurotransmitters targeted by ADHD medications), enhances brain-derived neurotrophic 
              factor (BDNF) which supports neuroplasticity, improves blood flow to the prefrontal cortex, and reduces 
              overall stress and anxiety. These neurochemical changes can improve attention, executive 
              function, and behavioral regulation.
            </p>
          </div>
          
          <h4 className="text-[#0c264d] font-semibold text-sm mb-2">Practical Recommendations</h4>
          <ul className="space-y-2 text-slate-700 text-xs">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0c264d] mt-1 shrink-0"></div>
              <span><strong>Duration and intensity:</strong> Aim for at least 30-60 minutes of moderate-to-vigorous physical activity most days of the week</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0c264d] mt-1 shrink-0"></div>
              <span><strong>Types of exercise:</strong> Aerobic activities (running, swimming, cycling), team sports, martial arts, dance, and activities requiring coordination show particular benefits</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0c264d] mt-1 shrink-0"></div>
              <span><strong>Timing & Movement breaks:</strong> Morning exercise primes focus for the day, while brief 5-10 minute activity breaks improve immediate attention and reduce restlessness</span>
            </li>
          </ul>
        </div>

        {/* SLEEP HYGIENE CARD */}
        <div className="bg-white p-6 rounded-xl border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold text-xl flex items-center gap-3 mb-4">
            <Clock className="text-[#0c264d] w-6 h-6" />
            Sleep Hygiene and Interventions
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            Sleep problems are highly prevalent in individuals with ADHD, affecting 25-55% of children and up to 80% 
            of adults with the condition.<sup>3, 4</sup> Common sleep difficulties include delayed sleep onset, insomnia, 
            restless sleep, difficulty waking, and daytime sleepiness. Poor sleep significantly exacerbates ADHD symptoms, 
            creating a problematic cycle where ADHD interferes with sleep, and inadequate sleep worsens ADHD symptoms.
          </p>
          
          <div className="bg-slate-50 p-5 rounded-lg mb-4">
            <h4 className="text-[#0c264d] font-semibold text-sm mb-2">Sleep and ADHD Symptoms</h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Research demonstrates that sleep deprivation in typically developing children produces behaviors remarkably 
              similar to ADHD symptoms—including inattention, hyperactivity, and impulsivity.<sup>5</sup> For individuals with ADHD, 
              sleep problems compound existing difficulties with attention, emotional regulation, and executive function.{' '}
              Some researchers have proposed that sleep problems may contribute to the development or maintenance of ADHD 
              symptoms in certain individuals.<sup>6</sup>
            </p>
          </div>
          
          <h4 className="text-[#0c264d] font-semibold text-sm mb-2">Evidence-Based Sleep Strategies</h4>
          <ul className="space-y-2 text-slate-700 text-xs">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0c264d] mt-1 shrink-0"></div>
              <span><strong>Consistent sleep schedule:</strong> Going to bed and waking up at the same time every day, even on weekends, helps regulate the body's circadian rhythm</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0c264d] mt-1 shrink-0"></div>
              <span><strong>Bedtime routine & Screen limits:</strong> A predictable 30-60 minute wind-down routine signals the body to prepare for sleep. Avoid screens 1-2 hours before bed, as blue light suppresses melatonin production</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0c264d] mt-1 shrink-0"></div>
              <span><strong>Sleep environment & Stimulants:</strong> Keep the bedroom cool (65-68°F), dark, and quiet. Monitor caffeine intake and medication timing, as stimulant medications can interfere with sleep onset</span>
            </li>
          </ul>
        </div>

        {/* NUTRITION CARD */}
        <div className="bg-white p-6 rounded-xl border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold text-xl flex items-center gap-3 mb-4">
            <Heart className="text-[#0c264d] w-6 h-6" />
            Nutrition and Diet
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed mb-6">
            The relationship between diet and ADHD symptoms is complex and an area of ongoing research. While no single 
            dietary intervention has been shown to be universally effective for ADHD, certain nutritional considerations may 
            be helpful for some individuals.
          </p>
          
          <div className="space-y-4 text-slate-700 text-sm">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="text-[#0c264d] font-semibold mb-1">Omega-3 Fatty Acids</h4>
              <p className="text-xs">
                Some research suggests that omega-3 fatty acid supplementation (particularly EPA and DHA) may produce modest 
                improvements in ADHD symptoms, especially inattention.<sup>7</sup> While the effect sizes are generally small compared 
                to medication, omega-3s are well-tolerated and may provide complementary benefits.
              </p>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="text-[#0c264d] font-semibold mb-1">Artificial Food Colorings and Additives</h4>
              <p className="text-xs">
                Research on artificial food colorings and preservatives shows mixed results. Some meta-analyses find small 
                but statistically significant effects of eliminating artificial additives on hyperactivity in children.<sup>8</sup> While 
                not all children with ADHD are sensitive to these substances, a small subset may benefit from dietary restriction.
              </p>
            </div>
            
            <div>
              <h4 className="text-[#0c264d] font-semibold mb-2">General Nutritional Recommendations</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0c264d]"></div> Balanced, regular meals</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0c264d]"></div> Adequate protein intake (breakfast)</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0c264d]"></div> Limiting refined sugar/processed foods</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0c264d]"></div> Adequate daily hydration</div>
              </div>
            </div>
          </div>
        </div>

        {/* MINDFULNESS CARD */}
        <div className="bg-white p-6 rounded-xl border-l-4 border-[#0c264d] shadow-sm mb-8">
          <h3 className="text-[#0c264d] font-bold text-xl flex items-center gap-3 mb-4">
            <BrainCircuit className="text-[#0c264d] w-6 h-6" />
            Mindfulness and Meditation
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            Mindfulness-based interventions show promise for individuals with ADHD, with research demonstrating improvements 
            in attention, executive functioning, and emotional regulation.<sup>9</sup> Mindfulness meditation training helps 
            individuals develop meta-awareness of their internal experiences and build skills for redirecting attention. 
            While mindfulness practice can be challenging for individuals with ADHD, adapted programs with shorter sessions 
            and more structure have shown positive results.
          </p>
        </div>
      </div>

      {/* Lifestyle Tab References */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>

        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Faraone, S. V., et al. (2015). Attention-deficit/hyperactivity disorder. <i>Nature Reviews Disease Primers</i>.</p>
            <p>2. Cerrillo-Urbina, A. J., et al. (2015). The effects of physical exercise in children with attention deficit hyperactivity disorder: A systematic review and meta-analysis of randomized control trials. <i>Child: Care, Health and Development</i>.</p>
            <p>3. Cortese, S., et al. (2009). Sleep in children with attention-deficit/hyperactivity disorder: Meta-analysis of subjective and objective studies. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>.</p>
            <p>4. Sobanski, E., et al. (2008). Sleep in adults with attention deficit hyperactivity disorder (ADHD) before and during treatment with methylphenidate: A controlled polysomnographic study. <i>Sleep</i>.</p>
            <p>5. Fallone, G., et al. (2005). Experimental restriction of sleep opportunity in children: Effects on teacher ratings. <i>Sleep</i>.</p>
            <p>6. Chervin, R. D., et al. (1997). Symptoms of sleep disorders, inattention, and hyperactivity in children. <i>Sleep</i>.</p>
            <p>7. Bloch, M. H., & Qawasmi, A. (2011). Omega-3 fatty acid supplementation for the treatment of children with attention-deficit/hyperactivity disorder symptomatology: Systematic review and meta-analysis. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>.</p>
            <p>8. Nigg, J. T., et al. (2012). Meta-analysis of attention-deficit/hyperactivity disorder or attention-deficit/hyperactivity disorder symptoms, restriction diet, and synthetic food color additives. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>.</p>
            <p>9. Cairncross, M., & Miller, C. J. (2016). The effectiveness of mindfulness-based therapies for ADHD: A meta-analytic review. <i>Journal of Attention Disorders</i>.</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Cajochen, C., et al. (2011). Evening exposure to a light-emitting diodes (LED)-backlit computer screen affects circadian physiology and cognitive performance. <i>Journal of Applied Physiology</i>.</li>
            <li>Chang, Y. K., et al. (2012). Effect of acute exercise on executive function in children with attention deficit hyperactivity disorder. <i>Archives of Clinical Neuropsychology</i>.</li>
            <li>Corkum, P., et al. (1998). Sleep disturbances in children with attention-deficit/hyperactivity disorder. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>.</li>
            <li>Fedewa, A. L., & Ahn, S. (2011). The effects of physical activity and physical fitness on children's achievement and cognitive outcomes: A meta-analysis. <i>Research Quarterly for Exercise and Sport</i>.</li>
            <li>Gapin, J. I., et al. (2011). The effects of physical activity on attention deficit hyperactivity disorder symptoms: The evidence. <i>Preventive Medicine</i>.</li>
            <li>Gruber, R., et al. (2011). Impact of sleep extension and restriction on children's emotional lability and impulsivity. <i>Pediatrics</i>.</li>
            <li>Hillman, C. H., et al. (2008). Be smart, exercise your heart: Exercise effects on brain and cognition. <i>Nature Reviews Neuroscience</i>.</li>
            <li>Mahar, M. T., et al. (2006). Effects of a classroom-based program on physical activity and on-task behavior. <i>Medicine & Science in Sports & Exercise</i>.</li>
            <li>Medina, J. A., et al. (2010). Exercise impact on sustained attention of ADHD children, methylphenidate effects. <i>ADHD Attention Deficit and Hyperactivity Disorders</i>.</li>
            <li>Neeper, S. A., et al. (1995). Exercise and brain neurotrophins. <i>Nature</i>.</li>
            <li>Ratey, J. J., & Loehr, J. E. (2011). The positive impact of physical activity on cognition during adulthood: A review of underlying mechanisms, evidence and recommendations. <i>Reviews in the Neurosciences</i>.</li>
            <li>van de Weijer-Bergsma, E., et al. (2012). The effectiveness of mindfulness training on behavioral problems and attentional functioning in adolescents with ADHD. <i>Journal of Child and Family Studies</i>.</li>
            <li>Wigal, S. B., et al. (2013). Exercise: Applications to childhood ADHD. <i>Journal of Attention Disorders</i>.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

function SelfManagementContent() {
  return (
    <>
      {/* TAB 6: YELLOW THEME SELF-MANAGEMENT */}
      <div>
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Self-Management Strategies and Tools</h2>
        
        <ImageWithFallback 
          src="/images/adhd/adhd-tools-organizing-at-work.webp"
          alt="Self-management tools and apps for ADHD"
          className="w-64 max-w-full h-auto rounded-lg border-2 border-[#ffd166] shadow-sm block mx-auto mb-8"
        />

        <p className="text-slate-700 leading-relaxed mb-6">
          Individuals with ADHD benefit from developing personalized systems and tools to compensate for executive function 
          challenges. Effective self-management involves creating external supports to reduce cognitive load and 
          build consistent routines.
        </p>
        
        <div className="bg-[#fff9e6] border-l-4 border-[#ffd166] p-5 rounded-r-xl mb-8">
          <p className="text-sm text-slate-800">
            <strong>Key Insight:</strong> The goal isn't to work harder, but to work smarter by building systems that compensate 
            for ADHD-related executive function challenges.
          </p>
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="my-10">
        <h3 className="text-[#0c264d] font-bold mb-6 text-xl text-center">Finding Motivation with ADHD</h3>
        <div className="max-w-sm mx-auto">
          <div className="relative w-full overflow-hidden rounded-xl shadow-sm border border-[#ffd166]" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/OM0Xv0eVGtY"
              title="Video about finding motivation for those with ADHD"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Time Management Section */}
      <div className="mb-10">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center border-t border-gray-200 pt-8">Time Management Strategies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl border-t-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">Visual Timers and Alarms</div>
            <div className="text-sm text-slate-600">External cues help compensate for difficulty with time perception</div>
          </div>
          <div className="bg-white p-5 rounded-xl border-t-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">Time Blocking</div>
            <div className="text-sm text-slate-600">Scheduling specific activities in dedicated time slots</div>
          </div>
          <div className="bg-white p-5 rounded-xl border-t-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">The Pomodoro Technique</div>
            <div className="text-sm text-slate-600">Working in focused 25-minute intervals with short breaks</div>
          </div>
          <div className="bg-white p-5 rounded-xl border-t-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">Transition Warnings</div>
            <div className="text-sm text-slate-600">Setting alerts 5-10 minutes before activities change</div>
          </div>
        </div>

        <div className="max-w-sm mx-auto my-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-center">Time Management for ADHD</h3>
          <div className="relative w-full overflow-hidden rounded-xl shadow-sm border border-[#ffd166]" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/YLkOZhROvA4"
              title="Time Management Strategies for ADHD"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Organization Systems Section */}
      <div className="mb-10">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center border-t border-gray-200 pt-8">Organization Systems</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl border-l-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">Everything in Its Place</div>
            <div className="text-sm text-slate-600">Consistent homes for commonly used items (keys, wallet, phone)</div>
          </div>
          <div className="bg-white p-5 rounded-xl border-l-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">Physical Filing Systems</div>
            <div className="text-sm text-slate-600">Color-coding, labeled bins, and visual organization</div>
          </div>
          <div className="bg-white p-5 rounded-xl border-l-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">Digital Organization</div>
            <div className="text-sm text-slate-600">Cloud storage, naming conventions, and folder structures</div>
          </div>
          <div className="bg-white p-5 rounded-xl border-l-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">Minimal Clutter</div>
            <div className="text-sm text-slate-600">Reducing visual distractions and decision fatigue</div>
          </div>
        </div>
      </div>

      {/* Task Management Section */}
      <div className="mb-10">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center border-t border-gray-200 pt-8">Task Management</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl border-l-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">To-Do Lists</div>
            <div className="text-sm text-slate-600">External memory aids to track commitments and responsibilities</div>
          </div>
          <div className="bg-white p-5 rounded-xl border-l-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">Breaking Down Projects</div>
            <div className="text-sm text-slate-600">Dividing large tasks into smaller, manageable steps</div>
          </div>
          <div className="bg-white p-5 rounded-xl border-l-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">Prioritization Methods</div>
            <div className="text-sm text-slate-600">Using systems like Eisenhower Matrix (urgent/important)</div>
          </div>
          <div className="bg-white p-5 rounded-xl border-l-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">Accountability Partners</div>
            <div className="text-sm text-slate-600">Body doubling or check-ins with others for motivation</div>
          </div>
        </div>
      </div>

      {/* Technology and Apps Section */}
      <div className="mb-10">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center border-t border-gray-200 pt-8">Technology and Apps</h2>
        
        <p className="text-slate-700 leading-relaxed mb-6">
          Digital tools can provide structure and reminders for individuals with ADHD:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#ffd166] flex items-center justify-center mb-3">
              <CheckSquare className="w-5 h-5 text-[#0c264d]" />
            </div>
            <div className="font-bold text-[#0c264d] text-sm mb-1">Task Apps</div>
            <div className="text-xs text-slate-600">Todoist, Things, TickTick for tracking responsibilities</div>
          </div>
          
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#ffd166] flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-[#0c264d]" />
            </div>
            <div className="font-bold text-[#0c264d] text-sm mb-1">Calendar Apps</div>
            <div className="text-xs text-slate-600">Google Calendar, Fantastical with multiple reminders</div>
          </div>
          
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#ffd166] flex items-center justify-center mb-3">
              <Settings className="w-5 h-5 text-[#0c264d]" />
            </div>
            <div className="font-bold text-[#0c264d] text-sm mb-1">Focus Apps</div>
            <div className="text-xs text-slate-600">Forest, Freedom, Cold Turkey to block distractions</div>
          </div>
        </div>
      </div>

      {/* Environmental Modifications Section */}
      <div className="mb-10">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center border-t border-gray-200 pt-8">Environmental Modifications</h2>
        
        <p className="text-slate-700 leading-relaxed mb-6">
          Optimizing the physical environment can significantly reduce distractions and support focus:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl border-l-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">Noise Management</div>
            <div className="text-sm text-slate-600">Noise-canceling headphones or white noise for auditory distractions</div>
          </div>
          <div className="bg-white p-5 rounded-xl border-l-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">Visual Clarity</div>
            <div className="text-sm text-slate-600">Removing visual clutter from work surfaces</div>
          </div>
          <div className="bg-white p-5 rounded-xl border-l-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">Movement Options</div>
            <div className="text-sm text-slate-600">Fidget tools or standing desk options for physical movement needs</div>
          </div>
          <div className="bg-white p-5 rounded-xl border-l-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">Dedicated Workspace</div>
            <div className="text-sm text-slate-600">Separate workspace from leisure areas</div>
          </div>
        </div>
      </div>

      {/* Emotional Regulation Section */}
      <div className="mb-10">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center border-t border-gray-200 pt-8">Emotional Regulation Strategies</h2>
        
        <p className="text-slate-700 leading-relaxed mb-6">
          Managing emotional dysregulation is often a key challenge for individuals with ADHD:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl border-l-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">Awareness Building</div>
            <div className="text-sm text-slate-600">Developing awareness of emotional triggers and patterns</div>
          </div>
          <div className="bg-white p-5 rounded-xl border-l-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">Response Pause</div>
            <div className="text-sm text-slate-600">Building a pause between stimulus and response</div>
          </div>
          <div className="bg-white p-5 rounded-xl border-l-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">Relaxation Techniques</div>
            <div className="text-sm text-slate-600">Deep breathing, progressive muscle relaxation</div>
          </div>
          <div className="bg-white p-5 rounded-xl border-l-4 border-[#ffd166] shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1">Challenging Negative Thoughts</div>
            <div className="text-sm text-slate-600">Identifying and challenging negative self-talk</div>
          </div>
        </div>
        
        <div className="bg-[#fff9e6] border-l-4 border-[#ffd166] p-5 rounded-r-xl">
          <p className="text-sm text-slate-800">
            <strong>Remember:</strong> Self-management strategies work best when tailored to your unique needs and consistently 
            practiced. Be patient with yourself as you develop new habits and systems.
          </p>
        </div>
      </div>

      {/* Self-Management Tab References */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>

        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Barkley, R. A., et al. (1997). Sense of time in children with ADHD: Effects of duration, distraction, and stimulant medication. <i>Journal of the International Neuropsychological Society</i>.</li>
            <li>Brown, T. E. (2013). <i>A New Understanding of ADHD in Children and Adults: Executive Function Impairments</i>. Routledge.</li>
            <li>Dawson, P., & Guare, R. (2009). <i>Smart but Scattered: The Revolutionary "Executive Skills" Approach to Helping Kids Reach Their Potential</i>. Guilford Press.</li>
            <li>Lally, P., et al. (2010). How are habits formed: Modelling habit formation in the real world. <i>European Journal of Social Psychology</i>.</li>
            <li>Powell, L., et al. (2018). ADHD: Is there an app for that? A suitability assessment of apps for the parents of children and young people with ADHD. <i>JMIR mHealth and uHealth</i>.</li>
            <li>Sarver, D. E., et al. (2015). Hyperactivity in attention-deficit/hyperactivity disorder (ADHD): Impairing deficit or compensatory behavior? <i>Journal of Abnormal Child Psychology</i>.</li>
            <li>Shaw, P., et al. (2014). Emotion dysregulation in attention deficit hyperactivity disorder. <i>American Journal of Psychiatry</i>.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

// ---------------------------------------------------------
// MAIN EXPORT COMPONENT
// ---------------------------------------------------------

export function ADHDSupport({ setCurrentArticle, initialTab }: ADHDSupportProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'overview';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  useEffect(() => {
    if (initialTab) {
      handleTabChange(initialTab);
    }
  }, [initialTab]);

  const tabs = [
    { id: 'overview', label: 'Overview & Approach' },
    { id: 'medical', label: 'Medical Treatments' },
    { id: 'behavioral', label: 'Behavioral & Therapeutic' },
    { id: 'educational', label: 'Educational & Workplace' },
    { id: 'lifestyle', label: 'Lifestyle Modifications' },
    { id: 'self-management', label: 'Self-Management & Tools' }
  ];

  return (
    <article className="max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          ADHD: Support & Management
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
        >
          <span className="text-lg">←</span>
          All About ADHD
        </button>
      </div>

      <button 
        onClick={() => setCurrentArticle?.('adhd')}
        className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About ADHD
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-4 py-3 rounded-lg text-sm transition-colors font-normal shadow-sm ${
              activeTab === tab.id
                ? 'bg-[#0A9DC4] text-white shadow-md'
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-8 min-h-[400px]">
        {activeTab === 'overview' && <OverviewContent />}
        {activeTab === 'medical' && <MedicalContent />}
        {activeTab === 'behavioral' && <BehavioralContent />}
        {activeTab === 'educational' && <EducationalContent />}
        {activeTab === 'lifestyle' && <LifestyleContent />}
        {activeTab === 'self-management' && <SelfManagementContent />}
      </div>

      <div className="flex justify-end my-8 clear-both border-t border-gray-200 pt-8">
        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          All About ADHD
        </button>
      </div>
    </article>
  );
}