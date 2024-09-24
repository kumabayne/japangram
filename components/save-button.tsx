"use client";

import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";
import { useState } from "react";

export default function SaveButton() {
  const [saved, setSaved] = useState(false);

  const handleClick = () => {
    setSaved((saved) => !saved);
  };

  return (
    <button onClick={handleClick} type="button">
      {saved ? (
        <>
          <IconBookmarkFilled className="w-6 h-6" />
          <span className="sr-only">Unsave</span>
        </>
      ) : (
        <>
          <IconBookmark className="w-6 h-6" stroke="1.5" />
          <span className="sr-only">Save</span>
        </>
      )}
    </button>
  );
}
