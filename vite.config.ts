import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import Sitemap from 'vite-plugin-sitemap'; // <-- 1. Import the new plugin

// 2. Here is the master list of all your Google-ready URLs!
const encyclopediaRoutes = [
  // Core Pages
  '/home', '/about', '/donate', '/blog', '/project-standards', '/symptom-wheel-demo', '/rsd-deep-dive',
  
  // Core Neurodevelopmental
  '/adhd', '/adhd-overview', '/adhd-symptoms', '/adhd-causes', '/adhd-epigenetics', '/adhd-diagnosis', '/adhd-support', '/adhd-living',
  '/autism', '/autism-overview', '/autism-symptoms', '/autism-causes', '/autism-diagnosis', '/autism-living', '/autism-support', '/autism-support-therapies', '/autism-early-intervention', '/autism-therapies', '/autism-educational', '/autism-medical', '/autism-environmental', '/autism-family', '/autism-speech-therapy', '/autism-occupational-therapy', '/autism-aba-therapy', '/autism-social-skills', '/autism-mental-health', '/autism-physical-therapy', '/autism-dysregulation', '/autism-epigenetics',
  
  // Learning Differences
  '/dyslexia', '/dyslexia-overview', '/dyslexia-symptoms-core', '/dyslexia-symptoms-impact', '/dyslexia-symptoms-strengths', '/dyslexia-causes-brain', '/dyslexia-causes-genetics', '/dyslexia-causes-risk', '/dyslexia-diagnosis-overview', '/dyslexia-diagnosis-ages', '/dyslexia-diagnosis-evaluation', '/dyslexia-living', '/dyslexia-support-interventions', '/dyslexia-support-tutoring', '/dyslexia-support-multisensory', '/dyslexia-support-technology', '/dyslexia-support-executive', '/dyslexia-support-social', '/dyslexia-support-home',
  '/dyscalculia', '/dyscalculia-overview', '/dyscalculia-symptoms', '/dyscalculia-causes', '/dyscalculia-diagnosis', '/dyscalculia-support', '/dyscalculia-living',
  '/dysgraphia', '/dysgraphia-overview', '/dysgraphia-symptoms', '/dysgraphia-causes', '/dysgraphia-diagnosis', '/dysgraphia-support', '/dysgraphia-living',
  '/nvld', '/nvld-overview', '/nvld-symptoms', '/nvld-causes', '/nvld-diagnosis', '/nvld-support', '/nvld-living',
  '/dld', '/dld-overview', '/dld-symptoms', '/dld-causes', '/dld-diagnosis', '/dld-support', '/dld-living',
  '/hyperlexia', '/hyperlexia-overview', '/hyperlexia-symptoms', '/hyperlexia-causes', '/hyperlexia-diagnosis', '/hyperlexia-support', '/hyperlexia-living',
  '/giftedness', '/giftedness-overview', '/giftedness-symptoms', '/giftedness-causes', '/giftedness-diagnosis', '/giftedness-support', '/giftedness-living',
  '/twice-exceptional', '/twice-exceptional-overview', '/twice-exceptional-symptoms', '/twice-exceptional-causes', '/twice-exceptional-diagnosis', '/twice-exceptional-support', '/twice-exceptional-living',
  
  // Processing & Sensory
  '/apd', '/apd-overview', '/apd-symptoms', '/apd-causes', '/apd-diagnosis', '/apd-support', '/apd-living',
  '/visual-processing', '/visual-processing-overview', '/visual-processing-symptoms', '/visual-processing-causes', '/visual-processing-diagnosis', '/visual-processing-support', '/visual-processing-living',
  '/spd', '/spd-overview', '/spd-symptoms', '/spd-causes', '/spd-diagnosis', '/spd-support', '/spd-living',
  '/misophonia', '/misophonia-overview', '/misophonia-symptoms', '/misophonia-causes', '/misophonia-diagnosis', '/misophonia-support', '/misophonia-living',
  '/synesthesia', '/synesthesia-overview', '/synesthesia-symptoms', '/synesthesia-causes', '/synesthesia-diagnosis', '/synesthesia-support', '/synesthesia-living',
  
  // Movement & Motor
  '/dyspraxia', '/dyspraxia-overview', '/dyspraxia-symptoms', '/dyspraxia-causes', '/dyspraxia-diagnosis', '/dyspraxia-support', '/dyspraxia-living',
  '/tourette', '/tourette-overview', '/tourette-symptoms', '/tourette-causes', '/tourette-diagnosis', '/tourette-support', '/tourette-living',
  
  // Mental Health Crossovers
  '/ocd', '/ocd-overview', '/ocd-symptoms', '/ocd-causes', '/ocd-diagnosis', '/ocd-support', '/ocd-living',
  '/bipolar', '/bipolar-overview', '/bipolar-symptoms', '/bipolar-causes', '/bipolar-diagnosis', '/bipolar-support', '/bipolar-living',
  '/schizophrenia', '/schizophrenia-overview', '/schizophrenia-symptoms', '/schizophrenia-causes', '/schizophrenia-diagnosis', '/schizophrenia-support', '/schizophrenia-living',
  
  // Genetic or Environmental
  '/downsyndrome', '/downsyndrome-overview', '/downsyndrome-symptoms', '/downsyndrome-causes', '/downsyndrome-diagnosis', '/downsyndrome-support', '/downsyndrome-living',
  '/intellectual-disability', '/intellectual-disability-overview', '/intellectual-disability-symptoms', '/intellectual-disability-causes', '/intellectual-disability-diagnosis', '/intellectual-disability-support', '/intellectual-disability-living',
  '/fasd', '/fasd-overview', '/fasd-symptoms', '/fasd-causes', '/fasd-diagnosis', '/fasd-support', '/fasd-living',
  '/epilepsy', '/epilepsy-overview', '/epilepsy-symptoms', '/epilepsy-causes', '/epilepsy-diagnosis', '/epilepsy-support', '/epilepsy-living',
  
  // Acquired Neurodivergence
  '/tbi', '/tbi-overview', '/tbi-symptoms', '/tbi-causes', '/tbi-diagnosis', '/tbi-support', '/tbi-living',
  '/cte', '/cte-overview', '/cte-symptoms', '/cte-causes', '/cte-diagnosis', '/cte-support', '/cte-living',
  '/pandas', '/pandas-overview', '/pandas-symptoms', '/pandas-causes', '/pandas-diagnosis', '/pandas-support', '/pandas-living'
];
export default defineConfig({
plugins: [
    react(),
    visualizer({ open: true }),
  
  
// 3. Add the Sitemap generator!
    Sitemap({
      hostname: 'https://brainopedia.org',
      dynamicRoutes: encyclopediaRoutes,
      generateRobotsTxt: false, // <-- This is the only new line!
    })
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react'],
          charts: ['recharts']
        }
      }
    }
  }
});