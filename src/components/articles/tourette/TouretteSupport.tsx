import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { BrainCircuit, Pill, ShieldCheck, HeartHandshake, Users, School, AlertTriangle, Activity, Zap } from 'lucide-react';

interface TouretteSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TouretteSupport({ setCurrentArticle, initialTab }: TouretteSupportProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'therapy';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Tourette's: Support & Management
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('tourette')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Tourette's
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('therapy')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'therapy'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Therapy & Medication
        </button>
        <button
          onClick={() => handleTabChange('neurotech')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'neurotech'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Neuromodulation
        </button>
        <button
          onClick={() => handleTabChange('environment')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'environment'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Environmental Supports
        </button>
      </div>

      {/* ==========================================
          TAB 1: THERAPY & MEDICATION
      ========================================== */}
      {activeTab === 'therapy' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Many individuals with mild tics do not require medical intervention. When support is requested, management plans are highly individualized and focus on reducing the distress and physical discomfort associated with tics.
          </p>

          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <ImageWithFallback 
              src="/images/tourette/tourette-support-main.webp"
              alt="Medical professional discussing treatment plans"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center clear-both">Clinical Management</h2>

            <div className="bg-[#fdf2f8] border-l-4 border-[#be185d] p-5 rounded-r-xl shadow-sm mb-8 max-w-3xl mx-auto">
              <h3 className="font-bold text-[#831843] mb-2 uppercase text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" /> Medical Disclaimer
              </h3>
              <p className="text-sm text-[#831843]">
                All prescription medications must strictly be used under the direct guidance of a qualified medical professional. This information is for educational context and does not replace personalized clinical advice.
              </p>
            </div>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Treatment decisions are driven by how much the tics interfere with the individual's daily functioning and personal goals, utilizing a blend of behavioral and pharmacological approaches.<sup>1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">Behavioral Interventions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <BrainCircuit className="w-5 h-5 text-[#2abcd4] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>CBIT:</strong> Comprehensive Behavioral Intervention for Tics helps individuals recognize their premonitory urges and develop "competing responses" to safely manage the physical tension.<sup>2</sup></p>
                  </li>
                  <li className="flex items-start gap-3">
                    <HeartHandshake className="w-5 h-5 text-[#2abcd4] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Co-occurring Support:</strong> Therapies often simultaneously target OCD, ADHD, or anxiety, which frequently cause more functional impairment than the tics themselves.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">Pharmacological Options</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Pill className="w-5 h-5 text-[#2abcd4] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Medications:</strong> When behavioral approaches are insufficient, specific medications (such as alpha-2 agonists) may be prescribed to reduce tic severity.<sup>3</sup></p>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#2abcd4] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Careful Monitoring:</strong> Because medications carry potential side effects, dosing is highly tailored and continually monitored by a specialist.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: NEUROMODULATION
      ========================================== */}
      {activeTab === 'neurotech' && (
        <div className="space-y-8 animate-fadeIn">
          
          <div className="text-center max-w-4xl mx-auto mb-8">
            <p className="text-slate-700 leading-relaxed text-sm mb-4">
              Neuromodulation helps manage specific neurodivergent traits—such as tics, executive dysfunction, and sensory overload—by using targeted electrical or magnetic signals to balance overactive or underactive brain networks.<sup>6, 9, 11</sup>
            </p>
            <p className="text-slate-700 leading-relaxed text-sm font-bold">
              Rather than "curing" neurodivergence, these therapies act as bottom-up or top-down regulators that quiet disruptive neurological noise and strengthen motor and cognitive control.
            </p>
          </div>

          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <ImageWithFallback 
              src="/images/tourette/tourette-support-neurotech.webp"
              alt="Neuromodulation concepts and brain networks"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center clear-both">The Science of Neuromodulation</h2>

            {/* MAROON DISCLAIMER / EVIDENCE CAVEAT */}
            <div className="bg-[#fdf2f8] border-l-4 border-[#be185d] p-5 rounded-r-xl shadow-sm mb-8 max-w-4xl mx-auto">
              <h3 className="font-bold text-[#831843] mb-2 uppercase text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" /> Regulatory & Evidence Disclaimer
              </h3>
              <ul className="space-y-3 text-sm text-[#831843] ml-6 list-disc">
                <li>Many non-invasive neuromodulation devices are currently undergoing clinical trials and have not yet received FDA clearance for the treatment of Tourette syndrome.</li>
                <li><strong>Evidence Caveat:</strong> While peripheral stimulation is promising, results vary heavily by the nerve target. For example, large clinical trials on external Trigeminal Nerve Stimulation (TNS)—a forehead patch cleared in the U.S. for pediatric ADHD—found that while it is safe, it performed no better than a placebo in reducing core ADHD symptoms.<sup>10</sup></li>
              </ul>
            </div>

            {/* 3D ACCENT GRID: BOTTOM-UP VS TOP-DOWN */}
            <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-5xl mx-auto">
              
              {/* Bottom-Up Approach (Cyan) */}
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2abcd4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1 flex items-center gap-2">
                    <Activity className="text-[#2abcd4] w-4 h-4" /> Median Nerve Stimulation (Bottom-Up)
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    Because the median nerve at the wrist sends dense, direct sensory signals up to the brainstem and sensorimotor cortex, stimulating it with a wearable device acts like a "pacemaker" for specific brain rhythms. <em>(Note: The spinal medial branch nerve is strictly for back pain and is not used for neurodivergence).</em><sup>8</sup>
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
                      <span className="text-xs text-slate-700"><strong>Tourette Syndrome:</strong> 10-Hz electrical pulses travel to the motor cortex, entraining neurons to fire at a steady, calming rhythm that suppresses the premonitory urge to tic.<sup>6, 7, 9</sup></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
                      <span className="text-xs text-slate-700"><strong>ADHD & Motor Inhibition:</strong> Early research suggests it primes sensorimotor networks (fronto-striatal pathways) to boost attention and inhibitory control.<sup>12</sup></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
                      <span className="text-xs text-slate-700"><strong>OCD & Anxiety:</strong> Actively being studied to quiet intrusive urges and autonomic hyperarousal.<sup>9</sup></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Top-Down Approach (Navy) */}
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1 flex items-center gap-2">
                    <BrainCircuit className="text-[#0c264d] w-4 h-4" /> Broader Neuromodulation (Top-Down)
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    Beyond the median nerve, other non-invasive methods target the brain or autonomic nervous system directly to support neurodivergent profiles across the lifespan.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                      <span className="text-xs text-slate-700"><strong>Autism (Balancing Networks):</strong> Many autistic brains experience an imbalance between excitatory and inhibitory neurotransmitters. Techniques like rTMS and tDCS use magnetic fields or mild scalp currents to gently stabilize this balance, easing sensory overload and severe anxiety.<sup>11</sup></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                      <span className="text-xs text-slate-700"><strong>Calming Fight-or-Flight:</strong> Non-invasive Vagus Nerve Stimulation (nVNS) and peripheral microcurrent therapies stimulate the parasympathetic ("rest and digest") system to widen an individual's window of tolerance and improve sleep.<sup>11</sup></span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* NEURODIVERGENT EFFICACY TABLE */}
            <div className="max-w-5xl mx-auto mb-8">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b-2 border-[#ffd166] pb-2">Targeted Modalities & Benefits</h3>
              <div className="w-full overflow-x-auto pb-4">
                <table className="w-full min-w-[700px] table-fixed border-2 border-[#0c264d] rounded-lg text-sm bg-white shadow-sm">
                  <thead>
                    <tr className="bg-[#0c264d] text-white">
                      <th className="text-left border-r border-white/20 text-xs w-[20%] p-3">Neurodivergent Condition</th>
                      <th className="text-left border-r border-white/20 text-xs w-[25%] p-3">Neuromodulation Target</th>
                      <th className="text-left border-r border-white/20 text-xs w-[25%] p-3">Primary Mechanism</th>
                      <th className="text-left text-xs w-[30%] p-3">Key Benefits Studied</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-3 border-r border-gray-200 font-bold text-[#0c264d]">Tourette Syndrome / Tics</td>
                      <td className="p-3 border-r border-gray-200 text-slate-700 text-xs">Median Nerve (Wrist)</td>
                      <td className="p-3 border-r border-gray-200 text-slate-700 text-xs">Entrains sensorimotor brainwaves to a steady 10-Hz rhythm</td>
                      <td className="p-3 text-slate-700 text-xs">Reduces premonitory urges, tic frequency, and tic severity</td>
                    </tr>
                    <tr className="bg-slate-50 border-b border-gray-200">
                      <td className="p-3 border-r border-gray-200 font-bold text-[#0c264d]">Autism (ASD)</td>
                      <td className="p-3 border-r border-gray-200 text-slate-700 text-xs">Prefrontal Cortex (rTMS / tDCS) & Vagus Nerve</td>
                      <td className="p-3 border-r border-gray-200 text-slate-700 text-xs">Stabilizes excitation/inhibition balance and boosts parasympathetic tone</td>
                      <td className="p-3 text-slate-700 text-xs">Eases sensory overload, anxiety, repetitive behaviors, and sleep issues</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 border-r border-gray-200 font-bold text-[#0c264d]">ADHD</td>
                      <td className="p-3 border-r border-gray-200 text-slate-700 text-xs">Median Nerve (Wrist) & Prefrontal Cortex (tDCS)</td>
                      <td className="p-3 border-r border-gray-200 text-slate-700 text-xs">Primes fronto-striatal motor and attention circuits</td>
                      <td className="p-3 text-slate-700 text-xs">Supports sustained attention and impulse inhibition (still experimental)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* SURGICAL & NON-INVASIVE CLINICAL OPTIONS */}
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              {/* DBS */}
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-200">
                <div className="w-12 h-12 rounded-full bg-[#fff9e6] flex items-center justify-center shrink-0 border border-[#ffd166]/50">
                  <Zap className="text-[#ffd166] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Deep Brain Stimulation (DBS)</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    While external wearables are rapidly advancing, DBS remains an established surgical intervention reserved for severe, highly treatment-resistant Tourette syndrome. It involves implanting electrodes directly into specific deep brain regions (like the thalamus) to regulate abnormal neurological impulses.
                  </p>
                </div>
              </div>

              {/* TMS */}
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-200">
                <div className="w-12 h-12 rounded-full bg-[#fff9e6] flex items-center justify-center shrink-0 border border-[#ffd166]/50">
                  <BrainCircuit className="text-[#ffd166] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Transcranial Magnetic Stimulation (TMS)</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    A non-invasive, outpatient procedure using magnetic fields to stimulate targeted nerve cells in the brain. Highly researched in clinical trials as a top-down method for suppressing the urge to tic and stabilizing excitation/inhibition networks in neurodivergent profiles.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: ENVIRONMENTAL SUPPORTS
      ========================================== */}
      {activeTab === 'environment' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            True management of Tourette's extends beyond the individual. Creating an educated, flexible, and supportive environment drastically reduces the stress that often exacerbates tic frequency.
          </p>

          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <ImageWithFallback 
              src="/images/tourette/tourette-support-environment.webp"
              alt="Educator supporting a neurodivergent student"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-200"
            />
            
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center clear-both">Community & Accommodations</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Accommodations focus on removing barriers to success, ensuring that individuals can focus their energy on learning and working rather than suppressing their neurotype.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-[#f0f9ff] p-3 rounded-full border border-[#2abcd4] border-opacity-30 mb-3">
                  <School className="text-[#0c264d] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">School & Workplace</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Essential accommodations include allowing the individual to leave the room for a "tic break" to safely release tension, providing extended testing time, and ignoring minor, non-disruptive tics entirely.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-[#fffbeb] p-3 rounded-full border border-[#ffd166] border-opacity-50 mb-3">
                  <Users className="text-[#ffd166] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Peer Education</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Stigma is one of the heaviest burdens of Tourette's. Educating classmates, teachers, and coworkers directly reduces bullying and transforms hostile environments into inclusive communities.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('tourette')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Tourette's
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
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p>1. Pringsheim, T., et al. (2019). Practice guideline recommendations summary: Treatment of tics in people with Tourette syndrome and chronic tic disorders. <i>Neurology</i>.</p>
            <p>2. Piacentini, J., et al. (2010). Behavior therapy for children with Tourette disorder: A randomized controlled trial. <i>JAMA</i>.</p>
            <p>3. Roessner, V., et al. (2011). European clinical guidelines for Tourette syndrome and other tic disorders. Part II: Pharmacological treatment. <i>European Child & Adolescent Psychiatry</i>.</p>
            <p>4. Morera Maiquez, B., et al. (2020). Entraining movement-related brain oscillations to suppress tics in Tourette syndrome. <i>Current Biology</i>.</p>
            <p>5. Jackson, S. R., et al. (2023). A double-blind, sham-controlled, trial of home-administered rhythmic median nerve stimulation for the reduction of tics, and suppression of the urge-to-tic, in individuals with Tourette syndrome. <i>MedRxiv</i>.</p>
            <p>6. Morera Maiquez, B., et al. (2023). A double-blind, sham-controlled, trial of home-administered rhythmic 10-Hz median nerve stimulation for the reduction of tics, and suppression of the urge-to-tic, in individuals with Tourette syndrome and chronic tic disorder. <i>Journal of Neuropsychology</i>, 17(3), 540-563. (PMID: 37133932).</p>
            <p>7. Iverson, A. M., et al. (2023). Median Nerve Stimulation for Treatment of Tics: A 4-Week Open Trial with Ecological Momentary Assessment. <i>Journal of Clinical Medicine</i>. (PMC10095435).</p>
            <p>8. Washington University in St. Louis. Can median nerve stimulation reduce tics? (https://tics.wustl.edu)</p>
            <p>9. ClinicalTrials.gov (NCT05269953). Median Nerve Stimulation for Tourette Syndrome and Chronic Tic Disorder (NeSTS). Nottingham University Hospitals NHS Trust.</p>
            <p>10. University of Southampton (2026). Brain stimulation device cleared for ADHD in the US is overall safe but ineffective.</p>
            <p>11. Wu, X., et al. (2025). Efficacy and Safety of Neuromodulation Interventions for Autism Spectrum Disorders with Comorbidities: A Systematic Review. <i>Neuropsychiatric Disease and Treatment</i>. (PMC12684251).</p>
            <p>12. PMC11842315 (2025). Effects of a novel non-pharmacological intervention based on [Median Nerve/tDCS]... (PMID: 39989722).</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Conelea, C. A., et al. (2011). The impact of a stress induction task on tic frequencies in youth with Tourette syndrome. <i>Behaviour Research and Therapy</i>.</li>
            <li>Greene, D. J., et al. (2023). Peripheral nerve induction of inhibitory brain circuits to treat Tourette. <i>Brain Stimulation</i>.</li>
            <li>Rizzo, R., et al. (2017). Gilles de la Tourette syndrome, depression, depressive illness, and correlates in a child and adolescent population. <i>Journal of Child and Adolescent Psychopharmacology</i>.</li>
            <li>Verdellen, C., et al. (2011). European clinical guidelines for Tourette syndrome and other tic disorders. Part III: Behavioural and psychosocial interventions. <i>European Child & Adolescent Psychiatry</i>.</li>
            <li>Wilhelm, S., et al. (2012). Randomized trial of behavior therapy for adults with Tourette syndrome. <i>Archives of General Psychiatry</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}