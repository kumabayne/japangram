"use client";

import { PostType } from "@/types/posts";
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import Image from "next/image";
import { IconChevronLeft, IconSend } from "@tabler/icons-react";
import UserAvatar from "./user-avatar";
import { cn } from "@/lib/utils";
import PostActions from "./post-actions";
import ShareDrawer from "./share-drawer";
import { FormEvent, useState } from "react";
import ReportModal from "./report-modal";
import SaveButton from "./save-button";
import LikeButton from "./like-button";
import FollowButton from "./follow-button";
import LeaveComment from "./leave-comment";
import { commentsData } from "@/data/posts";
import Comments from "./comments";

export default function PostCard({
  item,
  modal,
}: {
  item: PostType;
  modal: boolean;
}) {
  const [shareDrawerOpen, setShareDrawerOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [commentPopoverOpen, setCommentPopoverOpen] = useState(false);
  const [comments, setComments] = useState(commentsData);
  const Header = modal ? DialogHeader : "div";
  const Title = modal ? DialogTitle : "h1";
  const Description = modal ? DialogDescription : "p";
  const Footer = modal ? DialogFooter : "div";

  const leaveComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const comment = formData.get("comment");
    const commentsContainer = document.getElementById("comments");

    if (!comment) return;

    if (comment && typeof comment === "string") {
      const trimmedComment = comment.trim();
      if (trimmedComment.length < 1) return;
      // setComments([trimmedComment, ...comments]);
    }

    if (commentsContainer) {
      commentsContainer.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    setCommentPopoverOpen(false);
  };

  return (
    <div
      className={cn(
        "lg:flex",
        !modal && "lg:shadow-md lg:rounded-2xl lg:border xl:mx-auto"
      )}
    >
      <div
        className={cn(
          "aspect-square bg-black justify-center items-center hidden lg:flex",
          modal && "lg:min-w-[500px]",
          !modal &&
            "md:aspect-auto lg:rounded-s-2xl lg:min-w-[431px] dark:bg-neutral-900 xl:min-w-[512px] xl:max-w-[512px] overflow-hidden"
        )}
      >
        {item.media.map((item) => (
          <Image
            key={item.src}
            className={cn(
              "aspect-square object-contain",
              !modal && "md:aspect-auto md:max-h-[500px] lg:min-h-[500px]"
            )}
            src={item.src}
            width={item.width}
            height={item.height}
            alt={item.alt}
            priority={!modal}
          />
        ))}
      </div>
      <div
        className={cn(
          "lg:min-w-[400px] lg:flex lg:flex-col lg:grow",
          !modal &&
            "xl:min-w-[512px] xl:grow-0 lg:dark:bg-black lg:rounded-e-2xl"
        )}
      >
        <Header
          className={cn("space-y-0 lg:shadow-sm", !modal && "lg:border-b")}
        >
          <div className="p-2 flex items-center gap-2 justify-between">
            <div className="flex items-center gap-2">
              {modal && (
                <DialogClose asChild>
                  <button className="p-1 flex md:hidden" type="button">
                    <IconChevronLeft className="w-6 h-6" />
                    <span className="sr-only">Back</span>
                  </button>
                </DialogClose>
              )}
              <div className="flex items-center gap-1">
                <UserAvatar
                  src="https://github.com/shadcn.png"
                  alt="kumabayne"
                />
                <p className="text-sm font-semibold">kumabayne</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FollowButton />
              <PostActions
                setReportModalOpen={setReportModalOpen}
                setShareDrawerOpen={setShareDrawerOpen}
              />
              <ReportModal
                open={reportModalOpen}
                setOpen={setReportModalOpen}
              />
              <ShareDrawer
                open={shareDrawerOpen}
                setOpen={setShareDrawerOpen}
              />
            </div>
          </div>
          <div
            className={cn(
              "aspect-square bg-black dark:bg-neutral-900 flex justify-center items-center lg:hidden",
              !modal && "md:aspect-auto"
            )}
          >
            {item.media.map((item) => (
              <Image
                key={item.src}
                className={cn(
                  "aspect-square object-contain",
                  !modal && "md:aspect-auto md:max-h-[500px]"
                )}
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.alt}
                priority={!modal}
              />
            ))}
          </div>
        </Header>
        <Footer
          className={cn(
            "flex-col lg:relative lg:h-full lg:overflow-y-scroll lg:py-4 lg:mb-4",
            !modal && "grow"
          )}
        >
          <div className="p-4 lg:absolute lg:h-[calc(100%-16px)] lg:px-4 lg:py-0">
            <div className="mb-2">
              <div className="flex items-center gap-2 mb-1 justify-between">
                <div className="flex items-center gap-2">
                  <LikeButton />
                  <LeaveComment
                    open={commentPopoverOpen}
                    setOpen={setCommentPopoverOpen}
                    handleSubmit={leaveComment}
                  />
                  <button
                    onClick={() => setShareDrawerOpen(true)}
                    type="button"
                  >
                    <IconSend className="w-6 h-6" stroke="1.5" />
                  </button>
                </div>
                <div>
                  <SaveButton />
                </div>
              </div>
              <span className="text-sm font-semibold">100 Likes</span>
            </div>
            <Title className="sr-only"></Title>
            <Description
              className="text-sm text-left"
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
            <div id="comments" className="mt-4 border-t py-4">
              <Comments />
            </div>
          </div>
        </Footer>
      </div>
    </div>
  );
}
