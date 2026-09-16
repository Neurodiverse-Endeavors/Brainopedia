import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { MapPin, Activity, Home, Users, Heart, GraduationCap, Briefcase, Scale, MessageSquare, Brain, ShieldAlert, Lightbulb, CheckCircle, Handshake, Building, BookOpen } from 'lucide-react';

interface DLDLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DLDLiving({ setCurrentArticle, initialTab }: DLDLivingProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'daily');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Living with DLD
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
          onClick={() => setActiveTab('daily')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'daily'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Daily Life & Relationships
        </button>
        <button
          onClick={() => setActiveTab('career')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'career'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Education & Career
        </button>
        <button
          onClick={() => setActiveTab('wellbeing')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'wellbeing'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Well-being & Advocacy
        </button>
      </div>

      {/* ==========================================
          TAB 1: DAILY LIFE & RELATIONSHIPS
      ========================================== */}
      {activeTab === 'daily' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Daily Life Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Navigating Daily Challenges</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-living-daily.webp"
              alt="Person managing daily tasks and schedules"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Living with Developmental Language Disorder means operating in a world that assumes fast, effortless communication. Because DLD is a lifelong condition, independence comes from developing strong compensatory strategies to manage the daily cognitive load.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <MessageSquare className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Communication Hurdles</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Everyday tasks like following complex instructions or tracking fast-paced discussions require immense effort. Individuals often need extra time to organize their thoughts before speaking to avoid frustration.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Lightbulb className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Coping Strategies</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Success comes from actively asking for clarification or repetition, relying heavily on visual supports (like written lists and notes), and deliberately pausing to formulate responses.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Relationships Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Social Relationships</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-living-relationships-hero.webp"
              alt="Friends or a couple engaged in patient, understanding conversation"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Language barriers can make forming and maintaining relationships difficult. Missing social cues or struggling to articulate emotions can lead to misunderstandings, making patient communication partners essential.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <Users className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Friendships</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li><strong>Quality over quantity:</strong> Cultivating a few close, understanding friends is often more fulfilling than navigating large, noisy group dynamics.</li>
                  <li><strong>Shared interests:</strong> Connecting through structured activities or shared hobbies removes the pressure of pure unstructured conversation.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <Heart className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Romantic Relationships</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Requires a partner who is patient and values open communication over subtle hints.</li>
                  <li>Being explicit about DLD helps partners understand that miscommunications are neurological, not intentional.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <Handshake className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Family Support</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Educating extended family members about DLD prevents them from misinterpreting language struggles as rudeness or lack of interest.</li>
                </ul>
              </div>
            </div>
          </div>

{/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Conti-Ramsden, G., & Botting, N. (2004). Social difficulties and victimization in children with SLI at 11 years of age. <i>Journal of Speech, Language, and Hearing Research</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/15072535/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 15072535</a></li>
                <li>Jerome, A. C., Fujiki, M., Brinton, B., & James, S. L. (2002). Self-esteem in children with specific language impairment. <i>Journal of Speech, Language, and Hearing Research</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/12199400/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 12199400</a></li>
                <li>Fujiki, M., Brinton, B., & Clarke, D. (2002). Emotion regulation in children with specific language impairment. <i>Language, Speech, and Hearing Services in Schools</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/27764463/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 27764463</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: EDUCATION & CAREER
      ========================================== */}
      {activeTab === 'career' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Education Journey Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Educational Journey</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-living-education.webp"
              alt="Student utilizing accommodations in an educational setting"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Because formal education relies almost entirely on language processing, students with DLD require consistent, evolving support as they progress from elementary phonics to complex high school literature.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <BookOpen className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Primary & Secondary</h3>
                </div>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li><strong>Elementary:</strong> Heavy focus on speech-language therapy and explicit literacy support.</li>
                  <li><strong>Middle & High School:</strong> As content area demands increase, students rely on IEP or 504 accommodations like extended time and modified written assignments to access the curriculum.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <GraduationCap className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Higher Education</h3>
                </div>
                <ul className="list-disc ml-5 text-xs text-slate-700 space-y-2">
                  <li>Many students with DLD successfully attend college. Success requires registering early with Disability Services to secure accommodations.</li>
                  <li>Strategic major selection is key—choosing fields that emphasize hands-on or visual skills over heavy verbal reasoning.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Career Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Employment & Career</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-living-career-hero.webp"
              alt="Adult thriving in a structured or hands-on workplace environment"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Adults with DLD are highly capable employees. Thriving in the workplace involves choosing careers that align with their cognitive strengths and implementing clear communication strategies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Briefcase className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Career Considerations</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Carefully consider the rapid-fire communication requirements of a role.</li>
                  <li>Many individuals excel in technical, hands-on, or visual-spatial careers (like engineering, IT, design, or trades) where written communication is prioritized over verbal debate.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Building className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Workplace Strategies</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Request written instructions and follow-up emails rather than relying solely on verbal meetings.</li>
                  <li>Take detailed notes during discussions to reduce the load on working memory.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <ShieldAlert className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Disclosure & ADA</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Disclosing DLD is optional, but legally required if you wish to formally request workplace accommodations under the Americans with Disabilities Act.</li>
                </ul>
              </div>

            </div>
          </div>

{/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Conti-Ramsden, G., & Durkin, K. (2012). Postschool educational and employment experiences of young people with specific language impairment. <i>Language, Speech, and Hearing Services in Schools</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/22826369/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 22826369</a></li>
                <li>Clegg, J., Hollis, C., Mawhood, L., & Rutter, M. (2005). Developmental language disorders—a follow-up in later adult life. <i>Journal of Child Psychology and Psychiatry</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/15679523/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 15679523</a></li>
                <li>Conti-Ramsden, G., Durkin, K., Simkin, Z., & Knox, E. (2009). Specific language impairment and school outcomes. I: Identifying and explaining variability at the end of compulsory education. <i>International Journal of Language & Communication Disorders</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/18608604/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 18608604</a></li>
                <li>Americans with Disabilities Act of 1990, 42 U.S.C. § 12101 et seq. <a href="https://www.ada.gov/law-and-regs/ada/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">ADA.gov</a></li>
                <li>Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004). <a href="https://sites.ed.gov/idea/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">https://sites.ed.gov/idea/</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: WELL-BEING & ADVOCACY
      ========================================== */}
      {activeTab === 'wellbeing' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Emotional Well-being Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Mental Health & Well-being</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-living-wellbeing.webp"
              alt="Calming visual representing resilience and self-compassion"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The ongoing effort to process language in a fast-paced world takes a psychological toll. Protecting an individual's self-esteem and mental health is just as critical as speech therapy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Brain className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Emotional Impact</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The chronic frustration of being misunderstood or struggling academically often damages self-confidence. Adolescents and adults with DLD face significantly higher rates of social anxiety and depression.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Heart className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Building Resilience</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Resilience is built by celebrating progress rather than perfection. Access to supportive counseling, focusing heavily on individual strengths, and connecting with DLD support groups are essential protective factors.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Advocacy & Success Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Advocacy, Outcomes & Success</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-living-advocacy-hero.webp"
              alt="Confident individual advocating for their needs and thriving"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              DLD is a persistent condition, but it does not define a person's potential. Countless adults with DLD lead rich, independent, and successful lives by mastering self-advocacy and utilizing effective workarounds.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <MessageSquare className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Self-Advocacy</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Success starts with understanding your own DLD profile. Being able to calmly explain your condition and explicitly ask for what you need—whether it's written instructions or extra processing time—is your most powerful tool.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <CheckCircle className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Long-Term Outcomes</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">While language processing differences persist into adulthood, the overt symptoms often become much less obvious as the individual learns sophisticated compensatory strategies and leverages modern assistive technology.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Lightbulb className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Tips for Thriving</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Focus fiercely on what you *can* do. Play to your visual, spatial, or hands-on strengths. Surround yourself with patient people, use your accommodations without shame, and remember that DLD is only one part of your identity.</p>
              </div>

            </div>
          </div>
{/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>St Clair, M. C., Pickles, A., Durkin, K., & Conti-Ramsden, G. (2011). A longitudinal study of behavioral, emotional and social difficulties in individuals with a history of specific language impairment (SLI). <i>Journal of Communication Disorders</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/20970811/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 20970811</a></li>
                <li>McGregor, K. K., Goffman, L., Van Horne, A. O., Hogan, T. P., & Finestack, L. H. (2020). Developmental language disorder: Applications for advocacy, research, and clinical service. <i>Perspectives of the ASHA Special Interest Groups</i>. <a href="https://doi.org/10.1044/2019_PERSP-19-00083" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">doi:10.1044/2019_PERSP-19-00083</a></li>
                <li>Leonard, L. B. (2014). Children with specific language impairment (2nd ed.) MIT Press.</li>
                <li>American Speech-Language-Hearing Association. (n.d.). <i>Spoken language disorders</i>. <a href="https://www.asha.org/practice-portal/clinical-topics/spoken-language-disorders/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">ASHA Practice Portal</a></li>
                <li>Law, J., Garrett, Z., & Nye, C. (2004). The efficacy of treatment for children with developmental speech and language delay/disorder. <i>Journal of Speech, Language, and Hearing Research</i>. <a href="https://pubmed.ncbi.nlm.nih.gov/15324296/" target="_blank" rel="noopener noreferrer" className="text-[#2abcd4] hover:underline">PMID: 15324296</a></li>
              </ul>
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

    </article>
  );
}