import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { BookOpen, Users, Brain, Activity, Globe, Scale, ShieldCheck, Lightbulb, Clock } from 'lucide-react';

interface IDOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function IDOverview({ setCurrentArticle, initialTab }: IDOverviewProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'what');

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Intellectual Disability: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('intellectual-disability')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About ID
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('what')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'what'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          What is ID?
        </button>
        <button
          onClick={() => setActiveTab('characteristics')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'characteristics'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Key Characteristics
        </button>
        <button
          onClick={() => setActiveTab('neurodiversity')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'neurodiversity'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Prevalence & Neurodiversity
        </button>
      </div>

      {/* ==========================================
          TAB 1: WHAT IS ID?
      ========================================== */}
      {activeTab === 'what' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Intellectual Disability (ID), also formally known as intellectual developmental disorder, is a neurodevelopmental condition representing a diverse spectrum of cognitive functioning. It is a distinct neurotype with unique support needs and inherent strengths.<sup>1, 2</sup>
          </p>

          {/* Definition Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <ImageWithFallback 
              src="/images/id/id-overview-intro.webp" 
              alt="Group of individuals engaging in a collaborative learning environment"
              className="w-56 max-w-full h-auto rounded-md float-right ml-6 mb-4 shadow-sm border border-cyan-100 hidden sm:block"
            />
            
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl">Understanding the Condition</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed mb-8">
              Historically referred to by outdated terminology, the modern clinical and social understanding of ID focuses on holistic life contexts rather than purely on cognitive deficits.<sup>4</sup>
            </p>

            <div className="grid grid-cols-1 gap-4 clear-both">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100 flex items-start gap-4">
                <BookOpen className="text-[#2abcd4] w-6 h-6 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2">Clinical Definition</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    ID is characterized by significant limitations in both intellectual functioning (reasoning, learning) and adaptive behavior (everyday social and practical skills). These limitations must originate before the age of 18.<sup>1</sup>
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100 flex items-start gap-4">
                <Users className="text-[#2abcd4] w-6 h-6 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2">The Social Model</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Modern frameworks emphasize the social model of disability: challenges result not solely from individual limitations, but from the interaction between the person and inflexible environmental barriers.<sup>5</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: KEY CHARACTERISTICS
      ========================================== */}
      {activeTab === 'characteristics' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            An intellectual disability diagnosis is not based on a single test score. It requires a comprehensive evaluation of how an individual processes information and navigates the practical demands of their daily environment.
          </p>

          {/* Characteristics Card (Yellow) - Popped Hover Layout */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Diagnostic Pillars</h2>
            
            <ImageWithFallback 
              src="/images/id/id-overview-characteristics.webp" 
              alt="Visual map showing intelligence, life skills, and environment"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Clinicians look at three specific foundational pillars to determine if an individual meets the criteria for ID, shifting away from a reliance on IQ scores alone to a more functional, context-driven approach.<sup>6</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-yellow-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-[#fffbeb] p-3 rounded-full border border-[#ffd166] border-opacity-50 mb-3">
                  <Brain className="text-[#d4a017] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Intellectual Functioning</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Refers to general mental capacity, such as abstract reasoning, learning from experience, logical problem-solving, and academic learning.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-yellow-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-[#fffbeb] p-3 rounded-full border border-[#ffd166] border-opacity-50 mb-3">
                  <Activity className="text-[#d4a017] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Adaptive Behavior</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The collection of conceptual, social, and practical skills that are learned and independently performed by people in their everyday lives.<sup>7</sup></p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-yellow-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-[#fffbeb] p-3 rounded-full border border-[#ffd166] border-opacity-50 mb-3">
                  <Clock className="text-[#d4a017] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Developmental Onset</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The limitations in both cognitive and adaptive functioning must visibly appear during the early developmental period (before age 18).<sup>8</sup></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: PREVALENCE & NEURODIVERSITY
      ========================================== */}
      {activeTab === 'neurodiversity' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Intellectual disability is one of the most common developmental conditions worldwide. Reframing ID through the lens of neurodiversity is essential for fostering true societal inclusion and human rights.
          </p>

          {/* Perspective Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Global Impact & New Paradigms</h2>
            
            <ImageWithFallback 
              src="/images/id/id-overview-neurodiversity.webp" 
              alt="Diverse community emphasizing support and neurodiversity"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">Prevalence Statistics</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Global Rates:</strong> While rates vary by country, it is estimated that 1% to 3% of the global population has an intellectual disability.<sup>3, 9</sup></p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Scale className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Systemic Factors:</strong> In low- and middle-income countries, prevalence is often higher due to systemic factors like malnutrition, environmental toxins, and reduced healthcare access.<sup>10</sup></p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">The Neurodiversity Paradigm</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Natural Variation:</strong> The neurodiversity movement views intellectual disability as a natural, expected part of human cognitive diversity rather than an inherently broken state.<sup>11</sup></p>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Rights & Supports:</strong> This perspective directly challenges the "tragedy" narrative. It emphasizes that with appropriate, tailored supports, individuals with ID lead fulfilling, self-determined lives.<sup>12</sup></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('intellectual-disability')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About ID
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
            <p>1. American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.). Arlington, VA: APA.</p>
            <p>2. Schalock, R. L., et al. (2010). <i>Intellectual disability: Definition, classification, and systems of supports</i>. American Association on Intellectual and Developmental Disabilities (AAIDD).</p>
            <p>3. Maulik, P. K., et al. (2011). Prevalence of intellectual disability: A meta-analysis. <i>Research in Developmental Disabilities</i>.</p>
            <p>4. Schalock, R. L., et al. (2007). The renaming of mental retardation. <i>Intellectual and Developmental Disabilities</i>.</p>
            <p>5. Shakespeare, T. (2006). The social model of disability. In <i>The Disability Studies Reader</i>.</p>
            <p>6. Shogren, K. A., et al. (2014). The definition of 'context' in intellectual disability. <i>Journal of Policy and Practice in Intellectual Disabilities</i>.</p>
            <p>7. Tassé, M. J., et al. (2012). The construct of adaptive behavior. <i>American Journal on Intellectual and Developmental Disabilities</i>.</p>
            <p>8. Harris, J. C. (2013). New terminology for mental retardation in DSM-5 and ICD-11. <i>Current Opinion in Psychiatry</i>.</p>
            <p>9. Centers for Disease Control and Prevention. (2020). Facts about Intellectual Disability.</p>
            <p>10. World Health Organization. (2021). Disability and health fact sheet.</p>
            <p>11. Walker, N. (2021). <i>Neuroqueer Heresies: Notes on the Neurodiversity Paradigm, Autistic Empowerment, and Postnormal Possibilities</i>. Autonomous Press.</p>
            <p>12. Armstrong, T. (2011). <i>The Power of Neurodiversity: Unleashing the Advantages of Your Differently Wired Brain</i>. Da Capo Lifelong Books.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Buntinx, W. H. E., & Schalock, R. L. (2010). Models of disability, quality of life, and individualized supports: Implications for professional practice in intellectual disability. <i>Journal of Policy and Practice in Intellectual Disabilities</i>.</li>
            <li>Silvers, A. (1998). Formal justice. In <i>Disability, Difference, Discrimination: Perspectives on Justice in Bioethics and Public Policy</i>. Rowman & Littlefield.</li>
            <li>United Nations. (2006). <i>Convention on the Rights of Persons with Disabilities</i>. UN General Assembly.</li>
            <li>Wehmeyer, M. L., et al. (2008). The social ecology of the disability experience. In <i>The Social Ecology of Autism Spectrum Disorders</i>. Springer.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}