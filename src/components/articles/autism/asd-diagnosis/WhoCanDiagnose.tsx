import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Stethoscope, MessageSquare, Hand, BookOpen, XCircle, Users, User } from 'lucide-react';

/* ─── THE GUEST LIST (Interface) ─── */
interface WhoCanDiagnoseProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function WhoCanDiagnose({ setCurrentArticle }: WhoCanDiagnoseProps) {
  
  // 1. ALL DATA LIVES HERE
  const pediatricProfessionals = [
    {
      credential: 'MD',
      title: 'Developmental Pediatricians',
      color: 'bg-[#0c264d]',
      textColor: 'text-white',
      badgeBg: 'bg-[#2abcd4]',
      titleColor: 'text-[#ffd166]',
      description:
        'Pediatricians with specialized training in developmental and behavioral disorders. Often lead autism diagnostic teams. Can prescribe medication and coordinate care.',
      bullets: ['Most commonly first stop for children', 'Can diagnose and manage ongoing care'],
    },
    {
      credential: 'PhD',
      title: 'Child Psychologists',
      color: 'bg-[#2abcd4]',
      textColor: 'text-[#0c264d]',
      badgeBg: 'bg-[#0c264d]',
      titleColor: 'text-[#0c264d]',
      description:
        'Doctoral-level professionals (Ph.D. or Psy.D.) trained in psychological assessment and child development. Administer observational tools like the ADOS-2.',
      bullets: ['Comprehensive testing and evaluation', 'Cannot prescribe medication (most states)'],
    },
    {
      credential: 'MD',
      title: 'Child Psychiatrists',
      color: 'bg-[#0c264d]',
      textColor: 'text-white',
      badgeBg: 'bg-[#2abcd4]',
      titleColor: 'text-[#ffd166]',
      description:
        'Medical doctors specializing in child mental health. Can diagnose autism, prescribe medication, and treat co-occurring conditions.',
      bullets: ['Can prescribe and manage medications', 'Treat co-occurring anxiety, ADHD, etc.'],
    },
    {
      credential: 'MD',
      title: 'Child Neurologists',
      color: 'bg-[#2abcd4]',
      textColor: 'text-[#0c264d]',
      badgeBg: 'bg-[#0c264d]',
      titleColor: 'text-[#0c264d]',
      description:
        'Medical doctors specializing in nervous system disorders in children. Often diagnose autism when seizures or neurological issues are present.',
      bullets: ['Key when neurological concerns exist', 'Can rule out other neurological conditions'],
    },
    {
      credential: 'MD',
      title: 'Pediatricians (with training)',
      color: 'bg-[#0c264d]',
      textColor: 'text-white',
      badgeBg: 'bg-[#2abcd4]',
      titleColor: 'text-[#ffd166]',
      description:
        'General pediatricians CAN diagnose autism if they have appropriate training. May refer to specialists for complex cases or comprehensive testing.',
      bullets: ['Often first point of contact for families', 'May refer to specialists for full eval'],
    },
  ];

  const adultProfessionals = [
    {
      credential: 'PhD',
      title: 'Clinical Psychologists',
      color: 'bg-[#0c264d]',
      textColor: 'text-white',
      badgeBg: 'bg-[#ffd166]',
      titleColor: 'text-[#ffd166]',
      description:
        'Doctoral-level psychologists (Ph.D. or Psy.D.) who are often the primary diagnosticians for adults. Look for those specifically stating they evaluate adults.',
      bullets: ['Conduct deep clinical interviews (MIGDAS-2)', 'Identify high-masking presentations'],
    },
    {
      credential: 'PhD',
      title: 'Neuropsychologists',
      color: 'bg-[#ffd166]',
      textColor: 'text-[#0c264d]',
      badgeBg: 'bg-[#0c264d]',
      titleColor: 'text-[#0c264d]',
      description:
        'Psychologists specializing in brain-behavior relationships. Conduct comprehensive testing of cognitive, language, social, and adaptive functions across the lifespan.',
      bullets: ['Best for complex diagnostic profiles', 'Detailed cognitive profile and report'],
    },
    {
      credential: 'MD',
      title: 'Adult Psychiatrists',
      color: 'bg-[#0c264d]',
      textColor: 'text-white',
      badgeBg: 'bg-[#ffd166]',
      titleColor: 'text-[#ffd166]',
      description:
        'Medical doctors (M.D. or D.O.) who can officially diagnose and are crucial for managing co-occurring conditions like severe anxiety, depression, or ADHD.',
      bullets: ['Can prescribe medication', 'Differentiate autism from mental health disorders'],
    },
    {
      credential: 'MD',
      title: 'Neurologists',
      color: 'bg-[#ffd166]',
      textColor: 'text-[#0c264d]',
      badgeBg: 'bg-[#0c264d]',
      titleColor: 'text-[#0c264d]',
      description:
        'While less common for primary adult autism diagnosis, they are essential if there is a history of seizures, sudden regression, or overlapping neurological issues.',
      bullets: ['Rule out medical causes of symptoms', 'Manage epilepsy and migraines'],
    },
  ];

