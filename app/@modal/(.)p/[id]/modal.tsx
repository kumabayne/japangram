"use client";

import { usePathname, useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

export function Modal({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(true);

  function checkModal() {
    if (window && window.innerWidth >= 768) {
      setModal(true);
    } else {
      setModal(false);
    }
  }

  function handleChange() {
    router.back();
  }

  useEffect(() => {
    checkModal();

    window.addEventListener("resize", checkModal);

    return window.removeEventListener("resize", checkModal);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [open]);

  useEffect(() => {
    if (pathname !== `/p/${id}`) {
      setOpen(false);
    }
  }, [pathname, id]);

  return createPortal(
    <Dialog
      open={open}
      defaultOpen={true}
      onOpenChange={(open) => !open && handleChange()}
      modal={modal}
    >
      <DialogOverlay />
      <DialogContent
        onInteractOutside={(e) => {
          if (!modal) {
            e.preventDefault();
          }
        }}
        className={className}
      >
        {children}
      </DialogContent>
    </Dialog>,
    document.getElementById("modal-root")!
  );
}
