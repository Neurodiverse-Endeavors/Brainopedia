import { Code, Layout, Palette, FileText, CheckCircle, ImageIcon, Smartphone, Brain, AlertTriangle, Type, Move, Sparkles, Square } from 'lucide-react';

interface ProjectStandardsProps {
  setCurrentArticle?: (article: string) => void;
}

export default function ProjectStandards({ setCurrentArticle }: ProjectStandardsProps) {
  return (
   <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      
      {/* Header */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10">
        <h1 className="text-4xl text-[#0c264d] font-normal mb-2">
          Brainopedia Project Standards & Design System
        </h1>
        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Last Updated: October 2026</p>
        <p className="mt-4 text-[#0c264d]">
          The definitive technical and editorial manual for the Brainopedia digital encyclopedia.
        </p>
      </div>

      {/* EXPORTS, IMPORTS & ROUTING */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <Code className="text-[#2abcd4]" /> EXPORTS, IMPORTS & ROUTING
        </h2>
        
        <div className="bg-red-50 border-l-4 border-[#be185d] p-5 mb-6 rounded-r-xl shadow-sm">
          <h3 className="font-bold text-red-800 mb-2 uppercase text-xs">The Router Crash Rule (No Default Exports)</h3>
          <p className="text-sm text-slate-700">
            Brainopedia's routing engine strictly requires <strong>Named Exports</strong>. Using <code className="bg-white px-1 text-red-700 rounded border border-red-200">export default function</code> will instantly crash the app and cause a blank beige screen.
          </p>
          <ul className="list-disc ml-5 mt-3 text-sm text-slate-700 space-y-2">
            <li><strong>DO USE:</strong> <code className="bg-white px-1 text-green-700 rounded border border-gray-200">export function ArticleName()</code></li>
            <li><strong>NEVER USE:</strong> <code className="bg-white px-1 text-red-700 rounded border border-red-200">export default function ArticleName()</code></li>
          </ul>
        </div>

        <div className="bg-[#f0f9ff] border-l-4 border-[#2abcd4] p-5 rounded-r-xl shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Modern React Imports</h3>
          <p className="text-sm text-slate-700">
            Because we use modern React (17+), importing React just to write JSX is obsolete and will trigger VS Code warnings (yellow squiggles). Only import specific hooks when needed.
          </p>
          <ul className="list-disc ml-5 mt-3 text-sm text-slate-700 space-y-2">
            <li><strong>DO USE:</strong> <code className="bg-white px-1 text-green-700 rounded border border-gray-200">import &#123; useState &#125; from 'react';</code></li>
            <li><strong>REMOVE:</strong> <code className="bg-white px-1 text-red-700 rounded border border-red-200">import React from 'react';</code></li>
          </ul>
        </div>
      </section>

      {/* 1. IMAGE PLACEMENT, CLEARING & NAMING STANDARDS */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <Move className="text-[#2abcd4]" /> IMAGE PLACEMENT & SIZING
        </h2>

        <div className="bg-[#f0f9ff] border-l-4 border-[#2abcd4] p-5 mb-6 rounded-r-xl shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">File Naming Convention:</h3>
          <p className="text-sm text-gray-700 mb-2">All graphics must follow this exact naming structure to maintain consistency across the platform:</p>
          <code className="text-sm font-bold bg-white text-[#2abcd4] p-3 rounded border border-[#2abcd4] border-opacity-20 block w-full break-all">
            neurodivergence-section-tab-detail-about-pic.webp
          </code>
        </div>
        <div className="bg-[#f0f9ff] border-l-4 border-[#2abcd4] p-5 mb-6 rounded-r-xl shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Graphic File Naming Convention</h3>
          <p className="text-sm text-slate-700 mb-4">
            When naming placeholder or final graphic files, <strong>NEVER use the word "hero"</strong>. Because layouts frequently change and multiple graphics may be added to a single tab, "hero" creates naming conflicts. Instead, use a sequential numbering system (`-1`, `-2`) or a precise descriptive keyword attached to the tab name.
          </p>
          
          <ul className="list-disc ml-5 text-sm text-slate-700 space-y-3">
            <li>
              <strong>DO USE:</strong> <code className="bg-white px-2 py-0.5 text-green-700 rounded border border-gray-200">hyperlexia-diagnosis-tab2-1.webp</code>
            </li>
            <li>
              <strong>DO USE:</strong> <code className="bg-white px-2 py-0.5 text-green-700 rounded border border-gray-200">hyperlexia-diagnosis-tab2-2.webp</code>
            </li>
            <li>
              <strong>NEVER USE:</strong> <code className="bg-white px-2 py-0.5 text-red-700 rounded border border-red-200">hyperlexia-diagnosis-cognitive-hero.webp</code>
            </li>
          </ul>
        </div>
        <p className="text-sm mb-6 text-gray-600">All graphics must be implemented using the <code className="bg-gray-100 px-1 rounded">ImageWithFallback</code> component. Use these strict layout patterns:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">1. The Main Page Float (w-56, Mobile-First)</h3>
            <p className="text-xs mb-3 text-gray-600">Used strictly on main introductory condition pages. Centers cleanly on mobile screens and floats right with text wrap on desktop.</p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded whitespace-pre-wrap break-words">
              className="w-56 max-w-full h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 mt-1 rounded-lg shadow-sm"
            </code>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">2. The Subpage Centered Hero (w-64)</h3>
            <p className="text-xs mb-3 text-gray-600">Default standard for ALL graphics inside colored UI cards on subpages. Centers on both mobile and desktop and scales via max-w-full.</p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded whitespace-pre-wrap break-words">
              className="block mx-auto w-64 max-w-full h-auto mb-6 rounded-lg shadow-sm"
            </code>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">3. The Wide Centered (w-96)</h3>
            <p className="text-xs mb-3 text-gray-600">Used for wider diagrams or detailed infographics where the standard w-64 is too small to read comfortably.</p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded whitespace-pre-wrap break-words">
              className="block mx-auto w-96 max-w-full h-auto mb-6 rounded-lg shadow-sm"
            </code>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-bold text-[#0c264d] text-sm mb-2">4. The Full Width Hero (w-full)</h3>
            <p className="text-xs mb-3 text-gray-600">Used only when a complex chart or visual needs to stretch across the absolute entire width of its container.</p>
            <code className="text-sm block bg-gray-900 text-green-400 p-3 rounded whitespace-pre-wrap break-words">
              className="block mx-auto w-full max-w-full h-auto mb-6 rounded-lg shadow-sm"
            </code>
          </div>
        </div>

        <div className="text-xs text-gray-500 mt-3 mb-6 italic">
          *Note: Always append the specific card's border color to the end of the class string (e.g., <code className="bg-gray-100 px-1 rounded not-italic">border border-[#ffd166]</code>).
        </div>

        {/* MOBILE GRAPHIC RESPONSIVENESS & VISIBILITY RULES */}
        <div className="bg-[#fdf2f8] border-l-4 border-[#be185d] p-5 mt-6 rounded-r-xl shadow-sm">
          <h3 className="font-bold text-[#831843] mb-2 uppercase text-xs flex items-center gap-2">
            <Smartphone className="text-[#be185d] w-4 h-4 shrink-0" />
            Mobile Graphic Responsiveness & Visibility Rules
          </h3>
          <p className="text-sm text-slate-700 mb-3">
            Every graphic on Brainopedia must be visible and properly proportioned on mobile phones without overflowing its card or squishing text into narrow columns:
          </p>
          <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
            <li>
              <strong>NEVER Hide Graphics on Mobile:</strong> Never use <code className="bg-white px-1.5 py-0.5 text-red-700 rounded border border-red-200">hidden sm:block</code> or <code className="bg-white px-1.5 py-0.5 text-red-700 rounded border border-red-200">hidden md:block</code> on article or subpage images. All graphics must display on mobile screens.
            </li>
            <li>
              <strong>No Floats Inside Subpage Cards:</strong> Inside tabbed subpage cards (Overview, Symptoms, Causes, Diagnosis, Support, Living), <strong>never</strong> use <code className="bg-white px-1.5 py-0.5 text-red-700 rounded border border-red-200">float-right</code>. Always place the graphic immediately below the card's <code className="bg-white px-1 rounded border border-gray-200">&lt;h2&gt;</code> header as a centered hero using <code className="bg-white px-1.5 py-0.5 text-green-700 rounded border border-gray-200">block mx-auto w-64 max-w-full h-auto mb-6</code>.
            </li>
            <li>
              <strong>Always Include <code className="bg-white px-1 rounded border border-gray-200">max-w-full h-auto</code>:</strong> Every fixed-width image (<code className="bg-white px-1 rounded border border-gray-200">w-56</code>, <code className="bg-white px-1 rounded border border-gray-200">w-64</code>, <code className="bg-white px-1 rounded border border-gray-200">w-96</code>) must include <code className="bg-white px-1.5 py-0.5 text-green-700 rounded border border-gray-200">max-w-full h-auto</code> so it automatically shrinks if a phone screen or card padding is narrower than the image width.
            </li>
            <li>
              <strong>Main Page Floats Must Be Responsive:</strong> When floating images on main condition landing pages, always use <code className="bg-white px-1.5 py-0.5 text-green-700 rounded border border-gray-200">block mx-auto float-none md:float-right md:ml-6</code> so the image centers cleanly above the paragraph on phones and only floats right on tablet/desktop (<code className="bg-white px-1 rounded border border-gray-200">md:</code> and up).
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 mt-6 rounded-r-lg shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">The H2 Alignment Rule (Main Landing Pages Only)</h3>
          <p className="text-sm text-gray-700">
            On main condition landing pages where images float right on desktop, place the <code className="bg-white px-1 rounded border border-gray-200">&lt;ImageWithFallback&gt;</code> tag in the code <strong>immediately before</strong> the <code className="bg-white px-1 rounded border border-gray-200">&lt;h2&gt;</code> tag so the floated image aligns flush with the top of the section header. On subpage cards (where images are centered <code className="bg-white px-1 rounded border border-gray-200">w-64</code> heroes), place the image <strong>immediately after</strong> the centered <code className="bg-white px-1 rounded border border-gray-200">&lt;h2&gt;</code> tag.
          </p>
        </div>
      </section>

      {/* 2. CITATION SYSTEM */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <FileText className="text-[#2abcd4]" /> CITATION SYSTEM
        </h2>
        
        <div className="bg-[#ffd166] bg-opacity-20 border-l-4 border-[#ffd166] p-5 rounded-r-lg mb-6">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">The Self-Contained Reference Rule</h3>
          <p className="text-sm text-gray-800">
            <strong>There are no master reference lists on Brainopedia.</strong> Every single page and subpage must contain its own self-contained, context-specific reference section at the bottom. Do not omit the reference section assuming it exists elsewhere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
           <div className="bg-[#10b981] bg-opacity-20 border-l-4 border-[#10b981] p-4 text-sm">
            <p className="font-bold mb-2 uppercase text-[#0c264d]">ONLY Use Inline Citations When:</p>
            <ul className="list-disc ml-4 space-y-2 text-slate-700">
              <li>The text cites hard statistics, explicitly named theories, or specific clinical protocols.</li>
              <li>These items go into the <strong>Cited Studies & Statistics</strong> reference list.</li>
              <li><strong>Tab Rule:</strong> Inline citations must restart at 1 for individual tabs and flow chronologically.</li>
            </ul>
          </div>
          <div className="bg-cyan-50 border-l-4 border-[#2abcd4] p-4 text-sm">
            <p className="font-bold mb-2 uppercase text-cyan-800">NEVER Use Inline Citations For:</p>
            <ul className="list-disc ml-4 space-y-2 text-slate-700">
              <li>General foundational knowledge.</li>
              <li>Descriptive symptom lists.</li>
              <li>These items must be placed directly into the <strong>Background Sources</strong> list with NO inline superscript.</li>
              <li>ALL PAGES MUST HAVE BACKGROUND SOURCES.</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 text-green-400 p-6 rounded-xl shadow-inner mb-6">
          <h3 className="text-white font-bold mb-2 text-sm">The "Naked" Superscript Standard</h3>
          <p className="text-xs text-gray-400 mb-3">All inline citations must be flush with the text, using strictly this class string:</p>
          <code className="block bg-black p-3 rounded text-xs break-words whitespace-pre-wrap">
            {`Statistics show 10%<sup className="text-[#10b981] font-bold ml-[2px] text-[10px]">1</sup>`}
          </code>
        </div>
      </section>

      {/* 3. REFERENCE SECTION MANDATORY CODE */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <CheckCircle className="text-[#2abcd4]" /> REFERENCE SECTION CODE
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 text-sm text-gray-800">
          <strong>Mandatory Layout Rule:</strong> References must <strong>NOT</strong> be contained within a box, card, or styled background container. They sit flush on the page. Always use <code className="bg-white px-1 rounded text-xs break-words">{`<div className="clear-both mt-16 font-spartan">`}</code> as the main wrapper to clear floated images and provide exactly 64px of top margin spacing.
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 text-sm text-gray-800">
          <strong>Mandatory Header Styling:</strong> Reference sub-headers must always include the subtle bottom border line using the exact classes: <code className="bg-white px-1 rounded text-xs break-words">border-b border-[#10b981] border-opacity-20 pb-1</code> (or cyan for Background Sources).
        </div>

        <div className="bg-red-100 border-4 border-[#be185d] p-6 rounded-xl overflow-hidden min-w-0">
          <pre className="bg-white p-4 rounded text-xs overflow-x-auto border border-red-200 block break-words whitespace-pre-wrap">
{`{/* ===== REFERENCES SECTION ===== */}
<div className="clear-both mt-16 font-spartan">
  <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
  
  {/* CITED STUDIES: GREEN */}
  <div className="mb-6">
    <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b border-[#10b981] border-opacity-20 pb-1">
      Cited Studies & Statistics
    </h4>
    <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
      <p>1. Author. (Year). "Title." <i>Journal</i>.</p>
    </div>
  </div>
  
  {/* BACKGROUND SOURCES: CYAN */}
  <div>
    <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
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

      {/* 4. EDITORIAL TONE & FRAMEWORK */}
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
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">The Two-Sentence Rule (Main Landing Pages Only):</h3>
          <p className="text-sm text-gray-700 mb-3">
            To maintain highly scannable, digestible content, the introductory section cards on <strong>main condition landing pages</strong> must strictly be condensed into <strong>one single paragraph containing exactly two sentences</strong>.
          </p>
          <div className="bg-blue-50 p-3 rounded border-l-4 border-[#0A9DC4] text-xs text-slate-700">
            <strong>CRITICAL EXCEPTION (Subpages Need Depth):</strong> This two-sentence truncation rule does <strong>NOT</strong> apply to the detailed subpage components (Overview, Symptoms, Causes, Diagnosis, Support, Living). Subpages and their respective tabs must retain their comprehensive, long-form educational paragraphs to fully serve their purpose.
          </div>
        </div>
      </section>

      {/* 5. SYMBOL & EMOJI POLICIES */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <ImageIcon className="text-[#2abcd4]" /> SYMBOLS & EMOJIS
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-[#2abcd4] p-5 rounded-xl shadow-sm">
            <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Autism Representation:</h3>
            <p className="text-sm text-slate-700"><strong>ALWAYS:</strong> Gold infinity symbol (∞)</p>
            <p className="text-sm text-[#be185d] font-bold mt-1">NEVER: Puzzle piece symbols</p>
          </div>
          
          <div className="bg-[#fdf2f8] border-l-4 border-[#be185d] p-5 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-[#831843] mb-2 uppercase text-xs">Emoji Policy:</h3>
            <p className="text-sm text-slate-700">DO NOT use emojis in headings or body text. Maintain professional tone.</p>
          </div>
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
            <p><strong>Yellow (Primary):</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#ffd166</code> - Used for buttons, tab backgrounds, highlights</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#2abcd4'}}></div>
            <p><strong>Cyan (Accent):</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#2abcd4</code> - Used for borders, links, decorative elements</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#0A9DC4'}}></div>
            <p><strong>Dark Cyan (Professional):</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#0A9DC4</code> - Used for active tab states, background colors</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#0c264d'}}></div>
            <p><strong>Dark Navy Blue (Text/Headers):</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#0c264d</code> - Primary text color, headers, hover states</p>
          </div>
        </div>

        <h3 className="text-[#0c264d] font-bold text-lg mb-3 mt-6">Secondary Colors</h3>
        <div className="space-y-2 mb-4 ml-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#10b981'}}></div>
            <p><strong>Bright Green (Citations ONLY):</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#10b981</code> - ONLY for citation superscript numbers. NEVER use for borders or icons.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#ffffff'}}></div>
            <p><strong>White:</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#ffffff</code> - Card backgrounds, content areas</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#576d8e'}}></div>
            <p><strong>Canva Slate Background:</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#576d8e</code> - Used at 10% or 20% opacity for alternate section backgrounds</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded border-2 border-gray-300 shrink-0" style={{backgroundColor: '#f4f4f4'}}></div>
            <p><strong>Beige Background:</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">#f4f4f4</code> - Background, book covers, mini cards if variety need.</p>
          </div>
      </div>
      
      </section>

      {/* CARD STYLING & CONTAINERS */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2 border-b pb-2">
          <Layout className="text-[#2abcd4]" /> CARD STYLING & CONTAINERS
        </h2>
        <div className="bg-[#576d8e]/10 border border-gray-200 p-5 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-[#0c264d] mb-3 uppercase text-xs">Standard Card Color Rules</h3>
          <p className="text-sm text-gray-700 mb-4">
            To break up dense text, content sections should be wrapped in colorful, styled cards. Card backgrounds must <strong>always</strong> be a lightened/pastel version of our core colors, paired with a darker, thicker border of the same color family. Use these exact combinations and inner-card pairings unless otherwise specified:
          </p>

<div className="bg-blue-50 border-l-4 border-[#0A9DC4] p-4 mb-5 rounded-r-lg shadow-sm">
            <h4 className="text-xs font-bold text-[#0c264d] uppercase mb-1">Standard Tab Sequence & Layout Rule</h4>
            <p className="text-xs text-slate-700 leading-relaxed mb-2">
              For standard 3-tab pages, strictly follow this styling sequence for the primary (top) card to maintain visual rhythm: <strong>Tab 1 = bg-[#2abcd4]/20, Tab 2 = bg-[#0c264d]/20, Tab 3 = bg-[#ffd166]/20.</strong> 
            </p>
            
            {/* Added mb-4 here for spacing! */}
            <p className="text-xs text-slate-700 leading-relaxed mb-4">
              <strong>Multiple Cards Per Tab:</strong> Because most tabs have two or more large container cards, you should mix styles from the other primary cards on the subsequent containers (alternating Cyan, Navy, or Yellow) to provide visual variety. For example, if Tab 1 has two cards, Card 1 is Cyan, and Card 2 can be Navy or Yellow.
            </p>

            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>COLOR CHOICES for BORDERS of 3D BOXES:</strong> When creating the borders for the 3D boxes or the icon badges or bare icons or steps, please try not to use the two shades of cyan together. So place the #2abcd4 and #0a9dc4 NOT next to each other. Use the secondary Canva Slate Background #576d8e if the PRIMARY colors have been used.
            </p>
          </div>

          <ul className="list-disc ml-5 text-sm text-gray-700 space-y-4">
            <li>
              <strong>Cyan Cards (Tab 1 Default):</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">bg-[#2abcd4]/20 border-2 border-[#2abcd4]</code>
              <p className="mt-1 text-slate-600">
                Inner cards must use standard <strong>Lucide Icons</strong> stacked <strong>directly above the text</strong> (using <code className="bg-gray-100 px-1 rounded text-xs">flex flex-col items-center text-center</code>). Do not place icons to the left, as it forces text into narrow columns.
              </p>
            </li>
            <li>
              <strong>Navy Cards (Tab 2 Default):</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl</code>
              <p className="mt-1 text-slate-600">
                Inner cards <em>MUST</em> utilize the <strong>3D Accent Border</strong> (colored left stripe) on a stark white background using Navy, Cyan, or Dark Cyan. Inside these 3D mini cards, <strong>do NOT use icons, numbered circles, or CSS dot bullets</strong>—the left stripe provides enough visual hierarchy on its own.
              </p>
            </li>
            <li>
              <strong>Yellow Cards (Tab 3 Default):</strong> <code className="bg-gray-100 px-2 py-1 rounded break-words">bg-[#ffd166]/20 border-2 border-[#ffd166]</code>
              <p className="mt-1 text-slate-600">
                Inner cards must use <strong>Icon Badges (Circular Backgrounds)</strong> stacked <strong>directly above the text</strong>. Do not use gold icons against the yellow/#ffd166 backgrounds. Use navy color #0c264d instead. To make them pop against the yellow card background, always include the double ring effect: <code className="bg-gray-100 px-1 rounded text-xs">shadow-md ring-2 ring-offset-2 ring-[#0c264d]</code>.
              </p>
            </li>
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
            <li><strong>Inner Grid Cards:</strong> Use a white background with a thick left accent border (<code className="bg-white px-1 rounded text-[#831843] border border-[#fbcfe8]">bg-white border-l-4 border-[#be185d]</code>).</li>
          </ul>
        </div>

        <div className="bg-slate-100 border-2 border-slate-600 rounded-xl p-6 shadow-sm clear-both mb-6">
          <h3 className="font-bold text-[#0c264d] mb-4 uppercase text-xs border-b border-slate-300 pb-2">3D Accent Border Cards (No Redundant Icons)</h3>
          <p className="text-sm text-slate-700 mb-4">
            When a section has too many repetitive Lucide icons, or when placing inner cards inside a Slate container, use this "3D stripe" design pattern to create visual hierarchy. It uses absolute positioning to paint a thick accent stripe down the left edge. <strong>Do NOT combine these with dot bullets or numbered circles</strong>—the stripe itself is the visual anchor.
          </p>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden max-w-sm mb-4">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
            <div className="pl-2">
              <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">Card Title</h3>
              <p className="text-xs text-slate-700 leading-relaxed">This is the inner card content with the thick Dark Cyan accent stripe on the left.</p>
            </div>
          </div>
          
          <code className="text-xs block bg-gray-900 text-green-400 p-3 rounded whitespace-pre-wrap break-words">
            {`<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden">
  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0A9DC4]"></div>
  <div className="pl-2">
    <h3 className="text-[#0c264d] font-bold text-sm mb-1 border-b border-gray-100 pb-1">Title</h3>
    <p className="text-xs text-slate-700">Content goes here.</p>
  </div>
</div>`}
          </code>
        </div>

        <div className="bg-slate-100 border-2 border-slate-600 rounded-xl p-6 shadow-sm clear-both mb-6">
          <h3 className="font-bold text-[#0c264d] mb-4 uppercase text-xs border-b border-slate-300 pb-2">Custom CSS Dot Bullets</h3>
          <p className="text-sm text-slate-700 mb-4">
            Instead of standard Lucide icons, use a solid CSS circle using the primary color palette for a clean, minimalist bullet point.
          </p>
          
          {/* VISUAL EXAMPLE */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-start gap-3 mb-4 max-w-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
            <div>
              <h3 className="text-[#0c264d] font-bold text-sm mb-1">Bullet Header</h3>
              <p className="text-xs text-slate-700 leading-relaxed">This card uses a colored Navy CSS dot instead of an icon.</p>
            </div>
          </div>

          <code className="text-xs block bg-gray-900 text-green-400 p-3 rounded whitespace-pre-wrap break-words">
            {`<div className="flex items-start gap-3">
  <div className="w-2.5 h-2.5 rounded-full bg-[#0c264d] mt-1.5 shrink-0"></div>
  <div>
    <h3 className="text-[#0c264d] font-bold text-sm mb-1">Title</h3>
    <p className="text-xs text-slate-700">Content goes here.</p>
  </div>
</div>`}
          </code>
        </div>

        <div className="bg-slate-100 border-2 border-slate-600 rounded-xl p-6 shadow-sm clear-both mb-6">
          <h3 className="font-bold text-[#0c264d] mb-4 uppercase text-xs border-b border-slate-300 pb-2">Numbered Steps & Circular Badges</h3>
          <p className="text-sm text-slate-700 mb-4">
            Use perfect flexbox circles (<code className="bg-white px-1 rounded border border-gray-200">rounded-full flex items-center justify-center</code>) to wrap numbers or icons for step-by-step processes, rankings, or prominent list items.
          </p>
          
          {/* VISUAL EXAMPLE */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4 mb-4 max-w-sm">
            <div className="w-8 h-8 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center font-bold shrink-0 shadow-sm border border-[#ffd166] border-opacity-30">
              1
            </div>
            <div>
              <p className="text-sm text-[#0c264d] font-bold">Step One: Definition</p>
              <p className="text-xs text-slate-500">Subtitle or short description.</p>
            </div>
          </div>

          <code className="text-xs block bg-gray-900 text-green-400 p-3 rounded whitespace-pre-wrap break-words">
            {`<div className="flex items-center gap-4">
  <div className="w-8 h-8 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center font-bold shrink-0">
    1
  </div>
  <div>
    <p className="text-sm text-[#0c264d] font-bold">Step text here</p>
    <p className="text-xs text-slate-500">Subtitle text</p>
  </div>
</div>`}
          </code>
        </div>

        {/*TYPES OF ICON BADGES */}
        <div className="bg-slate-100 border-2 border-slate-600 rounded-xl p-6 shadow-sm clear-both mb-6">
          <h3 className="font-bold text-[#0c264d] mb-4 uppercase text-xs border-b border-slate-300 pb-2">The VARIOUS Types of Icon Badges</h3>
          <p className="text-sm text-slate-700 mb-4">
            Instead of bare icons, use perfect flexbox shapes to create badges. <strong className="text-[#0c264d]">Note: Bare, darker-colored icons can still be used without a background when you need to reduce visual repetition.</strong> Here are the approved styles for inner card badges:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* 1. Monochromatic */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-[#2abcd4] border-opacity-30 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd] mb-3">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-[#0c264d] font-bold text-xs mb-1">1. Monochromatic</h3>
              <p className="text-[10px] text-slate-500 leading-relaxed">Light background with a darker icon from the same color family.</p>
            </div>

            {/* 2. High Contrast (Gold/Navy Rule) */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#ffd166]/20 text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#ffd166] border-opacity-50 mb-3">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="text-[#0c264d] font-bold text-xs mb-1">2. High Contrast</h3>
              <p className="text-[10px] text-slate-500 leading-relaxed">Gold /20 backgrounds MUST use Navy icons for visibility.</p>
            </div>

            {/* 3. Double Ring */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-[#ffd166] flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d] mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-[#0c264d] font-bold text-xs mb-1">3. Double Ring</h3>
              <p className="text-[10px] text-slate-500 leading-relaxed">Combination colors with an offset ring for maximum pop.</p>
            </div>

            {/* 4. Rounded Square */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-[#f0fdf4] text-[#10b981] flex items-center justify-center shrink-0 shadow-sm border border-[#bbf7d0] mb-3">
                <Square className="w-5 h-5" />
              </div>
              <h3 className="text-[#0c264d] font-bold text-xs mb-1">4. Rounded Square</h3>
              <p className="text-[10px] text-slate-500 leading-relaxed">Use <code className="bg-gray-100 rounded px-1">rounded-lg</code> to break up repetitive circle layouts.</p>
            </div>
          </div>

          {/* CODE SNIPPETS */}
          <div className="bg-gray-900 rounded-lg p-4 space-y-4">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">1. Monochromatic (Cyan Example)</p>
              <code className="text-xs block text-green-400 whitespace-pre-wrap break-words">
{`<div className="w-10 h-10 rounded-full bg-[#e0f2fe] text-[#0A9DC4] flex items-center justify-center shrink-0 shadow-sm border border-[#bae6fd]">
  <Brain className="w-5 h-5" />
</div>`}
              </code>
            </div>
            
            <div className="border-t border-gray-700 pt-4">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">2. High Contrast (Gold/Navy Rule)</p>
              <code className="text-xs block text-green-400 whitespace-pre-wrap break-words">
{`<div className="w-10 h-10 rounded-full bg-[#ffd166]/20 text-[#0c264d] flex items-center justify-center shrink-0 shadow-sm border border-[#ffd166] border-opacity-50">
  <Layout className="w-5 h-5" />
</div>`}
              </code>
            </div>

            <div className="border-t border-gray-700 pt-4">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">3. Double Ring (Navy/Gold Example)</p>
              <code className="text-xs block text-green-400 whitespace-pre-wrap break-words">
{`<div className="w-10 h-10 rounded-full bg-[#0c264d] text-[#ffd166] flex items-center justify-center shrink-0 shadow-md ring-2 ring-offset-2 ring-[#0c264d]">
  <Sparkles className="w-5 h-5" />
</div>`}
              </code>
            </div>

            <div className="border-t border-gray-700 pt-4">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">4. Rounded Square (Green Example)</p>
              <code className="text-xs block text-green-400 whitespace-pre-wrap break-words">
{`<div className="w-10 h-10 rounded-lg bg-[#f0fdf4] text-[#10b981] flex items-center justify-center shrink-0 shadow-sm border border-[#bbf7d0]">
  <Square className="w-5 h-5" />
</div>`}
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* TYPOGRAPHY SIZING RULE */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-4 flex items-center gap-2 border-b pb-2">
          <Type className="text-[#2abcd4]" /> TYPOGRAPHY
        </h2>

        <div className="bg-[#f0f9ff] border-l-4 border-[#2abcd4] p-5 rounded-r-xl shadow-sm mb-6">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Typography Sizing: Paragraphs vs. Mini-Card Lists</h3>
          <p className="text-sm text-slate-700 mb-6">
            To maintain a clean, breathable design hierarchy, strict font sizing rules apply to separate standard reading text from dense bulleted information.
          </p>
          <ul className="list-disc ml-5 text-sm text-slate-700 space-y-3">
            <li>
              <strong>Intro & Hero Paragraphs (<code className="bg-white px-1 text-green-700 rounded border border-gray-200">text-sm</code>):</strong> Any standard paragraph text—whether it is floating next to an image, or centered directly below a hero graphic—must remain at the standard <code className="bg-white px-1 text-green-700 rounded border border-gray-200">text-sm</code> size to ensure maximum readability.
            </li>
            <li>
              <strong>Mini-Card Bulleted Lists (<code className="bg-white px-1 text-green-700 rounded border border-gray-200">text-xs</code>):</strong> To prevent text from feeling cramped, bulleted lists placed inside smaller grid cards (especially in dense 3-column or 4-column layouts) must be scaled down.
            </li>
            <li>
              <strong>Implementation:</strong> <code className="bg-white px-1 text-[#0c264d] rounded border border-gray-200 break-all">&lt;ul className="list-disc ml-5 text-xs text-slate-700 space-y-2"&gt;</code>
            </li>
          </ul>
        </div>

        <h3 className="text-[#0c264d] font-bold text-lg mb-3">Font Family</h3>
        <ul className="list-disc ml-8 space-y-2 mb-4 text-sm text-slate-700">
          <li><strong>Primary Font:</strong> League Spartan - Used for ALL body text throughout the site</li>
          <li><strong>Fallback:</strong> system-ui, sans-serif</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold text-lg mb-3">Font Sizes & Weights</h3>
        <ul className="list-disc ml-8 space-y-2 mb-4 text-sm text-slate-700">
          <li><strong>DO NOT</strong> use Tailwind font size classes (text-xl, text-2xl, etc.) unless specifically requested</li>
          <li><strong>DO NOT</strong> use Tailwind font weight classes (font-bold, font-semibold, etc.) unless specifically requested</li>
          <li><strong>Exception:</strong> Except for the cards that have bulleted lists inside them -- as mentioned under mini-card bulleted lists above, where those are text-xs -- <code className="bg-gray-100 px-2 py-1 rounded break-words">text-sm</code> is standardized for ALL tabs across all subpages (14px)</li>
          <li>Default body text relies on globals.css styling</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold text-lg mb-3">Headers</h3>
        <ul className="list-disc ml-8 space-y-2 text-sm text-slate-700">
          <li className="text-red-600 font-bold">STRICT RULE: <code className="bg-red-50 px-1 rounded break-words">&lt;h1&gt;</code> tags MUST NEVER be bolded. Use <code className="bg-red-50 px-1 rounded break-words">font-normal</code>.</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded break-words">&lt;h2&gt;</code> and <code className="bg-gray-100 px-2 py-1 rounded break-words">&lt;h3&gt;</code> tags MUST ALWAYS be bolded (<code className="bg-gray-100 px-2 py-1 rounded break-words">font-bold</code>).</li>
          <li>Custom font sizes/weights only when user explicitly requests them</li>
        </ul>
      </section>

      {/* 6. INFORMATION ARCHITECTURE & TAB ORDERING */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <Layout className="text-[#2abcd4]" /> INFORMATION ARCHITECTURE
        </h2>

        <div className="bg-[#ffd166] bg-opacity-20 border-l-4 border-[#ffd166] p-5 rounded-r-lg">
          <h3 className="font-bold text-[#0c264d] mb-2">Graphic Naming Integrity</h3>
          <p className="text-sm text-gray-800">If a graphic's file name no longer matches its tab location due to restructuring (e.g., an "overview" graphic is moved into the "genetics" tab), <strong>maintain the original file name</strong>. Do not rename the file, as this prevents broken links across the platform.</p>
        </div>
      </section>

      {/* 7. TABS & NAVIGATION BUTTONS */}
      <section className="mb-12">
        <h2 className="text-[#0c264d] text-2xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
          <Palette className="text-[#2abcd4]" /> TABS & NAVIGATION BUTTONS
        </h2>
        
       <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm mb-6">
          <h3 className="font-bold text-[#0c264d] mb-4 uppercase text-xs">Font Rules & Styling</h3>
          <ul className="list-disc ml-5 text-sm text-gray-700 space-y-2 mb-4">
            <li><strong>Weight:</strong> Normal (<code className="bg-gray-100 px-1 rounded break-words">font-normal</code>).</li>
            <li className="text-red-600 font-bold">STRICT RULE: NO bolding (<code className="bg-red-50 px-1 rounded break-words">font-bold</code> or <code className="bg-red-50 px-1 rounded break-words">font-semibold</code>) is allowed on tabs, standard navigation buttons, or "About" buttons. Text must be <code className="bg-red-50 px-1 rounded break-words">font-normal</code>.</li>
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
        
        <div className="bg-[#f0f9ff] border-l-4 border-[#2abcd4] p-5 rounded-r-xl shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-2 uppercase text-xs">Image Component Imports</h3>
          <p className="text-sm text-slate-700">
            All images must utilize the custom fallback component. Ensure the relative import path is correct based on the file's depth in the directory structure. It is usually the following depth example:
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