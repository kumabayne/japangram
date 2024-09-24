"use client";

import { IconDotsVertical } from "@tabler/icons-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Dispatch, SetStateAction, useState } from "react";

export default function PostActions({
  setReportModalOpen,
  setShareDrawerOpen,
}: {
  setReportModalOpen: Dispatch<SetStateAction<boolean>>;
  setShareDrawerOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [open, setOpen] = useState(false);

  const handleReport = () => {
    setReportModalOpen(true);
    setOpen(false);
  };

  const handleShare = () => {
    setShareDrawerOpen(true);
    setOpen(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <IconDotsVertical className="w-6 h-6" />
        <span className="sr-only">Open</span>
      </DialogTrigger>
      <DialogOverlay className="z-[70]" />
      <DialogContent className="p-0 CustomDialog z-[70] max-w-xs rounded-2xl gap-0">
        <DialogHeader className="p-2 border-b">
          <DialogTitle className="font-semibold text-sm text-center">
            More Actions
          </DialogTitle>
        </DialogHeader>
        <div className="divide-y">
          <div>
            <button
              className="p-2 text-red-600 text-sm font-semibold w-full text-center"
              onClick={handleReport}
              type="button"
            >
              Report
            </button>
          </div>
          <div>
            <button
              className="p-2 text-sm w-full text-center"
              onClick={handleShare}
              type="button"
            >
              Share to...
            </button>
          </div>
          <div>
            <button
              className="p-2 text-sm w-full text-center"
              onClick={handleCopy}
              type="button"
            >
              Copy link
            </button>
          </div>
        </div>
        <DialogFooter className="border-t sm:justify-center">
          <DialogClose className="text-sm p-2">Cancel</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
