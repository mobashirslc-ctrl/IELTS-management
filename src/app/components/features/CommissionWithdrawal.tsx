import { CreditCard, Wallet, Building2, Send, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

export default function CommissionWithdrawal() {
  const [withdrawalMethod, setWithdrawalMethod] = useState<"bkash" | "bank">("bkash");
  const [amount, setAmount] = useState("");

  const withdrawalHistory = [
    {
      id: "WD-001",
      amount: 45000,
      method: "bKash",
      accountNumber: "01712345678",
      date: "2026-05-10",
      status: "Completed",
    },
    {
      id: "WD-002",
      amount: 38500,
      method: "Bank Transfer",
      accountNumber: "****6789",
      date: "2026-05-03",
      status: "Completed",
    },
    {
      id: "WD-003",
      amount: 52000,
      method: "bKash",
      accountNumber: "01712345678",
      date: "2026-04-25",
      status: "Completed",
    },
  ];

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Withdrawal request submitted for ৳${amount} via ${withdrawalMethod === "bkash" ? "bKash" : "Bank Transfer"}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Commission Withdrawal Portal</h1>
        <p className="text-gray-500 mt-2">Request commission withdrawal in one click (bKash/Bank)</p>
      </div>

      {/* Available Balance */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-100 mb-2">Available Balance</p>
            <h2 className="text-5xl font-semibold">৳89,500</h2>
            <p className="text-blue-100 mt-2">Ready to withdraw • Min: ৳5,000</p>
          </div>
          <div className="p-4 bg-white/20 rounded-full">
            <Wallet size={48} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Withdrawal Form */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">New Withdrawal Request</h2>

          <form onSubmit={handleWithdraw} className="space-y-6">
            {/* Withdrawal Method Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Select Withdrawal Method</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setWithdrawalMethod("bkash")}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    withdrawalMethod === "bkash"
                      ? "border-pink-500 bg-pink-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <CreditCard size={24} className="text-pink-500" />
                    <span className="font-medium">bKash</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Instant transfer</p>
                </button>

                <button
                  type="button"
                  onClick={() => setWithdrawalMethod("bank")}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    withdrawalMethod === "bank"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Building2 size={24} className="text-blue-500" />
                    <span className="font-medium">Bank Transfer</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">1-2 business days</p>
                </button>
              </div>
            </div>

            {/* Amount Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Withdrawal Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">৳</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="5000"
                  max="89500"
                  required
                />
              </div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-gray-500">Min: ৳5,000</p>
                <button
                  type="button"
                  onClick={() => setAmount("89500")}
                  className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                >
                  Withdraw All
                </button>
              </div>
            </div>

            {/* Account Details */}
            {withdrawalMethod === "bkash" ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">bKash Number</label>
                <input
                  type="text"
                  placeholder="01712345678"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  defaultValue="01712345678"
                  required
                />
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
                  <input
                    type="text"
                    placeholder="Enter bank name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    defaultValue="Dutch Bangla Bank"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
                  <input
                    type="text"
                    placeholder="Enter account number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    defaultValue="1234567890"
                    required
                  />
                </div>
              </>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <Send size={20} />
              Submit Withdrawal Request
            </button>
          </form>
        </div>

        {/* Quick Stats */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-50 rounded-lg">
                <CheckCircle size={20} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Withdrawn</p>
                <p className="text-xl font-semibold text-gray-900">৳4,65,500</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-50 rounded-lg">
                <Clock size={20} className="text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Processing Time</p>
                <p className="text-xl font-semibold text-gray-900">24-48 hours</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-sm font-medium text-blue-900 mb-2">Need Help?</p>
            <p className="text-xs text-blue-700 mb-3">
              Contact support for any withdrawal issues or questions
            </p>
            <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">Contact Support</button>
          </div>
        </div>
      </div>

      {/* Withdrawal History */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Withdrawal History</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Account</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {withdrawalHistory.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">{record.id}</td>
                  <td className="px-4 py-4 text-sm font-semibold text-green-600">৳{record.amount.toLocaleString()}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{record.method}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{record.accountNumber}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{record.date}</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">
                      <CheckCircle size={12} />
                      {record.status}
                    </span>
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
