import React, { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';

interface DyslexiaOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaOverview({ setCurrentArticle }: DyslexiaOverviewProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('what-is');

  function WhatIsContent() {
    return (
      <div className="animate-fadeIn">
        {/* INTRO: BLUE BOX WITH FLOATED VIDEO */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg border-l-4 border-[#2abcd4] mb-8">
          <div className="w-48 md:w-64 rounded-md shadow-sm float-right ml-6 mb-4 overflow-hidden"> 
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              poster="/images/dyslexia/dyslexia-overview-intro.webp"
              className="w-full h-auto object-contain"
              aria-label="word salad with dyslexia in the middle"
            >
              <source 
                src="/images/dyslexia/dyslexia-overview-intro.mp4" 
                type="video/mp4" 
              />
              <img 
                src="/images/dyslexia/dyslexia-overview-intro.webp" 
                alt="word salad with dyslexia in the middle"
                className="w-full h-auto object-contain"
              />
            </video>
          </div>

          <p className="mb-4 text-gray-800 leading-relaxed">
            Dyslexia is a specific learning disorder that primarily affects reading and language processing. 
            It is neurobiological in origin and characterized by difficulties with accurate and/or fluent word recognition, 
            poor spelling, and decoding abilities. These difficulties typically result from a deficit in the 
            phonological component of language that is often unexpected in relation to other cognitive abilities.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Importantly, dyslexia is not a reflection of low intelligence or lack of effort. Many individuals with dyslexia 
            have average or above-average intelligence and can be highly successful when provided with appropriate support 
            and accommodations.
          </p>
        </div>

        {/* SECTION 1: WHAT IS DYSLEXIA? */}
        <section className="space-y-4 mb-8 clear-both">
          <h2 className="text-[#0c264d] font-bold text-2xl border-b border-[#ffd166] pb-2">What is Dyslexia?</h2>

          <div className="bg-white rounded-md border-l-4 border-[#2abcd4] p-5 shadow-sm mt-4">
            <h3 className="text-[#0c264d] font-bold mb-2 text-sm uppercase tracking-wider">The IDA Definition</h3>
            <p className="italic text-gray-700 text-sm leading-relaxed">
              "Dyslexia is a specific learning disability that is neurobiological in origin. It is characterized by 
              difficulties with accurate and/or fluent word recognition and by poor spelling and decoding abilities. 
              These difficulties typically result from a deficit in the phonological component of language that is often 
              unexpected in relation to other cognitive abilities and the provision of effective classroom instruction."
            </p>
          </div>
        </section>

        {/* SECTION 1.5: KEY CHARACTERISTICS */}
        <section className="bg-[#ffd166]/10 p-8 rounded-2xl mb-8 clear-both">
          <h3 className="text-[#0c264d] font-bold mb-6 text-2xl">Key Characteristics</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl border-2 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-3 text-[#0A9DC4]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] mb-2 text-md">Phonological Processing</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Trouble with the sound structure of language.</p>
            </div>

            <div className="bg-white rounded-xl border-2 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-3 text-[#0A9DC4]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] mb-2 text-md">Word Decoding</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Difficulty sounding out written words.</p>
            </div>

            <div className="bg-white rounded-xl border-2 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-3 text-[#0A9DC4]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] mb-2 text-md">Reading Fluency</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Slow, effortful reading even of familiar text.</p>
            </div>

            <div className="bg-white rounded-xl border-2 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-3 text-[#0A9DC4]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] mb-2 text-md">Spelling Difficulties</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Persistent spelling errors despite instruction.</p>
            </div>

            <div className="bg-white rounded-xl border-2 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-3 text-[#0A9DC4]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] mb-2 text-md">Neurobiological Basis</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Differences in brain structure/function related to reading.</p>
            </div>

            <div className="bg-white rounded-xl border-2 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-3 text-[#0A9DC4]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] mb-2 text-md">Unexpected Difficulty</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Challenges not explained by intelligence or instruction.</p>
            </div>
          </div>
        </section>
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          Key Points
        </h2>
        
        <ImageWithFallback 
          src="/images/dyslexia/dyslexia-overview-What-IsTAB-lg-circle.webp"
          alt="Key POints to be made about Dyslexia"
          className="w-full h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm"
        />

        {/* SECTION 2: PREVALENCE & SPECTRUM */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8 clear-both">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-[#0c264d] font-bold text-2xl border-b border-[#ffd166] pb-2 mb-4">How Common is Dyslexia?</h2>
              <p className="leading-relaxed mb-4">
                Dyslexia is the most common neurocognitive disorder, representing 80% of all learning disabilities.<sup className="text-green-600 font-bold ml-0.5">1</sup> It occurs across all languages and writing systems, though its manifestation may vary depending on the language.
              </p>
              <p className="leading-relaxed">
                Historically, it was thought to be more common in males. However, recent research suggests similar rates in males and females, indicating that girls may frequently be under-identified in classroom settings.<sup className="text-green-600 font-bold ml-0.5">2</sup>
              </p>
            </div>

            <div>
              <h3 className="text-[#0c264d] font-bold text-xl mb-3">Dyslexia as a Spectrum</h3>
              <p className="leading-relaxed mb-3">
                Dyslexia exists on a continuum of severity, and its manifestation varies heavily among individuals. No two individuals with dyslexia are exactly alike.
              </p>
              <ul className="list-disc ml-6 text-sm text-slate-700 space-y-2">
                <li><strong>Mild:</strong> Reading difficulties that respond well to intervention.</li>
                <li><strong>Moderate:</strong> More significant challenges requiring intensive, sustained intervention.</li>
                <li><strong>Severe:</strong> Persistent, substantial difficulties despite appropriate intervention.</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 w-full flex justify-center">
            {/* Dyslexia By The Numbers Infobox */}
            <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 w-full max-w-sm shadow-sm">
              <h3 className="text-center text-[#0c264d] font-bold mb-6 text-lg">Dyslexia by the Numbers</h3>
              
              <div className="mb-6 pb-6 border-b-2 border-gray-200 text-center">
                <div className="text-4xl font-bold text-[#2abcd4]">5-20%</div>
                <div className="text-sm text-[#0c264d] mt-1">of the global population has some<br/>degree of dyslexia<sup className="text-green-600 font-bold ml-0.5">3</sup></div>
              </div>

              <div className="mb-6 pb-6 border-b-2 border-gray-200 text-center">
                <div className="bg-[#0c264d] text-white rounded p-4">
                  <div className="text-3xl font-bold">80%</div>
                  <div className="text-sm mt-1">of all diagnosed learning disabilities are Dyslexia<sup className="text-green-600 font-bold ml-0.5">1</sup></div>
                </div>
              </div>

              <div>
                <div className="text-sm text-center mb-3 text-[#0c264d] font-bold">High Overlap with ADHD</div>
                <div className="flex justify-center items-center gap-3">
                  <div className="bg-[#ffd166]/20 border border-[#ffd166] rounded p-3 text-center w-full">
                    <div className="font-bold text-[#0c264d] text-xl">25-40%</div>
                    <div className="text-xs text-gray-700 mt-1">of those with Dyslexia<br/>also have ADHD<sup className="text-green-600 font-bold ml-0.5">4</sup></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2.5: CO-OCCURRING CONDITIONS */}
        <section className="bg-[#ffd166]/10 p-8 rounded-2xl clear-both">
          <h3 className="text-[#0c264d] font-bold mb-6 text-2xl">Co-occurring Conditions</h3>
          <p className="leading-relaxed mb-6">
            Dyslexia frequently co-occurs with other neurodevelopmental and mental health conditions:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl border-2 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-3 text-[#0A9DC4]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#0c264d] mb-2 text-md">ADHD</h4>
              <p className="text-sm text-gray-700 leading-relaxed">25-40% of individuals with dyslexia also have ADHD.<sup className="text-green-600 font-bold ml-0.5">4</sup></p>
            </div>

            <div className="bg-white rounded-xl border-2 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-3 text-[#0A9DC4]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#0c264d] mb-2 text-md">Dysgraphia</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Writing difficulties often co-occur with dyslexia.</p>
            </div>

            <div className="bg-white rounded-xl border-2 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-3 text-[#0A9DC4]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2v14a2 2 0 002 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#0c264d] mb-2 text-md">Dyscalculia</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Some individuals have both reading and math learning disabilities.</p>
            </div>

            <div className="bg-white rounded-xl border-2 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-3 text-[#0A9DC4]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#0c264d] mb-2 text-md">Anxiety & Depression</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Higher rates due to academic struggles and negative experiences.</p>
            </div>

            <div className="bg-white rounded-xl border-2 border-[#2abcd4] p-5 shadow-sm flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#f0f9ff] rounded-full flex items-center justify-center mb-3 text-[#0A9DC4]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#0c264d] mb-2 text-md">Language Disorders</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Broader oral language difficulties may be present.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  function ReadingBrainContent() {
    return (
      <div className="animate-fadeIn space-y-8">
        {/* SECTION 3: THE READING BRAIN */}
        <section className="clear-both">
          <h2 className="text-[#0c264d] font-bold text-2xl border-b border-[#ffd166] pb-2 mb-6">Understanding the Reading Brain</h2>
          
          <div className="bg-[#f0f9ff] p-6 rounded-lg border border-[#0A9DC4]/20 shadow-sm mb-8 flow-root">
            {/* Floated Video */}
            <div className="w-48 md:w-64 rounded-xl overflow-hidden shadow-sm float-right ml-6 mb-4">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                poster="/images/dyslexia/dyslexia-overview-books-fly.webp"
                className="w-full h-auto object-contain"
                aria-label="Books flying out of a swirl, representing the challenges of reading with dyslexia"
              >
                <source 
                  src="/images/dyslexia/dyslexia-overview-books-fly.mp4" 
                  type="video/mp4" 
                />
              </video>
            </div>

            <h3 className="text-[#0c264d] font-bold text-xl mb-3">A Culturally Acquired Skill</h3>
            <p className="leading-relaxed text-slate-700 mb-4">
              Research into the "reading brain" has revealed a fascinating truth: reading is not an innate, evolutionary survival skill like breathing or speaking. Instead, it is a culturally acquired skill that requires the brain to structurally repurpose existing neural circuits. 
            </p>
            <p className="leading-relaxed text-slate-700">
              According to the <strong>Neuronal Recycling Hypothesis</strong> (proposed by cognitive neuroscientist Stanislas Dehaene), humans must "recycle" neurons originally evolved for object and face recognition to recognize letters and words instead. In dyslexia, these repurposed circuits function and connect differently.
            </p>
          </div>

          <h3 className="text-[#0c264d] font-bold text-xl mb-4">The Dual-Route Model of Reading</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-5 rounded-lg border-t-4 border-[#2abcd4] shadow-sm">
              <h4 className="font-bold text-[#0c264d] text-lg mb-2">1. The Ventral Route (Fast)</h4>
              <p className="text-sm text-slate-700">Also known as the lexical route, this pathway instantly recognizes familiar words visually as whole units. It relies heavily on the Visual Word Form Area.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border-t-4 border-[#ffd166] shadow-sm">
              <h4 className="font-bold text-[#0c264d] text-lg mb-2">2. The Dorsal Route (Slow)</h4>
              <p className="text-sm text-slate-700">Also known as the sub-lexical route, this pathway is used for "sounding out" new or unfamiliar words phonologically. Dyslexia is often characterized by a deficit in this route.</p>
            </div>
          </div>

          <h3 className="text-[#0c264d] font-bold text-xl mb-4">Differences in the Dyslexic Brain</h3>
          <p className="leading-relaxed mb-6 text-slate-700">
            Neuroimaging studies (fMRI and DTI) show that individuals with dyslexia display specific functional and structural differences during reading tasks:<sup className="text-[#10b981] font-bold ml-0.5">5</sup>
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 items-start">
              <div className="bg-[#f0f9ff] text-[#0c264d] font-bold p-3 rounded-md w-full sm:w-1/3 shrink-0">
                Visual Word Form Area (VWFA)
              </div>
              <div className="text-sm text-slate-700 pt-1">
                Often called the "brain's letterbox," this left-hemisphere region is specialized for rapid word recognition. In dyslexic brains, it is frequently <strong>hypoactive (under-activated)</strong>, making fluent reading difficult.
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 items-start">
              <div className="bg-[#f0f9ff] text-[#0c264d] font-bold p-3 rounded-md w-full sm:w-1/3 shrink-0">
                Temporo-Parietal Cortex
              </div>
              <div className="text-sm text-slate-700 pt-1">
                Responsible for phonological processing (mapping sounds to letters). Reduced activity here directly correlates with difficulties decoding and sounding out words.
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 items-start">
              <div className="bg-[#fff9e6] text-[#d97706] font-bold p-3 rounded-md w-full sm:w-1/3 shrink-0">
                Compensatory Detours
              </div>
              <div className="text-sm text-slate-700 pt-1">
                To make up for under-active left hemisphere regions, the dyslexic brain recruits the <strong>right hemisphere</strong> and relies heavily on the <strong>frontal lobe</strong> (memory/attention). This works, but is much more cognitively demanding and slower.
              </div>
            </div>
          </div>

          <div className="bg-[#ffd166]/10 border-l-4 border-[#ffd166] p-5 rounded-lg mb-6 shadow-sm">
            <h3 className="text-[#0c264d] font-bold text-lg mb-2">The Phonological Core Deficit</h3>
            <p className="text-sm leading-relaxed text-slate-700">
              The most well-established explanation for dyslexia is the <strong>phonological deficit hypothesis</strong>. 
              This theory proposes that dyslexia stems from a specific impairment in the representation, storage, and/or retrieval of speech sounds. 
              When phonological processing is impaired in the dorsal route, learning letter-sound correspondences is difficult, and reading remains effortful rather than automatic.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-[#10b981]/30 shadow-sm">
            <h3 className="text-[#0c264d] font-bold text-lg mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              The Promise of Neuroplasticity
            </h3>
            <p className="text-sm leading-relaxed text-slate-700">
              Crucially, the brain is plastic. Intense, targeted reading intervention (specifically structured phonological and orthographic training) has been shown to physically increase gray matter, strengthen white matter tracts, and normalize brain activation patterns.
            </p>
          </div>
        </section>
      </div>
    );
  }

  function StrengthsContent() {
    return (
      <div className="animate-fadeIn">
        {/* SECTION 4: STRENGTHS */}
        <section className="space-y-6 mb-12 clear-both">
          <h2 className="text-[#0c264d] font-bold text-2xl border-b border-[#ffd166] pb-2">Dyslexia and Strengths</h2>
          
          {/* Floated Image - Moved precisely into Tab 3 as requested */}
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-overview-strengths.webp" 
            alt="show a colorful brain with different areas highlighted to represent the creative strengths of many individuals with dyslexia"
            className="w-32 md:w-48 h-auto rounded-lg shadow-sm float-right ml-6 mb-4"
          />

          <p className="leading-relaxed text-slate-700">
            While dyslexia presents undeniable challenges in traditional academic settings, many individuals with dyslexia 
            also demonstrate notable cognitive and creative strengths:
          </p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 list-disc ml-6 text-sm text-slate-700 mb-6">
            <li><strong>Creative thinking:</strong> Generating novel ideas</li>
            <li><strong>Visual-spatial reasoning:</strong> Mentally manipulating 3D objects</li>
            <li><strong>Big-picture thinking:</strong> Seeing broad connections</li>
            <li><strong>Problem-solving:</strong> Innovative approaches</li>
            <li><strong>Narrative reasoning:</strong> Storytelling strengths</li>
            <li><strong>Resilience:</strong> Determination from overcoming adversity</li>
          </ul>

          <p className="leading-relaxed text-sm italic text-gray-600 border-l-4 border-[#ffd166] pl-4 clear-both">
            Many highly successful individuals in diverse fields—including entrepreneurs, artists, scientists, and leaders—have dyslexia.
          </p>
        </section>

        {/* SECTION 5: MOVING FORWARD */}
        <section className="space-y-6 clear-both">
          <h2 className="text-[#0c264d] font-bold text-2xl border-b border-[#ffd166] pb-2">Moving Forward</h2>

          <p className="leading-relaxed text-slate-700">
            Dyslexia is a well-researched, neurobiological condition that affects reading but does not limit potential. 
            With understanding, appropriate instruction, accommodations, and support, individuals with dyslexia can develop 
            strong reading skills and succeed academically, professionally, and personally.
          </p>            
          
          {/* YOUTUBE EMBED - CENTERED & SMALLER */}
          <div className="flex justify-center my-8">
            <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/11r7CFlK2sc"
                title="Dyslexia Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <p className="leading-relaxed text-slate-700">
            The key is recognizing dyslexia early, providing evidence-based intervention, celebrating strengths, and 
            fostering an environment where individuals with dyslexia can thrive.
          </p>
        </section>
      </div>
    );
  }

  return (
    <article className="max-w-6xl animate-fadeIn">

      {/* Main Title & Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          Dyslexia: Overview
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-lg">←</span>
          All About Dyslexia
        </button>
      </div>

      {/* Mobile Back Button */}
      <button 
        onClick={() => setCurrentArticle?.('dyslexia')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-6 shadow-sm shrink-0"
      >
        <span className="text-lg">←</span>
        All About Dyslexia
      </button>

      {/* TAB NAVIGATION */}
      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger value="what-is" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            What is Dyslexia
          </TabsTrigger>
          <TabsTrigger value="brain" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            The Reading Brain
          </TabsTrigger>
          <TabsTrigger value="strengths" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Strengths & Future
          </TabsTrigger>
        </TabsList>

        <TabsContent value="what-is" className="space-y-8">
          {WhatIsContent()}
        </TabsContent>

        <TabsContent value="brain" className="space-y-8">
          {ReadingBrainContent()}
        </TabsContent>

        <TabsContent value="strengths" className="space-y-8">
          {StrengthsContent()}
        </TabsContent>
      </Tabs>

      {/* Bottom navigation button */}
      <div className="mt-16 mb-6 flex flex-col md:flex-row md:justify-end clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
        >
          <span className="text-lg">←</span>
          All About Dyslexia
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both"></div>
      
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Ziegler, J. C., & Goswami, U. (2005). Reading acquisition, developmental dyslexia, and skilled reading across languages. <i>Psychological Bulletin</i>.</p>
            <p>2. Snowling, M. J., & Melby-Lervåg, M. (2016). Oral language deficits in familial dyslexia. <i>Psychological Bulletin</i>.</p>
            <p>3. Quinn, J. M., & Wagner, R. K. (2015). Gender differences in reading impairment. <i>Journal of Learning Disabilities</i>.</p>
            <p>4. Landerl, K., & Moll, K. (2010). Comorbidity of learning disorders. <i>Journal of Child Psychology and Psychiatry</i>.</p>
            <p>5. Richlan, F., et al. (2011). Meta-analyzing brain dysfunctions in dyslexic children and adults. <i>Neuroimage</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>International Dyslexia Association. (2017). <i>Dyslexia in the Classroom: What Every Teacher Needs to Know</i>.</p>
            <p>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</p>
            <p>Shaywitz, S. (2003). <i>Overcoming Dyslexia</i>. Knopf.</p>
            <p>Eide, B. L., & Eide, F. F. (2011). <i>The Dyslexic Advantage: Unlocking the Hidden Potential of the Dyslexic Brain</i>. Penguin.</p>
          </div>
        </div>
      </div>
    </article>
  );
}