  const teamMembers = [
    {
      role: 'Evaluating Clinician',
      duty: 'Leads the evaluation, synthesizes data, makes the official diagnosis',
      icon: Stethoscope,
    },
    {
      role: 'Speech-Language Pathologist',
      duty: 'Evaluates communication differences, self-advocacy skills, and pragmatic (social) language',
      icon: MessageSquare,
    },
    {
      role: 'Occupational Therapist',
      duty: 'Assesses sensory processing differences, executive functioning, and motor skills',
      icon: Hand,
    },
    {
      role: 'Educational / Vocational Specialist',
      duty: 'Evaluates learning profiles, workplace accommodations, or educational needs',
      icon: BookOpen,
    },
  ];

  const cannotDiagnose = [
    { label: 'Licensed Therapists (LCSW, LPC, LMFT)', note: 'Often the first to suspect autism in adults. They can provide essential therapy and suggest pursuing an evaluation, but typically cannot legally diagnose it themselves (varies by state).' },
    { label: 'Teachers or School Counselors', note: 'Can recommend evaluation and provide school-based supports, but cannot diagnose medically.' },
    { label: 'Online "Autism Tests" (AQ, RAADS-R)', note: 'Excellent tools for self-discovery and deciding to seek an evaluation, but cannot replace a professional clinical diagnosis.' },
  ];

