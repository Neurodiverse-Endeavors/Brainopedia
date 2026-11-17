import { Activity, Brain, Layers, Users, Hand, Sun, CheckCircle, Home, MessageCircle, ArrowRight, Sparkles, Headphones, Utensils, Puzzle } from 'lucide-react';
import { SectionActions } from '../../../SectionActions';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface OccupationalTherapyProps {
  setCurrentArticle?: (article: string) => void;
}

export function OccupationalTherapy({ setCurrentArticle }: OccupationalTherapyProps) {
  const responsiveImageClass = "w-full h-auto rounded-md border border-gray-300 shadow-sm";

  return (
    <article id="full-ot-article" className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* Header with Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl text-[#0c264d] font-bold">
          Occupational Therapy (OT)
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shrink-0"
        >
          <span className="text-xl">←</span>
          Back to Therapies
        </button>
      </div>

      <SectionActions 
        sectionId="full-ot-article" 
        sectionTitle="Complete Guide to Occupational Therapy" 
      />
  
      {/* Introduction (Floated Image) */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 mb-8 flow-root">
        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-OT-intro.webp"
          alt="Occupational Therapy Intro"
          className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm"
        />
        <p className="text-base leading-relaxed mb-4">
          Occupational therapy (OT) helps people of all ages regain or build the skills needed for daily living. Rather than focusing strictly on physical movement, OT focuses on functional independence, supporting "occupations"—the meaningful activities that occupy your time, such as working, self-care, or play.
        </p>
        <p className="text-base leading-relaxed">
          For autistic individuals, OT supports functional communication, sensory regulation, and daily independence across all support levels. Because autism impacts individuals differently, an OT evaluates unique strengths and challenges to help people adapt to physical, cognitive, or developmental challenges so they can participate in everyday life.<sup>1</sup>
        </p>
      </div>

      {/* ===== CORE INTERVENTION AREAS ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#ff6b6b] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <Activity className="text-[#ff6b6b]" size={24} /> 
          Core Intervention Areas
        </h2>
        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-OT-core-areas.webp"
          alt="OT Core Intervention Areas"
          className={responsiveImageClass}
        />
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-[#fff5f5] p-4 rounded-lg border border-[#ff6b6b]/20">
            <h4 className="font-bold text-[#0c264d] mb-2 flex items-center gap-2">
              <Sun className="text-[#ff6b6b]" size={18} /> Sensory Integration
            </h4>
            <p className="text-sm text-gray-700">
              Developing personalized "sensory diets" to help individuals process noise, lights, or textures, minimizing sensory meltdowns and maximizing comfort.
            </p>
          </div>
          
          <div className="bg-[#fff5f5] p-4 rounded-lg border border-[#ff6b6b]/20">
            <h4 className="font-bold text-[#0c264d] mb-2 flex items-center gap-2">
              <CheckCircle className="text-[#ff6b6b]" size={18} /> Activities of Daily Living (ADLs)
            </h4>
            <p className="text-sm text-gray-700">
              Breaking down complex tasks—like brushing teeth, showering, or tying shoes—into visual, predictable, step-by-step schedules.
            </p>
          </div>

          <div className="bg-[#fff5f5] p-4 rounded-lg border border-[#ff6b6b]/20">
            <h4 className="font-bold text-[#0c264d] mb-2 flex items-center gap-2">
              <Hand className="text-[#ff6b6b]" size={18} /> Motor Skill Development
            </h4>
            <p className="text-sm text-gray-700">
              Strengthening fine motor coordination for writing, typing, or using utensils, as well as gross motor skills for balance and body awareness.
            </p>
          </div>

          <div className="bg-[#fff5f5] p-4 rounded-lg border border-[#ff6b6b]/20">
            <h4 className="font-bold text-[#0c264d] mb-2 flex items-center gap-2">
              <Brain className="text-[#ff6b6b]" size={18} /> Executive Functioning
            </h4>
            <p className="text-sm text-gray-700">
              Teaching time management, emotional self-regulation, task initiation, and organizational strategies using visual timers and checklists. 
            </p>
          </div>
        </div>
      </div>

      {/* ===== AFFIRMING SENSORY DIETS ===== */}
      <div className="bg-[#f0f9ff] p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <Sparkles className="text-[#2abcd4]" size={24} /> 
          Affirming Sensory Diets
        </h2>
        
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          An Affirming Sensory Diet is a personalized plan of daily physical activities and environmental adjustments designed to keep a person's nervous system feeling regulated and safe. Unlike older, compliance-based approaches that tried to stop neurodivergent behaviors, an affirming sensory diet embraces neurodiversity-affirming care. It treats self-stimulatory behaviors (stimming)—like rocking, hand-flapping, or humming—as vital, natural tools for self-regulation, rather than behaviors that need to be fixed or extinguished.<sup>3</sup>
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded border border-[#0A9DC4]/20 shadow-sm">
            <div className="font-bold text-[#0c264d] mb-2 border-b border-gray-100 pb-1">Proactive over Reactive</div>
            <div className="text-sm text-gray-700">Schedule sensory inputs before dysregulation happens, instead of using them only during a meltdown.</div>
          </div>
          <div className="bg-white p-4 rounded border border-[#0A9DC4]/20 shadow-sm">
            <div className="font-bold text-[#0c264d] mb-2 border-b border-gray-100 pb-1">Support over Suppression</div>
            <div className="text-sm text-gray-700">View stimming as a necessary tool that helps the brain process overwhelming environments.</div>
          </div>
          <div className="bg-white p-4 rounded border border-[#0A9DC4]/20 shadow-sm">
            <div className="font-bold text-[#0c264d] mb-2 border-b border-gray-100 pb-1">Collaboration over Compliance</div>
            <div className="text-sm text-gray-700">Build the plan with the individual based on what feels good to them, not what makes them look "normal" to others.</div>
          </div>
        </div>

        <ImageWithFallback 
            src="/images/autism/autism-support-TTtab-OT-sensory-diet.webp"
            alt="Communication Environment"
            className={responsiveImageClass}
        />
        <h4 className="font-bold text-[#0c264d] mb-3 border-b border-[#0A9DC4]/20 pb-2">How to Build a Proactive, Affirming Sensory Diet</h4>
        
        <div className="space-y-4">
          <div className="border-l-2 border-[#2abcd4] pl-4 py-1">
            <div className="font-bold text-[#0c264d] mb-1">1. Track the Current Sensory Profile</div>
            <p className="text-sm text-gray-700 mb-1">Observe the individual throughout the day to identify their unique sensory needs. Do not look for ways to stop their stimming; instead, look for what their stimming is telling you.</p>
            <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
              <li><strong>Sensory Seeking:</strong> Are they seeking movement (vestibular), deep pressure (proprioceptive), or specific sounds?</li>
              <li><strong>Sensory Avoiding:</strong> Are they overwhelmed by bright lights, loud noises, or certain textures?</li>
            </ul>
          </div>
          
          <div className="border-l-2 border-[#2abcd4] pl-4 py-1">
            <div className="font-bold text-[#0c264d] mb-1">2. Schedule Proactive "Sensory Snacks"</div>
            <p className="text-sm text-gray-700 mb-1">Insert tailored sensory activities into the daily routine before demands or transitions occur, keeping the nervous system in a baseline state of safety.</p>
            <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
              <li><strong>For movement seekers:</strong> Schedule regular intervals for jumping, swinging, or heavy work (like carrying groceries).</li>
              <li><strong>For calming:</strong> Provide predictable access to dim lighting, noise-canceling headphones, or weighted blankets.</li>
            </ul>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-4 py-1">
            <div className="font-bold text-[#0c264d] mb-1">3. Modify the Environment</div>
            <p className="text-sm text-gray-700 mb-2">Instead of forcing the person to tolerate an overwhelming environment, change the environment to reduce the baseline stress on their nervous system.</p>
            <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
              <li>Create a dedicated "quiet zone" where they can retreat freely.</li>
              <li>Reduce visual clutter in primary living spaces.</li>
              <li><strong>Sensory-Friendly Lighting:</strong> LED bulbs can be highly effective for autism sensory diets, provided you choose high-quality bulbs. Traditional fluorescent tubes can cause profound sensory overload due to audible hums and highly visible flickering, while quality LEDs are customizable to create a calming space.</li>
              <li><strong>Zero Optical Flicker:</strong> Look for a "flicker-free" or "high-frequency" label. Low-quality LEDs strobe rapidly, which overtaxes the nervous system even if the pulsing is invisible to neurotypical eyes.</li>
              <li><strong>Warm Color Temperatures:</strong> Opt for warm white tones (around 2700K or lower) instead of "cool white" or "daylight" to signal the nervous system to relax and wind down.</li>
              <li><strong>Glare Minimization:</strong> Use bulbs with frosted glass lenses, diffusers, or smooth dimmability to minimize painful direct overhead glare and allow for autonomy.</li>
              <li><strong>Incandescent Lighting:</strong> Traditional incandescent bulbs are an excellent, sensory-friendly alternative because they naturally emit a warm, continuous light completely free of optical flicker. However, keep in mind they are less energy-efficient and become incredibly hot to the touch, which can pose a physical safety risk in high-activity areas.</li>
            </ul>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-4 py-1">
            <div className="font-bold text-[#0c264d] mb-1">4. Protect and Expand Stimming Space</div>
            <p className="text-sm text-gray-700 mb-1">Never make access to stimming contingent on good behavior. Make it a safe, unpunished part of their day.</p>
            <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
              <li><strong>Validate the stim:</strong> Recognize that a hand-flap or vocalization is the body successfully letting out steam.</li>
              <li><strong>Offer safe alternatives if needed:</strong> Only redirect a stim if it causes physical harm (e.g., head-banging). Redirect it to a safe version that provides the exact same sensory feedback, like trading head-banging for a crash mat or a heavy vibration toy.</li>
            </ul>
          </div>
        </div>
      </div>

      <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-OT-2nd.webp"
          alt="Communication Environment"
          className={responsiveImageClass}
      />
      {/* ===== OT ACROSS AUTISM LEVELS ===== */}
      <div id="ot-levels" className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <Layers className="text-[#0c264d]" size={24} /> 
          Understanding OT Across Autism Levels
        </h2>

        <div className="space-y-4">
          <div className="border-l-2 border-[#2abcd4] pl-4 py-1">
            <div className="font-bold text-[#0c264d] mb-1">Level 1 (Requiring Support)</div>
            <p className="text-sm text-gray-700">
              Therapy often targets hidden barriers like executive dysfunction, organizational skills, emotional regulation, and navigating complex social or workplace environments.
            </p>
          </div>
          
          <div className="border-l-2 border-[#ffd166] pl-4 py-1">
            <div className="font-bold text-[#0c264d] mb-1">Level 2 (Requiring Substantial Support)</div>
            <p className="text-sm text-gray-700">
              Focus shifts toward building clear communication routines, managing intense sensory overstimulation, adapting environments to reduce anxiety, and mastering basic self-care.
            </p>
          </div>
          
          <div className="border-l-2 border-[#ff6b6b] pl-4 py-1">
            <div className="font-bold text-[#0c264d] mb-1">Level 3 (Requiring Very Substantial Support)</div>
            <p className="text-sm text-gray-700">
              Interventions prioritize critical safety skills, introducing alternative communication tools (like AAC devices), maximizing physical independence in feeding or dressing, and creating highly predictable daily routines.
            </p>
          </div>
        </div>
      </div>

      {/* ===== OT ACROSS THE LIFESPAN ===== */}
      <div id="ot-lifespan" className="bg-[#f0f9ff] p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <Users className="text-[#2abcd4]" size={24} /> 
          OT Focus Areas by Life Stage
        </h2>
        
        <p className="text-sm text-gray-700 mb-6">
          Occupational therapy supports autistic individuals of all ages by adapting to changing life stages and developmental priorities. As a person grows, their therapy goals shift from foundational play and school readiness to workplace navigation, independent living, and aging with dignity.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded border border-[#0A9DC4]/20 shadow-sm">
            <div className="font-bold text-[#0c264d] mb-2 border-b border-gray-100 pb-1">Early Childhood (Ages 0-5)</div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong className="text-[#0c264d]">Play-Based Learning:</strong> Using play to develop fine motor control, hand-eye coordination, and functional communication.</li>
              <li><strong className="text-[#0c264d]">Sensory Exploration:</strong> Introducing different textures, sounds, and movements safely to expand sensory tolerances early.</li>
              <li><strong className="text-[#0c264d]">Routine Building:</strong> Establishing basic sleep, feeding, and dressing routines to ease daily family transitions.</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded border border-[#0A9DC4]/20 shadow-sm">
            <div className="font-bold text-[#0c264d] mb-2 border-b border-gray-100 pb-1">School-Age Children (Ages 6-12)</div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong className="text-[#0c264d]">Classroom Independence:</strong> Improving handwriting, scissor use, tool manipulation, and the ability to sit comfortably at a desk.</li>
              <li><strong className="text-[#0c264d]">Peer Interaction:</strong> Supporting social play dynamics, turn-taking, and understanding shared space during school activities.</li>
              <li><strong className="text-[#0c264d]">Self-Regulation:</strong> Teaching emotional and sensory check-ins so children can recognize when they are becoming overwhelmed.</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded border border-[#0A9DC4]/20 shadow-sm">
            <div className="font-bold text-[#0c264d] mb-2 border-b border-gray-100 pb-1">Adolescents & Teens (Ages 13-18)</div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong className="text-[#0c264d]">Executive Functioning:</strong> Managing complex school schedules, long-term homework assignments, and organizing personal belongings.</li>
              <li><strong className="text-[#0c264d]">Puberty & Self-Care:</strong> Navigating body changes, learning advanced personal hygiene, and managing emotional shifts.</li>
              <li><strong className="text-[#0c264d]">Pre-Vocational Skills:</strong> Practicing basic community navigation, money management, and self-advocacy skills for the future.</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded border border-[#0A9DC4]/20 shadow-sm">
            <div className="font-bold text-[#0c264d] mb-2 border-b border-gray-100 pb-1">Adults & Older Adults (Ages 19+)</div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong className="text-[#0c264d]">Workplace Accommodations:</strong> Setting up sensory-friendly workspaces, organizing daily tasks, and managing professional communication.</li>
              <li><strong className="text-[#0c264d]">Independent Living:</strong> Mastering meal preparation, home maintenance, public transit navigation, and personal budgeting.</li>
              <li><strong className="text-[#0c264d]">Aging and Wellness:</strong> Maintaining mobility, adapting homes to prevent falls, and managing sensory sensitivities that change with age.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== COMMON CLINICAL MODALITIES & FRAMEWORKS ===== */}
      <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-8 mt-4">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b border-slate-200 pb-3">
          Common Clinical Modalities & Frameworks
        </h2>
        
        <p className="text-sm text-slate-700 mb-6 leading-relaxed">
          Because occupational therapy is a broad clinical profession, there is no single "OT protocol" for autism. Instead, therapists draw from dozens of distinct evidence-based frameworks, tailoring them to an individual's specific sensory, motor, and daily living goals.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* 1. Sensory Processing */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3">
              <div className="bg-[#e0f2fe] text-[#0A9DC4] p-1.5 rounded-full ring-2 ring-[#0A9DC4]/40 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <Sun size={18} />
              </div>
              Sensory Processing & Integration
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li><strong className="text-[#0c264d]">Ayres Sensory Integration (ASI):</strong> Play-based physical activities (swinging, climbing) to help the brain organize balance and body awareness.<sup>2</sup></li>
              <li><strong className="text-[#0c264d]">Sound-Based Protocols:</strong> Emerging therapies like the Tomatis Method or Therapeutic Listening that use modified sound frequencies to support auditory processing and regulation.<sup>4</sup></li>
              <li><strong className="text-[#0c264d]">Targeted Protocols:</strong> The Wilbarger Brushing Protocol (deep pressure) or Astronaut Training (vestibular-visual exercises).</li>
            </ul>
          </div>

          {/* 2. Emotional Regulation */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3">
              <div className="bg-[#ffe4e6] text-[#ff6b6b] p-1.5 rounded-full ring-2 ring-[#ff6b6b]/40 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <Brain size={18} />
              </div>
              Emotional Regulation & Interoception
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li><strong className="text-[#0c264d]">Interoception Curriculum:</strong> Training individuals to notice internal body signals (racing heart, tense muscles) to identify emotions and reduce anxiety earlier.<sup>5</sup></li>
              <li><strong className="text-[#0c264d]">Zones of Regulation:</strong> A cognitive framework that categorizes energy levels into color-coded "zones" to help select regulation tools.</li>
              <li><strong className="text-[#0c264d]">The Alert Program:</strong> Uses a "car engine" analogy to help learners recognize if they are running too fast, too slow, or just right.</li>
            </ul>
          </div>

          {/* 3. Motor Skills */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3">
              <div className="bg-[#f1f5f9] text-[#0c264d] p-1.5 rounded-full ring-2 ring-[#0c264d]/30 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <Hand size={18} />
              </div>
              Motor Skills & Praxis
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li><strong className="text-[#0c264d]">The CO-OP Approach:</strong> A "Goal-Plan-Do-Check" problem-solving strategy where individuals lead their own mastery of motor tasks (like riding a bike).</li>
              <li><strong className="text-[#0c264d]">Fine Motor Curriculums:</strong> Programs like Handwriting Without Tears paired with strengthening activities to improve coordination.</li>
            </ul>
          </div>

          {/* 4. ADLs & Feeding */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3">
              <div className="bg-[#fef3c7] text-[#d97706] p-1.5 rounded-full ring-2 ring-[#ffd166]/60 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <Utensils size={18} />
              </div>
              Daily Living (ADLs) & Feeding
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li><strong className="text-[#0c264d]">SOS Approach to Feeding:</strong> Addresses extreme picky eating and oral-motor sensitivities by gradually desensitizing textures without pressure.</li>
              <li><strong className="text-[#0c264d]">Task Analysis & Chaining:</strong> Breaking complex routines (showering, dressing) into visual, manageable steps taught one at a time.</li>
            </ul>
          </div>

          {/* 5. Play & Relationship */}
          <div className="bg-[#f8fafc] p-5 rounded-xl border border-slate-200 md:col-span-2">
            <h3 className="font-bold text-[#0c264d] mb-4 flex items-center gap-3">
              <div className="bg-[#d1fae5] text-[#10b981] p-1.5 rounded-full ring-2 ring-[#10b981]/40 ring-offset-2 ring-offset-[#f8fafc] shrink-0">
                <Puzzle size={18} />
              </div>
              Play & Relationship-Based
            </h3>
            <ul className="space-y-3 text-sm text-slate-700 md:columns-2 gap-8">
              <li><strong className="text-[#0c264d]">DIR/Floortime:</strong> Following a child's natural interests and play ideas to build shared attention and two-way communication.</li>
              <li><strong className="text-[#0c264d]">Visual Supports:</strong> Using illustrated stories and first-then boards to make social expectations highly predictable.</li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* ===== SUPPORTING OT AT HOME ===== */}
      <div id="ot-support" className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <Home className="text-[#d97706]" size={24} /> 
          How to Support OT Progress at Home
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="border-l-2 border-[#ffd166] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Maintain Environmental Predictability</div>
            <div className="text-sm text-gray-700">Use clear visual schedules and give advanced warnings before transitions to reduce anxiety and reinforce therapeutic routines.</div>
          </div>
          <div className="border-l-2 border-[#ffd166] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Co-Regulate and Honor Sensory Needs</div>
            <div className="text-sm text-gray-700">Create a dedicated "quiet zone" or sensory decompression space at home, and never force engagement with overwhelming sensory triggers.</div>
          </div>
          <div className="border-l-2 border-[#ffd166] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Presume Competence Always</div>
            <div className="text-sm text-gray-700">Give the individual ample time to respond, communicate, or complete a task independently before stepping in to help.</div>
          </div>
          <div className="border-l-2 border-[#ffd166] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Collaborate and Generalize</div>
            <div className="text-sm text-gray-700">Practice the exact communication methods, signs, or adaptive tools used during therapy sessions across all daily home routines.</div>
          </div>
        </div>
      </div>

      {/* Back Button Bottom */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          Back to Therapies
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
            <p>1. Case-Smith, J., & Arbesman, M. (2008). Evidence-based review of interventions for autism used in or of relevance to occupational therapy. <i>American Journal of Occupational Therapy</i>.</p>
            <p>2. Schaaf, R. C., et al. (2014). An intervention for sensory difficulties in children with autism: A randomized trial. <i>Journal of Autism and Developmental Disorders</i>.</p>
            <p>3. Dallman, A. R., et al. (2022). Neurodiversity-Affirming Practices are a Moral Imperative for Occupational Therapy. <i>The Open Journal of Occupational Therapy</i>.</p>
            <p>4. Duranovic, M., et al. (2026). The Potential Effects of the Tomatis Method in Children With Autism Spectrum Disorder. <i>Journal of Speech, Language, and Hearing Research</i>.</p>
            <p>5. Quadt, L., Garfinkel, S. N., et al. (2021). Interoceptive training to target anxiety in autistic adults (ADIE): A single-center, superiority randomized controlled trial. <i>eClinicalMedicine (The Lancet)</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b-2 border-[#2abcd4] pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Ayres, A. J. (2005). <i>Sensory Integration and the Child: Understanding Hidden Sensory Challenges</i>. Western Psychological Services.</li>
            <li>Dunn, W. (2014). <i>Sensory Profile 2: User's Manual and Assessing Sensory Processing</i>. Pearson Clinical Assessment.</li>
            <li>Kramer, P., Hinojosa, J., & Royeen, C. B. (2020). <i>Perspectives in Human Occupation: Participation in Life</i>. F.A. Davis Company.</li>
            <li>Mahler, K. (2015). <i>Interoception: The Eighth Sensory System</i>. AAPC Publishing.</li>
            <li>Polatajko, H. J., & Mandich, A. (2004). <i>Enabling occupation in children: The cognitive orientation to daily occupational performance (CO-OP) approach</i>. CAOT Publications ACE.</li>
            <li>Roley, S. S., et al. (2008). Understanding occupational therapy using the AOTA Practice Framework. <i>American Journal of Occupational Therapy</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}