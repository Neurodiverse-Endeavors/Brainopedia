import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useState } from 'react';

interface ADHDCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function ADHDCauses({ setCurrentArticle, initialTab }: ADHDCausesProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'overview');
  
  function OverviewContent() {
    return (
      <>
        <div>
          <h2 className="text-[#0c264d] mb-4 text-2xl font-bold">Understanding ADHD Causes</h2>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-overview-dna.webp"
            alt="Brain illustration - understanding ADHD causes"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <p className="mb-4 text-slate-700 leading-relaxed">
            The exact cause of ADHD remains under investigation, but research suggests a combination of genetic, 
            neurological, and environmental factors contribute to its development.<sup>1, 2</sup> ADHD is a complex condition 
            with no single cause, and understanding its origins helps reduce stigma and emphasizes that ADHD is 
            a genuine neurobiological condition, not a result of poor parenting, lack of discipline, or personal 
            character flaws.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Modern research has identified multiple biological mechanisms and risk factors that contribute to 
            ADHD, including differences in brain structure and function,<sup>3</sup> genetic variations,<sup>4</sup> neurotransmitter 
            imbalances, and certain environmental exposures during critical developmental periods.
          </p>
        </div>

        <div className="clear-both pt-6">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Gene-Environment Interactions</h2>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-overview-dna-treetrunk.webp"
            alt="Gene-environment interaction in ADHD"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <p className="mb-4 text-slate-700 leading-relaxed">
            Modern research increasingly recognizes that genes and environment interact in complex ways.<sup>5, 6</sup> Someone 
            with genetic vulnerability to ADHD might not develop significant symptoms in one environment but might 
            in another. Conversely, protective factors (supportive family, appropriate interventions, good education) 
            can significantly improve outcomes even for those with strong genetic predisposition.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            This understanding has important implications: while we can't change genes, we can modify environments 
            and provide supports that help individuals with ADHD thrive. Understanding biological causes doesn't 
            mean fatalism—it means we can develop more effective, targeted interventions.
          </p>
          
          <div className="bg-[#f0f9ff] p-6 rounded-lg border-l-4 border-[#2abcd4] mt-6 clear-both">
            <h3 className="text-[#0c264d] font-bold mb-6 text-xl">The Genetic Blueprint</h3>
            
            <ImageWithFallback 
              src="/images/adhd/adhd-causes-overview-analogies.webp"
              alt="Genetic nesting analogies"
              className="block mx-auto w-full max-w-3xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
            />
            
            <p className="mb-4 text-slate-700 leading-relaxed">
              To truly understand how genetics and environment interact, it helps to visualize how our genetic material is structured. You can think of it like a set of microscopic Russian nesting dolls:
            </p>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li><strong>The Cell & Nucleus:</strong> The cell is the body's microscopic building block. Deep inside is the nucleus, which acts as a protective library for your biological instructions.</li>
              <li><strong>Chromosomes & Chromatin:</strong> Inside that library, DNA is tightly spooled around structural proteins (chromatin) and organized into distinct, packed volumes called chromosomes.</li>
              <li><strong>DNA & The Double Helix:</strong> DNA is the long, continuous molecule that holds your genetic code. Its physical shape looks like a twisted ladder, which is called a double helix.</li>
              <li><strong>The Gene:</strong> A gene is simply a specific, short segment—or a single paragraph—on that DNA ladder that provides the exact instructions to build a specific trait or protein.</li>
            </ul>
          </div>
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
              <p>1. Thapar, A., & Cooper, M. (2016). Attention deficit hyperactivity disorder. <i>Lancet</i>.</p>
              <p>2. Faraone, S. V., et al. (2021). The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder. <i>Neuroscience & Biobehavioral Reviews</i>.</p>
              <p>3. Cortese, S., et al. (2012). Toward systems neuroscience of ADHD: A meta-analysis of 55 fMRI studies. <i>American Journal of Psychiatry</i>.</p>
              <p>4. Faraone, S. V., & Larsson, H. (2019). Genetics of attention deficit hyperactivity disorder. <i>Molecular Psychiatry</i>.</p>
              <p>5. Nigg, J. T., et al. (2010). Gene-environment interactions and ADHD: A review of the literature. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>.</p>
              <p>6. Thapar, A., et al. (2013). Gene-environment interplay in attention-deficit hyperactivity disorder and the importance of a developmental perspective. <i>British Journal of Psychiatry</i>.</p>
            </div>
          </div>
          
          {/* BACKGROUND SOURCES: CYAN */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
              Background Sources
            </h4>
            <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
              <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
              <li>Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i> (4th ed.). Guilford Press.</li>
              <li>National Institute of Mental Health. (2023). Attention-Deficit/Hyperactivity Disorder.</li>
              <li>Nigg, J. T., et al. (2020). Development of ADHD: etiology, heterogeneity, and early life course. <i>Annual Review of Developmental Psychology</i>.</li>
            </ul>
          </div>
        </div>
      </>
    );
  }

  function GeneticsContent() {
    return (
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetics and Heredity</h2>
        
        <ImageWithFallback 
          src="/images/adhd/adhd-heredity-tree.webp"
          alt="DNA and genetics - hereditary factors in ADHD"
          className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
        />

        <p className="mb-4 text-slate-700 leading-relaxed">
          ADHD has a strong genetic component. Family studies consistently show that ADHD runs in families, 
          with children of parents with ADHD having a significantly higher risk of developing the condition 
          themselves.<sup>1</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Heritability Rates</h3>
        <p className="mb-4 text-slate-700 leading-relaxed">
          Twin studies reveal that ADHD is highly heritable, with heritability estimates around 70-80%.<sup>2, 3</sup> This 
          means that genetic factors account for a substantial portion of individual differences in ADHD symptoms. 
          If one identical twin has ADHD, there's a high probability the other will as well. Recent large-scale 
          studies confirm these heritability estimates remain consistent across the lifespan, from childhood through 
          adulthood.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Genome-Wide Association Studies (GWAS)</h3>
        <p className="mb-4 text-slate-700 leading-relaxed">
          Major advances in genetic research have come from genome-wide association studies. The largest and most 
          recent GWAS meta-analysis, published in 2023, identified 27 genetic risk loci associated with ADHD by 
          analyzing data from over 38,000 individuals with ADHD and 186,000 controls.<sup>4</sup> This groundbreaking 
          study refined our understanding of ADHD's genetic architecture and implicated several cognitive domains 
          including executive function, processing speed, and working memory.
        </p>
        <p className="mb-4 text-slate-700 leading-relaxed">
          Earlier GWAS studies, including the 2019 discovery of the first genome-wide significant risk loci,<sup>5</sup> 
          paved the way for these findings. Population-based studies analyzing ADHD symptoms in pediatric cohorts 
          have also contributed to identifying genetic variants associated with symptom severity.<sup>6</sup>
        </p>

        <div className="clear-both pt-8 pb-4">
          <h3 className="text-[#0c264d] font-bold mb-6 text-xl text-center">Multiple Genes Involved</h3>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-causes-genetics-polygenic.webp"
            alt="Multiple genes involved in ADHD"
            className="block mx-auto w-full max-w-3xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
          />

          <p className="mb-4 text-slate-700 leading-relaxed">
            Rather than being caused by a single gene, ADHD involves many genes, each contributing a small effect. 
            Research has identified multiple candidate genes,<sup>7</sup> particularly those involved in dopamine and 
            norepinephrine regulation. These include genes for dopamine receptors (DRD4, DRD5), dopamine 
            transporter (DAT1),<sup>8</sup> and other neurotransmitter-related genes. Polygenic risk scores—which combine 
            effects across many genetic variants—have shown that ADHD genetic risk affects neural activation 
            patterns during cognitive tasks, regardless of whether someone has an ADHD diagnosis.<sup>9</sup>
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            The genetic architecture of ADHD is complex, and researchers continue to discover new genetic 
            variants associated with the condition. This genetic complexity helps explain why ADHD symptoms 
            vary so widely from person to person. Importantly, research has revealed shared genetic background 
            between childhood and adult ADHD, supporting the understanding that ADHD is a lifelong condition 
            with consistent genetic underpinnings.<sup>10</sup>
          </p>
        </div>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Genetic Overlap with Other Conditions</h3>
        <p className="mb-4 text-slate-700 leading-relaxed">
          ADHD shares genetic risk factors with several other psychiatric and neurodevelopmental conditions. 
          Large-scale genomic studies have revealed significant genetic correlations between ADHD and conditions 
          such as autism spectrum disorder, depression, anxiety, and bipolar disorder.<sup>11</sup> This genetic overlap 
          helps explain why comorbidity is so common in ADHD and why individuals with ADHD often experience 
          multiple co-occurring conditions.
        </p>
        <p className="mb-4 text-slate-700 leading-relaxed">
          Genetic research has also investigated sex differences in ADHD prevalence. Studies examining the 
          genetic basis of sex bias have found that while ADHD is more commonly diagnosed in males, the 
          genetic risk factors are largely similar across sexes, suggesting that sex differences may be more 
          related to expression and diagnostic patterns than underlying genetic vulnerability.<sup>12</sup>
        </p>

        <div className="clear-both pt-8 pb-4">
          <h3 className="text-[#0c264d] font-bold mb-6 text-xl text-center">Gene-Environment Interactions</h3>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-causes-genetics-environment.webp"
            alt="Gene-environment interactions"
            className="block mx-auto w-full max-w-3xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
          />

          <p className="mb-4 text-slate-700 leading-relaxed">
            While genetics play a major role, ADHD doesn't develop from genes alone. Environmental factors 
            interact with genetic predisposition to influence whether and how ADHD manifests.<sup>13, 14</sup> Understanding 
            both genetic and environmental contributions is essential for a complete picture of ADHD's origins. 
            This interplay between nature and nurture helps explain why not everyone with genetic risk factors 
            develops ADHD, and why environmental interventions can be effective even for highly heritable conditions.
          </p>
        </div>

        <div className="mt-6 mb-8 bg-[#ffd166] bg-opacity-20 p-6 rounded-lg border-l-4 border-[#ffd166] shadow-sm clear-both">
          <h3 className="text-[#0c264d] font-bold mb-2 flex items-center gap-2 text-lg">
            <span className="text-xl">🧬</span> Deep Dive: Epigenetics & ADHD
          </h3>
          <p className="mb-4 text-sm text-slate-700">
            Want to understand the molecular bridge? Explore how environmental factors like stress, nutrition, and toxins can physically alter gene expression without changing underlying DNA.
          </p>
          <button
            onClick={() => setCurrentArticle?.('adhd-epigenetics')}
            className="inline-flex items-center gap-2 bg-white border-2 border-[#ffd166] hover:bg-[#ffd166] text-[#0c264d] font-bold py-2 px-4 rounded-md transition-colors duration-200"
          >
            Explore ADHD Epigenetics →
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
              <p>1. Faraone, S. V., & Larsson, H. (2019). Genetics of attention deficit hyperactivity disorder. <i>Molecular Psychiatry</i>.</p>
              <p>2. Brikell, I., et al. (2015). Heritability of attention-deficit hyperactivity disorder in adults. <i>American Journal of Medical Genetics Part B: Neuropsychiatric Genetics</i>.</p>
              <p>3. Larsson, H., et al. (2014). The heritability of clinically diagnosed attention deficit hyperactivity disorder across the lifespan. <i>Psychological Medicine</i>.</p>
              <p>4. Demontis, D., et al. (2023). Genome-wide analyses of ADHD identify 27 risk loci, refine the genetic architecture and implicate several cognitive domains. <i>Nature Genetics</i>.</p>
              <p>5. Demontis, D., et al. (2019). Discovery of the first genome-wide significant risk loci for attention deficit/hyperactivity disorder. <i>Nature Genetics</i>.</p>
              <p>6. Middeldorp, C. M., et al. (2016). A genome-wide association meta-analysis of attention-deficit/hyperactivity disorder symptoms in population-based pediatric cohorts. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>.</p>
              <p>7. Gizer, I. R., et al. (2009). Candidate gene studies of ADHD: a meta-analytic review. <i>Human Genetics</i>.</p>
              <p>8. Li, D., et al. (2006). Meta-analysis shows significant association between dopamine system genes and attention deficit hyperactivity disorder (ADHD). <i>Human Molecular Genetics</i>.</p>
              <p>9. Grimm, O., et al. (2020). Polygenic risk for ADHD affects neural activation during response inhibition regardless of ADHD diagnosis. <i>Translational Psychiatry</i>.</p>
              <p>10. Rovira, P., et al. (2020). Shared genetic background between children and adults with attention deficit/hyperactivity disorder. <i>Neuropsychopharmacology</i>.</p>
              <p>11. Cross-Disorder Group of the Psychiatric Genomics Consortium. (2019). Genomic relationships, novel loci, and pleiotropic mechanisms across eight psychiatric disorders. <i>Cell</i>.</p>
              <p>12. Martin, J., et al. (2018). A genetic investigation of sex bias in the prevalence of attention-deficit/hyperactivity disorder. <i>Biological Psychiatry</i>.</p>
              <p>13. Thapar, A., & Cooper, M. (2016). Attention deficit hyperactivity disorder. <i>Lancet</i>.</p>
              <p>14. Nigg, J. T., et al. (2020). Development of ADHD: etiology, heterogeneity, and early life course. <i>Annual Review of Developmental Psychology</i>.</p>
            </div>
          </div>
          
          {/* BACKGROUND SOURCES: CYAN */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
              Background Sources
            </h4>
            <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
              <li>Chang, Z., et al. (2013). Developmental twin study of attention problems: high heritabilities throughout development. <i>JAMA Psychiatry</i>.</li>
              <li>Faraone, S. V., & Biederman, J. (1998). Neurobiology of attention-deficit hyperactivity disorder. <i>Biological Psychiatry</i>.</li>
              <li>Franke, B., et al. (2012). The genetics of attention deficit/hyperactivity disorder in adults, a review. <i>Molecular Psychiatry</i>.</li>
              <li>Kendler, K. S., et al. (2010). The interaction of genetic and environmental risk factors for psychiatric disorders. <i>Annual Review of Clinical Psychology</i>.</li>
              <li>Nikolas, M. A., & Burt, S. A. (2010). Genetic and environmental influences on ADHD symptom dimensions of inattention and hyperactivity: a meta-analysis. <i>Journal of Abnormal Psychology</i>.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  function BrainContent() {
    return (
      <div className="bg-[#f0f9ff] p-6 rounded-xl">
        {/* --- HEADER SECTION --- */}
        <div className="text-center w-full mb-10">
          <h2 className="text-[#0c264d] font-bold mb-6 text-3xl">Brain Structure and Function</h2>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-causes-brain-structure-main-anatomy.webp"
            alt="Overview of brain regions affected by ADHD"
            className="block mx-auto w-64 h-auto rounded-xl shadow-md border-4 border-[#2abcd4] object-contain mb-6 bg-white"
          />

          <p className="text-slate-700 leading-relaxed max-w-3xl mx-auto text-lg">
            Brain imaging studies have revealed specific differences in how certain regions of the ADHD brain 
            communicate and process neurotransmitters like norepinephrine and dopamine. These structural and 
            functional differences directly connect to the lived experiences of inattention, impulsivity, and 
            executive dysfunction.
          </p>
        </div>

        {/* --- CORE BRAIN REGIONS & MECHANISMS --- */}
        <div className="mb-12 clear-both">
          <h3 className="text-[#0c264d] font-bold mb-6 text-2xl px-2 text-center">Key Regions & Mechanisms</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Frontal Cortex */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#0c264d] flex flex-col h-full">
              <ImageWithFallback 
                src="/images/adhd/adhd-causes-brain-structure-frontal-cortex.webp"
                alt="Frontal cortex highlighted in neuroanatomy"
                className="w-80 h-80 mx-auto object-contain rounded-md mb-4 bg-slate-100 flex-shrink-0 p-2"
              />
              <h4 className="font-bold text-[#0c264d] mb-2 text-xl">Frontal Cortex</h4>
              <p className="text-sm text-slate-700 leading-relaxed flex-grow">
                <strong>The Orchestrator:</strong> This region orchestrates high-level functioning: maintaining attention, 
                organization, and executive function. A deficiency of norepinephrine and dopamine within this brain region 
                might cause inattention, problems with organization, and or impaired executive functioning.<sup>1</sup>
              </p>
            </div>

            {/* Limbic System */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#2abcd4] flex flex-col h-full">
              <ImageWithFallback 
                src="/images/adhd/adhd-causes-brain-structure-limbic-system.webp"
                alt="Limbic system highlighted in neuroanatomy"
                className="w-80 h-80 mx-auto object-contain rounded-md mb-4 bg-slate-100 flex-shrink-0 p-2"
              />
              <h4 className="font-bold text-[#0c264d] mb-2 text-xl">Limbic System</h4>
              <p className="text-sm text-slate-700 leading-relaxed flex-grow">
                <strong>The Emotional Center:</strong> Located deeper in the brain, this region regulates our emotions. 
                A deficiency in neurotransmitter connectivity within this neural pathway might result in restlessness, 
                inattention, or emotional volatility.<sup>2</sup>
              </p>
            </div>

            {/* Basal Ganglia */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#ffd166] flex flex-col h-full">
              <ImageWithFallback 
                src="/images/adhd/adhd-causes-brain-structure-basal-ganglia.webp"
                alt="Basal ganglia highlighted in neuroanatomy"
                className="w-80 h-80 mx-auto object-contain rounded-md mb-4 bg-slate-100 flex-shrink-0 p-2"
              />
              <h4 className="font-bold text-[#0c264d] mb-2 text-xl">Basal Ganglia</h4>
              <p className="text-sm text-slate-700 leading-relaxed flex-grow">
                <strong>The Switchboard:</strong> These neural circuits regulate communication within the brain. Information 
                from all regions of the brain enters the basal ganglia, and is then relayed to the correct sites. A deficiency 
                here can cause information to short-circuit, resulting in inattention or impulsivity.<sup>3</sup>
              </p>
            </div>

            {/* Reticular Activating System */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#0A9DC4] flex flex-col h-full">
              <ImageWithFallback 
                src="/images/adhd/adhd-causes-brain-structure-ras.webp"
                alt="Reticular activating system highlighted in neuroanatomy"
                className="w-80 h-80 mx-auto object-contain rounded-md mb-4 bg-slate-100 flex-shrink-0 p-2"
              />
              <h4 className="font-bold text-[#0c264d] mb-2 text-xl">Reticular Activating System (RAS)</h4>
              <p className="text-sm text-slate-700 leading-relaxed flex-grow">
                <strong>The Relay System:</strong> This is the major relay system among the many pathways that enter 
                and leave the brain, directly influencing arousal and consciousness. A deficiency in the RAS can cause 
                inattention, impulsivity, or hyperactivity.<sup>4</sup>
              </p>
            </div>

          </div>
        </div>
        
        {/* --- LARGE-SCALE FINDINGS --- */}
        <div className="bg-white p-6 rounded-xl border-t-4 border-[#0c264d] shadow-sm mb-10 clear-both">
          <h3 className="text-[#0c264d] font-bold mb-4 text-xl text-center sm:text-left">Large-Scale Neuroimaging Findings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#f8fafc] p-5 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-[#0c264d]">
              <div className="font-bold text-[#0c264d] mb-2">2017 ENIGMA-ADHD Study</div>
              <div className="text-sm text-slate-700">
                Analyzed brain scans from over 3,200 participants and found smaller volumes in several subcortical brain regions, including the amygdala, caudate, putamen, nucleus accumbens, and hippocampus.<sup>5</sup> These differences were most pronounced in children.
              </div>
            </div>
            
            <div className="bg-[#f8fafc] p-5 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-[#0c264d]">
              <div className="font-bold text-[#0c264d] mb-2">2019 Follow-Up Study</div>
              <div className="text-sm text-slate-700">
                Examined cortical thickness across more than 2,200 individuals and found subtle but widespread differences in cortical structure, particularly in frontal, temporal, and cingulate regions.<sup>6</sup>
              </div>
            </div>
          </div>
        </div>

        {/* --- STRUCTURAL DIFFERENCES --- */}
        <div className="mb-10 clear-both">
          <h3 className="text-[#0c264d] font-bold mb-6 text-2xl px-2">Structural Differences</h3>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-causes-brain-structure-differences.webp"
            alt="Structural brain differences in ADHD"
            className="block mx-auto w-full max-w-3xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border-b-4 border-[#2abcd4]">
              <div className="font-bold text-[#0c264d] mb-2">Total Brain Volume</div>
              <div className="text-sm text-slate-700">Meta-analyses confirm smaller total brain and intracranial volume in children with ADHD, with differences most prominent in childhood.<sup>3</sup></div>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border-b-4 border-[#2abcd4]">
              <div className="font-bold text-[#0c264d] mb-2">Subcortical Regions</div>
              <div className="text-sm text-slate-700">Reduced volume in the prefrontal cortex, basal ganglia, hippocampus, amygdala, and cerebellum.<sup>5</sup></div>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border-b-4 border-[#2abcd4]">
              <div className="font-bold text-[#0c264d] mb-2">Cortical Thickness</div>
              <div className="text-sm text-slate-700">Thinner cortex in multiple regions, particularly in prefrontal and temporal areas, with some normalization in adulthood.<sup>7</sup></div>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border-b-4 border-[#2abcd4]">
              <div className="font-bold text-[#0c264d] mb-2">Delayed Maturation</div>
              <div className="text-sm text-slate-700">The brain develops on a typical trajectory but more slowly, with peak cortical thickness achieved approximately 2 to 3 years later than average.<sup>8</sup></div>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border-b-4 border-[#2abcd4] md:col-span-2 lg:col-span-2">
              <div className="font-bold text-[#0c264d] mb-2">White Matter Microstructure</div>
              <div className="text-sm text-slate-700">Differences in white matter organization affecting neural connectivity between brain regions, particularly in pathways connecting frontal regions to other areas.<sup>9, 10</sup></div>
            </div>
          </div>
        </div>

        {/* --- FUNCTIONAL DIFFERENCES (Cards) --- */}
        <div className="mb-10 clear-both">
          <h3 className="text-[#0c264d] font-bold mb-4 text-2xl px-2">Functional Differences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border-b-4 border-[#ffd166]">
              <div className="font-bold text-[#0c264d] mb-2">Task-Based Activation</div>
              <div className="text-sm text-slate-700">Underactivity in prefrontal cortex and parietal regions during tasks requiring attention, inhibition, and working memory.<sup>11, 12</sup></div>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border-b-4 border-[#ffd166]">
              <div className="font-bold text-[#0c264d] mb-2">Default Mode Network (DMN)</div>
              <div className="text-sm text-slate-700">Altered activity in the DMN (active during mind-wandering), including insufficient suppression of this network during tasks requiring focus.<sup>13, 14</sup></div>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border-b-4 border-[#ffd166]">
              <div className="font-bold text-[#0c264d] mb-2">Functional Connectivity</div>
              <div className="text-sm text-slate-700">Widespread alterations in connectivity, particularly involving networks related to attention, executive control, and reward processing.<sup>12</sup></div>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border-b-4 border-[#ffd166]">
              <div className="font-bold text-[#0c264d] mb-2">Reward Circuits</div>
              <div className="text-sm text-slate-700">Reduced activation in ventral striatum during reward anticipation, which may explain motivation challenges and preference for immediate rewards.<sup>15</sup></div>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border-b-4 border-[#ffd166] md:col-span-2 lg:col-span-2">
              <div className="font-bold text-[#0c264d] mb-2">Network Organization</div>
              <div className="text-sm text-slate-700">Less efficient organization of large-scale brain networks, potentially contributing to the variability often seen in cognitive performance.<sup>14</sup></div>
            </div>
          </div>
        </div>

        {/* --- CONTEXT & IMPLICATIONS (3-Column Layout) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 clear-both">
          <div className="bg-[#f8fafc] p-5 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-[#0c264d]">
            <div className="font-bold text-[#0c264d] mb-2 text-lg">Adult Brain Differences</div>
            <p className="text-sm text-slate-700 leading-relaxed">
              While some childhood brain differences normalize with age, adults with persistent ADHD continue to show structural and functional differences. This supports the understanding that ADHD is a lifelong neurodevelopmental condition.
            </p>
          </div>
          
          <div className="bg-[#f8fafc] p-5 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-[#2abcd4]">
            <div className="font-bold text-[#0c264d] mb-2 text-lg">Developmental Trajectories</div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Longitudinal studies reveal ADHD involves altered developmental trajectories rather than static abnormalities. Some differences decrease with age, while others emerge or persist into adulthood.<sup>16, 17</sup>
            </p>
          </div>
          
          <div className="bg-[#f8fafc] p-5 rounded-lg border border-slate-100 shadow-sm border-l-4 border-l-[#ffd166]">
            <div className="font-bold text-[#0c264d] mb-2 text-lg">Clinical Implications</div>
            <p className="text-sm text-slate-700 leading-relaxed">
              These findings validate ADHD as a neurobiological condition. However, brain imaging is not currently used for clinical diagnosis, as there is too much overlap between individuals with and without ADHD at the individual level.
            </p>
          </div>
        </div>

        {/* --- GENE-ENVIRONMENT BANNER --- */}
        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm mt-8 clear-both">
          <h3 className="text-[#0c264d] font-bold mb-2 text-lg">
            Gene-Environment Interactions
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            While genetics play a major role, ADHD doesn't develop from genes alone. Environmental factors 
            interact with genetic predisposition to influence whether and how ADHD manifests.<sup>16, 17</sup> Understanding 
            both genetic and environmental contributions is essential for a complete picture of ADHD's origins, and helps explain why environmental interventions can be highly effective.
          </p>
        </div>

        <div className="mt-6 mb-8 bg-[#ffd166] bg-opacity-20 p-6 rounded-lg border-l-4 border-[#ffd166] shadow-sm clear-both">
          <h3 className="text-[#0c264d] font-bold mb-2 flex items-center gap-2 text-lg">
            <span className="text-xl">🧬</span> Deep Dive: Epigenetics & ADHD
          </h3>
          <p className="mb-4 text-sm text-slate-700">
            Want to understand the molecular bridge? Explore how environmental factors like stress, nutrition, and toxins can physically alter gene expression without changing underlying DNA.
          </p>
          <button
            onClick={() => setCurrentArticle?.('adhd-epigenetics')}
            className="inline-flex items-center gap-2 bg-white border-2 border-[#ffd166] hover:bg-[#ffd166] text-[#0c264d] font-bold py-2 px-4 rounded-md transition-colors duration-200"
          >
            Explore ADHD Epigenetics →
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
              <p>1. Arnsten, A. F. T. (2009). Toward a new understanding of attention-deficit hyperactivity disorder pathophysiology: an important role for prefrontal cortex dysfunction. <i>CNS Drugs</i>.</p>
              <p>2. Shaw, P., et al. (2014). Emotion dysregulation in attention deficit hyperactivity disorder. <i>American Journal of Psychiatry</i>.</p>
              <p>3. Frodl, T., & Skokauskas, N. (2012). Meta-analysis of structural MRI studies in children and adults with attention deficit hyperactivity disorder indicates treatment effects. <i>Acta Psychiatrica Scandinavica</i>.</p>
              <p>4. Castellanos, F. X., & Proal, E. (2012). Large-scale brain systems in ADHD: beyond the prefrontal-striatal model. <i>Trends in Cognitive Sciences</i>.</p>
              <p>5. Hoogman, M., et al. (2017). Subcortical brain volume differences in participants with attention deficit hyperactivity disorder in children and adults: A cross-sectional mega-analysis. <i>The Lancet Psychiatry</i>.</p>
              <p>6. Hoogman, M., et al. (2019). Brain imaging of the cortex in ADHD: A coordinated analysis of large-scale clinical and population-based samples. <i>American Journal of Psychiatry</i>.</p>
              <p>7. Narr, K. L., et al. (2009). Widespread cortical thinning is a robust anatomical marker for attention-deficit/hyperactivity disorder. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>.</p>
              <p>8. Shaw, P., et al. (2007). Attention-deficit/hyperactivity disorder is characterized by a delay in cortical maturation. <i>Proceedings of the National Academy of Sciences</i>.</p>
              <p>9. Chen, L., et al. (2016). A systematic review and meta-analysis of tract-based spatial statistics studies regarding attention-deficit/hyperactivity disorder. <i>Neuroscience & Biobehavioral Reviews</i>.</p>
              <p>10. van Ewijk, H., et al. (2012). Diffusion tensor imaging in attention deficit/hyperactivity disorder: A systematic review and meta-analysis. <i>Neuroscience & Biobehavioral Reviews</i>.</p>
              <p>11. Hart, H., et al. (2013). Meta-analysis of functional magnetic resonance imaging studies of inhibition and attention in attention-deficit/hyperactivity disorder: Exploring task-specific, stimulant medication, and age effects. <i>JAMA Psychiatry</i>.</p>
              <p>12. Cortese, S., et al. (2012). Toward systems neuroscience of ADHD: A meta-analysis of 55 fMRI studies. <i>American Journal of Psychiatry</i>.</p>
              <p>13. Sonuga-Barke, E. J., & Castellanos, F. X. (2007). Spontaneous attentional fluctuations in impaired states and pathological conditions: A neurobiological hypothesis. <i>Neuroscience & Biobehavioral Reviews</i>.</p>
              <p>14. Sripada, C., et al. (2014). Disrupted network architecture of the resting brain in attention-deficit/hyperactivity disorder. <i>Human Brain Mapping</i>.</p>
              <p>15. Plichta, M. M., & Scheres, A. (2014). Ventral-striatal responsiveness during reward anticipation in ADHD and its relation to trait impulsivity in the healthy population: A meta-analytic review of the fMRI literature. <i>Neuroscience & Biobehavioral Reviews</i>.</p>
              <p>16. Francx, W., et al. (2015). White matter microstructure and developmental improvement of hyperactive/impulsive symptoms in attention-deficit/hyperactivity disorder. <i>Journal of Child Psychology and Psychiatry</i>.</p>
              <p>17. Shaw, P., et al. (2013). Trajectories of cerebral cortical development in childhood and adolescence and adult attention-deficit/hyperactivity disorder. <i>Biological Psychiatry</i>.</p>
            </div>
          </div>
          
          {/* BACKGROUND SOURCES: CYAN */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
              Background Sources
            </h4>
            <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
              <li>Faraone, S. V., & Biederman, J. (1998). Neurobiology of attention-deficit hyperactivity disorder. <i>Biological Psychiatry</i>.</li>
              <li>Rubia, K. (2018). Cognitive neuroscience of attention deficit hyperactivity disorder (ADHD) and its clinical translation. <i>Frontiers in Human Neuroscience</i>.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <article className="max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl">
          ADHD: Causes & Origins
        </h1>

<button 
  onClick={() => setCurrentArticle?.('adhd')}
  className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
>
  <span className="text-lg">←</span>
  All About ADHD
</button>
      </div>

      {/* Mobile button - shows only on small screens below title */}
      <button 
        onClick={() => setCurrentArticle?.('adhd')}
        className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About ADHD
      </button>

      {/* Implemented the smart VS Code suggestion while keeping your Tailwind styles */}
 <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger value="overview" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Overview
          </TabsTrigger>
          <TabsTrigger value="genetics" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Genetics
          </TabsTrigger>
          <TabsTrigger value="brain" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Brain Structure
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          {OverviewContent()}
        </TabsContent>

        <TabsContent value="genetics" className="space-y-8">
          {GeneticsContent()}
        </TabsContent>

        <TabsContent value="brain" className="space-y-8">
          {BrainContent()}
        </TabsContent>
      </Tabs>

      <div className="flex justify-end my-8 clear-both">
<button 
  onClick={() => setCurrentArticle?.('adhd')}
  className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
>
  <span className="text-lg">←</span>
  All About ADHD
</button>
      </div>
    </article>
  );
}