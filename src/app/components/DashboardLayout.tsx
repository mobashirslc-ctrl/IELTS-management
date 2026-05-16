import { Outlet, Link, useLocation } from "react-router";
import {
  DollarSign,
  CreditCard,
  Users,
  Receipt,
  Brain,
  ClipboardCheck,
  FileText,
  CheckSquare,
  Award,
  FolderLock,
  Zap,
  Headphones,
  MessageSquare,
  UserPlus,
  MessageCircle,
  Palette,
  Video,
  Eye,
  Calendar,
  TrendingUp,
  Menu,
  X,
  Home,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  badge?: string;
}

interface NavCategory {
  title: string;
  items: NavItem[];
}

const navigationCategories: NavCategory[] = [
  {
    title: "Business & Revenue",
    items: [
      { name: "Revenue Tracker", path: "revenue-tracker", icon: <DollarSign size={20} /> },
      { name: "Commission Withdrawal", path: "commission-withdrawal", icon: <CreditCard size={20} /> },
      { name: "Sub-Agent Monitoring", path: "sub-agent-monitoring", icon: <Users size={20} /> },
      { name: "Receipt Generator", path: "receipt-generator", icon: <Receipt size={20} /> },
    ],
  },
  {
    title: "AI & Smart Tools",
    items: [
      { name: "Admission Probability", path: "admission-probability", icon: <Brain size={20} />, badge: "AI" },
      { name: "Mock Test Analytics", path: "mock-test-analytics", icon: <ClipboardCheck size={20} /> },
      { name: "Document Templates", path: "document-templates", icon: <FileText size={20} /> },
      { name: "Visa Checklists", path: "visa-checklists", icon: <CheckSquare size={20} /> },
    ],
  },
  {
    title: "Operations & Support",
    items: [
      { name: "Assessment Reports", path: "assessment-reports", icon: <Award size={20} /> },
      { name: "Document Locker", path: "document-locker", icon: <FolderLock size={20} /> },
      { name: "Priority Processing", path: "priority-processing", icon: <Zap size={20} /> },
      { name: "Support Desk 24/7", path: "support-desk", icon: <Headphones size={20} />, badge: "Live" },
      { name: "Compliance Chat", path: "compliance-chat", icon: <MessageSquare size={20} /> },
    ],
  },
  {
    title: "Student & Marketing",
    items: [
      { name: "Lead Management CRM", path: "lead-management", icon: <UserPlus size={20} /> },
      { name: "Automated Follow-up", path: "automated-followup", icon: <MessageCircle size={20} /> },
      { name: "Digital Branding", path: "digital-branding", icon: <Palette size={20} /> },
      { name: "Interview Prep", path: "interview-prep", icon: <Video size={20} /> },
      { name: "Progress Tracking", path: "progress-tracking", icon: <Eye size={20} /> },
      { name: "Booking Portal", path: "booking-portal", icon: <Calendar size={20} /> },
      { name: "Market Updates", path: "market-updates", icon: <TrendingUp size={20} />, badge: "New" },
    ],
  },
];

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    "Business & Revenue",
    "AI & Smart Tools",
    "Operations & Support",
    "Student & Marketing",
  ]);
  const location = useLocation();

  const toggleCategory = (title: string) => {
    setExpandedCategories((prev) =>
      prev.includes(title) ? prev.filter((cat) => cat !== title) : [...prev, title]
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-72" : "w-0"
        } transition-all duration-300 bg-white border-r border-gray-200 overflow-hidden flex flex-col`}
      >
        <div className="p-6 border-b border-gray-200">
          <Link to="/" className="block hover:opacity-80 transition-opacity">
            <h1 className="font-semibold text-xl text-gray-900">Study Abroad Portal</h1>
            <p className="text-sm text-gray-500 mt-1">B2B Partner Dashboard</p>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <Link
            to="."
            className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              location.pathname === "/dashboard"
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Home size={20} />
            <span>Dashboard Overview</span>
          </Link>

          {navigationCategories.map((category) => (
            <div key={category.title} className="mb-4">
              <button
                onClick={() => toggleCategory(category.title)}
                className="flex items-center justify-between w-full px-4 py-2 text-xs font-semibold text-gray-500 uppercase hover:text-gray-700"
              >
                <span>{category.title}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    expandedCategories.includes(category.title) ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedCategories.includes(category.title) && (
                <div className="mt-2 space-y-1">
                  {category.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                        location.pathname === `/dashboard/${item.path}`
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {item.icon}
                      <span className="flex-1 text-sm">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              AP
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Agency Partner</p>
              <p className="text-xs text-gray-500 truncate">partner@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <MessageSquare size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
