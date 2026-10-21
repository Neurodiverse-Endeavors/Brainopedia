import { useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Activity, Clock, ShieldAlert, Heart, Users, Globe, GraduationCap, BookOpen, Brain, Compass, Sun } from 'lucide-react';

interface PANDASLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function PANDASLiving({ setCurrentArticle, initialTab }: PANDASLivingProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'course';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          Living with PANDAS/PANS
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('pandas')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About PANDAS
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('pandas')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About PANDAS
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => handleTabChange('course')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'course'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          The Clinical Course
        </button>
        <button
          onClick={() => handleTabChange('family')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'family'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Family & Community
        </button>
        <button
          onClick={() => handleTabChange('school')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'school'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          School & Resilience
        </button>
      </div>

      {/* ==========================================
          TAB 1: THE CLINICAL COURSE
      ========================================== */}
      {activeTab === 'course' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Course Card (Cyan) */}
          <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Understanding the Course</h2>
            
            <ImageWithFallback 
              src="/images/pandas/pandas-living-course-1.webp"
              alt="Visual demonstrating the clinical course and healing timeline"
              className="block mx-auto w-64 max-w-full h-auto rounded-lg border border-[#2abcd4] mb-6 shadow-sm"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Living with PANDAS is routinely described as an emotional rollercoaster for both the child and the family. Because severe symptoms can disappear and then suddenly return with a new, minor infection, daily life requires a high degree of flexibility, hyper-vigilance, and profound resilience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                {/* SLATE BADGE */}
                <div className="w-10 h-10 rounded-lg bg-[#576d8e] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">The Flare</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Recognizing the absolute earliest signs of an impending flare (such as sharply increased irritability, dilated pupils, or a sudden change in handwriting) allows for significantly faster medical intervention and support.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                {/* NAVY BADGE */}
                <div className="w-10 h-10 rounded-lg bg-[#0c264d] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">Healing Time</h3>
                <p className="text-xs text-slate-700 leading-relaxed">Even after the underlying infection is completely cleared by antibiotics, it takes time for the brain inflammation to physically subside. "Baseline" functioning often does not return immediately.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
                {/* NEW BRIGHT CYAN BADGE */}
                <div className="w-10 h-10 rounded-lg bg-[#0A9DC4] text-white flex items-center justify-center shrink-0 shadow-sm mb-3">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 w-full border-b border-[#2abcd4] border-opacity-20 pb-2">The Puberty Marker</h3>
                <p className="text-xs text-slate-700 leading-relaxed">The clinical course varies drastically. While some children experience chronic sensitivity, in many cases, the specific autoimmune reaction completely resolves once the immune system and brain fully mature after puberty.</p>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: FAMILY & COMMUNITY
      ========================================== */}
      {activeTab === 'family' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Family Card (Navy) - DOUBLE RINGS */}
          <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Family Impact & Support</h2>
            
            <ImageWithFallback 
              src="/images/pandas/pandas-living-family-1.webp"
              alt="Family support and recovery illustration"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#0c264d]"
            />

            <p className="text-sm text-slate-700 leading-relaxed text-center mb-6 max-w-3xl mx-auto">
              PANDAS is universally described as a "family diagnosis." The psychological stress of witnessing an "overnight" change in a child's personality is immense, impacting every member of the household.
            </p>

            <div className="space-y-4 max-w-4xl mx-auto">
              
              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#ffd166] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#ffd166] mt-1 ml-1">
                  <Heart className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Caregiver Fatigue</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Because the condition remains controversial in some medical circles, parents are frequently forced to become intensive researchers and fierce advocates simply to get their child correctly diagnosed and treated.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#576d8e] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-white flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#576d8e] mt-1 ml-1">
                  <Users className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Sibling Support</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Siblings are often deeply confused, frightened, or feel neglected due to the sudden, severe changes in their brother or sister and the massive amount of parental attention required during a flare.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#2abcd4] opacity-50"></div>
                <div className="w-12 h-12 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center font-bold shrink-0 shadow-md ring-2 ring-offset-2 ring-[#2abcd4] mt-1 ml-1">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="pr-4">
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1 uppercase tracking-wide">Finding Community</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">Connecting with other PANDAS families through dedicated advocacy groups like the PANDAS Network or ASPIRE provides an absolutely vital, grounding sense of validation and "not being alone."</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: SCHOOL & RESILIENCE
      ========================================== */}
      {activeTab === 'school' && (
        <div className="space-y-8 animate-fadeIn">

          {/* School Card (Yellow) - 3D Accent Borders */}
          <div className="bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">School Navigation</h2>
            
            <ImageWithFallback 
              src="/images/pandas/pandas-living-school-1.webp"
              alt="Child receiving accommodations in an educational setting"
              className="block mx-auto w-64 max-w-full h-auto mb-8 rounded-lg shadow-sm border border-[#ffd166]"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Maintaining academic progress during flares is a profound challenge. Because the symptoms present psychiatrically, it is critical that parents work closely with schools to formalize accommodations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-8">
              
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#576d8e]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Brain className="w-4 h-4 text-[#576d8e]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Educate the Staff</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Explicitly explaining to teachers and administration that the child's behaviors are strictly medical and neurological—not willful defiance or poor parenting.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#0c264d]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <Clock className="w-4 h-4 text-[#0c264d]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Flexible Attendance</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Structuring 504 plans or IEPs that formally allow for "rest days" or significantly shorter school days during an active, exhausting immune flare.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2abcd4]"></div>
                <div className="pl-3 py-1">
                  <div className="flex items-center gap-2 mb-2 border-b border-gray-100 pb-2">
                    <BookOpen className="w-4 h-4 text-[#2abcd4]" />
                    <h3 className="text-[#0c264d] font-bold text-sm">Reduced Workload</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">Directly modifying assignments and homework expectations to actively account for the massive cognitive fatigue caused by brain inflammation.</p>
                </div>
              </div>

            </div>

            <div className="bg-white border-l-4 border-[#2abcd4] p-5 rounded-r-xl max-w-4xl mx-auto shadow-sm">
              <h3 className="text-[#0c264d] font-bold text-sm mb-2 flex items-center gap-2">
                <Sun className="w-4 h-4 text-[#2abcd4]" /> 
                Building Resilience
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Living well with PANDAS involves intentionally celebrating the "good days" while maintaining a rigorous, clinical toolkit for the flares. Over time, many children who navigate and recover from PANDAS develop incredible, deep-seated resilience and a profound understanding of their own health and neurological boundaries.
              </p>
            </div>
          </div>

        </div>
      )}

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Calaprice, D., et al. (2017). "Survey of PANS characteristics and course." <i>JCAP</i>.</li>
            <li>Swedo, S. E., et al. (2017). "Overview of treatment of PANS." <i>JCAP</i>.</li>
            <li>Pavone, P., et al. (2006). "Autoimmune neuropsychiatric disorders." <i>Journal of Child Neurology</i>.</li>
            <li>Bernstein, G. A., et al. (2010). "Comparison of PANDAS and childhood OCD." <i>JCAP</i>.</li>
            <li>Frankovich, J., et al. (2015). "Multidisciplinary clinic for PANS."</li>
            <li>Swedo, S. E., et al. (1998). "PANDAS: Clinical description."</li>
            <li>PANDAS Network. (2020). "Parent Support Resources."</li>
            <li>ASPIRE (Alliance for PANS/PANDAS Enlightenment). (2021). "Living with PANS."</li>
            <li>Brandi, M. L., et al. (2012). "Deterioration of handwriting."</li>
            <li>Thienemann, M., et al. (2017). "School interventions for PANS."</li>
            <li>Petrenko, C. L. (2015). "Building resilience in individuals with neurodevelopmental disorders."</li>
          </ul>
        </div>
      </div>

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('pandas')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About PANDAS
        </button>
      </div>

    </article>
  );
}