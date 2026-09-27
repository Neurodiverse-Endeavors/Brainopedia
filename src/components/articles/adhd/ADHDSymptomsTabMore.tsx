import React, { useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import { ChevronDown, ChevronUp, Brain, Activity, Users } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

// --- ACCORDION COMPONENT ---
// This reusable component handles the expand/collapse logic for every symptom
const Accordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-4 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="text-[#0c264d] font-bold text-lg m-0">{title}</h3>
        {isOpen ? (
          <ChevronUp className="text-[#2abcd4] flex-shrink-0 ml-4" />
        ) : (
          <ChevronDown className="text-[#2abcd4] flex-shrink-0 ml-4" />
        )}
      </button>
      {isOpen && (
        <div className="p-5 pt-0">
          {children}
        </div>
      )}
    </div>
  );
};

interface TabMoreProps {
  setCurrentArticle?: (article: string) => void;
}

const adhdSymptomData = [
  { category: 'Disorganization', value: 8, fullMark: 10 },
  { category: 'Fidgeting', value: 7, fullMark: 10 },
  { category: 'Fatigue', value: 2, fullMark: 10 },
  { category: 'Risk-taking', value: 5, fullMark: 10 },
  { category: 'RSD', value: 9, fullMark: 10 },
  { category: 'Time Perception', value: 3, fullMark: 10 },
  { category: 'Emotional Dysregulation', value: 7, fullMark: 10 },
  { category: 'Motivation Issues', value: 2, fullMark: 10 },
  { category: 'Working Memory', value: 7, fullMark: 10 },
  { category: 'Executive Dysfunction', value: 8, fullMark: 10 },
  { category: 'Task Initiation', value: 9, fullMark: 10 },
  { category: 'Hyperfocus', value: 6, fullMark: 10 },
  { category: 'Sleep Difficulties', value: 7, fullMark: 10 },
  { category: 'Transitions', value: 6, fullMark: 10 },
];

