import { Brain, TrendingUp, AlertCircle, CheckCircle, Sparkles } from "lucide-react";
import { useState } from "react";

export default function AdmissionProbability() {
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<any>(null);

  const [formData, setFormData] = useState({
    country: "Canada",
    degree: "Masters",
    gpa: "",
    ielts: "",
    workExperience: "",
    funding: "Self-funded",
  });

  const countries = ["Canada", "USA", "UK", "Australia", "Germany", "New Zealand"];
  const degrees = ["Bachelors", "Masters", "PhD"];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculating(true);

    setTimeout(() => {
      const mockResult = {
        admissionProbability: 78,
        visaProbability: 82,
        recommendedCountries: [
          { country: "Canada", probability: 78, reason: "Strong profile match" },
          { country: "Australia", probability: 85, reason: "High acceptance rate" },
          { country: "UK", probability: 72, reason: "Good academic fit" },
        ],
        strengths: [
          "Strong academic background (GPA 3.5+)",
          "Good IELTS score (7.0+)",
          "Relevant work experience",
        ],
        improvements: [
          "Consider improving IELTS score to 7.5+ for better scholarship chances",
          "Gather more recommendation letters",
        ],
      };

      setResult(mockResult);
      setCalculating(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-semibold text-gray-900">Admission Probability Meter</h1>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full flex items-center gap-1">
            <Sparkles size={14} />
            AI Powered
          </span>
        </div>
        <p className="text-gray-500 mt-2">AI-powered visa and admission probability assessment</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Form */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Student Profile Information</h2>

          <form onSubmit={handleCalculate} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Country *</label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {countries.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Degree Level *</label>
                <select
                  value={formData.degree}
                  onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {degrees.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">GPA / CGPA *</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.gpa}
                  onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                  placeholder="3.50"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">IELTS Score *</label>
                <input
                  type="number"
                  step="0.5"
                  value={formData.ielts}
                  onChange={(e) => setFormData({ ...formData, ielts: e.target.value })}
                  placeholder="7.0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Work Experience (Years)</label>
                <input
                  type="number"
                  value={formData.workExperience}
                  onChange={(e) => setFormData({ ...formData, workExperience: e.target.value })}
                  placeholder="0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Funding Type *</label>
                <select
                  value={formData.funding}
                  onChange={(e) => setFormData({ ...formData, funding: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option>Self-funded</option>
                  <option>Scholarship</option>
                  <option>Sponsor</option>
                  <option>Bank Loan</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={calculating}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all flex items-center justify-center gap-2 font-medium disabled:opacity-50"
            >
              {calculating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Analyzing with AI...
                </>
              ) : (
                <>
                  <Brain size={20} />
                  Calculate Probability
                </>
              )}
            </button>
          </form>
        </div>

        {/* Info Card */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
            <Brain size={32} className="mb-4" />
            <h3 className="font-semibold mb-2">AI Analysis</h3>
            <p className="text-sm text-purple-100">
              Our AI analyzes 50+ factors including academic performance, test scores, work experience, and country-specific requirements to predict your success rate.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">What We Analyze</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Academic credentials</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Language test scores</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Financial capability</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Country-specific criteria</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Probability Scores */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl border-2 border-green-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Admission Probability</h3>
                <CheckCircle size={24} className="text-green-500" />
              </div>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-5xl font-bold text-green-600">{result.admissionProbability}%</span>
                <span className="text-green-600 mb-2">High Chance</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-500 rounded-full h-3 transition-all duration-1000"
                  style={{ width: `${result.admissionProbability}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Visa Probability</h3>
                <TrendingUp size={24} className="text-blue-500" />
              </div>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-5xl font-bold text-blue-600">{result.visaProbability}%</span>
                <span className="text-blue-600 mb-2">Very High</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-500 rounded-full h-3 transition-all duration-1000"
                  style={{ width: `${result.visaProbability}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Recommended Countries */}
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Alternative Country Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {result.recommendedCountries.map((rec: any, index: number) => (
                <div key={index} className="p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all">
                  <h3 className="font-semibold text-gray-900 mb-2">{rec.country}</h3>
                  <p className="text-2xl font-bold text-purple-600 mb-2">{rec.probability}%</p>
                  <p className="text-sm text-gray-600">{rec.reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths & Improvements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="text-green-500" />
                Profile Strengths
              </h2>
              <ul className="space-y-3">
                {result.strengths.map((strength: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="text-orange-500" />
                Suggested Improvements
              </h2>
              <ul className="space-y-3">
                {result.improvements.map((improvement: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                    {improvement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
