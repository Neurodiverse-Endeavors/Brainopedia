import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { User, Activity, Brain, BookOpen, MessageSquare, Zap, Users, Heart, Ear, Compass, Briefcase, AlertTriangle, ShieldAlert } from 'lucide-react';

interface FASDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function FASDSymptoms({ setCurrentArticle, initialTab }: FASDSymptomsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'physical';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

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
          FASD: Symptoms & Characteristics
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('fasd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About FASD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('fasd')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About FASD
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('physical')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'physical'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Physical & Cognitive
        </button>
        <button
          onClick={() => handleTabChange('behavioral')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'behavioral'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Behavioral & Sensory
        </button>
        <button
          onClick={() => handleTabChange('outcomes')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'outcomes'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Life Outcomes
        </button>
      </div>

      {/* ==========================================
          TAB 1: PHYSICAL & COGNITIVE
      ========================================== */}
      {activeTab === 'physical' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Physical Traits Card (Cyan) - Utilizes Slate/Navy to avoid Cyan clash */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Physical Characteristics</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-symptoms-physical-1.webp"
              alt="Child development and health assessment showing facial and growth measurement tools"
              className="block mx-auto w-64 max-w-full h-auto rounded-lg border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              FASD presents with a wide range of physical, cognitive, and behavioral characteristics. The "invisible disability" nature of FASD—because most affected individuals look completely typical—heavily contributes to misunderstanding and underdiagnosis.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                {/* SLATE BADGE */}
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <User className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Facial Features (FAS)</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-2">The three characteristic facial features are present <em>only</em> when alcohol exposure occurs during weeks 6–10 of pregnancy:<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup></p>
                <ul className="text-xs text-slate-700 text-left list-disc pl-5 space-y-1">
                  <li><strong>Smooth philtrum:</strong> Ridged area above upper lip is flattened.</li>
                  <li><strong>Thin vermilion border:</strong> Very thin upper lip.</li>
                  <li><strong>Small palpebral fissures:</strong> Narrow horizontal eye openings.</li>
                </ul>
                <p className="text-xs text-slate-700 leading-relaxed mt-2 italic">Note: Features may fade with age and are completely absent in most FASD cases.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup></p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                {/* NAVY BADGE */}
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Growth Deficits</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Growth deficiency—falling below the 10th percentile for height and/or weight—is a core component of full FAS diagnosis.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup> Prenatal growth restriction is often followed by a failure to "catch up" postnatally. Microcephaly (small head circumference) may also be present, directly reflecting reduced brain growth.</p>
              </div>

            </div>
          </div>

          {/* Cognitive Profile Card (Navy) - 3D Accent Borders utilizing Slate */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Cognitive & Learning Profile</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-symptoms-cognitive-1.webp"
              alt="Visual illustrating the complex cognitive challenges and executive function gaps in FASD"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              
              {/* YELLOW STRIPE */}
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#ffd166]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Brain className="w-4 h-4 text-[#ffd166]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Intellectual Functioning</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">IQ in FASD ranges broadly—from intellectual disability to above-average intelligence.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup> The mean IQ in full FAS is ~70, but many individuals with ARND score perfectly average. Crucially, IQ scores often <em>overestimate</em> functional ability.</p>
                </div>
              </div>

              {/* SLATE STRIPE (Avoiding Cyan on Cyan/Navy) */}
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <BookOpen className="w-4 h-4 text-[#576d8e]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Memory Deficits</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">A hallmark of FASD is impaired working memory and the encoding of new information.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup> Often called "swiss cheese memory," an individual may remember a skill perfectly one day and completely forget it the next.</p>
                </div>
              </div>

              {/* NAVY STRIPE */}
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0c264d]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Zap className="w-4 h-4 text-[#0c264d]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Executive Function</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Significant deficits are nearly universal:<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">7</sup> impaired impulse control, difficulty linking cause and effect, poor judgment, and an inability to smoothly shift between mental tasks.</p>
                </div>
              </div>

              {/* CYAN STRIPE (Safe to use here because border is gray and bg is white) */}
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <MessageSquare className="w-4 h-4 text-[#2abcd4]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Language Processing</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Receptive language (understanding) is often significantly weaker than expressive language (speaking).<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">8</sup> They learn to highly mimic social language without actually comprehending abstract or figurative speech.</p>
                </div>
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
                <li>1. Mukherjee, R. A., Hollins, S., & Turk, J. (2006). "Fetal alcohol spectrum disorder: An overview." <i>Journal of the Royal Society of Medicine</i>.</li>
                <li>2. Astley, S. J., & Clarren, S. K. (2001). "Measuring the facial phenotype of individuals with prenatal alcohol exposure." <i>Alcohol and Alcoholism</i>.</li>
                <li>3. Clarren, S. K., & Smith, D. W. (1978). "The fetal alcohol syndrome." <i>New England Journal of Medicine</i>.</li>
                <li>4. Hoyme, H. E., et al. (2016). "Updated clinical guidelines for diagnosing fetal alcohol spectrum disorders." <i>Pediatrics</i>.</li>
                <li>5. Mattson, S. N., & Riley, E. P. (1998). "A review of the neurobehavioral deficits in children with fetal alcohol syndrome or prenatal exposure to alcohol." <i>Alcoholism: Clinical and Experimental Research</i>.</li>
                <li>6. Mattson, S. N., Crocker, N., & Nguyen, T. T. (2011). "Fetal alcohol spectrum disorders: Neuropsychological and behavioral features." <i>Neuropsychology Review</i>.</li>
                <li>7. Rasmussen, C. (2005). "Executive functioning and working memory in fetal alcohol spectrum disorder." <i>Alcoholism: Clinical and Experimental Research</i>.</li>
                <li>8. Becker, M., Warr-Leeper, G. A., & Leeper, H. A. Jr. (1990). "Fetal alcohol syndrome: A description of oral motor, articulatory, short-term memory, grammatical, and semantic abilities." <i>Journal of Communication Disorders</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: BEHAVIORAL & SENSORY
      ========================================== */}
      {activeTab === 'behavioral' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Behavior Card (Navy) - DOUBLE RINGS */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Behavioral Characteristics</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-symptoms-behavior-1.webp"
              alt="Visual demonstrating behavioral support and emotional regulation"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <div className="space-y-5 max-w-4xl mx-auto">
              
              {/* YELLOW RING */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#ffd166] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#ffd166] mt-1 ml-1">
                  <Activity className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Attention & Hyperactivity</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Attention difficulties are present in the vast majority of individuals with FASD—often meeting clinical criteria for ADHD.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> Hyperactivity may naturally decrease with age, but inattention typically persists. The underlying neurological basis differs completely from idiopathic ADHD, which dramatically affects medication response.</p>
                </div>
              </div>

              {/* SLATE RING (Avoiding Cyan clash) */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#576d8e] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#576d8e] mt-1 ml-1">
                  <Users className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Social Vulnerability</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Profound social naivety is a hallmark feature.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup> They are often overly friendly without appropriate caution, struggle to read body language or perspectives, and are highly easily manipulated by peers. They frequently seek friendships with younger children because their social age lags behind their chronological age.</p>
                </div>
              </div>

              {/* CYAN RING (Safe against white bg) */}
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#2abcd4] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#2abcd4] mt-1 ml-1">
                  <Heart className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Emotional Regulation</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Difficulty regulating emotions is common—this is not "defiance," but a literal neurological inability to modulate emotional responses.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup> It manifests as disproportionate outbursts, rapid mood shifts, low frustration tolerance, and an inability to calm down independently.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Sensory Card (Yellow) - CSS DOTS */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Sensory Processing Differences</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-symptoms-sensory-1.webp"
              alt="Visual demonstrating sensory overload and environmental processing challenges"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Many individuals with FASD experience profound sensory processing differences—involving over-sensitivity or extreme under-sensitivity to environmental input.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup>
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#576d8e] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Tactile Hypersensitivity:</strong> Extreme discomfort from clothing textures, tags, seams, or light touch.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Environmental Overload:</strong> Over-sensitivity to sound, fluorescent lighting, or strong smells in busy settings.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffd166] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Pain Under-sensitivity:</strong> Failing to register pain correctly; they may suffer severe injuries without reacting.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2abcd4] mt-1.5 shrink-0"></div>
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Proprioception Deficits:</strong> Difficulty knowing where their body is in physical space, appearing "clumsy."</p>
                </div>

              </div>
            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>1. O'Malley, K. D., & Nanson, J. (2002). "Clinical implications of a link between fetal alcohol spectrum disorder and attention-deficit hyperactivity disorder." <i>Canadian Journal of Psychiatry</i>.</li>
                <li>2. Kully-Martens, K., et al. (2012). "A review of social skills deficits in individuals with fetal alcohol spectrum disorders." <i>Alcoholism: Clinical and Experimental Research</i>.</li>
                <li>3. Greenbaum, R., et al. (2009). "Social cognitive and emotion processing abilities of children with fetal alcohol spectrum disorders." <i>Alcoholism: Clinical and Experimental Research</i>.</li>
                <li>4. Franklin, L., Deitz, J., Jirikowic, T., & Astley, S. (2008). "Children with fetal alcohol spectrum disorders: Problem behaviors and sensory processing." <i>American Journal of Occupational Therapy</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: LIFE OUTCOMES
      ========================================== */}
      {activeTab === 'outcomes' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Adaptive Card (Yellow) - BARE DARK ICONS */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Adaptive Functioning</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-symptoms-adaptive-1.webp"
              alt="Visual demonstrating the gap between cognitive capacity and real-world executive application"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Perhaps the most clinically significant and frustrating aspect of FASD is the massive gap between intellectual capacity and real-world adaptive functioning.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup> An individual may score flawlessly on IQ testing but be completely unable to:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <Compass className="text-[#0c264d] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Generalizing Skills</h3>
                <p className="text-xs text-slate-700 leading-relaxed">They struggle immensely to apply a learned rule to a new situation. A rule learned in the classroom does not automatically transfer to the playground.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <Briefcase className="text-[#0c264d] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Independent Management</h3>
                <p className="text-xs text-slate-700 leading-relaxed">They often cannot manage time, hold a schedule, or maintain employment without external scaffolding. They may not understand that spending money rapidly depletes a bank account.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <Ear className="text-[#0c264d] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#ffd166] border-opacity-50 pb-2">Processing Instructions</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Following multi-step verbal instructions is incredibly difficult. This disconnect often leads to unrealistic expectations from neurotypical adults, fueling a cycle of repeated failure.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup></p>
              </div>

            </div>
          </div>

          {/* Secondary Conditions Card (Cyan) - ROUNDED SQUARES using Slate & Navy */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Secondary Conditions</h2>
            
            <ImageWithFallback 
              src="/images/fasd/fasd-symptoms-secondary-1.webp"
              alt="Conceptual visual of systemic risk factors surrounding unaccommodated neurodivergence"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Secondary conditions are severe life outcomes that are not caused directly by the brain damage of FASD itself, but rather develop because the individual's neurological needs are not met by their environment.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup> These are largely preventable with early intervention.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Mental Health & Dependency</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Depression, anxiety, and PTSD affect nearly 90% of individuals by adulthood without proper support. They face a significantly higher risk for alcohol/drug issues (often self-medication) and severe difficulty living independently.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Systemic Failure</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Disrupted school experiences (suspensions, expulsions, dropping out) are rampant. Tragically, due to their social naivety and impulsivity, ~60% will have contact with the criminal justice system.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup> Informed caregiving is the ultimate prevention.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup></p>
                </div>
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
                <li>1. Crocker, N., et al. (2009). "Comparison of adaptive behavior in children with heavy prenatal alcohol exposure or attention-deficit/hyperactivity disorder." <i>Alcoholism: Clinical and Experimental Research</i>.</li>
                <li>2. Streissguth, A. P., et al. (1996). <i>Understanding the occurrence of secondary disabilities in clients with fetal alcohol syndrome and fetal alcohol effects</i>. University of Washington.</li>
                <li>3. Streissguth, A. P., et al. (2004). "Risk factors for adverse life outcomes in fetal alcohol syndrome." <i>Journal of Developmental and Behavioral Pediatrics</i>.</li>
                <li>4. Fast, D. K., Conry, J., & Loock, C. A. (1999). "Identifying fetal alcohol syndrome among youth in the criminal justice system." <i>Journal of Developmental and Behavioral Pediatrics</i>.</li>
                <li>5. Paley, B., & O'Connor, M. J. (2011). "Behavioral interventions for children and adolescents with fetal alcohol spectrum disorders." <i>Alcohol Research and Health</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('fasd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About FASD
        </button>
      </div>

    </article>
  );
}