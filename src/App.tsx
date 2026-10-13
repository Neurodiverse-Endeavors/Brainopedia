import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { ArticleContent } from './components/ArticleContent';
import { Header } from './components/Header';
import { DonationBanner } from './components/DonationBanner';
import { Footer } from './components/Footer';

function AppContent(): import("react/jsx-runtime").JSX.Element {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentArticle = articleId || 'home';

  const setCurrentArticle = (article: string) => {
    navigate(`/${article}`);
  };

  // ===== THE "HUNTER" LOOP FOR SCROLLING =====
  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Add a slight offset so the header doesn't cover the title!
          const yOffset = -80; 
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          return true; // We found it!
        }
      }
      return false; // Not found yet
    };

    if (location.hash) {
      // If there is a link, hunt for the element for up to 2 seconds
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
      // If there is no link, just do the normal scroll to the very top
      const pathParts = location.pathname.split('/').filter(Boolean);
      const prevPathParts = (window as any).__prevPath?.split('/').filter(Boolean) || [];
      if (pathParts[0] !== prevPathParts[0]) {
        window.scrollTo(0, 0);
      }
    }
    
    (window as any).__prevPath = location.pathname;
  }, [articleId, location.pathname, location.hash]);

  // Set favicon and page title
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image.webp';
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
          onSearchSelect={(articleId) => setCurrentArticle(articleId)}
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
          <ArticleContent articleId={currentArticle} setCurrentArticle={setCurrentArticle} />
        </main>
      </div>

      <div className="print:hidden">
        <DonationBanner onNavigateTo={() => setCurrentArticle('')} />
        <Footer setCurrentArticle={setCurrentArticle} />
      </div>
    </div>
  );
}

export default function App(): import("react/jsx-runtime").JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/:articleId" element={<AppContent />} />
        <Route path="/:articleId/:tabId" element={<AppContent />} />
      </Routes>
    </BrowserRouter>
  );
}