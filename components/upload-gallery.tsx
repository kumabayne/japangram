"use client";

import Image from "next/image";
import { useState } from "react";

export default function UploadGallery({ images }) {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="w-64 h-64 relative bg-red-600">
        <Image
          className="!h-auto !top-1/2 !left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={images[index]}
          fill={true}
          alt=""
        />
      </div>

      {images.map((item, index) => (
        <button
          key={item}
          className="w-16 h-16 relative bg-red-600"
          onClick={() => setIndex(index)}
          type="button"
        >
          <Image
            className="!h-auto !top-1/2 !left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={item}
            fill={true}
            alt=""
          />
        </button>
      ))}
    </div>
  );
}