export function ADHDSymptomsTabMore({ setCurrentArticle }: TabMoreProps) {
  return (
    <>
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Beyond the DSM-5: Additional ADHD Symptoms</h2>

      <div className="bg-[#d6e9ff] border-l-4 border-[#0c264d] p-4 rounded mb-8">
        <p className="text-sm">
          <strong>Important:</strong> These symptoms are common experiences reported by people with ADHD, though they may 
          not be present in every individual. ADHD presents differently in each person, and symptom severity can vary 
          across different life domains and situations.
        </p>
      </div>

      {/* Associated Risks and Impacts Section (New Card Layout) */}
      <div className="mb-10">
        <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Associated Risks and Broader Impacts of ADHD</h3>
                    <ImageWithFallback 
                      src="/images/adhd/adhd-support-more-TAB-unmanaged.webp"
                      alt="Structural differences and risk factors in the dyslexic brain"
                      className="block mx-auto w-full max-w-3xl mb-6 rounded-lg shadow-sm border border-slate-200 bg-white"
                    />            
        <p className="mb-6 text-slate-700 leading-relaxed">
          A comprehensive umbrella review analyzing over 1,000 studies found that ADHD is associated with increased risks 
          across multiple life domains beyond the core symptoms<sup className="text-green-600 font-bold ml-0.5">1</sup>. However, 
          when viewed through a strengths-based lens, it is crucial to understand that these outcomes are not inevitable destinies. 
          They are frequently the direct result of unsupported environments, a lack of early intervention, and the chronic stress 
          of navigating systems that were not designed for neurodivergent minds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Card 1: Mental Health */}
          <div className="bg-white p-6 rounded-xl border-t-4 border-[#2abcd4] shadow-md flex flex-col h-full">
            <div className="bg-[#f0f9ff] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-[#0c264d]" />
            </div>
            <h4 className="font-bold text-[#0c264d] mb-4 text-lg border-b border-gray-100 pb-2">Mental Health</h4>
            <ul className="text-sm space-y-3 text-slate-700 flex-grow">
              <li>• <strong>Addiction:</strong> Higher rates of substance use disorders (alcohol, nicotine, drugs), as well as internet, gaming, and gambling addictions</li>
              <li>• <strong>Self-harm:</strong> Significantly elevated risk of suicidal ideation, attempts, and completed suicide</li>
              <li>• <strong>Mood disorders:</strong> Increased rates of depression and bipolar disorder</li>
              <li>• <strong>Personality:</strong> Higher prevalence of co-occurring personality disorders</li>
              <li>• <strong>Self-esteem:</strong> Consistently reported poor self-esteem across studies, often linked to depression and chronic invalidation</li>
            </ul>
          </div>

          {/* Card 2: Physical Health */}
          <div className="bg-white p-6 rounded-xl border-t-4 border-[#2abcd4] shadow-md flex flex-col h-full">
            <div className="bg-[#f0f9ff] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-[#0c264d]" />
            </div>
            <h4 className="font-bold text-[#0c264d] mb-4 text-lg border-b border-gray-100 pb-2">Physical Health</h4>
            <ul className="text-sm space-y-3 text-slate-700 flex-grow">
              <li>• <strong>Sleep disorders:</strong> Higher rates of sleep problems, periodic limb movement, and bi-directional relationship between poor sleep and symptoms</li>
              <li>• <strong>Nutritional & Metabolic Health:</strong> Increased potential for weight-related challenges, highlighting the importance of building supportive, ADHD-friendly routines around eating.</li>
              <li>• <strong>Oral health:</strong> Increased risk of tooth decay, cavities, higher plaque scores, and dental trauma</li>
              <li>• <strong>Injuries:</strong> Higher rates of poisoning, non-intentional injury, bone fractures, and traumatic brain injury</li>
              <li>• <strong>Other conditions:</strong> Associations with asthma, migraines, chronic pain, and vision problems</li>
            </ul>
          </div>

          {/* Card 3: Social & Lifestyle */}
          <div className="bg-white p-6 rounded-xl border-t-4 border-[#2abcd4] shadow-md flex flex-col h-full">
            <div className="bg-[#f0f9ff] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#0c264d]" />
            </div>
            <h4 className="font-bold text-[#0c264d] mb-4 text-lg border-b border-gray-100 pb-2">Social & Lifestyle</h4>
            <ul className="text-sm space-y-3 text-slate-700 flex-grow">
              <li>• <strong>Legal Vulnerability:</strong> Higher likelihood of encountering legal challenges or justice system involvement early in life without appropriate support systems.</li>
              <li>• <strong>Education:</strong> Lower academic achievement, leaving school early, and achieving fewer qualifications</li>
              <li>• <strong>Occupational:</strong> Higher unemployment, frequent job changes, and lower income compared to peers</li>
              <li>• <strong>Relationships:</strong> Challenges forming and maintaining peer and intimate relationships, poorer social skills</li>
              <li>• <strong>Driving:</strong> Increased rates of accidents, collisions, road rage, and driving violations</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#e8f5e8] border-l-4 border-[#0c264d] p-4 rounded mt-2 shadow-sm">
          <p className="text-sm">
            <strong>Clinical Implications:</strong> These findings emphasize why early intervention and neuro-affirming support 
            are so critical. By recognizing these risks as systemic friction points rather than inherent character flaws, educators, 
            clinicians, and families can build holistic scaffolding. Proper support empowers individuals to leverage their natural 
            strengths, drastically reducing these secondary risks and promoting overall well-being.
          </p>
        </div>
      </div>
      
      <h3 className="text-[#0c264d] font-bold mb-4 text-xl mt-8">Examining Additional Unofficial Symptoms of ADHD</h3>
      
      <ImageWithFallback 
        src="/images/adhd/adhd-more-symptoms-wheel.webp"
        alt="ADHD symptom wheel showing additional symptoms beyond DSM-5 criteria"
        className="w-full max-w-md mx-auto mb-4 rounded"
      />

      <p className="mb-4 text-slate-700 leading-relaxed">
        While the DSM-5-TR focuses on the three core symptoms of inattention, hyperactivity, and impulsivity (covered 
        in the previous tabs), people with ADHD experience a much broader range of symptoms that significantly impact 
        daily life. The symptom wheel above shows additional symptoms commonly reported by individuals with ADHD, 
        rated on a scale from 0 (no symptoms) to 10 (maximum symptoms).
      </p>
      
      <p className="mb-6 text-slate-700 leading-relaxed">
        These symptoms aren't formally part of the DSM-5 diagnostic criteria, but they're widely recognized by 
        researchers, clinicians, and the ADHD community as important aspects of the lived experience. Understanding 
        them is crucial for comprehensive self-awareness and management.<sup className="text-green-600 font-bold ml-0.5">2</sup>
      </p>
      <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-8 shadow-sm">
        <p className="text-sm mb-2 text-[#0c264d]">
          <strong>About the Symptom Wheel:</strong> The wheel rates each symptom from 0 to 10 based on severity of 
          impact. Each person with ADHD experiences these symptoms differently—some may rate high on certain symptoms 
          and low on others. There's no "correct" pattern, and your individual symptom profile is valid.
        </p>
        <p className="text-sm mt-3 text-[#0c264d]">
          <strong>Why These Aren't in the DSM-5:</strong> Diagnostic criteria focus on core features that distinguish 
          ADHD from other conditions. These additional symptoms are widely recognized by researchers and clinicians as 
          important aspects of the ADHD experience that deserve attention in treatment planning, even though they're 
          not part of the formal diagnostic criteria.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Explore Specific Symptoms (Click to Expand)</h3>

        <Accordion title="Disorganization">
          <p className="mb-3 text-slate-700">
            Chronic difficulty maintaining order in physical spaces, schedules, and digital systems. This goes beyond 
            occasional messiness to affect daily functioning, making it hard to find important items, keep track of 
            commitments, and maintain structured routines.
          </p>
          <div className="bg-[#f0f9ff] p-4 rounded mb-3">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
            <div className="text-sm space-y-2 text-slate-700">
              <p>Disorganization in ADHD is strongly linked to Executive Function (EF) deficits.</p>
              <p><strong>Executive Age Gap:</strong> Research by Dr. Russell Barkley suggests that individuals with ADHD may have 
              a developmental delay in executive functioning of approximately 30–40%. For example, a 30-year-old may have the 
              organizational skills of a 20-year-old.<sup className="text-green-600 font-bold ml-0.5">2</sup></p>
              <p><strong>Prevalence:</strong> Studies show that 40–60% of adults with ADHD experience significant challenges in 
              time management and organization.<sup className="text-green-600 font-bold ml-0.5">2</sup></p>
              <p><strong>Memory Encoding:</strong> Forgetfulness in ADHD often stems from disorganized encoding of information, 
              which prevents the brain from storing new data effectively.</p>
            </div>
          </div>
          <div className="text-sm bg-[#ffe8d6] p-3 rounded text-slate-800">
            <strong>Real-life impact:</strong> Frequently losing keys, wallets, or phones; missing appointments because 
            you forgot to write them down; cluttered workspaces that make it difficult to focus; piles of unsorted mail 
            and papers.
          </div>
        </Accordion>

        <Accordion title="Fidgeting">
          <p className="mb-3 text-slate-700">
            Constant need for physical movement or tactile stimulation, including finger tapping, leg bouncing, pen 
            clicking, hair twirling, or handling objects. While related to hyperactivity, fidgeting is often a self-regulation 
            strategy that helps with focus and emotional regulation.
          </p>
          <div className="bg-[#f0f9ff] p-4 rounded mb-3">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
            <div className="text-sm space-y-2 text-slate-700">
              <p>Fidgeting is increasingly recognized as a compensatory mechanism for self-regulation rather than just a sign of hyperactivity.</p>
              <p><strong>Cognitive Enhancement:</strong> A 2024 study of 70 adults found that fidgeting significantly increased during 
              correct trials of cognitive tasks, suggesting it helps sustain attention during challenging work.<sup className="text-green-600 font-bold ml-0.5">3</sup></p>
              <p><strong>Neurochemical Boost:</strong> Physical movement, even small gestures like foot tapping, increases levels of 
              dopamine and norepinephrine—the same chemicals targeted by ADHD medications to sharpen focus.</p>
              <p><strong>Engagement:</strong> Rhythmic fidgeting (e.g., leg bouncing) has been linked to 30% higher task engagement 
              in adults during meetings compared to forced stillness.<sup className="text-green-600 font-bold ml-0.5">3</sup></p>
            </div>
          </div>
          <div className="text-sm bg-[#e8f5e8] p-3 rounded text-slate-800">
            <strong>Real-life impact:</strong> Needing to doodle during meetings to stay focused, constantly repositioning 
            yourself in your seat, unable to keep your hands still, or needing a fidget toy to concentrate during lectures.
          </div>
        </Accordion>

        <Accordion title="Fatigue">
          <p className="mb-3 text-slate-700">
            Persistent mental and physical exhaustion that isn't always relieved by rest. This can stem from the constant 
            effort required to regulate attention, manage executive functions, and cope with sensory input. The brain's 
            constant "on" state leads to burnout even when tasks seem simple to others.
          </p>
          <div className="bg-[#f0f9ff] p-4 rounded mb-3">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
            <div className="text-sm space-y-2 text-slate-700">
              <p>ADHD-related fatigue is often characterized as a state of chronic mental exhaustion caused by the effort required to manage symptoms.</p>
              <p><strong>High Prevalence:</strong> One study found that 62% of people with ADHD meet the clinical criteria for fatigue.<sup className="text-green-600 font-bold ml-0.5">4</sup></p>
              <p><strong>Executive Load:</strong> Research indicates that executive function deficits, particularly in self-management 
              and problem-solving, directly mediate the relationship between ADHD and job burnout.<sup className="text-green-600 font-bold ml-0.5">4</sup></p>
              <p><strong>Brain Activity:</strong> Mental fatigue is linked to dysregulated dopaminergic systems and weak alpha wave 
              modulation, which are responsible for tuning out environmental distractions.</p>
            </div>
          </div>
          <div className="text-sm bg-[#e6e6fa] p-3 rounded text-slate-800">
            <strong>Real-life impact:</strong> Feeling completely drained after social interactions or focused work, 
            needing excessive amounts of sleep, experiencing "ADHD burnout" after periods of high masking or compensation.
          </div>
        </Accordion>

        <Accordion title="Risk-taking">
          <p className="mb-3 text-slate-700">
            Tendency to engage in behaviors with potential negative consequences, often driven by novelty-seeking, 
            impulsivity, and difficulty forecasting future outcomes. This can manifest in financial decisions, driving 
            behavior, relationship choices, or physical activities.
          </p>
          <div className="bg-[#f0f9ff] p-4 rounded mb-3">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
            <div className="text-sm space-y-2 text-slate-700">
              <p>Research consistently links ADHD to increased engagement in risky behaviors across various domains.</p>
              <p><strong>Laboratory Evidence:</strong> A meta-analysis of 37 studies involving over 2,300 participants found 
              substantial evidence that individuals with ADHD are more likely to make risky decisions in controlled tasks.<sup className="text-green-600 font-bold ml-0.5">5</sup></p>
              <p><strong>Impulsivity Drivers:</strong> Risk-taking is often driven by "overhasty learning," where individuals with 
              ADHD update their beliefs too quickly during risk assessment, a process linked to weak functional connectivity in 
              the frontal lobe.</p>
              <p><strong>Real-world Impact:</strong> Extensive research shows that ADHD populations disproportionately engage in 
              risky traffic behavior, substance abuse, gambling, and financial risk-taking.<sup className="text-green-600 font-bold ml-0.5">5</sup></p>
            </div>
          </div>
          <div className="text-sm bg-[#ffe8d6] p-3 rounded text-slate-800">
            <strong>Real-life impact:</strong> Making impulsive purchases you can't afford, speeding or driving recklessly, 
            quitting jobs without backup plans, or engaging in extreme sports without proper safety considerations.
          </div>
        </Accordion>

        <Accordion title="Mood Swings">
          <p className="mb-3 text-slate-700">
            Rapid shifts in emotional states that can occur multiple times throughout the day. These aren't the same as 
            bipolar mood episodes but reflect the emotional dysregulation common in ADHD. Emotions can feel intense, 
            change quickly, and be difficult to predict or control.
          </p>
          <div className="bg-[#f0f9ff] p-4 rounded mb-3">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
            <div className="text-sm space-y-2 text-slate-700">
              <p>Emotional dysregulation is a prominent feature of ADHD, though it is not always listed as a primary diagnostic symptom.</p>
              <p><strong>Prevalence in Adults:</strong> Between 30% and 70% of adults with ADHD report significant mood swings and 
              emotional turbulence.<sup className="text-green-600 font-bold ml-0.5">6</sup></p>
              <p><strong>Core Component:</strong> Leading researchers argue that Deficient Emotional Self-Regulation (DESR) is a fundamental component of ADHD with a distinct neurological basis, driving much of the impairment seen in adulthood.<sup className="text-green-600 font-bold ml-0.5">7</sup></p>
              <p><strong>Diagnostic Overlap:</strong> Symptoms often include irritability, low tolerance for frustration, and intense 
              but short-lived emotional changes.</p>
            </div>
          </div>
          <div className="text-sm bg-[#fde8f3] p-3 rounded text-slate-800">
            <strong>Real-life impact:</strong> Going from happy to irritable to sad within minutes, having emotional 
            reactions that surprise even yourself, struggling to maintain emotional stability throughout the day.
          </div>
        </Accordion>

        <Accordion title="Time Management Issues (Time Blindness)">
          <p className="mb-3 text-slate-700">
            Difficulty accurately perceiving time, estimating task duration, planning schedules, and meeting deadlines. 
            Also known as "time blindness," this symptom makes it hard to gauge how long things take or how much time 
            has passed, leading to chronic lateness and poor planning.
          </p>
          <div className="bg-[#f0f9ff] p-4 rounded mb-3">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
            <div className="text-sm space-y-2 text-slate-700">
              <p>Research highlights that individuals with ADHD have a fundamentally different perception of time compared to neurotypical peers.</p>
              <p><strong>Altered Internal Clock:</strong> A meta-analysis indicates that people with ADHD exhibit an "accelerated internal clock," 
              leading to systematic inaccuracies in time estimation and reproduction.<sup className="text-green-600 font-bold ml-0.5">8</sup></p>
              <p><strong>Time Discrimination Deficits:</strong> Neurological studies show ADHD brains process temporal information differently, leading to significant difficulties in discriminating between brief durations.<sup className="text-green-600 font-bold ml-0.5">8</sup></p>
              <p><strong>Prospective Memory:</strong> In task-based studies, individuals with ADHD were significantly less accurate at 
              "prospective memory" tasks—remembering to perform an action at a specific future time.<sup className="text-green-600 font-bold ml-0.5">8</sup></p>
            </div>
          </div>
          <div className="text-sm bg-[#e8f5e8] p-3 rounded text-slate-800">
            <strong>Real-life impact:</strong> Consistently underestimating how long tasks will take, losing track of time 
            completely when engaged in activities, perpetual lateness despite best intentions, last-minute rushing to meet 
            deadlines.
          </div>
        </Accordion>

        <Accordion title="Sensory Processing">
          <p className="mb-3 text-slate-700">
            Heightened or unusual responses to sensory input including sounds, textures, lights, smells, and tastes. 
            This can involve both hypersensitivity (being overwhelmed by stimuli) and hyposensitivity (seeking intense 
            sensory experiences). Sensory processing differences significantly impact comfort and focus.
          </p>
          <div className="bg-[#f0f9ff] p-4 rounded mb-3">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
            <div className="text-sm space-y-2 text-slate-700">
              <p>Recent meta-analyses have formalized the link between ADHD and atypical sensory experiences.<sup className="text-green-600 font-bold ml-0.5">9</sup></p>
              <p><strong>Atypical Sensory Profile:</strong> Research across more than 30 studies indicates that individuals with ADHD experience 
              significantly higher rates of sensory sensitivity, sensory avoidance, and sensory seeking.<sup className="text-green-600 font-bold ml-0.5">9</sup></p>
              <p><strong>Multi-Modal Sensitivity:</strong> These differences are not limited to one sense but span taste, smell, movement, 
              vision, touch, and hearing.</p>
              <p><strong>Clinical Significance:</strong> Some researchers suggest that sensory difficulties are a core part of the ADHD phenotype 
              and should be included in standard clinical evaluations.<sup className="text-green-600 font-bold ml-0.5">9</sup></p>
            </div>
          </div>
          <p className="mb-3 text-sm text-slate-700">
            <strong>Note:</strong> These sensory challenges can also be characteristic of{' '}
            <a href="/spd" className="text-[#2abcd4] underline hover:text-[#0c264d]">
              Sensory Processing Disorder (SPD)
            </a>, which can occur independently or alongside ADHD. If sensory issues are a primary concern, 
            exploring SPD may provide additional insight.
          </p>
          <div className="text-sm bg-[#e6e6fa] p-3 rounded text-slate-800">
            <strong>Real-life impact:</strong> Clothing tags are unbearable, fluorescent lights cause headaches, certain 
            food textures are intolerable, background noise makes concentration impossible, or needing loud music and 
            intense flavors.
          </div>
        </Accordion>

        <Accordion title="Forgetfulness">
          <p className="mb-3 text-slate-700">
            Frequent memory lapses affecting daily activities, appointments, conversations, and tasks. This involves both 
            working memory (holding information temporarily) and prospective memory (remembering to do things in the future). 
            It's not about long-term memory but rather the executive function required to encode and retrieve information.
          </p>
          <div className="bg-[#f0f9ff] p-4 rounded mb-3">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
            <div className="text-sm space-y-2 text-slate-700">
              <p>The "forgetfulness" in ADHD is primarily a failure of the brain's "mental scratchpad."</p>
              <p><strong>Working Memory Impairment:</strong> Large-scale impairments have been measured in visuospatial and phonological 
              short-term memory (d=0.89 and d=0.55 respectively).<sup className="text-green-600 font-bold ml-0.5">10</sup></p>
              <p><strong>Information Prioritization:</strong> A 2026 study found that while overall working memory is lower, individuals 
              with ADHD can still prioritize "valuable" information as effectively as others; the deficit is in the total capacity, 
              not the selection process.<sup className="text-green-600 font-bold ml-0.5">10</sup></p>
              <p><strong>Reordering Deficits:</strong> Roughly 42% of children with ADHD exhibit severe impairment in "working memory 
              reordering"—the ability to mentally manipulate information they just heard.<sup className="text-green-600 font-bold ml-0.5">10</sup></p>
            </div>
          </div>
          <div className="text-sm bg-[#ffe8d6] p-3 rounded text-slate-800">
            <strong>Real-life impact:</strong> Walking into rooms and forgetting why, losing track of what someone just 
            said, forgetting appointments even when they're written down, repeatedly buying items you already have at home.
          </div>
        </Accordion>

        <Accordion title="Social Challenges">
          <p className="mb-3 text-slate-700">
            Difficulty with social interactions including interrupting others, missing social cues, talking excessively, 
            struggling with turn-taking in conversations, and misreading emotional expressions. These challenges stem from 
            impulsivity, inattention to social details, and executive function difficulties with self-monitoring.
          </p>
          <div className="bg-[#f0f9ff] p-4 rounded mb-3">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
            <div className="text-sm space-y-2 text-slate-700">
              <p>Social difficulties are often categorized as "performance deficits" rather than "acquisition deficits."</p>
              <p><strong>Performance Deficit:</strong> Research shows most individuals with ADHD know the social rules but struggle to 
              apply them in real-time due to poor inhibitory control and self-regulation.<sup className="text-green-600 font-bold ml-0.5">11</sup></p>
              <p><strong>Social Cognition:</strong> ADHD is linked to difficulties in responding to subtle social cues and managing emotions 
              during reciprocal interactions.</p>
            </div>
          </div>
          <div className="text-sm bg-[#fde8f3] p-3 rounded text-slate-800">
            <strong>Real-life impact:</strong> Interrupting others without meaning to, dominating conversations, missing 
            hints that someone wants to leave, forgetting what was said earlier in the conversation, struggling to maintain 
            friendships.
          </div>
        </Accordion>

        <Accordion title="Working Memory Challenges">
          <p className="mb-3 text-slate-700">
            Working memory is your brain's ability to temporarily hold and manipulate information—like a mental workspace 
            or scratchpad. In ADHD, working memory deficits make it difficult to keep multiple pieces of information "active" 
            in your mind simultaneously, follow multi-step instructions, or mentally manipulate information (like doing math 
            in your head or reversing a sequence).
          </p>
          <p className="mb-3 text-slate-700">
            This is distinct from long-term memory. People with ADHD often have excellent long-term memory for topics of 
            interest, but struggle with the temporary "holding space" needed for active tasks. Working memory challenges 
            affect everything from following conversations to completing complex tasks to learning new skills.
          </p>
          <div className="bg-[#f0f9ff] p-4 rounded mb-3">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
            <div className="text-sm space-y-2 text-slate-700">
              <p><strong>Working Memory Impairment:</strong> Large-scale impairments have been measured in visuospatial and phonological 
              short-term memory (d=0.89 and d=0.55 respectively).<sup className="text-green-600 font-bold ml-0.5">10</sup></p>
              <p><strong>Capacity vs. Selection:</strong> While overall working memory capacity is lower in ADHD, individuals can still 
              prioritize "valuable" information as effectively as others—the deficit is in total capacity, not the selection process.</p>
              <p><strong>Manipulation Deficits:</strong> Roughly 42% of children with ADHD exhibit severe impairment in "working memory 
              reordering"—the ability to mentally manipulate information they just heard.<sup className="text-green-600 font-bold ml-0.5">10</sup></p>
            </div>
          </div>
          <div className="text-sm bg-[#e6e6fa] p-3 rounded text-slate-800">
            <strong>Real-life impact:</strong> Losing your train of thought mid-sentence, forgetting what you were doing 
            when interrupted, struggling to follow verbal directions with multiple steps, difficulty doing mental math, 
            re-reading the same paragraph multiple times because the information doesn't "stick," or forgetting the beginning 
            of a sentence by the time you reach the end.
          </div>
        </Accordion>

        <Accordion title="Executive Dysfunction">
          <p className="mb-3 text-slate-700">
            Executive functions are the brain's management system—a set of mental processes that help you plan, organize, 
            initiate tasks, regulate emotions, monitor your behavior, and adapt to changing situations. In ADHD, executive 
            dysfunction affects these core processes, creating a ripple effect across many areas of life.
          </p>
          <p className="mb-3 text-slate-700">
            This is the underlying mechanism behind many ADHD symptoms. Poor executive function explains why someone might 
            know exactly what they need to do but can't get started, or why they struggle to shift between tasks, or why 
            they have difficulty planning ahead and anticipating consequences.
          </p>
          <div className="bg-[#f0f9ff] p-4 rounded mb-3">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
            <div className="text-sm space-y-2 text-slate-700">
              <p><strong>The "Root" Cause:</strong> Dr. Thomas Brown’s models argue that the DSM's core symptoms are just surface-level expressions of a much deeper, structural impairment of the brain's entire executive management system.<sup className="text-green-600 font-bold ml-0.5">12</sup></p>
              <p><strong>The "30% Rule":</strong> Clinical research suggests that the "executive age" of an adult with ADHD is often 
              30–40% behind their chronological age (e.g., a 30-year-old having the executive skills of a 20-year-old).<sup className="text-green-600 font-bold ml-0.5">2</sup></p>
              <p><strong>Task Breakdown:</strong> Executive dysfunction disrupts the brain's ability to break down complex tasks, 
              leading to the "paralysis" felt when starting new projects.</p>
            </div>
          </div>
          <div className="text-sm bg-[#e8f5e8] p-3 rounded text-slate-800">
            <strong>Real-life impact:</strong> Knowing you need to start a project but feeling paralyzed, difficulty breaking 
            large tasks into manageable steps, struggling to prioritize when everything feels equally urgent, poor self-monitoring 
            (not noticing when you're off-track), and challenges adapting plans when circumstances change.
          </div>
        </Accordion>

        <Accordion title="Rejection Sensitive Dysphoria (RSD)">
          <p className="mb-3 text-slate-700">
            Rejection Sensitive Dysphoria (RSD) is an extreme emotional sensitivity and physical pain triggered by the perception that a person has been rejected, teased, or criticized. 
          </p>
          <p className="mb-3 text-slate-700">
            While not an official DSM diagnosis, the underlying extreme emotional pain triggered by perceived rejection is well-documented and is considered a near-universal experience for adults with ADHD.
          </p>
          
          {/* ROUTING BUTTON */}
          <button 
            onClick={() => setCurrentArticle?.('rsd-deep-dive')} 
            className="mt-4 bg-[#2abcd4] text-white px-5 py-2.5 rounded-lg font-normal text-sm shadow-sm hover:bg-[#0c264d] transition-all flex items-center gap-2 font-spartan"
          >
            Explore RSD in Depth <span className="text-lg">→</span>
          </button>
        </Accordion>

        <Accordion title="Pervasive Drive for Autonomy (PDA / Demand Avoidance)">
          <p className="mb-3 text-slate-700">
            Often referred to clinically as Pathological Demand Avoidance (PDA), this is a profound neurological need for self-direction. When autonomy is threatened by external demands, expectations, or rigid rules, the nervous system reacts with an intense fight/flight response or a severe executive block.
          </p>
          <p className="mb-3 text-slate-700">
            In the ADHD brain, demand avoidance is heavily tied to dopamine. Because the brain runs on interest, urgency, and novelty rather than importance, arbitrary external demands can strip away the stimulation required to initiate a task.
          </p>
          <div className="bg-[#f0f9ff] p-4 rounded mb-3">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence & Lived Experience:</h4>
            <div className="text-sm space-y-2 text-slate-700">
              <p><strong>Nervous System Response:</strong> Demand avoidance is not an active choice or defiance; it is a rapid, involuntary nervous system response to a perceived loss of control.</p>
              <p><strong>Interest-Based Momentum:</strong> Under-stimulating demands create a literal cognitive block. The brain cannot produce the neurotransmitters required to bridge the gap between knowing what to do and actually doing it.</p>
            </div>
          </div>
          <div className="text-sm bg-[#ffe8d6] p-3 rounded text-slate-800">
            <strong>Real-life impact:</strong> Feeling physically paralyzed when someone tells you to do something you were already planning to do; intense resistance to rigid schedules; or conversely, displaying fierce independent thinking, self-advocacy, and innovative problem-solving when placed in low-pressure, flexible environments.
          </div>
        </Accordion>

        <Accordion title="Task Initiation & Analysis Paralysis">
          <p className="mb-3 text-slate-700">
            Task initiation difficulty is the struggle to begin tasks even when you're motivated and have time. This isn't 
            procrastination in the traditional sense—you genuinely want to start, but your brain won't cooperate. Analysis 
            paralysis occurs when facing too many options or steps, leading to complete overwhelm and inability to choose 
            or begin.
          </p>
          <p className="mb-3 text-slate-700">
            The ADHD brain often needs extra stimulation or pressure to activate the "start" mechanism. Without external 
            deadlines, novel situations, or high interest, the initiation system doesn't engage, leaving you stuck in a 
            frustrating state of knowing what to do but being unable to do it.
          </p>
          <div className="bg-[#f0f9ff] p-4 rounded mb-3">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
            <div className="text-sm space-y-2 text-slate-700">
              <p><strong>Analysis Paralysis:</strong> Executive dysfunction disrupts the brain's ability to break down complex tasks, 
              leading to the "paralysis" felt when starting new projects.</p>
            </div>
          </div>
          <div className="text-sm bg-[#fde8f3] p-3 rounded text-slate-800">
            <strong>Real-life impact:</strong> Staring at a blank document for hours, spending all day "getting ready" to 
            work without actually starting, becoming overwhelmed by choices (even simple ones like what to eat), over-planning 
            as a substitute for doing, or needing the panic of a deadline to finally begin.
          </div>
        </Accordion>

        <Accordion title="Hyperfocus">
          <p className="mb-3 text-slate-700">
            Hyperfocus is intense, sustained concentration on tasks of high interest or stimulation, often to the point of 
            losing awareness of time, surroundings, and basic needs. While it might seem contradictory to ADHD's attention 
            difficulties, hyperfocus actually reflects the same core issue: difficulty regulating attention rather than a 
            simple lack of it.
          </p>
          <p className="mb-3 text-slate-700">
            When the ADHD brain finds something sufficiently stimulating, it can lock onto that activity with laser-like 
            intensity. The problem is that you can't control when this happens or easily disengage from it. Hyperfocus can 
            be productive (finishing a project in one marathon session) or problematic (losing hours to a video game when 
            you have responsibilities).
          </p>
          <div className="bg-[#f0f9ff] p-4 rounded mb-3">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
            <div className="text-sm space-y-2 text-slate-700">
              <p><strong>Regulatory Failure:</strong> Rather than a "lack" of attention, hyperfocus is the inability to disengage from 
              a high-stimulation task once the brain's reward system (dopamine) is locked in.</p>
            </div>
          </div>
          <div className="text-sm bg-[#ffe8d6] p-3 rounded text-slate-800">
            <strong>Real-life impact:</strong> Working or gaming for 8+ hours without eating, drinking, or using the bathroom; 
            missing appointments because you were absorbed in an activity; inability to "pull yourself away" even when you 
            know you should stop; finishing passion projects in record time but unable to focus on boring necessities.
          </div>
        </Accordion>

        <Accordion title="Sleep Difficulties">
          <p className="mb-3 text-slate-700">
            Sleep problems are extremely common in ADHD and often include delayed sleep phase syndrome (natural tendency to 
            stay up late and sleep in), difficulty falling asleep due to racing thoughts, trouble waking up despite multiple 
            alarms, and non-restorative sleep. The ADHD brain's dysregulation extends to the sleep-wake cycle.
          </p>
          <p className="mb-3 text-slate-700">
            Many people with ADHD describe feeling most alert and focused late at night, making it nearly impossible to fall 
            asleep at "normal" times. Morning awakening is equally challenging—sleep inertia can be extreme, with intense 
            grogginess lasting well into the day. Poor sleep then exacerbates ADHD symptoms, creating a difficult cycle.
          </p>
          <div className="bg-[#f0f9ff] p-4 rounded mb-3">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
            <div className="text-sm space-y-2 text-slate-700">
              <p><strong>Delayed Circadian Rhythms:</strong> Systematic reviews establish a strong, intrinsic link between ADHD and delayed circadian rhythms, showing it is a biological feature of the condition, not just "poor sleep hygiene."<sup className="text-green-600 font-bold ml-0.5">15</sup></p>
              <p><strong>Prevalence:</strong> Almost 80% of adults with ADHD have sleep phase delays, naturally functioning as "night owls."<sup className="text-green-600 font-bold ml-0.5">15</sup></p>
            </div>
          </div>
          <div className="text-sm bg-[#e6e6fa] p-3 rounded text-slate-800">
            <strong>Real-life impact:</strong> Naturally staying awake until 2-4 AM regardless of when you need to wake up, 
            lying in bed with racing thoughts for hours, needing 5+ alarms and still struggling to get up, feeling like you 
            didn't sleep even after 8+ hours, functioning better at night than during the day.
          </div>
        </Accordion>

        <Accordion title="Difficulty with Transitions">
          <p className="mb-3 text-slate-700">
            Transitions—shifting between activities, locations, mental states, or tasks—require significant executive function. 
            You must disengage from what you're doing, shift your mental set, and initiate something new. For people with ADHD, 
            this process is exhausting and often triggers frustration, anxiety, or resistance.
          </p>
          <p className="mb-3 text-slate-700">
            This difficulty applies to both physical transitions (leaving the house, moving between locations) and mental ones 
            (switching from work mode to relaxation, changing tasks). The "in-between" state feels uncomfortable and 
            disorganizing, so there's often procrastination around transitions or irritability when they're required.
          </p>
          <div className="bg-[#f0f9ff] p-4 rounded mb-3">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Scientific Evidence:</h4>
            <div className="text-sm space-y-2 text-slate-700">
              <p><strong>Transition Exhaustion:</strong> Shifting between mental states requires significant executive effort; the 
              "in-between" state of a transition is often where people with ADHD lose the most time and emotional regulation.</p>
            </div>
          </div>
          <div className="text-sm bg-[#e8f5e8] p-3 rounded text-slate-800">
            <strong>Real-life impact:</strong> Feeling irrationally angry when interrupted, procrastinating leaving the house 
            even for enjoyable activities, needing extensive "decompression time" between work and home, struggling to switch 
            between different types of tasks, or staying in uncomfortable situations because transitioning out feels too hard.
          </div>
        </Accordion>
      </div>
      
     {/* Interactive Symptom Profile Chart */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-8">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Interactive Symptom Profile Chart</h3>
        <p className="mb-4 text-sm text-slate-700">
          Below is an interactive visual example of one individual's symptom profile. Each person's chart will 
          look different, reflecting their unique combination of characteristics and support needs. (*Interactive chart available only on desktop/tablet devices)
        </p>

        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6">
          <p className="text-sm mb-2 text-[#0c264d]">
            <strong>How to Read This Chart:</strong>
          </p>
          <ul className="text-sm space-y-1 text-[#0c264d]">
            <li>• <strong>Center (0):</strong> The symptom is not present or causes no difficulty</li>
            <li>• <strong>Outer edge (10):</strong> Maximum level of impact or challenge in that area</li>
            <li>• <strong>Each spoke:</strong> Represents a different symptom category (14 total)</li>
            <li>• <strong>The colored area:</strong> Shows an example individual's profile across all categories</li>
            <li>• <strong>Hover over the chart:</strong> See exact values for each category</li>
            <li>• <strong>Different patterns:</strong> Everyone's chart looks different—no two people with ADHD have the same profile!</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border-2 border-[#2abcd4] hidden md:block">
          <ResponsiveContainer width="100%" height={500}>
            <RadarChart data={adhdSymptomData}>
              <PolarGrid stroke="#2abcd4" strokeWidth={1.5} />
              <PolarAngleAxis 
                dataKey="category" 
                tick={{ fill: '#0c264d', fontSize: 12, fontWeight: 'bold' }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 10]} 
                tick={{ fill: '#0c264d', fontSize: 11, dy: 10 }}
                tickCount={6}
              />
              <Radar
                name="Example ADHD Profile"
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
            <strong>Why This Matters:</strong> Understanding that ADHD presents differently in every individual 
            helps clinicians, educators, and families provide personalized support. This chart format is commonly 
            used by professionals to visualize assessment results and track changes over time. The example shown 
            demonstrates how one person might have significant rejection sensitive dysphoria (9/10) and task initiation 
            difficulties (9/10) while having moderate hyperfocus tendencies (6/10)—highlighting the heterogeneity 
            of ADHD presentation.
          </p>
        </div>
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
            <p>1. Cortese, S., et al. (2020). Associated Risks and Impacts of ADHD: An Umbrella Review. <i>Neuroscience & Biobehavioral Reviews</i>. </p>
            <p>2. Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i> (4th ed.). Guilford Press. </p>
            <p>3. Kofler, M. J., et al. (2024). Fidgeting and cognitive enhancement in adults with ADHD. <i>Journal of Attention Disorders</i>. </p>
            <p>4. Rogers, D. C., et al. (2023). Fatigue and Burnout in ADHD. <i>Clinical Psychology Review</i>. </p>
            <p>5. Dekkers, T. J., et al. (2022)."Risk-taking behaviors in ADHD: A meta-analytic review. <i>Psychological Bulletin</i>. </p>
            <p>6. Skirrow, C., et al. (2013). Mood swings and emotional instability in adults with ADHD. <i>Psychiatry Research</i>. </p>
            <p>7. Shaw, P., et al. (2014). Emotion dysregulation in attention deficit hyperactivity disorder. <i>American Journal of Psychiatry</i>. </p>
            <p>8. Ptacek, R., et al. (2019). Clinical implications of the perception of time in attention deficit hyperactivity disorder (ADHD): A review. <i>Medical Science Monitor</i>. </p>
            <p>9. Panagiotidi, M., et al. (2018). Sensory processing traits in ADHD: A systematic review. <i>Journal of Psychiatric Research</i>. </p>
            <p>10. Martinussen, R., et al. (2005). A meta-analysis of working memory impairments in children with attention-deficit/hyperactivity disorder. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>. </p>
            <p>11. Nijmeijer, J. S., et al. (2008). Attention-deficit/hyperactivity disorder and social dysfunctioning. <i>Clinical Psychology Review</i>.</p>
            <p>12. Brown, T. E. (2013). <i>A New Understanding of ADHD in Children and Adults: Executive Function Impairments</i>. Routledge. </p>
            <p>13. Dodson, W. (2016). <i>Emotional Regulation and Rejection Sensitive Dysphoria</i>. ADDitude Clinical Whitepaper.</p>
            <p>14. Bondü, R., & Esser, G. (2015). Justice and rejection sensitivity in children and adolescents with ADHD symptoms. <i>European Child & Adolescent Psychiatry</i>. </p>
            <p>15. Coogan, A. N., & McGowan, N. M. (2017). A systematic review of circadian function, chronotype and sleep in Attention Deficit Hyperactivity Disorder. <i>Psychological Medicine</i>. </p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN (No Indentation) */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). </p>
            <p>CHADD (Children and Adults with Attention-Deficit/Hyperactivity Disorder). About ADHD. General clinical overview and community resources. </p>
          </div>
        </div>
      </div>
    </>
  );
}