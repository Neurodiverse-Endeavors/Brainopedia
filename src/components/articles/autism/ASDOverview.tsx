import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface ASDOverviewProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function ASDOverview({ setCurrentArticle }: ASDOverviewProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'basics';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  const tabs = [
    { id: 'basics', label: 'Basics & Features' },
    { id: 'culture', label: 'Neurodiversity & Language' },
    { id: 'context', label: 'Context & History' }
  ];

  const BackButton = () => (
    <button 
      onClick={() => setCurrentArticle?.('autism')}
      className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semi-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
    >
      <span className="text-xl">←</span>
      All About Autism
    </button>
  );

  return (
    <article className="max-w-6xl animate-in fade-in duration-300 w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b-2 border-[#0c264d] pb-4">
        <h1 className="text-3xl font-regular text-[#0c264d]">
          Autism: Overview
        </h1>
        <BackButton />
      </div>

      {/* TABS NAVIGATION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {tabs.map((tab) => (
<button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-6 py-3 rounded-md text-sm transition-colors font-medium ${
              activeTab === tab.id
                ? 'bg-[#0A9DC4] text-white'
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ========================================== */}
      {/* TAB 1: BASICS & FEATURES                     */}
      {/* ========================================== */}
      {activeTab === 'basics' && (
        <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
          
          {/* Introduction Section */}
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">∞ What is Autism Spectrum Disorder?</h2>
            
            <div className="mb-4 block flow-root"> 
              <ImageWithFallback
                src="/images/autism/autism-overview-pattern-brain.webp"
                alt="Colorful patterned brain illustration representing autism spectrum diversity"
                className="w-48 h-auto float-right ml-6 mb-4 rounded-md border border-gray-300 shadow-sm" 
              />
              
              <p className="mb-4 leading-relaxed font-spartan text-[#0c264d]">
                Autism spectrum disorder (ASD) is a neurodevelopmental condition characterized by 
                differences in social communication and interaction, alongside restricted or repetitive 
                patterns of behavior, interests, or activities. Autism is called a "spectrum" disorder 
                because there is wide variation in the type and severity of symptoms people experience.
              </p>
              
              <p className="mb-4 leading-relaxed font-spartan text-[#0c264d]">
                ASD affects approximately 1 in 36 children in the United States according to 2023 CDC data,<sup>1</sup> representing a significant 
                increase in diagnosis rates over the past two decades. This increase is largely 
                attributed to improved awareness, expanded diagnostic criteria, and better identification 
                rather than a true increase in prevalence.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Key Facts About Autism</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Lifelong Condition</div>
                  <div className="text-sm">Autism is a lifelong condition, though symptoms and support needs may change over time</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Neurological Difference</div>
                  <div className="text-sm">Not a disease or mental illness—it's a fundamental difference in how the brain develops and functions</div>
                </div>
              </div>
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded shadow-sm">
              <p className="text-sm">
                <strong>Important:</strong> Autism is not caused by poor parenting, vaccines, or other debunked myths. 
                It is a natural neurological variation that deserves understanding, acceptance, and appropriate support.
              </p>
            </div>
          </div>

          {/* Core Features Section */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Core Features of Autism</h2>

            <p className="mb-4">
              According to the DSM-5, autism is defined by two main categories of characteristics that must be present from early childhood:
            </p>

            <ImageWithFallback
              src="/images/autism/autism-overview-venn.webp"
              alt="Autism core features Venn diagram"
              className="w-full sm:w-80 h-auto float-right sm:ml-6 mb-4 rounded-md border border-gray-300 shadow-sm"
            />

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg mt-4">1. Persistent Differences in Social Communication</h3>
            <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-1">
              <li><strong>Social-emotional reciprocity:</strong> Back-and-forth conversation, sharing interests and emotions</li>
              <li><strong>Nonverbal communication:</strong> Eye contact, body language, facial expressions, gestures</li>
              <li><strong>Relationships:</strong> Making friends, understanding social expectations, adjusting behavior</li>
            </ul>

            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">2. Restricted, Repetitive Patterns of Behavior</h3>
            <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-1">
              <li><strong>Repetitive movements or speech:</strong> Hand flapping, echolalia, lining up toys</li>
              <li><strong>Insistence on sameness:</strong> Distress at changes, rigid thinking patterns, routines</li>
              <li><strong>Restricted interests:</strong> Intense focus on specific topics or objects</li>
              <li><strong>Sensory sensitivities:</strong> Hyper- or hypo-reactivity to sensory input</li>
            </ul>
          </div>

          {/* The Spectrum Section */}
          <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Understanding "The Spectrum"</h2>
            
            <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
              <ImageWithFallback
                src="/images/autism/autism-overview-rainbowgoldinfinity.webp"
                alt="Rainbow and gold infinity symbol representing autism spectrum diversity"
                className="w-32 h-auto flex-shrink-0 rounded shadow-sm"
              />
              <p className="flex-1 leading-relaxed text-gray-700">
                The autism spectrum is not a linear scale from "mild" to "severe." Instead, it represents the diverse 
                ways autism can manifest across multiple dimensions. Each autistic person has a unique profile 
                of strengths and challenges across various domains.
              </p>
            </div>

            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Dimensions of the Spectrum</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Social Comm.</div>
                  <div className="text-xs text-gray-600">From nonspeaking to highly verbal</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Sensory Processing</div>
                  <div className="text-xs text-gray-600">Hyper- or hypo-sensitivity to input</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Executive Function</div>
                  <div className="text-xs text-gray-600">Planning, flexibility, regulation</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Restricted Interests</div>
                  <div className="text-xs text-gray-600">Depth and intensity of focus</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Repetitive Behaviors</div>
                  <div className="text-xs text-gray-600">Stimming and need for sameness</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] mb-1">Support Needs</div>
                  <div className="text-xs text-gray-600">From minimal to substantial</div>
                </div>
              </div>
            </div>
          </div>

          {/* Support Levels Section */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support Levels</h2>
              <p className="mb-4 text-gray-700">
                The DSM-5 specifies three support levels based on the amount of support needed. 
                Important note: Support needs can vary across different domains (social vs. behavioral) and can change 
                over time or in different contexts. These levels are descriptive, not rigid categories.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-md border-2 border-[#0c264d] p-5 w-full md:w-[420px] shrink-0">
              <h3 className="text-center text-[#0c264d] font-bold mb-4 text-lg">DSM-5 Support Levels</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-[#2abcd4] bg-white rounded shadow-sm p-3">
                  <div className="font-bold text-[#0c264d] text-sm">Level 1: Requiring Support</div>
                  <div className="text-xs text-gray-600 mt-1">Noticeable impairments without support. Difficulty initiating social interactions.</div>
                </div>
                <div className="border-l-4 border-[#ffd166] bg-white rounded shadow-sm p-3">
                  <div className="font-bold text-[#0c264d] text-sm">Level 2: Substantial Support</div>
                  <div className="text-xs text-gray-600 mt-1">Marked difficulties in verbal/nonverbal communication. Inflexibility interferes with functioning.</div>
                </div>
                <div className="border-l-4 border-[#ff6b6b] bg-white rounded shadow-sm p-3">
                  <div className="font-bold text-[#0c264d] text-sm">Level 3: Very Substantial Support</div>
                  <div className="text-xs text-gray-600 mt-1">Severe difficulties. Extreme difficulty coping with change; behaviors markedly interfere in all areas.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Challenges and Strengths */}
          <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Challenges and Strengths</h2>
            <p className="mb-6 text-gray-700">Autism involves both real challenges and notable strengths, though the balance varies greatly among individuals:</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded border-t-4 border-[#ff6b6b] shadow-sm">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Challenges</h3>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-2">
                  <li>Navigating unspoken social rules</li>
                  <li>Sensory overload in everyday environments</li>
                  <li>Executive function difficulties</li>
                  <li>Anxiety and mental health challenges</li>
                  <li>Facing stigma, bullying, and social rejection</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded border-t-4 border-[#2abcd4] shadow-sm">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Strengths</h3>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-2">
                  <li>Attention to detail and pattern recognition</li>
                  <li>Deep knowledge in areas of interest</li>
                  <li>Honesty and direct communication</li>
                  <li>Strong sense of justice and fairness</li>
                  <li>Ability to hyperfocus on tasks</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ========================================== */}
      {/* TAB 2: NEURODIVERSITY & LANGUAGE             */}
      {/* ========================================== */}
      {activeTab === 'culture' && (
        <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
          
          {/* Neurodiversity Section */}
          <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Neurodiversity Paradigm</h2>
            
            <div className="mb-6 flow-root">
              <ImageWithFallback
                src="/images/autism/autism-overview-NDparadigm.webp"
                alt="Neurodiversity paradigm concept"
                className="w-32 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4 shadow-sm"
              />
              <p className="leading-relaxed text-gray-700">
                Many autistic individuals and advocates embrace the neurodiversity paradigm, which views autism as a natural variation in human neurology rather than a disorder or deficit that needs to be "cured." This perspective, pioneered by autistic sociologist Judy Singer in the 1990s, has fundamentally changed how many people understand autism.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Core Principles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] text-sm mb-1">Natural Variation</div>
                  <div className="text-xs text-gray-600">Autism is a natural difference, not a disease.</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] text-sm mb-1">Accommodation</div>
                  <div className="text-xs text-gray-600">Provide support rather than trying to "fix" people.</div>
                </div>
                <div className="border-l-2 border-[#2abcd4] pl-3">
                  <div className="font-bold text-[#0c264d] text-sm mb-1">Removing Barriers</div>
                  <div className="text-xs text-gray-600">Disability often arises from societal barriers.</div>
                </div>
              </div>
            </div>

            <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded shadow-sm">
              <p className="text-sm">
                <strong>Important Note:</strong> The neurodiversity paradigm doesn't deny that autism comes with genuine challenges
                or that many autistic people need significant support. Rather, it advocates for supporting autistic
                people in ways that respect their neurological differences.
              </p>
            </div>
          </div>

          {/* Language and Terminology */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Language and Terminology</h2>
            
            <div className="mb-6 flow-root">
              <ImageWithFallback
                src="/images/autism/autism-overview-NDlabels.webp"
                alt="Neurodivergent Labels tag graphic"
                className="w-40 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4 shadow-sm"
              />
              <p className="leading-relaxed text-gray-700">
                How we talk about autism matters. While language preferences vary within the autistic community, there is a strong consensus on a few key concepts. Many autistic people prefer identity-first language because autism is an inseparable part of who they are, not an add-on.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#f0f9ff] p-5 rounded-md border-l-4 border-[#0A9DC4] shadow-sm">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Terms to Embrace</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded shadow-sm">
                    <div className="font-bold text-[#0c264d] text-sm">"Autistic person" (Identity-First)</div>
                    <div className="text-xs text-gray-600 mt-1">Preferred by most autistic adults and self-advocates.</div>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm">
                    <div className="font-bold text-[#0c264d] text-sm">"Neurodiversity-Affirming"</div>
                    <div className="text-xs text-gray-600 mt-1">Approaches that respect and support autistic ways of being.</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#fff0f0] p-5 rounded-md border-l-4 border-[#ff6b6b] shadow-sm">
                <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Terms to Avoid</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded shadow-sm">
                    <div className="font-bold text-[#0c264d] text-sm text-red-700">"Suffers from" / "Victim of"</div>
                    <div className="text-xs text-gray-600 mt-1">Implies a purely tragic narrative.</div>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm">
                    <div className="font-bold text-[#0c264d] text-sm text-red-700">"High/Low-Functioning"</div>
                    <div className="text-xs text-gray-600 mt-1">Oversimplifies and ignores fluctuating support needs.</div>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm">
                    <div className="font-bold text-[#0c264d] text-sm text-red-700">"Asperger's"</div>
                    <div className="text-xs text-gray-600 mt-1">Phased out clinically; harmful historical associations.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-[#ffd166] border-l-8 border-[#0c264d] p-8 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <div className="text-4xl">👠</div>
              <div>
                <p className="mb-4 italic text-lg leading-relaxed text-[#0c264d]">
                  "It is now our charge to explain that regardless of how obvious our autism is to others, it is equally 
                  present to the person living it. It is our job to correct those who reject some for being too 
                  'high-functioning' or forget those who are more visibly challenged... To the research community, educators, 
                  scientists, psychologists, and regular folks like you and me... the best answer 
                  isn't that we're Aspie or that we're autistic.
                </p>
                <p className="mb-4 italic font-bold text-xl text-[#0c264d]">
                  We are the spectrum."
                </p>
                <p className="text-sm font-bold uppercase tracking-wider text-[#0c264d]">
                  — Jennifer Cook O'Toole, <i>Autism in Heels</i>
                </p>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ========================================== */}
      {/* TAB 3: CONTEXT & HISTORY                     */}
      {/* ========================================== */}
      {activeTab === 'context' && (
        <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
          
          {/* Video Overview (Placed here as a great summary) */}
          <div className="bg-slate-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-white font-bold mb-4 text-xl text-center">Video: Understanding Autism</h3>
            <div className="relative w-full max-w-3xl mx-auto rounded-md overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/MTW7H5UQ8Ts"
                title="YouTube video about autism"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Prevalence Section */}
          <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prevalence and Demographics</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
                <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Current Statistics</h3>
                <p className="text-sm mb-3">
                  As of 2023, the CDC estimates autism affects approximately <strong>1 in 36 children (2.8%)</strong> in the US.<sup>1</sup> 
                </p>
                <p className="text-xs bg-[#ffd166]/30 p-2 rounded text-[#0c264d]">
                  <strong>Why the increase?</strong> This is largely attributed to improved awareness, expanded criteria, and better identification.
                </p>
              </div>

              <div className="bg-white p-5 rounded-md border-l-4 border-[#0A9DC4] shadow-sm">
                <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Gender Differences</h3>
                <p className="text-sm mb-3">
                  Autism is diagnosed more frequently in males than females (typically <strong>3-4:1</strong>).<sup>2</sup>
                </p>
                <p className="text-xs bg-[#f0f9ff] p-2 rounded text-gray-700">
                  Research suggests this reflects diagnostic bias—females often present differently and "camouflage" symptoms.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-md border-t-4 border-[#0c264d] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-4 text-lg text-center">Populations Facing Underdiagnosis</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-gray-50 rounded border border-gray-100">
                  <div className="font-bold text-[#0c264d] text-sm">Women & Girls</div>
                </div>
                <div className="p-3 bg-gray-50 rounded border border-gray-100">
                  <div className="font-bold text-[#0c264d] text-sm">Adults</div>
                </div>
                <div className="p-3 bg-gray-50 rounded border border-gray-100">
                  <div className="font-bold text-[#0c264d] text-sm">Lower Income</div>
                </div>
                <div className="p-3 bg-gray-50 rounded border border-gray-100">
                  <div className="font-bold text-[#0c264d] text-sm">POC Communities</div>
                </div>
              </div>
            </div>
          </div>

          {/* Causes Brief */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What Causes Autism?</h2>
            
            <ImageWithFallback
              src="/images/autism/autism-overview-genetics.webp"
              alt="Genetics and autism chromosomes illustration"
              className="w-32 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4 shadow-sm"
            />
            <p className="leading-relaxed text-gray-700 mb-6">
              Autism is a complex neurodevelopmental condition. Current evidence indicates it is <strong>highly heritable</strong> (genetics plays a major role, involving multiple genes), with early environmental factors contributing to brain development. It often runs in families.
            </p>
            
            <div className="clear-both bg-[#fff0f0] rounded-md border-l-4 border-red-500 p-4">
              <h3 className="font-bold text-red-700 mb-2 text-sm uppercase tracking-wider">What Does NOT Cause Autism:</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-800">
                <div><strong>✗ Vaccines</strong> (Thoroughly debunked<sup>3</sup>)</div>
                <div><strong>✗ Parenting Style</strong></div>
                <div><strong>✗ Childhood Trauma</strong></div>
                <div><strong>✗ Diet</strong> (Though it may affect symptoms)</div>
              </div>
            </div>
          </div>

          {/* History & Looking Forward */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm">
              <h2 className="text-[#0c264d] font-bold mb-4 text-xl">Historical Milestones</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-[#0A9DC4] pl-4">
                  <div className="font-bold text-[#0c264d] text-sm">1943 - 1944</div>
                  <div className="text-xs text-gray-600">Kanner & Asperger publish first descriptions.<sup>4, 5</sup></div>
                </div>
                <div className="border-l-2 border-red-400 pl-4">
                  <div className="font-bold text-red-700 text-sm">1960s - 1980s</div>
                  <div className="text-xs text-gray-600">Harmful "refrigerator mother" theory blamed parents.<sup>6</sup></div>
                </div>
                <div className="border-l-2 border-[#0A9DC4] pl-4">
                  <div className="font-bold text-[#0c264d] text-sm">1990s</div>
                  <div className="text-xs text-gray-600">Neurodiversity movement emerges, led by advocates.</div>
                </div>
                <div className="border-l-2 border-[#0A9DC4] pl-4">
                  <div className="font-bold text-[#0c264d] text-sm">2013</div>
                  <div className="text-xs text-gray-600">DSM-5 consolidates diagnoses under "Autism Spectrum Disorder."</div>
                </div>
              </div>
            </div>

            <div className="bg-[#ffd166]/20 p-6 rounded-lg border border-[#ffd166]/50 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#0c264d] font-bold mb-3 text-xl">Looking Forward</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                The understanding of autism continues to evolve, driven increasingly by autistic voices and neurodiversity perspectives. The focus is shifting drastically from "fixing" or "curing" autism to supporting autistic individuals to thrive authentically as themselves.
              </p>
              <p className="text-sm font-bold text-[#0c264d]">
                Explore the other volumes of Brainopedia for deep dives into Symptoms, Causes, and Support!
              </p>
            </div>
          </div>

        </div>
      )}

      {/* FOOTER & REFERENCES */}
      <div className="flex justify-end mt-12 mb-6">
        <BackButton />
      </div>

      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
      
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Centers for Disease Control and Prevention. (2023). Data & Statistics on Autism Spectrum Disorder. U.S. Department of Health and Human Services.</p>
            <p>2. Loomes, R., et al. (2017). What Is the Male-to-Female Ratio in Autism Spectrum Disorder? A Systematic Review and Meta-Analysis. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>.</p>
            <p>3. Taylor, L. E., et al. (2014). Vaccines are not associated with autism: an evidence-based meta-analysis of case-control and cohort studies. <i>Vaccine</i>.</p>
            <p>4. Kanner, L. (1943). Autistic disturbances of affective contact. <i>Nervous Child</i>.</p>
            <p>5. Asperger, H. (1944). Die 'Autistischen Psychopathen' im Kindesalter. <i>Archiv für Psychiatrie und Nervenkrankheiten</i>.</p>
            <p>6. Silverman, C. (2012). <i>Understanding Autism: Parents, Doctors, and the History of a Disorder</i>. Princeton University Press.</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
            <li>Autistic Self Advocacy Network (ASAN). About Autism. National advocacy organization run by and for autistic individuals.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}