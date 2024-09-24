import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandX,
  IconCornerUpRight,
  IconLink,
  IconMail,
  IconMessageCircle,
  IconQrcode,
} from "@tabler/icons-react";

const shareTo = [
  { id: 1, text: "Share to Instagram", icon: IconBrandInstagram },
  { id: 2, text: "Share to Facebook", icon: IconBrandFacebook },
  { id: 3, text: "Share to WhatsApp", icon: IconBrandWhatsapp },
  { id: 4, text: "Share to X", icon: IconBrandX },
  { id: 5, text: "Share via iMessage", icon: IconMessageCircle },
  { id: 6, text: "Share via Email", icon: IconMail },
  { id: 7, text: "QR Code", icon: IconQrcode },
  { id: 8, text: "Copy link", icon: IconLink },
  { id: 9, text: "See all", icon: IconCornerUpRight },
];

export default function ShareDrawer({ open, setOpen }) {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="hidden">Open</DrawerTrigger>
      <DrawerOverlay className="z-[70]" />
      <DrawerContent className="z-[70]">
        <DrawerHeader>
          <DrawerTitle className="text-sm font-semibold">
            Share to...
          </DrawerTitle>
          <div>
            <ul>
              {shareTo.map((item) => (
                <button
                  key={item.id}
                  className="text-sm flex gap-2 items-center p-2 w-full"
                  type="button"
                >
                  <item.icon className="w-6 h-6" />
                  {item.text}
                </button>
              ))}
            </ul>
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose className="text-sm">Cancel</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
