import Link from "next/link";
import Image from "next/image";
import data, { Photo } from "@/data/photo";

export default function Home() {
  const photos = data;

  return (
    <main className="container mx-auto">
      <h1 className="text-center text-4xl font-bold m-10">NextGram</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
        {photos.map(({ id, imageSrc }: Photo) => (
          <Link key={id} href={`/photos/${id}`}>
            <Image
              alt=""
              src={imageSrc}
              height={200}
              width={200}
              className="w-full object-cover aspect-square"
              style={{ width: "200px", height: "200px" }}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
