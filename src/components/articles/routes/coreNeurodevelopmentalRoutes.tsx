import { lazy } from 'react';
import { RouteMap } from './routeTypes';

export const coreNeurodevelopmentalRoutes: RouteMap = {
  // ==========================================
  // 1. ATTENTION-DEFICIT/HYPERACTIVITY DISORDER (ADHD)
  // ==========================================
  'adhd': lazy(() => import('../ArticleADHD').then(m => ({ default: m.ArticleADHD }))),
  
  // ADHD Sub-Pages
  'adhd-overview': lazy(() => import('../adhd/ADHDOverview').then(m => ({ default: m.ADHDOverview }))),
  'adhd-symptoms': lazy(() => import('../adhd/ADHDSymptoms').then(m => ({ default: m.ADHDSymptoms }))),
  'adhd-causes': lazy(() => import('../adhd/ADHDCauses').then(m => ({ default: m.ADHDCauses }))),
  'adhd-epigenetics': lazy(() => import('../adhd/ADHDEpigenetics').then(m => ({ default: m.ADHDEpigenetics }))),
  'adhd-diagnosis': lazy(() => import('../adhd/ADHDDiagnosis').then(m => ({ default: m.ADHDDiagnosis }))),
  'adhd-support': lazy(() => import('../adhd/ADHDSupport').then(m => ({ default: m.ADHDSupport }))),
  'adhd-living': lazy(() => import('../adhd/ADHDLiving').then(m => ({ default: m.ADHDLiving }))),

  // ==========================================
  // 2. AUTISM SPECTRUM DISORDER (ASD)
  // ==========================================
  'autism': lazy(() => import('../ArticleAutism').then(m => ({ default: m.ArticleAutism }))),
  
  // --- HISTORY SUBPAGES ---
  'autism-history-psychiatry': lazy(() => import('../autism/asd-overview/AutismHistoryPsychiatry').then(m => ({ default: m.AutismHistoryPsychiatry }))),
  'autism-history-neurobiology': lazy(() => import('../autism/asd-overview/AutismHistoryNeurobiology').then(m => ({ default: m.AutismHistoryNeurobiology }))),
  'autism-history-medical': lazy(() => import('../autism/asd-overview/AutismHistoryMedical').then(m => ({ default: m.AutismHistoryMedical }))),
  'autism-history-advocacy': lazy(() => import('../autism/asd-overview/AutismHistoryAdvocacy').then(m => ({ default: m.AutismHistoryAdvocacy }))),

  // --- BIOMEDICAL SUBPAGES ---
'autism-biomedical-history': lazy(() => import('../autism/asd-support/BiomedicalHistory').then(m => ({ default: m.BiomedicalHistory }))),
  'autism-biomedical-gut': lazy(() => import('../autism/asd-support/BiomedicalGut').then(m => ({ default: m.BiomedicalGut }))),
  'autism-biomedical-tiers': lazy(() => import('../autism/asd-support/BiomedicalTiers').then(m => ({ default: m.BiomedicalTiers }))),
  
  // Autism Sub-Pages
  'autism-overview': lazy(() => import('../autism/asd-overview/ASDOverview').then(m => ({ default: m.ASDOverview }))),
  'autism-symptoms': lazy(() => import('../autism/asd-symptoms/ASDSymptoms').then(m => ({ default: m.ASDSymptoms }))),
  'autism-causes':   lazy(() => import('../autism/asd-causes/ASDCauses').then(m => ({ default: m.ASDCauses }))),
  'autism-diagnosis': lazy(() => import('../autism/asd-diagnosis/ASDDiagnosis').then(m => ({ default: m.ASDDiagnosis }))),
  'autism-living':    lazy(() => import('../autism/asd-living/ASDLiving').then(m => ({ default: m.ASDLiving }))),
  'autism-support':   lazy(() => import('../autism/asd-support/ASDSupport').then(m => ({ default: m.ASDSupport }))),
  'autism-support-therapies': lazy(() => import('../autism/asd-support/ASDSupport').then(m => ({ default: (props: any) => <m.ASDSupport {...props} initialTab="therapies" /> }))),
// Special Backdoor Routes for Subpage Back Buttons
  'autism-overview-history': lazy(() => import('../autism/asd-overview/ASDOverview').then(m => ({ default: (props: any) => <m.ASDOverview {...props} initialTab="context" /> }))),
  'autism-support-biomedical': lazy(() => import('../autism/asd-support/ASDSupport').then(m => ({ default: (props: any) => <m.ASDSupport {...props} initialTab="biomedical" /> }))),
  // Autism Support Deep Dives
  'autism-early-intervention': lazy(() => import('../autism/asd-support/EarlyInterventionContent').then(m => ({ default: m.EarlyInterventionContent }))),
  'autism-therapies': lazy(() => import('../autism/asd-support/TherapiesContent').then(m => ({ default: m.TherapiesContent }))),
  'autism-educational': lazy(() => import('../autism/asd-support/EducationalContent').then(m => ({ default: m.EducationalContent }))),
  'autism-medical': lazy(() => import('../autism/asd-support/MedicalContent').then(m => ({ default: m.MedicalContent }))),
  'autism-environmental': lazy(() => import('../autism/asd-support/EnvironmentalContent').then(m => ({ default: m.EnvironmentalContent }))),
  'autism-family': lazy(() => import('../autism/asd-support/FamilyPrinciplesContent').then(m => ({ default: m.FamilyPrinciplesContent }))),
  
  /// ==========================================
  // AUTISM THERAPIES & SUPPORT
  // ==========================================
  'autism-speech-therapy': lazy(() => import('../autism/asd-support/SpeechTherapy').then(m => ({ default: m.SpeechTherapy }))),
  'autism-occupational-therapy': lazy(() => import('../autism/asd-support/OccupationalTherapy').then(m => ({ default: m.OccupationalTherapy }))),
  'autism-aba-therapy': lazy(() => import('../autism/asd-support/ABATherapy').then(m => ({ default: m.ABATherapy }))),
  'autism-social-skills': lazy(() => import('../autism/asd-support/SocialSkills').then(m => ({ default: m.SocialSkills }))),
  'autism-mental-health': lazy(() => import('../autism/asd-support/MentalHealth').then(m => ({ default: m.MentalHealth }))),
  'autism-physical-therapy': lazy(() => import('../autism/asd-support/PhysicalTherapy').then(m => ({ default: m.PhysicalTherapy }))),
  
  // NEW DYSREGULATION ROUTE 
  'autism-dysregulation': lazy(() => import('../autism/asd-support/AutismDysregulation').then(m => ({ default: m.AutismDysregulation }))),
  
  // Autism Causes Deep Dives
  'autism-epigenetics': lazy(() => import('../autism/asd-causes/Epigenetics').then(m => ({ default: m.Epigenetics }))),
};