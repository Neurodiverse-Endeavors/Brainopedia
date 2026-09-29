import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ShieldCheck} from 'lucide-react';
import { ArticleProps } from './routes/routeTypes'; // Optional import if you want strict TS typing
import { Helmet } from 'react-helmet-async';

export function BoardOfDirectors({ setCurrentArticle }: ArticleProps) {
  return (
    <article className="space-y-6 text-[#0c264d] font-spartan max-w-4xl mx-auto w-full min-w-0 animate-in fade-in duration-300">
      
      {/* 
        This Helmet tag tells Google and other search engines 
        to NEVER show this page in search results.
      */}
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Board of Directors - Neurodiverse Endeavors</title>
      </Helmet>

      {/* HEADER */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-8">
        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck className="w-8 h-8 text-[#10b981]" />
          <h1 className="text-4xl text-[#0c264d] font-normal">
            Neurodiverse Endeavors: Board of Directors
          </h1>
        </div>
        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-2">
          Official 501(c)(3) Leadership Team
        </p>
        <p className="mt-4 text-[#0c264d] leading-relaxed">
          Brainopedia.org is the official digital platform operated by Neurodiverse Endeavors, a registered 501(c)(3) public advocacy and human services non-profit organization.
        </p>
      </div>

      <div className="space-y-8">
        
        {/* STEPHANIE THARP (Cyan Card) */}
        <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/board/stephanie-tharp.webp"
            alt="Stephanie Tharp - Founder and Executive Director"
            className="w-56 max-w-full h-auto rounded-md float-right ml-6 mb-4 shadow-sm border border-cyan-200"
          />
          <h2 className="text-[#0c264d] font-bold mb-1 text-2xl">Stephanie Tharp</h2>
          <h3 className="text-[#0A9DC4] font-bold text-sm uppercase tracking-wider mb-6 border-b border-cyan-200 pb-2">Founder & Executive Director</h3>
          
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            Stephanie is a caregiver for an autistic adult, and website designer. She recently held an administrative support position at UVA's Virginia Institute of Government (Weldon Cooper Center). Stephanie previously worked as an Education and Outreach Coordinator, commonly referred to as a "Family Navigator" for autism support at UVA, where she helped families with newly diagnosed children and implemented innovative strategies statewide.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Her multifaceted career includes teaching, customer service, web design, and entrepreneurial ventures. Stephanie holds a master's degree in teaching from the University of Virginia and a bachelor's degree from UNC-Chapel Hill. As the Founder and Executive Director of Neurodiverse Endeavors operating as Brainopedia.org, Stephanie will guide the team in decisions related to website design, research, and grant writing.
          </p>
        </div>

        {/* MARIAN TOLEDO CANDELARIA (Yellow Card) */}
        <div className="bg-yellow-50 border-2 border-[#ffd166] rounded-xl p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/board/marian-toledo-candelaria.webp"
            alt="Dr. Marian Toledo Candelaria - Board Member"
            className="w-56 max-w-full h-auto rounded-md float-right ml-6 mb-4 shadow-sm border border-yellow-300"
          />
          <h2 className="text-[#0c264d] font-bold mb-1 text-2xl">Marian Toledo Candelaria, PhD</h2>
          <h3 className="text-[#d4a017] font-bold text-sm uppercase tracking-wider mb-6 border-b border-yellow-200 pb-2">Board Member</h3>
          
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            Dr. Toledo Candelaria is the Head of Special Collections at the University of Missouri Libraries. Previously, she served as the Manager for Equity, Diversity, and Inclusion at the UVA School of Education and Human Development. Her professional experience also includes roles as Program Manager for Rare Book School and Writing and Multimodal Communication Specialist at the University of Waterloo.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Dr. Toledo Candelaria is bilingual in English and Spanish and holds a PhD in History and Scottish Studies from the University of Guelph, as well as an MSLIS from Simmons University. Marian's commitment to inclusivity makes her an excellent fit for Brainopedia.org.
          </p>
        </div>

        {/* GABRIELA GARCIA LARGEN (Slate Card) */}
        <div className="bg-slate-50 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/board/gabriela-garcia-largen.webp"
            alt="Gabriela Garcia Largen - Board Member"
            className="w-56 max-w-full h-auto rounded-md float-right ml-6 mb-4 shadow-sm border border-slate-300"
          />
          <h2 className="text-[#0c264d] font-bold mb-1 text-2xl">Gabriela Garcia Largen</h2>
          <h3 className="text-slate-600 font-bold text-sm uppercase tracking-wider mb-6 border-b border-slate-200 pb-2">Board Member</h3>
          
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            Gabriela is a Senior Director in the Service & Experience Department at the University of Virginia's Department of Human Resources. Her work focuses on improving response times to inquiries, reducing the time required to resolve complex issues, minimizing transaction errors, and enhancing self-service support frameworks.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            She also has extensive experience in complex, challenging international manufacturing and corporate environments. Gabriela is bilingual in English and Spanish. Her recent professional development in "design thinking" demonstrates her commitment to innovative trends that yield results in large-scale operations, making her well-suited for website development initiatives.
          </p>
        </div>

        {/* ERIN SWANSIGER (Cyan Card) */}
        <div className="bg-cyan-50 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/board/erin-swansiger.webp"
            alt="Erin Swansiger - Board Member"
            className="w-56 max-w-full h-auto rounded-md float-right ml-6 mb-4 shadow-sm border border-cyan-200"
          />
          <h2 className="text-[#0c264d] font-bold mb-1 text-2xl">Erin Swansiger, J.D.</h2>
          <h3 className="text-[#0A9DC4] font-bold text-sm uppercase tracking-wider mb-6 border-b border-cyan-200 pb-2">Board Member</h3>
          
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            Erin is an attorney (J.D., The Catholic University of America) known for leadership in communications law, including her role as Lead Articles Editor of The COMMLAW Conspectus and awards from the Federal Communications Bar Association. She also holds a Master of Teaching (English Education) from the University of Virginia. 
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Licensed in Virginia for English Language Arts (6–12), she brings regulatory insight from telecommunications and administrative law to policy and education initiatives. Erin is active in community service with extensive volunteer leadership in PTO, school programs, and refugee support.
          </p>
        </div>

      </div>
    </article>
  );
}