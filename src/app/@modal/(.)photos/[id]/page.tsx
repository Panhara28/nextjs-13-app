"use client";
import Frame from "@/components/frame";
import Popup from "@/components/modal";
import data, { Photo } from "@/data/photo";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const photos = data;
  const photo: Photo = photos.find((p) => p.id === photoId)!;

  return <Popup photo={photo} />;
}
