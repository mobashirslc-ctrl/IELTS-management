import { UserPlus, Search, Filter, Phone, Mail, Eye, Edit, Trash2, Plus } from "lucide-react";
import { useState } from "react";

export default function LeadManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const statuses = ["All", "New", "Contacted", "Qualified", "Converted", "Lost"];

  const leads = [
    {
      id: "LD-456",
      name: "Anika Rahman",
      phone: "+880 1712-345678",
      email: "anika@example.com",
      country: "Canada",
      status: "Qualified",
      source: "Facebook",
      addedDate: "2026-05-14",
      lastContact: "Today",
      score: 85,
    },
    {
      id: "LD-455",
      name: "Towhid Islam",
      phone: "+880 1723-456789",
      email: "towhid@example.com",
      country: "Australia",
      status: "Contacted",
      source: "Website",
      addedDate: "2026-05-13",
      lastContact: "Yesterday",
      score: 72,
    },
    {
      id: "LD-454",
      name: "Sadia Akter",
      phone: "+880 1734-567890",
      email: "sadia@example.com",
      country: "UK",
      status: "New",
      source: "Referral",
      addedDate: "2026-05-13",
      lastContact: "Not yet",
      score: 68,
    },
    {
      id: "LD-453",
      name: "Rakibul Hasan",
      phone: "+880 1745-678901",
      email: "rakib@example.com",
      country: "USA",
      status: "Qualified",
      source: "Instagram",
      addedDate: "2026-05-12",
      lastContact: "2 days ago",
      score: 90,
    },
  ];

  const stats = [
    { label: "Total Leads", value: "248", change: "+32 this week", color: "blue" },
    { label: "Qualified Leads", value: "89", change: "35.9% rate", color: "green" },
    { label: "Converted", value: "45", change: "18.1% rate", color: "purple" },
    { label: "Follow-ups Pending", value: "23", change: "Due today", color: "orange" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-700";
      case "Contacted":
        return "bg-yellow-100 text-yellow-700";
      case "Qualified":
        return "bg-green-100 text-green-700";
      case "Converted":
        return "bg-purple-100 text-purple-700";
      case "Lost":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Lead Management CRM</h1>
          <p className="text-gray-500 mt-2">Track student inquiries and manage follow-ups</p>
        </div>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium">
          <Plus size={20} />
          Add New Lead
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
            <p className="text-xs text-gray-500">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search leads by name, email, or phone..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex gap-3">
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Countries</option>
              <option>Canada</option>
              <option>USA</option>
              <option>UK</option>
              <option>Australia</option>
            </select>

            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Sources</option>
              <option>Facebook</option>
              <option>Instagram</option>
              <option>Website</option>
              <option>Referral</option>
            </select>

            <button className="px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <Filter size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Status Filters */}
        <div className="flex gap-2 mt-4">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedStatus === status
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lead ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Country</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Source</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Score</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Contact</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">{lead.id}</td>
                  <td className="px-4 py-4">
                    <p className="font-medium text-gray-900">{lead.name}</p>
                  </td>
                  <td className="px-4 py-4">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-700 flex items-center gap-1">
                        <Phone size={12} />
                        {lead.phone}
                      </p>
                      <p className="text-sm text-gray-700 flex items-center gap-1">
                        <Mail size={12} />
                        {lead.email}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">{lead.country}</td>
                  <td className="px-4 py-4">
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">{lead.source}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 w-16">
                        <div
                          className={`rounded-full h-2 ${
                            lead.score >= 80 ? "bg-green-500" : lead.score >= 60 ? "bg-yellow-500" : "bg-red-500"
                          }`}
                          style={{ width: `${lead.score}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{lead.score}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">{lead.lastContact}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="View">
                        <Eye size={16} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Edit">
                        <Edit size={16} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg" title="Delete">
                        <Trash2 size={16} className="text-red-600" />
                      </button>
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
