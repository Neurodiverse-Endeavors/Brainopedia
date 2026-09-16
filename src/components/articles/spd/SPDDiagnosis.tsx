import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Users, Stethoscope, Activity, FileText, CheckSquare, MessageSquare, ClipboardList, Home, Eye, Puzzle, Brain, GitMerge, AlertTriangle, Heart, ShieldAlert, ListChecks } from 'lucide-react';

interface SPDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function SPDDiagnosis({ setCurrentArticle, initialTab }: SPDDiagnosisProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'process');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px]">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          SPD: Testing & Diagnosing
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
          onClick={() => setActiveTab('process')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'process'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Assessment Process
        </button>
        <button
          onClick={() => setActiveTab('tools')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'tools'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Tools & Measures
        </button>
        <button
          onClick={() => setActiveTab('diagnosis')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'diagnosis'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Diagnosis & Context
        </button>
      </div>

      {/* ==========================================
          TAB 1: THE ASSESSMENT PROCESS
      ========================================== */}
      {activeTab === 'process' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Assessment Professionals Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Assessment Professionals</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-diagnosis-professionals.webp"
              alt="Multidisciplinary team reviewing a child's clinical file"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Evaluating how a nervous system processes the physical world requires highly specialized training. While multidisciplinary teams are ideal, the primary diagnostician is usually a specialized occupational therapist.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Activity className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Occupational Therapists (OTs)</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The primary professionals who assess SPD. Parents should specifically seek out OTs who have advanced, rigorous certification in Ayres Sensory Integration® (ASI).</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Brain className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Psychologists</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Crucial for differential diagnosis. Psychologists assess whether the sensory symptoms are part of a co-occurring condition like ADHD, an anxiety disorder, or Autism.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Stethoscope className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Developmental Pediatricians</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Medical doctors who specialize in childhood development. They often coordinate the comprehensive evaluation and rule out strictly medical or genetic causes for the symptoms.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="bg-[#f0f9ff] p-2 rounded-lg border border-[#2abcd4] border-opacity-30 shrink-0">
                  <Users className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Speech & Physical Therapists</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">SLPs frequently evaluate oral-motor or feeding difficulties related to sensory textures, while PTs assess how vestibular (balance) and proprioceptive functions affect gross motor movement.</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Evaluation Journey Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Evaluation Journey</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-diagnosis-process.webp"
              alt="Visual flowchart tracking the journey from consultation to feedback session"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <MessageSquare className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">1. Consultation</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">A detailed parent/caregiver interview gathering prenatal history, developmental milestones, and specific concerns across home and school environments.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <CheckSquare className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">2. Information Gathering</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Completion of standardized parent/teacher questionnaires to map out the individual's baseline sensory reactivity in natural environments.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Eye className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">3. Clinical Observation</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Direct interaction with the individual to observe their motor planning, self-regulation strategies, and physical responses to controlled sensory stimuli.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <FileText className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">4. Integration & Feedback</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The OT synthesizes all data to identify the specific SPD subtype, culminating in a comprehensive diagnostic report with targeted home and school recommendations.</p>
              </div>
            </div>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Parham, L. D., & Mailloux, Z. (2015). Sensory integration. In <i>Occupational Therapy for Children and Adolescents</i>. Elsevier.</li>
                <li>Schaaf, R. C., & Lane, A. E. (2015). Toward a best-practice protocol for assessment of sensory features in ASD. <i>Journal of Autism and Developmental Disorders</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: TOOLS & MEASURES
      ========================================== */}
      {activeTab === 'tools' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Questionnaires Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Standardized Questionnaires</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-diagnosis-questionnaires.webp"
              alt="Parent filling out a standardized digital questionnaire regarding a child's sensory habits"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-300"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Before stepping into a clinic, evaluators rely heavily on standardized questionnaires to measure how the individual reacts to daily, real-world sensory events.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <ClipboardList className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Sensory Profile 2</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Updated in 2014, this is a comprehensive, widely used questionnaire completed by caregivers. It measures sensory patterns (modulation, discrimination) across multiple contexts for individuals from birth through adulthood.<sup>1</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-slate-100 p-2 rounded-lg border border-gray-200 shrink-0">
                  <Home className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Sensory Processing Measure (SPM)</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Evaluates sensory processing, motor planning (praxis), and social participation, specifically comparing how the child functions at home versus how they function in the school environment.<sup>2</sup></p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Assessments Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Performance Assessments</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-diagnosis-performance.webp"
              alt="Child engaged in a structured, playful motor-planning assessment in a sensory gym"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Puzzle className="text-[#2abcd4] w-5 h-5" /> The SIPT
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  The Sensory Integration and Praxis Tests (SIPT) is the classic gold standard for children ages 4-8. It is a comprehensive battery of 17 distinct tests measuring various aspects of sensory perception, motor planning, and visual-motor integration. It requires rigorous, specialized certification for the OT to administer and accurately interpret.
                </p>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <Activity className="text-[#2abcd4] w-5 h-5" /> The EASI (Modern Tool)
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Published in 2018, the Evaluation in Ayres Sensory Integration (EASI) is a modern, globally normed assessment tool.<sup>3</sup> It was designed to provide highly objective measurements of sensory perception, postural control, and praxis, offering a more contemporary alternative to older testing batteries.
                </p>
              </div>

            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Standardized Assessments
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Dunn, W. (2014). Sensory Profile 2: User's Manual. <i>Pearson</i>.</p>
                <p>2. Parham, L. D., Ecker, C., Miller Kuhaneck, H., Henry, D. A., & Glennon, T. J. (2007). Sensory Processing Measure (SPM): Manual. <i>Western Psychological Services</i>.</p>
                <p>3. Mailloux, Z., Parham, L. D., Roley, S. S., Ruzzano, L., & Schaaf, R. C. (2018). Introduction to the Evaluation in Ayres Sensory Integration (EASI). <i>American Journal of Occupational Therapy</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Ayres, A. J. (1989). Sensory Integration and Praxis Tests (SIPT). <i>Western Psychological Services</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: DIAGNOSIS & CONTEXT
      ========================================== */}
      {activeTab === 'diagnosis' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Differential Diagnosis Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Differential Diagnosis</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-diagnosis-differential.webp"
              alt="Clinical diagram showing the overlapping circles of SPD, Autism, and ADHD"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Because sensory issues frequently co-occur with other neurodevelopmental profiles, a careful differential diagnosis must ensure the right interventions are prioritized.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <GitMerge className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Autism Spectrum Disorder</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Sensory differences are foundational to Autism. A comprehensive 2015 clinical protocol emphasizes that assessments must clearly determine whether SPD is occurring independently or as a component of the broader Autistic profile.<sup>1</sup></p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Brain className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">ADHD vs. SPD</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Both conditions heavily involve impulse control and regulation challenges. A child fidgeting in class might have ADHD (needing movement to maintain attention) or SPD (craving vestibular input to regulate their nervous system).</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Heart className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Anxiety Disorders</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Sensory pain directly triggers a physiological anxiety response, while existing psychological anxiety can dramatically lower a person's sensory threshold, making them more reactive to lights and sounds.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <ShieldAlert className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Medical Exclusions</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Before diagnosing a processing disorder, basic sensory impairments (like requiring prescription glasses or having a physical hearing deficit) must be entirely ruled out by medical specialists.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Diagnostic Considerations Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Diagnostic Criteria & Considerations</h2>
            
            <ImageWithFallback 
              src="/images/spd/spd-diagnosis-criteria.webp"
              alt="Evaluator reviewing assessment data and matching it against specific diagnostic criteria"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <ListChecks className="text-[#2abcd4] w-5 h-5" /> Proposed Criteria
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Because SPD is absent from the DSM-5, clinicians rely on the proposed nosology developed by Lucy Jane Miller and colleagues.<sup>2</sup> To qualify for an SPD diagnosis, the individual must exhibit patterns consistent with an SPD subtype, show measurable differences on standardized tests, and—most importantly—the symptoms must severely interfere with daily functioning and participation.
                </p>
              </div>

              <div>
                <h3 className="text-[#0c264d] font-bold text-lg mb-4 flex items-center gap-2">
                  <AlertTriangle className="text-[#2abcd4] w-5 h-5" /> Context Matters
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  A high-quality assessment recognizes that a child's sensory profile is deeply affected by their environment. A child might have perfectly regulated sensory responses in a calm, quiet home, but experience complete sensory modulation failure in a loud, chaotic school cafeteria. Diagnoses must account for these environmental stressors.
                </p>
              </div>

            </div>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Protocols
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Schaaf, R. C., & Lane, A. E. (2015). Toward a best-practice protocol for assessment of sensory features in ASD. <i>Journal of Autism and Developmental Disorders</i>.</p>
                <p>2. Miller, L. J., Anzalone, M. E., Lane, S. J., Cermak, S. A., & Osten, E. T. (2007). Concept evolution in sensory integration: A proposed nosology for diagnosis. <i>American Journal of Occupational Therapy</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>American Psychiatric Association. (2013). Diagnostic and Statistical Manual of Mental Disorders (5th ed.).</li>
                <li>Lane, S. J., Reynolds, S., & Thacker, L. (2010). Sensory over-responsivity and ADHD: Differentiating using electrodermal responses, cortisol, and anxiety. <i>Frontiers in Integrative Neuroscience</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}