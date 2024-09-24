"use client";

import { IconMessage, IconSend } from "@tabler/icons-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Label } from "./ui/label";
import { Dispatch, FormEventHandler, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";

export default function LeaveComment({
  open,
  setOpen,
  handleSubmit,
  reply,
  username,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  reply?: boolean;
  username?: string;
}) {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button type="button">
          <IconMessage
            className={cn("w-6 h-6", reply && "h-4 w-4 text-gray-500")}
            stroke={reply ? "2" : "1.5"}
          />
          <span className="sr-only">
            {reply ? "Leave reply" : "Leave comment"}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-1 z-[70]" align="start">
        <form className="relative" onSubmit={handleSubmit}>
          <Label className="sr-only" htmlFor="comment">
            Comment
          </Label>
          <Textarea
            className="pr-10"
            rows={1}
            id="comment"
            name="comment"
            defaultValue={reply ? `@${username} ` : ""}
            placeholder={reply ? "Leave a reply..." : "Leave a comment..."}
            aria-label="leave-comment"
            onFocus={(e) =>
              e.target.setSelectionRange(
                e.target.value.length,
                e.target.value.length
              )
            }
            required
          />
          <div className="absolute right-3 top-3 inline-flex">
            <button type="submit">
              <IconSend className="w-6 h-6" stroke="1.5" />
              <span className="sr-only">
                {reply ? "Post reply" : "Post comment"}
              </span>
            </button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
