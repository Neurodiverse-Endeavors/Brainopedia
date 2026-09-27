import { useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

const symptomData = [
  { category: 'Social Issues', value: 7, fullMark: 10 },
  { category: 'Communication', value: 6, fullMark: 10 },
  { category: 'Restricted Interests', value: 8, fullMark: 10 },
  { category: 'Sensory Processing', value: 9, fullMark: 10 },
  { category: 'Stimming', value: 5, fullMark: 10 },
  { category: 'Need for Routine', value: 8, fullMark: 10 },
  { category: 'Executive Function', value: 6, fullMark: 10 },
  { category: 'Motor Skills', value: 4, fullMark: 10 },
  { category: 'Anxiety', value: 7, fullMark: 10 },
  { category: 'Depression', value: 5, fullMark: 10 },
  { category: 'Dysregulation', value: 6, fullMark: 10 },
  { category: 'Posture Issues', value: 3, fullMark: 10 },
];

/* ─── THE GUEST LIST (Interface) ─── */
interface AdditionalCharacteristicsProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function AdditionalCharacteristics({ setCurrentArticle }: AdditionalCharacteristicsProps) {
  // State to track which accordion dropdown is open
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <article className="max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
       <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">Spectrum Profile Characteristics</h2>
        <div className="space-y-6">
          
   {/* Intro Graphic */}
          <img 
            src="/images/autism/autism-symptoms-AddChartab-rainbowcircle.webp" 
            alt="Rainbow circle graphic showing additional autistic characteristics"
            className="block mx-auto mb-6 w-48 h-auto rounded-xl shadow-md border-4 border-[#ffd166] object-contain"
          />

          <p className="mb-8 text-center leading-relaxed text-[#0c264d] max-w-2xl mx-auto">
            Autism is a highly dimensional spectrum. Rather than a linear scale from "mild" to "severe," 
            individuals experience a unique combination of characteristics across various categories:
          </p>

          {/* MOVED TO TOP: Static Symptom Wheel Image */}
          <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-8">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Symptom Profile Wheel</h3>
            <p className="mb-4 text-sm text-slate-700">
              Before diving into the specific traits below, here is a visual example of how an individual's symptom profile might look. Each slice represents a distinct characteristic category scored on a spectrum.
            </p>
            <ImageWithFallback 
              src="/images/autism/autism-symptoms-AddChartab-numberswheel.webp" 
              alt="Symptom profile wheel showing various trait scores"
              className="w-full max-w-md mx-auto mt-4 rounded shadow-sm"
            />
          </div>

          {/* ========================================= */}
          {/*           ACCORDION DROPDOWNS             */}
          {/* ========================================= */}

          {/* 1. Communication & Social Issues */}
          <div className="bg-white rounded-md border-l-4 border-[#0c264d] shadow-sm overflow-hidden">
            <button 
              onClick={() => toggleSection('communication')}
              className="w-full p-5 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
            >
              <h3 className="text-[#0c264d] font-bold text-lg m-0">Communication & Social Issues</h3>
              <svg className={`w-6 h-6 text-[#0c264d] transform transition-transform duration-200 ${expandedSection === 'communication' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSection === 'communication' && (
              <div className="px-5 pb-5 pt-2 border-t border-gray-50">
                <p className="mb-4 text-sm text-slate-700">Differences in pragmatic language, social interaction, and conversational patterns.</p>
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Communication</div>
                      <div className="text-sm">Challenges with the social use of language, literal interpretation, taking turns, or unusual prosody (robotic or flat tone).</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Social Issues</div>
                      <div className="text-sm">Difficulty navigating neurotypical social norms, making small talk, or experiencing "social hangover" from masking.</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2. Behavior, Routines & Interests */}
          <div className="bg-white rounded-md border-l-4 border-[#0c264d] shadow-sm overflow-hidden">
            <button 
              onClick={() => toggleSection('behavior')}
              className="w-full p-5 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
            >
              <h3 className="text-[#0c264d] font-bold text-lg m-0">Behavior, Routines & Interests</h3>
              <svg className={`w-6 h-6 text-[#0c264d] transform transition-transform duration-200 ${expandedSection === 'behavior' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSection === 'behavior' && (
              <div className="px-5 pb-5 pt-2 border-t border-gray-50">
                <p className="mb-4 text-sm text-slate-700">Intense passions, systemic thinking, and a strong preference for predictability.</p>
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Restricted Interests</div>
                      <div className="text-sm">Deep, highly focused passions for specific topics. Often leads to "monologuing" or vast expertise in niche subjects.</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Need for Routine</div>
                      <div className="text-sm">A strong reliance on predictable schedules. Sudden transitions, unexpected plans, or disrupted routines can cause significant distress.</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Stimming (Self-Stimulatory Behavior)</div>
                      <div className="text-sm">Repetitive physical movements or vocalizations (like hand-flapping, rocking, or repeating phrases) used to self-regulate, focus, or express joy.</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Demand Avoidance (PDA)</div>
                      <div className="text-sm">Often reframed as a <strong>Pervasive Drive for Autonomy</strong>. A nervous system response where everyday demands trigger a fight/flight reaction, requiring highly flexible, low-pressure environments.</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Sensory Processing */}
          <div className="bg-white rounded-md border-l-4 border-[#0c264d] shadow-sm overflow-hidden">
            <button 
              onClick={() => toggleSection('sensory')}
              className="w-full p-5 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
            >
              <h3 className="text-[#0c264d] font-bold text-lg m-0">Sensory Processing</h3>
              <svg className={`w-6 h-6 text-[#0c264d] transform transition-transform duration-200 ${expandedSection === 'sensory' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSection === 'sensory' && (
              <div className="px-5 pb-5 pt-2 border-t border-gray-50">
                <p className="mb-4 text-sm text-slate-700">Atypical ways of interpreting environmental inputs like sound, light, and touch.</p>
                <div className="space-y-3">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Sensory Processing Differences</div>
                      <div className="text-sm">Can manifest as <strong>hyper-reactivity</strong> (becoming overwhelmed by bright lights, loud noises, or specific textures) or <strong>hypo-reactivity</strong> (seeking out intense sensory input like deep pressure or loud music).</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 4. Executive Function Differences */}
          <div className="bg-white rounded-md border-l-4 border-[#0c264d] shadow-sm overflow-hidden">
            <button 
              onClick={() => toggleSection('exec')}
              className="w-full p-5 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
            >
              <h3 className="text-[#0c264d] font-bold text-lg m-0">Executive Function Differences</h3>
              <svg className={`w-6 h-6 text-[#0c264d] transform transition-transform duration-200 ${expandedSection === 'exec' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSection === 'exec' && (
              <div className="px-5 pb-5 pt-2 border-t border-gray-50">
                <p className="mb-4 text-sm text-slate-700">Challenges in cognitive management and self-regulation.<sup>1</sup></p>
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Executive Function</div>
                      <div className="text-sm">Difficulty planning multi-step tasks, holding working memory, organizing materials, or initiating open-ended tasks.</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Cognitive Flexibility</div>
                      <div className="text-sm">Challenges with shifting attention between tasks, adapting to sudden changes, or seeing alternative perspectives.</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 5. Emotional Regulation & Mental Health */}
          <div className="bg-white rounded-md border-l-4 border-[#0c264d] shadow-sm overflow-hidden">
            <button 
              onClick={() => toggleSection('emotional')}
              className="w-full p-5 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
            >
              <h3 className="text-[#0c264d] font-bold text-lg m-0">Emotional Regulation & Mental Health</h3>
              <svg className={`w-6 h-6 text-[#0c264d] transform transition-transform duration-200 ${expandedSection === 'emotional' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSection === 'emotional' && (
              <div className="px-5 pb-5 pt-2 border-t border-gray-50">
                <p className="mb-4 text-sm text-slate-700">How emotions are processed, recognized, and physically experienced.</p>
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Dysregulation</div>
                      <div className="text-sm">Experiencing emotions with extreme intensity, which can lead to involuntary meltdowns or non-responsive shutdowns when capacity is exceeded.</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Rejection Sensitive Dysphoria (RSD)</div>
                      <div className="text-sm">An intense, almost physical emotional pain triggered by perceived rejection, criticism, or failure. Often tied to a deep capacity for empathy and responsiveness.</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Anxiety</div>
                      <div className="text-sm">Highly prevalent in the autistic community, often stemming from sensory overload or the constant pressure to mask neurodivergent traits.</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Depression</div>
                      <div className="text-sm">Frequently co-occurs, sometimes due to autistic burnout, social isolation, or navigating an inaccessible world.</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 6. Motor Skills & Posture */}
          <div className="bg-white rounded-md border-l-4 border-[#0c264d] shadow-sm overflow-hidden">
            <button 
              onClick={() => toggleSection('motor')}
              className="w-full p-5 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
            >
              <h3 className="text-[#0c264d] font-bold text-lg m-0">Motor Skills & Posture</h3>
              <svg className={`w-6 h-6 text-[#0c264d] transform transition-transform duration-200 ${expandedSection === 'motor' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSection === 'motor' && (
              <div className="px-5 pb-5 pt-2 border-t border-gray-50">
                <p className="mb-4 text-sm text-slate-700">Challenges related to the physical body and spatial coordination.<sup>2</sup></p>
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Motor Skills</div>
                      <div className="text-sm">Challenges with gross motor (clumsiness, balance) or fine motor skills (handwriting, tying shoes). Dyspraxia is a common co-occurrence.</div>
                    </div>
                    <div className="border-l-2 border-[#2abcd4] pl-3">
                      <div className="font-bold text-[#0c264d] mb-1">Posture Issues</div>
                      <div className="text-sm">Low muscle tone, unusual gait, or atypical postures (such as sitting positions or walking on toes).</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ========================================= */}
          {/*        INTERACTIVE CHART SECTION          */}
          {/* ========================================= */}

          <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mt-8">
            <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Understanding Individual Profiles</h3>
            <p className="mb-4 text-sm text-slate-700">
              Each autistic person has a unique profile. The chart below shows how different characteristics can be rated on a scale from 0 to 10, 
              where 0 indicates the characteristic is not present, and 10 represents the maximum level of impact. 
            </p>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
              <p className="text-sm mb-2 text-[#0c264d]">
                <strong>How to Read This Interactive Chart:</strong>
              </p>
              <ul className="text-sm space-y-1 text-slate-800">
                <li>• <strong>Center (0):</strong> The characteristic is not present or causes no difficulty</li>
                <li>• <strong>Outer edge (10):</strong> Maximum level of impact or challenge</li>
                <li>• <strong>Hover over the chart:</strong> See exact values for each of the 12 categories</li>
                <li>• <strong>Different patterns:</strong> No two autistic people have the same profile!</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-2 border-[#2abcd4]">
              <ResponsiveContainer width="100%" height={500}>
                <RadarChart data={symptomData}>
                  <PolarGrid stroke="#2abcd4" strokeWidth={1.5} />
                  <PolarAngleAxis 
                    dataKey="category" 
                    tick={{ fill: '#0c264d', fontSize: 12, fontWeight: 'bold' }}
                  />
                  <PolarRadiusAxis 
                    angle={105} 
                    domain={[0, 10]} 
                    tick={{ fill: '#0c264d', fontSize: 11 }}
                    tickCount={6}
                  />
                  <Radar
                    name="Example Profile"
                    dataKey="value"
                    stroke="#2abcd4"
                    fill="#2abcd4"
                    fillOpacity={0.6}
                    strokeWidth={2}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '2px solid #2abcd4',
                      borderRadius: '8px',
                      padding: '10px'
                    }}
                    labelStyle={{ color: '#0c264d', fontWeight: 'bold' }}
                  />
                  <Legend 
                    wrapperStyle={{ paddingTop: '20px' }}
                    iconType="circle"
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-[#f0f9ff] p-4 rounded mt-6">
              <p className="text-sm text-slate-700">
                <strong>Why This Matters:</strong> This format is used by professionals to visualize assessment results and track changes over time. The example shown demonstrates how a person might have significant sensory processing challenges (9/10) while having minimal posture issues (3/10)—highlighting the heterogeneity of the spectrum.
              </p>
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
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Demetriou, E. A., et al. (2018). Autism spectrum disorder: An executive function meta-analysis. <i>Neuroscience & Biobehavioral Reviews</i>.</p>
            <p>2. Fournier, K. A., et al. (2010). Motor coordination in autism spectrum disorders: A synthesis and meta-analysis. <i>Journal of Autism and Developmental Disorders</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2022). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
            <li>Fletcher-Watson, S., & Happé, F. (2019). <i>Autism: A new introduction to psychological theory and current debate</i>. Routledge.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}