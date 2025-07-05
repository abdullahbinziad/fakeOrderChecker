"use client";
import { useEffect, useState, useRef } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  delay?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  start?: number;
  onComplete?: () => void;
}

export function CountUp({
  end,
  duration = 2000,
  delay = 0,
  className = "",
  suffix = "",
  prefix = "",
  decimals = 0,
  start = 0,
  onComplete,
}: CountUpProps) {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (end === start) {
      setCount(end);
      return;
    }

    const startAnimation = () => {
      setIsAnimating(true);
      startTimeRef.current = Date.now();

      const animate = () => {
        const now = Date.now();
        const elapsed = now - (startTimeRef.current || 0);
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = start + (end - start) * easeOutQuart;

        setCount(Number(currentCount.toFixed(decimals)));

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setCount(end);
          setIsAnimating(false);
          onComplete?.();
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    const timeoutId = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [end, start, duration, delay, decimals, onComplete]);

  const formatNumber = (num: number) => {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  return (
    <span className={className}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
