import { useState } from 'react';
import {
  X,
  BookOpen,
  Brain,
  Zap,
  Focus,
  Users,
  Palette,
  Calculator,
  Info,
  Heart,
  PenTool,
  Ear,
  Star,
  Sparkles,
  Newspaper,
  ChevronDown,
  ChevronRight,
  RefreshCw,
  Activity,
  Hand,
  Headphones,
  ScanEye,
  MessageSquare,
  Lightbulb,
  Grid3x3,
  Infinity,
  Dna,
  Droplets,
  Shield,
  Smile,
  Radio,
  Waves,
} from 'lucide-react';

interface SidebarProps {
  currentArticle: string;
  setCurrentArticle: (id: string) => void;
  isOpen: boolean;
  closeSidebar: () => void;
}

const categories = [
  {
    name: 'Core Neurodevelopmental',
    bgStyle: 'bg-sky-100 border-sky-200 text-[#0c264d]',
    articles: [
      { id: 'adhd', label: 'ADHD', icon: Zap },
      { id: 'autism', label: 'Autism or "ASD"', icon: Infinity },
    ],
  },
  {
    name: 'Learning Differences & Profiles',
    bgStyle: 'bg-[#f4f4f4] border-slate-200 text-[#0c264d]',
    articles: [
      { id: 'dyslexia', label: 'Dyslexia', icon: BookOpen },
      { id: 'dyscalculia', label: 'Dyscalculia', icon: Calculator },
      { id: 'dysgraphia', label: 'Dysgraphia', icon: PenTool },
      { id: 'nvld', label: 'Non-Verbal Learning Disability or "NVLD"', icon: Grid3x3 },
      { id: 'dld', label: 'Developmental Language Disorder or "DLD"', icon: MessageSquare },
      { id: 'hyperlexia', label: 'Hyperlexia', icon: Sparkles },
      { id: 'giftedness', label: 'Giftedness', icon: Lightbulb },
      { id: 'twice-exceptional', label: 'Twice Exceptional or "2E"', icon: Star },
    ],
  },
  {
    name: 'Processing & Sensory',
    bgStyle: 'bg-blue-100 border-blue-200 text-[#0c264d]',
    articles: [
      { id: 'apd', label: 'Auditory Processing Disorder or "APD"', icon: Headphones },
      { id: 'visual-processing', label: 'Visual Processing Disorder', icon: ScanEye },
      { id: 'spd', label: 'Sensory Processing Disorder or "SPD"', icon: Hand },
      { id: 'misophonia', label: 'Misophonia', icon: Ear },
      { id: 'synesthesia', label: 'Synesthesia', icon: Palette },
    ],
  },
  {
    name: 'Movement & Motor',
    bgStyle: 'bg-emerald-100 border-emerald-200 text-[#0c264d]',
    articles: [
      { id: 'dyspraxia', label: 'Dyspraxia or "DCD"', icon: Focus },
      { id: 'tourette', label: 'Tourette Syndrome', icon: Users },
    ],
  },
  {
    name: 'Genetic or Environmental',
    bgStyle: 'bg-cyan-100 border-cyan-200 text-[#0c264d]',
    articles: [
      { id: 'downsyndrome', label: 'Down Syndrome', icon: Dna },
      { id: 'intellectual-disability', label: 'Intellectual Disability', icon: Brain },
      { id: 'fasd', label: 'Fetal Alcohol Spectrum Disorder or "FASD"', icon: Droplets },
      { id: 'epilepsy', label: 'Epilepsy', icon: Waves },
      { id: 'pandas', label: 'PANDAS & PANS', icon: Radio },
    ],
  },
  {
    name: 'Mental Health Crossovers',
    bgStyle: 'bg-yellow-100 border-yellow-200 text-[#0c264d]',
    articles: [
      { id: 'anxiety-stress', label: 'Anxiety & Stress', icon: Activity },
      { id: 'mood-emotions', label: 'Mood & Emotions', icon: Smile },
      { id: 'trauma-burnout', label: 'Trauma & Burnout', icon: Shield },
      { id: 'compulsions-coping', label: 'Compulsions & Coping', icon: RefreshCw },
    ],
  },
];

