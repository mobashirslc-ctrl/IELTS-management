import { createBrowserRouter, Navigate } from "react-router";
import LandingPage from "./components/LandingPage";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./components/Dashboard";

// Category A: Business & Revenue Management
import RevenueTracker from "./components/features/RevenueTracker";
import CommissionWithdrawal from "./components/features/CommissionWithdrawal";
import SubAgentMonitoring from "./components/features/SubAgentMonitoring";
import ReceiptGenerator from "./components/features/ReceiptGenerator";

// Category B: AI & Smart Decision Tools
import AdmissionProbability from "./components/features/AdmissionProbability";
import MockTestAnalytics from "./components/features/MockTestAnalytics";
import DocumentTemplates from "./components/features/DocumentTemplates";
import VisaChecklists from "./components/features/VisaChecklists";

// Category C: Operations & Support
import AssessmentReports from "./components/features/AssessmentReports";
import DocumentLocker from "./components/features/DocumentLocker";
import PriorityProcessing from "./components/features/PriorityProcessing";
import SupportDesk from "./components/features/SupportDesk";
import ComplianceChat from "./components/features/ComplianceChat";

// Category D: Student & Marketing Engagement
import LeadManagement from "./components/features/LeadManagement";
import AutomatedFollowup from "./components/features/AutomatedFollowup";
import DigitalBranding from "./components/features/DigitalBranding";
import InterviewPrep from "./components/features/InterviewPrep";
import ProgressTracking from "./components/features/ProgressTracking";
import BookingPortal from "./components/features/BookingPortal";
import MarketUpdates from "./components/features/MarketUpdates";

// Redirect component
function RedirectToDashboard({ to }: { to: string }) {
  return <Navigate to={`/dashboard/${to}`} replace />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: Dashboard
      },
      {
        path: "revenue-tracker",
        Component: RevenueTracker
      },
      {
        path: "commission-withdrawal",
        Component: CommissionWithdrawal
      },
      {
        path: "sub-agent-monitoring",
        Component: SubAgentMonitoring
      },
      {
        path: "receipt-generator",
        Component: ReceiptGenerator
      },
      {
        path: "admission-probability",
        Component: AdmissionProbability
      },
      {
        path: "mock-test-analytics",
        Component: MockTestAnalytics
      },
      {
        path: "document-templates",
        Component: DocumentTemplates
      },
      {
        path: "visa-checklists",
        Component: VisaChecklists
      },
      {
        path: "assessment-reports",
        Component: AssessmentReports
      },
      {
        path: "document-locker",
        Component: DocumentLocker
      },
      {
        path: "priority-processing",
        Component: PriorityProcessing
      },
      {
        path: "support-desk",
        Component: SupportDesk
      },
      {
        path: "compliance-chat",
        Component: ComplianceChat
      },
      {
        path: "lead-management",
        Component: LeadManagement
      },
      {
        path: "automated-followup",
        Component: AutomatedFollowup
      },
      {
        path: "digital-branding",
        Component: DigitalBranding
      },
      {
        path: "interview-prep",
        Component: InterviewPrep
      },
      {
        path: "progress-tracking",
        Component: ProgressTracking
      },
      {
        path: "booking-portal",
        Component: BookingPortal
      },
      {
        path: "market-updates",
        Component: MarketUpdates
      },
    ],
  },
  // Redirect old paths to dashboard
  {
    path: "/revenue-tracker",
    Component: () => <RedirectToDashboard to="revenue-tracker" />
  },
  {
    path: "/commission-withdrawal",
    Component: () => <RedirectToDashboard to="commission-withdrawal" />
  },
  {
    path: "/sub-agent-monitoring",
    Component: () => <RedirectToDashboard to="sub-agent-monitoring" />
  },
  {
    path: "/receipt-generator",
    Component: () => <RedirectToDashboard to="receipt-generator" />
  },
  {
    path: "/admission-probability",
    Component: () => <RedirectToDashboard to="admission-probability" />
  },
  {
    path: "/mock-test-analytics",
    Component: () => <RedirectToDashboard to="mock-test-analytics" />
  },
  {
    path: "/document-templates",
    Component: () => <RedirectToDashboard to="document-templates" />
  },
  {
    path: "/visa-checklists",
    Component: () => <RedirectToDashboard to="visa-checklists" />
  },
  {
    path: "/assessment-reports",
    Component: () => <RedirectToDashboard to="assessment-reports" />
  },
  {
    path: "/document-locker",
    Component: () => <RedirectToDashboard to="document-locker" />
  },
  {
    path: "/priority-processing",
    Component: () => <RedirectToDashboard to="priority-processing" />
  },
  {
    path: "/support-desk",
    Component: () => <RedirectToDashboard to="support-desk" />
  },
  {
    path: "/compliance-chat",
    Component: () => <RedirectToDashboard to="compliance-chat" />
  },
  {
    path: "/lead-management",
    Component: () => <RedirectToDashboard to="lead-management" />
  },
  {
    path: "/automated-followup",
    Component: () => <RedirectToDashboard to="automated-followup" />
  },
  {
    path: "/digital-branding",
    Component: () => <RedirectToDashboard to="digital-branding" />
  },
  {
    path: "/interview-prep",
    Component: () => <RedirectToDashboard to="interview-prep" />
  },
  {
    path: "/progress-tracking",
    Component: () => <RedirectToDashboard to="progress-tracking" />
  },
  {
    path: "/booking-portal",
    Component: () => <RedirectToDashboard to="booking-portal" />
  },
  {
    path: "/market-updates",
    Component: () => <RedirectToDashboard to="market-updates" />
  },
]);
