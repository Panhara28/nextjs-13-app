export default function BlogDetailPage({ params }: { params: { id: number } }) {
  return <>Post-{params.id}</>;
}
