import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { MessageSquare, Ear, RefreshCcw, BookOpen, Users, Brain, Activity, Volume2, ShieldAlert, CheckCircle, Globe, Lightbulb } from 'lucide-react';

interface DLDOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DLDOverview({ setCurrentArticle, initialTab }: DLDOverviewProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'definition');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          DLD: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About DLD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('dld')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About DLD
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
          Definition & Profiles
        </button>
        <button
          onClick={() => setActiveTab('impact')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'impact'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Impact & Overlap
        </button>
        <button
          onClick={() => setActiveTab('prognosis')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'prognosis'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Prevalence & Outlook
        </button>
      </div>

      {/* ==========================================
          TAB 1: DEFINITION & PROFILES
      ========================================== */}
      {activeTab === 'definition' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Definition Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">What is DLD?</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-overview-definition.webp"
              alt="Child speaking and attempting to form complex sentences"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              Developmental Language Disorder (DLD) is a neurodevelopmental condition that significantly impairs how an individual learns, understands, and uses language across spoken, written, and sign modalities.<sup className="text-[#10b981] font-bold ml-0.5">1</sup> 
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Crucially, these language difficulties persist despite the child having adequate opportunities to learn, and they cannot be explained by other conditions such as autism, intellectual disability, or hearing loss. It is a specific, primary deficit in language acquisition.<sup className="text-[#10b981] font-bold ml-0.5">2</sup>
            </p>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 clear-both">
              <h3 className="text-[#0c264d] font-bold mb-2 text-sm border-b border-[#2abcd4] border-opacity-20 pb-2">The CATALISE Consensus</h3>
              <p className="text-xs text-slate-700 leading-relaxed mb-2">
                For decades, the medical and educational fields lacked agreement on what to call this condition. In 2017, an international consortium of experts (CATALISE) reached a historic consensus to officially adopt the term "Developmental Language Disorder," replacing confusing, outdated labels like "Specific Language Impairment (SLI)."<sup className="text-[#10b981] font-bold ml-0.5">3</sup>
              </p>
            </div>
          </div>

          {/* Profiles Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Types and Language Profiles</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-overview-history-hero.webp"
              alt="Visual representation of different language domains"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Language is highly complex, involving vocabulary, grammar, and social pragmatics. Because of this, DLD does not look exactly the same in every child. It generally manifests in one of three primary profiles affecting distinct domains of language.<sup className="text-[#10b981] font-bold ml-0.5">4</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-[#f0f9ff] p-3 rounded-full border border-[#2abcd4] border-opacity-30 mb-3">
                  <Volume2 className="text-[#0A9DC4] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Expressive DLD</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Primary difficulties lie in producing language. The child may understand what is said to them relatively well, but struggles severely to find words, construct grammatical sentences, or tell a cohesive story.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-[#fffbeb] p-3 rounded-full border border-[#ffd166] border-opacity-50 mb-3">
                  <Ear className="text-[#d4a017] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Receptive DLD</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Primary difficulties lie in understanding language. The child struggles to process verbal information, follow multi-step directions, or grasp the meaning of complex vocabulary. This profile often has a more severe functional impact.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-blue-50 p-3 rounded-full border border-[#0c264d] border-opacity-20 mb-3">
                  <RefreshCcw className="text-[#0c264d] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Mixed Receptive-Expressive</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The most common clinical presentation. The individual experiences significant difficulties with both interpreting incoming language and generating outgoing verbal expression.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: IMPACT & OVERLAP
      ========================================== */}
      {activeTab === 'impact' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Impact Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Impact on Daily Life</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-overview-impact.webp"
              alt="Student showing frustration with multi-step directions"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Because language forms the foundation of human connection and formal education, the ripple effects of DLD touch nearly every aspect of a child's day. It is vital to recognize that DLD is a persistent, lifelong condition, not simply "late talking" that a child will just naturally outgrow.<sup className="text-[#10b981] font-bold ml-0.5">5</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <BookOpen className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Academic Impact</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Severe difficulties learning new vocabulary and grasping concepts. Because reading is fundamentally a language task, reading comprehension and written expression are heavily impaired, leading to lower achievement across all subjects.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Users className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Social & Emotional Toll</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Difficulty keeping up with fast-paced peer conversations leads to social isolation, loneliness, and a significantly increased risk of bullying. Over time, this chronic miscommunication severely damages self-esteem.<sup className="text-[#10b981] font-bold ml-0.5">6</sup></p>
                </div>
              </div>
            </div>
          </div>

          {/* Co-occurring Conditions Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Co-occurring Conditions</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-overview-overlap-hero.webp"
              alt="Venn diagram showing DLD overlapping with Dyslexia and ADHD"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Neurodevelopmental conditions rarely exist in isolation. DLD frequently shares biological etiology with other learning and developmental profiles, meaning students often navigate multiple diagnoses simultaneously.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <BookOpen className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Dyslexia</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">A massive overlap exists between DLD and Dyslexia. While Dyslexia primarily impacts phonological processing (decoding words), DLD impacts broader language comprehension and grammar.<sup className="text-[#10b981] font-bold ml-0.5">7</sup></p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Activity className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">ADHD</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Attention difficulties and executive function deficits frequently co-occur, further complicating the child's ability to focus on and process complex incoming verbal instructions.<sup className="text-[#10b981] font-bold ml-0.5">8</sup></p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <MessageSquare className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Speech Disorders</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">DLD is distinct from Speech Sound Disorders (which impact articulation/pronunciation), but the two can present together, making the child's output both grammatically flawed and physically difficult to understand.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: PREVALENCE & OUTLOOK
      ========================================== */}
      {activeTab === 'prognosis' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Prevalence Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Prevalence & The Hidden Reality</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-overview-prevalence.webp"
              alt="Classroom graphic showing 1-2 children out of 30 having DLD"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Despite being incredibly common, DLD is often referred to as a "hidden condition." Children with DLD look perfectly neurotypical, and their language deficits are frequently misinterpreted by teachers as poor listening skills, lack of attention, or low intelligence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-3">
                <Globe className="text-[#0c264d] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">A Universal Condition</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">DLD affects approximately 7% to 10% of children globally, making it a universal condition across all languages and cultures. Statistically, this means 1 to 2 children in every standard classroom have DLD.<sup className="text-[#10b981] font-bold ml-0.5">9</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-3">
                <ShieldAlert className="text-[#0c264d] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">The Awareness Gap</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Despite being vastly more common than Autism (which affects ~2%), public awareness of DLD remains staggeringly low, leading to high rates of misdiagnosis and lack of early intervention.<sup className="text-[#10b981] font-bold ml-0.5">10</sup></p>
                </div>
              </div>
            </div>
          </div>

          {/* Outlook Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Prognosis and Long-term Outcomes</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-overview-prognosis-hero.webp"
              alt="Adult successfully engaging in a workplace setting with accommodations"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              While early speech therapy cannot "cure" DLD, targeted intervention dramatically rewires how the brain accesses language, providing critical tools for academic survival and social connection. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] flex items-start gap-3">
                <Brain className="text-[#d4a017] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Lifelong Persistence</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">DLD is a persistent condition. While the obvious grammatical errors of childhood may fade, adults with DLD continue to experience underlying difficulties with processing speed, complex text comprehension, and rapid word retrieval.<sup className="text-[#10b981] font-bold ml-0.5">11</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] flex items-start gap-3">
                <CheckCircle className="text-[#d4a017] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Paths to Success</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">With consistent academic accommodations, self-advocacy, and career choices that balance language demands with other cognitive strengths, adults with DLD lead highly successful, independent, and fulfilling lives.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About DLD
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
            <p>1. Bishop, D. V. M., Snowling, M. J., Thompson, P. A., Greenhalgh, T., & CATALISE consortium. (2017). Phase 2 of CATALISE: A multinational and multidisciplinary Delphi consensus study of problems with language development: Terminology. <i>Journal of Child Psychology and Psychiatry</i>. <a href="https://doi.org/10.1111/jcpp.12721" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">doi:10.1111/jcpp.12721</a></p>
            <p>2. Leonard, L. B. (2014). <i>Children with specific language impairment</i> (2nd ed.). MIT Press.</p>
            <p>3. Bishop, D. V. M., Snowling, M. J., Thompson, P. A., Greenhalgh, T., & CATALISE-2 consortium. (2016). CATALISE: A multinational and multidisciplinary Delphi consensus study. Identifying language impairments in children. <i>PLoS ONE</i>. <a href="https://doi.org/10.1371/journal.pone.0158753" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">doi:10.1371/journal.pone.0158753</a></p>
            <p>4. Tomblin, J. B., & Zhang, X. (2006). The dimensionality of language ability in school-age children. <i>Journal of Speech, Language, and Hearing Research</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/17197491/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 17197491</a></p>
            <p>5. Bishop, D. V. M. (1997). <i>Uncommon understanding: Development and disorders of language comprehension in children</i>. Psychology Press.</p>
            <p>6. Conti-Ramsden, G., & Botting, N. (2004). Social difficulties and victimization in children with SLI at 11 years of age. <i>Journal of Speech, Language, and Hearing Research</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/15072535/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 15072535</a></p>
            <p>7. Catts, H. W., Fey, M. E., Tomblin, J. B., & Zhang, X. (2002). A longitudinal investigation of reading outcomes in children with language impairments. <i>Journal of Speech, Language, and Hearing Research</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/12546483/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 12546483</a></p>
            <p>8. Mueller, K. L., & Tomblin, J. B. (2012). Examining the comorbidity of language disorders and ADHD. <i>Topics in Language Disorders</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/25505812/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 25505812</a></p>
            <p>9. Tomblin, J. B., Records, N. L., Buckwalter, P., Zhang, X., Smith, E., & O'Brien, M. (1997). Prevalence of specific language impairment in kindergarten children. <i>Journal of Speech, Language, and Hearing Research</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/9430746/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 9430746</a></p>
            <p>10. Bishop, D. V. M. (2010). Which neurodevelopmental disorders get researched and why? <i>PLoS ONE</i>. <a href="https://doi.org/10.1371/journal.pone.0015112" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">doi:10.1371/journal.pone.0015112</a></p>
            <p>11. Clegg, J., Hollis, C., Mawhood, L., & Rutter, M. (2005). Developmental language disorders—a follow-up in later adult life. <i>Journal of Child Psychology and Psychiatry</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/15679523/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 15679523</a></p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Rice, M. L. (2013). Language growth and genetics of specific language impairment. <i>International Journal of Speech-Language Pathology</i>. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3684183/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID:684183</a></li>
            <li>McGregor, K. K., Goffman, L., Van Horne, A. O., Hogan, T. P., & Finestack, L. H. (2020). Developmental language disorder: Applications for advocacy, research, and clinical service. <i>Perspectives of the ASHA Special Interest Groups</i>. <a href="https://doi.org/10.1044/2019_PERSP-19-00083" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">doi:10.1044/2019_PERSP-19-00083</a></li>
            <li>Law, J., Garrett, Z., & Nye, C. (2004). The efficacy of treatment for children with developmental speech and language delay/disorder: A meta-analysis. <i>Journal of Speech, Language, and Hearing Research</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/15324296/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 15324296</a></li>
            <li>Conti-Ramsden, G., Durkin, K., Simkin, Z., & Knox, E. (2009). Specific language impairment and school outcomes. I: Identifying and explaining variability at the end of compulsory education. <i>International Journal of Language & Communication Disorders</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/18608604/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 18608604</a></li>
          </ul>
        </div>
      </div>

    </article>
  );
}