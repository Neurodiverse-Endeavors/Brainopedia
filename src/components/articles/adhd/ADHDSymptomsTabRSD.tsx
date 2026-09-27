import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { HeartCrack, ShieldAlert, Zap, RefreshCw, Flame, EyeOff } from 'lucide-react';
import { MessageSquare, Smartphone, AlertCircle, Users, Frown, ClipboardList, Scale, Target, UserX } from 'lucide-react';
import { Clock, Compass, MessageCircle } from 'lucide-react';

// 1. ADD THE INTERFACE TO ACCEPT ROUTING PROPS
interface ADHDSymptomsTabRSDProps {
  setCurrentArticle?: (article: string) => void;
}

// 2. PASS THE PROP INTO THE COMPONENT
export function ADHDSymptomsTabRSD({ setCurrentArticle }: ADHDSymptomsTabRSDProps) {
  return (
    <article className="max-w-6xl mx-auto">
      
      {/* --- PAGE HEADER & TOP BACK BUTTON --- */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4">
        <h1 className="text-3xl text-[#0c264d] font-normal font-spartan">
          Rejection Sensitive Dysphoria (RSD)
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-normal text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan whitespace-nowrap shrink-0"
        >
          <span className="text-lg">←</span>All About ADHD
        </button>
      </div>

      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <div className="clear-both"></div>
        <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
          <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mb-6 mt-1">
            <p className="text-sm">
              <strong>Important:</strong> While not officially recognized in the DSM-5-TR, RSD is one specific manifestation of the emotional dysregulation issues commonly experienced with ADHD. While not everyone with ADHD experiences RSD, emotional dysregulation in various forms affects a significant portion of individuals with ADHD.
            </p>
          </div>          
        
          <ImageWithFallback 
            src="/images/adhd/adhd-rsd-red-crossout.webp" 
            alt="Red crossout symbol representing rejection sensitive dysphoria" 
            className="w-48 float-right ml-6 mb-4 rounded-lg" 
          />

          <p className="mb-6 leading-relaxed">
            Rejection Sensitive Dysphoria (RSD) is an intense emotional response to perceived or actual rejection, criticism, 
            or failure. RSD is largely a clinically-defined concept rather than one heavily studied in peer-reviewed, 
            double-blind trials. However, several studies, clinical case series, and qualitative research papers explore 
            its mechanisms, particularly in relation to ADHD. While not an official DSM-5-TR diagnosis<sup className="text-green-600 font-bold ml-0.5">1</sup>, RSD is a commonly 
            reported experience among individuals with ADHD. It involves extreme emotional pain triggered by the perception 
            that one has been rejected, teased, or criticized by important people in their life, or that they have failed 
            to meet their own high standards or others' expectations.
          </p>          
<h3 className="text-[#0c264d] font-bold mb-3 text-lg">Research Behind RSD</h3>
          <div className="space-y-4">
            <div>
              <div className="font-bold text-[#0c264d] mb-2">Clinical Case Series (2024):</div>
              <div className="text-sm pl-4 text-slate-700">A case series study presented detailed cases of four patients, showing how ADHD-related 
              emotional dysregulation manifests as an immediate, intense, and painful reaction to perceived rejection, criticism, 
              or failure<sup className="text-green-600 font-bold ml-0.5">2</sup>. The study highlighted that these patients, despite often being high-achieving, experienced 
              severe distress that did not fit traditional anxiety or mood disorder criteria, and responded favorably to alpha-2 
              agonists like guanfacine.</div>
            </div>
            <div>
              <div className="font-bold text-[#0c264d] mb-2">Lived Experience Research (2025):</div>
              <div className="text-sm pl-4 text-slate-700">A qualitative study explored the personal understandings of RSD within the neurodivergent 
              community<sup className="text-green-600 font-bold ml-0.5">3</sup>. This research addressed a gap in the literature regarding the subjective experience of the 
              phenomenon, noting that it often presents as a "predisposition to expect, sense, and react strongly to rejection."</div>
            </div>
            <div>
              <div className="font-bold text-[#0c264d] mb-2">Virtual Feedback Study (2019):</div>
              <div className="text-sm pl-4 text-slate-700">Research on emotional regulation in ADHD found that individuals with ADHD displayed 
              significantly higher levels of emotional sensitivity when receiving feedback in a virtual game compared to neurotypical 
              controls<sup className="text-green-600 font-bold ml-0.5">4</sup>.</div>
            </div>
            <div>
              <div className="font-bold text-[#0c264d] mb-2">Rejection Sensitivity in Adolescents (2009):</div>
              <div className="text-sm pl-4 text-slate-700">A study examining adolescents with ADHD found that high attachment-related anxiety and 
              avoidance correlated with higher levels of sensitivity to peer rejection<sup className="text-green-600 font-bold ml-0.5">5</sup>.</div>
            </div>
          </div>
        </div>
          
        <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-4 text-xl text-center">What RSD Looks Like</h3>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-rsd-heart.webp" 
            alt="Heart illustration representing emotional sensitivity in RSD" 
            className="w-48 mx-auto rounded-lg mb-8" 
          />
          
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="bg-[#f0f9ff] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-[#2abcd4] border-opacity-20">
                <HeartCrack className="w-6 h-6 text-[#2abcd4]" />
              </div>
              <div>
                <div className="font-bold text-[#0c264d] mb-1">Extreme Emotional Pain</div>
                <div className="text-sm text-slate-700 leading-relaxed">Sudden, intense emotional distress in response to perceived rejection or criticism. 
                Studies frequently note that individuals describe the feeling of rejection as a physical "stab" or "punch" to the chest, 
                making it feel physically painful and overwhelming.</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-[#f0f9ff] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-[#2abcd4] border-opacity-20">
                <ShieldAlert className="w-6 h-6 text-[#2abcd4]" />
              </div>
              <div>
                <div className="font-bold text-[#0c264d] mb-1">Hypersensitivity to Criticism</div>
                <div className="text-sm text-slate-700 leading-relaxed">Taking criticism very personally; even gentle, constructive feedback feels like a direct personal attack.</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-[#f0f9ff] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-[#2abcd4] border-opacity-20">
                <Zap className="w-6 h-6 text-[#2abcd4]" />
              </div>
              <div>
                <div className="font-bold text-[#0c264d] mb-1">Immediate, Intense Reactions</div>
                <div className="text-sm text-slate-700 leading-relaxed">Emotional response happens instantly and can feel entirely uncontrollable, often disproportionate 
                to the triggering event.</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-[#f0f9ff] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-[#2abcd4] border-opacity-20">
                <RefreshCw className="w-6 h-6 text-[#2abcd4]" />
              </div>
              <div>
                <div className="font-bold text-[#0c264d] mb-1">Rumination and Overthinking</div>
                <div className="text-sm text-slate-700 leading-relaxed">Replaying perceived rejections or criticisms repeatedly in your mind, unable to let go of the experience.</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-[#f0f9ff] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-[#2abcd4] border-opacity-20">
                <Flame className="w-6 h-6 text-[#2abcd4]" />
              </div>
              <div>
                <div className="font-bold text-[#0c264d] mb-1">Rage or Withdrawal</div>
                <div className="text-sm text-slate-700 leading-relaxed">Responding with sudden anger and emotional outbursts, or flipping to complete withdrawal and isolation.</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-[#f0f9ff] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-[#2abcd4] border-opacity-20">
                <EyeOff className="w-6 h-6 text-[#2abcd4]" />
              </div>
              <div>
                <div className="font-bold text-[#0c264d] mb-1">Avoidance Behaviors</div>
                <div className="text-sm text-slate-700 leading-relaxed">Avoiding situations where rejection or criticism might occur. This is strongly linked to high-achieving perfectionism or, conversely, complete avoidance of situations where failure is possible.</div>
              </div>
            </div>

          </div>
        </div>
        
        <div className="bg-white p-6 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Why RSD Sometimes Happens with ADHD</h3>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-rsd-rejected-typewriter.webp" 
            alt="Typewriter with rejected text representing why RSD occurs in ADHD" 
            className="w-48 float-right ml-6 mb-4 rounded-lg shadow-sm" 
          />
          
          <div className="space-y-5">
            <div>
              <div className="font-bold text-[#0c264d] mb-1">Neurological Factors:</div>
              <div className="text-sm text-slate-700 leading-relaxed">Research suggests that for those with ADHD, the brain processes rejection differently, 
              creating a "hyperalert" state to social rejection. RSD is related to differences in emotional regulation in ADHD brains. 
              The same executive function deficits that affect attention and impulse control also impact emotional control. 
              People with ADHD may experience all emotions more intensely, and negative emotions related to perceived rejection 
              can be particularly overwhelming.</div>
            </div>
            
            <div>
              <div className="font-bold text-[#0c264d] mb-1">Lifetime of Negative Feedback:</div>
              <div className="text-sm text-slate-700 leading-relaxed">Many people with ADHD have experienced years of criticism, correction, and negative 
              feedback about ADHD-related behaviors (being "too much," "not trying hard enough," "careless," "irresponsible"). 
              This history can create a heightened sensitivity to any perceived criticism or rejection.</div>
            </div>
            
            <div>
              <div className="font-bold text-[#0c264d] mb-1">Perfectionism and Compensation:</div>
              <div className="text-sm text-slate-700 leading-relaxed">Many people with ADHD develop perfectionist tendencies as a way to compensate for 
              their difficulties and avoid criticism. This makes any perceived failure particularly painful.</div>
            </div>
          </div>
          <div className="clear-both"></div>
        </div>
        
        <div className="bg-[#fff9e6] p-6 rounded-md border-l-4 border-[#ffd166] shadow-sm mb-6 mt-8">
          <h3 className="text-[#0c264d] font-bold mb-3 text-xl">Common RSD Triggers</h3>
          <p className="text-sm text-slate-700 mb-6">
            RSD can be activated by a wide variety of everyday social and professional situations. For someone with RSD, these events are not just mildly upsetting—they can trigger an immediate, overwhelming emotional response:
          </p>
          
          <div className="flex flex-wrap gap-3">
            <div className="bg-white border border-slate-200 hover:border-[#ffd166] hover:shadow-md hover:-translate-y-0.5 transition-all px-4 py-3 rounded-lg shadow-sm flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-[#2abcd4] flex-shrink-0" />
              <span className="text-sm font-semibold text-[#0c264d]">Being criticized at work or in relationships</span>
            </div>
            <div className="bg-white border border-slate-200 hover:border-[#ffd166] hover:shadow-md hover:-translate-y-0.5 transition-all px-4 py-3 rounded-lg shadow-sm flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-[#2abcd4] flex-shrink-0" />
              <span className="text-sm font-semibold text-[#0c264d]">Not receiving a response to a text or email</span>
            </div>
            <div className="bg-white border border-slate-200 hover:border-[#ffd166] hover:shadow-md hover:-translate-y-0.5 transition-all px-4 py-3 rounded-lg shadow-sm flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-[#2abcd4] flex-shrink-0" />
              <span className="text-sm font-semibold text-[#0c264d]">Making a mistake in front of others</span>
            </div>
            <div className="bg-white border border-slate-200 hover:border-[#ffd166] hover:shadow-md hover:-translate-y-0.5 transition-all px-4 py-3 rounded-lg shadow-sm flex items-center gap-3">
              <Users className="w-5 h-5 text-[#2abcd4] flex-shrink-0" />
              <span className="text-sm font-semibold text-[#0c264d]">Not being invited to a social event</span>
            </div>
            <div className="bg-white border border-slate-200 hover:border-[#ffd166] hover:shadow-md hover:-translate-y-0.5 transition-all px-4 py-3 rounded-lg shadow-sm flex items-center gap-3">
              <Frown className="w-5 h-5 text-[#2abcd4] flex-shrink-0" />
              <span className="text-sm font-semibold text-[#0c264d]">Perceiving disappointment in tone or facial expression</span>
            </div>
            <div className="bg-white border border-slate-200 hover:border-[#ffd166] hover:shadow-md hover:-translate-y-0.5 transition-all px-4 py-3 rounded-lg shadow-sm flex items-center gap-3">
              <ClipboardList className="w-5 h-5 text-[#2abcd4] flex-shrink-0" />
              <span className="text-sm font-semibold text-[#0c264d]">Receiving constructive feedback (even kindly delivered)</span>
            </div>
            <div className="bg-white border border-slate-200 hover:border-[#ffd166] hover:shadow-md hover:-translate-y-0.5 transition-all px-4 py-3 rounded-lg shadow-sm flex items-center gap-3">
              <Scale className="w-5 h-5 text-[#2abcd4] flex-shrink-0" />
              <span className="text-sm font-semibold text-[#0c264d]">Comparing oneself to others and feeling "less than"</span>
            </div>
            <div className="bg-white border border-slate-200 hover:border-[#ffd166] hover:shadow-md hover:-translate-y-0.5 transition-all px-4 py-3 rounded-lg shadow-sm flex items-center gap-3">
              <Target className="w-5 h-5 text-[#2abcd4] flex-shrink-0" />
              <span className="text-sm font-semibold text-[#0c264d]">Failing to meet self-imposed standards or goals</span>
            </div>
            <div className="bg-white border border-slate-200 hover:border-[#ffd166] hover:shadow-md hover:-translate-y-0.5 transition-all px-4 py-3 rounded-lg shadow-sm flex items-center gap-3">
              <UserX className="w-5 h-5 text-[#2abcd4] flex-shrink-0" />
              <span className="text-sm font-semibold text-[#0c264d]">Social awkwardness or perceived social mistakes</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-4 text-xl text-center">Coping Strategies for RSD</h3>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-rsd-artistic-explosion.webp" 
            alt="Positive self-talk illustration for RSD coping strategies" 
            className="w-48 mx-auto rounded-lg mb-8 shadow-sm" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f0f9ff] p-6 rounded-xl border-t-4 border-[#2abcd4] shadow-sm flex flex-col h-full">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Clock className="w-6 h-6 text-[#0c264d]" />
              </div>
              <h4 className="font-bold text-[#0c264d] mb-4 text-lg border-b border-[#2abcd4] border-opacity-20 pb-2">
                In-the-Moment
              </h4>
              <ul className="text-sm space-y-3 text-slate-700 flex-grow">
                <li>• Practice grounding techniques (5-4-3-2-1 sensory awareness)</li>
                <li>• Take a break before responding to perceived criticism</li>
                <li>• Use self-compassion phrases: "This feeling will pass," "I'm doing my best"</li>
                <li>• Physical movement to release emotional intensity (walk, stretch)</li>
                <li>• Reach out to a trusted person who understands RSD</li>
              </ul>
            </div>

            <div className="bg-[#f0f9ff] p-6 rounded-xl border-t-4 border-[#2abcd4] shadow-sm flex flex-col h-full">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Compass className="w-6 h-6 text-[#0c264d]" />
              </div>
              <h4 className="font-bold text-[#0c264d] mb-4 text-lg border-b border-[#2abcd4] border-opacity-20 pb-2">
                Long-Term
              </h4>
              <ul className="text-sm space-y-3 text-slate-700 flex-grow">
                <li>• Work with a therapist trained in ADHD and emotional regulation</li>
                <li>• Learn to distinguish between actual rejection and RSD perception</li>
                <li>• Build a support network of people who understand ADHD and RSD</li>
                <li>• Practice self-compassion and challenge negative self-talk</li>
                <li>• Consider medication adjustments (ADHD medications may help)</li>
                <li>• Develop emotional regulation skills through DBT or CBT</li>
              </ul>
            </div>

            <div className="bg-[#f0f9ff] p-6 rounded-xl border-t-4 border-[#2abcd4] shadow-sm flex flex-col h-full">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <MessageCircle className="w-6 h-6 text-[#0c264d]" />
              </div>
              <h4 className="font-bold text-[#0c264d] mb-4 text-lg border-b border-[#2abcd4] border-opacity-20 pb-2">
                Communication
              </h4>
              <ul className="text-sm space-y-3 text-slate-700 flex-grow">
                <li>• Educate close friends, family, and partners about RSD</li>
                <li>• Request specific types of feedback delivery (written vs. verbal)</li>
                <li>• Ask for "feedback sandwiches" (positive-constructive-positive)</li>
                <li>• Communicate your needs: "I need time to process this feedback"</li>
              </ul>
            </div>
          </div>
        </div>

        {/* YouTube Video for RSD */}
        <div className="mt-6 mb-6 max-w-2xl mx-auto">
          <h4 className="text-[#0c264d] font-bold mb-4 text-center">Understanding Rejection Sensitive Dysphoria</h4>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              src="https://www.youtube.com/embed/jM3azhiOy5E"
              title="Understanding Rejection Sensitive Dysphoria"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        
        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
          <p className="text-sm mb-3">
            <strong>Clinical Note:</strong> While RSD is not in the DSM-5, it is widely recognized by ADHD specialists 
            and researchers as a significant aspect of the ADHD experience. If RSD is severely impacting your quality of 
            life, discuss it with your healthcare provider. Treatment for ADHD (medication and therapy) can help reduce 
            RSD symptoms.
          </p>
          <p className="text-sm">
            <strong>Remember:</strong> RSD is not your fault, and you're not "too sensitive." It's a real neurological 
            experience that many people with ADHD share. With the right support and strategies, RSD can become more 
            manageable.
          </p>
        </div>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both"></div>
      
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
{/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. American Psychiatric Association. (2022). <em>Diagnostic and Statistical Manual of Mental Disorders</em> (5th ed., text rev.).</p>
            <p>2. Rejection Sensitivity Dysphoria in Attention-Deficit/Hyperactivity Disorder: A Case Series. (2024). <em>Acta Scientific Neurological Sciences</em>.</p>
            <p>3. Neurodivergent Experiences of Rejection Sensitive Dysphoria. (2025). <em>Journal of Neural Engineering</em>.</p>
            <p>4. Renton, T. (2022). Research on emotional regulation in ADHD examining virtual feedback responses.</p>
            <p>5. Adolescents' ADHD symptoms and adjustment: The role of attachment and rejection sensitivity. (2009). <em>Journal of Clinical Child & Adolescent Psychology</em>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN (No Indentation) */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
            <li>Barkley, R. A. (2015). Emotional dysregulation is a core component of ADHD. In R. A. Barkley (Ed.), <em>Attention-deficit hyperactivity disorder: A handbook for diagnosis and treatment</em> (4th ed.). Guilford Press.</li>
            <li>Shaw, P., et al. (2014). Emotion dysregulation in attention deficit hyperactivity disorder. <em>American Journal of Psychiatry</em> </li>
            <li>Surman, C. B., et al. (2013). Understanding deficient emotional self-regulation in adults with ADHD: A controlled study. <em>ADHD Attention Deficit and Hyperactivity Disorders</em> </li>
            <li>Ramsay, J. R. (2017). "I feel like I'm constantly treading water": Persistent affective problems in adults with ADHD. <em>ADHD Report</em> .</li>
          </ul>
        </div>
      </div>
      
      {/* --- BOTTOM BACK BUTTON --- */}
      <div className="flex justify-end mt-12 mb-6">
        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] text-[#0c264d] px-5 py-2.5 rounded-lg font-normal text-sm shadow-sm hover:bg-[#0c264d] hover:text-white transition-all flex items-center gap-2 font-spartan whitespace-nowrap shrink-0"
        >
          <span className="text-lg">←</span>All About ADHD
        </button>
      </div>

    </article>
  );
}