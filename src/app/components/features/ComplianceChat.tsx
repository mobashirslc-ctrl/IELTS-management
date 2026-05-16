import { MessageSquare, Send, User, Bot, Shield, AlertCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ComplianceChat() {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      message: "Hello! I'm your compliance expert. How can I help you today?",
      time: "10:30 AM",
    },
    {
      type: "user",
      message: "What documents are required for UK student visa?",
      time: "10:32 AM",
    },
    {
      type: "bot",
      message: "For a UK student visa, you'll need:\n\n1. Valid passport\n2. CAS from university\n3. Financial proof (£1,334/month)\n4. IELTS for UKVI\n5. TB test certificate\n6. Academic qualifications\n\nWould you like detailed information about any of these?",
      time: "10:32 AM",
    },
  ]);

  const quickQuestions = [
    "Document requirements for Canada",
    "Financial proof guidelines",
    "Processing time updates",
    "Visa interview preparation",
  ];

  const expertTeam = [
    { name: "Dr. Rahman", expertise: "Canada & USA", available: true },
    { name: "Ms. Sultana", expertise: "UK & Europe", available: true },
    { name: "Mr. Ahmed", expertise: "Australia & NZ", available: false },
  ];

  const recentTopics = [
    { topic: "UK Visa Updates", responses: 45, lastActive: "2 hours ago" },
    { topic: "Canada Financial Proof", responses: 32, lastActive: "5 hours ago" },
    { topic: "Australia Processing Times", responses: 28, lastActive: "1 day ago" },
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setChatMessages([
      ...chatMessages,
      {
        type: "user",
        message: message,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          type: "bot",
          message: "Thank you for your question. Let me check the latest compliance guidelines for you...",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 1000);

    setMessage("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Live Compliance Chat</h1>
        <p className="text-gray-500 mt-2">Direct live chat with expert compliance team</p>
      </div>

      {/* Expert Team Banner */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Shield size={32} />
              <h2 className="text-2xl font-semibold">Expert Compliance Team</h2>
            </div>
            <p className="text-green-100">Get accurate guidance from certified immigration experts</p>
          </div>
          <div className="text-center bg-white/20 rounded-lg px-6 py-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-green-200 rounded-full animate-pulse"></div>
              <p className="text-sm font-medium">2 experts online</p>
            </div>
            <p className="text-xs text-green-100">Avg response: 2 mins</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-3 bg-white rounded-xl border border-gray-200 flex flex-col" style={{ height: "600px" }}>
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-full">
                <Shield size={20} className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Compliance Expert Chat</h3>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Online Now
                </p>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
              Request Human Expert
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex gap-3 max-w-[70%] ${msg.type === "user" ? "flex-row-reverse" : ""}`}>
                  <div
                    className={`p-2 rounded-full flex-shrink-0 ${
                      msg.type === "user" ? "bg-blue-100" : "bg-green-100"
                    }`}
                  >
                    {msg.type === "user" ? (
                      <User size={20} className="text-blue-600" />
                    ) : (
                      <Bot size={20} className="text-green-600" />
                    )}
                  </div>
                  <div>
                    <div
                      className={`p-4 rounded-lg ${
                        msg.type === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{msg.message}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 px-2">{msg.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          <div className="px-6 py-3 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-2">Quick Questions:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((q, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(q)}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-gray-200">
            <div className="flex gap-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your compliance question..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Send size={20} />
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Expert Team */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Expert Team</h3>
            <div className="space-y-3">
              {expertTeam.map((expert, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                      expert.available ? "bg-green-500" : "bg-gray-400"
                    }`}
                  >
                    {expert.name.split(" ")[1][0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{expert.name}</p>
                    <p className="text-xs text-gray-500 truncate">{expert.expertise}</p>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${expert.available ? "bg-green-500" : "bg-gray-400"}`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Stats */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Chat Statistics</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Avg Response Time</span>
                <span className="font-semibold text-green-600">2 mins</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Questions Answered</span>
                <span className="font-semibold text-gray-900">1,247</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Satisfaction Rate</span>
                <span className="font-semibold text-blue-600">98%</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-sm font-medium text-blue-900 mb-3">Chat Features</p>
            <ul className="space-y-2 text-xs text-blue-700">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} />
                Real-time responses
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} />
                Certified experts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} />
                Save chat history
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} />
                Document sharing
              </li>
            </ul>
          </div>

          {/* Recent Topics */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Topics</h3>
            <div className="space-y-3">
              {recentTopics.map((topic, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <p className="text-sm font-medium text-gray-900 mb-1">{topic.topic}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{topic.responses} responses</span>
                    <span>•</span>
                    <span>{topic.lastActive}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
