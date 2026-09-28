import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { BrainCircuit, Pill, ShieldCheck, HeartHandshake, Users, School } from 'lucide-react';

interface TouretteSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TouretteSupport({ setCurrentArticle, initialTab }: TouretteSupportProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'therapy');

  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Tourette's: Support & Management
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('tourette')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Tourette's
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('therapy')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'therapy'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Therapy & Medication
        </button>
        <button
          onClick={() => setActiveTab('neurotech')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'neurotech'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Emerging Neurotech
        </button>
        <button
          onClick={() => setActiveTab('environment')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'environment'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Environmental Supports
        </button>
      </div>

      {/* ==========================================
          TAB 1: THERAPY & MEDICATION
      ========================================== */}
      {activeTab === 'therapy' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            Many individuals with mild tics do not require medical intervention. When support is requested, management plans are highly individualized and focus on reducing the distress and physical discomfort associated with tics.
          </p>

          {/* Clinical Management Card (Cyan) - Uses Pure Lucide Icons */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <ImageWithFallback 
              src="/images/tourette/tourette-support-main.webp"
              alt="Medical professional discussing treatment plans"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center clear-both">Clinical Management</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Treatment decisions are driven by how much the tics interfere with the individual's daily functioning and personal goals, utilizing a blend of behavioral and pharmacological approaches.<sup>1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">Behavioral Interventions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <BrainCircuit className="w-5 h-5 text-[#2abcd4] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>CBIT:</strong> Comprehensive Behavioral Intervention for Tics helps individuals recognize their premonitory urges and develop "competing responses" to safely manage the physical tension.<sup>2</sup></p>
                  </li>
                  <li className="flex items-start gap-3">
                    <HeartHandshake className="w-5 h-5 text-[#2abcd4] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Co-occurring Support:</strong> Therapies often simultaneously target OCD, ADHD, or anxiety, which frequently cause more functional impairment than the tics themselves.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-cyan-100">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">Pharmacological Options</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Pill className="w-5 h-5 text-[#2abcd4] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Medications:</strong> When behavioral approaches are insufficient, specific medications (such as alpha-2 agonists) may be prescribed to reduce tic severity.<sup>3</sup></p>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#2abcd4] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Careful Monitoring:</strong> Because medications carry potential side effects, dosing is highly tailored and continually monitored by a specialist.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: EMERGING NEUROTECH
      ========================================== */}
      {activeTab === 'neurotech' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            The landscape of Tourette's management is rapidly evolving, with breakthrough neurotechnology offering non-invasive, wearable alternatives to traditional pharmaceutical treatments.
          </p>

          {/* Neupulse Card (Yellow) - Uses CSS Number Badges */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <ImageWithFallback 
              src="/images/tourette/tourette-support-neurotech.webp"
              alt="Wearable neuromodulation device on a wrist"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center clear-both">Wearable Neuromodulation</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Devices like the developing <strong>Neupulse</strong> wearable represent a significant leap in accessible tic management, allowing individuals to utilize targeted neural stimulation throughout their daily lives.<sup>4</sup>
            </p>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200 max-w-3xl mx-auto">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg border-b pb-2">How It Works</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#d4a017] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
                  <p className="text-sm text-slate-700"><strong>Median Nerve Stimulation:</strong> The wearable device delivers gentle, rhythmic electrical pulses to the median nerve at the wrist, which communicates directly with the brain networks involved in motor control.<sup>4</sup></p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#d4a017] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
                  <p className="text-sm text-slate-700"><strong>Clinical Efficacy:</strong> UK-based double-blind clinical trials conducted by the University of Nottingham demonstrated that home-administered rhythmic stimulation effectively reduces both tic frequency and severity.<sup>5</sup></p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#d4a017] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</div>
                  <p className="text-sm text-slate-700"><strong>Discreet Support:</strong> Because the technology is integrated into a wearable wristband, it provides non-invasive, drug-free support without causing disruption in social or professional settings.</p>
                </li>
              </ul>
            </div>
          </div>
          {/* BBC News Video Embed */}
            <div className="max-w-3xl mx-auto mb-8 relative w-full aspect-video rounded-lg overflow-hidden shadow-sm border border-yellow-200">
              <iframe 
                src="https://www.youtube.com/embed/ZxfG0tt2vq0?rel=0" 
                title="BBC Breakfast News: Neupulse Clinical Trial" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: ENVIRONMENTAL SUPPORTS
      ========================================== */}
      {activeTab === 'environment' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            True management of Tourette's extends beyond the individual. Creating an educated, flexible, and supportive environment drastically reduces the stress that often exacerbates tic frequency.
          </p>

          {/* Environment Card (Slate) - Uses Popped Hover Layout */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <ImageWithFallback 
              src="/images/tourette/tourette-support-environment.webp"
              alt="Educator supporting a neurodivergent student"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-slate-200"
            />
            
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center clear-both">Community & Accommodations</h2>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Accommodations focus on removing barriers to success, ensuring that individuals can focus their energy on learning and working rather than suppressing their neurotype.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-[#f0f9ff] p-3 rounded-full border border-[#2abcd4] border-opacity-30 mb-3">
                  <School className="text-[#0c264d] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">School & Workplace</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Essential accommodations include allowing the individual to leave the room for a "tic break" to safely release tension, providing extended testing time, and ignoring minor, non-disruptive tics entirely.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="bg-[#fffbeb] p-3 rounded-full border border-[#ffd166] border-opacity-50 mb-3">
                  <Users className="text-[#d4a017] w-6 h-6" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Peer Education</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Stigma is one of the heaviest burdens of Tourette's. Educating classmates, teachers, and coworkers directly reduces bullying and transforms hostile environments into inclusive communities.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('tourette')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 whitespace-nowrap"
        >
          <span className="text-lg">←</span>
          All About Tourette's
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
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p>1. Pringsheim, T., et al. (2019). Practice guideline recommendations summary: Treatment of tics in people with Tourette syndrome and chronic tic disorders. <i>Neurology</i>.</p>
            <p>2. Piacentini, J., et al. (2010). Behavior therapy for children with Tourette disorder: A randomized controlled trial. <i>JAMA</i>.</p>
            <p>3. Roessner, V., et al. (2011). European clinical guidelines for Tourette syndrome and other tic disorders. Part II: Pharmacological treatment. <i>European Child & Adolescent Psychiatry</i>.</p>
            <p>4. Morera Maiquez, B., et al. (2020). Entraining movement-related brain oscillations to suppress tics in Tourette syndrome. <i>Current Biology</i>.</p>
            <p>5. Jackson, S. R., et al. (2023). A double-blind, sham-controlled, trial of home-administered rhythmic median nerve stimulation for the reduction of tics, and suppression of the urge-to-tic, in individuals with Tourette syndrome. <i>MedRxiv</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Conelea, C. A., et al. (2011). The impact of a stress induction task on tic frequencies in youth with Tourette syndrome. <i>Behaviour Research and Therapy</i>.</li>
            <li>Greene, D. J., et al. (2023). Peripheral nerve induction of inhibitory brain circuits to treat Tourette. <i>Brain Stimulation</i>.</li>
            <li>Rizzo, R., et al. (2017). Gilles de la Tourette syndrome, depression, depressive illness, and correlates in a child and adolescent population. <i>Journal of Child and Adolescent Psychopharmacology</i>.</li>
            <li>Verdellen, C., et al. (2011). European clinical guidelines for Tourette syndrome and other tic disorders. Part III: Behavioural and psychosocial interventions. <i>European Child & Adolescent Psychiatry</i>.</li>
            <li>Wilhelm, S., et al. (2012). Randomized trial of behavior therapy for adults with Tourette syndrome. <i>Archives of General Psychiatry</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}