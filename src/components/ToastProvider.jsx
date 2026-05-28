"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className: "glass-panel text-slate-100 border border-slate-800",
        style: {
          background: "rgba(8, 9, 20, 0.9)",
          color: "#f8fafc",
          border: "1px solid rgba(0, 242, 254, 0.2)",
          backdropFilter: "blur(12px)",
        },
        success: {
          iconTheme: {
            primary: "#00f2fe",
            secondary: "#030308",
          },
        },
      }}
    />
  );
}
