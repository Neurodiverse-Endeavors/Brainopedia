import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { MessageSquare, Ear, BookOpen, Headphones } from 'lucide-react';

interface NVLDOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function NVLDOverview({ setCurrentArticle, initialTab }: NVLDOverviewProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'definition');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          NVLD: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('nvld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          Back to NVLD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('nvld')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        Back to NVLD
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('definition')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'definition'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Definition & Core Features
        </button>
        <button
          onClick={() => setActiveTab('comparisons')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'comparisons'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Prevalence & Comparisons
        </button>
        <button
          onClick={() => setActiveTab('lifespan')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'lifespan'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Lifespan & Outlook
        </button>
      </div>

      {/* ==========================================
          TAB 1: DEFINITION & CORE FEATURES
      ========================================== */}
      {activeTab === 'definition' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Discrepancy Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Definition & The Discrepancy</h2>
            

            
            <ImageWithFallback 
              src="/images/nvld/nvld-overview-discrepancy.webp"
              alt="Chart showing the gap between verbal IQ and performance IQ"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Nonverbal Learning Disability (NVLD) is a neurodevelopmental profile characterized by a fascinating and often misunderstood cognitive split: exceptional strengths in verbal and language abilities existing alongside significant challenges in visual-spatial processing, motor coordination, and social perception.
            </p>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              First comprehensively described by Byron Rourke in the 1980s, the absolute hallmark of NVLD is a dramatic discrepancy between a student's verbal intelligence and their nonverbal reasoning. Clinical evaluations frequently reveal a 10-point or greater gap between Verbal IQ and Performance IQ, creating a highly uneven learning profile.<sup className="text-[#10b981] font-bold ml-0.5">1</sup>
            </p>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] clear-both">
              <h3 className="text-[#0c264d] font-bold mb-2 text-sm border-b border-[#2abcd4] border-opacity-20 pb-2">Diagnostic Controversy</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                NVLD is not currently recognized as an official, standalone diagnosis in the DSM-5 or ICD-11.<sup className="text-[#10b981] font-bold ml-0.5">2</sup> However, it is widely utilized by clinical neuropsychologists, educators, and developmental specialists to accurately describe this highly specific pattern of cognitive assets and learning challenges.
              </p>
            </div>
          </div>

          {/* Core Challenges Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Primary Areas of Challenge</h2>
            <ImageWithFallback 
              src="/images/nvld/nvld-overview-challenges-hero.webp"
              alt="Abstract representation of verbal strengths and spatial challenges"
              className="block mx-auto w-64 max-w-2xl mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              According to established neuropsychological models, the NVLD profile consistently impacts three major domains of daily functioning and academic performance.<sup className="text-[#10b981] font-bold ml-0.5">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-[#ffd166] pb-2">Visual-Spatial</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Profound difficulty with spatial perception and geometric reasoning.</li>
                  <li>Struggles identifying the "big picture" versus hyper-focusing on minute visual details.</li>
                  <li>Challenges organizing visual information on a page (like math columns).</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-[#ffd166] pb-2">Motor Control</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Delayed development of fine and gross motor coordination.</li>
                  <li>Noticeable physical awkwardness or challenges with bilateral coordination.</li>
                  <li>Severe difficulty with the physical mechanics of handwriting.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-[#ffd166] pb-2">Social Perception</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Significant difficulty intuitively reading facial expressions and body language.</li>
                  <li>Missing subtle, unspoken social cues and environmental context.</li>
                  <li>A tendency toward highly literal, rigid interpretation of language and humor.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Strengths Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Unique Cognitive Strengths</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              The "disability" label often masks the extraordinary capabilities of individuals with NVLD. They typically possess remarkable auditory and language-based processing skills that can be leveraged for high academic and professional success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {/* Strength Mini-Card 1 */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <MessageSquare className="text-[#0A9DC4] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Advanced Vocabulary</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Developing a rich, sophisticated, and highly articulate word knowledge very early in life.</p>
                </div>
              </div>

              {/* Strength Mini-Card 2 */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Ear className="text-[#d4a017] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Auditory Rote Memory</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Demonstrating an excellent capacity for memorizing and accurately recalling spoken information, facts, and verbal sequences.</p>
                </div>
              </div>

              {/* Strength Mini-Card 3 */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <BookOpen className="text-[#0c264d] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Early Reading Skills</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Frequently learning to read and decode complex words well ahead of their peers (sometimes presenting as early hyperlexia).</p>
                </div>
              </div>

              {/* Strength Mini-Card 4 */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Headphones className="text-[#0A9DC4] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Auditory Attention</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A strong, natural ability to learn efficiently through verbal instruction and auditory lectures rather than visual diagrams.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: PREVALENCE & COMPARISONS
      ========================================== */}
      {activeTab === 'comparisons' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Prevalence Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Prevalence & Demographics</h2>
            

            <ImageWithFallback 
              src="/images/nvld/nvld-overview-demographics.webp"
              alt="Icon group representing diverse student population"
              className="w-48 h-auto rounded-md border border-[#ffd166] float-left mr-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Because NVLD relies heavily on internal visual-spatial deficits rather than obvious behavioral markers, it is frequently misdiagnosed or confused with other neurodevelopmental profiles that share overlapping symptoms.
            </p>

            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Establishing exact prevalence rates is mathematically difficult because NVLD lacks a dedicated diagnostic code in major medical manuals. However, modern clinical estimates suggest NVLD affects between 1% to 3% of the general population.<sup className="text-[#10b981] font-bold ml-0.5">3</sup> 
            </p>
            
            <p className="text-sm text-slate-700 leading-relaxed clear-both">
              Unlike many other neurodevelopmental conditions (which often heavily skew male), early research indicates that NVLD affects males and females relatively equally, or may even present at slightly higher rates in female populations.<sup className="text-[#10b981] font-bold ml-0.5">3</sup>
            </p>
          </div>

          {/* NVLD vs Autism Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">NVLD vs. Autism Spectrum Disorder</h2>
            <ImageWithFallback 
              src="/images/nvld/nvld-overview-autism-hero.webp"
              alt="Venn diagram showing the overlap between NVLD, Autism, and ADHD"
              className="block mx-auto w-full max-w-2xl mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              The highest rate of diagnostic confusion occurs between NVLD and Autism Spectrum Disorder (specifically the profile previously known as Asperger's Syndrome), as they share highly visible social challenges.<sup className="text-[#10b981] font-bold ml-0.5">4</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-[#2abcd4] border-opacity-20 pb-2">Shared Characteristics</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Significant difficulty interpreting nonverbal social cues and body language.</li>
                  <li>A strong tendency toward literal thinking and missing subtle sarcasm.</li>
                  <li>Challenges navigating complex, unstructured peer relationships.</li>
                  <li>A preference for established routines and predictable environments.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-[#2abcd4] border-opacity-20 pb-2">Key Differences</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Restricted interests:</strong> Individuals with NVLD generally do not exhibit the intense, highly restricted special interests characteristic of autism.</li>
                  <li><strong>Repetitive behaviors:</strong> NVLD does not inherently include the repetitive motor movements (stimming) defined in autism criteria.</li>
                  <li><strong>Spatial reasoning:</strong> Autistic individuals often have visual-spatial strengths, whereas visual-spatial deficits are the core diagnostic marker of NVLD.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dyslexia and ADHD Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">NVLD vs. Dyslexia & ADHD</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-gray-200 pb-2">The Opposite of Dyslexia</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                  Neuropsychologically, NVLD is often viewed as the mirror opposite of developmental dyslexia:
                </p>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Dyslexia:</strong> Characterized by language and phonological processing difficulties, but often accompanied by immense visual-spatial strengths.</li>
                  <li><strong>NVLD:</strong> Characterized by exceptional verbal and phonological skills, undermined by severe visual-spatial weaknesses.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-gray-200 pb-2">Distinguishing ADHD</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>While both conditions feature executive function and organizational challenges, ADHD alone does not produce the specific, severe visual-spatial deficits seen in NVLD.</li>
                  <li>However, NVLD and ADHD are highly comorbid and frequently co-occur in the same individual.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: LIFESPAN & OUTLOOK
      ========================================== */}
      {activeTab === 'lifespan' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Lifespan Impact Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Developmental Timeline</h2>

            <ImageWithFallback 
              src="/images/nvld/nvld-overview-lifespan-hero.webp"
              alt="Timeline showing the progression of NVLD traits from childhood to adulthood"
              className="block mx-auto w-full max-w-2xl mb-6 rounded-lg shadow-sm border border-yellow-200"
            />

            <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
              Because children with NVLD are highly articulate and often learn to read early, their profound struggles with spatial reasoning and social dynamics are frequently dismissed as behavioral issues or anxiety. Understanding how the profile evolves over time is crucial for early intervention.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-[#ffd166] pb-2">Early Childhood</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Advanced, adult-like vocabulary masks underlying developmental gaps.</li>
                  <li>Significant delays in motor milestones like riding a bike, catching a ball, or tying shoes.</li>
                  <li>Avoidance of visual-spatial toys like puzzles, LEGOs, or building blocks.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-[#ffd166] pb-2">School Years</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Severe, unexpected struggles with advanced math, geometry, and spatial alignment of numbers.</li>
                  <li>Intense difficulty with handwriting and organizing physical space (messy desks/lockers).</li>
                  <li>Increasing social isolation as peer interactions rely heavily on unspoken nuances.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-[#ffd166] pb-2">Adolescence & Adults</h3>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Difficulty mastering complex independent living skills, particularly driving and geographical navigation.</li>
                  <li>Heightened risk for mood disorders due to chronic social misinterpretations.</li>
                  <li>Success is often found by directing career paths away from visually-demanding fields.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Co-occurring Conditions Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Co-occurring Conditions</h2>
            <ImageWithFallback 
              src="/images/nvld/nvld-overview-co-occurring-hero.webp"
              alt="Venn diagram showing the overlap between NVLD, Autism, and ADHD"
              className="block mx-auto w-full max-w-2xl mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              NVLD rarely exists in a vacuum. Because of the inherent stress of navigating a highly visual and social world with spatial deficits, secondary psychological challenges are incredibly common.<sup className="text-[#10b981] font-bold ml-0.5">5</sup>
            </p>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] max-w-3xl mx-auto">
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-3">
                <li><strong>Anxiety Disorders:</strong> Chronic social anxiety is a frequent byproduct of constantly missing nonverbal cues and inadvertently offending peers.</li>
                <li><strong>Depression:</strong> Often emerges in adolescence as social isolation and academic math struggles compound.</li>
                <li><strong>ADHD:</strong> Highly comorbid, sharing significant overlap in executive function and organizational deficits.</li>
                <li><strong>Dyscalculia:</strong> The specific learning disability in math is a direct, natural consequence of severe visual-spatial impairments.</li>
              </ul>
            </div>
          </div>

          {/* Prognosis Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Prognosis and Hope</h2>
            
            <div className="bg-white rounded-md border border-gray-200 p-6 max-w-3xl mx-auto">
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                The most powerful tool for an individual with NVLD is their voice. With early identification, explicitly taught social frameworks, and targeted academic accommodations, outcomes are highly positive. 
              </p>
              <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
                <li>Their extraordinary verbal strengths naturally align with successful careers in law, writing, psychology, broadcasting, and education.</li>
                <li>Social skills and cue-reading can be logically, explicitly taught to compensate for a lack of intuition.</li>
                <li>Assistive technology (like speech-to-text and digital organizers) effectively bypasses fine motor and spatial organization barriers.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('nvld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          Back to NVLD
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
            <p>1. Rourke, B. P. (1989). <i>Nonverbal learning disabilities: The syndrome and the model</i>. Guilford Press.</p>
            <p>2. Mammarella, I. C., & Cornoldi, C. (2014). An analysis of the criteria used to diagnose children with nonverbal learning disability (NLD). <i>Child Neuropsychology</i>.</p>
            <p>3. Margolis, A. E., Broitman, J., Davis, J. M., Alexander, L., Hamilton, A., Ray, Z., ... & Davis, N. (2020). Estimated prevalence of nonverbal learning disability among North American children and adolescents. <i>JAMA Network Open</i>.</p>
            <p>4. Klin, A., Volkmar, F. R., Sparrow, S. S., Cicchetti, D. V., & Rourke, B. P. (1995). Validity and neuropsychological characterization of Asperger syndrome: Convergence with nonverbal learning disabilities syndrome. <i>Journal of Child Psychology and Psychiatry</i>.</p>
            <p>5. Semrud-Clikeman, M., & Hynd, G. W. (1990). Right hemispheric dysfunction in nonverbal learning disabilities: Social, academic, and adaptive functioning in adults and children. <i>Psychological Bulletin</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Tanguay, P. B. (2002). <i>Nonverbal learning disabilities at school: Educating students with NLD, Asperger syndrome, and related conditions</i>. Jessica Kingsley Publishers.</li>
            <li>Thompson, S. (1997). <i>The source for nonverbal learning disorders</i>. LinguiSystems.</li>
          </ul>
        </div>
      </div>

    </article>
  );
}