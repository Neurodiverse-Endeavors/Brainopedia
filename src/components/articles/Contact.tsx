import React from 'react';
import { Mail, MessageSquare, BookOpen, HeartHandshake, Heart } from 'lucide-react';

interface ContactProps {
  setCurrentArticle?: (article: string) => void;
}

export function Contact({ setCurrentArticle }: ContactProps) {
  const contactEmail = 'support@brainopedia.org';

  return (
    <article className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-sm font-spartan animate-in fade-in duration-300">
      {/* HEADER */}
      <div className="pb-3 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-normal text-[#0c264d]">
          Contact Us
        </h1>

        <button
          onClick={() => setCurrentArticle?.('home')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 w-fit"
        >
          <span className="text-lg">←</span>
          Back to Home
        </button>
      </div>

      <div className="space-y-8">
        {/* INTRO */}
        <section className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border-l-4 border-[#0A9DC4]">
          <h2 className="text-[#0c264d] font-bold mb-2 text-xl flex items-center gap-2">
            <Mail className="text-[#0A9DC4] shrink-0" size={24} />
            We'd Love to Hear From You
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Brainopedia is an initiative of <strong>Neurodiverse Endeavors</strong>, a 501(c)(3) nonprofit organization. Whether you have feedback on an article, a research study to suggest, or a question about partnering with us, please choose a topic below or email us directly at{' '}
            <a
              href={`mailto:${contactEmail}`}
              className="text-[#0A9DC4] font-bold hover:text-[#0c264d] underline transition-colors"
            >
              {contactEmail}
            </a>.
          </p>
        </section>

        {/* 3 CATEGORY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#f0f9ff] p-5 rounded-lg border-t-4 border-[#2abcd4] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="text-[#0A9DC4]" size={20} />
                <h3 className="text-[#0c264d] font-bold text-sm uppercase tracking-wider">General Inquiries</h3>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed mb-4">
                Questions about Brainopedia, our mission, or how to use our educational resources in your school or community.
              </p>
            </div>
            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent('[Brainopedia] General Inquiry')}`}
              className="text-xs font-bold text-[#0A9DC4] hover:text-[#0c264d] transition-colors inline-flex items-center gap-1"
            >
              Email General Questions →
            </a>
          </div>

          <div className="bg-[#fff9e6] p-5 rounded-lg border-t-4 border-[#ffd166] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="text-[#d97706]" size={20} />
                <h3 className="text-[#0c264d] font-bold text-sm uppercase tracking-wider">Content & Citations</h3>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed mb-4">
                Spot a typo, a broken link, or have peer-reviewed research to suggest for one of our neurodivergence guides?
              </p>
            </div>
            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent('[Brainopedia] Content & Citation Feedback')}`}
              className="text-xs font-bold text-[#d97706] hover:text-[#0c264d] transition-colors inline-flex items-center gap-1"
            >
              Send Editorial Feedback →
            </a>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border-t-4 border-[#10b981] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <HeartHandshake className="text-[#10b981]" size={20} />
                <h3 className="text-[#0c264d] font-bold text-sm uppercase tracking-wider">Partnerships & Media</h3>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed mb-4">
                Connect with Neurodiverse Endeavors regarding nonprofit collaborations, speaking engagements, or press inquiries.
              </p>
            </div>
            <a
              href={`mailto:${contactEmail}?subject=${encodeURIComponent('[Brainopedia] Partnership Inquiry')}`}
              className="text-xs font-bold text-[#10b981] hover:text-[#0c264d] transition-colors inline-flex items-center gap-1"
            >
              Connect With Us →
            </a>
          </div>
        </div>

        {/* NONPROFIT MISSION NOTE */}
        <div className="bg-[#faf0e3] p-5 rounded-lg border-l-4 border-[#ffd166] flex items-start gap-3">
          <Heart className="text-[#2abcd4] shrink-0 mt-0.5" fill="#2abcd4" size={20} />
          <p className="text-xs text-[#0c264d] leading-relaxed">
            <strong>Please Note:</strong> Brainopedia is an educational organization and cannot answer personal medical questions or provide clinical referrals via email.
          </p>
        </div>
      </div>
    </article>
  );
}