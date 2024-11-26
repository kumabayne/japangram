"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();

  return createPortal(
    <Dialog defaultOpen={true} onOpenChange={() => router.back()}>
      <DialogContent className="max-w-[90vw] rounded-2xl">
        {children}
      </DialogContent>
    </Dialog>,
    document.getElementById("modal-root")!
  );
}
