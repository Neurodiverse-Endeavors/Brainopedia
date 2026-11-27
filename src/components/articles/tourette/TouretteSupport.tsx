import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import {
  BrainCircuit,
  Sparkles,
  HeartHandshake,
  Pill,
  ShieldCheck,
  AlertTriangle,
  School,
  Briefcase,
  Users,
  Award
} from 'lucide-react';

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
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Tourette's: Support & Management
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('tourette')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
        >
          <span className="text-xl">←</span>
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
          TAB 1: THERAPY & MEDICATION (CYAN)
      ========================================== */}
      {activeTab === 'therapy' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-3xl mx-auto mb-8">
            Many individuals with mild tics do not require medical intervention at all. When support is desired, management plans are highly collaborative and individualized—focusing on easing physical discomfort, supporting daily goals, and honoring personal autonomy.
          </p>

          {/* Primary Card (Tab 1 Default: Cyan with Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Clinical Management</h2>

            <ImageWithFallback 
              src="/images/tourette/tourette-support-main.webp"
              alt="Medical professional discussing individualized support plans"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            {/* Accessible Maroon Medical Disclaimer */}
            <div className="bg-[#fdf2f8] border-l-4 border-[#be185d] p-5 rounded-r-xl shadow-sm mb-8 max-w-3xl mx-auto">
              <h3 className="font-bold text-[#831843] mb-2 uppercase text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 text-[#be185d]" /> Medical Disclaimer
              </h3>
              <p className="text-sm text-[#831843] leading-relaxed">
                All prescription medications and clinical therapies should be explored under the direct guidance of a qualified healthcare professional. This overview provides educational context and does not replace personalized medical advice.
              </p>
            </div>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Clinical guidelines recommend starting with behavioral approaches when tics cause pain, distress, or daily interference, pairing them with targeted medications when additional relief is needed.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <BrainCircuit className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">CBIT (First-Line Therapy)</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Comprehensive Behavioral Intervention for Tics teaches individuals to recognize premonitory urges early and use gentle, voluntary "competing responses" until the urge subsides—demonstrating strong efficacy in both youth and adults.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1–3</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Sparkles className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">ERP for Tics</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Exposure and Response Prevention helps individuals build tolerance to uncomfortable premonitory sensory urges without immediately discharging the tic, gradually loosening the urge-relief cycle.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <HeartHandshake className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Co-occurring Support</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Holistic care often prioritizes co-occurring ADHD, OCD, or anxiety first, as supporting executive functioning and emotional regulation frequently lowers overall tic intensity as well.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
                <Pill className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Pharmacological Options</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  When tics cause physical pain or significant disruption, clinicians often begin with alpha-2 adrenergic agonists (such as clonidine or guanfacine, especially helpful alongside ADHD), or consider VMAT2 inhibitors and dopamine modulators.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1, 5</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center md:col-span-2 lg:col-span-2">
                <ShieldCheck className="w-7 h-7 text-[#0A9DC4] mb-3" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Collaborative Dosing & Monitoring</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Because tic-suppressing medications can carry side effects such as drowsiness or metabolic shifts, specialists start at low doses and adjust gradually—keeping the individual's energy, comfort, and daily quality of life at the center of every decision.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup>
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full">
            <button 
              onClick={() => setCurrentArticle?.('tourette')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
            >
              <span className="text-xl">←</span>
              All About Tourette's
            </button>
          </div>

          {/* ===== TAB 1 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Pringsheim, T., et al. (2019). Practice guideline recommendations summary: Treatment of tics in people with Tourette syndrome and chronic tic disorders. <i>Neurology</i>.</p>
                <p>2. Piacentini, J., et al. (2010). Behavior therapy for children with Tourette disorder: A randomized controlled trial. <i>JAMA</i>.</p>
                <p>3. Wilhelm, S., et al. (2012). Randomized trial of behavior therapy for adults with Tourette syndrome. <i>Archives of General Psychiatry</i>.</p>
                <p>4. Verdellen, C., et al. (2011). European clinical guidelines for Tourette syndrome and other tic disorders. Part III: Behavioural and psychosocial interventions. <i>European Child & Adolescent Psychiatry</i>.</p>
                <p>5. Roessner, V., et al. (2022). European clinical guidelines for Tourette syndrome and other tic disorders—version 2.0. Part II: Pharmacological treatment. <i>European Child & Adolescent Psychiatry</i>.</p>
              </div>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Andrén, P., et al. (2022). European clinical guidelines for Tourette syndrome and other tic disorders—version 2.0. Part I: Assessment and psychosocial interventions. <i>European Child & Adolescent Psychiatry</i>.</li>
                <li>Martino, D., & Leckman, J. F. (2013). <i>Tourette Syndrome</i>. Oxford University Press.</li>
                <li>Woods, D. W., et al. (2008). <i>Managing Tourette Syndrome: A Behavioral Intervention for Children and Adults</i>. Oxford University Press.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: NEUROMODULATION (NAVY)
      ========================================== */}
      {activeTab === 'neurotech' && (
        <div className="space-y-8 animate-fadeIn">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-slate-700 leading-relaxed text-sm mb-4">
              Neuromodulation helps manage specific neurodivergent traits—such as tics, executive dysfunction, and sensory overload—by using targeted electrical or magnetic signals to balance overactive or underactive brain networks.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1–3</sup>
            </p>
            <p className="text-slate-700 leading-relaxed text-sm font-bold">
              Rather than "curing" neurodivergence, these therapies act as bottom-up or top-down regulators that quiet disruptive neurological noise and strengthen motor and cognitive comfort.
            </p>
          </div>

          {/* Primary Card (Tab 2 Default: Navy with 3D Left-Stripe Inner Cards, No Icons/Bullets) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Science of Neuromodulation</h2>

            <ImageWithFallback 
              src="/images/tourette/tourette-support-neurotech.webp"
              alt="Neuromodulation concepts and brain networks"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            {/* MAROON DISCLAIMER / EVIDENCE CAVEAT */}
            <div className="bg-[#fdf2f8] border-l-4 border-[#be185d] p-5 rounded-r-xl shadow-sm mb-8 max-w-4xl mx-auto">
              <h3 className="font-bold text-[#831843] mb-2 uppercase text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 text-[#be185d]" /> Regulatory & Evidence Disclaimer
              </h3>
              <p className="text-xs text-[#831843] leading-relaxed mb-2">
                Many non-invasive neuromodulation wearables are currently undergoing clinical trials and have not yet received broad regulatory clearance for routine Tourette's treatment.
              </p>
              <p className="text-xs text-[#831843] leading-relaxed">
                <strong>Evidence Caveat:</strong> Results vary significantly by nerve target. For instance, a large multicenter randomized trial on external Trigeminal Nerve Stimulation (TNS)—a forehead patch previously cleared in the U.S. for pediatric ADHD—found that while safe, it performed no better than sham stimulation in reducing core ADHD symptoms.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup>
              </p>
            </div>

            {/* 3D ACCENT GRID (NO ICONS OR BULLETS INSIDE MINI CARDS) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Median Nerve Stimulation (Bottom-Up)
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-2">
                    Because the median nerve at the wrist sends direct sensory signals to the sensorimotor cortex, gentle wearable stimulation acts like a rhythmic pacemaker. Rhythmic 10-Hz pulses entrain sensorimotor brainwaves to reduce both premonitory urges and tic frequency.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1, 2, 5</sup>
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Early studies are also exploring wrist stimulation to prime fronto-striatal attention circuits in ADHD and quiet autonomic hyperarousal in OCD, while noting that spinal medial branch stimulation is unrelated and strictly treats back pain.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup>
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Cortical & Vagal Regulation (Top-Down)
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-2">
                    Beyond wrist wearables, non-invasive cortical methods such as rTMS and tDCS use targeted magnetic fields or mild scalp currents to help stabilize excitatory and inhibitory signaling—studied in both tic disorders and co-occurring autism profiles.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Non-invasive Vagus Nerve Stimulation (nVNS) engages the parasympathetic ("rest and digest") system to widen an individual's window of sensory tolerance and support restorative sleep.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Transcranial Magnetic Stimulation (TMS)
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    An outpatient, non-invasive procedure using focused magnetic pulses—often over the supplementary motor area (SMA)—to calm overactive motor readiness circuits and ease the urge to tic in clinical research settings.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-2">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                    Deep Brain Stimulation (DBS)
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Reserved strictly for severe, treatment-refractory Tourette's in adults when behavioral and pharmacological options have not provided relief. Implanted electrodes deliver steady pulses to deep brain targets (such as the thalamus or globus pallidus) under multidisciplinary oversight.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">7, 8</sup>
                  </p>
                </div>
              </div>
            </div>

            {/* NEURODIVERGENT EFFICACY TABLE */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b-2 border-[#0c264d]/20 pb-2">
                Targeted Modalities & Studied Mechanisms
              </h3>
              <div className="w-full overflow-x-auto pb-2">
                <table className="w-full min-w-[700px] table-fixed border-2 border-[#0c264d] rounded-lg text-sm bg-white shadow-sm">
                  <thead>
                    <tr className="bg-[#0c264d] text-white">
                      <th className="text-left border-r border-white/20 text-xs w-[20%] p-3">Neurodivergent Profile</th>
                      <th className="text-left border-r border-white/20 text-xs w-[25%] p-3">Neuromodulation Target</th>
                      <th className="text-left border-r border-white/20 text-xs w-[25%] p-3">Primary Mechanism</th>
                      <th className="text-left text-xs w-[30%] p-3">Key Benefits Studied</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-200">
                      <td className="p-3 border-r border-gray-200 font-bold text-[#0c264d]">Tourette's / Tics</td>
                      <td className="p-3 border-r border-gray-200 text-slate-700 text-xs">Median Nerve (Wrist), SMA (rTMS), or Thalamus/GPi (DBS)</td>
                      <td className="p-3 border-r border-gray-200 text-slate-700 text-xs">Entrains 10-Hz sensorimotor rhythms and regulates CSTC loops</td>
                      <td className="p-3 text-slate-700 text-xs">Reduces premonitory urges, tic frequency, and motor discomfort</td>
                    </tr>
                    <tr className="bg-slate-50 border-b border-gray-200">
                      <td className="p-3 border-r border-gray-200 font-bold text-[#0c264d]">Autism (∞)</td>
                      <td className="p-3 border-r border-gray-200 text-slate-700 text-xs">Prefrontal Cortex (rTMS / tDCS) & Vagus Nerve</td>
                      <td className="p-3 border-r border-gray-200 text-slate-700 text-xs">Stabilizes excitation/inhibition balance and parasympathetic tone</td>
                      <td className="p-3 text-slate-700 text-xs">Eases sensory overload, severe anxiety, and sleep disruption</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-3 border-r border-gray-200 font-bold text-[#0c264d]">ADHD</td>
                      <td className="p-3 border-r border-gray-200 text-slate-700 text-xs">Median Nerve (Wrist) & Prefrontal Cortex (tDCS)</td>
                      <td className="p-3 border-r border-gray-200 text-slate-700 text-xs">Primes fronto-striatal motor and attention circuits</td>
                      <td className="p-3 text-slate-700 text-xs">Supports sustained attention and response inhibition (experimental)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FOOTER BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full">
            <button 
              onClick={() => setCurrentArticle?.('tourette')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
            >
              <span className="text-xl">←</span>
              All About Tourette's
            </button>
          </div>

          {/* ===== TAB 2 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Morera Maiquez, B., et al. (2020). Entraining movement-related brain oscillations to suppress tics in Tourette syndrome. <i>Current Biology</i>.</p>
                <p>2. Morera Maiquez, B., et al. (2023). A double-blind, sham-controlled, trial of home-administered rhythmic 10-Hz median nerve stimulation for the reduction of tics, and suppression of the urge-to-tic, in individuals with Tourette syndrome and chronic tic disorder. <i>Journal of Neuropsychology</i>.</p>
                <p>3. Wu, X., et al. (2025). Efficacy and Safety of Neuromodulation Interventions for Autism Spectrum Disorders with Comorbidities: A Systematic Review. <i>Neuropsychiatric Disease and Treatment</i>.</p>
                <p>4. Conti, A. A., et al. (2026). External trigeminal nerve stimulation in youth with ADHD: A multicenter, sham-controlled randomized clinical trial. <i>Nature Medicine</i>.</p>
                <p>5. Iverson, A. M., et al. (2023). Median nerve stimulation for treatment of tics: A 4-week open trial with ecological momentary assessment. <i>Journal of Clinical Medicine</i>.</p>
                <p>6. Dai, Y., et al. (2025). Effects of a novel non-pharmacological intervention based on median nerve and transcranial stimulation on cognitive and motor inhibition. <i>Frontiers in Psychiatry</i>.</p>
                <p>7. Pringsheim, T., et al. (2019). Practice guideline recommendations summary: Treatment of tics in people with Tourette syndrome and chronic tic disorders. <i>Neurology</i>.</p>
                <p>8. Martinez-Ramirez, D., et al. (2018). Efficacy and safety of deep brain stimulation in Tourette syndrome: The International Tourette Syndrome Deep Brain Stimulation Public Database and Registry. <i>JAMA Neurology</i>.</p>
              </div>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Greene, D. J., et al. (2023). Peripheral nerve induction of inhibitory brain circuits to treat Tourette syndrome. <i>Brain Stimulation</i>.</li>
                <li>Johnson, K. A., et al. (2019). Tourette syndrome deep brain stimulation: A review and updated recommendations. <i>Movement Disorders</i>.</li>
                <li>Szejko, N., et al. (2022). European clinical guidelines for Tourette syndrome and other tic disorders—version 2.0. Part IV: Deep brain stimulation. <i>European Child & Adolescent Psychiatry</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: ENVIRONMENTAL SUPPORTS (YELLOW)
      ========================================== */}
      {activeTab === 'environment' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-3xl mx-auto mb-8">
            Meaningful support for Tourette's extends far beyond clinic walls. Creating informed, flexible, and stigma-free classrooms and workplaces eases the daily pressure to mask and lowers the environmental stress that intensifies tics.
          </p>

          {/* Primary Card (Tab 3 Default: Yellow with Double-Ring Navy Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Community & Accommodations</h2>

            <ImageWithFallback 
              src="/images/tourette/tourette-support-environment.webp"
              alt="Educator supporting a neurodivergent student"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Research shows that social evaluation and acute stress directly heighten tic expression—meaning thoughtful accommodations allow individuals to invest their cognitive energy in learning, creating, and working rather than suppressing tics.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <School className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">School Accommodations (504 & IEP)</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Students benefit from formal 504 Plans or IEPs (under the "Other Health Impairment" category) offering private testing spaces, untimed exams, assistive typing tools for handwriting tics, and non-punitive movement breaks, while educators practice planned ignoring of non-disruptive tics.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Workplace & Sensory Adjustments</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Under disability protections like the ADA, adults can utilize flexible remote or hybrid options, quiet focus zones, noise-reducing headphones, softer lighting, and camera-optional virtual meetings to reduce sensory fatigue.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Peer Education & Stigma Reduction</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Misunderstanding is often heavier than the tics themselves. Brief, age-appropriate peer education for classmates, teachers, and colleagues significantly improves attitudes, reduces bullying, and fosters genuinely welcoming spaces.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Self-Advocacy & Community</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Connecting with Tourette's peer groups, youth ambassador programs, and neurodiversity-affirming communities builds confidence, reduces isolation, and empowers individuals to communicate their needs on their own terms.
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full">
            <button 
              onClick={() => setCurrentArticle?.('tourette')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
            >
              <span className="text-xl">←</span>
              All About Tourette's
            </button>
          </div>

          {/* ===== TAB 3 REFERENCES SECTION ===== */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            {/* CITED STUDIES: GREEN */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Conelea, C. A., Woods, D. W., & Brandt, B. C. (2011). The impact of a stress induction task on tic frequencies in youth with Tourette syndrome. <i>Behaviour Research and Therapy</i>.</p>
                <p>2. Nussey, C., Pistrang, N., & Murphy, T. (2013). How does psychoeducation help? A review of the effects of providing information about Tourette syndrome and attention-deficit/hyperactivity disorder. <i>Child: Care, Health and Development</i>.</p>
              </div>
            </div>

            {/* BACKGROUND SOURCES: CYAN */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Centers for Disease Control and Prevention. (2024). <i>Tourette Syndrome: Information for Educators</i>. U.S. Department of Health and Human Services.</li>
                <li>Tourette Association of America. (2023). <i>Educator's Guide to Tourette Syndrome and Classroom Accommodations</i>. TAA.</li>
                <li>Verdellen, C., et al. (2011). European clinical guidelines for Tourette syndrome and other tic disorders. Part III: Behavioural and psychosocial interventions. <i>European Child & Adolescent Psychiatry</i>.</li>
                <li>Wadman, R., et al. (2016). Tourette syndrome in secondary school: Perceptions of young people, parents, and staff. <i>Journal of Research in Special Educational Needs</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}