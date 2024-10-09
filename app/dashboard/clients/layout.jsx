import Header from "@/components/clientHeader/Header";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
