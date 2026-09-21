import React, { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Heart, ShieldCheck, Users, MessageCircle, VolumeX, Headphones, BatteryCharging, ChevronRight, Megaphone } from 'lucide-react';

interface MisophoniaLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function MisophoniaLiving({ setCurrentArticle, initialTab }: MisophoniaLivingProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'mindset');

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
          Living with Misophonia
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('misophonia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About Misophonia
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('misophonia')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About Misophonia
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('mindset')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'mindset'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Self-Compassion & Mindset
        </button>
        <button
          onClick={() => setActiveTab('social')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'social'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Social & Advocacy
        </button>
        <button
          onClick={() => setActiveTab('strategies')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'strategies'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Daily Strategies
        </button>
      </div>

      {/* ==========================================
          TAB 1: MINDSET
      ========================================== */}
      {activeTab === 'mindset' && (
        <div className="space-y-8 animate-fadeIn">

          <p className="text-sm text-slate-700 leading-relaxed">
            Living with misophonia requires constant, exhausting navigation of the auditory environment. While it can be a deeply isolating condition, building a self-affirming perspective and a practical toolkit allows many individuals to lead rich, connected lives.<sup className="text-[#10b981] font-bold ml-0.5">1</sup>
          </p>

          {/* Self-Compassion Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Self-Compassion & Reframing</h2>
            
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1080&q=80" 
              alt="Person relaxing in a quiet space" 
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block" 
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              The most significant internal hurdle in misophonia is often the shame that follows an intense reaction. Living well involves reframing how you view your own nervous system:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-cyan-100 shadow-sm">
                <div className="bg-[#f0f9ff] p-2 rounded-lg shrink-0">
                  <Brain className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">"It's My Brain, Not My Character"</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Recognize that the intense rage or disgust is a neurological "glitch" in the brain's salience network, not a reflection of your actual feelings toward a person.<sup className="text-[#10b981] font-bold ml-0.5">2</sup></p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-cyan-100 shadow-sm">
                <div className="bg-[#f0f9ff] p-2 rounded-lg shrink-0">
                  <ShieldCheck className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Accepting Limitations</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Understand that on some days, your sensory tolerance will simply be lower due to stress or fatigue. It is completely acceptable to step away or prioritize a quiet environment without guilt.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-cyan-100 shadow-sm">
                <div className="bg-[#f0f9ff] p-2 rounded-lg shrink-0">
                  <Heart className="text-[#0A9DC4] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Differentiating "Annoyance" from "Trigger"</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Learn to identify the physical sensations that separate when a sound is merely annoying versus when it is actively triggering a severe "fight-or-flight" survival response.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ==========================================
          TAB 2: SOCIAL & ADVOCACY
      ========================================== */}
      {activeTab === 'social' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Social Navigation Card (Yellow) */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Social Navigation</h2>
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Socializing with misophonia requires proactive planning and clear, unapologetic communication to protect your nervous system from unexpected triggers.<sup className="text-[#10b981] font-bold ml-0.5">3</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              <div className="flex items-start gap-3 bg-white p-5 rounded-xl border border-yellow-200 shadow-sm">
                <Users className="text-[#d4a017] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">The "Dine-and-Dash" Alternative</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Choose social activities that don't center around food, or eat a meal beforehand so you can focus on the conversation rather than the terrifying anticipation of chewing noises.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-5 rounded-xl border border-yellow-200 shadow-sm">
                <MessageCircle className="text-[#d4a017] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Transparent Communication</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Tell friends upfront: "I have a sensory condition that makes certain sounds very physically distressing; I might need to step away or use headphones sometimes."</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-white p-5 rounded-xl border border-yellow-200 shadow-sm md:col-span-2 max-w-2xl mx-auto w-full">
                <Heart className="text-[#d4a017] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Identifying "Safe" People</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Prioritize relationships with individuals who understand your neurological boundaries and do not take it personally when you need to abruptly leave a triggering situation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Advocacy Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root mt-8">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl text-center flex items-center justify-center gap-3">
              <Megaphone className="text-[#0c264d] w-6 h-6" /> The Power of Advocacy
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              Connecting with dedicated organizations like the <strong>Misophonia Association</strong> or <strong>soquiet.org</strong> provides invaluable resources and a profound sense of community. Actively advocating for misophonia awareness helps dismantle the stigma and the exhausting "invisible" nature of the condition.
            </p>
          </div>

        </div>
      )}

      {/* ==========================================
          TAB 3: DAILY STRATEGIES
      ========================================== */}
      {activeTab === 'strategies' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Layered Approach Card (Slate) */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Daily Strategy: The Layered Approach</h2>
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Many successful individuals use multiple, overlapping layers of auditory protection to maintain their focus and prevent panic in public or shared spaces.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-3 flex flex-col items-start gap-2">
                  <VolumeX className="text-[#0c264d] w-6 h-6 mb-1" />
                  <h3 className="text-[#0c264d] font-bold text-base">Passive Protection</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Using high-fidelity earplugs (like Loop or Flare Audio) that slightly lower the overall decibel volume and soften sharp frequencies without completely blocking out human speech.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-3 flex flex-col items-start gap-2">
                  <Headphones className="text-[#0c264d] w-6 h-6 mb-1" />
                  <h3 className="text-[#0c264d] font-bold text-base">Active Protection</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Deploying premium active noise-canceling (ANC) headphones, usually paired with a favorite highly predictable playlist, white noise, or heavy brown noise to entirely mask the environment.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quiet Reserve Card (Cyan) */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root mt-8">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl text-center flex items-center justify-center gap-3">
              <BatteryCharging className="text-[#0A9DC4] w-7 h-7" /> Building a "Quiet Reserve"
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              Living with misophonia is mentally and physically exhausting because the brain's salience network is constantly scanning the environment for threats. Creating a "quiet reserve"—dedicated, scheduled times of the day with absolutely zero trigger sounds—is essential for lowering the nervous system's baseline irritability and preventing burnout.<sup className="text-[#10b981] font-bold ml-0.5">4</sup>
            </p>
          </div>

        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('misophonia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About Misophonia
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
            <p>1. Rouw, R., & Erfanian, M. (2018). A large-scale study of misophonia. <i>Journal of Clinical Psychology</i>.</p>
            <p>2. Kumar, S., et al. (2017). The brain basis for misophonia. <i>Current Biology</i>.</p>
            <p>3. Edelstein, M., et al. (2013). Misophonia: Physiological investigations and case descriptions. <i>Frontiers in Human Neuroscience</i>.</p>
            <p>4. Potgieter, I., et al. (2019). Misophonia: A scoping review of research. <i>Journal of Clinical Psychology</i>.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Germer, C. K. (2009). <i>The Mindful Path to Self-Compassion</i>. Guilford Press.</li>
            <li>Schröder, A., et al. (2013). Misophonia: Diagnostic criteria for a new psychiatric disorder. <i>PLOS ONE</i>.</li>
            <li>Brout, J. J. (2018). <i>The Misophonia Provider Network</i>.</li>
          </ul>
        </div>
      </div>

    </article>
  );
}