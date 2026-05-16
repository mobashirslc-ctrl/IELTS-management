import { TrendingUp, Bell, Globe, BookOpen, DollarSign, AlertCircle, ExternalLink } from "lucide-react";

export default function MarketUpdates() {
  const latestUpdates = [
    {
      id: 1,
      title: "Canada Increases Study Permit Processing Time",
      category: "Policy Change",
      country: "Canada",
      date: "2026-05-14",
      time: "2 hours ago",
      priority: "high",
      summary: "IRCC announces extended processing times for study permit applications. New timeline: 8-10 weeks for online applications.",
      source: "IRCC Official",
    },
    {
      id: 2,
      title: "UK Post-Study Work Visa Extended to 3 Years",
      category: "Visa Update",
      country: "UK",
      date: "2026-05-13",
      time: "1 day ago",
      priority: "high",
      summary: "UK government announces extension of Graduate Route visa from 2 to 3 years for all degree levels.",
      source: "UKVI",
    },
    {
      id: 3,
      title: "Australia Reduces IELTS Requirement for Select Programs",
      category: "Admission",
      country: "Australia",
      date: "2026-05-12",
      time: "2 days ago",
      priority: "medium",
      summary: "Several Australian universities lower English language requirements for postgraduate programs in STEM fields.",
      source: "Universities Australia",
    },
    {
      id: 4,
      title: "New Scholarship Programs for Bangladesh Students in Germany",
      category: "Scholarship",
      country: "Germany",
      date: "2026-05-10",
      time: "4 days ago",
      priority: "medium",
      summary: "DAAD announces 50 new scholarships specifically for Bangladeshi students pursuing Masters degrees in Engineering and Technology.",
      source: "DAAD",
    },
    {
      id: 5,
      title: "USA F-1 Visa Interview Slots Now Available Until September",
      category: "Visa Update",
      country: "USA",
      date: "2026-05-09",
      time: "5 days ago",
      priority: "low",
      summary: "US Embassy in Dhaka opens additional F-1 visa interview slots for fall 2026 intake students.",
      source: "US Embassy Dhaka",
    },
  ];

  const trendingTopics = [
    { topic: "Post-study work opportunities", views: 1245, trending: true },
    { topic: "Scholarship deadlines", views: 987, trending: true },
    { topic: "Financial document requirements", views: 856, trending: false },
    { topic: "IELTS score updates", views: 743, trending: false },
  ];

  const countryAlerts = [
    { country: "Canada", alerts: 3, color: "red" },
    { country: "UK", alerts: 2, color: "orange" },
    { country: "Australia", alerts: 1, color: "blue" },
    { country: "USA", alerts: 1, color: "green" },
  ];

  const categories = ["All", "Policy Change", "Visa Update", "Admission", "Scholarship", "Immigration"];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700";
      case "medium":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-semibold text-gray-900">Daily Market Updates</h1>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full flex items-center gap-1 animate-pulse">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Live
            </span>
          </div>
          <p className="text-gray-500 mt-2">Latest news and updates from global study abroad sector</p>
        </div>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium">
          <Bell size={20} />
          Subscribe to Alerts
        </button>
      </div>

      {/* Stats Banner */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Stay Updated with Latest Changes</h2>
            <p className="text-blue-100">Real-time notifications about policy changes, visa updates, and opportunities</p>
          </div>
          <TrendingUp size={48} />
        </div>
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-white/20 rounded-lg p-4">
            <p className="text-3xl font-bold mb-1">24</p>
            <p className="text-sm text-blue-100">Updates Today</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <p className="text-3xl font-bold mb-1">156</p>
            <p className="text-sm text-blue-100">This Month</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <p className="text-3xl font-bold mb-1">7</p>
            <p className="text-sm text-blue-100">Critical Alerts</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <p className="text-3xl font-bold mb-1">12</p>
            <p className="text-sm text-blue-100">Countries Tracked</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Updates Feed */}
        <div className="lg:col-span-3 space-y-4">
          {latestUpdates.map((update) => (
            <div
              key={update.id}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${getPriorityBadge(update.priority)}`}
                    >
                      {update.priority === "high" ? "High Priority" : update.priority === "medium" ? "Medium" : "Low"}
                    </span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">
                      {update.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Globe size={12} />
                      {update.country}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{update.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{update.summary}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{update.date}</span>
                    <span>•</span>
                    <span>{update.time}</span>
                    <span>•</span>
                    <span>Source: {update.source}</span>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ExternalLink size={18} className="text-blue-600" />
                </button>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                  Read Full Article
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                  Share with Students
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Country Alerts */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Country Alerts</h3>
            <div className="space-y-3">
              {countryAlerts.map((alert, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <AlertCircle
                      size={18}
                      className={
                        alert.color === "red"
                          ? "text-red-500"
                          : alert.color === "orange"
                          ? "text-orange-500"
                          : alert.color === "blue"
                          ? "text-blue-500"
                          : "text-green-500"
                      }
                    />
                    <span className="text-sm font-medium text-gray-900">{alert.country}</span>
                  </div>
                  <span
                    className={`px-2 py-0.5 text-xs font-medium rounded ${
                      alert.color === "red"
                        ? "bg-red-100 text-red-700"
                        : alert.color === "orange"
                        ? "bg-orange-100 text-orange-700"
                        : alert.color === "blue"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {alert.alerts} alerts
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Topics */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Trending Topics</h3>
            <div className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 flex-1">
                    {topic.trending && <TrendingUp size={14} className="text-orange-500" />}
                    <span className="text-sm text-gray-700">{topic.topic}</span>
                  </div>
                  <span className="text-xs text-gray-500">{topic.views}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
            <BookOpen size={32} className="mb-4" />
            <h3 className="font-semibold mb-2">Resources</h3>
            <div className="space-y-2 text-sm">
              <button className="w-full text-left p-2 hover:bg-white/20 rounded transition-colors">
                Policy Archive
              </button>
              <button className="w-full text-left p-2 hover:bg-white/20 rounded transition-colors">
                Country Guides
              </button>
              <button className="w-full text-left p-2 hover:bg-white/20 rounded transition-colors">
                Webinar Recordings
              </button>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="text-sm font-medium text-blue-900 mb-2">Email Digest</h3>
            <p className="text-xs text-blue-700 mb-3">
              Get daily updates delivered to your inbox
            </p>
            <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
