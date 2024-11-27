"use client";

import { NavigationType } from "@/types/layout";
import Link from "next/link";
import HamburgerMenu from "./hamburger-menu";
import ProfileMenu from "./profile-menu";
import { useMediaQuery } from "react-responsive";
import { useSession } from "next-auth/react";
import {
  IconCirclePlus,
  IconCompass,
  IconSearch,
  IconTorii,
  IconUser,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const { data: session } = useSession();
  const isXl = useMediaQuery({ query: "(min-width: 1280px)" });

  return (
    <nav className="fixed bottom-0 left-0 right-0 px-2 border-t bg-background md:top-0 md:right-auto md:p-2 md:border-t-0 md:border-r xl:min-w-56 dark:bg-zinc-950 dark:border-zinc-800 md:justify-between md:flex md:flex-col z-[60] md:z-40 md:items-center xl:items-stretch">
      <ul className="grid grid-cols-5 md:flex md:flex-col">
        <li className="flex justify-center xl:justify-normal">
          <Link
            className="inline-flex md:p-3 xl:w-full xl:gap-4 xl:items-center p-3"
            href="/"
          >
            <IconTorii className="w-6 h-6" stroke={1.5} />
            <span className="sr-only xl:not-sr-only font-medium">Home</span>
          </Link>
        </li>
        <li className="flex justify-center xl:justify-normal">
          <Link
            className="inline-flex md:p-3 xl:w-full xl:gap-4 xl:items-center p-3"
            href="/explore"
          >
            <IconCompass className="w-6 h-6" stroke={1.5} />
            <span className="sr-only xl:not-sr-only font-medium">Explore</span>
          </Link>
        </li>
        <li className="flex justify-center xl:justify-normal">
          <Link
            className="inline-flex md:p-3 xl:w-full xl:gap-4 xl:items-center p-3"
            href={session?.user?.displayName ? `/create` : "/login"}
          >
            <IconCirclePlus className="w-6 h-6" stroke={1.5} />
            <span className="sr-only xl:not-sr-only font-medium">Create</span>
          </Link>
        </li>
        <li className="flex justify-center xl:justify-normal">
          <Link
            className="inline-flex md:p-3 xl:w-full xl:gap-4 xl:items-center p-3"
            href="/search"
          >
            <IconSearch className="w-6 h-6" stroke={1.5} />
            <span className="sr-only xl:not-sr-only font-medium">Search</span>
          </Link>
        </li>
        <li className="flex justify-center xl:justify-normal">
          <Link
            className="inline-flex md:p-3 xl:w-full xl:gap-4 xl:items-center p-3"
            href={
              session?.user?.displayName
                ? `/u/${session.user.displayName}`
                : "/login"
            }
          >
            <IconUser className="w-6 h-6" stroke={1.5} />
            <span className="sr-only xl:not-sr-only font-medium">Profile</span>
          </Link>
        </li>
      </ul>
      <div
        className={cn(
          "hidden md:block xl:flex xl:justify-between",
          session && "xl:flex-row-reverse"
        )}
      >
        {session && (
          <ProfileMenu session={session} align={isXl ? "end" : "start"} />
        )}
        <HamburgerMenu />
      </div>
    </nav>
  );
}
