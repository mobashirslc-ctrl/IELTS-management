import { ClipboardCheck, TrendingUp, Award, Target, BarChart3 } from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function MockTestAnalytics() {
  const skillsData = [
    { skill: "Reading", score: 7.5, fullMark: 9 },
    { skill: "Writing", score: 6.5, fullMark: 9 },
    { skill: "Listening", score: 8.0, fullMark: 9 },
    { skill: "Speaking", score: 7.0, fullMark: 9 },
  ];

  const progressData = [
    { test: "Test 1", reading: 6.0, writing: 5.5, listening: 6.5, speaking: 6.0 },
    { test: "Test 2", reading: 6.5, writing: 6.0, listening: 7.0, speaking: 6.5 },
    { test: "Test 3", reading: 7.0, writing: 6.5, listening: 7.5, speaking: 7.0 },
    { test: "Test 4", reading: 7.5, writing: 6.5, listening: 8.0, speaking: 7.0 },
  ];

  const countryRequirements = [
    { country: "Canada", minIelts: 6.5, yourScore: 7.25, status: "Qualified" },
    { country: "Australia", minIelts: 6.5, yourScore: 7.25, status: "Qualified" },
    { country: "UK", minIelts: 6.0, yourScore: 7.25, status: "Qualified" },
    { country: "USA", minIelts: 6.5, yourScore: 7.25, status: "Qualified" },
    { country: "Germany", minIelts: 6.5, yourScore: 7.25, status: "Qualified" },
  ];

  const overallScore = 7.25;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Mock Test Analytics</h1>
        <p className="text-gray-500 mt-2">Analyze mock test results and country-specific score requirements</p>
      </div>

      {/* Overall Score Card */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-green-100 mb-2">Overall IELTS Band Score</p>
            <h2 className="text-6xl font-bold mb-4">{overallScore}</h2>
            <p className="text-green-100">Based on your latest mock test results</p>
          </div>
          <div className="p-6 bg-white/20 rounded-full">
            <Award size={64} />
          </div>
        </div>
      </div>

      {/* Score Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {skillsData.map((skill) => (
          <div key={skill.skill} className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-700">{skill.skill}</h3>
              <ClipboardCheck size={20} className="text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">{skill.score}</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 rounded-full h-2"
                style={{ width: `${(skill.score / skill.fullMark) * 100}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Out of {skill.fullMark}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills Radar Chart */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Skills Analysis</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={skillsData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="skill" />
              <PolarRadiusAxis angle={90} domain={[0, 9]} />
              <Radar name="Your Score" dataKey="score" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Progress Chart */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Progress Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="test" />
              <YAxis domain={[0, 9]} />
              <Tooltip />
              <Bar dataKey="reading" fill="#3b82f6" />
              <Bar dataKey="writing" fill="#10b981" />
              <Bar dataKey="listening" fill="#f59e0b" />
              <Bar dataKey="speaking" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Country Requirements */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Country-Specific Requirements</h2>
          <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full">
            <Target size={16} className="text-green-600" />
            <span className="text-sm font-medium text-green-700">All Requirements Met</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Country</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Min. IELTS Required</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Your Score</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Difference</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {countryRequirements.map((req) => {
                const diff = req.yourScore - req.minIelts;
                return (
                  <tr key={req.country} className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">{req.country}</td>
                    <td className="px-4 py-4 text-sm text-gray-700">{req.minIelts}</td>
                    <td className="px-4 py-4 text-sm font-semibold text-blue-600">{req.yourScore}</td>
                    <td className="px-4 py-4 text-sm font-semibold text-green-600">+{diff.toFixed(2)}</td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">
                        <Target size={12} />
                        {req.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="text-green-500" />
            Strengths
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></div>
              Excellent listening skills (8.0) - above most country requirements
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></div>
              Strong reading comprehension (7.5)
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></div>
              Consistent improvement across all mock tests
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <BarChart3 className="text-orange-500" />
            Areas to Improve
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
              Focus on writing skills - currently at 6.5 (target: 7.0+)
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
              Practice speaking for better fluency and confidence
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-700">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
              Take 2-3 more mock tests before the actual exam
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
