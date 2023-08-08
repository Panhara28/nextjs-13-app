import Link from "next/link";

export default function ProductPage() {
  return (
    <>
      <h1>Products</h1>
      <Link href="/products/product-1" style={{ marginRight: 10 }}>
        Product 1
      </Link>
      <Link href="/products/product-2" style={{ marginRight: 10 }}>
        Product 2
      </Link>
      <Link href="/products/product-3" style={{ marginRight: 10 }}>
        Product 3
      </Link>
    </>
  );
}
