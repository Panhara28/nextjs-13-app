import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { Photo } from "@/data/photo";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

function Popup({
  children,
  photo,
}: {
  children?: React.ReactNode;
  photo: Photo;
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const router = usePathname();
  const redirect = useRouter();
  console.log(router);
  return (
    <Modal
      show={`/photos/${photo.id}` === router}
      onHide={() => {
        redirect.push("/photos");
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{photo.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image
          alt=""
          src={photo.imageSrc}
          height={600}
          width={600}
          className="w-full object-cover aspect-square col-span-2"
          style={{ width: "100%" }}
        />
      </Modal.Body>
    </Modal>
  );
}

export default Popup;
