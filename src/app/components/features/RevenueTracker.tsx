import { DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function RevenueTracker() {
  const monthlyData = [
    { month: "Jan", revenue: 85000, commission: 12000 },
    { month: "Feb", revenue: 92000, commission: 13500 },
    { month: "Mar", revenue: 108000, commission: 15800 },
    { month: "Apr", revenue: 125000, commission: 18200 },
    { month: "May", revenue: 145000, commission: 21500 },
  ];

  const commissionBreakdown = [
    { source: "Student Admissions", amount: 89500, percentage: 62, color: "bg-blue-500" },
    { source: "Visa Processing", amount: 35200, percentage: 24, color: "bg-green-500" },
    { source: "Document Services", amount: 15800, percentage: 11, color: "bg-purple-500" },
    { source: "Other Services", amount: 4500, percentage: 3, color: "bg-orange-500" },
  ];

  const pendingPayments = [
    { id: "STD-2024-156", student: "Rahul Ahmed", amount: 15000, date: "2026-05-10", status: "Processing" },
    { id: "STD-2024-142", student: "Fatima Khan", amount: 18500, date: "2026-05-08", status: "Approved" },
    { id: "STD-2024-138", student: "Sakib Hassan", amount: 12000, date: "2026-05-05", status: "Pending" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Automated B2B Revenue Tracker</h1>
        <p className="text-gray-500 mt-2">Real-time commission tracking and outstanding payment updates</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <DollarSign size={24} className="text-blue-600" />
            </div>
            <ArrowUpRight size={20} className="text-green-500" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">৳1,45,000</h3>
          <p className="text-sm text-gray-500 mt-1">Total Commission (May)</p>
          <p className="text-sm text-green-600 mt-2">+18.4% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <TrendingUp size={24} className="text-green-600" />
            </div>
            <ArrowUpRight size={20} className="text-green-500" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">৳89,500</h3>
          <p className="text-sm text-gray-500 mt-1">Available Balance</p>
          <p className="text-sm text-green-600 mt-2">Ready to withdraw</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-50 rounded-lg">
              <Clock size={24} className="text-orange-600" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">৳45,500</h3>
          <p className="text-sm text-gray-500 mt-1">Pending Payments</p>
          <p className="text-sm text-orange-600 mt-2">3 transactions processing</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <DollarSign size={24} className="text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">৳5,55,000</h3>
          <p className="text-sm text-gray-500 mt-1">Total Earned (2026)</p>
          <p className="text-sm text-purple-600 mt-2">156 successful files</p>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Revenue & Commission Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} name="Total Revenue" />
            <Line type="monotone" dataKey="commission" stroke="#10b981" strokeWidth={2} name="Commission" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Commission Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Commission Breakdown</h2>
          <div className="space-y-4">
            {commissionBreakdown.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{item.source}</span>
                  <span className="text-sm font-semibold text-gray-900">৳{item.amount.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className={`${item.color} rounded-full h-2`} style={{ width: `${item.percentage}%` }}></div>
                  </div>
                  <span className="text-xs text-gray-500 w-10 text-right">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Pending Payments</h2>
          <div className="space-y-3">
            {pendingPayments.map((payment) => (
              <div key={payment.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">{payment.student}</span>
                  <span className="text-sm font-semibold text-green-600">৳{payment.amount.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>ID: {payment.id}</span>
                  <span>{payment.date}</span>
                </div>
                <div className="mt-2">
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded ${
                      payment.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : payment.status === "Processing"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {payment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
