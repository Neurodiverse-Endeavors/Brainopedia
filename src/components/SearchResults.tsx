import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchArticles, type SearchCategory } from './searchindex';

interface SearchResultsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setCurrentArticle?: (article: string) => void;
  onSelectResult: (articleId: string, tab?: string) => void;
}

const POPULAR_TOPICS = [
  'APD',
  'Autism',
  'ADHD',
  'RSD',
  'Masking',
  'Burnout',
  'IEP & 504',
  'Twice Exceptional',
  'Sensory',
  'Dyslexia',
];

export function SearchResults({
  searchQuery,
  setSearchQuery,
  setCurrentArticle,
  onSelectResult,
}: SearchResultsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<'all' | SearchCategory>('all');

  // Hydrate searchQuery from ?q= if user refreshes or shares the search URL
  useEffect(() => {
    const urlQuery = searchParams.get('q');
    if (urlQuery && !searchQuery) {
      setSearchQuery(urlQuery);
    }
  }, [searchParams, searchQuery, setSearchQuery]);

  const allMatches = useMemo(() => searchArticles(searchQuery), [searchQuery]);

  const visibleMatches = useMemo(() => {
    if (selectedCategory === 'all') return allMatches;
    return allMatches.filter((item) => item.category === selectedCategory);
  }, [allMatches, selectedCategory]);

  const counts = useMemo(() => {
    return {
      all: allMatches.length,
      condition: allMatches.filter((r) => r.category === 'condition').length,
      subpage: allMatches.filter((r) => r.category === 'subpage').length,
      crossover: allMatches.filter((r) => r.category === 'crossover').length,
    };
  }, [allMatches]);

  const handleTopicClick = (topic: string) => {
    setSearchQuery(topic);
    setSelectedCategory('all');
    setSearchParams({ q: topic });
  };

  const stripeColors = ['bg-[#0A9DC4]', 'bg-[#576d8e]', 'bg-[#0c264d]'];

  return (
    <article className="max-w-6xl mx-auto font-spartan animate-in fade-in duration-300 w-full min-w-0">
      {/* HEADER & BACK BUTTON */}
      <div className="pb-6 border-b-4 border-[#0c264d] mb-10 mt-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl text-[#0c264d] font-normal">
            {searchQuery.trim()
              ? `Search Results for "${searchQuery.trim()}"`
              : 'Search the Brainopedia Encyclopedia'}
          </h1>
          <p className="text-sm text-slate-700 mt-2">
            {searchQuery.trim()
              ? `Showing ${visibleMatches.length} matching ${visibleMatches.length === 1 ? 'entry' : 'entries'} across conditions, deep-dives, and support tabs.`
              : 'Enter a condition, symptom, accommodation, or crossover topic in the search bar above, or select a topic below.'}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setCurrentArticle?.('home')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-sm self-start"
        >
          <span className="text-xl">←</span>
          Back to Home
        </button>
      </div>

      {/* INLINE SEARCH INPUT + QUICK TOPICS */}
      <div className="bg-[#2abcd4]/20 border-2 border-[#2abcd4] rounded-xl p-6 shadow-sm mb-8">
        <h2 className="text-[#0c264d] font-bold text-xl mb-4 text-center">
          Refine Your Search
        </h2>
        <div className="max-w-2xl mx-auto mb-5">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              const val = e.target.value;
              setSearchQuery(val);
              if (val.trim()) {
                setSearchParams({ q: val.trim() });
              } else {
                setSearchParams({});
              }
            }}
            placeholder="Type any topic (e.g., remote microphone, RSD, masking, IEP, dyscalculia)..."
            className="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#0c264d]/20 text-[#0c264d] text-sm focus:outline-none focus:border-[#0A9DC4]"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {POPULAR_TOPICS.map((topic) => (
            <button
              key={topic}
              type="button"
              onClick={() => handleTopicClick(topic)}
              className="px-3.5 py-1.5 rounded-md bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-xs transition-colors shadow-sm"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* CATEGORY FILTER TABS */}
      {allMatches.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
              selectedCategory === 'all'
                ? 'bg-[#0A9DC4] text-white'
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
            }`}
          >
            All Matches ({counts.all})
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('condition')}
            className={`px-4 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
              selectedCategory === 'condition'
                ? 'bg-[#0A9DC4] text-white'
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
            }`}
          >
            Main Conditions ({counts.condition})
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('subpage')}
            className={`px-4 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
              selectedCategory === 'subpage'
                ? 'bg-[#0A9DC4] text-white'
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
            }`}
          >
            Subpages &amp; Tabs ({counts.subpage})
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('crossover')}
            className={`px-4 py-3 rounded-md transition-colors font-normal text-sm shadow-sm ${
              selectedCategory === 'crossover'
                ? 'bg-[#0A9DC4] text-white'
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white'
            }`}
          >
            Crossovers ({counts.crossover})
          </button>
        </div>
      )}

      {/* RESULTS LIST */}
      {visibleMatches.length > 0 ? (
        <div className="bg-[#0c264d]/20 border-2 border-[#0c264d] rounded-xl p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl text-center">
            Matching Encyclopedia Volumes &amp; Sections
          </h2>

          <div className="space-y-4">
            {visibleMatches.map((result, index) => {
              const stripeClass = stripeColors[index % stripeColors.length];
              return (
                <div
                  key={`${result.id}-${result.tab || 'root'}-${index}`}
                  className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden"
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${stripeClass}`}></div>
                  <div className="pl-3 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <h3 className="text-[#0c264d] font-bold text-base">
                        {result.label}
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {result.summary}
                      </p>
                      {result.matchedTerms.length > 0 && (
                        <p className="text-xs text-slate-500">
                          Matched terms: {Array.from(new Set(result.matchedTerms)).join(', ')}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectResult(result.id, result.tab)}
                      className="mt-2 md:mt-0 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold text-sm whitespace-nowrap shrink-0 self-start md:self-center"
                    >
                      Read article →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : searchQuery.trim().length > 0 ? (
        <div className="bg-[#fdf2f8] border-2 border-[#be185d] rounded-xl p-6 shadow-sm text-center">
          <h2 className="text-[#831843] font-bold text-xl mb-2">
            No Direct Matches Found for &ldquo;{searchQuery.trim()}&rdquo;
          </h2>
          <p className="text-sm text-[#831843] max-w-2xl mx-auto leading-relaxed">
            Try searching with a broader condition name (such as Autism ∞, ADHD, APD, Dyslexia, or SPD), a symptom term, or select one of the quick-search topics above.
          </p>
        </div>
      ) : null}

      {/* BOTTOM NAVIGATION BUTTON */}
      <div className="mt-8 mb-12 flex justify-end w-full">
        <button
          type="button"
          onClick={() => setCurrentArticle?.('home')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm"
        >
          <span className="text-xl">←</span>
          Back to Home
        </button>
      </div>

      {/* REFERENCES SECTION */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>

        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b border-[#2abcd4] border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul
            className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0"
            style={{ textIndent: 0 }}
          >
            <li>
              American Psychiatric Association. (2022).{' '}
              <i>Diagnostic and statistical manual of mental disorders</i> (5th ed., text rev.). American Psychiatric Publishing.
            </li>
            <li>
              American Speech-Language-Hearing Association. (2025).{' '}
              <i>Practice portal: Clinical topics in speech, language, and hearing sciences</i>. ASHA.
            </li>
            <li>
              Singer, J. (2017). <i>NeuroDiversity: The birth of an idea</i>. Judy Singer.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}