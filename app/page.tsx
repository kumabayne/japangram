import Container from "@/components/container";
import FeedSkeleton from "@/components/feed-skelton";
import { postsData } from "@/data/posts";

import dynamic from "next/dynamic";

const DynamicFeed = dynamic(() => import("../components/feed"), {
  ssr: false,
  loading: () => <FeedSkeleton />,
});

export default function Home() {
  return (
    <main className="my-[49px] py-2 md:ml-16 md:my-0 md:py-4 xl:py-6 xl:ml-56">
      <Container>
        <DynamicFeed items={postsData} />
      </Container>
    </main>
  );
}
