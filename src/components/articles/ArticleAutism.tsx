import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleAutismProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleAutism({ setCurrentArticle }: ArticleAutismProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('autism-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('autism-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('autism-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('autism-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('autism-support');
      }
    },
    { 
      id: 'living', 
      title: 'Daily Living',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('autism-living');
      }
    },
  ];

  return (
    <article className="max-w-6xl animate-fadeIn font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl text-[#0c264d] font-normal">
        Autism Spectrum Disorder (ASD)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Autism spectrum disorder (ASD)</strong> is a neurodevelopmental condition characterized 
            by differences in social communication and interaction, alongside restricted or repetitive patterns of 
            behavior, interests, or activities. The term "spectrum" reflects the wide variation in challenges and 
            strengths possessed by each person.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Autism Spectrum Disorder"
            image="/images/autism/autism-main-infobox.webp"
            data={[
              { label: 'Other names', value: 'Autism, ASD' },
              { label: 'Specialty', value: 'Psychiatry, Pediatrics, Neurology' },
              { label: 'Symptoms', value: 'Social communication differences, restricted interests, repetitive behaviors' },
              { label: 'Usual onset', value: 'Early childhood' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: '1 in 36 children (USA, 2023)' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback
            src="/images/autism/autism-main-overview.webp"
            alt="Autism Overview"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          <p className="mb-4">
            Autism is a lifelong neurodevelopmental condition that affects how people perceive the world. Affecting approximately 1 in 36 children in the United States,<sup className="text-[#10b981] font-bold ml-0.5">1</sup> it is viewed through the neurodiversity paradigm as a natural human variation to be accepted and accommodated, rather than a disease to be "cured."
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('autism-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback
            src="/images/autism/autism-main-symptoms.webp"
            alt="Autism Symptoms and Characteristics"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          <p className="mb-4">
            Autism involves differences in social communication, sensory processing, and a preference for predictable routines. Because it is a spectrum, every individual has a unique profile of challenges and remarkable strengths, such as deep focus, creative thinking, and advanced pattern recognition.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('autism-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback
            src="/images/autism/autism-main-causes.webp"
            alt="Autism Causes and Origins"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          <p className="mb-4">
            Arising from differences in early brain development, autism's exact causes involve complex genetic and environmental factors.<sup className="text-[#10b981] font-bold ml-0.5">2, 3</sup> Brain imaging shows variations in neurological connectivity that help explain these differences in social cognition and sensory processing.<sup className="text-[#10b981] font-bold ml-0.5">4</sup>
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('autism-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback
            src="/images/autism/autism-main-diagnosis.webp"
            alt="Autism Testing and Diagnosis"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          <p className="mb-4">
            There is no medical test for autism. It is diagnosed through comprehensive behavioral evaluations by professionals using standardized criteria, such as the DSM-5-TR.<sup className="text-[#10b981] font-bold ml-0.5">5</sup> While often identified in early childhood, many individuals are diagnosed later in life after years of unrecognized struggles.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('autism-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback
            src="/images/autism/autism-main-support.webp"
            alt="Autism Support and Management"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          <p className="mb-4">
            Effective support is highly individualized, focusing on tools that help a person thrive—like sensory accommodations, speech therapy, and occupational therapy. Affirming care prioritizes well-being, autonomy, and skill-building without trying to erase a person's core autistic traits.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('autism-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback
            src="/images/autism/autism-main-living.webp"
            alt="Living with Autism"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Autism</h2>
          <p className="mb-4">
            Autistic individuals lead meaningful lives across all areas of society. Topics in this section cover navigating daily accommodations, fostering a positive autistic identity, building self-advocacy skills, understanding legal protections, and connecting with the broader autistic community.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('autism-living');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#10b981] mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Centers for Disease Control and Prevention. (2023). Data & statistics on autism spectrum disorder. U.S. Department of Health and Human Services.</p>
            <p>2. Sandin, S., et al. (2014). The familial risk of autism. <i>JAMA</i>.</p>
            <p>3. De Rubeis, S., et al. (2014). Synaptic, transcriptional and chromatin genes disrupted in autism. <i>Nature</i>.</p>
            <p>4. Courchesne, E., et al. (2011). Brain growth across the life span in autism: Age-specific changes in anatomical pathology. <i>Brain Research</i>.</p>
            <p>5. American Psychiatric Association. (2022). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed., text rev.). American Psychiatric Publishing.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>Autistic Self Advocacy Network (ASAN). (n.d.). About autism.</p>
            <p>National Institute of Mental Health (NIMH). (2023). Autism spectrum disorder. National Institutes of Health.</p>
          </div>
        </div>
      </div>
    </article>
  );
}