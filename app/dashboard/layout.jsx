import { Sidebar } from "@/components/sidebar/Sidebar";
import React from "react";

export default function layout({ children }) {
  return (
    <div className={`flex h-screen overflow-hidden`}>
      {/* ===== Sidebar Start ===== */}
      <Sidebar />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/* ===== Main Content Start ===== */}
        <main className="relative">
          <div className="mx-auto ">{children}</div>
        </main>
        {/* ===== Main Content End ===== */}
      </div>
    </div>
  );
}
