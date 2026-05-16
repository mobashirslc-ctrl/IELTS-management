import { Video, Calendar, Clock, CheckCircle, BookOpen, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function InterviewPrep() {
  const [selectedCountry, setSelectedCountry] = useState("USA");

  const upcomingSessions = [
    {
      id: "SES-145",
      student: "Anika Rahman",
      counselor: "Mehedi Hasan",
      country: "Canada",
      date: "2026-05-16",
      time: "10:00 AM",
      type: "Mock Interview",
    },
    {
      id: "SES-144",
      student: "Towhid Islam",
      counselor: "Nusrat Jahan",
      country: "Australia",
      date: "2026-05-17",
      time: "02:00 PM",
      type: "Q&A Session",
    },
  ];

  const commonQuestions = {
    USA: [
      "Why do you want to study in the United States?",
      "Why did you choose this specific university?",
      "How will you fund your education?",
      "What are your career goals after graduation?",
      "Why did you choose this major?",
      "Do you have any relatives in the USA?",
      "How do you plan to return to your home country?",
    ],
    Canada: [
      "Why Canada over other countries?",
      "What is your study plan?",
      "How will you support yourself financially?",
      "What ties do you have to your home country?",
      "Have you been to Canada before?",
    ],
    UK: [
      "Why did you choose the UK for your studies?",
      "What do you know about the university?",
      "How will you finance your studies?",
      "What are your future plans?",
    ],
  };

  const tips = [
    { tip: "Dress professionally and be punctual", icon: <CheckCircle className="text-green-500" /> },
    { tip: "Bring all required documents organized", icon: <CheckCircle className="text-green-500" /> },
    { tip: "Answer confidently and honestly", icon: <CheckCircle className="text-green-500" /> },
    { tip: "Maintain eye contact and good posture", icon: <CheckCircle className="text-green-500" /> },
    { tip: "Don't memorize answers, speak naturally", icon: <AlertCircle className="text-orange-500" /> },
    { tip: "Avoid vague or contradictory statements", icon: <AlertCircle className="text-orange-500" /> },
  ];

  const stats = [
    { label: "Mock Sessions Completed", value: "156", color: "blue" },
    { label: "Success Rate", value: "94%", color: "green" },
    { label: "Avg Session Duration", value: "45 min", color: "purple" },
    { label: "Students Helped", value: "248", color: "orange" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Virtual Interview Prep</h1>
        <p className="text-gray-500 mt-2">Online mock interviews before embassy appointments</p>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Video size={40} />
              <h2 className="text-3xl font-bold">Master Your Visa Interview</h2>
            </div>
            <p className="text-blue-100 text-lg">
              Practice with expert counselors before your embassy appointment
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Common Questions */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Common Interview Questions</h2>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>USA</option>
                <option>Canada</option>
                <option>UK</option>
                <option>Australia</option>
              </select>
            </div>

            <div className="space-y-3">
              {commonQuestions[selectedCountry as keyof typeof commonQuestions]?.map((question, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg mt-1">
                      <BookOpen size={16} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{question}</p>
                      <button className="text-sm text-blue-600 hover:text-blue-700 mt-2">
                        View Sample Answer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Upcoming Mock Sessions</h2>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                Schedule New
              </button>
            </div>

            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div
                  key={session.id}
                  className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-semibold text-gray-900">{session.student}</span>
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                          {session.type}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{session.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} />
                          <span>{session.time}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Counselor:</span> {session.counselor}
                        </div>
                        <div>
                          <span className="text-gray-500">Country:</span> {session.country}
                        </div>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                      Join Meeting
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Video size={18} />
                Start Mock Interview
              </button>
              <button className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                <Calendar size={18} />
                Schedule Session
              </button>
            </div>
          </div>

          {/* Interview Tips */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Interview Tips</h3>
            <div className="space-y-3">
              {tips.map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  {item.icon}
                  <span className="text-gray-700">{item.tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="text-sm font-medium text-blue-900 mb-3">Additional Resources</h3>
            <div className="space-y-2">
              <button className="w-full text-left text-sm text-blue-700 hover:text-blue-800 font-medium">
                • Download Question Bank
              </button>
              <button className="w-full text-left text-sm text-blue-700 hover:text-blue-800 font-medium">
                • Watch Sample Videos
              </button>
              <button className="w-full text-left text-sm text-blue-700 hover:text-blue-800 font-medium">
                • Read Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
