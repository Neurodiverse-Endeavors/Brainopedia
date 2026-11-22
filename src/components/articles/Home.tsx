import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomeProps {
  setCurrentArticle?: (article: string) => void;
}

export function Home({ setCurrentArticle }: HomeProps) {
  return (
    <article className="bg-[#576d8e]/10 -m-8 p-4 sm:p-8 rounded-lg font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-5 text-2xl sm:text-3xl font-normal text-[#0c264d]">
        Welcome to Brainopedia
      </h1>

      <div className="space-y-8">
        {/* Banner Video */}
        <div>
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
          <p className="text-sm leading-relaxed text-gray-700">
            Browse our neurodiversity-affirming collection of cognitive profiles and developmental conditions. Choose a volume below to explore strengths-based insights and practical resources.
          </p>
        </section>

        {/* Encyclopedia Volumes - Proportioned 2-Column Bookshelf */}
        <section>
          <h2 className="text-lg uppercase tracking-wider text-[#0c264d]/70 mb-5 px-3 font-bold text-center">
            Encyclopedia Volumes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
            {/* Volume I: Core Neurodevelopmental */}
            <div
              className="group relative bg-[#f4f4f4] bg-cover bg-center rounded-r-lg rounded-l-md shadow-[3px_3px_0px_#cbd5e1,5px_5px_12px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_#cbd5e1,7px_7px_15px_rgba(0,0,0,0.08)] duration-300 flex flex-col border border-gray-300"
              style={{ backgroundImage: "url('/images/home-beige-background.webp')" }}
            >
              {/* Ribbed Spine */}
              <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-7 bg-[#2abcd4] rounded-l-md shadow-[inset_-3px_0_6px_rgba(0,0,0,0.2),inset_3px_0_6px_rgba(255,255,255,0.3)] z-10 flex flex-col justify-evenly py-5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-full h-1 bg-black/15 shadow-[0_1px_1px_rgba(255,255,255,0.3)]" />
                ))}
              </div>
              {/* Hinge Crease */}
              <div className="absolute top-0 bottom-0 left-6 sm:left-7 w-3 bg-gradient-to-r from-black/10 via-black/5 to-transparent z-10" />
              {/* Paper Page Edges */}
              <div className="absolute top-[2px] bottom-[2px] right-0 w-3 sm:w-4 bg-[#f8fafc] border-l border-gray-300 rounded-r-lg z-10 overflow-hidden shadow-[inset_1px_0_2px_rgba(0,0,0,0.03)]">
                <div className="w-full h-full bg-[repeating-linear-gradient(to_right,transparent,transparent_1px,#cbd5e1_1px,#cbd5e1_2px)] opacity-70" />
              </div>

              {/* Upright Book Cover Content */}
              <div className="pl-11 sm:pl-13 pr-7 sm:pr-9 py-5 sm:py-6 flex flex-col items-center text-center z-20 h-full">
                <div className="flex items-center gap-3 w-full mb-3">
                  <div className="h-[2px] bg-gradient-to-r from-transparent to-[#2abcd4] flex-1" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A9DC4]">
                    Volume I
                  </span>
                  <div className="h-[2px] bg-gradient-to-l from-transparent to-[#2abcd4] flex-1" />
                </div>

                <ImageWithFallback
                  src="/images/home-apple-core-neurodev.webp"
                  alt="Core neurodevelopmental illustration"
                  className="w-16 sm:w-20 max-w-full h-auto block mx-auto rounded-lg shadow-sm mb-3 border border-[#2abcd4]"
                />

                <h3 className="text-lg sm:text-xl font-bold text-[#0c264d] mb-2 leading-snug">
                  Core Neurodevelopmental
                </h3>

                <p className="text-sm text-slate-700 max-w-sm mb-4 leading-relaxed">
                  Foundational profiles shaping attention, communication, and sensory engagement from early childhood.
                </p>

                <div className="w-full border-t border-dashed border-slate-300 pt-3.5 mt-auto flex flex-wrap gap-2 justify-center">
                  <button
                    type="button"
                    onClick={() => setCurrentArticle?.('adhd')}
                    className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#2abcd4] hover:border-[#2abcd4] hover:text-white transition-all font-normal text-[#0c264d] shadow-sm"
                  >
                    ADHD
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentArticle?.('autism')}
                    className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#2abcd4] hover:border-[#2abcd4] hover:text-white transition-all font-normal text-[#0c264d] shadow-sm"
                  >
                    Autism or &ldquo;ASD&rdquo;
                  </button>
                </div>
              </div>
            </div>

            {/* Volume II: Learning Profiles */}
            <div
              className="group relative bg-[#f4f4f4] bg-cover bg-center rounded-r-lg rounded-l-md shadow-[3px_3px_0px_#cbd5e1,5px_5px_12px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_#cbd5e1,7px_7px_15px_rgba(0,0,0,0.08)] duration-300 flex flex-col border border-gray-300"
              style={{ backgroundImage: "url('/images/home-beige-background.webp')" }}
            >
              <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-7 bg-[#ffd166] rounded-l-md shadow-[inset_-3px_0_6px_rgba(0,0,0,0.15),inset_3px_0_6px_rgba(255,255,255,0.4)] z-10 flex flex-col justify-evenly py-5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-full h-1 bg-black/10 shadow-[0_1px_1px_rgba(255,255,255,0.4)]" />
                ))}
              </div>
              <div className="absolute top-0 bottom-0 left-6 sm:left-7 w-3 bg-gradient-to-r from-black/10 via-black/5 to-transparent z-10" />
              <div className="absolute top-[2px] bottom-[2px] right-0 w-3 sm:w-4 bg-[#f8fafc] border-l border-gray-300 rounded-r-lg z-10 overflow-hidden shadow-[inset_1px_0_2px_rgba(0,0,0,0.03)]">
                <div className="w-full h-full bg-[repeating-linear-gradient(to_right,transparent,transparent_1px,#cbd5e1_1px,#cbd5e1_2px)] opacity-70" />
              </div>

              <div className="pl-11 sm:pl-13 pr-7 sm:pr-9 py-5 sm:py-6 flex flex-col items-center text-center z-20 h-full">
                <div className="flex items-center gap-3 w-full mb-3">
                  <div className="h-[2px] bg-gradient-to-r from-transparent to-[#ffd166] flex-1" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0c264d]">
                    Volume II
                  </span>
                  <div className="h-[2px] bg-gradient-to-l from-transparent to-[#ffd166] flex-1" />
                </div>

                <ImageWithFallback
                  src="/images/home-learning-diff.webp"
                  alt="Learning profiles illustration"
                  className="w-16 sm:w-20 max-w-full h-auto block mx-auto rounded-lg shadow-sm mb-3 border border-[#ffd166]"
                />

                <h3 className="text-lg sm:text-xl font-bold text-[#0c264d] mb-2 leading-snug">
                  Learning Profiles
                </h3>

                <p className="text-sm text-slate-700 max-w-sm mb-4 leading-relaxed">
                  Distinct ways of processing language, numbers, writing, and advanced patterns beyond traditional academics.
                </p>

                <div className="w-full border-t border-dashed border-slate-300 pt-3.5 mt-auto flex flex-wrap gap-1.5 justify-center">
                  {[
                    { id: 'dyslexia', label: 'Dyslexia' },
                    { id: 'dyscalculia', label: 'Dyscalculia' },
                    { id: 'dysgraphia', label: 'Dysgraphia' },
                    { id: 'nvld', label: 'NVLD' },
                    { id: 'dld', label: 'DLD' },
                    { id: 'hyperlexia', label: 'Hyperlexia' },
                    { id: 'giftedness', label: 'Giftedness' },
                    { id: 'twice-exceptional', label: '2E' },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setCurrentArticle?.(item.id)}
                      className="px-2.5 py-1 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#ffd166] hover:border-[#ffd166] hover:text-[#0c264d] shadow-sm transition-all font-normal text-[#0c264d]"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Volume III: Processing & Sensory */}
            <div
              className="group relative bg-[#f4f4f4] bg-cover bg-center rounded-r-lg rounded-l-md shadow-[3px_3px_0px_#cbd5e1,5px_5px_12px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_#cbd5e1,7px_7px_15px_rgba(0,0,0,0.08)] duration-300 flex flex-col border border-gray-300"
              style={{ backgroundImage: "url('/images/home-beige-background.webp')" }}
            >
              <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-7 bg-[#0A9DC4] rounded-l-md shadow-[inset_-3px_0_6px_rgba(0,0,0,0.25),inset_3px_0_6px_rgba(255,255,255,0.2)] z-10 flex flex-col justify-evenly py-5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-full h-1 bg-black/20 shadow-[0_1px_1px_rgba(255,255,255,0.2)]" />
                ))}
              </div>
              <div className="absolute top-0 bottom-0 left-6 sm:left-7 w-3 bg-gradient-to-r from-black/10 via-black/5 to-transparent z-10" />
              <div className="absolute top-[2px] bottom-[2px] right-0 w-3 sm:w-4 bg-[#f8fafc] border-l border-gray-300 rounded-r-lg z-10 overflow-hidden shadow-[inset_1px_0_2px_rgba(0,0,0,0.03)]">
                <div className="w-full h-full bg-[repeating-linear-gradient(to_right,transparent,transparent_1px,#cbd5e1_1px,#cbd5e1_2px)] opacity-70" />
              </div>

              <div className="pl-11 sm:pl-13 pr-7 sm:pr-9 py-5 sm:py-6 flex flex-col items-center text-center z-20 h-full">
                <div className="flex items-center gap-3 w-full mb-3">
                  <div className="h-[2px] bg-gradient-to-r from-transparent to-[#0A9DC4] flex-1" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A9DC4]">
                    Volume III
                  </span>
                  <div className="h-[2px] bg-gradient-to-l from-transparent to-[#0A9DC4] flex-1" />
                </div>

                <ImageWithFallback
                  src="/images/home-math-sensory-brain.webp"
                  alt="Processing and sensory illustration"
                  className="w-16 sm:w-20 max-w-full h-auto block mx-auto rounded-lg shadow-sm mb-3 border border-[#0A9DC4]"
                />

                <h3 className="text-lg sm:text-xl font-bold text-[#0c264d] mb-2 leading-snug">
                  Processing &amp; Sensory
                </h3>

                <p className="text-sm text-slate-700 max-w-sm mb-4 leading-relaxed">
                  Atypical cortical interpretation of sound, sight, touch, and cross-sensory input from the environment.
                </p>

                <div className="w-full border-t border-dashed border-slate-300 pt-3.5 mt-auto flex flex-wrap gap-1.5 justify-center">
                  {[
                    { id: 'apd', label: 'APD' },
                    { id: 'visual-processing', label: 'VPD' },
                    { id: 'spd', label: 'SPD' },
                    { id: 'misophonia', label: 'Misophonia' },
                    { id: 'synesthesia', label: 'Synesthesia' },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setCurrentArticle?.(item.id)}
                      className="px-2.5 py-1 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#0A9DC4] hover:border-[#0A9DC4] hover:text-white shadow-sm transition-all font-normal text-[#0c264d]"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Volume IV: Movement & Motor */}
            <div
              className="group relative bg-[#f4f4f4] bg-cover bg-center rounded-r-lg rounded-l-md shadow-[3px_3px_0px_#cbd5e1,5px_5px_12px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_#cbd5e1,7px_7px_15px_rgba(0,0,0,0.08)] duration-300 flex flex-col border border-gray-300"
              style={{ backgroundImage: "url('/images/home-beige-background.webp')" }}
            >
              <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-7 bg-[#0c264d] rounded-l-md shadow-[inset_-3px_0_6px_rgba(0,0,0,0.4),inset_3px_0_6px_rgba(255,255,255,0.15)] z-10 flex flex-col justify-evenly py-5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-full h-1 bg-black/40 shadow-[0_1px_1px_rgba(255,255,255,0.1)]" />
                ))}
              </div>
              <div className="absolute top-0 bottom-0 left-6 sm:left-7 w-3 bg-gradient-to-r from-black/15 via-black/5 to-transparent z-10" />
              <div className="absolute top-[2px] bottom-[2px] right-0 w-3 sm:w-4 bg-[#f8fafc] border-l border-gray-300 rounded-r-lg z-10 overflow-hidden shadow-[inset_1px_0_2px_rgba(0,0,0,0.03)]">
                <div className="w-full h-full bg-[repeating-linear-gradient(to_right,transparent,transparent_1px,#cbd5e1_1px,#cbd5e1_2px)] opacity-70" />
              </div>

              <div className="pl-11 sm:pl-13 pr-7 sm:pr-9 py-5 sm:py-6 flex flex-col items-center text-center z-20 h-full">
                <div className="flex items-center gap-3 w-full mb-3">
                  <div className="h-[2px] bg-gradient-to-r from-transparent to-[#0c264d] flex-1" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0c264d]">
                    Volume IV
                  </span>
                  <div className="h-[2px] bg-gradient-to-l from-transparent to-[#0c264d] flex-1" />
                </div>

                <ImageWithFallback
                  src="/images/home-movement-motor.webp"
                  alt="Movement and motor illustration"
                  className="w-16 sm:w-20 max-w-full h-auto block mx-auto rounded-lg shadow-sm mb-3 border border-[#0c264d]"
                />

                <h3 className="text-lg sm:text-xl font-bold text-[#0c264d] mb-2 leading-snug">
                  Movement &amp; Motor
                </h3>

                <p className="text-sm text-slate-700 max-w-sm mb-4 leading-relaxed">
                  Differences in motor planning, physical coordination, and involuntary tic pathways.
                </p>

                <div className="w-full border-t border-dashed border-slate-300 pt-3.5 mt-auto flex flex-wrap gap-2 justify-center">
                  <button
                    type="button"
                    onClick={() => setCurrentArticle?.('dyspraxia')}
                    className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#0c264d] hover:border-[#0c264d] hover:text-white shadow-sm transition-all font-normal text-[#0c264d]"
                  >
                    Dyspraxia
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentArticle?.('tourette')}
                    className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#0c264d] hover:border-[#0c264d] hover:text-white shadow-sm transition-all font-normal text-[#0c264d]"
                  >
                    Tourette Syndrome
                  </button>
                </div>
              </div>
            </div>

            {/* Volume V: Genetic or Environmental */}
            <div
              className="group relative bg-[#f4f4f4] bg-cover bg-center rounded-r-lg rounded-l-md shadow-[3px_3px_0px_#cbd5e1,5px_5px_12px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_#cbd5e1,7px_7px_15px_rgba(0,0,0,0.08)] duration-300 flex flex-col border border-gray-300"
              style={{ backgroundImage: "url('/images/home-beige-background.webp')" }}
            >
              <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-7 bg-[#2abcd4] rounded-l-md shadow-[inset_-3px_0_6px_rgba(0,0,0,0.2),inset_3px_0_6px_rgba(255,255,255,0.3)] z-10 flex flex-col justify-evenly py-5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-full h-1 bg-black/15 shadow-[0_1px_1px_rgba(255,255,255,0.3)]" />
                ))}
              </div>
              <div className="absolute top-0 bottom-0 left-6 sm:left-7 w-3 bg-gradient-to-r from-black/10 via-black/5 to-transparent z-10" />
              <div className="absolute top-[2px] bottom-[2px] right-0 w-3 sm:w-4 bg-[#f8fafc] border-l border-gray-300 rounded-r-lg z-10 overflow-hidden shadow-[inset_1px_0_2px_rgba(0,0,0,0.03)]">
                <div className="w-full h-full bg-[repeating-linear-gradient(to_right,transparent,transparent_1px,#cbd5e1_1px,#cbd5e1_2px)] opacity-70" />
              </div>

              <div className="pl-11 sm:pl-13 pr-7 sm:pr-9 py-5 sm:py-6 flex flex-col items-center text-center z-20 h-full">
                <div className="flex items-center gap-3 w-full mb-3">
                  <div className="h-[2px] bg-gradient-to-r from-transparent to-[#2abcd4] flex-1" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A9DC4]">
                    Volume V
                  </span>
                  <div className="h-[2px] bg-gradient-to-l from-transparent to-[#2abcd4] flex-1" />
                </div>

                <ImageWithFallback
                  src="/images/home-genetics-or-enviro.webp"
                  alt="Genetic or environmental illustration"
                  className="w-16 sm:w-20 max-w-full h-auto block mx-auto rounded-lg shadow-sm mb-3 border border-[#2abcd4]"
                />

                <h3 className="text-lg sm:text-xl font-bold text-[#0c264d] mb-2 leading-snug">
                  Genetic or Environmental
                </h3>

                <p className="text-sm text-slate-700 max-w-sm mb-4 leading-relaxed">
                  Neurological profiles shaped by chromosomal, prenatal, or immune factors during early development.
                </p>

                <div className="w-full border-t border-dashed border-slate-300 pt-3.5 mt-auto flex flex-wrap gap-1.5 justify-center">
                  {[
                    { id: 'downsyndrome', label: 'Down Syndrome' },
                    { id: 'intellectual-disability', label: 'Intellectual Disability' },
                    { id: 'fasd', label: 'FASD' },
                    { id: 'epilepsy', label: 'Epilepsy' },
                    { id: 'pandas', label: 'PANDAS & PANS' },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setCurrentArticle?.(item.id)}
                      className="px-2.5 py-1 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#2abcd4] hover:border-[#2abcd4] hover:text-white shadow-sm transition-all font-normal text-[#0c264d]"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Volume VI: Mental Health Crossovers */}
            <div
              className="group relative bg-[#f4f4f4] bg-cover bg-center rounded-r-lg rounded-l-md shadow-[3px_3px_0px_#cbd5e1,5px_5px_12px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_#cbd5e1,7px_7px_15px_rgba(0,0,0,0.08)] duration-300 flex flex-col border border-gray-300"
              style={{ backgroundImage: "url('/images/home-beige-background.webp')" }}
            >
              <div className="absolute top-0 bottom-0 left-0 w-6 sm:w-7 bg-[#ffd166] rounded-l-md shadow-[inset_-3px_0_6px_rgba(0,0,0,0.15),inset_3px_0_6px_rgba(255,255,255,0.4)] z-10 flex flex-col justify-evenly py-5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-full h-1 bg-black/10 shadow-[0_1px_1px_rgba(255,255,255,0.4)]" />
                ))}
              </div>
              <div className="absolute top-0 bottom-0 left-6 sm:left-7 w-3 bg-gradient-to-r from-black/10 via-black/5 to-transparent z-10" />
              <div className="absolute top-[2px] bottom-[2px] right-0 w-3 sm:w-4 bg-[#f8fafc] border-l border-gray-300 rounded-r-lg z-10 overflow-hidden shadow-[inset_1px_0_2px_rgba(0,0,0,0.03)]">
                <div className="w-full h-full bg-[repeating-linear-gradient(to_right,transparent,transparent_1px,#cbd5e1_1px,#cbd5e1_2px)] opacity-70" />
              </div>

              <div className="pl-11 sm:pl-13 pr-7 sm:pr-9 py-5 sm:py-6 flex flex-col items-center text-center z-20 h-full">
                <div className="flex items-center gap-3 w-full mb-3">
                  <div className="h-[2px] bg-gradient-to-r from-transparent to-[#ffd166] flex-1" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0c264d]">
                    Volume VI
                  </span>
                  <div className="h-[2px] bg-gradient-to-l from-transparent to-[#ffd166] flex-1" />
                </div>

                <ImageWithFallback
                  src="/images/home-mental-health-fire-brain-bright.webp"
                  alt="Mental health crossovers illustration"
                  className="w-16 sm:w-20 max-w-full h-auto block mx-auto rounded-lg shadow-sm mb-3 border border-[#ffd166]"
                />

                <h3 className="text-lg sm:text-xl font-bold text-[#0c264d] mb-2 leading-snug">
                  Mental Health Crossovers
                </h3>

                <p className="text-sm text-slate-700 max-w-sm mb-4 leading-relaxed">
                  Lived intersections of neurodivergence with stress, burnout, mood, and emotional regulation.
                </p>

                <div className="w-full border-t border-dashed border-slate-300 pt-3.5 mt-auto flex flex-wrap gap-1.5 justify-center">
                  {[
                    { id: 'anxiety-stress', label: 'Anxiety & Stress' },
                    { id: 'mood-emotions', label: 'Mood & Emotions' },
                    { id: 'trauma-burnout', label: 'Trauma & Burnout' },
                    { id: 'compulsions-coping', label: 'Compulsions' },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setCurrentArticle?.(item.id)}
                      className="px-2.5 py-1 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#ffd166] hover:border-[#ffd166] hover:text-[#0c264d] shadow-sm transition-all font-normal text-[#0c264d]"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}