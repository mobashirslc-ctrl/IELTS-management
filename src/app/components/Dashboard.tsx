import { Link } from "react-router";
import {
  TrendingUp,
  Users,
  FileCheck,
  DollarSign,
  ArrowUpRight,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      label: "Total Revenue",
      value: "৳12,45,000",
      change: "+12.5%",
      trend: "up",
      icon: <DollarSign size={24} />,
    },
    {
      label: "Active Students",
      value: "156",
      change: "+8 this week",
      trend: "up",
      icon: <Users size={24} />,
    },
    {
      label: "Files Processing",
      value: "42",
      change: "12 urgent",
      trend: "neutral",
      icon: <FileCheck size={24} />,
    },
    {
      label: "Success Rate",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      icon: <TrendingUp size={24} />,
    },
  ];

  const recentActivities = [
    {
      title: "New commission received",
      description: "৳15,000 from Student ID: STD-2024-156",
      time: "10 minutes ago",
      status: "success",
    },
    {
      title: "Document verification pending",
      description: "Student: Rahul Ahmed - Canada Visa",
      time: "1 hour ago",
      status: "warning",
    },
    {
      title: "Mock test completed",
      description: "IELTS - Student: Fatima Khan (Band 7.5)",
      time: "2 hours ago",
      status: "success",
    },
    {
      title: "Priority file processing",
      description: "Fast-track request approved for STD-2024-142",
      time: "3 hours ago",
      status: "info",
    },
  ];

  const quickActions = [
    { label: "Add New Lead", path: "/lead-management", color: "blue" },
    { label: "Generate Receipt", path: "/receipt-generator", color: "green" },
    { label: "Check Admission Probability", path: "/admission-probability", color: "purple" },
    { label: "View Market Updates", path: "/market-updates", color: "orange" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 mt-2">Welcome back! Here's what's happening with your agency today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-50 rounded-lg text-blue-600">{stat.icon}</div>
              {stat.trend === "up" && <ArrowUpRight size={20} className="text-green-500" />}
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-500 mb-2">{stat.label}</p>
            <p
              className={`text-sm ${
                stat.trend === "up" ? "text-green-600" : "text-gray-500"
              }`}
            >
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.path}
              className={`p-4 rounded-lg border-2 border-dashed hover:border-solid transition-all hover:shadow-md ${
                action.color === "blue"
                  ? "border-blue-300 hover:border-blue-500 hover:bg-blue-50"
                  : action.color === "green"
                  ? "border-green-300 hover:border-green-500 hover:bg-green-50"
                  : action.color === "purple"
                  ? "border-purple-300 hover:border-purple-500 hover:bg-purple-50"
                  : "border-orange-300 hover:border-orange-500 hover:bg-orange-50"
              }`}
            >
              <p className="text-center font-medium text-gray-900">{action.label}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
        </div>

        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="mt-1">
                {activity.status === "success" && <CheckCircle size={20} className="text-green-500" />}
                {activity.status === "warning" && <AlertCircle size={20} className="text-orange-500" />}
                {activity.status === "info" && <Clock size={20} className="text-blue-500" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-500 mt-1">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                  <Clock size={12} />
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
          <h3 className="text-xl font-semibold mb-2">Commission Milestone</h3>
          <p className="text-blue-100 mb-4">You're ৳55,000 away from unlocking Premium tier benefits!</p>
          <div className="w-full bg-blue-400 rounded-full h-2 mb-2">
            <div className="bg-white rounded-full h-2" style={{ width: "68%" }}></div>
          </div>
          <p className="text-sm text-blue-100">68% complete (৳1,90,000 / ৳2,45,000)</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
          <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
          <p className="text-purple-100 mb-4">Check student admission probability with our new AI tool</p>
          <Link
            to="/admission-probability"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors"
          >
            Try Now <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
