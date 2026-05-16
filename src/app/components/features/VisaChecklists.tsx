import { CheckSquare, Download, Printer, CheckCircle, Circle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function VisaChecklists() {
  const [selectedCountry, setSelectedCountry] = useState("Canada");

  const countries = ["Canada", "USA", "UK", "Australia", "Germany", "New Zealand"];

  const checklists: any = {
    Canada: [
      { item: "Valid Passport (minimum 6 months validity)", checked: true, critical: true },
      { item: "Letter of Acceptance from DLI", checked: true, critical: true },
      { item: "Proof of Financial Support (CAD 10,000+)", checked: true, critical: true },
      { item: "IELTS/TOEFL Score Report", checked: true, critical: false },
      { item: "Medical Examination Certificate", checked: false, critical: true },
      { item: "Police Clearance Certificate", checked: false, critical: true },
      { item: "Statement of Purpose (SOP)", checked: true, critical: false },
      { item: "Academic Transcripts & Certificates", checked: true, critical: false },
      { item: "Passport Size Photographs", checked: false, critical: false },
      { item: "Biometric Appointment Receipt", checked: false, critical: true },
    ],
    USA: [
      { item: "Valid Passport", checked: true, critical: true },
      { item: "I-20 Form from University", checked: true, critical: true },
      { item: "SEVIS Fee Payment Receipt", checked: false, critical: true },
      { item: "DS-160 Confirmation Page", checked: true, critical: true },
      { item: "Visa Fee Payment Receipt", checked: true, critical: true },
      { item: "Financial Documents (USD 15,000+)", checked: false, critical: true },
      { item: "Academic Documents", checked: true, critical: false },
      { item: "TOEFL/IELTS Scores", checked: true, critical: false },
    ],
    UK: [
      { item: "Valid Passport", checked: true, critical: true },
      { item: "CAS (Confirmation of Acceptance)", checked: true, critical: true },
      { item: "Financial Proof (GBP 1,334/month)", checked: false, critical: true },
      { item: "IELTS for UKVI", checked: true, critical: true },
      { item: "TB Test Certificate", checked: false, critical: true },
      { item: "Academic Qualifications", checked: true, critical: false },
      { item: "Passport Photos", checked: false, critical: false },
    ],
  };

  const currentChecklist = checklists[selectedCountry] || [];
  const completedItems = currentChecklist.filter((item: any) => item.checked).length;
  const totalItems = currentChecklist.length;
  const progressPercentage = (completedItems / totalItems) * 100;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Visa Checklists (Country-wise)</h1>
        <p className="text-gray-500 mt-2">Updated and accurate document checklists for each country</p>
      </div>

      {/* Country Selection */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Target Country</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-4 py-3 rounded-lg border-2 transition-all font-medium ${
                selectedCountry === country
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-200 hover:border-gray-300 text-gray-700"
              }`}
            >
              {country}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Card */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-xl text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{selectedCountry} Student Visa Checklist</h2>
            <p className="text-green-100">Track your document preparation progress</p>
          </div>
          <CheckSquare size={48} />
        </div>

        <div className="flex items-center gap-4 mb-3">
          <div className="flex-1">
            <div className="w-full bg-green-400 rounded-full h-3">
              <div
                className="bg-white rounded-full h-3 transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          <span className="text-xl font-semibold">
            {completedItems}/{totalItems}
          </span>
        </div>
        <p className="text-sm text-green-100">{progressPercentage.toFixed(0)}% Complete</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Checklist */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Required Documents</h2>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg" title="Download Checklist">
                <Download size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg" title="Print Checklist">
                <Printer size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {currentChecklist.map((item: any, index: number) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 transition-all ${
                  item.checked
                    ? "border-green-200 bg-green-50"
                    : item.critical
                    ? "border-red-200 bg-red-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <button className="mt-1">
                    {item.checked ? (
                      <CheckCircle size={24} className="text-green-600" />
                    ) : (
                      <Circle size={24} className={item.critical ? "text-red-500" : "text-gray-400"} />
                    )}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p
                        className={`font-medium ${
                          item.checked ? "text-green-900 line-through" : "text-gray-900"
                        }`}
                      >
                        {item.item}
                      </p>
                      {item.critical && !item.checked && (
                        <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-medium rounded whitespace-nowrap">
                          Critical
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Panel */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Checklist Summary</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Documents</span>
                <span className="font-semibold text-gray-900">{totalItems}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Completed</span>
                <span className="font-semibold text-green-600">{completedItems}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Remaining</span>
                <span className="font-semibold text-orange-600">{totalItems - completedItems}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Critical Items</span>
                <span className="font-semibold text-red-600">
                  {currentChecklist.filter((item: any) => item.critical && !item.checked).length}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <div className="flex items-start gap-2 mb-2">
              <AlertCircle size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm font-medium text-blue-900">Important Notice</p>
            </div>
            <p className="text-xs text-blue-700">
              Document requirements may vary based on your specific case. Always verify with official immigration websites or consult with authorized representatives.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Processing Time</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Standard</span>
                <span className="font-semibold text-gray-900">4-6 weeks</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Express (if available)</span>
                <span className="font-semibold text-gray-900">2-3 weeks</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Get Expert Help
          </button>
        </div>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
            <CheckCircle size={24} className="text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Updated Requirements</h3>
          <p className="text-sm text-gray-600">
            All checklists are updated with the latest requirements as of May 2026
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="p-3 bg-green-50 rounded-lg w-fit mb-4">
            <Download size={24} className="text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Download & Print</h3>
          <p className="text-sm text-gray-600">
            Download PDF version to share with students or print for offline reference
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="p-3 bg-purple-50 rounded-lg w-fit mb-4">
            <AlertCircle size={24} className="text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
          <p className="text-sm text-gray-600">
            Contact our visa experts for any questions or clarifications
          </p>
        </div>
      </div>
    </div>
  );
}
