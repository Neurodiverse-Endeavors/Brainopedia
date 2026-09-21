import React from 'react';
import { X, BookOpen, Brain, Zap, Focus, Users, Palette, Calculator, Info, Heart, PenTool, Ear, Star, Sparkles, Newspaper, ChevronDown, ChevronRight, RefreshCw, Activity, Eye, Waves, Hand, Headphones, ScanEye, MessageSquare, Lightbulb, Grid3x3, Infinity, Dna, Droplets, Shield, Puzzle, TrendingDown, AlertCircle, MessageCircle, Smile, BrainCog, Skull, Bug, Radio } from 'lucide-react';

interface SidebarProps {
  currentArticle: string;
  setCurrentArticle: (id: string) => void;
  isOpen: boolean;
  closeSidebar: () => void;
}

const categories = [
  
  {
    name: 'Core Neurodevelopmental',
    // Lightened version of Dark Cyan (#0A9DC4)
    bgStyle: 'bg-sky-100 border-sky-200 text-[#0c264d]', 
    articles: [
      { id: 'adhd', label: 'ADHD', icon: Zap },
      { id: 'autism', label: 'Autism or "ASD"', icon: Infinity },
    ]
  },
  {
    name: 'Learning Differences & Profiles',
    // Lightened version of White/Neutral
    bgStyle: 'bg-[#f4f4f4] border-slate-200 text-[#0c264d]', 
    articles: [
      { id: 'dyslexia', label: 'Dyslexia', icon: BookOpen },
      { id: 'dyscalculia', label: 'Dyscalculia', icon: Calculator },
      { id: 'dysgraphia', label: 'Dysgraphia', icon: PenTool },
      { id: 'nvld', label: 'Non-Verbal Learning Disability or "NVLD"', icon: Grid3x3 },
      { id: 'dld', label: 'Developmental Learning Disorder or "DLD"', icon: MessageSquare },
      { id: 'hyperlexia', label: 'Hyperlexia', icon: Sparkles },
      { id: 'giftedness', label: 'Giftedness', icon: Lightbulb },
      { id: 'twice-exceptional', label: 'Twice Exceptional or "2E"', icon: Star },
    ]
  },
  {
    name: 'Processing & Sensory',
    // Lightened version of Navy (#0c264d)
    bgStyle: 'bg-blue-100 border-blue-200 text-[#0c264d]', 
    articles: [
      { id: 'apd', label: 'Auditory Processing Disorder or "APD"', icon: Headphones },
      { id: 'visual-processing', label: 'Visual Processing Disorder', icon: ScanEye },
      { id: 'spd', label: 'Sensory Processing Disorder or "SPD"', icon: Hand },
      { id: 'misophonia', label: 'Misophonia', icon: Ear },
      { id: 'synesthesia', label: 'Synesthesia', icon: Palette },
    ]
  },
  {
    name: 'Movement & Motor',
    // Lightened version of Bright Green (#10b981)
    bgStyle: 'bg-emerald-100 border-emerald-200 text-[#0c264d]', 
    articles: [
      { id: 'dyspraxia', label: 'Dyspraxia or "DCD"', icon: Focus },
      { id: 'tourette', label: 'Tourette Syndrome', icon: Users },
    ]
  },
  {
    name: 'Mental Health Crossovers',
    // Lightened version of Accent Cyan (#2abcd4)
    bgStyle: 'bg-cyan-100 border-cyan-200 text-[#0c264d]', 
    articles: [
      { id: 'anxiety-stress', label: 'Anxiety & Stress', icon: Activity },
      { id: 'mood-emotions', label: 'Mood & Emotions', icon: Smile },
      { id: 'trauma-burnout', label: 'Trauma & Burnout', icon: Shield },
      { id: 'compulsions-coping', label: 'Compulsions & Coping', icon: RefreshCw },
    ]
  },
  {
    name: 'Genetic or Environmental',
    // Lightened version of Bright Gold (#ffcc00)
    bgStyle: 'bg-yellow-100 border-yellow-200 text-[#0c264d]', 
    articles: [
      { id: 'downsyndrome', label: 'Down Syndrome', icon: Dna },
      { id: 'intellectual-disability', label: 'Intellectual Disability', icon: Brain },
      { id: 'fasd', label: 'Fetal Alcohol Spectrum Disorder or "FASD"', icon: Droplets },
      { id: 'epilepsy', label: 'Epilepsy', icon: Waves },
      { id: 'pandas', label: 'PANDAS & PANS', icon: Radio },
    ]
  }
];

