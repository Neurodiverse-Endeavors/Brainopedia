import { ImageWithFallback } from "../../../figma/ImageWithFallback";

interface MedicalContentProps {
  setCurrentArticle?: (article: string) => void;
}

export function MedicalContent({ setCurrentArticle }: MedicalContentProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-full w-full [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Medical Management</h2>

      <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Medication</h3>
      <p className="mb-4">
        There is no medication for autism itself, but medications may help co-occurring conditions:<sup>1</sup>
      </p>

      {/* --- CENTERED GRAPHIC SECTION 1 --- */} 
      <div className="text-center w-full mb-8"> 
        <div className="mx-auto w-64 md:w-96"> {/* Fixed width classes here! */}
          <div className="rounded-lg shadow-md overflow-hidden bg-white">
            <ImageWithFallback 
              src="/images/autism/autism-support-MMtab-5guys.webp" 
              alt="5 stick figures representing support of 5 different co-occurring conditions"
            /> 
          </div>
        </div> 
      </div>

      <div className="bg-gray-700 border-l-4 border-[#0c264d] p-4 mb-4">
        <p className="text-white">
          <strong>Important:</strong> All prescription and over-the-counter medications should only be used under the guidance and recommendations of a qualified medical professional. This information is for educational purposes only and does not replace professional medical advice.
        </p>
      </div>

      {/* Medications Chart */}
      <div className="mb-6 overflow-x-auto max-w-4xl">
        <style>
          {`
            .medication-table td { padding: 0.5rem !important; font-size: 0.75rem; }
            .medication-table th { padding: 0.5rem !important; }
          `}
        </style>
        <table className="medication-table w-full border-2 border-[#2abcd4] rounded-lg text-sm">
          <thead>
            <tr className="bg-[#ffd166] text-[#0c264d]">
              <th className="text-left border-r border-[#0c264d]/20 text-xs">Medication</th>
              <th className="text-left border-r border-[#0c264d]/20 text-xs">Class</th>
              <th className="text-left border-r border-[#0c264d]/20 text-xs">FDA Status</th>
              <th className="text-left border-r border-[#0c264d]/20 text-xs">Target Symptoms</th>
              <th className="text-left border-r border-[#0c264d]/20 text-xs">Warnings & Side Effects</th>
              <th className="text-left text-xs">Notes</th>
            </tr>
          </thead>
          <tbody>
            {/* BEHAVIOR */}
            <tr className="bg-[#2abcd4]">
              <td colSpan={6} className="p-2 font-bold text-white">BEHAVIOR (Irritability, Aggression, Self-Injury)</td>
            </tr>
            <tr className="bg-white border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Risperidone</strong><br/>(Risperdal)</td>
              <td className="p-3 border-r border-gray-300">Atypical Antipsychotic</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm">FDA Approved</span></td>
              <td className="p-3 border-r border-gray-300">Irritability, aggression, self-injury, tantrums</td>
              <td className="p-3 border-r border-gray-300">Significant weight gain, increased appetite, metabolic syndrome, elevated prolactin, sedation, extrapyramidal symptoms (EPS), tardive dyskinesia risk</td>
              <td className="p-3">Ages 5-16; monitor weight gain, metabolic effects<sup>2</sup></td>
            </tr>
            <tr className="bg-gray-200 border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Aripiprazole</strong><br/>(Abilify)</td>
              <td className="p-3 border-r border-gray-300">Atypical Antipsychotic</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm">FDA Approved</span></td>
              <td className="p-3 border-r border-gray-300">Irritability, aggression, self-injury</td>
              <td className="p-3 border-r border-gray-300">Weight gain (less than risperidone), sedation, drooling, tremor, akathisia (restlessness), potential metabolic effects, tardive dyskinesia risk</td>
              <td className="p-3">Ages 6-17; less weight gain than risperidone<sup>2</sup></td>
            </tr>
            
            {/* ATTENTION & IMPULSIVITY */}
            <tr className="bg-[#2abcd4]">
              <td colSpan={6} className="p-2 font-bold text-white">ATTENTION & IMPULSIVITY (ADHD Symptoms)</td>
            </tr>
            <tr className="bg-white border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Methylphenidate</strong><br/>(Ritalin, Concerta)</td>
              <td className="p-3 border-r border-gray-300">Stimulant</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
              <td className="p-3 border-r border-gray-300">Hyperactivity, inattention, impulsivity</td>
              <td className="p-3 border-r border-gray-300">Decreased appetite, weight loss, insomnia, irritability/emotional lability, increased heart rate/blood pressure, growth suppression, potential for tics, rebound effects</td>
              <td className="p-3">Effective for co-occurring ADHD; monitor for increased irritability<sup>3</sup></td>
            </tr>
            <tr className="bg-gray-200 border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Amphetamine salts</strong><br/>(Adderall)</td>
              <td className="p-3 border-r border-gray-300">Stimulant</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
              <td className="p-3 border-r border-gray-300">Hyperactivity, inattention</td>
              <td className="p-3 border-r border-gray-300">Similar to methylphenidate: appetite suppression, weight loss, insomnia, irritability, cardiovascular effects, anxiety, potential for abuse</td>
              <td className="p-3">For ADHD symptoms; may reduce appetite<sup>3</sup></td>
            </tr>
            <tr className="bg-white border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Atomoxetine</strong><br/>(Strattera)</td>
              <td className="p-3 border-r border-gray-300">Non-Stimulant ADHD Med</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
              <td className="p-3 border-r border-gray-300">Hyperactivity, inattention</td>
              <td className="p-3 border-r border-gray-300">Nausea, decreased appetite, fatigue, mood changes, increased heart rate/blood pressure, rare liver toxicity, black box warning for suicidal ideation in children</td>
              <td className="p-3">Alternative to stimulants; takes weeks to work<sup>3</sup></td>
            </tr>
            <tr className="bg-gray-200 border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Guanfacine</strong><br/>(Intuniv)</td>
              <td className="p-3 border-r border-gray-300">Alpha-2 Agonist</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
              <td className="p-3 border-r border-gray-300">Hyperactivity, impulsivity</td>
              <td className="p-3 border-r border-gray-300">Sedation, fatigue, low blood pressure, dizziness, headache, irritability; do not stop abruptly (rebound hypertension)</td>
              <td className="p-3">May help with emotional regulation<sup>3</sup></td>
            </tr>
            
            {/* MOOD */}
            <tr className="bg-[#2abcd4]">
              <td colSpan={6} className="p-2 font-bold text-white">MOOD (Anxiety, OCD, Depression)</td>
            </tr>
            <tr className="bg-white border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Sertraline</strong><br/>(Zoloft)</td>
              <td className="p-3 border-r border-gray-300">SSRI</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
              <td className="p-3 border-r border-gray-300">Anxiety, OCD, depression</td>
              <td className="p-3 border-r border-gray-300">Nausea, diarrhea, insomnia, activation/restlessness, behavioral disinhibition, black box warning for suicidal ideation in youth, sexual side effects</td>
              <td className="p-3">Monitor for activation/behavioral side effects<sup>4</sup></td>
            </tr>
            <tr className="bg-gray-200 border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Fluoxetine</strong><br/>(Prozac)</td>
              <td className="p-3 border-r border-gray-300">SSRI</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
              <td className="p-3 border-r border-gray-300">Anxiety, OCD, depression, repetitive behaviors</td>
              <td className="p-3 border-r border-gray-300">Similar to sertraline; autistic individuals may have heightened sensitivity: activation, agitation, insomnia, GI upset, suicidal ideation warning</td>
              <td className="p-3">Mixed evidence; autistic individuals may be more sensitive to side effects<sup>4</sup></td>
            </tr>
            <tr className="bg-white border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Escitalopram</strong><br/>(Lexapro)</td>
              <td className="p-3 border-r border-gray-300">SSRI</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
              <td className="p-3 border-r border-gray-300">Anxiety, depression</td>
              <td className="p-3 border-r border-gray-300">Nausea, headache, drowsiness, insomnia, fatigue, suicidal ideation warning in youth; generally better tolerated than other SSRIs</td>
              <td className="p-3">Generally well-tolerated<sup>4</sup></td>
            </tr>
            
            {/* SLEEP */}
            <tr className="bg-[#2abcd4]">
              <td colSpan={6} className="p-2 font-bold text-white">SLEEP</td>
            </tr>
            <tr className="bg-white border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Melatonin</strong></td>
              <td className="p-3 border-r border-gray-300">Hormone Supplement</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
              <td className="p-3 border-r border-gray-300">Sleep onset insomnia</td>
              <td className="p-3 border-r border-gray-300">Generally safe; mild: daytime drowsiness, headache, dizziness; rarely vivid dreams or nightmares; not FDA regulated (quality varies)</td>
              <td className="p-3">First-line for sleep; well-studied in autism, generally safe<sup>5</sup></td>
            </tr>
            <tr className="bg-gray-200 border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Clonidine</strong><br/>(Catapres)</td>
              <td className="p-3 border-r border-gray-300">Alpha-2 Agonist</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
              <td className="p-3 border-r border-gray-300">Sleep, hyperactivity</td>
              <td className="p-3 border-r border-gray-300">Sedation (often desired for sleep), low blood pressure, dizziness, dry mouth, constipation; do not stop abruptly (rebound hypertension)</td>
              <td className="p-3">Sedating; monitor blood pressure<sup>5</sup></td>
            </tr>
            
            {/* SEIZURES */}
            <tr className="bg-[#2abcd4]">
              <td colSpan={6} className="p-2 font-bold text-white">SEIZURES/EPILEPSY</td>
            </tr>
            <tr className="bg-white border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Valproic acid</strong><br/>(Depakote)</td>
              <td className="p-3 border-r border-gray-300">Anticonvulsant/Mood Stabilizer</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
              <td className="p-3 border-r border-gray-300">Seizures, mood instability, aggression</td>
              <td className="p-3 border-r border-gray-300">Weight gain, hair loss, tremor, liver toxicity (requires monitoring), pancreatitis risk, teratogenic (causes birth defects), polycystic ovary syndrome</td>
              <td className="p-3">For co-occurring epilepsy; monitor liver function<sup>6</sup></td>
            </tr>
            <tr className="bg-gray-200 border-b border-[#2abcd4]">
              <td className="p-3 border-r border-gray-300"><strong>Levetiracetam</strong><br/>(Keppra)</td>
              <td className="p-3 border-r border-gray-300">Anticonvulsant</td>
              <td className="p-3 border-r border-gray-300"><span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Off-Label</span></td>
              <td className="p-3 border-r border-gray-300">Seizures</td>
              <td className="p-3 border-r border-gray-300">Behavioral changes (irritability, aggression, mood swings), fatigue, dizziness, infection risk; generally fewer side effects than older anticonvulsants</td>
              <td className="p-3">For epilepsy; generally well-tolerated<sup>6</sup></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <strong>Important:</strong> Autistic individuals may be more sensitive to medication side effects. Start low, go slow, and 
        monitor carefully.<sup>7</sup> Always work with a qualified healthcare provider who understands autism when considering medication.
      </p>

      <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Managing Co-occurring Medical Conditions</h3>
      
      <h4 className="text-[#0c264d] font-bold mb-3">Gastrointestinal Issues</h4>
      <p className="mb-4">
        Gastrointestinal problems affect 46-84% of autistic individuals, significantly higher than the general population.<sup>8</sup> Common issues include chronic constipation, diarrhea, abdominal pain, gastroesophageal reflux disease (GERD), and feeding difficulties.
      </p>

      <div className="bg-gray-700 border-l-4 border-[#0c264d] p-4 mb-4">
        <p className="text-white">
          <strong>Important:</strong> All prescription and over-the-counter medications should only be used under the guidance and recommendations of a qualified medical professional. This information is for educational purposes only and does not replace professional medical advice.
        </p>
      </div>

      {/* GI Medications Chart */}
      <div className="mb-6 overflow-x-auto max-w-4xl">
        <table className="medication-table w-full border-2 border-[#2abcd4] rounded-lg text-sm">
          <thead>
            <tr className="bg-[#ffd166] text-[#0c264d]">
              <th className="text-left border-r border-[#0c264d]/20 text-xs">Medication/Supplement</th>
              <th className="text-left border-r border-[#0c264d]/20 text-xs">Type</th>
              <th className="text-left border-r border-[#0c264d]/20 text-xs">Rx/OTC</th>
              <th className="text-left border-r border-[#0c264d]/20 text-xs">Indication</th>
              <th className="text-left border-r border-[#0c264d]/20 text-xs">Warnings & Side Effects</th>
              <th className="text-left text-xs">Notes & Considerations</th>
            </tr>
          </thead>
          <tbody>
            {/* Constipation */}
            <tr className="bg-[#2abcd4]"><td colSpan={6} className="p-2 font-bold text-white">CONSTIPATION (Most Common GI Issue in Autism)</td></tr>
            <tr className="bg-white border-b border-[#2abcd4]"><td className="p-3 border-r border-gray-300"><strong>Polyethylene glycol 3350</strong><br/>(MiraLAX, GlycoLax)</td><td className="p-3 border-r border-gray-300">Osmotic Laxative</td><td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td><td className="p-3 border-r border-gray-300">Chronic constipation</td><td className="p-3 border-r border-gray-300">Bloating, gas, nausea; rare allergic reactions; electrolyte imbalance with prolonged use</td><td className="p-3">First-line treatment; safe for long-term use; tasteless powder mixes in liquids<sup>9</sup></td></tr>
            <tr className="bg-gray-200 border-b border-[#2abcd4]"><td className="p-3 border-r border-gray-300"><strong>Lactulose</strong></td><td className="p-3 border-r border-gray-300">Osmotic Laxative</td><td className="p-3 border-r border-gray-300"><span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Rx</span></td><td className="p-3 border-r border-gray-300">Constipation</td><td className="p-3 border-r border-gray-300">Gas, bloating, cramping, diarrhea if overdosed; avoid in galactosemia</td><td className="p-3">Prescription alternative; sweet taste may be better tolerated<sup>9</sup></td></tr>
            <tr className="bg-white border-b border-[#2abcd4]"><td className="p-3 border-r border-gray-300"><strong>Docusate sodium</strong><br/>(Colace)</td><td className="p-3 border-r border-gray-300">Stool Softener</td><td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td><td className="p-3 border-r border-gray-300">Mild constipation</td><td className="p-3 border-r border-gray-300">Throat irritation, mild stomach cramping; rare rash or allergic reaction</td><td className="p-3">Gentle; works by softening stool; less effective for chronic issues<sup>9</sup></td></tr>
            <tr className="bg-gray-200 border-b border-[#2abcd4]"><td className="p-3 border-r border-gray-300"><strong>Senna</strong><br/>(Senokot, Ex-Lax)</td><td className="p-3 border-r border-gray-300">Stimulant Laxative</td><td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td><td className="p-3 border-r border-gray-300">Occasional constipation</td><td className="p-3 border-r border-gray-300">Abdominal cramping, diarrhea; long-term use can cause dependency, electrolyte imbalance, "lazy bowel"</td><td className="p-3">Short-term use only; not for chronic use<sup>9</sup></td></tr>
            <tr className="bg-white border-b border-[#2abcd4]"><td className="p-3 border-r border-gray-300"><strong>Fiber supplements</strong><br/>(Metamucil, Benefiber)</td><td className="p-3 border-r border-gray-300">Bulk-forming Laxative</td><td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td><td className="p-3 border-r border-gray-300">Prevention of constipation</td><td className="p-3 border-r border-gray-300">Gas, bloating; choking risk if not mixed properly; can worsen constipation without adequate water intake</td><td className="p-3">Requires adequate fluid intake<sup>9</sup></td></tr>
            
            {/* Reflux */}
            <tr className="bg-[#2abcd4]"><td colSpan={6} className="p-2 font-bold text-white">REFLUX & GERD (Gastroesophageal Reflux Disease)</td></tr>
            <tr className="bg-white border-b border-[#2abcd4]"><td className="p-3 border-r border-gray-300"><strong>Omeprazole</strong><br/>(Prilosec)</td><td className="p-3 border-r border-gray-300">Proton Pump Inhibitor (PPI)</td><td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span> / <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Rx</span></td><td className="p-3 border-r border-gray-300">GERD, heartburn</td><td className="p-3 border-r border-gray-300">Long-term: decreased calcium absorption, increased fracture risk, vitamin B12 deficiency, C. diff infection risk; short-term: headache, nausea, diarrhea</td><td className="p-3">Most effective for acid suppression; available OTC or prescription strength<sup>9</sup></td></tr>
            <tr className="bg-gray-200 border-b border-[#2abcd4]"><td className="p-3 border-r border-gray-300"><strong>Lansoprazole</strong><br/>(Prevacid)</td><td className="p-3 border-r border-gray-300">Proton Pump Inhibitor (PPI)</td><td className="p-3 border-r border-gray-300"><span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Rx</span></td><td className="p-3 border-r border-gray-300">GERD</td><td className="p-3 border-r border-gray-300">Similar to omeprazole: long-term bone and nutrient concerns; headache, diarrhea, abdominal pain</td><td className="p-3">Available in dissolvable tablets; easier for children<sup>9</sup></td></tr>
            <tr className="bg-white border-b border-[#2abcd4]"><td className="p-3 border-r border-gray-300"><strong>Ranitidine alternatives</strong><br/>(Famotidine/Pepcid)</td><td className="p-3 border-r border-gray-300">H2 Blocker</td><td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span> / <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Rx</span></td><td className="p-3 border-r border-gray-300">Mild-moderate reflux</td><td className="p-3 border-r border-gray-300">Headache, dizziness, constipation, diarrhea; rarely confusion or agitation in children</td><td className="p-3">Less potent than PPIs; Zantac (ranitidine) recalled, famotidine is alternative<sup>9</sup></td></tr>
            <tr className="bg-gray-200 border-b border-[#2abcd4]"><td className="p-3 border-r border-gray-300"><strong>Calcium carbonate</strong><br/>(Tums, Rolaids)</td><td className="p-3 border-r border-gray-300">Antacid</td><td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td><td className="p-3 border-r border-gray-300">Occasional heartburn</td><td className="p-3 border-r border-gray-300">Constipation; excessive use can cause milk-alkali syndrome (high calcium), kidney stones</td><td className="p-3">Quick relief; chewable tablets; not for chronic use<sup>9</sup></td></tr>
            
            {/* Diarrhea */}
            <tr className="bg-[#2abcd4]"><td colSpan={6} className="p-2 font-bold text-white">DIARRHEA</td></tr>
            <tr className="bg-white border-b border-[#2abcd4]"><td className="p-3 border-r border-gray-300"><strong>Loperamide</strong><br/>(Imodium)</td><td className="p-3 border-r border-gray-300">Anti-diarrheal</td><td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td><td className="p-3 border-r border-gray-300">Acute diarrhea</td><td className="p-3 border-r border-gray-300">Constipation, drowsiness, dizziness; rare: severe constipation, megacolon, cardiac arrhythmias with overdose; avoid in bacterial infections</td><td className="p-3">Short-term use; check with doctor before using in children<sup>9</sup></td></tr>
            <tr className="bg-gray-200 border-b border-[#2abcd4]"><td className="p-3 border-r border-gray-300"><strong>Bismuth subsalicylate</strong><br/>(Pepto-Bismol)</td><td className="p-3 border-r border-gray-300">Anti-diarrheal/Antacid</td><td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td><td className="p-3 border-r border-gray-300">Diarrhea, nausea, upset stomach</td><td className="p-3 border-r border-gray-300">Black tongue/stool (harmless); contains salicylate—risk of Reye's syndrome in children, especially with viral illness; avoid with aspirin allergy</td><td className="p-3">Avoid in children under 12 without medical advice<sup>9</sup></td></tr>
            
            {/* Probiotics */}
            <tr className="bg-[#2abcd4]"><td colSpan={6} className="p-2 font-bold text-white">PROBIOTICS & DIGESTIVE SUPPORT</td></tr>
            <tr className="bg-white border-b border-[#2abcd4]"><td className="p-3 border-r border-gray-300"><strong>Probiotics</strong><br/>(Culturelle, Align, VSL#3)</td><td className="p-3 border-r border-gray-300">Live Bacteria Supplement</td><td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td><td className="p-3 border-r border-gray-300">General GI health, dysbiosis</td><td className="p-3 border-r border-gray-300">Generally safe; mild gas or bloating initially; rare risk of infection in immunocompromised individuals</td><td className="p-3">Emerging evidence for autism; may help with bowel regularity; safe to try<sup>9</sup></td></tr>
            <tr className="bg-gray-200 border-b border-[#2abcd4]"><td className="p-3 border-r border-gray-300"><strong>Digestive enzymes</strong></td><td className="p-3 border-r border-gray-300">Enzyme Supplement</td><td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td><td className="p-3 border-r border-gray-300">Bloating, gas, indigestion</td><td className="p-3 border-r border-gray-300">Generally well-tolerated; possible allergic reactions; diarrhea or stomach upset at high doses</td><td className="p-3">Limited evidence; may help specific enzyme deficiencies<sup>9</sup></td></tr>
            
            {/* Abdominal Pain */}
            <tr className="bg-[#2abcd4]"><td colSpan={6} className="p-2 font-bold text-white">ABDOMINAL PAIN & CRAMPING</td></tr>
            <tr className="bg-white border-b border-[#2abcd4]"><td className="p-3 border-r border-gray-300"><strong>Simethicone</strong><br/>(Gas-X, Mylicon)</td><td className="p-3 border-r border-gray-300">Anti-gas/Anti-foaming</td><td className="p-3 border-r border-gray-300"><span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">OTC</span></td><td className="p-3 border-r border-gray-300">Gas, bloating</td><td className="p-3 border-r border-gray-300">Minimal side effects; very safe; rare allergic reaction</td><td className="p-3">Very safe; breaks up gas bubbles; liquid drops available for children<sup>9</sup></td></tr>
            <tr className="bg-gray-200 border-b border-[#2abcd4]"><td className="p-3 border-r border-gray-300"><strong>Hyoscyamine</strong><br/>(Levsin)</td><td className="p-3 border-r border-gray-300">Antispasmodic</td><td className="p-3 border-r border-gray-300"><span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Rx</span></td><td className="p-3 border-r border-gray-300">Abdominal cramping, IBS</td><td className="p-3 border-r border-gray-300">Dry mouth, blurred vision, drowsiness, constipation, urinary retention; heat intolerance; rarely confusion or agitation</td><td className="p-3">Reduces intestinal spasms; monitor for side effects<sup>9</sup></td></tr>
            <tr className="bg-white border-b border-[#2abcd4]"><td className="p-3 border-r border-gray-300"><strong>Dicyclomine</strong><br/>(Bentyl)</td><td className="p-3 border-r border-gray-300">Antispasmodic</td><td className="p-3 border-r border-gray-300"><span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Rx</span></td><td className="p-3 border-r border-gray-300">IBS, abdominal pain</td><td className="p-3 border-r border-gray-300">Similar to hyoscyamine: dry mouth, dizziness, blurred vision; contraindicated in infants under 6 months (serious respiratory events)</td><td className="p-3">For functional abdominal pain; use with caution in children<sup>9</sup></td></tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-[#2abcd4] p-4 mb-6">
        <p className="mb-2"><strong>Important GI Management Considerations:</strong></p>
        <ul className="list-disc ml-6 text-sm space-y-1">
          <li><strong>Rule out underlying conditions:</strong> Celiac disease, food allergies, inflammatory bowel disease should be evaluated<sup>9</sup></li>
          <li><strong>Dietary modifications:</strong> Some children benefit from addressing food selectivity, increasing fiber, or identifying trigger foods<sup>9</sup></li>
          <li><strong>Hydration:</strong> Ensure adequate fluid intake, especially with fiber supplements or laxatives<sup>9</sup></li>
          <li><strong>Communication challenges:</strong> Nonverbal children may show behavioral changes as only sign of GI distress<sup>9</sup></li>
          <li><strong>Medication side effects:</strong> Some psychotropic medications can worsen constipation<sup>9</sup></li>
          <li><strong>Toileting issues:</strong> Address sensory aversions, fear of toilet, or lack of interoceptive awareness<sup>9</sup></li>
        </ul>
      </div>

      <h4 className="text-[#0c264d] font-bold mb-3">Other Co-occurring Medical Conditions</h4>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2"><strong>Sleep disorders:</strong> Insomnia, irregular sleep-wake cycles; sleep hygiene, melatonin<sup>10</sup></li>
        <li className="mb-2"><strong>Seizure disorders:</strong> Higher prevalence in autism; regular neurology follow-up<sup>11</sup></li>
        <li className="mb-2"><strong>Immune dysregulation:</strong> Some evidence of immune differences; manage allergies, autoimmune conditions<sup>12</sup></li>
      </ul>

      <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Healthcare Considerations</h3>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2"><strong>Communication supports:</strong> AAC devices, visual supports for medical visits</li>
        <li className="mb-2"><strong>Sensory accommodations:</strong> Weighted lap pads, noise-canceling headphones, dimmed lights in exam rooms</li>
        <li className="mb-2"><strong>Preventive care:</strong> Don't neglect routine care (dental, vision, well visits) despite challenges<sup>13</sup></li>
        <li className="mb-2"><strong>Transition to adult care:</strong> Plan transition from pediatric to adult providers<sup>14</sup></li>
      </ul>

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
            <li>Academic Autism Spectrum Partnership in Research and Education (AASPIRE). Healthcare Toolkit for Patients and Providers.</li>
            <li>Autistic Self Advocacy Network (ASAN). Navigating Healthcare: A Guide for Autistic Adults.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}