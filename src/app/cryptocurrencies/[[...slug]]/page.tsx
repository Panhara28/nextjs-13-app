export default function CryptoCurrenciesPage({
  params,
}: {
  params: { slug: any };
}) {
  return (
    <>
      <h1>Crypto Currency</h1>
      <ul>
        {params?.slug?.map((item: any, index: any) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}
