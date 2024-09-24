import { ReplyType } from "@/types/posts";
import UserAvatar from "./user-avatar";
import LikeButton from "./like-button";
import { formatTimestamp } from "@/lib/utils";
import LeaveComment from "./leave-comment";
import { useState } from "react";

export default function Reply({ item }: { item: ReplyType }) {
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {};

  return (
    <div key={item.id} className="flex gap-1 py-2">
      <UserAvatar reply={true} src={item.author.username} />
      <div>
        <p className="text-sm font-semibold">{item.author.username}</p>
        <p className="text-sm">{item.body}</p>
        <div className="flex items-center gap-3">
          <p className="text-sm text-gray-500">
            {formatTimestamp(item.timestamp)}
          </p>
          <div className="flex items-center text-sm">
            <LikeButton comment={true} />
            {item.likes > 0 && (
              <span className="text-rose-500">{item.likes}</span>
            )}
          </div>
          <LeaveComment
            open={open}
            setOpen={setOpen}
            handleSubmit={handleSubmit}
            reply={true}
            username={item.author.username}
          />
        </div>
      </div>
    </div>
  );
}
