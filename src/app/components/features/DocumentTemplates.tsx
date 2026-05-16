import { FileText, Download, Eye, Sparkles, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function DocumentTemplates() {
  const [selectedTemplate, setSelectedTemplate] = useState<"sop" | "cv">("sop");
  const [generated, setGenerated] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    country: "Canada",
    university: "",
    program: "",
    background: "",
    motivation: "",
    goals: "",
  });

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setGenerated(true);
    setTimeout(() => {
      alert(`${selectedTemplate === "sop" ? "SOP" : "CV"} generated successfully!`);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-semibold text-gray-900">Ready-to-use SOP & CV Templates</h1>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full flex items-center gap-1">
            <Sparkles size={14} />
            AI Generated
          </span>
        </div>
        <p className="text-gray-500 mt-2">Auto-generate professional SOP and CV from your information</p>
      </div>

      {/* Template Selection */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Template Type</h2>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setSelectedTemplate("sop")}
            className={`p-6 border-2 rounded-xl transition-all ${
              selectedTemplate === "sop"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <FileText size={32} className={selectedTemplate === "sop" ? "text-blue-600" : "text-gray-400"} />
            <h3 className="font-semibold mt-4 mb-2">Statement of Purpose (SOP)</h3>
            <p className="text-sm text-gray-600">Professional SOP tailored to your target university</p>
          </button>

          <button
            onClick={() => setSelectedTemplate("cv")}
            className={`p-6 border-2 rounded-xl transition-all ${
              selectedTemplate === "cv"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <FileText size={32} className={selectedTemplate === "cv" ? "text-blue-600" : "text-gray-400"} />
            <h3 className="font-semibold mt-4 mb-2">Curriculum Vitae (CV)</h3>
            <p className="text-sm text-gray-600">ATS-friendly CV formatted for international applications</p>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Form */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            {selectedTemplate === "sop" ? "SOP" : "CV"} Information
          </h2>

          <form onSubmit={handleGenerate} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Country *</label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>Canada</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Australia</option>
                  <option>Germany</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">University/Institution *</label>
              <input
                type="text"
                value={formData.university}
                onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                placeholder="University of Toronto"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Program/Course *</label>
              <input
                type="text"
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                placeholder="Master of Computer Science"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {selectedTemplate === "sop" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Academic Background *
                  </label>
                  <textarea
                    value={formData.background}
                    onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                    rows={3}
                    placeholder="Briefly describe your educational background and achievements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Motivation & Interest *
                  </label>
                  <textarea
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    rows={3}
                    placeholder="Why are you interested in this program and university?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Career Goals *</label>
                  <textarea
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    rows={3}
                    placeholder="What are your career goals after completing this program?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={generated}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-2 font-medium disabled:opacity-50"
            >
              {generated ? (
                <>
                  <CheckCircle size={20} />
                  Generated Successfully
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  Generate {selectedTemplate === "sop" ? "SOP" : "CV"}
                </>
              )}
            </button>
          </form>
        </div>

        {/* Template Preview & Actions */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
            <FileText size={32} className="mb-4" />
            <h3 className="font-semibold mb-2">Template Features</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} />
                AI-powered content
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} />
                Professional formatting
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} />
                Country-specific tone
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} />
                Editable in Word/PDF
              </li>
            </ul>
          </div>

          {generated && (
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Document Actions</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Download size={18} />
                  Download as PDF
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <Download size={18} />
                  Download as Word
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <Eye size={18} />
                  Preview Document
                </button>
              </div>
            </div>
          )}

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-sm font-medium text-blue-900 mb-2">Pro Tip</p>
            <p className="text-xs text-blue-700">
              Review and customize the generated document to add personal touches and ensure it accurately reflects your unique story.
            </p>
          </div>
        </div>
      </div>

      {/* Sample Templates */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Popular Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Masters SOP - Canada", downloads: 1245 },
            { name: "PhD SOP - USA", downloads: 892 },
            { name: "Academic CV - UK", downloads: 1567 },
          ].map((template, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer">
              <div className="flex items-start gap-3 mb-3">
                <FileText size={24} className="text-blue-600" />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{template.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{template.downloads} downloads</p>
                </div>
              </div>
              <button className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium">
                Use Template
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
