import { Suspense } from "react";
import Loading from "../loading";

export default async function AnalyticsPage() {
  await new Promise((resolve) => setTimeout(() => resolve("data"), 4000));

  return (
    <>
      <Suspense fallback={<Loading />}>
        <h1>Analytic</h1>
      </Suspense>
    </>
  );
}
