import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyspraxiaSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DyspraxiaSupport({ setCurrentArticle, initialTab }: DyspraxiaSupportProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'therapy';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Dyspraxia: Support & Management
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dyspraxia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Dyspraxia
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('therapy')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'therapy'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Therapy & Interventions
        </button>
        <button
          onClick={() => handleTabChange('accommodations')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'accommodations'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Accommodations & Tech
        </button>
        <button
          onClick={() => handleTabChange('daily')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'daily'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Daily Life & Emotions
        </button>
      </div>

      {/* ==========================================
          TAB 1: THERAPY & INTERVENTIONS
      ========================================== */}
      {activeTab === 'therapy' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Support for dyspraxia primarily focuses on building functional motor skills and developing active compensatory strategies. Early, evidence-based intervention is critical for helping individuals develop the "muscle memory" needed for daily independence.<sup>1</sup>
          </p>

          {/* Therapy Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Therapeutic Interventions</h2>
            
            <ImageWithFallback 
              src="/images/dyspraxia/dyspraxia-support-therapy.webp" 
              alt="Child engaging in balance and coordination therapy exercises"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Clinical therapy for DCD heavily relies on a multi-disciplinary approach, blending physical conditioning with cognitive strategy development to help the brain successfully map out complex movements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Occupational & Physical</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Occupational Therapy (OT):</strong> Focuses heavily on fine motor skills (handwriting, typing, utensil use) and sensory integration techniques.<sup>1</sup></li>
                  <li><strong>Physiotherapy (PT):</strong> Targets gross motor coordination, building essential core strength, and improving overall physical balance.<sup>3</sup></li>
                  <li><strong>Speech Therapy:</strong> Utilized specifically if verbal dyspraxia (apraxia of speech) is present, focusing on the muscle coordination of the mouth.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Task-Specific Training</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>The CO-OP Approach:</strong> The "Cognitive Orientation to daily Occupational Performance" is a highly evidence-based framework that teaches individuals to verbally talk themselves through the steps of a physical task.<sup>2</sup></li>
                  <li><strong>Repetition:</strong> Breaking a specific goal (like riding a bike) down into micro-steps and practicing them until they become neurologically automatic.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: ACCOMMODATIONS & TECH
      ========================================== */}
      {activeTab === 'accommodations' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            When physical interventions are not enough, environmental accommodations and assistive technology step in to level the playing field, ensuring that motor deficits do not artificially deflate a student's or professional's actual intelligence.
          </p>

          {/* Accommodations Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Accommodations & Aids</h2>
            
            <ImageWithFallback 
              src="/images/dyspraxia/dyspraxia-support-accommodations.webp" 
              alt="Student utilizing an ergonomic keyboard and laptop in a classroom"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Accommodations are not about providing an unfair advantage; they are about removing the arbitrary physical barriers that prevent a dyspraxic brain from demonstrating its true capabilities.<sup>4</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Academic & Workplace</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Extended Time:</strong> Guaranteeing time-and-a-half on tests or tasks to account for the slower pace of physical output.<sup>4</sup></li>
                  <li><strong>Digital Defaults:</strong> Allowing the exclusive use of a laptop or tablet for writing assignments rather than forcing hand-written work.</li>
                  <li><strong>Ergonomic Setup:</strong> Providing slanted writing desks, supportive seating, or specialized pencil grips to reduce physical fatigue.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Assistive Technology</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Speech-to-Text:</strong> Utilizing dictation software to entirely bypass the motor requirements of typing or writing.</li>
                  <li><strong>Specialized Hardware:</strong> Using ergonomic keyboards, rollerball mice, or touchscreen interfaces that require less fine-motor precision.</li>
                  <li><strong>Digital Planners:</strong> Relying on smartphone alarms and digital calendars to compensate for executive functioning and memory hurdles.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: DAILY LIFE & EMOTIONS
      ========================================== */}
      {activeTab === 'daily' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            A comprehensive support plan must extend beyond the classroom and clinic to address the profound emotional toll of chronic physical struggle, frustration, and systemic misunderstanding.
          </p>

          {/* Daily Life Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Daily Hacks & Emotional Support</h2>
            
            <ImageWithFallback 
              src="/images/dyspraxia/dyspraxia-support-daily.webp" 
              alt="Person organizing a visual planner to manage daily tasks"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Implementing simple "life hacks" at home can drastically reduce daily anxiety, preserving the individual's limited physical energy for high-priority tasks and relationships.<sup>5</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Practical "Life Hacks"</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Clothing & Grooming:</strong> Swapping shoelaces for elastic or Velcro, buying slip-on shoes, and using electric toothbrushes instead of manual ones.</li>
                  <li><strong>Organization:</strong> Utilizing highly visual, color-coded planners and maintaining a strict "everything has its place" rule to counteract memory drops.</li>
                  <li><strong>Preparation:</strong> Laying out clothes and packing bags the night before to eliminate frantic, physically uncoordinated mornings.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b pb-2">Mental Health</h3>
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                  <li><strong>Counseling:</strong> Engaging in therapy to address the intense anxiety, frustration, and low self-esteem that often stem from chronic physical "failures."<sup>5</sup></li>
                  <li><strong>Strengths Focus:</strong> Actively protecting mental health by fiercely celebrating the individual's non-motor strengths, such as their empathy, creativity, or verbal intelligence.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dyspraxia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          Back to Dyspraxia
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
            Cited Studies & Literature
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p>1. Blank, R., et al. (2012). European Academy for Childhood Disability (EACD): Recommendations on the definition, diagnosis and intervention of developmental coordination disorder. <i>Developmental Medicine & Child Neurology</i>.</p>
            <p>2. Polatajko, H. J., & Mandich, A. (2004). <i>Enabling occupation in children: The cognitive orientation to daily occupational performance (CO-OP) approach</i>. CAOT Publications ACE.</p>
            <p>3. Smits-Engelsman, B., et al. (2018). Evaluating the evidence for motor-based interventions in developmental coordination disorder: A systematic review and meta-analysis. <i>Research in Developmental Disabilities</i>.</p>
            <p>4. Missiuna, C., et al. (2012). Enabling successful participation in school for children with developmental coordination disorder. <i>Physical & Occupational Therapy in Pediatrics</i>.</p>
            <p>5. Stephenson, E. A., & Chesson, R. A. (2008). 'Always the guiding hand': Parents' accounts of the long-term implications of developmental co-ordination disorder for their children and families. <i>Child: Care, Health and Development</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Boon, M. (2010). <i>Understanding Dyspraxia: A Guide for Parents and Teachers</i> (2nd ed.). Jessica Kingsley Publishers.</li>
            <li>Chu, S., & Reynolds, F. (2007). Occupational therapy for children with attention deficit hyperactivity disorder (ADHD), part 1: a delineation model of practice. <i>British Journal of Occupational Therapy</i>.</li>
            <li>Colley, M. (2006). <i>Living with Dyspraxia: A Guide for Adults with Developmental Co-ordination Disorders</i>. Jessica Kingsley Publishers.</li>
            <li>Dawson, P., & Guare, R. (2010). <i>Executive Skills in Children and Adolescents: A Practical Guide to Assessment and Intervention</i>. Guilford Press.</li>
            <li>Kirby, A., & Peters, L. (2007). <i>100 Ideas for Supporting Children with Dyspraxia and DCD</i>. Continuum.</li>
            <li>Macintyre, S. (2001). <i>Dyspraxia 5-14: Identifying and Supporting Young People</i>. Routledge.</li>
            <li>Missiuna, C., Rivard, L., & Bartlett, D. (2003). Early identification and risk management of children with clumsy motor behaviors. <i>Pediatric Physical Therapy</i>.</li>
            <li>Missiuna, C., et al. (2006). A trajectory of troubles: parents' impressions of the impact of developmental coordination disorder. <i>Physical & Occupational Therapy in Pediatrics</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}