import { ImageWithFallback } from '../../../figma/ImageWithFallback';
import { 
  Users, 
  RefreshCw, 
  Clock, 
  AlertCircle, 
  ShieldCheck, 
  Search,
  MessageSquare,
  Repeat
} from 'lucide-react';

export function CoreSymptoms() {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      {/* Introduction with Image Wrap */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <div className="block">
          <ImageWithFallback 
            src="/images/autism/autism-symptoms-Coretab-manuals.webp" 
            alt="Colorful patterned brain representing autism diversity"
            className="w-48 h-auto float-right ml-6 mb-4 rounded-md border border-gray-300 shadow-sm"
          />
          
          <h2 className="font-bold mb-4 text-2xl">Understanding Core Characteristics</h2>
          <p className="mb-4 leading-relaxed">
            The characteristics of autism spectrum disorder are highly variable, but they fall into two main 
            categories as defined by the DSM-5-TR:<sup>1</sup> persistent differences in social communication and interaction, 
            and restricted, repetitive patterns of behavior, interests, or activities.
          </p>
        </div>
        
        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded flex items-start gap-3">
          <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
          <p className="text-sm">
            <strong>Remember:</strong> These characteristics exist on a spectrum with tremendous variation between individuals. 
            No two autistic people present exactly the same way.
          </p>
        </div>
      </div>

      {/* DSM-5-TR Symptom Chart */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="font-bold mb-6 text-2xl text-center">DSM-5-TR Diagnostic Categories</h2>

        <div className="flex justify-center mb-8">
          <ImageWithFallback 
            src="/images/autism/autism-symptoms-Coretab-2core-venn.webp"
            alt="AUTISM Diagnostic Criteria Venn Diagram"
            className="w-full max-w-2xl rounded shadow-md"
          />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#2abcd4]">
          <h3 className="font-bold mb-4 text-lg flex items-center gap-2">
            <Search className="text-[#2abcd4]" /> Two Core Diagnostic Domains
          </h3>
          
          <div className="space-y-4">
            <div className="bg-[#f0f9ff] bg-opacity-50 p-4 rounded-md border-l-2 border-[#2abcd4]">
              <div className="font-bold mb-1 flex items-center gap-2">
                <MessageSquare size={18} className="text-[#2abcd4]" />
                1. Social Communication & Interaction
              </div>
              <div className="text-sm leading-relaxed">Persistent differences in social-emotional reciprocity, nonverbal communication, and developing/maintaining relationships.</div>
            </div>

            <div className="bg-[#f0f9ff] bg-opacity-50 p-4 rounded-md border-l-2 border-[#2abcd4]">
              <div className="font-bold mb-1 flex items-center gap-2">
                <Repeat size={18} className="text-[#2abcd4]" />
                2. Restricted & Repetitive Patterns
              </div>
              <div className="text-sm leading-relaxed">Including stereotyped movements, insistence on sameness, highly restricted interests, or sensory sensitivities.</div>
            </div>

            {/* Criteria C, D, E with Icon Anchors */}
            <div className="pt-4 grid md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-cyan-600">
                  <Clock size={14} /> Criterion C
                </div>
                <div className="text-[11px] leading-snug"><strong>Early Onset:</strong> Symptoms present in early development.</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-cyan-600">
                  <ShieldCheck size={14} /> Criterion D
                </div>
                <div className="text-[11px] leading-snug"><strong>Impairment:</strong> Causes clinically significant functional challenges.</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-cyan-600">
                  <Users size={14} /> Criterion E
                </div>
                <div className="text-[11px] leading-snug"><strong>Differential:</strong> Not better explained by ID or GDD.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
              
      {/* Variation Section */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="font-bold mb-4 text-2xl">Variation Across the Spectrum</h2>
        
        <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mb-6 text-center">
          <p className="italic text-lg">"If you've met one person with autism, you've met one person with autism."</p>
          <p className="text-sm font-bold mt-1">— Dr. Stephen Shore</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "Presence", desc: "Not all individuals have all characteristics." },
            { title: "Severity", desc: "Ranges from mild to requiring very substantial support." },
            { title: "Context", desc: "Challenges fluctuate based on environment and stress." },
            { title: "Masking", desc: "Camouflaging traits to fit into neurotypical settings." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-md shadow-sm border-l-4 border-orange-400">
              <h4 className="font-bold text-sm mb-1">{item.title}</h4>
              <p className="text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
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
            <p>1. American Psychiatric Association. (2022). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Constantino, J. N., & Charman, T. (2016). Diagnosis of autism spectrum disorder: reconciling the syndrome, its diverse etiology, and variation in expression. <i>The Lancet Neurology</i>.</li>
            <li>Hull, L., et al. (2017). Putting on My Best Normal: Social Camouflaging in Adults with Autism Spectrum Conditions. <i>Journal of Autism and Developmental Disorders</i>.</li>
            <li>Lord, C., et al. (2020). Autism spectrum disorder. <i>Nature Reviews Disease Primers</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}