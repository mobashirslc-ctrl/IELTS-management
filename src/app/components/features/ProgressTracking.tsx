import { Eye, Share2, CheckCircle, Clock, AlertCircle, FileText } from "lucide-react";
import { useState } from "react";

export default function ProgressTracking() {
  const [selectedStudent, setSelectedStudent] = useState("STD-2024-156");

  const students = [
    { id: "STD-2024-156", name: "Rahul Ahmed", progress: 75 },
    { id: "STD-2024-155", name: "Fatima Khan", progress: 60 },
    { id: "STD-2024-154", name: "Sakib Hassan", progress: 90 },
  ];

  const milestones = [
    {
      stage: "Initial Consultation",
      status: "completed",
      date: "2026-04-15",
      details: "Completed counseling session and country selection",
    },
    {
      stage: "Document Collection",
      status: "completed",
      date: "2026-04-25",
      details: "All academic and financial documents collected",
    },
    {
      stage: "University Application",
      status: "completed",
      date: "2026-05-02",
      details: "Applied to University of Toronto - Computer Science",
    },
    {
      stage: "Admission Letter",
      status: "in-progress",
      date: "Expected: 2026-05-20",
      details: "Waiting for university decision",
    },
    {
      stage: "Visa Application",
      status: "pending",
      date: "Not Started",
      details: "Will begin after receiving admission letter",
    },
    {
      stage: "Final Preparation",
      status: "pending",
      date: "Not Started",
      details: "Pre-departure briefing and arrangements",
    },
  ];

  const documents = [
    { name: "Passport Copy", status: "verified", uploadedDate: "2026-04-20" },
    { name: "Academic Transcripts", status: "verified", uploadedDate: "2026-04-22" },
    { name: "IELTS Certificate", status: "verified", uploadedDate: "2026-04-23" },
    { name: "Bank Statement", status: "pending", uploadedDate: "2026-05-12" },
  ];

  const currentStudent = students.find((s) => s.id === selectedStudent);
  const progressPercentage = currentStudent?.progress || 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Progress Tracking for Parents</h1>
        <p className="text-gray-500 mt-2">Special link/app for parents to view student progress</p>
      </div>

      {/* Student Selector */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex-1 max-w-md">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Student</label>
            <select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name} - {student.progress}% Complete
                </option>
              ))}
            </select>
          </div>

          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium">
            <Share2 size={20} />
            Share with Parents
          </button>
        </div>
      </div>

      {/* Overall Progress */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-xl text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{currentStudent?.name}'s Journey</h2>
            <p className="text-green-100">Track every step towards studying abroad</p>
          </div>
          <Eye size={48} />
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">Overall Progress</span>
            <span className="text-2xl font-bold">{progressPercentage}%</span>
          </div>
          <div className="w-full bg-green-400 rounded-full h-4">
            <div
              className="bg-white rounded-full h-4 transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        <p className="text-sm text-green-100">
          {progressPercentage < 100 ? `${100 - progressPercentage}% remaining to completion` : "Application journey completed!"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Timeline */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Application Timeline</h2>

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      milestone.status === "completed"
                        ? "bg-green-500"
                        : milestone.status === "in-progress"
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    }`}
                  >
                    {milestone.status === "completed" ? (
                      <CheckCircle size={24} className="text-white" />
                    ) : milestone.status === "in-progress" ? (
                      <Clock size={24} className="text-white" />
                    ) : (
                      <AlertCircle size={24} className="text-white" />
                    )}
                  </div>
                  {index < milestones.length - 1 && (
                    <div
                      className={`w-0.5 h-16 ${
                        milestone.status === "completed" ? "bg-green-500" : "bg-gray-300"
                      }`}
                    ></div>
                  )}
                </div>

                <div className="flex-1 pb-8">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{milestone.stage}</h3>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${
                        milestone.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : milestone.status === "in-progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {milestone.status === "completed"
                        ? "Completed"
                        : milestone.status === "in-progress"
                        ? "In Progress"
                        : "Pending"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{milestone.details}</p>
                  <p className="text-xs text-gray-500">{milestone.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Documents Status */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Documents Status</h3>
            <div className="space-y-3">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                      <p className="text-xs text-gray-500">{doc.uploadedDate}</p>
                    </div>
                  </div>
                  {doc.status === "verified" ? (
                    <CheckCircle size={18} className="text-green-500" />
                  ) : (
                    <Clock size={18} className="text-orange-500" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Stages Completed</span>
                <span className="font-semibold text-green-600">3 / 6</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Documents Verified</span>
                <span className="font-semibold text-blue-600">3 / 4</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Days in Process</span>
                <span className="font-semibold text-gray-900">29</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Est. Completion</span>
                <span className="font-semibold text-purple-600">June 15</span>
              </div>
            </div>
          </div>

          {/* Parent Access */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="text-sm font-medium text-blue-900 mb-3">Parent Access Link</h3>
            <div className="bg-white p-3 rounded border border-blue-200 mb-3">
              <p className="text-xs text-gray-600 break-all font-mono">
                https://portal.example.com/track/STD-2024-156-abc123
              </p>
            </div>
            <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
              Copy Link
            </button>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Contact your assigned counselor for any questions
            </p>
            <button className="w-full px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
              Contact Counselor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
