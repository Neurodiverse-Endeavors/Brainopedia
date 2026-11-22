import { useRef, useEffect, useState, useMemo, type KeyboardEvent } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { searchArticles } from './searchindex';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  toggleSidebar: () => void;
  onSearchSelect: (articleId: string, tab?: string) => void;
  onSearchSubmit?: () => void;
}

export function Header({
  searchQuery,
  setSearchQuery,
  toggleSidebar,
  onSearchSelect,
  onSearchSubmit,
}: HeaderProps) {
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredResults = useMemo(() => searchArticles(searchQuery), [searchQuery]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (articleId: string, tab?: string) => {
    onSearchSelect(articleId, tab);
    setShowResults(false);
  };

  const handleSubmitFullSearch = () => {
    if (searchQuery.trim().length === 0) return;
    setShowResults(false);
    if (onSearchSubmit) {
      onSearchSubmit();
    } else {
      onSearchSelect('search');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmitFullSearch();
    }
    if (e.key === 'Escape') {
      setShowResults(false);
    }
  };

  return (
    <header className="bg-[#0c264d] text-[#f4f4f4] sticky top-0 z-50 shadow-md w-full">
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 px-4 md:px-6 py-3 w-full max-w-full">
        {/* Top Row for Mobile: Menu + Branding */}
        <div className="flex items-center w-full md:w-auto">
          <button
            type="button"
            onClick={toggleSidebar}
            className="xl:hidden p-2 -ml-2 mr-2 hover:bg-white/10 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={() => handleSelect('home')}
            className="flex items-center gap-2 md:gap-3 text-left focus:outline-none"
          >
            <img
              src="/images/brainopedia-logo.webp"
              alt="Brainopedia Logo"
              className="w-10 h-10 md:w-16 md:h-16 object-contain"
            />
            <div>
              <span
                className="block text-[#ffd166] text-xl md:text-2xl font-bold"
                style={{ fontFamily: 'Avenir, Nunito, sans-serif', fontWeight: 800 }}
              >
                Brainopedia
              </span>
              <p className="hidden md:block text-sm text-[#f4f4f4] opacity-90">
                Your encyclopedic platform about neurodivergent minds.
              </p>
            </div>
          </button>
        </div>

        {/* Search Bar */}
        <div className="w-full md:flex-1 md:max-w-md md:ml-auto" ref={searchRef}>
          <div className="relative">
            <button
              type="button"
              onClick={handleSubmitFullSearch}
              aria-label="Submit search"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-[#ffd166] transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
            <input
              type="text"
              placeholder="Search conditions, symptoms, accommodations..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowResults(true);
              }}
              onFocus={() => setShowResults(true)}
              onKeyDown={handleKeyDown}
              className="w-full pl-10 pr-10 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#2abcd4]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setShowResults(false);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            {/* Quick Dropdown Preview + Full List Trigger */}
            {showResults && searchQuery.trim().length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-[100]">
                {filteredResults.length > 0 ? (
                  <>
                    <button
                      type="button"
                      onClick={handleSubmitFullSearch}
                      className="w-full text-left px-4 py-2.5 bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white text-xs font-normal transition-colors border-b border-gray-200 flex items-center justify-between"
                    >
                      <span>
                        View all {filteredResults.length} matching {filteredResults.length === 1 ? 'link' : 'links'} for &ldquo;{searchQuery.trim()}&rdquo;
                      </span>
                      <span>Press Enter →</span>
                    </button>

                    {filteredResults.slice(0, 8).map((article, idx) => (
                      <button
                        type="button"
                        key={`${article.id}-${article.tab || 'main'}-${idx}`}
                        onClick={() => handleSelect(article.id, article.tab)}
                        className="w-full text-left px-4 py-3 text-gray-800 hover:bg-[#2abcd4]/10 border-b border-gray-100 last:border-b-0 transition-colors"
                      >
                        <div className="text-sm">
                          {article.label.includes('→') ? (
                            <span>
                              <span className="text-[#0A9DC4] font-bold">
                                {article.label.split('→')[0].trim()}
                              </span>
                              <span className="text-gray-400 mx-2">→</span>
                              <span className="text-[#0c264d] font-bold">
                                {article.label.split('→')[1].trim()}
                              </span>
                            </span>
                          ) : (
                            <span className="text-[#0c264d] font-bold">{article.label}</span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">
                          {article.summary}
                        </p>
                      </button>
                    ))}
                  </>
                ) : (
                  <div className="px-4 py-3 text-gray-600 text-sm">
                    <p className="mb-2">No instant matches for &ldquo;{searchQuery}&rdquo;.</p>
                    <button
                      type="button"
                      onClick={handleSubmitFullSearch}
                      className="text-xs px-3 py-1.5 rounded bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal transition-colors"
                    >
                      Open Search Directory →
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}