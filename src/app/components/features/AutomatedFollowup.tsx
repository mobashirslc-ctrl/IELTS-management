import { MessageCircle, Send, Clock, CheckCircle, Plus, Eye, Edit } from "lucide-react";
import { useState } from "react";

export default function AutomatedFollowup() {
  const [messageTemplate, setMessageTemplate] = useState("");

  const templates = [
    {
      id: 1,
      name: "Initial Inquiry Response",
      message: "Hello {name}, Thank you for your interest in studying abroad. Our counselor will contact you within 24 hours to discuss your options.",
      active: true,
      sent: 145,
    },
    {
      id: 2,
      name: "Document Reminder",
      message: "Hi {name}, This is a reminder to submit the pending documents for your {country} application. Please contact us if you need any assistance.",
      active: true,
      sent: 98,
    },
    {
      id: 3,
      name: "Application Status Update",
      message: "Dear {name}, Your application status has been updated. Current status: {status}. Visit our center for more details.",
      active: true,
      sent: 67,
    },
  ];

  const scheduledMessages = [
    {
      id: "MSG-345",
      student: "Anika Rahman",
      template: "Document Reminder",
      scheduledFor: "2026-05-15 10:00 AM",
      status: "Scheduled",
    },
    {
      id: "MSG-344",
      student: "Towhid Islam",
      template: "Application Status Update",
      scheduledFor: "2026-05-15 02:00 PM",
      status: "Scheduled",
    },
    {
      id: "MSG-343",
      student: "Sadia Akter",
      template: "Initial Inquiry Response",
      scheduledFor: "2026-05-14 05:00 PM",
      status: "Sent",
    },
  ];

  const stats = [
    { label: "Total Sent", value: "1,247", icon: <Send />, color: "blue" },
    { label: "Scheduled", value: "45", icon: <Clock />, color: "orange" },
    { label: "Delivery Rate", value: "98.5%", icon: <CheckCircle />, color: "green" },
    { label: "Response Rate", value: "42%", icon: <MessageCircle />, color: "purple" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Automated Follow-up SMS</h1>
          <p className="text-gray-500 mt-2">Send automated update messages to students under your agency name</p>
        </div>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium">
          <Plus size={20} />
          Create New Template
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`p-3 rounded-lg ${
                  stat.color === "blue"
                    ? "bg-blue-50 text-blue-600"
                    : stat.color === "orange"
                    ? "bg-orange-50 text-orange-600"
                    : stat.color === "green"
                    ? "bg-green-50 text-green-600"
                    : "bg-purple-50 text-purple-600"
                }`}
              >
                {stat.icon}
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Message Templates */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">SMS Templates</h2>

            <div className="space-y-4">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{template.name}</h3>
                        {template.active && (
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">
                            Active
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{template.message}</p>
                      <p className="text-xs text-gray-500">Sent to {template.sent} students</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Eye size={16} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Edit size={16} className="text-gray-600" />
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                      Send Now
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                      Schedule
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Create New Template */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Create New Message</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Template Name</label>
                <input
                  type="text"
                  placeholder="e.g., Payment Reminder"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message Content</label>
                <textarea
                  value={messageTemplate}
                  onChange={(e) => setMessageTemplate(e.target.value)}
                  rows={5}
                  placeholder="Write your message here. Use {name}, {country}, {status} as placeholders..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-gray-500">Available variables: {"{name}"}, {"{country}"}, {"{status}"}</p>
                  <p className="text-xs text-gray-500">{messageTemplate.length}/160 characters</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
              >
                <Plus size={20} />
                Save Template
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
            <MessageCircle size={32} className="mb-4" />
            <h3 className="font-semibold mb-2">Automated SMS</h3>
            <p className="text-sm text-blue-100 mb-4">
              Messages are sent automatically under your agency name with personalized content
            </p>
            <div className="bg-white/20 rounded-lg p-3 text-sm">
              <p className="mb-1">From: Your Agency Name</p>
              <p className="text-xs text-blue-100">Sender ID configured</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">SMS Features</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Personalized messages
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Schedule in advance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Bulk sending
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                Delivery tracking
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
            <p className="text-sm font-medium text-orange-900 mb-2">SMS Credit Balance</p>
            <p className="text-2xl font-bold text-orange-900 mb-2">2,450</p>
            <button className="w-full text-sm text-orange-700 font-medium hover:text-orange-800">
              Purchase More Credits
            </button>
          </div>
        </div>
      </div>

      {/* Scheduled Messages */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Scheduled Messages</h2>
          <span className="text-sm text-gray-500">{scheduledMessages.length} upcoming</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Message ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Template</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Scheduled For</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {scheduledMessages.map((msg) => (
                <tr key={msg.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">{msg.id}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{msg.student}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{msg.template}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{msg.scheduledFor}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                        msg.status === "Sent" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {msg.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg">
                        <Eye size={16} className="text-gray-600" />
                      </button>
                      {msg.status === "Scheduled" && (
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <Edit size={16} className="text-gray-600" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
