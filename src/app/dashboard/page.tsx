import { Suspense } from "react";
import Loading from "./loading";
import Title from "@/components/dashboard/title";

export default async function DashboardPage() {
  await new Promise((resolve) => setTimeout(() => resolve("data"), 2000));
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Title />
      </Suspense>
    </>
  );
}
