import { useState } from "react";

export default function ImageViewer({ images }: { images: string[] }) {
  const [mainImage, setMainImage] = useState<string>(images[0]);

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <div className=" flex items-center justify-center mb-0.5 rounded-2xl overflow-hidden max-w-64 object-cover">
          <img src={mainImage} alt="main image" />
        </div>
        <div className="flex gap-4.5 max-w-84">
        {images.map((img) => (
          <div className="rounded-2xl overflow-hidden hover:translate-0.5 object-cover">
            <img onClick={() => setMainImage(img)} src={img} alt="image" />
          </div>
        ))}
        </div>
      </div>
    </>
  );
}
