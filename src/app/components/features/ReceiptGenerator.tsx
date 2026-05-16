import { Receipt, Download, Send, Printer, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ReceiptGenerator() {
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [service, setService] = useState("Admission Processing");

  const recentReceipts = [
    {
      id: "RCP-2024-156",
      student: "Rahul Ahmed",
      amount: 15000,
      service: "Admission Processing",
      date: "2026-05-14",
      method: "bKash",
    },
    {
      id: "RCP-2024-155",
      student: "Fatima Khan",
      amount: 8500,
      service: "Document Verification",
      date: "2026-05-13",
      method: "Cash",
    },
    {
      id: "RCP-2024-154",
      student: "Sakib Hassan",
      amount: 12000,
      service: "Visa Application",
      date: "2026-05-12",
      method: "Bank Transfer",
    },
  ];

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Receipt generated for ${studentName} - ৳${amount}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Digital Receipt Generator</h1>
        <p className="text-gray-500 mt-2">Generate automated digital money receipts for students</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Receipt Form */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Generate New Receipt</h2>

          <form onSubmit={handleGenerate} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Student Name *</label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Enter student name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Student ID *</label>
                <input
                  type="text"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="STD-2024-XXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>Admission Processing</option>
                <option>Visa Application</option>
                <option>Document Verification</option>
                <option>Mock Test Fee</option>
                <option>Consultation Fee</option>
                <option>Other Services</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount (৳) *</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method *</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>Cash</option>
                  <option>bKash</option>
                  <option>Nagad</option>
                  <option>Bank Transfer</option>
                  <option>Credit/Debit Card</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes (Optional)</label>
              <textarea
                rows={3}
                placeholder="Add any additional information..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
              >
                <CheckCircle size={20} />
                Generate Receipt
              </button>
            </div>
          </form>
        </div>

        {/* Quick Actions & Preview */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
            <Receipt size={32} className="mb-4" />
            <h3 className="font-semibold mb-2">Quick Actions</h3>
            <div className="space-y-2 mt-4">
              <button className="w-full bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                <Download size={16} />
                Download PDF
              </button>
              <button className="w-full bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                <Send size={16} />
                Email to Student
              </button>
              <button className="w-full bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                <Printer size={16} />
                Print Receipt
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Receipt Features</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Digital signature & QR code</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Your agency logo & branding</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Auto email to student</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Secure cloud storage</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recent Receipts */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Receipts</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Receipt ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentReceipts.map((receipt) => (
                <tr key={receipt.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">{receipt.id}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{receipt.student}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{receipt.service}</td>
                  <td className="px-4 py-4 text-sm font-semibold text-green-600">৳{receipt.amount.toLocaleString()}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{receipt.method}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{receipt.date}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Download">
                        <Download size={16} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Send">
                        <Send size={16} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Print">
                        <Printer size={16} className="text-gray-600" />
                      </button>
                    </div>
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
