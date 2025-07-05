"use client";

import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  text?: string;
  size?: "sm" | "md" | "lg";
}

export function LoadingSpinner({
  text = "লোড হচ্ছে...",
  size = "md",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-hind-regular">
      <Loader2 className={`${sizeClasses[size]} animate-spin`} />
      <span className="text-sm">{text}</span>
    </div>
  );
}
