import { ImageWithFallback } from "../../../figma/ImageWithFallback";

interface TherapiesContentProps {
  setCurrentArticle?: (article: string) => void;
}

export function TherapiesContent({ setCurrentArticle }: TherapiesContentProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Therapeutic Interventions</h2>
      
      <p className="mb-6 text-sm leading-relaxed text-gray-700">
        Various therapeutic interventions can support autistic individuals across the lifespan. The most beneficial 
        approach is highly individualized and should be based on the person's specific strengths, challenges, and 
        goals—not on trying to make someone appear less autistic.<sup>1, 2</sup>
      </p>

      {/* --- CENTERED GRAPHIC SECTION 1 --- */} 
      <div className="text-center w-full mb-8"> 
        <div className="mx-auto w-64">
          <div className="rounded-lg shadow-md overflow-hidden bg-white">
            <ImageWithFallback 
              src="/images/autism/autism-support-TTtab-acronyms.webp" 
              alt="4 examples of therapies with acronyms"
            /> 
          </div>
        </div> 
      </div>

      {/* SPEECH THERAPY */}
      <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-6 flex flex-col sm:flex-row-reverse gap-6 items-center sm:items-start">
        <div className="w-64 flex-shrink-0">
          <div className="rounded-lg shadow-sm overflow-hidden bg-white">
            <ImageWithFallback 
              src="/images/autism/autism-support-TTtab-SLP.webp" 
              alt="Speech and Language Therapy graphic"
            />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Speech and Language Therapy</h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-700">
            Speech-language pathologists (SLPs) help with all forms of communication—verbal, nonverbal, and alternative.<sup>9</sup> They work on expressive and receptive language, pragmatic (social) language skills, and may provide AAC systems for nonspeaking individuals or address feeding difficulties related to sensory processing.
          </p>
          <button 
            onClick={() => setCurrentArticle?.('autism-speech-therapy')} 
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold inline-block"
          >
            Read more →
          </button>
        </div>
      </div>

      {/* OCCUPATIONAL THERAPY */}
      <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-6 flex flex-col sm:flex-row-reverse gap-6 items-center sm:items-start">
        <div className="w-64 flex-shrink-0">
          <div className="rounded-lg shadow-sm overflow-hidden bg-white">
            <ImageWithFallback 
              src="/images/autism/autism-support-TTtab-OT.webp" 
              alt="Occupational Therapy graphic"
            />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Occupational Therapy (OT)</h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-700">
            Occupational therapists help with sensory processing, motor coordination, self-care skills, and participation in daily activities.<sup>5, 6</sup> They may work on sensory integration, fine and gross motor skills, executive functioning strategies, and identifying helpful accommodations like sensory tools or environmental modifications.
          </p>
          <button 
            onClick={() => setCurrentArticle?.('autism-occupational-therapy')} 
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold inline-block"
          >
            Read more →
          </button>
        </div>
      </div>

      {/* ABA THERAPY */}
      <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-6 flex flex-col sm:flex-row-reverse gap-6 items-center sm:items-start">
        <div className="w-64 flex-shrink-0">
          <div className="rounded-lg shadow-sm overflow-hidden bg-white">
            <ImageWithFallback 
              src="/images/autism/autism-support-TTtab-ABA.webp" 
              alt="Applied Behavior Analysis graphic"
            />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Applied Behavior Analysis (ABA)</h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-700">
            ABA uses behavioral principles to teach skills and is one of the most researched autism interventions. However, it's also controversial—many autistic adults report trauma from compliance-focused ABA that targeted harmless autistic behaviors.<sup>4</sup> Modern approaches emphasize naturalistic, play-based methods that respect autonomy and neurodiversity.<sup>2</sup>
          </p>
          <button 
            onClick={() => setCurrentArticle?.('autism-aba-therapy')} 
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold inline-block"
          >
            Read more →
          </button>
        </div>
      </div>

      {/* SOCIAL SKILLS SUPPORT */}
      <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-6 flex flex-col sm:flex-row-reverse gap-6 items-center sm:items-start">
        <div className="w-64 flex-shrink-0">
          <div className="rounded-lg shadow-sm overflow-hidden bg-white">
            <ImageWithFallback 
              src="/images/autism/autism-support-TTtab-SS.webp" 
              alt="Social Skills Support graphic"
            />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Skills Support</h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-700">
            Social skills interventions teach interaction strategies while respecting autistic communication styles.<sup>3</sup> This includes social skills groups, peer-mediated interventions, social stories, and video modeling. Neurodiversity-informed approaches recognize the "double empathy problem"—that social challenges are bidirectional between autistic and non-autistic people.<sup>3</sup>
          </p>
          <button 
            onClick={() => setCurrentArticle?.('autism-social-skills')} 
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold inline-block"
          >
            Read more →
          </button>
        </div>
      </div>

      {/* MENTAL HEALTH SUPPORT */}
      <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-6 flex flex-col sm:flex-row-reverse gap-6 items-center sm:items-start">
        <div className="w-64 flex-shrink-0">
          <div className="rounded-lg shadow-sm overflow-hidden bg-white">
            <ImageWithFallback 
              src="/images/autism/autism-support-TTtab-MH.webp" 
              alt="Mental Health Support graphic"
            />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mental Health Support</h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-700">
            Autistic individuals have elevated rates of anxiety, depression, and other mental health conditions.<sup>7</sup> Autism-informed therapists adapt evidence-based approaches like CBT, ACT, and DBT for autistic thinking styles and sensory needs.<sup>7</sup> Trauma-informed care is especially important, as many autistic people have experienced bullying, abuse, or invalidating experiences.
          </p>
          <button 
            onClick={() => setCurrentArticle?.('autism-mental-health')} 
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold inline-block"
          >
            Read more →
          </button>
        </div>
      </div>

      {/* PHYSICAL THERAPY */}
      <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-6 flex flex-col sm:flex-row-reverse gap-6 items-center sm:items-start">
        <div className="w-64 flex-shrink-0">
          <div className="rounded-lg shadow-sm overflow-hidden bg-white">
            <ImageWithFallback 
              src="/images/autism/autism-support-TTtab-PT.webp" 
              alt="Physical Therapy graphic"
            />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Physical Therapy</h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-700">
            Physical therapy (PT) can be a valuable support for autistic individuals across all ages. Many autistic people experience differences in gross motor skills, muscle tone, balance, and gait — areas where a physical therapist specializes. Sessions are tailored to the individual's needs, with therapists mindful of sensory sensitivities during hands-on work. While PT is often most impactful when started early in childhood, it can be beneficial at any age.<sup>8</sup>
          </p>
          <button 
            onClick={() => setCurrentArticle?.('autism-physical-therapy')} 
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold inline-block"
          >
            Read more →
          </button>
        </div>
      </div>

      {/* Choosing the Right Approach */}
      <div className="mt-8 mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Choosing the Right Approach</h2>
        
        <p className="mb-6 text-sm leading-relaxed text-gray-700">
          Not every autistic person needs every type of therapy. The right combination depends on individual needs, goals, 
          and priorities.<sup>1, 2</sup>
        </p>

        {/* --- CENTERED GRAPHIC SECTION 2 --- */} 
        <div className="text-center w-full mb-8">  
          <div className="mx-auto w-64">
            <div className="rounded-lg shadow-md overflow-hidden bg-white">
              <ImageWithFallback 
                src="/images/autism/autism-support-TTtab-decisions.webp" 
                alt="decisions arrows pic - different directions"
              /> 
            </div>
          </div> 
        </div>

        <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Decision-Making Framework</h3>
          <p className="mb-6 text-sm leading-relaxed text-gray-700">
            Choosing therapeutic approaches requires thoughtful consideration of individual needs, preferences, and 
            circumstances. A person-centered framework prioritizes autonomy, quality of life, and respect for 
            neurodivergent ways of being.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Start with Priorities</h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">
                What skills or supports would most improve quality of life right now? Focus on meaningful goals 
                rather than conformity.
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Listen to Autistic Voices</h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">
                If the individual can communicate their preferences, center their input. Their lived experience 
                is invaluable.
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Consider Intensity</h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">
                More hours isn't always better. Balance therapy with rest, play, and family time to avoid 
                burnout and overwhelm.
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">♾️</span>
                <h4 className="text-[#0c264d] font-bold text-lg">Affirming Providers</h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">
                Seek therapists who respect autistic neurology and don't pathologize harmless differences like 
                stimming or special interests.
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">Monitor for Harm</h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">
                Watch for increased anxiety, shutdowns, loss of skills, or resistance to therapy. These are 
                signs something isn't working.
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-[#0c264d] font-bold text-lg">You Can Change Course</h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">
                Starting one approach doesn't mean you're locked in forever. Flexibility and adjustment are 
                part of the process.
              </p>
            </div>
          </div>
        </div>

        {/* --- CENTERED GRAPHIC SECTION 3 --- */} 
        <div className="text-center w-full mb-8">  
          <div className="mx-auto w-64">
            <div className="rounded-lg shadow-md overflow-hidden bg-white">
              <ImageWithFallback 
                src="/images/autism/autism-support-TTtab-redflags.webp" 
                alt="red flags flying outside symbolizing the idea of be wary when needed"
              /> 
            </div>
          </div> 
        </div>

        {/* Red Flags in Therapy */}
        <div className="bg-[#e0f7fa] p-6 rounded-lg mb-8">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Red Flags to Watch For</h3>
          
          <p className="mb-6 text-sm leading-relaxed text-gray-700">
            Some therapy goals and methods can be harmful. Be cautious of approaches that prioritize appearance 
            over well-being, or compliance over autonomy.<sup>2, 4</sup>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">Masking & Conformity</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Making person appear "less autistic"</li>
                <li>• "Indistinguishable from peers" goals</li>
                <li>• Targeting harmless stims or interests</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">Forced Discomfort</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Forcing eye contact</li>
                <li>• Forcing physical touch</li>
                <li>• Ignoring sensory boundaries</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">Punishment & Aversives</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Using punishment methods</li>
                <li>• Withholding necessities</li>
                <li>• Aversive conditioning</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="text-[#0c264d] font-bold mb-2 text-center text-sm">Dismissing Autonomy</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Prioritizing compliance over communication</li>
                <li>• Dismissing distress as "behavior"</li>
                <li>• Excluding individual from goal-setting</li>
              </ul>
            </div>
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
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Kapp, S. K. (Ed.). (2020). <i>Autistic community and the neurodiversity movement: Stories from the frontline</i>. Palgrave Macmillan.</p>
            <p>2. Pellicano, E., & den Houting, J. (2022). Annual research review: Shifting from 'normal science' to neurodiversity in autism science. <i>Journal of Child Psychology and Psychiatry</i>.</p>
            <p>3. Milton, D. E. (2012). On the ontological status of autism: the 'double empathy problem'. <i>Disability & Society</i>.</p>
            <p>4. Kupferstein, H. (2018). Evidence of increased PTSD symptoms in autistics exposed to applied behavior analysis. <i>Advances in Autism</i>.</p>
            <p>5. Bal, V. H., et al. (2015). Daily living skills in individuals with autism spectrum disorder from 2 to 21 years of age. <i>Autism</i>.</p>
            <p>6. Baranek, G. T., et al. (2006). Sensory experiences questionnaire: discriminating sensory features in young children with autism, developmental delays, and typical development. <i>Journal of Child Psychology and Psychiatry</i>.</p>
            <p>7. Wood, J. J., et al. (2009). Cognitive behavioral therapy for anxiety in children with autism spectrum disorders: a randomized, controlled trial. <i>Journal of Child Psychology and Psychiatry</i>.</p>
            <p>8. Gowen, E., & Hamilton, A. (2013). Motor abilities in autism: A review using a computational context. <i>Journal of Autism and Developmental Disorders</i>.</p>
            <p>9. American Speech-Language-Hearing Association (ASHA). (2023). <i>Augmentative and Alternative Communication (AAC) Practice Portal</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Autistic Self Advocacy Network (ASAN). Navigating Healthcare and Therapy Options.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}