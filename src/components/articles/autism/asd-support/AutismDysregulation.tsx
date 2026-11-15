import React from 'react';
import { ShieldAlert, Map, AlertTriangle, Activity, Sparkles } from 'lucide-react';
import { SectionActions } from '../../../SectionActions';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface AutismDysregulationProps {
  setCurrentArticle?: (article: string) => void;
}

export function AutismDysregulation({ setCurrentArticle }: AutismDysregulationProps) {
  
  return (
    <div id="full-dysregulation-article" className="space-y-6 text-[#0c264d] font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* ===== HEADER ROW ===== */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Dysregulation & Reactive Aggression
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
        >
          <span className="text-lg">&larr;</span>
          All About Autism
        </button>
      </div>


      {/* ===== INTRODUCTION CARDS SECTION ===== */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 mb-8 space-y-6">
        
        {/* Card 1: Physiological Attunement (Image on Left, w-64) */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm flow-root">
          <div className="float-left mr-6 mb-2 bg-white p-2 rounded-lg shadow-sm border border-gray-200 w-64 shrink-0">
            <ImageWithFallback 
              src="/images/autism/autism-support-TTtab-speech-dysreg-intro.webp"
              alt="Physiological attunement and co-regulation"
              className="w-full h-auto rounded-md block"
            />
          </div>
          <h3 className="font-bold text-[#0c264d] mb-2 text-sm uppercase tracking-wider">Physiological Attunement</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Navigating dysregulation is a profoundly shared experience between the autistic individual and their support team, rooted deeply in mutual nervous system physiology. When an individual's nervous system is pushed to its limits—frequently driven by relentless sensory overload or an absence of accessible communication tools—it generates acute distress for the person, while simultaneously triggering a parallel layer of vicarious stress for the caregiver. Because human nervous systems are biologically wired to attune to one another, an escalating crisis can rapidly transform into a shared state of high alert if not met with grounded presence.
          </p>
        </div>

        {/* Card 2: Co-Regulated Partnership (Image on Left, w-64) */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm flow-root">
          <div className="float-left mr-6 mb-2 bg-white p-2 rounded-lg shadow-sm border border-gray-200 w-64 shrink-0">
            <ImageWithFallback 
              src="/images/autism/autism-support-TTtab-speech-dysreg-partnership.webp"
              alt="Co-regulated partnership"
              className="w-full h-auto rounded-md block"
            />
          </div>
          <h3 className="font-bold text-[#0c264d] mb-2 text-sm uppercase tracking-wider">Co-Regulated Partnership</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            True, neurodiversity-affirming support moves fundamentally away from outdated paradigms focused on compliance and behavioral control. Instead, it anchors itself in building a genuine, co-regulated partnership. In this model, the individual’s urgent plea for physical and emotional safety is met not with demands for behavioral suppression, but with steady, non-judgmental stability. Simultaneously, the caregiver’s need for sustainable, compassionate, and trauma-informed strategies is equally prioritized—recognizing that meaningful caregiving cannot occur in chronic exhaustion.
          </p>
        </div>

      </div>

      {/* ===== THE SPIKY PROFILE: STRENGTHS & VULNERABILITIES ===== */}
      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#ffd166] mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center gap-2">
          <Sparkles className="text-[#ffd166]" size={24} /> 
          The Spiky Cognitive Profile: Understanding Asynchronous Development
        </h2>
        <p className="mb-4">
          To support a dysregulated individual effectively, we must first presume competence. Many autistic individuals possess a "spiky" cognitive profile, where extraordinary strengths—such as deep focus, remarkable memory, or immense empathy—exist alongside significant vulnerabilities in sensory processing and internal regulation<sup className="text-[#10b981] font-bold ml-0.5">5</sup>.
        </p>
        <p>
          When staff understand that this individual is not "acting out," but rather navigating a brain that processes information with different intensity, the training shifts from "control" to "attunement." By respecting and leveraging their unique strengths, we create a sense of safety that is the most effective tool for preventing escalation. When the individual feels understood, the need for reactive aggression diminishes significantly.
        </p>
      </div>

   {/* ===== HIDDEN PAIN: MEDICAL & TRAUMA TRIGGERS ===== */}
      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#ff6b6b] mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center gap-2">
          <Activity className="text-[#ff6b6b]" size={24} /> 
          Hidden Pain: Medical Comorbidities & Trauma
        </h2>
        
        <p className="mb-4 text-sm text-gray-700 leading-relaxed">
          When evaluating dysregulation, it is critical to look beyond the surface behavior and audit for hidden pain, unmet physical needs, or underlying trauma. Because many autistic individuals experience differences in interoception—the ability to recognize internal bodily signals—or face significant communication barriers, what appears to be an aggressive outburst is frequently an urgent, desperate communication of acute physical distress.
        </p>
        
        <p className="mb-4 text-sm text-gray-700 leading-relaxed">
          Research indicates that medical comorbidities are highly prevalent in the autistic community; for instance, gastrointestinal (GI) disorders affect between 46% and 84% of autistic children<sup className="text-[#10b981] font-bold ml-0.5">6</sup>, while migraine prevalence in autistic adults is estimated at over 42%, more than double the rate of the general population<sup className="text-[#10b981] font-bold ml-0.5">7</sup>.
        </p>
        
        <p className="mb-6 text-sm text-gray-700 leading-relaxed">
          When an individual cannot verbally articulate that they are experiencing debilitating acid reflux, severe constipation, a blinding headache, a blood-sugar crash from hunger, or a nervous system flashback triggered by past trauma, their biological fight-or-flight system naturally takes over. Reframing reactive behavior as a distress signal for hidden physical pain allows support teams to shift away from behavioral management and toward compassionate medical and emotional attunement.
        </p>

        {/* INTERACTIVE ACCORDION FOR COMPLEX BEHAVIORS (SCATOLIA) */}
       {/* INTERACTIVE ACCORDION FOR COMPLEX BEHAVIORS (SCATOLIA) */}
        <details className="group bg-[#fff5f5] border border-[#ff6b6b]/30 rounded-lg overflow-hidden cursor-pointer shadow-sm">
          <summary className="font-bold text-[#0c264d] p-4 bg-white hover:bg-slate-50 transition-colors flex justify-between items-center list-none">
            <span className="flex items-center gap-2">
              <ShieldAlert className="text-[#ff6b6b]" size={18} />
              Case Example: Understanding & Managing Fecal Smearing (Scatolia)
            </span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
            </span>
          </summary>
          
          <div className="p-5 text-sm text-gray-700 space-y-6 border-t border-[#ff6b6b]/20 cursor-default">
            
            {/* Part 1: The "Why" */}
            <p className="leading-relaxed">
              In autism, fecal smearing is rarely driven by defiance or malice. It is usually rooted directly in medical discomfort, sensory processing differences, communication barriers, or learned behavioral patterns. Understanding the underlying function is key to addressing it effectively.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-[#0c264d] mb-2 border-b border-[#ff6b6b]/20 pb-1">1. Medical & Physical Discomfort</h4>
                <ul className="space-y-2 list-none">
                  <li><strong className="text-[#0c264d]">Constipation & GI Pain:</strong> Chronic constipation or anal fissures can lead a person to dig into their clothing to relieve pressure or remove painful stool.</li>
                  <li><strong className="text-[#0c264d]">Overflow Soiling (Encopresis):</strong> When severely constipated, liquid stool can leak unexpectedly. Surprised by the mess, the individual may reach down to inspect or wipe it off on a nearby surface.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#0c264d] mb-2 border-b border-[#ff6b6b]/20 pb-1">2. Sensory Processing Differences</h4>
                <ul className="space-y-2 list-none">
                  <li><strong className="text-[#0c264d]">Sensory Seeking:</strong> The warm texture, strong odor, and wide arm movements of spreading can feel stimulating or regulating during unstructured times.</li>
                  <li><strong className="text-[#0c264d]">Sensory Avoidance:</strong> Finding a soiled diaper unbearable, they may try to scoop the stool out immediately to escape the sensation.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#0c264d] mb-2 border-b border-[#ff6b6b]/20 pb-1">3. Skill Gaps & Social Understanding</h4>
                <ul className="space-y-2 list-none">
                  <li><strong className="text-[#0c264d]">Unclear Expectations:</strong> Without explicit instruction, someone wearing diapers long-term may not understand that stool belongs exclusively in the toilet.</li>
                  <li><strong className="text-[#0c264d]">Wiping Mechanics:</strong> Someone learning to wipe independently may accidentally get stool on their hands and wipe it on a wall simply because they do not know the next step.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#0c264d] mb-2 border-b border-[#ff6b6b]/20 pb-1">4. Communication & Emotional Regulation</h4>
                <ul className="space-y-2 list-none">
                  <li><strong className="text-[#0c264d]">Distress Outlet:</strong> For those who struggle to communicate when overwhelmed, smearing can serve as a physical outlet for a loss of control.</li>
                  <li><strong className="text-[#0c264d]">Predictable Reactions:</strong> Caregivers naturally react with shock or a rush to clean up. Even negative attention (or getting a warm bath afterward) can unintentionally reinforce the behavior if the person is seeking interaction.</li>
                </ul>
              </div>
            </div>

            {/* Part 2: The "How-To" Action Steps */}
            <div className="mt-8 pt-6 border-t-2 border-[#ff6b6b]/20">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Management & Prevention Steps</h3>
              <p className="mb-5 text-sm leading-relaxed">
                Based on guidance and resources from the <strong>National Autistic Society (UK)</strong>, addressing scatolia requires a combination of medical checks and targeted practical changes. Because the behavior serves a specific function for the individual, the goal is to safely replace that function.
              </p>
              
              <div className="space-y-4">
                
                {/* Step 1 */}
                <div className="bg-white p-4 rounded-md shadow-sm border-l-4 border-[#ff6b6b]">
                  <h4 className="font-bold text-[#0c264d] mb-2 text-sm uppercase tracking-wider">1. Rule Out Medical Triggers First</h4>
                  <ul className="space-y-2 text-gray-700 list-none">
                    <li><span className="text-[#ff6b6b] mr-2">•</span><strong>Consult a Doctor:</strong> Have a physician check for chronic constipation, impacted stool, overflow diarrhea (encopresis), anal fissures, or pinworms. Treating gut pain often stops the behavior entirely.</li>
                    <li><span className="text-[#ff6b6b] mr-2">•</span><strong>Check for Skin Irritation:</strong> Inspect for diaper rash, yeast infections, or dryness. Switch to gentle, fragrance-free wipes or barrier creams to reduce itching.</li>
                  </ul>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-4 rounded-md shadow-sm border-l-4 border-[#2abcd4]">
                  <h4 className="font-bold text-[#0c264d] mb-2 text-sm uppercase tracking-wider">2. Provide Safe Sensory Substitutes</h4>
                  <ul className="space-y-2 text-gray-700 list-none">
                    <li><span className="text-[#2abcd4] mr-2">•</span><strong>Messy Tactile Alternatives:</strong> If they seek squishy textures, schedule daily supervised play with finger paints, playdough, kinetic sand, shaving cream, slime, or mashed potatoes.</li>
                    <li><span className="text-[#2abcd4] mr-2">•</span><strong>Address Smell Seeking:</strong> Offer safe olfactory input such as scented playdough, aromatherapy rollers, or scratch-and-sniff stickers.</li>
                    <li><span className="text-[#2abcd4] mr-2">•</span><strong>Upgrade Wiping Comfort:</strong> If rough toilet paper triggers sensory avoidance, try moist flushable wipes (disposed of in a bin) or a bidet attachment.</li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-4 rounded-md shadow-sm border-l-4 border-[#ffd166]">
                  <h4 className="font-bold text-[#0c264d] mb-2 text-sm uppercase tracking-wider">3. Modify Clothing and Environment</h4>
                  <ul className="space-y-2 text-gray-700 list-none">
                    <li><span className="text-[#d97706] mr-2">•</span><strong>Adaptive Clothing:</strong> During high-risk times (naps or overnight), use backwards zip-up pajamas or specialized anti-strip rompers to block easy access while building new habits.</li>
                    <li><span className="text-[#d97706] mr-2">•</span><strong>Simplify the Bathroom:</strong> Keep surfaces bare and place a small, clear visual checklist on the wall showing the exact steps for wiping, flushing, and washing hands.</li>
                    <li><span className="text-[#d97706] mr-2">•</span><strong>Predictable Schedules:</strong> Prompt regular toilet visits—especially 15 to 20 minutes after meals—to catch bowel movements before they happen in a diaper.</li>
                  </ul>
                </div>

                {/* Step 4 */}
                <div className="bg-white p-4 rounded-md shadow-sm border-l-4 border-[#0c264d]">
                  <h4 className="font-bold text-[#0c264d] mb-2 text-sm uppercase tracking-wider">4. Keep Reactions Calm and Consistent</h4>
                  <ul className="space-y-2 text-gray-700 list-none">
                    <li><span className="text-[#0c264d] mr-2">•</span><strong>Maintain a Neutral Demeanor:</strong> Avoid scolding, gasping, or intense frustration. Strong emotional reactions can heighten anxiety or unintentionally reward attention-seeking behavior.</li>
                    <li><span className="text-[#0c264d] mr-2">•</span><strong>Avoid Rewarding Cleanup:</strong> Clean the person and space calmly with minimal conversation. Use a brief, lukewarm shower instead of a long, fun bath right after an incident.</li>
                    <li><span className="text-[#0c264d] mr-2">•</span><strong>Track Patterns (ABC Log):</strong> Log the Antecedent (what happened right before), Behavior, and Consequence to spot specific triggers like time of day or certain foods.</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </details>
      </div>
      
      {/* ===== REFRAMING DYSREGULATION & AGGRESSION ===== */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center gap-2">
          <ShieldAlert className="text-[#0A9DC4]" size={24} /> 
          Reframing the Stress Response
        </h2>
        <p className="mb-4">
          Dysregulation escalating into aggression is often a profound stress response to unmet communication needs<sup className="text-[#10b981] font-bold ml-0.5">1</sup>. Individuals with communication barriers frequently resort to reactive aggression because they lack the necessary tools or accommodations to verbally articulate frustration, sensory overload, or physical pain.
        </p>
        <p>
          Systemic reviews confirm that individuals experiencing emotion dysregulation are significantly more likely to engage in physical aggression, especially when feeling trapped, misunderstood, or unable to self-soothe<sup className="text-[#10b981] font-bold ml-0.5">2</sup>. By providing robust, alternative communication methods, aggressive behavior naturally decreases as autonomy increases.
        </p>
      </div>

  {/* ===== BRIDGING THE GENERALIZATION GAP ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          Bridging the Generalization Gap Across Environments
        </h2>

        <p className="mb-6 text-sm text-gray-700 leading-relaxed">
          A major finding in developmental disability research is that learned communication skills do not naturally transfer across different settings<sup className="text-[#10b981] font-bold ml-0.5">3</sup>. A young adult might successfully use an electronic communication tablet at day support, but resort to physical aggression at home or in a grocery store if the environments or staff prompts are inconsistent.
        </p>

        {/* 3-Column Grid for perfect uniformity */}
        <div className="grid md:grid-cols-3 gap-4 mb-2">
          
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20 shadow-sm flex flex-col">
            <h4 className="font-bold text-[#0c264d] mb-3 border-b border-[#0A9DC4]/20 pb-2 text-sm uppercase tracking-wider">
              School & Day Support
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><strong className="text-[#0c264d]">Mitigate the Audience Effect:</strong> Having a crowd of peers watching an individual escalate increases shame and defensive aggression. Remove the audience by moving the other participants out of the room rather than forcing the dysregulated individual to move.</li>
              <li><strong className="text-[#0c264d]">Proactive Intermittent Access:</strong> Schedule proactive "sensory resets" in a low-stimulus area to keep their nervous system baseline stable before dysregulation occurs.</li>
            </ul>
          </div>
          
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20 shadow-sm flex flex-col">
            <h4 className="font-bold text-[#0c264d] mb-3 border-b border-[#0A9DC4]/20 pb-2 text-sm uppercase tracking-wider">
              Community Outings
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><strong className="text-[#0c264d]">Portable Micro-Schedules:</strong> Outings fail when the timeline becomes ambiguous. Staff should carry a highly visual, 3-step portable schedule to anchor the individual.</li>
              <li><strong className="text-[#0c264d]">Environmental Reconnaissance:</strong> Map out "escape hatches" (quiet aisles, park benches, service vehicles) before arriving where co-regulation can happen privately.</li>
            </ul>
          </div>

          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20 shadow-sm flex flex-col">
            <h4 className="font-bold text-[#0c264d] mb-3 border-b border-[#0A9DC4]/20 pb-2 text-sm uppercase tracking-wider">
              Home Environments
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><strong className="text-[#0c264d]">Communication Continuity:</strong> Ensure the exact same visual icons, phrase structures, and AAC setups used at day support are physically present and utilized at home<sup className="text-[#10b981] font-bold ml-0.5">3</sup>.</li>
              <li><strong className="text-[#0c264d]">Physical De-escalation Zones:</strong> Establish a designated, permanent "safe space" at home that is purely associated with comfort, never punishment.</li>
            </ul>
          </div>

        </div>
      </div>

      {/* ===== ADVANCED SAFETY PROTOCOLS ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-red-500 shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <AlertTriangle className="text-red-500" size={24} /> 
          Advanced Safety & Crisis Protocols for Staff
        </h2>

        <p className="mb-6">
          When working one-on-one across fluid environments, staff safety requires tactical, non-physical positioning. Avoiding raised voices and keeping sentences short prevents the escalation of the fight-or-flight response<sup className="text-[#10b981] font-bold ml-0.5">4</sup>.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-red-50 p-4 rounded border border-red-100 shadow-sm">
            <div className="font-bold text-[#0c264d] text-sm mb-2 pb-1 border-b border-red-200 uppercase tracking-wider">The L-Position</div>
            <p>
              Stand at a 90-degree angle relative to the individual's hip, rather than square-front. This eliminates a direct line of sight for strikes and removes the confrontational "standoff" posture.
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded border border-red-100 shadow-sm">
            <div className="font-bold text-[#0c264d] text-sm mb-2 pb-1 border-b border-red-200 uppercase tracking-wider">Environmental Triangulation</div>
            <p>
              In any room or public venue, always position yourself so the individual is never between you and the exit. This prevents staff from being backed into corners during a sudden escalation.
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded border border-red-100 shadow-sm">
            <div className="font-bold text-[#0c264d] text-sm mb-2 pb-1 border-b border-red-200 uppercase tracking-wider">Visual Loading Reduction</div>
            <p>
              Lower your hands below your chest, keep palms open, and avoid direct, prolonged eye contact during high agitation. Raised hands or intense staring are biologically interpreted as aggressive challenges<sup className="text-[#10b981] font-bold ml-0.5">4</sup>.
            </p>
          </div>
        </div>

        <div className="bg-[#fff9e6] p-5 rounded-lg border border-[#ffd166]/50">
          <h4 className="font-bold text-[#0c264d] mb-3 flex items-center gap-2 uppercase tracking-wider">
            <Activity className="text-[#d97706]" size={20} />
            Staff Trauma & The Symptom-Interaction Cycle
          </h4>
          <p className="mb-3">
            Working one-on-one with aggressive behavior causes cumulative nervous system trauma for staff. When a worker experiences chronic stress or hypervigilance, their micro-expressions change. They may display rigid posture, a sharper tone, or defensive pacing.
          </p>
          <p>
            The dysregulated individual immediately detects these subtle threat signals, which heightens their own panic and increases the likelihood of an aggressive outburst. Breaking this cycle requires a heavy emphasis on post-crisis staff debriefing and operational safety nets, rather than relying solely on individual worker stamina.
          </p>
        </div>
      </div>

      {/* Back Button Bottom */}
      <div className="flex justify-end mt-8 mb-6">
        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2"
        >
          <span className="text-lg">&larr;</span>
          All About Autism
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />

      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#10b981] mb-3 border-b-2 border-[#10b981] pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Purba, C. A. P., et al. (2024). "Managing Aggressive Behavior in Adolescents With Autism Spectrum Disorder: Pharmacological and Non-Pharmacological Approaches." <i>Journal of the Korean Academy of Child and Adolescent Psychiatry</i>. https://doi.org/10.5765/jkacap.240026</p>
            <p>2. Smith, K., et al. (2026). "Emotion Regulation and Aggression: A Systematic Review and Meta-Analysis." <i>Aggressive Behavior</i>. https://doi.org/10.1002/ab.70055</p>
            <p>3. Fahmie, T. A., et al. (2020). "Topographies and functions of emerging problem behavior and appropriate requests in neurotypical preschoolers." <i>Journal of Applied Behavior Analysis</i>. https://doi.org/10.1002/jaba.741</p>
            <p>4. Ibrahim, K., et al. (2019). "Reduced Amygdala–Prefrontal Functional Connectivity in Children With Autism Spectrum Disorder and Co-occurring Disruptive Behavior." <i>Biological Psychiatry: Cognitive Neuroscience and Neuroimaging</i>. https://doi.org/10.1016/j.bpsc.2019.01.009</p>
            <p>5. Hughes, J. E. A., et al. (2018). "Savant syndrome has a distinct psychological profile in autism." <i>Molecular Autism</i>. https://doi.org/10.1186/s13229-018-0237-1</p>
            <p>6. McElhanon, B. O., et al. (2014). "Gastrointestinal Symptoms in Autism Spectrum Disorder: A Meta-analysis." <i>Pediatrics</i>. https://doi.org/10.1542/peds.2013-3995</p>
            <p>7. Croen, L. A., et al. (2015). "The health status of adults on the autism spectrum." <i>Autism</i>. https://doi.org/10.1177/1362361315577517</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b-2 border-[#2abcd4] pb-1">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>Crisis Prevention Institute (CPI). (n.d.). "De-escalation & Crisis Prevention Training for Health Care." https://www.crisisprevention.com/industries/health-care/</p>
            <p>Kimberly's Educational Resources. (n.d.). "Alternative Communication Options: Evaluating AAC, Independence, and Expression." https://www.kimberlyedu.org/alternative-communication-options</p>
          </div>
        </div>
      </div>

    </div>
  );
}