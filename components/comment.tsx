import { CommentType, ReplyType } from "@/types/posts";
import UserAvatar from "./user-avatar";
import LikeButton from "./like-button";
import { formatTimestamp } from "@/lib/utils";
import LeaveComment from "./leave-comment";
import { useState } from "react";
import { replies23 } from "@/data/posts";
import Reply from "./reply";

export default function Comment({ comment }: { comment: CommentType }) {
  const [open, setOpen] = useState(false);
  const [replies, setReplies] = useState<ReplyType[]>([]);
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    const newReplies: ReplyType[] = replies23.slice(
      index * 10,
      index * 10 + 10
    );
    setReplies([...replies, ...newReplies]);
    setIndex(index + 1);
  };

  const handleSubmit = () => {};

  return (
    <div className="py-2">
      <div className="flex gap-1">
        <UserAvatar src={comment.author.username} />
        <div>
          <p className="text-sm font-semibold">{comment.author.username}</p>
          <p className="text-sm">{comment.body}</p>
          <div className="flex items-center gap-3">
            <p className="text-sm text-gray-500">
              {formatTimestamp(comment.timestamp)}
            </p>
            <div className="flex items-center text-sm">
              <LikeButton comment={true} />
              {comment.likes > 0 && (
                <span className="text-rose-500">{comment.likes}</span>
              )}
            </div>
            <LeaveComment
              open={open}
              setOpen={setOpen}
              handleSubmit={handleSubmit}
              reply={true}
              username={comment.author.username}
            />
          </div>
          {comment.replyCount > 0 && (
            <div>
              {replies.map((item) => (
                <Reply key={item.id} item={item} />
              ))}
              {comment.replyCount - replies.length > 0 && (
                <button
                  className="text-gray-500 text-xs font-bold"
                  onClick={handleClick}
                  type="button"
                >{`(${comment.replyCount - replies.length}) Replies`}</button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
