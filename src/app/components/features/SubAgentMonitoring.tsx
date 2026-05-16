import { Users, TrendingUp, FileCheck, Award, Eye, MoreVertical } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function SubAgentMonitoring() {
  const staffMembers = [
    {
      id: 1,
      name: "Mehedi Hasan",
      role: "Senior Counselor",
      avatar: "MH",
      filesOpened: 45,
      conversions: 38,
      conversionRate: 84.4,
      revenue: 285000,
      performance: "excellent",
    },
    {
      id: 2,
      name: "Nusrat Jahan",
      role: "Counselor",
      avatar: "NJ",
      filesOpened: 32,
      conversions: 26,
      conversionRate: 81.3,
      revenue: 195000,
      performance: "excellent",
    },
    {
      id: 3,
      name: "Rakib Ahmed",
      role: "Junior Counselor",
      avatar: "RA",
      filesOpened: 28,
      conversions: 19,
      conversionRate: 67.9,
      revenue: 142500,
      performance: "good",
    },
    {
      id: 4,
      name: "Sumaiya Akter",
      role: "Counselor",
      avatar: "SA",
      filesOpened: 35,
      conversions: 30,
      conversionRate: 85.7,
      revenue: 225000,
      performance: "excellent",
    },
  ];

  const performanceData = [
    { month: "Jan", mehedi: 38, nusrat: 25, rakib: 20, sumaiya: 28 },
    { month: "Feb", mehedi: 42, nusrat: 28, rakib: 22, sumaiya: 32 },
    { month: "Mar", mehedi: 40, nusrat: 30, rakib: 24, sumaiya: 30 },
    { month: "Apr", mehedi: 43, nusrat: 29, rakib: 26, sumaiya: 33 },
    { month: "May", mehedi: 45, nusrat: 32, rakib: 28, sumaiya: 35 },
  ];

  const getPerformanceBadge = (performance: string) => {
    switch (performance) {
      case "excellent":
        return "bg-green-100 text-green-700";
      case "good":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Sub-Agent/Counselor Monitoring</h1>
        <p className="text-gray-500 mt-2">Track staff performance and file opening reports</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Users size={24} className="text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">4</h3>
          <p className="text-sm text-gray-500 mt-1">Active Staff Members</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <FileCheck size={24} className="text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">140</h3>
          <p className="text-sm text-gray-500 mt-1">Total Files (This Month)</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <TrendingUp size={24} className="text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">80.8%</h3>
          <p className="text-sm text-gray-500 mt-1">Avg Conversion Rate</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-orange-50 rounded-lg">
              <Award size={24} className="text-orange-600" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">৳8.48L</h3>
          <p className="text-sm text-gray-500 mt-1">Total Revenue Generated</p>
        </div>
      </div>

      {/* Staff Performance Table */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Staff Performance Overview</h2>
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Export Report
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Staff Member</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Files Opened</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Conversions</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Conv. Rate</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Performance</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {staffMembers.map((staff) => (
                <tr key={staff.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {staff.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{staff.name}</p>
                        <p className="text-xs text-gray-500">{staff.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm font-semibold text-gray-900">{staff.filesOpened}</td>
                  <td className="px-4 py-4 text-sm font-semibold text-green-600">{staff.conversions}</td>
                  <td className="px-4 py-4 text-sm font-semibold text-gray-900">{staff.conversionRate}%</td>
                  <td className="px-4 py-4 text-sm font-semibold text-purple-600">৳{(staff.revenue / 1000).toFixed(0)}K</td>
                  <td className="px-4 py-4">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded capitalize ${getPerformanceBadge(staff.performance)}`}>
                      {staff.performance}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Eye size={18} className="text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Monthly Performance Comparison</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip />
            <Bar dataKey="mehedi" fill="#3b82f6" name="Mehedi Hasan" />
            <Bar dataKey="nusrat" fill="#10b981" name="Nusrat Jahan" />
            <Bar dataKey="rakib" fill="#f59e0b" name="Rakib Ahmed" />
            <Bar dataKey="sumaiya" fill="#8b5cf6" name="Sumaiya Akter" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Individual Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-blue-100 text-sm">Top Performer</p>
              <h3 className="text-2xl font-semibold mt-1">Sumaiya Akter</h3>
            </div>
            <Award size={32} />
          </div>
          <p className="text-blue-100">85.7% conversion rate • 35 files this month</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-purple-100 text-sm">Highest Revenue</p>
              <h3 className="text-2xl font-semibold mt-1">Mehedi Hasan</h3>
            </div>
            <TrendingUp size={32} />
          </div>
          <p className="text-purple-100">৳2,85,000 generated • 45 files this month</p>
        </div>
      </div>
    </div>
  );
}