  // 2. THE RENDER BLOCK
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]"> 
      
      {/* Intro Section */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg mb-6">
        <h2 className="font-bold mb-4 text-2xl">Who Can Diagnose Autism?</h2>
        <p className="mb-4 leading-relaxed">
          Diagnosing autism involves a comprehensive evaluation of developmental history, behavior patterns, 
          and current functioning. Because autism presents differently across the lifespan, the specialists who evaluate toddlers are rarely the same specialists who evaluate adults.
        </p> 
        <p className="mb-2 leading-relaxed">
          An autism diagnosis must be made by licensed medical or mental health professionals with specific training in autism assessment.
        </p>
      </div>

      {/* Pediatric Professionals Grid */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
        <div className="flex flex-col items-center text-center mb-8">
          <h3 className="text-[#0c264d] font-bold mb-6 text-xl flex items-center justify-center gap-2 w-full">
            <Users className="text-[#2abcd4]" size={24} /> Evaluating Children & Adolescents
          </h3>
          
          <ImageWithFallback
            src="/images/autism/autism-diagnosis-WhoCantab-doctor-plays.webp"
            alt="Doctor playing with child during assessment"
            className="w-48 h-auto mb-4 rounded-md border border-gray-300 shadow-sm" 
          />
          <p className="text-sm text-gray-700 max-w-2xl text-left">
            These professionals are typically accessed through pediatric referrals, early intervention programs, or school systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pediatricProfessionals.map((pro) => (
            <div key={pro.title} className={`${pro.color} rounded-lg p-4 flex gap-3`}>
              <div className={`${pro.badgeBg} rounded-full w-12 h-12 flex items-center justify-center shrink-0 mt-1`}>
                <span className="text-white text-xs font-bold">{pro.credential}</span>
              </div>
              <div>
                <div className={`font-bold text-sm mb-1 ${pro.titleColor}`}>{pro.title}</div>
                <div className={`text-xs mb-2 ${pro.textColor} opacity-90`}>{pro.description}</div>
                <ul className={`text-xs space-y-0.5 ${pro.textColor}`}>
                  {pro.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

    {/* Adult Professionals Grid */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm mb-6">
        <div className="flex flex-col items-center text-center mb-8">
          <h3 className="text-[#0c264d] font-bold mb-6 text-xl flex items-center justify-center gap-2 w-full">
            <User className="text-[#d97706]" size={24} /> Evaluating Adults
          </h3>
          
          <ImageWithFallback
            src="/images/autism/autism-diagnosis-WhoCantab-adult-dx.webp"
            alt="Adult in a clinical evaluation setting"
            className="w-48 h-auto mb-4 rounded-md border border-gray-300 shadow-sm" 
          />
          <p className="text-sm text-gray-700 max-w-2xl text-left">
            Adult assessments require clinicians experienced in high-masking presentations, psychiatric overlaps, and retrospective developmental interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {adultProfessionals.map((pro) => (
            <div key={pro.title} className={`${pro.color} rounded-lg p-4 flex gap-3`}>
              <div className={`${pro.badgeBg} rounded-full w-12 h-12 flex items-center justify-center shrink-0 mt-1`}>
                <span className={`${pro.badgeBg === 'bg-[#ffd166]' ? 'text-[#0c264d]' : 'text-white'} text-xs font-bold`}>{pro.credential}</span>
              </div>
              <div>
                <div className={`font-bold text-sm mb-1 ${pro.titleColor}`}>{pro.title}</div>
                <div className={`text-xs mb-2 ${pro.textColor} opacity-90`}>{pro.description}</div>
                <ul className={`text-xs space-y-0.5 ${pro.textColor}`}>
                  {pro.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Multidisciplinary Team */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-2 text-lg">The Multidisciplinary Approach</h3>
        <p className="text-sm mb-4">
          The most thorough evaluations, particularly for complex cases, involve a team of professionals mapping out a comprehensive support profile:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {teamMembers.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.role} className="flex gap-3 bg-[#f0f9ff] rounded-md p-3 border border-[#2abcd4]/30">
                <Icon className="text-[#0A9DC4] shrink-0 mt-0.5" size={22} />
                <div>
                  <div className="font-bold text-[#0c264d] text-sm mb-1">{m.role}</div>
                  <div className="text-xs text-gray-700">{m.duty}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Who CANNOT Diagnose */}
      <div className="bg-white p-5 rounded-md border-l-4 border-purple-500 shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg flex items-center gap-2">
          <XCircle className="text-purple-500" size={20} />
          Who Cannot Legally Diagnose Autism
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#0c264d] text-white">
                <th className="text-left p-3 rounded-tl-md w-2/5">Professional / Entity</th>
                <th className="text-left p-3 rounded-tr-md">Their Role</th>
              </tr>
            </thead>
            <tbody>
              {cannotDiagnose.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? 'bg-purple-50' : 'bg-white'}>
                  <td className="p-3 font-semibold text-purple-700 border-b border-purple-100 align-top">{row.label}</td>
                  <td className="p-3 text-gray-700 border-b border-purple-100">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Finding a Provider */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-6 text-lg">Navigating the System: Finding a Provider</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-bold text-[#2abcd4] border-b border-[#2abcd4]/20 pb-2">For Children</h4>
            
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Start with the Pediatrician</div>
              <div className="text-sm text-gray-700">They can provide the necessary medical referrals to regional Developmental Pediatricians or autism centers to ensure insurance covers the visit.</div>
            </div>

            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">State & School Resources</div>
              <div className="text-sm text-gray-700">For children under 3, contact your state's Early Intervention program. For children 3+, submit a written request for evaluation to your local school district (these are federally mandated and free).</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-[#ffd166] border-b border-[#ffd166]/30 pb-2">For Adults</h4>
            
            <div className="border-l-2 border-[#ffd166] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Search Neurodiversity Directories</div>
              <div className="text-sm text-gray-700">Search online therapeutic directories and filter your results specifically for "Autism" and "Adults." Please note that public directories are not formally vetted, so always ask potential providers about their specific training and experience with adult autism assessments.</div>
            </div>

            <div className="border-l-2 border-[#ffd166] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">University Clinics</div>
              <div className="text-sm text-gray-700">Many major university psychology departments operate training clinics that offer comprehensive adult neuropsychological evaluations on a sliding fee scale.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-[#fef3c7] border-l-4 border-[#d97706] p-4 rounded mb-6">
        <p className="text-sm mb-3">
          <strong className="text-[#d97706]">Wait Times:</strong> Evaluations at specialized clinics frequently have waitlists ranging from 6 to 18 months. Do not wait to seek an evaluation if you have concerns.
        </p>
        <p className="text-sm">
          <strong className="text-[#d97706]">Financial Reality:</strong> While pediatric evaluations are often covered by health insurance or provided free by schools, adult evaluations are frequently out-of-network. Private clinical evaluations can range from $1,500 to $5,000 depending on the depth of testing.
        </p>
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
  
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2022). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
            <li>Hull, L., et al. (2017). 'Putting on my best normal': Social camouflaging in adults with autism spectrum conditions. <i>Journal of Autism and Developmental Disorders</i>.</li>
            <li>Lord, C., et al. (2018). Autism spectrum disorder. <i>The Lancet</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}