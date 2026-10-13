import React from 'react';
import { AlertCircle, BookOpen, Scale, ExternalLink, ShieldAlert, FileCheck } from 'lucide-react';

interface TermsOfUseProps {
  setCurrentArticle?: (article: string) => void;
}

export function TermsOfUse({ setCurrentArticle }: TermsOfUseProps) {
  return (
    <article className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-sm font-spartan animate-in fade-in duration-300">
      {/* HEADER */}
      <div className="pb-3 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h1 className="text-3xl font-normal text-[#0c264d]">
            Terms of Use & Medical Disclaimer
          </h1>
          <p className="text-xs text-slate-500 mt-1">Last Updated: October 2026</p>
        </div>

        <button
          onClick={() => setCurrentArticle?.('home')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 w-fit"
        >
          <span className="text-lg">←</span>
          Back to Home
        </button>
      </div>

      <div className="space-y-8">
        {/* MEDICAL DISCLAIMER BANNER */}
        <section className="bg-[#fff1f2] p-6 rounded-lg shadow-sm border-2 border-[#be185d]">
          <h2 className="text-[#831843] font-bold mb-3 text-xl flex items-center gap-2">
            <AlertCircle className="text-[#be185d] shrink-0" size={26} />
            Important Medical & Educational Disclaimer
          </h2>
          <p className="text-sm text-slate-800 leading-relaxed mb-3">
            <strong>Brainopedia provides educational information only and does not provide medical, psychological, diagnostic, or legal advice.</strong> All content—including text, graphics, videos, infographics, and cited research—is intended strictly for general educational purposes.
          </p>
          <p className="text-sm text-slate-800 leading-relaxed mb-3">
            Nothing on this website should be used to self-diagnose or replace the relationship you have with a qualified healthcare professional, psychiatrist, psychologist, or specialist. Never disregard professional medical advice or delay seeking care because of something you have read on Brainopedia.
          </p>
          <div className="bg-white p-3 rounded border border-[#be185d]/30 text-xs text-[#831843]">
            <strong>In Case of Emergency:</strong> If you or someone you know is experiencing a medical or mental health crisis, call <strong>911</strong> or call/text the Suicide & Crisis Lifeline at <strong>988</strong> (in the US and Canada) immediately.
          </div>
        </section>

        {/* ACCEPTANCE OF TERMS */}
        <section className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border-l-4 border-[#0A9DC4]">
          <h2 className="text-[#0c264d] font-bold mb-3 text-xl flex items-center gap-2">
            <FileCheck className="text-[#0A9DC4] shrink-0" size={24} />
            1. Acceptance of Terms
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            By accessing and using Brainopedia, you agree to comply with these Terms of Use. Brainopedia is operated by Neurodiverse Endeavors, a 501(c)(3) nonprofit organization dedicated to making evidence-based information about neurodivergent conditions clear and accessible.
          </p>
        </section>

        {/* INTELLECTUAL PROPERTY */}
        <section className="bg-[#fff9e6] p-6 rounded-lg shadow-sm border-l-4 border-[#ffd166]">
          <h2 className="text-[#0c264d] font-bold mb-3 text-xl flex items-center gap-2">
            <BookOpen className="text-[#d97706] shrink-0" size={24} />
            2. Intellectual Property & Educational Use
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Unless otherwise noted, all original articles, custom illustrations, animations, infographics, and site design on Brainopedia are the intellectual property of Neurodiverse Endeavors.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-[#ffd166]/60 shadow-sm">
              <h3 className="text-[#10b981] font-bold mb-1.5 text-sm uppercase tracking-wider">Permitted Use</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Students, educators, families, and clinicians may print or share links to Brainopedia articles for personal, classroom, or non-commercial educational use, provided clear attribution to Brainopedia.org is maintained.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-[#ffd166]/60 shadow-sm">
              <h3 className="text-[#be185d] font-bold mb-1.5 text-sm uppercase tracking-wider">Prohibited Use</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                You may not commercially republish, sell, frame, or systematically scrape our custom graphics, videos, or text without prior written permission.
              </p>
            </div>
          </div>
        </section>

        {/* RESEARCH & ACCURACY */}
        <section className="bg-green-50 p-6 rounded-lg shadow-sm border-l-4 border-[#10b981]">
          <h2 className="text-[#0c264d] font-bold mb-3 text-xl flex items-center gap-2">
            <Scale className="text-[#10b981] shrink-0" size={24} />
            3. Research Citations & Accuracy
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            We strive to ground our articles in peer-reviewed literature, consensus statements, and clinical manuals. However, neuroscience and clinical guidelines evolve continuously. We provide our content on an "as-is" basis without warranties of completeness or applicability to any individual situation.
          </p>
        </section>

        {/* EXTERNAL LINKS & LIABILITY */}
        <section className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border-l-4 border-[#2abcd4]">
          <h2 className="text-[#0c264d] font-bold mb-3 text-xl flex items-center gap-2">
            <ExternalLink className="text-[#2abcd4] shrink-0" size={24} />
            4. Third-Party Links & Limitation of Liability
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Brainopedia links to external organizations, research journals, and support networks for your convenience. Inclusion of an external link does not imply endorsement of that third party's views, products, or services.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            To the fullest extent permitted by law, Neurodiverse Endeavors and its board, contributors, and affiliates shall not be liable for any direct, indirect, or consequential damages resulting from the use of—or inability to use—the materials on this site.
          </p>
        </section>

        {/* FOOTER CTA */}
        <div className="bg-[#faf0e3] p-5 rounded-lg border-l-4 border-[#0c264d] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldAlert className="text-[#0c264d] shrink-0 mt-0.5" size={20} />
            <div>
              <h3 className="text-[#0c264d] font-bold text-sm">Spot a Citation Issue or Have a Question?</h3>
              <p className="text-xs text-slate-700 mt-0.5">
                Reach out to our team if you have questions about permissions, citations, or these terms.
              </p>
            </div>
          </div>
          <button
            onClick={() => setCurrentArticle?.('contact')}
            className="bg-[#0c264d] text-white hover:bg-[#0A9DC4] text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors whitespace-nowrap shrink-0 w-fit"
          >
            Contact Us →
          </button>
        </div>
      </div>
    </article>
  );
}