"use client";
import { MainLayout } from "@/components/layout";

export default function TestPage() {
  return (
    <MainLayout
      headerProps={{
        navigation: [
          { label: "হোম", href: "/" },
          { label: "টেস্ট পেজ", href: "/test-dark-mode" },
        ],
      }}
    >
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Test Page</h1>
            <p className="text-gray-600 mb-6">
              This is a test page to verify all components are working correctly
            </p>
          </div>

          {/* Test Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Card 1
              </h2>
              <p className="text-gray-600 mb-4">
                This is a test card to verify styling.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                Test Button
              </button>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 shadow-sm border border-blue-200">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">
                Card 2
              </h2>
              <p className="text-blue-700 mb-4">
                Another test card with different styling.
              </p>
              <input
                type="text"
                placeholder="Test input"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="bg-green-50 rounded-xl p-6 shadow-sm border border-green-200">
              <h2 className="text-xl font-semibold text-green-900 mb-4">
                Card 3
              </h2>
              <p className="text-green-700 mb-4">
                Third test card for comprehensive testing.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-gray-700">Checkbox 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-gray-700">Checkbox 2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Test Table */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Test Table
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left text-gray-900 border-b border-gray-300">
                      Header 1
                    </th>
                    <th className="p-3 text-left text-gray-900 border-b border-gray-300">
                      Header 2
                    </th>
                    <th className="p-3 text-left text-gray-900 border-b border-gray-300">
                      Header 3
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-3 text-gray-700 border-b border-gray-200">
                      Row 1, Cell 1
                    </td>
                    <td className="p-3 text-gray-700 border-b border-gray-200">
                      Row 1, Cell 2
                    </td>
                    <td className="p-3 text-gray-700 border-b border-gray-200">
                      Row 1, Cell 3
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-3 text-gray-700 border-b border-gray-200">
                      Row 2, Cell 1
                    </td>
                    <td className="p-3 text-gray-700 border-b border-gray-200">
                      Row 2, Cell 2
                    </td>
                    <td className="p-3 text-gray-700 border-b border-gray-200">
                      Row 2, Cell 3
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="grid gap-4 md:grid-cols-4">
            <div className="bg-green-100 border border-green-200 rounded-lg p-4">
              <div className="text-green-800 font-semibold">Success</div>
              <div className="text-green-600 text-sm">Everything working</div>
            </div>
            <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-4">
              <div className="text-yellow-800 font-semibold">Warning</div>
              <div className="text-yellow-600 text-sm">Check this out</div>
            </div>
            <div className="bg-red-100 border border-red-200 rounded-lg p-4">
              <div className="text-red-800 font-semibold">Error</div>
              <div className="text-red-600 text-sm">Something wrong</div>
            </div>
            <div className="bg-blue-100 border border-blue-200 rounded-lg p-4">
              <div className="text-blue-800 font-semibold">Info</div>
              <div className="text-blue-600 text-sm">More information</div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
