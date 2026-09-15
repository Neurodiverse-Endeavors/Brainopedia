import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Eye, Ear, Heart, AlertTriangle, Users, Home, GraduationCap, Briefcase, Zap, Laptop, Clock, ShieldCheck, Compass, CheckCircle, Baby, MessageSquare } from 'lucide-react';

interface APDLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function APDLiving({ setCurrentArticle, initialTab }: APDLivingProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'life');

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
          Living with APD
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
          onClick={() => setActiveTab('life')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'life'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Life & Relationships
        </button>
        <button
          onClick={() => setActiveTab('work')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'work'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Work & Strategies
        </button>
        <button
          onClick={() => setActiveTab('future')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'future'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Lifespan & Community
        </button>
      </div>

      {/* ==========================================
          TAB 1: LIFE & RELATIONSHIPS
      ========================================== */}
      {activeTab === 'life' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Daily Life Card (Cyan) - Uses Float Image with organic text flow */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Daily Life & Emotional Impact</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-living-daily.webp"
              alt="Person experiencing listening fatigue, visually separating from a noisy environment"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Routine communication tasks that others take for granted can be exhausting with APD. Because it is completely invisible, the daily friction of navigating an auditory world takes a heavy emotional toll.
            </p>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <AlertTriangle className="text-[#0A9DC4] w-5 h-5" /> The Invisible Challenge
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                People frequently misinterpret APD challenges as rudeness, lack of intelligence, or willful inattention. Constantly having to explain your neurological profile to strangers or peers becomes incredibly tiring.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Zap className="text-[#0A9DC4] w-5 h-5" /> Listening Fatigue
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                The constant, hyper-active cognitive effort required to simply process basic auditory information leads to severe exhaustion. By the end of the day, this depletion is not laziness—it is genuine neurological fatigue.
              </p>
            </div>

            <div>
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Heart className="text-[#0A9DC4] w-5 h-5" /> Emotional Toll
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Chronic struggles and the anxiety of missing important information often contribute to depression. Many individuals withdraw from social activities to avoid the embarrassment of communication breakdowns.
              </p>
            </div>
          </div>

          {/* Relationships Card (Yellow) - Uses W-64 Centered Hero Image and Grid */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Relationships & Social Contexts</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-living-relationships-hero.webp"
              alt="Friends engaged in a quiet, intimate, and accessible conversation"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-yellow-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Users className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Friendships & Dating</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Group conversations with overlapping voices are notoriously difficult. Close, one-on-one friendships in quiet settings feel far more comfortable. Romantic partners must be willing to adapt their communication style.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <Home className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Family Dynamics</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Family members may struggle to understand why you "hear when you want to" or seem to ignore them. Open education about APD is essential to help families develop patience and use accessible communication.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50">
                <div className="flex items-center gap-2 mb-2 border-b border-[#ffd166] pb-2">
                  <GraduationCap className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">School Socializing</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Cafeterias, playgrounds, and hallways are auditory nightmares. Choosing quieter social options isn't "antisocial"—it's a highly practical, healthy accommodation to preserve your energy.</p>
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
                <li>Hornsby, B. W., Naylor, G., & Bess, F. H. (2016). A taxonomy of fatigue concepts and their relation to hearing loss. <i>Ear and Hearing</i>.</li>
                <li>Bellis, T. J. (2003). Assessment and management of central auditory processing disorders in the educational setting. <i>Delmar Learning</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: WORK & STRATEGIES
      ========================================== */}
      {activeTab === 'work' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Strategies Card (Slate) - Uses Float Image with organic text flow */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Practical Management & Tech</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-living-strategies.webp"
              alt="Person utilizing practical management tools like noise-canceling headphones"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Executive function challenges heavily affect daily life. Developing highly personalized systems for organization, time management, and task completion is essential for independent success.
            </p>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Laptop className="text-[#0c264d] w-5 h-5" /> Technology as an Equalizer
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Technology is transformative. Captioning apps, noise-canceling headphones, and recording important meetings (with permission) allow you to bypass your processing weaknesses entirely. Email and text messaging drastically reduce reliance on stressful phone calls.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Ear className="text-[#0c264d] w-5 h-5" /> Environmental Control
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Whenever possible, control your listening environment. Choose quiet restaurants, sit far away from noise sources (like kitchens or speakers), and purposefully schedule important conversations during quiet times of the day.
              </p>
            </div>

            <div>
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Clock className="text-[#0c264d] w-5 h-5" /> Energy & Memory
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Never rely on auditory memory for important information—write it down immediately. Building in breaks and setting strict limits on challenging listening situations is crucial to preventing complete burnout.
              </p>
            </div>
          </div>

          {/* Career Card (Cyan) - Uses W-64 Centered Hero Image and Grid */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Career & Strengths</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-living-career-hero.webp"
              alt="Adult with APD thriving in a visually-oriented career"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              Some careers are significantly better suited to individuals with APD. Success means ruthlessly playing to your strengths rather than trying to force yourself to overcome your deficits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Briefcase className="text-[#0A9DC4] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Finding the Fit</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Careers emphasizing visual or hands-on skills (art, design, engineering, tech) are incredible fits. Many gravitate toward entrepreneurship, which offers the ultimate autonomy to structure work perfectly around your strengths.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <ShieldCheck className="text-[#0A9DC4] w-7 h-7" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Workplace Accommodations</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Under the ADA, employees have the right to request reasonable accommodations.<sup>1</sup> This might include requesting written instructions, utilizing closed-door offices, or securing remote work arrangements.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-2 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Eye className="text-[#0A9DC4] w-6 h-6" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Visual & Creative Strengths</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Many with APD excel at visual processing and hyper-focus. Furthermore, developing workarounds for auditory challenges builds profound, out-of-the-box creative problem-solving skills that translate brilliantly into the workplace.</p>
              </div>
            </div>
          </div>

          {/* TAB 2 REFERENCES */}
          <div className="clear-both mt-16 font-spartan">
            <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
                Cited Legal Protections
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed break-words" style={{ textIndent: 0 }}>
                <p>1. Americans with Disabilities Act of 1990, 42 U.S.C. § 12101 et seq.</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0 break-words" style={{ textIndent: 0 }}>
                <li>Job Accommodation Network. (2021). Accommodation and compliance: Auditory processing disorder. <i>JAN</i>.</li>
                <li>Mayer, R. E. (2009). Multimedia learning. <i>Cambridge University Press</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: LIFESPAN & COMMUNITY
      ========================================== */}
      {activeTab === 'future' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Lifespan Card (Yellow) - Uses Float Image with organic text flow */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Life Across the Ages</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-living-lifespan.webp"
              alt="Split visual showing a child receiving early support and an adult advocating for needs"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Twice-exceptionality and APD are lifelong profiles—they are not something you "outgrow." However, self-understanding and life experience make management significantly easier over time.
            </p>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Baby className="text-[#d4a017] w-5 h-5" /> Childhood & School
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Young children benefit immensely from early language intervention. As academic demands soar during elementary and middle school, appropriate accommodations (like IEPs) are absolutely crucial for success and preserving self-esteem.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Users className="text-[#d4a017] w-5 h-5" /> Adolescence
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Teenagers face complex social dynamics and incredibly fast-paced instruction. This is the critical period where identity development occurs, and students must actively learn how to advocate for their own needs.
              </p>
            </div>

            <div>
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Compass className="text-[#d4a017] w-5 h-5" /> Adulthood & Beyond
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Many adults report that life improves significantly after school ends because they finally gain control over their environments. While age-related hearing changes may eventually compound APD, a lifetime of compensation strategies provides immense resilience.
              </p>
            </div>
          </div>

          {/* Advocacy Card (Slate) - Uses W-64 Centered Hero Image and Grid */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Advocacy, Community & Hope</h2>
            
            <ImageWithFallback 
              src="/images/apd/apd-living-advocacy-hero.webp"
              alt="Diverse support group connecting over shared neurodivergent experiences"
              className="block mx-auto w-64 h-auto mb-6 rounded-lg shadow-sm border border-gray-200"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <Users className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Finding Your People</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Connecting with other individuals who share your exact auditory experiences completely shatters the feeling of isolation. Online communities and advocacy organizations offer validation that is difficult to find anywhere else.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <MessageSquare className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Self-Advocacy</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Learning to fiercely advocate for your accommodations is incredibly empowering. Many individuals take this a step further, sharing their story to raise awareness in schools and workplaces to improve support for the next generation.</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                  <CheckCircle className="text-[#0c264d] w-4 h-4" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Redefining Success</h3>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">Success for neurodivergent individuals often looks very different than conventional definitions. Personal fulfillment, pursuing your passions, and living authentically matter far more than traditional, standardized markers of achievement.</p>
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
                <li>Dawes, P., & Bishop, D. (2009). Auditory processing disorder in relation to developmental disorders. <i>International Journal of Language & Communication Disorders</i>.</li>
                <li>Peelle, J. E., & Wingfield, A. (2016). The neural consequences of age-related hearing loss. <i>Trends in Neurosciences</i>.</li>
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