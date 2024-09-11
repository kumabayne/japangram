"use client";

import { PostsType } from "@/types/posts";
import Image from "next/image";
import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Feed({ items }: { items: PostsType }) {
  const [gutter, setGutter] = useState(8);

  useEffect(() => {
    if (window) {
      const resizeGutter = () => {
        if (window.innerWidth > 1280) {
          setGutter(24);
        } else if (window.innerWidth > 767) {
          setGutter(16);
        } else {
          setGutter(8);
        }
      };

      resizeGutter();

      window.addEventListener("resize", resizeGutter);

      return () => window.removeEventListener("resize", resizeGutter);
    }
  }, []);

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 320: 2, 767: 3, 1023: 4, 1279: 5 }}
    >
      <Masonry gutter={`${gutter}px`}>
        {items.posts.map((item) => (
          <div key={item.id}>
            {item.media.map((media) => (
              <Image
                key={media.src}
                className="rounded-md shadow"
                src={media.src}
                width={media.width}
                height={media.height}
                alt={media.alt}
              />
            ))}
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
