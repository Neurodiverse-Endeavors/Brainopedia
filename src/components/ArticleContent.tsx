import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// 1. Import from the articles/routes folder
import { RouteMap } from './articles/routes/routeTypes';
import { coreNeurodevelopmentalRoutes } from './articles/routes/coreNeurodevelopmentalRoutes';
import { learningDifferencesRoutes } from './articles/routes/learningDifferencesRoutes';
import { processingSensoryRoutes } from './articles/routes/processingSensoryRoutes';
import { movementMotorRoutes } from './articles/routes/movementMotorRoutes';
import { mentalHealthRoutes } from './articles/routes/mentalHealthRoutes';
import { geneticEnvironmentalRoutes } from './articles/routes/geneticEnvironmentalRoutes';
import { acquiredNeurodivergenceRoutes } from './articles/routes/acquiredNeurodivergenceRoutes';

// IMPORT THE HIDDEN BOARD PAGE
import { BoardOfDirectors } from './articles/BoardOfDirectors'; // Adjust this path if you saved it elsewhere

// --- THE SEO MASTER DICTIONARY ---
const seoMap: Record<string, { title: string; description: string; noindex?: boolean }> = {
  // Core Site Pages
  'home': { 
    title: 'Brainopedia | The Neurodivergence Encyclopedia', 
    description: 'Explore Brainopedia, the definitive digital encyclopedia for neurodevelopmental conditions, learning differences, and cognitive profiles.' 
  },
  'about': { 
    title: 'About Brainopedia | Our Mission', 
    description: 'Learn about Brainopedia\'s mission to provide comprehensive, neurodivergent-affirming resources and education for individuals, families, and professionals.' 
  },
  'donate': { 
    title: 'Support Brainopedia | Donate Today', 
    description: 'Help support Brainopedia\'s mission to provide free, accessible, and affirming education about neurodivergence and cognitive profiles by making a donation.' 
  },
  'blog': { 
    title: 'Brainopedia Blog | Neurodiversity Updates', 
    description: 'Stay informed with the latest research, insights, and stories from the neurodiversity community on the official Brainopedia blog.' 
  },
  
  // Volume I: Core Neurodevelopmental
  'adhd': { 
    title: 'ADHD (Attention-Deficit/Hyperactivity) | Brainopedia', 
    description: 'Discover the symptoms, causes, and neurodivergent-affirming management strategies for ADHD, including impacts on executive function and emotional regulation.' 
  },
  'autism': { 
    title: 'Autism Spectrum (ASD) | Brainopedia', 
    description: 'Explore the characteristics, sensory processing differences, and neurobiology of Autism Spectrum Disorder from a neurodivergent-affirming perspective.' 
  },

  // Volume II: Learning Differences & Profiles
  'dyslexia': { 
    title: 'Dyslexia | Brainopedia', 
    description: 'Learn about Dyslexia, a neurological learning difference affecting reading and language processing, along with effective support and management strategies.' 
  },
  'dyscalculia': { 
    title: 'Dyscalculia | Brainopedia', 
    description: 'Understand Dyscalculia, a specific learning difference affecting mathematical processing and number sense, including diagnostic tools and accommodations.' 
  },
  'dysgraphia': { 
    title: 'Dysgraphia | Brainopedia', 
    description: 'Explore Dysgraphia, a neurological condition impacting written expression and fine motor skills, along with supportive strategies for school and work.' 
  },
  'nvld': { 
    title: 'Non-Verbal Learning Disability (NVLD) | Brainopedia', 
    description: 'Discover the symptoms and characteristics of Non-Verbal Learning Disability (NVLD), a unique cognitive profile affecting spatial and social processing.' 
  },
  'dld': { 
    title: 'Developmental Language Disorder (DLD) | Brainopedia', 
    description: 'Learn about Developmental Language Disorder (DLD), a neurodevelopmental condition affecting how individuals understand and use spoken language.' 
  },
  'hyperlexia': { 
    title: 'Hyperlexia | Brainopedia', 
    description: 'Understand Hyperlexia, a unique cognitive profile characterized by an intense early fascination with letters, numbers, and advanced reading abilities.' 
  },
  'giftedness': { 
    title: 'Giftedness & Cognitive Profiles | Brainopedia', 
    description: 'Explore the asynchronous development, emotional intensities, and cognitive characteristics associated with giftedness and exceptional intellectual ability.' 
  },
  'twice-exceptional': { 
    title: 'Twice-Exceptional (2e) | Brainopedia', 
    description: 'Discover the unique intersection of giftedness and neurodivergence, known as Twice-Exceptional (2e), including tailored support and educational strategies.' 
  },

  // Volume III: Processing & Sensory
  'apd': { 
    title: 'Auditory Processing Disorder (APD) | Brainopedia', 
    description: 'Learn how Auditory Processing Disorder (APD) affects how the brain interprets sound, along with environmental accommodations and management strategies.' 
  },
  'visual-processing': { 
    title: 'Visual Processing Disorder | Brainopedia', 
    description: 'Understand Visual Processing Disorder, a condition affecting how the brain interprets visual information, and discover effective support strategies.' 
  },
  'spd': { 
    title: 'Sensory Processing Disorder (SPD) | Brainopedia', 
    description: 'Explore Sensory Processing Disorder (SPD) and learn how differences in interpreting sensory input can impact daily life, regulation, and behavior.' 
  },
  'misophonia': { 
    title: 'Misophonia | Brainopedia', 
    description: 'Discover the neurological roots of Misophonia, a condition characterized by intense emotional and physiological reactions to specific trigger sounds.' 
  },
  'synesthesia': { 
    title: 'Synesthesia | Brainopedia', 
    description: 'Learn about Synesthesia, a lifelong neurological phenomenon where stimulation of one sensory pathway leads to automatic experiences in a second pathway.' 
  },

  // Volume IV: Movement & Motor
  'dyspraxia': { 
    title: 'Dyspraxia (DCD) | Brainopedia', 
    description: 'Explore the symptoms, causes, and supportive management strategies for Dyspraxia and Developmental Coordination Disorder (DCD).' 
  },
  'tourette': { 
    title: 'Tourette Syndrome | Brainopedia', 
    description: 'Understand Tourette Syndrome, a neurological condition characterized by involuntary motor and vocal tics, along with affirming support strategies.' 
  },

  // Volume V: Mental Health Crossovers
  'anxiety-stress': { 
    title: 'Anxiety & Stress Crossovers | Brainopedia', 
    description: 'Explore the intersection of neurodivergence and anxiety disorders, including Generalized Anxiety, Social Anxiety, and specific phobias.' 
  },
  'mood-emotions': { 
    title: 'Mood & Emotions | Brainopedia', 
    description: 'Understand how neurodivergent profiles intersect with mood disorders and emotional regulation, including Depression, RSD, and Bipolar Disorder.' 
  },
  'trauma-burnout': { 
    title: 'Trauma & Burnout | Brainopedia', 
    description: 'Learn about Neurodivergent Burnout, Complex PTSD (C-PTSD), and the systemic trauma often experienced by neurodivergent individuals navigating a neurotypical world.' 
  },
  'compulsions-coping': { 
    title: 'Compulsions & Coping | Brainopedia', 
    description: 'Discover how OCD, body-focused repetitive behaviors (BFRBs), and restrictive sensory eating patterns (ARFID) commonly co-occur with neurodivergence.' 
  },

  // Volume VI: Genetic or Environmental
  'downsyndrome': { 
    title: 'Down Syndrome | Brainopedia', 
    description: 'Discover the genetic origins, developmental characteristics, and supportive care strategies for individuals living with Down Syndrome.' 
  },
  'intellectual-disability': { 
    title: 'Intellectual Disability | Brainopedia', 
    description: 'Understand Intellectual Disability (ID), exploring cognitive development, adaptive functioning, and strategies for promoting independence and quality of life.' 
  },
  'fasd': { 
    title: 'Fetal Alcohol Spectrum Disorder (FASD) | Brainopedia', 
    description: 'Learn about the neurodevelopmental impacts of Fetal Alcohol Spectrum Disorder (FASD), including cognitive characteristics and essential support systems.' 
  },
  'epilepsy': { 
    title: 'Epilepsy & Seizure Disorders | Brainopedia', 
    description: 'Explore the neurological origins of Epilepsy, different types of seizures, and modern approaches to treatment and daily management.' 
  },

  // Volume VII: Acquired Neurodivergence
  'tbi': { 
    title: 'Traumatic Brain Injury (TBI) | Brainopedia', 
    description: 'Understand the acute and long-term cognitive, emotional, and physical impacts of Traumatic Brain Injury (TBI) and post-concussion recovery.' 
  },
  'cte': { 
    title: 'Chronic Traumatic Encephalopathy (CTE) | Brainopedia', 
    description: 'Learn about Chronic Traumatic Encephalopathy (CTE), a progressive brain condition linked to repeated head trauma, its symptoms, and ongoing research.' 
  },
  'pandas': { 
    title: 'PANDAS & PANS | Brainopedia', 
    description: 'Discover the characteristics of PANDAS and PANS, autoimmune conditions triggered by infections that cause sudden-onset neuropsychiatric symptoms.' 
  },

  // Custom Deep Dives & Tools
  'rsd-deep-dive': { 
    title: 'Rejection Sensitive Dysphoria (RSD) | Brainopedia', 
    description: 'Take a deep dive into Rejection Sensitive Dysphoria (RSD), exploring its connection to ADHD, emotional regulation, and effective coping strategies.' 
  },
  'symptom-wheel-demo': { 
    title: 'Interactive Symptom Wheel | Brainopedia', 
    description: 'Visualize complex neurodivergent traits and intersecting cognitive profiles with the interactive Brainopedia Symptom Wheel tool.' 
  },
  'project-standards': { 
    title: 'Project Standards & Guidelines | Brainopedia', 
    description: 'Review the technical and editorial guidelines used to build and maintain the Brainopedia digital encyclopedia.' 
  },
  
  // HIDDEN ROUTES (Not indexed by Google)
  'board-verification': {
    title: 'Board of Directors | Neurodiverse Endeavors',
    description: 'Official Board of Directors for Neurodiverse Endeavors 501(c)(3).',
    noindex: true // This flag triggers the hidden SEO tag!
  }
};

