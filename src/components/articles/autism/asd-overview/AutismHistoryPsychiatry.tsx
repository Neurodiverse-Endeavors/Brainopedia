import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface AutismHistoryPsychiatryProps {
  setCurrentArticle?: (article: string) => void;
}

export function AutismHistoryPsychiatry({ setCurrentArticle }: AutismHistoryPsychiatryProps) {
  
  const BackButton = () => (
    <button 
      onClick={() => setCurrentArticle?.('autism-overview-history')}
      className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm"
    >
      <span className="text-xl">←</span>
      Back to Overview
    </button>
  );

  return (
    <article className="max-w-6xl mx-auto animate-in fade-in duration-300 w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b-2 border-[#0c264d] pb-4 mt-4">
        <h1 className="text-3xl font-regular text-[#0c264d]">
          History: Psychiatric & Diagnostic Pioneers
        </h1>
        <BackButton />
      </div>

      <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
        
        {/* Intro Section */}
        <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm">
          <p className="text-slate-700 leading-relaxed text-sm md:text-base max-w-4xl mx-auto text-center">
            The clinical definition of autism has undergone massive transformations since it was first identified in the 1940s. 
            The figures below represent the pivotal psychiatrists, psychologists, and researchers who shaped how the medical world identifies, diagnoses, and understands the autism spectrum today.
          </p>
        </div>

        {/* 1. The Early Describers */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            1. The Early Clinical Describers (1940s)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Dr. Leo Kanner</h3>
              <p className="text-sm text-slate-700 space-y-2 leading-relaxed">
                In 1943, working at Johns Hopkins, Kanner published the first formal medical description of "early infantile autism." He observed 11 children who displayed an "extreme autistic aloneness" and an "obsessive insistence on the preservation of sameness."<sup>1</sup> 
                <br/><br/>
                While his observational criteria formed the bedrock of the autism diagnosis, Kanner initially suspected the condition was linked to a lack of parental warmth—a notion that caused decades of stigma.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#0A9DC4] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Dr. Hans Asperger</h3>
              <p className="text-sm text-slate-700 space-y-2 leading-relaxed">
                Working independently in Vienna in 1944, Asperger described a group of children with "autistic psychopathy" who possessed high verbal intelligence but struggled with nonverbal communication, social integration, and intense special interests.<sup>2</sup> 
                <br/><br/>
                His work went largely unnoticed in the English-speaking world until the 1980s, eventually leading to the (now retired) "Asperger's Syndrome" diagnosis.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Shifting to Biology */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            2. Shifting the Paradigm to Biology (1960s)
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1 bg-[#ffd166]/20 p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Dr. Bernard Rimland</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Throughout the 1950s and 60s, the psychiatric establishment (led heavily by Bruno Bettelheim) blamed autism on "refrigerator mothers"—mothers who were supposedly too cold and rejecting to bond with their children.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                In 1964, Dr. Bernard Rimland, a psychologist and father of an autistic son, published the landmark book <i>Infantile Autism: The Syndrome and Its Implications for a Neural Theory of Behavior</i>. Rimland systematically dismantled the psychoanalytical "blame the mother" theory, presenting compelling evidence that autism was a biological and neurological condition, not a psychological trauma response. This singular act fundamentally shifted the global trajectory of autism research.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Expanding the Spectrum */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            3. Broadening to a "Spectrum" (1970s - 1980s)
          </h2>
          
          <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm">
            <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Dr. Lorna Wing & Dr. Judith Gould</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              In 1979, British psychiatrists Lorna Wing and Judith Gould conducted the seminal Camberwell study. They realized that strict "Kanner autism" was just one presentation of a much broader range of neurodevelopmental differences.<sup>3</sup>
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              They officially coined the term <strong>"Autism Spectrum"</strong> and introduced the "Triad of Impairments" (differences in social interaction, communication, and imagination/flexibility). Wing was also responsible for translating Hans Asperger's 1944 paper into English, bringing his behavioral profiles into modern clinical awareness and vastly broadening who could qualify for an autism diagnosis.
            </p>
          </div>
        </div>

        {/* 4. Modern Standardized Diagnostics */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b-2 border-[#0c264d] pb-2">
            4. Creating the Global Standard (1990s - Present)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Dr. Catherine Lord</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Before the 1990s, diagnosing autism was highly subjective depending on the clinician. Dr. Catherine Lord co-developed the <strong>ADOS</strong> (Autism Diagnostic Observation Schedule) and the <strong>ADI-R</strong> (Autism Diagnostic Interview-Revised).<sup>4</sup> By creating structured, play-based, and interview-based scoring metrics, she established the "gold standard" for diagnosing autism globally, ensuring research and clinical diagnoses were finally speaking the same language.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-md border-l-4 border-[#0A9DC4] shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Dr. Fred Volkmar</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                A leading psychiatrist at the Yale Child Study Center, Dr. Volkmar was the primary author for the autism section of the DSM-IV (published in 1994). His work helped officially introduce Asperger's Disorder and PDD-NOS into the American diagnostic manual, radically expanding diagnostic rates and ensuring millions of individuals could finally access appropriate educational and medical support.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER & REFERENCES */}
      <div className="flex justify-end mt-12 mb-6">
        <BackButton />
      </div>

      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
      
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
            Cited Studies & Empirical Literature
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Kanner, L. (1943). Autistic disturbances of affective contact. <i>Nervous Child</i>, 2, 217-250.</p>
            <p>2. Asperger, H. (1944). Die "Autistischen Psychopathen" im Kindesalter. <i>Archiv für Psychiatrie und Nervenkrankheiten</i>, 117, 76-136.</p>
            <p>3. Wing, L., & Gould, J. (1979). Severe impairments of social interaction and associated abnormalities in children: epidemiology and classification. <i>Journal of Autism and Developmental Disorders</i>, 9(1), 11-29.</p>
            <p>4. Lord, C., Rutter, M., DiLavore, P. C., & Risi, S. (1999). <i>Autism Diagnostic Observation Schedule (ADOS)</i>. Western Psychological Services.</p>
          </div>
        </div>
      </div>
    </article>
  );
}