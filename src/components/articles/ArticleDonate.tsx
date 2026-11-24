import React from 'react';
import { Heart, DollarSign, Users, Target, Award } from 'lucide-react';

export function ArticleDonate() {
  return (
    <article className="max-w-4xl">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Support Brainopedia</h1>
      
      {/* Introduction */}
      <section className="mb-8">
        <p className="mb-4">
          Brainopedia is a free educational resource dedicated to providing accessible, 
          comprehensive, and respectful information about neurodivergent conditions. Your support 
          helps us maintain and expand this vital resource for individuals, families, educators, 
          and healthcare professionals worldwide.
        </p>
      </section>

      {/* Why Donate Section */}
      <section className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4">Why Your Support Matters</h2>
        
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
          <div className="bg-[#ffd700]/20 p-4 sm:p-5 rounded-lg border-2 border-[#ffd700]">
            <div className="flex items-start gap-3 mb-3">
              <Users className="w-6 h-6 text-[#0d4f8c] flex-shrink-0 mt-1" />
              <h3 className="text-[#0c264d] font-bold">Free Access for All</h3>
            </div>
            <p className="text-gray-700">
              Brainopedia is and will always be free for everyone. Your donations help us maintain 
              this commitment while continuing to grow.
            </p>
          </div>

          <div className="bg-[#ffd166]/40 p-4 sm:p-5 rounded-lg border-2 border-[#0d4f8c]">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-6 h-6 text-[#0d4f8c] flex-shrink-0 mt-1" />
              <h3 className="text-[#0c264d] font-bold">Expanding Coverage</h3>
            </div>
            <p className="text-gray-700">
              Your donations help us research and add more neurodivergent conditions 
              to our encyclopedia volumes.
            </p>
          </div>
        </div>
      </section>

      {/* Zeffy Donation Section */}
      <section className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4">Make a Donation</h2>
        
        <div className="bg-white/70 p-4 sm:p-6 rounded-lg border-2 border-[#0c264d] mb-4">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#0d4f8c]" />
            <div>
              <h3 className="text-[#0c264d] font-bold">Support Through Zeffy</h3>
              <p className="text-sm text-gray-600">100% of your donation goes directly to our mission</p>
            </div>
          </div>
          
          <p className="mb-6">
            We use Zeffy, a platform that doesn't take any fees from your donation. 
            Every dollar you give goes directly to supporting Brainopedia.
          </p>

          {/* Zeffy Donation Button */}
          <div className="text-center">
            <a
              href="https://www.zeffy.com/en-US/donation-form/ndcampusorg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ffd700]/25 hover:bg-[#ffd700]/35 text-[#0c264d] px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors text-base sm:text-lg font-bold shadow-lg border-2 border-[#ffd700]"
            >
              <Heart className="w-6 h-6" />
              Donate Now via Zeffy
            </a>
            <p className="text-sm text-gray-600 mt-3">
              Opens in a new window - 100% of your donation supports our mission
            </p>
          </div>
        </div>

        <div className="bg-[#ffd700]/20 border-2 border-[#ffd700] rounded-lg p-4">
          <p className="text-sm text-[#0c264d]">
            <strong>Note:</strong> Brainopedia is committed to transparency. 
            All donations are used to improve and expand our educational resources, 
            maintain our website infrastructure, and ensure content accuracy through 
            ongoing research and expert consultation.
          </p>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4">Other Ways to Support</h2>
        
        <div className="space-y-4">
          <div className="bg-[#ffd166]/40 p-5 rounded-lg border border-gray-300">
            <h3 className="text-[#0c264d] font-bold mb-2">Share Our Mission</h3>
            <p className="text-gray-700">
              Help spread awareness by sharing Brainopedia with educators, 
              healthcare providers, families, and anyone interested in learning about 
              neurodivergence.
            </p>
          </div>

          <div className="bg-[#ffd700]/20 p-5 rounded-lg border border-[#ffd700]">
            <h3 className="text-[#0c264d] font-bold mb-2">Provide Feedback</h3>
            <p className="text-gray-700">
              Your insights help us improve. If you have suggestions for new content, 
              notice any errors, or have ideas for making our resources more accessible, 
              please reach out.
            </p>
          </div>

          <div className="bg-[#ffd166]/40 p-5 rounded-lg border border-gray-300">
            <h3 className="text-[#0c264d] font-bold mb-2">Professional Collaboration</h3>
            <p className="text-gray-700">
              If you're a researcher, clinician, or expert in neurodivergence and would 
              like to contribute to our content accuracy and depth, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Our Sponsors */}
      <section className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4">Our Sponsors</h2>
        
        <div className="bg-white/70 p-6 rounded-lg border-2 border-[#0c264d] mb-4">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-8 h-8 text-[#0d4f8c]" />
            <div>
              <h3 className="text-[#0c264d] font-bold">Supporting Organizations</h3>
              <p className="text-sm text-gray-600">Partners who help make Brainopedia possible</p>
            </div>
          </div>
          
          <p className="mb-6 text-gray-700">
            Brainopedia welcomes sponsorship from any organization committed to supporting education, 
            accessibility, and neurodiversity awareness. While organizations focused on neurodivergence, 
            education, and healthcare are a natural fit, we appreciate support from businesses and 
            agencies of all types who share our mission of providing free, accurate information to everyone.
          </p>

          {/* NEW: Infrastructure Partners / Special Thanks Block */}
          <div className="bg-[#f0f9ff]/80 p-5 rounded-lg border-2 border-[#0A9DC4]/40 mb-6 shadow-sm">
            <h4 
              className="text-[#0c264d] mb-3 text-center"
              style={{ fontFamily: 'Avenir, Nunito, sans-serif', fontWeight: 800 }}
            >
              Technology & Infrastructure Partners
            </h4>
            <p className="text-sm text-gray-700 text-center mb-5 leading-relaxed max-w-xl mx-auto">
            
            We are deeply grateful for the generous nonprofit grants and technology support provided by the following organizations, which help keep our educational platform online, secure, and accessible to all:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white text-[#0c264d] font-bold px-5 py-2 rounded-full border border-[#0c264d]/10 shadow-sm text-sm tracking-wide">Canva</span>
              <span className="bg-white text-[#0c264d] font-bold px-5 py-2 rounded-full border border-[#0c264d]/10 shadow-sm text-sm tracking-wide">DreamHost</span>
              <span className="bg-white text-[#0c264d] font-bold px-5 py-2 rounded-full border border-[#0c264d]/10 shadow-sm text-sm tracking-wide">GitHub</span>
            </div>
          </div>

          {/* Ideal Sponsor Types */}
          <div className="bg-[#2abcd4]/10 p-5 rounded-lg border-2 border-[#2abcd4] mb-6">
            <h4 
              className="text-[#0c264d] mb-3"
              style={{ fontFamily: 'Avenir, Nunito, sans-serif', fontWeight: 800 }}
            >
              Ideal Sponsor Profile
            </h4>
            <p className="text-gray-700 mb-3">
              Organizations particularly aligned with our mission include:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#2abcd4] mt-1">•</span>
                <span><strong>Healthcare & Medical Organizations:</strong> Hospitals, clinics, therapy practices, 
                mental health centers, diagnostic centers, and medical research institutions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2abcd4] mt-1">•</span>
                <span><strong>Educational Institutions:</strong> Schools, colleges, universities, special education 
                programs, tutoring centers, and educational technology companies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2abcd4] mt-1">•</span>
                <span><strong>Advocacy & Non-Profit Organizations:</strong> Neurodiversity advocacy groups, 
                disability rights organizations, parent support networks, and community foundations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2abcd4] mt-1">•</span>
                <span><strong>Research & Professional Organizations:</strong> Academic research centers, 
                professional associations, scientific institutions, and psychology/psychiatry practices</span>
              </li>
            </ul>
          </div>

          {/* All Welcome */}
          <div className="bg-[#ffd700]/15 p-5 rounded-lg border-2 border-[#ffd700] mb-6">
            <h4 
              className="text-[#0c264d] mb-3"
              style={{ fontFamily: 'Avenir, Nunito, sans-serif', fontWeight: 800 }}
            >
              All Sponsors Welcome
            </h4>
            <p className="text-gray-700 mb-3">
              <strong>Any business or organization can become a sponsor.</strong> We welcome support from 
              all industries and sectors, including:
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Technology Companies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Financial Services</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Retail & E-commerce</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Manufacturing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Professional Services</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Hospitality & Tourism</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Media & Entertainment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Food & Beverage</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Real Estate & Construction</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Transportation & Logistics</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Energy & Utilities</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Legal Services</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Insurance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Consulting Firms</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Creative Agencies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Government Agencies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Pharmaceutical Companies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Publishing Houses</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Sports & Recreation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
                <span className="text-sm">Local Businesses</span>
              </div>
            </div>
          </div>

          {/* Sponsorship Tiers */}
          <div className="bg-[#0d4f8c]/10 p-5 rounded-lg border-2 border-[#0d4f8c] mb-6">
            <h4 
              className="text-[#0c264d] mb-3"
              style={{ fontFamily: 'Avenir, Nunito, sans-serif', fontWeight: 800 }}
            >
              Sponsorship Tiers
            </h4>
            <p className="text-gray-700 mb-3">
              We offer multiple sponsorship levels to accommodate organizations of all sizes:
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#2abcd4] min-w-[120px]">Platinum</span>
                <span className="text-gray-700">Major corporate sponsors and large foundations</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#ffd700] min-w-[120px]">Gold</span>
                <span className="text-gray-700">Mid-sized businesses and established organizations</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#0d4f8c] min-w-[120px]">Community</span>
                <span className="text-gray-700">Small businesses, local agencies, and community partners</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-300 text-center">
            <p className="text-gray-700 mb-2">
              <strong className="text-[#0c264d]">Interested in sponsorship?</strong>
            </p>
            <p className="text-sm text-gray-600">
              Contact us to learn how your organization can support accessible neurodivergent 
              education and be recognized as a Brainopedia sponsor. Sponsorship opportunities are 
              available for organizations of all sizes and from all industries.
            </p>
          </div>
        </div>
      </section>

      {/* Thank You */}
      <section className="mb-8">
        <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-lg p-6 text-center">
          <Heart className="w-12 h-12 text-[#0d4f8c] mx-auto mb-3" />
          <h2 className="text-[#0c264d] font-bold mb-3">Thank You</h2>
          <p className="text-gray-700">
            Every contribution, whether financial or through sharing our mission, 
            helps create a more informed and inclusive world for neurodivergent individuals. 
            Your support makes a real difference.
          </p>
        </div>
      </section>
    </article>
  );
}