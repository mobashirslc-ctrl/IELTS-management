import { FolderLock, Upload, Download, Eye, Trash2, File, Shield, Lock } from "lucide-react";
import { useState } from "react";

export default function DocumentLocker() {
  const [selectedStudent, setSelectedStudent] = useState("STD-2024-156");

  const students = [
    { id: "STD-2024-156", name: "Rahul Ahmed", documents: 12 },
    { id: "STD-2024-155", name: "Fatima Khan", documents: 8 },
    { id: "STD-2024-154", name: "Sakib Hassan", documents: 15 },
  ];

  const documentCategories = [
    {
      category: "Academic Documents",
      documents: [
        { name: "SSC Certificate.pdf", size: "2.4 MB", uploadDate: "2026-05-10", verified: true },
        { name: "HSC Certificate.pdf", size: "2.1 MB", uploadDate: "2026-05-10", verified: true },
        { name: "Bachelor Transcripts.pdf", size: "3.8 MB", uploadDate: "2026-05-11", verified: true },
        { name: "Degree Certificate.pdf", size: "1.9 MB", uploadDate: "2026-05-11", verified: true },
      ],
    },
    {
      category: "Test Scores",
      documents: [
        { name: "IELTS Result.pdf", size: "850 KB", uploadDate: "2026-05-09", verified: true },
        { name: "GRE Scorecard.pdf", size: "650 KB", uploadDate: "2026-05-12", verified: false },
      ],
    },
    {
      category: "Financial Documents",
      documents: [
        { name: "Bank Statement.pdf", size: "4.2 MB", uploadDate: "2026-05-13", verified: true },
        { name: "Solvency Certificate.pdf", size: "1.5 MB", uploadDate: "2026-05-13", verified: true },
      ],
    },
    {
      category: "Personal Documents",
      documents: [
        { name: "Passport Copy.pdf", size: "3.1 MB", uploadDate: "2026-05-08", verified: true },
        { name: "Birth Certificate.pdf", size: "1.2 MB", uploadDate: "2026-05-08", verified: true },
      ],
    },
  ];

  const totalDocuments = documentCategories.reduce((sum, cat) => sum + cat.documents.length, 0);
  const verifiedDocuments = documentCategories.reduce(
    (sum, cat) => sum + cat.documents.filter((doc) => doc.verified).length,
    0
  );
  const totalSize = "22.7 MB";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Student Document Locker</h1>
        <p className="text-gray-500 mt-2">Secure cloud storage for all academic papers and documents</p>
      </div>

      {/* Security Banner */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Shield size={32} />
              <h2 className="text-2xl font-semibold">256-bit Encrypted Storage</h2>
            </div>
            <p className="text-blue-100">Your students' documents are protected with bank-level security</p>
          </div>
          <Lock size={48} className="opacity-50" />
        </div>
      </div>

      {/* Student Selection & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Student</label>
          <select
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name} ({student.documents} docs)
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <File size={20} className="text-blue-600" />
            <span className="text-sm text-gray-500">Total Documents</span>
          </div>
          <p className="text-2xl font-semibold text-gray-900">{totalDocuments}</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Shield size={20} className="text-green-600" />
            <span className="text-sm text-gray-500">Verified</span>
          </div>
          <p className="text-2xl font-semibold text-green-600">{verifiedDocuments}/{totalDocuments}</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <FolderLock size={20} className="text-purple-600" />
            <span className="text-sm text-gray-500">Storage Used</span>
          </div>
          <p className="text-2xl font-semibold text-gray-900">{totalSize}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Document Categories */}
        <div className="lg:col-span-3 space-y-4">
          {documentCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">{category.category}</h3>
                <span className="text-sm text-gray-500">{category.documents.length} files</span>
              </div>

              <div className="space-y-2">
                {category.documents.map((doc, docIndex) => (
                  <div
                    key={docIndex}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="p-2 bg-red-50 rounded">
                        <File size={20} className="text-red-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">{doc.name}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>Uploaded {doc.uploadDate}</span>
                          {doc.verified && (
                            <>
                              <span>•</span>
                              <span className="flex items-center gap-1 text-green-600">
                                <Shield size={12} />
                                Verified
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Preview">
                        <Eye size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Download">
                        <Download size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg" title="Delete">
                        <Trash2 size={18} className="text-red-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Upload Section */}
          <div className="bg-white p-8 rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors">
            <div className="text-center">
              <Upload size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Upload New Documents</h3>
              <p className="text-sm text-gray-500 mb-4">
                Drag and drop files here, or click to browse
              </p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Choose Files
              </button>
              <p className="text-xs text-gray-400 mt-3">
                Supported formats: PDF, JPG, PNG (Max: 10MB per file)
              </p>
            </div>
          </div>
        </div>

        {/* Actions Sidebar */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Upload size={18} />
                Upload Files
              </button>
              <button className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                <Download size={18} />
                Download All
              </button>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <div className="flex items-start gap-2 mb-2">
              <Shield size={18} className="text-green-600 mt-0.5" />
              <p className="text-sm font-medium text-green-900">Secure Storage</p>
            </div>
            <ul className="space-y-1 text-xs text-green-700">
              <li>• 256-bit encryption</li>
              <li>• Automatic backups</li>
              <li>• Access logs tracking</li>
              <li>• GDPR compliant</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Storage Info</h3>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2 text-sm">
                  <span className="text-gray-600">Used</span>
                  <span className="font-semibold text-gray-900">22.7 MB</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 rounded-full h-2" style={{ width: "22.7%" }}></div>
                </div>
              </div>
              <p className="text-xs text-gray-500">77.3 MB of 100 MB available</p>
              <button className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium">
                Upgrade Storage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
