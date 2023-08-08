import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <section style={{ border: "2px dashed #000", padding: 15 }}>
      <h1 style={{ margin: 0 }}>Template</h1>
      {children}
    </section>
  );
}
