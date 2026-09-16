import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Activity, Brain, CheckCircle, Hand, Settings, Heart, Home, GraduationCap, Clock, Headphones, Anchor, Users, MessageSquare, ListChecks, ShieldCheck } from 'lucide-react';

interface SPDSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function SPDSupport({ setCurrentArticle, initialTab }: SPDSupportProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'therapy');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px]">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          SPD: Support & Management
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('spd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About SPD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('spd')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About SPD
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <button
          onClick={() => setActiveTab('therapy')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'therapy'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Therapies & Techniques
        </button>
        <button
          onClick={() => setActiveTab('environment')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'environment'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Environment & Tech
        </button>
        <button
          onClick={() => setActiveTab('family')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'family'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Family & Collaboration
        </button>
      </div>

      {/* ==========================================
          TAB 1: THERAPIES & TECHNIQUES
      ========================================== */}
      {activeTab === 'therapy' && (
        <div className="space-y-8 animate-fadeIn">

          {/* ASI Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Ayres Sensory Integration® (ASI)</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-support-therapy.webp"
              alt="Child actively engaged in a clinical occupational therapy gym"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              The ultimate goal of intervention is not to "cure" SPD, but to actively retrain the nervous system while building functional self-regulation strategies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Activity className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Core ASI Principles</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">ASI uses highly structured, child-directed physical play to provide controlled sensory experiences (using swings, crash mats, and tactile bins). This forces the nervous system to organize input and generate an adaptive, coordinated physical response.<sup>1</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <CheckCircle className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Modern Clinical Evidence</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Contemporary research strongly supports ASI. A landmark 2014 randomized controlled trial demonstrated that children receiving rigorous, high-fidelity ASI therapy showed significant, measurable improvements in sensory processing and daily functional goals.<sup>2</sup></p>
                </div>
              </div>
            </div>
          </div>

          {/* Specific Techniques Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Specific Intervention Techniques</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-support-techniques.webp"
              alt="Close-up of clinical sensory tools, such as a therapeutic Wilbarger brush"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Hand className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Wilbarger Protocol</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A specific deep-pressure technique utilizing a therapeutic surgical brush followed by joint compressions. It is widely used by OTs to aggressively address severe tactile defensiveness.<sup>3</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Brain className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Alert Program®</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A cognitive approach that teaches children to recognize their internal arousal states using an engine metaphor ("Is my engine running too fast, too slow, or just right?").<sup>4</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Heart className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">SOS Approach to Feeding</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The Sequential Oral Sensory (SOS) approach is utilized when sensory sensitivities cause severe picky eating. It involves a playful, non-stressful desensitization to new textures and smells.<sup>5</sup></p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Protocols
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Parham, L. D., et al. (2011). Development of a fidelity measure for research on the effectiveness of the Ayres Sensory Integration intervention. <i>American Journal of Occupational Therapy</i>.</p>
                <p>2. Schaaf, R. C., et al. (2014). An intervention for sensory difficulties in children with autism: A randomized trial. <i>Journal of Autism and Developmental Disorders</i>.</p>
                <p>3. Wilbarger, P., & Wilbarger, J. L. (1991). Sensory Defensiveness in Children. <i>Avanti Educational Programs</i>.</p>
                <p>4. Williams, M. S., & Shellenberger, S. (1996). How Does Your Engine Run? A Leader's Guide to the Alert Program. <i>TherapyWorks</i>.</p>
                <p>5. Toomey, K. A., & Ross, E. S. (2011). SOS Approach to Feeding. <i>Perspectives on Swallowing and Swallowing Disorders</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>May-Benson, T. A., & Koomar, J. A. (2010). Systematic review of the research evidence examining the effectiveness of interventions using a sensory integrative approach. <i>American Journal of Occupational Therapy</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: ENVIRONMENT & TECH
      ========================================== */}
      {activeTab === 'environment' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Environmental Mods Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Environmental Modifications</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-support-environment.webp"
              alt="A calm, sensory-friendly cool down corner with soft lighting"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-300"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              You cannot always change the nervous system, but you can change the environment. Modifying the surroundings to remove sensory friction is the fastest way to improve daily functioning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <Home className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Home Sanctuaries</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Establish a predictable "calm down corner" featuring dim lighting and low sensory input. Transition to tagless clothing, soft fabrics, and predictable mealtime routines to prevent surprise overload.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <GraduationCap className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">School Settings</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Accommodations include preferential seating away from noisy doors, explicit advance warnings for sensory-intense activities (like fire drills), and alternative seating like wobble cushions to allow subtle movement.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <Clock className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Sensory Diets</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">A personalized schedule of sensory activities implemented throughout the day to keep the nervous system regulated. This balances "alerting" activities (crunchy snacks) with "calming" heavy work (pushing walls).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech & Tools Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Assistive Technology & Tools</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-support-tech.webp"
              alt="Child wearing noise-canceling headphones while working"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Headphones className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Auditory Protections</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Noise-canceling headphones or discreet earplugs are vital for surviving cafeterias and shopping centers. White noise machines help mask unpredictable environmental sounds during sleep or study.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Settings className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Tactile & Oral Tools</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Discreet fidget tools (spinners, textured objects) keep the hands occupied to improve focus. Chewable jewelry or specialized pencil toppers safely satisfy intense oral sensory-seeking needs.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Anchor className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Proprioceptive Input</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Weighted vests, weighted blankets, and compression clothing provide continuous, calming deep-pressure input. These must be used under OT guidance with explicit wearing schedules to prevent habituation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Bodison, S. C., & Parham, L. D. (2018). Specific sensory techniques and sensory environmental modifications for children and youth with sensory integration difficulties. <i>American Journal of Occupational Therapy</i>.</li>
                <li>Champagne, T. (2011). Sensory modulation and environment: Essential elements of occupation. <i>Pearson</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: FAMILY & COLLABORATION
      ========================================== */}
      {activeTab === 'family' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Family Support Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Supporting Caregivers</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-support-family.webp"
              alt="Occupational therapist sitting with parents, reviewing a sensory diet schedule"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Families are the primary implementers of sensory support. Equipping them with education and emotional validation is just as critical as the clinical therapy itself.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <MessageSquare className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Psychoeducation</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Helping families understand that SPD is a valid, measurable neurological difference. Reframing "bad behavior" as "sensory overload" profoundly shifts the family dynamic toward empathy.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <ListChecks className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Strategy Development</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Therapists must actively teach caregivers how to implement "sensory diets" at home, manage meltdown triggers, and utilize deep-pressure regulation techniques effectively.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <ShieldCheck className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Advocacy Training</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Empowering parents to advocate for their child. This includes teaching them the vocabulary needed to successfully negotiate for 504 Plan accommodations or IEP services within the school system.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Collaborative Care Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Collaborative & Holistic Care</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-support-collaborative.webp"
              alt="A multidisciplinary meeting with a teacher, speech pathologist, and OT"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <Users className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Interdisciplinary Teams</h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-4">
                    SPD rarely exists in isolation. Comprehensive support requires seamless communication between the lead OT, the psychologist (addressing co-occurring anxiety), the speech pathologist (for oral-motor/feeding delays), and the classroom teachers implementing daily accommodations.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <Heart className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Evidence-Informed Goals</h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-4">
                    Intervention must be fiercely functional. Therapy goals should never be about "normalizing" the child's sensory preferences, but rather improving their quality of life, emotional regulation, and meaningful participation in daily activities.
                  </p>
                </div>
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
                <li>Pfeiffer, B. A., et al. (2011). Effectiveness of sensory integration interventions in children with autism spectrum disorders: A pilot study. <i>American Journal of Occupational Therapy</i>.</li>
                <li>Dunst, C. J., et al. (2007). Meta-analysis of family-centered help giving practices research. <i>Mental Retardation and Developmental Disabilities Research Reviews</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}