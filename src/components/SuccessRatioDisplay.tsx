"use client";
import { useState, useEffect } from "react";
import { CountUp } from "./CountUp";

interface SuccessRatioDisplayProps {
  successRatio: number | null;
  className?: string;
}

export function SuccessRatioDisplay({
  successRatio,
  className = "",
}: SuccessRatioDisplayProps) {
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (successRatio !== null) {
      setShowAnimation(true);
      setAnimationComplete(false);
    }
  }, [successRatio]);

  const getStatusText = (ratio: number) => {
    if (ratio >= 70) return "চমৎকার";
    if (ratio >= 40) return "মাঝারি";
    return "খারাপ";
  };

  const getStatusColor = (ratio: number) => {
    if (ratio >= 70) return "text-green-600";
    if (ratio >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  const getGradientClass = (ratio: number) => {
    if (ratio >= 70) return "from-green-400 to-emerald-500";
    if (ratio >= 40) return "from-yellow-400 to-orange-500";
    return "from-red-400 to-pink-500";
  };

  return (
    <div
      className={`bg-gradient-to-br ${
        successRatio
          ? getGradientClass(successRatio)
          : "from-gray-400 to-gray-500"
      } rounded-full w-32 h-32 sm:w-44 sm:h-44 flex items-center justify-center shadow-lg ${
        showAnimation ? "animate-pulse" : ""
      } ${className}`}
    >
      <div className="bg-white rounded-full w-28 h-28 sm:w-40 sm:h-40 flex flex-col items-center justify-center">
        <div className="text-2xl sm:text-4xl font-extrabold text-gray-900">
          {successRatio !== null ? (
            <CountUp
              end={successRatio}
              duration={2500}
              delay={500}
              suffix="%"
              decimals={1}
              className={`${
                animationComplete
                  ? getStatusColor(successRatio)
                  : "text-gray-900"
              } transition-colors duration-500`}
              onComplete={() => setAnimationComplete(true)}
            />
          ) : (
            "--%"
          )}
        </div>
        <div className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3 font-hind-light">
          সাকসেস রেশিও
        </div>
        {successRatio !== null && (
          <div
            className={`text-sm sm:text-base font-bold mt-2 sm:mt-3 font-solaiman transition-all duration-500 ${
              animationComplete ? getStatusColor(successRatio) : "text-gray-500"
            }`}
          >
            {getStatusText(successRatio)}
          </div>
        )}
      </div>
    </div>
  );
}
