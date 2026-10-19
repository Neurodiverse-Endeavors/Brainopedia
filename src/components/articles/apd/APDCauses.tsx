import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Brain, Activity, Zap, Dna, Network, FlaskConical, Baby, Clock, Ear, AlertTriangle, ShieldAlert, Layers, TrendingUp, Link, BookOpen, XCircle } from 'lucide-react';

interface APDCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function APDCauses({ setCurrentArticle, initialTab }: APDCausesProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'biology';

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
          Auditory Processing Disorder: Causes & Origins
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
          onClick={() => handleTabChange('biology')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'biology'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Genetics & Neurology
        </button>
        <button
          onClick={() => handleTabChange('environment')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'environment'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Environment & Development
        </button>
        <button
          onClick={() => handleTabChange('models')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'models'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Models & Co-occurrence
        </button>
      </div>

      {/* ==========================================
          TAB 1: GENETICS & NEUROLOGY
      ========================================== */}
      {activeTab === 'biology' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Neurological Card (Cyan) - Top Card with ROUNDED SQUARE BADGES */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Neurological Basis of APD</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-causes-neurology-1.webp"
              alt="Visualization of the brainstem and central auditory pathways"
              className="block mx-auto w-64 max-w-full h-auto rounded-lg border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              The causes of APD are highly complex and multifactorial. Fundamentally, APD involves dysfunction in the central auditory nervous system—the deep neurological pathways running from the brainstem all the way up through the auditory cortex.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                {/* ROUNDED SQUARE BADGE */}
                <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Cortical Processing</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The brainstem handles vital tasks like sound localization and temporal processing, while the auditory cortex processes complex speech sounds. Neuroimaging studies frequently reveal structural and functional differences in these regions.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                {/* ROUNDED SQUARE BADGE */}
                <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Neural Synchrony</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The auditory system must process rapidly changing speech sounds in fractions of a millisecond. Reduced neural synchrony, or a lack of precision in how fast the neurons fire together, underlies a vast majority of APD symptoms.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                {/* ROUNDED SQUARE BADGE */}
                <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Interhemispheric Transfer</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The corpus callosum transfers auditory data back and forth between the two hemispheres. Difficulties with this transfer cause severe deficits in "binaural integration"—the ability to combine inputs from both ears into one clear message.</p>
              </div>
            </div>
          </div>

          {/* Genetics Card (Navy) - Second Card with 3D Accent Borders */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Genetics & Neurochemistry</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-causes-genetics-1.webp"
              alt="DNA strand interwoven with abstract neural network nodes"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              APD frequently runs in families, pointing to a strong genetic component that affects early neurodevelopment and the formation of auditory pathways.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Dna className="text-[#0c264d] w-4 h-4" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Heritability</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Basic cognitive and processing functions are highly heritable, with research estimating a 50-80% genetic contribution to processing speeds.<sup>1</sup> Children with APD often have parents or siblings with similar profiles.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Network className="text-[#0c264d] w-4 h-4" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Shared Genetics</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">The genes regulating overall brain development and auditory maturation are widely shared with other neurodevelopmental conditions, explaining why APD so frequently overlaps with Dyslexia and ADHD.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <FlaskConical className="text-[#0c264d] w-4 h-4" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Neurotransmitters</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">GABA (the brain's primary inhibitory neurotransmitter) plays a critical role in auditory processing by helping the brain suppress background noise. Imbalances in GABA, glutamate, and dopamine heavily impact auditory function.</p>
                </div>
              </div>

            </div>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Plomin, R., & Deary, I. J. (2015). Genetics and intelligence differences: Five special findings. <i>Molecular Psychiatry</i>.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Musiek, F. E., & Baran, J. A. (2007). The auditory system: Anatomy, physiology, and clinical correlates. <i>Allyn & Bacon</i>.</li>
                <li>Griffiths, T. D., & Warren, J. D. (2002). The planum temporale as a computational hub. <i>Trends in Neurosciences</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: ENVIRONMENT & DEVELOPMENT
      ========================================== */}
      {activeTab === 'environment' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Development Card (Navy) - Top Card with 3D Accent Borders */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Developmental Factors</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-causes-development-1.webp"
              alt="Toddler in an auditory-rich learning environment"
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              The auditory system continues developing well into adolescence. Early life experiences deeply shape how these complex neural networks are wired.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Clock className="text-[#0c264d] w-4 h-4" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Critical Periods</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Brain development relies heavily on "critical periods" when specific auditory skills are most easily acquired. Any disruption to auditory input during these narrow windows can permanently alter the brain's processing trajectory.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Baby className="text-[#0c264d] w-4 h-4" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Prenatal & Perinatal</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Factors affecting early brain development, including maternal infections, birth complications affecting oxygen delivery, or extreme prematurity, are all associated with an increased risk of auditory processing difficulties later in childhood.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0A9DC4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Activity className="text-[#0c264d] w-4 h-4" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Auditory Deprivation</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">A rich, varied language environment is required for healthy auditory development. Temporary hearing loss, limited language exposure, or an impoverished acoustic environment deprives the brain of the necessary stimulation.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Environmental Impacts Card (Yellow) - Second Card with HORIZONTAL DOUBLE RINGS */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Environmental & Medical Impacts</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-causes-environment-1.webp"
              alt="Conceptual visual representing environmental disruptors impacting early development"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <div className="space-y-4 max-w-4xl mx-auto">
              
              <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-lg border border-[#ffd166] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mt-1">
                  <Ear className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Chronic Ear Infections</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Recurrent otitis media (middle ear infections) during early childhood causes fluctuating hearing loss. This "muddy" input disrupts the consistent acoustic data the brain needs to wire its auditory processing centers correctly.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-lg border border-[#ffd166] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mt-1">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Toxic Exposures</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Exposure to heavy metals (like lead), ototoxic medications (certain antibiotics or chemotherapy agents), or prenatal substance exposure can physically damage or alter the developing central auditory structures.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-lg border border-[#ffd166] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mt-1">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Neurological Injury</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Traumatic Brain Injury (TBI), severe concussions, neurodegenerative diseases, or strokes can cause "acquired APD" by physically severing or damaging the established auditory pathways in an older child or adult.</p>
                </div>
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
                <li>Moore, D. R., Hartley, D. E., & Hogan, S. C. (2003). Effects of otitis media with effusion (OME) on central auditory function. <i>International Journal of Pediatric Otorhinolaryngology</i>.</li>
                <li>Knudsen, E. I. (2004). Sensitive periods in the development of the brain and behavior. <i>Journal of Cognitive Neuroscience</i>.</li>
                <li>Bergemalm, P. O., & Lyxell, B. (2005). Appearances are deceptive? Long-term cognitive and central auditory sequelae from closed head injury. <i>International Journal of Audiology</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: MODELS & CO-OCCURRENCE
      ========================================== */}
      {activeTab === 'models' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Models Card (Yellow) - Top Card with HORIZONTAL DOUBLE RINGS */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">The Multiple Hit Hypothesis</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-causes-models-1.webp"
              alt="Abstract visualization of building blocks stacking up, representing cumulative subtle risk factors"
              className="block mx-auto w-64 max-w-full h-auto rounded-md border border-[#ffd166] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Researchers widely agree that APD rarely stems from a single isolated cause. It is the result of a "Multiple Hit" scenario—where biological vulnerability intersects with environmental triggers.
            </p>

            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-lg border border-[#ffd166] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mt-1">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Threshold Effects</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Multiple subtle risk factors (e.g., a slight genetic predisposition combined with a few early ear infections) accumulate over time. Individually, they wouldn't cause a disorder, but together they push the brain past its compensatory threshold, making APD clinically apparent.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-lg border border-[#ffd166] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mt-1">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Experience-Dependent Plasticity</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">The auditory system is highly "plastic"—meaning it wires itself based on the experiences it receives. Both positive experiences (like early musical training) and negative experiences (like auditory deprivation) permanently physically alter the brain's processing capacity.</p>
                </div>
              </div>
            </div>

            {/* Accessible Maroon/Pink Myth Card */}
            <div className="bg-[#fdf2f8] border-l-4 border-[#be185d] p-5 rounded-r-xl shadow-sm mt-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 max-w-4xl mx-auto">
              <XCircle className="text-[#be185d] w-6 h-6 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-[#831843] font-bold text-sm mb-2">What APD is NOT Caused By</h3>
                <p className="text-xs text-slate-700 leading-relaxed">It is absolutely critical to understand that APD is an organic, neurodevelopmental condition. It is <strong>not</strong> caused by poor parenting, bad teaching, a lack of willpower, laziness, or "intentional underachievement."</p>
              </div>
            </div>
          </div>

          {/* Co-occurrence Card (Cyan) - Second Card with BARE ICONS */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Shared Pathways & Overlap</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-causes-cooccurrence-1.webp"
              alt="Venn diagram showing the shared neurological roots of APD, Dyslexia, and ADHD"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#2abcd4]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Because these disorders share fundamental neural pathways and genetic architecture, APD very frequently co-occurs with other conditions, making differential diagnosis highly complex.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              {/* BARE ICON IMPLEMENTATION */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Link className="text-[#0A9DC4] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">APD and ADHD</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The high comorbidity between the two suggests shared neurological mechanisms. Both conditions involve profound differences in attention networks, temporal processing speed, and frontal-subcortical circuits. Symptoms attributed to one often actively reflect the other.</p>
              </div>

              {/* BARE ICON IMPLEMENTATION */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <BookOpen className="text-[#0A9DC4] w-8 h-8 mb-4" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">APD and Dyslexia</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Severe phonological processing deficits tie APD and Dyslexia together. Shared genetic factors directly alter both auditory processing (hearing the distinct sounds) and phonological awareness (mapping those sounds to letters on a page).</p>
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
                <li>Pennington, B. F. (2006). From single to multiple deficit models of developmental disorders. <i>Cognition</i>.</li>
                <li>Riccio, C. A., et al. (1994). Comorbidity of central auditory processing disorder and attention-deficit hyperactivity disorder. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>.</li>
                <li>Kral, A., & Eggermont, J. J. (2007). What's to lose and what's to learn: Development under auditory deprivation. <i>Brain Research Reviews</i>.</li>
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