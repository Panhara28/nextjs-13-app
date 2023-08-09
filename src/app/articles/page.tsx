import Posts from "@/components/posts";
import { Suspense } from "react";
import Loading from "./loading";

export default async function ArticlesPage() {
  return (
    <>
      <h1>Articles</h1>
      <Suspense fallback={<Loading />}>
        <Posts />
      </Suspense>
    </>
  );
}
