import { Headphones, MessageCircle, Phone, Mail, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function SupportDesk() {
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketMessage, setTicketMessage] = useState("");

  const supportStats = [
    { label: "Avg Response Time", value: "< 15 min", icon: <Clock />, color: "blue" },
    { label: "Support Available", value: "24/7", icon: <Headphones />, color: "green" },
    { label: "Active Tickets", value: "2", icon: <AlertCircle />, color: "orange" },
    { label: "Resolved This Month", value: "18", icon: <CheckCircle />, color: "purple" },
  ];

  const activeTickets = [
    {
      id: "TKT-2456",
      subject: "Document verification delay",
      status: "In Progress",
      priority: "High",
      created: "2026-05-14 10:30 AM",
      lastUpdate: "30 mins ago",
    },
    {
      id: "TKT-2442",
      subject: "Commission payment query",
      status: "Awaiting Response",
      priority: "Medium",
      created: "2026-05-13 02:15 PM",
      lastUpdate: "2 hours ago",
    },
  ];

  const supportChannels = [
    { name: "Live Chat", description: "Instant messaging with support", icon: <MessageCircle />, available: true },
    { name: "Phone Support", description: "+880 1XXX-XXXXXX", icon: <Phone />, available: true },
    { name: "Email Support", description: "support@example.com", icon: <Mail />, available: true },
    { name: "WhatsApp", description: "Quick messaging support", icon: <MessageCircle />, available: true },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Support ticket created: ${ticketSubject}`);
    setTicketSubject("");
    setTicketMessage("");
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-semibold text-gray-900">Partner Support Desk 24/7</h1>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full flex items-center gap-1 animate-pulse">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Live
          </span>
        </div>
        <p className="text-gray-500 mt-2">Get immediate technical support anytime you need it</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {supportStats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`p-3 rounded-lg ${
                  stat.color === "blue"
                    ? "bg-blue-50 text-blue-600"
                    : stat.color === "green"
                    ? "bg-green-50 text-green-600"
                    : stat.color === "orange"
                    ? "bg-orange-50 text-orange-600"
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Create Ticket Form */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Create Support Ticket</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ticket Category *</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Technical Issue</option>
                <option>Payment & Commission</option>
                <option>Document Processing</option>
                <option>Account Management</option>
                <option>Feature Request</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority Level *</label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className="px-4 py-3 border-2 border-green-300 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <p className="font-medium text-green-700">Low</p>
                  <p className="text-xs text-green-600 mt-1">24-48 hours</p>
                </button>
                <button
                  type="button"
                  className="px-4 py-3 border-2 border-orange-300 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                >
                  <p className="font-medium text-orange-700">Medium</p>
                  <p className="text-xs text-orange-600 mt-1">4-8 hours</p>
                </button>
                <button
                  type="button"
                  className="px-4 py-3 border-2 border-red-300 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <p className="font-medium text-red-700">High</p>
                  <p className="text-xs text-red-600 mt-1">&lt; 1 hour</p>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
              <input
                type="text"
                value={ticketSubject}
                onChange={(e) => setTicketSubject(e.target.value)}
                placeholder="Brief description of your issue"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
              <textarea
                value={ticketMessage}
                onChange={(e) => setTicketMessage(e.target.value)}
                rows={6}
                placeholder="Provide detailed information about your issue..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Attachments (Optional)</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <p className="text-sm text-gray-500">Click to upload screenshots or documents</p>
                <p className="text-xs text-gray-400 mt-1">Max 5 files, 10MB each</p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <Headphones size={20} />
              Submit Ticket
            </button>
          </form>
        </div>

        {/* Support Channels & Quick Actions */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/20 rounded-lg">
                <Headphones size={24} />
              </div>
              <div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p className="text-xs text-blue-100">Always here to help</p>
              </div>
            </div>
            <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              Start Live Chat Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Contact Channels</h3>
            <div className="space-y-3">
              {supportChannels.map((channel, index) => (
                <div
                  key={index}
                  className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-blue-600">{channel.icon}</div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{channel.name}</p>
                      <p className="text-xs text-gray-500">{channel.description}</p>
                    </div>
                    {channel.available && (
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <p className="text-sm font-medium text-green-900 mb-2">Quick Tips</p>
            <ul className="space-y-1 text-xs text-green-700">
              <li>• Include your partner ID in tickets</li>
              <li>• Add screenshots for faster resolution</li>
              <li>• Check FAQs for instant answers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Active Tickets */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Your Active Tickets</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
        </div>

        <div className="space-y-4">
          {activeTickets.map((ticket) => (
            <div key={ticket.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-semibold text-gray-900">{ticket.id}</span>
                    <span
                      className={`px-2 py-0.5 text-xs font-medium rounded ${
                        ticket.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {ticket.status}
                    </span>
                    <span
                      className={`px-2 py-0.5 text-xs font-medium rounded ${
                        ticket.priority === "High"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {ticket.priority}
                    </span>
                  </div>
                  <p className="font-medium text-gray-900 mb-2">{ticket.subject}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>Created: {ticket.created}</span>
                    <span>•</span>
                    <span>Last update: {ticket.lastUpdate}</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
