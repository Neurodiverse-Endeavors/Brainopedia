import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import {
  Headphones,
  Activity,
  Zap,
  Ear,
  AlertTriangle,
  ShieldAlert,
  Layers,
  TrendingUp,
  Link,
  BookOpen,
  XCircle,
} from 'lucide-react';

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

      {/* HEADER & BACK BUTTON */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Auditory Processing Disorder: Causes &amp; Origins
        </h1>

        <button
          onClick={() => setCurrentArticle?.('apd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm self-start"
        >
          <span className="text-xl">←</span>
          All About APD
        </button>
      </div>

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
          Genetics &amp; Neurology
        </button>
        <button
          onClick={() => handleTabChange('environment')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'environment'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Environment &amp; Development
        </button>
        <button
          onClick={() => handleTabChange('models')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'models'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Models &amp; Co-occurrence
        </button>
      </div>

      {/* ==========================================
          TAB 1: GENETICS & NEUROLOGY (Cyan -> Navy)
      ========================================== */}
      {activeTab === 'biology' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Card 1: Neurological Basis (Cyan - Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Neurological Basis of APD
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-causes-neurology-1.webp"
              alt="Visualization of central auditory pathways, neural synchrony, and interhemispheric communication"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-6">
              The origins of APD are multifaceted and rooted in the central auditory nervous system—the intricate network of ascending and descending pathways connecting the auditory brainstem to the temporal cortex.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Headphones className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Cortical &amp; Subcortical Networks
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Subcortical brainstem nuclei encode spatial localization and rapid timing cues, while the primary and associative auditory cortices reconstruct spoken meaning. Diffusion imaging highlights subtle structural variations along these white-matter tracts.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Zap className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Neural Synchrony
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Decoding consonant transitions requires sub-millisecond timing across auditory nerve fibers and cortical neurons. Variations in myelination and phase-locking precision can soften rapid acoustic contrasts in noisy spaces.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Activity className="text-[#0A9DC4] w-6 h-6 mb-3 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  Interhemispheric Transfer
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  The corpus callosum coordinates auditory and linguistic signals between both cerebral hemispheres. Slower interhemispheric transfer affects binaural integration—the seamless blending of sound inputs arriving from both ears.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Genetics & Neurochemistry (Navy - 3D Left-Stripe Inner Cards, No Icons) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Genetics &amp; Neurochemistry
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-causes-genetics-1.webp"
              alt="Interwoven genetic helices and luminous acoustic signaling nodes"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Auditory processing traits frequently cluster within families, reflecting polygenic influences on early neural wiring, synaptic plasticity, and inhibitory sound filtering.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Heritability
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Twin and family studies estimate a 50–80% heritable contribution to core auditory and cognitive processing speeds.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup> Children with APD often share similar listening and learning profiles with parents or siblings.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Shared Polygenic Architecture
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Large-scale polygenic analyses confirm that genetic variants associated with speech-in-noise perception overlap with pathways guiding language development, reading, and attentional regulation.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup>
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Neurotransmitter Balance
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Gamma-aminobutyric acid (GABA)—the central nervous system&apos;s primary inhibitory neurotransmitter—sharpens frequency tuning and suppresses background noise across auditory pathways.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">6</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM NAVIGATION BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full clear-both">
            <button
              onClick={() => setCurrentArticle?.('apd')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm"
            >
              <span className="text-xl">←</span>
              All About APD
            </button>
          </div>

          {/* TAB 1 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>

            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies &amp; Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>
                  1. Musiek, F. E., &amp; Chermak, G. D. (2015). Psychophysical and behavioral peripheral and central auditory tests.{' '}
                  <i>Handbook of Clinical Neurology</i>, 129, 313–332.
                </p>
                <p>
                  2. Farah, R., Schmithorst, V. J., Keith, R. W., &amp; Holland, S. K. (2014). Altered white matter microstructure underlies listening difficulties in children suspected of auditory processing disorders: A tract-based spatial statistics study.{' '}
                  <i>Brain and Behavior</i>, 4(4), 531–543.
                </p>
                <p>
                  3. Bae, H. G., Wu, W. C., Nip, K., Gould, E., &amp; Kim, J. H. (2025). Scn2a-linked myelination deficits and synaptic plasticity alterations drive auditory processing disorders in an ASD mouse model.{' '}
                  <i>Nature Communications</i>, 16, 7109.
                </p>
                <p>
                  4. Plomin, R., &amp; Deary, I. J. (2015). Genetics and intelligence differences: Five special findings.{' '}
                  <i>Molecular Psychiatry</i>, 20(1), 98–108.
                </p>
                <p>
                  5. Grama Bhagavan, S. (2025). Uncovering genetic comorbidities of speech-in-noise deficits using polygenic risk score analysis from two independent cohorts.{' '}
                  <i>University of Iowa Hearing &amp; Genetics Studies</i>.
                </p>
                <p>
                  6. Dobri, S. G. J., &amp; Ross, B. (2021). Total GABA level in human auditory cortex is associated with speech-in-noise understanding in older age.{' '}
                  <i>NeuroImage</i>, 225, 117474.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul
                className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words"
                style={{ textIndent: 0 }}
              >
                <li>
                  Musiek, F. E., &amp; Baran, J. A. (2018). <i>The auditory system: Anatomy, physiology, and clinical correlates</i> (2nd ed.). Plural Publishing.
                </li>
                <li>
                  Griffiths, T. D., &amp; Warren, J. D. (2002). The planum temporale as a computational hub.{' '}
                  <i>Trends in Neurosciences</i>, 25(7), 348–353.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: ENVIRONMENT & DEVELOPMENT (Navy -> Yellow)
      ========================================== */}
      {activeTab === 'environment' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Card 1: Developmental Factors (Navy - 3D Left-Stripe Inner Cards, No Icons) */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Developmental Factors
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-causes-development-1.webp"
              alt="Young child exploring a rich, language-interactive learning environment"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              The human central auditory system continues maturing well into late adolescence. Early acoustic consistency and developmental windows play a foundational role in tuning neural speech networks.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Sensitive Periods
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Auditory cortex maturation relies on early sensitive periods when clear speech patterns calibrate phonemic maps.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup> Consistent, rich verbal and musical interaction strengthens synaptic efficiency during these windows.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Prenatal &amp; Perinatal Factors
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Early neurodevelopmental variables—including prematurity, low birth weight, neonatal hyperbilirubinemia, or complicated delivery (reported in roughly 39% of diagnosed pediatric APD cohorts)—can influence brainstem auditory maturation.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
                <div className="pl-3">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-1">
                    Acoustic Enrichment
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Developing auditory pathways thrive on clear, varied conversational input. Prolonged periods of muffled sound or high ambient classroom noise reduce signal clarity during foundational language-learning years.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Environmental & Medical Impacts (Yellow - Double-Ring Navy Circular Icon Badges) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Environmental &amp; Medical Impacts
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-causes-environment-1.webp"
              alt="Visual illustrating early ear health, protective acoustic environments, and neurological resilience"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Alongside genetic and developmental foundations, specific medical histories or acquired neurological events can disrupt auditory signal clarity across the lifespan.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Ear className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Chronic Ear Infections</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Recurrent otitis media with effusion during early childhood—documented in nearly 58% of children diagnosed with APD—creates fluctuating conductive muffling that alters binaural timing calibration.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Environmental &amp; Ototoxic Exposures</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Early exposure to heavy metals such as lead, organic solvents, or certain ototoxic medications can affect cochlear-to-brainstem neural transmission even when standard pure-tone thresholds remain intact.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Acquired Neurological Events</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Concussions, traumatic brain injury (TBI), blast exposure, or cerebrovascular events can produce acquired APD by disrupting central auditory white-matter connections in adolescents or adults.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">5</sup>
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM NAVIGATION BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full clear-both">
            <button
              onClick={() => setCurrentArticle?.('apd')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm"
            >
              <span className="text-xl">←</span>
              All About APD
            </button>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>

            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies &amp; Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>
                  1. Moore, D. R., Hartley, D. E., &amp; Hogan, S. C. (2003). Effects of otitis media with effusion (OME) on central auditory function.{' '}
                  <i>International Journal of Pediatric Otorhinolaryngology</i>, 67(Suppl. 1), S63–S67.
                </p>
                <p>
                  2. Knudsen, E. I. (2004). Sensitive periods in the development of the brain and behavior.{' '}
                  <i>Journal of Cognitive Neuroscience</i>, 16(8), 1412–1425.
                </p>
                <p>
                  3. Włodarczyk, E., Szkiełkowska, A., Skarżyński, H., &amp; Pilka, A. (2025). Developmental and school-related risk factors in auditory processing disorder: A comparative analysis.{' '}
                  <i>Applied Sciences</i>, 15(21), 11687.
                </p>
                <p>
                  4. Aristidou, I. L., &amp; Hohman, M. H. (2023). Central auditory processing disorder. In{' '}
                  <i>StatPearls</i>. StatPearls Publishing.
                </p>
                <p>
                  5. Gallun, F. J., Diedesch, A. C., Kubli, L. R., Walden, T. C., Folmer, R. L., Lewis, M. S., ... &amp; Leek, M. R. (2012). Performance on tests of central auditory processing by individuals exposed to high-intensity blasts.{' '}
                  <i>Journal of Rehabilitation Research and Development</i>, 49(7), 1005–1025.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul
                className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words"
                style={{ textIndent: 0 }}
              >
                <li>
                  Bergemalm, P. O., &amp; Lyxell, B. (2005). Appearances are deceptive? Long-term cognitive and central auditory sequelae from closed head injury.{' '}
                  <i>International Journal of Audiology</i>, 44(1), 39–49.
                </li>
                <li>
                  Włodarczyk, E., et al. (2024). Etiology, diagnostic, and rehabilitative methods for children with central auditory processing disorders—A scoping review.{' '}
                  <i>Children</i>, 11(8), 998.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: MODELS & CO-OCCURRENCE (Yellow -> Cyan)
      ========================================== */}
      {activeTab === 'models' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Card 1: Multiple Hit Hypothesis (Yellow - Double-Ring Navy Circular Icon Badges + Accessible Warning Card) */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              The Multiple-Deficit &amp; Plasticity Model
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-causes-models-1.webp"
              alt="Abstract visualization of converging genetic and environmental pathways shaped by neuroplasticity"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#ffd166]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Contemporary developmental neuroscience views APD through a multifactorial &ldquo;multiple-deficit&rdquo; lens—where subtle genetic predispositions interact dynamically with early acoustic experience and lifelong neuroplasticity.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Cumulative Threshold Effects</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Subtle individual risk factors—such as a family history of phonological differences paired with recurrent childhood ear fluid—combine additively, crossing a functional threshold where noisy environments become taxing.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center mb-3 shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2">Experience-Dependent Plasticity</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  The auditory brain remains remarkably adaptable throughout life. Targeted auditory training, musical practice, and assistive acoustic tools actively strengthen neural timing and compensatory pathways.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
                </p>
              </div>
            </div>

            {/* Accessible Maroon/Pink Myth Card */}
            <div className="bg-[#fdf2f8] border-l-4 border-[#be185d] p-5 rounded-r-xl shadow-sm mt-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 max-w-4xl mx-auto">
              <XCircle className="text-[#be185d] w-6 h-6 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-[#831843] font-bold text-sm mb-2">What APD Is NOT Caused By</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  APD is an organic neurodevelopmental difference in central auditory processing. It is <strong>not</strong> caused by parenting style, lack of effort, inattentiveness by choice, or lower intellectual ability.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Shared Pathways & Overlap (Cyan - Stacked Lucide Icons) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
              Shared Pathways &amp; Overlap
            </h2>

            <ImageWithFallback
              src="/images/apd/apd-causes-cooccurrence-1.webp"
              alt="Diagram illustrating overlapping neural networks across APD, ADHD, and Dyslexia"
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              Because neural timing, phonological decoding, and executive attention networks develop in close coordination, APD frequently overlaps with other neurodevelopmental profiles.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <Link className="text-[#0A9DC4] w-8 h-8 mb-4 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  APD &amp; ADHD
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  High co-occurrence reflects interconnected frontostriatal attention networks and temporal processing circuits.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">4</sup> Top-down executive focus directly supports bottom-up auditory filtering in noisy environments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                <BookOpen className="text-[#0A9DC4] w-8 h-8 mb-4 shrink-0" />
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">
                  APD &amp; Dyslexia
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Shared genetic and neurobiological pathways link rapid acoustic discrimination with phonological awareness—bridging how the brain parses spoken syllables and maps them onto written print.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM NAVIGATION BUTTON */}
          <div className="mt-8 mb-12 flex justify-end w-full clear-both">
            <button
              onClick={() => setCurrentArticle?.('apd')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm"
            >
              <span className="text-xl">←</span>
              All About APD
            </button>
          </div>

          {/* TAB 3 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>

            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Studies &amp; Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>
                  1. Pennington, B. F. (2006). From single to multiple deficit models of developmental disorders.{' '}
                  <i>Cognition</i>, 101(2), 385–413.
                </p>
                <p>
                  2. Kraus, N., &amp; White-Schwoch, T. (2015). Unraveling the biology of auditory learning: A cognitive–sensorimotor–reward framework.{' '}
                  <i>Trends in Cognitive Sciences</i>, 19(11), 642–654.
                </p>
                <p>
                  3. Sharma, M., Purdy, S. C., &amp; Kelly, A. S. (2009). Comorbidity of auditory processing, language, and reading disorders.{' '}
                  <i>Journal of Speech, Language, and Hearing Research</i>, 52(3), 706–722.
                </p>
                <p>
                  4. Riccio, C. A., Hynd, G. W., Cohen, M. J., Hall, J., &amp; Molt, L. (1994). Comorbidity of central auditory processing disorder and attention-deficit hyperactivity disorder.{' '}
                  <i>Journal of the American Academy of Child &amp; Adolescent Psychiatry</i>, 33(6), 849–857.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul
                className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words"
                style={{ textIndent: 0 }}
              >
                <li>
                  Kral, A., &amp; Eggermont, J. J. (2007). What&apos;s to lose and what&apos;s to learn: Development under auditory deprivation.{' '}
                  <i>Brain Research Reviews</i>, 56(1), 259–269.
                </li>
                <li>
                  de Wit, E., van Dijk, P., Hanekamp, S., Visser-Bochane, M. I., Steenbergen, B., van der Schans, C. P., &amp; Luinge, M. R. (2018). Same or different: The overlap between children with auditory processing disorders and children with other developmental disorders: A systematic review.{' '}
                  <i>Ear and Hearing</i>, 39(1), 1–19.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </article>
  );
}