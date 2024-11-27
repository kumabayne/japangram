"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Session } from "next-auth";
import UserAvatar from "./user-avatar";
import { signOut, UpdateSession } from "next-auth/react";

export default function ProfileMenu({
  session,
  align = "end",
}: {
  session:
    | Session
    | {
        update: UpdateSession;
        data: Session;
        status: "authenticated";
      };
  align?: "end" | "center" | "start";
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {"user" in session && session.user && (
          <UserAvatar
            src={session.user?.image || ""}
            alt={session.user.displayName}
          />
        )}
        <span className="sr-only">Profile</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        <DropdownMenuItem asChild>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