export function Sidebar({ currentArticle, setCurrentArticle, isOpen, closeSidebar }: SidebarProps) {
const [expandedCategories, setExpandedCategories] = React.useState<Record<string, boolean>>({});

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
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
      
      <aside className={`
        fixed xl:relative h-screen xl:h-auto w-72 bg-[#ffd166] border-r border-[#0c264d] 
        transition-transform duration-300 z-50 xl:z-0 overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Mobile close button */}
          <div className="xl:hidden flex items-center justify-between p-4 border-b border-[#0c264d]">
            <span className="text-[#0c264d] font-bold">Navigation</span>
            <button onClick={closeSidebar} className="p-2 hover:bg-[#53c3d5] transition-colors rounded-md text-[#0c264d]">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <nav className="p-4 flex-1">
            {/* Top Navigation: Home & About */}
            <div className="mb-6 space-y-1">
              <button
                onClick={() => handleArticleClick('home')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-left ${
                  currentArticle === 'home' 
                    ? 'bg-[#0A9DC4] text-white shadow-sm font-semibold' 
                    : 'text-[#0c264d] hover:bg-[#53c3d5] font-medium'
                }`}
              >
                <Brain className="w-5 h-5" />
                <span className="font-bold">Home</span>
              </button>
              
              <button
                onClick={() => handleArticleClick('about')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-left ${
                  currentArticle === 'about' 
                    ? 'bg-[#0A9DC4] text-white shadow-sm font-semibold' 
                    : 'text-[#0c264d] hover:bg-[#53c3d5] font-medium'
                }`}
              >
                <Info className="w-5 h-5" />
                <span className="font-bold">About Brainopedia</span>
              </button>
            </div>

            {/* Encyclopedia Volumes */}
            <div className="mb-6 pt-6 border-t border-[#0c264d]/10">
              <h2 className="text-lg uppercase tracking-wider text-[#0c264d]/60 mb-3 px-3 font-bold">
                Encyclopedia Volumes
              </h2>
              
              {categories.map((category) => (
                <div 
                  key={category.name} 
                  className={`mb-3 rounded-xl p-2 border shadow-sm transition-all ${category.bgStyle}`}
                >
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="w-full flex items-center justify-between px-3 py-2 text-base font-bold text-[#0c264d] hover:bg-[#53c3d5] rounded-md transition-colors text-left"
                    style={{ fontFamily: 'Avenir Next, Avenir, sans-serif' }}
                  >
                    <span className="flex-1 pr-2">{category.name}</span>
                    {expandedCategories[category.name] ? <ChevronDown className="w-4 h-4 shrink-0" /> : <ChevronRight className="w-4 h-4 shrink-0" />}
                  </button>
                  
                  {expandedCategories[category.name] && (
                    <div className="mt-1 ml-2">
                      {category.subcategories ? (
                        category.subcategories.map((sub) => (
                          <div key={sub.name} className="mb-1">
                            <button
                              onClick={() => toggleCategory(`${category.name}-${sub.name}`)}
                              className="w-full flex items-center justify-between px-2 py-1 text-xs font-bold text-[#0c264d] hover:bg-[#53c3d5] rounded-md transition-colors"
                            >
                              <span>{sub.name}</span>
                              {expandedCategories[`${category.name}-${sub.name}`] ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                            </button>
                            {expandedCategories[`${category.name}-${sub.name}`] && (
                              <ul className="space-y-1 mt-1 ml-4">
                                {sub.articles.map((art) => (
                                  <li key={art.id}>
                                    <button
                                      onClick={() => handleArticleClick(art.id)}
                                      className={`
                                        w-full flex items-center justify-start gap-3 px-3 py-2 rounded-md transition-colors text-left
                                        ${currentArticle === art.id 
                                          ? 'bg-[#0A9DC4] text-white shadow-sm font-semibold' 
                                          : 'text-[#0c264d] hover:bg-[#53c3d5] font-medium'
                                        }
                                      `}
                                    >
                                      <art.icon className="w-5 h-5 shrink-0" />
                                      <span className="flex-1 text-left text-sm">{art.label}</span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))
                      ) : (
                        <ul className="space-y-1">
                          {category.articles.map((art) => (
                            <li key={art.id}>
                              <button
                                onClick={() => handleArticleClick(art.id)}
                                className={`
                                  w-full flex items-center justify-start gap-3 px-3 py-2 rounded-md transition-colors text-left
                                  ${currentArticle === art.id 
                                    ? 'bg-[#0A9DC4] text-white shadow-sm font-semibold' 
                                    : 'text-[#0c264d] hover:bg-[#53c3d5] font-medium'
                                  }
                                `}
                              >
                                <art.icon className="w-5 h-5 shrink-0" />
                                <span className="flex-1 text-left text-sm">{art.label}</span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Resources & Support */}
            <div className="pt-6 border-t border-[#0c264d]/10 space-y-1">
              <h2 className="text-xs uppercase tracking-wider text-[#0c264d]/60 mb-3 px-3 font-bold">
                Resources
              </h2>
              <button
                onClick={() => handleArticleClick('blog')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-left ${
                  currentArticle === 'blog' 
                    ? 'bg-[#0A9DC4] text-white shadow-sm font-semibold' 
                    : 'text-[#0c264d] hover:bg-[#53c3d5] font-medium'
                }`}
              >
                <Newspaper className="w-5 h-5" />
                <span className="text-sm font-medium">Blog & Updates</span>
              </button>

              {/* Enhanced Donate Button */}
              <button
                onClick={() => handleArticleClick('donate')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-left mt-4 border border-red-200 ${
                  currentArticle === 'donate' 
                    ? 'bg-red-500 text-white shadow-sm font-semibold' 
                    : 'bg-red-50 text-red-600 hover:bg-red-100 font-medium'
                }`}
              >
                <Heart className="w-5 h-5" />
                <span>Support Our Mission</span>
              </button>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}