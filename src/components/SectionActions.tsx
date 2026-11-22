import React, { useState } from 'react';
import { Link, Mail, Printer, Check } from 'lucide-react';

interface SectionActionsProps {
  sectionId: string;
  sectionTitle: string;
}

export function SectionActions({ sectionId, sectionTitle }: SectionActionsProps) {
  const [copied, setCopied] = useState(false);

  // 1. Copy Link
  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  // 2. Email Logic
  const mailtoSubject = encodeURIComponent(`Helpful resource: ${sectionTitle}`);
  const mailtoBody = encodeURIComponent(`I found this section on Brainopedia and thought it would be helpful for you:\n\n${window.location.origin}${window.location.pathname}#${sectionId}`);
  const mailtoUrl = `mailto:?subject=${mailtoSubject}&body=${mailtoBody}`;

  // 3. Bulletproof Print Logic (The Iframe Trick)
  const handlePrint = () => {
    const printElement = document.getElementById(sectionId);
    if (!printElement) return;

    // Create an invisible mini-browser window
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);

    const iframeDoc = iframe.contentWindow?.document;
    if (iframeDoc) {
      // Grab all the Tailwind CSS from your main site so it stays pretty
      const styles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
        .map(s => s.outerHTML)
        .join('');

      // Write ONLY the specific section into the mini-browser
      iframeDoc.open();
      iframeDoc.write(`
        <html>
          <head>
            <title>Brainopedia Resource</title>
            ${styles}
          </head>
          <body style="background: white; padding: 2rem;">
            ${printElement.outerHTML}
          </body>
        </html>
      `);
      iframeDoc.close();

      // Give the mini-browser a split second to load the styles, then print it
      setTimeout(() => {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
        // Clean up the invisible browser after 2 seconds
        setTimeout(() => document.body.removeChild(iframe), 2000);
      }, 250);
    }
  };

  return (
    <div className="flex justify-center gap-3 mb-6 mt-2 print:hidden">
      <button 
        onClick={handleCopyLink}
        className="flex items-center gap-1.5 text-xs font-bold text-[#0A9DC4] hover:text-[#0c264d] transition-colors bg-white px-3 py-1.5 rounded border border-[#0A9DC4]/20 shadow-sm"
      >
        {copied ? <Check size={14} className="text-green-600" /> : <Link size={14} />}
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
{/* Changed to an <a> tag with target="_blank" to force webmail support */}
      <a 
        href={mailtoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs font-bold text-[#0A9DC4] hover:text-[#0c264d] transition-colors bg-white px-3 py-1.5 rounded border border-[#0A9DC4]/20 shadow-sm"
      >
        <Mail size={14} />
        Email
      </a>

      <button 
        onClick={handlePrint}
        className="flex items-center gap-1.5 text-xs font-bold text-[#0A9DC4] hover:text-[#0c264d] transition-colors bg-white px-3 py-1.5 rounded border border-[#0A9DC4]/20 shadow-sm"
      >
        <Printer size={14} />
        Print
      </button>
    </div>
  );
}