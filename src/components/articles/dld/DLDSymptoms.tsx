import { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Baby, MessageSquare, Ear, Users, BookOpen, Brain, FileText, Search, Activity, HelpCircle } from 'lucide-react';

interface DLDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DLDSymptoms({ setCurrentArticle, initialTab }: DLDSymptomsProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'early');

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* HEADER & DESKTOP BACK BUTTON */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl text-[#0c264d] font-normal">
          DLD: Symptoms & Characteristics
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('dld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-xl">←</span>
          All About DLD
        </button>
      </div>

      {/* MOBILE BACK BUTTON */}
      <button 
        onClick={() => setCurrentArticle?.('dld')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About DLD
      </button>

      {/* TAB NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both">
        <button
          onClick={() => setActiveTab('early')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'early'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Early Signs & Grammar
        </button>
        <button
          onClick={() => setActiveTab('social')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'social'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Receptive & Social
        </button>
        <button
          onClick={() => setActiveTab('academic')}
          className={`px-6 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
            activeTab === 'academic'
              ? 'bg-[#0A9DC4] text-white'
              : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
          }`}
        >
          Academic & Lifespan
        </button>
      </div>

      {/* ==========================================
          TAB 1: EARLY SIGNS & GRAMMAR
      ========================================== */}
      {activeTab === 'early' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Early Language Card (Cyan) - Uses Float Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Early Language Development</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-symptoms-early.webp"
              alt="Toddler attempting to communicate"
              className="w-56 h-auto rounded-md border border-[#2abcd4] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Developmental Language Disorder manifests through difficulties across multiple domains of language, including grammar, vocabulary, understanding, and expression. Symptoms vary significantly among individuals but typically emerge early in childhood and persist across development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Baby className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Delayed Milestones</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li><strong>First words:</strong> May appear late (after 18-24 months).</li>
                    <li><strong>Combinations:</strong> Delayed two-word phrases (after 2.5-3 years).</li>
                    <li><strong>Vocabulary:</strong> Noticeably slower acquisition of new words compared to peers.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex items-start gap-3">
                <Search className="text-[#0A9DC4] w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Early Warning Signs (Ages 2-3)</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Not combining words by age 2.</li>
                    <li>Difficulty understanding simple instructions.</li>
                    <li>Frequent, intense communication frustration leading to behavioral outbursts.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Grammar & Vocabulary Card (Yellow) - Uses Hero Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Grammar & Vocabulary Challenges</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-symptoms-grammar-hero.webp"
              alt="Abstract representation of searching for the right words and grammar"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-yellow-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <FileText className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Grammatical Morphemes</h3>
                </div>
                <p className="text-xs text-slate-700 mb-3">Children with DLD have severe difficulty with small grammatical markers:</p>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li><strong>Past tense:</strong> Saying "walk" instead of "walked."</li>
                  <li><strong>Third person:</strong> Saying "He walk" instead of "He walks."</li>
                  <li><strong>Auxiliary verbs:</strong> Saying "He going" instead of "He is going."</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <Activity className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Sentence Structure</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Using very short, simple sentences when peers are using complex ones.</li>
                  <li>Frequent word order errors or sentence fragments.</li>
                  <li>Question formation errors (e.g., "What you doing?" instead of "What are you doing?").</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <BookOpen className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Limited Vocabulary</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Knowing significantly fewer words than same-age peers.</li>
                  <li>Requiring far more exposures to learn and retain a new word.</li>
                  <li>Highly concrete language; struggling with abstract or figurative concepts.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#ffd166]">
                <div className="flex items-center gap-2 mb-3 border-b border-[#ffd166] pb-2">
                  <HelpCircle className="text-[#d4a017] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Word-Finding Problems</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li><strong>Tip-of-the-tongue:</strong> Knowing a word but being unable to retrieve it.</li>
                  <li><strong>Circumlocution:</strong> Talking around a word ("that thing you eat with").</li>
                  <li>Frequent pauses, hesitations, and using general placeholder words like "thing" or "stuff."</li>
                </ul>
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
                <li>Leonard, L. B. (2014). Children with specific language impairment. <i>MIT Press</i>.</li>
                <li>Rice, M. L. (2013). Language growth and genetics of specific language impairment. <i>International Journal of Speech-Language Pathology</i>. https://doi.org/10.3109/17549507.2013.791465</li>
                <li>Rice, M. L., Taylor, C. L., & Zubrick, S. R. (2008). Language outcomes of 7-year-old children with or without a history of late language emergence at 24 months. <i>Journal of Speech, Language, and Hearing Research</i>. https://doi.org/10.1044/1092-4388(2008/029)</li>
                <li>McGregor, K. K., Oleson, J., Bahnsen, A., & Duff, D. (2013). Children with developmental language impairment have vocabulary deficits characterized by limited breadth and depth. <i>International Journal of Language & Communication Disorders</i>. https://doi.org/10.1111/1460-6984.12015</li>
                <li>Rice, M. L., & Wexler, K. (1996). Toward tense as a clinical marker of specific language impairment in English-speaking children. <i>Journal of Speech and Hearing Research</i>. https://doi.org/10.1044/jshr.3906.1239</li>
                <li>Rice, M. L., Wexler, K., & Hershberger, S. (1998). Tense over time: The longitudinal course of tense acquisition in children with specific language impairment. <i>Journal of Speech, Language, and Hearing Research</i>. https://doi.org/10.1044/jslhr.4106.1412</li>
                <li>Dockrell, J. E., Messer, D., George, R., & Wilson, G. (1998). Children with word-finding difficulties—prevalence, presentation and naming problems. <i>International Journal of Language & Communication Disorders</i>. https://doi.org/10.1080/136828298247731</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 2: RECEPTIVE & SOCIAL
      ========================================== */}
      {activeTab === 'social' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Receptive Language Card (Slate) - Uses Float Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Receptive Language & Discourse</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-symptoms-receptive.webp"
              alt="Child listening but looking overwhelmed by complex instructions"
              className="w-56 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              DLD affects not only how a child speaks, but how they interpret the language of others. Receptive language difficulties are often "invisible" and can easily be mistaken for defiance or lack of attention.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <Ear className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Understanding Speech</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Difficulty following multi-step directions.</li>
                    <li>Needing significantly more time to process incoming spoken language.</li>
                    <li>Struggling to comprehend long or grammatically complex sentences.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
                <div className="bg-blue-50 p-2 rounded-lg border border-[#0c264d] border-opacity-20 shrink-0">
                  <MessageSquare className="text-[#0c264d] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Narrative Difficulties</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Story structure lacks a clear beginning, middle, and end.</li>
                    <li>Telling events out of sequence or leaving out critical details.</li>
                    <li>Poor cohesion—difficulty connecting ideas smoothly.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Social Communication Card (Cyan) - Uses Hero Image */}
          <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Social Communication Symptoms</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-symptoms-social-hero.webp"
              alt="Group of children talking where one child struggles to enter the fast-paced conversation"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-cyan-100"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Language is the currency of social interaction. When language processing is impaired, the child's ability to seamlessly join groups, negotiate, and banter is severely impacted.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-3 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Brain className="text-[#0A9DC4] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Pragmatic Language</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li><strong>Social Context:</strong> Difficulty using language appropriately for different social settings.</li>
                  <li><strong>Inferencing:</strong> Struggling to understand implied meanings or subtle hints.</li>
                  <li><strong>Perspective:</strong> Difficulty considering the listener's background knowledge before speaking.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30">
                <div className="flex items-center gap-2 mb-3 border-b border-[#2abcd4] border-opacity-20 pb-2">
                  <Users className="text-[#0A9DC4] w-5 h-5" />
                  <h3 className="text-[#0c264d] font-bold text-sm">Peer Interactions</h3>
                </div>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-2">
                  <li>Difficulty taking turns or maintaining the topic in fast-paced conversations.</li>
                  <li>Misunderstanding rapid-fire jokes, teasing, or sarcasm.</li>
                  <li>Frequent social withdrawal due to the exhaustion of trying to keep up.</li>
                </ul>
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
                <li>Bishop, D. V. M. (1997). Uncommon understanding: Development and disorders of language comprehension in children. <i>Psychology Press</i>.</li>
                <li>Leonard, L. B., Weismer, S. E., Miller, C. A., Francis, D. J., Tomblin, J. B., & Kail, R. V. (2007). Speed of processing, working memory, and language impairment in children. <i>Journal of Speech, Language, and Hearing Research</i>. https://doi.org/10.1044/1092-4388(2007/030)</li>
                <li>Norbury, C. F., & Bishop, D. V. M. (2003). Narrative skills of children with communication impairments. <i>International Journal of Language & Communication Disorders</i>. https://doi.org/10.1080/1368282031000121602</li>
                <li>Conti-Ramsden, G., & Botting, N. (2004). Social difficulties and victimization in children with SLI at 11 years of age. <i>Journal of Speech, Language, and Hearing Research</i>. https://doi.org/10.1044/1092-4388(2004/013)</li>
                <li>Norbury, C. F. (2005). The relationship between theory of mind and metaphor: Evidence from children with language impairment and autistic spectrum disorder. <i>British Journal of Developmental Psychology</i>. https://doi.org/10.1348/026151005X26732</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          TAB 3: ACADEMIC & LIFESPAN
      ========================================== */}
      {activeTab === 'academic' && (
        <div className="space-y-8 animate-fadeIn">

          {/* Academic Card (Yellow) - Uses Float Image */}
          <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm clear-both">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Academic & Speech Symptoms</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-symptoms-academic.webp"
              alt="Student struggling with complex textbook vocabulary"
              className="w-56 h-auto rounded-md border border-[#ffd166] float-right ml-6 mb-4 shadow-sm hidden sm:block"
            />
            
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Because reading and writing are fundamentally language tasks, DLD inevitably impacts literacy and academic achievement. Furthermore, DLD frequently co-occurs with distinct speech-sound processing issues.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 clear-both">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <BookOpen className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Literacy & Vocabulary</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Severe difficulty with reading comprehension and spelling patterns.</li>
                    <li>Making the same grammatical errors in writing as they do in speech.</li>
                    <li>Struggling to learn abstract, subject-specific academic vocabulary.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] border-opacity-50 flex items-start gap-4">
                <div className="bg-[#fffbeb] p-2 rounded-lg border border-[#ffd166] border-opacity-30 shrink-0">
                  <Activity className="text-[#d4a017] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0c264d] font-bold text-sm mb-1">Phonological Awareness</h3>
                  <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                    <li>Difficulty recognizing or producing rhymes.</li>
                    <li>Trouble manipulating sounds (e.g., deleting a sound to make a new word).</li>
                    <li>Speech may be less clear due to co-occurring speech sound disorders.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Lifespan Progression Card (Slate) - Uses Hero Image */}
          <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
            <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">Symptoms by Age & Variability</h2>
            
            <ImageWithFallback 
              src="/images/dld/dld-symptoms-lifespan-hero.webp"
              alt="Timeline of DLD symptoms evolving from preschool into adulthood"
              className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-gray-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Preschool (3-5)</h3>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                  <li>Limited vocabulary and short, simple sentences.</li>
                  <li>Frequent grammatical errors and trouble following simple directions.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">School Age (6-12)</h3>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                  <li>Persistent grammatical difficulties.</li>
                  <li>Reading, writing, and peer-social challenges emerge strongly.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Adolescence (13-18)</h3>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                  <li>Language issues may become less obvious but still impact complex text comprehension.</li>
                  <li>Written expression deficits are prominent.</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-[#0c264d] font-bold text-sm mb-2 border-b border-gray-100 pb-2">Adulthood</h3>
                <ul className="list-disc ml-4 text-xs text-slate-700 space-y-1">
                  <li>Subtle but persistent difficulties in fast-paced education or employment settings.</li>
                  <li>Heavy reliance on learned compensatory strategies.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#0c264d] border-opacity-20 max-w-4xl mx-auto">
              <h3 className="text-[#0c264d] font-bold mb-3 text-sm flex items-center gap-2">
                <Brain className="w-5 h-5 text-[#2abcd4]" /> Individual Variability
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                DLD is a highly heterogeneous condition; no two individuals present exactly alike. Severity ranges from mild to severe, and profiles can be primarily expressive or heavily receptive. Furthermore, symptoms will naturally evolve across development as the individual learns sophisticated compensatory strategies to work around their linguistic roadblocks.
              </p>
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
                <li>Catts, H. W., Fey, M. E., Tomblin, J. B., & Zhang, X. (2002). A longitudinal investigation of reading outcomes in children with language impairments. <i>Journal of Speech, Language, and Hearing Research</i>. https://doi.org/10.1044/1092-4388(2002/093)</li>
                <li>Conti-Ramsden, G., Durkin, K., Simkin, Z., & Knox, E. (2009). Specific language impairment and school outcomes. I: Identifying and explaining variability at the end of compulsory education. <i>International Journal of Language & Communication Disorders</i>. https://doi.org/10.1080/13682820801921601</li>
                <li>Shriberg, L. D., Tomblin, J. B., & McSweeny, J. L. (1999). Prevalence of speech delay in 6-year-old children and comorbidity with language impairment. <i>Journal of Speech, Language, and Hearing Research</i>. https://doi.org/10.1044/jslhr.4206.1461</li>
                <li>Rice, M. L., Taylor, C. L., & Zubrick, S. R. (2008). Language outcomes of 7-year-old children with or without a history of late language emergence at 24 months. <i>Journal of Speech, Language, and Hearing Research</i>. https://doi.org/10.1044/1092-4388(2008/029)</li>
                <li>Rice, M. L., Wexler, K., & Hershberger, S. (1998). Tense over time: The longitudinal course of tense acquisition in children with specific language impairment. <i>Journal of Speech, Language, and Hearing Research</i>. https://doi.org/10.1044/jslhr.4106.1412</li>
                <li>Clegg, J., Hollis, C., Mawhood, L., & Rutter, M. (2005). Developmental language disorders—a follow-up in later adult life. <i>Journal of Child Psychology and Psychiatry</i>. https://doi.org/10.1111/j.1469-7610.2004.00342.x</li>
                <li>Leonard, L. B. (2014). Children with specific language impairment. <i>MIT Press</i>.</li>
              </ul>
            </div>
          </div>

        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="flex justify-end my-8 w-full clear-both">
        <button 
          onClick={() => setCurrentArticle?.('dld')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About DLD
        </button>
      </div>

    </article>
  );
}