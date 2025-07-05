"use client";
import { useState } from "react";
import steadfast from "../../public/img/steadfast.svg";
import paperfly from "../../public/img/paperfly.svg";
import redx from "../../public/img/redx.svg";
import pathao from "../../public/img/pathao.svg";
import Image from "next/image";
import { MainLayout } from "@/components/layout";
import { SuccessRatioDisplay } from "@/components/SuccessRatioDisplay";
import { AnimatedStatCard } from "@/components/AnimatedStatCard";

const COURIERS = [
  {
    name: "Steadfast",
    logo: steadfast,
  },
  {
    name: "Pathao",
    logo: pathao,
  },
  {
    name: "RedX",
    logo: redx,
  },
  {
    name: "PaperFly",
    logo: paperfly,
  },
];

export default function Home() {
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleCheck = async () => {
    if (!mobile.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch(`/api/fraud-check?mobile=${mobile}`);
      const data = await res.json();
      if (res.ok) {
        setResult(data);
      } else {
        setError(data.error || "Unknown error");
      }
    } catch (e: any) {
      setError(e.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCheck();
    }
  };

  return (
    <MainLayout>
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="w-full max-w-6xl bg-white/95 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 flex flex-col items-center gap-8 sm:gap-12 backdrop-blur-sm border border-gray-200">
          <div className="w-full flex flex-col lg:flex-row gap-8 sm:gap-12 items-center justify-between">
            <div className="flex-1 flex flex-col items-center lg:items-start w-full">
              <div className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 font-hind-bold text-center lg:text-left">
                ফেইক অর্ডার চেক করুন
              </div>
              <div className="text-base sm:text-lg text-gray-600 mb-6 font-hind-medium text-center lg:text-left">
                মোবাইল নম্বর দিয়ে ফ্রড রিস্ক এবং ডেলিভারি সাকসেস চেক করুন
              </div>
              <div className="flex flex-col sm:flex-row w-full gap-4 mb-4">
                <input
                  type="text"
                  className="flex-1 border-2 border-blue-200 rounded-xl px-4 sm:px-6 py-3 sm:py-4 focus:border-blue-500 bg-white text-gray-900 font-medium shadow-sm transition text-base sm:text-lg font-hind-regular placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  placeholder="যেমন: 01772065894"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={loading}
                />
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-md transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed text-base sm:text-lg font-hind-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
                  onClick={handleCheck}
                  disabled={loading || !mobile}
                >
                  {loading ? "লোড হচ্ছে..." : "চেক করুন"}
                </button>
              </div>
              {error && (
                <div className="text-red-600 mt-4 text-sm sm:text-base font-hind-regular bg-red-50 px-4 py-2 rounded-lg border border-red-200 w-full">
                  {error}
                </div>
              )}
            </div>
          </div>

          {result && (
            <div className="w-full flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 items-center justify-between">
                <div className="w-full xl:w-2/5 flex flex-col items-center xl:items-start gap-4">
                  <div className="text-sm sm:text-base text-gray-700 font-hind-regular text-center xl:text-left">
                    আপনার নম্বর:{" "}
                    <span className="font-bold text-blue-700">
                      {result.phoneNumber}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 w-full">
                    <AnimatedStatCard
                      value={result.totalOrders}
                      label="মোট অর্ডার"
                      delay={800}
                      duration={2000}
                      variant="blue"
                    />
                    <AnimatedStatCard
                      value={result.totalDeliveries}
                      label="মোট ডেলিভারি"
                      delay={1000}
                      duration={2000}
                      variant="green"
                    />
                    <AnimatedStatCard
                      value={result.totalCancellations}
                      label="মোট বাতিল"
                      delay={1200}
                      duration={2000}
                      variant="purple"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-4 w-full">
                    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
                      <SuccessRatioDisplay successRatio={result.successRatio} />

                      <div className="py-8 sm:py-12 text-center sm:text-left text-xl sm:text-2xl font-bold text-blue-700 bg-blue-50 rounded-lg px-4 sm:px-6 shadow-sm border border-blue-200 font-solaiman w-full sm:w-auto">
                        {result.message}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center w-full">
                  <div className="w-full overflow-x-auto">
                    <table className="w-full text-sm sm:text-base border border-gray-300 rounded-xl overflow-hidden mt-4 bg-white shadow-sm min-w-[600px]">
                      <thead>
                        <tr className="bg-blue-100 text-blue-700">
                          <th className="p-2 sm:p-4 font-hind-semibold border-r border-gray-200 last:border-r-0 text-xs sm:text-sm">
                            কুরিয়ার
                          </th>
                          <th className="p-2 sm:p-4 font-hind-semibold border-r border-gray-200 last:border-r-0 text-xs sm:text-sm">
                            অর্ডার
                          </th>
                          <th className="p-2 sm:p-4 font-hind-semibold border-r border-gray-200 last:border-r-0 text-xs sm:text-sm">
                            ডেলিভারি
                          </th>
                          <th className="p-2 sm:p-4 font-hind-semibold border-r border-gray-200 last:border-r-0 text-xs sm:text-sm">
                            বাতিল
                          </th>
                          <th className="p-2 sm:p-4 font-hind-semibold border-r border-gray-200 last:border-r-0 text-xs sm:text-sm">
                            ডেলিভারির হার
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {COURIERS.map((courier, index) => {
                          const c = result.couriers.find(
                            (x: any) => x.name === courier.name
                          ) || {
                            orders: 0,
                            deliveries: 0,
                            cancellations: 0,
                            deliveryRate: 0,
                          };

                          // Different light colors for alternating rows
                          const rowColors = [
                            "bg-blue-50",
                            "bg-green-50",
                            "bg-purple-50",
                            "bg-pink-50",
                            "bg-yellow-50",
                            "bg-indigo-50",
                            "bg-teal-50",
                            "bg-orange-50",
                          ];

                          const rowColor = rowColors[index % rowColors.length];

                          return (
                            <tr
                              key={courier.name}
                              className={`text-center border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50 transition-colors ${rowColor}`}
                            >
                              <td className="flex items-center gap-2 sm:gap-3 p-2 sm:p-4 border-r border-gray-200 last:border-r-0">
                                <Image
                                  width={60}
                                  height={60}
                                  src={courier.logo.src}
                                  alt={courier.name}
                                  className="border border-blue-200 p-1 sm:p-2 rounded-lg bg-white w-12 h-12 sm:w-16 sm:h-16"
                                />
                                <span className="font-poppins text-gray-900 text-xs sm:text-sm">
                                  {courier.name}
                                </span>
                              </td>
                              <td className="p-2 sm:p-4 font-hind-regular border-r border-gray-200 last:border-r-0 text-gray-900 text-xs sm:text-sm">
                                {c.orders}
                              </td>
                              <td className="p-2 sm:p-4 font-hind-regular border-r border-gray-200 last:border-r-0 text-gray-900 text-xs sm:text-sm">
                                {c.deliveries}
                              </td>
                              <td className="p-2 sm:p-4 font-hind-regular border-r border-gray-200 last:border-r-0 text-gray-900 text-xs sm:text-sm">
                                {c.cancellations}
                              </td>
                              <td className="p-2 sm:p-4 font-hind-regular border-r border-gray-200 last:border-r-0 text-gray-900 text-xs sm:text-sm">
                                {c.deliveryRate}%
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