export function Sidebar({ currentArticle, setCurrentArticle, isOpen, closeSidebar }: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const handleArticleClick = (id: string) => {
    setCurrentArticle(id);
    closeSidebar();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 xl:hidden" onClick={closeSidebar} />
      )}

      <aside
        className={`
        fixed top-0 left-0 xl:relative h-[100dvh] xl:h-auto w-72 max-w-[85vw] bg-[#ffd166] border-r border-[#0c264d] 
        transition-transform duration-300 z-50 xl:z-0 overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0'}
      `}
      >
        <div className="flex flex-col min-h-full font-spartan">
          {/* Mobile Drawer Header */}
          <div className="xl:hidden flex items-center justify-between px-4 py-3 border-b border-[#0c264d] sticky top-0 bg-[#ffd166] z-10">
            <span className="text-[#0c264d] font-bold text-sm uppercase tracking-wider">
              Browse Brainopedia
            </span>
            <button
              type="button"
              onClick={closeSidebar}
              className="p-1.5 hover:bg-[#0c264d] hover:text-white transition-colors rounded-md text-[#0c264d] font-normal"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="p-3 sm:p-4 flex-1">
            {/* Top Navigation: Home & About */}
            <div className="mb-4 space-y-1">
              <button
                type="button"
                onClick={() => handleArticleClick('home')}
                className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md transition-colors text-left text-sm font-normal ${
                  currentArticle === 'home'
                    ? 'bg-[#0A9DC4] text-white shadow-sm'
                    : 'text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
                }`}
              >
                <Brain className="w-4 h-4 shrink-0" />
                <span>Home</span>
              </button>

              <button
                type="button"
                onClick={() => handleArticleClick('about')}
                className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md transition-colors text-left text-sm font-normal ${
                  currentArticle === 'about'
                    ? 'bg-[#0A9DC4] text-white shadow-sm'
                    : 'text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
                }`}
              >
                <Info className="w-4 h-4 shrink-0" />
                <span>About Brainopedia</span>
              </button>
            </div>

            {/* Encyclopedia Volumes */}
            <div className="mb-4 pt-4 border-t border-[#0c264d]/15">
              <h2 className="text-sm uppercase tracking-wider text-[#0c264d]/70 mb-2.5 px-2 font-bold">
                Encyclopedia Volumes
              </h2>

              {categories.map((category) => (
                <div
                  key={category.name}
                  className={`mb-2 rounded-xl p-1.5 border shadow-sm transition-all ${category.bgStyle}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleCategory(category.name)}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 text-sm font-normal text-[#0c264d] hover:bg-[#0c264d] hover:text-white rounded-md transition-colors text-left"
                  >
                    <span className="flex-1 pr-2">{category.name}</span>
                    {expandedCategories[category.name] ? (
                      <ChevronDown className="w-4 h-4 shrink-0" />
                    ) : (
                      <ChevronRight className="w-4 h-4 shrink-0" />
                    )}
                  </button>

                  {expandedCategories[category.name] && (
                    <ul className="space-y-1 mt-1 pl-1">
                      {category.articles.map((art) => (
                        <li key={art.id}>
                          <button
                            type="button"
                            onClick={() => handleArticleClick(art.id)}
                            className={`
                              w-full flex items-center justify-start gap-2.5 px-2.5 py-1.5 rounded-md transition-colors text-left text-xs font-normal
                              ${
                                currentArticle === art.id
                                  ? 'bg-[#0A9DC4] text-white shadow-sm'
                                  : 'text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
                              }
                            `}
                          >
                            <art.icon className="w-4 h-4 shrink-0" />
                            <span className="flex-1 text-left">{art.label}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Resources & Support */}
            <div className="pt-4 border-t border-[#0c264d]/15 space-y-1">
              <h2 className="text-xs uppercase tracking-wider text-[#0c264d]/70 mb-2 px-2 font-bold">
                Resources
              </h2>
              <button
                type="button"
                onClick={() => handleArticleClick('blog')}
                className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md transition-colors text-left text-sm font-normal ${
                  currentArticle === 'blog'
                    ? 'bg-[#0A9DC4] text-white shadow-sm'
                    : 'text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
                }`}
              >
                <Newspaper className="w-4 h-4 shrink-0" />
                <span>Blog &amp; Updates</span>
              </button>

              <button
                type="button"
                onClick={() => handleArticleClick('donate')}
                className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md transition-colors text-left mt-3 border text-sm font-normal ${
                  currentArticle === 'donate'
                    ? 'bg-[#be185d] text-white border-[#be185d] shadow-sm'
                    : 'bg-[#fdf2f8] text-[#831843] border-[#be185d] hover:bg-[#be185d] hover:text-white'
                }`}
              >
                <Heart className="w-4 h-4 shrink-0" />
                <span>Support Our Mission</span>
              </button>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}