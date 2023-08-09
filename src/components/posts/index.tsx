import Link from "next/link";

async function getPost() {
  const posts = fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  }).then((res) => res.json());

  return posts;
}

export default async function Posts() {
  const posts = await getPost();

  return (
    <>
      <ul>
        {posts.slice(0, 5).map((post: any) => {
          return (
            <li>
              <Link href={`/articles/${post.title.split(" ").join("-")}`}>
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
