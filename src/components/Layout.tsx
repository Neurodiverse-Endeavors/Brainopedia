import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [currentArticle, setCurrentArticle] = React.useState('about');
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        onSearchSelect={setCurrentArticle}
        toggleSidebar={toggleSidebar}
      />
      
      <div className="flex flex-1">
        <Sidebar 
          currentArticle={currentArticle}
          setCurrentArticle={setCurrentArticle}
          isOpen={isSidebarOpen}
          closeSidebar={closeSidebar}
        />
        
        {/* THE FIX: We added min-h-[100vh] here. This forces the content area to ALWAYS be 
            at least the full height of the monitor, so the footer never jumps up! */}
        <main className="flex-1 overflow-x-hidden min-h-[100vh]">
          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  );
}