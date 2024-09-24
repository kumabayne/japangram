import { IconChevronRight } from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "./ui/dialog";
import { Dispatch, SetStateAction } from "react";

export default function ReportModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const reasonForReport = [
    "I just don't like it",
    "Bullying or unwanted contact",
    "Suicide, self-injury or eating disorders",
    "Violence, hate or exploitation",
    "Selling or promoting restricted items",
    "Nudity or sexual activity",
    "Scam, fraud or spam",
    "False Information",
  ];

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogOverlay className="z-[70]" />
      <DialogContent className="CustomDialog z-[70] max-w-xs rounded-2xl p-0 gap-0">
        <DialogHeader className="border-b p-2">
          <DialogTitle className="font-semibold text-sm text-center">
            Report
          </DialogTitle>
        </DialogHeader>
        <div className="py-2">
          <div className="py-2 px-4">
            <h3 className="text-sm font-semibold">
              Why are you reporting this post?
            </h3>
          </div>
          <ul>
            {reasonForReport.map((item) => (
              <li key={item}>
                <button
                  className="flex gap-2 items-center justify-between py-2 px-4 text-sm w-full"
                  onClick={handleClick}
                  type="button"
                >
                  {item}
                  <IconChevronRight className="w-6 h-6" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
