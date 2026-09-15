import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Ear, MessageSquare, Activity, BookOpen, Edit3, Brain, Users, Heart, AlertCircle, VolumeX, Music, Layers, Baby, GraduationCap, Briefcase, Search, ShieldAlert, FileText } from 'lucide-react';

interface APDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function APDSymptoms({ setCurrentArticle, initialTab }: APDSymptomsProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'auditory');

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
          Auditory Processing Disorder: Symptoms & Characteristics
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('apd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About APD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('apd')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About APD
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('auditory')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'auditory'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Auditory & Academic
        </button>
        <button
          onClick={() => setActiveTab('social')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'social'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Social & Sensory
        </button>
        <button
          onClick={() => setActiveTab('lifespan')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'lifespan'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Lifespan & Diagnosis
        </button>
      </div>

      {/* ==========================================
          TAB 1: AUDITORY & ACADEMIC
      ========================================== */}
      {activeTab === 'auditory' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Auditory Card (Cyan) - Uses Float Image with organic text flow */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Core Auditory Processing</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-symptoms-auditory.webp"
              alt="Person straining to hear a conversation in a visually noisy environment"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The symptoms of APD reflect a brain that struggles to process auditory information despite having perfect hearing sensitivity. These characteristics manifest most aggressively when the listening environment is degraded.
            </p>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Ear className="text-[#0A9DC4] w-5 h-5" /> Hearing in Noise
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                The hallmark symptom of APD is the inability to understand speech in background noise. While they may hear perfectly in a quiet room, their performance violently deteriorates in classrooms, restaurants, or parties.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <MessageSquare className="text-[#0A9DC4] w-5 h-5" /> Auditory Discrimination
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                They constantly ask "what?" or "huh?" because their brain struggles to distinguish between similar-sounding words (like "cat" and "cap" or "think" and "thick"). This is not inattention; it is a genuine processing failure.
              </p>
            </div>

            <div>
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Activity className="text-[#0A9DC4] w-5 h-5" /> Temporal Processing
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Difficulty processing the timing and order of sounds. Understanding fast talkers, keeping up with rapid verbal exchanges, or perceiving the correct order of a sequence of sounds is highly challenging.
              </p>
            </div>
          </div>

          {/* Academic Card (Yellow) - Uses Hero Image and Grid */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Academic & Language Profile</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-symptoms-academic-hero.webp"
              alt="Student overwhelmed by verbal instructions but working well with visual materials"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Brain className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Following Directions</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Multi-step verbal directions are a major hurdle. By the time the third step is spoken, the first is often forgotten or misunderstood. Written directions are processed far more successfully.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <BookOpen className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Reading & Spelling</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Because APD severely impacts phonological processing, decoding unfamiliar words, distinguishing phonetic sounds, and phonics-based spelling are incredibly challenging.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Edit3 className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Note-Taking</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Simultaneously listening to a lecture and writing notes is nearly impossible. By the time the brain processes the auditory information to write it down, the speaker has already moved on.</p>
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
                <li>Bellis, T. J. (2003). Assessment and management of central auditory processing disorders in the educational setting. <i>Delmar Learning</i>.</li>
                <li>Moore, D. R., et al. (2011). Development of auditory processing in 6- to 11-yr-old children. <i>Ear and Hearing</i>.</li>
                <li>Tallal, P. (1980). Auditory temporal perception, phonics, and reading disabilities in children. <i>Brain and Language</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: SOCIAL & SENSORY
      ========================================== */}
      {activeTab === 'social' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Social Card (Slate) - Uses Float Image with organic text flow */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Social & Emotional Impact</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-symptoms-social.webp"
              alt="Child withdrawing from a loud group conversation, showing listening fatigue"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The social toll of APD is massive. Because individuals constantly miss the subtle, unspoken cues of human conversation, they are prone to severe anxiety and social withdrawal.
            </p>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Users className="text-[#0c264d] w-5 h-5" /> Group Conversations
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Following conversations in groups or noisy social settings is exhausting. Missing parts of conversations leads to confusion or inappropriate responses, causing many to simply avoid social gatherings entirely.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Heart className="text-[#0c264d] w-5 h-5" /> Behavioral Frustration
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                The immense cognitive effort required for auditory processing leads to deep "listening fatigue." Frustration from constant communication breakdowns frequently manifests as irritability, withdrawal, or acting out.
              </p>
            </div>

            <div>
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <AlertCircle className="text-[#0c264d] w-5 h-5" /> Reading Social Cues
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Because they struggle to process "prosody" (the tone, rhythm, and emotion of a voice), jokes may be taken highly literally, and sarcasm or subtle emotional nuance is often missed entirely.
              </p>
            </div>
          </div>

          {/* Sensory Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Sensory & Prosodic Differences</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-symptoms-sensory-hero.webp"
              alt="Conceptual visual representing the processing of music, rhythm, and tone of voice"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <VolumeX className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Auditory Hypersensitivity</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Many with APD experience genuine hyperacusis—where certain frequencies or loud environments are physically uncomfortable or even painful, making multisensory environments incredibly overwhelming.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Music className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Musical Processing</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Musical processing may be severely affected. They may have immense difficulty carrying a tune, memorizing song lyrics, or discriminating between different pitches and rhythms.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Layers className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Background Filtering</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">The brain fundamentally struggles to filter out irrelevant background sounds. A humming refrigerator may seem just as loud and important to the brain as the teacher speaking at the front of the room.</p>
              </div>
            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Chermak, G. D., & Musiek, F. E. (1997). Central auditory processing disorders: New perspectives. <i>Singular Publishing Group</i>.</li>
                <li>Tyler, R. S., et al. (2014). A review of hyperacusis and future directions. <i>American Journal of Audiology</i>.</li>
                <li>Baum, S. R., & Pell, M. D. (1999). The neural bases of prosody: Insights from lesion studies and neuroimaging. <i>Aphasiology</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: LIFESPAN & DIAGNOSIS
      ========================================== */}
      {activeTab === 'lifespan' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Lifespan Card (Yellow) - Uses Float Image with organic text flow */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Age-Related Trajectory</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-symptoms-lifespan.webp"
              alt="Split visual showing a young child ignoring their name, transitioning to an adult struggling in an open office"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              APD does not disappear with age, but its manifestation changes drastically as the individual matures and academic or professional demands evolve.
            </p>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Baby className="text-[#d4a017] w-5 h-5" /> Early Childhood
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Toddlers and preschoolers may show delayed language development, difficulty learning nursery rhymes, or fail to respond when their name is called, acting out frequently in noisy environments.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <GraduationCap className="text-[#d4a017] w-5 h-5" /> School Years
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                As classroom demands increase, severe academic difficulties emerge. Reading problems, poor note-taking, and complex social challenges become highly apparent as the instructional pace accelerates.
              </p>
            </div>

            <div>
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Briefcase className="text-[#d4a017] w-5 h-5" /> Adulthood
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Adults with APD continue experiencing difficulty in open office environments, during conference calls, or in meetings. However, they usually develop robust compensatory strategies to minimize these impacts.
              </p>
            </div>
          </div>

          {/* Differential Diagnosis Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Distinguishing APD</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-symptoms-diagnosis-hero.webp"
              alt="Magnifying glass comparing APD with ADHD and standard hearing loss"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              APD is frequently misdiagnosed. It is vital to understand the nuances that separate it from other common conditions that mimic its behavioral output.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Search className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">vs. Hearing Loss</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Unlike peripheral hearing loss, an individual with APD will pass a standard pure-tone audiogram with perfect scores. The impairment is entirely in the brain's central processing, not the ear's mechanical function.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <ShieldAlert className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">vs. ADHD</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">While both involve apparent inattention, APD symptoms are highly specific to the <em>auditory modality</em>. An individual with APD can pay perfect attention to visual/written tasks, whereas ADHD impairs attention across all modalities.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <FileText className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">vs. Language Disorders</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Language disorders affect linguistic processing universally. In APD, the symptoms should drastically improve when the exact same information is presented visually rather than auditorily.</p>
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
                <li>Chermak, G. D., Tucker, E., & Seikel, J. A. (2002). Behavioral characteristics of auditory processing disorder and attention-deficit hyperactivity disorder. <i>Journal of the American Academy of Audiology</i>.</li>
                <li>Cacace, A. T., & McFarland, D. J. (2005). The importance of modality specificity in diagnosing central auditory processing disorder. <i>American Journal of Audiology</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('apd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About APD
        </button>
      </div>

    </article>
  );
}