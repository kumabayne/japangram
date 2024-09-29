import { NavigationType } from "@/types/layout";
import {
  IconCirclePlus,
  IconCompass,
  IconSearch,
  IconTorii,
  IconUser,
} from "@tabler/icons-react";

export const navigationData: NavigationType[] = [
  {
    id: 1,
    href: "/",
    text: "Home",
    icon: IconTorii,
  },
  {
    id: 2,
    href: "/explore",
    text: "Explore",
    icon: IconCompass,
  },
  {
    id: 3,
    href: "/create",
    text: "Create",
    icon: IconCirclePlus,
  },
  {
    id: 4,
    href: "/search",
    text: "Search",
    icon: IconSearch,
  },
  {
    id: 5,
    href: "/user/profile",
    text: "Profile",
    icon: IconUser,
  },
];
