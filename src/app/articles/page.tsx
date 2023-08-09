import Posts from "@/components/posts";
import { Suspense } from "react";
import Loading from "./loading";

export default async function ArticlesPage() {
  await new Promise((resolve) => setTimeout(() => resolve("data"), 4000));

  return (
    <>
      <h1>Articles</h1>
      <Posts />
    </>
  );
}
