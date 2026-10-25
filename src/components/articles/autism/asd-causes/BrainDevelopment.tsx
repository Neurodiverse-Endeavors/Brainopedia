import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

interface BrainDevelopmentProps {
  setCurrentArticle?: (article: string) => void;
}

export function BrainDevelopment({ setCurrentArticle }: BrainDevelopmentProps) {
  return (
   <article className="space-y-6 max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Brain Development</h2>
        
        <ImageWithFallback 
          src="/images/autism/autism-causes-Braintab-development.webp" 
          alt="Brain connectivity and neural networks in autism"
          className="w-48 h-auto float-left mr-6 mb-4 rounded-xl shadow-md border border-gray-300"
        />
        
        <p className="mb-4 leading-relaxed text-[#0c264d]">
          Genetic and environmental factors ultimately shape brain development, leading to the neurological differences characteristic of autism. It is crucial to understand that the autistic brain is not a "broken" or "damaged" neurotypical brain. Instead, longitudinal neuroimaging studies demonstrate that it develops along a completely different, naturally occurring trajectory beginning prenatally and accelerating across the first two years of life—operating on a distinct neurological blueprint.<sup>1, 2</sup>
        </p>
        
        <p className="mb-4 leading-relaxed text-[#0c264d]">
          While this neurology represents a valid human variation, the challenges that accompany it are profoundly real. Particularly for those with higher support needs, severe sensory differences or communication barriers are not just social inconveniences—they reflect fundamental differences in how neural circuits filter and integrate stimuli, which can cause intense physiological and psychological distress.<sup>3</sup>
        </p>

        <p className="mb-8 leading-relaxed text-[#0c264d]">
          Therefore, understanding autistic brain development isn't about finding a way to "fix a broken machine." It is about learning how to soothe a nervous system that is often overwhelmed, bridging communication gaps, and providing the exact environmental supports needed to alleviate distress and improve quality of life.
        </p>
        
        <div className="clear-both"></div>
      </div>

      <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-8 shadow-sm mb-8">
        <h3 className="font-bold text-[#0c264d] mb-3 text-xl text-center">Structural Differences</h3>
        
        <ImageWithFallback 
          src="/images/autism/autism-causes-Braintab-brain-structure.webp" 
          alt="Brain connectivity and neural networks in autism"
          className="w-full h-auto block mx-auto mb-6 rounded-xl p-5shadow-md border border-gray-900"
        />

        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-700 leading-relaxed text-center mb-6">
            Specific physical differences in brain architecture are consistently observed in neuroimaging studies of autistic individuals, particularly during early developmental windows.<sup>1, 2</sup>
          </p>
          <div className="bg-white p-6 rounded-xl shadow-sm border p-5 border-[#0c264d]/70">
            <ul className="list-disc ml-5 space-y-3 text-sm text-gray-700 leading-relaxed">
              <li><strong>Brain overgrowth:</strong> MRI studies show that many autistic children experience hyper-expansion of the cortical surface area between 6 and 12 months of age, leading to accelerated total brain volume overgrowth in early childhood—particularly in the frontal and temporal lobes—before growth rates plateau later in childhood.<sup>1, 2</sup></li>
              <li><strong>Altered structural connectivity:</strong> Differences in how regional neural networks physically wire together, often favoring dense local connections within specific lobes over long-distance structural highways across the brain.<sup>4</sup></li>
              <li><strong>Regional differences:</strong> Variations in the growth trajectories and cellular density of specific subcortical and posterior structures, including the <strong>amygdala</strong> (which regulates emotional and threat responses), the <strong>cerebellum</strong> (which coordinates motor timing, cognitive prediction, and social processing), and the <strong>corpus callosum</strong> (the thick band of nerve fibers bridging the left and right hemispheres).<sup>1, 5</sup></li>
              <li><strong>White matter differences:</strong> Diffusion tensor imaging (DTI) reveals atypical development of <strong>myelin</strong> (the protective lipid sheath that insulates nerve fibers) and white matter fiber tracts as early as 6 months of age, altering the speed and synchronization of electrical signals traveling between brain regions.<sup>5</sup></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-8 shadow-sm mb-8">
        <h3 className="font-bold text-[#0c264d] mb-3 text-xl text-center">Functional Differences</h3>
        
        <ImageWithFallback 
          src="/images/autism/autism-causes-Braintab-fxn-structure.webp" 
          alt="Brain connectivity and neural networks in autism"
          className="w-full h-auto block mx-auto mb-6 rounded-xl shadow-md border border-gray-900"
        />

        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-700 leading-relaxed text-center mb-6">
            Functional differences in the autistic brain involve how different physical regions actively synchronize and work together to process real-time information.<sup>4</sup>
          </p>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#0c264d]/70">
            <ul className="list-disc ml-5 space-y-3 text-sm text-gray-700 leading-relaxed">
              <li><strong>Neural connectivity patterns:</strong> Functional MRI (fMRI) studies frequently demonstrate reduced long-range functional synchronization between distant network hubs (such as frontal and parietal regions), paired with heightened local connectivity within specialized sensory and perceptual regions—helping explain why many autistic individuals excel at detail-focused processing while finding rapid, multi-system integration taxing.<sup>4</sup></li>
              <li><strong>Social brain networks:</strong> Differences in the recruitment and synchronization of neural circuits involved in social cognition—such as the fusiform face area, superior temporal sulcus, and mirror neuron networks—making automatic decoding of facial micro-expressions and vocal prosody much more energy-intensive.<sup>4, 6</sup></li>
              <li><strong>Sensory processing:</strong> Atypical neural responses in primary sensory cortices, characterized by heightened cortical reactivity and slower habituation (neural adaptation) to repeating sights, sounds, and textures.<sup>3</sup></li>
              <li><strong>Default mode network (DMN):</strong> Altered functional coupling within the DMN—the interconnected brain system active during physical rest, daydreaming, autobiographical memory, and self-referential thinking—affecting how internal states and social perspectives are integrated.<sup>6</sup></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="clear-both"></div>
      <h1 className="font-bold mb-8 text-xl text-center font-spartan text-[#0c264d]">CELLULAR and MOLECULAR LEVEL</h1>
       
      <div className="flex flex-col gap-8 mb-8">
        <div className="w-full flex flex-col items-center gap-5 bg-[#ffd166]/20 p-6 rounded-xl border border-[#ffd166]/70 shadow-sm">
          <div className="w-full mx-auto">
            <h4 className="font-bold text-[#0c264d] mb-3 text-xl text-center">Synapses</h4>
            <p className="text-sm text-[#0c264d] leading-relaxed bg-white/90 p-5 rounded-lg border border-[#0c264d]/70">
              Synapses are the microscopic junctions where neurons communicate via chemical signals. During typical childhood development, the brain undergoes a massive wave of <strong>synaptic pruning</strong>—eliminating roughly half of its extra cortical synapses by late adolescence to streamline neural circuits. Neuropathological studies show that in many autistic brains, overactive mTOR signaling impairs cellular autophagy (the cell's cleanup machinery), substantially slowing this pruning process.<sup>7, 8</sup> This results in an overabundance of dendritic spines and synaptic connections, as well as variations in synaptic structure and receptor function, increasing background neural "noise" and intensifying sensory and cognitive processing.<sup>7, 8</sup>
            </p>
          </div> 
          <ImageWithFallback 
            src="/images/autism/autism-causes-Braintab-synapse.webp" 
            alt="Synaptic connections"
            className="w-full rounded-lg shadow-sm object-contain bg-white"
          />
        </div>

        <div className="w-full flex flex-col items-center gap-5 bg-green-100 p-6 rounded-xl border border-green-500 shadow-sm">
          <div className="w-full mx-auto">
            <h4 className="font-bold text-[#0c264d] mb-3 text-xl text-center">Neuronal Migration</h4>
            <p className="text-sm text-[#0c264d] leading-relaxed bg-white/90 p-5 rounded-lg border border-[#0c264d]/70">
              Between 14 and 24 weeks of gestation, newly born neurons in the fetal ventricular zone must climb along radial glial fibers to reach their exact assigned layers within the six-layered cerebral cortex. Landmark postmortem studies indicate that in autism, this delicate migration and cortical lamination process is often disrupted during the second trimester, leaving behind focal patches of disorganized cortical architecture and "ectopic" (misplaced) clusters of neurons in the prefrontal and temporal cortices.<sup>1, 9</sup> This early architectural shift alters how major network hubs connect, reinforcing dense local, short-range circuitry over long-range integration.<sup>4, 9</sup>
            </p>
          </div>   
          <ImageWithFallback 
            src="/images/autism/autism-causes-Braintab-fetus-brain-firings.webp" 
            alt="Neuronal migration during fetal development"
            className="w-full rounded-lg shadow-sm object-contain bg-white"
          />
        </div>

        <div className="w-full flex flex-col items-center gap-5 bg-blue-100 p-6 rounded-xl border border-[#0a3d62]/70 shadow-sm">
          <ImageWithFallback 
            src="/images/autism/autism-cause-Braintab-EI.webp" 
            alt="E/I Balance neurotransmission"
            className="w-full rounded-lg shadow-sm object-contain bg-white"
          />
          <div className="w-full mx-auto">
            <h4 className="font-bold text-[#0c264d] mb-3 text-xl text-center">E/I Balance</h4>
            <div className="text-sm text-[#0c264d] leading-relaxed bg-white/90 p-5 rounded-lg border border-[#0c264d]/70">
              <p className="mb-3">Optimal cognition, mood regulation, and sensory filtering rely on a continuous, delicate equilibrium between excitatory neurotransmitters (which stimulate neurons to fire) and inhibitory neurotransmitters (which act as the brain's brakes to prevent overstimulation). One of the most established neurobiological models of autism proposes a shift in this Excitation/Inhibition (E/I) ratio across key cortical networks:<sup>3, 10</sup></p>
              <ul className="space-y-2 pl-2">
                <li><strong className="text-[#0c264d]">Too Much Excitation:</strong> Driven primarily by <strong>Glutamate</strong>, excess excitatory signaling—or a reduction in inhibitory GABAergic signaling—creates hyper-excitable neural circuits. This lowers the sensory threshold and can drive sensory overwhelm, racing thoughts, heightened anxiety, irritability, and sleep disturbances.<sup>3, 10</sup></li>
                <li><strong className="text-[#0c264d]">Too Much Inhibition:</strong> Driven by inhibitory neurotransmitters like <strong>GABA</strong> and <strong>Glycine</strong>, localized or compensatory excess inhibition can dampen neural drive, contributing to cognitive fatigue, brain fog, slowed processing speed, and low motivation.<sup>10</sup></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-5 bg-purple-50 p-6 rounded-xl border border-purple-300 shadow-sm">
          <ImageWithFallback 
            src="/images/autism/autism-causes-Braintab-mitochondrial.webp" 
            alt="Mitochondrial function and cellular energy"
            className="w-full rounded-lg shadow-sm object-contain bg-white"
          />
          <div className="w-full mx-auto">
            <h4 className="font-bold text-[#0c264d] mb-3 text-xl text-center">Mitochondrial Function</h4>
            <p className="text-sm text-[#0c264d] leading-relaxed bg-white/90 p-5 rounded-lg border border-[#0c264d]/70">
              Because the human brain consumes roughly 20% of the body's total energy, firing neurons depend heavily on mitochondria—the cellular powerhouses that generate adenosine triphosphate (ATP) and support carbohydrate, fat, and amino acid metabolism. Meta-analyses show that while classic mitochondrial disease occurs in about 5% of autistic individuals, up to 30% to 80% exhibit biomarkers of broader mitochondrial dysfunction (such as elevated lactate or pyruvate).<sup>11</sup> When mitochondrial bioenergetics are strained, it impairs <strong>redox balance</strong> (increasing oxidative stress and free-radical damage), disrupts intracellular <strong>calcium (Ca²⁺) signaling</strong>, and alters <strong>apoptosis regulation</strong> (programmed cell turnover)—directly impacting synaptic stamina and neurodevelopment.<sup>11</sup>
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-5 bg-orange-100 p-6 rounded-xl border border-orange-500 shadow-sm">
          <ImageWithFallback 
            src="/images/autism/autism-causes-Braintab-neuroinflammation.webp" 
            alt="Neuroinflammation in the brain"
            className="w-full rounded-lg shadow-sm object-contain bg-white"
          />
          <div className="w-full mx-auto">
            <h4 className="font-bold text-[#0c264d] mb-3 text-xl text-center">Neuroinflammation</h4>
            <p className="text-sm text-[#0c264d] leading-relaxed bg-white/90 p-5 rounded-lg border border-[#0c264d]/70">
              The central nervous system is patrolled by specialized resident immune cells called <strong>microglia</strong> and star-shaped support cells called <strong>astroglia</strong>, which protect the brain from harm, clear cellular debris, and help sculpt developing synapses. Seminal neuropathological studies of autistic brain tissue have identified chronic neuroglial activation and elevated pro-inflammatory cytokines (such as MCP-1 and TGF-β1) in the cerebral cortex, white matter, and notably the cerebellum.<sup>12</sup> Instead of returning to a calm resting state after an immune or environmental trigger passes, chronically activated microglia continue releasing inflammatory signals that can disrupt synaptic signaling, mood regulation, and neural homeostasis.<sup>12</sup>
            </p>
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
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Courchesne, E., et al. (2011). Brain growth across the life span in autism: Age-specific changes in anatomical pathology. <i>Brain Research</i>, 1380, 138–145.</p>
            <p>2. Hazlett, H. C., et al. (2017). Early brain development in infants at high risk for autism spectrum disorder. <i>Nature</i>, 542(7641), 348–351.</p>
            <p>3. Robertson, C. E., & Baron-Cohen, S. (2017). Sensory perception in autism. <i>Nature Reviews Neuroscience</i>, 18(11), 671–684.</p>
            <p>4. Belmonte, M. K., et al. (2004). Autism and abnormal development of brain connectivity. <i>Journal of Neuroscience</i>, 24(42), 9228–9231.</p>
            <p>5. Wolff, J. J., et al. (2012). Differences in white matter fiber tract development present from 6 to 24 months in infants with autism. <i>American Journal of Psychiatry</i>, 169(6), 589–600.</p>
            <p>6. Padmanabhan, A., et al. (2017). The Default Mode Network in autism. <i>Biological Psychiatry: Cognitive Neuroscience and Neuroimaging</i>, 2(6), 476–486.</p>
            <p>7. Tang, G., et al. (2014). Loss of mTOR-dependent macroautophagy causes autistic-like synaptic pruning deficits. <i>Neuron</i>, 83(5), 1131–1143.</p>
            <p>8. Zoghbi, H. Y., & Bear, M. F. (2012). Synaptic dysfunction in neurodevelopmental disorders associated with autism and intellectual disabilities. <i>Cold Spring Harbor Perspectives in Biology</i>, 4(3), a009886.</p>
            <p>9. Stoner, R., et al. (2014). Patches of disorganization in the neocortex of children with autism. <i>New England Journal of Medicine</i>, 370(13), 1209–1219.</p>
            <p>10. Rubenstein, J. L., & Merzenich, M. M. (2003). Model of autism: Increased ratio of excitation/inhibition in key neural systems. <i>Genes, Brain and Behavior</i>, 2(5), 255–267.</p>
            <p>11. Rossignol, D. A., & Frye, R. E. (2012). Mitochondrial dysfunction in autism spectrum disorders: A systematic review and meta-analysis. <i>Molecular Psychiatry</i>, 17(3), 290–314.</p>
            <p>12. Vargas, D. L., et al. (2005). Neuroglial activation and neuroinflammation in the brain of patients with autism. <i>Annals of Neurology</i>, 57(1), 67–81.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Amaral, D. G., Schumann, C. M., & Nordahl, C. W. (2008). Neuroanatomy of autism. <i>Trends in Neurosciences</i>, 31(3), 137–145.</li>
            <li>Ecker, C., Bookheimer, S. Y., & Murphy, D. G. (2015). Neuroimaging in autism spectrum disorder: Brain structure and function across the lifespan. <i>The Lancet Neurology</i>, 14(11), 1121–1134.</li>
            <li>Geschwind, D. H., & Levitt, P. (2007). Autism spectrum disorders: Developmental disconnection syndromes. <i>Current Opinion in Neurobiology</i>, 17(1), 103–111.</li>
            <li>Just, M. A., et al. (2004). Cortical activation and synchronization during sentence comprehension in high-functioning autism: Evidence of underconnectivity. <i>Brain</i>, 127(8), 1811–1821.</li>
            <li>Sohal, V. S., & Rubenstein, J. L. R. (2019). Excitation-inhibition balance as a framework for investigating mechanisms in neuropsychiatric disorders. <i>Molecular Psychiatry</i>, 24(9), 1248–1257.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}