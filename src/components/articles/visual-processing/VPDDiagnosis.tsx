import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Glasses, Activity, ClipboardList, Eye, FileText, CheckCircle, Search, ShieldAlert, Building, Heart, PenTool, BookOpen, Users } from 'lucide-react';

interface VPDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function VPDDiagnosis({ setCurrentArticle, initialTab }: VPDDiagnosisProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'process');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* GLOBAL STYLE FOR CITATIONS */}
      <style>
        {`
          sup {
            color: #10b981;
            font-weight: bold;
            margin-left: 2px;
          }
        `}
      </style>

      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Visual Processing Disorder: Testing & Diagnosing
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('visual-processing')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About VPD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('visual-processing')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About VPD
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('process')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'process'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Diagnostic Process
        </button>
        <button
          onClick={() => setActiveTab('tests')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'tests'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Tests & Measures
        </button>
        <button
          onClick={() => setActiveTab('differential')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'differential'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Differential & Access
        </button>
      </div>

      {/* ==========================================
          TAB 1: THE DIAGNOSTIC PROCESS
      ========================================== */}
      {activeTab === 'process' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Who Diagnoses Card (Cyan) - W-64 Centered Hero */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Who Diagnoses VPD?</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-diagnosis-professionals-hero.webp"
              alt="A multidisciplinary team reviewing a student's file"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Because VPD exists at the intersection of optometry, motor coordination, and cognitive processing, comprehensive evaluation requires a multidisciplinary team.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Glasses className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Developmental Optometrists</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Unlike standard eye doctors, developmental optometrists have specialized training in visual perception and learning-related vision problems. They assess how the brain processes what the eye sees.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Activity className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Occupational Therapists</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">OTs evaluate how visual perception directly impacts functional skills. They are highly skilled in assessing visual-motor integration (like handwriting) and recommending practical daily interventions.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Brain className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Neuropsychologists</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">They conduct comprehensive cognitive assessments. A neuropsychologist differentiates visual processing difficulties from overarching cognitive delays, identifying patterns across multiple domains.</p>
              </div>
            </div>
          </div>

          {/* The Steps Card (Yellow) - W-Full Centered Hero */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Evaluation Process</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-diagnosis-steps-hero.webp"
              alt="Visual flowchart showing the journey from screening to neuropsychological evaluation"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <ClipboardList className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">1. Case History</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Gathering developmental milestones, family history of learning disabilities, and specific academic struggles noted by parents and teachers.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Eye className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">2. Vision Exam</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">A comprehensive eye exam must precede VPD testing to rule out refractive errors or binocular vision dysfunctions that mimic processing issues.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <FileText className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">3. Standardized Tests</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Administering norm-referenced tests to determine if the patient's visual processing falls significantly below expectations for their age.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <CheckCircle className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">4. Functional Impact</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Observing how the deficits actually affect real-world tasks—reading fluency, handwriting mechanics, and daily physical coordination.</p>
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
                <li>Scheiman, M., & Rouse, M. W. (2006). Optometric management of learning-related vision problems. <i>Mosby Elsevier</i>.</li>
                <li>Schneck, C. M. (2010). Visual perception. In <i>Occupational therapy for children</i>. Mosby Elsevier.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: TESTS & MEASURES
      ========================================== */}
      {activeTab === 'tests' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Tests Card (Slate) - W-64 Centered Hero */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Standardized Testing</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-diagnosis-tests-hero.webp"
              alt="Child actively completing a visual-motor integration test on paper"
              className="block mx-auto w-96 h-auto mb-6 rounded-lg shadow-sm border border-gray-300"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Clinicians rely on a battery of specific, norm-referenced tests to break down the exact visual sub-skills the patient is struggling with.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <FileText className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">DTVP-3</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The Developmental Test of Visual Perception assesses children ages 4-12. It provides separate, highly detailed scores for visual-motor integration versus motor-reduced visual perception.<sup>1</sup></p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Eye className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">TVPS-4</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The Test of Visual Perceptual Skills is entirely motor-free. It evaluates visual memory, spatial relationships, and figure-ground without requiring the patient to draw or write anything.<sup>2</sup></p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <PenTool className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Beery VMI</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The Beery-Buktenica test assesses visual-motor integration specifically by having the individual copy complex geometric forms. It helps determine if the breakdown is visual, motor, or the integration of both.<sup>3</sup></p>
              </div>
            </div>
          </div>

          {/* Vision & Observation Card (Cyan) - W-Full Centered Hero */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Vision & Functional Observation</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-diagnosis-vision-hero.webp"
              alt="Split screen: optometrist checking binocular vision versus evaluator observing handwriting"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Glasses className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Binocular Vision</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Testing how the two eyes physically work together (eye teaming, tracking, and focusing). Binocular vision problems heavily affect reading and must be treated directly with vision therapy.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Search className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Handwriting Analysis</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Evaluating physical writing samples reveals immense data about visual-motor integration, spatial organization on the page, and the visual memory required for letter forms.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <BookOpen className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Academic Observation</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Reviewing schoolwork shows how VPD affects daily academics—such as math errors strictly related to spatial column misalignment, or becoming completely overwhelmed by visually complex worksheets.</p>
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
                <p>1. Hammill, D. D., Pearson, N. A., & Voress, J. K. (2014). Developmental Test of Visual Perception (3rd ed.). <i>Pro-Ed</i>.</p>
                <p>2. Martin, N. A. (2017). Test of Visual Perceptual Skills (4th ed.). <i>Pro-Ed</i>.</p>
                <p>3. Beery, K. E., Buktenica, N. A., & Beery, N. A. (2010). Beery-Buktenica Developmental Test of Visual-Motor Integration (6th ed.). <i>Pearson</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>American Optometric Association. (2017). Care of the patient with learning related vision problems. <i>AOA</i>.</li>
                <li>Cornhill, H., & Case-Smith, J. (1996). Factors that relate to good and poor handwriting. <i>American Journal of Occupational Therapy</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: DIFFERENTIAL & ACCESS
      ========================================== */}
      {activeTab === 'differential' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Differential Card (Yellow) - W-64 Centered Hero */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Differential Diagnosis</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-diagnosis-differential-hero.webp"
              alt="Magnifying glass separating the overlapping traits of VPD, Dyslexia, and ADHD"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              VPD overlaps heavily with other conditions. An evaluator must carefully pull apart these threads to ensure accurate, targeted interventions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Brain className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">vs. Cognitive Delays</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">VPD involves severe visual processing deficits that are entirely disproportionate to the individual's general intellectual ability. They are often highly intelligent but mechanically struggle with visual translation.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <ShieldAlert className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">vs. ADHD</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Both feature inattention and losing place while reading. However, ADHD impairs attention across all sensory modalities, while VPD difficulties are specifically tied to visual processing demands.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Glasses className="text-[#d4a017] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">vs. Vision Problems</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Distinguishing neurological processing issues from mechanical eye-based problems is fundamental. Refractive errors (needing glasses) or eye-teaming dysfunctions require entirely different interventions than VPD.</p>
              </div>
            </div>
          </div>

          {/* Access Card (Slate) - W-Full Centered Hero */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Access & The Value of Diagnosis</h2>
            
            <ImageWithFallback 
              src="/images/vpd/vpd-diagnosis-access-hero.webp"
              alt="Parent sitting with a psychologist, reviewing a comprehensive diagnostic report"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Building className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">The Access Hurdle</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Not all areas have professionals trained in specialized visual processing assessment. Some public school systems do not recognize VPD for special education eligibility, often forcing families to seek out-of-pocket private evaluations.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Heart className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Emotional Validation</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Diagnosis provides a concrete explanation for longstanding difficulties. Understanding that challenges stem from genuine neurological differences—rather than a lack of effort—reduces massive amounts of self-blame and frustration.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <FileText className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">The Diagnostic Report</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">A comprehensive report details the exact pattern of visual strengths and weaknesses. This documentation is the absolute foundation for advocating for targeted school accommodations and protecting the student's learning environment.</p>
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
                <li>Sattler, J. M. (2008). Assessment of children: Cognitive foundations (5th ed.). <i>Jerome M. Sattler, Publisher</i>.</li>
                <li>American Optometric Association. (2017). Care of the patient with learning related vision problems. <i>AOA</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('visual-processing')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About VPD
        </button>
      </div>

    </article>
  );
}