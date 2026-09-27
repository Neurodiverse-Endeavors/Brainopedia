import {
  Baby,
  BookOpen,
  User,
  ArrowDown,
  AlertCircle,
  HelpCircle,
  Lightbulb,
  Users,
  EyeOff,
  School,
  ShieldAlert,
  ClipboardList,
  GitBranch,
  Sparkles,
} from 'lucide-react';

/* ─── Sub-card inside each stage ─── */
function SubCard({
  icon: Icon,
  title,
  accentColor,
  bgColor,
  children,
}: {
  icon: React.ElementType;
  title: string;
  accentColor: string;
  bgColor: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-lg p-4 flex gap-3"
      style={{ backgroundColor: bgColor, borderLeft: `4px solid ${accentColor}` }}
    >
      <Icon size={20} color={accentColor} className="shrink-0 mt-0.5" />
      <div>
        <div className="font-bold text-[#0c264d] mb-1" style={{ fontSize: '0.92rem' }}>
          {title}
        </div>
        <div className="text-sm text-gray-700">{children}</div>
      </div>
    </div>
  );
}

/* ─── Stage header bar ─── */
function StageHeader({
  icon: Icon,
  label,
  ages,
  bgColor,
  textColor = '#ffffff',
}: {
  icon: React.ElementType;
  label: string;
  ages: string;
  bgColor: string;
  textColor?: string;
}) {
  return (
    <div
      className="flex items-center gap-4 rounded-t-xl px-6 py-4"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="rounded-full p-2 flex items-center justify-center"
        style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
      >
        <Icon size={28} color={textColor} />
      </div>
      <div>
        <div className="font-bold" style={{ color: textColor, fontSize: '1.1rem' }}>
          {label}
        </div>
        <div className="text-sm" style={{ color: textColor, opacity: 0.85 }}>
          {ages}
        </div>
      </div>
    </div>
  );
}

/* ─── Flow connector between stages ─── */
function FlowConnector({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center my-2">
      <div className="w-px h-4 bg-[#2abcd4]" />
      <div className="flex items-center gap-2 bg-[#2abcd4] text-white rounded-full px-4 py-1 text-xs font-bold">
        <ArrowDown size={13} />
        {label}
      </div>
      <div className="w-px h-4 bg-[#2abcd4]" />
    </div>
  );
}

