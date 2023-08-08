import React from "react";
import DashboardHeader from "../components/dashboard/header";
import DashboardFooter from "../components/dashboard/footer";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <DashboardHeader />
      {children}
      <DashboardFooter />
    </section>
  );
}
