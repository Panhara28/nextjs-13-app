export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  return posts.map((post: any) => ({ slug: post.title.split(" ").join("-") }));
}

export default function ArticleDetail({ params }: any) {
  const { slug } = params;
  return <>{slug.split("-").join(" ")}</>;
}
