import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { BrainCircuit, Pill, ShieldCheck, HeartHandshake, Users, School, AlertTriangle, Activity, Zap } from 'lucide-react';

interface TouretteSupportProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function TouretteSupport({ setCurrentArticle, initialTab }: TouretteSupportProps) {
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
          onClick={() => handleTabChange('therapy')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'therapy'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Therapy & Medication
        </button>
        <button
          onClick={() => handleTabChange('neurotech')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'neurotech'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Neuromodulation
        </button>
        <button
          onClick={() => handleTabChange('environment')}
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

          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <ImageWithFallback 
              src="/images/tourette/tourette-support-main.webp"
              alt="Medical professional discussing treatment plans"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center clear-both">Clinical Management</h2>

            <div className="bg-[#fdf2f8] border-l-4 border-[#be185d] p-5 rounded-r-xl shadow-sm mb-8 max-w-3xl mx-auto">
              <h3 className="font-bold text-[#831843] mb-2 uppercase text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" /> Medical Disclaimer
              </h3>
              <p className="text-sm text-[#831843]">
                All prescription medications must strictly be used under the direct guidance of a qualified medical professional. This information is for educational context and does not replace personalized clinical advice.
              </p>
            </div>
            
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
          TAB 2: NEUROMODULATION (COMPLIANT OVERHAUL)
      ========================================== */}
      {activeTab === 'neurotech' && (
        <div className="space-y-8 animate-fadeIn">
          
          <p className="text-slate-700 leading-relaxed text-sm text-center max-w-4xl mx-auto mb-8">
            The landscape of Tourette's management is rapidly evolving, with breakthrough neurotechnology offering both non-invasive and surgical alternatives to traditional pharmaceutical treatments.
          </p>

          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <ImageWithFallback 
              src="/images/tourette/tourette-support-neurotech.webp"
              alt="Neuromodulation concepts and brain networks"
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center clear-both">Neuromodulation Technologies</h2>

            <div className="bg-[#fdf2f8] border-l-4 border-[#be185d] p-5 rounded-r-xl shadow-sm mb-8 max-w-3xl mx-auto">
              <h3 className="font-bold text-[#831843] mb-2 uppercase text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" /> Regulatory & FDA Disclaimer
              </h3>
              <p className="text-sm text-[#831843]">
                The information provided is strictly for general educational awareness. Many non-invasive neuromodulation devices are currently undergoing clinical trials and have not yet received FDA clearance for the treatment of Tourette syndrome. Always consult a neurologist regarding medical devices.
              </p>
            </div>
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Neuromodulation involves using electrical or magnetic pulses to alter nerve activity. While some surgical approaches are established for severe cases, other external methods are currently undergoing clinical trials to provide accessible, non-drug support.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#fff9e6] flex items-center justify-center mb-3">
                  <Activity className="text-[#ffd166] w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Peripheral Nerve Stimulation (PNS)</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Investigational wearable devices aim to deliver gentle electrical pulses to the median nerve at the wrist. Recent UK-based clinical trials demonstrate this rhythmic stimulation may effectively intercept signals and reduce tic severity without medication.<sup>4, 5</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#fff9e6] flex items-center justify-center mb-3">
                  <BrainCircuit className="text-[#ffd166] w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Deep Brain Stimulation (DBS)</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  An established surgical intervention reserved for severe, highly treatment-resistant Tourette syndrome. It involves implanting electrodes into specific brain regions (like the thalamus) to regulate abnormal neurological impulses.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#fff9e6] flex items-center justify-center mb-3">
                  <Zap className="text-[#ffd166] w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Transcranial Magnetic Stimulation (TMS)</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  A non-invasive, outpatient procedure that uses magnetic fields to stimulate targeted nerve cells in the brain. It is currently being heavily researched in clinical trials as a potential method for suppressing the urge to tic.
                </p>
              </div>
            </div>
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
                  <Users className="text-[#ffd166] w-6 h-6" />
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