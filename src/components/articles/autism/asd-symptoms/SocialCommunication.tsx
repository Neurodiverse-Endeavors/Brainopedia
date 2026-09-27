import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

/* ─── THE GUEST LIST (Interface) ─── */
interface SocialCommunicationProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function SocialCommunication({ setCurrentArticle }: SocialCommunicationProps) {
  return (
    <article className="space-y-6 max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      <div className="bg-[#f0f9ff] p-4 sm:p-8 rounded-lg">
        <h2 className="text-[#0c264d] font-bold mb-8 text-2xl sm:text-3xl text-center">Social Communication & Interaction</h2>

{/* --- NEW VIDEO ADDED AND CENTERED --- */}
        <video 
          autoPlay 
          muted 
          playsInline
          poster="/images/autism/autism-symptoms-SCtab-social-video.webp"
          className="block mx-auto mb-8 w-56 sm:w-64 h-auto rounded-xl shadow-lg border-4 border-[#2abcd4] object-cover"
          aria-label="Three people sitting on a bench interacting"
        >
          <source 
            src="/images/autism/autism-symptoms-SCtab-social-video.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>

        <p className="mb-10 text-center leading-relaxed text-[#0c264d] text-lg max-w-3xl mx-auto">
          Autistic individuals experience persistent differences across social-emotional reciprocity, nonverbal 
          communication, and developing and maintaining relationships. These differences are present 
          from early childhood and affect functioning across contexts.
        </p>

        {/* --- SECTION 1: Social-Emotional Reciprocity --- */}
        <div className="bg-white p-6 rounded-xl border-t-4 border-[#0c264d] shadow-sm mb-10">
          <h3 className="text-[#0c264d] font-bold mb-3 text-xl text-center sm:text-left">Social-Emotional Reciprocity</h3>
          <p className="mb-6 text-sm text-slate-700 text-center sm:text-left">
            Social-emotional reciprocity refers to the back-and-forth flow of social interaction. Autistic people may experience challenges with:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#f8fafc] p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#2abcd4]">
              <div className="font-bold text-[#0c264d] mb-2">Conversation Flow</div>
              <div className="text-sm text-slate-600">Difficulty with turn-taking in conversation, knowing when to speak or listen, or maintaining topic relevance.</div>
            </div>
            
            <div className="bg-[#f8fafc] p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#2abcd4]">
              <div className="font-bold text-[#0c264d] mb-2">Sharing Interests</div>
              <div className="text-sm text-slate-600">Limited sharing of interests, emotions, or achievements with others in standard conversational formats.</div>
            </div>
            
            <div className="bg-[#f8fafc] p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#2abcd4]">
              <div className="font-bold text-[#0c264d] mb-2">Emotional Expression</div>
              <div className="text-sm text-slate-600">Differences in expressing or responding to emotions; may have difficulty intuitively reading others' emotional states.</div>
            </div>
            
            <div className="bg-[#f8fafc] p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#2abcd4]">
              <div className="font-bold text-[#0c264d] mb-2">Social Initiation</div>
              <div className="text-sm text-slate-600">Reduced initiation of neurotypical social interactions; may appear uninterested in others or prefer solitary activities.</div>
            </div>
            
            <div className="bg-[#f8fafc] p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#2abcd4] md:col-span-2">
              <div className="font-bold text-[#0c264d] mb-2">Response to Social Approaches</div>
              <div className="text-sm text-slate-600">Unusual responses when others initiate interaction; may not respond to their name, ignore social bids, or respond in unexpected ways.</div>
            </div>
          </div>
        </div>

        {/* --- EXISTING GRAPHIC CENTERED HERE --- */}
        <div className="my-10">
          <ImageWithFallback
            src="/images/autism/autism-symptoms-SCtab-2facingfaces.webp"
            alt="Two faces facing each other representing social communication"
            className="block mx-auto w-48 h-auto rounded-full shadow-md border-4 border-[#ffd166] object-contain"
          />
        </div>

        {/* --- SECTION 2: Nonverbal Communication --- */}
        <div className="bg-white p-6 rounded-xl border-t-4 border-[#0c264d] shadow-sm mb-10">
          <h3 className="text-[#0c264d] font-bold mb-3 text-xl text-center sm:text-left">Nonverbal Communication Differences</h3>
          <p className="mb-6 text-sm text-slate-700 text-center sm:text-left">
            Nonverbal communication includes all the unspoken aspects of interaction—body language, facial expressions, eye contact, and gestures.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#fdfbf7] p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#ffd166]">
              <div className="font-bold text-[#0c264d] mb-2">Eye Contact Differences</div>
              <div className="text-sm text-slate-600">Reduced, fleeting, or atypical eye contact; some find eye contact intensely uncomfortable or overwhelming.</div>
            </div>
            
            <div className="bg-[#fdfbf7] p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#ffd166]">
              <div className="font-bold text-[#0c264d] mb-2">Facial Expression</div>
              <div className="text-sm text-slate-600">Limited facial expressions or utilizing expressions that don't traditionally match internal emotions.</div>
            </div>
            
            <div className="bg-[#fdfbf7] p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#ffd166]">
              <div className="font-bold text-[#0c264d] mb-2">Body Language</div>
              <div className="text-sm text-slate-600">Unusual body postures, limited use of gestures, or difficulty naturally interpreting others' body language.</div>
            </div>
            
            <div className="bg-[#fdfbf7] p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#ffd166]">
              <div className="font-bold text-[#0c264d] mb-2">Gesture Use</div>
              <div className="text-sm text-slate-600">Reduced pointing, showing, or other communicative gestures, especially in early development.</div>
            </div>

            <div className="bg-[#fdfbf7] p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#ffd166] md:col-span-2">
              <div className="font-bold text-[#0c264d] mb-2">Integration</div>
              <div className="text-sm text-slate-600">Difficulty integrating verbal and nonverbal communication—what is said aloud may not match the accompanying facial expression or tone.</div>
            </div>
          </div>
        </div>

        {/* --- SECTION 3: Developing and Maintaining Relationships --- */}
        <div className="bg-white p-6 rounded-xl border-t-4 border-[#0c264d] shadow-sm mb-4">
          <h3 className="text-[#0c264d] font-bold mb-3 text-xl text-center sm:text-left">Developing & Maintaining Relationships</h3>
          <p className="mb-6 text-sm text-slate-700 text-center sm:text-left">
            Many autistic people experience challenges in forming and sustaining relationships, though this varies widely across the spectrum:
          </p>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-[#fdf2f8] p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#ec4899]">
              <div className="font-bold text-[#0c264d] mb-2">Friendship Formation</div>
              <div className="text-sm text-slate-600">Difficulty making friends, understanding neurotypical friendship "rules," or knowing how to approach peers.</div>
            </div>
            
            <div className="bg-[#fdf2f8] p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#ec4899]">
              <div className="font-bold text-[#0c264d] mb-2">Social Imagination</div>
              <div className="text-sm text-slate-600">Challenges with imaginative or pretend play, especially cooperative pretend play with peers during childhood.</div>
            </div>
            
            <div className="bg-[#fdf2f8] p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#ec4899]">
              <div className="font-bold text-[#0c264d] mb-2">Adjusting Behavior</div>
              <div className="text-sm text-slate-600">Difficulty seamlessly adapting behavior to different social contexts (e.g., school vs. home, formal vs. casual environments).</div>
            </div>
          </div>
        </div>
      </div>
     {/* --- BOTTOM BACK BUTTON --- */}
      <div className="flex justify-end mt-8 mb-6 clear-both">
        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-normal text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan whitespace-nowrap shrink-0"
        >
          <span className="text-lg">←</span>All About Autism
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Psychiatric Association. (2022). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</li>
            <li>Chevallier, C., et al. (2012). The social motivation theory of autism. <i>Trends in Cognitive Sciences</i>.</li>
            <li>Milton, D. E. M. (2012). On the ontological status of autism: The 'double empathy problem'. <i>Disability & Society</i>.</li>
            <li>Scheeren, A. M., et al. (2012). Social interaction style of children and adolescents with high-functioning autism spectrum disorder. <i>Journal of Autism and Developmental Disorders</i>.</li>
          </ul>
        </div>
      </div>
      
    </article>
  );
}