/* ─── THE GUEST LIST (Interface) ─── */
interface AcrossLifespanProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function AcrossLifespan({ setCurrentArticle }: AcrossLifespanProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnosis Across the Lifespan</h2>

        {/* Key Fact */}
        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
          <p className="text-sm">
            <strong>Key Fact:</strong> Current autism prevalence is approximately 1 in 36 children.
            Autism can be reliably diagnosed by age 2, but many individuals — especially girls, women,
            and those without intellectual disability — are not diagnosed until adolescence or adulthood.
          </p>
        </div>
      </div>

      {/* ── STAGE 1: Early Childhood ── */}
      <div className="rounded-xl shadow-md overflow-hidden mb-2">
        <StageHeader
          icon={Baby}
          label="Early Childhood"
          ages="Under 3 Years"
          bgColor="#0c264d"
        />
        <div className="bg-white p-5 rounded-b-xl space-y-3">
          <p className="text-sm text-gray-700 mb-1">
            Autism can be reliably diagnosed by age 2, sometimes earlier:
          </p>

          <SubCard icon={AlertCircle} title="Early Signs to Watch For" accentColor="#0A9DC4" bgColor="#f0f9ff">
            <ul className="space-y-0.5 mt-1">
              <li>• Lack of pointing by 12 months</li>
              <li>• Reduced or unusual eye contact</li>
              <li>• Lack of response to name by 12 months</li>
              <li>• Loss of previously acquired skills (regression)</li>
              <li>• Lack of babbling or gesturing by 12 months</li>
              <li>• Limited social smiling or social engagement</li>
              <li>• Repetitive behaviors (hand flapping, spinning, lining up toys)</li>
            </ul>
          </SubCard>

          <SubCard icon={HelpCircle} title="Challenges in Early Diagnosis" accentColor="#ffd166" bgColor="#fffdf0">
            Developmental variability in toddlers, overlap with other developmental delays, and
            some traits that emerge only later as social demands increase.
          </SubCard>

          <SubCard icon={Lightbulb} title="Why Early Diagnosis Matters" accentColor="#10b981" bgColor="#f0fdf4">
            Earlier diagnosis enables earlier intervention, which research shows can significantly
            improve outcomes. Early Intervention services (birth–3) provide support during critical
            developmental windows.
          </SubCard>
        </div>
      </div>

      <FlowConnector label="Growing Up" />

      {/* ── STAGE 2: School Age ── */}
      <div className="rounded-xl shadow-md overflow-hidden mb-2">
        <StageHeader
          icon={School}
          label="School Age"
          ages="3 – 18 Years"
          bgColor="#2abcd4"
          textColor="#0c264d"
        />
        <div className="bg-white p-5 rounded-b-xl space-y-3">
          <p className="text-sm text-gray-700 mb-1">
            Most autism diagnoses occur during this period:
          </p>

          <SubCard icon={AlertCircle} title="Common Triggers for Evaluation" accentColor="#0A9DC4" bgColor="#f0f9ff">
            <ul className="space-y-0.5 mt-1">
              <li>• Social difficulties at school (trouble making/keeping friends, playground struggles)</li>
              <li>• Academic challenges despite apparent intelligence</li>
              <li>• Behavioral concerns (meltdowns, rigidity, difficulty with transitions)</li>
              <li>• Teacher observations of "different" social interaction or play</li>
              <li>• Sensory sensitivities affecting school participation</li>
            </ul>
          </SubCard>

          <SubCard icon={EyeOff} title="Important Considerations" accentColor="#f59e0b" bgColor="#fffbeb">
            Some children, particularly girls, may have developed coping strategies or "masking"
            that hide autistic traits.<sup>1</sup> This can delay
            diagnosis despite genuine struggles. Burnout from masking often becomes apparent in
            middle school or high school.
          </SubCard>

          <SubCard icon={Users} title="School-Based vs. Clinical Diagnosis" accentColor="#8b5cf6" bgColor="#f5f3ff">
            Schools can identify students as "eligible for services under autism," but this is an
            educational classification, not a medical diagnosis. Clinical diagnosis by a qualified
            professional is recommended.
          </SubCard>
        </div>
      </div>

      <FlowConnector label="Into Adulthood" />

      {/* ── STAGE 3: Adulthood ── */}
      <div className="rounded-xl shadow-md overflow-hidden mb-6">
        <StageHeader
          icon={User}
          label="Adulthood"
          ages="18 + Years"
          bgColor="#0A9DC4"
        />
        <div className="bg-white p-5 rounded-b-xl space-y-3">
          <p className="text-sm text-gray-700 mb-1">
            Increasing numbers of adults seek autism diagnosis:
          </p>

          <SubCard icon={ShieldAlert} title="Barriers to Adult Diagnosis" accentColor="#ef4444" bgColor="#fef2f2">
            <ul className="space-y-0.5 mt-1">
              <li>• Fewer specialists trained in adult autism assessment</li>
              <li>• Lack of adult-specific diagnostic tools</li>
              <li>• Insurance coverage issues (some insurers don't cover adult evaluation)</li>
              <li>• Misconception that autism only affects children</li>
              <li>• Long wait lists (6–24+ months)</li>
            </ul>
          </SubCard>

          <SubCard icon={EyeOff} title="Challenges in Adult Assessment" accentColor="#f59e0b" bgColor="#fffbeb">
            <ul className="space-y-0.5 mt-1">
              <li>• Retrospective developmental history (parents may not be available or remember details)</li>
              <li>• Learned compensation strategies mask traits<sup>1</sup></li>
              <li>• Co-occurring conditions (anxiety, depression) developed over years of struggling</li>
              <li>• Adult life demands differ from childhood contexts</li>
            </ul>
          </SubCard>

          <SubCard icon={ClipboardList} title="Adapted Tools for Adults" accentColor="#0A9DC4" bgColor="#f0f9ff">
            Some tools have been modified for adult populations. Clinical judgment by experienced
            professionals is crucial. ADOS-2 includes a module for adults. Self-report measures
            like the AQ (Autism Quotient) can supplement assessment but do not replace comprehensive
            evaluation.
          </SubCard>

          <SubCard icon={GitBranch} title="Common Pathways to Adult Diagnosis" accentColor="#8b5cf6" bgColor="#f5f3ff">
            <ul className="space-y-0.5 mt-1">
              <li>• Parent diagnosed after child receives autism diagnosis</li>
              <li>• Burnout from years of masking</li>
              <li>• Mental health treatment for anxiety/depression reveals underlying autism</li>
              <li>• Learning about autism and recognizing oneself</li>
              <li>• Seeking explanation for lifelong feelings of being "different"</li>
            </ul>
          </SubCard>

          <SubCard icon={Sparkles} title="Impact of Late Diagnosis" accentColor="#10b981" bgColor="#f0fdf4">
            Can provide profound clarity and relief, validation of lifelong struggles, access to
            accommodations and services, connection to the autistic community and identity, and
            reframing of past experiences in a neurodiversity-affirming way.
          </SubCard>
        </div>
      </div>

      {/* Bottom callout */}
      <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
        <p className="text-sm">
          <strong>It's Never Too Late:</strong> Many autistic adults describe diagnosis as
          life-changing, even in their 30s, 40s, 50s, or beyond. Understanding your neurology
          helps you advocate for your needs, find community, and practice self-compassion. If you
          suspect you might be autistic, seeking evaluation is valid at any age.
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
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Hull, L., et al. (2017). Putting on my best normal: Social camouflaging in adults with autism spectrum conditions. <i>Journal of Autism and Developmental Disorders</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Howlin, P., et al. (2004). Adult outcome for children with autism. <i>Journal of Child Psychology and Psychiatry</i>.</li>
            <li>Lai, M. C., et al. (2014). Autism. <i>The Lancet</i>.</li>
            <li>Zwaigenbaum, L., et al. (2015). Early identification and interventions for autism spectrum disorder: Executive summary. <i>Pediatrics</i>.</li>
          </ul>
        </div>
      </div>
      
    </article>
  );
}