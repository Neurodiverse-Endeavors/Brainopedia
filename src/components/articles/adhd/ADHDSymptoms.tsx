import { useSearchParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { ADHDSymptomsTabCore } from './ADHDSymptomsTabCore';
import { ADHDSymptomsTabInattention } from './ADHDSymptomsTabInattention';
import { ADHDSymptomsTabHyperactivity } from './ADHDSymptomsTabHyperactivity';
import { ADHDSymptomsTabImpulsivity } from './ADHDSymptomsTabImpulsivity';
import { ADHDSymptomsTabMore } from './ADHDSymptomsTabMore';
import { ADHDSymptomsTabFemales } from './ADHDSymptomsTabFemales';
import { ADHDSymptomsTabMyths } from './ADHDSymptomsTabMyths';

interface ASDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function ADHDSymptoms({ setCurrentArticle, initialTab }: ASDSymptomsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || initialTab || 'core';

  const handleTabChange = (newTab: string) => {
    setSearchParams({ tab: newTab });
  };

  return (
    <article className="max-w-full w-full">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>
      
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl">
          ADHD: Symptoms & Characteristics
        </h1>

        {/* Desktop "All About ADHD" Button - Unbolded */}
<button 
  onClick={() => setCurrentArticle?.('adhd')}
  className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
>
  <span className="text-lg">←</span>
  All About ADHD
</button>
      </div>

      {/* Mobile button - shows only on small screens below title - Unbolded */}
      <button 
        onClick={() => setCurrentArticle?.('adhd')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm py-2.5 px-5 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-6 shadow-sm"
      >
        <span className="text-xl">←</span>
        All About ADHD
      </button>

      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger value="core" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Core Symptoms
          </TabsTrigger>
          <TabsTrigger value="inattention" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Inattention
          </TabsTrigger>
          <TabsTrigger value="hyperactivity" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Hyperactivity
          </TabsTrigger>
          <TabsTrigger value="impulsivity" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Impulsivity
          </TabsTrigger>
          <TabsTrigger value="more" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            More Symptoms
          </TabsTrigger>
          <TabsTrigger value="females" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            ADHD in Females
          </TabsTrigger>
          <TabsTrigger value="myths" className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto">
            Myths & Misconceptions
          </TabsTrigger>
        </TabsList>

        {/* Core Symptoms Tab */}
        <TabsContent value="core" className="space-y-8">
          <ADHDSymptomsTabCore setCurrentArticle={setCurrentArticle} />
        </TabsContent>

        {/* Inattention Tab */}
        <TabsContent value="inattention" className="space-y-8">
          <ADHDSymptomsTabInattention />
        </TabsContent>

        {/* Hyperactivity Tab */}
        <TabsContent value="hyperactivity" className="space-y-8">
          <ADHDSymptomsTabHyperactivity />
        </TabsContent>

        {/* Impulsivity Tab */}
        <TabsContent value="impulsivity" className="space-y-8">
          <ADHDSymptomsTabImpulsivity />
        </TabsContent>

        {/* More Symptoms Tab (Extra mobile button removed here) */}
        <TabsContent value="more" className="space-y-8">
          <div className="bg-[#f0f9ff] p-6 rounded-lg">
            <ADHDSymptomsTabMore setCurrentArticle={setCurrentArticle} />
          </div>
        </TabsContent>

        {/* ADHD in Females Tab */}
        <TabsContent value="females" className="space-y-8">
          <ADHDSymptomsTabFemales />
        </TabsContent>

        {/* Myths & Misconceptions Tab */}
        <TabsContent value="myths" className="space-y-8">
          <ADHDSymptomsTabMyths />
        </TabsContent>

      </Tabs>

    </article>
  );
}