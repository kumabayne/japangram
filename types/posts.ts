export type MediaType = {
  alt: string;
  height: number;
  src: string;
  type: string;
  width: number;
};

export type PostType = {
  author: {
    avatar: string;
    username: string;
  };
  body: string;
  id: string;
  media: MediaType[];
  timestamp: number;
};

export type PostsType = {
  posts: PostType[];
};

interface IComment {
  author: {
    avatar: string;
    username: string;
  };
  body: string;
  id: string;
  timestamp: number;
  likes: number;
}

export type CommentType = IComment & {
  replyCount: number;
  replies: ReplyType[] | [];
};

export type CommentsType = {
  commentCount: number;
  comments: CommentType[] | [];
};

export type ReplyType = IComment & { parentId: string };
