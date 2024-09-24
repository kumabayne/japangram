import PostCard from "@/components/post-card";
import { postsData } from "@/data/posts";

export const dynamicParams = false;

export default function PostPage({ params }: { params: { id: string } }) {
  const post = postsData.posts.find((post) => post.id === params.id);

  return (
    <div className="xl:ml-56 pt-[49px] pb-[49px] md:py-0 md:ml-[65px] md:flex md:flex-col md:min-h-screen lg:justify-center lg:px-16 bg-background lg:bg-transparent xl:px-0">
      {post && <PostCard item={post} modal={false} />}
    </div>
  );
}
