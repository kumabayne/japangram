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
