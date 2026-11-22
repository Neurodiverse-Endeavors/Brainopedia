import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { ArticleContent } from './components/ArticleContent';
import { Header } from './components/Header';
import { DonationBanner } from './components/DonationBanner';
import { Footer } from './components/Footer';

function AppContent() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentArticle = articleId || 'home';

  const handleNavigateWithTab = (targetArticle: string, tab?: string) => {
    if (!targetArticle || targetArticle === 'home') {
      navigate('/');
      return;
    }
    const query = tab ? `?tab=${encodeURIComponent(tab)}` : '';
    navigate(`/${targetArticle}${query}`);
  };

  const setCurrentArticle = (article: string) => {
    handleNavigateWithTab(article);
  };

  const handleSearchSubmit = () => {
    const trimmed = searchQuery.trim();
    navigate(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : '/search');
  };

  // Sync searchQuery if user lands directly on /search?q=...
  useEffect(() => {
    if (currentArticle === 'search') {
      const params = new URLSearchParams(location.search);
      const urlQuery = params.get('q');
      if (urlQuery !== null && urlQuery !== searchQuery) {
        setSearchQuery(urlQuery);
      }
    }
  }, [currentArticle, location.search]);

  // ===== THE "HUNTER" LOOP FOR SCROLLING =====
  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Offset so the sticky header does not cover the section title
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          return true;
        }
      }
      return false;
    };

    if (location.hash) {
      if (!scrollToHash()) {
        let attempts = 0;
        const interval = setInterval(() => {
          attempts++;
          if (scrollToHash() || attempts > 20) {
            clearInterval(interval);
          }
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }

    (window as Window & { __prevPath?: string }).__prevPath = location.pathname;
  }, [articleId, location.pathname, location.hash]);

  // Set favicon and page title
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/webp';
    link.href = '/images/favicon.webp';
    document.title = 'Brainopedia - Encyclopedia of Neurodivergent Minds';
  }, []);

  return (
    <div className="min-h-screen bg-[#0A9DC4] print:bg-white">
      <div className="print:hidden">
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onSearchSelect={handleNavigateWithTab}
          onSearchSubmit={handleSearchSubmit}
        />
      </div>

      <div className="flex print:block">
        <div className="print:hidden">
          <Sidebar
            currentArticle={currentArticle}
            setCurrentArticle={setCurrentArticle}
            isOpen={isSidebarOpen}
            closeSidebar={() => setIsSidebarOpen(false)}
          />
        </div>

        <main className="flex-1 p-2 md:p-8 lg:p-12 max-w-5xl mx-auto w-full print:p-0 print:max-w-none">
          <ArticleContent
            articleId={currentArticle}
            setCurrentArticle={setCurrentArticle}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSelectResult={handleNavigateWithTab}
          />
        </main>
      </div>

      <div className="print:hidden">
        <DonationBanner onNavigateTo={() => setCurrentArticle('')} />
        <Footer setCurrentArticle={setCurrentArticle} />
      </div>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/:articleId" element={<AppContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;