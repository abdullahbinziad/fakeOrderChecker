"use client";
import { useState } from "react";

interface SidebarProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function Sidebar({
  children,
  isOpen = false,
  onToggle,
  className = "",
}: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        ${className}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="text-xl font-bold text-gray-900">Menu</div>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto p-6">{children}</div>
        </div>
      </aside>
    </>
  );
}
