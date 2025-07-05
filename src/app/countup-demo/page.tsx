"use client";
import { MainLayout } from "@/components/layout";
import { CountUp, SuccessRatioDisplay, AnimatedStatCard } from "@/components";
import { useState } from "react";

export default function CountUpDemoPage() {
  const [showAnimations, setShowAnimations] = useState(false);

  return (
    <MainLayout
      headerProps={{
        navigation: [
          { label: "হোম", href: "/" },
          { label: "CountUp ডেমো", href: "/countup-demo" },
        ],
      }}
    >
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              CountUp Animation Demo
            </h1>
            <p className="text-gray-600 mb-6">
              Showcasing different CountUp animations and configurations
            </p>
            <button
              onClick={() => setShowAnimations(!showAnimations)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold"
            >
              {showAnimations ? "Reset Animations" : "Start Animations"}
            </button>
          </div>

          {/* Basic CountUp Examples */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Basic CountUp
              </h3>
              <div className="text-3xl font-bold text-blue-600">
                {showAnimations && <CountUp end={1234} duration={2000} />}
                {!showAnimations && "0"}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                With Suffix
              </h3>
              <div className="text-3xl font-bold text-green-600">
                {showAnimations && (
                  <CountUp end={99.9} suffix="%" decimals={1} duration={2000} />
                )}
                {!showAnimations && "0%"}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                With Prefix
              </h3>
              <div className="text-3xl font-bold text-purple-600">
                {showAnimations && (
                  <CountUp end={50000} prefix="$" duration={2000} />
                )}
                {!showAnimations && "$0"}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Delayed Start
              </h3>
              <div className="text-3xl font-bold text-orange-600">
                {showAnimations && (
                  <CountUp end={789} delay={1000} duration={2000} />
                )}
                {!showAnimations && "0"}
              </div>
            </div>
          </div>

          {/* Success Ratio Display */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Success Ratio Display
            </h2>
            <div className="flex justify-center">
              <SuccessRatioDisplay
                successRatio={showAnimations ? 85.5 : null}
              />
            </div>
          </div>

          {/* Animated Stat Cards */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Animated Stat Cards
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <AnimatedStatCard
                value={showAnimations ? 1250 : 0}
                label="Total Orders"
                delay={500}
                duration={2000}
              />
              <AnimatedStatCard
                value={showAnimations ? 980 : 0}
                label="Successful Deliveries"
                delay={800}
                duration={2000}
              />
              <AnimatedStatCard
                value={showAnimations ? 270 : 0}
                label="Cancellations"
                delay={1100}
                duration={2000}
              />
            </div>
          </div>

          {/* Different Success Ratios */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Different Success Ratios
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Excellent (85%)
                </h3>
                <SuccessRatioDisplay
                  successRatio={showAnimations ? 85 : null}
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Moderate (55%)
                </h3>
                <SuccessRatioDisplay
                  successRatio={showAnimations ? 55 : null}
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Poor (25%)
                </h3>
                <SuccessRatioDisplay
                  successRatio={showAnimations ? 25 : null}
                />
              </div>
            </div>
          </div>

          {/* Configuration Examples */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Different Configurations
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Fast Animation
                </h4>
                <div className="text-2xl font-bold text-blue-600">
                  {showAnimations && <CountUp end={1000} duration={500} />}
                  {!showAnimations && "0"}
                </div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Slow Animation
                </h4>
                <div className="text-2xl font-bold text-green-600">
                  {showAnimations && <CountUp end={1000} duration={4000} />}
                  {!showAnimations && "0"}
                </div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  With Decimals
                </h4>
                <div className="text-2xl font-bold text-purple-600">
                  {showAnimations && (
                    <CountUp end={123.45} decimals={2} duration={2000} />
                  )}
                  {!showAnimations && "0.00"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
