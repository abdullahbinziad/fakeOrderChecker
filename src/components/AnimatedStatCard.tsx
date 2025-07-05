"use client";
import { CountUp } from "./CountUp";

interface AnimatedStatCardProps {
  value: number;
  label: string;
  delay?: number;
  duration?: number;
  className?: string;
  variant?: "blue" | "green" | "purple";
}

export function AnimatedStatCard({
  value,
  label,
  delay = 0,
  duration = 2000,
  className = "",
  variant = "blue",
}: AnimatedStatCardProps) {
  const getCardStyles = () => {
    switch (variant) {
      case "green":
        return {
          bg: "bg-green-50",
          border: "border-green-200",
          text: "text-green-700",
          label: "text-green-600",
        };
      case "purple":
        return {
          bg: "bg-purple-50",
          border: "border-purple-200",
          text: "text-purple-700",
          label: "text-purple-600",
        };
      default: // blue
        return {
          bg: "bg-blue-50",
          border: "border-blue-200",
          text: "text-blue-700",
          label: "text-blue-600",
        };
    }
  };

  const styles = getCardStyles();

  return (
    <div
      className={`flex-1 ${styles.bg} rounded-lg px-6 py-4 text-center border ${styles.border} shadow-sm ${className}`}
    >
      <div className={`text-2xl font-bold ${styles.text}`}>
        <CountUp
          end={value}
          duration={duration}
          delay={delay}
          className={`text-2xl font-bold ${styles.text}`}
        />
      </div>
      <div className={`text-sm ${styles.label} font-hind-light mt-1`}>
        {label}
      </div>
    </div>
  );
}
