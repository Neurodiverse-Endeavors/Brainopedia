import { ImageWithFallback } from '../../../figma/ImageWithFallback';
import { BrainCircuit, Activity, Zap, AlertTriangle, HeartPulse } from 'lucide-react';

interface AutismNeuromodulationProps {
  setCurrentArticle?: (article: string) => void;
}

export function AutismNeuromodulation({ setCurrentArticle }: AutismNeuromodulationProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Neuromodulation & Emerging Supports
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shrink-0"
        >
          <span className="text-xl">←</span>
          Back to Therapies
        </button>
      </div>

      <div className="text-center max-w-4xl mx-auto mb-8">
        <p className="text-slate-700 leading-relaxed text-sm md:text-base font-medium mb-4">
          Neuromodulation is an emerging field of medicine that uses targeted electrical or magnetic signals to balance overactive or underactive brain networks. For autistic individuals, the goal of these technologies is never to "cure" autism, but to provide profound relief from the chronic physiological distress that often accompanies it.
        </p>
      </div>

      {/* MAROON DISCLAIMER */}
      <div className="bg-[#fdf2f8] border-l-4 border-[#be185d] p-5 rounded-r-xl shadow-sm mb-10 max-w-4xl mx-auto">
        <h3 className="font-bold text-[#831843] mb-2 uppercase text-xs flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0" /> Investigational Status & Disclaimer
        </h3>
        <p className="text-sm text-[#831843] leading-relaxed">
          While transcranial magnetic stimulation (TMS) is FDA-approved for severe depression and OCD, its specific use for autism spectrum conditions remains largely investigational and "off-label." These technologies are actively undergoing clinical trials to establish standardized protocols for sensory and autonomic dysregulation. Always consult a neurologist regarding neurotechnology.
        </p>
      </div>

{/* THE NEURO-AFFIRMING TARGETS (HORIZONTAL 3D ACCENT CARDS) */}
      <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">What is the Science Targeting?</h2>
      
      <div className="space-y-6 mb-12 max-w-5xl mx-auto">
        
        {/* Box 1: Excitation/Inhibition (Navy) - Image Left */}
        <div className="bg-white p-6 pl-7 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col md:flex-row gap-6 items-center">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
          
          <div className="w-full md:w-72 shrink-0">
            <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
              <ImageWithFallback 
                src="/images/autism/autism-support-neuro-ei-balance.webp" 
                alt="Abstract brain network showing balanced excitation and inhibition"
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-[#0c264d] font-bold text-lg mb-3 border-b border-gray-100 pb-2 flex items-center gap-2">
              <BrainCircuit className="text-[#0c264d] w-6 h-6 shrink-0" /> The E/I Imbalance
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Neurological research suggests many autistic brains feature an <strong>Excitation/Inhibition (E/I) imbalance</strong>. This means the brain's "accelerator" neurotransmitters (like glutamate) are highly active, while the "brakes" (like GABA) are underactive. Neuromodulation aims to gently stimulate the inhibitory networks to restore a calming balance.
            </p>
          </div>
        </div>

        {/* Box 2: Autonomic Dysregulation (Cyan) - Image Right */}
        <div className="bg-white p-6 pl-7 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col md:flex-row-reverse gap-6 items-center">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2abcd4]"></div>
          
          <div className="w-full md:w-72 shrink-0">
            <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
              <ImageWithFallback 
                src="/images/autism/autism-support-neuro-autonomic.webp" 
                alt="Glowing vagus nerve pathway representing the autonomic nervous system"
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-[#0c264d] font-bold text-lg mb-3 border-b border-gray-100 pb-2 flex items-center gap-2">
              <HeartPulse className="text-[#2abcd4] w-6 h-6 shrink-0" /> Sympathetic Overdrive
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Living in a world not designed for neurodivergent sensory systems frequently traps the autonomic nervous system in chronic "fight-or-flight" (sympathetic overdrive). Devices targeting the vagus nerve in the neck or ear bypass the brain to manually activate the parasympathetic "rest and digest" response.
            </p>
          </div>
        </div>

        {/* Box 3: Sensorimotor Entrainment (Yellow) - Image Left */}
        <div className="bg-white p-6 pl-7 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col md:flex-row gap-6 items-center">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ffd166]"></div>
          
          <div className="w-full md:w-72 shrink-0">
            <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
              <ImageWithFallback 
                src="/images/autism/autism-support-neuro-median.webp" 
                alt="Wrist wearable sending rhythmic pulses up the median nerve"
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-[#0c264d] font-bold text-lg mb-3 border-b border-gray-100 pb-2 flex items-center gap-2">
              <Activity className="text-[#ffd166] w-6 h-6 shrink-0" /> Sensorimotor Entrainment
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              To address physical restlessness or sensory urgency, bottom-up approaches target the <strong>median nerve</strong> at the wrist. Wearable devices send a rhythmic 10-Hz electrical pulse up the arm to the brain's sensorimotor cortex, acting like a neurological pacemaker to quiet physical urgency and improve focus.
            </p>
          </div>
        </div>

      </div>
      {/* THE MODALITIES (YELLOW 3D GRID) */}
      <div className="bg-[#f0f9ff] border-2 border-[#2abcd4] rounded-xl p-8 shadow-sm">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Current Modalities in Research</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* rTMS */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200 relative overflow-hidden hover:-translate-y-1 transition-transform duration-200">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#ffd166]"></div>
            <div className="pt-2 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#fff9e6] flex items-center justify-center mb-4 border border-[#ffd166]/50">
                <Zap className="text-[#ffd166] w-6 h-6" />
              </div>
              <h3 className="text-[#0c264d] font-bold text-sm mb-2">rTMS</h3>
              <p className="text-xs text-slate-500 font-bold mb-3 uppercase tracking-wider">Repetitive Transcranial Magnetic Stimulation</p>
              <p className="text-xs text-slate-700 leading-relaxed">
                Uses powerful magnetic fields placed over the scalp to induce gentle electrical currents in the prefrontal cortex. Clinical trials involving autistic adults show significant promise in utilizing rTMS to reduce severe, treatment-resistant anxiety and stabilize executive functioning networks.
              </p>
            </div>
          </div>

          {/* tDCS */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200 relative overflow-hidden hover:-translate-y-1 transition-transform duration-200">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#ffd166]"></div>
            <div className="pt-2 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#fff9e6] flex items-center justify-center mb-4 border border-[#ffd166]/50">
                <BrainCircuit className="text-[#ffd166] w-6 h-6" />
              </div>
              <h3 className="text-[#0c264d] font-bold text-sm mb-2">tDCS</h3>
              <p className="text-xs text-slate-500 font-bold mb-3 uppercase tracking-wider">Transcranial Direct Current Stimulation</p>
              <p className="text-xs text-slate-700 leading-relaxed">
                A highly portable, non-invasive method that delivers a very low, constant electrical current through electrodes on the scalp. Research is currently evaluating its ability to modify the E/I imbalance and improve functional communication and social processing in autistic youth.
              </p>
            </div>
          </div>

          {/* nVNS */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200 relative overflow-hidden hover:-translate-y-1 transition-transform duration-200">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#ffd166]"></div>
            <div className="pt-2 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#fff9e6] flex items-center justify-center mb-4 border border-[#ffd166]/50">
                <Activity className="text-[#ffd166] w-6 h-6" />
              </div>
              <h3 className="text-[#0c264d] font-bold text-sm mb-2">nVNS</h3>
              <p className="text-xs text-slate-500 font-bold mb-3 uppercase tracking-wider">Non-Invasive Vagus Nerve Stimulation</p>
              <p className="text-xs text-slate-700 leading-relaxed">
                Utilizes a handheld device (often applied to the neck or tragus of the ear) to stimulate the vagus nerve. Because the vagus nerve directly controls the parasympathetic nervous system, this is heavily researched for rapidly reducing autonomic meltdowns and chronic physiological stress.
              </p>
            </div>
          </div>

        </div>
      </div>

{/* MEDIAN NERVE CLINICAL CALLOUT */}
      <div className="bg-[#f0fdf4] border-l-4 border-[#10b981] p-6 rounded-r-xl shadow-sm mb-12 max-w-5xl mx-auto flex flex-col md:flex-row gap-5 items-start">
        <div className="bg-[#10b981] text-white p-3 rounded-full shrink-0 mt-1 shadow-sm">
          <Activity className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-[#065f46] mb-2 text-lg">
            Clinical Insight: Validating the Autistic Sensory Experience
          </h3>
          <p className="text-sm text-[#065f46] leading-relaxed mb-4">
            While wearable median nerve devices are actively used as an intervention to treat tics in Tourette syndrome, their primary use in autism research serves a profoundly validating purpose: <strong>proving that autistic sensory issues are a biological reality, not a "behavior problem."</strong>
          </p>
          <ul className="space-y-3 text-sm text-[#065f46]">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#059669] mt-1.5 shrink-0"></div>
              <span className="leading-relaxed"><strong>Measuring Brain Plasticity:</strong> By pairing a mild pulse to the wrist with brain stimulation (a test called PAS), researchers have found that autistic brains demonstrate "hyper-plasticity." They react stronger and hold onto stimulation longer—explaining neurologically why environments can easily become chronically overwhelming.<sup>1</sup></span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#059669] mt-1.5 shrink-0"></div>
              <span className="leading-relaxed"><strong>Proving Sensory Differences:</strong> Clinical EEG trials tracking Somatosensory Evoked Potentials (SSEPs) from the median nerve show distinct processing differences in the autistic cortex. This provides hard neurological proof for the actual pain caused by light touch, as well as the physiological need for deep pressure.<sup>2</sup></span>
            </li>
          </ul>
        </div>
      </div>

      {/* FOOTER BUTTON */}
      <div className="flex justify-end mt-10 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('therapies')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          Back to Therapies
        </button>
      </div>

{/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p>1. Oberman, L. M., et al. (2016). Assessing and stabilizing aberrant neuroplasticity in autism spectrum disorder. <i>Frontiers in Psychiatry</i>.</p>
            <p>2. Miyazaki, M., et al. (2007). Short-latency somatosensory evoked potentials in infantile autism: evidence of hyperactivity in the right primary somatosensory area. <i>Developmental Medicine & Child Neurology</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Casanova, M. F., et al. (2020). Transcranial Magnetic Stimulation in Autism Spectrum Disorders: Neuropathological Underpinnings and Clinical Correlations. <i>Seminars in Pediatric Neurology</i>.</li>
            <li>Sokhadze, E. M., et al. (2014). Efficacy of neuromodulation interventions based on rTMS in autism spectrum disorder. <i>Neuropsychiatric Disease and Treatment</i>.</li>
            <li>Yates, J. R., et al. (2021). Transcranial Direct Current Stimulation (tDCS) in Autism Spectrum Disorder: A Systematic Review. <i>Journal of Autism and Developmental Disorders</i>.</li>
            <li>Jin, Y., & Kong, J. (2016). Transcutaneous Vagus Nerve Stimulation: A Promising Method for Treatment of Autism Spectrum Disorders. <i>Frontiers in Neuroscience</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}