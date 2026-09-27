import { ImageWithFallback } from '../../../figma/ImageWithFallback';
import { 
  Users, 
  RefreshCw, 
  Clock, 
  AlertCircle, 
  ShieldCheck, 
  Search,
  MessageSquare,
  Repeat,
  Zap,
  Target,
  Activity
} from 'lucide-react';

interface RepetitiveBehaviorsProps {
  setCurrentArticle?: (article: string) => void;
}

export function RepetitiveBehaviors({ setCurrentArticle }: RepetitiveBehaviorsProps) {
  return (
    <article className="space-y-6 max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
        Restricted/Repetitive Behaviors
      </h2>
      {/* --- CENTERED GRAPHIC SECTION: THE VIDEO  --- */}
      <div className="text-center w-full mb-10">
        <div className="mx-auto w-44 rounded-xl overflow-hidden">
         <video
           autoPlay
           loop
           muted
           playsInline
           poster="/images/autism/autism-symptoms-Reptab-pattern.webp"
           className="w-full h-auto object-contain"
           aria-label="kaleidoscope type video showing repetitive patterns in motion"
         >
           <source
             src="/images/autism/autism-symptoms-Reptab-pattern.mp4"
             type="video/mp4"
           />
           Your browser does not support the video tag.
         </video>
        </div>
        {/* THE FIX: Expanded segue caption */}
        <div className="mt-4 max-w-2xl mx-auto">
          <p className="text-sm italic text-[#0c264d]/70 mb-3">
          </p>
          <p className="text-base text-[#0c264d] leading-relaxed">
            While these behaviors are often clinically categorized as "restricted" or "repetitive," they frequently serve as essential tools for emotional regulation, deep focus, and joyful expression. Let's explore the four primary ways these behaviors naturally present across the spectrum:
          </p>
        </div>
      </div>

      {/* 2. STEREOTYPED OR REPETITIVE MOVEMENTS */}
      <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2 bg-[#ffd166]/20 rounded-lg text-[#0c264d]">
            <Activity size={24} />
          </span>
          <h3 className="text-[#0c264d] font-bold text-lg leading-tight">
            Stereotyped or Repetitive Movements, Speech, or Object Use
          </h3>
        </div>

        {/* GRAPHIC PLACEHOLDER 1 */}
        <div className="mb-6 mt-4">
          <ImageWithFallback
            src="/images/autism/autism-symptoms-Reptab-movements.webp"
            alt="Placeholder for stereotyped movements graphic"
            className="block mx-auto w-40 h-auto rounded-lg shadow-sm border-2 border-[#2abcd4] object-contain mb-3 bg-slate-50"
          />
          <p className="text-center text-xs italic text-slate-600 max-w-sm mx-auto">
            Stimming can include physical movements or vocalizations that actively help regulate the nervous system.
          </p>
        </div>
        
        <p className="mb-6 text-[#0c264d]">
          These behaviors, often called "stimming," serve various functions including self-regulation, expressing emotions, or responding to sensory input.<sup>1</sup>
        </p>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Motor Stereotypies</div>
              <div className="text-sm text-[#0c264d]">Hand flapping, rocking, spinning, jumping, finger flicking</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Vocal Stereotypies</div>
              <div className="text-sm text-[#0c264d]">Echolalia (repeating words), scripting, repetitive vocalizations</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Object Use</div>
              <div className="text-sm text-[#0c264d]">Lining up toys, spinning wheels, flicking strings</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="bg-[#ffd166]/10 p-3 rounded-lg text-xs italic text-[#0c264d]">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck size={14} />
                  <strong>Note:</strong>
                </div>
                Stimming serves important regulatory functions and shouldn't be suppressed unless harmful.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. INSISTENCE ON SAMENESS */}
      <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2 bg-[#ffd166]/20 rounded-lg text-[#0c264d]">
            <Repeat size={24} />
          </span>
          <h3 className="text-[#0c264d] font-bold text-lg leading-tight">
            Insistence on Sameness and Inflexible Adherence to Routines
          </h3>
        </div>

        {/* GRAPHIC PLACEHOLDER 2 */}
        <div className="mb-6 mt-4">
          <ImageWithFallback
            src="/images/autism/autism-symptoms-Reptab-sameness.webp"
            alt="Placeholder for sameness and routines graphic"
            className="block mx-auto w-40 h-auto rounded-lg shadow-sm border-2 border-[#2abcd4] object-contain mb-3 bg-slate-50"
          />
          <p className="text-center text-xs italic text-slate-600 max-w-sm mx-auto">
            Predictability provides a strong sense of safety and reduces cognitive load in an unpredictable world.
          </p>
        </div>

        <p className="mb-4 text-sm text-[#0c264d]">
          Many autistic individuals find comfort and security in predictability and sameness.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Rigid Routines</div>
            <div className="text-sm text-[#0c264d]">Specific sequence of activities; distress when disrupted</div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Difficulty with Transitions</div>
            <div className="text-sm text-[#0c264d]">Extreme distress when changing activities or environments</div>
          </div>
        </div>
      </div>

      {/* 4. HIGHLY RESTRICTED INTERESTS */}
      <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2 bg-[#ffd166]/20 rounded-lg text-[#0c264d]">
            <Target size={24} />
          </span>
          <h3 className="text-[#0c264d] font-bold text-lg leading-tight">
            Highly Restricted, Fixated Interests
          </h3>
        </div>

        {/* GRAPHIC PLACEHOLDER 3 */}
        <div className="mb-6 mt-4">
          <ImageWithFallback
            src="/images/autism/autism-symptoms-Reptab-interests.webp"
            alt="Placeholder for fixated interests graphic"
            className="block mx-auto w-40 h-auto rounded-lg shadow-sm border-2 border-[#2abcd4] object-contain mb-3 bg-slate-50"
          />
          <p className="text-center text-xs italic text-slate-600 max-w-sm mx-auto">
            Deep, specialized interests often lead to profound expertise, flow states, and immense personal joy.
          </p>
        </div>

        <p className="mb-4 text-sm text-[#0c264d]">
          Special interests are a hallmark feature of autism and can be a source of joy, expertise, and identity.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Intensity</div>
            <div className="text-sm text-[#0c264d]">Passionate, all-consuming focus with depth of knowledge</div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Persistence</div>
            <div className="text-sm text-[#0c264d]">Interests that may last months, years, or a lifetime</div>
          </div>
        </div>
      </div>

      {/* 5. SENSORY REACTIVITY */}
      <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2 bg-[#ffd166]/20 rounded-lg text-[#0c264d]">
            <Zap size={24} />
          </span>
          <h3 className="text-[#0c264d] font-bold text-lg leading-tight">
            Hyper- or Hyporeactivity to Sensory Input<sup>2</sup>
          </h3>
        </div>

        {/* GRAPHIC PLACEHOLDER 4 */}
        <div className="mb-6 mt-4">
          <ImageWithFallback
            src="/images/autism/autism-symptoms-Reptab-sensory.webp"
            alt="Placeholder for sensory reactivity graphic"
            className="block mx-auto w-40 h-auto rounded-lg shadow-sm border-2 border-[#2abcd4] object-contain mb-3 bg-slate-50"
          />
          <p className="text-center text-xs italic text-slate-600 max-w-sm mx-auto">
            Sensory processing differences mean the environment is often experienced with unique and powerful intensity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="space-y-3">
            <h4 className="font-bold text-[#0c264d] text-sm uppercase tracking-wide border-b border-[#2abcd4] pb-1">
              Hypersensitivity
            </h4>
            <div className="text-sm text-[#0c264d] pl-1">Overwhelmed by sounds, lights, or textures</div>
            <div className="text-sm text-[#0c264d] pl-1">Sensory overload leading to meltdowns</div>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-[#0c264d] text-sm uppercase tracking-wide border-b border-[#2abcd4] pb-1">
              Hyposensitivity
            </h4>
            <div className="text-sm text-[#0c264d] pl-1">Seeking intense experiences (movement, sound)</div>
            <div className="text-sm text-[#0c264d] pl-1">High pain tolerance or seeking tactile input</div>
          </div>
        </div>
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
            <p>1. Petty, S., et al. (2022). Revising our understanding of emotional distress for autistic adults; call for research. <i>Current Psychology</i>.</p>
            <p>2. MacLennan, K., et al. (2021). In Our Own Words: The Complex Sensory Experiences of Autistic Adults. <i>Journal of Autism and Developmental Disorders</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2022). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
          </ul>
        </div>
      </div>

    </article>
  );
}