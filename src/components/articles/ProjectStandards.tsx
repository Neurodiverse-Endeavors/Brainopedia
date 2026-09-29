import { Microscope, ArrowRight, Code, Layout, Palette, FileText, CheckCircle, ImageIcon, Smartphone, AlertTriangle, Type, Move, Heart } from 'lucide-react';

interface ProjectStandardsProps {
  setCurrentArticle?: (article: string) => void;
}

export default function ProjectStandards({ setCurrentArticle }: ProjectStandardsProps) {
  return (
   <article className="space-y-6 text-[#0c264d] font-spartan max-w-6xl mx-auto w-full min-w-0 [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px] animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10">
        <h1 className="text-4xl text-[#0c264d] font-normal mb-2">
          Brainopedia Project Standards & Design System
        </h1>
        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Last Updated: September 2026</p>
        <p className="mt-4 text-[#0c264d]">
          The definitive technical and editorial manual for the Brainopedia digital encyclopedia.
        </p>
      </div>

      {/* 1. EXPORTS, IMPORTS & APP SAFETY */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <Code className="text-[#2abcd4]" /> REACT SAFETY & APP ARCHITECTURE
        </h2>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-5 mb-6 rounded-r-xl shadow-sm">
          <h3 className="font-bold text-red-800 mb-2 uppercase text-xs">The Router Crash Rule (No Default Exports for Articles)</h3>
          <p className="text-sm text-slate-700">
            Brainopedia's dynamic article routing engine strictly requires <strong>Named Exports</strong>. Using <code className="bg-white px-1 text-red-700 rounded border border-red-200">export default function</code> on an encyclopedia page will instantly crash the app and cause a blank beige screen.
          </p>
          <ul className="list-disc ml-5 mt-3 text-sm text-slate-700 space-y-2">
            <li><strong>DO USE (For Articles):</strong> <code className="bg-white px-1 text-green-700 rounded border border-gray-200">export function ArticleName()</code></li>
            <li><strong>NEVER USE (For Articles):</strong> <code className="bg-white px-1 text-red-700 rounded border border-red-200">export default function ArticleName()</code></li>
          </ul>
        </div>

        <div className="bg-[#f0f9ff] border-l-4 border-[#2abcd4] p-5 mb-6 rounded-r-xl shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Modern React Imports</h3>
          <p className="text-sm text-slate-700">
            Because we use modern React (17+), importing React just to write JSX is obsolete.
          </p>
          <ul className="list-disc ml-5 mt-3 text-sm text-slate-700 space-y-2">
            <li><strong>REMOVE:</strong> <code className="bg-white px-1 text-red-700 rounded border border-red-200">import React from 'react';</code></li>
            <li>Only import specific hooks (e.g., <code className="bg-white px-1 text-green-700 rounded border border-gray-200">useState</code>) or specific types (e.g., <code className="bg-white px-1 text-green-700 rounded border border-gray-200">React.MouseEvent</code>) when strictly necessary.</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border-l-4 border-[#ffd166] p-5 rounded-r-xl shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Tag Parity & Escape Characters</h3>
          <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
            <li><strong>Void Elements:</strong> All void elements (<code className="bg-white px-1 rounded border border-gray-200">&lt;img /&gt;</code>, <code className="bg-white px-1 rounded border border-gray-200">&lt;br /&gt;</code>, <code className="bg-white px-1 rounded border border-gray-200">&lt;hr /&gt;</code>) MUST be self-closed with a trailing slash.</li>
            <li><strong>Escape Characters:</strong> Absolutely no stray, unescaped brackets (<code className="bg-white px-1 rounded border border-gray-200">&lt;</code> or <code className="bg-white px-1 rounded border border-gray-200">&#123;</code>) floating in text blocks. They must be safely coded or removed.</li>
          </ul>
        </div>
      </section>

      {/* 2. IMAGE PLACEMENT AND SIZING STANDARDS */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <Move className="text-[#2abcd4]" /> IMAGE PLACEMENT & SIZING
        </h2>
        
        <p className="text-sm mb-6 text-gray-600">All graphics must be implemented using the <code className="bg-gray-100 px-1 rounded">ImageWithFallback</code> component. Use these strict layout patterns:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">1. The Main Page Float (w-56)</h3>
            <p className="text-xs mb-3 text-gray-600">Used strictly for the main introductory articles where text wraps around the image.</p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded whitespace-pre-wrap break-words">
              className="w-56 max-w-full h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
            </code>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">2. The Subpage Centered Hero (w-64)</h3>
            <p className="text-xs mb-3 text-gray-600">Used strictly inside the colored UI cards on subpages to prevent background spooling.</p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded whitespace-pre-wrap break-words">
              className="w-64 max-w-full h-auto block mx-auto mb-6 rounded-lg shadow-sm"
            </code>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 mt-6 rounded-r-lg shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">The H2 Alignment Rule</h3>
          <p className="text-sm text-gray-700">
            To ensure a floated image aligns perfectly flush with the top of a section header, the <code className="bg-white px-1 rounded border border-gray-200">&lt;ImageWithFallback&gt;</code> tag MUST be placed in the code <strong>immediately before</strong> the <code className="bg-white px-1 rounded border border-gray-200">&lt;h2&gt;</code> tag. If the H2 comes first, it pushes the image down to the next text line.
          </p>
        </div>
      </section>

      {/* 3. CITATION SYSTEM & ROOT STYLING */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <FileText className="text-[#2abcd4]" /> CITATION SYSTEM
        </h2>
        
        <div className="bg-white border-2 border-[#2abcd4] p-5 rounded-xl shadow-sm mb-6">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">The Root Tailwind Fix (No Naked Classes)</h3>
          <p className="text-sm text-slate-700 mb-4">
            We NO LONGER apply manual classes to individual <code className="bg-gray-100 px-1 rounded">sup</code> tags. Instead, the very top <code className="bg-gray-100 px-1 rounded">&lt;article&gt;</code> wrapper of every page must contain the following arbitrary Tailwind variants to auto-style all citations seamlessly:
          </p>
          <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded break-words whitespace-pre-wrap">
            [&_sup]:text-[#10b981] [&_sup]:font-bold [&_sup]:ml-[2px] [&_sup]:text-[10px]
          </code>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
           <div className="bg-[#ffd166] bg-opacity-20 border-l-4 border-[#ffd166] p-4 text-sm">
            <p className="font-bold mb-2 uppercase text-[#0c264d]">ONLY Use Inline Citations When:</p>
            <ul className="list-disc ml-4 space-y-2 text-slate-700">
              <li>The text cites hard statistics, explicitly named theories, or specific clinical protocols.</li>
              <li>These items go into the <strong>Cited Studies & Statistics</strong> reference list.</li>
              <li><strong>Tab Rule:</strong> Inline citations must restart at 1 for each individual tab and flow chronologically top-to-bottom.</li>
            </ul>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 text-sm">
            <p className="font-bold mb-2 uppercase text-red-800">NEVER Use Inline Citations For:</p>
            <ul className="list-disc ml-4 space-y-2 text-slate-700">
              <li>General foundational knowledge.</li>
              <li>Descriptive symptom lists.</li>
              <li>These items must be placed directly into the <strong>Background Sources</strong> list with NO inline superscript.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. REFERENCE SECTION MANDATORY CODE */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <CheckCircle className="text-[#2abcd4]" /> REFERENCE SECTION CODE
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 text-sm text-gray-800">
          <strong>Mandatory Layout Rule:</strong> References must <strong>NOT</strong> be contained within a box, card, or styled background container. They sit flush on the page. Always use <code className="bg-white px-1 rounded text-xs break-words">{`<div className="clear-both mt-16 font-spartan">`}</code> as the main wrapper to clear floated images and provide exactly 64px of top margin spacing.
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 text-sm text-gray-800">
          <strong>URL/DOI Purge:</strong> We use a "Digital-First" APA 7th style. Remove ALL URLs, DOIs, journal volume numbers, issue numbers, and page ranges. Remove quotation marks around article titles. Strictly italicize journal and book titles.
        </div>

        <div className="bg-gray-900 p-6 rounded-xl overflow-hidden min-w-0">
          <pre className="text-green-400 text-xs overflow-x-auto block break-words whitespace-pre-wrap">
{`{/* ===== REFERENCES SECTION ===== */}
<div className="clear-both mt-16 font-spartan">
  <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
  
  {/* CITED STUDIES: GREEN */}
  <div className="mb-6">
    <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-10 pb-1">
      Cited Studies & Statistics
    </h4>
    <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
      <p>1. Author, A., et al. (Year). Article title in plain text. <i>Journal Name Italicized</i>.</p>
    </div>
  </div>
  
  {/* BACKGROUND SOURCES: CYAN */}
  <div>
    <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-10 pb-1">
      Background Sources
    </h4>
    <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
      <li>Source Book/Manual (NO BULLET POINTS, NO NUMBERS)</li>
    </ul>
  </div>
</div>`}
          </pre>
        </div>
      </section>

      {/* 5. EDITORIAL TONE & FRAMEWORK */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <Type className="text-[#2abcd4]" /> EDITORIAL TONE & FRAMEWORK
        </h2>
        <div className="bg-white border-2 border-[#10b981] p-5 rounded-xl shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Strengths-Based Approach:</h3>
          <p className="text-sm text-gray-700">
            All content, definitions, and articles must be presented through a strengths-based model. We prioritize highlighting character-driven excellence, capabilities, and holistic understanding, rather than relying strictly on deficit-based clinical language.
          </p>
        </div>

        <div className="bg-white border-2 border-[#2abcd4] p-5 rounded-xl shadow-sm mt-6">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">The Two-Sentence Rule:</h3>
          <p className="text-sm text-gray-700">
            To maintain highly scannable, digestible content, every main article section (Overview, Symptoms, Causes, Diagnosis, Support, Living) must strictly be condensed into <strong>one single paragraph containing exactly two sentences</strong>. Avoid massive walls of text or dense medical jargon.
          </p>
        </div>
      </section>

      {/* 6. LIST UI & ICONS */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <Layout className="text-[#2abcd4]" /> LIST UI, GRIDS & ICONS
        </h2>
        
        <div className="bg-yellow-50 border-l-4 border-[#ffd166] p-5 mb-6 rounded-r-xl shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Varying the List UI</h3>
          <p className="text-sm text-slate-700 mb-3">Standard dot bullets (`•`) are banned inside colored UI cards. To keep the interface engaging, you must vary the list styles <strong>from section to section</strong> (never mix them within the same tab). Alternate between:</p>
          <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
            <li><strong>Pure Lucide Icons:</strong> <code className="bg-white px-1 rounded">&lt;Brain className="w-5 h-5 text-[#0c264d] shrink-0 mt-0.5" /&gt;</code></li>
            <li><strong>CSS Number Badges:</strong> Perfect circles with numbers <code className="bg-white px-1 rounded">&lt;div className="w-6 h-6 rounded-full bg-[#2abcd4] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"&gt;1&lt;/div&gt;</code></li>
            <li><strong>Lucide Popped Cards:</strong> Icons placed inside a slightly larger pastel background circle above centered text.</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-[#2abcd4] p-5 rounded-xl">
            <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Autism Representation:</h3>
            <p className="text-sm"><strong>ALWAYS:</strong> Gold infinity symbol (∞)</p>
            <p className="text-sm text-red-600 font-bold">NEVER: Puzzle piece symbols</p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-5">
            <h3 className="font-bold text-red-800 mb-2 uppercase text-xs">Spooling Protection (flow-root):</h3>
            <p className="text-sm text-gray-800">Dense paragraphs must be converted into scannable grids (<code className="bg-white px-1 rounded">grid-cols-1 md:grid-cols-2</code>). All outer card containers must use <code className="bg-white px-1 rounded">flow-root</code> to ensure background colors wrap correctly around floats.</p>
          </div>
        </div>
      </section>

      {/* 7. CARD STYLING & COLORS */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2 border-b pb-2">
          <Palette className="text-[#2abcd4]" /> CARD STYLING & COLORS
        </h2>
        
        <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-[#0c264d] mb-3 uppercase text-xs">Standard Card Color Rules</h3>
          <p className="text-sm text-gray-700 mb-4">
            Card backgrounds must <strong>always</strong> be a pastel version of our core colors, paired with a darker border of the same color family.
          </p>
          <ul className="list-disc ml-5 text-sm text-gray-700 space-y-3">
            <li><strong>Cyan Cards:</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">bg-cyan-50 border-2 border-[#2abcd4]</code></li>
            <li><strong>Yellow/Gold Cards:</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">bg-yellow-50 border-2 border-[#ffd166]</code></li>
            <li><strong>Navy/Gray Cards:</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">bg-slate-50 border-2 border-[#0c264d]</code></li>
            <li><strong>Muted Gray Cards:</strong> <code className="bg-[#f0f9ff] px-2 py-1 rounded break-words">bg-[#f0f9ff] border-2 border-[#be185d]</code></li>
          </ul>
        </div>
          
      

        <div className="bg-[#fdf2f8] border-l-4 border-[#be185d] p-5 rounded-r-lg shadow-sm mb-6">
          <h3 className="font-bold text-[#831843] mb-2 uppercase text-xs">Accessible Warning & Myth Cards</h3>
          <p className="text-sm text-slate-700 mb-3">
            Standard bright red is banned due to harsh contrast and accessibility concerns. For "What it is NOT" sections, debunked myths, or critical impacts, strictly use the Maroon/Pink accessible palette:
          </p>
          <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
            <li><strong>Background:</strong> Soft Pink (<code className="bg-white px-1 rounded text-[#831843] border border-[#fbcfe8]">bg-[#fdf2f8]</code>)</li>
            <li><strong>Outer Borders & Icons:</strong> Deep Maroon (<code className="bg-white px-1 rounded text-[#831843] border border-[#fbcfe8]">border-[#be185d]</code> or <code className="bg-white px-1 rounded text-[#831843] border border-[#fbcfe8]">text-[#be185d]</code>)</li>
            <li><strong>Text & Headers:</strong> Dark Maroon (<code className="bg-white px-1 rounded text-[#831843] border border-[#fbcfe8]">text-[#831843]</code>)</li>
            <li><strong>Inner Grid Cards:</strong> Use a muted gray background with a thick left accent border (<code className="bg-[#f0f9ff] px-1 rounded text-[#831843] border border-[#fbcfe8]">bg-[#f0f9ff] border-l-4 border-[#be185d]</code>).</li>
          </ul>
        </div>
                <div className="bg-[#f0f9ff] border-l-4 border-[#2abcd4] p-5 mb-6 rounded-r-xl shadow-sm mb-6">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Typography Sizing: Paragraphs vs. Mini-Card Lists</h3>
          <ul className="list-disc ml-5 text-sm text-slate-700 space-y-3">
            <li><strong>Intro & Hero Paragraphs (<code className="bg-white px-1 text-green-700 rounded border border-gray-200">text-sm</code>):</strong> Any standard paragraph text floating next to an image or below a hero graphic must remain <code className="bg-white px-1 rounded">text-sm</code>.</li>
            <li><strong>Mini-Card Bulleted Lists (<code className="bg-white px-1 text-green-700 rounded border border-gray-200">text-xs</code>):</strong> Bulleted lists placed inside smaller grid cards must be scaled down to <code className="bg-white px-1 rounded">text-xs</code> to prevent cramped text.</li>
          </ul>
        </div>
      </section>
{/* COLOR PALETTE */}
      <section className="mb-10">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2 border-b pb-2">
          <Palette className="text-[#2abcd4]" /> COLOR PALETTE
        </h2>
        
        <h3 className="text-[#0c264d] font-bold text-lg mb-3">Primary Colors</h3>
        <div className="space-y-2 mb-4 ml-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#ffd166'}}></div>
            <p className="text-sm text-slate-700"><strong>Yellow (Primary):</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#ffd166</code> - Used for buttons, tab backgrounds, highlights</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#2abcd4'}}></div>
            <p className="text-sm text-slate-700"><strong>Cyan (Accent):</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#2abcd4</code> - Used for borders, links, decorative elements</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#0A9DC4'}}></div>
            <p className="text-sm text-slate-700"><strong>Dark Cyan (Professional):</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#0A9DC4</code> - Used for active tab states, background colors</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#0c264d'}}></div>
            <p className="text-sm text-slate-700"><strong>Dark Navy Blue (Text/Headers):</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#0c264d</code> - Primary text color, headers, hover states</p>
          </div>
        </div>

        <h3 className="text-[#0c264d] font-bold text-lg mb-3 mt-6">Secondary Colors</h3>
        <div className="space-y-2 mb-4 ml-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#10b981'}}></div>
            <p className="text-sm text-slate-700"><strong>Bright Green (Citations):</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#10b981</code> - ONLY for citation superscript numbers</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#ffffff'}}></div>
            <p className="text-sm text-slate-700"><strong>White:</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#ffffff</code> - Card backgrounds, content areas</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#f0f9ff'}}></div>
            <p className="text-sm text-slate-700"><strong>Light Blue Background:</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#f0f9ff</code> - Alternate section backgrounds</p>
          </div>
        </div>

        <h3 className="text-[#0c264d] font-bold text-lg mb-3 mt-6">Color Usage Rules</h3>
        <ul className="list-disc ml-8 space-y-2 text-sm text-slate-700">
          <li>Citation numbers must ALWAYS be <code className="bg-gray-100 px-2 py-1 rounded break-words">#10b981</code> (bright green).</li>
          <li>Tab active states: Always Dark Cyan (<code className="bg-gray-100 px-2 py-1 rounded break-words">#0A9DC4</code>) with white text.</li>
          <li>Tab/Button hover states: Always Navy (<code className="bg-gray-100 px-2 py-1 rounded break-words">#0c264d</code>) with white text.</li>
          <li>Tab resting states: Always Yellow (<code className="bg-gray-100 px-2 py-1 rounded break-words">#ffd166</code>) with Navy text.</li>
        </ul>
      </section>
      {/* 8. TABS & NAVIGATION BUTTONS */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <Smartphone className="text-[#2abcd4]" /> TABS & NAVIGATION BUTTONS
        </h2>
        
       <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-[#0c264d] mb-4 uppercase text-xs">Font Rules & Styling</h3>
          <ul className="list-disc ml-5 text-sm text-gray-700 space-y-2 mb-4">
            <li className="text-red-600 font-bold">STRICT RULE: NO bolding (<code className="bg-red-50 px-1 rounded">font-bold</code>) is allowed on tabs, standard navigation buttons, or header <code className="bg-red-50 px-1 rounded">&lt;h1&gt;</code> tags. Text must be <code className="bg-red-50 px-1 rounded break-words">font-normal</code>.</li>
            <li><strong>Exception:</strong> "Read more →" buttons at the bottom of main overview sections <strong>MUST</strong> use <code className="bg-gray-100 px-1 rounded break-words">font-bold</code> styling.</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">Resting State</h3>
            <p className="text-xs mb-3 text-gray-600">Yellow background with Navy text.</p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded break-words whitespace-pre-wrap">
              bg-[#ffd166] text-[#0c264d]
            </code>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">Hover State</h3>
            <p className="text-xs mb-3 text-gray-600">Navy background with White text.</p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded break-words whitespace-pre-wrap">
              hover:bg-[#0c264d] hover:text-white
            </code>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">Active / Highlighted</h3>
            <p className="text-xs mb-3 text-gray-600">Darker Cyan background with White text.</p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded break-words whitespace-pre-wrap">
              bg-[#0A9DC4] text-white
            </code>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Standard "Read More" Button Class</h3>
          <code className="text-sm font-bold bg-white text-blue-600 p-3 rounded border border-blue-200 block w-full break-all whitespace-pre-wrap">
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          </code>
        </div>
      </section>
<section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <Layout className="text-[#2abcd4]" /> MORE TABS, NAVIGATION & REFERENCE FLOW
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border-2 border-[#2abcd4] p-5 rounded-xl shadow-sm">
            <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Tab Layout & Placement</h3>
            <p className="text-sm text-gray-700 mb-3">
              Subpages use a standardized 3-tab navigation system. The tab container must be placed immediately below the main page header and back button.
            </p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded break-words whitespace-pre-wrap">
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 clear-both"
            </code>
          </div>

          <div className="bg-white border-2 border-[#2abcd4] p-5 rounded-xl shadow-sm">
            <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Back Button Positioning</h3>
            <p className="text-sm text-gray-700 mb-3">
              Responsive back buttons (<code className="bg-gray-100 px-1 rounded">← All About...</code>) must appear in exactly two places on every subpage:
            </p>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li><strong>Top:</strong> Right-aligned inside the H1 header flexbox.</li>
              <li><strong>Bottom:</strong> Right-aligned just above the references section using <code className="bg-gray-100 px-1 rounded">flex justify-end mt-8 mb-6 clear-both</code>.</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-[#ffd166] p-5 rounded-r-xl shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Tab-Isolated Reference Numbering</h3>
          <p className="text-sm text-slate-700 mb-3">
            Because tabs hide and show content dynamically, inline citation numbering cannot flow globally across the entire file.
          </p>
          <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
            <li><strong>Restart at 1:</strong> Inline superscripts must restart at <code className="bg-white px-1 rounded">1</code> at the top of <strong>each individual tab</strong>.</li>
            <li><strong>Chronological Flow:</strong> Within a single tab, numbers flow chronologically top-to-bottom.</li>
            <li><strong>The Master List:</strong> The "Cited Studies & Statistics" section at the bottom of the page combines all citations from all tabs into one master numbered list. The numbered superscripts in the text must map to this master bottom list.</li>
          </ul>
        </div>
      </section>
      {/* 9. INFORMATION ARCHITECTURE */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <Layout className="text-[#2abcd4]" /> INFORMATION ARCHITECTURE
        </h2>
        <div className="bg-[#f0f9ff] border-l-4 border-[#2abcd4] p-5 mb-6 rounded-r-xl shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">File Naming Convention:</h3>
          <p className="text-sm text-gray-700 mb-2">All graphics must follow this exact naming structure to maintain consistency across the platform:</p>
          <code className="text-sm font-bold bg-white text-[#2abcd4] p-3 rounded border border-[#2abcd4] border-opacity-20 block w-full break-all">
            neurodivergence-section-tab-detail-about-pic.webp
          </code>
        </div>
        <div className="bg-[#ffd166] bg-opacity-20 border-l-4 border-[#ffd166] p-5 rounded-r-lg">
          <h3 className="font-bold text-[#0c264d] mb-2">Graphic Naming Integrity</h3>
          <p className="text-sm text-gray-800">If a graphic's file name no longer matches its tab location due to restructuring (e.g., an "overview" graphic is moved into the "genetics" tab), <strong>maintain the original file name</strong>. Do not rename the file, as this prevents broken links across the platform.</p>
        </div>
      </section>

      {/* CRITICAL ALERTS */}
      <section className="mb-12">
        <div className="bg-red-200 text-[#0c264d] p-6 rounded-2xl flex items-start gap-4 shadow-xl mb-6">
          <AlertTriangle size={48} className="shrink-0 text-red-600" />
          <div className="min-w-0">
            <h2 className="text-xl font-bold mb-2 uppercase text-[#0c264d]">Graphic Integrity Rule</h2>
            <p className="text-sm leading-relaxed font-medium text-[#0c264d]">
              When updating text or citations, ALWAYS preserve imported graphics. Do NOT remove <code className="bg-white px-1 rounded text-[#0c264d] break-words">ImageWithFallback</code> components or change image placements unless explicitly requested.
            </p>
          </div>
        </div>
        
        <div className="bg-yellow-200 border-l-4 border-[#2abcd4] p-5 mb-6 rounded-r-xl shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Image Component Imports</h3>
          <p className="text-sm text-slate-700">
            All images must utilize the custom fallback component. Ensure the relative import path is correct based on the file's depth in the directory structure. 
          </p>
          <code className="bg-white px-2 py-1 text-[#0c264d] rounded border border-gray-200 mt-2 block w-full text-xs">
            import &#123; ImageWithFallback &#125; from '../../figma/ImageWithFallback';
          </code>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t-4 border-[#0c264d] pt-8 text-center">
        <p className="text-[#0c264d] font-bold text-lg italic">End of Official Brainopedia Standards</p>
      </div>

    </article>
  );
}