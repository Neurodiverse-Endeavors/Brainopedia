import React from 'react';

interface HomeProps {
  setCurrentArticle?: (article: string) => void;
}

export function Home({ setCurrentArticle }: HomeProps) {
  return (
    <article className="bg-white -m-8 p-4 sm:p-8 rounded-lg font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-2xl sm:text-3xl font-normal text-[#0c264d]">
        Welcome to Brainopedia
      </h1>

      <div className="space-y-10">
        {/* Banner Video */}
        <div className="mb-6">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="/images/brainopedia-banner.webp"
            className="w-full h-auto rounded-xl shadow-lg border border-gray-100 object-cover"
          >
            <source src="/images/brainopedia-banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Introduction */}
        <section className="max-w-2xl mx-auto text-center">
          <p className="text-base leading-relaxed text-gray-700">
            Browse our comprehensive collection of neurodevelopmental conditions and cognitive profiles. Choose a volume below to find detailed insights and targeted resources.
          </p>
        </section>

        {/* Encyclopedia Volumes */}
        <section>
          <h2 className="text-xl uppercase tracking-wider text-[#0c264d]/60 mb-6 px-3 font-bold text-center">
            Encyclopedia Volumes
          </h2>

          <div className="grid grid-cols-1 gap-8 w-full max-w-3xl mx-auto">
            
            {/* Volume I: Core Neurodevelopmental */}
            <div 
              className="group relative bg-[#f4f4f4] bg-cover bg-center rounded-r-lg rounded-l-md shadow-[3px_3px_0px_#cbd5e1,5px_5px_12px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_#cbd5e1,7px_7px_15px_rgba(0,0,0,0.08)] duration-300 flex flex-col border border-gray-300"
              style={{ backgroundImage: "url('/images/home-beige-background.webp')" }}
            >
              {/* 1. Ribbed Spine */}
              <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-8 bg-[#2abcd4] rounded-l-md shadow-[inset_-3px_0_6px_rgba(0,0,0,0.2),inset_3px_0_6px_rgba(255,255,255,0.3)] z-10 flex flex-col justify-evenly py-6">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-full h-1 bg-black/15 shadow-[0_1px_1px_rgba(255,255,255,0.3)]"></div>
                ))}
              </div>
              
              {/* 2. Spine Hinge Crease */}
              <div className="absolute top-0 bottom-0 left-6 sm:left-8 w-3 sm:w-4 bg-gradient-to-r from-black/10 via-black/5 to-transparent z-10"></div>
              
              {/* 3. Thick Paper Pages Edge with Vertical Lines */}
              <div className="absolute top-[2px] bottom-[2px] right-0 w-3 sm:w-5 bg-[#f8fafc] border-l border-gray-300 rounded-r-lg z-10 overflow-hidden shadow-[inset_1px_0_2px_rgba(0,0,0,0.03)]">
                <div className="w-full h-full bg-[repeating-linear-gradient(to_right,transparent,transparent_1px,#cbd5e1_1px,#cbd5e1_2px)] opacity-70"></div>
                <div className="absolute inset-0 shadow-[inset_-1px_0_3px_rgba(0,0,0,0.06)] pointer-events-none"></div>
              </div>

              {/* Content Container */}
              <div className="pl-12 sm:pl-16 pr-8 sm:pr-12 py-8 flex flex-col items-center text-center z-20">
                <div className="flex items-center gap-3 w-full mb-5">
                  <div className="h-[2px] bg-gradient-to-r from-transparent to-[#2abcd4] flex-1"></div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#2abcd4]">
                    Volume I
                  </span>
                  <div className="h-[2px] bg-gradient-to-l from-transparent to-[#2abcd4] flex-1"></div>
                </div>
                
                <img src="/images/home-apple-core-neurodev.webp" alt="Neural apple" className="w-20 sm:w-24 h-auto rounded-lg shadow-sm mb-4 border border-gray-100" />
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#0c264d] mb-3 leading-tight">
                  Core Neurodevelopmental
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-700 max-w-lg mb-6">
                  Fundamental neurodevelopmental conditions affecting attention, social communication, and sensory processing from early childhood.
                </p>
                
                <div className="w-full border-t border-dashed border-slate-300 pt-5 mt-auto">
                  <span className="text-[10px] sm:text-[12px] uppercase font-bold text-slate-500 mb-4 block tracking-widest">Included Topics</span>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <button onClick={() => setCurrentArticle?.('adhd')} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#2abcd4] hover:border-[#2abcd4] hover:text-white transition-all font-normal text-slate-700 shadow-sm">ADHD</button>
                    <button onClick={() => setCurrentArticle?.('autism')} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#2abcd4] hover:border-[#2abcd4] hover:text-white transition-all font-normal text-slate-700 shadow-sm">Autism or "ASD"</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Volume II: Learning Differences */}
            <div 
              className="group relative bg-[#f4f4f4] bg-cover bg-center rounded-r-lg rounded-l-md shadow-[3px_3px_0px_#cbd5e1,5px_5px_12px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_#cbd5e1,7px_7px_15px_rgba(0,0,0,0.08)] duration-300 flex flex-col border border-gray-300"
              style={{ backgroundImage: "url('/images/home-beige-background.webp')" }}
            >
              <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-8 bg-[#ffd166] rounded-l-md shadow-[inset_-3px_0_6px_rgba(0,0,0,0.15),inset_3px_0_6px_rgba(255,255,255,0.4)] z-10 flex flex-col justify-evenly py-6">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-full h-1 bg-black/10 shadow-[0_1px_1px_rgba(255,255,255,0.4)]"></div>
                ))}
              </div>
              
              <div className="absolute top-0 bottom-0 left-6 sm:left-8 w-3 sm:w-4 bg-gradient-to-r from-black/10 via-black/5 to-transparent z-10"></div>
              
              <div className="absolute top-[2px] bottom-[2px] right-0 w-3 sm:w-5 bg-[#f8fafc] border-l border-gray-300 rounded-r-lg z-10 overflow-hidden shadow-[inset_1px_0_2px_rgba(0,0,0,0.03)]">
                <div className="w-full h-full bg-[repeating-linear-gradient(to_right,transparent,transparent_1px,#cbd5e1_1px,#cbd5e1_2px)] opacity-70"></div>
                <div className="absolute inset-0 shadow-[inset_-1px_0_3px_rgba(0,0,0,0.06)] pointer-events-none"></div>
              </div>

              <div className="pl-12 sm:pl-16 pr-8 sm:pr-12 py-8 flex flex-col items-center text-center z-20">
                <div className="flex items-center gap-3 w-full mb-5">
                  <div className="h-[2px] bg-gradient-to-r from-transparent to-[#d4a017] flex-1"></div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#d4a017]">
                    Volume II
                  </span>
                  <div className="h-[2px] bg-gradient-to-l from-transparent to-[#d4a017] flex-1"></div>
                </div>
                
                <img src="/images/home-learning-diff.webp" alt="Gears" className="w-20 sm:w-24 h-auto rounded-lg shadow-sm mb-4 border border-gray-100" />
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#0c264d] mb-3 leading-tight">
                  Learning Differences & Profiles
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-700 max-w-lg mb-6">
                  Distinct cognitive profiles affecting how individuals process, retain, and express information beyond traditional academics.
                </p>
                
                <div className="w-full border-t border-dashed border-slate-300 pt-5 mt-auto">
                  <span className="text-[10px] sm:text-[12px] uppercase font-bold text-slate-500 mb-4 block tracking-widest">Included Topics</span>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[
                      { id: 'dyslexia', label: 'Dyslexia' },
                      { id: 'dyscalculia', label: 'Dyscalculia' },
                      { id: 'dysgraphia', label: 'Dysgraphia' },
                      { id: 'nvld', label: 'Non-Verbal Learning Disorder or "NVLD"' },
                      { id: 'dld', label: 'Developmental Language Disorder or "DLD"' },
                      { id: 'hyperlexia', label: 'Hyperlexia' },
                      { id: 'giftedness', label: 'Giftedness' },
                      { id: 'twice-exceptional', label: 'Twice-Exceptional or "2E"' }
                    ].map(item => (
                      <button key={item.id} onClick={() => setCurrentArticle?.(item.id)} className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#ffd166] hover:border-[#ffd166] hover:text-[#0c264d] shadow-sm transition-all font-normal text-slate-700">
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Volume III: Processing & Sensory */}
            <div 
              className="group relative bg-[#f4f4f4] bg-cover bg-center rounded-r-lg rounded-l-md shadow-[3px_3px_0px_#cbd5e1,5px_5px_12px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_#cbd5e1,7px_7px_15px_rgba(0,0,0,0.08)] duration-300 flex flex-col border border-gray-300"
              style={{ backgroundImage: "url('/images/home-beige-background.webp')" }}
            >
              <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-8 bg-[#0A9DC4] rounded-l-md shadow-[inset_-3px_0_6px_rgba(0,0,0,0.25),inset_3px_0_6px_rgba(255,255,255,0.2)] z-10 flex flex-col justify-evenly py-6">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-full h-1 bg-black/20 shadow-[0_1px_1px_rgba(255,255,255,0.2)]"></div>
                ))}
              </div>
              
              <div className="absolute top-0 bottom-0 left-6 sm:left-8 w-3 sm:w-4 bg-gradient-to-r from-black/10 via-black/5 to-transparent z-10"></div>
              
              <div className="absolute top-[2px] bottom-[2px] right-0 w-3 sm:w-5 bg-[#f8fafc] border-l border-gray-300 rounded-r-lg z-10 overflow-hidden shadow-[inset_1px_0_2px_rgba(0,0,0,0.03)]">
                <div className="w-full h-full bg-[repeating-linear-gradient(to_right,transparent,transparent_1px,#cbd5e1_1px,#cbd5e1_2px)] opacity-70"></div>
                <div className="absolute inset-0 shadow-[inset_-1px_0_3px_rgba(0,0,0,0.06)] pointer-events-none"></div>
              </div>

              <div className="pl-12 sm:pl-16 pr-8 sm:pr-12 py-8 flex flex-col items-center text-center z-20">
                <div className="flex items-center gap-3 w-full mb-5">
                  <div className="h-[2px] bg-gradient-to-r from-transparent to-[#0A9DC4] flex-1"></div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0A9DC4]">
                    Volume III
                  </span>
                  <div className="h-[2px] bg-gradient-to-l from-transparent to-[#0A9DC4] flex-1"></div>
                </div>
                
                <img src="/images/home-math-sensory-brain.webp" alt="Sensory" className="w-20 sm:w-24 h-auto rounded-lg shadow-sm mb-4 border border-gray-100" />
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#0c264d] mb-3 leading-tight">
                  Processing & Sensory
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-700 max-w-lg mb-6">
                  Atypical ways of interpreting sensory information like auditory, visual, and tactile inputs from the environment.
                </p>
                
                <div className="w-full border-t border-dashed border-slate-300 pt-5 mt-auto">
                  <span className="text-[10px] sm:text-[12px] uppercase font-bold text-slate-500 mb-4 block tracking-widest">Included Topics</span>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[
                      { id: 'apd', label: 'Auditory Processing Disorder or "APD"' },
                      { id: 'visual-processing', label: 'Visual Processing Disorder or "VPD"' },
                      { id: 'spd', label: 'Sensory Processing Disorder or "SPD"' },
                      { id: 'misophonia', label: 'Misophonia' },
                      { id: 'synesthesia', label: 'Synesthesia' }
                    ].map(item => (
                      <button key={item.id} onClick={() => setCurrentArticle?.(item.id)} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#0A9DC4] hover:border-[#0A9DC4] hover:text-white shadow-sm transition-all font-normal text-slate-700">
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Volume IV: Movement & Motor */}
            <div 
              className="group relative bg-[#f4f4f4] bg-cover bg-center rounded-r-lg rounded-l-md shadow-[3px_3px_0px_#cbd5e1,5px_5px_12px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_#cbd5e1,7px_7px_15px_rgba(0,0,0,0.08)] duration-300 flex flex-col border border-gray-300"
              style={{ backgroundImage: "url('/images/home-beige-background.webp')" }}
            >
              <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-8 bg-[#0c264d] rounded-l-md shadow-[inset_-3px_0_6px_rgba(0,0,0,0.4),inset_3px_0_6px_rgba(255,255,255,0.15)] z-10 flex flex-col justify-evenly py-6">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-full h-1 bg-black/40 shadow-[0_1px_1px_rgba(255,255,255,0.1)]"></div>
                ))}
              </div>
              
              <div className="absolute top-0 bottom-0 left-6 sm:left-8 w-3 sm:w-4 bg-gradient-to-r from-black/15 via-black/5 to-transparent z-10"></div>
              
              <div className="absolute top-[2px] bottom-[2px] right-0 w-3 sm:w-5 bg-[#f8fafc] border-l border-gray-300 rounded-r-lg z-10 overflow-hidden shadow-[inset_1px_0_2px_rgba(0,0,0,0.03)]">
                <div className="w-full h-full bg-[repeating-linear-gradient(to_right,transparent,transparent_1px,#cbd5e1_1px,#cbd5e1_2px)] opacity-70"></div>
                <div className="absolute inset-0 shadow-[inset_-1px_0_3px_rgba(0,0,0,0.06)] pointer-events-none"></div>
              </div>

              <div className="pl-12 sm:pl-16 pr-8 sm:pr-12 py-8 flex flex-col items-center text-center z-20">
                <div className="flex items-center gap-3 w-full mb-5">
                  <div className="h-[2px] bg-gradient-to-r from-transparent to-[#0c264d] flex-1"></div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0c264d]">
                    Volume IV
                  </span>
                  <div className="h-[2px] bg-gradient-to-l from-transparent to-[#0c264d] flex-1"></div>
                </div>
                
                <img src="/images/home-movement-motor.webp" alt="Motor" className="w-20 sm:w-24 h-auto rounded-lg shadow-sm mb-4 border border-gray-100" />
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#0c264d] mb-3 leading-tight">
                  Movement & Motor
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-700 max-w-lg mb-6">
                  Conditions affecting the brain's ability to plan, coordinate, and execute physical movements seamlessly.
                </p>
                
                <div className="w-full border-t border-dashed border-slate-300 pt-5 mt-auto">
                  <span className="text-[10px] sm:text-[12px] uppercase font-bold text-slate-500 mb-4 block tracking-widest">Included Topics</span>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <button onClick={() => setCurrentArticle?.('dyspraxia')} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#0c264d] hover:border-[#0c264d] hover:text-white shadow-sm transition-all font-normal text-slate-700">Dyspraxia</button>
                    <button onClick={() => setCurrentArticle?.('tourette')} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#0c264d] hover:border-[#0c264d] hover:text-white shadow-sm transition-all font-normal text-slate-700">Tourette Syndrome</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Volume V: Mental Health Crossovers */}
            <div 
              className="group relative bg-[#f4f4f4] bg-cover bg-center rounded-r-lg rounded-l-md shadow-[3px_3px_0px_#cbd5e1,5px_5px_12px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_#cbd5e1,7px_7px_15px_rgba(0,0,0,0.08)] duration-300 flex flex-col border border-gray-300"
              style={{ backgroundImage: "url('/images/home-beige-background.webp')" }}
            >
              <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-8 bg-[#2abcd4] rounded-l-md shadow-[inset_-3px_0_6px_rgba(0,0,0,0.2),inset_3px_0_6px_rgba(255,255,255,0.3)] z-10 flex flex-col justify-evenly py-6">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-full h-1 bg-black/15 shadow-[0_1px_1px_rgba(255,255,255,0.3)]"></div>
                ))}
              </div>
              
              <div className="absolute top-0 bottom-0 left-6 sm:left-8 w-3 sm:w-4 bg-gradient-to-r from-black/10 via-black/5 to-transparent z-10"></div>
              
              <div className="absolute top-[2px] bottom-[2px] right-0 w-3 sm:w-5 bg-[#f8fafc] border-l border-gray-300 rounded-r-lg z-10 overflow-hidden shadow-[inset_1px_0_2px_rgba(0,0,0,0.03)]">
                <div className="w-full h-full bg-[repeating-linear-gradient(to_right,transparent,transparent_1px,#cbd5e1_1px,#cbd5e1_2px)] opacity-70"></div>
                <div className="absolute inset-0 shadow-[inset_-1px_0_3px_rgba(0,0,0,0.06)] pointer-events-none"></div>
              </div>

              <div className="pl-12 sm:pl-16 pr-8 sm:pr-12 py-8 flex flex-col items-center text-center z-20">
                <div className="flex items-center gap-3 w-full mb-5">
                  <div className="h-[2px] bg-gradient-to-r from-transparent to-[#2abcd4] flex-1"></div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#2abcd4]">
                    Volume V
                  </span>
                  <div className="h-[2px] bg-gradient-to-l from-transparent to-[#2abcd4] flex-1"></div>
                </div>
                
                <img src="/images/home-mental-health-fire-brain-bright.webp" alt="Brain" className="w-20 sm:w-24 h-auto rounded-lg shadow-sm mb-4 border border-gray-100" />
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#0c264d] mb-3 leading-tight">
                  Mental Health Crossovers
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-700 max-w-lg mb-6">
                  Distinctive neurological patterns found at the complex intersection of neurodivergence and mental health.
                </p>
                
                <div className="w-full border-t border-dashed border-slate-300 pt-5 mt-auto">
                  <span className="text-[10px] sm:text-[12px] uppercase font-bold text-slate-500 mb-4 block tracking-widest">Included Topics</span>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[
                      { id: 'anxiety-stress', label: 'Anxiety & Stress' },
                      { id: 'mood-emotions', label: 'Mood & Emotions' },
                      { id: 'trauma-burnout', label: 'Trauma & Burnout' },
                      { id: 'compulsions-coping', label: 'Compulsions & Coping' }
                    ].map(item => (
                      <button key={item.id} onClick={() => setCurrentArticle?.(item.id)} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#2abcd4] hover:border-[#2abcd4] hover:text-white shadow-sm transition-all font-normal text-slate-700">
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Volume VI: Genetic or Environmental */}
            <div 
              className="group relative bg-[#f4f4f4] bg-cover bg-center rounded-r-lg rounded-l-md shadow-[3px_3px_0px_#cbd5e1,5px_5px_12px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_#cbd5e1,7px_7px_15px_rgba(0,0,0,0.08)] duration-300 flex flex-col border border-gray-300"
              style={{ backgroundImage: "url('/images/home-beige-background.webp')" }}
            >
              <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-8 bg-[#ffd166] rounded-l-md shadow-[inset_-3px_0_6px_rgba(0,0,0,0.15),inset_3px_0_6px_rgba(255,255,255,0.4)] z-10 flex flex-col justify-evenly py-6">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-full h-1 bg-black/10 shadow-[0_1px_1px_rgba(255,255,255,0.4)]"></div>
                ))}
              </div>
              
              <div className="absolute top-0 bottom-0 left-6 sm:left-8 w-3 sm:w-4 bg-gradient-to-r from-black/10 via-black/5 to-transparent z-10"></div>
              
              <div className="absolute top-[2px] bottom-[2px] right-0 w-3 sm:w-5 bg-[#f8fafc] border-l border-gray-300 rounded-r-lg z-10 overflow-hidden shadow-[inset_1px_0_2px_rgba(0,0,0,0.03)]">
                <div className="w-full h-full bg-[repeating-linear-gradient(to_right,transparent,transparent_1px,#cbd5e1_1px,#cbd5e1_2px)] opacity-70"></div>
                <div className="absolute inset-0 shadow-[inset_-1px_0_3px_rgba(0,0,0,0.06)] pointer-events-none"></div>
              </div>

              <div className="pl-12 sm:pl-16 pr-8 sm:pr-12 py-8 flex flex-col items-center text-center z-20">
                <div className="flex items-center gap-3 w-full mb-5">
                  <div className="h-[2px] bg-gradient-to-r from-transparent to-[#d4a017] flex-1"></div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#d4a017]">
                    Volume VI
                  </span>
                  <div className="h-[2px] bg-gradient-to-l from-transparent to-[#d4a017] flex-1"></div>
                </div>
                
                <img src="/images/home-genetics-or-enviro.webp" alt="DNA" className="w-20 sm:w-24 h-auto rounded-lg shadow-sm mb-4 border border-gray-100" />
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#0c264d] mb-3 leading-tight">
                  Genetic or Environmental
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-700 max-w-lg mb-6">
                  Conditions arising from specific genetic variations or environmental factors during early development.
                </p>
                
                <div className="w-full border-t border-dashed border-slate-300 pt-5 mt-auto">
                  <span className="text-[10px] sm:text-[12px] uppercase font-bold text-slate-500 mb-4 block tracking-widest">Included Topics</span>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[
                      { id: 'downsyndrome', label: 'Down Syndrome' },
                      { id: 'intellectual-disability', label: 'Intellectual Disability' },
                      { id: 'fasd', label: 'Fetal Alcohol Syndrome Disorder or "FSAD"' },
                      { id: 'epilepsy', label: 'Epilepsy' }
                    ].map(item => (
                      <button key={item.id} onClick={() => setCurrentArticle?.(item.id)} className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#ffd166] hover:border-[#ffd166] hover:text-[#0c264d] shadow-sm transition-all font-normal text-slate-700">
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

  
          </div>
        </section>
      </div>
    </article>
  );
}