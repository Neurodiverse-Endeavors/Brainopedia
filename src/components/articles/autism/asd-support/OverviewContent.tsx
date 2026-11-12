import { ImageWithFallback } from "../../../figma/ImageWithFallback";
import { Sparkles, CheckCircle, Heart, TrendingUp, Shield, MessageCircle, Target, MessageSquare, Sliders, Users } from 'lucide-react';

interface OverviewContentProps {
  setCurrentArticle?: (article: string) => void;
}

export function OverviewContent({ setCurrentArticle }: OverviewContentProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      
      {/* Introduction */}
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support Philosophy & Approach</h2>
        
        <p className="mb-4 text-slate-700 leading-relaxed text-sm">
          Support for autistic individuals should be individualized, strengths-based, and centered on improving 
          quality of life rather than simply reducing autistic traits.<sup>1</sup> The goal is to help autistic 
          people thrive as themselves, not to make them "indistinguishable from their peers."<sup>1</sup> Effective 
          support respects neurodiversity while providing accommodations and skills to navigate a neurotypical world.
        </p>

        {/* Level 3 / High Support Needs Acknowledgement */}
        <div className="bg-slate-50 border-l-4 border-[#10b981] p-4 mb-4 rounded-r-md shadow-sm">
          <p className="text-slate-700 text-sm leading-relaxed">
            <strong>Acknowledging Profound Support Needs:</strong> Embracing neurodiversity does not mean minimizing severe disability. For individuals with Level 3 autism, "thriving" often requires intensive, 24/7 care to ensure physical safety, manage severe dysregulation (such as self-injury or elopement), and rigorously investigate underlying medical pain that cannot be verbally communicated. Validating the autistic neurotype includes validating the immense, daily realities of profound disability.
          </p>
        </div>
   
        {/* --- CENTERED GRAPHIC SECTION 1 --- */} 
        <ImageWithFallback 
          src="/images/autism/autism-support-Overvtab-philosph.webp" 
          alt="abstract painting of philosophy and support"
          className="block mx-auto w-96 max-w-full h-auto mb-8 mt-6 rounded-lg shadow-md border border-[#2abcd4]"
        /> 
      
        {/* CORE PRINCIPLES MINI CARDS */}
        <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mb-4 shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-5 text-xl border-b border-gray-100 pb-2">Core Support Principles</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Principle 1: Cyan Square */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Presume Competence</h4>
              <p className="text-sm text-slate-700 leading-relaxed">Assume understanding and potential even when not immediately obvious.<sup>2</sup></p>
            </div>

            {/* Principle 2: Gold/Navy Square */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#ffd166]/20 text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#ffd166] border-opacity-50 mb-4">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Respect Autonomy</h4>
              <p className="text-sm text-slate-700 leading-relaxed">Heavily support individual choice-making and self-determination.<sup>3</sup></p>
            </div>

            {/* Principle 3: Green Square */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#f0fdf4] text-[#10b981] flex items-center justify-center shrink-0 shadow-sm border border-[#bbf7d0] mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Focus on Quality of Life</h4>
              <p className="text-sm text-slate-700 leading-relaxed">Prioritize joy, comfort, and regulation, not just skill acquisition or behavior reduction.</p>
            </div>

            {/* Principle 4: Cyan Square */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Build on Strengths</h4>
              <p className="text-sm text-slate-700 leading-relaxed">Leverage special interests and deep passions for learning and engagement.</p>
            </div>

            {/* Principle 5: Gold/Navy Square */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#ffd166]/20 text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#ffd166] border-opacity-50 mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Accept Autistic Ways</h4>
              <p className="text-sm text-slate-700 leading-relaxed">Do not target harmless regulatory behaviors like stimming.</p>
            </div>

            {/* Principle 6: Green Square */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#f0fdf4] text-[#10b981] flex items-center justify-center shrink-0 shadow-sm border border-[#bbf7d0] mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Listen to Autistic Voices</h4>
              <p className="text-sm text-slate-700 leading-relaxed">Always center autistic perspectives in care decisions and frameworks.<sup>4</sup></p>
            </div>

            {/* Principle 7: Cyan Square */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Teach to the Individual</h4>
              <p className="text-sm text-slate-700 leading-relaxed">Recognize that one size does not fit all; adapt to their unique neurotype.</p>
            </div>

            {/* Principle 8: Gold/Navy Square */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#ffd166]/20 text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#ffd166] border-opacity-50 mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Support Communication</h4>
              <p className="text-sm text-slate-700 leading-relaxed">Provide immediate access to AAC and communication methods that work for them.</p>
            </div>

            {/* Principle 9: Green Square */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#f0fdf4] text-[#10b981] flex items-center justify-center shrink-0 shadow-sm border border-[#bbf7d0] mb-4">
                <Sliders className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Sensory Environments</h4>
              <p className="text-sm text-slate-700 leading-relaxed">Reduce physical barriers rather than expecting constant sensory adaptation.</p>
            </div>

            {/* Principle 10: Cyan Square */}
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-[#0c264d] font-bold text-sm mb-2">Promote Inclusion</h4>
              <p className="text-sm text-slate-700 leading-relaxed">Support active, meaningful participation in community life.<sup>3</sup></p>
            </div>

          </div>
        </div>
      </div>
      
      {/* Unsupported & Harmful Approaches */}
      <div className="mt-12">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Red Flags: Approaches to Avoid</h2>
        
        <div className="bg-white rounded-md border-2 border-[#be185d] p-6 mb-6 shadow-sm">
          <h3 className="text-center text-[#be185d] font-bold mb-4 text-lg">Unsupported Therapeutic Practices</h3>
          <div className="space-y-4 text-sm text-slate-700">
            <div className="bg-[#fff0f0] p-4 rounded">
              <p><strong>Conversion/Compliance-focused Interventions:</strong> Therapies that prioritize forcing a child to act "indistinguishable from peers" (such as suppressing harmless stimming or forcing eye contact) rather than focusing on the child's internal regulation. These have been heavily linked to severe mental health declines and PTSD.<sup>5</sup></p>
            </div>
            <div className="bg-[#fff0f0] p-4 rounded">
              <p><strong>Facilitated Communication (FC):</strong> A discredited practice where a "facilitator" guides the hand or arm of a non-speaking individual. Systematic reviews have consistently found no evidence that the messages are authored by the autistic person, demonstrating instead that they reflect the facilitator's thoughts.<sup>6</sup></p>
            </div>
          </div>
        </div>

        {/* Pointer to Biomedical Tiers */}
        <div className="bg-[#f0f9ff] rounded-md border border-[#2abcd4] p-6 mb-4 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Beware of Medical "Cures"</h3>
            <p className="text-sm text-slate-700 max-w-2xl leading-relaxed">
              Autism is a neurodevelopmental difference, not a disease. Always be highly skeptical of clinics or practitioners selling biomedical protocols (like Chelation or MMS/Bleach) that promise to "cure" or "recover" a child. 
            </p>
          </div>
          <button 
            onClick={() => setCurrentArticle?.('autism-biomedical-tiers')}
            className="bg-[#2abcd4] hover:bg-[#0c264d] text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 whitespace-nowrap text-sm shadow-sm shrink-0"
          >
            View Evidence Tiers
          </button>
        </div>
    
        {/* --- CENTERED GRAPHIC SECTION 2 --- */} 
        <ImageWithFallback 
          src="/images/autism/autism-support-Overvtab-harmful.webp" 
          alt="doctor explaining approaches photo"
          className="block mx-auto w-96 max-w-full h-auto mb-8 mt-8 rounded-lg shadow-md border border-[#be185d]"
        /> 
             
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
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Leadbitter, K., et al. (2021). Autistic Self-Advocacy and the Neurodiversity Movement: Implications for Autism Early Intervention Research and Practice. <i>Frontiers in Psychology</i>.</p>
            <p>2. Biklen, D., & Burke, J. (2006). Presuming Competence. <i>Equity & Excellence in Education</i>, 39(2), 166-175.</p>
            <p>3. Wehmeyer, M. L., et al. (2010). Self-Determination and Individuals with Severe Disabilities: Re-evaluating Meanings and Misinterpretations. <i>Research and Practice for Persons with Severe Disabilities</i>, 35(1-2), 29-35.</p>
            <p>4. Fletcher-Watson, S., et al. (2019). Making the future together: Shaping autism research through meaningful participation. <i>Autism</i>, 23(4), 943-953.</p>
            <p>5. Kupferstein, H. (2018). Evidence of increased PTSD symptoms in autistics exposed to applied behavior analysis. <i>Advances in Autism</i>, 4(1), 19-29.</p>
            <p>6. Hemsley, B., et al. (2018). Systematic review of facilitated communication 2014-2018 finds no new evidence that messages delivered using facilitated communication are authored by the person with disability. <i>Autism & Developmental Language Impairments</i>, 3.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>AANE (Asperger/Autism Network). <i>Navigating Autism Therapies and Interventions</i>.</li>
            <li>Autistic Self Advocacy Network (ASAN). <i>Position Statements on Support and Treatments</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}