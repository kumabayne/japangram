import { cn } from "@/lib/utils";
import { useState } from "react";

export default function FollowButton() {
  const [follow, setFollow] = useState(false);

  const handleClick = () => {
    setFollow((follow) => !follow);
  };

  return (
    <button
      className={cn(
        "text-sm font-semibold px-4 py-1.5 inline-flex rounded-full border-2 border-transparent",
        follow && "bg-transparent border-black dark:border-white",
        !follow && "bg-black text-white dark:bg-white dark:text-black"
      )}
      onClick={handleClick}
    >
      {follow ? "Unfollow" : "Follow"}
    </button>
  );
}
