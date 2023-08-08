export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return <>{params.slug}</>;
}
