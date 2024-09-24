import HamburgerMenu from "./hamburger-menu";

export default function Header() {
  return (
    <header
      className="p-2 border-b fixed top-0 left-0 right-0 bg-background md:hidden dark:bg-zinc-950 dark:border-zinc-800 z-[60] md:z-40"
      aria-label="banner"
    >
      <HamburgerMenu />
    </header>
  );
}
