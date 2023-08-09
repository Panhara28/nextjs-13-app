import { Suspense } from "react";
import Loading from "../loading";

export default async function TeamPage() {
  await new Promise((resolve) => setTimeout(() => resolve("data"), 5000));
  return (
    <>
      <Suspense fallback={<Loading />}>
        <h1>Team</h1>
      </Suspense>
    </>
  );
}
