import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { TrendingUp, Sparkles, Heart, MessageCircle, BookOpen, Users } from 'lucide-react';

interface TouretteLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function TouretteLiving({ setCurrentArticle }: TouretteLivingProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full min-w-0 animate-in fade-in duration-300">
      
      {/* HEADER */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Living with Tourette's
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('tourette')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
        >
          <span className="text-xl">←</span>
          All About Tourette's
        </button>
      </div>

      {/* INTRO */}
      <p className="text-slate-700 leading-relaxed text-sm text-center max-w-3xl mx-auto mb-8">
        Individuals with Tourette's lead successful, creative, and deeply fulfilling lives across every corner of society—from medicine, law, and education to athletics, music, and the arts. Living well with Tourette's is about understanding your unique neurological rhythm, accessing supportive environments, and moving through the world with confidence.
      </p>

      {/* ==========================================
          SECTION 1: THRIVING ACROSS THE LIFESPAN (CYAN)
      ========================================== */}
      <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Thriving Across the Lifespan</h2>

        <ImageWithFallback 
          src="/images/tourette/tourette-living-main.webp"
          alt="Living with Tourette's and thriving across the lifespan"
          className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm border border-[#2abcd4]"
        />

        <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
          While Tourette's can feel most intense during childhood and early adolescence, long-term perspectives show a genuinely encouraging picture. With self-knowledge and the right supports, people with Tourette's build rewarding careers, strong relationships, and resilient self-advocacy skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
            <TrendingUp className="w-7 h-7 text-[#0A9DC4] mb-3" />
            <h3 className="text-[#0c264d] font-bold text-sm mb-2">A Hopeful Trajectory</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Longitudinal clinical studies show that for a large majority of individuals, tic severity naturally decreases significantly in late adolescence and early adulthood, even when mild tics continue.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
            <Sparkles className="w-7 h-7 text-[#0A9DC4] mb-3" />
            <h3 className="text-[#0c264d] font-bold text-sm mb-2">Beyond Media Myths</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Public awareness is steadily moving past exaggerated stereotypes like coprolalia—which affects only 10–15% of people with Tourette's—toward recognizing the everyday strengths and diversity of the community.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">2</sup>
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4]/40 flex flex-col items-center text-center">
            <Heart className="w-7 h-7 text-[#0A9DC4] mb-3" />
            <h3 className="text-[#0c264d] font-bold text-sm mb-2">Whole-Person Well-Being</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Quality-of-life research consistently highlights that supporting co-occurring traits like ADHD, OCD, or anxiety—and reducing social stigma—often matters far more to daily happiness than eliminating physical tics alone.<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">3</sup>
            </p>
          </div>
        </div>
      </div>

      {/* ==========================================
          SECTION 2: EVERYDAY STRATEGIES (NAVY - 3D LEFT STRIPE, NO ICONS/BULLETS)
      ========================================== */}
      <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl text-center">Everyday Strategies for Navigating Life</h2>

        <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
          Day-to-day comfort grows when you pair self-awareness with sustainable routines that respect your nervous system's energy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
            <div className="pl-2">
              <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                Know Your Patterns & Triggers
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Noticing how sleep, sensory overload, excitement, and stress shape your tics helps you plan ahead and build restorative pauses into busy days.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
            <div className="pl-2">
              <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                Unmask Safely
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Suppressing tics in public takes real cognitive effort. Giving yourself permission to release tics in safe, low-pressure spaces prevents exhaustion and eases rebound intensity.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#576d8e]"></div>
            <div className="pl-2">
              <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                Lean Into Flow States
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Deeply engaging, goal-directed activities—such as playing an instrument, sports, coding, or hands-on art—naturally quiet motor urges and build lasting confidence.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0c264d]"></div>
            <div className="pl-2">
              <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">
                Use Your Accommodations
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Whether through a school 504 Plan or workplace adjustments, using tools like quiet workspaces, flexible deadlines, or movement breaks is a practical way to do your best work.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          SECTION 3: SELF-ADVOCACY & COMMUNITY (YELLOW - DOUBLE-RING NAVY BADGES)
      ========================================== */}
      <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl text-center">Self-Advocacy & Community</h2>

        <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
          You never have to navigate Tourette's in isolation. Connecting with peers and deciding how you want to share your story turns self-understanding into everyday empowerment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="text-[#0c264d] font-bold text-sm mb-2">Own Your Narrative</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Having a simple, matter-of-fact explanation ready—like "I have Tourette's, so my brain sends extra movement signals sometimes; you can just ignore them"—takes the pressure off unfamiliar moments.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-[#0c264d] font-bold text-sm mb-2">Educate on Your Terms</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Sharing accurate information with trusted teachers, managers, or friends helps replace outdated myths with genuine understanding and allyship.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]/60 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-[#0c264d] font-bold text-sm mb-2">Find Your Community</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Connecting with Tourette's peer groups, youth ambassador programs, and neurodiversity-affirming communities reduces isolation and reinforces that your voice and lived experience belong.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER BUTTON */}
      <div className="mt-8 mb-12 flex justify-end w-full">
        <button 
          onClick={() => setCurrentArticle?.('tourette')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
        >
          <span className="text-xl">←</span>
          All About Tourette's
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
            <p>1. Groth, C., et al. (2017). Course of Tourette syndrome and comorbidities in a large prospective clinical study. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>.</p>
            <p>2. Freeman, R. D., et al. (2000). An international perspective on Tourette syndrome: Selected findings from 3,500 individuals in 22 countries. <i>Developmental Medicine & Child Neurology</i>.</p>
            <p>3. Conelea, C. A., et al. (2011). Exploring the impact of chronic tic disorders on youth: Results from the Tourette Syndrome Impact Survey. <i>Child Psychiatry & Human Development</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
            <li>Burd, L., et al. (2001). Long-term follow-up of an epidemiologically defined cohort of patients with Tourette syndrome. <i>Journal of Child Neurology</i>.</li>
            <li>Cutler, D., et al. (2009). The quality of life of young people with Tourette syndrome. <i>Child: Care, Health and Development</i>.</li>
            <li>Elstner, K., et al. (2001). Quality of life (QOL) of patients with Gilles de la Tourette's syndrome. <i>Acta Psychiatrica Scandinavica</i>.</li>
            <li>Storch, E. A., et al. (2005). Reliability and validity of the Yale Global Tic Severity Scale. <i>Psychological Assessment</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}