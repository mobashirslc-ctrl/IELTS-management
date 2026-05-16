import { Link } from "react-router";
import {
  GraduationCap,
  Globe,
  BookOpen,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Mail,
  Lock,
  User,
  Phone,
  Building2,
} from "lucide-react";
import { useState } from "react";

export default function LandingPage() {
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to dashboard after login
    window.location.href = "/dashboard";
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to dashboard after registration
    window.location.href = "/dashboard";
  };

  const features = [
    {
      icon: <BookOpen size={32} />,
      title: "IELTS Preparation",
      description: "Complete mock tests and study materials",
    },
    {
      icon: <Award size={32} />,
      title: "Expert Guidance",
      description: "24/7 support from certified counselors",
    },
    {
      icon: <Globe size={32} />,
      title: "Study Abroad",
      description: "Support for Canada, UK, USA, Australia",
    },
    {
      icon: <Users size={32} />,
      title: "B2B Portal",
      description: "Special features for partner agencies",
    },
  ];

  const ieltsPartners = [
    { name: "British Council", color: "from-red-500 to-red-600" },
    { name: "IDP Education", color: "from-blue-500 to-blue-600" },
    { name: "Cambridge", color: "from-purple-500 to-purple-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">IELTS Partner Portal</h1>
                <p className="text-xs text-indigo-600 font-medium">B2B Education Consultancy Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowLogin(true)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  showLogin
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setShowLogin(false)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  !showLogin
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div>
            {/* IELTS Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full mb-8 shadow-xl">
              <Award size={24} />
              <span className="font-bold text-lg">Official IELTS Partner Portal</span>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Gateway to
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Global Education
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Complete B2B platform for IELTS test booking, student management, and study abroad consulting. Partner with the best.
            </p>

            {/* IELTS Partners */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                Official Partners
              </p>
              <div className="flex items-center gap-4">
                {ieltsPartners.map((partner, index) => (
                  <div
                    key={index}
                    className={`px-6 py-3 bg-gradient-to-r ${partner.color} text-white rounded-xl font-bold shadow-lg hover:scale-105 transition-transform`}
                  >
                    {partner.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-indigo-600 mb-1">500+</p>
                <p className="text-sm text-gray-600">Partner Agencies</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-indigo-600 mb-1">10K+</p>
                <p className="text-sm text-gray-600">Students Helped</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-indigo-600 mb-1">94%</p>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                  <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Login/Register Form */}
          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <BookOpen size={40} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {showLogin ? "Welcome Back!" : "Create Account"}
                </h2>
                <p className="text-gray-600">
                  {showLogin
                    ? "Sign in to access your IELTS partner dashboard"
                    : "Register as an IELTS education consultant"}
                </p>
              </div>

              {/* Login Form */}
              {showLogin ? (
                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        placeholder="partner@example.com"
                        className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                      <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <button type="button" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                      Forgot Password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl hover:shadow-2xl transition-all font-semibold text-lg flex items-center justify-center gap-2"
                  >
                    Sign In to Dashboard
                    <ArrowRight size={20} />
                  </button>
                </form>
              ) : (
                // Register Form
                <form onSubmit={handleRegister} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Your name"
                          className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          placeholder="+880 1XXX-XXXXXX"
                          className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Agency Name
                    </label>
                    <div className="relative">
                      <Building2 size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Your consultancy name"
                        className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        placeholder="partner@example.com"
                        className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="password"
                        placeholder="Create a strong password"
                        className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <label className="flex items-start gap-3">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-1" required />
                    <span className="text-sm text-gray-600">
                      I agree to the Terms & Conditions and Privacy Policy for IELTS partners
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl hover:shadow-2xl transition-all font-semibold text-lg flex items-center justify-center gap-2"
                  >
                    Create Partner Account
                    <ArrowRight size={20} />
                  </button>
                </form>
              )}

              {/* Toggle Text */}
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  {showLogin ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={() => setShowLogin(!showLogin)}
                    className="text-indigo-600 hover:text-indigo-700 font-semibold"
                  >
                    {showLogin ? "Register Now" : "Sign In"}
                  </button>
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle size={20} className="text-green-500" />
                <span className="text-sm font-medium">Secure Login</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle size={20} className="text-green-500" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle size={20} className="text-green-500" />
                <span className="text-sm font-medium">Verified Partners</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold">IELTS Partner Portal</h3>
                <p className="text-sm text-gray-400">Official B2B Platform</p>
              </div>
            </div>
            <p className="text-gray-400">© 2026 All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
