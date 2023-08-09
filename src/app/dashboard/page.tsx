import { Suspense } from "react";
import Loading from "./loading";
import Title from "@/components/dashboard/title";

export default async function DashboardPage() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Title />
      </Suspense>
    </>
  );
}