// --- THE DELAYED LOADER ---
const DelayedFallback = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 250);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null; 

  return (
    <div className="flex justify-center items-center py-20 opacity-0 animate-fadeIn">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#0c264d]"></div>
      <span className="ml-3 text-[#0c264d] font-spartan font-medium">Loading volume...</span>
    </div>
  );
};

// 2. The Master Map
const articleMap: RouteMap = {
  ...coreNeurodevelopmentalRoutes,
  ...learningDifferencesRoutes,
  ...processingSensoryRoutes,
  ...movementMotorRoutes,
  ...mentalHealthRoutes,
  ...geneticEnvironmentalRoutes,
  ...acquiredNeurodivergenceRoutes,

  'home': lazy(() => import('./articles/Home').then(m => ({ default: m.Home }))),
  'symptom-wheel-demo': lazy(() => import('./SymptomWheelDemo').then(m => ({ default: m.SymptomWheelDemo }))),
  'project-standards': lazy(() => import('./articles/ProjectStandards')),
  'about': lazy(() => import('./articles/ArticleAbout').then(m => ({ default: m.ArticleAbout }))),
  'donate': lazy(() => import('./articles/ArticleDonate').then(m => ({ default: m.ArticleDonate }))),
  'blog': lazy(() => import('./articles/ArticleBlog').then(m => ({ default: m.ArticleBlog }))),
  'rsd-deep-dive': lazy(() => import('./articles/adhd/ADHDSymptomsTabRSD').then(m => ({ default: m.ADHDSymptomsTabRSD }))),
  
  // MAP THE HIDDEN BOARD PAGE HERE (Loading it directly instead of lazily prevents routing blips)
  'board-verification': BoardOfDirectors,
};

