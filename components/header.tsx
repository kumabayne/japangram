import { auth } from "@/auth";
import HamburgerMenu from "./hamburger-menu";
import ProfileMenu from "./profile-menu";
import { Button } from "./ui/button";
import Link from "next/link";

export default async function Header() {
  const session = await auth();

  return (
    <header
      className="p-2 border-b fixed top-0 left-0 right-0 bg-background md:hidden dark:bg-zinc-950 dark:border-zinc-800 z-[60] md:z-40 flex gap-2 justify-between"
      aria-label="banner"
    >
      <HamburgerMenu />
      {session && session.user ? (
        <ProfileMenu session={session} />
      ) : (
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      )}
    </header>
  );
}
