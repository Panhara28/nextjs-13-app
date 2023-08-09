import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <section style={{ border: "2px dashed #000", padding: 15 }}>
      <h1 style={{ margin: 0 }}>Template</h1>
      {children}
    </section>
  );
}
