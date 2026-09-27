import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useState } from 'react';
import { Sparkles, Home, Heart, Briefcase, Shield, Users, CheckCircle, TrendingUp } from 'lucide-react';

interface ADHDLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function ADHDLiving({ setCurrentArticle, initialTab }: ADHDLivingProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'overview');
  
  // Reusable styling variables
  const centeredMediumImageClass = "w-full sm:w-96 h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm";
  const responsiveImageClass = "w-full sm:w-96 md:w-[28rem] h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm";
  const floatedCardContainer = "float-right ml-6 mb-4 bg-white p-2 rounded-lg shadow-sm border border-gray-200 w-64 shrink-0";
  const floatedImageClass = "w-full h-auto rounded-md block";

  function OverviewContent() {
    return (
      <div className="animate-in fade-in duration-300 space-y-6">
        
        {/* Intro Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 flow-root mb-8">
          <h2 className="text-[#0c264d] mb-4 text-2xl font-bold flex items-center gap-2">
            <TrendingUp className="text-[#0A9DC4]" size={28} />
            Thriving with ADHD
          </h2>
          
          <div className={floatedCardContainer}>
            <ImageWithFallback 
              src="/images/adhd/adhd-living-overview-pathway.webp"
              alt="Thriving with ADHD - living a full life"
              className={floatedImageClass}
            />
          </div>

          <p className="mb-4 text-sm text-gray-700 leading-relaxed">
            Individuals with ADHD lead full and successful lives across all areas of society. While ADHD 
            presents challenges, many people with ADHD also describe unique strengths and appreciate aspects 
            of how their brain works. Living well with ADHD involves understanding one's unique pattern of 
            symptoms, developing personalized coping strategies, accessing appropriate accommodations in work 
            and education, and connecting with supportive communities.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            The experience of having ADHD is deeply personal and varies widely from person to person. This 
            section explores what daily life with ADHD can look like and strategies for building a fulfilling 
            life that honors both challenges and strengths.
          </p>
        </div>

        {/* Strengths Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#ffd166] mb-8">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl flex items-center justify-center gap-2">
            <Sparkles className="text-[#ffd166]" size={28} />
            Recognizing Strengths in ADHD
          </h2>

          <ImageWithFallback 
            src="/images/adhd/adhd-living-overview-strong-arms.webp"
            alt="ADHD strengths - resilience and determination"
            className={centeredMediumImageClass}
          />         

          <p className="mb-6 text-sm text-gray-700 leading-relaxed text-center">
            While discussions of ADHD often focus on challenges, many individuals with ADHD describe genuine 
            strengths associated with their neurodivergence:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-[#f0f9ff] p-4 rounded-lg border-t-4 border-[#2abcd4] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-sm uppercase tracking-wider">Creativity and Innovation</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Many people with ADHD excel at creative thinking, making unexpected connections, and approaching 
                problems from novel angles. Research demonstrates that individuals with ADHD show enhanced 
                divergent thinking and generate more original ideas in creative tasks.<sup>1</sup> This can be a significant 
                asset in creative fields and entrepreneurship.<sup>2</sup>
              </p>
            </div>

            <div className="bg-[#fff9e6] p-4 rounded-lg border-t-4 border-[#ffd166] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-sm uppercase tracking-wider">Hyperfocus</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                While sustaining attention on boring tasks can be difficult, many individuals experience 
                intense, prolonged concentration on activities that capture their interest. This state of hyperfocus 
                allows for deep dives into subjects and can result in exceptional expertise and intense productivity.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-t-4 border-[#10b981] shadow-sm md:col-span-2">
              <h3 className="text-[#0c264d] font-bold mb-2 text-sm uppercase tracking-wider">Resilience</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Navigating a world not built for an ADHD brain requires tremendous resilience. Many individuals 
                with ADHD develop strong problem-solving skills, adaptability, and the ability to persevere 
                through setbacks. This resilience often translates into a strong capacity to handle crises and 
                adapt quickly to sudden changes.
              </p>
            </div>
          </div>
        </div>

        {/* Overview Tab References */}
        <div className="clear-both mt-16 font-spartan">
          <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
          
          <div className="mb-6">
            <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
              Cited Studies & Statistics
            </h4>
            <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
              <p>1. White, H. A., & Shah, P. (2006). Uninhibited imaginations: Creativity in adults with attention-deficit/hyperactivity disorder. <i>Personality and Individual Differences</i>.</p>
              <p>2. White, H. A., & Shah, P. (2011). Creative style and achievement in adults with attention-deficit/hyperactivity disorder. <i>Personality and Individual Differences</i>.</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
              Background Sources
            </h4>
            <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
              <li>Antshel, K. M. (2018). Attention-deficit/hyperactivity disorder (ADHD) and entrepreneurship. <i>Academy of Management Perspectives</i>.</li>
              <li>Archer, D. (2014). <i>The ADHD Advantage: What You Thought Was a Diagnosis May Be Your Greatest Strength</i>. Avery.</li>
              <li>Brown, T. E. (2013). <i>A New Understanding of ADHD in Children and Adults: Executive Function Impairments</i>. Routledge.</li>
              <li>Sedgwick, J. A., et al. (2019). The positive aspects of attention deficit hyperactivity disorder: A qualitative investigation of successful adults with ADHD. <i>ADHD Attention Deficit and Hyperactivity Disorders</i>.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  function DailyLifeContent() {
    return (
      <div className="animate-in fade-in duration-300 space-y-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl flex items-center gap-2">
          <Home className="text-[#0A9DC4]" size={28} />
          Daily Life and Practical Considerations
        </h2>
        
        <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 flow-root mb-8">
          <div className={floatedCardContainer}>
            <ImageWithFallback 
              src="/images/adhd/adhd-living-routines-checkmark.webp"
              alt="Daily routines and practical strategies for ADHD"
              className={floatedImageClass}
            />
          </div>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Morning and Evening Routines</h3>
          <p className="mb-4 text-sm text-gray-700 leading-relaxed">
            Establishing consistent routines can significantly reduce daily stress and improve functioning for individuals with ADHD.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={18} className="text-[#10b981] shrink-0" /> <span>Prepare the night before (lay out clothes, pack bags)</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={18} className="text-[#10b981] shrink-0" /> <span>Use multiple alarms with different sounds</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={18} className="text-[#10b981] shrink-0" /> <span>Create visible checklists for tasks</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={18} className="text-[#10b981] shrink-0" /> <span>Build in extra time for transitions</span></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Household Management</h3>
          <p className="mb-4 text-sm text-gray-700 leading-relaxed">
            Executive function deficits in ADHD can make household organization challenging. Practical strategies include:
          </p>
          <ul className="space-y-2">
            <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={18} className="text-[#2abcd4] shrink-0" /> <span>Simplify systems—fewer possessions mean less to organize</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={18} className="text-[#2abcd4] shrink-0" /> <span>Use timers for cleaning tasks</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={18} className="text-[#2abcd4] shrink-0" /> <span>Create designated homes for frequently lost items</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={18} className="text-[#2abcd4] shrink-0" /> <span>Use automatic bill pay to avoid late fees</span></li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#10b981] mb-8 flow-root">
          <div className={floatedCardContainer}>
            <ImageWithFallback 
              src="/images/adhd/adhd-living-table-calculator-finances.webp"
              alt="Financial management tools and strategies"
              className={floatedImageClass}
            />
          </div>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Managing Finances</h3>
          <p className="mb-4 text-sm text-gray-700 leading-relaxed">
            Impulsivity and difficulty with planning can significantly affect financial management. Adults with ADHD 
            are more likely to experience financial difficulties, including impulsive spending, difficulty saving, and 
            problems managing bills and debt. Protective strategies include:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-3 mt-4">
            <div className="bg-gray-50 p-3 rounded border border-gray-200 text-xs text-gray-700 shadow-sm">Use automatic transfers to savings accounts</div>
            <div className="bg-gray-50 p-3 rounded border border-gray-200 text-xs text-gray-700 shadow-sm">Set up all bills on autopay to avoid late fees</div>
            <div className="bg-gray-50 p-3 rounded border border-gray-200 text-xs text-gray-700 shadow-sm">Build in waiting periods (24-48 hours) before large purchases</div>
            <div className="bg-gray-50 p-3 rounded border border-gray-200 text-xs text-gray-700 shadow-sm">Use apps that track spending automatically</div>
            <div className="bg-gray-50 p-3 rounded border border-gray-200 text-xs text-gray-700 shadow-sm">Work with a financial advisor or accountability partner</div>
            <div className="bg-gray-50 p-3 rounded border border-gray-200 text-xs text-gray-700 shadow-sm">Delete shopping apps to add friction to impulse purchases</div>
          </div>
        </div>

        {/* Daily Life Tab References */}
        <div className="clear-both mt-16 font-spartan">
          <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
              Background Sources
            </h4>
            <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
              <li>Barkley, R. A., & Murphy, K. R. (2006). <i>Attention-Deficit Hyperactivity Disorder: A Clinical Workbook</i> (3rd ed.). Guilford Press.</li>
              <li>Biederman, J., et al. (2012). Adult outcome of attention-deficit/hyperactivity disorder: A controlled 16-year follow-up study. <i>Journal of Clinical Psychiatry</i>.</li>
              <li>Dawson, P., & Guare, R. (2009). <i>Smart but Scattered: The Revolutionary "Executive Skills" Approach to Helping Kids Reach Their Potential</i>. Guilford Press.</li>
              <li>Ramsay, J. R., & Rostain, A. L. (2015). <i>The Adult ADHD Tool Kit: Using CBT to Facilitate Coping Inside and Out</i>. Routledge.</li>
              <li>Ratey, N. (2008). <i>The Disorganized Mind: Coaching Your ADHD Brain to Take Control of Your Time, Tasks, and Talents</i>. St. Martin's Press.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  function RelationshipsContent() {
    return (
      <div className="animate-in fade-in duration-300 space-y-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl flex items-center gap-2">
          <Heart className="text-[#ff6b6b]" size={28} />
          Relationships and Social Life
        </h2>
        
        <div className="bg-[#fff9e6] p-6 rounded-lg shadow-sm border border-[#ffd166]/30 flow-root mb-6">
          <div className={floatedCardContainer}>
            <ImageWithFallback 
              src="/images/adhd/adhd-living-relationships-heart-connections.webp"
              alt="Relationships and social life with ADHD"
              className={floatedImageClass}
            />
          </div>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Romantic Relationships</h3>
          <p className="mb-4 text-sm text-gray-700 leading-relaxed">
            Navigating romantic relationships with ADHD can present unique challenges. ADHD symptoms can 
            affect relationship satisfaction, with partners of individuals with ADHD reporting higher levels of 
            relationship distress. However, many couples successfully navigate these challenges with awareness, 
            communication, and targeted strategies:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex gap-2 text-sm text-gray-700"><span className="text-[#d97706] font-bold mt-0.5">•</span> <span><strong>Communication:</strong> Be open about ADHD and educate partners about how it affects you</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><span className="text-[#d97706] font-bold mt-0.5">•</span> <span><strong>Listening:</strong> Develop strategies like taking notes during important conversations</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><span className="text-[#d97706] font-bold mt-0.5">•</span> <span><strong>Forgetfulness:</strong> Use shared calendars and reminders for important dates and commitments</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><span className="text-[#d97706] font-bold mt-0.5">•</span> <span><strong>Division of labor:</strong> Play to each partner's strengths in household tasks</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><span className="text-[#d97706] font-bold mt-0.5">•</span> <span><strong>Couples therapy:</strong> Consider working with a therapist who understands ADHD</span></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Friendships</h3>
          <p className="mb-4 text-sm text-gray-700 leading-relaxed">
            Social relationships can be challenging due to difficulties with social cues, 
            impulsivity, and maintaining contact. Research shows that individuals with ADHD often 
            experience social rejection and have fewer close friendships.<sup>1</sup> Strategies include:
          </p>
          <ul className="space-y-2">
            <li className="flex gap-2 text-sm text-gray-700"><span className="text-[#d97706] font-bold mt-0.5">•</span> <span>Set reminders to reach out to friends regularly</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><span className="text-[#d97706] font-bold mt-0.5">•</span> <span>Be upfront about ADHD-related challenges (if comfortable)</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><span className="text-[#d97706] font-bold mt-0.5">•</span> <span>Choose understanding friends who accept you as you are</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><span className="text-[#d97706] font-bold mt-0.5">•</span> <span>Practice active listening and turn-taking in conversations</span></li>
          </ul>
        </div>

        <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 flow-root">
          <div className={floatedCardContainer}>
            <ImageWithFallback 
              src="/images/adhd/adhd-living-relationships-read-kids-books.webp"
              alt="Parent reading to children - parenting with ADHD"
              className={floatedImageClass}
            />
          </div>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Parenting with ADHD</h3>
          <p className="mb-4 text-sm text-gray-700 leading-relaxed">
            Parents with ADHD face unique challenges and bring unique strengths to parenting. 
            Research shows that parental ADHD symptoms are associated with differences in parenting 
            behaviors, including more harsh and lax parenting and slightly less positive parenting.<sup>2</sup> However, 
            these associations are relatively small, and many parents with ADHD successfully raise healthy, 
            well-adjusted children with the right strategies and support.
          </p>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-[#2abcd4]/30 mt-4">
            <h4 className="font-bold text-[#0c264d] mb-2 text-sm uppercase tracking-wider">Effective Parenting Strategies</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              <div className="flex gap-2 text-xs text-gray-700"><CheckCircle size={14} className="text-[#2abcd4] shrink-0" /> <span>Use visual schedules for the family</span></div>
              <div className="flex gap-2 text-xs text-gray-700"><CheckCircle size={14} className="text-[#2abcd4] shrink-0" /> <span>Build in flexibility & self-compassion</span></div>
              <div className="flex gap-2 text-xs text-gray-700"><CheckCircle size={14} className="text-[#2abcd4] shrink-0" /> <span>Partner with other supportive adults</span></div>
              <div className="flex gap-2 text-xs text-gray-700"><CheckCircle size={14} className="text-[#2abcd4] shrink-0" /> <span>Model self-advocacy for children</span></div>
              <div className="flex gap-2 text-xs text-gray-700"><CheckCircle size={14} className="text-[#2abcd4] shrink-0" /> <span>Bring creativity & energy to play</span></div>
              <div className="flex gap-2 text-xs text-gray-700"><CheckCircle size={14} className="text-[#2abcd4] shrink-0" /> <span>Seek your own ADHD treatment</span></div>
            </div>
          </div>
        </div>

        {/* Relationships Tab References */}
        <div className="clear-both mt-16 font-spartan">
          <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
          
          <div className="mb-6">
            <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
              Cited Studies & Statistics
            </h4>
            <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
              <p>1. Hoza, B. (2007). Peer functioning in children with ADHD. <i>Journal of Pediatric Psychology</i>.</p>
              <p>2. Johnston, C., et al. (2012). Parenting in adults with attention-deficit/hyperactivity disorder (ADHD). <i>Clinical Psychology Review</i>.</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
              Background Sources
            </h4>
            <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
              <li>Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i> (4th ed.). Guilford Press.</li>
              <li>Chronis-Tuscano, A., et al. (2011). Very early predictors of adolescent depression and suicide attempts in children with attention-deficit/hyperactivity disorder. <i>Archives of General Psychiatry</i>.</li>
              <li>Orlov, M. (2010). <i>The ADHD Effect on Marriage: Understand and Rebuild Your Relationship in Six Steps</i>. Specialty Press.</li>
              <li>Ramsay, J. R., & Rostain, A. L. (2015). <i>The Adult ADHD Tool Kit: Using CBT to Facilitate Coping Inside and Out</i>. Routledge.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  function CareerContent() {
    return (
      <div className="animate-in fade-in duration-300 space-y-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl flex items-center gap-2">
          <Briefcase className="text-[#0c264d]" size={28} />
          Education and Career
        </h2>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#2abcd4] mb-8 flow-root">
          <div className={floatedCardContainer}>
            <ImageWithFallback 
              src="/images/adhd/adhd-living-educ-career-paths.webp"
              alt="Education and career paths with ADHD"
              className={floatedImageClass}
            />
          </div>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Choosing Career Paths</h3>
          <p className="mb-4 text-sm text-gray-700 leading-relaxed">
            ADHD can significantly impact occupational functioning and career success. However, choosing 
            careers that align with ADHD strengths and interests can lead to high levels of success and satisfaction. 
            Consider careers that:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            <div className="bg-[#f0f9ff] p-3 rounded border border-[#2abcd4]/30 text-xs text-gray-700 shadow-sm">Provide variety and novelty rather than repetitive tasks</div>
            <div className="bg-[#f0f9ff] p-3 rounded border border-[#2abcd4]/30 text-xs text-gray-700 shadow-sm">Allow movement and hands-on work</div>
            <div className="bg-[#f0f9ff] p-3 rounded border border-[#2abcd4]/30 text-xs text-gray-700 shadow-sm">Engage creative abilities (art, design, writing, music)</div>
            <div className="bg-[#f0f9ff] p-3 rounded border border-[#2abcd4]/30 text-xs text-gray-700 shadow-sm">Offer high-stimulation environments (emergency services, journalism)</div>
            <div className="bg-[#f0f9ff] p-3 rounded border border-[#2abcd4]/30 text-xs text-gray-700 shadow-sm">Support entrepreneurship (with strong support systems in place)</div>
            <div className="bg-[#f0f9ff] p-3 rounded border border-[#2abcd4]/30 text-xs text-gray-700 shadow-sm">Provide clear deadlines and external accountability</div>
          </div>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg pt-4 border-t border-gray-100">Workplace Strategies</h3>
          <p className="mb-4 text-sm text-gray-700 leading-relaxed">
            Adults with ADHD often experience workplace difficulties including problems with time management, 
            organization, and interpersonal relationships. However, targeted strategies and accommodations 
            can significantly improve functioning:
          </p>
          <ul className="space-y-2">
            <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={18} className="text-[#0A9DC4] shrink-0" /> <span>Request reasonable accommodations through HR if needed</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={18} className="text-[#0A9DC4] shrink-0" /> <span>Use productivity techniques (Pomodoro, time blocking)</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={18} className="text-[#0A9DC4] shrink-0" /> <span>Create an environment that minimizes distractions</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={18} className="text-[#0A9DC4] shrink-0" /> <span>Build in accountability through regular check-ins</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={18} className="text-[#0A9DC4] shrink-0" /> <span>Play to your strengths and delegate or outsource weaker areas</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={18} className="text-[#0A9DC4] shrink-0" /> <span>Consider disclosing ADHD to access formal supports</span></li>
          </ul>
        </div>

        {/* Education & Career Tab References */}
        <div className="clear-both mt-16 font-spartan">
          <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
              Background Sources
            </h4>
            <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
              <li>Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i> (4th ed.). Guilford Press.</li>
              <li>Biederman, J., et al. (2005). Functional impairments in adults with self-reports of diagnosed ADHD: A controlled study of 1001 adults in the community. <i>The Journal of Clinical Psychiatry</i>.</li>
              <li>DuPaul, G. J., & Stoner, G. (2014). <i>ADHD in the Schools: Assessment and Intervention Strategies</i> (3rd ed.). Guilford Press.</li>
              <li>Nadeau, K. G. (2005). Career choices and workplace challenges for individuals with ADHD. <i>Journal of Clinical Psychology</i>.</li>
              <li>Ramsay, J. R., & Rostain, A. L. (2015). <i>The Adult ADHD Tool Kit: Using CBT to Facilitate Coping Inside and Out</i>. Routledge.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  function MentalHealthContent() {
    return (
      <div className="animate-in fade-in duration-300 space-y-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl flex items-center gap-2">
          <Shield className="text-[#ff6b6b]" size={28} />
          Managing Stigma and Mental Health
        </h2>
        
        <div className="bg-[#fff9e6] p-6 rounded-lg shadow-sm border border-[#ffd166]/30 flow-root mb-8">
          <div className={floatedCardContainer}>
            <ImageWithFallback 
              src="/images/adhd/adhd-living-stigma-four-faces.webp"
              alt="Managing stigma and advocating for ADHD awareness"
              className={floatedImageClass}
            />
          </div>

          <p className="mb-6 text-sm text-gray-700 leading-relaxed">
            Stigma surrounding ADHD remains a significant barrier to diagnosis, treatment, and self-acceptance. 
            Public misconceptions about ADHD are common and can lead to internalized shame and reluctance to seek help.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Common Myths</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex gap-2 text-sm text-gray-700"><span className="text-[#d97706] font-bold mt-0.5">•</span> <span>"ADHD isn't real" — ADHD is a well-researched neurological condition with extensive scientific support</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><span className="text-[#d97706] font-bold mt-0.5">•</span> <span>"ADHD is just laziness" — ADHD involves genuine neurobiological differences affecting executive function</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><span className="text-[#d97706] font-bold mt-0.5">•</span> <span>"Only children have ADHD" — ADHD is a lifelong condition affecting millions of adults</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><span className="text-[#d97706] font-bold mt-0.5">•</span> <span>"Medications are dangerous" — Properly prescribed ADHD medication is safe and effective</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><span className="text-[#d97706] font-bold mt-0.5">•</span> <span>"People with ADHD just need to try harder" — Effort alone cannot overcome neurobiological differences</span></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg pt-4 border-t border-[#ffd166]/50">Self-Advocacy</h3>
          <p className="mb-4 text-sm text-gray-700 leading-relaxed">
            Effective self-advocacy is crucial for accessing appropriate supports and accommodations.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded border border-[#ffd166]/50 text-xs text-gray-700 shadow-sm">Educate yourself about ADHD and your legal rights</div>
            <div className="bg-white p-3 rounded border border-[#ffd166]/50 text-xs text-gray-700 shadow-sm">Decide when and how to disclose your diagnosis</div>
            <div className="bg-white p-3 rounded border border-[#ffd166]/50 text-xs text-gray-700 shadow-sm">Request accommodations when needed in education and employment</div>
            <div className="bg-white p-3 rounded border border-[#ffd166]/50 text-xs text-gray-700 shadow-sm">Connect with ADHD communities for support and validation</div>
            <div className="bg-white p-3 rounded border border-[#ffd166]/50 text-xs text-gray-700 shadow-sm">Challenge stigma and educate others when appropriate</div>
          </div>
        </div>

        <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 flow-root">
          <div className={floatedCardContainer}>
            <ImageWithFallback 
              src="/images/adhd/adhd-living-stigma-self-esteem.webp"
              alt="Building self-esteem with ADHD"
              className={floatedImageClass}
            />
          </div>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Co-occurring Conditions</h3>
          <p className="mb-4 text-sm text-gray-700 leading-relaxed">
            ADHD frequently co-occurs with other mental health conditions, with research showing that approximately 
            two-thirds of individuals with ADHD have at least one comorbid psychiatric disorder:<sup>1</sup>
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-white px-3 py-1.5 rounded-full border border-[#2abcd4] text-xs font-bold text-[#0c264d] shadow-sm">Anxiety (25-40%)</span>
            <span className="bg-white px-3 py-1.5 rounded-full border border-[#2abcd4] text-xs font-bold text-[#0c264d] shadow-sm">Depression (18-30%)</span>
            <span className="bg-white px-3 py-1.5 rounded-full border border-[#2abcd4] text-xs font-bold text-[#0c264d] shadow-sm">Substance Use (15-20%)</span>
            <span className="bg-white px-3 py-1.5 rounded-full border border-[#2abcd4] text-xs font-bold text-[#0c264d] shadow-sm">Sleep Disorders (25-55%)</span>
            <span className="bg-white px-3 py-1.5 rounded-full border border-[#2abcd4] text-xs font-bold text-[#0c264d] shadow-sm">Emotional Dysregulation</span>
          </div>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg pt-4 border-t border-[#0A9DC4]/20">Building Self-Esteem</h3>
          <p className="mb-4 text-sm text-gray-700 leading-relaxed">
            Growing up with ADHD often involves repeated experiences of failure, criticism, and negative feedback, which 
            can significantly impact self-esteem. Cognitive strategies can help manage ADHD-related challenges:
          </p>
          <ul className="space-y-2">
            <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={18} className="text-[#0A9DC4] shrink-0" /> <span>Recognize and celebrate your accomplishments, both large and small</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={18} className="text-[#0A9DC4] shrink-0" /> <span>Reframe ADHD as a difference rather than a deficit</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={18} className="text-[#0A9DC4] shrink-0" /> <span>Challenge negative self-talk and internalized shame</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={18} className="text-[#0A9DC4] shrink-0" /> <span>Remember that your worth is not determined by productivity</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><CheckCircle size={18} className="text-[#0A9DC4] shrink-0" /> <span>Practice self-compassion and acknowledge the effort you put in</span></li>
          </ul>
        </div>

        {/* Mental Health Tab References */}
        <div className="clear-both mt-16 font-spartan">
          <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
          
          <div className="mb-6">
            <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
              Cited Studies & Statistics
            </h4>
            <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
              <p>1. Kessler, R. C., et al. (2006). The prevalence and correlates of adult ADHD in the United States: Results from the National Comorbidity Survey Replication. <i>American Journal of Psychiatry</i>.</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
              Background Sources
            </h4>
            <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
              <li>Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i> (4th ed.). Guilford Press.</li>
              <li>Hinshaw, S. P. (2018). Attention deficit hyperactivity disorder (ADHD): Controversy, developmental mechanisms, and multiple levels of analysis. <i>Annual Review of Clinical Psychology</i>.</li>
              <li>Ramsay, J. R., & Rostain, A. L. (2008). <i>Cognitive-Behavioral Therapy for Adult ADHD: An Integrative Psychosocial and Medical Approach</i>. Routledge.</li>
              <li>Safren, S. A., et al. (2005). Cognitive-behavioral therapy for ADHD in medication-treated adults with continued symptoms. <i>Behaviour Research and Therapy</i>.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  function CommunityContent() {
    return (
      <div className="animate-in fade-in duration-300 space-y-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl flex items-center gap-2">
          <Users className="text-[#10b981]" size={28} />
          Community and Future
        </h2>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#10b981] mb-8 flow-root">
          <div className={floatedCardContainer}>
            <ImageWithFallback 
              src="/images/adhd/adhd-living-community-hands.webp"
              alt="Community support and connection - hands together"
              className={floatedImageClass}
            />
          </div>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Finding Community and Support</h3>
          <p className="mb-4 text-sm text-gray-700 leading-relaxed">
            Connecting with others who understand ADHD can be invaluable for reducing isolation, gaining practical strategies, 
            and building self-acceptance. Social support is associated with better outcomes and quality of life.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex gap-2 text-sm text-gray-700"><span className="text-[#10b981] font-bold mt-0.5">•</span> <span><strong>Support groups:</strong> Local or online ADHD support groups provide connection</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><span className="text-[#10b981] font-bold mt-0.5">•</span> <span><strong>Online communities:</strong> Forums, social media groups (e.g., r/ADHD, ADDitude)</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><span className="text-[#10b981] font-bold mt-0.5">•</span> <span><strong>Organizations:</strong> CHADD, ADDA (Attention Deficit Disorder Association)</span></li>
            <li className="flex gap-2 text-sm text-gray-700"><span className="text-[#10b981] font-bold mt-0.5">•</span> <span><strong>Coaching:</strong> ADHD coaches provide accountability and strategy development</span></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg pt-4 border-t border-gray-100">Celebrating Neurodiversity</h3>
          <p className="mb-4 text-sm text-gray-700 leading-relaxed bg-green-50 p-4 rounded border border-green-100">
            Many individuals embrace the neurodiversity paradigm, which views ADHD as a natural variation 
            in human neurology rather than purely a disorder or deficit. This perspective honors both challenges and 
            strengths while advocating for acceptance, accommodation, and celebrating diverse ways of thinking. 
          </p>
        </div>

        <div className="bg-[#fff9e6] p-6 rounded-lg shadow-sm border border-[#ffd166]/30 flow-root">
          <div className={floatedCardContainer}>
            <ImageWithFallback 
              src="/images/adhd/adhd-living-future-girl-cheers.webp"
              alt="Looking forward with optimism - celebrating ADHD journey"
              className={floatedImageClass}
            />
          </div>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Looking Forward</h3>
          <p className="mb-4 text-sm text-gray-700 leading-relaxed">
            Living with ADHD is a journey of self-discovery, learning, and growth. As understanding of your 
            own ADHD deepens and you develop systems that work for you, life often becomes more manageable 
            and fulfilling. Many people with ADHD report that while they wouldn't necessarily choose to have 
            ADHD, they also wouldn't want to give up the unique perspective and strengths it brings.
          </p>
          <p className="mb-4 text-sm text-gray-700 leading-relaxed">
            Remember that you are not alone. Millions of people live successful, meaningful lives with ADHD. 
            With the right support, strategies, and self-understanding, you can build a life that works for 
            your unique brain.
          </p>
        </div>

        <div className="mt-8 p-5 bg-[#ffd166]/20 border-l-4 border-[#ffd166] rounded-lg shadow-sm">
          <p className="text-sm text-[#0c264d] leading-relaxed">
            <strong>Remember:</strong> Living well with ADHD looks different for everyone. Be patient with 
            yourself as you discover what works for you, and don't hesitate to seek support from healthcare 
            providers, coaches, therapists, and community when you need it.
          </p>
        </div>

        {/* Community Tab References */}
        <div className="clear-both mt-16 font-spartan">
          <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
              Background Sources
            </h4>
            <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
              <li>Armstrong, T. (2010). <i>Neurodiversity: Discovering the Extraordinary Gifts of Autism, ADHD, Dyslexia, and Other Brain Differences</i>. Da Capo Lifelong Books.</li>
              <li>Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i> (4th ed.). Guilford Press.</li>
              <li>CHADD (Children and Adults with Attention-Deficit/Hyperactivity Disorder). <i>National Resource Center on ADHD</i>.</li>
              <li>Hallowell, E. M., & Ratey, J. J. (2011). <i>Driven to Distraction: Recognizing and Coping with Attention Deficit Disorder</i> (Rev. ed.). Anchor Books.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Living with ADHD
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-lg">←</span>
          All About ADHD
        </button>
      </div>

      {/* Mobile button - shows only on small screens below title */}
      <button 
        onClick={() => setCurrentArticle?.('adhd')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-6 shadow-sm shrink-0"
      >
        <span className="text-lg">←</span>
        All About ADHD
      </button>

      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger value="overview" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Overview & Strengths
          </TabsTrigger>
          <TabsTrigger value="daily-life" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Daily Life & Routines
          </TabsTrigger>
          <TabsTrigger value="relationships" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Relationships
          </TabsTrigger>
          <TabsTrigger value="career" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Education & Career
          </TabsTrigger>
          <TabsTrigger value="mental-health" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Mental Health & Stigma
          </TabsTrigger>
          <TabsTrigger value="community" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Community & Future
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-8">
          {OverviewContent()}
        </TabsContent>

        {/* Daily Life Tab */}
        <TabsContent value="daily-life" className="space-y-8">
          {DailyLifeContent()}
        </TabsContent>

        {/* Relationships Tab */}
        <TabsContent value="relationships" className="space-y-8">
          {RelationshipsContent()}
        </TabsContent>

        {/* Career Tab */}
        <TabsContent value="career" className="space-y-8">
          {CareerContent()}
        </TabsContent>

        {/* Mental Health Tab */}
        <TabsContent value="mental-health" className="space-y-8">
          {MentalHealthContent()}
        </TabsContent>

        {/* Community Tab */}
        <TabsContent value="community" className="space-y-8">
          {CommunityContent()}
        </TabsContent>
      </Tabs>

      <div className="flex justify-end my-8 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
        >
          <span className="text-lg">←</span>
          All About ADHD
        </button>
      </div>
    </article>
  );
}