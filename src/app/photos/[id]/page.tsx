"use client";
import Frame from "@/components/frame";
import data, { Photo } from "@/data/photo";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: Photo = data.find((p) => p.id === id)!;

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Frame photo={photo} />
      </div>
    </div>
  );
}
