import PostCard from "@/components/post-card";
import { Modal } from "./modal";
import { postsData } from "@/data/posts";

export default function PostModal({ params }: { params: { id: string } }) {
  const post = postsData.posts.find((post) => post.id === params.id);

  return (
    <Modal
      className="p-0 CustomDialog border-none gap-0 max-h-screen h-full overflow-y-auto pt-[49px] pb-[49px] md:py-0 md:max-h-[90%] lg:max-w-[900px]"
      id={params.id}
    >
      {post && <PostCard item={post} modal={true} />}
    </Modal>
  );
}
