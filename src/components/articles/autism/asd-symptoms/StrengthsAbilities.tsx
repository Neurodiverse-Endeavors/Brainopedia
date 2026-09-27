import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

/* ─── THE GUEST LIST (Interface) ─── */
interface StrengthsAbilitiesProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── STRENGTHS DATA ARRAY ─── */
const strengths = [
  {
    title: "Systematic Thinking",
    desc: "A natural aptitude for understanding complex systems, logical patterns, and rule-based structures.",
    color: "border-[#0c264d]", // Navy
    bg: "bg-[#0c264d]/5",
    iconColor: "text-[#0c264d]",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Visual & Spatial Thinking",
    desc: "Processing information in pictures rather than words. Excellent for design, engineering, and 3D problem-solving.",
    color: "border-[#2abcd4]", // Cyan
    bg: "bg-[#2abcd4]/10",
    iconColor: "text-[#2abcd4]",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Deep Focus & Flow",
    desc: "The ability to hyperfocus on areas of interest for extended periods, frequently leading to profound expertise.",
    color: "border-[#ffd166]", // Gold
    bg: "bg-[#ffd166]/20",
    iconColor: "text-[#d4a017]",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    title: "Authenticity & Honesty",
    desc: "Straightforward, transparent communication. A tendency to speak truthfully and value genuine interactions.",
    color: "border-[#ec4899]", // Pink
    bg: "bg-[#ec4899]/10",
    iconColor: "text-[#ec4899]",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Pattern Recognition",
    desc: "Noticing minute details, patterns, and discrepancies in environments or data that others might easily miss.",
    color: "border-[#8b5cf6]", // Purple
    bg: "bg-[#8b5cf6]/10",
    iconColor: "text-[#8b5cf6]",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    title: "Exceptional Memory",
    desc: "Unusual capacity to retain and recall facts, statistics, or visual information related to special interests.",
    color: "border-[#10b981]", // Green
    bg: "bg-[#10b981]/10",
    iconColor: "text-[#10b981]",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "Innovative Problem Solving",
    desc: "Approaching challenges from unconventional angles, leading to highly creative out-of-the-box solutions.",
    color: "border-[#f97316]", // Orange
    bg: "bg-[#f97316]/10",
    iconColor: "text-[#f97316]",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Deep Loyalty & Consistency",
    desc: "A profound commitment to personal values, moral justice, and a tight-knit circle of friends and loved ones.",
    color: "border-[#0a9dc4]", // Bright Blue
    bg: "bg-[#0a9dc4]/10",
    iconColor: "text-[#0a9dc4]",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

/* ─── MAIN COMPONENT ─── */
export function StrengthsAbilities({ setCurrentArticle }: StrengthsAbilitiesProps) {
  return (
    <article className="space-y-6 max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">Autistic Strengths and Abilities</h2>
        
        {/* --- CENTERED GRAPHIC SECTION --- */}
        <div className="mx-auto w-48 mb-8 mt-4 p-3 rounded-2xl border-4 border-[#0A9DC4] shadow-md bg-white">
          <ImageWithFallback 
            src="/images/autism/autism-symptoms-Strengthstab-gears.webp" 
            alt="Gears illustrating the interconnected nature of autistic strengths"
            className="w-full h-auto rounded-lg object-contain"
          />
        </div>

        <p className="mb-8 text-center text-lg text-[#0c264d] max-w-2xl mx-auto">
          While autism is often framed exclusively through a lens of deficits, 
          many autistic individuals possess profound and notable strengths:
        </p>

        {/* --- THE RAINBOW GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {strengths.map((strength, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border-l-4 ${strength.color} overflow-hidden flex flex-col`}
            >
              <div className="p-5 flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${strength.bg} ${strength.iconColor}`}>
                    {strength.icon}
                  </div>
                  <h3 className="font-bold text-[#0c264d] text-lg">{strength.title}</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {strength.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mb-4 text-[#0c264d] text-center max-w-3xl mx-auto">
          Recognizing and cultivating these strengths while providing necessary support for challenges is essential for helping autistic individuals thrive.
        </p>

        {/* --- IMPORTANT BANNER --- */}
        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-5 rounded-lg mt-8 shadow-sm">
          <p className="text-sm text-[#0c264d] leading-relaxed">
            <strong className="text-base mr-1">∞ Important:</strong> 
            Autism is a natural neurological variation, not a disease or defect. 
            With appropriate support, understanding, and accommodations, autistic individuals can lead fulfilling, 
            meaningful lives and make valuable contributions to society.
          </p>
        </div>
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
            <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
            <li>Baron-Cohen, S., et al. (2009). Talent in autism: hyper-systemizing, hyper-attention to detail and sensory hypersensitivity. <i>Philosophical Transactions of the Royal Society B: Biological Sciences</i>.</li>
            <li>Grandin, T. (2006). <i>Thinking in Pictures: And Other Reports from My Life with Autism</i>. Vintage Books.</li>
            <li>Mottron, L. (2011). Changing perceptions: The power of autism. <i>Nature</i>.</li>
            <li>Russell, G., et al. (2019). Mapping the autistic advantage from the accounts of adults diagnosed with autism: A qualitative study. <i>Autism in Adulthood</i>.</li>
          </ul>
        </div>
      </div>

    </article>
  );
}