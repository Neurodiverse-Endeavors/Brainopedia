import { ImageWithFallback } from "../../../figma/ImageWithFallback";

/* ─── THE GUEST LIST (Interface) ─── */
interface EducationEmploymentContentProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function EducationEmploymentContent({ setCurrentArticle }: EducationEmploymentContentProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-fadeIn">
      <section className="mb-10">
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">
            Education & Employment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            
            {/* Higher Education Card */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Higher Education</h3>
              </div>
              
              <div className="mx-auto w-32 md:w-64 mb-4">
              <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-EEtab-college.webp" 
                    alt="Graphic representing higher education and college life"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Increasing numbers of autistic students are pursuing college degrees, bringing deep focus and original thinking to academia:<sup>1</sup>
              </p>
              <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
                <li><strong>Strengths:</strong> Intense dedication to subjects of interest and a high aptitude for detailed research.</li>
                <li><strong>Challenges:</strong> Managing the "hidden curriculum" of college social life and the executive function demands of unstructured schedules.</li>
                <li><strong>Supports:</strong> Accessing disability services for accommodations like extended testing time, quiet testing environments, or note-taking assistance.</li>
              </ul>
            </div>

            {/* Employment Card */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Employment & The Workplace</h3>
              </div>
              
              <div className="mx-auto w-32 md:w-64 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-EEtab-workplace.webp" 
                    alt="Graphic representing employment and the workplace"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Autistic adults face disproportionately high rates of un- and underemployment, despite possessing valuable skills. Standard interview processes often screen out capable autistic candidates by prioritizing neurotypical social skills over job-related competencies.<sup>2</sup>
              </p>

              {/* Nested Barrier/Accommodation Boxes */}
              <div className="space-y-4 mb-4 mt-2">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Common Barriers</h4>
                  <ul className="text-xs space-y-1 text-gray-700">
                    <li>• Sensory-hostile open office plans</li>
                    <li>• Unwritten social rules and office politics</li>
                    <li>• Vague or ambiguous instructions</li>
                    <li>• The social demands of networking</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-[#10b981]">
                  <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Effective Accommodations</h4>
                  <ul className="text-xs space-y-1 text-gray-700">
                    <li>• Flexible or remote work options<sup>3</sup></li>
                    <li>• Written rather than verbal instructions</li>
                    <li>• Sensory-friendly workspaces</li>
                    <li>• Explicit, clear feedback loops</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 italic text-xs mt-auto">
                Note: Many autistic individuals find significant success through self-employment, allowing them to curate their own environment and schedule around their specific needs.
              </p>
            </div>

          </div>
        </div>
      </section>

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
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b-2 border-[#10b981] pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Van Hees, V., et al. (2015). Higher education experiences of students with autism spectrum disorder: Challenges, benefits and support needs. <i>Journal of Autism and Developmental Disorders</i>.</p>
            <p>2. Hurley-Hanson, A. E., et al. (2020). Extreme loneliness: The status of the autistic workforce. <i>Journal of Business and Management</i>.</p>
            <p>3. Gurbuz, N., et al. (2019). Employment outcomes for autistic adults: Enablers and barriers to employment. <i>Autism</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b-2 border-[#2abcd4] pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Autistic Self Advocacy Network (ASAN). Transition to Adulthood: A Health Care Guide for Youth and Families.</li>
            <li>Job Accommodation Network (JAN). Accommodation and Compliance Series: Autism Spectrum.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}