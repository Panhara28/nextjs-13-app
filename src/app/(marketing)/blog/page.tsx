import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <h1>Blog</h1>
      <Link href="/blog/1" style={{ marginRight: 10 }}>
        Blog 1
      </Link>
      <Link href="/blog/2" style={{ marginRight: 10 }}>
        Blog 2
      </Link>
      <Link href="/blog/3" style={{ marginRight: 10 }}>
        Blog 3
      </Link>
    </>
  );
}
