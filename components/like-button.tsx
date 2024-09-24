"use client";

import { cn } from "@/lib/utils";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { useState } from "react";

export default function LikeButton({ comment }: { comment?: boolean }) {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked((liked) => !liked);
  };

  return (
    <button className="text-rose-500" onClick={handleClick} type="button">
      {liked ? (
        <>
          <IconHeartFilled className={cn("w-6 h-6", comment && "w-4 h-4")} />
          <span className="sr-only">Unlike</span>
        </>
      ) : (
        <>
          <IconHeart
            className={cn("w-6 h-6", comment && "w-4 h-4")}
            stroke={comment ? "2" : "1.5"}
          />
          <span className="sr-only">Like</span>
        </>
      )}
    </button>
  );
}
