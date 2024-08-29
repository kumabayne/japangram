import { NavigationType } from "@/types/layout";
import {
  IconCirclePlus,
  IconCompass,
  IconHome,
  IconSearch,
  IconUser,
} from "@tabler/icons-react";

export const navigationData: NavigationType[] = [
  {
    id: 1,
    href: "/",
    text: "Home",
    icon: IconHome,
  },
  {
    id: 2,
    href: "/e",
    text: "Explore",
    icon: IconCompass,
  },
  {
    id: 3,
    href: "/c",
    text: "Create",
    icon: IconCirclePlus,
  },
  {
    id: 4,
    href: "/s",
    text: "Search",
    icon: IconSearch,
  },
  {
    id: 5,
    href: "/u/profile",
    text: "Profile",
    icon: IconUser,
  },
];
