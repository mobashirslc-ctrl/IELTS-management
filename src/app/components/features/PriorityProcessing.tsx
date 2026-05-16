import { Zap, Clock, CheckCircle, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

export default function PriorityProcessing() {
  const [selectedFile, setSelectedFile] = useState("");

  const eligibleFiles = [
    { id: "STD-2024-156", student: "Rahul Ahmed", country: "Canada", status: "Document Review", daysInQueue: 5 },
    { id: "STD-2024-142", student: "Fatima Khan", country: "Australia", status: "Pending Verification", daysInQueue: 8 },
    { id: "STD-2024-138", student: "Sakib Hassan", country: "UK", status: "Initial Assessment", daysInQueue: 3 },
  ];

  const priorityHistory = [
    { id: "STD-2024-130", student: "Nusrat Jahan", processedIn: "2 days", saved: "6 days", date: "2026-05-10" },
    { id: "STD-2024-125", student: "Mehedi Hasan", processedIn: "3 days", saved: "5 days", date: "2026-05-05" },
    { id: "STD-2024-118", student: "Tahmina Akter", processedIn: "2 days", saved: "7 days", date: "2026-04-28" },
  ];

  const benefits = [
    { title: "Fast-Track Processing", description: "Jump to the front of the queue", icon: <Zap /> },
    { title: "Dedicated Team", description: "Assigned specialist counselor", icon: <Star /> },
    { title: "Daily Updates", description: "Real-time status notifications", icon: <Clock /> },
    { title: "Priority Support", description: "24/7 dedicated helpline", icon: <CheckCircle /> },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Priority File Processing</h1>
        <p className="text-gray-500 mt-2">Fast-track processing for high-volume partners</p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-xl text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Zap size={40} />
              <h2 className="text-3xl font-bold">Fast-Track Your Files</h2>
            </div>
            <p className="text-orange-100 text-lg">Reduce processing time by up to 70%</p>
          </div>
          <div className="text-center bg-white/20 rounded-xl p-6">
            <p className="text-orange-100 text-sm mb-1">Average Processing</p>
            <p className="text-5xl font-bold mb-1">2-3</p>
            <p className="text-orange-100">Days</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white/20 rounded-lg p-4">
            <p className="text-3xl font-bold mb-1">70%</p>
            <p className="text-sm text-orange-100">Faster Processing</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <p className="text-3xl font-bold mb-1">98%</p>
            <p className="text-sm text-orange-100">Success Rate</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <p className="text-3xl font-bold mb-1">24/7</p>
            <p className="text-sm text-orange-100">Priority Support</p>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="p-3 bg-orange-50 rounded-lg w-fit mb-4 text-orange-600">
              {benefit.icon}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
            <p className="text-sm text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Request Form */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Request Priority Processing</h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select File *</label>
              <select
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              >
                <option value="">Choose a file to fast-track...</option>
                {eligibleFiles.map((file) => (
                  <option key={file.id} value={file.id}>
                    {file.id} - {file.student} ({file.country}) - {file.daysInQueue} days in queue
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority Reason *</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option>Urgent Deadline</option>
                <option>Semester Starting Soon</option>
                <option>Visa Interview Scheduled</option>
                <option>Special Request</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
              <textarea
                rows={4}
                placeholder="Provide any additional context..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              ></textarea>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-900">
                <strong>Note:</strong> Priority processing is available for partners with 20+ active files. Additional charges may apply.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 rounded-lg hover:from-orange-700 hover:to-orange-800 transition-all flex items-center justify-center gap-2 font-medium"
            >
              <Zap size={20} />
              Submit Priority Request
            </button>
          </form>
        </div>

        {/* Info Panel */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Eligible Files</h3>
            <p className="text-2xl font-bold text-orange-600 mb-1">{eligibleFiles.length}</p>
            <p className="text-sm text-gray-500">Files can be fast-tracked</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Processing Time</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Standard</span>
                <span className="font-semibold text-gray-900">8-10 days</span>
              </div>
              <ArrowRight size={20} className="text-orange-500 mx-auto" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Priority</span>
                <span className="font-semibold text-orange-600">2-3 days</span>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
            <p className="text-sm font-medium text-orange-900 mb-2">Premium Partner Benefit</p>
            <p className="text-xs text-orange-700">
              As a high-volume partner, you get 3 free priority requests per month. Additional requests: ৳2,000 each.
            </p>
          </div>
        </div>
      </div>

      {/* Priority History */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Priority Processing History</h2>
          <span className="text-sm text-gray-500">{priorityHistory.length} completed</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Processed In</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time Saved</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {priorityHistory.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">{record.id}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{record.student}</td>
                  <td className="px-4 py-4 text-sm font-semibold text-orange-600">{record.processedIn}</td>
                  <td className="px-4 py-4 text-sm font-semibold text-green-600">{record.saved}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{record.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
