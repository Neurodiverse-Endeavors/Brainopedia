import React from 'react';
import { Shield, Lock, Eye, Server, Cookie, Mail } from 'lucide-react';

interface PrivacyPolicyProps {
  setCurrentArticle?: (article: string) => void;
}

export function PrivacyPolicy({ setCurrentArticle }: PrivacyPolicyProps) {
  return (
    <article className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-sm font-spartan animate-in fade-in duration-300">
      {/* HEADER */}
      <div className="pb-3 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h1 className="text-3xl font-normal text-[#0c264d]">
            Privacy Policy
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
        {/* OVERVIEW */}
        <section className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border-l-4 border-[#0A9DC4]">
          <h2 className="text-[#0c264d] font-bold mb-3 text-xl flex items-center gap-2">
            <Shield className="text-[#0A9DC4] shrink-0" size={24} />
            Our Commitment to Your Privacy
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Brainopedia (operated by Neurodiverse Endeavors, a 501(c)(3) nonprofit organization) is designed to be an open, accessible educational resource. You do not need to create an account, register, or provide personal information to read our articles or explore our resources.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            We believe health and neurodivergence research should be private. We do not sell, rent, or trade visitor data with third parties.
          </p>
        </section>

        {/* INFORMATION WE COLLECT */}
        <section className="bg-[#fff9e6] p-6 rounded-lg shadow-sm border-l-4 border-[#ffd166]">
          <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center gap-2">
            <Eye className="text-[#d97706] shrink-0" size={24} />
            Information We Collect
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-[#ffd166]/60 shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-sm uppercase tracking-wider">
                1. Information You Provide Voluntarily
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                If you contact us via email or submit feedback, we receive your email address and any information you choose to include in your message. We use this solely to respond to your inquiry and improve our educational content.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-[#ffd166]/60 shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-2 text-sm uppercase tracking-wider">
                2. Standard Technical Data
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Like most websites, our hosting servers automatically log basic, non-identifying technical data—such as browser type, device category, referring pages, and anonymized IP addresses—to maintain site security and monitor performance.
              </p>
            </div>
          </div>
        </section>

        {/* LOCAL STORAGE & COOKIES */}
        <section className="bg-green-50 p-6 rounded-lg shadow-sm border-l-4 border-[#10b981]">
          <h2 className="text-[#0c264d] font-bold mb-3 text-xl flex items-center gap-2">
            <Cookie className="text-[#10b981] shrink-0" size={24} />
            Browser Storage & Cookies
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Brainopedia does not use invasive cross-site advertising cookies. We use standard browser <code className="bg-white px-1.5 py-0.5 rounded border border-green-200 text-xs">localStorage</code> strictly for basic user-interface preferences—for example, remembering when you dismiss a site banner so it does not repeatedly pop up during your visit.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            You can clear your browser's local storage or cookies at any time through your browser settings without affecting your ability to read Brainopedia.
          </p>
        </section>

        {/* THIRD-PARTY SERVICES */}
        <section className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border-l-4 border-[#2abcd4]">
          <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center gap-2">
            <Server className="text-[#2abcd4] shrink-0" size={24} />
            Third-Party Embeds & External Links
          </h2>
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>
              <strong>Embedded Media:</strong> Some articles include embedded educational videos (such as YouTube players). Interacting with an embedded video may allow the third-party provider to collect usage data in accordance with their own privacy policies.
            </p>
            <p>
              <strong>Donations:</strong> When you make a contribution to support our nonprofit mission, your payment is processed securely by our third-party payment processor. Brainopedia does not store or have access to your credit card or bank account numbers.
            </p>
            <p>
              <strong>External Websites:</strong> Our articles reference and link to external scientific journals, organizations, and resources. We are not responsible for the privacy practices of external websites.
            </p>
          </div>
        </section>

        {/* CHILDREN'S PRIVACY & SECURITY */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-[#0c264d]">
          <h2 className="text-[#0c264d] font-bold mb-3 text-xl flex items-center gap-2">
            <Lock className="text-[#0c264d] shrink-0" size={24} />
            Children's Privacy
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Brainopedia is a general-audience educational encyclopedia and does not knowingly collect personal information from children under the age of 13. If you believe a child under 13 has provided personal information to us via email, please contact us immediately so we can permanently delete it.
          </p>
        </section>

        {/* QUESTIONS CALLOUT */}
        <div className="bg-[#faf0e3] p-5 rounded-lg border-l-4 border-[#0c264d] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start gap-3">
            <Mail className="text-[#0c264d] shrink-0 mt-0.5" size={20} />
            <div>
              <h3 className="text-[#0c264d] font-bold text-sm">Questions About Privacy?</h3>
              <p className="text-xs text-slate-700 mt-0.5">
                If you have questions about this policy or our data practices, we are happy to help.
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