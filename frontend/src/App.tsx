import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


// Generated UI Screens
import AdaptivePlanUpdateStruggleInterventionEdupath from './pages/generated/AdaptivePlanUpdateStruggleInterventionEdupath';
import AgentActivityCenterAiCompanionEdupath from './pages/generated/AgentActivityCenterAiCompanionEdupath';
import AiAnalysisResultReviewEdupath from './pages/generated/AiAnalysisResultReviewEdupath';
import AnalysisConfirmedEdupath from './pages/generated/AnalysisConfirmedEdupath';
import AssessmentExperienceKnowledgeCheckEdupath from './pages/generated/AssessmentExperienceKnowledgeCheckEdupath';
import DocumentCenterResumeUploadEdupath from './pages/generated/DocumentCenterResumeUploadEdupath';
import DocumentProcessingEdupath from './pages/generated/DocumentProcessingEdupath';
import HelpCenterGlobalSearchIssueReportingEdupath from './pages/generated/HelpCenterGlobalSearchIssueReportingEdupath';
import InteractivePracticeWorkspaceEdupath from './pages/generated/InteractivePracticeWorkspaceEdupath';
import LandingPageEdupath from './pages/generated/LandingPageEdupath';
import LearnerDashboardEdupathProduction from './pages/generated/LearnerDashboardEdupathProduction';
import LearnerLoginEdupath from './pages/generated/LearnerLoginEdupath';
import LearnerOnboardingEdupath from './pages/generated/LearnerOnboardingEdupath';
import LearnerProfileEdupath from './pages/generated/LearnerProfileEdupath';
import LearnerRegistrationEdupath from './pages/generated/LearnerRegistrationEdupath';
import MentorDiscoveryMatchingEdupath from './pages/generated/MentorDiscoveryMatchingEdupath';
import MentorOverviewRequestReviewEdupath from './pages/generated/MentorOverviewRequestReviewEdupath';
import MentorRegistrationEdupath from './pages/generated/MentorRegistrationEdupath';
import MentorshipRequestContextPreviewEdupath from './pages/generated/MentorshipRequestContextPreviewEdupath';
import MentorshipWorkspaceActiveGuidanceEdupath from './pages/generated/MentorshipWorkspaceActiveGuidanceEdupath';
import MyLearningWorkspaceTodaySTasksEdupath from './pages/generated/MyLearningWorkspaceTodaySTasksEdupath';
import NotificationCenterEcosystemEdupath from './pages/generated/NotificationCenterEcosystemEdupath';
import OnboardingCompleteEdupath from './pages/generated/OnboardingCompleteEdupath';
import PersonalizedLearningJourneyObjectivesEdupath from './pages/generated/PersonalizedLearningJourneyObjectivesEdupath';
import PrioritySkillGapsDetailEdupath from './pages/generated/PrioritySkillGapsDetailEdupath';
import ProgressIntelligenceLearningConsistencyEdupath from './pages/generated/ProgressIntelligenceLearningConsistencyEdupath';
import RoleSelectionEdupath from './pages/generated/RoleSelectionEdupath';
import SettingsLearningPreferencesPrivacyEdupath from './pages/generated/SettingsLearningPreferencesPrivacyEdupath';
import SkillGapOverviewReadinessEdupath from './pages/generated/SkillGapOverviewReadinessEdupath';
import WeeklyLearningPlanDayScheduleEdupath from './pages/generated/WeeklyLearningPlanDayScheduleEdupath';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/landingpage" replace />} />
        
        <Route path="/adaptiveplanupdatestruggleintervention" element={<AdaptivePlanUpdateStruggleInterventionEdupath />} />
        <Route path="/agentactivitycenteraicompanion" element={<AgentActivityCenterAiCompanionEdupath />} />
        <Route path="/aianalysisresultreview" element={<AiAnalysisResultReviewEdupath />} />
        <Route path="/analysisconfirmed" element={<AnalysisConfirmedEdupath />} />
        <Route path="/assessmentexperienceknowledgecheck" element={<AssessmentExperienceKnowledgeCheckEdupath />} />
        <Route path="/documentcenterresumeupload" element={<DocumentCenterResumeUploadEdupath />} />
        <Route path="/documentprocessing" element={<DocumentProcessingEdupath />} />
        <Route path="/helpcenterglobalsearchissuereporting" element={<HelpCenterGlobalSearchIssueReportingEdupath />} />
        <Route path="/interactivepracticeworkspace" element={<InteractivePracticeWorkspaceEdupath />} />
        <Route path="/landingpage" element={<LandingPageEdupath />} />
        <Route path="/learnerdashboardproduction" element={<LearnerDashboardEdupathProduction />} />
        <Route path="/learnerlogin" element={<LearnerLoginEdupath />} />
        <Route path="/learneronboarding" element={<LearnerOnboardingEdupath />} />
        <Route path="/learnerprofile" element={<LearnerProfileEdupath />} />
        <Route path="/learnerregistration" element={<LearnerRegistrationEdupath />} />
        <Route path="/mentordiscoverymatching" element={<MentorDiscoveryMatchingEdupath />} />
        <Route path="/mentoroverviewrequestreview" element={<MentorOverviewRequestReviewEdupath />} />
        <Route path="/mentorregistration" element={<MentorRegistrationEdupath />} />
        <Route path="/mentorshiprequestcontextpreview" element={<MentorshipRequestContextPreviewEdupath />} />
        <Route path="/mentorshipworkspaceactiveguidance" element={<MentorshipWorkspaceActiveGuidanceEdupath />} />
        <Route path="/mylearningworkspacetodaystasks" element={<MyLearningWorkspaceTodaySTasksEdupath />} />
        <Route path="/notificationcenterecosystem" element={<NotificationCenterEcosystemEdupath />} />
        <Route path="/onboardingcomplete" element={<OnboardingCompleteEdupath />} />
        <Route path="/personalizedlearningjourneyobjectives" element={<PersonalizedLearningJourneyObjectivesEdupath />} />
        <Route path="/priorityskillgapsdetail" element={<PrioritySkillGapsDetailEdupath />} />
        <Route path="/progressintelligencelearningconsistency" element={<ProgressIntelligenceLearningConsistencyEdupath />} />
        <Route path="/roleselection" element={<RoleSelectionEdupath />} />
        <Route path="/settingslearningpreferencesprivacy" element={<SettingsLearningPreferencesPrivacyEdupath />} />
        <Route path="/skillgapoverviewreadiness" element={<SkillGapOverviewReadinessEdupath />} />
        <Route path="/weeklylearningplandayschedule" element={<WeeklyLearningPlanDayScheduleEdupath />} />
        
        {/* Navigation Aliases */}
        <Route path="/dashboard" element={<Navigate to="/learnerdashboardproduction" replace />} />
        <Route path="/skillgapoverview" element={<Navigate to="/skillgapoverviewreadiness" replace />} />
        <Route path="/progressintelligenceperformancereports" element={<Navigate to="/progressintelligencelearningconsistency" replace />} />
        <Route path="/progressintelligence" element={<Navigate to="/progressintelligencelearningconsistency" replace />} />
        <Route path="/mylearningworkspace" element={<Navigate to="/mylearningworkspacetodaystasks" replace />} />
        <Route path="/practice" element={<Navigate to="/interactivepracticeworkspace" replace />} />
        <Route path="/assessment" element={<Navigate to="/assessmentexperienceknowledgecheck" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
