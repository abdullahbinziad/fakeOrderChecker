"use client";
import { MainLayout, LayoutWithSidebar } from "@/components/layout";

export default function ExamplePage() {
  const navigation = [
    { label: "হোম", href: "/" },
    { label: "উদাহরণ", href: "/example" },
    { label: "সম্পর্কে", href: "/about" },
  ];

  const sidebarContent = (
    <div className="space-y-4">
      <div className="text-lg font-semibold text-gray-900 mb-4">
        সাইডবার মেনু
      </div>
      <nav className="space-y-2">
        <a href="#" className="block p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
          ড্যাশবোর্ড
        </a>
        <a href="#" className="block p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
          রিপোর্ট
        </a>
        <a href="#" className="block p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
          সেটিংস
        </a>
      </nav>
    </div>
  );

  return (
    <LayoutWithSidebar
      sidebarContent={sidebarContent}
      headerProps={{
        navigation,
        logo: (
          <div className="text-2xl font-bold text-blue-600">
            FraudGuard Pro
          </div>
        ),
      }}
    >
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            লেআউট কম্পোনেন্ট উদাহরণ
          </h1>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                MainLayout
              </h2>
              <p className="text-gray-600 mb-4">
                একটি সাধারণ লেআউট যা হেডার, মেইন কনটেন্ট এবং ফুটার প্রদান করে।
              </p>
              <code className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
                &lt;MainLayout&gt;content&lt;/MainLayout&gt;
              </code>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                LayoutWithSidebar
              </h2>
              <p className="text-gray-600 mb-4">
                একটি লেআউট যা সাইডবার সহ হেডার, মেইন কনটেন্ট এবং ফুটার প্রদান করে।
              </p>
              <code className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
                &lt;LayoutWithSidebar sidebarContent={...}&gt;content&lt;/LayoutWithSidebar&gt;
              </code>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Header
              </h2>
              <p className="text-gray-600 mb-4">
                কাস্টমাইজযোগ্য হেডার কম্পোনেন্ট যা লোগো এবং নেভিগেশন সমর্থন করে।
              </p>
              <code className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
                &lt;Header logo={...} navigation={...} /&gt;
              </code>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Footer
              </h2>
              <p className="text-gray-600 mb-4">
                ক্লিন ফুটার কম্পোনেন্ট যা "Powered by FLEX SOFTR" সহ লিংক প্রদান করে।
              </p>
              <code className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
                &lt;Footer links={...} showPoweredBy={true} /&gt;
              </code>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              বৈশিষ্ট্যসমূহ
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                সম্পূর্ণ রেসপন্সিভ ডিজাইন
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                কাস্টমাইজযোগ্য নেভিগেশন
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                মডার্ন এবং মিনিমাল UI
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                পুনর্ব্যবহারযোগ্য কম্পোনেন্ট
              </li>
            </ul>
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  );
} 