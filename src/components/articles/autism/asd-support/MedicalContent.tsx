import { ImageWithFallback } from "../../../figma/ImageWithFallback";

interface MedicalContentProps {
  setCurrentArticle?: (article: string) => void;
}

export function MedicalContent({ setCurrentArticle }: MedicalContentProps) {
  return (
    
    <article className="space-y-6 text-[#0c264d] font-spartan w-full max-w-full min-w-0 overflow-x-hidden [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Medical Management</h2>

      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-3 text-lg border-b border-[#2abcd4] pb-2">The Role of Medication</h3>
        <p className="mb-4 text-slate-700 text-sm leading-relaxed">
          It is critical to understand that there is no medication that treats or "cures" autism itself. Rather, psychiatric and behavioral medications are prescribed strictly to manage <strong>symptoms</strong> (such as severe aggression, anxiety, or hyperactivity) that co-occur with the autistic neurotype.<sup>1</sup>
        </p>
        <p className="text-slate-700 text-sm leading-relaxed font-bold text-[#be185d]">
          Because these medications only suppress behavioral symptoms, they can sometimes mask underlying physiological issues. A child exhibiting sudden, severe dysregulation may actually be experiencing untreated gastrointestinal pain, dental issues, or metabolic distress. Always ensure a full physical medical workup is completed to rule out hidden pain before relying solely on psychiatric medication to manage "behavior."
        </p>
      </div>

      {/* --- CENTERED GRAPHIC SECTION --- */} 
      <div className="text-center w-full mb-8"> 
        <div className="mx-auto w-80 md:w-[550px]"> 
          <div className="rounded-lg shadow-md overflow-hidden bg-white">
            <ImageWithFallback 
              src="/images/autism/autism-support-MMtab-5guys.webp" 
              alt="5 stick figures representing support of 5 different co-occurring conditions"
            /> 
          </div>
        </div> 
      </div>

      <div className="bg-gray-700 border-l-4 border-[#0c264d] p-4 mb-4 rounded-r-md">
        <p className="text-white text-sm">
          <strong>Important:</strong> All prescription and over-the-counter medications should only be used under the guidance and recommendations of a qualified medical professional. This information is for educational purposes only.
        </p>
      </div>

      {/* TABLE 1: BEHAVIOR/PSYCH MEDICATIONS */}
      {/* Notice the w-full and overflow-x-auto on the wrapper! */}
      <div className="mb-6 w-full overflow-x-auto pb-4">
        <style>
          {`
            .medication-table td { padding: 0.75rem !important; font-size: 0.8rem; }
            .medication-table th { padding: 0.75rem !important; }
          `}
        </style>
        {/* Notice the min-w-[900px] forcing the table to scroll instead of stretching the screen */}
        <table className="medication-table w-full min-w-[900px] border-2 border-[#2abcd4] rounded-lg text-sm bg-white shadow-sm">
          <thead>
            <tr className="bg-[#ffd166] text-[#0c264d]">
              <th className="text-left border-r border-[#0c264d]/20 text-xs">Medication</th>
              <th className="text-left border-r border-[#0c264d]/20 text-xs">Class</th>
              <th className="text-left border-r border-[#0c264d]/20 text-xs">FDA Status</th>
              <th className="text-left border-r border-[#0c264d]/20 text-xs">Target Symptoms</th>
              <th className="text-left border-r border-[#0c264d]/20 text-xs w-1/3">Warnings & Side Effects</th>
              <th className="text-left text-xs">Notes</th>
            </tr>
          </thead>
          <tbody>
            {/* BEHAVIOR */}
            <tr className="bg-[#2abcd4]">
              <td colSpan={6} className="p-2 font-bold text-white tracking-wide">BEHAVIOR (Irritability, Aggression, Self-Injury)</td>
            </tr>
            <tr className="bg-white border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Risperidone</strong><br/>(Risperdal)</td>
              <td className="p-3 border-r border-gray-300">Atypical Antipsychotic</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">FDA Approved</span></td>
              <td className="p-3 border-r border-gray-300">Irritability, aggression, self-injury, tantrums</td>
              <td className="p-3 border-r border-gray-300">Significant weight gain, increased appetite, metabolic syndrome, elevated prolactin, sedation, extrapyramidal symptoms (EPS), tardive dyskinesia risk</td>
              <td className="p-3">Ages 5-16; monitor weight gain, metabolic effects<sup>2</sup></td>
            </tr>
            <tr className="bg-slate-50 border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Aripiprazole</strong><br/>(Abilify)</td>
              <td className="p-3 border-r border-gray-300">Atypical Antipsychotic</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">FDA Approved</span></td>
              <td className="p-3 border-r border-gray-300">Irritability, aggression, self-injury</td>
              <td className="p-3 border-r border-gray-300">Weight gain (less than risperidone), sedation, drooling, tremor, akathisia (restlessness), potential metabolic effects, tardive dyskinesia risk</td>
              <td className="p-3">Ages 6-17; less weight gain than risperidone<sup>2</sup></td>
            </tr>
            
            {/* ATTENTION & IMPULSIVITY */}
            <tr className="bg-[#2abcd4]">
              <td colSpan={6} className="p-2 font-bold text-white tracking-wide">ATTENTION & IMPULSIVITY (ADHD Symptoms)</td>
            </tr>
            <tr className="bg-white border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Methylphenidate</strong><br/>(Ritalin, Concerta)</td>
              <td className="p-3 border-r border-gray-300">Stimulant</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">Off-Label</span></td>
              <td className="p-3 border-r border-gray-300">Hyperactivity, inattention, impulsivity</td>
              <td className="p-3 border-r border-gray-300">Decreased appetite, weight loss, insomnia, irritability/emotional lability, increased heart rate/blood pressure, growth suppression, potential for tics</td>
              <td className="p-3">Effective for co-occurring ADHD; monitor for increased irritability<sup>3</sup></td>
            </tr>
            <tr className="bg-slate-50 border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Amphetamine salts</strong><br/>(Adderall)</td>
              <td className="p-3 border-r border-gray-300">Stimulant</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">Off-Label</span></td>
              <td className="p-3 border-r border-gray-300">Hyperactivity, inattention</td>
              <td className="p-3 border-r border-gray-300">Appetite suppression, weight loss, insomnia, irritability, cardiovascular effects, anxiety, potential for abuse</td>
              <td className="p-3">For ADHD symptoms; may reduce appetite<sup>3</sup></td>
            </tr>
            <tr className="bg-white border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Atomoxetine</strong><br/>(Strattera)</td>
              <td className="p-3 border-r border-gray-300">Non-Stimulant</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">Off-Label</span></td>
              <td className="p-3 border-r border-gray-300">Hyperactivity, inattention</td>
              <td className="p-3 border-r border-gray-300">Nausea, decreased appetite, fatigue, mood changes, increased heart rate, black box warning for suicidal ideation in children</td>
              <td className="p-3">Alternative to stimulants; takes weeks to work<sup>3</sup></td>
            </tr>
            <tr className="bg-slate-50 border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Guanfacine</strong><br/>(Intuniv)</td>
              <td className="p-3 border-r border-gray-300">Alpha-2 Agonist</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">Off-Label</span></td>
              <td className="p-3 border-r border-gray-300">Hyperactivity, impulsivity</td>
              <td className="p-3 border-r border-gray-300">Sedation, fatigue, low blood pressure, dizziness, headache; do not stop abruptly</td>
              <td className="p-3">May help with emotional regulation<sup>3</sup></td>
            </tr>
            
            {/* MOOD */}
            <tr className="bg-[#2abcd4]">
              <td colSpan={6} className="p-2 font-bold text-white tracking-wide">MOOD (Anxiety, OCD, Depression)</td>
            </tr>
            <tr className="bg-white border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Sertraline</strong><br/>(Zoloft)</td>
              <td className="p-3 border-r border-gray-300">SSRI</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">Off-Label</span></td>
              <td className="p-3 border-r border-gray-300">Anxiety, OCD, depression</td>
              <td className="p-3 border-r border-gray-300">Nausea, diarrhea, insomnia, activation/restlessness, behavioral disinhibition, suicidal ideation warning in youth</td>
              <td className="p-3">Monitor for activation/behavioral side effects<sup>4</sup></td>
            </tr>
            <tr className="bg-slate-50 border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Fluoxetine</strong><br/>(Prozac)</td>
              <td className="p-3 border-r border-gray-300">SSRI</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">Off-Label</span></td>
              <td className="p-3 border-r border-gray-300">Anxiety, OCD, depression</td>
              <td className="p-3 border-r border-gray-300">Autistic individuals may have heightened sensitivity: activation, agitation, insomnia, GI upset</td>
              <td className="p-3">Mixed evidence; sensitive to side effects<sup>4</sup></td>
            </tr>
            
            {/* SLEEP & SEIZURES */}
            <tr className="bg-[#2abcd4]">
              <td colSpan={6} className="p-2 font-bold text-white tracking-wide">SLEEP & EPILEPSY</td>
            </tr>
            <tr className="bg-white border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Melatonin</strong></td>
              <td className="p-3 border-r border-gray-300">Hormone</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">Off-Label</span></td>
              <td className="p-3 border-r border-gray-300">Sleep onset insomnia</td>
              <td className="p-3 border-r border-gray-300">Generally safe; mild drowsiness; not FDA regulated</td>
              <td className="p-3">First-line for sleep; well-studied<sup>5</sup></td>
            </tr>
            <tr className="bg-slate-50 border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Levetiracetam</strong><br/>(Keppra)</td>
              <td className="p-3 border-r border-gray-300">Anticonvulsant</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">Off-Label</span></td>
              <td className="p-3 border-r border-gray-300">Seizures</td>
              <td className="p-3 border-r border-gray-300">Behavioral changes (irritability, aggression), fatigue</td>
              <td className="p-3">For epilepsy; generally well-tolerated<sup>6</sup></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4 bg-[#ffd166]/20 border-l-4 border-[#ffd166] p-4 text-sm text-slate-700 rounded-r-md">
        <strong>Important:</strong> Autistic individuals may be more sensitive to medication side effects. Start low, go slow, and 
        monitor carefully.<sup>7</sup> Always work with a qualified healthcare provider who understands autism when considering medication.
      </p>

      {/* ZESTY GI CONSIDERATIONS GRID */}
      <h3 className="text-[#0c264d] font-bold mb-4 mt-12 text-xl border-b-2 border-[#2abcd4] pb-2">Crucial GI Considerations</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        
        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-4 border-l-4 border-l-[#be185d]">
          <h4 className="font-bold text-[#be185d] mb-1">Behavior as Communication</h4>
          <p className="text-sm text-slate-700 leading-relaxed">Nonverbal children may show sudden behavioral changes (aggression, self-injury) as the <i>only</i> sign of severe GI distress.<sup>9</sup></p>
        </div>
        
        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-4 border-l-4 border-l-[#0c264d]">
          <h4 className="font-bold text-[#0c264d] mb-1">Rule Out the Root</h4>
          <p className="text-sm text-slate-700 leading-relaxed">Celiac disease, severe food allergies, and inflammatory bowel disease (IBD) must be actively evaluated by a specialist.<sup>9</sup></p>
        </div>
        
        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-4 border-l-4 border-l-[#ffd166]">
          <h4 className="font-bold text-[#0c264d] mb-1">Medication Side Effects</h4>
          <p className="text-sm text-slate-700 leading-relaxed">Many psychotropic and behavioral medications actively worsen or outright cause severe constipation.<sup>9</sup></p>
        </div>
        
        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-4 border-l-4 border-l-[#10b981]">
          <h4 className="font-bold text-[#10b981] mb-1">Hydration is Key</h4>
          <p className="text-sm text-slate-700 leading-relaxed">Ensure adequate fluid intake, especially when utilizing fiber supplements or osmotic laxatives to prevent blockages.<sup>9</sup></p>
        </div>

        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-4 border-l-4 border-l-[#2abcd4]">
          <h4 className="font-bold text-[#2abcd4] mb-1">Dietary Modifications</h4>
          <p className="text-sm text-slate-700 leading-relaxed">Address extreme food selectivity, actively identify physiological trigger foods, and safely increase fiber.<sup>9</sup></p>
        </div>

        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-4 border-l-4 border-l-[#0c264d]">
          <h4 className="font-bold text-[#0c264d] mb-1">Toileting Trauma</h4>
          <p className="text-sm text-slate-700 leading-relaxed">Address sensory aversions, fear of the physical toilet, or a lack of interoceptive awareness (not feeling the urge to go).<sup>9</sup></p>
        </div>

      </div>

      {/* TABLE 2: GI MEDICATIONS */}
      <h3 className="text-[#0c264d] font-bold mb-4 mt-8 text-xl border-b-2 border-[#2abcd4] pb-2">Common GI Management</h3>
      
      {/* Notice the w-full and overflow-x-auto on the wrapper! */}
      <div className="mb-8 w-full overflow-x-auto pb-4">
        <table className="medication-table w-full min-w-[900px] border-2 border-[#2abcd4] rounded-lg text-sm bg-white shadow-sm">
          <thead>
            <tr className="bg-[#ffd166] text-[#0c264d]">
              <th className="text-left border-r border-[#0c264d]/20 text-xs">Medication/Supplement</th>
              <th className="text-left border-r border-[#0c264d]/20 text-xs">Type</th>
              <th className="text-left border-r border-[#0c264d]/20 text-xs">Status</th>
              <th className="text-left border-r border-[#0c264d]/20 text-xs">Indication</th>
              <th className="text-left border-r border-[#0c264d]/20 text-xs w-1/3">Warnings & Side Effects</th>
              <th className="text-left text-xs">Notes & Considerations</th>
            </tr>
          </thead>
          <tbody>
            {/* Constipation */}
            <tr className="bg-[#2abcd4]"><td colSpan={6} className="p-2 font-bold text-white tracking-wide">CONSTIPATION (Most Common GI Issue in Autism)</td></tr>
            <tr className="bg-white border-b border-[#2abcd4]"><td className="p-3 border-r border-gray-300"><strong>Polyethylene glycol 3350</strong><br/>(MiraLAX, GlycoLax)</td><td className="p-3 border-r border-gray-300">Osmotic Laxative</td><td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold">OTC</span></td><td className="p-3 border-r border-gray-300">Chronic constipation</td><td className="p-3 border-r border-gray-300">Bloating, gas, nausea; electrolyte imbalance with prolonged use</td><td className="p-3">First-line treatment; tasteless powder mixes in liquids<sup>9</sup></td></tr>
            <tr className="bg-slate-50 border-b border-[#2abcd4]"><td className="p-3 border-r border-gray-300"><strong>Senna</strong><br/>(Senokot, Ex-Lax)</td><td className="p-3 border-r border-gray-300">Stimulant Laxative</td><td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold">OTC</span></td><td className="p-3 border-r border-gray-300">Occasional constipation</td><td className="p-3 border-r border-gray-300">Abdominal cramping; long-term use can cause dependency or "lazy bowel"</td><td className="p-3">Short-term use only; not for chronic use<sup>9</sup></td></tr>
            
            {/* Reflux */}
            <tr className="bg-[#2abcd4]"><td colSpan={6} className="p-2 font-bold text-white tracking-wide">REFLUX & GERD</td></tr>
            <tr className="bg-white border-b border-[#2abcd4]"><td className="p-3 border-r border-gray-300"><strong>Omeprazole</strong><br/>(Prilosec)</td><td className="p-3 border-r border-gray-300">Proton Pump Inhibitor (PPI)</td><td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold">OTC</span></td><td className="p-3 border-r border-gray-300">GERD, heartburn</td><td className="p-3 border-r border-gray-300">Long-term: decreased calcium absorption, B12 deficiency</td><td className="p-3">Most effective for acid suppression<sup>9</sup></td></tr>
          </tbody>
        </table>
      </div>

      {/* VITAL SIGNS: 3-COLUMN GRID */}
      <h3 className="text-[#0c264d] font-bold mb-4 text-xl border-b-2 border-[#2abcd4] pb-2">Beyond the Gut: Other Medical Realities</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        
        <div className="bg-[#f0f9ff] p-5 rounded-lg border border-[#2abcd4] text-center shadow-sm">
          <div className="w-10 h-10 mx-auto bg-[#2abcd4] text-white rounded-full flex items-center justify-center font-bold text-xl mb-3">☾</div>
          <h4 className="font-bold text-[#0c264d] mb-2">Sleep Disorders</h4>
          <p className="text-xs text-slate-700 leading-relaxed">Insomnia and highly irregular sleep-wake cycles are pervasive. Melatonin and strict sleep hygiene are front-line supports.<sup>10</sup></p>
        </div>
        
        <div className="bg-[#fff0f0] p-5 rounded-lg border border-[#be185d] text-center shadow-sm">
          <div className="w-10 h-10 mx-auto bg-[#be185d] text-white rounded-full flex items-center justify-center font-bold text-xl mb-3">⚡</div>
          <h4 className="font-bold text-[#0c264d] mb-2">Seizure Disorders</h4>
          <p className="text-xs text-slate-700 leading-relaxed">Epilepsy has a significantly higher prevalence in autism. Regular neurology follow-ups and EEGs are critical.<sup>11</sup></p>
        </div>
        
        <div className="bg-slate-50 p-5 rounded-lg border border-[#10b981] text-center shadow-sm">
          <div className="w-10 h-10 mx-auto bg-[#10b981] text-white rounded-full flex items-center justify-center font-bold text-xl mb-3">⛨</div>
          <h4 className="font-bold text-[#0c264d] mb-2">Immune Dysregulation</h4>
          <p className="text-xs text-slate-700 leading-relaxed">Emerging evidence points to distinct immune differences, requiring active management of severe allergies and autoimmune conditions.<sup>12</sup></p>
        </div>

      </div>

      {/* THE CLINIC TOOLKIT */}
      <div className="bg-[#0c264d] rounded-xl p-1 mb-8 shadow-md">
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-[#0c264d] font-bold mb-5 text-xl flex items-center gap-2 border-b border-gray-100 pb-3">
            <span className="text-[#ffd166] text-2xl">📋</span> The Clinic Toolkit: Healthcare Access
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
            <div className="flex items-start gap-3">
              <div className="text-[#2abcd4] font-bold text-lg mt-0.5">✓</div>
              <div>
                <h4 className="font-bold text-[#0c264d] text-sm">Communication Access</h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">Ensure AAC devices and visual supports are prepped and utilized for every medical visit.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="text-[#2abcd4] font-bold text-lg mt-0.5">✓</div>
              <div>
                <h4 className="font-bold text-[#0c264d] text-sm">Sensory Shields</h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">Bring weighted lap pads, noise-canceling headphones, and explicitly request dimmed lights in exam rooms.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="text-[#2abcd4] font-bold text-lg mt-0.5">✓</div>
              <div>
                <h4 className="font-bold text-[#0c264d] text-sm">Routine Preventive Care</h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">Do not neglect routine dental, vision, and well visits despite the high sensory challenges of clinics.<sup>13</sup></p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="text-[#2abcd4] font-bold text-lg mt-0.5">✓</div>
              <div>
                <h4 className="font-bold text-[#0c264d] text-sm">Adult Transition</h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">Proactively plan the highly difficult transition from pediatric specialists to adult providers well before age 18.<sup>14</sup></p>
              </div>
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
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Lai, M. C., et al. (2019). Evidence-based support for autistic people across the lifespan. <i>The Lancet</i>.</p>
            <p>2. Fung, L. K., et al. (2016). Pharmacologic treatment of severe irritability and problem behaviors in autism: A systematic review and meta-analysis. <i>Pediatrics</i>.</p>
            <p>3. Cortese, S., et al. (2020). Pharmacological treatment of attention deficit hyperactivity disorder in children and adolescents with autism spectrum disorder: A systematic review. <i>Autism</i>.</p>
            <p>4. Williams, K., et al. (2013). Selective serotonin reuptake inhibitors (SSRIs) for autism spectrum disorders (ASD). <i>Cochrane Database of Systematic Reviews</i>.</p>
            <p>5. Rossignol, D. A., & Frye, R. E. (2011). Melatonin in autism spectrum disorders: a systematic review and meta-analysis. <i>Developmental Medicine & Child Neurology</i>.</p>
            <p>6. Besag, F. M. C. (2018). Epilepsy in patients with autism: links, risks and treatment challenges. <i>Neuropsychiatric Disease and Treatment</i>.</p>
            <p>7. Volkmar, F., et al. (2014). Practice parameter for the assessment and treatment of children and adolescents with autism spectrum disorder. <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>.</p>
            <p>8. McElhanon, B. O., et al. (2014). Gastrointestinal symptoms in autism spectrum disorder: a meta-analysis. <i>Pediatrics</i>.</p>
            <p>9. Buie, T., et al. (2010). Evaluation, diagnosis, and treatment of gastrointestinal disorders in individuals with ASDs: a consensus report. <i>Pediatrics</i>.</p>
            <p>10. Devnani, P. A., & Hegde, A. U. (2015). Autism and sleep disorders. <i>Journal of Pediatric Neurosciences</i>.</p>
            <p>11. Tuchman, R., & Rapin, I. (2002). Epilepsy in autism. <i>The Lancet Neurology</i>.</p>
            <p>12. Hughes, H. K., et al. (2018). Immune dysfunction and autoimmunity as pathological mechanisms in autism spectrum disorders. <i>Frontiers in Cellular Neuroscience</i>.</p>
            <p>13. Nicolaidis, C., et al. (2014). Healthcare experiences of autistic adults. <i>Journal of General Internal Medicine</i>.</p>
            <p>14. Cheak-Zamora, N. C., et al. (2015). Health care transition in youth with autism spectrum disorder. <i>Pediatrics</i>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Academic Autism Spectrum Partnership in Research and Education (AASPIRE). <i>Healthcare Toolkit for Patients and Providers</i>.</li>
            <li>Autistic Self Advocacy Network (ASAN). <i>Navigating Healthcare: A Guide for Autistic Adults</i>.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}