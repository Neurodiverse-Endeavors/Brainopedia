import { MessageSquare, Repeat, MonitorSmartphone, HandMetal, Eye, Heart, Volume2, LayoutGrid, Users, Activity, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

/* ─── INTERFACE ─── */
interface SpeechTherapyProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function SpeechTherapy({ setCurrentArticle }: SpeechTherapyProps) {
  
  const responsiveImageClass = "w-full sm:w-96 md:w-[28rem] h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm";
  const centeredSmallImageClass = "w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm";
  const floatedCardContainer = "float-right ml-6 mb-4 bg-white p-2 rounded-lg shadow-sm border border-gray-200 w-64 shrink-0";
  const floatedImageClass = "w-full h-auto rounded-md block";
  
  return (
    <article id="full-speech-article" className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* ===== HEADER ROW ===== */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Speech and Language Therapy
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
        >
          <span className="text-lg">←</span>
          Back to Therapies
        </button>
      </div>

      {/* Introduction (Floated Image) */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 mb-8 flow-root">
        <div className={floatedCardContainer}>
          <ImageWithFallback 
            src="/images/autism/autism-support-TTtab-speech-intro.webp"
            alt="Speech Therapy Intro"
            className={floatedImageClass}
          />
        </div>
        <p className="text-sm leading-relaxed mb-4">
          With an autism diagnosis, selecting communication strategies is a crucial step to empower the individual. Approaches range from high-tech AAC devices and structured language programs to naturalistic, everyday strategies that integrate seamlessly into a person's life.
        </p>
        <p className="text-sm leading-relaxed">
          Modern, neurodiversity-affirming speech therapy has shifted away from compliance-based models or trying to make autistic individuals sound "indistinguishable from their peers." Instead, the focus is on fostering <strong>autonomous communication</strong>—giving an individual the ability to convey what they want, to whom they want, when they want—and honoring their unique voice and needs.
        </p>
      </div>

      {/* ===== THE COMMUNICATION ENVIRONMENT ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <Users className="text-[#0A9DC4]" size={24} /> 
          Setting Up the Communication Environment
        </h2>
        
        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-speech-comm-enviro.webp"
          alt="Communication Environment"
          className={responsiveImageClass}
        />

        <p className="text-sm mb-6 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
          Communication isn't just about the tools an individual uses; it is heavily dependent on how we set up the physical space and how we act as communication partners.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <div className="font-bold text-[#0c264d] mb-1 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#10b981] text-white flex items-center justify-center text-xs">1</span>
              Wait Time (10-15 Sec)
            </div>
            <div className="text-sm text-gray-700 ml-8">After asking a question or making a statement, wait at least 10-15 seconds. Processing language and formulating a response can take much longer for autistic individuals.</div>
          </div>
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <div className="font-bold text-[#0c264d] mb-1 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center text-xs">2</span>
              Reduce Verbal Demands
            </div>
            <div className="text-sm text-gray-700 ml-8">Avoid firing rapid questions. Use more declarative comments (e.g., <em>"I see you're looking at the car"</em>) rather than constant demands (e.g., <em>"What is that?"</em>).</div>
          </div>
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <div className="font-bold text-[#0c264d] mb-1 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#2abcd4] text-white flex items-center justify-center text-xs">3</span>
              Accept All Communication
            </div>
            <div className="text-sm text-gray-700 ml-8">Treat any attempt to communicate—a gesture, a sound, leading you by the hand, or looking at an object—as entirely valid and respond to it naturally.</div>
          </div>
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <div className="font-bold text-[#0c264d] mb-1 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#0c264d] text-white flex items-center justify-center text-xs">4</span>
              Model the Tools
            </div>
            <div className="text-sm text-gray-700 ml-8">Use the person's AAC system yourself to show them how it works without demanding they use it (e.g., press "I want drink" on their board when offering them water).</div>
          </div>
        </div>
      </div>

      {/* ===== VISUAL SUPPORTS ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <Eye className="text-[#2abcd4]" size={24} /> 
          Visual Support Strategies
        </h2>
        
        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-speech-visuals.webp"
          alt="Visual Supports"
          className={responsiveImageClass}
        />

        <p className="text-sm mb-4 text-gray-700 leading-relaxed">
          Visuals make language concrete, reduce anxiety, and aid in processing information. They are an essential foundation for communication.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <div className="font-bold text-[#0c264d] mb-1">Visual Schedules</div>
            <p className="text-sm text-gray-700">Using pictures or words to outline the day's sequence. This drastically reduces anxiety about "what's next."</p>
          </div>
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <div className="font-bold text-[#0c264d] mb-1">First-Then Boards</div>
            <p className="text-sm text-gray-700">A simple two-step visual (e.g., "FIRST: clean up, THEN: iPad") to clarify immediate expectations and provide motivation.</p>
          </div>
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <div className="font-bold text-[#0c264d] mb-1">Emotion Cards & Scales</div>
            <p className="text-sm text-gray-700">Visual tools (like a 1-5 frustration scale) to help someone identify and communicate their internal emotional state.</p>
          </div>
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <div className="font-bold text-[#0c264d] mb-1">Social Stories™</div>
            <p className="text-sm text-gray-700">Short, personalized stories that explain upcoming social situations and expected behaviors using pictures and clear text.</p>
          </div>
        </div>
      </div>

      {/* ===== AAC (Augmentative and Alternative Communication) ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <MonitorSmartphone className="text-[#d97706]" size={24} /> 
          AAC: Augmentative & Alternative Communication
        </h2>
        
        <p className="text-sm mb-6 text-gray-700 leading-relaxed">
          AAC methods supplement or replace speech. It is critical to understand that <strong>AAC does not hinder verbal speech development</strong>. The golden rule of AAC is to presume competence and provide a robust vocabulary so the individual can complain, tell jokes, and express complex feelings, not just request items.
        </p>

        <div className="space-y-8">
          <div>
            <h4 className="font-bold text-[#0c264d] mb-3 flex items-center gap-2 border-b border-[#ffd166]/50 pb-1">
              <HandMetal className="text-[#d97706]" size={18} /> No-Tech / Low-Tech AAC
            </h4>
            <div className="grid md:grid-cols-3 gap-3 mb-4">
              <div className="bg-[#fff9e6] p-3 rounded border border-[#ffd166]/30">
                <div className="font-bold text-[#0c264d] text-sm mb-1">Core Boards</div>
                <div className="text-xs text-gray-700">Printed binders or boards with categorized vocabulary that the user points to.</div>
              </div>
              <div className="bg-[#fff9e6] p-3 rounded border border-[#ffd166]/30">
                <div className="font-bold text-[#0c264d] text-sm mb-1">Choice Boards</div>
                <div className="text-xs text-gray-700">Simple boards displaying 2-4 options to empower immediate decision-making.</div>
              </div>
              <div className="bg-[#fff9e6] p-3 rounded border border-[#ffd166]/30">
                <div className="font-bold text-[#0c264d] text-sm mb-1">PECS</div>
                <div className="text-xs text-gray-700">A structured exchange system where the user hands a picture to a partner to communicate.</div>
              </div>
            </div>
            
            <ImageWithFallback 
              src="/images/autism/autism-support-TTtab-speech-lo-tech-choices.webp"
              alt="Low-Tech AAC Examples"
              className={responsiveImageClass}
            />
          </div>

          <div>
            <h4 className="font-bold text-[#0c264d] mb-3 flex items-center gap-2 border-b border-[#ffd166]/50 pb-1">
              <LayoutGrid className="text-[#d97706]" size={18} /> High-Tech AAC & Devices
            </h4>
            <div className="grid md:grid-cols-2 gap-3 mb-4">
              <div className="bg-[#fff9e6] p-4 rounded border border-[#ffd166]/30">
                <div className="font-bold text-[#0c264d] text-sm mb-1">Robust iOS Apps</div>
                <div className="text-sm text-gray-700">Apps like <em>ProLoQuo2Go, TouchChat</em>, and <em>LAMP Words for Life</em> allow users to build complete sentences via symbols on a tablet.</div>
              </div>
              <div className="bg-[#fff9e6] p-4 rounded border border-[#ffd166]/30">
                <div className="font-bold text-[#0c264d] text-sm mb-1">Dedicated Devices</div>
                <div className="text-sm text-gray-700">Medical-grade speech-generating devices (often featuring eye-gaze technology for limited motor skills).</div>
              </div>
            </div>
            
            <ImageWithFallback 
              src="/images/autism/autism-support-TTtab-speech-hi-tech-choices.webp"
              alt="High-Tech AAC Examples"
              className={responsiveImageClass}
            />
          </div>

          <div>
            <h4 className="font-bold text-[#0c264d] mb-3 flex items-center gap-2 border-b border-[#ffd166]/50 pb-1">
              <Volume2 className="text-[#d97706]" size={18} /> Technology-Assisted Tools
            </h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20 shadow-sm">
                <div className="font-bold text-[#0c264d] text-sm mb-2 uppercase tracking-wider">Text-to-Speech</div>
                <div className="text-sm text-gray-700">For individuals who can spell, apps like <em>Predictable</em> (or simple Notes apps) offer powerful on-the-fly communication by reading typed words out loud.</div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="font-bold text-[#0c264d] text-sm mb-2 uppercase tracking-wider">Voice Banking</div>
                <div className="text-sm text-gray-700 mb-3">A proactive process of recording natural voice for future use.</div>
                
                <div className="flex flex-wrap justify-between items-center bg-[#fff9e6] p-2 rounded-lg border border-[#ffd166]/50">
                  <div className="text-center px-1"><div className="font-bold text-[#0c264d] text-[10px] md:text-xs uppercase">1. Record</div></div>
                  <ArrowRight className="text-[#d97706]" size={14} />
                  <div className="text-center px-1"><div className="font-bold text-[#0c264d] text-[10px] md:text-xs uppercase">2. Store</div></div>
                  <ArrowRight className="text-[#d97706]" size={14} />
                  <div className="text-center px-1"><div className="font-bold text-[#0c264d] text-[10px] md:text-xs uppercase">3. Use</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== ECHOLALIA & SCRIPTING ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <Repeat className="text-[#0A9DC4]" size={24} /> 
          Echolalia
        </h2>

        <div className="space-y-4 mb-6">
          <div className="border-l-2 border-[#2abcd4] pl-4">
            <div className="font-bold text-[#0c264d] mb-1">Immediate Echolalia</div>
            <p className="text-sm text-gray-700">Repeating words or phrases right after hearing them. (e.g., You ask, <em>"Let's go outside?"</em> and they immediately respond, <em>"Let's go outside."</em>)</p>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-4">
            <div className="font-bold text-[#0c264d] mb-1">Delayed Echolalia</div>
            <p className="text-sm text-gray-700">Repeating phrases after a delay, which can include recalling lines from movies, books, or conversations heard days or even months earlier in a completely different context.</p>
          </div>
        </div>

        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-speech-echolalia.webp"
          alt="Children Echolalia"
          className={responsiveImageClass}
        />

        {/* Echolalia Processing Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-[#f0f9ff] p-3 rounded-lg border border-[#0A9DC4]/20 text-center shadow-sm">
            <div className="w-8 h-8 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold mx-auto mb-2 text-sm">1</div>
            <h4 className="font-bold text-[#0c264d] text-xs mb-1 uppercase tracking-wider">Hearing</h4>
            <p className="text-[11px] text-gray-600 leading-tight">A sound or words are heard by the individual.</p>
          </div>
          <div className="bg-[#f0f9ff] p-3 rounded-lg border border-[#0A9DC4]/20 text-center shadow-sm">
            <div className="w-8 h-8 rounded-full bg-[#2abcd4] text-white flex items-center justify-center font-bold mx-auto mb-2 text-sm">2</div>
            <h4 className="font-bold text-[#0c264d] text-xs mb-1 uppercase tracking-wider">Processing</h4>
            <p className="text-[11px] text-gray-600 leading-tight">The brain takes in the sound and makes meaning.</p>
          </div>
          <div className="bg-[#f0f9ff] p-3 rounded-lg border border-[#0A9DC4]/20 text-center shadow-sm">
            <div className="w-8 h-8 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center font-bold mx-auto mb-2 text-sm">3</div>
            <h4 className="font-bold text-[#0c264d] text-xs mb-1 uppercase tracking-wider">Repeating</h4>
            <p className="text-[11px] text-gray-600 leading-tight">The sound or words are repeated out loud.</p>
          </div>
          <div className="bg-[#f0f9ff] p-3 rounded-lg border border-[#0A9DC4]/20 text-center shadow-sm">
            <div className="w-8 h-8 rounded-full bg-[#10b981] text-white flex items-center justify-center font-bold mx-auto mb-2 text-sm">4</div>
            <h4 className="font-bold text-[#0c264d] text-xs mb-1 uppercase tracking-wider">Connecting</h4>
            <p className="text-[11px] text-gray-600 leading-tight">It becomes a way to communicate and feel connected.</p>
          </div>
        </div>

        <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
          <h4 className="font-bold text-[#0c264d] mb-3 text-center border-b border-[#0A9DC4]/20 pb-2">10 Strategies for Supporting Echolalia</h4>
          <div className="grid md:grid-cols-2 gap-x-4 gap-y-3 text-sm text-gray-700">
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">1.</span> <span><strong>Understand Purpose:</strong> Determine if it is for communication, self-regulation, or comfort.</span></div>
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">2.</span> <span><strong>Model Responses:</strong> Demonstrate back-and-forth communication.</span></div>
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">3.</span> <span><strong>Encourage Context:</strong> Help identify when quoting media is suitable.</span></div>
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">4.</span> <span><strong>Introduce Language:</strong> Gently expand on their phrases to build flexibility.</span></div>
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">5.</span> <span><strong>Use Visuals:</strong> Bridge echolalic speech with functional language using pictures.</span></div>
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">6.</span> <span><strong>Promote Regulation:</strong> Teach deep breathing or use fidgets if scripting to self-soothe.</span></div>
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">7.</span> <span><strong>Social Opportunities:</strong> Create structured settings to practice interactions.</span></div>
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">8.</span> <span><strong>Be Patient:</strong> Do not abruptly interrupt; validate their communication style.</span></div>
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">9.</span> <span><strong>Involve Professionals:</strong> Collaborate with an SLP for targeted strategies.</span></div>
            <div className="flex gap-2"><span className="font-bold text-[#0c264d]">10.</span> <span><strong>Reflect Connection:</strong> Discuss the emotional meaning behind their specific scripts.</span></div>
          </div>
        </div>
      </div>

      {/* ===== SCRIPTING BLOCK ===== */}
      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0c264d] mb-6">
        <h2 className="text-[#0c264d] font-bold mb-6 text-xl flex items-center justify-center gap-2">
          <Repeat className="text-[#0A9DC4]" size={24} /> 
          Scripting & Navigating Social Landscapes
        </h2>

        <div className="bg-[#f0f9ff] p-5 rounded-md border border-[#0A9DC4]/20 mb-6 flow-root">
          <div className={floatedCardContainer}>
            <ImageWithFallback 
              src="/images/autism/autism-support-TTtab-speech-scripting-support-children.webp"
              alt="Understanding Scripting"
              className={floatedImageClass}
            />
          </div>
          <h4 className="font-bold text-[#0c264d] mb-2 text-sm uppercase tracking-wider">What is Scripting?</h4>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Scripting is the intentional use of memorized phrases, sentences, or entire conversations to navigate social situations. Unlike immediate echolalia (which is often a real-time processing tool), scripting reflects purposeful preparation. Autistic individuals frequently build mental "libraries" of dialogue from movies, books, or past successful interactions to use when a similar context arises.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Rather than trying to generate spontaneous language in real-time—which requires immense cognitive and social energy—an individual can pull a pre-planned script to participate safely in a conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="font-bold text-[#0c264d] mb-2 border-b border-gray-100 pb-1">Why Do We Script?</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-2 items-start">
                <span className="text-[#2abcd4] font-bold mt-0.5">•</span> 
                <span><strong>Reduces Cognitive Load:</strong> Frees up brain space to focus on the sensory and social demands of the environment.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[#2abcd4] font-bold mt-0.5">•</span> 
                <span><strong>Provides Predictability:</strong> Knowing exactly what to say (and expecting a specific response) drastically lowers social anxiety.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[#2abcd4] font-bold mt-0.5">•</span> 
                <span><strong>Fosters Connection:</strong> Allows participation in group dynamics and neurotypical social rituals without the exhaustion of masking.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="font-bold text-[#0c264d] mb-2 border-b border-gray-100 pb-1">How to Support Scripting</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-2 items-start">
                <span className="text-[#ffd166] font-bold mt-0.5">•</span> 
                <span><strong>Validate It:</strong> Never discourage a script. Recognize it as valid, intentional, and resourceful communication.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[#ffd166] font-bold mt-0.5">•</span> 
                <span><strong>Learn Their Scripts:</strong> Figure out the source of the script. Replying with the "next line" of their script is a powerful way to build trust.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[#ffd166] font-bold mt-0.5">•</span> 
                <span><strong>Expand Gently:</strong> If they script <em>"To infinity and beyond"</em> when leaving, you can affirm it and gently add, <em>"Yes, to infinity! We are going to the car."</em></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* GESTALT LANGUAGE PROCESSING BLOCK */}
      <div className="bg-[#f0f9ff] p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6 flow-root">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <HandMetal className="text-[#0c264d]" size={24} /> 
          Gestalt Language Processing
        </h2>              
        


        <p className="text-sm mb-6 text-gray-700 leading-relaxed text-left">
          Many autistic individuals are <strong>Gestalt Language Processors (GLP)</strong>. They acquire language "top-down," understanding and using language as whole units or phrases (often learned from movies or conversations) rather than breaking down individual words or grammar.<sup>1</sup> This approach emphasizes the emotional and relational aspects of communication.
        </p>

        {/* Gestalts in Action (Children) */}
        <div className="bg-white p-5 rounded-lg shadow-sm border border-[#0A9DC4]/20 mb-8">
          <h4 className="font-bold text-[#0c264d] mb-3 text-center text-sm uppercase tracking-wider border-b pb-2">Gestalts in Action</h4>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-bold text-gray-800">
            <div className="bg-[#f0f9ff] p-2 rounded border border-[#2abcd4]">I can do it myself!</div>
            <ArrowRight className="text-gray-400 self-center" size={16} />
            <div className="bg-[#fff9e6] p-2 rounded border border-[#ffd166]">What's that?</div>
            <ArrowRight className="text-gray-400 self-center" size={16} />
            <div className="bg-green-50 p-2 rounded border border-green-200">Here you go!</div>
          </div>
        </div>


        {/* Gestalt Processing for Adults Pillars */}
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg border-l-4 border-[#ff6b6b] shadow-sm">
            <h4 className="font-bold text-[#0c264d] text-sm mb-1 uppercase tracking-wider">Context is Key</h4>
            <p className="text-xs text-gray-700 leading-relaxed">Language is learned from real-life situations, stories, and meaningful connections.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-[#2abcd4] shadow-sm">
            <h4 className="font-bold text-[#0c264d] text-sm mb-1 uppercase tracking-wider">Whole Units First</h4>
            <p className="text-xs text-gray-700 leading-relaxed">Phrases and lines (often called echolalia) are used to communicate thoughts, needs, and feelings.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-[#0c264d] shadow-sm">
            <h4 className="font-bold text-[#0c264d] text-sm mb-1 uppercase tracking-wider">Emotional & Relational</h4>
            <p className="text-xs text-gray-700 leading-relaxed">Communication is deeply tied to connection, expression, and shared understanding.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-[#ffd166] shadow-sm">
            <h4 className="font-bold text-[#0c264d] text-sm mb-1 uppercase tracking-wider">Growth Over Time</h4>
            <p className="text-xs text-gray-700 leading-relaxed">With time and support, gestalt processors may segment and recombine language to create their own original expressions.</p>
          </div>
        </div>
      </div>

      {/* ===== SUPPORTING PROFOUND AUTISM & ATTUNEMENT ===== */}
      <div id="attunement" className="bg-[#f0f9ff] p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <Users className="text-[#0c264d]" size={24} />
          Supporting Profound Autism: The Shift to Attunement
        </h2>

        <p className="text-sm mb-4 text-gray-700 leading-relaxed">
          When supporting individuals with level 3 or profound autism—especially teens and young adults who script, are echolalic, or speak in gestalts—the foundational rule is to <strong>presume competence</strong>. There is always profound potential for connection. Traditional active listening (like expecting eye contact, verbal affirmations, or paraphrasing) is often developmentally inappropriate. Instead, the focus shifts to a multimodal process called <strong>Attunement</strong>.
        </p>

        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-speech-teens-young-adults-level3.WebP"
          alt="Attunement for Profound Autism"
          className={responsiveImageClass}
        />

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* Pillar 1 */}
          <div className="bg-white p-4 rounded-lg border-t-4 border-[#2abcd4] shadow-sm">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm uppercase tracking-wider">1. Observing Body Language</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-[#2abcd4] font-bold">•</span> Notice posture, facial expressions, breathing, and energy levels.</li>
              <li className="flex gap-2"><span className="text-[#2abcd4] font-bold">•</span> Look for patterns that indicate regulation, stress, or discomfort.</li>
              <li className="flex gap-2"><span className="text-[#2abcd4] font-bold">•</span> Always respect personal space and sensory boundaries.</li>
            </ul>
          </div>
          
          {/* Pillar 2 */}
          <div className="bg-white p-4 rounded-lg border-t-4 border-[#ffd166] shadow-sm">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm uppercase tracking-wider">2. Interpreting Behavior</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2 items-start">
                <span className="text-[#ffd166] font-bold shrink-0 mt-0.5">•</span> 
                <span>Understand that <em>all</em> behavior has meaning, e.g., rocking might mean "I need calm"; silence might mean "I am overwhelmed".</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[#ffd166] font-bold shrink-0 mt-0.5">•</span> 
                <span>Avoid assuming behaviors are simply "attention-seeking" or defiant.</span>
              </li>
            </ul>
          </div>
          
          {/* Pillar 3 */}
          <div className="bg-white p-4 rounded-lg border-t-4 border-[#0c264d] shadow-sm">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm uppercase tracking-wider">3. Sensory Accommodations</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-[#0c264d] font-bold">•</span> Proactively reduce sensory overload from lighting, noise, textures, or crowds.</li>
              <li className="flex gap-2"><span className="text-[#0c264d] font-bold">•</span> Offer tools that support regulation, such as fidgets, heavy blankets, or quiet spaces.</li>
            </ul>
          </div>
          
          {/* Pillar 4 */}
          <div className="bg-white p-4 rounded-lg border-t-4 border-[#2abcd4] shadow-sm">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm uppercase tracking-wider">4. Validating Unconventional Cues</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-[#2abcd4] font-bold">•</span> Respond to their unique way of communicating, whether through words, sounds, scripts, or gestures.</li>
              <li className="flex gap-2"><span className="text-[#2abcd4] font-bold">•</span> Affirm their identity, emotions, and autonomy, acknowledging their communication even if it is unconventional.</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#ffd166] p-5 rounded-lg border border-[#0A9DC4]/20 text-center shadow-inner">
          <p className="text-[#0c264d] font-bold text-xl mb-2 font-spartan">Connection comes before comprehension.</p>
        </div>
        
        {/* Deep Dive: Connection vs Comprehension */}
        <div className="mt-4 bg-[#fff9e6] p-5 rounded-lg border-l-4 border-[#ffd166] shadow-sm text-left">
          <h4 className="font-bold text-[#0c264d] mb-3 flex items-center gap-2 border-b border-[#ffd166]/30 pb-2">
            <Heart className="text-[#d97706]" size={18} />
            What does this mean in practice?
          </h4>
          
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>The Biological Reality:</strong> When an autistic individual is overwhelmed or experiencing sensory overload, their nervous system shifts into survival mode. In this state, the cognitive centers responsible for language processing and following directions effectively shut down. You cannot force a dysregulated brain to learn or communicate.
            </p>
            
            <p>
              <strong>The Attunement Solution:</strong> Before you can expect someone to understand words, follow an instruction, or use an AAC device (<em>comprehension</em>), you must first establish that they are safe, seen, and valued (<em>connection</em>). This looks like:
            </p>
            
            <ul className="space-y-2 pl-3 border-l-2 border-[#ffd166]/50 ml-1">
              <li className="flex gap-2">
                <span className="text-[#d97706] font-bold">•</span> 
                <span><strong>Sensory Safety:</strong> Dimming lights or offering noise-canceling headphones before attempting to start a conversation.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#d97706] font-bold">•</span> 
                <span><strong>Sitting Side-by-Side - at a comfortable distance:</strong> Sitting next to them and engaging in their current interest without placing verbal demands.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#d97706] font-bold">•</span> 
                <span><strong>Validating the "No":</strong> Respecting when they push a therapy material away, rather than forcing compliance.</span>
              </li>
            </ul>
            
            <p className="pt-2 font-bold font-cyan-900 text-[#0c264d]"> 
              Once profound trust and nervous system safety are established, the cognitive load drops. Comprehension naturally becomes possible, and only then can they truly process your words and understand you.
            </p>  
          </div>
        </div>
      </div>

      {/* ===== SPEECH CHARACTERISTICS ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <MessageSquare className="text-[#2abcd4]" size={24} /> 
          Speech Differences & Characteristics
        </h2>
        
        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-speech-diff-charcteristics.webp"
          alt="Speech Differences"
          className={responsiveImageClass}
        />

        <p className="text-sm mb-6 text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
          Some autistic individuals may struggle to modulate their tone or volume, leading to speech patterns that sound unique. Therapy can help individuals self-monitor these traits if desired.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20 text-center shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1 text-xs uppercase tracking-wider">Prosody & Fluency</div>
            <div className="text-[11px] text-gray-600 leading-tight">The natural tone, pitch, smoothness, and rhythm of speech.</div>
          </div>
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20 text-center shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1 text-xs uppercase tracking-wider">Uptalk</div>
            <div className="text-[11px] text-gray-600 leading-tight">A speech pattern where statements are delivered with an upward inflection like questions.</div>
          </div>
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20 text-center shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1 text-xs uppercase tracking-wider">Unique Vocalizations</div>
            <div className="text-[11px] text-gray-600 leading-tight">Producing sounds or words that serve as vocal stims or unique communication.</div>
          </div>
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20 text-center shadow-sm">
            <div className="font-bold text-[#0c264d] mb-1 text-xs uppercase tracking-wider">Tone, Volume & Pace</div>
            <div className="text-[11px] text-gray-600 leading-tight">Differences in the loudness or speed of speech based on excitement or overload.</div>
          </div>
        </div>
      </div>

      {/* ===== PRIORITIZING SELF-ADVOCACY ===== */}
      <div className="bg-[#f0f9ff] p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <HandMetal className="text-[#0c264d]" size={24} /> 
          Prioritizing Self-Advocacy
        </h2>
        
        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-speech-self-advo.webp"
          alt="Prioritizing Self Advocacy"
          className={responsiveImageClass}
        />

        <p className="text-sm mb-4 text-gray-700 leading-relaxed">
          In neuro-affirming speech therapy, the highest priority is not teaching an individual to request items (like juice or a toy), but teaching them how to advocate for their bodily autonomy and sensory needs. Communication tools must first and foremost allow a person to safely navigate their environment.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded border border-[#0A9DC4]/20 shadow-sm">
            <div className="font-bold text-[#0c264d] mb-2 border-b border-gray-100 pb-1">The Power of "No"</div>
            <div className="text-sm text-gray-700">Validating refusals is critical. If a child uses AAC or a gesture to say "No," "Stop," or "Don't want," honoring that communication teaches them that their voice has power and protects them from compliance-based abuse.</div>
          </div>
          <div className="bg-white p-4 rounded border border-[#0A9DC4]/20 shadow-sm">
            <div className="font-bold text-[#0c264d] mb-2 border-b border-gray-100 pb-1">Requesting Breaks</div>
            <div className="text-sm text-gray-700">Ensuring the individual always has access to a visual or auditory way to say, <em>"I need a break,"</em> <em>"It's too loud,"</em> or <em>"I need to leave."</em></div>
          </div>
          <div className="bg-white p-4 rounded border border-[#0A9DC4]/20 shadow-sm">
            <div className="font-bold text-[#0c264d] mb-2 border-b border-gray-100 pb-1">Pain & Sickness</div>
            <div className="text-sm text-gray-700">Equipping individuals with the vocabulary to explain where their body hurts or if they feel unwell, which is often difficult to articulate during sensory overload.</div>
          </div>
        </div>
      </div>

      {/* ===== ALEXITHYMIA & PRAGMATICS ===== */}
      <div className="space-y-6 mb-6">
        
        {/* Alexithymia */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm flex flex-col">
          <h2 className="text-[#0c264d] font-bold mb-3 text-xl text-center">
            Alexithymia & Interoception
          </h2>
          
          <ImageWithFallback 
            src="/images/autism/autism-support-TTtab-speech-alex-intero.webp"
            alt="Alexithymia and Interoception"
            className={responsiveImageClass}
          />
          
          <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-grow text-center">
            <strong>Alexithymia</strong> is the difficulty in identifying and describing one's own emotions. This is closely tied to <strong>Interoception</strong>, the hidden sense that allows us to feel our internal body signals. 
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div className="bg-[#fff9e6] p-3 rounded-lg border border-[#ffd166]/50 text-center shadow-sm">
              <Activity className="text-[#d97706] mx-auto mb-2" size={20} />
              <div className="font-bold text-[#0c264d] text-xs uppercase tracking-wider">Heart Rate</div>
            </div>
            <div className="bg-[#fff9e6] p-3 rounded-lg border border-[#ffd166]/50 text-center shadow-sm">
              <Activity className="text-[#d97706] mx-auto mb-2" size={20} />
              <div className="font-bold text-[#0c264d] text-xs uppercase tracking-wider">Hunger</div>
            </div>
            <div className="bg-[#fff9e6] p-3 rounded-lg border border-[#ffd166]/50 text-center shadow-sm">
              <Activity className="text-[#d97706] mx-auto mb-2" size={20} />
              <div className="font-bold text-[#0c264d] text-xs uppercase tracking-wider">Full Bladder</div>
            </div>
            <div className="bg-[#fff9e6] p-3 rounded-lg border border-[#ffd166]/50 text-center shadow-sm">
              <Activity className="text-[#d97706] mx-auto mb-2" size={20} />
              <div className="font-bold text-[#0c264d] text-xs uppercase tracking-wider">Need to Breathe</div>
            </div>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed bg-[#f0f9ff] p-4 rounded border border-[#0A9DC4]/20 text-center">
            A speech therapist cannot simply ask, <em>"How do you feel?"</em> if the individual cannot interpret their body's signals because <strong>messages from the body often go unnoticed.</strong> Therapy often involves bridging this gap—using body mapping and visual scales to connect physical sensations (e.g., a tight chest) to vocabulary (e.g., anxiety).
          </p>
        </div>
        
        {/* ===== LINK TO DYSREGULATION PAGE ===== */}
        <div className="mt-6 flex justify-center print:hidden">
          <button 
            onClick={() => setCurrentArticle?.('autism-dysregulation')}
            className="bg-[#0A9DC4] hover:bg-[#0c264d] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md"
          >
            For more information on supporting dysregulation in autism - which can lead to aggression - click here.
            <span className="text-xl">&rarr;</span>
          </button>
        </div>

        {/* Social Pragmatics / Double Empathy */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm flex flex-col">
          <h2 className="text-[#0c264d] font-bold mb-3 text-xl text-center">
            Social Pragmatics & The Double Empathy Problem
          </h2>
          
          <ImageWithFallback 
            src="/images/autism/autism-support-TTtab-speech-double-empath.webp"
            alt="Social Pragmatics and Double Empathy"
            className={responsiveImageClass}
          />
          
          <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow text-center">
            Historically, "social skills training" forced autistic individuals to mimic neurotypical behaviors, leading to exhausting masking. Modern therapy focuses on the <strong>Double Empathy Problem</strong>—the idea that communication breakdowns happen because autistic and neurotypical people have different, equally valid social languages.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-500 mb-4 text-sm uppercase tracking-wider border-b pb-2">The Old Approach: Social Skills Training</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2"><XCircle size={16} className="text-red-400" /> <strong className="text-gray-800">Force eye contact</strong></li>
                <li className="flex items-center gap-2"><XCircle size={16} className="text-red-400" /> <strong className="text-gray-800">Mask natural expressions</strong></li>
                <li className="flex items-center gap-2"><XCircle size={16} className="text-red-400" /> <strong className="text-gray-800">Use scripted small talk</strong></li>
              </ul>
              <div className="mt-5 text-xs font-bold text-red-500 bg-red-50 p-3 rounded text-center border border-red-100">
                Leads to exhausting masking
              </div>
            </div>
            
            <div className="bg-[#f0f9ff] p-5 rounded-lg border-2 border-[#2abcd4]">
              <h4 className="font-bold text-[#0c264d] mb-4 text-sm uppercase tracking-wider border-b border-[#2abcd4]/30 pb-2">The Modern Approach: Social Pragmatics</h4>
              <ul className="space-y-3 text-sm text-[#0c264d]">
                <li className="flex gap-2 items-start"><CheckCircle size={16} className="text-[#10b981] shrink-0 mt-0.5" /> <span><strong>Listen</strong> without judgment</span></li>
                <li className="flex gap-2 items-start"><CheckCircle size={16} className="text-[#10b981] shrink-0 mt-0.5" /> <span><strong>Translate</strong> across differences</span></li>
                <li className="flex gap-2 items-start"><CheckCircle size={16} className="text-[#10b981] shrink-0 mt-0.5" /> <span><strong>Respect</strong> neurodivergent communication</span></li>
                <li className="flex gap-2 items-start"><CheckCircle size={16} className="text-[#10b981] shrink-0 mt-0.5" /> <span><strong>Support</strong> authentic expression</span></li>
                <li className="flex gap-2 items-start"><CheckCircle size={16} className="text-[#10b981] shrink-0 mt-0.5" /> <span><strong>Build bridges</strong>, not expectations</span></li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* --- BOTTOM BACK BUTTON --- */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-normal text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan whitespace-nowrap shrink-0"
        >
          <span className="text-lg">←</span>Back to Therapies
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b-2 border-[#10b981] pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Blanc, M. (2012). <i>Natural Language Acquisition on the Autism Spectrum: The Journey from Echolalia to Self-Generated Language</i>. Communication Development Center.</p>
            <p>2. Prizant, B. M. (1983). Language acquisition and communicative behavior in autism: Toward an understanding of the 'whole' of it. <i>Journal of Speech and Hearing Disorders</i>.</p>
            <p>3. Stiegler, L. N. (2015). Examining the echolalia literature: Where do we go from here? <i>American Journal of Speech-Language Pathology</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b-2 border-[#2abcd4] pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Beukelman, D. R., & Light, J. C. (2020). <i>Augmentative & Alternative Communication: Supporting Children and Adults with Complex Communication Needs</i> (5th ed.). Brookes Publishing.</li>
            <li>Zisk, A. H., & Dalton, E. (2019). Augmentative and Alternative Communication for Speaking Autistic Adults: Overview and Recommendations. <i>Autism in Adulthood</i>.</li>
          </ul>
        </div>
      </div>

    </article>
  );
}