import { ImageWithFallback } from '../../figma/ImageWithFallback';

export function ADHDSymptomsTabMyths() {
  return (
    <article className="max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      
      {/* Main Content Wrapper */}
      <div className="bg-[#f0f9ff] p-6 rounded-xl">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Myths & Misconceptions About ADHD</h2>

        <div className="bg-[#ffd166] p-4 rounded mb-6 shadow-sm">
          <p className="text-sm text-[#0c264d]">
            <strong>Important:</strong> Social media has created a lot of confusion about what is and isn't ADHD. 
            While awareness is wonderful, misinformation can lead to self-misdiagnosis, trivializing real struggles, 
            or missing other conditions that need treatment. This section addresses commonly claimed "ADHD symptoms" 
            that are either not actually ADHD, need much more research, or are misunderstood.
          </p>
        </div>

        {/* NOT Actually ADHD */}
        <div className="bg-white p-6 rounded-md shadow-sm mb-6 flow-root">
          <h3 className="text-[#0c264d] font-bold mb-4 text-xl">NOT Actually ADHD (or Not Diagnostic Criteria)</h3>
          
          {/* Floated Graphic */}
          <ImageWithFallback
            src="/images/adhd/adhd-myths-social-media.webp"
            alt="Social media and ADHD misinformation"
            className="w-48 float-right ml-6 mb-4 rounded-lg shadow-sm"
          />
          
          <div className="space-y-5">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">"Object Permanence Issues"</div>
              <div className="text-sm text-slate-700 leading-relaxed">
                This term is completely misused on social media. Object permanence is a developmental milestone 
                that infants achieve (knowing things exist when you can't see them). What people actually mean is 
                <strong> working memory issues</strong> ("out of sight, out of mind"), which IS real in ADHD, 
                but the term "object permanence" is scientifically incorrect in this context.
              </div>
            </div>

            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Rejection Sensitive Dysphoria (RSD)</div>
              <div className="text-sm text-slate-700 leading-relaxed">
                While intense emotional pain triggered by perceived rejection is a very real, highly common experience for many with ADHD, "RSD" is not a formal diagnostic criterion in the DSM-5. It is best understood as a specific, profound manifestation of <strong>emotional dysregulation</strong> (a core feature affecting ~70% of those with ADHD)<sup>1</sup> rather than a separate, standalone medical condition.
              </div>
            </div>

            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Face Blindness (Prosopagnosia)</div>
              <div className="text-sm text-slate-700 leading-relaxed">
                No established link to ADHD. This is a separate neurological condition affecting facial recognition.
              </div>
            </div>

            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Aphantasia (Inability to Visualize)</div>
              <div className="text-sm text-slate-700 leading-relaxed">
                No research linking this to ADHD specifically. Aphantasia is a separate phenomenon where people 
                cannot form mental images.
              </div>
            </div>

            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Synesthesia</div>
              <div className="text-sm text-slate-700 leading-relaxed">
                Not related to ADHD; it's a separate neurological phenomenon where one sense triggers another 
                (like seeing colors when hearing music).
              </div>
            </div>

            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Being "Gifted"</div>
              <div className="text-sm text-slate-700 leading-relaxed">
                While twice-exceptional people exist (ADHD + giftedness), ADHD doesn't cause giftedness or vice versa. 
                They can co-occur but are separate traits.
              </div>
            </div>
          </div>
        </div>

        {/* Needs More Research */}
        <div className="bg-white p-6 rounded-md shadow-sm mb-6 flow-root">
          <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Needs MUCH More Research / Overstated</h3>
          
          {/* Floated Graphic */}
          <ImageWithFallback
            src="/images/adhd/adhd-myths-daydreaming.webp"
            alt="Daydreaming - misattributed ADHD myths"
            className="w-48 float-right ml-6 mb-4 rounded-lg shadow-sm"
          />
          
          <div className="space-y-5">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">"Time Blindness"</div>
              <div className="text-sm text-slate-700 leading-relaxed">
                While ADHD involves time perception difficulties, "time blindness" is not a clinical term and is 
                often overgeneralized on social media. The actual symptom is difficulty with time estimation and 
                time management, not literally being "blind" to time.
              </div>
            </div>

            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Maladaptive Daydreaming</div>
              <div className="text-sm text-slate-700 leading-relaxed">
                This is being studied as a separate condition, not specifically an ADHD symptom. While people with 
                ADHD can daydream, maladaptive daydreaming is its own phenomenon.
              </div>
            </div>

            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Sensory Processing Issues</div>
              <div className="text-sm text-slate-700 leading-relaxed">
                These are MUCH more strongly associated with autism spectrum disorder. While there may be some 
                sensory differences in ADHD (mostly related to distractibility), claiming Sensory Processing 
                Disorder (SPD) is an ADHD trait is misleading and confuses two distinct conditions.
              </div>
            </div>

            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">"Doom Piles" / "Doom Boxes"</div>
              <div className="text-sm text-slate-700 leading-relaxed">
                These are symptoms of executive dysfunction and organizational difficulties, which ARE real in ADHD. 
                However, the cutesy social media terms can trivialize real struggles and aren't clinical terminology.
              </div>
            </div>
          </div>
        </div>

        {/* Misattributed or Over-Romanticized */}
        <div className="bg-white p-6 rounded-md shadow-sm mb-6 flow-root">
          <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Misattributed or Over-Romanticized</h3>
          
          <div className="space-y-5">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Every Instance of Procrastination</div>
              <div className="text-sm text-slate-700 leading-relaxed">
                Not all procrastination is ADHD. Everyone procrastinates sometimes. ADHD procrastination is 
                chronic, severe, and related to executive dysfunction—not laziness or poor time management skills.
              </div>
            </div>

            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Being Quirky/Creative</div>
              <div className="text-sm text-slate-700 leading-relaxed">
                Creativity isn't a symptom of ADHD. ADHD is a neurodevelopmental disability, not a personality 
                type or quirky trait. While some people with ADHD are creative, many aren't—and many creative 
                people don't have ADHD.
              </div>
            </div>

            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">"ADHD Makes You More Empathetic"</div>
              <div className="text-sm text-slate-700 leading-relaxed">
                No evidence supports this. Some people with ADHD are highly empathetic, some aren't. Empathy 
                levels vary across all humans regardless of neurology.
              </div>
            </div>

            <div className="border-l-2 border-[#2abcd4] pl-3">
              {/* items-start prevents the image from vertically stretching to match the paragraph height */}
              <div className="flex flex-col sm:flex-row items-start gap-5 mt-2">
                <ImageWithFallback
                  src="/images/adhd/adhd-myths-justice.webp"
                  alt="Lady Justice statue"
                  className="w-48 h-auto rounded-lg shadow-sm shrink-0"
                />
                <div className="text-sm text-slate-700 leading-relaxed">
                  While many people with ADHD report experiencing intense reactions to perceived injustice, this 
                  isn't an inherent ADHD trait. More likely explanations include: <strong>emotional dysregulation</strong>{' '}
                  (intense emotional reactions to anything perceived as unfair), <strong>black-and-white thinking</strong>{' '}
                  (difficulty with nuance due to executive dysfunction), <strong>personal experiences</strong> (many with 
                  ADHD have been misunderstood or treated unfairly, increasing sensitivity), and <strong>low frustration 
                  tolerance</strong> (quick emotional reactions when things don't seem right). If social justice becomes a 
                  special interest, hyperfocus can also play a role. The "justice sensitivity" narrative is appealing 
                  because it frames ADHD traits positively, but it's an oversimplification of complex emotional and 
                  cognitive processes.
                </div>
              </div>
            </div>

            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">"ADHD Tax"</div>
              <div className="text-sm text-slate-700 leading-relaxed">
                This is a social media term for the financial consequences of ADHD symptoms (late fees, replacing 
                lost items, impulse purchases), not an actual symptom. While the consequences are real, it's 
                important to distinguish between symptoms and their effects.
              </div>
            </div>

            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">"Neurospicy"</div>
              <div className="text-sm text-slate-700 leading-relaxed">
                Cutesy language that many actually disabled people find infantilizing and dismissive of real struggles. 
                ADHD is a disability recognized by the ADA, not a fun personality quirk.
              </div>
            </div>
          </div>
        </div>

        {/* Real but Overstated */}
        <div className="bg-white p-6 rounded-md shadow-sm mb-6 flow-root">
          <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Real But Overstated/Oversimplified</h3>
          
          <div className="space-y-5">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Emotional Dysregulation</div>
              <div className="text-sm text-slate-700 leading-relaxed">
                This IS common in ADHD (~70% experience it)<sup>1</sup> but it's NOT one of the 18 DSM-5 diagnostic criteria<sup>2</sup>. 
                Social media often presents it as the main feature of ADHD when it's actually an associated feature, 
                not a core diagnostic symptom.
              </div>
            </div>

            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Executive Dysfunction</div>
              <div className="text-sm text-slate-700 leading-relaxed">
                Real and core to ADHD. However, "ADHD paralysis" is an oversimplification of complex executive 
                function challenges. It's not literal paralysis—it's task initiation difficulty, decision fatigue, 
                or overwhelm from executive demands.
              </div>
            </div>

            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Hyperfocus</div>
              <div className="text-sm text-slate-700 leading-relaxed">
                Real in ADHD but often romanticized. Hyperfocus can be problematic (forgetting to eat, ignoring 
                responsibilities) and is better understood as difficulty regulating attention—not a superpower.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#ffd166] p-5 rounded-lg shadow-sm">
          <p className="text-sm mb-3 text-[#0c264d]">
            <strong>The Bottom Line:</strong> ADHD is a real neurodevelopmental disorder with specific 
            diagnostic criteria in the DSM-5. While social media has increased awareness (which is great!), 
            it has also spread misinformation that can:
          </p>
          <ul className="text-sm space-y-1 ml-5 list-disc text-[#0c264d]">
            <li>Lead to self-misdiagnosis</li>
            <li>Trivialize the real struggles of people with ADHD</li>
            <li>Confuse ADHD with other conditions (especially autism)</li>
            <li>Make it harder for people to get accurate diagnoses</li>
            <li>Create unrealistic expectations about symptoms</li>
          </ul>
          <p className="text-sm mt-4 text-[#0c264d]">
            <strong>If you think you have ADHD:</strong> See a qualified healthcare provider for proper 
            evaluation. Don't rely on social media for diagnosis. ADHD is complex and requires professional 
            assessment.
          </p>
        </div>
      </div>
      {/* <-- End of Light Blue Wrapper --> */}

      {/* References for Myths & Misconceptions Tab */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="text-[#0c264d] font-bold mb-5 text-xl">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Shaw, P., et al. (2014). Emotion dysregulation in attention deficit hyperactivity disorder. <i>American Journal of Psychiatry</i>.</p>
            <p>2. American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</p>
          </div>
        </div>       
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Barkley, R. A. (2015). <i>Attention-deficit hyperactivity disorder: A handbook for diagnosis and treatment</i> (4th ed.). Guilford Press.</li>
            <li>Faraone, S. V., et al. (2021). The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder. <i>Neuroscience & Biobehavioral Reviews</i>.</li>
            <li>Nigg, J. T., et al. (2020). Annual Research Review: On the relations among self-regulation, self-control, executive functioning, effortful control, cognitive control, impulsivity, risk-taking, and inhibition for developmental psychopathology. <i>Journal of Child Psychology and Psychiatry</i>.</li>
            <li>Sedgwick, J. A., et al. (2019). Social cognition in attention-deficit hyperactivity disorder (ADHD). <i>Neuroscience & Biobehavioral Reviews</i>.</li>
          </ul>
        </div>
      </div>
      
    </article>
  );
}