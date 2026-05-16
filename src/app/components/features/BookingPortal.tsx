import { Calendar, Clock, MapPin, CheckCircle, ExternalLink, Info } from "lucide-react";
import { useState } from "react";

export default function BookingPortal() {
  const [selectedTest, setSelectedTest] = useState("IELTS");
  const [selectedCenter, setSelectedCenter] = useState("");

  const testCenters = [
    { name: "British Council Dhaka", location: "Gulshan, Dhaka", available: true },
    { name: "IDP Education Dhaka", location: "Banani, Dhaka", available: true },
    { name: "British Council Chittagong", location: "Agrabad, Chittagong", available: true },
  ];

  const availableSlots = [
    { date: "2026-05-25", time: "09:00 AM", seats: 15, type: "Academic" },
    { date: "2026-05-25", time: "02:00 PM", seats: 8, type: "Academic" },
    { date: "2026-06-01", time: "09:00 AM", seats: 20, type: "Academic" },
    { date: "2026-06-01", time: "02:00 PM", seats: 12, type: "General" },
    { date: "2026-06-08", time: "09:00 AM", seats: 18, type: "Academic" },
  ];

  const recentBookings = [
    {
      id: "BK-456",
      student: "Anika Rahman",
      test: "IELTS Academic",
      center: "British Council Dhaka",
      date: "2026-05-25",
      time: "09:00 AM",
      status: "Confirmed",
    },
    {
      id: "BK-455",
      student: "Towhid Islam",
      test: "IELTS Academic",
      center: "IDP Education Dhaka",
      date: "2026-06-01",
      time: "02:00 PM",
      status: "Confirmed",
    },
  ];

  const stats = [
    { label: "Total Bookings", value: "89", color: "blue" },
    { label: "This Month", value: "12", color: "green" },
    { label: "Success Rate", value: "96%", color: "purple" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Booking Portal Integration</h1>
        <p className="text-gray-500 mt-2">Direct booking for British Council and IDP exam dates</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Test Selection */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Test Type</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["IELTS", "PTE", "TOEFL", "Duolingo"].map((test) => (
            <button
              key={test}
              onClick={() => setSelectedTest(test)}
              className={`p-4 border-2 rounded-lg transition-all ${
                selectedTest === test
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <p className="font-semibold text-gray-900">{test}</p>
              <p className="text-xs text-gray-500 mt-1">English Proficiency</p>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Booking Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Book Test Date</h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Student Name *</label>
                <input
                  type="text"
                  placeholder="Enter student name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Test Center *</label>
                <select
                  value={selectedCenter}
                  onChange={(e) => setSelectedCenter(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a test center...</option>
                  {testCenters.map((center, index) => (
                    <option key={index} value={center.name}>
                      {center.name} - {center.location}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Available Test Dates & Times
                </label>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {availableSlots.map((slot, index) => (
                    <div
                      key={index}
                      className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <div className="flex items-center gap-2 text-gray-900">
                              <Calendar size={16} />
                              <span className="font-medium">{slot.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-900">
                              <Clock size={16} />
                              <span>{slot.time}</span>
                            </div>
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded">
                              {slot.type}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {slot.seats} seats available
                          </p>
                        </div>
                        <button
                          type="button"
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start gap-3">
                <Info size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-blue-900 mb-1">Important Information</p>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• Test fee must be paid within 24 hours of booking</li>
                    <li>• Bring valid ID on test day</li>
                    <li>• Arrive 30 minutes before test time</li>
                  </ul>
                </div>
              </div>
            </form>
          </div>

          {/* External Links */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Direct Booking Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="#"
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all flex items-center justify-between"
              >
                <div>
                  <p className="font-medium text-gray-900">British Council</p>
                  <p className="text-xs text-gray-500 mt-1">Official IELTS Portal</p>
                </div>
                <ExternalLink size={20} className="text-blue-600" />
              </a>

              <a
                href="#"
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all flex items-center justify-between"
              >
                <div>
                  <p className="font-medium text-gray-900">IDP Education</p>
                  <p className="text-xs text-gray-500 mt-1">IELTS Booking</p>
                </div>
                <ExternalLink size={20} className="text-blue-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Test Centers */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Test Centers</h3>
            <div className="space-y-3">
              {testCenters.map((center, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900 text-sm mb-1">{center.name}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <MapPin size={12} />
                    <span>{center.location}</span>
                  </div>
                  {center.available && (
                    <span className="inline-block mt-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">
                      Available
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white">
            <Calendar size={32} className="mb-4" />
            <h3 className="font-semibold mb-2">Quick Booking</h3>
            <p className="text-sm text-green-100 mb-4">
              Book your test date in minutes without leaving the portal
            </p>
            <div className="bg-white/20 rounded-lg p-3 text-sm">
              <p>Next Available: May 25, 2026</p>
            </div>
          </div>

          {/* Help */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="text-sm font-medium text-blue-900 mb-2">Need Help?</h3>
            <p className="text-xs text-blue-700 mb-3">
              Contact our exam booking specialists for assistance
            </p>
            <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Bookings</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Booking ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Test</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Center</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">{booking.id}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{booking.student}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{booking.test}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{booking.center}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {booking.date} @ {booking.time}
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">
                      <CheckCircle size={12} />
                      {booking.status}
                    </span>
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
