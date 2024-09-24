import { commentsData } from "@/data/posts";
import Comment from "./comment";

export default function Comments() {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-2">{`${
        commentsData.commentCount
      } ${commentsData.commentCount === 1 ? "comment" : "comments"}`}</p>
      {commentsData.comments.length > 0 &&
        commentsData.comments.map((item) => (
          <Comment key={item.id} comment={item} />
        ))}
    </div>
  );
}
