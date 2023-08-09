import DashboardFooter from "@/components/dashboard/footer";
import DashboardHeader from "@/components/dashboard/header";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <DashboardHeader />
      {children}
      <DashboardFooter />
    </section>
  );
}