interface ArticleContentProps {
  articleId: string;
  setCurrentArticle?: (article: string) => void;
}

export function ArticleContent({ articleId, setCurrentArticle }: ArticleContentProps) {
  const SelectedComponent = articleMap[articleId];
  
  // Look up the SEO data for the current tab, or use a generic fallback
  const seoData = seoMap[articleId] || { 
    title: 'Brainopedia | The Neurodivergence Encyclopedia', 
    description: 'Explore Brainopedia, the definitive digital encyclopedia for neurodevelopmental conditions, learning differences, and cognitive profiles.' 
  };

  // IF THE LINK IS BROKEN OR MISSING
  if (!SelectedComponent) {
    return (
      <div className="bg-red-50 rounded-lg shadow-sm border border-red-200 p-8 text-center">
        <h2 className="text-red-700 font-bold text-2xl mb-4">Link Error (Developer Debug)</h2>
        <p className="text-slate-700 mb-2">
          A button just tried to load the article ID: <strong className="bg-white px-2 py-1 rounded text-red-600 border border-red-200">"{articleId}"</strong>
        </p>
        <p className="text-slate-700 mb-6">
          However, that exact ID does not exist in your <code>articleMap</code>. Check your subgroup routing files to make sure it was added!
        </p>
        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-red-100 hover:bg-red-200 text-red-800 font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Reset to Home/ADHD
        </button>
      </div>
    );
  }

  // IF THE LINK IS GOOD
  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        {/* If the seoMap specifically flags this as noindex (like the board page), inject the tag! */}
        {seoData.noindex && <meta name="robots" content="noindex, nofollow" />}
      </Helmet>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <Suspense fallback={<DelayedFallback />}>
          <SelectedComponent setCurrentArticle={setCurrentArticle} />
        </Suspense>
      </div>
    </>
  );
}