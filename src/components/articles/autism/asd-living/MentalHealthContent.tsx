import { ASDComorbidities } from '../../../infographics/ASDComorbidities';
import { ImageWithFallback } from "../../../figma/ImageWithFallback";

/* ─── THE GUEST LIST (Interface) ─── */
interface MentalHealthContentProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function MentalHealthContent({ setCurrentArticle }: MentalHealthContentProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-fadeIn">
      <section className="mb-10">
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">
            Mental Health & Wellbeing
          </h2>

          <div className="space-y-8 mt-6">
            <div>
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Co-occurring Conditions</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Autistic individuals often experience co-occurring mental health conditions. These are frequently not 
                "part of autism" itself, but rather a result of the chronic stress of living in a world not 
                designed for neurodivergent needs.
              </p>

              {/* Your Infographic */}
              <div className="flex justify-center my-10 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <ASDComorbidities />
              </div>

              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li><strong>Anxiety:</strong> 40-50% prevalence. Often related to social unpredictability or sensory overwhelm.<sup>1</sup></li>
                <li><strong>Depression:</strong> 20-37% prevalence. Frequently linked to the exhaustion of "masking."<sup>2</sup></li>
                <li><strong>ADHD:</strong> 30-60% prevalence. Significant overlap in executive function challenges.<sup>3</sup></li>
                <li><strong>OCD:</strong> 17-37% prevalence. Distinct from, but often co-occurring with, autistic repetitive behaviors.<sup>4</sup></li>
                <li><strong>Sleep Disorders:</strong> 40-83% prevalence. Affects overall emotional regulation and daily functioning.<sup>5</sup></li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              
              {/* Threats to Wellbeing Card */}
              <div className="border-t-4 border-[#2abcd4] rounded-md p-5 bg-white shadow-sm flex flex-col">
                <div className="text-center">
                  <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Threats to Wellbeing</h3>
                </div>
                
                <div className="mx-auto w-40 mb-4">
                  <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                    <ImageWithFallback 
                      src="/images/autism/autism-living-MHandWtab-head-sideview.webp" 
                      alt="Side profile of a head representing mental health threats"
                    />
                  </div>
                </div>

                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• <strong>Masking:</strong> Suppressing traits to fit in, leading to burnout.</li>
                  <li>• <strong>Invalidation:</strong> Being told your sensory struggles "aren't real."</li>
                  <li>• <strong>Lack of Autonomy:</strong> Feeling a lack of control over one's environment.</li>
                </ul>
              </div>

              {/* Protective Factors Card */}
              <div className="border-t-4 border-[#10b981] rounded-md p-5 bg-white shadow-sm flex flex-col">
                <div className="text-center">
                  <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Protective Factors</h3>
                </div>
                
                <div className="mx-auto w-40 mb-4">
                  <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                    <video 
                      src="/images/autism/autism-living-MHandWtab-female-motion.mp4" 
                      poster="/images/autism/autism-living-MHandWtab-female-motion.webp"
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-auto block"
                      aria-label="Abstract figure in motion representing protective factors"
                    />
                  </div>
                </div>

                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• <strong>Neuro-Affirming Support:</strong> Care that respects autistic ways of being.</li>
                  <li>• <strong>Special Interests:</strong> Using deep passions for regulation and joy.</li>
                  <li>• <strong>Community:</strong> Connection with other autistic people.</li>
                </ul>
              </div>

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
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Hollocks, M. J., et al. (2019). Anxiety and depression in adults with autism spectrum disorder: a systematic review and meta-analysis. <i>Psychological Medicine</i>.</p>
            <p>2. Hudson, C. C., et al. (2019). Prevalence of depressive disorders in individuals with autism spectrum disorder: a meta-analysis. <i>Journal of Abnormal Child Psychology</i>.</p>
            <p>3. Leitner, Y. (2014). The co-occurrence of autism and attention deficit hyperactivity disorder in children–what do we know? <i>Frontiers in Human Neuroscience</i>.</p>
            <p>4. Meier, S. M., et al. (2015). Obsessive-compulsive disorder and autism spectrum disorders: longitudinal and offspring risk. <i>PLoS One</i>.</p>
            <p>5. Carmassi, C., et al. (2019). Systematic review of sleep disturbances and circadian sleep desynchronization in autism spectrum disorder: Toward an integrative and comprehensive model. <i>Frontiers in Psychiatry</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Academic Autism Spectrum Partnership in Research and Education (AASPIRE). Healthcare Toolkit.</li>
            <li>Autistic Women & Nonbinary Network (AWN). Mental Health and Autism.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}